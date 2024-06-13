import React, { useState, useEffect } from 'react';
import style from '../css/OTTReview.module.css';
import CoupangPlayLogo from '../svg/CoupangPlayLogo';
import DisneyPlusLogo from '../svg/DisneyPlusLogo';
import NetfilxLogo from '../svg/NetfilxLogo';
import OTTReviewIcon from '../svg/OTTReviewIcon';
import ReviewPageDamoaLogo from '../svg/ReviewPageDamoaLogo';
import TvingLogo from '../svg/TvingLogo';
import WatchaLogo from '../svg/WatchaLogo';
import WavveLogo from '../svg/WavveLogo';

export default function OTTReview() {
    const [selectedButton, setSelectedButton] = useState('damoa');

    useEffect(() => {
        const storedButton = localStorage.getItem('selectedott');
        if (storedButton) {
            setSelectedButton(storedButton);
        }
    }, []);

    const handleButtonClick = (button) => {
        const buttonLower = button.toLowerCase();
        setSelectedButton(buttonLower);
        localStorage.setItem('selectedott', buttonLower);
        window.location.reload();
    };

    return (
        <div className={style.container}>
            <div className={style.title__group}>
                <OTTReviewIcon />
                <p>평점 보기</p>
            </div>
            <div className={style[`ott-button__group`]}>
                <button
                    className={selectedButton === 'damoa' ? style.active : ''}
                    onClick={() => handleButtonClick('Damoa')}
                >
                    <ReviewPageDamoaLogo />
                </button>
                <button
                    className={selectedButton === 'netflix' ? style.active : ''}
                    onClick={() => handleButtonClick('Netflix')}
                >
                    <NetfilxLogo />
                </button>
                <button
                    className={selectedButton === 'tving' ? style.active : ''}
                    onClick={() => handleButtonClick('Tving')}
                >
                    <TvingLogo />
                </button>
                <button
                    className={selectedButton === 'watcha' ? style.active : ''}
                    onClick={() => handleButtonClick('Watcha')}
                >
                    <WatchaLogo />
                </button>
                <button
                    className={selectedButton === 'disneyplus' ? style.active : ''}
                    onClick={() => handleButtonClick('DisneyPlus')}
                >
                    <DisneyPlusLogo />
                </button>
                <button
                    className={selectedButton === 'wavve' ? style.active : ''}
                    onClick={() => handleButtonClick('Wavve')}
                >
                    <WavveLogo />
                </button>
                <button
                    className={selectedButton === 'coupangplay' ? style.active : ''}
                    onClick={() => handleButtonClick('CoupangPlay')}
                >
                    <CoupangPlayLogo />
                </button>
            </div>
        </div>
    );
}
