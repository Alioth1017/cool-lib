// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import html from "@rollup/plugin-html";
import multi from "@rollup/plugin-multi-entry";
export default {
  // 核心选项
  input: ["./src/index.js"], // 必须
  output:
    // {
    //   dir: "dist",
    // },
    [
      {
        file: "./dist/cool-lib.es.js", // 必须
        format: "es", // 必须,
        // sourcemap: true,
        name: "CoolLib",
      },
      {
        file: "./dist/cool-lib.js", // 必须
        format: "umd", // 必须,
        // sourcemap: true,
        name: "CoolLib",
      },
    ],
  plugins: [resolve(), commonjs(), babel(), json(), html(), multi()],
  // external: [ "xxx"], // 标注外部引用模块
};
