import { ReactElement } from 'react';
import SocialLinks from '@/components/common/SocialLinks';

const Footer = (): ReactElement => {
  return (
    <footer className='fixed bottom-10 left-0'>
      <div className='container mx-auto max-w-[1440px] px-8 flex gap-x-3.5'>
        <SocialLinks />
      </div>
    </footer>
  );
};

export default Footer;
