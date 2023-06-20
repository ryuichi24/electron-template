import path from "path";
import { BrowserWindow, app } from "electron";

const rootDir = path.resolve(
  path.dirname(path.dirname(path.dirname(path.dirname(__dirname)))),
);
const isDev = !app.isPackaged;
const rendererDevServerURL = `http://localhost:${
  process.env.VITE_DEV_SERVER_PORT || 3000
}`;

const preloadScriptPath = path.resolve(
  rootDir,
  "apps",
  "desktop",
  "dist",
  "preload",
  "index.js",
);
const rendererFilePath = path.resolve(
  rootDir,
  "apps",
  "renderer",
  "dist",
  "index.html",
);

/**
 * Initialize custom global variables
 */
global.mainWindow = null;

async function main() {
  await app.whenReady();

  await createMainWindow().catch(shutDown);
}

main().catch(shutDown);

async function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: isDev ? 1820 : 1700,
    height: 1080,
    resizable: isDev,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: preloadScriptPath,
    },
  });

  if (isDev) {
    mainWindow.webContents.openDevTools({
      mode: "undocked",
    });

    await mainWindow.loadURL(rendererDevServerURL);
  } else {
    await mainWindow.loadFile(rendererFilePath);
  }
}

function shutDown(error: Error) {
  console.error(error);
  process.exit(1);
}
