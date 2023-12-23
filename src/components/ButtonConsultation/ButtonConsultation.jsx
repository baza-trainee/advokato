import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { getContent } from '../../api';
import { ModalFromRoot } from '../ModalFromRoot';
import { Icon } from '../Icon';
import { Calendar } from './Calendar';
import { AppointmentForm } from './AppointmentForm';
import { ButtonStyled } from './ButtonConsultation.styled';

export const ButtonConsultation = ({ className, customStyles }) => {
  const [t, i18n] = useTranslation('global');
  const [modalActive, setModalActive] = useState(false);
  const [specialization, setSpecialization] = useState([]);
  const [lawyers, setLawyers] = useState([]);
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflowY = 'auto';
    }
  }, [modalActive]);

  useEffect(() => {
    const getData = async () => {
      // setIsLoading(prev => true);
      const data = await getContent('lawyer-specs');
      setSpecialization(prev => data);

      // setIsLoading(prev => false);
    };

    // getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      // setIsLoading(prev => true);
      const data = await getContent('lawyers'); //'lawyers?specialization_id=1'
      setLawyers(prev => data);

      // setIsLoading(prev => false);
    };

    // getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      // setIsLoading(prev => true);
      const data = await getContent('schedule?lawyer_id=1');
      setSchedule(prev => data);

      // setIsLoading(prev => false);
    };

    // getData();
  }, []);

  // console.log(specialization);
  // console.log(lawyers);
  // console.log(schedule);

  const toggleModal = () => {
    document.body.style.overflowY = 'hidden';
    setModalActive(prev => !prev);
  };
  return (
    <>
      {modalActive && (
        <ModalFromRoot toggleModal={toggleModal} align={'flex-start'}>
          {/* <Calendar setModalActive={setModalActive} /> */}
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
        <Icon id={'icon-header-arrow-right'} width={16} height={12} />
      </ButtonStyled>
    </>
  );
};

ButtonConsultation.propTypes = {
  className: PropTypes.string,
  customStyles: PropTypes.object,
};
