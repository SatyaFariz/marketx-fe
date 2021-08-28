const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack')

module.exports = {
  entry: './server.js',

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server-build'),
    filename: 'index.js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new webpack.DefinePlugin({
      'process.env.BROWSER': JSON.stringify(true)
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"]
      // },
      {
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: ['file-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ]
  }
};