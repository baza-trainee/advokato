import styled from "@emotion/styled";
import { container } from "../../styles/mixins";

export const SectionStyled = styled.section`
	background-color: var(--lightBackgroung);
`;

export const Container = styled.div`
	${container};

	@media screen and (min-width: 1440px) {
		padding-top: 132px;
		padding-bottom: 132px;
	}
`;

export const TitleStyled = styled.h2`
	@media screen and (min-width: 1440px) {
		width: 860px;
		font-size: 40px;
		font-weight: 500;
		line-height: calc(56 / 40);
	}
`;
