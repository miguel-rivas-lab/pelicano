module.exports = {
    mode: 'development',
    entry: './static/drlogic-pack.js',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ]
    }
}