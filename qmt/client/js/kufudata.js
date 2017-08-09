/**
 * Created by Jiangfan on 2017/7/27.
 */

/*加载数据*/
window.onload=function () {
    getdata();
    getPages();
}
/*删除数据*/
function deldata(sqldata) {
    if(document.getElementById("key").value!=="66666666"){
        alert("请输入权限码");
        return;
    }
    var http=ajax();
    var data;
    http.onreadystatechange=function(){
        if(http.readyState==4&&http.status==200){
            // data=JSON.parse(http.responseText);
            data=http.responseText;
            if (data=="失败"){
                alert("删除失败请重试")
            }else {
                getdata();
            }
        }
    }

    http.open("post","del.do",true);
    http.setRequestHeader("content-type","application/x-www-form-urlencoded");
    http.send("id="+sqldata);
}
/*获得数据*/
function getdata() {
    var http=ajax();
    var data;
    http.onreadystatechange=function(){
        if(http.readyState==4&&http.status==200){
            data=JSON.parse(http.responseText);
            var tbody=document.getElementById("tbody");
            // data =  http.responseText;
            if(data=="失败"){
                alert("获取用户数据失败");
            }else {
                /*数据写入*/
                dateWrite(data);
            }
        }
    };
    http.open("post","data.do",true);
    http.setRequestHeader("content-type","application/x-www-form-urlencoded");
    http.send();
}
/*修改数据第一步*/
function Modify(data,color) {
    if(document.getElementById("key").value!=="66666666"){
        alert("请输入权限码");
        return;
    }
    var data=eval(data);
    var ORdata=document.getElementsByClassName("Rdata");
    for (var i=0;i<ORdata.length;i++){
        if(i==0){ORdata[i].innerText=data.c_id;}
        if(i==1){ORdata[i].innerText=data.c_time;}
        if(i==2){ORdata[i].value=data.c_name;}
        if(i==3){ORdata[i].value=data.c_note;}
        if(i==4){ORdata[i].value=data.c_mob;}
        if(i==5){ORdata[i].value=data.c_tel;}
        if(i==6){ORdata[i].value=data.c_company;}
        if(i==7){ORdata[i].value=data.c_weixin;}
        if(i==8){ORdata[i].value=data.c_qq;}
        if(i==9){ORdata[i].value=data.c_need;}
        if(i==10){ORdata[i].value=data.c_carer;}
        if(i==11){ORdata[i].value=color;}
        back(false)
    }
}
/*修改数据第二步*/
function Modify2() {
    var http=ajax();
    var data;
    http.onreadystatechange=function(){
        if(http.readyState==4&&http.status==200){
            // data=JSON.parse(http.responseText);
            data=http.responseText;
            if (data=="失败"){
                alert("修改失败请重试")
            }else {
                goPages(5);
                back(true)
            }
        }
    }

    var oRdata=document.getElementsByClassName("Rdata");
    var cid=oRdata[0].innerText;
    var name=oRdata[2].value;
    var note=oRdata[3].value;
    var mob=oRdata[4].value;
    var tel=oRdata[5].value;
    var company=oRdata[6].value;
    var Need=oRdata[9].value;
    var carer=oRdata[10].value;
    var weixin=oRdata[7].value;
    var qq=oRdata[8].value;
    var creturn=oRdata[11].value;
    http.open("post","Modify.do",true);
    http.setRequestHeader("content-type","application/x-www-form-urlencoded");
    http.send("username="+name+"&cid="+cid+"&creturn="+creturn+"&note="+note+"&mob="+mob+"&tel="+tel+"&company="+company+"&Need="+Need+"&carer="+carer+"&qq="+qq+"&weixin="+weixin);
}
/*返回*/
function back(bl) {
    var bl=bl;
    if(bl){
        document.getElementById("yzh-content").style.display="block";
        document.getElementById("yzh-xiu").style.display="none";
    }else {
        document.getElementById("yzh-content").style.display="none";
        document.getElementById("yzh-xiu").style.display="block";
    }
}
/*时间切换*/
function selectDate() {
    var selDate=document.getElementById("selDate").value;
    var odateTy=document.getElementById("dateTy");
    if(selDate=="y"){
        odateTy.setAttribute("type","text")
    }else if(selDate=="m"){
        odateTy.setAttribute("type","month")
    }
/*    else if(selDate=="w"){
        odateTy.setAttribute("type","week")
    }*/
    else if(selDate=="d"){
        odateTy.setAttribute("type","date")
    }
}
/*搜索*/
function kfsearch() {
    var arrkfserd=document.getElementsByClassName("kfserd");
    var http=ajax();
    var data;
    http.onreadystatechange=function(){
        if(http.readyState==4&&http.status==200){
            data=JSON.parse(http.responseText);
            if (data=="失败"){
                alert("修改失败请重试")
            }else {
                if(data.length==0){
                    tbody.innerHTML="无";
                }else {
                    /*数据写入*/
                    dateWrite(data);
                    back(true);
                    // document.getElementsByClassName("row")[0].style.display="none";
                }
            }
        }
    }
    var cselect=arrkfserd[0].value;
    var word=arrkfserd[1].value;
    var type=arrkfserd[2].value;
    var carer=arrkfserd[3].value;
    var ctime=arrkfserd[4].value;
    if((word==""||word==undefined||word==null)&&type=='all'&&carer=='all'&&(ctime==""||ctime==undefined||ctime==null)){
        alert("请添加搜索结果");
        return
    }
    http.open("post","kfSearch.do",true);
    http.setRequestHeader("content-type","application/x-www-form-urlencoded");
    http.send("word="+word+"&cselect="+cselect+"&type="+type+"&carer="+carer+"&ctime="+ctime);
    getPages();
    document.getElementsByClassName("cur_page")[0].value=1;
}
/*获取总页数*/
function getPages(){
    var arrkfserd=document.getElementsByClassName("kfserd");
    var cselect=arrkfserd[0].value;
    var word=arrkfserd[1].value;
    var type=arrkfserd[2].value;
    var carer=arrkfserd[3].value;
    var ctime=arrkfserd[4].value;
    // console.log(word,type,carer,ctime);
    var open="post";
    var root="kfPages.do";
    var open2=true;
    var send="word="+word+"&cselect="+cselect+"&type="+type+"&carer="+carer+"&ctime="+ctime;
    var foperData=function (data) {
        data=http.responseText;
        return data;
    };
    var foperDataf=function (data) {

        console.log("获取页数失败"+data);
    };
    var foperDataS=function (data) {
        document.getElementsByClassName("a1_page")[0].innerText="共"+data+"条";
        var pages=Math.ceil(data/15);
        document.getElementsByClassName("a1_page")[1].innerText="共"+pages+"页";
    };
    operation(open,root,open2,send,foperData,foperDataf,foperDataS);
}
/*跳转到某页*/
function goPages(transation){
    var arrkfserd=document.getElementsByClassName("kfserd");
    var cselect=arrkfserd[0].value;
    var word=arrkfserd[1].value;
    var type=arrkfserd[2].value;
    var carer=arrkfserd[3].value;
    var ctime=arrkfserd[4].value;
    // console.log(word,type,carer,ctime);

    var open="post";
    var root="kfgoPages.do";
    var open2=true;
    var send="";
    var lastpage=parseInt(document.getElementsByClassName("a1_page")[1].innerText.substring(2,1));
    var nowpage=parseInt(document.getElementsByClassName("cur_page")[0].value);
    var page;
    if(nowpage<=0){
        nowpage=1;
        document.getElementsByClassName("cur_page")[0].value=1;
    }else if(nowpage>lastpage){
        nowpage=lastpage;
        document.getElementsByClassName("cur_page")[0].value=lastpage;
    }

    if(transation == 0){
        page=lastpage;
        document.getElementsByClassName("cur_page")[0].value=lastpage;
    }if(transation== 1){
        page=1;
        document.getElementsByClassName("cur_page")[0].value=1;
    }
    if(transation ==3){
        if(nowpage == 1){
            page=1;
        }
        else{
            page=nowpage-1;
            document.getElementsByClassName("cur_page")[0].value=nowpage-1;
        }
    }
    if(transation ==4){
        if(nowpage!==lastpage){
            page=nowpage+1;

            document.getElementsByClassName("cur_page")[0].value=nowpage+1;
            // console.log(page,document.getElementsByClassName("cur_page")[0].value);
        }else {
            page=lastpage;
        }
    }
    if(transation == 5){
        page=nowpage;
    }
    send="word="+word+"&cselect="+cselect+"&type="+type+"&carer="+carer+"&ctime="+ctime+"&pages="+page;
    var foperData=function (data) {
        data=JSON.parse(http.responseText);
        return data;
    };
    var foperDataf=function (data) {
        console.log("获取页数失败");
    };
    var foperDataS=function (data) {
        var tbody=document.getElementById("tbody");
        /*数据写入*/
        dateWrite(data);
};
operation(open,root,open2,send,foperData,foperDataf,foperDataS);
}
/*修改时区*/
function calcTime(c,offset) {
    var d = new Date(c);
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    nd = new Date(utc + (3600000*offset));

    return nd.toLocaleString();
}
/*重置*/
function kfremake() {
    var arrkfserd=document.getElementsByClassName("kfserd");
    arrkfserd[1].value="";
    arrkfserd[2].value="all";
    arrkfserd[3].value="all";
    arrkfserd[4].value="";
    getdata();
    getPages();
}
/*数据写入*/
function dateWrite(data) {
    tbody.innerHTML="";
    var fcolor="green";
    var ncolor=1;
    for (var i=0;i<data.length;i++){
        data[i].c_time=calcTime(data[i].c_time,'+8').split(" ")[0];
        if(data[i].c_name==null){data[i].c_name=""}
        if(data[i].c_note==null){data[i].c_note=""}
        if(data[i].c_mob==null){data[i].c_mob=""}
        if(data[i].c_tel==null){data[i].c_tel=""}
        if(data[i].c_company==null){data[i].c_company=""}
        if(data[i].c_weixin==null){data[i].c_weixin=""}
        if(data[i].c_qq==null){data[i].c_qq=""}
        if(data[i].c_need==null){data[i].c_need=""}
        if(data[i].c_return ==0) {data[i].c_return ="未联系";fcolor="red";ncolor=0;}else if(data[i].c_return ==1) {data[i].c_return ="已联系";fcolor="green";ncolor=1}else if(data[i].c_return ==2){data[i].c_return ="已结束";fcolor="green";ncolor=2}
        tbody.innerHTML+="<tr ><td width='30' align='center'><input class='inputcheckbox ' name='ids[]' value='35' type='checkbox'></td><td align='center'>"+data[i].c_id+"</td>"+
            "<td>"+data[i].c_time+"</td><td>"+data[i].c_name+"</td><td>"+data[i].c_note+"</td><td>"+data[i].c_mob+"</td><td>"+data[i].c_tel+"</td>"+
            "<td>"+data[i].c_company+"</td><td>"+data[i].c_weixin+"</td><td>"+data[i].c_qq+"</td><td>"+data[i].c_need+"</td><td>"+data[i].c_carer+"</td><td align='center'><font color="+fcolor+">"+data[i].c_return+"</font></td>"+
            "<td align='center'><a href='javascript:void (0);' onclick='Modify("+JSON.stringify(data[i])+","+ncolor+")'>修改</a> | <a href='javascript:void (0);' onclick='deldata("+data[i].c_id+")'>删除</a></td></tr>"
    }

    // document.getElementsByClassName("row")[0].style.display="block";
}
