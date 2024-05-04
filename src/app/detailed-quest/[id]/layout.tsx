import React, { ReactNode } from 'react';

const DetailedQuestLayout = ({
  children,
  modal,
}: { children: ReactNode, modal: ReactNode }) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default DetailedQuestLayout;
