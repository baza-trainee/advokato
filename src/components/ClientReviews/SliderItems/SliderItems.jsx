import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import {
	CardHeader,
	CardRecvisits,
	ClientCardWrapper,
	ClientName,
	ClientReview,
	ClientRole,
} from "../ClientReviews.styled";
import "@splidejs/splide/css";

import ClientsData from "../ClientsData/ClientsData";
import { options } from "../ClientsData/SliderSettings";

export const SliderItems = React.forwardRef((props, ref) => {
	return (
		<Splide
			aria-label="Advokato Clients Slider"
			ref={ref}
			options={options}
		>
			{ClientsData.map(elem => {
				return (
					<SplideSlide key={elem.id}>
						<ClientCardWrapper>
							<CardHeader>
								<img
									src={elem.image}
									width={80}
									height={80}
									alt={elem.name}
								/>
								<CardRecvisits>
									<ClientName>{elem.name}</ClientName>
									<ClientRole>{elem.role}</ClientRole>
								</CardRecvisits>
							</CardHeader>
							<ClientReview>{elem.review}</ClientReview>
						</ClientCardWrapper>
					</SplideSlide>
				);
			})}
		</Splide>
	);
});
