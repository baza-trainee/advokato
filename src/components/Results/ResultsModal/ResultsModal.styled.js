import styled from "@emotion/styled";
import { fontSectionTitle,fontLayoutCall, flexBox } from "../../../styles/mixins";
import "../../../index.css";

export const MainModalResult = styled.div`
	${flexBox};
	width: 1080px;
	gap: 24px;
	padding: 64px;
	flex-direction: column;
	overflow: hidden;
	background: linear-gradient(0deg, #f1f2f4, #f1f2f4),
		linear-gradient(0deg, #98a5b1, #98a5b1);
`;

export const TitleModal = styled.h4`
	${fontSectionTitle};
	font-size: 28px;
	font-weight: 400;
	line-height: 42px;
	letter-spacing: 0em;
	text-align: center;
	color: var(--mainText);
`;

export const ImageModal = styled.img`
	border-radius: 24px;
	width: 464px;
	height: auto;
`;

export const TextModal = styled.div`
	${flexBox};
	color: #000000;
`;

export const CtaBox = styled.div`
	${flexBox};
	${fontLayoutCall};
	gap: 24px;
	color: #969395;
`;
