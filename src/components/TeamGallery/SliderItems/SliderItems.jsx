import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import { options } from "../TeamData/SliderSettings";
import {
	CardName,
	CardRecvisiteWrapper,
	CardRole,
	TeamMateCardWrapper,
} from "../TeamGallery.styled";

import "@splidejs/splide/css";
import { NavLink } from "react-router-dom";

export const SliderItems = React.forwardRef((props, ref) => {
	return (
		<Splide
			aria-label="Слайдер працівників компанії"
			ref={ref}
			options={options}
		>
			{props.data?.map(elem => {
				return (
					<SplideSlide key={elem.id}>
						<TeamMateCardWrapper>
							<NavLink
								to="/practice"
								aria-label="practice"
								state={elem.id}
							>
								<img
									src={elem.slider_photo_path}
									height={652}
									width={1120}
									alt={elem.name}
								/>
							</NavLink>
							<CardRecvisiteWrapper>
								<CardName>{elem.name}</CardName>
								<CardRole>{elem.position}</CardRole>
							</CardRecvisiteWrapper>
						</TeamMateCardWrapper>
					</SplideSlide>
				);
			})}
		</Splide>
	);
});
