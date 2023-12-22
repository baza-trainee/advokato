import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

import { SchemaEn, SchemaUa } from './validationSchema';
import { Input } from './Input';
import { FormStyled, ButtonSubmit } from './AppointmentForm.styled';

const DEFAULT_VALUES = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};

export const AppointmentForm = () => {
  const [t, i18n] = useTranslation('global');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(i18n.language === 'en' ? SchemaEn : SchemaUa),
  });

  const onSubmit = async formData => {
    // Loading.dots();
    console.log('formData ', formData);
  };

  const onErrors = data => {
    console.log('form onErrors', data);
    Notify.failure(t('orderPayment.form.requiredError'));
  };

  return (
    <>
      <FormStyled
        onSubmit={handleSubmit(onSubmit, onErrors)}
        autoComplete="off"
      >
        <Input
          register={register}
          name="firstName"
          type="text"
          placeholder={t('authForm.firstName')}
          errors={errors}
        />

        <Input
          register={register}
          name="lastName"
          type="text"
          placeholder={t('authForm.firstName')}
          errors={errors}
        />

        <Input
          register={register}
          name="phone"
          type="text"
          placeholder={t('authForm.firstName')}
          errors={errors}
        />

        <Input
          register={register}
          name="email"
          type="text"
          placeholder={t('authForm.firstName')}
          errors={errors}
        />

        <ButtonSubmit type="submit" aria-label="submit button">
          {t('authForm.signUpButton')}
        </ButtonSubmit>
      </FormStyled>
    </>
  );
};
