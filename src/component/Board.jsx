import React from 'react';
import styles from '../css/Board.module.css';
import communityData from '../utils/communityData'; // communityData를 임포트
import { Link } from 'react-router-dom';
import Reviewstyles from '../css/Review.module.css';
import { ReactComponent as AddIcon } from '../svg/AddIcon.svg';

const Board = () => {
    const data = Array.isArray(communityData) ? communityData : [];

    return (
        <div className={styles.boardContainer}>
            <div className={styles.headerContainer}>
                <Link className={Reviewstyles.button} to="writing">
                    <AddIcon />
                    <p className={Reviewstyles.buttonText}>글 쓰러 가기</p>
                </Link>
            </div>
            <div className={styles.boardHeader}>
                <div className={styles.headerItem}>번호</div>
                <div className={styles.headerItem}>제목</div>
                <div className={styles.headerItem}>글쓴이</div>
                <div className={styles.headerItem}>작성일</div>
                <div className={styles.headerItem}>조회</div>
            </div>
            {data.map((item) => (
                <div key={item.id} className={styles.boardRow}>
                    <div className={styles.rowItem}>{item.id}</div>
                    <div className={styles.rowItem}>{item.title}</div>
                    <div className={styles.rowItem}>{item.author}</div>
                    <div className={styles.rowItem}>{item.date}</div>
                    <div className={styles.rowItem}>{item.views}</div>
                </div>
            ))}
        </div>
    );
};

export default Board;
