import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sourceMaps from "rollup-plugin-sourcemaps";
import json from "rollup-plugin-json";

const pkg = require("./package.json");

export default {
  input: `src/index.js`,
  output: [
    {
      file: pkg.main,
      format: "es",
      sourcemap: true
    }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: ["cornerstone-tools"],
  watch: {
    include: "src/**"
  },
  plugins: [
    // Allow json resolution
    json(),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve(),
    // Resolve source maps to the original source
    sourceMaps(),
  ]
};
