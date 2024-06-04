import React from 'react';
import styles from '../css/ContentDisplay.module.css';
import { Link } from 'react-router-dom';

export default function ContentDisplay() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.textSection}>
                <p className={`${styles.text} ${styles.largeText}`}>지금 바로 다양한 컨텐츠들을 보러 가봐요!</p>
                <p className={`${styles.text} ${styles.smallText}`}>
                    이미 많은 분들이 여기 있는 컨텐츠를 보고 리뷰를 남겨주고 있어요!
                </p>
            </div>
            <Link to="/upcoming">
                <button className={styles.actionButton}>
                    <p className={styles.actionText}>지금 바로 보러가기</p>
                </button>
            </Link>
        </div>
    );
}
