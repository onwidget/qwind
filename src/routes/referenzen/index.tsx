import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ContentReferenzen from "~/components/widgets/ContentReferenzen";
import HeroReferenzen from "~/components/widgets/HeroReferenzen";

import { SITE } from "~/config.mjs";


export default component$(() => {
    return (
            <>
                <HeroReferenzen />
                <ContentReferenzen />
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