import React, { useState, useEffect } from 'react';
import hotContentstyle from '../css/HotContent.module.css';
import Languagestyle from '../css/Language.module.css';
import HotContentIcon from '../svg/HotContentIcon';
import HotContentUpArrow from '../svg/HotContentUpArrow';
import HotContentDownArrow from '../svg/HotContentDownArrow';
import Genre from './Genre';
import Rating from './Rating';

const fetchPopularMovies = async () => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    let allTopRatedMovies = [];

    // 순위 잘림 방지를 위한 페이지 1부터 해당 페이지까지의 데이터를 가져오기 위한 루프
    for (let page = 1; page <= 200; page++) {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=ko-KR&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        const topRatedMovies = data.results;
        allTopRatedMovies = [...allTopRatedMovies, ...topRatedMovies];
    }
    return allTopRatedMovies;
};

const convertRating = (tmdbRating) => {
    // TMDB의 평점은 0부터 10까지, 우리는 0부터 5까지 사용하므로 변환
    return tmdbRating / 2;
};

const filterMoviesByRating = (movies, rating) => {
    // 평점 범위 계산
    const minRating = rating - 0.5; // 선택된 평점에서 0.5 뺀 값
    const maxRating = rating;       // 선택된 평점 값

    // 해당 평점 범위에 해당하는 영화 필터링
    return movies.filter(movie => {
        const movieRating = convertRating(movie.vote_average);
        return movieRating >= minRating && movieRating < maxRating;
    });
};

export default function HotContent() {
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);

    useEffect(() => {
        if (!selectedGenre && !selectedRating) {
            fetchPopularMovies().then(setMovies);
        }
    }, [selectedGenre, selectedRating]);

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
        setSelectedRating(null); // Reset selected rating when a genre is selected
    };

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
        setSelectedGenre(null); // Reset selected genre when a rating is selected
    };

    let filteredMovies = [];
    if (selectedRating) {
        filteredMovies = filterMoviesByRating(movies, selectedRating);
    }

    return (
        <div className={hotContentstyle.hotContent}>
            <Rating onRatingClick={handleRatingClick} />
            
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

            <div className={hotContentstyle.hotContent__content}>
                <HotContentIcon />
                <p>{selectedGenre ? '장르별 인기 컨텐츠' : selectedRating ? '별점별 인기 컨텐츠' : '지금 인기 있는 컨텐츠'}</p>
            </div>

            {selectedGenre ? (
                <Genre selectedGenre={selectedGenre} />
            ) : selectedRating ? (
                <div className={hotContentstyle.hotContent__group}>
                    {filteredMovies.length > 0 ? (
                        filteredMovies.slice(0, 5).map((movie, index) => (
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
                        <p>해당하는 영화가 없습니다.</p>
                    )}
                </div>
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
