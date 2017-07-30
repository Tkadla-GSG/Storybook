const webpack = require('webpack');

// Load environment variables starts with STORYBOOK_ to the client side.
function loadEnv(options = {}) {
  const defaultNodeEnv = options.production ? 'production' : 'development';
  const env = {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || defaultNodeEnv),
    // This is to support CRA's public folder feature.
    // In production we set this to dot(.) to allow the browser to access these assests
    // even when deployed inside a subpath. (like in GitHub pages)
    // In development this is just empty as we always serves from the root.
    PUBLIC_URL: JSON.stringify(options.production ? '.' : ''),
  };

  Object.keys(process.env).filter(name => /^STORYBOOK_/.test(name)).forEach(name => {
    env[name] = JSON.stringify(process.env[name]);
  });

  return {
    'process.env': env,
  };
}

module.exports = (storybookBaseConfig, configType) => {

  // override to remove CaseSensitive plugin that is imcompatible with mews-js (URI.js)
  storybookBaseConfig.plugins = [
    new webpack.DefinePlugin(loadEnv({ production: configType === 'PRODUCTION' })),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin(),
  ];

  if (configType === 'PRODUCTION') {
    storybookBaseConfig.output = {
      filename: 'static/[name].[hash].bundle.js',
      publicPath: '',
    };
  }

  return storybookBaseConfig;
};