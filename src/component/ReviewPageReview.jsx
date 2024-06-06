import React, { useState, useEffect } from 'react';
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

export default function ReviewComponent() {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

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

    return (
        <div className={styles.container}>
            {data.map((review, index) => (
                <div className={styles.block} key={index}>
                    <div className={styles.header}>
                        <p className={styles.title}>{review.notice_name}</p>
                        <div className={styles.reviewTitleContainer}>
                            <button className={styles.rating__starBtn}>
                                <div className={styles['rating__starBtn__elements-group']}>
                                    <div className={styles.rating__starBtn__stars}>{getStars(review.rating)}</div>
                                    <span className={styles.rating__starBtn__text}>{review.rating}</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className={styles.contentBlock}>
                        <p className={styles.contentText}>{review.user_date}</p>
                        <p className={styles.contentText}>{review.user_name} 님이 남기신 리뷰입니다.</p>
                        <p className={styles.boldText}>{review.notice_detail}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
