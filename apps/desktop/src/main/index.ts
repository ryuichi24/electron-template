import path from "path";
import { BrowserWindow, app } from "electron";
import { getGreetService } from "@/main/services";

/**
 * Initialize custom global variables
 */
global.mainWindow = null;
global.assetsPath = path.join(app.getAppPath(), "assets");

const isDev = !app.isPackaged;
const rendererDevServerURL = `http://localhost:${
  process.env.VITE_DEV_SERVER_PORT || 3000
}`;

const preloadScriptPath = path.resolve(__dirname, "..", "preload", "index.js");
const rendererFilePath = path.resolve(
  __dirname,
  "..",
  "renderer",
  "index.html",
);

async function main() {
  const greetService = getGreetService();
  greetService.hello();

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
      mode: "bottom",
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
