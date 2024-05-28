import React, { FC, ReactElement } from 'react';
import { categories } from '@/contstants/constants';
import FilterBarItem from '@/components/FilterBarItem';

interface IFilterBarProps {
  filter: string | undefined
  locale: string
}
const FilterBar: FC<IFilterBarProps> = ({ filter, locale }): ReactElement => {
  return (
    <div className='flex items-center gap-x-10 md:gap-x-20 mb-10 overflow-scroll pb-10 pr-10 lg:pr-0 filter_scroll'>
      {categories.map((category) => (
        <FilterBarItem
          key={category.id}
          category={category}
          filter={filter}
          locale={locale}
        />
      ))}
    </div>
  );
};

export default FilterBar;
