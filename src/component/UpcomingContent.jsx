import React, { useState, useEffect } from 'react';
import style from '../css/UpcomingPage.module.css';
import Modal from 'react-modal';
import defaultImage from '../img/default_image.png'; // 기본 이미지 경로

Modal.setAppElement('#root');

export default function UpcomingContent() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 상태
    const [selectedMovieDetails, setSelectedMovieDetails] = useState(null); // 추가: 선택한 영화의 상세 정보 상태
    const [modalOpen, setModalOpen] = useState(false); // 모달 상태
    const [isLoading, setIsLoading] = useState(true); // 로딩 상태

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
            let movies = [];
            let page = 1;
            while (movies.length < 300) {
                const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=ko-KR&page=${page}`;
                const response = await fetch(url);
                const data = await response.json();
                movies.push(...data.results);
                if (data.results.length === 0) break; // 더 이상 가져올 영화가 없으면 종료
                page++;
            }

            // 중복 제거 로직
            const uniqueMovies = Array.from(new Set(movies.map((movie) => movie.id))).map((id) => {
                return movies.find((movie) => movie.id === id);
            });

            setMovies(uniqueMovies.slice(0, 300)); // 영화 300개까지 가져오기
            setIsLoading(false); // 로딩 상태 해제
        };

        fetchMovies();
    }, []);

    const openModal = async (movie) => {
        setSelectedMovie(movie);
        // 선택된 영화의 상세 정보 가져오기
        const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
        const detailsUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=ko-KR&append_to_response=videos`;
        const detailsResponse = await fetch(detailsUrl);
        const detailsData = await detailsResponse.json();
        setSelectedMovieDetails(detailsData);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMovie(null);
        setSelectedMovieDetails(null); // 추가: 모달이 닫힐 때 선택된 영화 상세 정보 초기화
        setModalOpen(false);
    };

    return (
        <div className={style.Upcoming__contentWrap}>
            {isLoading ? (
                <p>로딩 중...</p>
            ) : (
                movies.map((movie) => (
                    <a
                        className={style.Upcoming__content}
                        href="#"
                        onClick={(event) => {
                            event.preventDefault(); // 화면 이동 방지
                            openModal(movie);
                        }}
                        key={movie.id}
                    >
                        <div>
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                        : defaultImage
                                }
                                alt={movie.title}
                            />
                            <h2>{movie.title}</h2>
                            <p>{movie.release_date}</p>
                        </div>
                    </a>
                ))
            )}
            {selectedMovie && (
                <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    className={style.Modal}
                    overlayClassName={style.Overlay}
                >
                    <div className={style.ModalContent}>
                        <div className={style.MovieImage}>
                            <img
                                src={
                                    selectedMovie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`
                                        : defaultImage
                                }
                                alt={selectedMovie.title}
                            />
                        </div>
                        <div className={style.MovieDetails}>
                            <h2>{selectedMovie.title}</h2>
                            <p>개봉일: {selectedMovie.release_date}</p>
                            {selectedMovieDetails && (
                                <div className={style.ModalContent__contentGroup}>
                                    {selectedMovieDetails.videos.results.length > 0 ? (
                                        <iframe
                                            width="800"
                                            height="450"
                                            src={`https://www.youtube.com/embed/${selectedMovieDetails.videos.results[0].key}`}
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    ) : (
                                        <p>해당 영화에 대한 예고편이 없습니다.</p>
                                    )}
                                    <p>장르: {selectedMovieDetails.genres.map((genre) => genre.name).join(', ')}</p>
                                    <p>평균 평점: {selectedMovieDetails.vote_average}</p>
                                    <p>인기도: {selectedMovieDetails.popularity}</p>
                                    <p>설명: {selectedMovieDetails.overview}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}
