import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Modal } from '../Modal';
import { Icon } from '../Icon';
import { ButtonStyled } from './ButtonConsultation.styled';

export const ButtonConsultation = ({ className }) => {
  const [t, i18n] = useTranslation('global');
  // const [modalActive, setModalActive] = useState(false);

  // useEffect(() => {
  //   if (!modalActive) {
  //     document.body.style.overflowY = 'auto';
  //   }
  // }, [modalActive]);

  return (
    <>
      {/* {modalActive && (
          <Modal active={modalActive} setActive={setModalActive}>
            {currentPractice.extraInfo !== '' ? (
              <ExtraInfoWrpStyled>
                {parseToParagraphs(currentPractice.extraInfo)}
              </ExtraInfoWrpStyled>
            ) : (
              <p>no text</p>
            )}
          </Modal>
        )} */}

      <ButtonStyled
        aria-label="Записатися на консультацію"
        type="button"
        onClick={() => alert('HelloWorld')}
        className={className}
      >
        {t('header.btnAppoitment')}
        <Icon id={'icon-header-arrow-right'} width={16} height={12} />
      </ButtonStyled>
    </>
  );
};

ButtonConsultation.propTypes = {
  className: PropTypes.string,
};
