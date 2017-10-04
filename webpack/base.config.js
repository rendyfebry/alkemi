const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")


module.exports = {
	"module": {
		"loaders": [
			{
				"test": /\.(js|jsx)$/,
				"exclude": "/node_modules/",
				"loader": "babel-loader"
			}
		]
	},

	"plugins": [
		new webpack.IgnorePlugin(/(locale)/, /node_modules.+(momentjs)/),
	],

	"externals": {
		"jquery": "jQuery"
	}
}