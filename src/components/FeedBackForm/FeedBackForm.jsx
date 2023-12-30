import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import { SchemaUa } from './validationSchema';
import { Input } from './Input';
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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty, touchedFields },
  } = useForm({
    mode: 'onChange',
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(i18n.language === 'en' ? SchemaUa : SchemaUa), //додати схему англ мовою
  });

  const onSubmit = data => {
    // reset();
    console.log(data);
  };

  return (
    <section>
      <Container>
        <TitleStyled>Зв’яжіться з нами acstatus.mk@gmail.com</TitleStyled>

        <StyledForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
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
  );
};
