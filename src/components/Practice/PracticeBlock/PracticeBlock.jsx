
import PropTypes from 'prop-types';

import {
	ImageStyled, mobile, mobileLAndTablet,
	MoreButtonStyled,
	PracticeDesc,
	PracticeDescFull,
	PracticeDescWrp, PracticeInfo,
	PracticeTitle, tabletAndDesktop,
} from "../Practice.styled.js";
import parse from "html-react-parser";
import { ButtonConsultation } from "../../ButtonConsultation/index.jsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowDimensions } from "../../../hooks/index.js";
import DOMPurify from "dompurify";



const PracticeBlock = ({currentPractice}) => {
	const [isShowMoreDesc, setIsShowMoreDesc] = useState(false);
	const ref = useRef();
	const [t, i18n] = useTranslation('global');
	const [ButtonStyles, setButtonStyles] = useState(tabletAndDesktop);
	const { width } = useWindowDimensions();
	const [modalActive, setModalActive] = useState(false);


	useEffect(() => {
		if (!width) {
			return;
		}

		if (width <= 767) {
			return setButtonStyles(() => mobile);
		}

		if (width >= 1024) {
			return setButtonStyles(() => tabletAndDesktop);
		}

		if (width >= 768) {
			return setButtonStyles(() => mobileLAndTablet);
		}
	}, [width]);

	const handleClickMoreButton = () => {
		setIsShowMoreDesc(prev => !prev);

		if (isShowMoreDesc) {
			ref.current.scrollIntoView({
				block: 'start',
				inline: 'nearest',
				behavior: 'smooth',
			});
		}
	};

	const sanitizedMarkup = DOMPurify.sanitize(
		currentPractice?.specialization_description_full
	);

	return (
		<PracticeInfo ref={ref} >
			<ImageStyled
				src={currentPractice?.specialization_photo}
				width={700}
				height={320}
				alt="тематичне зображення до категорії"
			/>

			<PracticeTitle>
				{currentPractice?.specialization_name}
			</PracticeTitle>

			<PracticeDescWrp>
				<PracticeDesc isShowMoreDesc={isShowMoreDesc}>
					{currentPractice?.specialization_description}
				</PracticeDesc>

				{isShowMoreDesc && (
					<PracticeDescFull>{parse(sanitizedMarkup)}</PracticeDescFull>
				)}

				{currentPractice?.specialization_description_full && (
					<MoreButtonStyled
						onClick={handleClickMoreButton}
						type="button"
						aria-label="прочитати більше інформації"
					>
						{isShowMoreDesc
							? t('practiceSection.hideButton')
							: t('practiceSection.moreButton')}
					</MoreButtonStyled>
				)}
			</PracticeDescWrp>

			<ButtonConsultation
				modalActive={modalActive}
				setModalActive={setModalActive}
				customStyles={ButtonStyles}
			/>
		</PracticeInfo>
	);
};

PracticeBlock.propTypes = {
	currentPractice: PropTypes.object.isRequired,
};

export default PracticeBlock;