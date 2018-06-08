/*-------------------url配置-------------------*/

var WebsiteUrl="";//网站地址
var ApiUrl="";//接口地址

console.log('接口地址：'+(ApiUrl || '暂无配置'));

/*-------------------公共方法-------------------*/

//添加cookie 过期时间单位为秒
function addCookie(name,value,expireHours){
  var cookieString=name+"="+escape(value)+"; path=/";
  //判断是否设置过期时间
  if(expireHours>0){
    var date=new Date();
    date.setTime(date.getTime()+expireHours*1000);
    cookieString=cookieString+"; expires="+date.toGMTString();
  }
  document.cookie=cookieString;
}

//获取cookie
function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return '';
}

//删除cookie
function delCookie(name){
  var exp = new Date();
  exp.setTime(exp.getTime() - 1);
  var cval=getCookie(name);
  if(cval!=null) document.cookie= name + "="+cval+"; path=/;expires="+exp.toGMTString();
}

//删除所有cookie
function clearAllCookie(){
  var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
  if(keys) {
    for(var i = keys.length; i--;){
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      document.cookie= keys[i] + "="+getCookie(keys[i])+"; path=/;expires="+exp.toGMTString();
    }
  }
}

//获取url参数
function request(paras) {
  var url = location.href;
  url = decodeURI(url);
  var paraString = url.substring(url.indexOf("?") + 1, url.length).split("&");
  var paraObj = {};
  for (var i = 0; j = paraString[i]; i++) {
    paraObj[j.substring(0, j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=") + 1, j.length);
  }
  var returnValue = paraObj[paras.toLowerCase()];
  if (typeof(returnValue) == "undefined") {
    return "";
  } else {
    return returnValue;
  }
}

