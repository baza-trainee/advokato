import PropTypes from 'prop-types';

import { isObjectEmpty } from '../../../helpers';
import { LabelStyled, InputStyled, ErrorText } from './Input.styled';

export const Input = ({
  label,
  register,
  name,
  type,
  placeholder,
  errors,
  options = {},
  children,
  isValid,
  touchedFields,
  width,
}) => {
  return (
    <LabelStyled width={width}>
      {label && <p>{label}</p>}

      <InputStyled
        {...register(name, options)}
        type={type}
        placeholder={placeholder}
        role="presentation"
        autocomplete="off"
        isValid={isValid}
        error={errors[name]?.message}
        touch={touchedFields[name]}
      />

      {!isObjectEmpty(errors) && <ErrorText>{errors[name]?.message}</ErrorText>}
      {children}
    </LabelStyled>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  register: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  touchedFields: PropTypes.object.isRequired,
  options: PropTypes.object,
  children: PropTypes.node,
  isValid: PropTypes.bool,
  width: PropTypes.string,
};
