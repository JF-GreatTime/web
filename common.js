/**
 * Created by Jiang on 2016/12/25.
 */
globelTempId="";
function m$y(obool,newMaskClassName) {
    this.scroll = function (fn) {
        window.onscroll=function () {
            var wScrollY = window.scrollY; // 当前滚动条位置
            var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
            var bScrollH = document.body.scrollHeight; // 滚动条总高度
            if (wScrollY + wInnerH >= bScrollH){
                if(typeof fn === 'function'){
                    fn()
                }
            }
        }
    };
        this.template=function (obj) {

        var temp_h=document.documentElement.clientHeight;
        var temp_w=document.documentElement.clientWidth;
        var newNode=document.createElement('div');
        newNode.id='templateWarp';
        var thisValue=(obj.val?obj.val:'<img src="data:image/gif;base64,R0lGODlhMAAwALMPANzc3fn5+e/v76qpqoeGh1BPUfz8/GdmaPX19eDg4ebm5unp6UFAQuPj49nZ2f///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MThCMTk3MTkwNkEzMTFFNDgwNkQ4MDIzQTU3Mjk2MTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MThCMTk3MUEwNkEzMTFFNDgwNkQ4MDIzQTU3Mjk2MTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOEIxOTcxNzA2QTMxMUU0ODA2RDgwMjNBNTcyOTYxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOEIxOTcxODA2QTMxMUU0ODA2RDgwMjNBNTcyOTYxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn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" ' +
        'style="height: 0.5rem; vertical-align: middle;">');
        newNode.innerHTML="<div style='display: inline-block;  color: white;  padding: 0.2rem 0.14rem; font-size: 0.28rem;text-align: center;" +
            " background:rgba(0,0,0,0.71);  border-radius:0.1rem;max-width:40%;min-width: 1.46rem;" +
            " position: absolute;  left: 50%;  top: 50%; box-sizing: border-box; transform:translate(-50%,-50%);  " +
            "-webkit-transform:translate(-50%,-50%);  -o-transform:translate(-50%,-50%);  -moz-transform:translate(-50%,-50%);  " +
            "-ms-transform:translate(-50%,-50%);'>" +
            thisValue+
            "</div>";
        newNode.style.cssText="height:"+temp_h+"px;width:"+temp_w+"px;top:0;left:0;position: fixed;z-index:9999999999999;";
        var thisBody=document.body;
        if(!document.getElementById('templateWarp')){
            thisBody.appendChild(newNode);
        }
        else {
            var ooojj=document.querySelectorAll('#templateWarp>div')[0];
            ooojj.innerHTML=thisValue;
            clearTimeout(globelTempId);
        }

        if(('time' in obj)&& (typeof obj.time== 'number')){

            globelTempId=window.setTimeout(function () {
                      var willRemoveNode=document.getElementById('templateWarp');
                      thisBody.removeChild(willRemoveNode);
                if(('fn' in obj)&& (typeof obj.fn== 'function')){
                    obj.fn()
                }
                  },obj.time)
        }

    };
        this.hiddenScroll=function (oval) {
          window.scrollTo(0,0);
          var temp_h1 = document.body.clientHeight;
          var temp_h2 = document.documentElement.clientHeight;

          var isXhtml = (temp_h2 <= temp_h1 && temp_h2 != 0) ? true : false;
          var htmlbody = isXhtml ? document.documentElement : document.body;
          if (oval===false) {
            htmlbody.style.overflow = "auto";
          } else if(oval===true) {
            htmlbody.style.overflow = "hidden";
          }
            else if(oval&&typeof oval=='string'){
            console.log(this.dom(oval)[0])
              this.dom(oval)[0].style.height=document.documentElement.clientHeight+'px'
            }
            return  htmlbody.clientHeight;

        };
        this.sessionStores=(function () {
                return{
                    get:function (okey) {
                        if(typeof okey=="object"){
                            throw "参数不能是对象";
                            return;
                        }
                        //var ooval=baseCode.decode(window.sessionStorage.getItem(okey))
                        var ooval=(window.sessionStorage.getItem(okey))
                        try {
                            ooval=JSON.parse(ooval)
                        }
                        catch(m){

                        }
                        return ooval
                    },
                    set:function (okey,obj) {
                        if(!okey){
                            throw "键名参数异常";
                            return;
                        }
                        if(typeof obj=='object'){
                            obj=JSON.stringify(obj)
                        }
                        else if(obj==null){
                            obj=""
                        }
                        // obj=baseCode.encode(obj)
                        window.sessionStorage.setItem(okey+'',obj)
                    },
                    remove:function (arr) {
                        if(typeof arr =='string'){
                            window.sessionStorage.removeItem(arr)
                        }
                        else if(Object.prototype.toString.call(arr) === '[object Array]'){
                            for(var ini=0;ini<arr.length;ini++){
                                window.sessionStorage.removeItem(arr[ini])
                            }
                        }
                        else if(typeof arr=='undefined'||arr==null){
                            window.sessionStorage.clear();
                        }
                        else {
                            throw "参数异常"
                        }
                    }
                }})();
        this.cookies=(function () {
        return{
            set:function (oname,ovalue,otime)
            {
                if(typeof otime!='number'){
                    otime=30*24
                }
                var exp = new Date();
                exp.setTime(exp.getTime() + otime*60*60*1000);
                if(!oname){
                    throw "键名参数异常"
                    return
                }
                if(typeof ovalue=='object'){
                    ovalue=JSON.stringify(ovalue)
                }
                else if(ovalue==null){
                    ovalue=""
                }
                document.cookie = oname + "="+ escape (ovalue) + ";expires=" + exp.toGMTString();
            }
            ,

//读取cookies
            get:function (oname)
            {
                if(typeof oname=="object"){
                    throw "参数不能是对象"
                    return
                }
                if (document.cookie.length>0)
                {
                    c_start=document.cookie.indexOf(oname + "=")
                    if (c_start!=-1)
                    {
                        c_start=c_start + oname.length+1
                        c_end=document.cookie.indexOf(";",c_start)
                        if (c_end==-1) c_end=document.cookie.length
                        var getValue=unescape(document.cookie.substring(c_start,c_end))
                        try {
                            getValue=JSON.parse(getValue)
                        }
                        catch(m){

                        }

                        return getValue
                    }
                }
                return false
            }
            ,
//删除cookies
            remove: function (oname)
            {
                var exp = new Date();
                exp.setTime(exp.getTime() - 10);
                if(typeof oname =='string'){
                    var cval=this.get(oname);
                    if(cval!=false&&cval!=null)
                    {document.cookie= oname + "="+cval+";expires="+exp.toGMTString();}
                }
                else if(Object.prototype.toString.call(oname) === '[object Array]'){
                    for(var ini=0;ini<oname.length;ini++){
                        var cval=this.get(oname[ini]);
                        if(cval!=false&&cval!=null)
                        {document.cookie= oname[ini] + "="+cval+";expires="+exp.toGMTString();}
                    }
                }
                else {
                    throw "参数异常"
                }

            }
        }
    })();
        this.localStrages=(function () {
            return{
                get:function (okey) {
                    if(typeof okey=="object"){
                        throw "参数不能是对象"
                        return
                    }
                   // var ooval=baseCode.decode(window.localStorage.getItem(okey+''))
                    var ooval=window.localStorage.getItem(okey+'')
                    try {
                        ooval=JSON.parse(ooval)
                    }
                    catch(m){

                    }

                    return ooval
                },
                set:function (okey,obj) {
                    if(!okey){
                        throw "键名参数异常"
                        return
                    }
                    if(typeof obj=='object'){
                        obj=JSON.stringify(obj)
                    }
                    else if(obj==null){
                        obj=""
                    }
                    //obj=baseCode.encode(obj)
                    window.localStorage.setItem(okey+'',obj)
                },
                remove:function (arr) {
                    if(typeof arr =='string'){
                        window.localStorage.removeItem(arr)
                    }
                    else if(Object.prototype.toString.call(arr) === '[object Array]'){
                        for(var ini=0;ini<arr.length;ini++){
                            window.localStorage.removeItem(arr[ini])
                        }
                    }
                    else if(typeof arr=='undefined'||arr==null){
                        window.localStorage.clear();
                    }
                    else {
                        throw "参数异常"
                    }
                }
            }
        })();
        this.resizes=function (fonts,initW,minW) {
          var myIndoc=window.document.documentElement;
          var myIndocWidth=window.document.documentElement.clientWidth ;
          if(minW&&myIndocWidth<=minW){myIndocWidth=min};
          var myInft=fonts*myIndocWidth/initW;
          myIndoc.style.fontSize=myInft+'px';
            this.rem=myInft;
            this.precent=myIndocWidth/initW;
          return  {rem:myInft, percent:myIndocWidth/initW};
      };
        this.filters=function (filtersType) {
             if(filtersType==='number'){
                 return function (oval) {
                     var newNumArry=ovalue.split("");
                     var newNum=[];
                     for (var oi=0;oi<newNumArry.length;oi++){
                         if((newNumArry.length-oi)%3==0&&oi!=0){

                             newNum.push(',');
                             newNum.push(newNumArry[oi]);
                         }
                         else {
                             newNum.push(newNumArry[oi])
                         }
                     }
                     return newNum.join("")

                 }
             }
         };
         this.each=function (oarry,fn) {
             if(Object.prototype.toString.call(arr) != '[object Array]'){
                 throw "参数不是数组"
                 return
             }
             for (var my=0;my<oarry;my++){
                 oarry[my]["templateFn"]=function () {

                 }
             }
         };
        this.dom=function (t) {
            var mynodes=document.querySelectorAll(t);
          if(mynodes&&mynodes.length>=1){
              mynodes["bind"]=function (obj) {
                mynodes.forEach(function (oitem,oindex) {
                 for(var key in obj){
                   oitem.addEventListener(key,obj[key],true);
                 }
              })
              };
            mynodes["unbind"]=function (obj) {
              mynodes.forEach(function (oitem,oindex) {
                for(var key in obj){
                  oitem.removeEventListener(key,obj[key],true);
                }
              })
            };
              //   this.getBoundingClientRect();
          }
             return mynodes
         };
         this.imgRead=function (resultPath,obj,fn) {
           var base64img = new Image();
             base64img.crossOrigin = "Anonymous";
             base64img.crossOrigin = "*";
             base64img.src = resultPath;
           // var type='image/jpeg'
           // if(image/png){
           //
           // }
           // var type=resultPath.split(';')[0].split(':');
           base64img.onload = function(){
             var that = this;
             // 默认按比例压缩
             var w = that.width,
               h = that.height,
               scale = w / h;
             w = obj.width || w;
             h = obj.height || (w / scale);
             var quality = 0.5;// 默认图片质量为1
             //生成canvas
             var canvas = document.createElement('canvas');
             var ctx = canvas.getContext('2d');
             // 创建属性节点
             if(obj.quality && obj.quality <= 1 && obj.quality > 0){
               quality = obj.quality;
             }
             canvas.setAttribute('width',w);
             canvas.setAttribute('height',h);
             ctx.drawImage(that, 0, 0, w, h);
             // 图像质量

             // quality值越小，所绘制出的图像越模糊
             var base64 = canvas.toDataURL('image/jpeg',quality);
        // console.log(base64);
             // 回调函数返回base64的值
             if(fn&&typeof fn=='function'){
               // console.log(base64)
               fn(base64);
             }

           }
         }
         this.dealImage=function(obool,files, obj,fn){
           var myReader = new FileReader();
           myReader.onload = function (e){
             var resultPath = e.target.result;
             if (!resultPath){
               return;
             }
             if(resultPath.indexOf('jpg')!=-1||resultPath.indexOf('png')!=-1|| resultPath.indexOf('JPG')!=-1||resultPath.indexOf('PNG')!=-1||resultPath.indexOf('jpeg')!=-1||resultPath.indexOf('JPEG')!=-1){

               if(obool===false){
                 m$.template({
                   val: '',
                   time: 1
                 })
                 fn(resultPath);
               }
              else {
               m$.imgRead(resultPath,obj,fn)
             }
             }
             else {
               if (!resultPath) {
                 m$.template({
                   val: '请选择<br>图片文件',
                   time: 1500
                 })
               }
             }
           };
           myReader.readAsDataURL(files);
  },
           this.documentTitle=function (val) {

             var $iframe = document.createElement('iframe');

             $iframe.src="./static/1.html?"+(new Date()).getTime();
             $iframe.style="display:none;";
             document.title=val;
             // console.log($iframe)
             m$.dom('body')[0].appendChild($iframe);
            $iframe.onload=function () {
              window.document.title=val;
              setTimeout(function() {
                window.document.title=val;
                $iframe.onload=null;
                m$.dom('body')[0].removeChild($iframe);
              }, 10);
            }
           }
           this.banner=function () {
             var inner=document.getElementById('inner');
             var con=document.getElementById('con');
             var zuo=document.getElementById('zuo');
             var you=document.getElementById('you');
             var list=document.getElementById('list');
             var imgs=con.getElementsByTagName('img');
             var lis=list.getElementsByTagName('li');
             var x=0,timer=null,timer2=null;//x代表数字的下标
             var v=1;//v代表图片的下标

             var firstimg=con.children[0].cloneNode(true);//1
             var lastimg=con.children[con.children.length-1].cloneNode(true);//最后一张
             con.appendChild(firstimg);
             con.insertBefore(lastimg,con.children[0]);

             inner.scrollLeft=imgs[0].offsetWidth;//起始位置

             function automove(){
               timer=setInterval(function(){
                 x++;
                 if (x>=lis.length) {
                   x=0;
                 };
                 v++;
                 if (v>=imgs.length) {
                   v=2;
                   inner.scrollLeft=imgs[0].offsetWidth;
                 };
                 move();
                 // listyle();
               },2000)
             }
             you.onclick=function(){
               clearInterval(timer);
               x++;
               if (x>=lis.length) {
                 x=0;
               };
               v++;
               if (v>=imgs.length) {
                 v=2;
                 inner.scrollLeft=imgs[0].offsetWidth;
               };
               move();
               // listyle();
               automove();
             }
             zuo.onclick=function(){
               clearInterval(timer);
               x--;
               if (x<0) {
                 x=lis.length-1;
               };
               v--;
               if (v<0) {
                 v=imgs.length-3;
                 inner.scrollLeft=imgs[0].offsetWidth*(v+1);
               };
               move();
               automove();
             }

             for (var i = 0; i < lis.length; i++) {
               lis[i].onclick=function(){
                 clearInterval(timer);
                 for (var i = 0; i < lis.length; i++) {
                   if(lis[i]==this){
                     x=i;
                     v=i+1;
                     move();
                     automove();
                   }
                 };
               }
             };
             function move(){//每张图片滚动
               clearInterval(timer2);
               var start=inner.scrollLeft;//起始位置
               var end=imgs[0].offsetWidth*v;//结束位置
               var step=0;//起始步数
               var stepmax=20;//最大步数
               var eveystep=(end-start)/20;//平均每步走的距离
               timer2=setInterval(function(){
                 step++;
                 if (step==stepmax) {
                   step=0;
                   clearInterval(timer2);
                 };
                 start+=eveystep;
                 inner.scrollLeft=start;
               },20)
               for (var i = 0; i < lis.length; i++) {
                 lis[i].className='';
               };
               lis[x].className='show';

             }

             automove();
           }
}
window.m$=new m$y();
// console.log(m$)
window.m$.resizes(100,750,window);
var okImgDiv='<div class="okImgDiv">' +
    '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAAnCAYAAABe81ttAAAAAXNSR0IArs4c6QAAAyBJREFUaAXdmWuITVEUx+/MmDEmJpGkyXPyCKWk1NSU8oEU+TCl+CCJUdQoxQeaIpTyRT4QRQhJiiiaUpqUklJSkrwf4xER8nb9Vt1Ta05773P2cS/37FX/ztprr8f/f5u5s/eZQiFAKxaLnaAXnAFTA5RYKCBsL9DWx6I5GLGIqQH7tELlzw1CaEnkQSVMu79YTMi9UETUgsPAZt2hiDxqU0h8ewgi6xBywiFyawgiByDwlEPklhBE1iNQ/j7abFMIIhtQd9amkPiGEEQORMgFh8iuEEQ2IvCiReRv4mtDEDkIIT0OkZ0hiGxC4GWLSDnxrAxB5GCEXHGIXO4lkkZyhNoJnoNbYIFXgwokw2EIuApM9pPgMu+xFK2OdZMfCb9Py3uqvYDZzeBajFO0/IGzxF7t2KHwWNRFPeWbbJWjrCJbzBwKrise2hWRHZkHU7xed1O+iF2XubFnIbOGgRtqvna/s1js2bJ/Og3k3HhJd435FT9tMG84uBmbGy2/4SzszzrjikZy6jgfdTY8N2dsnVjGrBFAvgRN9pVgeb8caZh0WN6WyNozgZkjwW1gsi8E53m2TJdOY/kxPmmaWortStcpOYt+o8Ady6zPxCv7nocBcqE9YiEg4T3JMtwZ9GgBd6WZwT4Rm+PuUKZdBskh4oCBRBTaj1OTZRx1o8G9qFHs+ZF1e5a+mWsYKK8P4+9INa9DLGp9BpA/FjwAJvtAsM2nX1lzGb7bxKoUO86zLs1A8saDR6W6+OM9gdlp+lQ0BxI74szU+jR+vYsA+63giarR7jsWs1z1/3QPMt2aXcw/x7rBRIj4JPAslh8t3+LMNNX91xikNkYMDU95A9CoCbKeAl4YciX0BszQ+VXlQ65LWFpMLslNQpjnNPDSkveK+PSqEmYiA8k1QA79Jusl2AZemzaJ9YH8/CsPsiuA3F19TC73k00fXlXHIL0UyI0/jT0laWJVC3KRg3wHkPuiyx6z2erqk4s9RCwCcm802UOC43IhJA1JxMwHcrXSdp/FmDT1ucpBVDuQq5f83vaAllwJ8CWLwFTnX9++f5P/B6N4JHQo+dR5AAAAAElFTkSuQmCC" alt="">' +
    '<p>领券成功</p>' +
    '</div>  ';
var agaen=navigator.userAgent.toLowerCase();
var phoneStatus=false;
if(agaen.indexOf('iphone')>=0){
  phoneStatus=true;
}

var touchStartFunc=function (event) {
        m$.dom('#appBack')[0].addEventListener('touchmove', touchMoveFunc, false);
};
var touchMoveFunc=function(event){
  event.preventDefault();
  if(event.targetTouches.length&&event.targetTouches.length>=1){
    var touch = event.targetTouches[0];
    // 把元素放在手指所在的位置
    m$.dom('#appBack')[0].style.left = touch.pageX-0.3*m$.rem + 'px';
    m$.dom('#appBack')[0].style.top = touch.pageY-window.scrollY-0.3*m$.rem + 'px';
  }

};
var touchEndFunc=function(){
  m$.dom('#appBack')[0].removeEventListener('touchmove', touchMoveFunc, false);

};
