'use client';

import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import Title from '@/components/common/Title';
import TextInput from '@/components/common/TextInput';
import Button from '@/components/common/Button';
import Loading from '@/app/[locale]/loading';
import { IForm } from '@/interfaces/interfaces';
import { createOrder } from '@/http';
import formValidationSchema from '@/formValidation/formValidation';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const { t } = useTranslation('book');
  const { t: tError } = useTranslation('errors');
  const {
    register, handleSubmit, formState: {
      errors, isSubmitting, isValid,
    },
  } = useForm<IForm>({
    mode: 'onBlur',
    resolver: zodResolver(formValidationSchema(tError)),
  });
  const onFormSubmit = async (formData: IForm) => {
    const newOrder = {
      name: formData.name,
      peopleCount: formData.numberOfVisitors,
      phone: formData.phone,
      isLegal: formData.privateDataAgreement,
    };
    try {
      await createOrder(newOrder);
      router.back();
      toast((popup) => {
        popup.duration = 2000;
        popup.style = {
          padding: 0,
        };
        return (
          <div className='flex p-4 text-xl text-orange bg-page_bg'>Замовлення прийнято, наш менеджер вже телефонує вам</div>
        );
      });
    } catch (e) {
      setError((e as Error).message);
    }
  };
  if (error) throw new Error(error);
  return (
    <form className='w-full max-w-[480px] bg-black px-8 pt-8 pb-12 text-center' onSubmit={handleSubmit(onFormSubmit)}>
      <Title level={3} className='text-3xl leading-none font-bold text-white mb-14'>{t('leave_request')}</Title>
      <fieldset>
        <TextInput id='name' label={t('your')} placeholder={t('name')} register={register} error={errors.name?.message} />
        <TextInput id='phone' label={t('phone')} placeholder={t('phone')} register={register} error={errors.phone?.message} />
        <TextInput id='numberOfVisitors' label={t('number_of_players')} placeholder={t('number_of_players')} register={register} error={errors.numberOfVisitors?.message} valueAsNumber />
      </fieldset>
      {isSubmitting
        ? <Loading />
        : (
          <Button type='submit' disabled={!isValid} className={clsx({ 'bg-orange': isValid, 'bg-grey': !isValid }, 'text-l uppercase text-white font-medium text-center tracking-[2px] px-8 py-5 min-w-[250px] rounded-full inline-block')}>
            {t('send_request')}
          </Button>
        )}
      <div className='flex gap-x-2 mt-10'>
        <input type='checkbox' {...register('privateDataAgreement')} />
        <p className='text-sm text-text_white'>
          {t('agreement')}
        </p>
      </div>
      {errors.privateDataAgreement && <div className='text-orange text-left'>{errors.privateDataAgreement.message}</div>}
    </form>
  );
};

export default Form;
