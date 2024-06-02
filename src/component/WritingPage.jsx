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
    const charLimit = 1000;

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

    return (
        <div className={styles.writePageContainer}>
            <div className={styles.writeHeader}>
                <input
                    type="text"
                    placeholder="제목을 입력해주세요"
                    className={styles.titleInput}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
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
                <ReactQuill value={content} onChange={handleContentChange} className={styles.textArea} />
                <div className={styles.charCount}>
                    {charCount}/{charLimit}
                </div>
                <button onClick={handleImageUpload} className={styles.imageUploadButton}>
                    이미지 업로드
                </button>
            </div>
            <div className={styles.footer}>
                <Link to="/community" className={styles.linkButton}>
                    <button className={styles.cancelButton}>취소</button>
                </Link>
                <Link to="/community" className={styles.linkButton}>
                    <button className={styles.submitButton}>등록</button>
                </Link>
            </div>
        </div>
    );
};

export default WritePage;
