
import Image from 'next/image';

export default function Carrousel() {
    return (
        <section id="experience">
            <div id="default-carousel" className="relative w-full" data-carousel="static">
            <div className="relative overflow-hidden min-h-screen h-auto">
                <div className="z-20 z-10 translate-x-full translate-x-0"></div>

                <div className="hidden duration-700 ease-in-out w-full min-h-screen bg-gradient-to-r from-cyan-500 to-indigo-500 " data-carousel-item>
                    <div className="flex flex-col w-full z-5 min-h-screen">
                        <h3 className="flex content-center text-center justify-center font-bold text-3xl min-h-[5vh] lg:text-7xl lg:min-h-[10vh] mt-[8vh]">
                            Frontend Developer
                        </h3>
                        <div className="min-h-[82vh] flex flex-col lg:flex-row h-max h-auto justify-around">
                            <div className="w-100% lg:w-[55%] flex flex-col content-center justify-center p-3 pl-8 pr-8 lg:p-24">
                                <h3 className='text-2xl lg:text-6xl font-extrabold' >TraundLLC</h3>
                                <p className='my-1 lg:my-4 text-sm lg:text-2xl text-gray-500'>US, Ciudad Plantation, Florida(Remoto)</p>
                                <span className='inline-flex items-center text-sm lg:text-2xl text-blue-900'>Septiembre 17, 2022 – Enero 01, 2023, Frontend Developer Trainee</span>
                                <p className='mb-4 text-sm lg:text-xl font-normal text-black'>Me desenvolví como Desarrollador frontend usando JavaScipt, ReactJs Y NextJS en su gran mayoría, es una empresa que se encargaba de transacciones sin comisiones mayoritariamente en América, ellos se encargan de mandar dinero a diferentes países sin comisiones para el usuario por medio de criptomonedas.</p>
                                <div className='flex flex-wrap content-center lg:min-h-[40px] lg:min-h-[90px]'>
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/html.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/css.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/javascript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/react.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/nextjs.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/typescript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <svg className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]' viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4"></path>
                                        <path d="M14 9h-2"></path>
                                        <path d="M14 15h-2"></path>
                                        <path d="M10 12h.01"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-100% lg:w-[45%] flex flex-col content-center flex-wrap justify-center">
                            <Image src="/Traund.webp" width="0" height="0" sizes="100vw" style={{ width: '90%', height: 'auto' }} alt='' />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out w-full min-h-screen bg-gradient-to-r from-cyan-500 to-indigo-500 " data-carousel-item>
                    <div className="flex flex-col w-full z-5 min-h-screen">
                        <h3 className="flex content-center text-center justify-center font-bold text-3xl min-h-[5vh] lg:text-7xl lg:min-h-[10vh] mt-[8vh]">
                            Frontend Developer
                        </h3>
                        <div className="min-h-[82vh] flex flex-col lg:flex-row h-max h-auto justify-around">
                            <div className="w-100% lg:w-[55%] flex flex-col content-center justify-center p-3 pl-8 pr-8 lg:p-24">
                                <h3 className='text-2xl lg:text-6xl font-extrabold' >TraundLLC</h3>
                                <p className='my-1 lg:my-4 text-sm lg:text-2xl text-gray-500'>US, Ciudad Plantation, Florida(Remoto)</p>
                                <span className='inline-flex items-center text-sm lg:text-2xl text-blue-900'>Septiembre 17, 2022 – Enero 01, 2023, Frontend Developer Trainee</span>
                                <p className='mb-4 text-sm lg:text-xl font-normal text-black'>Me desenvolví como Desarrollador frontend usando JavaScipt, ReactJs Y NextJS en su gran mayoría, es una empresa que se encargaba de transacciones sin comisiones mayoritariamente en América, ellos se encargan de mandar dinero a diferentes países sin comisiones para el usuario por medio de criptomonedas.</p>
                                <div className='flex flex-wrap content-center lg:min-h-[40px] lg:min-h-[90px]'>
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/html.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/css.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/javascript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/react.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/nextjs.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/typescript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <svg className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]' viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4"></path>
                                        <path d="M14 9h-2"></path>
                                        <path d="M14 15h-2"></path>
                                        <path d="M10 12h.01"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-100% lg:w-[45%] flex flex-col content-center flex-wrap justify-center">
                            <Image src="/EdtSoft.webp" width="0" height="0" sizes="100vw" style={{ width: '90%', height: 'auto' }} alt='' />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out w-full min-h-screen bg-gradient-to-r from-cyan-500 to-indigo-500 " data-carousel-item>
                    <div className="flex flex-col w-full z-5 min-h-screen">
                        <h3 className="flex content-center text-center justify-center font-bold text-3xl min-h-[5vh] lg:text-7xl lg:min-h-[10vh] mt-[8vh]">
                            Frontend Developer
                        </h3>
                        <div className="min-h-[82vh] flex flex-col lg:flex-row h-max h-auto justify-around">
                            <div className="w-100% lg:w-[55%] flex flex-col content-center justify-center p-3 pl-8 pr-8 lg:p-24">
                                <h3 className='text-2xl lg:text-6xl font-extrabold' >TraundLLC</h3>
                                <p className='my-1 lg:my-4 text-sm lg:text-2xl text-gray-500'>US, Ciudad Plantation, Florida(Remoto)</p>
                                <span className='inline-flex items-center text-sm lg:text-2xl text-blue-900'>Septiembre 17, 2022 – Enero 01, 2023, Frontend Developer Trainee</span>
                                <p className='mb-4 text-sm lg:text-xl font-normal text-black'>Me desenvolví como Desarrollador frontend usando JavaScipt, ReactJs Y NextJS en su gran mayoría, es una empresa que se encargaba de transacciones sin comisiones mayoritariamente en América, ellos se encargan de mandar dinero a diferentes países sin comisiones para el usuario por medio de criptomonedas.</p>
                                <div className='flex flex-wrap content-center lg:min-h-[40px] lg:min-h-[90px]'>
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/html.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/css.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/javascript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/react.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/nextjs.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/typescript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <svg className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]' viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4"></path>
                                        <path d="M14 9h-2"></path>
                                        <path d="M14 15h-2"></path>
                                        <path d="M10 12h.01"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-100% lg:w-[45%] flex flex-col content-center flex-wrap justify-center">
                            <Image src="/Discordbot.webp" width="0" height="0" sizes="100vw" style={{ width: '90%', height: 'auto' }} alt='' />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out w-full min-h-screen bg-gradient-to-r from-cyan-500 to-indigo-500 " data-carousel-item>
                    <div className="flex flex-col w-full z-5 min-h-screen">
                        <h3 className="flex content-center text-center justify-center font-bold text-3xl min-h-[5vh] lg:text-7xl lg:min-h-[10vh] mt-[8vh]">
                            Frontend Developer
                        </h3>
                        <div className="min-h-[82vh] flex flex-col lg:flex-row h-max h-auto justify-around">
                            <div className="w-100% lg:w-[55%] flex flex-col content-center justify-center p-3 pl-8 pr-8 lg:p-24">
                                <h3 className='text-2xl lg:text-6xl font-extrabold' >TraundLLC</h3>
                                <p className='my-1 lg:my-4 text-sm lg:text-2xl text-gray-500'>US, Ciudad Plantation, Florida(Remoto)</p>
                                <span className='inline-flex items-center text-sm lg:text-2xl text-blue-900'>Septiembre 17, 2022 – Enero 01, 2023, Frontend Developer Trainee</span>
                                <p className='mb-4 text-sm lg:text-xl font-normal text-black'>Me desenvolví como Desarrollador frontend usando JavaScipt, ReactJs Y NextJS en su gran mayoría, es una empresa que se encargaba de transacciones sin comisiones mayoritariamente en América, ellos se encargan de mandar dinero a diferentes países sin comisiones para el usuario por medio de criptomonedas.</p>
                                <div className='flex flex-wrap content-center lg:min-h-[40px] lg:min-h-[90px]'>
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/html.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/css.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/javascript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/react.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/nextjs.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/typescript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <svg className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]' viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4"></path>
                                        <path d="M14 9h-2"></path>
                                        <path d="M14 15h-2"></path>
                                        <path d="M10 12h.01"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-100% lg:w-[45%] flex flex-col content-center flex-wrap justify-center">
                            <Image src="/proyecto1.webp" width="0" height="0" sizes="100vw" style={{ width: '90%', height: 'auto' }} alt='' />
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="hidden duration-700 ease-in-out w-full min-h-screen bg-gradient-to-r from-cyan-500 to-indigo-500 " data-carousel-item>
                    <div className="flex flex-col w-full z-5 min-h-screen">
                        <h3 className="flex content-center text-center justify-center font-bold text-3xl min-h-[5vh] lg:text-7xl lg:min-h-[10vh] mt-[8vh]">
                            Frontend Developer
                        </h3>
                        <div className="min-h-[82vh] flex flex-col lg:flex-row h-max h-auto justify-around">
                            <div className="w-100% lg:w-[55%] flex flex-col content-center justify-center p-3 pl-8 pr-8 lg:p-24">
                                <h3 className='text-2xl lg:text-6xl font-extrabold' >TraundLLC</h3>
                                <p className='my-1 lg:my-4 text-sm lg:text-2xl text-gray-500'>US, Ciudad Plantation, Florida(Remoto)</p>
                                <span className='inline-flex items-center text-sm lg:text-2xl text-blue-900'>Septiembre 17, 2022 – Enero 01, 2023, Frontend Developer Trainee</span>
                                <p className='mb-4 text-sm lg:text-xl font-normal text-black'>Me desenvolví como Desarrollador frontend usando JavaScipt, ReactJs Y NextJS en su gran mayoría, es una empresa que se encargaba de transacciones sin comisiones mayoritariamente en América, ellos se encargan de mandar dinero a diferentes países sin comisiones para el usuario por medio de criptomonedas.</p>
                                <div className='flex flex-wrap content-center lg:min-h-[40px] lg:min-h-[90px]'>
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/html.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/css.png" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/javascript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/react.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/nextjs.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <Image className='mr-3 lg:mr-5 mb-2 lg:mb-5 w-[25px] h-[25px] lg:w-[50px] lg:h-[50px]' src="/icons/typescript.svg" width="0" height="0" sizes="100vw" alt='' />
                                    <svg className='w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]' viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                        <path d="M11 16c1.22 -.912 2 -2.36 2 -4a5.01 5.01 0 0 0 -2 -4"></path>
                                        <path d="M14 9h-2"></path>
                                        <path d="M14 15h-2"></path>
                                        <path d="M10 12h.01"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="w-100% lg:w-[45%] flex flex-col content-center flex-wrap justify-center">
                            <Image src="/Github.webp" width="0" height="0" sizes="100vw" style={{ width: '90%', height: 'auto' }} alt='' />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="bg-grey absolute z-40 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="border-solid border white bg-white w-3 h-3 rounded-full" aria-current="true" aria-label="static 1" data-carousel-slide-to="0"></button>
                <button type="button" className="border-solid border white bg-white w-3 h-3 rounded-full" aria-current="false" aria-label="static 2" data-carousel-slide-to="1"></button>
                <button type="button" className="border-solid border white bg-white w-3 h-3 rounded-full" aria-current="false" aria-label="static 3" data-carousel-slide-to="2"></button>
            </div>

            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="border-solid border white inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-gray-800/50 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="border-solid border white inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-gray-800/50 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
            <script defer src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
        </section>
    );  
} 