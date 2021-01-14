import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import json from '@rollup/plugin-json'
import css from 'rollup-plugin-css-only'

export default {
  input: './src/components/index.ts',
  output: {
    format: 'cjs',
    dir: 'build',
  },

  external: ['react', 'react-dom', 'react-is'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    json(),
    css({ output: 'index.css' }),
  ],
}
