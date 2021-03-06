const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
	devtool: 'eval',
	entry: {
		"home-page": "./src/assets/pages/HomePage.jsx",
		"library-page": "./src/assets/pages/LibraryPage.jsx",
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: [
					'babel-loader'
				],
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?modules=true&localIdentName=[name]__[local]"
				})
			},
			{
				test: /\.(scss)$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [{
						loader: 'css-loader', // translates CSS into CommonJS modules
					}, {
						loader: 'postcss-loader', // Run post css actions
						options: {
							plugins: function () { // post css plugins, can be exported to postcss.config.js
								return [
									require('precss'),
									require('autoprefixer')
								];
							}
						}
					}, {
						loader: 'sass-loader' // compiles SASS to CSS
					}]
				})
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							publicPath: '../',
							outputPath: 'images/'
						}
					}
				]
			}
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
	],
	resolve: {
		extensions: [".js", ".jsx"],
		modules: ["node_modules"]
	}
}