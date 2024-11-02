const fs = require('fs');
const DIST_PATH = '_sass/dist';

fs.rm(DIST_PATH, { recursive: true, force: true }, (err) => {
  if (err) {
    throw err;
  }

  fs.mkdirSync(DIST_PATH);
});

module.exports = {
  content: ['_includes/**/*.md', '_includes/**/*.html', '_layouts/**/*.html', '_javascript/**/*.js'],
  css: ['assert/css/*.css'],
  keyframes: true,
  variables: true,
  output: `${DIST_PATH}/bootstrap.css`,
  // The `safelist` should be changed appropriately for future development
  safelist: {
    standard: [/^collaps/, /^w-/, 'shadow', 'border', 'kbd'],
    greedy: [/^col-/, /tooltip/]
  }
};
