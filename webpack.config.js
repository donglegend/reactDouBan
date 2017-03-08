const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`,
	filename: "index.html",
	inject: "body"
})

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: [
		"./src/index.js"
	],
	output: {
		path: `${__dirname}/dist`,
		filename: "main.js"
	},
	resolve: {
		alias: {
			"api": path.resolve(__dirname, "./api"),
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"

		}, {
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // creates style nodes from JS strings
			}, {
				loader: "css-loader" // translates CSS into CommonJS
			}, {
				loader: "sass-loader" // compiles Sass to CSS
			}]
		}, {
			test: /\.json$/,
			use: 'json-loader'
		}]
	},
	devServer: {
		inline: true,
		port: 4003
	},
	plugins: [
		HTMLWebpackPluginConfig,
		new UglifyJSPlugin()
	]
}