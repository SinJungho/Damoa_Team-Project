<<<<<<< HEAD
import Modal from "react-modal";
import LoginForm from "./LoginForm";
import { useState } from "react";
import style from "../css/LoginForm.module.css";
import SignUpForm from "./SignUpForm";

export default function LoginPage() {
  const [loginPageOpen, setLoginPageOpen] = useState(false);
  const [signUpPageOpen, setSignUpPageOpen] = useState(false);

  const openLoginModal = () => {
    setLoginPageOpen(true);
    setSignUpPageOpen(false);
  };

  const openSignUpModal = () => {
    setLoginPageOpen(false);
    setSignUpPageOpen(true);
  };

  const closeModal = () => {
    setLoginPageOpen(false);
    setSignUpPageOpen(false);
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
        onRequestClose={closeModal}
        className={style.content}
        style={{
          overlay: { backgroundColor: "rgba(33, 33, 33, 0.75)" },
        }}
      >
        <LoginForm openSignUpModal={openSignUpModal} />
      </Modal>

      <Modal
        isOpen={signUpPageOpen}
        onRequestClose={closeModal}
        className={style.signUp}
        style={{
          overlay: { backgroundColor: "rgba(33, 33, 33, 0.75)" },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "90vh", // 최대 높이 설정
            overflowY: "auto", // 내용이 넘칠 경우 스크롤
          },
        }}
      >
        <SignUpForm openLoginModal={openLoginModal} />
      </Modal>
    </>
  );
=======
import Modal from 'react-modal';
import LoginForm from './LoginForm';
import { useState } from 'react';
import style from '../css/LoginForm.module.css';
import SignUpForm from './SignUpForm';

export default function LoginPage() {
    const [loginPageOpen, setLoginPageOpen] = useState(false);
    const [signUpPageOpen, setSignUpPageOpen] = useState(false);

    const openLoginModal = () => {
        setLoginPageOpen(true);
        setSignUpPageOpen(false);
    };

    const openSignUpModal = () => {
        setLoginPageOpen(false);
        setSignUpPageOpen(true);
    };

    const closeModal = () => {
        setLoginPageOpen(false);
        setSignUpPageOpen(false);
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
                onRequestClose={closeModal}
                className={style.content}
                style={{
                    overlay: { backgroundColor: 'rgba(33, 33, 33, 0.75)' },
                }}
            >
                <LoginForm openSignUpModal={openSignUpModal} />
            </Modal>

            <Modal
                isOpen={signUpPageOpen}
                onRequestClose={closeModal}
                className={style.signUp}
                style={{
                    overlay: { backgroundColor: 'rgba(33, 33, 33, 0.75)' },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        maxHeight: '90vh', // 최대 높이 설정
                        overflowY: 'auto', // 내용이 넘칠 경우 스크롤
                    },
                }}
            >
                <SignUpForm openLoginModal={openLoginModal} />
            </Modal>
        </>
    );
>>>>>>> 16c9ab718ba111092f3336cac031b3250228dbd2
}
