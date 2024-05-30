// src/pages/UpcomigReleases.jsx
import React, { useState, useEffect } from 'react';
import styles from '../css/UpcomigReleases.module.css';
import { ReactComponent as SvgIconLeft } from '../svg/SvgIconLeft.svg';
import { ReactComponent as SvgIconRight } from '../svg/SvgIconRight.svg';

const fetchUpcomingMovies = async () => {
    const apiKey = '0645d9c6c82d9a5b799a9a0a0ff91f6c';
    const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
};

export default function UpcomigReleases() {
    const [movies, setMovies] = useState([]);
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
                    />
                    <div>
                        <p className={styles.boldText}>{movies[index].title}</p>
                        <p className={styles.contentText}>개봉일: {movies[index].release_date}</p>
                        <p className={styles.contentText}>{movies[index].overview}</p>
                    </div>
                </div>
            ) : (
                <p className={styles.contentText}>영화 데이터를 불러오는 중...</p>
            )}
        </div>
    );
}
