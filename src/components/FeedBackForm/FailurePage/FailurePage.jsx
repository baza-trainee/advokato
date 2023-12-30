import { useTranslation } from 'react-i18next';

import { Icon } from '../../Icon';
import { DivStyled } from './FailurePage.styled';

export const FailurePage = () => {
  const [t, i18n] = useTranslation('global');

  return (
    <DivStyled>
      <h2>{t('appointmentForm.failureTitle')}</h2>

      <p>{t('appointmentForm.failureTextOne')}</p>
      <p>{t('appointmentForm.failureTextTwoFeedBack')}</p>

      <Icon id="failure" height={60} width={60} />
    </DivStyled>
  );
};
