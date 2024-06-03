import { Link } from 'react-router-dom';
import styles from '../css/ReviewText.module.css';
import { ReactComponent as AddIcon } from '../svg/AddIcon.svg';

export default function ReviewText() {
    return (
        <div className={styles.header}>
            <p className={styles.title}>한 줄 리뷰</p>
            <Link to="writing" className={styles.button}>
                {/* 상대 경로 사용 */}
                <AddIcon />
                <p className={styles.buttonText}>리뷰 쓰러 가기</p>
            </Link>
        </div>
    );
}
