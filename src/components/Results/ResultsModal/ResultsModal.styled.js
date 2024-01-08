import styled from "@emotion/styled";
import {
	fontSectionTitle,
	fontLayoutCall,
	flexBox,
	fontReview,
	device,
} from "../../../styles/mixins";
import "../../../index.css";

export const MainModalResult = styled.div`
	${flexBox};
	width: 1080px;
	flex-direction: column;
	overflow: hidden;
	background: linear-gradient(0deg, #f1f2f4, #f1f2f4),
		linear-gradient(0deg, #98a5b1, #98a5b1);

	@media screen and (${device.mobileL}) {
		width: 648px;
		padding: 48px;
		gap: 20px;
	}

	@media screen and (${device.tablet}) {
		width: 844px;
		padding: 64px;
		gap: 24px;
	}

	@media screen and (${device.desktop}) {
		width: 1080px;
	}
`;

export const TitleModal = styled.h4`
	${fontSectionTitle};
	font-weight: 400;
	letter-spacing: 0em;
	text-align: center;
	color: var(--mainText);

	@media screen and (${device.mobileL}) {
		font-size: 16px;
	}

	@media screen and (${device.tablet}) {
		font-size: 18px;
	}

	@media screen and (${device.desktop}) {
		font-size: 28px;
		line-height: 42px;
	}
`;

export const ImageModal = styled.img`
	border-radius: 24px;

	@media screen and (${device.mobileL}) {
		width: 312px;
		height: 344px;
	}

	@media screen and (${device.tablet}) {
		width: 348px;
		height: auto;
	}

	@media screen and (${device.desktop}) {
		width: 464px;
	}
`;

export const TextModal = styled.div`
	${flexBox};
	${fontReview};
	color: #000000;

	@media screen and (${device.mobileL}) {
		font-size: 14px;
		padding: 40px 0;
	}

	@media screen and (${device.tablet}) {
		font-size: 16px;
		padding: 0;
	}

	@media screen and (${device.desktop}) {
		font-size: 18px;
	}
`;

export const CtaBox = styled.div`
	${flexBox};
	${fontLayoutCall};
	gap: 24px;
	color: #969395;

	@media screen and (${device.mobileL}) {
		font-size: 14px;
	}

	@media screen and (${device.tablet}) {
		font-size: 14px;
	}
	
	@media screen and (${device.desktop}) {
		font-size: 14px;
	}
`;
