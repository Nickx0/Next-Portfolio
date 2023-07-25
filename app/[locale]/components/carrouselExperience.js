
export default function App() {
  return (
    <div id="experience">
    <div id="default-carousel" class="relative w-full" data-carousel="static">
    
    <div class="relative overflow-hidden rounded-lg h-screen">
        
        <div className="z-20 z-10 translate-x-full translate-x-0"></div>
        <div className="hidden duration-700 ease-in-out w-full h-screen" data-carousel-item>
            <img src="https://cdn2.unrealengine.com/egs-social-rocketleague-news-1920x1080-1920x1080-975383433.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="hidden duration-700 ease-in-out w-full h-screen" data-carousel-item>
            <img src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_RocketLeague_image1600w.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
        <div className="hidden duration-700 ease-in-out w-full h-screen" data-carousel-item>
            <img src="https://prod.assets.earlygamecdn.com/images/Rocket-League-Emperor-Muscle-Car.jpg?mtime=1670000809" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>
    
    <div class="bg-grey absolute z-40 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="border-solid border white bg-white w-3 h-3 rounded-full" aria-current="true" aria-label="static 1" data-carousel-slide-to="0"></button>
        <button type="button" class="border-solid border white bg-white w-3 h-3 rounded-full" aria-current="false" aria-label="static 2" data-carousel-slide-to="1"></button>
        <button type="button" class="border-solid border white bg-white w-3 h-3 rounded-full" aria-current="false" aria-label="static 3" data-carousel-slide-to="2"></button>
    </div>
    
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="border-solid border white inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-gray-800/50 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="border-solid border white inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/50 dark:bg-gray-800/50 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
    <script defer src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </div>
  );
}