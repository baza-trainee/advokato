import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import PropTypes from 'prop-types';

import { getContent } from '../../../api';
import { SchemaEn, SchemaUa } from './validationSchema';
import { Input } from './Input';
import { Checkbox } from './Checkbox';
import { Select } from './Select';
import { ModalFromRoot } from '../../ModalFromRoot';
import { PdfViewer } from '../../PdfViewer';
import {
  FormWrp,
  FormStyled,
  ButtonWrp,
  ButtonSubmit,
  ButtonCancel,
} from './AppointmentForm.styled';
import pdfFile from '../../../assets/documents/test_privacy_policy.pdf';

const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  isAccept: false,
  specialization_id: 0,
  lawyer_id: 0,
};

export const AppointmentForm = ({ setModalActive }) => {
  const [t, i18n] = useTranslation('global');

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isValid, touchedFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(i18n.language === 'en' ? SchemaEn : SchemaUa),
  });

  const [isChecked, setIsChecked] = useState(getValues('isAccept'));
  const [isOpenDoc, setIsOpenDoc] = useState(false);
  const [specialization, setSpecialization] = useState([]);
  const [currentSpec, setCurrentSpec] = useState('');
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataSpec = await getContent('lawyer-specs');

      if (dataSpec) {
        setSpecialization(prev => [
          ...dataSpec,
          {
            id: dataSpec.length + 1,
            specialization_name: 'Інше',
          },
        ]);
      }

      const dataLaw = await getContent('lawyers');
      if (dataLaw) {
        setLawyers(prev => dataLaw);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      const dataLaw = await getContent(
        `lawyers?specialization_id=${currentSpec}`
      );
      if (dataLaw) {
        setLawyers(prev => dataLaw);
      }
    };

    getData();
  }, [currentSpec]);

  const toggleModal = () => {
    setIsOpenDoc(prev => !prev);
  };

  const onChangeSelectSpec = id => {
    console.log('id = ', id);
    setCurrentSpec(prev => id);

    setValue('specialization_id', id, {
      shouldValidate: true,
    });
  };

  const onChangeSelectLaw = id => {
    console.log('id = ', id);

    setValue('lawyer_id', id, {
      shouldValidate: true,
    });
  };

  const onSubmit = async formData => {
    // Loading.dots();
    console.log('formData ', formData);
  };

  const onErrors = data => {
    console.log('form onErrors', data);
    // Notify.failure(t('orderPayment.form.requiredError'));
  };

  return (
    <>
      {isOpenDoc && (
        <ModalFromRoot
          toggleModal={toggleModal}
          root="root-docs"
          overlayId=""
          padding="20px"
          align="flex-start"
        >
          <PdfViewer pdfFile={pdfFile} />
        </ModalFromRoot>
      )}

      <FormWrp>
        <h2>{t('appointmentForm.firstTitle')}</h2>

        <FormStyled
          onSubmit={handleSubmit(onSubmit, onErrors)}
          autoComplete="off"
        >
          <Input
            register={register}
            name="firstName"
            type="text"
            label={t('appointmentForm.inputFirstName')}
            placeholder={t('appointmentForm.inputFirstName')}
            errors={errors}
            isValid={isValid}
            touchedFields={touchedFields}
          />

          <Input
            register={register}
            name="lastName"
            type="text"
            label={t('appointmentForm.inputLastName')}
            placeholder={t('appointmentForm.inputLastName')}
            errors={errors}
            isValid={isValid}
            touchedFields={touchedFields}
          />

          <Input
            register={register}
            name="phone"
            type="text"
            label={t('appointmentForm.inputPhone')}
            placeholder={'+3 80 ХХ ХХХ ХХ ХХ'}
            errors={errors}
            isValid={isValid}
            touchedFields={touchedFields}
          />

          <Input
            register={register}
            name="email"
            type="text"
            label={t('appointmentForm.inputEmail')}
            placeholder={'xxx@xxx'}
            errors={errors}
            isValid={isValid}
            touchedFields={touchedFields}
          />

          <Checkbox
            register={register}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            toggleModal={toggleModal}
            errors={errors}
          />

          <Select
            onChangeSelect={onChangeSelectSpec}
            label={t('appointmentForm.specializationSelectTitle')}
            defaultValue={t('appointmentForm.specializationSelectDefault')}
            options={specialization}
          />

          <Select
            onChangeSelect={onChangeSelectLaw}
            label={t('appointmentForm.lawyerSelectTitle')}
            defaultValue={t('appointmentForm.lawyerSelectDefault')}
            options={lawyers}
          />

          <ButtonWrp>
            {/* <ButtonSubmit type="submit" aria-label="submit button">
              {t('appointmentForm.submitButton')}
            </ButtonSubmit> */}
            <ButtonSubmit type="submit" aria-label="next step button">
              {t('appointmentForm.nextButton')}
            </ButtonSubmit>

            <ButtonCancel
              onClick={() => setModalActive(false)}
              type="button"
              aria-label="cancel button"
            >
              {t('appointmentForm.cancelButton')}
            </ButtonCancel>
          </ButtonWrp>
        </FormStyled>
      </FormWrp>
    </>
  );
};

AppointmentForm.propTypes = {
  setModalActive: PropTypes.func.isRequired,
};