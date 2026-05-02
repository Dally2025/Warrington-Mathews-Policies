import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const port = Number(process.env.PORT) || 3000;
const basePath = process.env.BASE_PATH || "/Warrington-Mathews-Policies/";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";

  return {
    base: basePath,
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: isDev
      ? {
          port,
          host: "0.0.0.0",
        }
      : undefined,
    build: {
      outDir: "dist",
      emptyOutDir: true,
    },
  };
});