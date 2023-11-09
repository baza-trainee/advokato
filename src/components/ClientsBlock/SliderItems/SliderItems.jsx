import React from "react";
import { ClientsData } from "../ClientsData/ClientsData";

import { settings } from "../ClientsData/SliderSettings";
import { SliderWrapper, StyledSlider } from "../ClientsBlock.styled";

export const SliderItems = React.forwardRef((props, ref) => {
	return (
		<SliderWrapper>
			<StyledSlider
				ref={ref}
				{...settings}
			>
				{ClientsData.map(elem => {
					return (
						<img
							key={elem.id}
							src={elem.image}
							alt={elem.title}
						/>
					);
				})}
			</StyledSlider>
		</SliderWrapper>
	);
});
