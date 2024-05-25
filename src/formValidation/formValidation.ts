import { z, ZodType } from 'zod';
import validator from 'validator';
import { IForm, ISignInForm, ISignUpForm } from '@/interfaces/interfaces';
import type { TFunction } from 'i18next';

const formValidationSchema = (t: TFunction):ZodType<IForm> => (z.object({
  name: z.string().min(1, t('error_required')),
  phone: z.string().min(1, t('error_required')).refine((value) => validator.isMobilePhone(value, 'uk-UA'), t('error_phone')),
  numberOfVisitors: z.number({
    invalid_type_error: t('error_number_of_players'),
  }).min(1, t('error_required')).max(10, t('error_max_players')),
  privateDataAgreement: z.boolean().refine((value) => value, t('error_required')),
}));

export const signUpValidationSchema = (t: TFunction):ZodType<ISignUpForm> => {
  return (z.object({
    email: z.string().email(t('error_email')),
    password: z.string().min(1, t('error_required')),
    confirmPassword: z.string().min(1, t('error_required')),
  }).refine((values) => values.password === values.confirmPassword, { message: t('error_confirm_password'), path: ['confirmPassword'] }));
};

export const signInValidationSchema = (t: TFunction):ZodType<ISignInForm> => (z.object({
  email: z.string().email(t('error_email')),
  password: z.string().min(1, t('error_required')),
}));

export default formValidationSchema;
