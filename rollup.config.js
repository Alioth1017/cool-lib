// rollup.config.js
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
export default {
  // 核心选项
  input: ["./src/index.js"], // 必须
  output: {
    // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file: "./dist/bundle.umd.js", // 必须
    format: "umd", // 必须,
    sourcemap: true,
    name: "CoolLib",
  },
  plugins: [resolve(), commonjs(), babel(), json()],
  // external: [ "xxx"], // 标注外部引用模块
};
