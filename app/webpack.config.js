const path = require('path');

const dir = {
	static: path.resolve(__dirname, 'static'),
	build: path.resolve(__dirname, 'dist')
};

module.exports = {
	mode: 'development',
	entry: {
		'drlogic-pack': dir.static + '/app-drlogic.js',
	},
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
		]
	}
}