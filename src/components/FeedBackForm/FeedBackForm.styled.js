import styled from '@emotion/styled';
import {
  flexBox,
  fontSectionTitle,
  secondaryButton,
  device,
} from '../../styles/mixins';

export const SectionStyled = styled.div`
  background: #F1F2F4;
  padding: 28px 24px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	
  @media screen and (${device.mobileL}) {
		padding: 0;
		//margin: 60px auto;
    width: 648px;
    gap: 40px;
		margin: auto;
  }

  @media screen and (${device.tablet}) {
    //margin: 100px auto;
    width: 864px;
    gap: 28px;
  }

  @media screen and (${device.desktop}) {
    //margin: 100px auto;
    width: 1120px;
    gap: 56px;
  }
`;

export const Wrapper = styled.section`
  background-color: #F1F2F4;
	
  @media screen and (${device.mobileL}) {
    padding: 60px 0;
  }

  @media screen and (${device.tablet}) {
    padding: 100px 0;
  }

  @media screen and (${device.desktop}) {
		padding: 100px 0;
  }
`

export const TitleStyled = styled.h2`
  display: flex;
  flex-direction: column;
  ${fontSectionTitle};
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;

  @media screen and (${device.mobileL}) {
    height: 68px;
    width: 336px;
    font-size: 24px;
    line-height: calc(34 / 24);
  }

  @media screen and (${device.tablet}) {
    height: 112px;
    width: 504px;
    font-size: 32px;
    line-height: calc(44 / 32);
  }

  @media screen and (${device.desktop}) {
    font-size: 40px;
    line-height: calc(56 / 40);
  }
`;

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  grid-template-rows: auto;



  @media screen and (${device.mobileL}) {
    grid-template-columns: 200px 200px 200px;
    grid-row-gap: 40px;
    grid-column-gap: 24px;

  }

  @media screen and (${device.tablet}) {
    grid-template-columns: 276px 242px 242px;
    grid-row-gap: 48px;
    grid-column-gap: 48px;

  }

  @media screen and (${device.desktop}) {
    grid-template-columns: 300px 300px 300px;
    grid-row-gap: 40px;
    grid-column-gap: 24px;

  }
	
  // div {
  //   display: flex;
  // 	flex-direction: column;
  // 	gap: 20px;
  //
    //   @media screen and (${device.mobileL}) {
  //     margin-bottom: 40px;
  //     gap: 24px;
  //   }
  //
    //   @media screen and (${device.tablet}) {
  //     margin-bottom: 48px;
  //     gap: 48px;
  //   }
  //
    //   @media screen and (${device.desktop}) {
  //     gap: 62px;
  //   }
  // }

  label {
    display: flex;
    flex-direction: column;
  }

  @media screen and (${device.mobileL}) {
    width: 648px;
  }

  @media screen and (${device.tablet}) {
    width: 864px;
  }

  @media screen and (${device.desktop}) {
    width: 1024px;
  }
`;

export const ButtonStyled = styled.button`
  ${flexBox};
  ${secondaryButton};
	margin-top: 28px;
	margin-bottom: 28px;


  &:hover,
  &:focus {
    border: 1px solid #1c1c21;
  }

  @media screen and (${device.mobileL}) {
    margin-top: 0;
    width: 260px;
    height: 44px;
    font-size: 14px;
    line-height: calc(17 / 14);
    margin-bottom: 0;
  }

  @media screen and (${device.tablet}) {
    margin-top: 0;
    width: 292px;
    height: 52px;
  }

  @media screen and (${device.desktop}) {
    width: 364px;
    height: 64px;
    font-size: 16px;
    line-height: calc(22 / 16);
  }
`;
