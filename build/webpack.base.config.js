/**
 * Created by ifchangetoclzp on 2016/8/1.
 */
var path=require('path');
var glob = require("glob");
var variable=require('./webpack.var.config');
var ProvidePlugin=require('webpack').ProvidePlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var entries={};
(function(globPath){
    var target='/*/index.js';
    var files = glob.sync(variable.SRC+'/'+globPath+target);
    files.forEach(function(entry){
        var name=entry.match(new RegExp(globPath+'/(.*)/index.js'))[1];
        entries[globPath+'/'+name] = './' + entry;
    });
})(variable.PAGES);
entries.lib=['jquery','lodash'];
(function(globPath){
    var target='/**/*.js';
    var files = glob.sync(variable.SRC+'/'+globPath+target);
    files.forEach(function(entry){
        entries.lib.push('./' + entry);
    });
})(variable.LIB)
module.exports={
    entry:entries,
    output:{
        path:variable.DIST
    },
    resolve: {
        extensions: ['', '.js']
    },
    module:{
        loaders:[
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test:/\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css!px2rem?remUnit="+(variable.VISION_WIDTH/10)+"!autoprefixer!less")
            },{
                test:/\.(png|jpg|svg|gif)$/,
                loader:'url',
                query:{
                    limit:50000,
                    name:'images/[name].[ext]'
                }
            },{
                test:/\.js$/,
                loader:'babel',
                exclude: path.resolve(variable.ROOT, 'node_modules/')
            }
        ]
    },
    plugins:[
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            _:'lodash'
        })
    ]
}