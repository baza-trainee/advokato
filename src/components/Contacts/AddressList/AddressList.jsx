import PropTypes from 'prop-types';
import { UlStyled } from './AddressList.styled';

export const AddressList = ({ cities }) => {
  return (
    <UlStyled>
      {cities.map(({ id, address }) => (
        <li key={id}>
          <p>{address}</p>
        </li>
      ))}
    </UlStyled>
  );
};

AddressList.propTypes = {
  cities: PropTypes.array.isRequired,
};
