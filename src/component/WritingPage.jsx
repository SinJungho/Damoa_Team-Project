import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import axios from 'axios'; // axios 추가
import { Link, useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import styles from '../css/WritingPage.module.css';

const WritePage = () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [error, setError] = useState({ title: '', content: '' });
    const [errorMessage, setErrorMessage] = useState(''); // 오류 메시지 상태 추가
    const charLimit = 1000;
    const navigate = useNavigate();
    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            navigate('/');
            scrollToTop();
        }
    }, []);
    useEffect(() => {
        localStorage.removeItem('content');
        localStorage.removeItem('title');
    }, []);

    useEffect(() => {
        const savedContent = localStorage.getItem('content');
        const savedTitle = localStorage.getItem('title');
        if (savedContent) setContent(savedContent);
        if (savedTitle) setTitle(savedTitle);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            localStorage.setItem('content', content);
            localStorage.setItem('title', title);
        }, 5000);
        return () => clearTimeout(timer);
    }, [content, title]);

    const handlePrivateChange = () => {
        setIsPrivate(!isPrivate);
    };

    const handleContentChange = (value) => {
        if (value.length <= charLimit) {
            setContent(value);
            setCharCount(value.length);
        }
    };

    const handleImageUpload = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = async () => {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const base64Image = reader.result;
                setContent(content + `<img src="${base64Image}" alt="Uploaded Image" />`);
            };
            reader.readAsDataURL(file);
        };
        input.click();
    };

    const validateTitle = () => {
        if (title.trim() === '') {
            setError((prevError) => ({
                ...prevError,
                title: '제목을 입력해주세요.',
            }));
            return false;
        } else if (title.trim().length < 3) {
            setError((prevError) => ({
                ...prevError,
                title: '제목이 3글자 이상이어야 합니다.',
            }));
            return false;
        } else {
            setError((prevError) => ({ ...prevError, title: '' }));
            return true;
        }
    };

    const validateContent = () => {
        if (content.trim() === '') {
            setError((prevError) => ({
                ...prevError,
                content: '내용을 입력해주세요.',
            }));
            return false;
        } else {
            setError((prevError) => ({ ...prevError, content: '' }));
            return true;
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const handleSubmit = async (e) => {
        const isTitleValid = validateTitle();
        const isContentValid = validateContent();
        if (!isTitleValid || !isContentValid) {
            e.preventDefault();
            scrollToTop();
        } else {
            try {
                // Define the base URL
                let baseURL = '';
                if (process.env.NODE_ENV === 'development') {
                    baseURL = 'http://121.139.20.242:5100';
                }

                // Set the current date as the notice_date
                // Send the review data
                const currentDate = new Date();
                const year = currentDate.getFullYear();
                const month = String(currentDate.getMonth() + 1).padStart(2, '0');
                const day = String(currentDate.getDate()).padStart(2, '0');
                const hours = String(currentDate.getHours()).padStart(2, '0');
                const minutes = String(currentDate.getMinutes()).padStart(2, '0');
                const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
                const noticeDate = formattedDate;
                const response = await axios.post(`${baseURL}/api/community_create`, {
                    user_name: localStorage.getItem('user_id'), // Replace with actual user_name logic
                    notice_name: title,
                    notice_detail: content,
                    notice_date: noticeDate,
                    rating: 5, // Replace with actual rating logic
                });

                if (response.status === 201) {
                    alert('등록이 완료되었습니다.');
                    scrollToTop();
                    navigate('/community');
                } else {
                    setErrorMessage('게시글 등록에 실패했습니다.');
                }
            } catch (error) {
                setErrorMessage('데이터베이스 연결이 실패하였습니다.');
                const userId = localStorage.getItem('user_id');
                if (!userId) {
                    navigate('/');
                    scrollToTop();
                }
                console.error('게시글 등록 실패:', error);
            }
        }
    };

    const handleCancel = () => {
        scrollToTop();
    };
    const handleWriteClick = (event) => {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            event.preventDefault();
            alert('로그인 후에 글을 작성하실 수 있습니다.');
        } else {
            navigate('writing');
        }
    };
    return (
        <div className={styles.writePageContainer}>
            <div className={styles.writeHeader}>
                <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    className={styles.titleInput}
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                        validateTitle();
                    }}
                    onBlur={validateTitle}
                />
                {error.title && <div className={styles.error}>{error.title}</div>}
            </div>
            <div className={styles.warningMessage}>
                비방, 욕설, 비하하는 글을 작성하지 마세요. 타인을 조롱하거나 비난하는 내용은 금지됩니다. 허위 사실
                유포는 엄격히 금지됩니다.
            </div>
            <div className={styles.editorContainer}>
                <ReactQuill
                    value={content}
                    onChange={(value) => {
                        handleContentChange(value);
                        validateContent();
                    }}
                    onBlur={validateContent}
                    className={styles.textArea}
                    style={{ color: 'white', fontSize: '1.4rem' }}
                />
                <div className={styles.charCount}>
                    {charCount}/{charLimit}
                </div>
                {error.content && <div className={styles.error}>{error.content}</div>}
                <button onClick={handleImageUpload} className={styles.imageUploadButton}>
                    이미지 업로드
                </button>
            </div>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            <div className={styles.footer}>
                <Link to="/community" className={styles.linkButton}>
                    <button className={styles.cancelButton} onClick={handleCancel}>
                        취소
                    </button>
                </Link>
                <button className={styles.submitButton} onClick={handleSubmit}>
                    등록
                </button>
            </div>
        </div>
    );
};

export default WritePage;
