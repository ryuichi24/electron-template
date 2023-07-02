import { BrowserWindow } from "electron";

// https://stackoverflow.com/a/53981706
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_DEV_SERVER_PORT: string;
    }
  }
}

declare global {
  /**
   * A main instance of the application window
   */
  var mainWindow: BrowserWindow | null;
  /**
   * A path to the asset folder
   */
  var assetsPath: string;
}
