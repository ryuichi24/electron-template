import React from "react";

export const App: React.FC = () => {
  // trigger ipc
  window.API.helloWorld();
  return <div className="bg-@project-primary">App</div>;
};
