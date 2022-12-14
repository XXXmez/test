const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.[hash].js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]ss)$/i,
                use: ['style-loader', 'css-loader', "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|webp|gif|svg|ico)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                    name: '[name].[ext]'
                },
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
}