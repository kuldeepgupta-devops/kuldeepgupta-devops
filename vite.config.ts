import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/kuldeepgupta-devops/",
  },

  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});