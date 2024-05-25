'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { FC, ReactElement } from 'react';
import Select, { SingleValue } from 'react-select';
import { langOptions } from '@/contstants/constants';
import { ILangOption } from '@/interfaces/interfaces';
import i18nConfig from '../../i18nConfig';

const LangSwitcher: FC = (): ReactElement => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const handleChange = (option: SingleValue<ILangOption>) => {
    const newLocale = (option as ILangOption).value;
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    if (
      currentLocale === i18nConfig.defaultLocale
    ) {
      router.push(`/${newLocale}${currentPathname}`);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }
    router.refresh();
  };

  return (
    <Select
      defaultValue={{ value: currentLocale, label: currentLocale }}
      options={langOptions}
      onChange={handleChange}
      className='react-select-container'
      classNamePrefix='react-select'
    />
  );
};
export default LangSwitcher;
