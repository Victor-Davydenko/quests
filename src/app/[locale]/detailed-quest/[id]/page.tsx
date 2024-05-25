import React from 'react';
import Promo from '@/components/Promo';
import { getSingleQuest } from '@/http';
import { notFound } from 'next/navigation';
import initTranslations from '@/app/i18n';

export async function generateMetadata({ params: { id, locale } }: { params: { id: string, locale: string } }) {
  const { t } = await initTranslations(locale, ['quest', 'common']);
  if (Number.isNaN(+id)) {
    return {
      title: t('common:not_found'),
    };
  }
  const singleQuest = await getSingleQuest(+id);
  if (singleQuest === null) {
    return {
      title: t('common:not_found'),
    };
  }
  return {
    title: t(`${singleQuest.translationKey}_title`),
    description: t(`${singleQuest.translationKey}_description`),
  };
}

const Page = async ({ params: { id, locale } }: { params: { id: string, locale: string } }) => {
  if (Number.isNaN(+id)) {
    notFound();
  }
  const singleQuest = await getSingleQuest(+id);
  if (singleQuest === null) {
    notFound();
  }
  const { coverImg } = singleQuest;
  return (
    <section
      className='h-full min-h-screen pt-[150px] w-full'
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.76) 100%), url('/${coverImg}')`,
        backgroundSize: 'cover',
      }}
    >
      <div className='container mx-auto max-w-[1200px] px-5 flex justify-end text-text_white'>
        <Promo quest={singleQuest} locale={locale} />
      </div>
    </section>
  );
};

export default Page;
