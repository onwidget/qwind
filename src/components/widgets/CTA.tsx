import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="bg-white">
            <div class="py-8 pb-16 px-4 mx-auto max-w-screen-xl lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900">Interessiert?</h2>
                    <p class="mb-6 font-light text-gray-500 md:text-lg">Jetzt unverbindlich Preis anfragen</p>
                    <a href="/kontakt#contact" class="text-white bg-third focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Jetzt anfragen</a>
                </div>
            </div>
        </section>
    )
});