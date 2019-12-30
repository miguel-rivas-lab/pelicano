// var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './static/drlogic-imports.js',
    output: {
        filename: 'drlogic-pack.js',
        // filename: 'drlogic-pack-[contentHash].js',
        // path: path.resolve(__dirname, 'dist'),
    },
    // plugins: [new HtmlWebpackPlugin()],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    }
}