import { createSpaConfig } from '@open-wc/building-rollup';
import copy from 'rollup-plugin-copy';
import merge from 'deepmerge';

const baseConfig = createSpaConfig({
  // use the outputdir option to modify where files are output
  // outputDir: 'dist',

  // development mode creates a non-minified build for debugging or development
  developmentMode: process.env.ROLLUP_WATCH === 'true',

  // set to true to inject the service worker registration into your index.html
  injectServiceWorker: false,
  
});

export default merge(baseConfig, {
  input: './index.html',
  output: {
    sourcemap: true,
  },
  plugins: [
    copy({
      targets: [
        { src: 'assets/fonts/*.*tf', dest: 'dist/assets/fonts' },
        { src: 'assets/images/**/*', dest: 'dist/assets/images' },
        { src: 'assets/styles/**/*', dest: 'dist/assets/styles' },
        { src: 'assets/*.json', dest: 'dist/assets' },
        { src: 'confirmation.html', dest: 'dist' },
        { src: 'tags.html', dest: 'dist' },
        { src: 'site.webmanifest', dest: 'dist' },
      ],
    }),
  ],
});
