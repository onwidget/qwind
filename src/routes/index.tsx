import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import CallToAction from "~/components/widgets/CallToAction";
import FAQs from "~/components/widgets/FAQs";
import Features from "~/components/widgets/Features";
import Hero from "~/components/widgets/Hero";
import Stats from "~/components/widgets/Stats";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features />
      <FAQs />
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwind — Free template for starts a website using Qwik + Tailwind CSS",
  meta: [
    {
      name: "description",
      content: "Qwind site description",
    },
  ],
};
