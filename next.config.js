const withLess = require('@zeit/next-less');
const withCss = require('@zeit/next-css');
const withTypescript = require('@zeit/next-typescript');
const tsImportPluginFactory = require('ts-import-plugin');
const withLessExcludeAntd  = require('./next-less.config.js');
const { theme } = require("./package.json");
const _ = require('lodash');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {}
}

module.exports = withTypescript(withCss(withLessExcludeAntd({
  cssModules: true,
  distDir: "build",
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: theme
  }
})))