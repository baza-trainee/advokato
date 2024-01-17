import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { options } from "../ClientsData/SliderSettings";
import "@splidejs/splide/css";
import { ClientCardWrapper } from "../ClientsBlock.styled";

export const SliderItems = React.forwardRef((props, ref) => {
  const {data} = props;
	return (
		<Splide
			aria-label="Слайдер клієнтів"
			ref={ref}
			options={options}
		>			
			{data?.map(elem => {
				return (
					<SplideSlide key={elem.id}>
						<ClientCardWrapper>
							<img
								height={182}
								width={302}
								onClick={() => elem.link ? window.open(elem.link) : null}
								src={elem.photo_path}
								alt={elem.id}
							/>
						</ClientCardWrapper>
					</SplideSlide>
				);
			})}
		</Splide>
	);
});
