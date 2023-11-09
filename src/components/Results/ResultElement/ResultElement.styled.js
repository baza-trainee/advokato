import styled from "@emotion/styled";
import {
  flexBox,
  secondaryButton,
  fontReview,
  fontSectionTitle,
  fontReviewName,
} from "../../../styles/mixins";
import "../../../index.css";

export const ImageStyled = styled.img`
  border-radius: 24px;
  width: 464px;
  height: auto;
`;

export const ContentStyled = styled.div`
  ${flexBox};
  width: 100%;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid #98a5b1;
`;

export const ResultItemStyled = styled.div`
  ${flexBox};
  align-items: flex-end;
  justify-content: space-between;
  width: 1036px;
`;

export const WrapperStyled = styled.div`
  ${flexBox};
  justify-content: flex-start;
  padding: 40px 0;
`;

export const ResultText = styled.div`
  ${flexBox};
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 512px;

  h3 {
    ${fontReviewName};
    color: var(--mainText);
  }

  p.desc {
    ${fontReview};
    color: var(--mainText);
    width: 456px;
  }
`;

export const BubbleForm = styled.div`
  ${flexBox};
  gap: 24px;
  width: 324px;
`;

export const ButtonStyled = styled.button`
  ${secondaryButton};
  ${flexBox};
  ${fontSectionTitle};
  font-size: 14px;
  width: 228px;
  height: 44px;
  background: var(--darkGrey);
  border: 1px solid var(--greyText);
`;

export const PublicationDate = styled.p`
  ${fontSectionTitle};
  color: #969395;
  font-size: 14px;
`;

export const ArrowBlock = styled.div`
  ${flexBox};
  position: absolute;
  right: 0;
  top: 40px;
  cursor: pointer;

  svg {
    fill: #969395;
  }
`;
