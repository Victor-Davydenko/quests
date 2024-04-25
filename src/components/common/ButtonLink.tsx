import React, { FC, ReactNode } from 'react';
import Link from 'next/link';

interface IButtonLink {
  href: string
  children: ReactNode
}
const ButtonLink: FC<IButtonLink> = ({ href, children }) => {
  return (
    <Link href={href} className='text-l uppercase text-white font-medium text-center tracking-[2px] px-8 py-5 min-w-[250px] bg-orange rounded-full inline-block'>{children}</Link>
  );
};

export default ButtonLink;
