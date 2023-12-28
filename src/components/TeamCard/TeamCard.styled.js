import styled from "@emotion/styled";
import { flexBox } from "../../styles/mixins";

export const CardWrap = styled.div`
	${flexBox};
	gap: 72px;
	flex-direction: ${({ index }) =>
		index === 0 || index % 2 === 0 ? "row" : "row-reverse"};
`;

export const PersonPhoto = styled.img`
	width: 524px;
	height: 640px;
	object-fit: cover;
`;

export const Name = styled.h3`
	margin-bottom: 28px;

	font-family: var(--Raleway);
	font-size: 32px;
	font-weight: 400;
	line-height: 45px;
`;

export const Position = styled.h4`
	margin-bottom: 28px;

	font-family: var(--Montserrat);
	font-size: 28px;
	font-weight: 400;
	line-height: 42px;
`;

export const PersonInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	gap: 12px;
	flex-grow: 1;

	font-family: var(--Raleway);
	font-size: 18px;
	font-weight: 400;
	line-height: 27px;
`;
