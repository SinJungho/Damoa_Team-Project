import style from "../css/LoginForm.module.css";

export default function SignUpForm() {
  return (
    <div className={style.bg}>
      <div className={style.bg__container}>
        <p className={style.login__title}>회원가입을 해주세요</p>
        <div className={style.login__input}>
          {/* 아이디 */}
          <div className={style.login__input__id}>
            <p>아이디를 입력해주세요</p>
            <input type="text" name="id" />
          </div>
          {/* 비밀번호 */}
          <div className={style.login__input__pw}>
            <div>
              <p>비밀번호를 입력해주세요.</p>
            </div>
            <div className="pw-input-group">
              <input type="password" name="password" />
            </div>
          </div>
          {/* 비밀번호 검증 (다시 입력) */}
          <div className={style.login__input__pw}>
            <div>
              <p>비밀번호를 다시 입력해주세요.</p>
            </div>
            <div className="pw-input-group">
              <input type="password" name="password" />
            </div>
          </div>
          {/* 이름 */}
          <div className={style.login__input__name}>
            <p>이름을 입력해주세요.</p>
            <input type="text" name="name" />
          </div>
          {/* 생년 월일 */}
          <div className={style.login__input__brith}>
            <p>생년월일을 입력해주세요.</p>
            <input type="date" name="brith" />
          </div>
          {/* 전화번호 */}
          <div className={style.login__input__phoneNumber}>
            <p>전화번호을 입력해주세요.</p>
            <input type="tel" name="phoneNumber" />
          </div>
          {/* 이메일 */}
          <div className={style.login__input__email}>
            <p>이메일을 입력해주세요.</p>
            <input type="email" name="email" />
          </div>
        </div>
        <button className={style.login__loginBtn}>
          <p>회원가입</p>
        </button>
      </div>
      <div className={style.register}>
        <div className={style.register__container}>
          <a className={style.register__title} href="#">
            로그인 하러 가기
          </a>
        </div>
      </div>
    </div>
  );
}

function EyeSvg(params) {
  return (
    <svg
      className={style[`eye-icon`]}
      width="44"
      height="44"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 15.5417C33.75 15.5417 31.25 22 31.25 22C31.25 22 33.75 28.4584 40 28.4584C46.25 28.4584 48.75 22 48.75 22C48.75 22 46.25 15.5417 40 15.5417Z"
        stroke="#999999"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M40 24.5C41.381 24.5 42.5 23.3807 42.5 22C42.5 20.6193 41.381 19.5 40 19.5C38.619 19.5 37.5 20.6193 37.5 22C37.5 23.3807 38.619 24.5 40 24.5Z"
        stroke="#999999"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      width={21}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        flexGrow: 0,
        flexShrink: 0,
        width: 20,
        height: 20,
        position: "relative",
      }}
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M3.625 10H17.375"
        stroke="white"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.75 4.375L17.375 10L11.75 15.625"
        stroke="white"
        stroke-width={2}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
