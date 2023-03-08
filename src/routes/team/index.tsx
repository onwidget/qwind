import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ContentTeam from "~/components/widgets/ContentTeam";
import HeroTeam from "~/components/widgets/HeroTeam";

import { SITE } from "~/config.mjs";


export default component$(() => {
    return (
            <>
                <HeroTeam />
                <ContentTeam />
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