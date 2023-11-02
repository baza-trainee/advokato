import styled from "@emotion/styled";
import { container, flexBox, fontDesktop } from "../../styles/mixins";

export const SectionStyled = styled.section`
	background-color: var(--lightBackgroung);
`;

export const Container = styled.div`
	${container};

	@media screen and (min-width: 1440px) {
		padding-top: 132px;
		padding-bottom: 64px;
	}
`;

export const TitleStyled = styled.h2`
	@media screen and (min-width: 1440px) {
		width: 860px;
		margin-bottom: 72px;
		font-size: 40px;
		font-weight: 500;
		line-height: calc(56 / 40);
	}
`;

export const CardWraper = styled.div`
	@media screen and (min-width: 1440px) {
		${flexBox};
		gap: 120px;
		margin-bottom: 176px;
	}
`;

export const ImgWraper = styled.div`
	@media screen and (min-width: 1440px) {
		min-width: 548px;
		border-radius: 24px;
		overflow: hidden;
	}
`;

export const Text = styled.p`
	@media screen and (min-width: 1440px) {
		${fontDesktop};
	}
`;
