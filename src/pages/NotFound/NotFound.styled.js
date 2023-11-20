import styled from "@emotion/styled";
import { flexBox, fontSectionTitle, mainButton } from "../../styles/mixins";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 119px;
`;

export const TopBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;

	height: 140px;
	width: 100%;

	background-color: var(--darkBackground);
`;

export const Title = styled.p`
	margin-top: 340px;
	margin-bottom: 40px;

	font-family: Montserrat;
	font-size: 200px;
	font-weight: 700;
	line-height: 244px;
`;

export const Text = styled.p`
	${fontSectionTitle}
	margin-bottom: 60px;
`;

export const Button = styled(Link)`
	margin-top: 60px;
	margin-bottom: 164px;

	${flexBox};
	gap: 12px;

	${mainButton};
	font-weight: 600;
	line-height: 27px;
`;
