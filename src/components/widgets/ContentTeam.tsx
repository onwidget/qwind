import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="bg-white">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Wer sind wir?</h2>
                    <p class="mb-4">Wiener Verein Bestattungsvorsorge Tirol Vorarlberg</p>
                    <p>Wir kümmern uns seit 100 Jahren um die Vorsorge für Menschen …………</p>
                </div>
                <div class="mt-8">
                    <img class="w-full rounded-lg" src="https://www.wvtirol.at/wp-content/uploads/2021/01/P1030075-scaled.jpg" alt="office content 1"/>
                </div>
            </div>
        </section>
    )
});