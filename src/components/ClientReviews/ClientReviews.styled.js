import styled from "@emotion/styled";
import {
	container,
	flexBox,
	fontReview,
	fontReviewName,
	fontSectionTitle,
	sliderArrow,
} from "../../styles/mixins";

export const SectionStyled = styled.section`
	width: 100%;
	height: 804px;
	background: var(--darkBackground);
	position: relative;
	top: -0.2vh;
`;

export const Container = styled.div`
	${container};
	padding: 132px 0;
`;

export const ClientsBlockHeader = styled.h2`
	${fontSectionTitle};
	color: var(--lightText);
	margin-bottom: 40px;
`;

export const SliderWrapper = styled.div`
	${flexBox};
	width: 1132px;
	height: 472px;
	${sliderArrow};
`;

export const ClientCardWrapper = styled.div`
	width: 440px;
	height: 470px;
	border-radius: 24px;
	border: 1px solid var(--reviewText);
	background-color: var(--darkGrey);
	color: var(--reviewText);
	padding: 60px 40px;
	margin: 0 auto;
`;

export const CardHeader = styled.div`
	${flexBox}
	width:360px;
	height: 120px;
	gap: 20px;
	img {
		width: 80px;
		height: 80px;
	}
`;

export const CardRecvisits = styled.div``;

export const ClientName = styled.p`
	${fontReviewName}
`;

export const ClientRole = styled.p`
	${fontReview}
`;

export const ClientReview = styled.p`
	${fontReview}
	width:360px;
	margin-top: 28px;
`;
