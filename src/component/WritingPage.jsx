import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import { Link, useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import styles from "../css/WritingPage.module.css";

const WritePage = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const charLimit = 1000;
  const navigate = useNavigate();

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
      setContentError("");
    } else {
      setContentError("내용이 최대 글자 수를 초과했습니다.");
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let valid = true;

    if (title.trim() === "") {
      setTitleError("제목을 입력해주세요");
      valid = false;
    } else if (title.length < 3) {
      setTitleError("제목은 3글자 이상 작성해주실 바랍니다");
      valid = false;
    } else {
      setTitleError("");
    }

    if (content.trim() === "") {
      setContentError("내용을 입력해주세요");
      valid = false;
    } else {
      setContentError("");
    }

    if (valid) {
      alert("등록이 완료되었습니다");
      scrollToTop();
      navigate("/community");
    }
  };

  return (
    <div className={styles.writePageContainer}>
      <div className={styles.writeHeader}>
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          className={`${styles.titleInput} ${
            titleError ? styles.inputError : ""
          }`}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && <div className={styles.errorMessage}>{titleError}</div>}
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
          onChange={handleContentChange}
          className={styles.textArea}
        />
        <div className={styles.charCount}>
          {charCount}/{charLimit}
        </div>
        <button
          onClick={handleImageUpload}
          className={styles.imageUploadButton}
        >
          이미지 업로드
        </button>
        {contentError && (
          <div className={styles.errorMessage}>{contentError}</div>
        )}
      </div>
      <div className={styles.footer}>
        <Link
          to="/community"
          className={styles.linkButton}
          onClick={scrollToTop}
        >
          <button className={styles.cancelButton}>취소</button>
        </Link>
        <button onClick={handleSubmit} className={styles.submitButton}>
          등록
        </button>
      </div>
    </div>
  );
};

export default WritePage;
