import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="px-6 py-16 pt-8 lg:pt-8 mx-auto lg:px-8 lg:py-20 max-w-3xl">
      <div class="mx-auto prose prose-lg max-w-4xl dark:prose-invert dark:prose-headings:text-slate-300 prose-md prose-headings:font-heading prose-headings:leading-tighter prose-headings:tracking-tighter prose-headings:font-bold prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-img:rounded-md prose-img:shadow-lg mt-8">
        <Slot />
      </div>
    </section>
  );
});
