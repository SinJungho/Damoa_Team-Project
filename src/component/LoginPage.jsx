import Modal from "react-modal";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import MyPageForm from "./ChangingInformation";
import { useState, useEffect } from "react";
import style from "../css/LoginForm.module.css";

export default function LoginPage() {
  const [loginPageOpen, setLoginPageOpen] = useState(false);
  const [signUpPageOpen, setSignUpPageOpen] = useState(false);
  const [myPageOpen, setMyPageOpen] = useState(false); // 마이 페이지 모달 상태 추가
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (userId) {
      setIsLoggedIn(true);
    }
  }, []);

  const openLoginModal = () => {
    setLoginPageOpen(true);
    setSignUpPageOpen(false);
    document.body.classList.add("modal-open"); // 모달이 열릴 때 클래스 추가
  };

  const openSignUpModal = () => {
    setLoginPageOpen(false);
    setSignUpPageOpen(true);
    document.body.classList.add("modal-open"); // 모달이 열릴 때 클래스 추가
  };

  const closeModal = () => {
    setLoginPageOpen(false);
    setSignUpPageOpen(false);
    document.body.classList.remove("modal-open"); // 모달이 닫힐 때 클래스 제거
  };

  const onLogout = () => {
    localStorage.removeItem("user_id");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    return () => {
      document.body.classList.remove("modal-open"); // 컴포넌트 언마운트 시 클래스 제거
    };
  }, []);

  return (
    <>
      {!isLoggedIn ? (
        <>
          <button
            type="button"
            onClick={openLoginModal}
            className={style.button}
          >
            로그인
          </button>
          <button
            type="button"
            onClick={openSignUpModal}
            className={style.button}
          >
            회원가입
          </button>
        </>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ cursor: "pointer" }} onClick={onLogout}>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="30" r="20" fill="#FFF" />
              <path
                d="M50,58c-22.09,0-40,17.91-40,40h80C90,75.91,72.09,58,50,58z"
                fill="#FFF"
              />
            </svg>
          </div>
          <button type="button" onClick={onLogout} className={style.button}>
            로그아웃
          </button>
        </div>
      )}
      <Modal
        isOpen={loginPageOpen}
        onRequestClose={closeModal}
        className={style.content}
        style={{
          overlay: { backgroundColor: "rgba(33, 33, 33, 0.75)", zIndex: 1500 },
          content: { zIndex: 1500 },
        }}
      >
        <LoginForm openSignUpModal={openSignUpModal} />
      </Modal>
      <Modal
        isOpen={signUpPageOpen}
        onRequestClose={closeModal}
        className={style.signUp}
        style={{
          overlay: { backgroundColor: "rgba(33, 33, 33, 0.75)", zIndex: 1500 },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "90vh", // 최대 높이 설정
            overflowY: "auto", // 내용이 넘칠 경우 스크롤
            zIndex: 1500, // 모달 내용의 z-index 설정
          },
        }}
      >
        <SignUpForm openLoginModal={openLoginModal} />
      </Modal>
    </>
  );
}
