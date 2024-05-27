import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = (): ReactElement => {
  return (
    <Link href='/' className='w-[135px] h-[60px] block relative'>
      <Image src='/logo.svg' alt='logo' fill sizes='100%' priority />
    </Link>
  );
};

export default Logo;
