# carpblog

## Project setup
```
npm install
```

### node service
```
node app.js
```
### Compiles and hot-reloads for development
```
npm run dev
```

## dir tree

```txt
│  .browserslistrc        webpack构建结果，需要兼容的浏览器版本
│  .eslintrc.js           eslint代码检查配置文件
│  .gitignore             git提交忽略的文件
│  babel.config.js        babel配置文件
│  package.json           npm工程依赖package.json
│  README.md
│  webpack.config.js      配置文件
│  app.js                 node服务启动文件
│      
├─public                  公共资源，构建会整体复制到目标目录
│      favicon.ico        ico文件
│      index.html         入口html，可配置变量模板
│ 
├─public                  公共资源，构建会整体复制到目标目录
│      db.js              mongo连接
│      router.js          express路由文件
│           
└─src                     业务逻辑源码
    │  App.vue            程序顶层vue
    │  main.js            程序入口js
    │     
    ├─assets              静态资源目录
    │  ├─images
    │  │      logo.png
    │  │      
    │  └─style
    │          css文件
    │          
    ├─components          所有vue单文件组件
       │       Article.vue 前端博客列表
       │       ArticleDetail.vue 前端博客详情
       │       Sidebar.vue 侧边栏切换
       │  
       └─admin            node后台博客管理系统
             ArticleEdit.vue 编辑新增博客
             ArticleList.vue     博客列表
  
```