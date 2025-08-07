import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter"
import IconInstagram from "~/components/icons/IconInstagram"

export default component$(() => {
  // const links = [
  //   {
  //     title: "Product",
  //     items: [
  //       { title: "Features", href: "#" },
  //       { title: "Security", href: "#" },
  //       { title: "Team", href: "#" },
  //       { title: "Enterprise", href: "#" },
  //       { title: "Customer stories", href: "#" },
  //       { title: "Pricing", href: "#" },
  //       { title: "Resources", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Platform",
  //     items: [
  //       { title: "Developer API", href: "#" },
  //       { title: "Partners", href: "#" },
  //       { title: "Atom", href: "#" },
  //       { title: "Electron", href: "#" },
  //       { title: "Qwind Desktop", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Support",
  //     items: [
  //       { title: "Docs", href: "#" },
  //       { title: "Community Forum", href: "#" },
  //       { title: "Professional Services", href: "#" },
  //       { title: "Skills", href: "#" },
  //       { title: "Status", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Company",
  //     items: [
  //       { title: "About", href: "#" },
  //       { title: "Blog", href: "#" },
  //       { title: "Careers", href: "#" },
  //       { title: "Press", href: "#" },
  //       { title: "Inclusion", href: "#" },
  //       { title: "Social Impact", href: "#" },
  //       { title: "Shop", href: "#" },
  //     ],
  //   },
  // ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "https://x.com/desilifter"},
    { label: "Instagram", icon: IconInstagram, href: "https://www.instagram.com/desilifter_/" },
    // { label: "Facebook", icon: IconFacebook, href: "#" },
    // {
    //   label: "Github",
    //   icon: IconGithub,
    //   href: "https://github.com/onwidget/qwind",
    // },
  ];

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
          <div class="col-span-12 lg:col-span-4 pr-8">
           
            
          </div>
        
        </div>
        <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
          <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
          </ul>

          <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
            ©{" "}
            <a class="text-secondary-800 underline dark:text-gray-200" href="https://onwidget.com/">
              {" "}
              Taqueer Ahmed
            </a>{" "}
            · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});
