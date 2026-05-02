import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

const isDev = process.env.NODE_ENV === "development";
let port = 3000;
if (isDev) {
  const rawPort = process.env.PORT;
  if (!rawPort) {
    throw new Error("PORT environment variable is required but was not provided.");
  }
  port = Number(rawPort);
  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }
}

const basePath = "/Warrington-Mathews-Policies/"; // For GitHub Pages

export default defineConfig({
  base: basePath,
  plugins: [
    mockupPreviewPlugin(),
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
});