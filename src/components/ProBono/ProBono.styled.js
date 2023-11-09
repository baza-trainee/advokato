import styled from "@emotion/styled";
import {
	container,
	flexBox,
	fontSectionText,
	fontSectionTitle,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
	background: var(--darkBackground);
	color: var(--lightText);
	width: 100%;
	height: 1796px;
	padding: 160px 0px 160px 0px;
	position: relative;
	top: -0.2vh;
`;

export const Container = styled.div`
	${container};
`;

export const BlockWrapper = styled.div`
	${flexBox};
	gap: 116px;
	opacity: ${props => (props.second ? 0 : 1)};
	transition: 0.1s;
	:last-child {
		margin-top: 100px;
	}
`;

export const LeftSide = styled.div`
	width: 548px;
	img {
		width: 548px;
		height: 700px;
	}
`;

export const RightSide = styled.div`
	width: 456px;
	img {
		width: 456px;
		height: 700px;
	}
	${flexBox};
	flex-direction: column;
`;

export const BonoHeader = styled.h1`
	${fontSectionTitle};
`;

export const BonoText = styled.div`
	${fontSectionText};
`;
