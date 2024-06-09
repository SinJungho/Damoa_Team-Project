import React, { useState, useEffect } from 'react';
import style from '../css/UpcomingPage.module.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function UpcomingContent() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 상태
    const [selectedMovieDetails, setSelectedMovieDetails] = useState(null); // 추가: 선택한 영화의 상세 정보 상태
    const [modalOpen, setModalOpen] = useState(false); // 모달 상태

    useEffect(() => {
        const fetchMovies = async () => {
            const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
            const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
            const response = await fetch(url);
            const data = await response.json();
            setMovies(data.results);
        };

        fetchMovies();
    }, []);

    const openModal = async (movie) => {
        setSelectedMovie(movie);
        // 선택된 영화의 상세 정보 가져오기
        const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
        const detailsUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`;
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
        <div className={style[`Upcoming__content-wrap`]}>
         {movies.map((movie) => (
                <a className={style.Upcoming__content} href="#"  onClick={() => openModal(movie)}>
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                    </div>
                </a>
            ))}
            {selectedMovie && (
                <Modal
                    isOpen={modalOpen}
                    onRequestClose={closeModal}
                    className={style.Modal}
                    overlayClassName={style.Overlay}
                >
                    <button className={style.ModalCloseButton} onClick={closeModal}>
                        &times;
                    </button>
                    <div>
                        <h2>{selectedMovie.title}</h2>
                        <p>{selectedMovie.release_date}</p>
                        {selectedMovieDetails && ( // 추가: 선택된 영화의 상세 정보가 있을 때만 표시
                            <div>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${selectedMovieDetails.youtube_trailer_id}`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                                <p>장르: {selectedMovieDetails.genres.map(genre => genre.name).join(', ')}</p>
                                <p>평균 평점: {selectedMovieDetails.vote_average}</p>
                                <p>인기도: {selectedMovieDetails.popularity}</p>
                                <p>설명: {selectedMovieDetails.overview}</p>
                            </div>
                        )}
                    </div>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            )}
        </div>
    );
}
