import styled from "@emotion/styled";
import {
	container,
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
	top: -0.4vh;
`;

export const Container = styled.div`
	${container};
	max-width: 1440px;
	padding: 132px 160px;
`;

export const BlockWrapper = styled.div`
	${flexBox};
	justify-content: space-between;
	width: 1120px;
	height: 572px;
	margin: 40px auto;
	img {
		border-radius: 24px;
	}
`;

export const LeftSide = styled.div`
	position: relative;
	width: 500px;
	height: 572px;
`;

export const RightSide = styled.div`
	position: relative;
	width: 500px;
	height: 572px;
`;

export const TextWrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
`;

export const BonoHeader = styled.h2`
	${fontSectionTitle};
`;

export const BonoText = styled.div`
	${fontSectionText};
	p {
		margin-top: 10px;
	}
`;
