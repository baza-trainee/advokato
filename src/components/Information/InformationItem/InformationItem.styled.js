import styled from '@emotion/styled';
import { device } from '../../../styles/mixins';

export const LiStyled = styled.li`
  display: flex;
  flex-direction: ${({ id }) => (id % 2 === 0 ? 'row-reverse' : 'row')};
  justify-content: space-between;

  @media screen and (${device.mobileL}) {
    min-height: 300px;
  }

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

  @media screen and (${device.mobileL}) {
    width: 312px;
    height: 208px;
  }

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

  background-color: var(--lightText);

  h3 {
    font-family: var(--Raleway);
    font-weight: 600;
    letter-spacing: 0em;
    color: var(--mainText);

    @media screen and (${device.mobileL}) {
      margin-bottom: 12px;
      height: 24px;

      font-size: 16px;
      line-height: calc(24 / 16);
    }

    @media screen and (${device.tablet}) {
      margin-bottom: 20px;
      height: 28px;

      font-size: 18px;
      line-height: calc(27 / 18);
    }
  }

  p {
    font-family: var(--Raleway);
    font-weight: 400;
    letter-spacing: 0em;
    font-style: italic;
    color: var(--mainText);

    @media screen and (${device.mobileL}) {
      font-size: 14px;
      line-height: calc(21 / 14);
    }

    @media screen and (${device.tablet}) {
      font-size: 16px;
      line-height: calc(24 / 16);
    }

    @media screen and (${device.desktop}) {
      font-size: 18px;
      line-height: calc(27 / 18);
    }
  }

  @media screen and (${device.mobileL}) {
    transform: translate(-40px, 120px);
    padding: 16px;
    width: 280px;
    min-height: 196px;
    border-radius: 16px;
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
    border-radius: 24px;
  }
`;

export const DescriptionStyled = styled.p`
  font-family: var(--PTSans);
  font-weight: 400;
  letter-spacing: 0em;
  color: var(--mainText);

  @media screen and (${device.mobileL}) {
    width: 280px;
    font-size: 16px;
    line-height: calc(26 / 16);
  }

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
