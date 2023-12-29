import { useEffect } from "react";

import { ModalFromRoot } from "../../ModalFromRoot";
import ResultsModal from "../ResultsModal/ResultsModal";

import { resultsItems } from "../ResultItems.js";
import {
	ContentStyled,
	WrapperStyled,
	ResultItemStyled,
	ImageStyled,
	ResultText,
	BubbleForm,
	ButtonStyled,
	PublicationDate,
	ArrowBlock,
} from "./ResultElement.styled.js";

import { Icon } from "../../Icon";
import { useState } from "react";

export const ResultElement = () => {
	const [modalActive, setModalActive] = useState(false);

	useEffect(() => {
		if (!modalActive) {
			document.body.style.overflowY = "auto";
		}
	}, [modalActive]);

	const toggleModal = () => {
		document.body.style.overflowY = "hidden";
		setModalActive(prev => !prev);
	};

	
	return (
		<>
			{resultsItems.map(item => (
				<ContentStyled key={item.id}>
					<WrapperStyled>
						<ResultItemStyled>
							<ImageStyled
								src={item.imageUrl}
								width={464}
								height={380}
								alt="photo-result"
							/>

							<ResultText>
								<h3>{item.title}</h3>
								<p className="desc">{item.desc}</p>
								<BubbleForm>
									<ButtonStyled>Корпоративне право</ButtonStyled>
									<PublicationDate>11/07/2022</PublicationDate>
								</BubbleForm>
							</ResultText>
						</ResultItemStyled>
					</WrapperStyled>
					<ArrowBlock onClick={toggleModal}>
						<Icon
							id={"icon-arrow-up"}
							width={14}
							height={12}
						/>
					</ArrowBlock>
					{modalActive && (
						<ModalFromRoot
							toggleModal={toggleModal}
							align={"flex-start"}
						>
							<ResultsModal setModalActive={setModalActive} />
						</ModalFromRoot>
					)}
				</ContentStyled>
			))}
		</>
	);
};
