import PropTypes from 'prop-types';

import { PracticeItem } from '../PracticeItem';
import { ListStyled } from './PracticeList.styled';

export const PracticeList = ({
  practices,
  currentPractice,
  setCurrentPractice,
}) => {
  return (
    <ListStyled>
      {practices.map((item, idx) => (
        <PracticeItem
          key={idx}
          item={item}
          currentPractice={currentPractice}
          setCurrentPractice={setCurrentPractice}
        />
      ))}
    </ListStyled>
  );
};

PracticeList.propTypes = {
  practices: PropTypes.array.isRequired,
  currentPractice: PropTypes.object.isRequired,
  setCurrentPractice: PropTypes.func.isRequired,
};
