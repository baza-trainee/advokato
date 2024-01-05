import { useEffect, useRef, useState } from "react";
import {
	ClientsBlockHeader,
	Container,
	SectionStyled,
	SliderArrow,
	SliderWrapper,
} from "./ClientReviews.styled";
import { SliderItems } from "./SliderItems/SliderItems";
import { Icon } from "../Icon";
import { isObjectEmpty } from "../../helpers";
import { getContent } from "../../api/fetchContent";

export const ClientReviews = () => {
	const ref = useRef();
	const [data, setData] = useState();

	useEffect(() => {
		const getData = async () => {
			const data = await getContent("reviews");
			
			if (!isObjectEmpty(data)) {
				setData(data);
			}
		};

		getData();
	}, []);

	return (
		<SectionStyled>
			<Container>
				<ClientsBlockHeader>Відгуки</ClientsBlockHeader>
			</Container>
			{data?.length > 0 && (
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
					<SliderItems
						ref={ref}
						data={data}
					/>
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
			)}
		</SectionStyled>
	);
};
