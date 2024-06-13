import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/Board.module.css';
import Reviewstyles from '../css/Review.module.css';
import { ReactComponent as AddIcon } from '../svg/AddIcon.svg';

const Board = () => {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [post, setPost] = useState(null);
    const [userNames, setUserNames] = useState({});
    const navigate = useNavigate();
    let counter = 1;

    useEffect(() => {
        const fetchData = async () => {
            try {
                let baseURL = '';
                if (process.env.NODE_ENV === 'development') {
                    baseURL = 'http://121.139.20.242:5100';
                }

                const response = await axios.post(`${baseURL}/api/review_selectlist`, {
                    notice_auth: 1,
                });

                if (response.data.valid) {
                    setData(response.data.data);

                    // Fetch user names
                    const userNames = {};
                    const nameRequests = response.data.data.map(async (review) => {
                        try {
                            const nameResponse = await axios.post(`${baseURL}/api/select_name`, {
                                user_name: review.user_name,
                            });
                            userNames[review.user_name] = nameResponse.data.data[0].user_id;
                        } catch (error) {
                            console.error('Failed to fetch user name:', error);
                        }
                    });
                    await Promise.all(nameRequests);
                    setUserNames(userNames);
                } else {
                    setErrorMessage('리스트를 불러오는데 실패하였습니다.');
                }
            } catch (error) {
                setErrorMessage('데이터베이스 연결이 실패하였습니다.');
            }
        };

        fetchData();
    }, []);

    const handleWriteClick = (event) => {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            event.preventDefault();
            alert('로그인 후에 글을 작성하실 수 있습니다.');
        } else {
            navigate('writing');
        }
    };

    const handleNoticeClick = async (notice_id) => {
        try {
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                baseURL = 'http://121.139.20.242:5100';
            }
            const response = await axios.get(`${baseURL}/api/notice_update`, {
                params: { notice_id },
            });
            if (response.data.valid) {
                if (response.data.data[0].notice_auth === 1) {
                    setPost(response.data.data[0]);
                } else {
                    setErrorMessage('커뮤니티 글이 아닙니다.');
                }
            } else {
                setErrorMessage('유효하지 않은 공지사항 ID입니다.');
            }
        } catch (error) {
            setErrorMessage('데이터베이스에 연결할 수 없습니다.');
        }
    };

    return (
        <div className={styles.boardContainer}>
            <div className={styles.headerContainer}>
                <button onClick={handleWriteClick} style={{ cursor: 'pointer' }} className={Reviewstyles.button}>
                    <AddIcon />
                    <p className={Reviewstyles.buttonText}>글 쓰러 가기</p>
                </button>
            </div>
            <div className={styles.boardHeader}>
                <div className={styles.headerItem}>번호</div>
                <div className={styles.headerItem}>제목</div>
                <div className={styles.headerItem}>글쓴이</div>
                <div className={styles.headerItem}>작성일</div>
                <div className={styles.headerItem}>조회</div>
            </div>
            {data.map((item, index) => (
                <div key={item.id} className={styles.boardRow}>
                    <div className={styles.rowItem}>{data.length - index}</div>
                    <Link
                        to={`/community/post?notice_id=${item.notice_id}`}
                        onClick={() => handleNoticeClick(item.notice_id)}
                        className={styles.rowItem}
                    >
                        {item.notice_name}
                    </Link>
                    <div className={styles.rowItem}>{userNames[item.user_name]}</div>
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
                    <div className={styles.rowItem}>{item.notice_views}</div>
                </div>
            ))}
            {errorMessage && <div className={styles.errorMessage}>{errorMessage}</div>}
        </div>
    );
};

export default Board;
