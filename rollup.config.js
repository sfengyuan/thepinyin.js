import { terser } from 'rollup-plugin-terser'
export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/es/index.js',
      format: 'es',
      name: 'pinyinjs'
    },
    plugins: [
      terser()
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/iife/index.js',
      format: 'iife',
      name: 'pinyinjs'
    },
    plugins: [
      terser()
    ]
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/umd/main.js',
      format: 'umd',
      name: 'pinyinjs'
    },
    plugins: [
      terser()
    ]
  }
]
