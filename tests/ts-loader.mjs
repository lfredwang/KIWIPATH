import { registerHooks } from 'node:module';
import { existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

/**
 * Lightweight zero-dependency ESM resolver hook for Node v26 native TypeScript tests.
 * Resolves extensionless relative imports (e.g. `../data/jobs/jobsData` -> `../data/jobs/jobsData.ts`).
 */
registerHooks({
  resolve(specifier, context, nextResolve) {
    if (
      (specifier.startsWith('./') || specifier.startsWith('../')) &&
      !path.extname(specifier) &&
      context.parentURL
    ) {
      const parentDir = path.dirname(fileURLToPath(context.parentURL));
      const candidates = [
        path.resolve(parentDir, `${specifier}.ts`),
        path.resolve(parentDir, `${specifier}.tsx`),
        path.resolve(parentDir, specifier, 'index.ts'),
      ];
      for (const candidate of candidates) {
        if (existsSync(candidate)) {
          return nextResolve(pathToFileURL(candidate).href, context);
        }
      }
    }
    return nextResolve(specifier, context);
  },
});
