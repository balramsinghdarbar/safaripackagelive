import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      "react-slick",
      "slick-carousel",
      "jquery",
      "select2"
    ],
  },
  define: {
    global: "window",
  },
  ssr: {
    noExternal: ["react-slick", "select2"]
  }
});
