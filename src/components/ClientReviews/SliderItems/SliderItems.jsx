import React, { useEffect, useState } from "react";
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
								<img
									src={elem.photo_path}
									width={80}
									height={80}
									alt={elem.name}
								/>
								<CardRecvisits>
									<ClientName>{elem.name}</ClientName>
									<ClientRole>{elem.position}</ClientRole>
								</CardRecvisits>
							</CardHeader>
							<ClientReview>
								{openReview === elem.id
									? elem.description
									: elem.description.slice(0, 320)}
								{elem.description.length > 320 ? (
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
