import { useRef } from "react";
import {
	ClientsBlockHeader,
	ClientsSliderContainer,
	Container,
	SectionStyled,
	SliderArrow,
} from "./ClientsBlock.styled";
import { SliderItems } from "./SliderItems/SliderItems";
import { Icon } from "../Icon";

export const ClientsBlock = () => {
	const arrowRef = useRef();

	return (
		<SectionStyled>
			<Container>
				<ClientsBlockHeader>Наші клієнти</ClientsBlockHeader>
				<ClientsSliderContainer>
					<SliderArrow>
						<button
							aria-label="Scroll slider left"
							onClick={() => arrowRef.current.slickPrev()}
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
							aria-label="Scroll slider right"
							onClick={() => arrowRef.current.slickNext()}
							type="button"
						>
							<Icon
								id={"icon-slider-arrow-right"}
								width={60}
								height={60}
							/>
						</button>
					</SliderArrow>
				</ClientsSliderContainer>
			</Container>
		</SectionStyled>
	);
};
