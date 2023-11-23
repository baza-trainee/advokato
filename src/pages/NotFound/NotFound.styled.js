import styled from "@emotion/styled";
import { flexBox, mainButton } from "../../styles/mixins";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 60px;

	background-color: var(--lightBackground);
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
	margin-top: 212px;
	margin-bottom: 40px;

	font-family: var(--Montserrat);
	font-size: 300px;
	font-weight: 700;
	line-height: 366px;
`;

export const Text = styled.p`
	margin-bottom: 100px;

	font-family: var(--Raleway);
	font-size: 32px;
	font-weight: 400;
	line-height: 45px;
`;

export const Button = styled(Link)`
	margin-bottom: 72px;

	${flexBox};
	gap: 12px;

	${mainButton};
	font-weight: 600;
	line-height: 27px;
	transition: all var(--timing-function) var(--animation-duration);
`;
