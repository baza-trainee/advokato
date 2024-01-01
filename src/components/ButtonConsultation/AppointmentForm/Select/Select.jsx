import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../../../Icon';
import { LabelStyled, ButtonStyled, OptionsItem } from './Select.styled';

export const Select = ({ label, defaultValue, onChangeSelect, options }) => {
  const [isOpenList, setIsOpenList] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(prev => '');
  }, [options]);

  useEffect(() => {
    if (!isOpenList) {
      return;
    }

    const timerId = setTimeout(() => {
      setIsOpenList(prev => false);
      clearTimeout(timerId);
    }, 5000);
  }, [isOpenList]);

  const handleClickOption = ({ target }) => {
    const elementId = target.getAttribute('id');

    const { name, specialization_name } = options.find(
      item => item.id == elementId
    );
    setValue(prev => name || specialization_name);
    onChangeSelect(elementId);
  };

  return (
    <LabelStyled>
      {label && <p>{label}</p>}

      <ButtonStyled
        onClick={() => setIsOpenList(prev => !prev)}
        type="button"
        aria-label="вибрати зі списку"
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
          {options.map(({ id, specialization_name, name }) => (
            <OptionsItem
              key={id}
              id={id}
              className={
                value === specialization_name || value === name
                  ? 'isChecked'
                  : null
              }
            >
              {specialization_name || name}
            </OptionsItem>
          ))}
        </ul>
      )}
    </LabelStyled>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChangeSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
