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
    return (
        <div className={style.container}>
            <div className={style.title__group}>
                <OTTReviewIcon />
                <p>평점 보기</p>
            </div>
            <div className={style[`ott-button__group`]}>
                <button>
                    <NetfilxLogo />
                </button>
                <button>
                    <TvingLogo />
                </button>
                <button>
                    <WatchaLogo />
                </button>
                <button>
                    <DisneyPlusLogo />
                </button>
                <button>
                    <WavveLogo />
                </button>
                <button>
                    <CoupangPlayLogo />
                </button>
                <button>
                    <ReviewPageDamoaLogo />
                </button>
            </div>
        </div>
    );
}
