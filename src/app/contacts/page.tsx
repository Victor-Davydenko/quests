import Title from '@/components/common/Title';
import Map from '@/components/Map';

const Page = () => {
  return (
    <section className='bg-page_bg h-full min-h-screen pt-32 w-full'>
      <div className='container mx-auto max-w-[1200px] px-5'>
        <Title level={1} className='text-orange text-sm font-medium leading-5'>Квести у Львові</Title>
        <p
          className='relative text-white font-extrabold text-[64px] mb-12 after:absolute after:content-[" "] after:h-[.5px] after:w-full after:bg-text_white after:left-0 after:-bottom-[40px]'
        >
          Контакти
        </p>
        <div className='flex pt-12 text-text_white font-medium gap-x-5'>
          <ul className='pt-2 basis-1/3'>
            <li className='mb-8'>
              <Title level={3} className='font-semibold block mb-2'>Адреса</Title>
              <address>
                Львів,
                Площа Ринок, 3Б
              </address>
            </li>
            <li className='mb-8'>
              <Title level={3} className='font-semibold block mb-2'>Години роботи</Title>
              <span>Щоденно, з 9:00 до 20:00</span>
            </li>
            <li className='mb-8'>
              <Title level={3} className='font-semibold block mb-2'>Телефон</Title>
              <a href='tel: +38 (050) 555-99-55'>+38 (050) 555-99-55</a>
            </li>
            <li className='mb-8'>
              <Title level={3} className='font-semibold block mb-2'>E-mail</Title>
              <a href='mailto:lviv.games@game.ua'>lviv.games@game.ua</a>
            </li>
          </ul>
          <div className='basis-2/3 rounded-[30px] overflow-hidden'>
            <Map />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
