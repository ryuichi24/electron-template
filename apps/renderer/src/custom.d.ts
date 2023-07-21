/**
 * @description
 * A type definition for a svg component
 * @references
 * - [TypeScriptでsvgファイルのインポート時の型エラーを解消する](https://qiita.com/Kairi_Yasunnde/items/dd4eeb52d140cd309da5)
 * - [Unable to import svg files in typescript](https://stackoverflow.com/a/45887328)
 */
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}
