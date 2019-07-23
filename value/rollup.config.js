import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
    input : 'lib/index.js',

    output : {
        file   : 'min/index.js',
        format : 'umd',
        name   : '@linked/react',
        exports: 'named',
        sourcemap: true,
    },
    plugins: [
        resolve(), //for support of `import X from "directory"` rather than verbose `import X from "directory/index"`
        uglify()
    ]
};
