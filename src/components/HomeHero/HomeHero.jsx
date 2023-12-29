import { useEffect, useState } from "react";
import {
	SectionStyled,
	Container,
	MainTitleStyled,
	SubtitleStyled,
} from "./HomeHero.styled";
import { getContent } from "../../api";

export const HomeHero = () => {
	const [data, setData] = useState();

	useEffect(() => {
		getContent("https://advocato-backend.vercel.app/api/v1/hero").then(res =>
			setData(res.hero),
		);
	}, []);

	return (
		<SectionStyled>
			<Container>
				<MainTitleStyled>{data?.slogan}</MainTitleStyled>

				<div>
					<SubtitleStyled>{data?.left_text}</SubtitleStyled>
					<SubtitleStyled>{data?.right_text}</SubtitleStyled>
				</div>
			</Container>
		</SectionStyled>
	);
};
