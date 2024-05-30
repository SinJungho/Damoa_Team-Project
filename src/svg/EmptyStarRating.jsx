import style from '../css/MainRating.module.css';

export default function EmptyStarRating() {
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
                d="M9.40906 0.5L12.5249 5.2114L17.9686 6.71885L14.4506 11.1381L14.6991 16.7812L9.40906 14.801L4.11899 16.7812L4.36751 11.1381L0.849549 6.71885L6.29321 5.2114L9.40906 0.5Z"
                fill="#999999"
            />
        </svg>
    );
}
