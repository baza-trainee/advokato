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
import { isObjectEmpty } from "../../helpers";
import { Icon } from "../Icon";

export const ClientsBlock = () => {
	const arrowRef = useRef();
	const [data, setData] = useState();

	useEffect(() => {
		const getData = async () => {
			const data = await getContent("clients");

			if (!isObjectEmpty(data)) {
				setData(data);
			}
		};

		getData();
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
