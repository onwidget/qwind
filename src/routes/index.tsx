import { component$, } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
// import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

const manualList = [
  { name: "Start Here: Bigger Leaner Stronger for Indian Lifters",url:"/blog/blsIndia/", },
  { name: "Gym Looks Scary? It’s Actually Super Friendly for Newbies", url: "/blog/nojudging/", },
  { name: "This High-Protein Sandwich Tastes Like Dessert But Builds Muscle (Desi-Style)", url: "/blog/peanutbutterbananasandwich/", },
  { name: "Do Your Parents Think Protein Powder = Steroids?", url: "/blog/parents/",  },
  // { name: "The Importance of Sleep and Recovery", url: "/blog/sleepRecovery/", excerpt: "Why sleep and recovery are crucial for progress." },
];
{/* <Suggestions links={manualList} /> */}

import { Suggestions } from "~/components/widgets/Suggestions";


import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(() => import("../components/icons/IconBrandTailwind"));
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(() => import("../components/icons/IconRocket"));
// const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
// const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";
// import { Suggestions } from "~/components/widgets/Suggestions";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        highlight="Why?"
        title="The Value You Get"
        subtitle=""
        items={[
          {
            title: "India-Specific Natural Bodybuilding Advice",
            description:
              "Tips tailored for Indian diets (dal, roti, rice, paneer) and affordable supplements.",
            icon: IconBrandTailwind,
          },
          {
            title: "Quick Daily Tips for Busy People",
            description:
              "Short, practical reminders that take under 2 minutes to read. Perfect for working professionals or students who want results without wasting time.",
            icon: IconApps,
          },
          {
            title: "Proven 3-2-1 Training Method",
            description:
              "Based on time-tested strength training (3 heavy, 2 moderate, 1 pump).Backed by science and the “Bigger Leaner Stronger” approach, adapted for Indian bodies.",
          },
          {
            title: "Realistic, Sustainable Progress",
            description:
              "No “get shredded in 30 days” nonsense — just real, trackable gains. Weekly updates, notes, and motivation to help you stay on track.",
            icon: IconRocket,
          },
          // {
          //   title: "Search Engine Optimization (SEO)",
          //   description:
          //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          //   icon: IconBrandGoogle,
          // },
          // {
          //   title: "Open to new ideas and contributions",
          //   description:
          //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          //   icon: IconBulb
          // },
        ]}
      />
      {/* <Steps /> */}
      <FAQs
        title="Frequently Asked Questions"
        subtitle=""
        highlight="FAQs"
        items={[
          {
            title: "🏋️‍♂️ What kind of training does this blog recommend?",
            description:
              "We follow the 3–2–1 training split — 3 heavy compound lifts, 2 moderate sets, and 1 isolation pump finisher. It’s based on strength-focused, natural bodybuilding adapted from the Bigger Leaner Stronger method.",
          },
          {
            title: "🍛 Is this blog Indian-diet friendly?",
            description:
              "Yes! Every tip considers common Indian foods like dal, paneer, rice, and roti. Whether you're veg, non-veg, or on a budget, we’ve got options for you.",
          },
          {
            title: "⏰ I’m busy. Are the tips time-consuming?",
            description:
              "Not at all. Most posts are short and actionable, perfect for students or working professionals. You’ll get tips that take less than 2 minutes to read and apply.",
          },
          {
            title: "💊 Do I need supplements?",
            description:
              "No. Supplements are optional — we focus on results through food and smart training. We only recommend a few safe, affordable basics like whey and creatine, if at all.",
          },
          {
            title: "🇮🇳 Is this just a copy of Western fitness advice?",
            description:
              "No. We take inspiration from proven systems but adapt everything for Indian lifestyles — including sleep patterns, food habits, gym access, and cultural factors.",
          },
          
        ]}
      />
      <Stats />
      <Suggestions links={manualList} title="Start Reading Here"/>
      <CallToAction />
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
