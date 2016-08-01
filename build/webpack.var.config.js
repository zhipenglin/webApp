/**
 * Created by ifchangetoclzp on 2016/8/1.
 */
var path=require('path');

var ROOT=path.resolve(__dirname,'../'),
    DIST=path.resolve(ROOT,'dist'),
    SRC='src',
    MODULES='modules',
    PAGES='pages',
    LIB='lib',
    VISION_WIDTH=750;

module.exports={
    ROOT,SRC,DIST,MODULES,PAGES,LIB,VISION_WIDTH
};