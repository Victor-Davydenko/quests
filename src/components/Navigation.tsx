'use client';

import React, { FC, ReactElement } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IRoute } from '@/interfaces/interfaces';

interface INavProps {
  routes: IRoute[]
}
const Navigation: FC<INavProps> = ({ routes }): ReactElement => {
  const pathname = usePathname();
  return (
    <nav>
      <ul className='flex gap-x-12'>
        {routes.map(({ path, title }) => (
          <li key={path}>
            <Link href={path} className={clsx({ 'text-orange': path === pathname }, 'tracking-widest')}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
