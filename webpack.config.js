const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
module.exports = {
    mode: 'development', // or 'production' when ready for deployment
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './'),
    },
    plugins: [
        new NodePolyfillPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], //always put style-loader before css-loader
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                },
            },
        ],
    },
};