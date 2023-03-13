import { component$ } from "@builder.io/qwik";

export default component$(() => {

    return (
        <section class="bg-white dark:bg-gray-900" id="contact">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Kontaktiere uns</h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Du hast Fragen zu unseren Leistungen? Kontaktiere uns.</p>
                <form action="#" class="space-y-8">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Deine E-Mail Adresse</label>
                        <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@deinemail.com" required />
                    </div>
                    <div>
                        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thema</label>
                        <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="Um was geht es?" required />
                    </div>
                    <div class="sm:col-span-2">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Deine Nachricht</label>
                        <textarea id="message" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Schreib uns eine Nachricht ..."></textarea>
                    </div>
                    <button type="submit" class="py-3 px-5 text-xl font-bold text-center text-white rounded-lg bg-third sm:w-fit hover:bg-fourth focus:ring-4 focus:outline-none focus:ring-third">Nachricht senden</button>
                </form>
            </div>
        </section>
    )
})