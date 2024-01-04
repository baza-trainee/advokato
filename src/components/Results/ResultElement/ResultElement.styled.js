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
	border-top: 1px solid #98a5b1;
`;

export const ResultItemStyled = styled.div`
	${flexBox};
	align-items: flex-end;
	justify-content: space-between;
	width: 1036px;

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
	border-radius: 24px;
	width: 464px;
	height: 312px;

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

	@media screen and (${device.tablet}) {
		gap: 23px;
		width: 344px;
	}

	@media screen and (${device.desktop}) {
		gap: 23px;
		width: 512px;
	}

	h3 {
		${fontReviewName};
		color: var(--mainText);

		@media screen and (${device.tablet}) {
			font-size: 18px;
			line-height: 28px;
		}

		@media screen and (${device.desktop}) {
			font-size: 28px;
			line-height: 42px;
		}
	}

	p.desc {
		${fontReview};
		color: var(--mainText);

		@media screen and (${device.tablet}) {
			font-size: 16px;
			line-height: 24px;
			width: 344px;
		}

		@media screen and (${device.desktop}) {
			font-size: 18px;
			line-height: 27px;
			width: 456px;
		}
	}
`;

export const BubbleForm = styled.div`
	${flexBox};
	gap: 24px;

	@media screen and (${device.tablet}) {
		min-width: 256px;
	}

	@media screen and (${device.desktop}) {
		min-width: 268px;
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

export const ArrowBlock = styled.div`
	${flexBox};
	position: absolute;
	right: 0;
	top: 58px;
	cursor: pointer;

	svg {
		fill: #969395;
	}

	@media screen and (${device.tablet}) {
		top: 26px;
	}

	@media screen and (${device.desktop}) {
		top: 58px;
	}
`;
