使用前须知

1.首先执行npm i，安装项目依赖

2.配置build/var里的 VISION_WIDTH参数，使其大小等于设计稿大小，本项目使用了px2rem，会根据配置的参数，将原始样式中的px按照规则替换成rem实现自适应

3.src为源码目录，请尽量按照各自模块进行编码，每个模块自己管理对应的样式和图片文件，在入口文件index.js中引用

4.执行npm run dev进入开发模式，文件名中不添加md5，修改文件后会自动编译，代码不压缩，生成内嵌的source-map

执行npm run build进行发布，文件名中添加md5,代码压缩，去除内嵌的source-map

5.样式采用less开发，javascript采用ECMASCRIPT 2015的stage-3开发