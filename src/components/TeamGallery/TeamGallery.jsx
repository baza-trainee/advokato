import { useEffect, useRef, useState } from "react";
import { SliderItems } from "./SliderItems/SliderItems";
import {
	Container,
	SectionStyled,
	SliderArrow,
	TeamBlockHeader,
	TeamBlockSubTitle,
	TeamSliderContainer,
} from "./TeamGallery.styled";
import { Icon } from "../Icon";
import { getContent } from "../../api/fetchContent";

export const TeamGallery = () => {
	const arrowRef = useRef();
	const [data, setData] = useState();

	useEffect(() => {
		getContent("https://advocato-backend.vercel.app/api/v1/our-team").then(
			res => setData(res.team),
		);
	}, []);

	return (
		<SectionStyled>
			<Container>
				<TeamBlockHeader>Наша професійна команда</TeamBlockHeader>
				<TeamBlockSubTitle>
					Ключовим активом нашої адвокатської компанії є наша досвідчена та
					висококваліфікована команда юристів.
				</TeamBlockSubTitle>
			</Container>
			{data?.length > 0 && (
				<TeamSliderContainer>
					<SliderArrow>
						<button
							aria-label="Перелистування слайдера вліво"
							onClick={() => arrowRef.current.go("-1")}
							type="button"
						>
							<Icon
								id={"icon-slider-arrow-left"}
								width={60}
								height={60}
							/>
						</button>
					</SliderArrow>
					<SliderItems
						ref={arrowRef}
						data={data}
					/>
					<SliderArrow>
						<button
							aria-label="Перелистування слайдера вправо"
							onClick={() => arrowRef.current.go("+1")}
							type="button"
						>
							<Icon
								id={"icon-slider-arrow-right"}
								width={60}
								height={60}
							/>
						</button>
					</SliderArrow>
				</TeamSliderContainer>
			)}
		</SectionStyled>
	);
};
