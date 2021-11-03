const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const DotEnvPlugin = require('dotenv-webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(jpg|gif|svg|png)$/,
        use: {
          loader: 'file-loader',
          options: 'name/assets/[hash].[ext]',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      filename: 'remoteEntry.js',
      remotes: {
        ads: 'ads@http://localhost:8081/remoteEntry.js',
        references: 'references@http://localhost:8082/remoteEntry.js',
      },
      exposes: {},
      shared: require('./package.json').dependencies,
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new DotEnvPlugin(),
    new MiniCssExtractPlugin(),
  ],
}
