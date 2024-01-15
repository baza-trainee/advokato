import PropTypes from 'prop-types';
import { LiStyled, SpecializationStyled } from './PracticeItem.styled';

export const PracticeItem = ({ item, currentPractice, setCurrentPractice }) => {
  return (
    <LiStyled
      onClick={() => setCurrentPractice(item)}
      onMouseOver={() => setCurrentPractice(item)}
      className={item.id === currentPractice.id ? 'active' : null}
    >
      <SpecializationStyled>{item?.specialization_name}</SpecializationStyled>

    </LiStyled>
  );
};

PracticeItem.propTypes = {
  item: PropTypes.object.isRequired,
  currentPractice: PropTypes.object.isRequired,
  setCurrentPractice: PropTypes.func.isRequired,
};
