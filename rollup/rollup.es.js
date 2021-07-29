import base from './rollup.base';
import postcss from 'rollup-plugin-postcss';
import {terser} from 'rollup-plugin-terser';

export const production = {
    ...base,
    output: {
        dir: 'build',
        format: 'es',
        chunkFileNames: '[name].[format].js',
        entryFileNames: '[name].[format].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: false,
        exports: 'named',
        plugins: [terser()],
    },
    plugins: [
        ...base.plugins(),
        postcss({minimize: true}),
    ],
};

export const development = {
    ...base,
    output: {
        dir: 'build',
        format: 'es',
        chunkFileNames: '[name].[format].js',
        entryFileNames: '[name].[format].js',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: true,
        exports: 'named',
    },
    plugins: [
        ...base.plugins(),
        postcss({sourceMap: true}),
    ],
}