import styled from "@emotion/styled";
import {
	container,
	flexBox,
	flexColumn,
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
	padding:132px 160px;
`;

export const BlockWrapper = styled.div`
	${flexBox};
	justify-content: space-between;
	width:1120px;
	height:572px;
`;

export const LeftSide = styled.div`
	width:500px;
	height:572px;
`;

export const RightSide = styled.div`
	width:500px;
	height:572px;
`;

export const LeftTextWrapper = styled.div`
	
`;
export const RightTextWrapper = styled.div`
	
`;

export const BonoHeader = styled.h2`
	${fontSectionTitle};
	margin-bottom: 40px;
`;

export const BonoText = styled.p`
	${fontSectionText};
`;
