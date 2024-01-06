import styled from "@emotion/styled";
import {
	container,
	fontSectionTitle,
	device,
	flexBox,
	flexColumn,
} from "../../styles/mixins";

export const Page = styled.div`
	background-color: var(--darkBackground);
	color: var(--lightText);
	min-height: calc(110dvh);
`;

export const Container = styled.div`
	${container};

	@media screen and (${device.tablet}) {
		padding-top: calc(120px + 76px);
		padding-bottom: calc(120px + 24px);
	}

	@media screen and (${device.desktop}) {
		padding-top: calc(156px + 88px);
		padding-bottom: calc(132px + 24px);
	}
`;

export const PageTitle = styled.h1`
	${fontSectionTitle};
	color: var(--lightText);
	margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
	margin-bottom: 40px;

	font-family: var(--Raleway);
	font-weight: 400;
	font-size: 32px;
	line-height: calc(44.8 / 32);
`;

export const CompanyWrap = styled.div`
	@media screen and (${device.mobileL}) {
		${flexBox}
	}

	@media screen and (${device.tablet}) {
		gap: 24px;
		margin-bottom: 120px;
	}

	@media screen and (${device.desktop}) {
		gap: 72px;
		margin-bottom: 132px;
	}
`;

export const CompanyDescription = styled.div`
	flex-grow: 1;

	font-family: var(--Raleway);
	font-weight: 400;

	p {
		margin-bottom: 0.5em;
	}

	ul {
		list-style: inside;
		list-style-position: outside;
		padding-left: 1em;
	}

	@media screen and (${device.tablet}) {
		font-size: 16px;
		line-height: calc(24 / 16);
	}

	@media screen and (${device.desktop}) {
		font-size: 18px;
		line-height: calc(27 / 18);
	}
`;

export const CompanyImage = styled.img`
	object-fit: cover;

	@media screen and (${device.tablet}) {
		width: 420px;
		height: 720px;
	}

	@media screen and (${device.desktop}) {
		width: 524px;
		height: 772px;
	}
`;

export const TeamList = styled.ul`
	${flexBox};
	${flexColumn};

	@media screen and (${device.tablet}) {
		gap: 40px;
	}
	@media screen and (${device.desktop}) {
		gap: 72px;
	}
`;
