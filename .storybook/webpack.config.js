const genDefaultConfig = require('@storybook/angular/dist/server/config/defaults/webpack.config.js');
const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.
  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('ts-loader')
  });
  defaultConfig.resolve.extensions.push('.ts', '.tsx');
  return defaultConfig;
};

module.exports = (baseConfig, env) => {
  const config = genDefaultConfig(baseConfig, env);
  // Overwrite .css rule
  const cssRule = config.module.rules.find(rule => rule.test && rule.test.toString() === '/\\.css$/');
  if (cssRule) {
    cssRule.exclude = /\.component\.css$/;
  }
  // Add .scss rule
  config.module.rules.unshift({
    test: /\.scss$/,
    loaders: ['raw-loader', 'sass-loader'],
  });
  return config;
};

