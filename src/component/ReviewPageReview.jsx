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
    const [userNames, setUserNames] = useState({});
    const user_id = localStorage.getItem('user_id');
    const selectedGenre = localStorage.getItem('selectedGenre');
    const selectdrating = localStorage.getItem('rating');
    const selectedSortOption = localStorage.getItem('selectedSortOption');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let baseURL = '';
                if (process.env.NODE_ENV === 'development') {
                    baseURL = 'http://121.139.20.242:5100';
                }

                // Retrieve the selectedott value from localStorage
                const selectedott = localStorage.getItem('selectedott');
                if (!selectedott) {
                    localStorage.setItem('selectedott', 'damoa');
                }

                // Set the endpoint URL based on the selectedott value
                let endpoint = '';
                if (selectedott === 'damoa') {
                    endpoint = '/api/review_selectlist';
                } else {
                    endpoint = '/api/review_selectlist_ott';
                }

                const response = await axios.post(`${baseURL}${endpoint}`, {
                    notice_auth: 2,
                    selectedSortOption: selectedSortOption,
                    user_id: selectedott,
                });
                if (selectedott === 'damoa') {
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
                } else {
                    setData(response.data.data);
                }
            } catch (error) {
                setErrorMessage('데이터베이스 연결이 실패하였습니다.');
            }
        };

        fetchData();
    }, [selectedSortOption]);

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
    const selectedOtt = localStorage.getItem('selectedott');
    let transformedUserId;

    switch (selectedOtt) {
        case 'netflix':
            transformedUserId = 'Netflix';
            break;
        case 'tving':
            transformedUserId = 'Tving';
            break;
        case 'watcha':
            transformedUserId = 'Watcha';
            break;
        case 'disneyplus':
            transformedUserId = 'DisneyPlus';
            break;
        case 'wavve':
            transformedUserId = 'Wavve';
            break;
        case 'coupangplay':
            transformedUserId = 'CoupangPlay';
            break;
        default:
            transformedUserId = selectedOtt;
    }
    return (
        <div className={styles.container}>
            {data && data.length > 0 ? (
                data
                    .filter((review) => (selectedGenre === '범죄' ? review.notice_genre === '범죄' : true))
                    .filter((review) => (selectedGenre === '코미디' ? review.notice_genre === '코미디' : true))
                    .filter((review) => (selectedGenre === '드라마' ? review.notice_genre === '드라마' : true))
                    .filter((review) => (selectedGenre === '모험' ? review.notice_genre === '모험' : true))
                    .filter((review) => (selectedGenre === '키즈' ? review.notice_genre === '키즈' : true))
                    .filter((review) => (selectedGenre === '액션' ? review.notice_genre === '액션' : true))
                    .filter((review) => (selectedGenre === '판타지' ? review.notice_genre === '판타지' : true))
                    .filter((review) => (selectedGenre === '애니메이션' ? review.notice_genre === '애니메이션' : true))
                    .filter((review) => (selectedGenre === '스릴러' ? review.notice_genre === '스릴러' : true))
                    .filter((review) => (selectdrating === '5' ? review.rating === 5 : true))
                    .filter((review) => (selectdrating === '4.5' ? review.rating === 4.5 : true))
                    .filter((review) => (selectdrating === '4' ? review.rating === 4 : true))
                    .filter((review) => (selectdrating === '3.5' ? review.rating === 3.5 : true))
                    .filter((review) => (selectdrating === '3' ? review.rating === 3 : true))
                    .filter((review) => (selectdrating === '2.5' ? review.rating === 2.5 : true))
                    .filter((review) => (selectdrating === '2' ? review.rating === 2 : true))
                    .filter((review) => (selectdrating === '1.5' ? review.rating === 1.5 : true))
                    .filter((review) => (selectdrating === '1' ? review.rating === 1 : true))
                    .filter((review) => (selectdrating === '0.5' ? review.rating === 0.5 : true))

                    .map((review, index) => (
                        <div className={styles.block} key={index}>
                            <div className={styles.genreContainer}>
                                <p className={styles.genre}>[{review.notice_genre}]</p>
                            </div>
                            <div className={styles.header}>
                                <p className={styles.title}>{review.notice_name}</p>
                                <div className={styles.reviewTitleContainer}>
                                    <button className={styles.rating__starBtn}>
                                        <div className={styles['rating__starBtn__elements-group']}>
                                            <div className={styles.rating__starBtn__stars}>
                                                {getStars(review.rating)}
                                            </div>
                                            <span className={styles.rating__starBtn__text}>{review.rating}</span>
                                        </div>
                                    </button>
                                    {user_id === review.user_name && (
                                        <button
                                            className={styles.deleteButton}
                                            onClick={() => handleDelete(review.notice_id)}
                                        >
                                            삭제하기
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className={styles.contentBlock}>
                                <p className={styles.contentText}>{formatDate(review.notice_date)}</p>
                                <p className={styles.contentText}>
                                    {localStorage.getItem('selectedott') === 'damoa'
                                        ? `${userNames[review.user_name]} 님이 남기신 리뷰입니다.`
                                        : `${transformedUserId} 에서 가져온 리뷰입니다.`}
                                </p>
                                <p className={styles.boldText}>{review.notice_detail}</p>
                            </div>
                        </div>
                    ))
            ) : (
                <div className={styles.loading}>Loading...</div>
            )}
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
        </div>
    );
}
