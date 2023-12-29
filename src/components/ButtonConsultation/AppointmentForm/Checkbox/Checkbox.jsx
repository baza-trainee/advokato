import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { isObjectEmpty } from '../../../../helpers';
import {
  CheckBoxWrp,
  CheckBoxStyled,
  DocLinkStyled,
  ErrorText,
} from './Checkbox.styled';

export const Checkbox = ({
  register,
  setIsChecked,
  isChecked,
  toggleModal,
  errors,
}) => {
  const [t, i18n] = useTranslation('global');

  const handleClickCheckbox = () => {
    toggleModal();
  };

  return (
    <CheckBoxWrp>
      <CheckBoxStyled
        {...register('isAccept', {
          onChange: () => setIsChecked(prev => !prev),
        })}
        className={isChecked ? 'checked' : ''}
        type="checkbox"
      />

<<<<<<< HEAD
      <DocLinkStyled>
        {t('appointmentForm.privacyTitle')} <br />
=======
      <DocLinkStyled lang={i18n.language === 'en'}>
        {t('appointmentForm.privacyTitle')}
>>>>>>> dev
        <span onClick={handleClickCheckbox}>
          {t('appointmentForm.privacyButton')}
        </span>
      </DocLinkStyled>

      {!isObjectEmpty(errors) && (
        <ErrorText>{errors.isAccept?.message}</ErrorText>
      )}
    </CheckBoxWrp>
  );
};

Checkbox.propTypes = {
  register: PropTypes.func.isRequired,
  setIsChecked: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
