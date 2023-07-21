import path from "path";
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
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    },
    plugins: [
      electron([
        {
          entry: "src/main/index.ts",
          vite: {
            build: {
              outDir: "dist/main",
            },
            resolve: {
              alias: [
                { find: "@", replacement: path.resolve(__dirname, "./src") },
              ],
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
