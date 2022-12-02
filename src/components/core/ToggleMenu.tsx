import { component$ } from "@builder.io/qwik";

import { IconMenu } from "~/components/icons/IconMenu";

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;
  return (
    <button
      type="button"
      class="ml-1.5 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center transition"
      aria-label="Toggle Menu"
      onClick$={() => {
  
      }}
    >
      <IconMenu class={iconClass} />
    </button>
  );
});
