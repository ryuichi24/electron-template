import { contextBridge } from "electron";
import { IPC } from "@project/shared";
// expose IPC to renderer process
contextBridge.exposeInMainWorld("IPC", IPC);
