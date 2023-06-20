import { contextBridge } from "electron";
import { ipc } from "shared";
// expose API to renderer process
contextBridge.exposeInMainWorld("API", ipc);
