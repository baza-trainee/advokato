import { useState, useEffect } from "react";

import { getContent } from "../../../api";
import { ModalFromRoot } from "../../ModalFromRoot";
import { ResultsModal } from "../ResultsModal";
import { Icon } from "../../Icon";

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
	ArrowBlock, DescriptionWrapper,
} from "./ResultElement.styled.js";

export const ResultElement = () => {
	const [modalData, setModalData] = useState(null);
	const [data, setData] = useState([]);
	const [isShowMore, setIsShowMore] = useState(false)

	useEffect(() => {
		const getData = async () => {
			const data = await getContent("news");

			if (data?.length > 0) {
				setData(data);
			}
		};

		getData();
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
	const showMoreHandler = () => {
		setIsShowMore(!isShowMore)
	}

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
						<ContentStyled key={id} style={{width: '100%'}}>
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
										<DescriptionWrapper>
											<p className={`${isShowMore ? "desc" : "desc hidden"}`}>{description}</p>
											<p className="more" onClick={showMoreHandler}>{isShowMore ? "Згорнути" : "Читати далі"}</p>
										</DescriptionWrapper>
										<BubbleForm>
											<BubbleFormText>{specialization_name}</BubbleFormText>
											<PublicationDate>{created_at}</PublicationDate>
										</BubbleForm>
									</ResultText>
								</ResultItemStyled>
							</WrapperStyled>

							<ArrowBlock
								aria-label="Open"
								type="button"
								style={{ paddingLeft: "10px", paddingBottom: "10px" }}
								onClick={() => openModalWithSpecificData(data[index])}
							>
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
