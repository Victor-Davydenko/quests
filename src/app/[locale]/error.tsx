'use client';

import Button from '@/components/common/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className='text-center'>
      <p className='text-orange text-sm'>Виникла помилка, спробуйте ще раз:(</p>
      <p className='text-orange text-sm'>{error.message}</p>
      <Button disabled={false} onClick={reset} type='button' className='text-l uppercase text-white font-medium text-center bg-orange tracking-[2px] px-8 py-5 min-w-[250px] rounded-full inline-block'>
        Спробувати ще раз
      </Button>
    </div>
  );
}
