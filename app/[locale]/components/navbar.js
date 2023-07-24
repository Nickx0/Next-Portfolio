import {useTranslations} from 'next-intl';
import Link from 'next-intl/link';

export default function Navbar(){
    const t = useTranslations('navbar');
    return(
    <header className="bg-[#141516] text-white fixed top-0 w-full z-[100]">
        <nav className="flex h-12 w-4/5 m-auto place-content-between">
            <Link href="/" locale={t('locale')} className="flex justify-center items-center">
            {t('lg')+'-'}
                <svg className="text-3xl" fill="white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
            </Link>
            <input className="hidden" type="checkbox" id="check"/>
            <label htmlFor="check" className="checkbtn">
                <svg fill="white" className="md:hidden cursor-pointer text-3xl h-12 w-14 text-center pt-1.5 text-white" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            </label>
            <div className="navbar transition-all flex text-xl flex-col w-screen fixed top-12 h-screen bg-[#212346a1] right-full md:flex-row md:static md:h-12 md:w-auto md:transition-none">
                <a className="my-8 h-[15vh] py-[6vh] pl-auto text-center inline-block hover:bg-[#212946a1] md:px-4 md:pt-[8px] md:mx-1 md:h-12 md:m-0 md:h-12 pb-0" href="#aboutme">{t('aboutMe')}</a>
                <a className="my-8 h-[15vh] py-[6vh] pl-auto text-center inline-block hover:bg-[#212946a1] md:px-4 md:pt-[8px] md:mx-1 md:h-12 md:m-0 md:h-12 pb-0" href="#experience">{t('experience')}</a>
                <a className="my-8 h-[15vh] py-[6vh] pl-auto text-center inline-block hover:bg-[#212946a1] md:px-4 md:pt-[8px] md:mx-1 md:h-12 md:m-0 md:h-12 pb-0" href="#projects">{t('projects')}</a>
                <a className="my-8 h-[15vh] py-[6vh] pl-auto text-center inline-block hover:bg-[#212946a1] md:px-4 md:pt-[8px] md:mx-1 md:h-12 md:m-0 md:h-12 pb-0" href="#skills">{t('skills')}</a>
            </div>
        </nav>
    </header>
    )
}