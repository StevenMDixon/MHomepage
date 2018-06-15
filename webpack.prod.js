const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { ImageminWebpackPlugin } = require("imagemin-webpack");
// Before importing imagemin plugin make sure you add it in `package.json` (`dependencies`) and install
const imageminGifsicle = require("imagemin-gifsicle");
const plugins = [imageminGifsicle()];
module.exports =  {
   entry: {
      app: './src/index.js',
    },
     output: {
        path: __dirname + "/docs",
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
  devtool: 'source-map',
  plugins: [
     new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
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
	 new ImageminWebpackPlugin({
      imageminOptions: {
        plugins
      }
    })
  ]
};