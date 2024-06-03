import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import { Link } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import styles from '../css/WritingPage.module.css';

const WritePage = () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [charCount, setCharCount] = useState(0);
    const [error, setError] = useState({ title: '', content: '' });
    const charLimit = 1000;

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
            setError((prevError) => ({ ...prevError, title: '제목을 입력해주세요.' }));
            return false;
        } else if (title.trim().length < 3) {
            setError((prevError) => ({ ...prevError, title: '제목이 3글자 이상이어야 합니다.' }));
            return false;
        } else {
            setError((prevError) => ({ ...prevError, title: '' }));
            return true;
        }
    };

    const validateContent = () => {
        if (content.trim() === '') {
            setError((prevError) => ({ ...prevError, content: '내용을 입력해주세요.' }));
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

    const handleSubmit = (e) => {
        const isTitleValid = validateTitle();
        const isContentValid = validateContent();
        if (!isTitleValid || !isContentValid) {
            e.preventDefault();
            scrollToTop();
        } else {
            alert('등록이 완료되었습니다.');
            scrollToTop();
        }
    };

    const handleCancel = () => {
        scrollToTop();
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
                <div className={styles.privateContainer}>
                    <input
                        type="checkbox"
                        id="private"
                        checked={isPrivate}
                        onChange={handlePrivateChange}
                        className={styles.privateCheckbox}
                    />
                    <label htmlFor="private" className={styles.privateLabel}>
                        회원만 보기
                    </label>
                </div>
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
                />
                <div className={styles.charCount}>
                    {charCount}/{charLimit}
                </div>
                {error.content && <div className={styles.error}>{error.content}</div>}
                <button onClick={handleImageUpload} className={styles.imageUploadButton}>
                    이미지 업로드
                </button>
            </div>
            <div className={styles.footer}>
                <Link to="/community" className={styles.linkButton}>
                    <button className={styles.cancelButton} onClick={handleCancel}>
                        취소
                    </button>
                </Link>
                <Link to="/community" className={styles.linkButton}>
                    <button className={styles.submitButton} onClick={handleSubmit}>
                        등록
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default WritePage;
