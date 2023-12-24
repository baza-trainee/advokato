import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { DivStyled } from './FailurePage.styled';

export const FailurePage = ({ OnClickFunction, lawyer }) => {
  const [t, i18n] = useTranslation('global');

  return (
    <DivStyled>
      <h2>{t('appointmentForm.failureTitle')}</h2>

      <p>{t('appointmentForm.failureTextOne')}</p>

      {lawyer > 0 && <p>{t('appointmentForm.failureTextTwo')}</p>}

      <button
        onClick={() => OnClickFunction(prev => (lawyer > 0 ? 3 : 2))}
        type="button"
      >
        {t('appointmentForm.returnButton')}
      </button>
    </DivStyled>
  );
};

FailurePage.propTypes = {
  OnClickFunction: PropTypes.func.isRequired,
  lawyer: PropTypes.number.isRequired,
};

// після фідбек маршруту повертається на календар а людина не обирала спеціальність
