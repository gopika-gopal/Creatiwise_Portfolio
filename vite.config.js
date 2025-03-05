import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react()], // Use React plugin instead of rewriteAll()
  base: "/Creatiwise_Portfolio/", // Ensure the correct repo name
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
