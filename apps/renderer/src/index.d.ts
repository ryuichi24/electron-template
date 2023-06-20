import { ipc } from "shared";
/**
 * The Empty export statement should be placed here to tell the transpiler it is "external module"
 * @see https://stackoverflow.com/a/59499895/13723015
 */
export {};

/**
 * Declaration Merging to add API definition to global Window object
 * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html
 */
declare global {
  interface Window {
    API: typeof ipc;
  }
}
