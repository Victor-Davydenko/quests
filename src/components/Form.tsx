'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Title from '@/components/common/Title';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import Loading from '@/app/loading';
import { IForm } from '@/interfaces/interfaces';
import { createOrder } from '@/http';
import formValidationSchema from '@/formValidation/formValidation';

const Form = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const {
    register, handleSubmit, formState: {
      errors, isSubmitting, isValid,
    },
  } = useForm<IForm>({
    mode: 'onBlur',
    resolver: zodResolver(formValidationSchema),
  });

  const onFormSubmit = async (formData: IForm) => {
    const newOrder = {
      name: formData.name,
      peopleCount: formData.numberOfVisitors,
      phone: formData.phone,
      isLegal: formData.privateDataAgreement,
    };
    createOrder(newOrder)
      .then(() => {
        router.back();
      })
      .catch((e) => setError(e.message));
  };
  if (error) throw new Error(error);
  return (
    <form className='w-full max-w-[480px] bg-black px-8 pt-8 pb-12 text-center' onSubmit={handleSubmit(onFormSubmit)}>
      <Title level={3} className='text-3xl leading-none font-bold text-white mb-14'>Залишити заявку</Title>
      <fieldset>
        <TextInput id='name' label={'Ваше ім\'я'} placeholder={'Ім\'я'} register={register} error={errors.name} />
        <TextInput id='phone' label='Контактний телефон' placeholder='Телефон' register={register} error={errors.phone} />
        <TextInput id='numberOfVisitors' label='Кількість гравців' placeholder='Кількість гравців' register={register} error={errors.numberOfVisitors} valueAsNumber />
      </fieldset>
      {isSubmitting
        ? <Loading />
        : (
          <Button type='submit' disabled={!isValid} className={clsx({ 'bg-orange': isValid, 'bg-grey': !isValid }, 'text-l uppercase text-white font-medium text-center tracking-[2px] px-8 py-5 min-w-[250px] rounded-full inline-block')}>
            Відправити заявку
          </Button>
        )}
      <div className='flex gap-x-2 mt-10'>
        <input type='checkbox' {...register('privateDataAgreement')} />
        <p className='text-sm text-text_white'>
          Я согласен с
          <Link href='/personal_data_aggrement' className='relative after:absolute after:content-[" "] after:h-[1px] after:w-full after:bg-white after:-bottom-[2px] after:left-0'> правилами обработки персональных данных </Link>
          и пользовательским соглашением
        </p>
      </div>
      {errors.privateDataAgreement && <div className='text-orange text-left'>{errors.privateDataAgreement.message}</div>}
    </form>
  );
};

export default Form;
