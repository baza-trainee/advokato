import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import TeamData from "../TeamData/TeamData";
import { options } from "../TeamData/SliderSettings";
import { CardName, CardRecvisiteWrapper, CardRole, TeamMateCardWrapper } from "../TeamGallery.styled";
import "@splidejs/splide/css";

export const SliderItems = React.forwardRef((props, ref) => {
	return (
		<Splide
			aria-label="Слайдер працівників компанії"
			ref={ref}
			options={options}
		>
			{TeamData.map(elem => {
				return (
					<SplideSlide key={elem.id}>
						<TeamMateCardWrapper>
							<img
								src={elem.image}
								height={652}
								width={1120}
								alt={elem.name}
							/>
							<CardRecvisiteWrapper>
							<CardName>{elem.name}</CardName>
							<CardRole>{elem.role}</CardRole>
							</CardRecvisiteWrapper>
						</TeamMateCardWrapper>
					</SplideSlide>
				);
			})}
		</Splide>
	);
});
