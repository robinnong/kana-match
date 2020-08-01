const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist',
    }, 
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'src'), 
        port: 3000
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                ]
            },  
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ],
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new VueLoaderPlugin()
    ]
};