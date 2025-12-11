import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    i18n: {
        defaultLocale: "nl",
        locales: ["nl", "en", "de"],
        routing: {
            prefixDefaultLocale: true
        }
    },

    vite: {
        plugins: [tailwindcss()]
    }
});