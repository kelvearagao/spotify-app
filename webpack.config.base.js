const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => ({
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.[hash].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: `./.env.${env.ENVIRONMENT}`
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: 'src/assets/favicon.png'
    })
  ]
})
