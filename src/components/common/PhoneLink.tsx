import React, { FC } from 'react';
import Link from 'next/link';

interface IPhoneLink {
  styles: { display: string }
}
const PhoneLink: FC<IPhoneLink> = ({ styles }) => {
  return (
    <Link href='tel:0501112222' className='hidden text-center md:text-left md:block leading-none' style={styles}>050 111 22 22</Link>
  );
};

export default PhoneLink;
