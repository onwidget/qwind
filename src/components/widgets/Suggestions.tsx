// src/components/widgets/Suggestions.tsx
import { component$ } from "@builder.io/qwik";

interface SuggestionItem {
  name: string;
  url: string;
  excerpt?: string;
  image?: string;
}

interface SuggestionsProps {
  links: SuggestionItem[];
  title: string
}

export const Suggestions = component$<SuggestionsProps>(({ links, title }) => {
  if (!links.length) return null;

  return (
    
    <div class="pt-8 dark:border-slate-700 p-6">

    
          <h2 class="mb-6 text-3xl font-bold dark:text-slate-300 text-center text-gold">{title}</h2>
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {links.map(({ name, url, excerpt, image }) => (
              <div key={url} class="group relative">
                <div class="relative h-full overflow-hidden rounded-lg bg-white p-6 shadow transition duration-300 group-hover:shadow-lg dark:bg-slate-800">
                  {image && (
                    <img
                      src={image}
                      alt={name}
                      class="mb-4 h-40 w-full rounded-md object-cover"
                      loading="lazy"
                      width={300}
                      height={160}
                    />
                  )}
                  <h3 class="mb-2 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                    <a href={url}>
                      <span class="absolute inset-0" aria-hidden="true" />
                      {name}
                    </a>
                  </h3>
                  {excerpt && (
                    <p class="mb-4 line-clamp-2 text-gray-600 dark:text-slate-400">
                      {excerpt}
                    </p>
                  )}
                  <a
                    href={url}
                    class="mt-auto inline-flex items-center font-medium text-primary-600 hover:underline dark:text-primary-400"
                  >
                    Read more
                    <svg
                      class="ml-1 h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
         </div>
    //     );
    //   </div>
    // </div>
  );
});