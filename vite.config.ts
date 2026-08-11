import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,

  vite: {
    base: "/kuldeepgupta-devops/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },

    prerender: {
      enabled: true,
      crawlLinks: true,
      autoSubfolderIndex: true,
      failOnError: true,
    },
  },
});
