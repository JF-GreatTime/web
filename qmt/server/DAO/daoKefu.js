/**
 * Created by Jiangfan on 2017/7/24.
 */
var mysql=require("./../node_modules/mysql");
/*增加数据*/
exports.kefuPost=function (req,res) {
    var ctime=req.body.ctime;
    var name=req.body.username;
    var note=req.body.note;
    var mob=req.body.mob;
    var tel=req.body.tel;
    var company=req.body.company;
    var Need=req.body.Need;
    var carer=req.body.carer;
    var weixin=req.body.weixin;
    var qq=req.body.qq;
    var lianxi=req.body.lianxi;
    if(mob==""){mob=null}
    if(tel==""){tel=null}
    if(qq==""){qq=null}
    //链接数据库
    var myconnect=createConnect();
    myconnect.connect();
    /*数据库增删改查*/
    var sql="INSERT INTO kefu(c_name,c_note,c_mob,c_tel,c_company,c_need,c_carer,c_weixin,c_qq,c_time,c_return)VALUES(?,?,?,?,?,?,?,?,?,?,?)";
    myconnect.query(sql,[name,note,mob,tel,company,Need,carer,weixin,qq,ctime,lianxi],function(err,data){
        if(err!==null){
            console.log("数据库报错28"+err);
        }
        if(data!=null&&data!=undefined){
            res.send("成功");
        }else{
            res.send("失败");
        }
    });
    /*关闭服务器*/
    myconnect.end();
};
/*数据加载*/
exports.getData=function (req,res) {
    //链接数据库
    var myconnect=createConnect();
    myconnect.connect();
    /*数据库增删改查*/
    var sql="SELECT * FROM kefu ORDER BY c_time DESC limit 0,15";
    myconnect.query(sql,[],function(err,data){
        if(err!==null){
            console.log("数据库报错48"+err);
        }
        if(data!=null&&data!=undefined){
            res.send(data);
        }else{
            res.send("失败");
        }
    });
    /*关闭服务器*/
    myconnect.end();
};
/*数据删除*/
exports.delData=function (req,res) {
    var id=parseInt(req.body.id);
    //链接数据库
    var myconnect=createConnect();
    myconnect.connect();
    /*数据库增删改查*/
    var sql="DELETE FROM kefu WHERE c_id=?";
    myconnect.query(sql,[id],function(err,data){
        if(err!==null){
            console.log("数据库报错69"+err);
        }
        if(data!=null&&data!=undefined){
            res.send("成功");
        }else{
            res.send("失败");
        }
    });
    /*关闭服务器*/
    myconnect.end();
};
/*修改数据*/
exports.Modify=function (req,res) {
    var id=req.body.cid;
    // var time=req.body.time;
    var name=req.body.username;
    var note=req.body.note;
    var mob=req.body.mob;
    var tel=req.body.tel;
    var company=req.body.company;
    var Need=req.body.Need;
    var carer=req.body.carer;
    var weixin=req.body.weixin;
    var qq=req.body.qq;
    var creturn=req.body.creturn;
    if(mob==""){mob=null}
    if(tel==""){tel=null}
    if(qq==""){qq=null}

    //链接数据库
    var myconnect=createConnect();
    myconnect.connect();
    /*数据库修改*/
    var sql="UPDATE kefu SET c_name=?,c_note=?,c_mob=?,c_tel=?,c_company=?,c_need=?,c_carer=?,c_weixin=?,c_qq=?,c_return=? WHERE c_id=?";
    myconnect.query(sql,[name,note,mob,tel,company,Need,carer,weixin,qq,creturn,id],function(err,data){
        if(err!==null){
            console.log("数据库报错105"+err);
        }
        if(data!=null&&data!=undefined){
            res.send("成功");
        }else{
            res.send("失败");
        }
    });
    /*关闭服务器*/
    myconnect.end();
};
/*计算总数*/
exports.kfSearch=function (req,res) {
    var word=req.body.word;
    var cselect=req.body.cselect;
    var type=req.body.type;
    var carer=req.body.carer;
    var ctime=req.body.ctime;
    var paramList = new Array();
    var sql;
    if((ctime==""||ctime==null||ctime==undefined)&&type=="all"&&carer=="all"){
        sql ="select * from kefu where 1=2 or";
    }else {
        if(word==""||word==null||word==undefined){
            /*搜索框无数据*/
            sql ="select * from kefu where 1=1";
        }else {
            /*搜索框有数据*/
            sql ="select * from kefu where";
        }
    }
    if(word==""||word==null||word==undefined)
    {
        word=null;
    }else{
        word='%'+word+'%';
        // sql=sql+" c_name like ? or c_company like ? or c_need like ?";
        if(cselect=="姓名"){
            sql=sql+" c_name like ?";
        }else if(cselect=="公司"){
            sql=sql+" c_company like ?";
        }else if(cselect=="需求"){
            sql=sql+" c_need like ?";
        }else if(cselect=="手机"){
            sql=sql+" c_mob like ?";
        }else if(cselect=="来源"){
            sql=sql+"  c_note like ?";
        }
        paramList.push(word);
    }
    if(type=="all"){
        type=null
    }else {
        type='%'+type+'%';
        sql=sql+" AND c_return like ?";
        paramList.push(type);
    }
    if(carer=="all"){
        carer=null
    }else {
        carer='%'+carer+'%';
        sql=sql+" AND c_carer like ?";
        paramList.push(carer);
    }
    if(ctime==""||ctime==null||ctime==undefined)
    {
        ctime=null;
    }else{
        ctime=ctime+'%';
        sql=sql+" AND c_time like ?";
        paramList.push(ctime);
    }
    paramList.push(0);
    //链接数据库
    var myconnect=createConnect();
    myconnect.connect();
    sql=sql+" ORDER BY c_time DESC limit ?,15";

    myconnect.query(sql,paramList,function(err,data){
    if(err!==null){
        console.log(sql,paramList);
        console.log("数据库报错186"+err);
    }
    if(data!=null&&data!=undefined){
        res.send(data);
    }else{
        res.send("失败");
    }
});
    /*关闭服务器*/
    myconnect.end();
};
/*总数*/
exports.kfPages=function (req,res) {
    var sql;
    var paramList=new Array();
    var lian=serachtep(req);
    sql=lian[0];
    paramList=lian[1];
    //链接数据库
    var myconnect=createConnect();
    myconnect.connect();
    /*数据库修改*/
    myconnect.query(sql,paramList,function(err,data){
        if(err!==null){
            console.log("数据库报错207"+err);
        }
        if(data!=null&&data!=undefined){
            var counts=data[0].counts;//总数量
            res.send(counts+"");
        }else{
            res.send("失败");
        }
    });
    /*关闭服务器*/
    myconnect.end();
};
/*跳页*/
exports.kfgoPages=function (req,res) {
    var pages=req.body.pages;
    pages=(pages-1)*15;
    var sql=serachtept(req);

    // var sql="select * from kefu limit ?,15";
    var myconnect=createConnect();
    myconnect.connect();
    myconnect.query(sql,[pages],function(err,data){
        if(err!==null){
            console.log("数据库报错230"+err);
        }
        if (err==null){
            res.send(data);
        }else{
            res.send("")
        }
    });
    myconnect.end();
};

/*获取总页数*/
function serachtep(req) {
    var lian= new Array();
    var word=req.body.word;
    var cselect=req.body.cselect;
    var type=req.body.type;
    var carer=req.body.carer;
    var ctime=req.body.ctime;
    var paramList = new Array();

    var sql;
    if((word==""||word==null||word==undefined)&&type=="all"&&carer=="all"&&(ctime==""||ctime==null||ctime==undefined)){
        lian=['select count(*) as counts  from kefu',[]];
        return lian;
    }
    if((ctime==""||ctime==null||ctime==undefined)&&type=="all"&&carer=="all"){
        sql ="select * from kefu where 1=2 or";
    }else {
        if(word==""||word==null||word==undefined){
            /*搜索框无数据*/
            sql ="select * from kefu where 1=1";
        }else {
            /*搜索框有数据*/
            sql ="select * from kefu where";
        }
    }
    if(word==""||word==null||word==undefined)
    {
        word=null;
    }else{
        word='%'+word+'%';
        // sql=sql+" c_name like ? or c_company like ? or c_need like ?";
        if(cselect=="姓名"){
            sql=sql+"  c_name like ?";
        }else if(cselect=="公司"){
            sql=sql+"  c_company like ?";
        }else if(cselect=="需求"){
            sql=sql+"  c_need like ?";
        }else if(cselect=="手机"){
            sql=sql+"  c_mob like ?";
        }else if(cselect=="来源"){
            sql=sql+"  c_note like ?";
        }
        paramList.push(word);
    }
    if(type=="all"){
        type=null
    }else {
        type='%'+type+'%';
        sql=sql+" AND c_return like ?";
        paramList.push(type);
    }
    if(carer=="all"){
        carer=null
    }else {
        carer='%'+carer+'%';
        sql=sql+" AND c_carer like ?";
        paramList.push(carer);
    }
    if(ctime==""||ctime==null||ctime==undefined)
    {
        ctime=null;
    }else{
        ctime=ctime+'%';
        sql=sql+" AND c_time like ?";
        paramList.push(ctime);
    }
    sql="select count(*) as counts from "+sql.split("from")[1];
    lian.push(sql);
    lian.push(paramList);
    return lian;
}
/*跳页*/
function serachtept(req) {
    var word=req.body.word;
    var cselect=req.body.cselect;
    var type=req.body.type;
    var carer=req.body.carer;
    var ctime=req.body.ctime;

    var sql;
    if((word==""||word==null||word==undefined)&&type=="all"&&carer=="all"&&(ctime==""||ctime==null||ctime==undefined)){
        lian="select * from kefu  ORDER BY c_time DESC limit ?,15";
        return lian;
    }
    if((ctime==""||ctime==null||ctime==undefined)&&type=="all"&&carer=="all"){
        sql ="select * from kefu where 1=2 or";
    }else {
        if(word==""||word==null||word==undefined){
            /*搜索框无数据*/
            sql ="select * from kefu where 1=1";
        }else {
            /*搜索框有数据*/
            sql ="select * from kefu where";
        }
    }
    if(word==""||word==null||word==undefined)
    {
        word=null;
    }else{
        word='%'+word+'%';
        // sql=sql+" c_name like ? or c_company like ? or c_need like ?";
        if(cselect=="姓名"){
            sql=sql+"  c_name like '"+word+"'";
        }else if(cselect=="公司"){
            sql=sql+"  c_company like '"+word+"'";
        }else if(cselect=="需求"){
            sql=sql+"  c_need like '"+word+"'";
        }else if(cselect=="手机"){
            sql=sql+"  c_mob like '"+word+"'";
        }else if(cselect=="来源"){
            sql=sql+"  c_note like '"+word+"'";
        }
    }
    if(type=="all"){
        type=null
    }else {
        type='%'+type+'%';
        sql=sql+" AND c_return like '"+type+"'";
    }
    if(carer=="all"){
        carer=null
    }else {
        carer='%'+carer+'%';
        sql=sql+" AND c_carer like '"+carer+"'";
    }
    if(ctime==""||ctime==null||ctime==undefined)
    {
        ctime=null;
    }else{
        ctime=ctime+'%';
        sql=sql+" AND c_time like '"+ctime+"'";
    }
    sql="select * from "+sql.split("from")[1]+" ORDER BY c_time DESC limit ?,15";

    lian=sql;
    return lian;
}
/*数据库账户*/
function createConnect() {
    var obj=mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "jf52",
        port: 3306,
        database: "qmt"
    });
    return obj;
}