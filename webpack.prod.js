const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


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
        loader: 'url-loader?limit=1024&name=images/[name].[ext]'
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
  ]
};