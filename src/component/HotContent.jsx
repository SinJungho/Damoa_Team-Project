import React, { useState, useEffect } from 'react';
import style from '../css/HotContent.module.css';
import HotContentIcon from '../svg/HotContentIcon';
import HotContentUpArrow from '../svg/HotContentUpArrow';
import HotContentDownArrow from '../svg/HotContentDownArrow';

const fetchPopularMovies = async () => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
};

export default function HotContent() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchPopularMovies().then(setMovies);
    }, []);

    return (
        <div className={style.hotContent}>
            <div className={style.hotContent__content}>
                <HotContentIcon />
                <p>지금 인기 있는 컨텐츠</p>
            </div>

            <div className={style.hotContent__group}>
                {movies.length > 0 ? (
                    movies.slice(0, 4).map((movie, index) => (
                        <button key={movie.id} className={style.hotContent__group__element}>
                            <p>{index + 1}</p>
                            <img src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} alt={movie.title} />
                            <div className={style.hotContent__content__text__group}>
                                <p>{movie.title}</p>
                            </div>
                            {index % 2 === 0 ? <HotContentUpArrow /> : <HotContentDownArrow />}
                        </button>
                    ))
                ) : (
                    <p>영화 데이터를 불러오는 중...</p>
                )}
            </div>
        </div>
    );
}
