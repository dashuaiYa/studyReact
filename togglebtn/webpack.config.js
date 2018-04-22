const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: __dirname + '/app/entry.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle-[hash].js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.temp.html'
        })
    ]
}