import { fileURLToPath } from 'node:url';

/**
 * Shaders 4's JS renderer imports the whole component catalog. Restrict only that
 * catalog lookup to this hero's official components, retaining the shipped renderer.
 * Unmatched imports retain normal resolution. Recheck this hook on package upgrades.
 */
export function heroShaderComponents() {
  const registry = fileURLToPath(new URL('./shader-components.ts', import.meta.url));
  return {
    name: 'hs108-hero-shader-components',
    enforce: 'pre',
    resolveId(source, importer) {
      const owner = importer?.replaceAll('\\', '/');
      const jsCatalog = source === '../core/registry.js' && owner?.endsWith('/shaders/dist/js/createShader.js');
      const coreCatalog = /^\.\/shaderRegistry-[\w-]+\.js$/.test(source) && owner?.endsWith('/shaders/dist/core/index.js');
      if (jsCatalog || coreCatalog) {
        return registry;
      }
    },
  };
}