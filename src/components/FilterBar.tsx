import React, { FC, ReactElement } from 'react';
import { categories } from '@/contstants/constants';
import FilterBarItem from '@/components/FilterBarItem';

interface IFilterBarProps {
  filter: string | undefined
}
const FilterBar: FC<IFilterBarProps> = ({ filter }): ReactElement => {
  return (
    <div className='flex items-center gap-x-20 mb-10'>
      {categories.map((category) => (
        <FilterBarItem
          key={category.id}
          category={category}
          filter={filter}
        />
      ))}
    </div>
  );
};

export default FilterBar;
