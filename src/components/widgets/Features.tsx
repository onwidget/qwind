import { component$ } from "@builder.io/qwik";
import { IconStar } from "~/components/icons/IconStar";

export default component$(() => {
  const items = [
    [
      {
        title: "Die Nummer 1 in der Hinterbliebenenvorsorge.",
        description: "Der WIENER VEREIN ist der einzige echte Spezialist auf diesem Sektor und beschäftigt sich fast ausschließlich mit der umfassenden Vorsorge für den Todesfall.",
        icon: "tabler:brand-tailwind",
      },
      {
        title: "Kooperationspartner der Österreichischen Bestatter:",
        description:
          "Der WIENER VEREIN hat seit Jahrzehnten Kooperationsvereinbarungen mit allen Bestattungsunternehmen Österreichs. Diese bewährte Zusammenarbeit garantiert eine reibungslose und pietätvolle Durchführung der versicherten Leistungen.",
        icon: "tabler:components",
      },
    ],
    [
      {
        title: "Kompetenz und Know-How seit über 100 Jahren.",
        description:
          "Rasche, unbürokratische Soforthilfe, hunderttausende Male bewährt!",
        icon: "tabler:list-check",
      },
      {
        title: "Leistungsstark",
        description:
          `Sofortschutz, Direktverrechnung mit Bestatter, lebenslanger Schutz, Ausrichtung der Bestattung nach persönlichen Wünschen – ob Feuer-,
          Erd-, Wiesen-, Baum- oder Seebestattung, und je nach Leistungspaket möglich: Abdeckung der Nebenkosten, weltweites Überführungsservice
          (Organisation und Bezahlung), Unfalltod-Zusatzversicherung und Digitaler Nachlass-Service.`,
        icon: "tabler:rocket",
      },
    ],
  ];

  return (
    <section class="scroll-mt-16 bg-fourth" id="features">
      <div class="px-4 py-16 mx-auto max-w-6xl lg:px-8 lg:py-20">
        <div class="mb-10 md:mx-auto text-center md:mb-12 max-w-3xl">
          <p class="text-base text-white font-bold tracking-wide uppercase">
            Gründe
          </p>
          <h2 class="text-4xl md:text-5xl text-third font-bold leading-tighter tracking-tighter mb-4 font-heading">
            Warum Wiener Verein?
          </h2>
          <p class="max-w-3xl mx-auto sm:text-center text-xl text-slate-400">
            Wir haben … Erfahrung im Bereich … und arbeiten mit unseren Kunden von …………
          </p>
        </div>
        <div class="grid mx-auto space-y-6 md:grid-cols-2 md:space-y-0 justify-center md:justify-between">
          {items.map((subitems) => (
            <div class="space-y-8 sm:px-8 flex flex-col justify-between">
              {subitems.map(({ title, description }) => (
                <div key={title} class="flex flex-col max-w-md items-center p-6 bg-white rounded-xl text-center h-full">
                  <div class="mb-4 mr-4">
                    <div class="text-white flex items-center justify-center w-12 h-12 rounded-full bg-third">
                      <IconStar />
                    </div>
                  </div>
                  <div>
                    <h3 class="mb-3 text-xl text-black font-bold">{title}</h3>
                    <p class="text-gray-600 text-base">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
