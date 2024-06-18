import { useState } from 'react';
import axios from 'axios';
import style from '../css/LoginForm.module.css';
import LoginArrow from '../svg/LoginArrow';

export default function SignUpForm({ openLoginModal }) {
    const [user_id, setUserId] = useState('');
    const [user_pw, setUserPw] = useState('');
    const [confirmPw, setConfirmPw] = useState('');
    const [user_name, setName] = useState('');
    const [user_date, setBirth] = useState('');
    const [user_num, setPhoneNumber] = useState('');
    const [user_email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSignUp = async () => {
        // 유효성 검사
        if (user_id.length < 3) {
            setErrorMessage('아이디는 3글자 이상이어야 합니다.');
            return;
        }
        if (user_pw !== confirmPw) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (user_name.length < 2) {
            setErrorMessage('이름은 2글자 이상이어야 합니다.');
            return;
        }
        if (user_num.length < 11) {
            setErrorMessage('전화번호는 11글자 이상이어야 합니다.');
            return;
        }
        if (!user_date) {
            setErrorMessage('생년 월일을 입력해주세요');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(user_email)) {
            setErrorMessage('유효한 이메일 형식이 아닙니다.');
            return;
        }

        try {
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                baseURL = 'http://121.139.20.242:5100';
            }
            const response = await axios.post(`${baseURL}/api/register`, {
                user_id,
                user_pw,
                user_name,
                user_date,
                user_num,
                user_email,
            });
            if (response.data.success) {
                setSuccessMessage('회원가입이 완료되었습니다.');
                window.location.reload();
            } else {
                setErrorMessage('회원가입에 실패했습니다. 다시 시도해주세요.');
            }
        } catch (error) {
            setErrorMessage('데이터베이스 연결이 실패하였습니다.');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSignUp();
        }
    };

    return (
        <div className={style.bg}>
            <div className={style.bg__container}>
                <p className={style.login__title}>회원가입을 해주세요</p>
                <div className={style.login__input} onKeyDown={handleKeyDown}>
                    {/* 아이디 */}
                    <div className={style.login__input__id}>
                        <p>아이디를 입력해주세요</p>
                        <input type="text" name="id" value={user_id} onChange={(e) => setUserId(e.target.value)} />
                    </div>
                    {/* 비밀번호 */}
                    <div className={style.login__input__pw}>
                        <div>
                            <p>비밀번호를 입력해주세요.</p>
                        </div>
                        <div className={style.pwInputGroup}>
                            <input
                                type="password"
                                name="pw"
                                value={user_pw}
                                onChange={(e) => setUserPw(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* 비밀번호 검증 (다시 입력) */}
                    <div className={style.login__input__pw}>
                        <div>
                            <p>비밀번호를 다시 입력해주세요.</p>
                        </div>
                        <div className={style.pwInputGroup}>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPw}
                                onChange={(e) => setConfirmPw(e.target.value)}
                            />
                        </div>
                    </div>
                    {/* 이름 */}
                    <div className={style.login__input__name}>
                        <p>이름을 입력해주세요.</p>
                        <input type="text" name="name" value={user_name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    {/* 생년월일 */}
                    <div className={style.login__input__brith}>
                        <p>생년월일을 입력해주세요.</p>
                        <input type="date" name="birth" value={user_date} onChange={(e) => setBirth(e.target.value)} />
                    </div>
                    {/* 전화번호 */}
                    <div className={style.login__input__phoneNumber}>
                        <p>전화번호를 입력해주세요.</p>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={user_num}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    {/* 이메일 */}
                    <div className={style.login__input__email}>
                        <p>이메일을 입력해주세요.</p>
                        <input
                            type="email"
                            name="email"
                            value={user_email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                {successMessage && <p className={style.successMessage}>{successMessage}</p>}
                <button className={style.login__loginBtn} onClick={handleSignUp}>
                    <p>회원가입</p>
                    <LoginArrow />
                </button>
                <div className={style.register}>
                    <div className={style.register__container}>
                        <a className={style.register__title} onClick={openLoginModal}>
                            로그인 하러 가기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
