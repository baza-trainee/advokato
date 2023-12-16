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

import ClientsData from "../ClientsData/ClientsData";
import { options } from "../ClientsData/SliderSettings";

export const SliderItems = React.forwardRef((props, ref) => {
	const [openReview, setOpenReview] = useState();
	const[closeReview,setCloseReview] = useState(false);
	useEffect(()=>{
		let timer=null;
		if(closeReview===true){
			 timer = setTimeout(() => {
				setOpenReview(null);
			}, 3000);
		}
		  return () => clearTimeout(timer);
	},[openReview,closeReview])
	return (
		<Splide
			aria-label="Слайдер відгуків клієнтів"
			ref={ref}
			options={options}
		>
			{ClientsData.map(elem => {
				return (
					<SplideSlide key={elem.id}>
						<ClientCardWrapper
						 heightText={openReview === elem.id?true:false}
						 onMouseLeave={()=>setCloseReview(true)}
						 >
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
							<ClientReview>
								{openReview === elem.id
									? elem.review
									: elem.review.slice(0, 320)}
								{elem.review.length > 320 ? (
									<button
										onClick={() =>
											openReview !== elem.id
												? setOpenReview(elem.id)&setCloseReview(false)
												: setOpenReview(null)
										}
									>
										&nbsp;{openReview !== elem.id ?"..." + " Далі" : "Згорнути"}
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
