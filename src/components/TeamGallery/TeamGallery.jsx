import { useRef } from "react";
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

export const TeamGallery = () => {
	const arrowRef = useRef();
	return (
		<SectionStyled>
			<Container>
				<TeamBlockHeader>Наша професійна команда</TeamBlockHeader>
				<TeamBlockSubTitle>
					Ключовим активом нашої адвокатської компанії є наша досвідчена та
					висококваліфікована команда юристів.
				</TeamBlockSubTitle>
			</Container>
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
			<SliderItems ref={arrowRef} />
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
		</SectionStyled>
	);
};
