import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../../css/Navbar.module.css';
import { Logo, NotificationIcon, SearchIcon } from '../../svg/MenuIcons';

export default function Navbar() {
    const [activeItem, setActiveItem] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === '/') {
            setActiveItem('main');
        } else if (currentPath.includes('/review')) {
            setActiveItem('review');
        } else if (currentPath.includes('/notice')) {
            setActiveItem('notice');
        } else if (currentPath.includes('/upcoming')) {
            setActiveItem('upcoming');
        }
    }, [location]);

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Logo className={styles.logoSVG} />
                <p className={styles.logoText}>다모아</p>
            </div>
            <div className={styles.menuContainer}>
                <SearchIcon />
                <NotificationIcon />
            </div>
            <div className={styles.noticeContainer}>
                <Link
                    to="/notice"
                    className={`${styles.noticeItem} ${activeItem === 'notice' ? styles.active : ''}`}
                    onClick={() => setActiveItem('notice')}
                >
                    <p className={styles.noticeItemText}>공지사항</p>
                </Link>
                <Link
                    to="/"
                    className={`${styles.noticeItem} ${activeItem === 'main' ? styles.active : ''}`}
                    onClick={() => setActiveItem('main')}
                >
                    <p className={styles.noticeItemText}>메인 화면</p>
                </Link>
                <Link
                    to="/review"
                    className={`${styles.noticeItem} ${activeItem === 'review' ? styles.active : ''}`}
                    onClick={() => setActiveItem('review')}
                >
                    <p className={styles.noticeItemText}>리뷰</p>
                </Link>
                <Link
                    to="/upcoming"
                    className={`${styles.noticeItem} ${activeItem === 'upcoming' ? styles.active : ''}`}
                    onClick={() => setActiveItem('upcoming')}
                >
                    <p className={styles.noticeItemText}>기대되는 개봉작</p>
                </Link>
            </div>
        </div>
    );
}
