import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'src/index.ts',  // 入口文件
    output: [
        {
            file: 'dist/index.js',  // CommonJS格式
            format: 'cjs',
            sourcemap: true,
        },
        {
            file: 'dist/index.esm.js',  // ES模块格式
            format: 'esm',
            sourcemap: true,
        },
    ],
    plugins: [
        resolve(),
        commonjs(),
        json(),
        typescript({ useTsconfigDeclarationDir: true }),
    ],
    external: ['react', 'react-dom', 'next'],  // 外部依赖，不打包进去
};