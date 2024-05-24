import React, { ReactElement } from 'react';
import Link from 'next/link';
import Icons from '@/components/common/Icons';

const SocialLinks = (): ReactElement => {
  return (
    <>
      <Link href='https://twitter.com' aria-label='twitter.com'>
        <Icons.twitter className='w-[25px] h-auto' />
      </Link>
      <Link href='https://instagram.com' aria-label='instagram.com'>
        <Icons.instagram className='w-[25px] h-auto' />
      </Link>
      <Link href='https://youtube.com' aria-label='youtube.com'>
        <Icons.youtube className='w-[25px] h-auto' />
      </Link>
    </>
  );
};

export default SocialLinks;
