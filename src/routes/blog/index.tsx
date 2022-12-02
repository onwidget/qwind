import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section>
        <div>Coming soon</div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Blog — Qwind",
  meta: [
    {
      name: "description",
      content: "Qwind site description",
    },
  ],
};
