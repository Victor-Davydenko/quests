import React from 'react';
import Button from '@/components/common/Button';
import { logout } from '@/http';

const LogoutForm = () => {
  return (
    <form action={logout}>
      <Button type='submit' className='text-m bg-orange uppercase text-white font-medium text-center tracking-[2px] px-4 py-2 min-w-[150px] rounded-full inline-block'>Вийти</Button>
    </form>
  );
};

export default LogoutForm;
