import React, { useState } from 'react';
import { createGuestSession } from './Api';

const Login = () => {
    const [session, setSession] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        try {
            const data = await createGuestSession();
            setSession(data.guest_session_id);
            setError(null);
        } catch (error: any) {
            setError(error.message);
            setSession(null);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>로그인</button>
            {session && <div>세션 ID: {session}</div>}
            {error && <div>오류: {error}</div>}
        </div>
    );
};

export default Login;
