import style from '../css/LoginForm.module.css';

export default function SignUpForm({ openLoginModal }) {
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
                    <button className={style.register__button} onClick={openLoginModal}>
                        로그인 하러 가기
                    </button>
                </div>
            </div>
        </div>
    );
}
