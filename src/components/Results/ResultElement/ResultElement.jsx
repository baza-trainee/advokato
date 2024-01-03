import { useState, useEffect } from "react";
import { getContent } from "/src/api/fetchContent";

import { ModalFromRoot } from "../../ModalFromRoot";
import ResultsModal from "../ResultsModal/ResultsModal";

import {
	ContentStyled,
	WrapperStyled,
	ResultItemStyled,
	ImageBlock,
	ImageStyled,
	ResultText,
	BubbleForm,
	BubbleFormText,
	PublicationDate,
	ArrowBlock,
} from "./ResultElement.styled.js";

import { Icon } from "../../Icon";

export const ResultElement = () => {
	const [modalData, setModalData] = useState(null);
	const [data, setData] = useState([]);

	useEffect(() => {
		getContent("https://advocato-backend.vercel.app/api/v1/news").then(res =>
			setData(res),
		);
	}, []);

	useEffect(() => {
		if (!modalData) {
			document.body.style.overflowY = "auto";
		}
	}, [modalData]);

	const openModalWithSpecificData = selectedData => {
		document.body.style.overflowY = "hidden";
		setModalData(selectedData);
	};

	const closeModal = () => {
		document.body.style.overflowY = "auto";
		setModalData(null);
	};

	return (
		<>
			{data?.length > 1 &&
				data.map(
					(
						{
							id,
							photo_path,
							name,
							description,
							specialization_name,
							created_at,
						},
						index,
					) => (
						<ContentStyled key={id}>
							<WrapperStyled>
								<ResultItemStyled>
									<ImageBlock
										width={464}
										height={312}
									>
										<ImageStyled
											src={photo_path}
											alt="photo-result"
										/>
									</ImageBlock>

									<ResultText>
										<h3>{name}</h3>
										<p className="desc">{description}</p>
										<BubbleForm>
											<BubbleFormText>{specialization_name}</BubbleFormText>
											<PublicationDate>{created_at}</PublicationDate>
										</BubbleForm>
									</ResultText>
								</ResultItemStyled>
							</WrapperStyled>

							<ArrowBlock onClick={() => openModalWithSpecificData(data[index])}>
								<Icon
									id={"icon-arrow-up"}
									width={14}
									height={12}
								/>
							</ArrowBlock>
							{modalData && (
								<ModalFromRoot
									toggleModal={closeModal}
									align={"flex-start"}
								>
									<ResultsModal
										data={modalData}
										setModalActive={closeModal}
									/>
								</ModalFromRoot>
							)}
						</ContentStyled>
					),
				)}
		</>
	);
};
