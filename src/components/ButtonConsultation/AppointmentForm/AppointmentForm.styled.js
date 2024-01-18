import {
	device,
	flexBox,
	fontSectionTitle,
	secondaryButton,
} from "../../../styles/mixins";

import styled from "@emotion/styled";

export const FormWrp = styled.div`
	background-color: white;
	width: 300px;
	border-radius: 10px;
	padding: 50px 20px 30px 20px;

	@media screen and (${device.mobileL}) {
		/* padding-top: 48px;
    padding-right: 20px;
    padding-bottom: 28px;
    padding-left: 20px;
    width: 536px; */
		padding: 20px;
		width: 500px;
		/* min-height: 336px; */
		border-radius: 10px;
	}

	@media screen and (${device.desktop}) {
		/* padding-top: 84px;
    padding-right: 40px;
    padding-bottom: 32px;
    padding-left: 40px;
    width: 600px; */
		/* min-height: 336px; */
	}
`;

export const FirstPageTitle = styled.h2`
	/* ${fontSectionTitle}; */
	text-align: center;
	color: var(--mainText);
	font-size: 20px;

	@media screen and (${device.mobileL}) {
		/* height: 40px;
		width: 348px; */

		font-size: 24px;
		/* line-height: calc(39 / 28); */
	}

	@media screen and (${device.desktop}) {
		/* margin-bottom: -12px; */
		/* height: 48px; */
		/* width: 471px; */
		/* min-width: 400px; */

		font-size: 32px;
		/* line-height: calc(56 / 40); */
	}
`;

export const SecondPageTitle = styled.h2`
	${fontSectionTitle};
	text-align: center;
	color: var(--mainText);
	font-size: 20px;

	@media screen and (${device.mobileL}) {
		/* width: 424px; */
		/* line-height: calc(39 / 28); */
		font-size: 24px;
	}

	@media screen and (${device.desktop}) {
		/* margin-bottom: -12px;
		width: 356px;
		line-height: calc(56 / 40); */
		font-size: 32px;
	}
`;

export const FormStyled = styled.form`
	${flexBox};
	flex-direction: column;
	gap: 12px;

	@media screen and (${device.mobileL}) {
		gap: ${({ currentPartForm }) =>
			(currentPartForm === 1) |
			(currentPartForm === 2) |
			(currentPartForm === 3)
				? "20px"
				: null};
	}

	@media screen and (${device.desktop}) {
		gap: ${({ currentPartForm }) =>
			(currentPartForm === 1) |
			(currentPartForm === 2) |
			(currentPartForm === 3)
				? // ? '32px'
				"20px"
				: null};
	}
`;

export const ButtonWrp = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;

	@media screen and (${device.mobileL}) {
		gap: 12px;
	}

	@media screen and (${device.desktop}) {
		gap: 20px;
	}
`;

export const UpperButton = styled.button`
	${secondaryButton};
	font-size: 16px;

	&:hover,
	&:focus {
		border: 1px solid var(--darkBackground);
	}

	@media screen and (${device.mobileL}) {
		width: 288px;
		height: 52px;
	}
`;

export const LowerButton = styled.button`
	${secondaryButton};
	font-size: 16px;

	color: var(--mainText);
	background-color: inherit;
	border: 1px solid var(--darkBackground);

	&:hover,
	&:focus {
		color: var(--lightText);
		background-color: var(--darkBackground);
	}

	@media screen and (${device.mobileL}) {
		width: 288px;
		height: 52px;
	}
`;
