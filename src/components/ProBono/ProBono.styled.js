import styled from "@emotion/styled";
import {
	container,
	device,
	flexBox,
	fontSectionText,
	fontSectionTitle,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
	${flexBox};
	width: 100%;
	height: fit-content;
	background: var(--darkBackground);
	color: var(--lightText);
	position: relative;
	top: -0.2vh;
  padding: 60px 0 0;

  @media screen and (${device.mobileL}) {
    padding: 60px 0 0;
  }
`;

export const Container = styled.div`
	${container};
  max-width: 768px;
	padding: 28px 24px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	gap: 28px;
	
	@media screen and (${device.mobileL}) {
		padding: 60px;
    gap: 40px;
	}
	@media screen and (${device.tablet}) {
    max-width: 1024px;
		padding: 20px 80px 80px;
	}
	@media screen and (${device.desktop}) {
		padding: 20px 160px 80px;
    max-width: 1440px;
	}
`;

export const BlockWrapper = styled.div`
  ${flexBox};
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  min-height: 496px;

  :last-child {
    flex-direction: column-reverse;
  }

  @media screen and (${device.mobileL}) {
    flex-direction: row;
    gap: 48px;
    width: 648px;
		
    :last-child {
      flex-direction: row;
    }
  }
  @media screen and (${device.tablet}) {
    width: 864px;
    align-items: center;
    gap: 0;

  }
  @media screen and (${device.desktop}) {
    width: 1120px;
    align-items: center;
  }
`;

export const LeftSide = styled.div`
	width: 100%;
  height: auto;
	overflow: hidden;
	display: flex;
	
	img {
		border-radius: 24px;
		width: 100%;
    aspect-ratio: 272 / 330;
		object-fit: cover;
		object-position: center top;
	}
	
	@media screen and (${device.mobileL}) {
		width: 300px;
		height: 496px;
    justify-content: center;
    align-items: center;
		
    img {
      aspect-ratio: 300 / 496;
    }
	}
	@media screen and (${device.tablet}) {
		width: 400px;
		height: 552px;

    img {
      aspect-ratio: 400 / 552;
    }
	}
	@media screen and (${device.desktop}) {
		width: 500px;
		height: 572px;

    img {
      aspect-ratio: 500 / 572;
    }
	}
`;

export const RightSide = styled.div`
	position: relative;
	width: 100%;
  height: auto;
	overflow: hidden;
  display: flex;
	
	img {
		border-radius: 24px;
		width: 100%;
    object-fit: cover;
    aspect-ratio: 272 / 330;
    object-position: center top;
	}
	@media screen and (${device.mobileL}) {
    width: 300px;
    height: 496px;
    justify-content: center;
    align-items: center;
		
    img {
      aspect-ratio: 300 / 496;
    }
	}
	@media screen and (${device.tablet}) {
		width: 400px;
		height: 552px;


    img {
      aspect-ratio: 400 / 552;
    }
	}
	@media screen and (${device.desktop}) {
		width: 500px;
		height: 572px;

    img {
      aspect-ratio: 500 / 572;
    }
	}
`;

export const TextWrapper = styled.div`
	width: 100%;

	

	ul {
		list-style: disc;
		margin-left: 22px;
	}
`;

export const BonoHeader = styled.h2`
	${fontSectionTitle};
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
	
	@media screen and (${device.mobileL}) {
		font-size: 24px;
		line-height: calc(33.6 / 24);
	}
	@media screen and (${device.tablet}) {
		font-size: 32px;
		line-height: calc(44.8 / 32);
	}
	@media screen and (${device.desktop}) {
		font-size: 40px;
		line-height: calc(56 / 40);
	}
`;

export const BonoText = styled.div`
	${fontSectionText};
  font-size: 16px;

	@media screen and (${device.mobileL}) {
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
	}
	@media screen and (${device.tablet}) {
		font-size: 20px;
    line-height: 160%;
	}
	@media screen and (${device.desktop}) {
		font-size: 22px;
	}
`;
