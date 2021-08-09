const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry : './src/client/index.js',
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    host: 'localhost',
    contentbase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 8080,
    publicPath: '/',
    inline: true,
    proxy: {
      '/': {
        target: 'http://localhost:3000'
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/i,
        exclude: [/node_modules/, __dirname + './splash'],
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript'
            ]
          }
        }
      },
      {
        test: /\.[sac]ss$/i,
        use: ['css-loader'],
      }    
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      inject: true,
      filename: 'index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  }
}