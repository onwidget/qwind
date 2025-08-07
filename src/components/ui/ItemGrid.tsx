import { twMerge } from "tailwind-merge";

interface Item {
  title?: string;
  description?: string;
  icon?: any;
  classes?: Record<string, string>;
}

interface Props {
  items?: Array<Item>;
  defaultIcon?: any;
  classes?: Record<string, string>;
}

export const ItemGrid = (props: Props) => {
  const { items = [], defaultIcon: DefaultIcon = null, classes = {} } = props;

  const {
    container: containerClass = "md:grid-cols-2",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-[#e5d066] dark:text-[#e5d066]",
  } = classes as Record<string, string>;

  return (
    items.length && (
      <div class={twMerge("grid w-full gap-8 ", containerClass)}>
        {items.map(({ title, description, icon: Icon, classes: itemClasses = {} }, index) => (
          <div key={`${title}${index}`}>
            <div class={twMerge("flex flex-row w-full", panelClass, itemClasses.panel)}>
              <div class="flex justify-center">
                {(Icon || DefaultIcon) &&
                  (Icon ? (
                    <Icon class={twMerge("w-7 h-7 mr-2 ", defaultIconClass, itemClasses.icon)} />
                  ) : (
                    <DefaultIcon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses.icon)} />
                  ))}
              </div>
              <div class="w-full">
                <h3 class={twMerge("text-xl font-bold", titleClass, itemClasses.title)}>{title}</h3>
                {description && (
                  <p
                    class={twMerge("text-gray-600 dark:text-slate-400 mt-3 max-w-none", descriptionClass, itemClasses.description)}
                    dangerouslySetInnerHTML={description}
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
};
