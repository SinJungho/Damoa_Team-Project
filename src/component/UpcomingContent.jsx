import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import style from '../css/UpcomingPage.module.css';

Modal.setAppElement('#root');

export default function UpcomingContent() {
    const fetchUpcomingMovies = async () => {
        const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    };

    const [movies, setMovies] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            const upcomingMovies = await fetchUpcomingMovies();
            setMovies(upcomingMovies);
        };

        getMovies();
    }, []);

    const openModal = (movie) => {
        setSelectedMovie(movie);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedMovie(null);
    };

    return (
        <div className={style[`Upcoming__content-wrap`]}>
            {movies.map((movie) => (
                <a className={style.Upcoming__content} href="#" onClick={() => openModal(movie)} key={movie.id}>
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                    </div>
                </a>
            ))}
            {selectedMovie && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Movie Modal"
                    className={style.Modal}
                    overlayClassName={style.Overlay}
                >
                    <button className={style.ModalCloseButton} onClick={closeModal}>
                        &times;
                    </button>
                    <h2>{selectedMovie.title}</h2>
                    <div className={style.ModalContent}>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/{유튜브_영상_ID}`} // 여기에 유튜브 영상 URL을 추가
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <p>영화 설명 텍스트...</p>
                    </div>
                </Modal>
            )}
        </div>
    );
}
