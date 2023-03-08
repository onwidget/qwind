import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Downloads from "~/components/widgets/Downloads";
import FeatureLeistungen from "~/components/widgets/FeatureLeistungen";
import HeroLeistungen from "~/components/widgets/HeroLeistungen";
import NummerEins from "~/components/widgets/NummerEins";
import Price from "~/components/widgets/Price";

import { SITE } from "~/config.mjs";

export default component$(() => {
    return (
            <>
                <HeroLeistungen />
                <FeatureLeistungen />
                <NummerEins />
                <Downloads />
                <Price />
            </>
)})

export const head: DocumentHead = {
    title: SITE.title,
    meta: [
      {
        name: "description",
        content: SITE.description,
      },
    ],
  };
  