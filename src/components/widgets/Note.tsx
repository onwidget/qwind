import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="bg-secondary-100 dark:bg-slate-800">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium">
        <span class="font-bold">
          {" "}
          <svg viewBox="0 0 24 24" class="w-5 h-5 inline-block align-text-bottom">
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="icon-tabler"
            >
              <path d="M12 8h.01"></path>
              <rect width="16" height="16" x="4" y="4" rx="2"></rect>
              <path d="M11 12h1v4h1"></path>
            </g>
          </svg>{" "}
          Philosophy:
        </span>{" "}
        Simplicity, Best Practices and High Performance
      </div>
    </section>
  );
});
