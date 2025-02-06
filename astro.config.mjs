import {defineConfig} from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config Config build of astro with TailwindCSS
export default defineConfig({
    output: "static",

    vite: {
        plugins: [
            tailwindcss()
        ]
    }
});