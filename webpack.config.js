const path = require('path');  
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
        contentBase: path.join(__dirname, 'dist'), 
        port: 3000
    }, 
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
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
        new VueLoaderPlugin()
    ]
};