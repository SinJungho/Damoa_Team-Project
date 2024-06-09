import React, { useState } from 'react';
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
    const [selectedButton, setSelectedButton] = useState('Netflix');

    const handleButtonClick = (button) => {
        setSelectedButton(button);
    };

    return (
        <div className={style.container}>
            <div className={style.title__group}>
                <OTTReviewIcon />
                <p>평점 보기</p>
            </div>
            <div className={style[`ott-button__group`]}>
                <button
                    className={selectedButton === 'Netflix' ? style.active : ''}
                    onClick={() => handleButtonClick('Netflix')}
                >
                    <NetfilxLogo />
                </button>
                <button
                    className={selectedButton === 'Tving' ? style.active : ''}
                    onClick={() => handleButtonClick('Tving')}
                >
                    <TvingLogo />
                </button>
                <button
                    className={selectedButton === 'Watcha' ? style.active : ''}
                    onClick={() => handleButtonClick('Watcha')}
                >
                    <WatchaLogo />
                </button>
                <button
                    className={selectedButton === 'DisneyPlus' ? style.active : ''}
                    onClick={() => handleButtonClick('DisneyPlus')}
                >
                    <DisneyPlusLogo />
                </button>
                <button
                    className={selectedButton === 'Wavve' ? style.active : ''}
                    onClick={() => handleButtonClick('Wavve')}
                >
                    <WavveLogo />
                </button>
                <button
                    className={selectedButton === 'CoupangPlay' ? style.active : ''}
                    onClick={() => handleButtonClick('CoupangPlay')}
                >
                    <CoupangPlayLogo />
                </button>
                <button
                    className={selectedButton === 'ReviewPageDamoa' ? style.active : ''}
                    onClick={() => handleButtonClick('ReviewPageDamoa')}
                >
                    <ReviewPageDamoaLogo />
                </button>
            </div>
        </div>
    );
}
