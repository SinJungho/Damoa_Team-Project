import React, { useState, useEffect } from 'react';
import hotContentstyle from '../css/HotContent.module.css';
import Languagestyle from '../css/Language.module.css';
import HotContentIcon from '../svg/HotContentIcon';
import HotContentUpArrow from '../svg/HotContentUpArrow';
import HotContentDownArrow from '../svg/HotContentDownArrow';
import Genre from './Genre';

const fetchPopularMovies = async () => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
};

export default function HotContent() {
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);

    useEffect(() => {
        if (!selectedGenre) {
            fetchPopularMovies().then(setMovies);
        }
    }, [selectedGenre]);

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
    };

    return (
        <div className={hotContentstyle.hotContent}>
            <div className={hotContentstyle.hotContent__content}>
                <HotContentIcon />
                <p>{selectedGenre ? '장르별 인기 컨텐츠' : '지금 인기 있는 컨텐츠'}</p>
            </div>

            <div className={Languagestyle[`language__btn-group`]}>
                <button onClick={() => handleGenreClick(null)}>전체</button>
                <button onClick={() => handleGenreClick(80)}>범죄</button>
                <button onClick={() => handleGenreClick(35)}>코미디</button>
                <button onClick={() => handleGenreClick(18)}>드라마</button>
                <button onClick={() => handleGenreClick(12)}>모험</button>
                <button onClick={() => handleGenreClick(10751)}>키즈</button>
                <button onClick={() => handleGenreClick(28)}>액션</button>
                <button onClick={() => handleGenreClick(14)}>판타지</button>
                <button onClick={() => handleGenreClick(16)}>애니메이션</button>
                <button onClick={() => handleGenreClick(53)}>스릴러</button>
            </div>

            {selectedGenre ? (
                <Genre selectedGenre={selectedGenre} />
            ) : (
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
            )}
        </div>
    );
}
