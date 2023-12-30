import * as yup from 'yup';
import { REGEX_EMAIL, REGEX_PHONE } from '../../constants';

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
    .required('Напишиіть запитання'),
});
