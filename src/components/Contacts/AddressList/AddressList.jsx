import PropTypes from 'prop-types';
import { UlStyled } from './AddressList.styled';

export const AddressList = ({ cities }) => {
  return (
    <UlStyled>
      {cities.map(({ id, address, city_name }) => (
        <li key={id}>
          <p>{`${address}, ${city_name}`}</p>
        </li>
      ))}
    </UlStyled>
  );
};

AddressList.propTypes = {
  cities: PropTypes.array.isRequired,
};
