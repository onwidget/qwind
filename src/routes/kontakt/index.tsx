import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Contact from "~/components/widgets/Contact";
import ContactComponent from "~/components/widgets/ContactComponent";

import { SITE } from "~/config.mjs";

export default component$(() => {
    return (
            <>
                <ContactComponent />
                <Contact />
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
  