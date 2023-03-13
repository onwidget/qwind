import { component$, useStore } from "@builder.io/qwik";

import video from '../../assets/video/Bestattungsvorsorge_Tirol-Vorarlberg.mp4'
import backGroundImage from '../../assets/images/startseite_video_preview-960x732.jpg'

export default component$(() => {
    const popUpState = useStore({
        value: false
    });

    return (
        
        <section class="bg-white">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <div class="mt-4 md:mt-0">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">WIENER VEREIN</h2>
                <p class="mb-6 font-light text-gray-500 md:text-lg">Ein Todesfall in der Familie stellt eine absolute Ausnahmesituation dar. Emotional – und in vielen Fällen auch finanziell! Ein Mensch verabschiedet sich endgültig und unwiderruflich. Und zurück bleibt Trauer und Ratlosigkeit.
                    In dieser Situation ist es gut zu wissen, wohin man sich wenden kann. Der WIENER VEREIN hilft, rasch und unbürokratisch – durch einfühlsame Beratung, operatives Handeln und die sofortige Bereitstellung finanzieller Mittel.</p>
                <a href="#" class="inline-flex items-center text-white font-bold bg-third hover:bg-fourth focus:ring-4 focus:ring-primary-300 rounded-lg text-xl px-5 py-2.5 text-center mb-4">
                    Jetzt anfragen
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
                </div>
                <div class="relative rounded-xl overflow-hidden">
                <img class="w-full" src={backGroundImage} alt="placeholder image" />
                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button aria-label="Open Video PopUp" onClick$={() => (popUpState.value = true)} id="playButton" class="flex items-center justify-center bg-third rounded-full h-16 w-16 transition duration-500 ease-in-out transform hover:scale-110">
                    <svg class="pl-1" width="30" height="24" fill="white" stroke="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z"/></svg>
                    </button>
                </div>
                </div>
            </div>
            {popUpState.value &&
            <qwik-fragment>
            <div class="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
              <div class="fixed inset-0 transition-opacity" aria-hidden="true" onClick$={() => (popUpState.value = false)}>
                <div class="absolute inset-0 bg-black opacity-75"></div>
              </div>
              <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div class="sm:flex sm:items-start">
                  <div class="w-full sm:mx-auto">
                    <div class="aspect-w-16 aspect-h-9">
                      <video width="750" height="500" controls autoPlay>
                        <source src={video} type="video/mp4"/>
                      </video>
                    </div>
                  </div>
                </div>
                <button onClick$={() => (popUpState.value = false)} type="button" class="absolute top-0 right-0 bg-fourth text-white w-8 h-8 rounded-full flex items-center justify-center mt-2 mr-2 focus:outline-none" aria-label="Close">
                  <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>
          </qwik-fragment>          
            }

            </section>
    )
})