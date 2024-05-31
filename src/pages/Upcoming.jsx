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

export default function UpcomingPage() {
    return (
        <>
            <GlobalStyle />
            <h1>여긴 기대되는 개봉작 컴포넌트가 들어올겁니다.</h1>
        </>
    );
}
