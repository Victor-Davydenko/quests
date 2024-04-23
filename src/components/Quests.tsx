import React, { FC } from 'react';
import QuestCard from '@/components/QuestCard';
import { IQuest } from '@/interfaces/interfaces';

interface IQuestsProps {
  quests: IQuest[]
}
const Quests: FC<IQuestsProps> = ({ quests }) => {
  return (
    <div className='flex flex-wrap gap-8 pb-10'>
      {quests?.length && quests
        .map((quest) => <QuestCard key={quest.id} {...quest} />)}
    </div>
  );
};

export default Quests;
