import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { globSync } from 'glob';
import type { Plugin } from 'vite';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// Plugin to add 'use client' directive to chunks that use client-side hooks
function addUseClientDirective(): Plugin {
  return {
    name: 'add-use-client',
    generateBundle(options, bundle) {
      for (const [fileName, chunk] of Object.entries(bundle)) {
        if (chunk.type === 'chunk' && fileName.endsWith('.js')) {
          // Check if the chunk already has 'use client'
          if (chunk.code.startsWith("'use client'")) {
            continue;
          }

          // Check if the chunk contains client-side hooks
          const clientHooks = [
            'useState',
            'useEffect',
            'useLayoutEffect',
            'useRef',
            'useCallback',
            'useMemo',
            'useContext',
            'useReducer',
            'useImperativeHandle',
            'useTransition',
            'useDeferredValue',
            'createContext',
          ];

          let hasClientHooks = false;
          for (const hook of clientHooks) {
            // Check for imports of client hooks (named imports)
            const importRegex = new RegExp(
              `import\\s*\\{[^}]*\\b${hook}\\b[^}]*\\}\\s*from\\s*['"]react['"]`,
              'g',
            );
            // Check for usage of client hooks (e.g., s.useState where s is React)
            const usageRegex = new RegExp(`\\b\\w+\\.${hook}\\b`, 'g');

            if (importRegex.test(chunk.code) || usageRegex.test(chunk.code)) {
              hasClientHooks = true;
              break;
            }
          }

          // If client hooks are found, add 'use client' directive
          if (hasClientHooks) {
            chunk.code = `'use client';\n${chunk.code}`;
          }
        }
      }
    },
  };
}

export default defineConfig(({ mode }) => {
  const config = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };

  if (mode === 'lib') {
    return {
      ...config,
      plugins: [
        react(),
        tailwindcss(),
        libInjectCss(),
        addUseClientDirective(),
        dts({
          exclude: ['src/index.tsx', 'src/__cosmos__/**/*'],
          tsconfigPath: 'tsconfig.app.json',
        }),
      ],
      build: {
        lib: {
          entry: path.resolve(__dirname, 'src/main.ts'),
          formats: ['es'],
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'react/jsx-runtime', 'tailwindcss'],
          // https://rollupjs.org/configuration-options/#input
          input: Object.fromEntries(
            globSync([
              'src/components/**/*.tsx',
              'src/style.css',
              'src/main.ts',
            ]).map((file) => {
              // This remove `src/` as well as the file extension from each
              // file, so e.g. src/nested/foo.js becomes nested/foo
              const entryName = path.relative(
                'src',
                file.slice(0, file.length - path.extname(file).length),
              );
              // This expands the relative paths to absolute paths, so e.g.
              // src/nested/foo becomes /project/src/nested/foo.js
              const entryUrl = fileURLToPath(new URL(file, import.meta.url));
              return [entryName, entryUrl];
            }),
          ),
          output: {
            entryFileNames: '[name].js',
            assetFileNames: 'assets/[name][extname]',
            globals: {
              react: 'React',
              'react-dom': 'React-dom',
              'react/jsx-runtime': 'react/jsx-runtime',
              tailwindcss: 'tailwindcss',
            },
          },
        },
      },
    };
  }

  return {
    ...config,
    plugins: [react(), tailwindcss()],
  };
});
