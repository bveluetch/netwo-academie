/**
 * Explicit PostCSS config ensures the build doesn't walk up the directory tree
 * and accidentally pick up a global Tailwind/PostCSS setup from the host
 * machine. We keep the defaults Next.js ships with so we retain vendor prefixing
 * and modern CSS polyfills without pulling in Tailwind.
 */
export default {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    }
  }
};
