import { component$ } from "@builder.io/qwik";

// @ts-ignore
import srcsetAvif from "~/assets/images/hero.jpg?w=300;600&avif&srcset";
// @ts-ignore
import srcsetWebp from "~/assets/images/hero.jpg?w=300;600&webp&srcset";
// @ts-ignore
import { src as placeholder } from "~/assets/images/hero.jpg?width=300&metadata";

export default component$(() => {
  return (
    <section>
      <div class="max-w-6xl mx-auto px-4 sm:px-6">
        <div class="py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left">
          <div class="pb-0 md:py-0 lg:py-16 max-w-5xl mx-auto md:pr-16 flex items-center basis-[56%]">
            <div>
              <h1 class="text-5xl md:text-[3.50rem] font-bold leading-tighter tracking-tighter mb-4 font-heading">
                Free template for <br class="hidden lg:block" />{" "}
                <span class="hidden lg:inline">create a website using </span>{" "}
                <span class="text-[#039de1]">Qwik</span> +{" "}
                <span class="sm:whitespace-nowrap text-[#039de1]">
                  Tailwind CSS
                </span>
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-xl text-gray-600 mb-8 dark:text-slate-400">
                  <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                    Qwind
                  </span>{" "}
                  is a production ready template to start your new website using{" "}
                  <em>Qwik</em> + <em>Tailwind CSS</em>. It has been designed
                  following Best Practices, SEO, Accessibility,{" "}
                  <span class="inline md:hidden">...</span>
                  <span class="hidden md:inline">
                    Dark Mode, Great Page Speed, image optimization, sitemap
                    generation and more.
                  </span>
                </p>
                <div class="max-w-xs sm:max-w-md flex flex-nowrap flex-col sm:flex-row gap-4 m-auto md:m-0 justify-center md:justify-start">
                  <div class="flex w-full sm:w-auto">
                    <a
                      class="btn btn-primary sm:mb-0 w-full"
                      href="https://github.com/onwidget/qwind"
                      target="_blank"
                      rel="noopener"
                    >
                      Get template
                    </a>
                  </div>
                  <div class="flex w-full sm:w-auto">
                    <a class="btn w-full" href="#features">
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="hidden md:flex items-center flex-1">
            <div class="relative m-auto max-w-4xl">
              <picture>
                <source srcSet={srcsetAvif} type="image/avif" />
                <source srcSet={srcsetWebp} type="image/webp" />
                <img
                  src={placeholder}
                  width={1000}
                  height={1250}
                  class="mx-auto w-full rounded-md md:h-full bg-gray-400 dark:bg-slate-700"
                  alt="Hero Image"
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
