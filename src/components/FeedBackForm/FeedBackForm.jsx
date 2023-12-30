import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useEffect, useState } from 'react';

import { postContent } from '../../api';
import { SchemaUa, SchemaEn } from './validationSchema';
import { Input } from './Input';
import { ModalFromRoot } from '../ModalFromRoot';
import { SuccessPage } from './SuccessPage';
import { FailurePage } from './FailurePage';
import {
  Container,
  StyledForm,
  ButtonStyled,
  TitleStyled,
} from './FeedBackForm.styled';

const DEFAULT_VALUES = {
  name: '',
  phone: '+380',
  email: '',
  question: '',
};

export const FeedBackForm = () => {
  const [t, i18n] = useTranslation('global');
  const [modalActive, setModalActive] = useState(false);
  const [sendStatus, setSendStatus] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, touchedFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(i18n.language === 'en' ? SchemaEn : SchemaUa),
  });

  useEffect(() => {
    if (!modalActive) {
      document.body.style.overflowY = 'auto';
    }
  }, [modalActive]);

  const toggleModal = () => {
    document.body.style.overflowY = 'hidden';
    setModalActive(prev => !prev);
  };

  const onSubmit = async formData => {
    Loading.dots();

    const data = {
      email: formData?.email || null,
      message: formData?.question,
      name: formData?.name || null,
      phone_number: formData?.phone || null,
    };

    const result = await postContent('feedback', data);

    if (result?.success) {
      Loading.remove();
      reset();
      setSendStatus(prev => true);
      setModalActive(prev => !prev);
      return;
    }

    Loading.remove();
    setSendStatus(prev => false);
    setModalActive(prev => !prev);
  };

  const onErrors = data => {
    console.log('form onErrors', data);
  };

  return (
    <>
      {modalActive && (
        <ModalFromRoot toggleModal={toggleModal}>
          {sendStatus ? <SuccessPage /> : <FailurePage />}
        </ModalFromRoot>
      )}

      <section>
        <Container>
          <TitleStyled>Зв’яжіться з нами acstatus.mk@gmail.com</TitleStyled>

          <StyledForm
            autoComplete="off"
            onSubmit={handleSubmit(onSubmit, onErrors)}
          >
            <div>
              <Input
                register={register}
                name="name"
                type="text"
                label={'Ваше ім’я'}
                placeholder={'Введіть ім’я'}
                errors={errors}
                isValid={isValid}
                touchedFields={touchedFields}
              />

              <Input
                register={register}
                name="phone"
                type="text"
                label={'Ваш номер телефону'}
                placeholder={'+3 80 ХХ ХХХ ХХ ХХ'}
                errors={errors}
                isValid={isValid}
                touchedFields={touchedFields}
              />

              <Input
                register={register}
                name="email"
                type="text"
                label={'Ваша електронна пошта'}
                placeholder={'xxx@xxx'}
                errors={errors}
                isValid={isValid}
                touchedFields={touchedFields}
              />
            </div>

            <Input
              register={register}
              name="question"
              type="text"
              label={'Ваше питання'}
              placeholder={'Введіть питання'}
              errors={errors}
              isValid={isValid}
              touchedFields={touchedFields}
              width={'1024px'}
            />

            <ButtonStyled
              type="submit"
              disabled={!isValid || !isDirty}
              aria-label="Відправити данні форми"
            >
              Відправити
            </ButtonStyled>
          </StyledForm>
        </Container>
      </section>
    </>
  );
};
