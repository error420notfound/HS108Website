import type { ComponentConfig, ShaderInstance } from 'shaders/js';

/** Design controls. Colors always resolve from the active studio CSS tokens. */
export const HERO_SHADER = {
  intensity: 0.16,
  offset: 0.2,
  motionSpeed: 0.025,
  accentContribution: 0.065,
  backgroundContribution: 0.88,
  desktop: { density: 5, angle: 0, renderScale: 0.75 },
  tablet: { density: 4, angle: 0, renderScale: 0.6 },
  mobile: { density: 3, angle: 90, renderScale: 0.5 },
} as const;

type RGB = [number, number, number];

function readPalette(field: HTMLElement) {
  // Resolving through computed style supports future color-mix CSS tokens too.
  const swatch = document.createElement('span');
  swatch.hidden = true;
  field.append(swatch);
  const token = (name: string): RGB => {
    swatch.style.color = `var(--${name})`;
    const color = getComputedStyle(swatch).color;
    const channels = color.match(/[\d.]+/g)?.map(Number);
    if (!channels) throw new Error('Unresolved studio color');
    if (color.startsWith('rgb')) return [channels[0], channels[1], channels[2]];
    if (color.startsWith('color(srgb ')) return [channels[0] * 255, channels[1] * 255, channels[2] * 255];
    throw new Error('Unsupported studio color space');
  };
  try {
    return { paper: token('paper'), deep: token('paper-deep'), ink: token('ink'), accent: token('accent') };
  } finally {
    swatch.remove();
  }
}

function mix(base: RGB, color: RGB, contribution: number): string {
  return '#' + base.map((channel, i) =>
    Math.round(channel + (color[i] - channel) * contribution).toString(16).padStart(2, '0')
  ).join('');
}

function components(field: HTMLElement, density: number, angle: number): ComponentConfig[] {
  const palette = readPalette(field);
  const paper = mix(palette.paper, palette.paper, 0);
  return [
    { type: 'SolidColor', props: { color: paper } },
    {
      type: 'BarShift', id: 'offsets',
      props: { count: density, angle, intensity: HERO_SHADER.offset, seed: 8,
        speed: HERO_SHADER.motionSpeed, edges: 'mirror' },
      children: [{
        type: 'LinearGradient',
        props: {
          // Rotate the source field with the horizontal mobile bars, rather than cropping.
          start: angle === 90 ? { x: 0, y: 0.5 } : { x: 0.25, y: 0 },
          end: angle === 90 ? { x: 1, y: 0.5 } : { x: 0.65, y: 1 }, colorSpace: 'linear',
          stops: [
            { color: paper, position: 0 },
            { color: mix(palette.paper, palette.ink, HERO_SHADER.intensity), position: 0.32 },
            { color: mix(palette.deep, palette.paper, 1 - HERO_SHADER.backgroundContribution), position: 0.55 },
            { color: paper, position: 0.8 },
            { color: paper, position: 1 },
          ],
        },
      }],
    },
    {
      type: 'LinearGradient',
      props: {
        colorA: paper, colorB: mix(palette.paper, palette.accent, HERO_SHADER.accentContribution),
        start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, colorSpace: 'linear',
        boundingBox: {
          x: { unit: 'uv', value: 0.8 }, y: { unit: 'uv', value: 0.08 },
          width: { unit: 'uv', value: 0.2 }, height: { unit: 'uv', value: 0.7 },
        },
      },
    },
  ];
}

export function mountHeroShader(field: HTMLElement): () => void {
  const canvas = field.querySelector<HTMLCanvasElement>('canvas')!;
  const hero = field.closest<HTMLElement>('.home-hero')!;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const forcedColors = matchMedia('(forced-colors: active)');
  const narrow = matchMedia('(max-width: 600px)');
  const stacked = matchMedia('(max-width: 850px)');
  let shader: ShaderInstance | undefined;
  let disposed = false;
  let generation = 0;
  let visible = true;
  let ready = false;
  let initialization = Promise.resolve();

  const syncPlayback = () => {
    if (!shader || shader.getFailureReason()) return;
    if (visible && !document.hidden) {
      shader.resume();
      if (ready) field.dataset.shaderState = 'ready';
    } else {
      shader.pause();
      if (ready) field.dataset.shaderState = 'paused';
    }
  };

  const initialize = async (ticket: number) => {
    if (disposed || ticket !== generation) return;
    shader?.destroy();
    shader = undefined;
    ready = false;
    field.dataset.shaderState = 'fallback';
    // Static plates mean no GPU runtime download or render loop for reduced motion.
    if (disposed || reducedMotion.matches || forcedColors.matches || !('gpu' in navigator) || !navigator.gpu) return;
    const layout = narrow.matches ? HERO_SHADER.mobile : stacked.matches ? HERO_SHADER.tablet : HERO_SHADER.desktop;
    // CSS upscaling bounds display density without overriding the device's global DPR.
    canvas.style.width = `${layout.renderScale * 100}%`;
    canvas.style.height = `${layout.renderScale * 100}%`;
    canvas.style.transform = `scale(${1 / layout.renderScale})`;
    try {
      const { createShader } = await import('shaders/js');
      if (disposed || ticket !== generation) return;
      const instance = await createShader(canvas, { components: components(field, layout.density, layout.angle) }, {
        colorSpace: 'srgb', disableTelemetry: true,
        onReady: () => {
          if (!disposed && ticket === generation) {
            ready = true;
            syncPlayback();
          }
        },
        onError: () => {
          if (!disposed && ticket === generation) {
            ready = false;
            field.dataset.shaderState = 'fallback';
          }
        },
      });
      if (disposed || ticket !== generation) { instance.destroy(); return; }
      shader = instance;
      syncPlayback();
    } catch {
      // Import, adapter, and initialization failures leave the designed fallback visible.
      if (!disposed && ticket === generation) field.dataset.shaderState = 'fallback';
    }
  };

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    syncPlayback();
  });
  observer.observe(hero);
  // Serialize rebuilds: a resize cannot create two devices for the same canvas.
  const restart = () => {
    const ticket = ++generation;
    initialization = initialization.then(() => initialize(ticket));
  };
  const queries = [reducedMotion, forcedColors, narrow, stacked];
  queries.forEach(query => query.addEventListener('change', restart));
  document.addEventListener('visibilitychange', syncPlayback);
  restart();

  return () => {
    disposed = true;
    ++generation;
    observer.disconnect();
    queries.forEach(query => query.removeEventListener('change', restart));
    document.removeEventListener('visibilitychange', syncPlayback);
    shader?.destroy();
    field.dataset.shaderState = 'fallback';
  };
}