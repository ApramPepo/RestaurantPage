const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devtool: "eval-source-map",
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        watchFiles: ['./src/template.html', './src/**/*'],
        port: 8000,
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ],
    },
}