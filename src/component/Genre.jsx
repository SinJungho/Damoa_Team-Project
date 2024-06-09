import React from 'react';
import Languagestyle from '../css/Language.module.css';

export default function Genre({ onGenreClick }) {
    return (
        <div className={Languagestyle[`language__btn-group`]}>
            <button onClick={() => onGenreClick(null)}>전체</button>
            <button onClick={() => onGenreClick(80)}>범죄</button>
            <button onClick={() => onGenreClick(35)}>코미디</button>
            <button onClick={() => onGenreClick(18)}>드라마</button>
            <button onClick={() => onGenreClick(12)}>모험</button>
            <button onClick={() => onGenreClick(10751)}>키즈</button>
            <button onClick={() => onGenreClick(28)}>액션</button>
            <button onClick={() => onGenreClick(14)}>판타지</button>
            <button onClick={() => onGenreClick(16)}>애니메이션</button>
            <button onClick={() => onGenreClick(53)}>스릴러</button>
        </div>
    );
}
