import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { ClientsData } from "../ClientsData/ClientsData";

import { options } from "../ClientsData/SliderSettings";
import "@splidejs/splide/css";
import { ClientCardWrapper } from "../ClientsBlock.styled";

export const SliderItems = React.forwardRef((props, ref) => {
	return (
		<Splide
			aria-label="Слайдер клієнтів"
			ref={ref}
			options={options}
		>
			{ClientsData.map(elem => {
				return (
					<SplideSlide key={elem.id}>
						<ClientCardWrapper>
							<img
								height={180}
								width={300}
								src={elem.image}
								alt={elem.title}
							/>
						</ClientCardWrapper>
					</SplideSlide>
				);
			})}
		</Splide>
	);
});
