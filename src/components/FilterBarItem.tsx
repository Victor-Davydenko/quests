import React, { FC } from 'react';
import Link from 'next/link';
import { ICategory } from '@/interfaces/interfaces';
import Icons from '@/components/common/Icons';
import clsx from 'clsx';

interface ICategoryProps {
  category: ICategory
  filter: string | undefined
}
const FilterBarItem: FC<ICategoryProps> = ({ category: { id, title }, filter = 'all_quests' }) => {
  const Icon = Icons[id as keyof typeof Icons];
  return (
    <div className='flex items-center text-text_white text-sm gap-x-2'>
      <Icon className='w-10 h-auto' />
      <Link href={`/?filter=${id}`} scroll={false} className={clsx({ filter_item_active: id === filter }, 'cursor-pointer relative')}>{title}</Link>
    </div>
  );
};

export default FilterBarItem;
