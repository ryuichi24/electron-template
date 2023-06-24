import { contextBridge } from "electron";
import { ipc } from "@project/shared";
// expose API to renderer process
contextBridge.exposeInMainWorld("API", ipc);
