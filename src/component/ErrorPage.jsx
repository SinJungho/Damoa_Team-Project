import React from 'react';
import { useRouteError } from 'react-router-dom';
import styles from '../css/ErrorPage.module.css';

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <div className={styles.errorContainer}>
            <h1>오류 발생!</h1>
            <p>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <button onClick={() => window.history.back()} className={styles.goBackButton}>
                뒤로 가기
            </button>
        </div>
    );
};

export default ErrorPage;
