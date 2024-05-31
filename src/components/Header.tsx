'use client';

import {
  FC, ReactElement, ReactNode, useState,
} from 'react';
import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import Logo from '@/components/common/Logo';
import PhoneLink from '@/components/common/PhoneLink';
import { routes } from '@/contstants/constants';
import clsx from 'clsx';
import BurgerMenuOpener from '@/components/common/BurgerMenuOpener';

const LangSwitcher = dynamic(() => import('@/components/LangSwitcher'), { ssr: false });

const Header: FC<{ auth: ReactNode }> = ({ auth }): ReactElement => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const openMobileMenuHandler = () => {
    setIsMobileOpen((prevState) => !prevState);
  };
  const onListItemClickHandler = () => {
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  };
  const styles = isMobileOpen ? { display: 'block' } : { display: '' };
  return (
    <header className='absolute w-full top-0 left-0 font-semibold text-text_white text-sm uppercase pt-6 pb-6 bg-page_bg'>
      <div className={clsx({ flex: !isMobileOpen, block: isMobileOpen }, 'container mx-auto max-w-[1440px] gap-x-3 md:gap-x-unset sm:justify-between items-center px-8')}>
        <Logo />
        <Navigation closeNavHandler={onListItemClickHandler} styles={styles} routes={routes} />
        <PhoneLink styles={styles} />
        {!isMobileOpen ? auth : null}
        {!isMobileOpen ? <LangSwitcher /> : null}
        <BurgerMenuOpener handler={openMobileMenuHandler} />
      </div>
    </header>
  );
};

export default Header;
