import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-20">
          <div class="max-w-3xl mx-auto text-center p-6 rounded-md shadow-xl dark:shadow-none">
            <h2 class="text-4xl md:text-4xl font-bold leading-tighter tracking-tighter mb-4 font-heading">
              <span class="text-[#e5d066]">Desilifter.pro</span> {" "}
              <br class="block sm:hidden" />
              {/* <span class="text-[#039de1] sm:whitespace-nowrap">
                Tailwind CSS
              </span> */}
            </h2>
            <p class="text-xl text-gray-600 dark:text-slate-400">
              Get to reading. <br class="hidden md:inline" />
              Don't waste more time!
            </p>

            <div class="mt-6">
              <a
                class="btn bg-[#e5d066] mb-4 sm:mb-0 w-full sm:w-auto"
                href="/blog/"
                target="_blank"
                rel="noopener"
              >
                <p class="text-[#111827]">

                Read Blog
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
