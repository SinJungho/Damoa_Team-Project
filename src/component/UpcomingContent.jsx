import { useState, useEffect } from 'react';
import style from '../css/UpcomingPage.module.css';
import Modal from 'react-modal';

export default function UpcomingContent() {
    const fetchUpcomingMovies = async () => {
        const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    };

    const fetchMovieDetails = async (movieId) => { // 추가: 영화 상세 정보 가져오는 함수
        const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    };

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); // 선택한 영화 상태
    const [selectedMovieDetails, setSelectedMovieDetails] = useState(null); // 추가: 선택한 영화의 상세 정보 상태
    const [modalOpen, setModalOpen] = useState(false); // 모달 상태

    useEffect(() => {
        const getMovies = async () => {
            const upcomingMovies = await fetchUpcomingMovies();
            setMovies(upcomingMovies);
        };

        getMovies();
    }, []);

    const openModal = async (movie) => {
        setSelectedMovie(movie);
        // 선택된 영화의 상세 정보 가져오기
        const movieDetails = await fetchMovieDetails(movie.id);
        setSelectedMovieDetails(movieDetails);
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
                    className={style.modal}
                    style={{
                        overlay: { backgroundColor: 'rgba(33, 33, 33, 0.75)' },
                        content: { zIndex: 1500 },
                    }}
                >
                    <div>
                        <img src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                        <h2>{selectedMovie.title}</h2>
                        <p>{selectedMovie.release_date}</p>
                        {selectedMovieDetails && ( // 추가: 선택된 영화의 상세 정보가 있을 때만 표시
                            <div>
                                <p>설명: {selectedMovieDetails.overview}</p>
                                <p>장르: {selectedMovieDetails.genres.map(genre => genre.name).join(', ')}</p>
                                <p>평균 평점: {selectedMovieDetails.vote_average}</p>
                                <p>인기도: {selectedMovieDetails.popularity}</p>
                            </div>
                        )}
                    </div>
                    <button onClick={closeModal}>Close</button>
                </Modal>
            )}
        </div>
    );
}
