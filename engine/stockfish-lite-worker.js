const params = new URL(self.location.href).searchParams;
const wasmUrl = params.get("wasm");

if (wasmUrl) {
  self.STOCKFISH_WASM_URL = wasmUrl;
}

importScripts(
  new URL("./stockfish-19-lite-single.js", self.location.href).href,
);
