import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="bg-white">
            <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
                <h2 class="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl">
                    Downloads
                </h2>

                <p class="block max-w-4xl mt-4 text-gray-500">
                    Hier findest du weiter Infos per Download
                </p>

                <div class="mt-6">
                    <a href="#" class="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700">
                        <span class="mx-2">
                            Flyer Wiener Verein
                        </span>
                    </a>

                    <a href="#"
                        class="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-third rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-fourth focus:ring">

                        <span class="mx-2">
                            Servicekarte
                        </span>
                    </a>
                </div>
            </div>
        </section>
    )
});