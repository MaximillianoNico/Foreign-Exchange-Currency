// dotenv
require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config) => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
};

// workbox webpack
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  webpack: (config) => {
    config.plugins.push(new WorkboxPlugin.GenerateSW());
    return config;
  },
};

// withSass
const withSass = require('@zeit/next-sass');

module.exports = withSass();
