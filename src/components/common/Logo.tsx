import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = (): ReactElement => {
  return (
    <Link href='/public'>
      <Image src='/logo.svg' alt='logo' width={134} height={50} priority />
    </Link>
  );
};

export default Logo;
