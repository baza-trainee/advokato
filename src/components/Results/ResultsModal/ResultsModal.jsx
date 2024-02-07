import PropTypes from 'prop-types';
import parse from 'html-react-parser'

import {
  MainModalResult,
  TitleModal,
  ImageBox,
  ImageModal,
  TextModal,
  CtaBox,
} from './ResultsModal.styled.js';

export const ResultsModal = ({ data }) => {

	const htmlString = data.description;
  return (
    <div>
      {data && (
        <MainModalResult key={data.id}>
          <TitleModal>{data.name}</TitleModal>
          <ImageBox>
            <ImageModal src={data.photo_path} />
          </ImageBox>

					<TextModal>
						<div>{parse(htmlString)}</div>
					</TextModal>
					<CtaBox>
					<p className="text">{data.specialization_name}</p>
            <p className="date">{data.created_at}</p>
          </CtaBox>
        </MainModalResult>
      )}
    </div>
  );
};

ResultsModal.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo_path: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    specialization_name: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }),
};
