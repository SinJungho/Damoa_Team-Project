import style from '../css/MainRating.module.css';

export default function StarRatingHalf() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                flexGrow: 0,
                flexShrink: 0,
                position: 'relative',
            }}
        >
            <svg
                className={style.StarRating}
                width={11}
                height={19}
                viewBox="0 0 11 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                    d="M4.34109 18.5L10.4091 16.3108V0.5L6.83503 5.7088L0.590881 7.37539L4.62615 12.2612L4.34109 18.5Z"
                    fill="#E60000"
                />
            </svg>
            <svg
                width={10}
                height={19}
                viewBox="0 0 10 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ flexGrow: 0, flexShrink: 0 }}
                preserveAspectRatio="xMidYMid meet"
            >
                <path
                    d="M3.68526 5.7088L0.409058 0.5V16.3108L5.97136 18.5L5.71006 12.2612L9.40906 7.37539L3.68526 5.7088Z"
                    fill="#999999"
                />
            </svg>
        </div>
    );
}
