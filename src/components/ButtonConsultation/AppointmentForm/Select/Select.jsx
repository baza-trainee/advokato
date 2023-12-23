import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../../Icon';
import { LabelStyled, ButtonStyled, OptionsItem } from './Select.styled';

export const Select = ({ label, defaultValue, onChangeSelect, options }) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   if (!isOpenList) {
  //     return;
  //   }

  //   const timerId = setTimeout(() => {
  //     setIsOpenList(prev => false);
  //     clearTimeout(timerId);
  //   }, 3000);
  // }, [isOpenList]);

  const handleClickOption = ({ target }) => {
    const value = target.getAttribute('id');

    setIsOpenList(prev => false);
    onChangeSelect(value);
    setValue(prev => value);
  };

  return (
    <LabelStyled>
      {label && <p>{label}</p>}

      <ButtonStyled
        onClick={() => setIsOpenList(prev => !prev)}
        type="button"
        aria-label="select button"
      >
        {value == '' ? (
          <>
            {defaultValue}
            <Icon
              id={isOpenList ? 'select-arrow-up' : 'select-arrow-down'}
              width={24}
              height={24}
            />
          </>
        ) : (
          value
        )}
      </ButtonStyled>

      {isOpenList && (
        <ul onClick={handleClickOption}>
          <OptionsItem
            id="Sara Jesika"
            className={value === 'Sara Jesika' ? 'isChecked' : null}
          >
            Sara Jesika
          </OptionsItem>

          <OptionsItem
            id="Marry Stoliar"
            className={value === 'Marry Stoliar' ? 'isChecked' : null}
          >
            Marry Stoliar
          </OptionsItem>
        </ul>
      )}
    </LabelStyled>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  onChangeSelect: PropTypes.func.isRequired,
  options: PropTypes.string.isRequired,
};
