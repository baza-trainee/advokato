import { useRef } from "react";
import {
	ClientsBlockHeader,
	SectionStyled,
	SliderArrow,
	SliderWrapper,
} from "./ClientReviews.styled";
import { SliderItems } from "./SliderItems/SliderItems";
import { Icon } from "../Icon";

export const ClientReviews = () => {
	const ref = useRef();

	return (
		<SectionStyled>
				<ClientsBlockHeader>Відгуки</ClientsBlockHeader>
				<SliderWrapper>
				<SliderArrow>
					<button
						aria-label="Перелистування слайдера вліво"
						type="button"
						onClick={e => ref.current.go("-1")}
					>
						<Icon
							id={"icon-slider-arrow-left"}
							width={60}
							height={60}
						/>
					</button>
					</SliderArrow>
					<SliderItems ref={ref} />
					<SliderArrow>
					<button
						aria-label="Перелистування слайдера вправо"
						type="button"
						onClick={e => ref.current.go("+1")}
					>
						<Icon
							id={"icon-slider-arrow-right"}
							width={60}
							height={60}
						/>
					</button>
					</SliderArrow>
				</SliderWrapper>
		</SectionStyled>
	);
};
