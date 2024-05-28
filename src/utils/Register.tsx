import React, { useState } from 'react';
import { registerUser } from './Api';

const Register = () => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [money, setMoney] = useState('');
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async () => {
        try {
            await registerUser(userId, userPw, parseFloat(money));
            setSuccess('회원가입 성공');
            setError(null);
        } catch (error: any) {
            setError(error.message);
            setSuccess(null);
        }
    };

    return (
        <div>
            <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="password" placeholder="Password" value={userPw} onChange={(e) => setUserPw(e.target.value)} />
            <input type="number" placeholder="Money" value={money} onChange={(e) => setMoney(e.target.value)} />
            <button onClick={handleRegister}>회원가입</button>
            {success && <div>{success}</div>}
            {error && <div>오류: {error}</div>}
        </div>
    );
};

export default Register;
