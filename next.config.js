const withLess = require('@zeit/next-less');
const withTypescript = require('@zeit/next-typescript');
const tsImportPluginFactory = require('ts-import-plugin');
const withLessExcludeAntd  = require('./next-less.config.js');
const { theme } = require("./package.json");
const _ = require('lodash');

// fix: prevents error when .less files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withTypescript(withLessExcludeAntd({
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
}))
// _.flow([withTypescript,withLess,withCss])({cssModules: true},webpackConfig);