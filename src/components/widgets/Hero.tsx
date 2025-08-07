import { component$ } from "@builder.io/qwik";
// import { Image } from "@unpic/qwik";
import { LuInstagram, LuTwitter } from "@qwikest/icons/lucide";



// const coverImage =
//   "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";

export default component$(() => {
  return (
    <section class="relative md:-mt-[76px] not-prose">
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true"></div>
      <div class="relative mx-auto w-screen px-4 sm:px-6">
        <div class="pt-0 md:pt-[76px] pointer-events-none"></div>
        <div class="py-12 md:py-20 lg:flex lg:items-center lg:justify-center lg:align-center  lg:h-screen lg:w-screen lg:gap-8 ">
          <div class="flex-none text-center pb-10 md:pb-16 mx-auto max-w-screen sm:w-[90vw] lg:w-[90vw] 
          
          ">
           {/* md:ml-28 */}

            {/* <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
            Welcome to the<br class="hidden" />{" "}
            <br />
            <span class="text-[#e5d066]">DesiLifter</span>{" "}
            <br />
            <span class="sm:whitespace-nowrap ">Blog</span> */}
            <h1 class="w-full max-w-screen text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200 leading-[1.2]">
              {/* Welcome to the */}
                {/* <br class="sm:block lg:hidden"/> */}
               <span class="text-[#e5d066]"> DesiLifter.pro </span> 
               <br class="sm:block lg:hidden"/>
                Natural Bodybuilding Tips for Indians
            </h1>
            <div class="max-w-3xl mx-auto lg:max-w-none">
              <p class="text-xl text-muted mb-6 dark:text-slate-300">
                {/* <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Qwind
                </span>{" "} */}
                Follow for easy daily tips and reminders on natural bodybuilding, made especially for Indians.  
                
               
              </p>

              <div class="max-w-xs sm:max-w-md m-auto flex flex-nowrap flex-col sm:flex-row sm:justify-center gap-4 lg:m-0 lg:max-w-[100vw] ">
                <div class="flex w-full sm:w-auto text-[#111827]">
                  <a
                    class="btn sm:mb-0 w-full bg-[#e5d066] color-[#111827] text:dark-[#111827]"
                    href="/blog/"
                    target=""
                    rel=""
                  >
                    <strong>

                    <p class="text-[#111827]">Blog</p>
                    </strong>
                  </a>
                </div>
                <div class="flex w-full sm:w-auto justify-center items-center sm:gap-4 gap-8 ">
                <a href="https://instagram.com/desilifter_" target="_blank"
                aria-label="Visit DesiLifter on Instagram"
                title="Visit DesiLifter on Instagram" rel="noopener noreferrer"
                >
  <LuInstagram class=" w-12 h-12 text-pink-500 hover:text-pink-700" />
</a>
                <a href="https://x.com/desilifter" target="_blank" rel="noopener noreferrer"  aria-label="Visit DesiLifter on Twitter"
  title="Visit DesiLifter on Twitter" >
  <LuTwitter class="w-12 h-12 text-blue-500 hover:text-blue-700" />
</a>

                </div>
              </div>
              <div class="mt-4">
                <p>🔖 Bookmark the site now!</p>
              </div>
            </div>
          </div>
          <div class="block text-center">
            {/* <Image
              src={coverImage}
              layout="constrained"
              width={493}
              height={616}
              alt="Qwind Hero Image (Cool dog)"
              class="mx-auto lg:mr-0 w-full drop-shadow-2xl rounded-md"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            /> */}
            {/* <p>🔖 Bookmark the site now!</p> */}
          </div>
        </div>
      </div>
    </section>
  );
});