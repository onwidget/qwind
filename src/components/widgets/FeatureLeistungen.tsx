import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="bg-white">
            <div class="container px-6 py-10 mx-auto max-w-screen-xl">
                <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl">Unsere Alleinstellungs-<br/><span class="underline decoration-third">Merkmale</span></h1>

                <p class="mt-4 text-gray-500 xl:mt-6 ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                </p>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl">
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize ">Sofortschutz – keine Gesundheitsfragen</h1>

                        <p class="text-gray-500 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-third rounded-xl">
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize ">Lebenslanger Schutz</h1>

                        <p class="text-gray-500 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-third rounded-xl">
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize ">Zusatz-Absicherung</h1>

                        <p class="text-gray-500 ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl">
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize ">Im Ernstfall – Direktverrechnung</h1>

                        <p class="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-third rounded-xl">
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize ">Ausrichtung der Bestattung nach persönlichen Wünschen</h1>

                        <p class="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-third rounded-xl">
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize ">Weltweites Überführungsservice</h1>

                        <p class="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl">
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize ">Soforthilfe – wir kümmern uns um Sie</h1>

                        <p class="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>

                    <div class="p-8 space-y-3 border-2 border-third rounded-xl">
                        <span class="inline-block text-third">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                            </svg>
                        </span>

                        <h1 class="text-xl font-semibold text-gray-700 capitalize ">Hilfe in der Organisation</h1>

                        <p class="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
})