import React, { useState } from 'react';
import styles from '../css/Review.module.css';
import StarRating from '../svg/StarRating';
import StarRatingHalf from '../svg/StarRatingHalf';
import EmptyStarRating from '../svg/EmptyStarRating';
import { ReactComponent as SvgIconLeft } from '../svg/SvgIconLeft.svg';
import { ReactComponent as SvgIconRight } from '../svg/SvgIconRight.svg';
import { ReactComponent as AddIcon } from '../svg/AddIcon.svg';
import { Link } from 'react-router-dom';
import reviews from '../utils/reviewsData';

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

    const handleNextSlide = () => {
        setSlideIndex((slideIndex) => slideIndex - 100); // 오른쪽으로 슬라이드
    };

    const handlePrevSlide = () => {
        if (slideIndex < 0) setSlideIndex((slideIndex) => slideIndex + 100); // 왼쪽으로 슬라이드
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // 최상단으로 스크롤
            behavior: 'smooth', // 부드러운 스크롤 효과 적용
        });
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>리뷰</p>
                <Link className={styles.button} to="/review" onClick={scrollToTop}>
                    <AddIcon />
                    <p className={styles.buttonText}>리뷰 쓰러 가기</p>
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
                {reviews.map((review, index) => (
                    <div className={styles.reviewItemContainer} key={index}>
                        <div className={styles.reviewTitleContainer}>
                            <p className={styles.reviewTitle}>{review.title}</p>
                            <button className={styles.rating__starBtn_Review}>
                                <div className={styles['rating__starBtn__elements-group']}>
                                    <div className={styles.rating__starBtn__Reviewstars}>{getStars(review.rating)}</div>
                                    <span className={styles.rating__starBtn__text}>{review.rating}</span>
                                </div>
                            </button>
                        </div>
                        <p className={styles.reviewSubTitle}>{review.subtitle}</p>
                        <p className={styles.reviewText}>{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
