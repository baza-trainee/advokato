import styled from "@emotion/styled";
import { device } from "../../../styles/mixins";

export const ArticleStyled = styled.article`
	width: ${props => props.width};
	position: absolute;
	left: ${props => props.left};
	bottom: 0;
	transform: translateY(50%);
	padding: 40px 24px;
	background-color: var(--lightText);
	border-radius: 24px;
`;

export const TitleStyled = styled.h5`
	@media screen and (${device.desktop}) {
		margin-bottom: 20px;
		color: var(--accentText);
		font-size: 18px;
		font-weight: 600;
	}
`;

export const Text = styled.p`
	@media screen and (${device.desktop}) {
	}
`;
