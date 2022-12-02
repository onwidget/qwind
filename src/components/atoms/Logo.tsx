import { component$ } from "@builder.io/qwik";

import logoSrc from "~/assets/images/logo.png";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-gray-900 whitespace-nowrap dark:text-white">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={28}
      height={28}
      alt="Qwik Logo"
      loading="lazy"
    />
    Qwind
  </span>
));
