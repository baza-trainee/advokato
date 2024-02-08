import {
	CenterWrp,
	ContactsWrp,
	Container,
	LeftSide,
	SectionStyled,
	TitleStyled,
} from "./Contacts.styled";
import { useEffect } from "react";
import { AddressList } from "./AddressList";
import { GoogleMap } from "./GoogleMap";
import { SocialList } from "../SocialList";
import { useTranslation } from "react-i18next";
import { useGetContacts } from "../../hooks/useGetContacts.js";

export const Contacts = () => {
	const [t, i18n] = useTranslation("global");
	const {cities, contacts} = useGetContacts();
	const isVisible = window.innerWidth <= 768;


	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<SectionStyled>
			<Container>
				<TitleStyled>{t("contactsPage.title")}</TitleStyled>

				<CenterWrp>
					{contacts?.length > 0 && (
						<>
							<LeftSide>
								<AddressList cities={cities} />

								<ContactsWrp>
									{!isVisible && <p>{contacts[0]?.contacts[0]?.phone}</p>}
									{isVisible && <a href={`tel:${contacts[0]?.contacts[0]?.phone}`}>
										{contacts[0]?.contacts[0]?.phone}
									</a>}

									<p>{contacts[0]?.contacts[1]?.mail}</p>

									<SocialList
										currentfill={"#333333"}
										media={contacts[0]?.social}
									/>
								</ContactsWrp>
							</LeftSide>

							<GoogleMap cities={cities} />
						</>
					)}
				</CenterWrp>
			</Container>
		</SectionStyled>
	);
};
