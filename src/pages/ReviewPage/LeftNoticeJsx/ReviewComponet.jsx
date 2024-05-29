import styled from "styled-components";
import style from "../../../css/Rating.module.css";
import StarRating from "../../../svg/StarRating";

const Container = styled.div`
  margin-right: 60px;
  margin-left: 30px;
  max-height: 145vh; // Block의 높이에 따라 조정 (여기서는 Block의 높이 * 8)
  overflow-y: auto; // 세로 스크롤만 허용
  scroll-behavior: smooth; // 스크롤 동작을 부드럽게
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background: #1a1a1a;
  padding: 40px 40px 10px 40px;
  border-radius: 15px;
  overflow: hidden;
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
  margin-bottom: 20px;
`;

const Title = styled.p`
  flex-grow: 1;
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  margin-left: 30px;

  color: #fff;
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
  gap: 16px;
  padding: 30px;
  border-radius: 12px;
  margin-bottom: 30px;
`;

const ContentText = styled.p`
  align-self: stretch;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 16px;
  text-align: left;
  color: #fff;
  margin-top: -15px;
`;

const BoldText = styled(ContentText)`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
  margin-top: 30px;
`;

const ReviewTitleContainer = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-end;
`;

export default function ReviewComponent() {
  return (
    <Container>
      <Block>
        <Header>
          <Title>리뷰 </Title>
          <ReviewTitleContainer>
            <button className={style.rating__starBtn}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__stars}>
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
        </Header>
        <ContentBlock>
          <ContentText>2024 / 04 /17</ContentText>
          <ContentText>김진석님이 남기신 리뷰입니다.</ContentText>
          <BoldText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </BoldText>
        </ContentBlock>
      </Block>
      <Block>
        <Header>
          <Title>리뷰 </Title>
          <ReviewTitleContainer>
            <button className={style.rating__starBtn}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__stars}>
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
        </Header>
        <ContentBlock>
          <ContentText>2024 / 04 /17</ContentText>
          <ContentText>김진석님이 남기신 리뷰입니다.</ContentText>
          <BoldText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </BoldText>
        </ContentBlock>
      </Block>
      <Block>
        <Header>
          <Title>리뷰 </Title>
          <ReviewTitleContainer>
            <button className={style.rating__starBtn}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__stars}>
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
        </Header>
        <ContentBlock>
          <ContentText>2024 / 04 /17</ContentText>
          <ContentText>김진석님이 남기신 리뷰입니다.</ContentText>
          <BoldText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </BoldText>
        </ContentBlock>
      </Block>
      <Block>
        <Header>
          <Title>리뷰 </Title>
          <ReviewTitleContainer>
            <button className={style.rating__starBtn}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__stars}>
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
        </Header>
        <ContentBlock>
          <ContentText>2024 / 04 /17</ContentText>
          <ContentText>김진석님이 남기신 리뷰입니다.</ContentText>
          <BoldText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </BoldText>
        </ContentBlock>
      </Block>
      <Block>
        <Header>
          <Title>리뷰 </Title>
          <ReviewTitleContainer>
            <button className={style.rating__starBtn}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__stars}>
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
        </Header>
        <ContentBlock>
          <ContentText>2024 / 04 /17</ContentText>
          <ContentText>김진석님이 남기신 리뷰입니다.</ContentText>
          <BoldText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </BoldText>
        </ContentBlock>
      </Block>
      <Block>
        <Header>
          <Title>리뷰 </Title>
          <ReviewTitleContainer>
            <button className={style.rating__starBtn}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__stars}>
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
        </Header>
        <ContentBlock>
          <ContentText>2024 / 04 /17</ContentText>
          <ContentText>김진석님이 남기신 리뷰입니다.</ContentText>
          <BoldText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </BoldText>
        </ContentBlock>
      </Block>
      <Block>
        <Header>
          <Title>리뷰 </Title>
          <ReviewTitleContainer>
            <button className={style.rating__starBtn}>
              <div className={style[`rating__starBtn__elements-group`]}>
                <div className={style.rating__starBtn__stars}>
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                </div>
                <span className={style.rating__starBtn__text}>5</span>
              </div>
            </button>
          </ReviewTitleContainer>
        </Header>
        <ContentBlock>
          <ContentText>2024 / 04 /17</ContentText>
          <ContentText>김진석님이 남기신 리뷰입니다.</ContentText>
          <BoldText>
            This movie was recommended to me by a very dear friend who went for
            the movie by herself. I went to the cinemas to watch but had a
            houseful board so couldn’t watch it.
          </BoldText>
        </ContentBlock>
      </Block>
    </Container>
  );
}
