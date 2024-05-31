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
        }}
      >
        <SignUpForm openLoginModal={openLoginModal} />
      </Modal>
    </>
  );
}
