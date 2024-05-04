'use client';

import React, { MutableRefObject, ReactNode, useRef } from 'react';
import { useRouter } from 'next/navigation';

const Modal = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const overlayRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const onModalClose = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      router.back();
    }
  };
  return (
    <div ref={overlayRef} className='w-full flex justify-center items-center absolute top-0 bottom-0 bg-overlay' onClick={onModalClose}>
      {children}
    </div>
  );
};

export default Modal;
