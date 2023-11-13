import { useRef } from "react";
import {
	ClientsBlockHeader,
	Container,
	SectionStyled,
	SliderWrapper,
} from "./ClientReviews.styled";
import { SliderItems } from "./SliderItems/SliderItems";
import { Icon } from "../Icon";

export const ClientReviews = () => {
	const ref = useRef();
	return (
		<SectionStyled>
			<Container>
				<ClientsBlockHeader>Відгуки</ClientsBlockHeader>
				<SliderWrapper>
					<button
						aria-label="Scroll slider left"
						type="button"
						onClick={e => ref.current.go("-1")}
					>
						<Icon
							id={"icon-slider-arrow-left"}
							width={60}
							height={60}
						/>
					</button>
					<SliderItems ref={ref} />
					<button
						aria-label="Scroll slider right"
						type="button"
						onClick={e => ref.current.go("+1")}
					>
						<Icon
							id={"icon-slider-arrow-right"}
							width={60}
							height={60}
						/>
					</button>
				</SliderWrapper>
			</Container>
		</SectionStyled>
	);
};
