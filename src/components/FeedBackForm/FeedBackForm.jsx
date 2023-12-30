// import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { SchemaUa } from './validationSchema';
import {
  Container,
  EmailStyled,
  ButtonStyled,
//   Email,
  ErrorsStyled,
  Input,
  InputWrapper,
  LabelWrapper,
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(i18n.language === 'en' ? SchemaUa : SchemaUa), //додати схему англ мовою
  });

  const onSubmit = data => {
    // const trimmedData = {
    //   name: data.name.trim(),
    //   phone: data.phone,
    //   question: data.question.trim(),
    // };

    // alert(JSON.stringify(data));
    // reset();
    console.log(data);
  };

  return (
    <section>
      <Container>
        <TitleStyled>Зв&apos;яжіться з нами</TitleStyled>
        <EmailStyled>acstatus.mk@gmail.com</EmailStyled>

        <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
          <InputWrapper>
            <LabelWrapper>
              <label htmlFor="name">Ваше ім’я</label>
              <Input
                {...register('name')}
                type="text"
                id="name"
                placeholder="Введіть ім’я"
                autoFocus
              />
              <ErrorsStyled>{errors.name?.message}</ErrorsStyled>
            </LabelWrapper>

            <LabelWrapper>
              <label htmlFor="tel">Ваш номер телефону</label>
              <Input
                {...register('phone')}
                type="tel"
                id="tel"
                placeholder="+3 80 ХХ ХХХ ХХ ХХ"
              />
              <ErrorsStyled>{errors.phone?.message}</ErrorsStyled>
            </LabelWrapper>

            <LabelWrapper>
              <label htmlFor="email">Ваша електронна пошта</label>
              <Input
                {...register('email')}
                type="text"
                id="email"
                placeholder="xxx@xxx"
              />
              <ErrorsStyled>{errors.email?.message}</ErrorsStyled>
            </LabelWrapper>
          </InputWrapper>

          <LabelWrapper>
            <label htmlFor="question">Ваше питання</label>
            <Input
              {...register('question')}
              type="text"
              id="question"
              placeholder="Введіть питання"
            />
            <ErrorsStyled>{errors.question?.message}</ErrorsStyled>
          </LabelWrapper>

          <ButtonStyled
            type="submit"
            // disabled={!isValid || !isDirty}
            aria-label="Відправити данні форми"
          >
            Відправити
          </ButtonStyled>
        </form>
      </Container>
    </section>
  );
};
