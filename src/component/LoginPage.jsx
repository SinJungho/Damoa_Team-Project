import Modal from 'react-modal';
import LoginForm from './LoginForm';
import { useState } from 'react';
import style from '../css/LoginForm.module.css';
import SignUpForm from './SignUpForm';

export default function LoginPage() {
    const [loginPageOpen, setloginPageOpen] = useState(false);
    const [signUpPageOpen, setsignUpPageOpen] = useState(false);

    const openLoginModal = () => {
        setloginPageOpen(true);
    };

    const closeLoginModal = () => {
        setloginPageOpen(false);
    };

    const openSignUpModal = () => {
        setsignUpPageOpen(true);
    };

    const closeSignUpModal = () => {
        setsignUpPageOpen(false);
    };
    return (
        <>
            <button type="button" onClick={openLoginModal} className={style.button}>
                로그인
            </button>
            <button type="button" onClick={openSignUpModal} className={style.button}>
                회원가입
            </button>
            <Modal
                isOpen={loginPageOpen}
                onRequestClose={closeLoginModal}
                className={style.content}
                style={{
                    overlay: { backgroundColor: 'rgba(33, 33, 33, 0.75)' },
                }}
            >
                <LoginForm />
            </Modal>

            <Modal
                isOpen={signUpPageOpen}
                onRequestClose={closeSignUpModal}
                className={style.signUp}
                style={{
                    overlay: { backgroundColor: 'rgba(33, 33, 33, 0.75)' },
                }}
            >
                <SignUpForm />
            </Modal>
        </>
    );
}
