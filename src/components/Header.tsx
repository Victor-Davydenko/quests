import { FC, ReactElement } from 'react';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Logo from '@/components/common/Logo';
import { routes } from '@/contstants/constants';

const Header: FC = (): ReactElement => {
  return (
    <header className='absolute w-full top-0 left-0 font-semibold text-text_white text-sm uppercase pt-6'>
      <div className='container mx-auto max-w-[1440px] flex justify-between items-center px-8'>
        <Logo />
        <Navigation routes={routes} />
        <Link href='tel:0501112222' className='leading-none'>050 111 22 22</Link>
      </div>
    </header>
  );
};

export default Header;
