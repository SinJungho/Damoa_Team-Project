import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
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
    return (
        <>
            <GlobalStyle />
            {/* Right Notice */}
            <div className={styles.layout}>
                <div className={styles.ReviewPageverticalContainer}>
                    <ReviewText />
                    <ReviewComponent />
                </div>

                {/* Left Notice */}
                <div className={app.Rivewbg}>
                    <Sort />
                    <Language />
                    <Rating />
                    <Genre />
                </div>
            </div>
        </>
    );
}
