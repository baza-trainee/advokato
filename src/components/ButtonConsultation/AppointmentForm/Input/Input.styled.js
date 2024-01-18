import { device, fontDesktop } from "../../../../styles/mixins";

import styled from "@emotion/styled";

export const LabelStyled = styled.label`
	position: relative;

	p {
		/* ${fontDesktop}; */
		font-size: 14px;
		font-weight: 600;

		@media screen and (${device.mobileL}) {
			/* height: 32px;
			line-height: calc(29 / 18); */
			font-size: 16px;
		}

		@media screen and (${device.desktop}) {
			/* height: 36px;
      line-height: calc(35 / 22); */
			font-size: 18px;
		}
	}

	p:first-of-type {
		margin-bottom: 4px;
		color: var(--mainText);
	}

	@media screen and (${device.mobileL}) {
		/* width: 440px; */
		width: 400px;
	}
`;

export const InputStyled = styled.input`
	position: relative;
	padding: 12px 12px;
	width: 100%;

	font-family: var(--Montserrat);
	font-weight: 500;
	/* letter-spacing: 0em; */
	color: var(--mainText);
	background-color: inherit;
	border: 1px solid var(--greyText);

	border-color: ${({ isValid, error, touch }) => {
		if (!error && touch && isValid) {
			return "var(--trueText);";
		}

		if (!isValid && error) {
			return "var(--accentText);";
		}
	}};

	border-radius: 5px;
	&[type="search"] {
		-webkit-appearance: none;
	}

	@media screen and (${device.mobileL}) {
		padding: 16px 16px;
	}

	&::placeholder {
		font-family: var(--Montserrat);
		font-weight: 500;
		/* letter-spacing: 0em; */
		color: var(--greyText);

		@media screen and (${device.mobileL}) {
			font-size: 16px;
			/* line-height: 19.5px; */
		}

		@media screen and (${device.desktop}) {
			font-size: 18px;
			/* line-height: 21.94px; */
		}
	}

	&:focus {
		outline: 2px solid var(--mainText);
	}

	@media screen and (${device.mobileL}) {
		/* height: 48px; */
		font-size: 16px;
		/* line-height: 19.5px; */
	}

	@media screen and (${device.desktop}) {
		/* height: 56px; */
		font-size: 18px;
		/* line-height: 21.94px; */
	}
`;

export const ErrorText = styled.p`
	position: absolute;
	top: 0;
	left: 0;
	color: var(--accentText);
	width: 100%;
	text-align: end;
	transform: translateY(65px);

	@media screen and (${device.mobileL}) {
		transform: translateY(80px);
	}

	@media screen and (${device.desktop}) {
		transform: translateY(85px);
	}
`;
