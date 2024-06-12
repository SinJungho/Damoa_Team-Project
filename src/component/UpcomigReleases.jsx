import React, { useState, useEffect } from 'react';
import styles from '../css/UpcomigReleases.module.css';
import Modal from 'react-modal';
import { ReactComponent as SvgIconLeft } from '../svg/SvgIconLeft.svg';
import { ReactComponent as SvgIconRight } from '../svg/SvgIconRight.svg';
import { useOutletContext } from 'react-router-dom';

Modal.setAppElement('#root');

const fetchUpcomingMovies = async () => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=ko-KR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
};

export default function UpcomigReleases() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 상태
    const [selectedMovieDetails, setSelectedMovieDetails] = useState(null); // 추가: 선택한 영화의 상세 정보 상태
    const [modalOpen, setModalOpen] = useState(false); // 모달 상태
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchUpcomingMovies().then(setMovies);
    }, []);

    const handleNext = () => {
        if (index < movies.length - 1) {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const openModal = async (movie) => {
        setSelectedMovie(movie);
        const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
        const detailsUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=ko-KR&append_to_response=videos`;
        const detailsResponse = await fetch(detailsUrl);
        const detailsData = await detailsResponse.json();
        setSelectedMovieDetails(detailsData);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedMovie(null);
        setSelectedMovieDetails(null);
        setModalOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>기대되는 개봉작</p>
                <div className={styles.iconContainer}>
                    <div className={styles.roundButton} onClick={handlePrev}>
                        <SvgIconLeft className={styles.svgIcon} />
                    </div>
                    <div className={styles.roundButton} onClick={handleNext}>
                        <SvgIconRight className={styles.svgIcon} />
                    </div>
                </div>
            </div>
            {movies.length > 0 ? (
                <div className={styles.contentBlock} key={movies[index].id}>
                    <img
                        className={styles.poster}
                        src={`https://image.tmdb.org/t/p/w200${movies[index].poster_path}`}
                        alt={movies[index].title}
                        onClick={() => openModal(movies[index])}
                    />
                    <div className={styles.content__group}>
                        <p className={styles.boldText}>{movies[index].title}</p>
                        <p className={styles.contentText}>개봉일: {movies[index].release_date}</p>
                        <p className={styles.contentText}>{movies[index].overview}</p>
                    </div>
                </div>
            ) : (
                <p className={styles.contentText}>영화 데이터를 불러오는 중...</p>
            )}
            {selectedMovie && (
                <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    className={styles.Modal}
                    overlayClassName={styles.Overlay}
                >
                    <div className={styles.ModalContent}>
                        <div className={styles.MovieImage}>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
                                alt={selectedMovie.title}
                            />
                        </div>
                        <div className={styles.MovieDetails}>
                            <h2>{selectedMovie.title}</h2>
                            <p>개봉일: {selectedMovie.release_date}</p>
                            {selectedMovieDetails && (
                                <div className={styles.content__group}>
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
