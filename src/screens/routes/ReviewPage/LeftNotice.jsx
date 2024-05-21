import styled from 'styled-components';

import ReviewText from './LeftNoticeJsx/RivewText';
import ReviewComponet from './LeftNoticeJsx/ReviewComponet';

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: -120px;
`;

export default function LeftNotice() {
    return (
        <VerticalContainer>
            <ReviewText />
            <ReviewComponet />
        </VerticalContainer>
    );
}
