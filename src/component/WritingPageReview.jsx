import React, { useState, useEffect, useRef } from "react";
import ReactQuill from "react-quill";
import Rate from "rc-rate";
import axios from 'axios'; // Axios import
import { Link, useNavigate } from 'react-router-dom';
import "react-quill/dist/quill.snow.css";
import "rc-rate/assets/index.css";
import styles from "../css/WritingPage.module.css";
import StarRating from "../svg/StarRating";

const WritingPageReview = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [error, setError] = useState({ title: "", content: "" });
  const [rate, setRate] = useState(0);
  const [errorMessage, setErrorMessage] = useState(''); // Error message state
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
    localStorage.removeItem("content");
    localStorage.removeItem("title");
  }, []);

  useEffect(() => {
    const savedContent = localStorage.getItem("content");
    const savedTitle = localStorage.getItem("title");
    if (savedContent) setContent(savedContent);
    if (savedTitle) setTitle(savedTitle);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem("content", content);
      localStorage.setItem("title", title);
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
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64Image = reader.result;
        setContent(
          content + `<img src="${base64Image}" alt="Uploaded Image" />`
        );
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const validateTitle = () => {
    if (title.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        title: "제목을 입력해주세요.",
      }));
      return false;
    } else if (title.trim().length < 3) {
      setError((prevError) => ({
        ...prevError,
        title: "제목이 3글자 이상이어야 합니다.",
      }));
      return false;
    } else {
      setError((prevError) => ({ ...prevError, title: "" }));
      return true;
    }
  };

  const validateContent = () => {
    if (content.trim() === "") {
      setError((prevError) => ({
        ...prevError,
        content: "내용을 입력해주세요.",
      }));
      return false;
    } else {
      setError((prevError) => ({ ...prevError, content: "" }));
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
    const userId = localStorage.getItem('user_id');
    if (!isTitleValid || !isContentValid) {
      e.preventDefault();
      scrollToTop();
    } else if (!userId) {
      navigate('/');
      scrollToTop();
    } else {
      try {
        // Define the base URL
        const baseURL = 'http://121.139.20.242:5100';

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
          rating: rate
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
    }
  };

  const handleCancel = () => {
    scrollToTop();
  };

  return (
    <div className={styles.writePageContainer}>
      <div className={styles.writeHeader}>
        <div className={styles.writeHeader__input}>
          <select name="select" className={styles.select}>
            <option value="1">범죄</option>
            <option value="2">스릴러</option>
            <option value="3">코미디</option>
            <option value="4">영화</option>
            <option value="5">추리</option>
            <option value="6">SF</option>
            <option value="7">판타지</option>
          </select>
          <Rate
            value={rate}
            allowHalf={true}
            onChange={setRate}
            className={styles.rateing}
          />
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
        </div>
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
        <textarea
          ref={textAreaRef}
          value={content}
          onChange={(e) => {
            handleContentChange(e.target.value);
          }}
          onBlur={validateContent}
          className={styles.textArea}
        />
        <div className={styles.charCount}>
          {charCount}/{charLimit}
        </div>
        {error.content && <div className={styles.error}>{error.content}</div>}
        {/* <button
          onClick={handleImageUpload}
          className={styles.imageUploadButton}
        >
          이미지 업로드
        </button> */}
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
