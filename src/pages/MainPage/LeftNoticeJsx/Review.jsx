import { useState } from "react";
import styled from "styled-components";
import style from "../../../css/Rating.module.css";
import ReviewStarRating from "../../../svg/ReviewStarRating";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  gap: 20px;
  padding: 40px;
  border-radius: 10px;
  background: #1a1a1a;
  border: 1px solid #262626;
  margin-right: 30px;
  margin-left: 30px;
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 30px;
`;

const Title = styled.p`
  flex-grow: 1;
  width: 479px;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  color: #999;
`;

const Button = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 4px;
  padding: 12px;
  border-radius: 6px;
  background: #e50000;
  border: 1px solid #262626;
  cursor: pointer;
`;

const ButtonText = styled.p`
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  color: #fff;
`;

const ReviewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  flex-grow: 0;
  flex-shrink: 0;
  width: 400px;
  gap: 16px;
  padding: 30px;
  border-radius: 12px;
  background: #0f0f0f;
  border: 1px solid #262626;
  margin-right: 30px;
  transition: transform 0.5s ease; // 슬라이드 애니메이션
`;

const ReviewTitle = styled.p`
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  width: 215px;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: #fff;
`;

const ReviewSubTitle = styled.p`
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  width: 215px;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #999;
  margin-top: -20px;
`;

const ReviewText = styled.p`
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  width: 340px;
  font-size: 16px;
  text-align: left;
  color: #999;
`;

const ReviewContainer = styled.div`
  display: flex;
  width: calc(300px * 3); // 세 개의 리뷰 아이템에 대한 총 너비
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); // 부드러운 이징 효과 적용
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
`;

const RoundButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px;
  border-radius: 100px;
  background: #141414;
  border: 1px solid #262626;
  &:hover {
    background-color: #262626; // 호버 시 배경 색상 변경
  }
  &:active {
    background-color: #262626;
    border: 1px solid red;
    transition: all 0.3s ease;
  }
`;

const SvgIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

const ReviewTitleContainer = styled.div`
  display: flex;
`;
export default function Review() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = () => {
    setSlideIndex((slideIndex) => slideIndex - 100); // 오른쪽으로 슬라이드
  };

  const handlePrevSlide = () => {
    if (slideIndex < 0) setSlideIndex((slideIndex) => slideIndex + 100); // 왼쪽으로 슬라이드
  };

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/review");
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // 최상단으로 스크롤
      behavior: "smooth", // 부드러운 스크롤 효과 적용
    });
  };

  return (
    <Container>
      <Header>
        <Title>리뷰</Title>
        <Button to="/review" onClick={handleButtonClick}>
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
          <ButtonText>리뷰 쓰러 가기</ButtonText>
        </Button>
        <IconContainer>
          {/* 왼쪽버튼 */}
          <RoundButton onClick={handlePrevSlide}>
            <SvgIcon viewBox="0 0 20 20" fill="none">
              <path
                d="M16.25 10L3.75 10M3.75 10L9.375 15.625M3.75 10L9.375 4.375"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SvgIcon>
          </RoundButton>
          {/* 오른쪽버튼 */}
          <RoundButton onClick={handleNextSlide}>
            <SvgIcon viewBox="0 0 20 20" fill="none">
              <path
                d="M11.25 3.75L17.5 10M17.5 10L11.25 16.25M17.5 10H2.5"
                stroke="#999999"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </SvgIcon>
          </RoundButton>
        </IconContainer>
      </Header>
      <ReviewContainer style={{ transform: `translateX(${slideIndex}%)` }}>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
        <ReviewItemContainer>
          <ReviewTitleContainer>
            <ReviewTitle>한번 봐라 후회 하지 않는다.</ReviewTitle>
            <button className={style.rating__starBtn_Review}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__Reviewstars}>
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                  <ReviewStarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
          <ReviewSubTitle>소년시대</ReviewSubTitle>
          <ReviewText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </ReviewText>
        </ReviewItemContainer>
      </ReviewContainer>
    </Container>
  );
}
