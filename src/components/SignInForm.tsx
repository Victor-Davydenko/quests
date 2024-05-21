'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Title from '@/components/common/Title';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import Loading from '@/app/loading';
import { ISignInForm } from '@/interfaces/interfaces';
import { signInValidationSchema } from '@/formValidation/formValidation';
import { signInUser } from '@/http';

const SignInForm = () => {
  const [error, setError] = useState('');
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
      <Title level={3} className='text-3xl leading-none font-bold text-white mb-14'>Увійти</Title>
      <fieldset>
        <TextInput id='email' label='Електронна адреса' placeholder='Електронна адреса' register={register} error={errors.email} />
        <TextInput id='password' type='password' label='Пароль' placeholder='Пароль' register={register} error={errors.password} />
      </fieldset>
      {isSubmitting
        ? <Loading />
        : (
          <Button type='submit' disabled={!isValid} className={clsx({ 'bg-orange': isValid, 'bg-grey': !isValid }, 'text-l uppercase text-white font-medium text-center tracking-[2px] px-8 py-5 min-w-[250px] rounded-full inline-block')}>
            Увійти
          </Button>
        )}
    </form>
  );
};

export default SignInForm;
