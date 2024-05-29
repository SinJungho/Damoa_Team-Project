import React from "react";
import { Link } from "react-router-dom";
import BennerImage from "../img/Netflix.png";
import styles from "../css/MainBenner.module.css";
import { ButtonIcon } from "../svg/MainBennerIcon";

export default function MainBenner() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // 최상단으로 스크롤
      behavior: "smooth", // 부드러운 스크롤 효과 적용
    });
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={BennerImage} alt="" />
      <div className={styles.contentWrapper}>
        <p className={styles.heading}>지금 최신 작품들을 만나보세요.</p>
        <p className={styles.subheading}>
          여러가지 최신 작품들의 평점들을 손 쉽게 확인 할 수 있어요.
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <Link
          to="/review"
          onClick={scrollToTop}
          className={styles.buttonTextLink}
        >
          <button className={styles.button}>
            <ButtonIcon className={styles.icon} />
            <p className={styles.buttonText}>리뷰 보러 가기</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
