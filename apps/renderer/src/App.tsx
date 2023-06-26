import React from "react";

export const App: React.FC = () => {
  // trigger ipc
  window.IPC.helloWorld();
  return <div className="bg-@project-primary">App</div>;
};
