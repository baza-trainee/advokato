import { useRef } from "react";
import { SliderItems } from "./SliderItems/SliderItems";
import {
	Container,
	SectionStyled,
	TeamBlockHeader,
	TeamBlockSubTitle,
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

			<SliderItems ref={arrowRef} />
			<button
				aria-label="Перелистування слайдера вліво"
				onClick={() => arrowRef.current.slickPrev()}
				className="prev"
				type="button"
			>
				<Icon
					id={"icon-slider-arrow-left"}
					width={60}
					height={60}
				/>
			</button>
			<button
				aria-label="Перелистування слайдера вправо"
				onClick={() => arrowRef.current.slickNext()}
				className="next"
				type="button"
			>
				<Icon
					id={"icon-slider-arrow-right"}
					width={60}
					height={60}
				/>
			</button>
		</SectionStyled>
	);
};
