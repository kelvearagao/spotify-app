const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = env => merge(
  baseConfig(env), {
    mode: 'production'
  }
)