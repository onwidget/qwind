import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="bg-white">
        <div class="pt-16 px-4 mx-auto text-center lg:pt-32 lg:px-12">
            <h2 class="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-third">Zahlen und Fakten</h2>
            <div class="px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-6xl">
            <div class="grid grid-cols-1 row-gap-8 md:grid-cols-4">
              <div class="text-center p-2 md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
                <div class="text-4xl font-bold lg:text-5xl text-third font-heading">
                  430.000
                </div>
                <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase">
                  Kunden
                </p>
              </div>
              <div class="text-center p-2 md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
                <div class="text-4xl font-bold lg:text-5xl  text-third font-heading">
                  2.8 Mio.
                </div>
                <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase">
                  Versicherungsleitsung
                </p>
              </div>
              <div class="text-center p-2 md:border-r dark:md:border-slate-500 mb-10 md:mb-0 font-heading">
                <div class="text-4xl font-bold lg:text-5xl text-third">
                  14.000
                </div>
                <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase">
                  jährlich abgerechnete Trauerfälle 
                </p>
              </div>
              <div class="text-center p-2 mb-10 md:mb-0">
                <div class="text-4xl font-bold lg:text-5xl text-third font-heading">
                  3.500
                </div>
                <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase">
                  Überführungen aus der ganzen Welt
                </p>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
});
