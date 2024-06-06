import { Outlet, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Sort from '../component/Sort';
import Language from '../svg/Language';
import Rating from '../component/Rating';
import Genre from '../component/Genre';
import app from '../css/App.module.css';
import ReviewText from '../component/ReviewPageReviewText';
import ReviewComponent from '../component/ReviewPageReview';
import styles from '../css/Layout.module.css';

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

export default function Review() {
    const location = useLocation();
    const isWritingPage = location.pathname === '/review/writing';

    return (
        <>
            <GlobalStyle />
            <div className={styles.layout}>
                {!isWritingPage && (
                    <>
                        <div className={styles.ReviewPageverticalContainer}>
                            <ReviewText />
                            <ReviewComponent />
                        </div>
                        <div className={app.Rivewbg}>
                            <Sort />
                            <Language />
                            <Rating />
                            <Genre />
                        </div>
                    </>
                )}
                {isWritingPage && <Outlet />}
            </div>
        </>
    );
}
