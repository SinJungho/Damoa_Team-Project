import { useRef } from 'react';
import style from '../css/Date.module.css';
import DateIcon from '../svg/Date';

export default function Date() {
    const dateInputRef = useRef();

    const handleIconClick = () => {
        dateInputRef.current.click();
    };
    return (
        <div className={style.date}>
            <div className={style.date__content}>
                <DateIcon />
                <p>날짜</p>
            </div>
            <input type="date" ref={dateInputRef} name="date" className={style.hidden} />
        </div>
    );
}
