import { Outlet, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Sort from '../component/Sort';
import Rating from '../component/ReviewRating';
import app from '../css/App.module.css';
import ReviewText from '../component/ReviewPageReviewText';
import ReviewComponent from '../component/ReviewPageReview';
import styles from '../css/Layout.module.css';
import OTTReview from '../component/OTTReview';
import ReviewPageGenre from '../component/ReviewPageGenre';

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
            {!isWritingPage ? (
                <div className={styles.layout}>
                    <div className={styles.ReviewPageverticalContainer}>
                        <ReviewText />
                        <ReviewComponent />
                    </div>
                    <div className={app.Rivewbg}>
                        <Sort />
                        <ReviewPageGenre />
                        <OTTReview />
                        <Rating />
                    </div>
                </div>
            ) : (
                <Outlet />
            )}
        </>
    );
}
