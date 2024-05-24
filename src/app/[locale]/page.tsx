import { ReactElement, Suspense } from 'react';
import Title from '@/components/common/Title';
import Quests from '@/components/Quests';
import FilterBar from '@/components/FilterBar';
import Loading from '@/app/[locale]/loading';
import initTranslations from '../i18n';

export default async function Home({
  searchParams,
  params: { locale },
}: {
  searchParams: {
    filter?: string
  },
  params: { locale: string };
}): Promise<ReactElement> {
  const { t } = await initTranslations(locale, ['home']);
  return (
    <section className='bg-page_bg h-full min-h-screen pt-32 w-full'>
      <div className='container mx-auto max-w-[1200px] px-5'>
        <Title level={1} className='text-orange text-sm font-medium leading-5'>{t('homepage_title')}</Title>
        <p className='text-white font-extrabold text-[64px] mb-12'>{t('homepage_question')}</p>
        <FilterBar filter={searchParams.filter} locale={locale} />
        <div className='min-h-screen'>
          <Suspense fallback={<Loading />}>
            <Quests filter={searchParams.filter} locale={locale} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
