import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="bg-fourth">
            <div class="pt-24 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-32 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <p class="text-base text-third font-semibold tracking-wide uppercase">
                        Wiener Verein
                    </p>
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-white">Unsere Leistungen</h1>
                    <p class="mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-third hover:bg-third-700 focus:ring-4">
                        Zu den Preisen
                        <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                    <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg focus:ring-4  text-white hover:bg-gray-700 focus:ring-gray-800">
                        Kontakt
                    </a> 
                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img class="rounded-lg" src="https://www.wvtirol.at/wp-content/uploads/2021/01/P1030075-scaled.jpg" alt="mockup"/>
                </div>                
            </div>
        </section>
    )
})