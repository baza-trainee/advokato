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
	height: 1796px;
	background: var(--darkBackground);
	color: var(--lightText);
	position: relative;
	top: -0.2vh;
`;

export const Container = styled.div`
	${container};
	height: 1532px;
`;

export const BlockWrapper = styled.div`
	${flexBox};
	gap: 116px;
	:last-of-type {
		margin-top: 132px;
	}
`;

export const LeftSide = styled.div`
	${flexBox};
	flex-direction: column;
	align-items: start;
	gap: 40px;
	width: 548px;
	height: 700px;
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
`;

export const LeftTextWrapper = styled.div`
	${flexBox};
	${flexColumn};
	height: 549px;
`;
export const RightTextWrapper = styled.div`
	${flexBox};
	${flexColumn};
	height: 514px;
`;

export const BonoHeader = styled.h2`
	${fontSectionTitle};
`;

export const BonoText = styled.p`
	${fontSectionText};
`;
