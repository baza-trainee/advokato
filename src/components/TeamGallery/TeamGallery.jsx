import { useRef } from "react";
import { SliderItems } from "./SliderItems/SliderItems";
import {
	Container,
	SectionStyled,
	TeamBlockHeader,
	TeamBlockSubTitle,
} from "./TeamGallery.styled";
import arrowLeft from "../../assets/images/clients-section/arrowLeft.png";
import arrowRight from "../../assets/images/clients-section/arrowRight.png";

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
				onClick={() => arrowRef.current.slickPrev()}
				className="prev"
				type="button"
			>
				<img
					src={arrowLeft}
					alt="arrowLeft"
				/>
			</button>
			<button
				onClick={() => arrowRef.current.slickNext()}
				className="next"
				type="button"
			>
				<img
					src={arrowRight}
					alt="arrowRight"
				/>
			</button>
		</SectionStyled>
	);
};
