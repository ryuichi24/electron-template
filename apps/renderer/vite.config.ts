import { defineConfig, loadEnv, UserConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: mode === "production" ? "./" : "/",
    build: {
      sourcemap: "inline",
      outDir: path.resolve(__dirname, "dist"),
    },
    root: "src",
    plugins: [react()],
    server: {
      port: env.VITE_DEV_SERVER_PORT || 3000,
    },
  } as UserConfig;
});
