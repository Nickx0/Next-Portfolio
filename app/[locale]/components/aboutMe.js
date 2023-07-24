import {useTranslations} from 'next-intl';
export default function AboutMe() {
const t = useTranslations('aboutMe');
  return (
    <>
    <section style={{backgroundImage:"url(/Ilustración.webp)"}} className="h-screen w-full flex  bg-center bg-no-repeat bg-gray-700 bg-blend-multiply">
    <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <div className='inline relative'>
            <h2 className="text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{t('iam')} </h2>
        </div>
        <div className='mt-8 inline-block relative custombox overflow-hidden'>
            <span className='text-6xl font-extrabold md:text-8xl lg:text-10xl invisible'>.</span>
            <div className='flex flex-col oneline'>
                <p className='mb-2 text-6xl font-extrabold md:text-8xl lg:text-10xl text-[#398BE8]'>{t('developer')}</p>
                <p className='mb-2 text-6xl font-extrabold md:text-8xl lg:text-10xl text-[#CE3232]'>{t('gamer')}</p>
                <p className='mb-2 text-6xl font-extrabold md:text-8xl lg:text-10xl text-[#CEA332]'>{t('artist')}</p>
                <p className='mb-2 text-6xl font-extrabold md:text-8xl lg:text-10xl text-[#FF923D]'>{t('3dmodeler')}</p>
            </div>
        </div>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{t('aboutMe')}</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a target='_BLANK' href="/CV2.pdf" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            {t('cv')}
                <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <b className="mt-20 text-6xl inline-flex justify-center items-center py-3 px-5 font-medium text-center font-bold text-amber-400">
            {t('wip')}
            </b>
        </div>
    </div>
    </section>
    </>
  )
}
