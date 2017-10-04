const merge = require('webpack-merge')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const baseConfig = require('./base.config.js')

module.exports = merge(baseConfig, {
	"devtool": "eval",
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
		"activity-page": "./protected/resources/assets/components/ActivityPage/Activity.jsx",
		"audience-page": "./protected/resources/assets/components/AudiencePage/Audience.jsx",
		"campaign-create-page": "./protected/resources/assets/components/CampaignCreate/CampaignCreate.jsx",
		"landing-page-dashboard": "./protected/resources/assets/components/LandingPage/dashboard/index.jsx",
		"landing-page-builder": "./protected/resources/assets/components/LandingPage/builder/builder.js",
		"product-page": "./protected/resources/assets/components/ProductPage/Product.jsx",
		"report-page": "./protected/resources/assets/components/ReportPage/Report.jsx"
	},
	"output": {
		"path": path.resolve(__dirname, "../build/"),
		"publicPath": "build/",
		"filename": "js/[name].bundle.js",
		"chunkFilename": "[id].bundle.js",
	},
	"plugins": [
		new ExtractTextPlugin("css/[name].min.css"),
	],
})