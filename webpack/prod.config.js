const merge = require('webpack-merge');
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
	"devtool": "cheap-module-source-map", // for production

	"loaders": [
		{
			"test": /\.sass$/,
			"loader": ExtractTextPlugin.extract({
				"fallback": "style-loader",
				"use": "css-loader?modules=true&localIdentName=[name]__[local]--[hash:base64:6]&minimize=true"
			})
		},
		{
			"test": /\.css$/,
			"loader": ExtractTextPlugin.extract({
				"fallback": "style-loader",
				"use": "css-loader?modules=false&minimize=true"
			})
		},
	],

	"entry": {
	},

	"output": {
		"path": path.resolve(__dirname, "../build/"),
		"publicPath": "build/[hash]/",
		"filename": "js/[name]-[hash].bundle.js",
		"chunkFilename": "[id]-[hash].bundle.js",
	},

	"plugins": [
		new ExtractTextPlugin("css/[name]-[contenthash].min.css")
	]
})