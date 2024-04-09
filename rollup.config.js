const commonjs = require('@rollup/plugin-commonjs');  
const resolve = require('@rollup/plugin-node-resolve');  
const typescript = require('@rollup/plugin-typescript');  
const babel = require('@rollup/plugin-babel');
const importCss = require('rollup-plugin-import-css');  
module.exports = {  
  input: 'src/index.tsx',  
  output: {  
    dir: 'dist',  
    format: 'esm',  
    sourcemap: true,  
  },  
  plugins: [  
    resolve(),  
    commonjs(),
    importCss(), 
    typescript({ tsconfig: './tsconfig.json' }),  
    babel({  
      babelHelpers: 'bundled',  
      exclude: 'node_modules/**',  
    }),  
  ],  
  external: ['react', 'react-dom'],  
};