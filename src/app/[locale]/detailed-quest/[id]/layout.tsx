import React, { ReactNode } from 'react';

const DetailedQuestLayout = ({ modal, children }: { modal: ReactNode, children: ReactNode }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default DetailedQuestLayout;
