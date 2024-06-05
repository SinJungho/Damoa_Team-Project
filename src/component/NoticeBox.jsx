import React, { useState, useEffect } from 'react';
import styles from '../css/Notice.module.css';
import axios from 'axios';

export default function NoticeBox() {
    const [data, setData] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Define the base URL
                let baseURL = '';
                if (process.env.NODE_ENV === 'development') {
                    // If in development environment, use local IP
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

    return (
        <>
            {data.map((item) => (
                <div key={item.id} className={styles.container}>
                    <div className={styles.box}>
                        <p className={`${styles['text-block']} ${styles.title}`}>{item.notice_name}</p>
                        {/* Mapping through the data to display notices */}
                        <p className={styles['text-block']}>{item.notice_detail}</p>
                    </div>
                </div>
            ))}
            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}
