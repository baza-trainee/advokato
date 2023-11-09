import React from "react";
import TeamData from "../TeamData/TeamData";
import { settings } from "../TeamData/SliderSettings";
import {
	CardName,
	CardRole,
	SliderWrapper,
	StyledSlider,
	TeamMateCardWrapper,
} from "../TeamGallery.styled";

export const SliderItems = React.forwardRef((props, ref) => {
	return (
		<>
			<SliderWrapper>
				<StyledSlider
					ref={ref}
					{...settings}
				>
					{TeamData.map(elem => {
						return (
							<TeamMateCardWrapper key={elem.id}>
								<img
									src={elem.image}
									height={732}
									width={1120}
									alt={elem.name}
								/>
								<CardName>{elem.name}</CardName>
								<CardRole>{elem.role}</CardRole>
							</TeamMateCardWrapper>
						);
					})}
				</StyledSlider>
			</SliderWrapper>
		</>
	);
});
