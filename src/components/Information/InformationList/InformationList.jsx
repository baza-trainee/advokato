import PropTypes from 'prop-types';

import { InformationItem } from '../InformationItem';
import { UlStyled } from './InformationList.styled';

export const InformationList = ({ data }) => {
  console.log(data);
  return (
    <UlStyled>
      <li>sdfsdf</li>
      <li>sdfsdf</li>
    </UlStyled>
  );
};

InformationList.propTypes = {
  data: PropTypes.array.isRequired,
};
