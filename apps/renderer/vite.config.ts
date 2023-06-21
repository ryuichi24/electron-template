import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig((env) => ({
  base: env.mode === "production" ? "./" : "/",
  build: {
    sourcemap: "inline",
    outDir: path.resolve(__dirname, "dist"),
  },
  root: "src",
  plugins: [react()],
  server: {
    port: 3000,
  },
}));
