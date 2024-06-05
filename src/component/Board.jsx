import React, { useState, useEffect } from 'react';
import styles from '../css/Board.module.css';
import { Link } from 'react-router-dom';
import Reviewstyles from '../css/Review.module.css';
import { ReactComponent as AddIcon } from '../svg/AddIcon.svg';
import axios from 'axios';

const Board = () => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    let counter = 1;
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Define the base URL
                let baseURL = '';
                if (process.env.NODE_ENV === 'development') {
                    // If in development environment, use local IP
                    baseURL = 'http://121.139.20.242:5100';
                }
                const response = await axios.post(`${baseURL}/api/notice_selectlist`, {
                    notice_auth: 1,
                });
                if (response.data.valid) {
                    setData(response.data.data);
                } else {
                    setErrorMessage('리스트를 불러오는데 실패하였습니다.');
                }
            } catch (error) {
                setErrorMessage('데이터베이스 연결이 실패하였습니다.');
            }
        };

        fetchData();
    }, []);
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
                    <div className={styles.rowItem}>{counter++}</div>
                    <Link to={`/community/post?notice_id=${item.notice_id}`} className={styles.rowItem}>
                        {item.notice_name}
                    </Link>
                    <div className={styles.rowItem}>{item.user_name}</div>
                    <div className={styles.rowItem}>
                        {(() => {
                            const date = new Date(item.notice_date);
                            date.setHours(date.getHours() - 9);
                            const formattedDate = date.toLocaleDateString('ko-KR', {
                                hour: 'numeric',
                                minute: 'numeric',
                            });

                            return formattedDate;
                        })()}
                    </div>
                    <div className={styles.rowItem}>{item.notice_views / 2}</div>
                </div>
            ))}
        </div>
    );
};

export default Board;
