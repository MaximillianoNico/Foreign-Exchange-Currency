module.exports = {
  collectCoverageFrom: [
    'app/**/*.js',
    'components/**/*.js',
    'pages/**/*.js',
    '!**/EXP/**',
    '!**/exp/**',
    '!app/**/_*.js',
    '!components/**/_*.js',
    '!pages/product/_*.js',
    '!**/Xstore.js',
  ],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFiles: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testURL: 'http://localhost',
};
  