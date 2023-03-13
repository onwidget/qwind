import { component$ } from "@builder.io/qwik";
import { IconArrowDownRight } from "../icons/IconArrowDownRight";

export default component$(() => {
  const items = [
    [
      {
        question: "Welche Vorteile bringt mir der Wiener Verein?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.`,
      },
      {
        question: "Kann jeder eine Bestattungsvorsorge abschließen?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.`,
      },
      {
        question: "Kann jeder eine Bestattungsvorsorge abschließen?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.`,
      },
    ],
    [
      {
        question: "Kann jeder eine Bestattungsvorsorge abschließen?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.`,
      },
      {
        question: "Kann jeder eine Bestattungsvorsorge abschließen?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.`,
      },
      {
        question:
          "Kann jeder eine Bestattungsvorsorge abschließen?",
        answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.`,
      },
    ],
  ];

  return (
    <section class="border-t border-slate-800 bg-white">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <p class="text-third font-bold tracking-wide uppercase text-xl">
              FAQs
            </p>
            <h2 class="max-w-lg mb-4 text-black text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto font-heading">
              Die wichtigsten Fragen
            </h2>
          </div>
        </div>
        <div class="max-w-screen-xl sm:mx-auto">
          <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 md:grid-cols-2">
            {items.map((subitems) => (
              <div class="space-y-8">
                {subitems.map(({ question, answer }) => (
                  <div>
                    <h3 class="mb-4 text-xl font-bold text-black">
                      <IconArrowDownRight class="w-7 h-7 text-third inline-block" />
                      {question}
                    </h3>
                    {answer.split("\n\n").map((paragraph) => (
                      <p class="text-gray-700 mb-2">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
