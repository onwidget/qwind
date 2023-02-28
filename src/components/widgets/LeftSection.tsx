import { component$ } from "@builder.io/qwik";


export default component$(() => {
    return (
        <section class="border-t bg-white border-gray-200 dark:border-slate-800">
            <div class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
                <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <p class="text-base text-third font-semibold tracking-wide uppercase">
                    FAQs
                    </p>
                    <h2 class="max-w-lg mb-4 text-black text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto font-heading">
                    Die wichtigsten Fragen
                    </h2>
                </div>
                </div>
                <div class="max-w-screen-xl sm:mx-auto">
                <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 md:grid-cols-2">
                    <div class="space-y-8">
                        <div>
                            <h3 class="mb-4 text-xl font-bold text-third">
                                WIENER VEREIN
                            </h3>
                            <p class="text-gray-700 dark:text-gray-400 mb-2">
                                Jetzt schon für morgen vorsorgen 
                                <br/>
                                <br/>
                                Ein Todesfall in der Familie stellt eine absolute Ausnahmesituation dar. Emotional – und in vielen Fällen auch finanziell! Ein Mensch verabschiedet sich endgültig und unwiderruflich. Und zurück bleibt Trauer und Ratlosigkeit.<br/>In dieser Situation ist es gut zu wissen, wohin man sich wenden kann. Der WIENER VEREIN hilft, rasch und unbürokratisch – durch einfühlsame Beratung, operatives Handeln und die sofortige Bereitstellung finanzieller Mittel.
                            </p>
                            <div class="flex w-full">
                                <a
                                class="text-white btn bg-third sm:mb-0 w-auto border-none"
                                href="https://github.com/onwidget/qwind"
                                target="_blank"
                                rel="noopener"
                                >
                                <p class="text-white">Jetzt Kontaktieren</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                <div class="absolute inline-flex flex-col items-center justify-center transform -rotate-12 w-32 h-1/5 p-2.5 bg-black rounded-full">
                        <p class="w-full text-base font-bold leading-normal text-center text-third">Jetzt schon ab 20€ / Monat</p>
                </div>
            </section>
     )
})