import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/logo.png?width=64&height=64&png";

export default component$(() => (
  <span class="self-center ml-2 text-2xl md:text-xl font-bold text-third whitespace-nowrap flex items-center uppercase">
    <img
      src={logoSrc}
      class="inline-block mr-1"
      width={32}
      height={32}
      alt="Qwind Logo"
      loading="lazy"
    />
    Wiener Verein
  </span>
));
