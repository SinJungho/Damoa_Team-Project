import style from '../css/LoginForm.module.css';

export default function EyeSvg() {
    return (
        <svg
            className={style[`eye-icon`]}
            width="44"
            height="44"
            viewBox="0 0 49 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M40 15.5417C33.75 15.5417 31.25 22 31.25 22C31.25 22 33.75 28.4584 40 28.4584C46.25 28.4584 48.75 22 48.75 22C48.75 22 46.25 15.5417 40 15.5417Z"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M40 24.5C41.381 24.5 42.5 23.3807 42.5 22C42.5 20.6193 41.381 19.5 40 19.5C38.619 19.5 37.5 20.6193 37.5 22C37.5 23.3807 38.619 24.5 40 24.5Z"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
