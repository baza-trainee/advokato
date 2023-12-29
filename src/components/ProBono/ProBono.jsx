import {
	BlockWrapper,
	BonoHeader,
	BonoText,
	Container,
	LeftSide,
	RightSide,
	SectionStyled,
	TextWrapper,
} from "./ProBono.styled";

<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> dev
import { getContent } from "../../api/fetchContent";

export const ProBono = () => {
	const [data, setData] = useState();
	const regex = /(.*)(?=<\/p>)/g;
<<<<<<< HEAD

=======
>>>>>>> dev
	useEffect(() => {
		getContent("https://advocato-backend.vercel.app/api/v1/pro_bono").then(
			res => setData(res),
		);
	}, []);

	return (
		<>
			<SectionStyled>
				<Container>
					<BonoHeader>ProBono</BonoHeader>
					{data?.length > 1 &&
						data.map((elem, index) => {
							return index % 2 === 0 ? (
								<BlockWrapper key={elem.id}>
									<LeftSide>
										<TextWrapper>
<<<<<<< HEAD
											<BonoText>
												{elem.description.split("<p>").map((el, index) => {
													return <p key={index}>{el.match(regex)}</p>;
												})}
											</BonoText>
=======
											<BonoText
												dangerouslySetInnerHTML={{ __html: elem.description }}
											/>
>>>>>>> dev
										</TextWrapper>
									</LeftSide>
									<RightSide>
										<img
											height={572}
											src={elem.photo_path}
											alt="Зображення ProBono"
										/>
									</RightSide>
								</BlockWrapper>
							) : (
								<BlockWrapper key={elem.id}>
									<LeftSide>
										<img
											height={572}
											src={elem.photo_path}
											alt="Зображення ProBono"
										/>
									</LeftSide>
									<RightSide>
										<TextWrapper>
<<<<<<< HEAD
											<BonoText>
												{elem.description.split("<p>").map((el, index) => {
													return <p key={index}>{el.match(regex)}</p>;
												})}
											</BonoText>
=======
											<BonoText
												dangerouslySetInnerHTML={{ __html: elem.description }}
											/>
>>>>>>> dev
										</TextWrapper>
									</RightSide>
								</BlockWrapper>
							);
						})}
				</Container>
			</SectionStyled>
		</>
	);
};
