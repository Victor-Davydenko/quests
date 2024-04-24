import React, { FC } from 'react';
import clsx from 'clsx';
import Link from 'next/link';
import { ICategory } from '@/interfaces/interfaces';
import Icons from '@/components/common/Icons';

interface ICategoryProps {
  category: ICategory
  filter: string | undefined
}
const FilterBarItem: FC<ICategoryProps> = ({ category: { id, title }, filter = 'all_quests' }) => {
  const Icon = Icons[id as keyof typeof Icons];
  return (
    <Link href={`/?filter=${id}`} scroll={false} className='flex items-center text-text_white text-sm gap-x-2'>
      <Icon className='w-10 h-auto' />
      <span className={clsx({ filter_item_active: id === filter }, 'cursor-pointer relative')}>{title}</span>
    </Link>
  );
};

export default FilterBarItem;
