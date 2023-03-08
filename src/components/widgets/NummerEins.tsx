import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="bg-fourth">
            <div class="container px-6 py-10 mx-auto max-w-screen-xl ">
                <h1 class="text-2xl font-semibold lg:text-3xl text-white">WIENER VEREIN die <span class="underline decoration-third">Nr. 1</span> in der Hinterbliebenenvorsorge.</h1>

                <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl flex items-center flex-col justify-center bg-white shadow-sm">
                        <h2 class="font-semibold text-gray-700 uppercas text-center">Der WIENER VEREIN ist der einzige echte Spezialist seit über <span class="underline decoration-third">100 Jahren</span>.</h2>
                    </div> 
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl flex items-center flex-col justify-center bg-white shadow-sm">
                        <h2 class="font-semibold text-gray-700 uppercas text-center"><span class="underline decoration-third">Kompetenz und Know-How:</span> Erfahrung durch eigene Bestattung und Krematorium.</h2>
                    </div> 
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl flex items-center flex-col justify-center bg-white shadow-sm">
                        <h2 class="font-semibold text-gray-700 uppercas text-center">Wir betreuen ca. <span class="underline decoration-third">430.000 KundInnen</span>.</h2>
                    </div> 
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl flex items-center flex-col justify-center bg-white shadow-sm">
                        <h2 class="font-semibold text-gray-700 uppercas text-center">Pro Jahr werden ca. <span class="underline decoration-third">14.000 Todesfälle </span> von uns abgewickelt.</h2>
                    </div> 
                    <div class="p-8 space-y-3 border-2 border-third rounded-xl flex items-center flex-col justify-center bg-white shadow-sm">
                        <h2 class="font-semibold text-gray-700 uppercas text-center"><span class="underline decoration-third">Nr. 1</span> heißt, der WIENER VEREIN ist der einzige Partner der Bestatter mit <span class="underline decoration-third">Direktverrechnung</span>.</h2>
                    </div> 
                </div>
            </div>
        </section>
    )
})