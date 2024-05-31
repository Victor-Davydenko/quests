import Title from '@/components/common/Title';
import Map from '@/components/Map';
import initTranslations from '@/app/i18n';

const Page = async ({ params: { locale } }: { params: { locale: string } }) => {
  const { t } = await initTranslations(locale, ['common', 'home']);
  return (
    <section className='bg-page_bg h-full min-h-screen pt-32 pb-20 w-full'>
      <div className='container mx-auto max-w-[1200px] px-5'>
        <Title level={1} className='text-orange text-sm font-medium leading-5'>{t('title')}</Title>
        <p
          className='relative text-white font-extrabold text-3xl sm:text-5xl md:text-[64px] mb-3 md:mb-12 after:absolute after:content-[" "] after:h-[.5px] after:w-full after:bg-text_white after:left-0 after:-bottom-[20px] md:after:-bottom-[40px]'
        >
          {t('home:contacts')}
        </p>
        <div className='lg:flex pt-12 text-text_white font-medium gap-x-5'>
          <ul className='pt-2 lg:basis-1/3'>
            <li className='mb-8'>
              <Title level={3} className='font-semibold block mb-2'>{t('address')}</Title>
              <address>
                {t('location')}
              </address>
            </li>
            <li className='mb-8'>
              <Title level={3} className='font-semibold block mb-2'>{t('when_open')}</Title>
              <span>{t('hours_available')}</span>
            </li>
            <li className='mb-8'>
              <Title level={3} className='font-semibold block mb-2'>{t('phone')}</Title>
              <a href='tel: +38 (050) 555-99-55'>+38 (050) 555-99-55</a>
            </li>
            <li className='mb-8'>
              <Title level={3} className='font-semibold block mb-2'>{t('email')}</Title>
              <a href='mailto:lviv.games@game.ua'>lviv.games@game.ua</a>
            </li>
          </ul>
          <div className='basis-2/3 rounded-[30px] overflow-hidden h-[500px] lg:min-h-fit lg:h-auto'>
            <Map locale={locale} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
