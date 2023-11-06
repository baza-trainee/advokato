import { LiStyled } from './PracticeItem.styled';
import { Icon } from '../../Icon';

export const PracticeItem = ({
  item,
  idx,
  currentPractice,
  setCurrentPractice,
}) => {
  return (
    <LiStyled
      onClick={() => setCurrentPractice(item)}
      className={item.id === currentPractice.id ? 'active' : null}
    >
      <p>
        <span>{idx < 10 ? `0${idx}` : idx}</span>

        {item?.title}
      </p>

      <Icon
        id={
          item.id === currentPractice.id ? 'icon-arrow-down' : 'icon-arrow-up'
        }
        width={13}
        height={13}
      />
    </LiStyled>
  );
};
