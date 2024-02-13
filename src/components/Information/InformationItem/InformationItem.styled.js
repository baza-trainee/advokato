import { device } from '../../../styles/mixins';
import styled from '@emotion/styled';

export const LiStyled = styled.li`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (min-width: 600px) {
    flex-direction: ${({ id }) => (id % 2 === 0 ? 'row-reverse' : 'row')};
		gap: 40px;
    min-height: 300px;
  }

  @media screen and (${device.mobileL}) {
    flex-direction: ${({ id }) => (id % 2 === 0 ? 'row-reverse' : 'row')};
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
  margin-left: ${({ id }) => (id % 2 === 0 ? 'auto' : '0')};
  margin-right: ${({ id }) => (id % 2 === 0 ? '0' : 'auto')};
  width: 236px;
  height: 160px;
  border-radius: 24px;
	object-fit: cover;

  @media screen and (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    height: auto;
  }
	

  @media screen and (${device.mobileL}) {
    margin-left: 0;
    margin-right: 0;
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
    object-fit: none;
  }
`;

export const ShortTextStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ id }) =>
    id % 2 === 0 ? 'translate(-5px, 120px)' : 'translate(40px, 120px)'};

  padding: 16px;
  width: 224px;
  min-height: 196px;
  border-radius: 16px;
  background-color: var(--lightText);
  display: flex; 
  flex-direction: column;
  justify-content: center;

  h2 {
    margin-bottom: 12px;
    /* height: 24px; */

    font-family: var(--Raleway);
    font-size: 14px;
    line-height: calc(21 / 14);
    font-weight: 600;
    letter-spacing: 0em;
    color: var(--mainText);

    @media screen and (min-width: 600px) {
      font-size: 16px;
      line-height: calc(24 / 16);
    }

    @media screen and (${device.mobileL}) {
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
    font-size: 12px;
    line-height: calc(18 / 12);
    font-weight: 400;
    letter-spacing: 0em;
    font-style: italic;
    color: var(--mainText);

    @media screen and (min-width: 600px) {
      font-size: 12px;
      line-height: calc(18 / 12);
      
    }

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

  @media screen and (min-width: 600px) {
    transform: translate(-15px, 120px);
		width: 100%;
    max-width: 280px;
    min-height: 106px;
  }

  @media screen and (${device.mobileL}) {
    transform: translate(-40px, 120px);
    width: 280px;
  }

  @media screen and (${device.tablet}) {
    transform: translate(-40px, 170px);
    padding: 10px 24px;
    min-width: 365px;
    /* min-height: 224px; */
    min-height: 196px;
  }

  @media screen and (${device.desktop}) {
    /* transform: translate(-72px, 250px);
    padding: 40px 24px; */
    transform: translate(-72px, 300px);
    padding: 20px 24px;
    min-width: 530px;
    border-radius: 24px;
  }
`;

export const DescriptionStyled = styled.p`
  margin-top: 170px;
  width: 272px;

  font-family: var(--PTSans);
  font-size: 14px;
  line-height: calc(22 / 14);
  font-weight: 400;
  letter-spacing: 0em;
  color: var(--mainText);

  @media screen and (min-width: 600px) {
    margin-top: 0;
		width: 100%;
    max-width: 371px;
    font-size: 14px;
    line-height: calc(26 / 16);
  }

  @media screen and (${device.mobileL}) {
    margin-top: 0;
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
