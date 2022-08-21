import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'],
    outDir: 'lib',
    format: ['cjs', 'esm'],
    sourcemap: true,
    clean: true,
    dts: true,
});
