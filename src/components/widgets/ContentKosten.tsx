import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="bg-white">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Beispiel eines optimalen Angebots</h2>
                    <div class="flex flex-row justify-between border-b-2">
                        <p class="mb-4">Frau / Mann im Alter von 45 Jahren, € 45,30 / Monat</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="mb-4">Unmittelbare Bestattungskosten: </p>
                        <p class="font-bold">4.000,–</p>
                    </div>
                    <div class="flex flex-row justify-between border-b-2">
                        <p class="mb-4">Sarg, Aufbahrung, Bestattungsleistungen, Grabgebühren, Einäscherungsgebühr, etc.</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="mb-4">Sofort anfallende Nebenkosten:</p>
                        <p class="font-bold">2.000,–</p>
                    </div>
                    <div class="flex flex-row justify-between border-b-2">
                        <p class="mb-4">Totenmesse, Parten, Kränze, Trauerkleidung, Bewirtung der Trauergäste, etc.</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="mb-4">Folgekosten:</p>
                        <p class="font-bold">4.000,–</p>
                    </div>
                    <div class="flex flex-row justify-between border-b-2">
                        <p class="mb-4">Steinmetzarbeiten (Grabstein, Grabinschrift), Notariatsgebühr, Grabpflege, neue Bestattungsformen (Erinnerungsdiamant, Edelsteine, Natur- oder Seebestattung etc.)</p>
                    </div>
                </div>
                <div class="mt-8">
                    <img class="w-full rounded-lg" src="https://www.wvtirol.at/wp-content/uploads/2020/11/Uebersicht-Kosten.jpg" alt="office content 1"/>
                </div>
            </div>
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="font-light text-gray-500 sm:text-lg">
                    <div class="flex flex-row justify-between">
                        <p class="mb-4">Vorschlag: Versicherungssumme</p>
                        <p class="font-bold">10.000,–</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="mb-4">+ Zusatzleistung bei Unfalltod:</p>
                        <p class="font-bold">10.000,–</p>
                    </div>
                    <div class="flex flex-row justify-between">
                        <p class="mb-4">+ Weltweites Überführungsservice bis:</p>
                        <p class="font-bold">15.000,–</p>
                    </div>
                    <div class="flex flex-row justify-between border-t-2">
                        <p class="mb-4">Gesamtleistung bis maximal:</p>
                        <p class="font-bold">35.000,–</p>
                    </div>
                </div>
            </div>
        </section>
    )
});