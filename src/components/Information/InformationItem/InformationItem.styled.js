import styled from '@emotion/styled';
import { device } from '../../../styles/mixins';

export const LiStyled = styled.li`
  display: flex;
  flex-direction: ${({ id }) => (id % 2 === 0 ? 'row-reverse' : 'row')};
  justify-content: space-between;

  @media screen and (${device.tablet}) {
    min-height: 430px;
  }

  @media screen and (${device.desktop}) {
    min-height: 500px;
  }
`;

export const ImageWrp = styled.div`
  position: relative;
`;

export const ImageStyled = styled.img`
  border-radius: 24px;

  @media screen and (${device.tablet}) {
    width: 428px;
    height: 292px;
  }

  @media screen and (${device.desktop}) {
    width: 548px;
    height: 388px;
  }
`;

export const ShortTextStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;

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
    font-weight: 400;
    letter-spacing: 0em;
    font-style: italic;
    color: var(--mainText);

    @media screen and (${device.tablet}) {
      font-size: 16px;
      line-height: calc(24 / 16);
    }

    @media screen and (${device.desktop}) {
      font-size: 18px;
      line-height: calc(27 / 18);
    }
  }

  @media screen and (${device.tablet}) {
    transform: translate(-40px, 170px);
    padding: 20px 24px;
    width: 320px;
    min-height: 224px;
  }

  @media screen and (${device.desktop}) {
    transform: translate(-72px, 250px);
    padding: 40px 24px;
    width: 520px;
  }
`;

export const DescriptionStyled = styled.p`
  font-family: var(--PTSans);
  font-weight: 400;
  letter-spacing: 0em;
  color: var(--mainText);

  @media screen and (${device.tablet}) {
    width: 348px;
    font-size: 20px;
    line-height: calc(32 / 20);
  }

  @media screen and (${device.desktop}) {
    width: 452px;
    font-size: 22px;
    line-height: calc(35 / 22);
  }
`;
