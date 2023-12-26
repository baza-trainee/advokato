import PropTypes from 'prop-types';
import { UlStyled, ListItem } from './AddressList.styled';

export const AddressList = ({ cities }) => {
  return (
    <UlStyled>
      {cities.map(({ id, address }) => (
        <ListItem key={id} position={id}>
          <p>{address}</p>
        </ListItem>
      ))}
    </UlStyled>
  );
};

AddressList.propTypes = {
  cities: PropTypes.array.isRequired,
};
