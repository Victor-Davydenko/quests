'use client';

import React, { FC, ReactElement } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';
import { IRoute } from '@/interfaces/interfaces';

interface INavProps {
  routes: IRoute[]
  styles: { display: string }
}
const Navigation: FC<INavProps> = ({ routes, styles }): ReactElement => {
  const pathname = usePathname();
  const { t } = useTranslation(['home', 'auth']);
  return (
    <nav style={styles} className='hidden md:block'>
      <ul className='mt-4 md:mt-0 md:flex gap-x-12'>
        {routes.map(({ path, title }) => (
          <li key={path} className='text-center md:text-left mb-3 md:mb-0'>
            <Link href={path} className={clsx({ 'text-orange': path === pathname }, 'tracking-widest')}>{t(title)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
