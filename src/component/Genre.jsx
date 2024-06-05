import { useState, useEffect } from 'react';
import hotContentstyle from '../css/HotContent.module.css';
import HotContentUpArrow from '../svg/HotContentUpArrow';
import HotContentDownArrow from '../svg/HotContentDownArrow';

const fetchMoviesByGenre = async (genre) => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    const currentDate = new Date().toISOString().split('T')[0];
    // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genre}&sort_by=popularity.desc&primary_release_date.lte=${currentDate}&page=1`;
   
    // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&sort_by=vote_average.desc&with_genres=${genre}&page=1`;
    const url= `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko-KR&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    //eturn data.results;
    const topRatedMovies = data.results;
        
    // Filter movies by genre
    const filteredMovies = topRatedMovies.filter(movie =>
        movie.genre_ids.includes(genre)
    );

    return filteredMovies;
};

export default function Genre({ selectedGenre }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (selectedGenre) {
            fetchMoviesByGenre(selectedGenre).then(setMovies);
        }
    }, [selectedGenre]);

    if (!selectedGenre) return null;

    return (
        <div className={hotContentstyle.hotContent__group}>
            {movies.length > 0 ? (
                movies.slice(0, 5).map((movie, index) => (
                    <button key={movie.id} className={hotContentstyle.hotContent__group__element}>
                        <p>{index + 1}</p>
                        <img src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} alt={movie.title} />
                        <div className={hotContentstyle.hotContent__content__text__group}>
                            <p>{movie.title}</p>
                        </div>
                        {index % 2 === 0 ? <HotContentUpArrow /> : <HotContentDownArrow />}
                    </button>
                ))
            ) : (
                <p>영화 데이터를 불러오는 중...</p>
            )}
        </div>
    );
}
