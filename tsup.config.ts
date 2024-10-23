import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["/app/src/index.ts"],
  format: ["cjs"],
  dts: false,
  splitting: false,
  sourcemap: false,
  clean: true,
});
