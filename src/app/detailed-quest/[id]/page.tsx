import React from 'react';
import Promo from '@/components/Promo';
import { getSingleQuest } from '@/http';

export async function generateMetadata({ params: { id } }: { params: { id: string } }) {
  const { title, description } = await getSingleQuest(id);
  return {
    title: `Квест | ${title}`,
    description,
  };
}

const Page = async ({ params: { id } }: { params: { id: string } }) => {
  const singleQuest = await getSingleQuest(id);
  const { coverImg } = singleQuest;
  return (
    <section
      className='h-full min-h-screen pt-[150px] w-full'
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.76) 100%), url('${process.env.API_URL}/${coverImg}')`,
        backgroundSize: 'cover',
      }}
    >
      <div className='container mx-auto max-w-[1200px] px-5 flex justify-end text-text_white'>
        <Promo quest={singleQuest} />
      </div>
    </section>
  );
};

export default Page;