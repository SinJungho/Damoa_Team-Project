import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MainBenner.module.css';
import { ButtonIcon } from '../svg/MainBennerIcon';
import { ReactComponent as SvgIconLeft } from '../svg/SvgIconLeft.svg';
import { ReactComponent as SvgIconRight } from '../svg/SvgIconRight.svg';
import { ReactComponent as PlayIcon } from '../svg/PlayIcon.svg';
import { ReactComponent as PauseIcon } from '../svg/PauseIcon.svg';
import { ReactComponent as MuteIcon } from '../svg/MuteIcon.svg';
import { ReactComponent as UnmuteIcon } from '../svg/UnmuteIcon.svg';

const fetchPopularMovieVideos = async () => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=1`;
    try {
        const popularResponse = await fetch(popularUrl);
        const popularData = await popularResponse.json();
        const videos = await Promise.all(
            popularData.results.slice(0, 10).map(async (movie) => {
                const videoUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${apiKey}&language=ko-KR`;
                const videoResponse = await fetch(videoUrl);
                const videoData = await videoResponse.json();
                return videoData.results[0] ? videoData.results[0].key : null;
            })
        );

        return videos.filter((video) => video !== null); // null 값 제거
    } catch (error) {
        console.error('Failed to fetch videos:', error);
        return [];
    }
};

export default function MainBenner() {
    const [videos, setVideos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const playerRef = useRef(null);
    const [isAPIReady, setIsAPIReady] = useState(false);

    useEffect(() => {
        const loadAPI = () => {
            if (!window.YT) {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                window.onYouTubeIframeAPIReady = () => {
                    setIsAPIReady(true);
                };
            } else {
                setIsAPIReady(true);
            }
        };

        loadAPI();
    }, []);

    useEffect(() => {
        const loadVideos = async () => {
            setIsLoading(true);
            setError(false);
            const videoData = await fetchPopularMovieVideos();
            if (videoData.length > 0) {
                setVideos(videoData);
            } else {
                setError(true);
            }
            setIsLoading(false);
        };

        if (isAPIReady) {
            loadVideos();
        }
    }, [isAPIReady]);

    useEffect(() => {
        let timer;
        if (isLoading) {
            timer = setTimeout(() => {
                setError(true);
                setIsLoading(false);
            }, 3000); // 3초 후에 에러 상태로 전환
        }

        return () => clearTimeout(timer);
    }, [isLoading]);

    useEffect(() => {
        if (isAPIReady && videos.length > 0) {
            initializePlayer(videos[currentIndex]);
        }
    }, [isAPIReady, videos, currentIndex]);

    useEffect(() => {
        if (isAPIReady && videos.length > 0) {
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            playVideo();
                        } else {
                            pauseVideo();
                        }
                    });
                },
                { threshold: 0.5 }
            );

            const videoElement = document.getElementById('youtube-player');
            if (videoElement) {
                observer.observe(videoElement);
            }

            return () => {
                if (videoElement) {
                    observer.unobserve(videoElement);
                }
            };
        }
    }, [isAPIReady, videos]);

    const initializePlayer = (videoId) => {
        if (playerRef.current) {
            playerRef.current.destroy();
        }
        playerRef.current = new window.YT.Player('youtube-player', {
            videoId: videoId,
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange,
            },
        });
    };

    const onPlayerReady = (event) => {
        event.target.mute(); // 음소거 상태에서 자동 재생 시도
        event.target.playVideo();
        setIsPlaying(true);
        setTimeout(() => {
            if (!isMuted) {
                event.target.unMute(); // 일정 시간 후 음소거 해제
            }
        }, 300); // 0.3초 후 음소거 해제
    };

    const onPlayerStateChange = (event) => {
        if (event.data === window.YT.PlayerState.ENDED) {
            event.target.playVideo();
        }
    };

    const playVideo = () => {
        if (playerRef.current && typeof playerRef.current.playVideo === 'function') {
            playerRef.current.playVideo();
            setIsPlaying(true);
        }
    };

    const pauseVideo = () => {
        if (playerRef.current && typeof playerRef.current.pauseVideo === 'function') {
            playerRef.current.pauseVideo();
            setIsPlaying(false);
        }
    };

    const handleMouseOver = () => {
        playVideo();
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % videos.length;
            if (playerRef.current) {
                playerRef.current.loadVideoById(videos[newIndex]);
            }
            return newIndex;
        });
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = (prevIndex - 1 + videos.length) % videos.length;
            if (playerRef.current) {
                playerRef.current.loadVideoById(videos[newIndex]);
            }
            return newIndex;
        });
    };

    const handlePlayPause = () => {
        if (playerRef.current) {
            if (isPlaying) {
                pauseVideo();
            } else {
                playVideo();
            }
        }
    };

    const handleMuteUnmute = () => {
        if (playerRef.current) {
            if (isMuted) {
                playerRef.current.unMute();
            } else {
                playerRef.current.mute();
            }
            setIsMuted(!isMuted);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div className={styles.container}>
            {isLoading ? (
                <div className={styles.loading}>로딩 중...</div>
            ) : error ? (
                <div className={styles.errorMessage}>새로고침 해주세요</div>
            ) : videos.length > 0 ? (
                <div className={styles.videoWrapper} onMouseOver={handleMouseOver}>
                    <div id="youtube-player" className={styles.video}></div>
                </div>
            ) : (
                <div className={styles.errorMessage}>새로고침 해주세요</div>
            )}
            <div className={styles.leftButton} onClick={handlePrev}>
                <SvgIconLeft className={styles.svgIcon} />
            </div>
            <div className={styles.rightButton} onClick={handleNext}>
                <SvgIconRight className={styles.svgIcon} />
            </div>
            <div className={styles.controlButtons}>
                <div className={styles.playPauseButton} onClick={handlePlayPause}>
                    {isPlaying ? <PauseIcon className={styles.svgIcon} /> : <PlayIcon className={styles.svgIcon} />}
                </div>
                <div className={styles.muteUnmuteButton} onClick={handleMuteUnmute}>
                    {isMuted ? <MuteIcon className={styles.svgIcon} /> : <UnmuteIcon className={styles.svgIcon} />}
                </div>
            </div>
            <div className={`${styles.contentWrapper} ${!isPlaying ? styles.showText : ''}`}>
                <p className={styles.heading}>지금 최신 작품들을 만나보세요.</p>
                <p className={styles.subheading}>여러가지 최신 작품들의 평점들을 손 쉽게 확인 할 수 있어요.</p>
                {!isPlaying && (
                    <Link to="/review" onClick={scrollToTop} className={styles.buttonTextLink}>
                        <button className={styles.button}>
                            <ButtonIcon className={styles.icon} />
                            <p className={styles.buttonText}>리뷰 보러 가기</p>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
}
