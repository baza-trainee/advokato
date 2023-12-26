import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { ModalFromRoot } from '../ModalFromRoot';
import { AppointmentForm } from './AppointmentForm';
import { ButtonStyled } from './ButtonConsultation.styled';

export const ButtonConsultation = ({ className, customStyles }) => {
  const [t, i18n] = useTranslation('global');
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflowY = 'auto';
    }
  }, [modalActive]);

  const toggleModal = () => {
    document.body.style.overflowY = 'hidden';
    setModalActive(prev => !prev);
  };

  return (
    <>
      {modalActive && (
        <ModalFromRoot toggleModal={toggleModal} align={'flex-start'}>
          <AppointmentForm setModalActive={setModalActive} />
        </ModalFromRoot>
      )}

      <ButtonStyled
        aria-label="Записатися на консультацію"
        type="button"
        onClick={() => setModalActive(prev => !prev)}
        className={className}
        style={customStyles}
      >
        {t('header.btnAppoitment')}
      </ButtonStyled>
    </>
  );
};

ButtonConsultation.propTypes = {
  className: PropTypes.string,
  customStyles: PropTypes.object,
};
