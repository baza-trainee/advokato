import { useEffect, useRef, useState } from "react";
import {
	ClientsBlockHeader,
	ClientsSliderContainer,
	Container,
	SectionStyled,
	SliderArrow,
} from "./ClientsBlock.styled";
import { SliderItems } from "./SliderItems/SliderItems";
import { getContent } from "../../api";
import { Icon } from "../Icon";

export const ClientsBlock = () => {
	const arrowRef = useRef();
	const [data, setData] = useState();

	useEffect(() => {
		getContent("https://advocato-backend.vercel.app/api/v1/clients").then(res =>
			setData(res),
		);
	}, []);

	return (
		<SectionStyled>
			<Container>
			<ClientsBlockHeader>Наші клієнти</ClientsBlockHeader>
			</Container>
			{data?.length > 0 && (
				<ClientsSliderContainer>
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
				</ClientsSliderContainer>
			)}
		</SectionStyled>
	);
};
