const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports =  {
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
    // Extract imported CSS into own file
    //new ExtractTextPlugin('[name].bundle.css'),
    // Minify JS
    new UglifyJsPlugin({
	    uglifyOptions: {
	      output: {
	        comments: false,
	        beautify: false,
	      },
	      compress: true,
	      warnings: false
	    }
	}),
    // Minify CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
};