import React, { FC } from 'react';
import QuestCard from '@/components/QuestCard';
import { IQuest } from '@/interfaces/interfaces';
import { getQuests } from '@/http';

interface IQuestsProps {
  filter: string | undefined
  locale: string
}
const Quests: FC<IQuestsProps> = async ({ filter = 'all_quests', locale }) => {
  const quests = await getQuests();
  let filteredQuests;
  if (!filter) {
    filteredQuests = quests;
  } else {
    filteredQuests = filter === 'all_quests' ? quests : quests.filter((quest) => quest.type === filter);
  }
  return (
    <div className='flex flex-wrap gap-8 pb-10'>
      {filteredQuests?.length && filteredQuests
        .map((quest: IQuest, index: number) => <QuestCard index={index} key={quest.id} locale={locale} {...quest} />)}
    </div>
  );
};

export default Quests;
