import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../css/Footer.module.css';
import { ReactComponent as FacebookIcon } from '../svg/FacebookIcon.svg';
import { ReactComponent as TwitterIcon } from '../svg/TwitterIcon.svg';
import { ReactComponent as InstagramIcon } from '../svg/InstagramIcon.svg';

export default function Footer() {
    const location = useLocation();
    const isReviewPage = location.pathname.includes('review');

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div className={`${styles.container} ${isReviewPage ? styles.ReviewPagecontainer : ''}`}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <p className={`${styles.text}`}>개인정보 처리 방침</p>
                    <p className={`${styles.text}`}>고객센터</p>
                    <p className={`${styles.text}`}>협업 문의</p>
                    <p className={`${styles.text}`}>주소 : 경기 안양시 동안구 임곡로 29 대림대학 </p>
                </div>
                <div className={`${styles.column} ${styles.snsColumn}`}>
                    <p className={`${styles.text} ${styles.textLarge}`}>SNS</p>
                    <div className={styles.iconContainer}>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.svgContainer}
                        >
                            <FacebookIcon className={styles.svgIcon} />
                        </a>
                        <a
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.svgContainer}
                        >
                            <TwitterIcon className={styles.svgIcon} />
                        </a>
                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.svgContainer}
                        >
                            <InstagramIcon className={styles.svgIcon} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.ftContainer}>
                <div className={styles.dividerLine}></div>
                <div className={styles.content}>
                    <p className={styles.footerText}>@2023 Damoa, All Rights Reserved</p>
                    <div className={styles.linkContainer}>
                        <p className={styles.footerText}>이용 약관</p>
                        <div className={styles.verticalLine}></div>
                        <p className={styles.footerText}>약관 사항</p>
                        <div className={styles.verticalLine}></div>
                        <p className={styles.footerText}>쿠키 관련 약관</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
