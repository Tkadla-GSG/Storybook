const webpack = require('webpack');

module.exports = (storybookBaseConfig, configType) => {

  // override to remove CaseSensitive plugin that is imcompatible with mews-js (URI.js)
  storybookBaseConfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
  ];

  return storybookBaseConfig;
};