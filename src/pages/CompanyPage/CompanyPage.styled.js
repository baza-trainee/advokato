import styled from "@emotion/styled";
import { container, device, flexBox, flexColumn } from "../../styles/mixins";

export const Page = styled.div`
	background-color: var(--darkBackground);
	color: var(--lightText);
	min-height: 110dvh;
`;

export const Container = styled.div`
	${container};
	padding-left: 24px;
	padding-right: 24px;
	padding-top: calc(40px + 48px);
	padding-bottom: calc(60px + 24px);

	@media screen and (${device.mobileL}) {
		padding-top: calc(60px + 68px);
		padding-bottom: calc(60px + 24px);
	}

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
	margin-bottom: 20px;

	font-family: var(--Montserrat);
	font-weight: 500;
	font-size: 20px;
	line-height: 28px;

	color: var(--lightText);

	@media screen and (${device.mobileL}) {
		margin-bottom: 24px;

		font-size: 24px;
		line-height: 34px;
	}

	@media screen and (${device.tablet}) {
		margin-bottom: 40px;

		font-size: 40px;
		line-height: 56px;
	}
`;

export const SectionTitle = styled.h2`
	font-family: var(--Raleway);
	font-weight: 400;
	font-size: 20px;
	line-height: 28px;
	margin-bottom: 20px;

	@media screen and (${device.tablet}) {
		margin-bottom: 40px;

		font-size: 32px;
		line-height: 45px;
	}
`;

export const CompanyWrap = styled.div`
	${flexBox}
	flex-direction: column;
	gap: 20px;
	margin-bottom: 102px;

	@media screen and (${device.mobileL}) {
		margin-bottom: 24px;
	}

	@media screen and (${device.tablet}) {
		flex-direction: row;
		gap: 24px;
		margin-bottom: 120px;
	}

	@media screen and (${device.desktop}) {
		gap: 72px;
		margin-bottom: 132px;
	}
`;

export const CompanyDescription = styled.div`
	font-family: var(--Raleway);
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;

	p {
		margin-bottom: 0.5em;
	}

	ul {
		list-style: inside;
		list-style-position: outside;
		padding-left: 1em;
	}

	@media screen and (${device.mobileL}) {
		font-size: 16px;
		line-height: 24px;
	}

	@media screen and (${device.desktop}) {
		font-size: 18px;
		line-height: 27px;
	}
`;

export const CompanyImage = styled.img`
	width: 272px;
	height: 360px;
	object-fit: cover;

	@media screen and (${device.mobileL}) {
		width: 648px;
		height: 360px;
	}

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
	gap: 40px;

	@media screen and (${device.mobileL}) {
		gap: 24px;
	}

	@media screen and (${device.tablet}) {
		gap: 40px;
	}
	@media screen and (${device.desktop}) {
		gap: 72px;
	}
`;
