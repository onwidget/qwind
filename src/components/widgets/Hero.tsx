import { component$ } from "@builder.io/qwik";

import SpacerHeader from "~/components/atoms/HeaderSpacer";
import heroImage from "~/assets/images/heroImage.jpg";

export default component$(() => {
  return (
    <section
      class={`bg-gradient-to-b flex items-center justify-start h-[90vh] relative overflow-hidden `}
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 flex h-[80vh] 2xl:h-auto pt-[72px] w-full items-center justify-center md:justify-start z-10">
        <div class="py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left">
          <div class="pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex items-center basis-3/5">
            <div>
              <h1 class="text-3xl text-white md:text-5xl font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                Bestattungsvorsorge
              </h1>
              <div class="max-w-3xl mx-auto">
                <p class="text-xl text-white mb-8">
                  Jetzt vorsorgen für morgen
                </p>
                <div class="flex flex-nowrap flex-col sm:flex-row gap-4 m-auto md:m-0 justify-center md:justify-start text-xl">
                  <div class="flex w-full justify-center md:justify-start">
                    <a
                      class="text-white bg-third hover:bg-fourth sm:mb-0 border-none font-bold text-center rounded-lg px-5 py-2.5"
                      href="https://github.com/onwidget/qwind"
                      target="_blank"
                      rel="noopener"
                    >
                      <p class="text-white">Angebot anfragen</p>
                    </a>
                  </div>
                  <div class="flex w-full justify-center md:justify-start">
                    <button class="text-white font-bold sm:mb-0 bg-transparent border-2 border-white hover:bg-fourth hover:border-fourth rounded-lg px-5 py-2.5">
                      <p class="text-white">Kontakt</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute h-full w-full overflow-hidden top-0">
        <img
          src={heroImage} 
          class="relative left-0 min-h-full min-w-full max-w-none bg-blend-overlay object-fill bottom-0"
          alt="Hero Image Bestattungsvorsorge"
          loading="eager"
        />
      </div>
      <div class="absolute z-100 bottom-0 right-0 w-[102vw] overflow-hidden">
         <SpacerHeader />
      </div>
    </section>
  );
});
