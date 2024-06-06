import React from 'react';
import Login from './Login';
import Register from './Register';

function App() {
    return (
        <div className="App">
            <h1>로그인</h1>
            <Login />
            <h1>회원가입</h1>
            <Register />
        </div>
    );
}

export default App;
