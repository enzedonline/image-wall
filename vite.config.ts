import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(import.meta.dirname, 'src/index.ts'),
            name: 'ImageWall',
            fileName: (format) => `imagewall.${format}.js`,
            formats: ['es', 'umd'],
        },
        minify: 'oxc',
        rolldownOptions: {
            // Exclude dependencies that shouldn’t be bundled (none yet)
            external: [],
            output: {
                globals: {},
                assetFileNames: (assetInfo) => {
                    // rename Vite's default 'style.css' output
                    if (assetInfo.names.includes('style.css')) return 'imagewall.css';
                    return assetInfo.names[0]!;
                }
            },
        },
    },
});
