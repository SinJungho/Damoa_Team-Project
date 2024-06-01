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

export default function WritingPage() {
    return (
        <>
            <GlobalStyle />
            <h1>여긴 글쓰기 페이지 입니다.</h1>
        </>
    );
}
