import { useTranslation } from 'react-i18next';

import { Icon } from '../../../Icon';
import { DivStyled } from './SuccessPage.styled';

export const SuccessPage = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <DivStyled>
      <h2>{t('appointmentForm.successTitle')}</h2>

      <p>{t('appointmentForm.successTextOne')}</p>
      <p>{t('appointmentForm.successTextTwo')}</p>

      <Icon id="success" height={100} width={100} />
    </DivStyled>
  );
};
