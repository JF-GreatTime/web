/**
 * Created by Jiangfan on 2017/7/24.
 */
function jsonp(data) {
    var oUl = document.getElementById('ul1');
    var html = '';
    if (data.s.length) {
        oUl.style.display = 'block';
        for (var i=0; i<data.s.length; i++) {
            html += '<li><a target="_blank" href="http://www.baidu.com/s?wd='+data.s[i]+'">'+ data.s[i] +'</a></li>';
        }
        oUl.innerHTML = html;
    } else {
        oUl.style.display = 'none';
    }
}
window.onload = function() {

    var oQ = document.getElementById('q');
    var oUl = document.getElementById('ul1');

    oQ.onkeyup = function() {
        if ( this.value != '' ) {
            var oScript = document.createElement('script');
            oScript.src = 'http://suggestion.baidu.com/su?wd='+this.value+'&cb=jsonp';
            document.body.appendChild(oScript);
        } else {
            oUl.style.display = 'none';
        }
    }
    getTime();
};

function getTime() {
    /*时间*/
    var day= getNowFormatDate().split(" ")[0].replace(/\\+/g,"-");
    document.getElementById("date").value = day;
}
function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        + " " + date.getHours() + seperator2 + date.getMinutes()
        + seperator2 + date.getSeconds();
    return currentdate;
}
function mobCheck() {
    var arrInput=document.getElementsByTagName("input");
    for (var i=0;i<arrInput.length;i++){
        arrInput[i].value=arrInput[i].value.replace(/\s/g,"");
    }
    /*手机*/
    var mobLenghth=document.getElementById("mob").value.length;
    if(mobLenghth==11||mobLenghth==0){
        document.getElementById("mob").style.background="none";
    }else {
        document.getElementById("mob").style.background="red";
    }
    /*座机*/
    document.getElementById("tel").value=document.getElementById("tel").value.replace("-","");
    var telLenghth=document.getElementById("tel").value.length;
    if(telLenghth==12||telLenghth==0||telLenghth==8){
        document.getElementById("tel").style.background="none";
    }else {
        document.getElementById("tel").style.background="red";
    }
}
/*清空*/
function empty() {
    var arrInfor=document.getElementsByClassName("information");
    for (var i=0;i<arrInfor.length;i++){
        arrInfor[i].value="";
    }
    arrInfor[2].value="商桥客户";
    arrInfor[9].value="秦总";
    arrInfor[10].value="0";
    document.getElementById("ul1").innerHTML="";
    document.getElementById("ul1").style.display="none";
    getTime();
}
/*客户列表添加*/
function add(arrInfor) {
    var  arrInfor=arrInfor;
    // var arrInfor=document.getElementsByClassName("information");
    if(arrInfor[1].value!==""&&arrInfor[8].value!==""){
        document.getElementById("kefubody").innerHTML+="<ul><li>咨询日期："+arrInfor[0].innerText+"("+arrInfor[2].value+")"+"</li><li>客户姓名："+arrInfor[1].value+"</li><li>手机联系："+arrInfor[3].value+"</li><li>座机联系："+arrInfor[4].value+
            "</li><li>公司名称："+arrInfor[5].value+"</li><li>投放需求："+arrInfor[8].value+"</li><li>对接人员："+arrInfor[9].value+"</li><li>QQ号码："+arrInfor[6].value+"</li><li>微信号码："+arrInfor[7].value+"</li><li><span onclick='del(this)'>删除</span></li></ul>"
    }
}
/*客户列表删除*/
function del(e) {
    event.target.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode);
}
/*数据传输*/
function addmysql(){
    if(document.getElementById("key").value!=="66666666"){
        alert("请输入权限码");
        return;
    }
    mobCheck();
    var arrInfor=document.getElementsByClassName("information");
    if((arrInfor[1].value==""||arrInfor[8].value=="")||(arrInfor[3].value==""&&arrInfor[4].value==""&&arrInfor[6].value==""&&arrInfor[7].value=="")){
        alert("1、姓名,需求不能为空。2、至少填写一种联系方式");
        return
    }
    var http=ajax();
    var data;
    http.onreadystatechange=function(){
        if(http.readyState==4&&http.status==200){
            // data=JSON.parse(http.responseText);
            data =  http.responseText;
            if(data=="成功"){
                alert("添加成功");
                // add(arrInfor);
                empty();
            }else {
                alert("添加失败,请检查联系方式是否正确")
            }
        }
    };
    var name=arrInfor[1].value;
    if(name==""){alert("姓名不能为空");return}
    var ctime=arrInfor[0].value;
    var note=arrInfor[2].value;
    var mob=arrInfor[3].value;
    var tel=arrInfor[4].value;
    var company=arrInfor[5].value;
    var Need=arrInfor[8].value;
    var carer=arrInfor[9].value;
    var weixin=arrInfor[6].value;
    var qq=arrInfor[7].value;
    var lianxi=arrInfor[10].value;
    http.open("post","kefu.do",true);
    http.setRequestHeader("content-type","application/x-www-form-urlencoded");
    http.send("username="+name+"&ctime="+ctime+"&note="+note+"&mob="+mob+"&tel="+tel+"&company="+company+"&Need="+Need+"&carer="+carer+"&qq="+qq+"&weixin="+weixin+"&lianxi="+lianxi);
}

/*获取和失去焦点*/
function turn(bl) {
    if(bl){
        document.getElementById("ul1").style.display="block";
    }else {document.getElementById("ul1").style.display="none";}
}