import style from '../css/LoginForm.module.css';
import { useState } from 'react';
import axios from 'axios';
import LoginArrow from '../svg/LoginArrow';
import EyeSvg from '../svg/EyeSvg';

export default function LoginForm({ openSignUpModal }) {
    const [user_id, setUsername] = useState('');
    const [user_pw, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        try {
            // Define the base URL
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                // If in development environment, use local IP
                baseURL = 'http://121.139.20.242:5100';
            }
            const response = await axios.post(`${baseURL}/api/check`, {
                user_id: user_id,
                user_pw: user_pw,
            });
            if (response.data.valid) {
                localStorage.setItem('user_id', user_id);
                window.location.reload();
            } else {
                setErrorMessage('아이디 또는 비밀번호가 잘못되었습니다.');
            }
        } catch (error) {
            if (!user_id || !user_pw) {
                setErrorMessage('아이디 또는 비밀번호를 입력해주세요.');
            } else {
                setErrorMessage('데이터베이스 연결이 실패하였습니다.');
            }
        }
    };

    const handleMouseDown = () => {
        setShowPassword(true);
    };

    const handleMouseUp = () => {
        setShowPassword(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    return (
        <div className={style.bg}>
            <div className={style.bg__container}>
                <p className={style.login__title}>로그인을 해주세요</p>
                <div className={style.login__input}>
                    <div className={style.login__input__id}>
                        <p>아이디</p>
                        <input
                            type="text"
                            name="id"
                            value={user_id}
                            onChange={(e) => setUsername(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                    </div>
                    <div className={style.login__input__pw}>
                        <div>
                            <p>비밀번호</p>
                            <a href="#">비밀번호를 잊어버렸나요?</a>
                        </div>
                        <div className={style.pwInputGroup}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={user_pw}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <span onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
                                <EyeSvg />
                            </span>
                        </div>
                    </div>
                </div>
                {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                <button className={style.login__loginBtn} onClick={handleLogin}>
                    <p>로그인</p>
                    <LoginArrow />
                </button>
                <div className={style.register}>
                    <div className={style.register__container}>
                        <a className={style.register__title} onClick={openSignUpModal}>
                            회원가입
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
