import { component$ } from "@builder.io/qwik";
import HeroPrice from "~/components/widgets/HeroPrice";
import Price from "~/components/widgets/Price";
import type { DocumentHead } from "@builder.io/qwik-city";

import { SITE } from "~/config.mjs";


export default component$(() => {
    return (
            <>
                <HeroPrice />
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