import * as yup from 'yup';
import { REGEX_EMAIL, REGEX_PHONE, REGEX_QUESTION } from '../../constants';

export const SchemaUa = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Ім’я повинно містити не менше 2 знаків')
    .max(30, 'Ім’я повинно містити не більше 30 знаків')
    .required('Введіть ім’я'),

  phone: yup
    .string()
    .matches(REGEX_PHONE, 'Невалідний формат')
    .required('Введіть номер телефону'),

  email: yup
    .string()
    .trim()
    .max(50, 'Email повинен містити не більше 50 знаків')
    .matches(REGEX_EMAIL, 'Введіть дійсний email')
    .required('Введіть email'),

  question: yup
    .string()
    .trim()
    .min(8, 'Повинно містити не менше 8 знаків')
    .max(300, 'Дозволено ввести 300 знаків')
    .matches(REGEX_QUESTION, 'Заборонені знаки')
    .required('Напишиіть запитання'),
});

export const SchemaEn = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Name must contain at least 2 characters')
    .max(30, 'The name must contain no more than 30 characters')
    .required('Enter a name'),

  phone: yup
    .string()
    .matches(REGEX_PHONE, 'Invalid format')
    .required('Enter a phone number'),

  email: yup
    .string()
    .trim()
    .max(50, 'Email must contain no more than 50 characters')
    .matches(REGEX_EMAIL, 'Enter a valid email')
    .required('Enter email'),

  question: yup
    .string()
    .trim()
    .min(8, 'Must contain at least 8 characters')
    .max(300, '300 characters allowed')
    .matches(REGEX_QUESTION, 'Forbidden characters')
    .required('Write a question'),
});
