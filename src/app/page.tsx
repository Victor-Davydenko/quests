import { ReactElement } from 'react';
import Title from '@/components/common/Title';
import getQuests from '@/http';
import Quests from '@/components/Quests';
import FilterBar from '@/components/FilterBar';

export default async function Home({
  searchParams,
}: {
  searchParams: {
    filter?: string
  };
}): Promise<ReactElement> {
  const quests = await getQuests();
  let filteredQuests;
  if (!searchParams.filter) {
    filteredQuests = quests;
  } else {
    filteredQuests = searchParams.filter === 'all_quests' ? quests : quests.filter((quest) => quest.type === searchParams.filter);
  }
  return (
    <section className='bg-page_bg h-full min-h-screen pt-32'>
      <div className='container mx-auto max-w-[1200px] px-5'>
        <Title level={1} className='text-orange text-sm font-medium leading-5'>Ігри у Львові</Title>
        <p className='text-white font-extrabold text-[64px] mb-12'>В яку гру зіграємо?</p>
        <FilterBar filter={searchParams.filter} />
        <Quests quests={filteredQuests} />
      </div>
    </section>
  );
}
