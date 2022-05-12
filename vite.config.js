import postcss from './postcss.config.js';
import {svelte} from '@sveltejs/vite-plugin-svelte';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: './public',
    plugins: [svelte()],
    css: {
        postcss,
    },
});
