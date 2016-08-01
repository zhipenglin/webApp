/**
 * Created by ifchangetoclzp on 2016/8/1.
 */
var baseConfig=require('./webpack.base.config.js');
var merge = require('webpack-merge');
var fs=require('fs');
var path=require('path');
var variable=require('./webpack.var.config');
var UglifyJsPlugin=require('webpack').optimize.UglifyJsPlugin;
var CommonsChunkPlugin=require('webpack').optimize.CommonsChunkPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports=merge(baseConfig,{
    output:{
        filename:"[name].[hash:7].js"
    },
    plugins:[
        new ExtractTextPlugin("[name].[hash:7].css"),
        new CommonsChunkPlugin({
            name:'lib',
            filename:'lib.[hash:7].js'
        }),
        function(){
            this.plugin('done',function(stats){
                stats = stats.compilation.getStats().toJson({
                    hash: true,
                    publicPath: true,
                    assets: true,
                    chunks: false,
                    modules: false,
                    source: false,
                    errorDetails: false,
                    timings: false
                });
                var json = {}, chunk;
                for (var key in stats.assetsByChunkName) {
                    if (stats.assetsByChunkName.hasOwnProperty(key)) {
                        chunk = stats.assetsByChunkName[key];
                        json[key] = chunk;
                    }
                }

                fs.writeFileSync(
                    path.join(variable.DIST, 'manifest.json'),
                    JSON.stringify(json, null, 2)
                );
            });
        },
        new UglifyJsPlugin({minimize:true})]
});