import { ListStyled } from './PracticeList.styled';

import { PracticeItem } from '../PracticeItem';

export const PracticeList = ({
  practiceArray,
  currentPractice,
  setCurrentPractice,
}) => {
  return (
    <ListStyled>
      {practiceArray.map((item, idx) => (
        <PracticeItem
          key={idx}
          item={item}
          idx={idx + 1}
          currentPractice={currentPractice}
          setCurrentPractice={setCurrentPractice}
        />
      ))}
    </ListStyled>
  );
};
