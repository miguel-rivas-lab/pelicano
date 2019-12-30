const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = {
	// static: './static',
	static: path.resolve(__dirname, 'static'),
	build: path.resolve(__dirname, 'dist')
};

module.exports = {
	mode: 'development',
	entry: {
		'drlogic-pack': dir.static + '/drlogic-imports.js',
	},
	devtool: 'none',
	output: {
		filename: 'drlogic-pack.js',
		path: dir.build,
	}, 
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'drlogic-home.html',
			template: dir.static + '/pug-base.pug'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.pug$/,
				use: ['pug-loader']
			},
		]
	}
}