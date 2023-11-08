import { defineConfig } from "vite";
export default defineConfig({
    plugins: [],
    resolve: {
        alias: [
            {find: '@declarative-hud', replacement: '/../../declarative-hud/src/views'}
        ]
    }
})