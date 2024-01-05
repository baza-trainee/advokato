import styled from "@emotion/styled";
import { Icon } from "../Icon";
import { device } from "../../styles/mixins";

export const IconClose = styled(Icon)`
	position: fixed;
	z-index: 150;
	right: 20px;
	bottom: 48px;

	width: 32px;
	height: 32px;

	cursor: pointer;

	@media screen and (${device.mobileL}) {
		right: 16px;
		bottom: 35px;
	}

	@media screen and (${device.tablet}) {
		right: 12px;
		bottom: 20px;

		width: 48px;
		height: 48px;
	}

	@media screen and (${device.desktop}) {
		right: 40px;
		bottom: 48px;

		width: 80px;
		height: 80px;
	}
`;
