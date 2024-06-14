import Modal from 'react-modal';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import MyPageForm from './ChangingInformation';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from '../css/LoginForm.module.css';

export default function LoginPage({
    isLoginModalOpen,
    isSignUpModalOpen,
    isMyPageOpen,
    closeModal,
    openSignUpModal,
    openLoginModal,
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (userId) {
            setIsLoggedIn(true);
        }
    }, []);

    const onLogout = () => {
        localStorage.removeItem('user_id');
        setIsLoggedIn(false);
        navigate('/');
    };

    useEffect(() => {
        return () => {
            document.body.classList.remove('modal-open'); // 컴포넌트 언마운트 시 클래스 제거
        };
    }, []);

    return (
        <>
            <Modal
                isOpen={isLoginModalOpen}
                onRequestClose={closeModal}
                className={style.content}
                style={{
                    overlay: { backgroundColor: 'rgba(33, 33, 33, 0.75)', zIndex: 1500 },
                    content: { zIndex: 1500 },
                }}
            >
                <LoginForm openSignUpModal={openSignUpModal} />
            </Modal>
            <Modal
                isOpen={isSignUpModalOpen}
                onRequestClose={closeModal}
                className={style.signUp}
                style={{
                    overlay: { backgroundColor: 'rgba(33, 33, 33, 0.75)', zIndex: 1500 },
                    content: {
                        zIndex: 1500, // 모달 내용의 z-index 설정
                    },
                }}
            >
                <SignUpForm openLoginModal={openLoginModal} />
            </Modal>
            <Modal
                isOpen={isMyPageOpen}
                onRequestClose={closeModal}
                className={style.myPage}
                style={{
                    overlay: { backgroundColor: 'rgba(33, 33, 33, 0.75)', zIndex: 1500 },
                    content: {
                        zIndex: 1500, // 모달 내용의 z-index 설정
                    },
                }}
            >
                <MyPageForm />
            </Modal>
        </>
    );
}
