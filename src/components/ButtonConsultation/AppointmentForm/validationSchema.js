import * as yup from 'yup';
import { REGEX_EMAIL, REGEX_PHONE, REGEX_NAME } from '../../../constants';

export const SchemaUa = yup
  .object({
    firstName: yup
      .string('Має бути текстовим')
      .trim()
      .max(30, 'Надто довге імʼя! Максимум 30 символів')
      .matches(REGEX_NAME, 'Не менше 2 символи'),

    lastName: yup
      .string('Має бути текстовим')
      .trim()
      .max(30, 'Надто довге прізвищє! Максимум 30 символів')
      .matches(REGEX_NAME, 'Не менше 2 символи'),

    phone: yup
      .string('Має бути текстовим')
      .matches(REGEX_PHONE, 'Невалідний формат')
      .required('Обов`язкове поле'),

    email: yup
      .string('Має бути текстовим')
      .trim()
      .max(50, 'Надто довга адреса! Максимум 50 символів')
      .matches(REGEX_EMAIL, 'Введіть дійсний формат'),

    isAccept: yup
      .bool()
      .oneOf([true], 'Має бути погоджено')
      .required('Обов`язкове поле'),

    specialization_id: yup.number(),

    lawyer_id: yup.number(),
  })
  .required();

export const SchemaEn = yup
  .object({
    firstName: yup
      .string('Must be text')
      .trim()
      .max(30, 'Name too long! Maximum 30 characters')
      .matches(REGEX_NAME, 'At least 2 characters'),

    lastName: yup
      .string('Must be text')
      .trim()
      .max(30, 'Name too long! Maximum 30 characters')
      .matches(REGEX_NAME, 'At least 2 characters'),

    phone: yup
      .string('Must be text')
      .matches(REGEX_PHONE, 'Invalid format')
      .required('Обов`язкове поле'),

    email: yup
      .string('Must be text')
      .trim()
      .min(6, 'Short address! Minimum 6 characters')
      .max(50, 'Address too long! Maximum 50 characters')
      .matches(REGEX_EMAIL, 'Please enter a valid format'),

    isAccept: yup
      .bool()
      .oneOf([true], 'Must be agreed')
      .required('Required field'),

    specialization_id: yup.number(),

    lawyer_id: yup.number(),
  })
  .required();
