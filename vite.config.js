import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    css: {
        // CSS preprocessing configuration
        modules: {
            localsConvention: 'camelCase'
        }
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css']
    },
    publicDir: 'public'
});