import { defineConfig } from 'vite'
import path from 'path'
import mpa from 'vite-plugin-mpa'

// @see https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, ''),
        },
    },
    plugins: [
        mpa(),
    ],
})