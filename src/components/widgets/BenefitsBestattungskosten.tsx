import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="bg-fourth">
            <div class="container px-6 py-10 mx-auto max-w-screen-xl">
                <h1 class="text-2xl font-semibold lg:text-3xl text-white">Wir sind für sie da.<br/><span class="underline decoration-third">Unterstützung</span> über das finanzielle hinaus.</h1>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl flex items-center flex-col justify-center bg-white shadow-sm">
                        <h2 class="text-xl font-semibold text-gray-700 uppercase">Ernstfall</h2>
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h3 class="text-xl font-semibold text-gray-700 capitalize ">anrufen</h3>
                    </div>
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl flex items-center flex-col justify-center bg-white shadow-sm">
                        <h2 class="text-xl font-semibold text-gray-700 uppercase">Soforthile</h2>
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h3 class="text-xl font-semibold text-gray-700 capitalize ">kümmern</h3>
                    </div>
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl flex items-center flex-col justify-center bg-white shadow-sm">
                        <h2 class="text-xl font-semibold text-gray-700 uppercase ">Nr. 1 Partner</h2>
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h3 class="text-xl font-semibold text-gray-700 capitalize ">Bestatter</h3>
                    </div>
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl flex items-center flex-col justify-center bg-white shadow-sm">
                        <h2 class="text-xl font-semibold text-gray-700 uppercase ">Organisation</h2>
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h3 class="text-xl font-semibold text-gray-700 capitalize ">Leitfaden</h3>
                    </div>

                    
                </div>
            </div>
        </section>
    )
})