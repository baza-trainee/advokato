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
import { isObjectEmpty } from "../../helpers";
import { getContent } from "../../api/fetchContent";

export const TeamGallery = () => {
	const arrowRef = useRef();
	const [data, setData] = useState();

	useEffect(() => {
		const getData = async () => {
			const data = await getContent("our-team");
			if (!isObjectEmpty(data)) {
				setData(data.team);
			}
		};

		getData();
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
