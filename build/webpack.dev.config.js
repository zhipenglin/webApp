/**
 * Created by ifchangetoclzp on 2016/8/1.
 */
var baseConfig=require('./webpack.base.config.js');
var merge = require('webpack-merge');
var CommonsChunkPlugin=require('webpack').optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports=merge(baseConfig,{
    output:{
        filename:"[name].js"
    },
    plugins:[
        new ExtractTextPlugin("[name].css"),
        new CommonsChunkPlugin({
            name:'lib',
            filename:'lib.js'
        })
    ],
    devtool: 'eval-source-map'
});