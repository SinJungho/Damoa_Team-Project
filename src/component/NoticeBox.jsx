import React from "react";
import styles from "../css/Notice.module.css";

export default function NoticeBox() {
  return (
    // <div className={styles.container}>
    <div className={styles.box}>
      <p className={`${styles["text-block"]} ${styles.title}`}>공지사항</p>
      <p className={styles["text-block"]}>
        리뷰 작성 시 유의사항: 상호 존중과 건전한 커뮤니티 문화 조성을 위해
      </p>
    </div>
    // </div>
  );
}
