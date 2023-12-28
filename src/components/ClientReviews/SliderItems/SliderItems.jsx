import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import {
	CardHeader,
	CardRecvisits,
	ClientCardWrapper,
	ClientName,
	ClientReview,
	ClientRole,
	ImageWrapper,
} from "../ClientReviews.styled";
import "@splidejs/splide/css";
import { options } from "../ClientsData/SliderSettings";

export const SliderItems = React.forwardRef((props, ref) => {
	const [openReview, setOpenReview] = useState();
	const [closeReview, setCloseReview] = useState(false);
	const { data } = props;
	useEffect(() => {
		let timer = null;
		if (closeReview === true) {
			timer = setTimeout(() => {
				setOpenReview(null);
			}, 3000);
		}
		return () => clearTimeout(timer);
	}, [openReview, closeReview]);

	return (
		<Splide
			aria-label="Слайдер відгуків клієнтів"
			ref={ref}
			options={options}
		>
			{data?.map(elem => {
				return (
					<SplideSlide key={elem.id}>
						<ClientCardWrapper
							heightText={openReview === elem.id ? true : false}
							onMouseLeave={() => setCloseReview(true)}
						>
							<CardHeader>
								<ImageWrapper>
									<img
										src={elem.photo_path}
										width={80}
										height={80}
										alt={elem.name}
									/>
								</ImageWrapper>
								<CardRecvisits>
									<ClientName>{elem.name}</ClientName>
									<ClientRole>{elem.position}</ClientRole>
								</CardRecvisits>
							</CardHeader>
							<ClientReview>
								{openReview === elem.id
									? elem.description
									: elem.description.slice(0, 325)}
								{elem.description.length > 325 ? (
									<button
										onClick={() => {
											openReview !== elem.id
												? setOpenReview(elem.id) & setCloseReview(false)
												: setOpenReview(null);
										}}
									>
										&nbsp;
										{openReview !== elem.id ? "..." + " Далі" : "Згорнути"}
									</button>
								) : null}
							</ClientReview>
						</ClientCardWrapper>
					</SplideSlide>
				);
			})}
		</Splide>
	);
});
