import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Loading as NotiflixLoading } from "notiflix/build/notiflix-loading-aio";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

import { getContent } from "../../api";
import { TeamCard } from "../../components/TeamCard";

import {
	Page,
	Container,
	PageTitle,
	SectionTitle,
	CompanyWrap,
	CompanyDescription,
	CompanyImage,
	TeamList,
} from "./CompanyPage.styled";

const CompanyPage = () => {
	const [aboutCompany, setAboutCompany] = useState([]);
	const [team, setTeam] = useState([]);
	const { state } = useLocation();
	const refCard = useRef();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});

		const getData = async () => {
			NotiflixLoading.dots();
			const data = await getContent("/our-team?is_slider=false");

			setAboutCompany(prev => data.company);
			setTeam(prev => data.team);
			NotiflixLoading.remove();
		};

		getData();
	}, []);

	useEffect(() => {
		[...refCard.current.children].map(el => {
			if (state === +el.id) {
				setTimeout(() => el.scrollIntoView(), 1000);
			}
		});
	}, [state, team]);

	const sanitizedCompanyMarkup = DOMPurify.sanitize(
		aboutCompany.our_team_page_description,
	);

	return (
		<Page>
			<Container>
				<PageTitle>Про нашу компанію</PageTitle>
				<section>
					<SectionTitle>
						Адвокатська компанія <br /> «STATUS» -
					</SectionTitle>

					{aboutCompany && (
						<CompanyWrap>
							<CompanyDescription>
								{parse(sanitizedCompanyMarkup)}
							</CompanyDescription>

							<CompanyImage
								src={aboutCompany.our_team_page_photo_path}
								alt="Фото до опису про компанію"
							/>
						</CompanyWrap>
					)}
				</section>

				{team && (
					<section>
						<TeamList ref={refCard}>
							{team.map((teamMember, index) => (
								<li
									id={teamMember.id}
									key={teamMember.id}
								>
									<TeamCard
										teamMember={teamMember}
										index={index}
									/>
								</li>
							))}
						</TeamList>
					</section>
				)}
			</Container>
		</Page>
	);
};

export default CompanyPage;
