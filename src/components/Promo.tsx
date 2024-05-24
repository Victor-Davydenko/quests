import React, { FC } from 'react';
import Title from '@/components/common/Title';
import ButtonLink from '@/components/common/ButtonLink';
import Icons from '@/components/common/Icons';
import { IQuest } from '@/interfaces/interfaces';
import initTranslations from '@/app/i18n';

interface IPromoProps {
  quest: IQuest
  locale: string
}
const Promo: FC<IPromoProps> = async ({
  quest: {
    id, type, duration, level, peopleCount, translationKey,
  },
  locale,
}) => {
  const { t } = await initTranslations(locale, ['quest', 'common']);
  const [from, to] = peopleCount;
  const minutes = t('common:minutes');
  const people = t('common:people');
  return (
    <article className='w-full max-w-[600px]'>
      <Title level={1} className='text-sm text-orange -ml-[30px]'>{t(`home:${type}`)}</Title>
      <Title level={2} className='text-white text-[92px] font-extrabold leading-none -ml-[30px] mb-8'>{t(`${translationKey}_title`)}</Title>
      <ul className='flex gap-x-12 mb-5'>
        <li className='flex gap-x-1 items-center'>
          <Icons.clock />
          <span>{`${duration} ${minutes}`}</span>
        </li>
        <li className='flex gap-x-1 items-center'>
          <Icons.person />
          <span>{`${from} - ${to} ${people}`}</span>
        </li>
        <li className='flex gap-x-1 items-center'>
          <Icons.puzzle />
          <span>{t(`common:${level}`)}</span>
        </li>
      </ul>
      <p className='mb-10'>{t(`${translationKey}_description`)}</p>
      <ButtonLink href={`/detailed-quest/${id}/bookQuest`}>{t('home:book')}</ButtonLink>
    </article>
  );
};

export default Promo;
