import React, { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { ICategory } from '@/interfaces/interfaces';
import Icons from '@/components/common/Icons';
import initTranslations from '../app/i18n';

interface ICategoryProps {
  category: ICategory
  filter: string | undefined
  locale: string
}
const FilterBarItem: FC<ICategoryProps> = async ({ category: { id, title }, filter = 'all_quests', locale }) => {
  const Icon = Icons[id as keyof typeof Icons];
  const { t } = await initTranslations(locale, ['home']);
  return (
    <Link href={`/?filter=${id}`} scroll={false} className='flex items-center text-text_white text-sm gap-x-2'>
      <Icon className='w-10 h-auto' />
      <span className={clsx({ filter_item_active: id === filter }, 'cursor-pointer relative text-nowrap')}>{t(title)}</span>
    </Link>
  );
};

export default FilterBarItem;
