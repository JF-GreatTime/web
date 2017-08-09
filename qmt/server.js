var express = require("./server/node_modules/express");
var session = require("./server/node_modules/express-session");
var ejs = require("./server/node_modules/ejs");
var cookieParser = require("./server/node_modules/cookie-parser");
var fs =require("fs");
var mykefu = require("./server/DAO/daoKefu.js");

var app =express();
/*配置服务器*/
app.configure(function () {
   app.use(cookieParser());
   app.use(session({
       secret: 'kefu',
       name: 'kefu',
       cookie: {maxAge:36000},
       resave: false,
       saveUninitialized: true
   }));
    app.use(express.logger('dev'));//建立开发的日志
    app.use(express.bodyParser());//获取POST表单的提交数据。
    app.use(express.methodOverride());//获取非POST、get数据请求，[PUT,DELETE]
    app.use(app.router);
    app.use(express.static(__dirname+"/client"));
    app.use(express.favicon());//没有参数，表示使用默认的小图标 。
    app.use(express.errorHandler());
});
/*设置端口号*/
app.listen(8088,function () {
    console.log("8088服务器正在运行...")
});
/*ejs*/
/*路由*/
app.post("/data.do",mykefu.getData);
app.post("/kefu.do",mykefu.kefuPost);
app.post("/del.do",mykefu.delData);
app.post("/Modify.do",mykefu.Modify);
app.post("/kfSearch.do",mykefu.kfSearch);
app.post("/kfPages.do",mykefu.kfPages);
app.post("/kfgoPages.do",mykefu.kfgoPages);

/*配置第二端口*/
var app2=express();
app2.configure(function () {
    app2.use(cookieParser());
    app2.use(session({
        secret: 'kefu',
        name: 'kefu',
        cookie: {maxAge:36000},
        resave: false,
        saveUninitialized: true
    }));
    app2.use(express.logger('dev'));//建立开发的日志
    app2.use(express.bodyParser());//获取POST表单的提交数据。
    app2.use(express.methodOverride());//获取非POST、get数据请求，[PUT,DELETE]
    app2.use(app.router);
    app2.use(express.static(__dirname+"/view"));
    app2.use(express.favicon());//没有参数，表示使用默认的小图标 。
    app2.use(express.errorHandler());
});
/*设置端口号*/
app2.listen(8065,function () {
    console.log("8065服务器正在运行...")
});
