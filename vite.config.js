import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: "#app",
      },
    }),
  ],
  base:
    process.env.NODE_ENV === "production"
      ? "/fe-mentor-newsletter-sign-up/"
      : "/",
});
