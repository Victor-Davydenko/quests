'use client';

import React, { FC } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { ValidFieldNames } from '@/interfaces/interfaces';

interface ITextInput {
  id: ValidFieldNames,
  label: string,
  placeholder: string
  error: string | undefined
  register: UseFormRegister<any>
  valueAsNumber?: boolean
  type?: string
}
const TextInput: FC<ITextInput> = ({
  id, label, register, error, valueAsNumber = undefined, ...attrs
}) => {
  return (
    <div
      className='relative text-text_white font-medium w-full h-[55px] border border-text_white rounded bg-transparent mb-16'
    >
      <label htmlFor={id} className='text-[15px] absolute -top-8'>{label}</label>
      <input
        {...register(id, valueAsNumber ? { valueAsNumber: true } : {})}
        id={id}
        {...attrs}
        className='text-sm w-full h-full bg-transparent px-8 appearance-none outline outline-0 focus:outline-0'
      />
      {error && <div className='text-orange text-left'>{error}</div>}
    </div>
  );
};

export default TextInput;
