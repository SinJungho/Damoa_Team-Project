import { useState, useEffect } from 'react';
import style from '../css/UpcomingPage.module.css';

export default function UpcomingContent() {
    const fetchUpcomingMovies = async () => {
        const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    };
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const upcomingMovies = await fetchUpcomingMovies();
            setMovies(upcomingMovies);
        };

        getMovies();
    }, []);

    return (
        <div className={style[`Upcoming__content-wrap`]}>
            {movies.map((movie) => (
                <a className={style.Upcoming__content} href="#">
                    <div key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <p>{movie.release_date}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}
