'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Title from '@/components/common/Title';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import Loading from '@/app/[locale]/loading';
import { ISignInForm } from '@/interfaces/interfaces';
import { signInValidationSchema } from '@/formValidation/formValidation';
import { signInUser } from '@/http';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

const SignInForm = () => {
  const [error, setError] = useState('');
  const { t } = useTranslation('auth');
  const {
    register, handleSubmit, formState: {
      errors, isSubmitting, isValid,
    },
  } = useForm<ISignInForm>({
    mode: 'onBlur',
    resolver: zodResolver(signInValidationSchema),
  });

  const router = useRouter();
  const onFormSubmit = async (formData: ISignInForm) => {
    try {
      await signInUser(formData.email, formData.password);
      router.push('/');
    } catch (e) {
      setError((e as Error).message);
    }
  };
  if (error) throw new Error(error);
  return (
    <form className='w-full max-w-[480px] bg-black px-8 pt-8 pb-12 text-center' onSubmit={handleSubmit(onFormSubmit)}>
      <Title level={3} className='text-3xl leading-none font-bold text-white mb-14'>{t('login_btn')}</Title>
      <fieldset>
        <TextInput id='email' label={t('email')} placeholder={t('email')} register={register} error={errors.email?.message} />
        <TextInput id='password' type='password' label={t('password')} placeholder={t('password')} register={register} error={errors.password?.message} />
      </fieldset>
      {isSubmitting
        ? <Loading />
        : (
          <Button type='submit' disabled={!isValid} className={clsx({ 'bg-orange': isValid, 'bg-grey': !isValid }, 'text-l uppercase text-white font-medium text-center tracking-[2px] px-8 py-5 min-w-[250px] rounded-full inline-block')}>
            {t('login_btn')}
          </Button>
        )}
      <Link href='/signup' className='text-text_white font-medium inline-block mt-4'>{t('has_account')}</Link>
    </form>
  );
};

export default SignInForm;
