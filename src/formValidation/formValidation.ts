import { z, ZodType } from 'zod';
import validator from 'validator';
import { IForm, ISignInForm, ISignUpForm } from '@/interfaces/interfaces';

const formValidationSchema:ZodType<IForm> = z.object({
  name: z.string().min(1, 'Це обов\'язкове поле'),
  phone: z.string().min(1, 'Це обов\'язкове поле').refine((value) => validator.isMobilePhone(value, 'uk-UA'), 'Введіть номер телефону'),
  numberOfVisitors: z.number({
    invalid_type_error: 'Введіть кількість гравців',
  }).min(1, 'Це обов\'язкове поле').max(10, 'Максимальна кількість гравців - 10'),
  privateDataAgreement: z.boolean().refine((value) => value, 'Це обов\'язкове поле'),
});

export const signUpValidationSchema:ZodType<ISignUpForm> = z.object({
  email: z.string().email('Введіть email'),
  password: z.string().min(1, 'Це обов\'язкове поле'),
  confirmPassword: z.string().min(1, 'Це обов\'язкове поле'),
}).refine((values) => values.password === values.confirmPassword, { message: 'Паролі повинні співпадати', path: ['confirmPassword'] });

export const signInValidationSchema:ZodType<ISignInForm> = z.object({
  email: z.string().email('Введіть email'),
  password: z.string().min(1, 'Це обов\'язкове поле'),
});

export default formValidationSchema;
