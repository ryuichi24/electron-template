import React from "react";

export const App: React.FC = () => {
  // trigger ipc
  window.API.helloWorld();
  return <>App</>;
};
