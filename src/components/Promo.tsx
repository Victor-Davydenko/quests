import React, { FC } from 'react';
import Title from '@/components/common/Title';
import ButtonLink from '@/components/common/ButtonLink';
import Icons from '@/components/common/Icons';
import { questLevelDictionary, typeQestDictionary } from '@/contstants/constants';
import { IQuest } from '@/interfaces/interfaces';

interface IPromoProps {
  quest: IQuest
}
const Promo: FC<IPromoProps> = ({
  quest: {
    id, type, description, duration, title, level, peopleCount,
  },
}) => {
  const [from, to] = peopleCount;
  return (
    <article className='w-full max-w-[600px]'>
      <Title level={1} className='text-sm text-orange -ml-[30px]'>{typeQestDictionary[type]}</Title>
      <Title level={2} className='text-white text-[92px] font-extrabold leading-none -ml-[30px] mb-8'>{title}</Title>
      <ul className='flex gap-x-12 mb-5'>
        <li className='flex gap-x-1 items-center'>
          <Icons.clock />
          <span>{`${duration} хв.`}</span>
        </li>
        <li className='flex gap-x-1 items-center'>
          <Icons.person />
          <span>{`${from} - ${to} люд.`}</span>
        </li>
        <li className='flex gap-x-1 items-center'>
          <Icons.puzzle />
          <span>{questLevelDictionary[level]}</span>
        </li>
      </ul>
      <p className='mb-10'>{description}</p>
      <ButtonLink href={`/detailed-quest/${id}/bookQuest`}>Забронювати</ButtonLink>
    </article>
  );
};

export default Promo;
