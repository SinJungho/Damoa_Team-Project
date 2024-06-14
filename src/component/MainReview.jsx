import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../css/Review.module.css';
import StarRating from '../svg/StarRating';
import StarRatingHalf from '../svg/StarRatingHalf';
import EmptyStarRating from '../svg/EmptyStarRating';
import { ReactComponent as SvgIconLeft } from '../svg/SvgIconLeft.svg';
import { ReactComponent as SvgIconRight } from '../svg/SvgIconRight.svg';
import { Link } from 'react-router-dom';
import ReviewEye from '../svg/ReviewEye';
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

export default function Review() {
    const [slideIndex, setSlideIndex] = useState(0);
    const [data, setData] = useState([]);
    const [userNames, setUserNames] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const handleNextSlide = () => {
        setSlideIndex((slideIndex) => slideIndex - 100); // 오른쪽으로 슬라이드
    };

    const handlePrevSlide = () => {
        if (slideIndex < 0) setSlideIndex((slideIndex) => slideIndex + 100); // 왼쪽으로 슬라이드
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // 최상단으로 스크롤
        });
    };

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
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>리뷰</p>
                <Link className={styles.button} to="/review" onClick={scrollToTop}>
                    <ReviewEye />
                    <p className={styles.buttonText}>리뷰 보러 가기</p>
                </Link>
                <div className={styles.iconContainer}>
                    {/* 왼쪽버튼 */}
                    <div className={styles.roundButton} onClick={handlePrevSlide}>
                        <SvgIconLeft className={styles.svgIcon} />
                    </div>
                    {/* 오른쪽버튼 */}
                    <div className={styles.roundButton} onClick={handleNextSlide}>
                        <SvgIconRight className={styles.svgIcon} />
                    </div>
                </div>
            </div>
            <div className={styles.reviewContainer} style={{ transform: `translateX(${slideIndex}%)` }}>
                {data.map((review, index) => (
                    <div className={styles.reviewItemContainer} key={index}>
                        <div className={styles.reviewTitleContainer}>
                            <p className={styles.reviewTitle}>{review.notice_name}</p>
                            <button className={styles.rating__starBtn_Review}>
                                <div className={styles['rating__starBtn__elements-group']}>
                                    <div className={styles.rating__starBtn__Reviewstars}>{getStars(review.rating)}</div>
                                    <span className={styles.rating__starBtn__text}>{review.rating}</span>
                                </div>
                            </button>
                        </div>
                        <p className={styles.reviewSubTitle}>{userNames[review.user_name]}</p>
                        <p className={styles.reviewText}>{review.notice_detail}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
