import styled from "styled-components";
import Notice from "./LeftNoticeJsx/Notice";
import UpcomigReleases from "./LeftNoticeJsx/UpcomigReleases";
import Review from "./LeftNoticeJsx/Review";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default function LeftNotice() {
  return (
    <VerticalContainer>
      <Notice />
      <UpcomigReleases />
      <Review />
    </VerticalContainer>
  );
}
