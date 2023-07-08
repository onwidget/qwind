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
    icon: defaultIconClass = "text-secondary-500 dark:text-secondary-700",
  } = classes as Record<string, string>;

  return (
    items && (
      <div class={twMerge("grid mx-auto gap-8", containerClass)}>
        {items.map(({ title, description, icon: Icon, classes: itemClasses = {} }, index) => (
          <div key={`${title}${index}`}>
            <div class={twMerge("flex flex-row max-w-md", panelClass, itemClasses?.panel)}>
              <div class="flex justify-center">
                {(Icon || DefaultIcon) &&
                  (Icon ? (
                    <Icon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses?.icon)} />
                  ) : (
                    <DefaultIcon class={twMerge("w-7 h-7 mr-2", defaultIconClass, itemClasses?.icon)} />
                  ))}
              </div>
              <div>
                <h3 class={twMerge("text-xl font-bold", titleClass, itemClasses?.title)}>{title}</h3>
                {description && (
                  <p
                    class={twMerge("text-gray-600 dark:text-slate-400 mt-3", descriptionClass, itemClasses?.description)}
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
