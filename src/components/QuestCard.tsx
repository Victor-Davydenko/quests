import React, { FC, ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Title from '@/components/common/Title';
import Icons from '@/components/common/Icons';
import { IQuest } from '@/interfaces/interfaces';
import initTranslations from '@/app/i18n';

interface IQuestCard extends IQuest {
  locale: string
}
const QuestCard: FC<IQuestCard> = async ({
  id, previewImg, title, level, peopleCount, translationKey, locale,
}): Promise<ReactElement> => {
  const [from, to] = peopleCount;
  const { t } = await initTranslations(locale, ['quest', 'common']);
  const people = t('common:people');
  return (
    <Link href={`detailed-quest/${id}`} className='relative max-w-[345px]'>
      <div className='absolute rounded bg-card_bg shadow-card_shadow w-full h-full' />
      <Image src={`/${previewImg}`} alt='card' width={345} height={230} className='rounded' />
      <Title level={2} className='absolute left-5 bottom-16 font-bold text-white text-2xl'>{t(`${translationKey}_title`)}</Title>
      <div className='absolute flex items-center gap-x-4 left-5 bottom-8 font-medium text-text_white text-sm'>
        <span className='flex items-center'>
          <Icons.person />
          {`${from} - ${to} `}
          {people}
        </span>
        <span className='flex gap-x-2 items-center'>
          <Icons.puzzle />
          {t(`common:${level}`)}
        </span>
      </div>
    </Link>
  );
};

export default QuestCard;
