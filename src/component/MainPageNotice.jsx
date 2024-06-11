import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Notice.module.css';
import axios from 'axios';

export default function MainPageNotice({ showAll, truncate, fullWidth }) {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                let baseURL = '';
                if (process.env.NODE_ENV === 'development') {
                    baseURL = 'http://121.139.20.242:5100';
                }
                const response = await axios.post(`${baseURL}/api/notice_selectlist`, {
                    notice_auth: 3,
                });
                if (response.data.valid) {
                    setData(response.data.data);
                } else {
                    setErrorMessage('리스트를 불러오는데 실패하였습니다.');
                }
            } catch (error) {
                setErrorMessage('데이터베이스 연결이 실패하였습니다.');
            }
        };

        fetchData();
    }, []);

    const noticesToShow = showAll ? data : data.slice(0, 1);

    const truncateText = (text, length) => {
        if (text.length <= length) {
            return text;
        }
        return text.substring(0, length) + '...';
    };

    const renderHTML = (htmlString) => {
        return { __html: htmlString };
    };

    return (
        <>
            {noticesToShow.map((item) => (
                <Link to="/notice" key={item.id} className={styles.container}>
                    <div className={`${styles.box} ${fullWidth ? styles['full-width'] : ''}`}>
                        <p
                            className={`${styles['text-block']} ${styles.title} ${
                                truncate ? styles['single-line'] : ''
                            }`}
                        >
                            {truncate ? truncateText(item.notice_name, 50) : item.notice_name}
                        </p>
                        {/* <p
                            className={`${styles['text-block']} ${truncate ? styles['single-line'] : ''}`}
                            dangerouslySetInnerHTML={renderHTML(item.notice_detail)}
                        /> */}
                    </div>
                </Link>
            ))}
            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}
