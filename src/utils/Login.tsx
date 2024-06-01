import React, { useState } from 'react';
import { createGuestSession } from './Api';

const Login = () => {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [session, setSession] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            const data = await createGuestSession(userId, userPw);
            if (data.userValid) {
                setSession(`로그인 성공, 게스트 세션 ID: ${data.guest_session_id}`); // 성공 메시지 및 세션 ID 설정
                setError(null);
            } else {
                setError('로그인 실패');
                setSession(null);
            }
        } catch (error: any) {
            setError(error.message);
            setSession(null);
        }
    };

    return (
        <div>
            <input type="text" placeholder="User ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <input type="password" placeholder="Password" value={userPw} onChange={(e) => setUserPw(e.target.value)} />
            <button onClick={handleLogin}>로그인</button>
            {session && <div>세션: {session}</div>}
            {error && <div>오류: {error}</div>}
        </div>
    );
};

export default Login;
