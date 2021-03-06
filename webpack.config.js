const path = require('path');
const env = require('./env.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        index: './public/js/index.js',
        page: './public/js/page.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/js/webpack-' + env.version),
        filename: '[name].js'
    },
    plugins: [
        new UglifyJsPlugin()
    ]
};