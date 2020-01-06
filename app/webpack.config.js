const path = require('path');
// var HtmlWebpackPlugin = require('html-webpack-plugin');

const dir = {
	static: path.resolve(__dirname, 'static'),
	build: path.resolve(__dirname, 'dist')
};

module.exports = {
	mode: 'development',
	entry: {
		'drlogic-pack': dir.static + '/app-drlogic-pack.js',
	},
	// plugins: [
	// 	new HtmlWebpackPlugin()
	// ],
	devtool: 'none',
	output: {
		filename: 'app-drlogic.js',
		// filename: 'drlogic-pack-[contentHash].js',
		path: dir.build,
	}, 
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', // insert css into the DOM
					'css-loader', // convert css to commonjs
					'sass-loader' // covert scss to css
				]
			},
			// {
			// 	test: /\.html$/,
			// 	use: ["html-loader"]
			// }
		]
	}
}