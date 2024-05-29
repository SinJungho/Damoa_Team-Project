import { useNavigate } from "react-router-dom";
import style from "../../../css/ReviewPage.moudule.css";

export default function ReviewText() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/review"); // 여기에 이동하고 싶은 경로를 적습니다.
  };

  return (
    <div className={style.header}>
      <p className={style.title}>한 줄 리뷰</p>
      <button className={style.button} onClick={handleNavigate}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6V18M18 12L6 12"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className={style.buttonText}>리뷰 쓰러 가기</p>
      </button>
    </div>
  );
}
