/** Circuit data that includes id, wasm file, verification key and proving key */
export type CircuitData = {
  circuitId: string;
  wasmInstance: Function;
  verificationKey: Uint8Array;
  provingKey: Uint8Array;
};
