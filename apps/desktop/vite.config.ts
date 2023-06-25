import { defineConfig } from "vite";
import electron from "vite-plugin-electron";

export default defineConfig(() => {
  return {
    build: {
      lib: {
        entry: "src/main/index.ts",
        name: "lib",
      },
    },
    plugins: [
      electron([
        {
          entry: "src/main/index.ts",
          vite: {
            build: {
              outDir: "dist/main",
            },
          },
        },
        {
          entry: "src/preload/index.ts",
          vite: {
            build: {
              outDir: "dist/preload",
            },
          },
        },
      ]),
    ],
  };
});
