import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Title from '@/components/common/Title';
import Icons from '@/components/common/Icons';
import { IQuest } from '@/interfaces/interfaces';

interface IDictionary {
  [key: string]: string
}
const QuestLevelDictionary: IDictionary = {
  easy: 'легкий',
  medium: 'середній',
  hard: 'складний',
};
const QuestCard: FC<IQuest> = ({
  id, previewImg, title, level, peopleCount,
}): ReactElement => {
  const [from, to] = peopleCount;
  return (
    <Link href={`detailed-quest/${id}`} className='relative max-w-[345px]'>
      <div className='absolute rounded bg-card_bg shadow-card_shadow w-full h-full' />
      <Image src={`http://localhost:3001/${previewImg}`} alt='card' width={345} height={230} className='rounded' />
      <Title level={2} className='absolute left-5 bottom-16 font-bold text-white text-2xl'>{title}</Title>
      <div className='absolute flex items-center gap-x-4 left-5 bottom-8 font-medium text-text_white text-sm'>
        <span className='flex items-center'>
          <Icons.person />
          {`${from} - ${to}`}
          людини
        </span>
        <span className='flex gap-x-2 items-center'>
          <Icons.puzzle />
          {QuestLevelDictionary[level]}
        </span>
      </div>
    </Link>
  );
};

export default QuestCard;
