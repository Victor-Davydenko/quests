import { ReactElement, Suspense } from 'react';
import Title from '@/components/common/Title';
import Quests from '@/components/Quests';
import FilterBar from '@/components/FilterBar';
import Loading from '@/app/loading';

export default async function Home({
  searchParams,
}: {
  searchParams: {
    filter?: string
  };
}): Promise<ReactElement> {
  return (
    <section className='bg-page_bg h-full min-h-screen pt-32 w-full'>
      <div className='container mx-auto max-w-[1200px] px-5'>
        <Title level={1} className='text-orange text-sm font-medium leading-5'>Ігри у Львові</Title>
        <p className='text-white font-extrabold text-[64px] mb-12'>В яку гру зіграємо?</p>
        <FilterBar filter={searchParams.filter} />
        <div className='min-h-screen'>
          <Suspense fallback={<Loading />}>
            <Quests filter={searchParams.filter} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
