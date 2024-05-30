// src/components/ReviewComponent.jsx
import React from 'react';
import styles from '../css/ReviePageRating.module.css';
import StarRating from '../svg/StarRating';
import StarRatingHalf from '../svg/StarRatingHalf';
import EmptyStarRating from '../svg/EmptyStarRating';
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

export default function ReviewComponent() {
    return (
        <div className={styles.container}>
            {reviews.map((review, index) => (
                <div className={styles.block} key={index}>
                    <div className={styles.header}>
                        <p className={styles.title}>{review.title}</p>
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
                        <p className={styles.contentText}>2024 / 04 /17</p>
                        <p className={styles.contentText}>김진석님이 남기신 리뷰입니다.</p>
                        <p className={styles.boldText}>{review.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
