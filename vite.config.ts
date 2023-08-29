import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import { SITE } from './src/config.mjs';
import {imagetools} from "vite-imagetools";

export default defineConfig(() => {
    return {
        base: SITE.basePathname,
        plugins: [
            qwikCity({
                trailingSlash: SITE.trailingSlash,
            }),
            qwikVite(),
            tsconfigPaths(),
            imagetools()
        ],
        preview: {
            headers: {
                'Cache-Control': 'public, max-age=600',
            },
        }
    };
});
