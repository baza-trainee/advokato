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
								to={`/company`}
								aria-label="company"
								state={elem.id}
							>
								<img
									src={elem.slider_photo_path}
									width={1120}
									height={652}
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
