import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

import { PdfViewer } from "../PdfViewer";
import { Modal } from "../Modal";
import { SocialList } from "../SocialList";
import {
	Container,
	FlexWraper,
	FooterStyled,
	Line,
	LinkStyled,
	List,
	PolicyText,
	Text,
	TextLink,
} from "./Footer.styled";
import pdfFile from "../../assets/documents/test_privacy_policy.pdf";
import pdfSiteRules from "../../assets/documents/site_rules.pdf";
import { getContent } from "../../api/";

const currentYear = new Date().getFullYear();

export const Footer = () => {
	const [t, i18n] = useTranslation("global");
	const [modalActive, setModalActive] = useState(false);
	const [active, setActive] = useState("home");
	const [selectedPdfFile, setSelectedPdfFile] = useState(null);
	const { pathname, hash } = useLocation();

	const [contacts, setContacts] = useState([]);
	const phone = contacts[0]?.contacts[0]?.phone;
	const formattedPhone = phone ? phone.replace(/[^\d]/g, "") : "";

	const [cities, setCities] = useState([]);
	const kyivCity = cities.find(city => city.city_name === "Київ");
	const googleMapsUrl = `https://www.google.com/maps?q=${kyivCity?.coords.lat},${kyivCity?.coords.lng}`;

	useEffect(() => {
		const getData = async () => {
			const data = await getContent("contacts");

			if (data) {
				setCities(prev => data.cities);
				setContacts(prev => data.contacts);
			}
		};

		getData();
	}, []);

	useEffect(() => {
		if (pathname === "/" && hash === "") {
			return setActive(prev => "home");
		}
		if (pathname === "/company") {
			return setActive(prev => "company");
		}
		if (hash === "#practice") {
			return setActive(prev => "practice");
		}
		if (hash === "#news") {
			return setActive(prev => "news");
		}
		if (pathname === "/contacts") {
			return setActive(prev => "contacts");
		}
	}, [pathname, hash]);

	return (
		<FooterStyled>
			<Container>
				<Modal
					active={modalActive}
					setActive={setModalActive}
				>
					<PdfViewer pdfFile={selectedPdfFile} />
				</Modal>

				<FlexWraper>
					<nav>
						<List>
							<li>
								<LinkStyled
									to="/"
									aria-label="посилання на головну сторінку"
									current="home"
									active={active}
								>
									{t("header.nav.home")}
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/company"
									aria-label="посилання на сторінку компанії"
									current="company"
									active={active}
								>
									{t("header.nav.company")}
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/#practice"
									aria-label="посилання на сторінку практики"
									current="practice"
									active={active}
								>
									{t("header.nav.practice")}
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/#news"
									aria-label="посилання на сторінку новин"
									current="news"
									active={active}
								>
									{t("header.nav.news")}
								</LinkStyled>
							</li>
							<li>
								<LinkStyled
									to="/contacts"
									aria-label="посилання на сторінку контактів"
									current="contacts"
									active={active}
								>
									{t("header.nav.contacts")}
								</LinkStyled>
							</li>
						</List>
					</nav>

					<div>
						<PolicyText
							to="#"
							onClick={() => {
								setModalActive(true);
								setSelectedPdfFile(pdfFile);
							}}
							aria-label="посилання на політику конфіденційності"
						>
							Політика конфіденційності
						</PolicyText>
						<PolicyText
							to="#"
							onClick={() => {
								setModalActive(true);
								setSelectedPdfFile(pdfSiteRules);
							}}
							aria-label="посилання на умови користування сайтом"
						>
							Правила користування сайтом
						</PolicyText>
					</div>

					<FlexWraper
						flexDirection="column"
						gap="0"
					>
						<Text>ADVOCATE COMPANY «STATUS»</Text>

						{cities?.length > 0 && (
							<TextLink
								to={googleMapsUrl}
								target="_blank"
								rel="noopener nofollow noreferrer"
								aria-label="адреса компанії"
							>
								{`${kyivCity?.address}`}
							</TextLink>
						)}

						{contacts?.length > 0 && (
							<>
								<TextLink
									to={`tel:+${formattedPhone}`}
									aria-label="телефон компанії"
								>
									{phone}
								</TextLink>
								<TextLink
									to={`mailto:${contacts[0]?.contacts[1]?.mail}`}
									aria-label="електронна пошта компанії"
								>
									{contacts[0]?.contacts[1]?.mail}
								</TextLink>

								<SocialList media={contacts[0]?.social} />
							</>
						)}
					</FlexWraper>
				</FlexWraper>

				<Line />
				<Text>{`${currentYear} ADVOCATE COMPANY «STATUS». All rights reserved.`}</Text>
			</Container>
		</FooterStyled>
	);
};
