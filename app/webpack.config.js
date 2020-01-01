const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const dir = {
	static: path.resolve(__dirname, 'static'),
	build: path.resolve(__dirname, 'dist')
};

const pugApps = [
	{
		name: "drlogic",
		views: [
			"home",
			"test"
		]
	}
];

function getTemplateDir(appName, view, ext = "html") {
	return __dirname + '/app_' + appName + '/templates/' + appName + '-' + view + '.' + ext;
}

function getPugViews() {
	let result;
	pugApps.forEach(function(pugApp) {
		pugApp.views.forEach(function(view) {
			result += new HtmlWebpackPlugin({
				filename: getTemplateDir(pugApp.name, view),
				template: getTemplateDir(pugApp.name, view, "pug")
			});
		})
	});
	return result;
}

module.exports = {
	mode: 'development',
	entry: {
		'drlogic-pack': dir.static + '/drlogic-imports.js',
	},
	devtool: 'none',
	output: {
		filename: 'drlogic-pack.js',
		// filename: 'drlogic-pack-[contentHash].js',
		path: dir.build,
	}, 
	plugins: [
		// new ExtractTextPlugin('css/styles.css'),
		getPugViews
	],
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
			{
				test: /\.pug$/,
				use: [
					{
						loader: 'pug-loader',
						options: {
							pretty: true,
						},
					},
				],
			},
		]
	}
}