'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Title from '@/components/common/Title';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import Loading from '@/app/[locale]/loading';
import { ISignUpForm } from '@/interfaces/interfaces';
import { signUpUser } from '@/http';
import { signUpValidationSchema } from '@/formValidation/formValidation';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

const SignUpForm = () => {
  const [error, setError] = useState('');
  const { t } = useTranslation('auth');
  const { t: tError } = useTranslation('errors');
  const {
    register, handleSubmit, formState: {
      errors, isSubmitting, isValid,
    },
  } = useForm<ISignUpForm>({
    mode: 'onBlur',
    resolver: zodResolver(signUpValidationSchema(tError)),
  });
  const router = useRouter();
  const onFormSubmit = async (formData: ISignUpForm) => {
    const user = {
      email: formData.email,
      password: formData.password,
    };
    try {
      await signUpUser(user);
      router.push('/');
    } catch (e) {
      setError((e as Error).message);
    }
  };
  if (error) throw new Error(error);
  return (
    <form className='w-full max-w-[480px] bg-black px-8 pt-8 pb-12 text-center' onSubmit={handleSubmit(onFormSubmit)}>
      <Title level={3} className='text-3xl leading-none font-bold text-white mb-14'>{t('sign_up')}</Title>
      <fieldset>
        <TextInput id='email' label={t('email')} placeholder={t('email')} register={register} error={errors.email?.message} />
        <TextInput id='password' type='password' label={t('password')} placeholder={t('password')} register={register} error={errors.password?.message} />
        <TextInput id='confirmPassword' type='password' label={t('confirm_password')} placeholder={t('confirm_password')} register={register} error={errors.confirmPassword?.message} />
      </fieldset>
      {isSubmitting
        ? <Loading />
        : (
          <Button type='submit' disabled={!isValid} className={clsx({ 'bg-orange': isValid, 'bg-grey': !isValid }, 'text-l uppercase text-white font-medium text-center tracking-[2px] px-8 py-5 min-w-[250px] rounded-full inline-block')}>
            {t('sign_up')}
          </Button>
        )}
    </form>
  );
};

export default SignUpForm;
