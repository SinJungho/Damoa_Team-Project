import React, { useState, useEffect } from 'react';
import hotContentstyle from '../css/HotContent.module.css';
import HotContentIcon from '../svg/HotContentIcon';
import HotContentUpArrow from '../svg/HotContentUpArrow';
import HotContentDownArrow from '../svg/HotContentDownArrow';
import Genre from './Genre';
import MainRating from './MainRating';

// 특정 평점 범위의 영화를 가져오는 함수
const fetchMoviesByRating = async (minRating, maxRating) => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    let allMovies = [];

    for (let page = 1; page <= 100; page++) {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=ko-KR&vote_average.gte=${minRating}&vote_average.lte=${maxRating}&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        const movies = data.results;
        allMovies = [...allMovies, ...movies];
    }
    // 최근 2개월 영화 필터링
    const filteredMovies = allMovies.filter(
        (movie) =>
            movie.vote_average >= minRating &&
            movie.vote_average <= maxRating &&
            new Date(movie.release_date) >= new Date(new Date().setMonth(new Date().getMonth() - 2))
    );

    // 상위 5개 영화 반환
    return filteredMovies.slice(0, 5);
};

// 특정 장르의 영화를 가져오는 함수
const fetchMoviesByGenre = async (genre) => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    let allTopRatedMovies = [];

    for (let page = 1; page <= 20; page++) {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        const topRatedMovies = data.results;
        allTopRatedMovies = [...allTopRatedMovies, ...topRatedMovies];
    }

    // 선택된 장르에 해당하는 영화 필터링
    const filteredMovies = allTopRatedMovies.filter((movie) => movie.genre_ids.includes(genre));

    return filteredMovies;
};

// 인기 있는 영화를 가져오는 함수(전체 버튼)
const fetchPopularMovies = async () => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    let allTopRatedMovies = [];

    for (let page = 1; page <= 200; page++) {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=ko-KR&page=${page}`;
        const response = await fetch(url);
        const data = await response.json();
        const topRatedMovies = data.results;
        allTopRatedMovies = [...allTopRatedMovies, ...topRatedMovies];
    }

    return allTopRatedMovies;
};

export default function HotContent() {
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);

    // 컴포넌트가 처음 렌더링될 때 인기 있는 영화 목록 가져오기
    useEffect(() => {
        fetchPopularMovies().then(setMovies);
    }, []);

    // 선택된 장르 또는 평점이 변경될 때마다 영화 목록 업데이트
    useEffect(() => {
        if (selectedGenre !== null) {
            fetchMoviesByGenre(selectedGenre).then(setMovies);
        } else if (selectedRating !== null) {
            const minRating = (selectedRating - 0.5) * 2;
            const maxRating = selectedRating * 2;
            fetchMoviesByRating(minRating, maxRating).then(setMovies);
        } else {
            fetchPopularMovies().then(setMovies);
        }
    }, [selectedGenre, selectedRating]);

    // 장르를 클릭할 때 호출되는 핸들러 함수
    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
        setSelectedRating(null);
    };

    // 평점을 클릭할 때 호출되는 핸들러 함수
    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
        setSelectedGenre(null);
    };

    return (
        <div className={hotContentstyle.hotContent}>
            <MainRating onRatingClick={handleRatingClick} />
            <Genre onGenreClick={handleGenreClick} />

            {/* 컨텐츠 타이틀 */}
            <div className={hotContentstyle.hotContent__content}>
                <HotContentIcon />
                <p>
                    {selectedGenre
                        ? '장르별 인기 컨텐츠'
                        : selectedRating
                        ? '별점별 인기 컨텐츠'
                        : '지금 인기 있는 컨텐츠'}
                </p>
            </div>

            {/* 영화 목록 */}
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
        </div>
    );
}
