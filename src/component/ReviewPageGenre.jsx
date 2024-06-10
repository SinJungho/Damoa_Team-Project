import React, { useState } from 'react';
import style from '../css/Language.module.css';
import GenreIcon from '../svg/GenreIcon';

export default function ReviewPageGenre() {
    const selectdrating = localStorage.getItem('selectedGenre');
    const [selectedGenre, setSelectedGenre] = useState(selectdrating);

    const handleGenreClick = (genre) => {
        localStorage.setItem('selectedGenre', genre);
        if (localStorage.getItem('selectedGenre') === '전체') {
            localStorage.removeItem('selectedGenre');
            localStorage.removeItem('rating');
            localStorage.removeItem('selectedButton');
        }
        localStorage.setItem('selectedGenre', genre);
        setSelectedGenre(genre);
        window.location.reload();
    };

    return (
        <div className={style.language}>
            <div className={style.language__content}>
                <GenreIcon />
                <p>장르</p>
            </div>
            <div className={style[`language__btn-group`]}>
                {['전체', '범죄', '코미디', '드라마', '모험', '키즈', '액션', '판타지', '애니메이션', '스릴러'].map(
                    (genre) => (
                        <button
                            key={genre}
                            className={selectedGenre === genre ? style.active : ''}
                            onClick={() => handleGenreClick(genre)}
                        >
                            {genre}
                        </button>
                    )
                )}
            </div>
        </div>
    );
}
