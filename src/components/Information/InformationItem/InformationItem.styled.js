import styled from '@emotion/styled';

export const LiStyled = styled.li`
  display: flex;
  flex-direction: ${({ id }) => (id % 2 === 0 ? 'row-reverse' : 'row')};
  justify-content: space-between;
  min-height: 500px;
`;

export const ImageWrp = styled.div`
  position: relative;
`;

export const ImageStyled = styled.img`
  width: 548px;
  height: 388px;

  border-radius: 24px;
`;

export const ShortTextStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-72px, 250px);

  padding: 40px 24px;
  width: 520px;
  min-height: 212px;

  border-radius: 24px;
  background-color: var(--lightText);

  h3 {
    margin-bottom: 20px;
    height: 28px;

    font-family: var(--Raleway);
    font-size: 18px;
    font-weight: 600;
    line-height: calc(27 / 18);
    letter-spacing: 0em;
    color: var(--mainText);
  }

  p {
    font-family: var(--Raleway);
    font-size: 18px;
    font-weight: 400;
    line-height: calc(27 / 18);
    letter-spacing: 0em;
    font-style: italic;
    color: var(--mainText);
  }
`;

export const DescriptionStyled = styled.p`
  width: 452px;

  font-family: var(--PTSans);
  font-size: 22px;
  font-weight: 400;
  line-height: calc(35 / 22);
  letter-spacing: 0em;
  color: var(--mainText);
`;
