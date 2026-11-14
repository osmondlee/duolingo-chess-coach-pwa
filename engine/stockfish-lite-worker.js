self.addEventListener(
  "message",
  (event) => {
    if (event.data?.type !== "stockfish-wasm-init") {
      return;
    }

    self.STOCKFISH_WASM_URL = event.data.wasmUrl;
    importScripts(
      new URL("./stockfish-19-lite-single.js", self.location.href).href,
    );
  },
  { once: true },
);
