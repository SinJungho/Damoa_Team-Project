import React from 'react';
import styles from '../css/Footer.module.css';
import { ReactComponent as FacebookIcon } from '../svg/FacebookIcon.svg';
import { ReactComponent as TwitterIcon } from '../svg/TwitterIcon.svg';
import { ReactComponent as InstagramIcon } from '../svg/InstagramIcon.svg';

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={styles.column}>
                    <p className={`${styles.text} ${styles.textLarge}`}>메인 화면</p>
                    <div className={styles.column}>
                        <p className={styles.text}>Categories</p>
                        <p className={styles.text}>Devices</p>
                        <p className={styles.text}>Pricing</p>
                        <p className={styles.text}>FAQ</p>
                    </div>
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
