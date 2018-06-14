const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
      app: './src/index.js',
    },
     output: {
        path: __dirname + "/dist",
        filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
          test: /\.css$/,
         use: [
            'style-loader',
           'css-loader'
         ]
       }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};