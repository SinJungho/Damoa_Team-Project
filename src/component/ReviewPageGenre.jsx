import React, { useState } from 'react';
import style from '../css/Language.module.css';
import GenreIcon from '../svg/GenreIcon';

export default function ReviewPageGenre() {
    const [selectedGenre, setSelectedGenre] = useState('전체');

    const handleGenreClick = (genre) => {
        setSelectedGenre(genre);
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
