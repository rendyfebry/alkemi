const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	entry: {
		"home-page": "./src/assets/pages/Homepage.jsx",
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?modules=true"
				})
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
		]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "build/",
		filename: "js/[name].bundle.js",
		chunkFilename: "[id].bundle.js",
	},
	plugins: [
		new ExtractTextPlugin("css/[name].min.css"),
	]
}