import { useRef } from "react";
import {
	ClientsBlockHeader,
	ClientsSliderContainer,
	Container,
	SectionStyled,
	SliderArrow,
} from "./ClientsBlock.styled";
import { SliderItems } from "./SliderItems/SliderItems";

import arrowLeft from "../../assets/images/clients-section/arrowLeft.png";
import arrowRight from "../../assets/images/clients-section/arrowRight.png";

export const ClientsBlock = () => {
	const arrowRef = useRef();

	return (
		<SectionStyled>
			<Container>
				<ClientsBlockHeader>Наші клієнти</ClientsBlockHeader>
				<ClientsSliderContainer>
					<SliderArrow>
						<button
							onClick={() => arrowRef.current.slickPrev()}
							type="button"
						>
							<img
								src={arrowLeft}
								alt="arrowLeft"
							/>
						</button>
					</SliderArrow>
					<SliderItems ref={arrowRef} />
					<SliderArrow>
						<button
							onClick={() => arrowRef.current.slickNext()}
							type="button"
						>
							<img
								src={arrowRight}
								alt="arrowRight"
							/>
						</button>
					</SliderArrow>
				</ClientsSliderContainer>
			</Container>
		</SectionStyled>
	);
};
