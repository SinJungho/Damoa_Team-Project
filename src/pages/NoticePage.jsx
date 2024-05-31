import { createGlobalStyle } from 'styled-components';
import style from '../css/Notice.module.css';
import NoticeBox from '../component/NoticeBox';

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

export default function Notice() {
    return (
        <>
            <GlobalStyle />
            <div className={style.container}>
                <NoticeBox />
                <NoticeBox />
                <NoticeBox />
                <NoticeBox />
            </div>
        </>
    );
}
