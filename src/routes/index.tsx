import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import FAQs from "~/components/widgets/FAQs";
import Price from "~/components/widgets/Price";
import Marquee from "~/components/widgets/Marquee";

import { SITE } from "~/config.mjs";
import Video from "~/components/widgets/Video";
import Contact from "~/components/widgets/Contact";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <Video />
      <Price />
      <FAQs />
      <Marquee />
      <Contact />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
