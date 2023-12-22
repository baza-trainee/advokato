import * as yup from 'yup';

export const SchemaUa = yup
  .object({
    firstName: yup
      .string('Має бути текстовим')
      .trim()
      .min(2, 'Коротке імʼя! Мінімум 2 символа')
      .max(15, 'Надто довге імʼя! Максимум 15 символів')
      .required('Обов`язкове поле'),

    lastName: yup
      .string('Має бути текстовим')
      .trim()
      .min(2, 'Коротке прізвищє! Мінімум 2 символа')
      .max(15, 'Надто довге прізвищє! Максимум 15 символів')
      .required('Обов`язкове поле'),

    phone: yup.string('Має бути текстовим'),

    email: yup
      .string('Має бути текстовим')
      .trim()
      .min(6, 'Коротка адреса! Мінімум 6 символів')
      .max(50, 'Надто довга адреса! Максимум 50 символів')
      //   .matches(
      //     REGEX_EMAIL_FIRST_PART,
      //     'Мають бути тільки англійські літери і @ також можна цифри _-.'
      //   )
      //   .matches(
      //     REGEX_EMAIL_SECOND_PART,
      //     'домен складається з англійських літер, цифр та - .'
      //   )
      .required('Обов`язкове поле'),
  })
  .required();

export const SchemaEn = yup
  .object({
    firstName: yup
      .string('Must be text')
      .trim()
      .min(2, 'Short name! Minimum 2 characters')
      .max(15, 'Name too long! Maximum 15 characters')
      .required('Required field'),

    lastName: yup
      .string('Must be text')
      .trim()
      .min(2, 'Short name! Minimum 2 characters')
      .max(15, 'Name too long! Maximum 15 characters')
      .required('Required field'),

    phone: yup.string('Must be text'),

    email: yup
      .string('Must be text')
      .trim()
      .min(6, 'Short address! Minimum 6 characters')
      .max(50, 'Address too long! Maximum 50 characters')
      //   .matches(
      //     REGEX_EMAIL_FIRST_PART,
      //     'There should be only English letters and @, numbers _-.'
      //   )
      //   .matches(
      //     REGEX_EMAIL_SECOND_PART,
      //     'domain consists of English letters, numbers and - .'
      //   )
      .required('Required field'),
  })
  .required();
