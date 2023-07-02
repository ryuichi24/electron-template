export function getGreetService() {
  function hello() {
    console.log("Hello from the main process.");
  }

  return {
    hello,
  };
}
