var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './client/react_components/main.js',
  output: {
    filename: "bundle.js",
    path: __dirname + '/client'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Movie Data',
      template: './client/my_template.ejs'
    })]
}
