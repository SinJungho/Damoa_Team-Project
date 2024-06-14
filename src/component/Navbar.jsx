import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../css/Navbar.module.css'; // CSS Modules 파일을 임포트
import { ReactComponent as Logo } from '../svg/Logo.svg'; // SVG를 컴포넌트로 임포트
import { SearchIcon } from '../svg/MenuIcons';
import MenuIcon from '../svg/MenuIcon'; // 햄버거 메뉴 아이콘 임포트
import LoginPage from './LoginPage';

export default function Navbar() {
    const [activeItem, setActiveItem] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
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

        const handleResize = () => {
            if (window.innerWidth > 800 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openLoginModal = () => {
        setIsLoginModalOpen(true);
        setIsSignUpModalOpen(false);
    };

    const openSignUpModal = () => {
        setIsSignUpModalOpen(true);
        setIsLoginModalOpen(false);
    };

    const closeModal = () => {
        setIsLoginModalOpen(false);
        setIsSignUpModalOpen(false);
    };

    return (
        <>
            <div className={`${styles.container} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.logoContainer}>
                    <Link to="/" onClick={scrollToTop}>
                        <Logo className={styles.logoSVG} />
                        <p className={styles.logoText}>다모아</p>
                    </Link>
                </div>
                <div className={styles.noticeContainer}>
                    <div className={styles.noticeContainer__element}>
                        <Link
                            to="/notice"
                            className={`${styles.noticeItem} ${activeItem === 'notice' ? styles.active : ''}`}
                            onClick={() => {
                                setActiveItem('notice');
                                scrollToTop();
                            }}
                        >
                            <p className={styles.noticeItemText}>공지사항</p>
                        </Link>
                        <Link
                            to="/review"
                            className={`${styles.noticeItem} ${activeItem === 'review' ? styles.active : ''}`}
                            onClick={() => {
                                setActiveItem('review');
                                scrollToTop();
                            }}
                        >
                            <p className={styles.noticeItemText}>리뷰</p>
                        </Link>
                        <Link
                            to="/"
                            className={`${styles.noticeItem} ${activeItem === 'main' ? styles.active : ''}`}
                            onClick={() => {
                                setActiveItem('main');
                                scrollToTop();
                            }}
                        >
                            <p className={styles.noticeItemText}>메인 화면</p>
                        </Link>
                        <Link
                            to="/upcoming"
                            className={`${styles.noticeItem} ${activeItem === 'upcoming' ? styles.active : ''}`}
                            onClick={() => {
                                setActiveItem('upcoming');
                                scrollToTop();
                            }}
                        >
                            <p className={styles.noticeItemText}>기대되는 개봉작</p>
                        </Link>
                        <Link
                            to="/community"
                            className={`${styles.noticeItem} ${activeItem === 'community' ? styles.active : ''}`}
                            onClick={() => {
                                setActiveItem('community');
                                scrollToTop();
                            }}
                        >
                            <p className={styles.noticeItemText}>커뮤니티</p>
                        </Link>
                    </div>
                </div>

                <div className={styles.menuContainer}>
                    <div className={styles.desktopMenu}>
                        <button className={styles.button} onClick={openLoginModal}>
                            로그인
                        </button>
                        <button className={styles.button} onClick={openSignUpModal}>
                            회원가입
                        </button>
                        <SearchIcon />
                    </div>
                    <div className={styles.hamburgerMenu} onClick={toggleMenu}>
                        <MenuIcon />
                    </div>
                </div>

                {isMenuOpen && (
                    <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                        <button onClick={openLoginModal}>로그인</button>
                        <hr />
                        <button onClick={openSignUpModal}>회원가입</button>
                        <hr />
                        <Link to="/search" onClick={toggleMenu}>
                            검색
                        </Link>
                    </div>
                )}
            </div>

            <LoginPage
                isLoginModalOpen={isLoginModalOpen}
                isSignUpModalOpen={isSignUpModalOpen}
                closeModal={closeModal}
                openSignUpModal={openSignUpModal}
                openLoginModal={openLoginModal}
            />
        </>
    );
}
