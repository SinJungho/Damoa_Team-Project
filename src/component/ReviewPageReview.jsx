import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from '../css/ReviePageRating.module.css';
import StarRating from '../svg/StarRating';
import StarRatingHalf from '../svg/StarRatingHalf';
import EmptyStarRating from '../svg/EmptyStarRating';

const getStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<StarRating key={i} />);
        } else if (rating >= i - 0.5) {
            stars.push(<StarRatingHalf key={i} />);
        } else {
            stars.push(<EmptyStarRating key={i} />);
        }
    }
    return stars;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
    });
};

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
};

export default function ReviewComponent() {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const user_id = localStorage.getItem('user_id');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let baseURL = '';
                if (process.env.NODE_ENV === 'development') {
                    baseURL = 'http://121.139.20.242:5100';
                }

                const response = await axios.post(`${baseURL}/api/notice_selectlist`, {
                    notice_auth: 2,
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

    const handleDelete = async (reviewId) => {
        try {
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                baseURL = 'http://121.139.20.242:5100';
            }

            const response = await axios.post(`${baseURL}/api/review_delete`, {
                review_id: reviewId,
            });

            if (response.status === 200) {
                alert('리뷰가 삭제되었습니다.');
                scrollToTop();
                setData(data.filter((review) => review.notice_id !== reviewId));
            } else {
                setErrorMessage('리뷰 삭제에 실패했습니다.');
            }
        } catch (error) {
            setErrorMessage('데이터베이스 연결에 실패했습니다.');
        }
    };

    return (
        <div className={styles.container}>
            {data.map((review, index) => (
                <div className={styles.block} key={index}>
                    <div className={styles.genreContainer}>
                        <p className={styles.genre}>[{review.notice_genre}]</p> {/* 장르 표시 */}
                    </div>
                    <div className={styles.header}>
                        <p className={styles.title}>{review.notice_name}</p>
                        <div className={styles.reviewTitleContainer}>
                            <button className={styles.rating__starBtn}>
                                <div className={styles['rating__starBtn__elements-group']}>
                                    <div className={styles.rating__starBtn__stars}>{getStars(review.rating)}</div>
                                    <span className={styles.rating__starBtn__text}>{review.rating}</span>
                                </div>
                            </button>
                            {user_id === review.user_name && (
                                <button className={styles.deleteButton} onClick={() => handleDelete(review.notice_id)}>
                                    삭제하기
                                </button>
                            )}
                        </div>
                    </div>
                    <div className={styles.contentBlock}>
                        <p className={styles.contentText}>{formatDate(review.notice_date)}</p> {/* 포맷된 날짜 표시 */}
                        <p className={styles.contentText}>{review.user_name} 님이 남기신 리뷰입니다.</p>
                        <p className={styles.boldText}>{review.notice_detail}</p>
                    </div>
                </div>
            ))}
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </div>
    );
}
