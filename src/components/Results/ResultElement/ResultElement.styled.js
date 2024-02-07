import styled from "@emotion/styled";
import {
	flexBox,
	fontReview,
	fontSectionTitle,
	fontReviewName,
	device,
} from "../../../styles/mixins";
import "../../../index.css";


export const ContentStyled = styled.div`
	${flexBox};
	width: 100%;
	justify-content: space-between;
	position: relative;

	@media screen and (${device.mobileL}) {
		border-top: none;
		cursor: pointer;
	}

	@media screen and (${device.tablet}) {
		border-top: 1px solid #98a5b1;
	}
`;

export const ResultItemStyled = styled.div`
	${flexBox};
	align-items: flex-end;
	justify-content: space-between;
	width: 1036px;

	@media screen and (${device.mobileS}) {
		flex-direction: column;
    align-items: flex-start;
	}

	@media screen and (${device.mobileL}) {
		flex-direction: row;
		width: 616px;
	}

	@media screen and (${device.tablet}) {
		width: 788px;
	}

	@media screen and (${device.desktop}) {
    width: 1036px;
	}
`;

export const WrapperStyled = styled.div`
	${flexBox};
	justify-content: flex-start;
	width: 100%;


	@media screen and (${device.tablet}) {
		padding: 24px 0;
	}

	@media screen and (${device.desktop}) {
		padding: 40px 0;
	}
`;

export const ImageBlock = styled.div`
	@media screen and (${device.mobileS}) {
    width: 100%;
		height: auto;
		margin-bottom: 28px;
	}

	@media screen and (${device.mobileL}) {
		width: 312px;
		height: 344px;
		margin-bottom: 0;
	}

	@media screen and (${device.tablet}) {
		width: 348px;
		height: 272px;
	}

	@media screen and (${device.desktop}) {
		width: 464px;
		height: 312px;
	}
`;

export const ImageStyled = styled.img`
	border-radius: 24px;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const ResultText = styled.div`
	${flexBox};
	flex-direction: column;
	align-items: flex-start;
  gap: 16px;
	width: 100%;

	@media screen and (${device.mobileL}) {
		height: 344px;
		gap: 0;
		width: 288px;
		justify-content: space-between;
	}

	@media screen and (${device.tablet}) {
		gap: 0;
		width: 344px;
		height: 272px;
	}

	@media screen and (${device.desktop}) {
		gap: 20px;
		width: 512px;
	}

	h3 {
		${fontReviewName};
		color: var(--mainText);

		@media screen and (${device.mobileS}) {
			font-size: 16px;
			line-height: 24px;
      width: 100%;
		}

		@media screen and (${device.mobileL}) {
			font-size: 20px;
			line-height: 30px;
			width: 288px;
		}

		@media screen and (${device.tablet}) {
			font-size: 18px;
			line-height: 27px;
			width: 344px;
		}

		@media screen and (${device.desktop}) {
			font-size: 28px;
			line-height: 42px;
			width: 496px;
		}
	}

	
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  div.desc {
    ${fontReview};
    color: var(--mainText);
		
    @media screen and (${device.mobileS}) {
      font-size: 14px;
      line-height: 21px;
      width: 100%;
    }

    @media screen and (${device.mobileL}) {
      font-size: 16px;
      line-height: 24px;
      width: 288px;
			height: 192px;
    }

    @media screen and (${device.tablet}) {
      font-size: 16px;
      line-height: 24px;
      width: 344px;
      height: 144px;
    }

    @media screen and (${device.desktop}) {
      font-size: 18px;
      line-height: 27px;
      width: 456px;
      height: 168px;
    }
  }

  .hidden{
    margin: 0;
    -webkit-line-clamp: 8;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media screen and (${device.tablet}) {
      -webkit-line-clamp: 6;
    }
  }

  p.more {
    color: #969395;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
		align-self: flex-end;
		cursor: pointer;

    @media screen and (${device.mobileL}) {
      display: none;
    }
  }
;

`

export const BubbleForm = styled.div`
	${flexBox};
	justify-content: space-between;
  width: 100%;

	@media screen and (${device.tablet}) {
		gap: 24px;
		width: 256px;
    
	}

	@media screen and (${device.desktop}) {
		width: 268px;
	}
`;

export const BubbleFormText = styled.p`
	${fontSectionTitle};
	color: #969395;
	font-size: 14px;
	min-height: 20px;

	@media screen and (${device.tablet}) {
		min-width: 160px;
	}

	@media screen and (${device.desktop}) {
		min-width: 172px;
	}
`;

export const PublicationDate = styled.p`
	${fontSectionTitle};
	color: #969395;
	font-size: 14px;
	min-width: 72px;
	min-height: 20px;
`;

export const ArrowBlock = styled.button`
  ${flexBox};
  position: absolute;
  right: 0;
  cursor: pointer;
  padding-left: 10px;

  svg {
    fill: #969395;
  }

  @media screen and (${device.mobileS}) {
    display: none;
  }

  @media screen and (${device.mobileL}) {
    display: block;
    bottom: 50%;
    animation: animateButton 2s ease-in-out infinite;
    &:hover{
      animation-play-state: paused;
    }
    svg {
      fill: #969395;
      transform: rotate(45deg);
    }
  }

  @media screen and (${device.tablet}) {
    bottom: 50%;
  }

  @media screen and (${device.desktop}) {
    bottom: 50%;
  }

  @keyframes animateButton {
    0% {
       right: 0;
    }
    50% {
      right: -10px;
    }
		100% {
      right: 0;
		}
		
  }
`;
