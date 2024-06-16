import { useState, useEffect } from 'react';
import axios from 'axios';
import style from '../css/LoginForm.module.css';

export default function MyPageForm() {
    const [user_id, setUserId] = useState('');
    const [user_pw, setUserPw] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [new_pw, setNewPw] = useState('');
    const [confirm_new_pw, setConfirmNewPw] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isVerified, setIsVerified] = useState(false); // 새로운 상태 변수 추가

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (userId) {
            setUserId(userId);
        }
    }, []);

    const handleVerification = async () => {
        try {
            // Define the base URL
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                baseURL = 'http://121.139.20.242:5100';
            }
            const response = await axios.post(`${baseURL}/api/verify`, {
                user_id: user_id,
                user_pw: user_pw,
                phone_number: phone_number,
            });
            if (response.data.valid) {
                setIsVerified(true); // 검증 성공 시 상태 업데이트
            } else {
                setErrorMessage('아이디 또는 비밀번호 또는 전화번호가 잘못되었습니다.');
            }
        } catch (error) {
            setErrorMessage('데이터베이스 연결이 실패하였습니다.');
        }
    };

    const handleUpdate = async () => {
        if (new_pw !== confirm_new_pw) {
            setErrorMessage('새 비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                baseURL = 'http://121.139.20.242:5100';
            }
            const response = await axios.post(`${baseURL}/api/update`, {
                user_id: localStorage.getItem('user_id'),
                new_password: new_pw,
            });
            if (response.data.success) {
                setSuccessMessage('회원 정보가 성공적으로 업데이트되었습니다.');
                window.location.reload();
            } else {
                setErrorMessage('업데이트 중 오류가 발생하였습니다.');
            }
        } catch (error) {
            setErrorMessage('데이터베이스 연결이 실패하였습니다.');
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (!isVerified) {
                handleVerification();
            } else {
                handleUpdate();
            }
        }
    };

    return (
        <div className={style.bg} onKeyPress={handleKeyPress}>
            <div className={style.bg__container}>
                <p className={style.login__title}>회원 정보 수정</p>
                {!isVerified ? (
                    <div className={style.login__input}>
                        <div className={style.login__input__id}>
                            <p>아이디</p>
                            <input type="text" name="id" value={user_id} readOnly />
                        </div>
                        <div className={style.login__input__pw}>
                            <p>현재 비밀번호</p>
                            <input
                                type="password"
                                name="current_password"
                                value={user_pw}
                                onChange={(e) => setUserPw(e.target.value)}
                            />
                        </div>
                        <div className={style.login__input__phoneNumber}>
                            <p>전화번호</p>
                            <input
                                type="text"
                                name="phone_number"
                                value={phone_number}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                        <button className={style.login__loginBtn} onClick={handleVerification}>
                            <p>검증</p>
                        </button>
                    </div>
                ) : (
                    <div className={style.login__input}>
                        <div className={style.login__input__pw}>
                            <p>새 비밀번호</p>
                            <input
                                type="password"
                                name="new_password"
                                value={new_pw}
                                onChange={(e) => setNewPw(e.target.value)}
                            />
                        </div>
                        <div className={style.login__input__pw}>
                            <p>새 비밀번호 확인</p>
                            <input
                                type="password"
                                name="confirm_new_password"
                                value={confirm_new_pw}
                                onChange={(e) => setConfirmNewPw(e.target.value)}
                            />
                        </div>
                        {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
                        {successMessage && <p className={style.successMessage}>{successMessage}</p>}
                        <button className={style.login__loginBtn} onClick={handleUpdate}>
                            <p>업데이트</p>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
