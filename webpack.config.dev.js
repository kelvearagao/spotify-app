const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = env => merge(
  baseConfig(env), {
    mode: 'development',
    devServer: {
      port: 3000,
      historyApiFallback: true
    },
    devtool: 'source-map'
  }
)