import { createGlobalStyle } from 'styled-components';
import Board from '../component/Board';

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

export default function () {
    return (
        <>
            <GlobalStyle />
            <Board />
        </>
    );
}
