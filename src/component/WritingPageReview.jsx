import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import Rate from 'rc-rate';
import axios from 'axios'; // Axios import
import { Link, useNavigate } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import 'rc-rate/assets/index.css';
import styles from '../css/WritingPage.module.css';
import StarRating from '../svg/StarRating';

const WritingPageReview = () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [error, setError] = useState({ title: '', content: '', genre: '', rating: '' });
    const [rate, setRate] = useState(0);
    const [errorMessage, setErrorMessage] = useState(''); // Error message state
    const [genre, setGenre] = useState(''); // Genre state, defaulting to empty
    const charLimit = 1000;
    const navigate = useNavigate();
    const textAreaRef = useRef(null);

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        if (!userId) {
            navigate('/');
            scrollToTop();
        }
    }, []);

    useEffect(() => {
        // 컴포넌트가 마운트될 때 로컬 스토리지 초기화
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
            validateContent(value); // 유효성 검사 실행
        }
    };

    const validateTitle = (value = title) => {
        if (value.trim() === '') {
            setError((prevError) => ({
                ...prevError,
                title: '제목을 입력해주세요.',
            }));
            return false;
        } else if (value.trim().length < 3) {
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

    const validateContent = (value = content) => {
        if (value.trim() === '') {
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

    const validateGenre = (value = genre) => {
        if (value === '') {
            setError((prevError) => ({
                ...prevError,
                genre: '장르를 선택해주세요.',
            }));
            return false;
        } else {
            setError((prevError) => ({ ...prevError, genre: '' }));
            return true;
        }
    };

    const validateRating = (value = rate) => {
        if (value === 0) {
            setError((prevError) => ({
                ...prevError,
                rating: '별점을 선택해주세요.',
            }));
            return false;
        } else {
            setError((prevError) => ({ ...prevError, rating: '' }));
            return true;
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isGenreValid = validateGenre();
        if (!isGenreValid) {
            scrollToTop();
            return;
        }

        const isRatingValid = validateRating();
        if (!isRatingValid) {
            scrollToTop();
            return;
        }

        const isTitleValid = validateTitle();
        if (!isTitleValid) {
            scrollToTop();
            return;
        }

        const isContentValid = validateContent();
        if (!isContentValid) {
            scrollToTop();
            return;
        }

        const userId = localStorage.getItem('user_id');
        if (!userId) {
            navigate('/');
            scrollToTop();
            return;
        }

        try {
            // Define the base URL
            let baseURL = '';
            if (process.env.NODE_ENV === 'development') {
                baseURL = 'http://121.139.20.242:5100';
            }

            // Set the current date as the review_date
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const hours = String(currentDate.getHours()).padStart(2, '0');
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
            const reviewDate = formattedDate;

            // Send the review data
            const response = await axios.post(`${baseURL}/api/review_create`, {
                user_name: userId,
                notice_name: title,
                notice_detail: content,
                notice_date: reviewDate,
                rating: rate,
                notice_genre: genre,
            });

            if (response.status === 201) {
                alert('등록이 완료되었습니다.');
                scrollToTop();
                navigate('/review');
            } else {
                setErrorMessage('리뷰 등록에 실패했습니다.');
            }
        } catch (error) {
            setErrorMessage('데이터베이스 연결에 실패했습니다.');
            console.error('리뷰 등록 실패:', error);
        }
    };

    const handleCancel = () => {
        scrollToTop();
    };

    return (
        <div className={styles.writePageContainer}>
            <div className={styles.writeHeader}>
                <div className={styles.writeHeader__input}>
                    <select
                        name="select"
                        className={styles.select}
                        value={genre}
                        onChange={(e) => {
                            setGenre(e.target.value);
                            validateGenre(e.target.value);
                        }} // Handle genre change
                    >
                        <option value="">장르 선택</option>
                        <option value="범죄">범죄</option>
                        <option value="스릴러">스릴러</option>
                        <option value="코미디">코미디</option>
                        <option value="드라마">드라마</option>
                        <option value="모험">모험</option>
                        <option value="키즈">키즈</option>
                        <option value="액션">액션</option>
                        <option value="애니메이션">애니메이션</option>
                        <option value="판타지">판타지</option>
                    </select>
                    <Rate
                        value={rate}
                        allowHalf={true}
                        onChange={(value) => {
                            setRate(value);
                            validateRating(value);
                        }}
                        className={styles.rateing}
                    />
                    <input
                        type="text"
                        placeholder="제목을 입력해주세요"
                        className={styles.titleInput}
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            validateTitle(e.target.value);
                        }}
                    />
                </div>
                {(error.genre || error.rating || error.title) && (
                    <div className={styles.error}>{error.genre || error.rating || error.title}</div>
                )}
                <div className={styles.warningMessage}>
                    비방, 욕설, 비하하는 글을 작성하지 마세요. 타인을 조롱하거나 비난하는 내용은 금지됩니다. 허위 사실
                    유포는 엄격히 금지됩니다.
                </div>
            </div>
            <div className={styles.editorContainer}>
                <textarea
                    ref={textAreaRef}
                    value={content}
                    onChange={(e) => {
                        handleContentChange(e.target.value);
                    }}
                    className={styles.textArea}
                />
                <div className={styles.charCount}>
                    {charCount}/{charLimit}
                </div>
                {error.content && <div className={styles.error}>{error.content}</div>}
            </div>
            {errorMessage && <div className={styles.error}>{errorMessage}</div>}
            <div className={styles.footer}>
                <Link to="/review" className={styles.linkButton}>
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

export default WritingPageReview;
