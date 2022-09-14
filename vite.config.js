import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                miap: resolve(__dirname, 'app/mmiap/index.html'),
                mrbc: resolve(__dirname, 'app/mrbc/index.html'),
                srbc: resolve(__dirname, 'app/srbc/index.html')
            }
        }
    }
})