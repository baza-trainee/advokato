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

import React, { useEffect, useState } from "react";
import { isObjectEmpty } from "../../helpers";
import { getContent } from "../../api/fetchContent";

export const ProBono = () => {
	const [data, setData] = useState();

	useEffect(() => {
		const getData = async () => {
			const data = await getContent("pro_bono");
			if (!isObjectEmpty(data)) {
				setData(data);
			}
		};

		getData();
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
											<BonoText
												dangerouslySetInnerHTML={{ __html: elem.description }}
											/>
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
											<BonoText
												dangerouslySetInnerHTML={{ __html: elem.description }}
											/>
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
