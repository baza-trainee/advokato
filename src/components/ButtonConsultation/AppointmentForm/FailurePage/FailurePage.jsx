import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { DivStyled } from './FailurePage.styled';

export const FailurePage = ({ OnClickFunction }) => {
  const [t, i18n] = useTranslation('global');

  return (
    <DivStyled>
      <h2>{t('appointmentForm.failureTitle')}</h2>

      <p>{t('appointmentForm.failureTextOne')}</p>
      <p>{t('appointmentForm.failureTextTwo')}</p>

      <button onClick={() => OnClickFunction(prev => 3)} type="button">
        {t('appointmentForm.returnButton')}
      </button>
    </DivStyled>
  );
};

FailurePage.propTypes = {
  OnClickFunction: PropTypes.func.isRequired,
};

// після фідбек маршруту повертається на календар а людина не обирала спеціальність
