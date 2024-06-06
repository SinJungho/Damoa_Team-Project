import style from '../css/MainRating.module.css';

export default function StarRating() {
    return (
        <svg
            className={style.starRating}
            width={18}
            height={17}
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
        >
            <path
                d="M8.59088 0.5L11.7067 5.2114L17.1504 6.71885L13.6324 11.1381L13.8809 16.7812L8.59088 14.801L3.30081 16.7812L3.54933 11.1381L0.031373 6.71885L5.47503 5.2114L8.59088 0.5Z"
                fill="#E60000"
            />
        </svg>
    );
}
