import React from 'react';
import { Outlet } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
}
body {
    background-color: #141414;
    margin: 0 auto;
}
`;

export default function CommunityPage() {
    return (
        <>
            {/* Router 설정처럼 /community 경로일때 Board 랜더링 /community/writing 일때 writingPage 랜더링 */}
            <GlobalStyle />
            <Outlet /> {/* 자식 라우트가 렌더링될 위치 */}
        </>
    );
}
