import React from 'react';
import NotFoundText from '@/components/common/NotFoundText';

const NotFound = () => {
  return (
    <div className='text-center'>
      <NotFoundText />
      <p className='text-white text-9xl font-extrabold'>404</p>
    </div>
  );
};

export default NotFound;
