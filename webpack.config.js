/**
 * Created by baobaobao on 2016/8/23.
 */

/**
 * Created by baobaobao on 2016/8/18.
 */
var webpack = require('webpack');
//动态更新html
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname+'/app/index.html',
    filename: 'index.html',
    inject: 'body' //注入到body底部
});

//分离打包css
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    //为打包后的代码提供映射
    //source-map 生产环境 速度较慢
    //eval-source-map 开发环境 速度快但有有安全隐患
    devtool: 'eval-source-map',
    entry: [
        './app/index.js'
    ],
    //默认拓展名匹配
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude:/node_modules/, loader:"babel-loader"},
            {test: /\.css$/, exclude:/node_modules/, loader: "style-loader!css-loader", loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            //打包url(..)图片 小于8k直接打包成 base64编码
            {test: /\.(png|jpg)$/, exclude:/node_modules/,loader: 'file-loader?limit=8192&name=assets/images/[name].[ext]'}

        ]
    },
    output: {
        filename: 'index_bundle.js',
        path: __dirname+'/dist'
    },
    plugins: [
        HTMLWebpackPluginConfig,
        new ExtractTextPlugin("[name].css"),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};