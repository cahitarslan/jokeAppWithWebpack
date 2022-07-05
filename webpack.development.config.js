const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'main.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
        ],
    },
});
