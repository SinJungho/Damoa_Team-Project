import { useNavigate } from 'react-router-dom';
import styles from '../css/ReviewText.module.css';
import { ReactComponent as AddIcon } from '../svg/AddIcon.svg';

export default function ReviewText() {
    const navigate = useNavigate();

    const handleReviewClick = (event) => {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            event.preventDefault();
            alert('로그인 후에 리뷰를 작성하실 수 있습니다.');
        } else {
            navigate('writing');
        }
    };

    return (
        <div className={styles.header}>
            <p className={styles.title}>한 줄 리뷰</p>
            <button onClick={handleReviewClick} style={{ cursor: 'pointer' }} className={styles.button}>
                <AddIcon />
                <p className={styles.buttonText}>리뷰 쓰러 가기</p>
            </button>
        </div>
    );
}
