import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Modal } from '../Modal';
import { Icon } from '../Icon';
import { Calendar } from './Calendar';
import { ButtonStyled } from './ButtonConsultation.styled';

export const ButtonConsultation = ({ className, customStyles }) => {
  const [t, i18n] = useTranslation('global');
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflowY = 'auto';
    }
  }, [modalActive]);

  return (
    <>
      {modalActive && (
        <Modal active={modalActive} setActive={setModalActive}>
          <Calendar />
        </Modal>
      )}

      <ButtonStyled
        aria-label="Записатися на консультацію"
        type="button"
        onClick={() => setModalActive(prev => !prev)}
        className={className}
        style={customStyles}
      >
        {t('header.btnAppoitment')}
        <Icon id={'icon-header-arrow-right'} width={16} height={12} />
      </ButtonStyled>
    </>
  );
};

ButtonConsultation.propTypes = {
  className: PropTypes.string,
  customStyles: PropTypes.object,
};
