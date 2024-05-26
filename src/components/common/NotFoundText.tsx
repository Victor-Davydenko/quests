'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFoundText = () => {
  const { t } = useTranslation('common');
  return (
    <span className='text-orange text-sm'>{t('not_found_page')}</span>
  );
};

export default NotFoundText;
