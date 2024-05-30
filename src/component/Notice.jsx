import React from 'react';
import styles from '../css/Notice.module.css';

export default function Notice() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <p className={`${styles['text-block']} ${styles.title}`}>공지사항</p>
                <p className={styles['text-block']}>
                    리뷰 작성 시 유의사항: 상호 존중과 건전한 커뮤니티 문화 조성을 위해, 비방이나 욕설이 포함된 리뷰는
                    삼가해 주시기 바랍니다. 객관적이고 상세한 리뷰가 다른 이용자에게 큰 도움이 됩니다.
                </p>
            </div>
        </div>
    );
}
