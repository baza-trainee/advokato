import { device, flexBox, fontDesktop } from "../../../../styles/mixins";

import checkboxFalse from "../../../../assets/icons/checkboxFalse.svg";
import checkboxTrue from "../../../../assets/icons/checkboxTrue.svg";
import styled from "@emotion/styled";

export const CheckBoxWrp = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 10px;
  max-width: 220px;

	@media screen and (${device.mobileL}) {
		/* width: 496px;
    height: 52px;
    margin-top: 4px;
    margin-bottom: 4px; */
    max-width: 450px;
	}

	@media screen and (${device.desktop}) {
		/* width: 508px;
    height: 56px;
    margin-top: -12px;
    margin-bottom: -4px; */
    max-width: 500px;
	}
`;

export const CheckBoxStyled = styled.input`
	appearance: none;
	outline: none;
	cursor: pointer;

	&::before {
		content: url(${checkboxFalse});
		${flexBox};
		height: 14px;
		width: 14px;

		@media screen and (${device.mobileL}) {
			height: 16px;
			width: 16px;
		}

		@media screen and (${device.desktop}) {
			height: 18px;
			width: 18px;
		}
	}

	&.checked::before {
		content: url(${checkboxTrue});
		/* ${flexBox};

		@media screen and (${device.tablet}) {
			height: 16px;
			width: 16px;
		}

		@media screen and (${device.desktop}) {
			height: 21px;
			width: 21px;
		} */
	}

	@media screen and (${device.mobileL}) {
		margin-right: 10px;
	}
`;

export const DocLinkStyled = styled.p`
	/* display: ${({ lang }) => (lang === "en" ? "inline" : "flex")};
  flex-wrap: ${({ lang }) => (lang === "en" ? "nowrap" : "wrap")}; */

	/* font-family: var(--Montserrat);
  font-weight: 500;
  letter-spacing: 0em;
  color: var(--mainText); */
	/* line-height: normal; */
	font-weight: 600;
	/* max-width: 260px; */
	/* text-align: center; */
	font-size: 14px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 10px;

	span {
		cursor: pointer;
		text-decoration: underline;
		color: #183ec6;
		/* margin-left: ${({ lang }) => (lang === "en" ? "10px" : "0px")}; */
	}

	@media screen and (${device.mobileL}) {
		/* width: 452px;
    height: 52px;
    font-size: 18px;
    line-height: 21.94px; */
		font-size: 16px;
		/* max-width: 370px; */
	}

	@media screen and (${device.desktop}) {
		/* width: 453px;
    height: 56px;
    line-height: 32.4px; */
		font-size: 18px;
	}
`;

export const ErrorText = styled.p`
	position: absolute;
	top: 0;
	left: 0;

	/* ${fontDesktop}; */
	color: var(--accentText);
	font-weight: 600;
	text-align: center;
	width: 100%;
	transform: translateY(62px);
	font-size: 14px;

	@media screen and (${device.mobileL}) {
		/* height: 32px;
    line-height: calc(29 / 18); */
		transform: translateY(48px);
		font-size: 16px;
	}

	@media screen and (${device.desktop}) {
		/* height: 36px; */
		/* transform: translateY(50px); */
		/* font-size: 22px; */
		/* line-height: calc(35 / 22); */
		font-size: 18px;
		transform: translateY(50px);
	}
`;
