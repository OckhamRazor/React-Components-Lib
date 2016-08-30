/**
 * Created by baobaobao on 2016/8/24.
 */
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    //为打包后的代码提供映射
    //source-map 生产环境 速度较慢
    //eval-source-map 开发环境 速度快但有有安全隐患
    devtool: 'eval-source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});