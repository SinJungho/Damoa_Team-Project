import style from '../css/Language.module.css';
import GenreIcon from '../svg/GenreIcon';

export default function ReviewPageGenre() {
    return (
        <div className={style.language}>
            <div className={style.language__content}>
                <GenreIcon />
                <p>장르</p>
            </div>
            <div className={style[`language__btn-group`]}>
                <button>범죄</button>
                <button>코미디</button>
                <button>드라마</button>
                <button>모험</button>
                <button>키즈</button>
                <button>액션</button>
                <button>판타지</button>
                <button>애니메이션</button>
                <button>스릴러</button>
            </div>
        </div>
    );
}
