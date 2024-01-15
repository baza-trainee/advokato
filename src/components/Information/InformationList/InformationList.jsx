import PropTypes from 'prop-types';

import { InformationItem } from '../InformationItem';
import { UlStyled } from './InformationList.styled';

export const InformationList = ({ data }) => {

	return (
    <UlStyled>
      {data.map((item, idx) => (
        <InformationItem key={idx} item={item} />
      ))}
    </UlStyled>
  );
};

InformationList.propTypes = {
  data: PropTypes.array.isRequired,
};
