/**
 * Created by Jiangfan on 2017/7/28.
 */
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
function ajax() {
    if(window.XMLHttpRequest){
        http=new XMLHttpRequest();
    }else if(window.ActiveXObject){
        http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return http;
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

function operation(open,root,open2,send,foperData,foperDataf,foperDataS) {
    var http=ajax();
    var data;
    http.onreadystatechange=function () {
        if(http.readyState==4&&http.status==200){
            data=foperData(http);
            if (data=="失败"){
                foperDataf(data);
            }else {
                foperDataS(data);
            }
        }
    }
    http.open(open,root,open2);
    http.setRequestHeader("content-type","application/x-www-form-urlencoded");
    http.send(send);
}