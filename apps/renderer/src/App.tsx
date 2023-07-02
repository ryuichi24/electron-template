import React from "react";
import Button from "@/components/Button";

export const App: React.FC = () => {
  // trigger ipc
  window.IPC.helloWorld();
  return (
    <div className="bg-@project-primary flex justify-center items-center h-screen flex-col gap-5">
      <h1>Electron Template</h1>
      <Button onClick={() => alert("Hello")}>Greet</Button>
    </div>
  );
};
