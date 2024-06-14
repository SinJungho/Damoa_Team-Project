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
    closeModal,
    openSignUpModal,
    openLoginModal,
}) {
    const [myPageOpen, setMyPageOpen] = useState(false); // 마이 페이지 모달 상태 추가
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (userId) {
            setIsLoggedIn(true);
        }
    }, []);

    const openMyPageModal = () => {
        setMyPageOpen(true);
        document.body.classList.add('modal-open'); // 모달이 열릴 때 클래스 추가
    };

    const closeMyPageModal = () => {
        setMyPageOpen(false);
        document.body.classList.remove('modal-open'); // 모달이 닫힐 때 클래스 제거
    };

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
            {!isLoggedIn ? null : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button type="button" onClick={openMyPageModal} className={style.button}>
                        정보 수정
                    </button>
                    <button type="button" onClick={onLogout} className={style.button}>
                        로그아웃
                    </button>
                </div>
            )}
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
                isOpen={myPageOpen}
                onRequestClose={closeMyPageModal}
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
