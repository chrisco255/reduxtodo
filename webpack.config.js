var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
	entry: path.resolve(ROOT_PATH, 'client/main.js'),
	output: {
		path: path.resolve(ROOT_PATH, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css', 'less'],
				include: path.resolve(ROOT_PATH, 'client')
			}
		]
	},
	devServer: {
		colors: true,
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlwebpackPlugin({
			title: 'Kanban app'
		})
	]
};