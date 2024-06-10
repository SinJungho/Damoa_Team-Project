import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../css/Navbar.module.css'; // CSS Modules 파일을 임포트
import { ReactComponent as Logo } from '../svg/Logo.svg'; // SVG를 컴포넌트로 임포트
import { NotificationIcon, SearchIcon } from '../svg/MenuIcons';
import LoginPage from './LoginPage';

export default function Navbar() {
    const [activeItem, setActiveItem] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // 경로가 바뀔 때마다 activeItem 상태를 업데이트합니다.
        const currentPath = location.pathname;
        if (currentPath === '/') {
            setActiveItem('main');
        } else if (currentPath.includes('/review')) {
            setActiveItem('review');
        } else if (currentPath.includes('/notice')) {
            setActiveItem('notice');
        } else if (currentPath.includes('/upcoming')) {
            setActiveItem('upcoming');
        } else if (currentPath.includes('/community')) {
            setActiveItem('community');
        }
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    return (
        <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.logoContainer}>
                <Link to="/" onClick={scrollToTop}>
                    <Logo className={styles.logoSVG} />
                    <p>다모아</p>
                </Link>
            </div>
            <div className={styles.noticeContainer}>
                <div className={styles.noticeContainer__element}>
                    {/* 공지 사항 */}
                    <Link
                        to="/notice"
                        className={`${styles.noticeItem} ${activeItem === 'notice' ? styles.active : ''}`}
                        onClick={(() => setActiveItem('notice'), scrollToTop)}
                    >
                        <p className={styles.noticeItemText}>공지사항</p>
                    </Link>
                    {/* 리뷰 */}
                    <Link
                        to="/review"
                        className={`${styles.noticeItem} ${activeItem === 'review' ? styles.active : ''}`}
                        onClick={(() => setActiveItem('review'), scrollToTop)}
                    >
                        <p className={styles.noticeItemText}>리뷰</p>
                    </Link>
                    {/* 메인 화면 */}
                    <Link
                        to="/"
                        className={`${styles.noticeItem} ${activeItem === 'main' ? styles.active : ''}`}
                        onClick={(() => setActiveItem('main'), scrollToTop)}
                    >
                        <p className={styles.noticeItemText}>메인 화면</p>
                    </Link>
                    {/* 기대되는 개봉작 */}
                    <Link
                        to="/upcoming"
                        className={`${styles.noticeItem} ${activeItem === 'upcoming' ? styles.active : ''}`}
                        onClick={(() => setActiveItem('upcoming'), scrollToTop)}
                    >
                        <p className={styles.noticeItemText}>기대되는 개봉작</p>
                    </Link>
                    {/* 커뮤니티 */}
                    <Link
                        to="/community"
                        className={`${styles.noticeItem} ${activeItem === 'community' ? styles.active : ''}`}
                        onClick={(() => setActiveItem('community'), scrollToTop)}
                    >
                        <p className={styles.noticeItemText}>커뮤니티</p>
                    </Link>
                </div>
            </div>

            {/* Navbar Icons */}
            <div className={styles.menuContainer}>
                <LoginPage />
                <SearchIcon />
                {/* <NotificationIcon /> */}
            </div>
        </div>
    );
}
