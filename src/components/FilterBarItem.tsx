'use client';

import React, { FC, MouseEventHandler } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { ICategory } from '@/interfaces/interfaces';
import Icons from '@/components/common/Icons';
import clsx from 'clsx';

interface ICategoryProps {
  category: ICategory
  filter: string | undefined
}
const FilterBarItem: FC<ICategoryProps> = ({ category: { id, title }, filter = 'all_quests' }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const Icon = Icons[id as keyof typeof Icons];
  const handleFilterClick: MouseEventHandler<HTMLSpanElement> = (e) => {
    const term = e.currentTarget.dataset.filter;
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('filter', term);
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className='flex items-center text-text_white text-sm gap-x-2'>
      <Icon className='w-10 h-auto' />
      <span className={clsx({ filter_item_active: id === filter }, 'cursor-pointer relative')} data-filter={id} onClick={handleFilterClick}>{title}</span>
    </div>
  );
};

export default FilterBarItem;
