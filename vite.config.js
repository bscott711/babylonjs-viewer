// import { defineConfig } from 'vite'
// import path from 'path'
// import mpa from 'vite-plugin-mpa'

// @see https://vitejs.dev/config/
// export default defineConfig({
//     resolve: {
//         alias: {
//             '@': path.resolve(__dirname, ''),
//         },
//     },
//     plugins: [
//         mpa(),
//     ],
// })

// import html from '@web/rollup-plugin-html';

// export default {
//     optimizeDeps: {
//         include: ['*.js']
//     },
//     output: { dir: 'dist' },
//     plugins: [
//         // add multiple HTML plugins
//         html({ input: ['index.html', 'pages/**/*.html'], flattenOutput: false }),
//     ],
// };



import { defineConfig } from 'vite'
import {resolve} from 'path'
// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname,'index.html'),
                pages: resolve(__dirname, 'src/pages/**/*.html')},
            },
        },
    },
)