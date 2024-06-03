import style from "../css/LoginForm.module.css";
import { useState } from "react";
import Modal from "react-modal";

export default function LoginForm({ openSignUpModal }) {
  return (
    <div className={style.bg}>
      <div className={style.bg__container}>
        <p className={style.login__title}>로그인을 해주세요</p>
        <div className={style.login__input}>
          <div className={style.login__input__id}>
            <p>아이디</p>
            <input type="text" name="id" />
          </div>
          <div className={style.login__input__pw}>
            <div>
              <p>비밀번호</p>
              <a href="#">비밀번호를 잊어버렸나요?</a>
            </div>
            <div className="pw-input-group">
              <input type="password" name="password" />
              <EyeSvg />
            </div>
          </div>
        </div>
        <button className={style.login__loginBtn}>
          <p>로그인</p>
          <Arrow />
        </button>
      </div>
      <div className={style.register}>
        <div className={style.register__container}>
          <button className={style.register__button} onClick={openSignUpModal}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
}
