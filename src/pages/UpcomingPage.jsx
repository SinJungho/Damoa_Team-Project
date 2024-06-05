import { createGlobalStyle } from 'styled-components';
import style from '../css/UpcomingPage.module.css';
import UpcomingContent from '../component/UpcomingContent';

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
            <h1 className={style.Upcoming__title}>기대되는 개봉작들</h1>
            <div className={style[`Upcoming__cotent-container`]}>
                <UpcomingContent />
            </div>
        </>
    );
}
