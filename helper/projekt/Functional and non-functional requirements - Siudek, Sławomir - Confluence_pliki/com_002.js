;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/cache/default-cache-controller.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,d,b,a){c.ajaxSetup({cache:false})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'frontend/_shared/libs/es5-shim/es5-shim.min.js' */
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.1/LICENSE
 */
(function(t,r){"use strict";if(typeof define==="function"&&define.amd){define(r)}else if(typeof exports==="object"){module.exports=r()}else{t.returnExports=r()}})(this,function(){var t=Array;var r=t.prototype;var e=Object;var n=e.prototype;var i=Function.prototype;var a=String;var o=a.prototype;var u=Number;var f=u.prototype;var s=r.slice;var l=r.splice;var v=r.push;var c=r.unshift;var h=r.concat;var p=i.call;var g=i.apply;var y=Math.max;var d=Math.min;var w=n.toString;var b=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";var m;var T=Function.prototype.toString,D=function tryFunctionObject(t){try{T.call(t);return true}catch(r){return false}},x="[object Function]",S="[object GeneratorFunction]";m=function isCallable(t){if(typeof t!=="function"){return false}if(b){return D(t)}var r=w.call(t);return r===x||r===S};var O;var E=RegExp.prototype.exec,j=function tryRegexExec(t){try{E.call(t);return true}catch(r){return false}},I="[object RegExp]";O=function isRegex(t){if(typeof t!=="object"){return false}return b?j(t):w.call(t)===I};var M;var U=String.prototype.valueOf,F=function tryStringObject(t){try{U.call(t);return true}catch(r){return false}},N="[object String]";M=function isString(t){if(typeof t==="string"){return true}if(typeof t!=="object"){return false}return b?F(t):w.call(t)===N};var k=e.defineProperty&&function(){try{var t={};e.defineProperty(t,"x",{enumerable:false,value:t});for(var r in t){return false}return t.x===t}catch(n){return false}}();var C=function(t){var r;if(k){r=function(t,r,n,i){if(!i&&r in t){return}e.defineProperty(t,r,{configurable:true,enumerable:false,writable:true,value:n})}}else{r=function(t,r,e,n){if(!n&&r in t){return}t[r]=e}}return function defineProperties(e,n,i){for(var a in n){if(t.call(n,a)){r(e,a,n[a],i)}}}}(n.hasOwnProperty);var R=function isPrimitive(t){var r=typeof t;return t===null||r!=="object"&&r!=="function"};var A=u.isNaN||function(t){return t!==t};var P={ToInteger:function ToInteger(t){var r=+t;if(A(r)){r=0}else if(r!==0&&r!==1/0&&r!==-(1/0)){r=(r>0||-1)*Math.floor(Math.abs(r))}return r},ToPrimitive:function ToPrimitive(t){var r,e,n;if(R(t)){return t}e=t.valueOf;if(m(e)){r=e.call(t);if(R(r)){return r}}n=t.toString;if(m(n)){r=n.call(t);if(R(r)){return r}}throw new TypeError},ToObject:function(t){if(t==null){throw new TypeError("can't convert "+t+" to object")}return e(t)},ToUint32:function ToUint32(t){return t>>>0}};var $=function Empty(){};C(i,{bind:function bind(t){var r=this;if(!m(r)){throw new TypeError("Function.prototype.bind called on incompatible "+r)}var n=s.call(arguments,1);var i;var a=function(){if(this instanceof i){var a=r.apply(this,h.call(n,s.call(arguments)));if(e(a)===a){return a}return this}else{return r.apply(t,h.call(n,s.call(arguments)))}};var o=y(0,r.length-n.length);var u=[];for(var f=0;f<o;f++){v.call(u,"$"+f)}i=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this, arguments); }")(a);if(r.prototype){$.prototype=r.prototype;i.prototype=new $;$.prototype=null}return i}});var J=p.bind(n.hasOwnProperty);var Y=p.bind(n.toString);var Z=p.bind(s);var z=g.bind(s);var G=p.bind(o.slice);var B=p.bind(o.split);var H=p.bind(o.indexOf);var W=p.bind(v);var L=p.bind(n.propertyIsEnumerable);var X=p.bind(r.sort);var q=t.isArray||function isArray(t){return Y(t)==="[object Array]"};var K=[].unshift(0)!==1;C(r,{unshift:function(){c.apply(this,arguments);return this.length}},K);C(t,{isArray:q});var Q=e("a");var V=Q[0]!=="a"||!(0 in Q);var _=function properlyBoxed(t){var r=true;var e=true;var n=false;if(t){try{t.call("foo",function(t,e,n){if(typeof n!=="object"){r=false}});t.call([1],function(){"use strict";e=typeof this==="string"},"x")}catch(i){n=true}}return!!t&&!n&&r&&e};C(r,{forEach:function forEach(t){var r=P.ToObject(this);var e=V&&M(this)?B(this,""):r;var n=-1;var i=P.ToUint32(e.length);var a;if(arguments.length>1){a=arguments[1]}if(!m(t)){throw new TypeError("Array.prototype.forEach callback must be a function")}while(++n<i){if(n in e){if(typeof a==="undefined"){t(e[n],n,r)}else{t.call(a,e[n],n,r)}}}}},!_(r.forEach));C(r,{map:function map(r){var e=P.ToObject(this);var n=V&&M(this)?B(this,""):e;var i=P.ToUint32(n.length);var a=t(i);var o;if(arguments.length>1){o=arguments[1]}if(!m(r)){throw new TypeError("Array.prototype.map callback must be a function")}for(var u=0;u<i;u++){if(u in n){if(typeof o==="undefined"){a[u]=r(n[u],u,e)}else{a[u]=r.call(o,n[u],u,e)}}}return a}},!_(r.map));C(r,{filter:function filter(t){var r=P.ToObject(this);var e=V&&M(this)?B(this,""):r;var n=P.ToUint32(e.length);var i=[];var a;var o;if(arguments.length>1){o=arguments[1]}if(!m(t)){throw new TypeError("Array.prototype.filter callback must be a function")}for(var u=0;u<n;u++){if(u in e){a=e[u];if(typeof o==="undefined"?t(a,u,r):t.call(o,a,u,r)){W(i,a)}}}return i}},!_(r.filter));C(r,{every:function every(t){var r=P.ToObject(this);var e=V&&M(this)?B(this,""):r;var n=P.ToUint32(e.length);var i;if(arguments.length>1){i=arguments[1]}if(!m(t)){throw new TypeError("Array.prototype.every callback must be a function")}for(var a=0;a<n;a++){if(a in e&&!(typeof i==="undefined"?t(e[a],a,r):t.call(i,e[a],a,r))){return false}}return true}},!_(r.every));C(r,{some:function some(t){var r=P.ToObject(this);var e=V&&M(this)?B(this,""):r;var n=P.ToUint32(e.length);var i;if(arguments.length>1){i=arguments[1]}if(!m(t)){throw new TypeError("Array.prototype.some callback must be a function")}for(var a=0;a<n;a++){if(a in e&&(typeof i==="undefined"?t(e[a],a,r):t.call(i,e[a],a,r))){return true}}return false}},!_(r.some));var tt=false;if(r.reduce){tt=typeof r.reduce.call("es5",function(t,r,e,n){return n})==="object"}C(r,{reduce:function reduce(t){var r=P.ToObject(this);var e=V&&M(this)?B(this,""):r;var n=P.ToUint32(e.length);if(!m(t)){throw new TypeError("Array.prototype.reduce callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")}var i=0;var a;if(arguments.length>=2){a=arguments[1]}else{do{if(i in e){a=e[i++];break}if(++i>=n){throw new TypeError("reduce of empty array with no initial value")}}while(true)}for(;i<n;i++){if(i in e){a=t(a,e[i],i,r)}}return a}},!tt);var rt=false;if(r.reduceRight){rt=typeof r.reduceRight.call("es5",function(t,r,e,n){return n})==="object"}C(r,{reduceRight:function reduceRight(t){var r=P.ToObject(this);var e=V&&M(this)?B(this,""):r;var n=P.ToUint32(e.length);if(!m(t)){throw new TypeError("Array.prototype.reduceRight callback must be a function")}if(n===0&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")}var i;var a=n-1;if(arguments.length>=2){i=arguments[1]}else{do{if(a in e){i=e[a--];break}if(--a<0){throw new TypeError("reduceRight of empty array with no initial value")}}while(true)}if(a<0){return i}do{if(a in e){i=t(i,e[a],a,r)}}while(a--);return i}},!rt);var et=r.indexOf&&[0,1].indexOf(1,2)!==-1;C(r,{indexOf:function indexOf(t){var r=V&&M(this)?B(this,""):P.ToObject(this);var e=P.ToUint32(r.length);if(e===0){return-1}var n=0;if(arguments.length>1){n=P.ToInteger(arguments[1])}n=n>=0?n:y(0,e+n);for(;n<e;n++){if(n in r&&r[n]===t){return n}}return-1}},et);var nt=r.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;C(r,{lastIndexOf:function lastIndexOf(t){var r=V&&M(this)?B(this,""):P.ToObject(this);var e=P.ToUint32(r.length);if(e===0){return-1}var n=e-1;if(arguments.length>1){n=d(n,P.ToInteger(arguments[1]))}n=n>=0?n:e-Math.abs(n);for(;n>=0;n--){if(n in r&&t===r[n]){return n}}return-1}},nt);var it=function(){var t=[1,2];var r=t.splice();return t.length===2&&q(r)&&r.length===0}();C(r,{splice:function splice(t,r){if(arguments.length===0){return[]}else{return l.apply(this,arguments)}}},!it);var at=function(){var t={};r.splice.call(t,0,0,1);return t.length===1}();C(r,{splice:function splice(t,r){if(arguments.length===0){return[]}var e=arguments;this.length=y(P.ToInteger(this.length),0);if(arguments.length>0&&typeof r!=="number"){e=Z(arguments);if(e.length<2){W(e,this.length-t)}else{e[1]=P.ToInteger(r)}}return l.apply(this,e)}},!at);var ot=function(){var r=new t(1e5);r[8]="x";r.splice(1,1);return r.indexOf("x")===7}();var ut=function(){var t=256;var r=[];r[t]="a";r.splice(t+1,0,"b");return r[t]==="a"}();C(r,{splice:function splice(t,r){var e=P.ToObject(this);var n=[];var i=P.ToUint32(e.length);var o=P.ToInteger(t);var u=o<0?y(i+o,0):d(o,i);var f=d(y(P.ToInteger(r),0),i-u);var s=0;var l;while(s<f){l=a(u+s);if(J(e,l)){n[s]=e[l]}s+=1}var v=Z(arguments,2);var c=v.length;var h;if(c<f){s=u;while(s<i-f){l=a(s+f);h=a(s+c);if(J(e,l)){e[h]=e[l]}else{delete e[h]}s+=1}s=i;while(s>i-f+c){delete e[s-1];s-=1}}else if(c>f){s=i-f;while(s>u){l=a(s+f-1);h=a(s+c-1);if(J(e,l)){e[h]=e[l]}else{delete e[h]}s-=1}}s=u;for(var p=0;p<v.length;++p){e[s]=v[p];s+=1}e.length=i-f+c;return n}},!ot||!ut);var ft=r.join;var st;try{st=Array.prototype.join.call("123",",")!=="1,2,3"}catch(lt){st=true}if(st){C(r,{join:function join(t){var r=typeof t==="undefined"?",":t;return ft.call(M(this)?B(this,""):this,r)}},st)}var vt=[1,2].join(undefined)!=="1,2";if(vt){C(r,{join:function join(t){var r=typeof t==="undefined"?",":t;return ft.call(this,r)}},vt)}var ct=function push(t){var r=P.ToObject(this);var e=P.ToUint32(r.length);var n=0;while(n<arguments.length){r[e+n]=arguments[n];n+=1}r.length=e+n;return e+n};var ht=function(){var t={};var r=Array.prototype.push.call(t,undefined);return r!==1||t.length!==1||typeof t[0]!=="undefined"||!J(t,0)}();C(r,{push:function push(t){if(q(this)){return v.apply(this,arguments)}return ct.apply(this,arguments)}},ht);var pt=function(){var t=[];var r=t.push(undefined);return r!==1||t.length!==1||typeof t[0]!=="undefined"||!J(t,0)}();C(r,{push:ct},pt);C(r,{slice:function(t,r){var e=M(this)?B(this,""):this;return z(e,arguments)}},V);var gt=function(){try{[1,2].sort(null);[1,2].sort({});return true}catch(t){}return false}();var yt=function(){try{[1,2].sort(/a/);return false}catch(t){}return true}();var dt=function(){try{[1,2].sort(undefined);return true}catch(t){}return false}();C(r,{sort:function sort(t){if(typeof t==="undefined"){return X(this)}if(!m(t)){throw new TypeError("Array.prototype.sort callback must be a function")}return X(this,t)}},gt||!dt||!yt);var wt=!{toString:null}.propertyIsEnumerable("toString");var bt=function(){}.propertyIsEnumerable("prototype");var mt=!J("x","0");var Tt=function(t){var r=t.constructor;return r&&r.prototype===t};var Dt={$window:true,$console:true,$parent:true,$self:true,$frame:true,$frames:true,$frameElement:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$external:true};var xt=function(){if(typeof window==="undefined"){return false}for(var t in window){try{if(!Dt["$"+t]&&J(window,t)&&window[t]!==null&&typeof window[t]==="object"){Tt(window[t])}}catch(r){return true}}return false}();var St=function(t){if(typeof window==="undefined"||!xt){return Tt(t)}try{return Tt(t)}catch(r){return false}};var Ot=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Et=Ot.length;var jt=function isArguments(t){return Y(t)==="[object Arguments]"};var It=function isArguments(t){return t!==null&&typeof t==="object"&&typeof t.length==="number"&&t.length>=0&&!q(t)&&m(t.callee)};var Mt=jt(arguments)?jt:It;C(e,{keys:function keys(t){var r=m(t);var e=Mt(t);var n=t!==null&&typeof t==="object";var i=n&&M(t);if(!n&&!r&&!e){throw new TypeError("Object.keys called on a non-object")}var o=[];var u=bt&&r;if(i&&mt||e){for(var f=0;f<t.length;++f){W(o,a(f))}}if(!e){for(var s in t){if(!(u&&s==="prototype")&&J(t,s)){W(o,a(s))}}}if(wt){var l=St(t);for(var v=0;v<Et;v++){var c=Ot[v];if(!(l&&c==="constructor")&&J(t,c)){W(o,c)}}}return o}});var Ut=e.keys&&function(){return e.keys(arguments).length===2}(1,2);var Ft=e.keys&&function(){var t=e.keys(arguments);return arguments.length!==1||t.length!==1||t[0]!==1}(1);var Nt=e.keys;C(e,{keys:function keys(t){if(Mt(t)){return Nt(Z(t))}else{return Nt(t)}}},!Ut||Ft);var kt=new Date(-0xc782b5b342b24).getUTCMonth()!==0;var Ct=new Date(-0x55d318d56a724);var Rt=new Date(14496624e5);var At=Ct.toUTCString()!=="Mon, 01 Jan -45875 11:59:59 GMT";var Pt;var $t;var Jt=Ct.getTimezoneOffset();if(Jt<-720){Pt=Ct.toDateString()!=="Tue Jan 02 -45875";$t=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Rt.toString())}else{Pt=Ct.toDateString()!=="Mon Jan 01 -45875";$t=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Rt.toString())}var Yt=p.bind(Date.prototype.getFullYear);var Zt=p.bind(Date.prototype.getMonth);var zt=p.bind(Date.prototype.getDate);var Gt=p.bind(Date.prototype.getUTCFullYear);var Bt=p.bind(Date.prototype.getUTCMonth);var Ht=p.bind(Date.prototype.getUTCDate);var Wt=p.bind(Date.prototype.getUTCDay);var Lt=p.bind(Date.prototype.getUTCHours);var Xt=p.bind(Date.prototype.getUTCMinutes);var qt=p.bind(Date.prototype.getUTCSeconds);var Kt=p.bind(Date.prototype.getUTCMilliseconds);var Qt=["Sun","Mon","Tue","Wed","Thu","Fri"];var Vt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var _t=function daysInMonth(t,r){return zt(new Date(r,t,0))};C(Date.prototype,{getFullYear:function getFullYear(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Yt(this);if(t<0&&Zt(this)>11){return t+1}return t},getMonth:function getMonth(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Yt(this);var r=Zt(this);if(t<0&&r>11){return 0}return r},getDate:function getDate(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Yt(this);var r=Zt(this);var e=zt(this);if(t<0&&r>11){if(r===12){return e}var n=_t(0,t+1);return n-e+1}return e},getUTCFullYear:function getUTCFullYear(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Gt(this);if(t<0&&Bt(this)>11){return t+1}return t},getUTCMonth:function getUTCMonth(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Gt(this);var r=Bt(this);if(t<0&&r>11){return 0}return r},getUTCDate:function getUTCDate(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Gt(this);var r=Bt(this);var e=Ht(this);if(t<0&&r>11){if(r===12){return e}var n=_t(0,t+1);return n-e+1}return e}},kt);C(Date.prototype,{toUTCString:function toUTCString(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=Wt(this);var r=Ht(this);var e=Bt(this);var n=Gt(this);var i=Lt(this);var a=Xt(this);var o=qt(this);return Qt[t]+", "+(r<10?"0"+r:r)+" "+Vt[e]+" "+n+" "+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+":"+(o<10?"0"+o:o)+" GMT"}},kt||At);C(Date.prototype,{toDateString:function toDateString(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=this.getDay();var r=this.getDate();var e=this.getMonth();var n=this.getFullYear();return Qt[t]+" "+Vt[e]+" "+(r<10?"0"+r:r)+" "+n}},kt||Pt);if(kt||$t){Date.prototype.toString=function toString(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")}var t=this.getDay();var r=this.getDate();var e=this.getMonth();var n=this.getFullYear();var i=this.getHours();var a=this.getMinutes();var o=this.getSeconds();var u=this.getTimezoneOffset();var f=Math.floor(Math.abs(u)/60);var s=Math.floor(Math.abs(u)%60);return Qt[t]+" "+Vt[e]+" "+(r<10?"0"+r:r)+" "+n+" "+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+":"+(o<10?"0"+o:o)+" GMT"+(u>0?"-":"+")+(f<10?"0"+f:f)+(s<10?"0"+s:s)};if(k){e.defineProperty(Date.prototype,"toString",{configurable:true,enumerable:false,writable:true})}}var tr=-621987552e5;var rr="-000001";var er=Date.prototype.toISOString&&new Date(tr).toISOString().indexOf(rr)===-1;var nr=Date.prototype.toISOString&&new Date(-1).toISOString()!=="1969-12-31T23:59:59.999Z";C(Date.prototype,{toISOString:function toISOString(){if(!isFinite(this)){throw new RangeError("Date.prototype.toISOString called on non-finite value.")}var t=Gt(this);var r=Bt(this);t+=Math.floor(r/12);r=(r%12+12)%12;var e=[r+1,Ht(this),Lt(this),Xt(this),qt(this)];t=(t<0?"-":t>9999?"+":"")+G("00000"+Math.abs(t),0<=t&&t<=9999?-4:-6);for(var n=0;n<e.length;++n){e[n]=G("00"+e[n],-2)}return t+"-"+Z(e,0,2).join("-")+"T"+Z(e,2).join(":")+"."+G("000"+Kt(this),-3)+"Z"}},er||nr);var ir=function(){try{return Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(tr).toJSON().indexOf(rr)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true}})}catch(t){return false}}();if(!ir){Date.prototype.toJSON=function toJSON(t){var r=e(this);var n=P.ToPrimitive(r);if(typeof n==="number"&&!isFinite(n)){return null}var i=r.toISOString;if(!m(i)){throw new TypeError("toISOString property is not callable")}return i.call(r)}}var ar=Date.parse("+033658-09-27T01:46:40.000Z")===1e15;var or=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));var ur=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(ur||or||!ar){var fr=Math.pow(2,31)-1;var sr=A(new Date(1970,0,1,0,0,0,fr+1).getTime());Date=function(t){var r=function Date(e,n,i,o,u,f,s){var l=arguments.length;var v;if(this instanceof t){var c=f;var h=s;if(sr&&l>=7&&s>fr){var p=Math.floor(s/fr)*fr;var g=Math.floor(p/1e3);c+=g;h-=g*1e3}v=l===1&&a(e)===e?new t(r.parse(e)):l>=7?new t(e,n,i,o,u,c,h):l>=6?new t(e,n,i,o,u,c):l>=5?new t(e,n,i,o,u):l>=4?new t(e,n,i,o):l>=3?new t(e,n,i):l>=2?new t(e,n):l>=1?new t(e):new t}else{v=t.apply(this,arguments)}if(!R(v)){C(v,{constructor:r},true)}return v};var e=new RegExp("^"+"(\\d{4}|[+-]\\d{6})"+"(?:-(\\d{2})"+"(?:-(\\d{2})"+"(?:"+"T(\\d{2})"+":(\\d{2})"+"(?:"+":(\\d{2})"+"(?:(\\.\\d{1,}))?"+")?"+"("+"Z|"+"(?:"+"([-+])"+"(\\d{2})"+":(\\d{2})"+")"+")?)?)?)?"+"$");var n=[0,31,59,90,120,151,181,212,243,273,304,334,365];var i=function dayFromMonth(t,r){var e=r>1?1:0;return n[r]+Math.floor((t-1969+e)/4)-Math.floor((t-1901+e)/100)+Math.floor((t-1601+e)/400)+365*(t-1970)};var o=function toUTC(r){var e=0;var n=r;if(sr&&n>fr){var i=Math.floor(n/fr)*fr;var a=Math.floor(i/1e3);e+=a;n-=a*1e3}return u(new t(1970,0,1,0,0,e,n))};for(var f in t){if(J(t,f)){r[f]=t[f]}}C(r,{now:t.now,UTC:t.UTC},true);r.prototype=t.prototype;C(r.prototype,{constructor:r},true);var s=function parse(r){var n=e.exec(r);if(n){var a=u(n[1]),f=u(n[2]||1)-1,s=u(n[3]||1)-1,l=u(n[4]||0),v=u(n[5]||0),c=u(n[6]||0),h=Math.floor(u(n[7]||0)*1e3),p=Boolean(n[4]&&!n[8]),g=n[9]==="-"?1:-1,y=u(n[10]||0),d=u(n[11]||0),w;var b=v>0||c>0||h>0;if(l<(b?24:25)&&v<60&&c<60&&h<1e3&&f>-1&&f<12&&y<24&&d<60&&s>-1&&s<i(a,f+1)-i(a,f)){w=((i(a,f)+s)*24+l+y*g)*60;w=((w+v+d*g)*60+c)*1e3+h;if(p){w=o(w)}if(-864e13<=w&&w<=864e13){return w}}return NaN}return t.parse.apply(this,arguments)};C(r,{parse:s});return r}(Date)}if(!Date.now){Date.now=function now(){return(new Date).getTime()}}var lr=f.toFixed&&(8e-5.toFixed(3)!=="0.000"||.9.toFixed(0)!=="1"||1.255.toFixed(2)!=="1.25"||0xde0b6b3a7640080.toFixed(0)!=="1000000000000000128");var vr={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function multiply(t,r){var e=-1;var n=r;while(++e<vr.size){n+=t*vr.data[e];vr.data[e]=n%vr.base;n=Math.floor(n/vr.base)}},divide:function divide(t){var r=vr.size,e=0;while(--r>=0){e+=vr.data[r];vr.data[r]=Math.floor(e/t);e=e%t*vr.base}},numToString:function numToString(){var t=vr.size;var r="";while(--t>=0){if(r!==""||t===0||vr.data[t]!==0){var e=a(vr.data[t]);if(r===""){r=e}else{r+=G("0000000",0,7-e.length)+e}}}return r},pow:function pow(t,r,e){return r===0?e:r%2===1?pow(t,r-1,e*t):pow(t*t,r/2,e)},log:function log(t){var r=0;var e=t;while(e>=4096){r+=12;e/=4096}while(e>=2){r+=1;e/=2}return r}};var cr=function toFixed(t){var r,e,n,i,o,f,s,l;r=u(t);r=A(r)?0:Math.floor(r);if(r<0||r>20){throw new RangeError("Number.toFixed called with invalid number of decimals")}e=u(this);if(A(e)){return"NaN"}if(e<=-1e21||e>=1e21){return a(e)}n="";if(e<0){n="-";e=-e}i="0";if(e>1e-21){o=vr.log(e*vr.pow(2,69,1))-69;f=o<0?e*vr.pow(2,-o,1):e/vr.pow(2,o,1);f*=4503599627370496;o=52-o;if(o>0){vr.multiply(0,f);s=r;while(s>=7){vr.multiply(1e7,0);s-=7}vr.multiply(vr.pow(10,s,1),0);s=o-1;while(s>=23){vr.divide(1<<23);s-=23}vr.divide(1<<s);vr.multiply(1,1);vr.divide(2);i=vr.numToString()}else{vr.multiply(0,f);vr.multiply(1<<-o,0);i=vr.numToString()+G("0.00000000000000000000",2,2+r)}}if(r>0){l=i.length;if(l<=r){i=n+G("0.0000000000000000000",0,r-l+2)+i}else{i=n+G(i,0,l-r)+"."+G(i,l-r)}}else{i=n+i}return i};C(f,{toFixed:cr},lr);var hr=function(){try{return 1..toPrecision(undefined)==="1"}catch(t){return true}}();var pr=f.toPrecision;C(f,{toPrecision:function toPrecision(t){return typeof t==="undefined"?pr.call(this):pr.call(this,t)}},hr);if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var t=typeof/()??/.exec("")[1]==="undefined";var r=Math.pow(2,32)-1;o.split=function(e,n){var i=String(this);if(typeof e==="undefined"&&n===0){return[]}if(!O(e)){return B(this,e,n)}var a=[];var o=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,f,s,l,c;var h=new RegExp(e.source,o+"g");if(!t){f=new RegExp("^"+h.source+"$(?!\\s)",o)}var p=typeof n==="undefined"?r:P.ToUint32(n);s=h.exec(i);while(s){l=s.index+s[0].length;if(l>u){W(a,G(i,u,s.index));if(!t&&s.length>1){s[0].replace(f,function(){for(var t=1;t<arguments.length-2;t++){if(typeof arguments[t]==="undefined"){s[t]=void 0}}})}if(s.length>1&&s.index<i.length){v.apply(a,Z(s,1))}c=s[0].length;u=l;if(a.length>=p){break}}if(h.lastIndex===s.index){h.lastIndex++}s=h.exec(i)}if(u===i.length){if(c||!h.test("")){W(a,"")}}else{W(a,G(i,u))}return a.length>p?G(a,0,p):a}})()}else if("0".split(void 0,0).length){o.split=function split(t,r){if(typeof t==="undefined"&&r===0){return[]}return B(this,t,r)}}var gr=o.replace;var yr=function(){var t=[];"x".replace(/x(.)?/g,function(r,e){W(t,e)});return t.length===1&&typeof t[0]==="undefined"}();if(!yr){o.replace=function replace(t,r){var e=m(r);var n=O(t)&&/\)[*?]/.test(t.source);if(!e||!n){return gr.call(this,t,r)}else{var i=function(e){var n=arguments.length;var i=t.lastIndex;t.lastIndex=0;var a=t.exec(e)||[];t.lastIndex=i;W(a,arguments[n-2],arguments[n-1]);return r.apply(this,a)};return gr.call(this,t,i)}}}var dr=o.substr;var wr="".substr&&"0b".substr(-1)!=="b";C(o,{substr:function substr(t,r){var e=t;if(t<0){e=y(this.length+t,0)}return dr.call(this,e,r)}},wr);var br="	\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003"+"\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028"+"\u2029\ufeff";var mr="\u200b";var Tr="["+br+"]";var Dr=new RegExp("^"+Tr+Tr+"*");var xr=new RegExp(Tr+Tr+"*$");var Sr=o.trim&&(br.trim()||!mr.trim());C(o,{trim:function trim(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return a(this).replace(Dr,"").replace(xr,"")}},Sr);var Or=p.bind(String.prototype.trim);var Er=o.lastIndexOf&&"abc\u3042\u3044".lastIndexOf("\u3042\u3044",2)!==-1;C(o,{lastIndexOf:function lastIndexOf(t){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}var r=a(this);var e=a(t);var n=arguments.length>1?u(arguments[1]):NaN;var i=A(n)?Infinity:P.ToInteger(n);var o=d(y(i,0),r.length);var f=e.length;var s=o+f;while(s>0){s=y(0,s-f);var l=H(G(r,s,o+f),e);if(l!==-1){return s+l}}return-1}},Er);var jr=o.lastIndexOf;C(o,{lastIndexOf:function lastIndexOf(t){return jr.apply(this,arguments)}},o.lastIndexOf.length!==1);if(parseInt(br+"08")!==8||parseInt(br+"0x16")!==22){parseInt=function(t){var r=/^[\-+]?0[xX]/;return function parseInt(e,n){var i=Or(e);var a=u(n)||(r.test(i)?16:10);return t(i,a)}}(parseInt)}if(1/parseFloat("-0")!==-Infinity){parseFloat=function(t){return function parseFloat(r){var e=Or(r);var n=t(e);return n===0&&G(e,0,1)==="-"?-0:n}}(parseFloat)}if(String(new RangeError("test"))!=="RangeError: test"){var Ir=function toString(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}var t=this.name;if(typeof t==="undefined"){t="Error"}else if(typeof t!=="string"){t=a(t)}var r=this.message;if(typeof r==="undefined"){r=""}else if(typeof r!=="string"){r=a(r)}if(!t){return r}if(!r){return t}return t+": "+r};Error.prototype.toString=Ir}if(k){var Mr=function(t,r){if(L(t,r)){var e=Object.getOwnPropertyDescriptor(t,r);e.enumerable=false;Object.defineProperty(t,r,e)}};Mr(Error.prototype,"message");if(Error.prototype.message!==""){Error.prototype.message=""}Mr(Error.prototype,"name")}if(String(/a/gim)!=="/a/gim"){var Ur=function toString(){var t="/"+this.source+"/";if(this.global){t+="g"}if(this.ignoreCase){t+="i"}if(this.multiline){t+="m"}return t};RegExp.prototype.toString=Ur}});
//# sourceMappingURL=es5-shim.map

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'frontend/_shared/libs/es6-shim/es6-shim.min.js' */
/*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.34.4
  * see https://github.com/paulmillr/es6-shim/blob/0.34.4/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=Object.keys;var o=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var i=function(e){try{e();return false}catch(t){return true}};var a=function valueOrFalseIfThrows(e){try{return e()}catch(t){return false}};var u=o(i);var f=function(){return!i(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&f();var c=function foo(){}.name==="foo";var l=Function.call.bind(Array.prototype.forEach);var p=Function.call.bind(Array.prototype.reduce);var v=Function.call.bind(Array.prototype.filter);var y=Function.call.bind(Array.prototype.some);var h=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var g=function(e,t,r){l(n(t),function(n){var o=t[n];h(e,n,o,!!r)})};var b=Function.call.bind(Object.prototype.toString);var d=typeof/abc/==="function"?function IsCallableSlow(e){return typeof e==="function"&&b(e)==="[object Function]"}:function IsCallableFast(e){return typeof e==="function"};var m={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&d(t.toString)){h(e,"toString",t.toString.bind(t),true)}}};var O=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var o=new r;if(typeof t!=="undefined"){n(t).forEach(function(e){m.defineByDescriptor(o,e,t[e])})}return o};var w=function(e,t){if(!Object.setPrototypeOf){return false}return a(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=O(e.prototype,{constructor:{value:r}});return t(r)})};var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=Function.call.bind(String.prototype.indexOf);var E=Function.call.bind(Array.prototype.concat);var P=Function.call.bind(Array.prototype.sort);var M=Function.call.bind(String.prototype.slice);var C=Function.call.bind(Array.prototype.push);var x=Function.apply.bind(Array.prototype.push);var N=Function.call.bind(Array.prototype.shift);var A=Math.max;var R=Math.min;var _=Math.floor;var k=Math.abs;var F=Math.log;var L=Math.sqrt;var D=Function.call.bind(Object.prototype.hasOwnProperty);var z;var q=function(){};var G=S.Symbol||{};var W=G.species||"@@species";var H=Number.isNaN||function isNaN(e){return e!==e};var V=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var B=function isArguments(e){return b(e)==="[object Arguments]"};var $=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&b(e)!=="[object Array]"&&b(e.callee)==="[object Function]"};var U=B(arguments)?B:$;var J={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},object:function(e){return e!==null&&typeof e==="object"},string:function(e){return b(e)==="[object String]"},regex:function(e){return b(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var K=function overrideNative(e,t,r){var n=e[t];h(e,t,r,true);m.preserveToString(e[t],n)};var X=typeof G==="function"&&typeof G["for"]==="function"&&J.symbol(G());var Z=J.symbol(G.iterator)?G.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){Z="@@iterator"}if(!S.Reflect){h(S,"Reflect",{})}var Y=S.Reflect;var Q=String;var ee={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!ee.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(e==null){throw new TypeError(t||"Cannot call method on "+e)}return e},TypeIsObject:function(e){if(e===void 0||e===null||e===true||e===false){return false}return typeof e==="function"||typeof e==="object"},ToObject:function(e,t){return Object(ee.RequireObjectCoercible(e,t))},IsCallable:d,IsConstructor:function(e){return ee.IsCallable(e)},ToInt32:function(e){return ee.ToNumber(e)>>0},ToUint32:function(e){return ee.ToNumber(e)>>>0},ToNumber:function(e){if(b(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=ee.ToNumber(e);if(H(t)){return 0}if(t===0||!V(t)){return t}return(t>0?1:-1)*_(k(t))},ToLength:function(e){var t=ee.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return H(e)&&H(t)},SameValueZero:function(e,t){return e===t||H(e)&&H(t)},IsIterable:function(e){return ee.TypeIsObject(e)&&(typeof e[Z]!=="undefined"||U(e))},GetIterator:function(e){if(U(e)){return new z(e,"value")}var t=ee.GetMethod(e,Z);if(!ee.IsCallable(t)){throw new TypeError("value is not an iterable")}var r=ee.Call(t,e);if(!ee.TypeIsObject(r)){throw new TypeError("bad iterator")}return r},GetMethod:function(e,t){var r=ee.ToObject(e)[t];if(r===void 0||r===null){return void 0}if(!ee.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var r=ee.GetMethod(e,"return");if(r===void 0){return}var n,o;try{n=ee.Call(r,e)}catch(i){o=i}if(t){return}if(o){throw o}if(!ee.TypeIsObject(n)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!ee.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=ee.IteratorNext(e);var r=ee.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n&&Y.construct){return Y.construct(e,t,o)}var i=o.prototype;if(!ee.TypeIsObject(i)){i=Object.prototype}var a=O(i);var u=ee.Call(e,a,t);return ee.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!ee.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[W];if(n===void 0||n===null){return t}if(!ee.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=ee.ToString(e);var i="<"+t;if(r!==""){var a=ee.ToString(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var f=i+">";var s=f+o;return s+"</"+t+">"},IsRegExp:function IsRegExp(e){if(!ee.TypeIsObject(e)){return false}var t=e[G.match];if(typeof t!=="undefined"){return!!t}return J.regex(e)},ToString:function ToString(e){return Q(e)}};if(s&&X){var te=function defineWellKnownSymbol(e){if(J.symbol(G[e])){return G[e]}var t=G["for"]("Symbol."+e);Object.defineProperty(G,e,{configurable:false,enumerable:false,writable:false,value:t});return t};if(!J.symbol(G.search)){var re=te("search");var ne=String.prototype.search;h(RegExp.prototype,re,function search(e){return ee.Call(ne,e,[this])});var oe=function search(e){var t=ee.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var r=ee.GetMethod(e,re);if(typeof r!=="undefined"){return ee.Call(r,e,[t])}}return ee.Call(ne,t,[ee.ToString(e)])};K(String.prototype,"search",oe)}if(!J.symbol(G.replace)){var ie=te("replace");var ae=String.prototype.replace;h(RegExp.prototype,ie,function replace(e,t){return ee.Call(ae,e,[this,t])});var ue=function replace(e,t){var r=ee.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var n=ee.GetMethod(e,ie);if(typeof n!=="undefined"){return ee.Call(n,e,[r,t])}}return ee.Call(ae,r,[ee.ToString(e),t])};K(String.prototype,"replace",ue)}if(!J.symbol(G.split)){var fe=te("split");var se=String.prototype.split;h(RegExp.prototype,fe,function split(e,t){return ee.Call(se,e,[this,t])});var ce=function split(e,t){var r=ee.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var n=ee.GetMethod(e,fe);if(typeof n!=="undefined"){return ee.Call(n,e,[r,t])}}return ee.Call(se,r,[ee.ToString(e),t])};K(String.prototype,"split",ce)}var le=J.symbol(G.match);var pe=le&&function(){var e={};e[G.match]=function(){return 42};return"a".match(e)!==42}();if(!le||pe){var ve=te("match");var ye=String.prototype.match;h(RegExp.prototype,ve,function match(e){return ee.Call(ye,e,[this])});var he=function match(e){var t=ee.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var r=ee.GetMethod(e,ve);if(typeof r!=="undefined"){return ee.Call(r,e,[t])}}return ee.Call(ye,t,[ee.ToString(e)])};K(String.prototype,"match",he)}}var ge=function wrapConstructor(e,t,r){m.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){l(Object.getOwnPropertyNames(e),function(n){if(n in q||r[n]){return}m.proxy(e,n,t)})}else{l(Object.keys(e),function(n){if(n in q||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;m.redefine(e.prototype,"constructor",t)};var be=function(){return this};var de=function(e){if(s&&!D(e,W)){m.getter(e,W,be)}};var me=function(e,t){var r=t||function iterator(){return this};h(e,Z,r);if(!e[Z]&&J.symbol(Z)){e[Z]=r}};var Oe=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var we=function createDataPropertyOrThrow(e,t,r){Oe(e,t,r);if(!ee.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var je=function(e,t,r,n){if(!ee.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!ee.TypeIsObject(o)){o=r}var i=O(o);for(var a in n){if(D(n,a)){var u=n[a];h(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var Se=String.fromCodePoint;K(String,"fromCodePoint",function fromCodePoint(e){return ee.Call(Se,this,arguments)})}var Te={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!ee.SameValue(r,ee.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){C(t,String.fromCharCode(r))}else{r-=65536;C(t,String.fromCharCode((r>>10)+55296));C(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=ee.ToObject(e,"bad callSite");var r=ee.ToObject(t.raw,"bad raw value");var n=r.length;var o=ee.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,f,s,c;while(a<o){u=ee.ToString(a);s=ee.ToString(r[u]);C(i,s);if(a+1>=o){break}f=a+1<arguments.length?arguments[a+1]:"";c=ee.ToString(f);C(i,c);a+=1}return i.join("")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){K(String,"raw",Te.raw)}g(String,Te);var Ie=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var Ee=Infinity;var Pe={repeat:function repeat(e){var t=ee.ToString(ee.RequireObjectCoercible(this));var r=ee.ToInteger(e);if(r<0||r>=Ee){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return Ie(t,r)},startsWith:function startsWith(e){var t=ee.ToString(ee.RequireObjectCoercible(this));if(ee.IsRegExp(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=ee.ToString(e);var n;if(arguments.length>1){n=arguments[1]}var o=A(ee.ToInteger(n),0);return M(t,o,o+r.length)===r},endsWith:function endsWith(e){var t=ee.ToString(ee.RequireObjectCoercible(this));if(ee.IsRegExp(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=ee.ToString(e);var n=t.length;var o;if(arguments.length>1){o=arguments[1]}var i=typeof o==="undefined"?n:ee.ToInteger(o);var a=R(A(i,0),n);return M(t,a-r.length,a)===r},includes:function includes(e){if(ee.IsRegExp(e)){throw new TypeError('"includes" does not accept a RegExp')}var t=ee.ToString(e);var r;if(arguments.length>1){r=arguments[1]}return I(this,t,r)!==-1},codePointAt:function codePointAt(e){var t=ee.ToString(ee.RequireObjectCoercible(this));var r=ee.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){K(String.prototype,"includes",Pe.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var Me=i(function(){"/a/".startsWith(/a/)});var Ce=a(function(){return"abc".startsWith("a",Infinity)===false});if(!Me||!Ce){K(String.prototype,"startsWith",Pe.startsWith);K(String.prototype,"endsWith",Pe.endsWith)}}if(X){var xe=a(function(){var e=/a/;e[G.match]=false;return"/a/".startsWith(e)});if(!xe){K(String.prototype,"startsWith",Pe.startsWith)}var Ne=a(function(){var e=/a/;e[G.match]=false;return"/a/".endsWith(e)});if(!Ne){K(String.prototype,"endsWith",Pe.endsWith)}var Ae=a(function(){var e=/a/;e[G.match]=false;return"/a/".includes(e)});if(!Ae){K(String.prototype,"includes",Pe.includes)}}g(String.prototype,Pe);var Re=["	\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var _e=new RegExp("(^["+Re+"]+)|(["+Re+"]+$)","g");var ke=function trim(){return ee.ToString(ee.RequireObjectCoercible(this)).replace(_e,"")};var Fe=["\x85","\u200b","\ufffe"].join("");var Le=new RegExp("["+Fe+"]","g");var De=/^[\-+]0x[0-9a-f]+$/i;var ze=Fe.trim().length!==Fe.length;h(String.prototype,"trim",ke,ze);var qe=function(e){ee.RequireObjectCoercible(e);this._s=ee.ToString(e);this._i=0};qe.prototype.next=function(){var e=this._s,t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return{value:void 0,done:true}}var r=e.charCodeAt(t),n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return{value:e.substr(t,o),done:false}};me(qe.prototype);me(String.prototype,function(){return new qe(this)});var Ge={from:function from(e){var r=this;var n;if(arguments.length>1){n=arguments[1]}var o,i;if(typeof n==="undefined"){o=false}else{if(!ee.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){i=arguments[2]}o=true}var a=typeof(U(e)||ee.GetMethod(e,Z))!=="undefined";var u,f,s;if(a){f=ee.IsConstructor(r)?Object(new r):[];var c=ee.GetIterator(e);var l,p;s=0;while(true){l=ee.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=typeof i==="undefined"?n(p,s):t(n,i,p,s)}f[s]=p}catch(v){ee.IteratorClose(c,true);throw v}s+=1}u=s}else{var y=ee.ToObject(e);u=ee.ToLength(y.length);f=ee.IsConstructor(r)?Object(new r(u)):new Array(u);var h;for(s=0;s<u;++s){h=y[s];if(o){h=typeof i==="undefined"?n(h,s):t(n,i,h,s)}f[s]=h}}f.length=u;return f},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!ee.IsCallable(t)?new Array(e):ee.Construct(t,[e]);for(var o=0;o<e;++o){we(n,o,arguments[o])}n.length=e;return n}};g(Array,Ge);de(Array);var We=function(e){return{value:e,done:arguments.length===0}};z=function(e,t){this.i=0;this.array=e;this.kind=t};g(z.prototype,{next:function(){var e=this.i,t=this.array;if(!(this instanceof z)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=ee.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return{value:o,done:false}}}this.array=void 0;return{value:void 0,done:true}}});me(z.prototype);var He=function orderKeys(e,t){var r=String(ee.ToInteger(e))===e;var n=String(ee.ToInteger(t))===t;if(r&&n){return t-e}else if(r&&!n){return-1}else if(!r&&n){return 1}else{return e.localeCompare(t)}};var Ve=function getAllKeys(e){var t=[];var r=[];for(var n in e){C(D(e,n)?t:r,n)}P(t,He);P(r,He);return E(t,r)};var Be=function(e,t){g(this,{object:e,array:Ve(e),kind:t})};g(Be.prototype,{next:function next(){var e;var t=this.array;if(!(this instanceof Be)){throw new TypeError("Not an ObjectIterator")}while(t.length>0){e=N(t);if(!(e in this.object)){continue}if(this.kind==="key"){return We(e)}else if(this.kind==="value"){return We(this.object[e])}else{return We([e,this.object[e]])}}return We()}});me(Be.prototype);var $e=Array.of===Ge.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!$e){K(Array,"of",Ge.of)}var Ue={copyWithin:function copyWithin(e,t){var r=ee.ToObject(this);var n=ee.ToLength(r.length);var o=ee.ToInteger(e);var i=ee.ToInteger(t);var a=o<0?A(n+o,0):R(o,n);var u=i<0?A(n+i,0):R(i,n);var f;if(arguments.length>2){f=arguments[2]}var s=typeof f==="undefined"?n:ee.ToInteger(f);var c=s<0?A(n+s,0):R(s,n);var l=R(c-u,n-a);var p=1;if(u<a&&a<u+l){p=-1;u+=l-1;a+=l-1}while(l>0){if(u in r){r[a]=r[u]}else{delete r[a]}u+=p;a+=p;l-=1}return r},fill:function fill(e){var t;if(arguments.length>1){t=arguments[1]}var r;if(arguments.length>2){r=arguments[2]}var n=ee.ToObject(this);var o=ee.ToLength(n.length);t=ee.ToInteger(typeof t==="undefined"?0:t);r=ee.ToInteger(typeof r==="undefined"?o:r);var i=t<0?A(o+t,0):R(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=ee.ToObject(this);var n=ee.ToLength(r.length);if(!ee.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=ee.ToObject(this);var n=ee.ToLength(r.length);if(!ee.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new z(this,"key")},values:function values(){return new z(this,"value")},entries:function entries(){return new z(this,"entry")}};if(Array.prototype.keys&&!ee.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!ee.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[Z]){g(Array.prototype,{values:Array.prototype[Z]});if(J.symbol(G.unscopables)){Array.prototype[G.unscopables].values=true}}if(c&&Array.prototype.values&&Array.prototype.values.name!=="values"){var Je=Array.prototype.values;K(Array.prototype,"values",function values(){return ee.Call(Je,this,arguments)});h(Array.prototype,Z,Array.prototype.values,true)}g(Array.prototype,Ue);me(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){me(Object.getPrototypeOf([].values()))}var Ke=function(){return a(function(){return Array.from({length:-1}).length===0})}();var Xe=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!Ke||!Xe){K(Array,"from",Ge.from)}var Ze=function(){return a(function(){return Array.from([0],void 0)})}();if(!Ze){var Ye=Array.from;K(Array,"from",function from(e){if(arguments.length>1&&typeof arguments[1]!=="undefined"){return ee.Call(Ye,this,arguments)}else{return t(Ye,this,e)}})}var Qe=-(Math.pow(2,32)-1);var et=function(e,r){var n={length:Qe};n[r?(n.length>>>0)-1:0]=true;return a(function(){t(e,n,function(){throw new RangeError("should not reach here")},[]);return true})};if(!et(Array.prototype.forEach)){var tt=Array.prototype.forEach;K(Array.prototype,"forEach",function forEach(e){return ee.Call(tt,this.length>=0?this:[],arguments)},true)}if(!et(Array.prototype.map)){var rt=Array.prototype.map;K(Array.prototype,"map",function map(e){return ee.Call(rt,this.length>=0?this:[],arguments)},true)}if(!et(Array.prototype.filter)){var nt=Array.prototype.filter;K(Array.prototype,"filter",function filter(e){return ee.Call(nt,this.length>=0?this:[],arguments)},true)}if(!et(Array.prototype.some)){var ot=Array.prototype.some;K(Array.prototype,"some",function some(e){return ee.Call(ot,this.length>=0?this:[],arguments)},true)}if(!et(Array.prototype.every)){var it=Array.prototype.every;K(Array.prototype,"every",function every(e){return ee.Call(it,this.length>=0?this:[],arguments)},true)}if(!et(Array.prototype.reduce)){var at=Array.prototype.reduce;K(Array.prototype,"reduce",function reduce(e){return ee.Call(at,this.length>=0?this:[],arguments)},true)}if(!et(Array.prototype.reduceRight,true)){var ut=Array.prototype.reduceRight;K(Array.prototype,"reduceRight",function reduceRight(e){return ee.Call(ut,this.length>=0?this:[],arguments)},true)}var ft=Number("0o10")!==8;var st=Number("0b10")!==2;var ct=y(Fe,function(e){return Number(e+0+e)===0});if(ft||st||ct){var lt=Number;var pt=/^0b[01]+$/i;var vt=/^0o[0-7]+$/i;var yt=pt.test.bind(pt);var ht=vt.test.bind(vt);var gt=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(J.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(J.primitive(t)){return t}}throw new TypeError("No default value")};var bt=Le.test.bind(Le);var dt=De.test.bind(De);var mt=function(){var e=function Number(t){var r;if(arguments.length>0){r=J.primitive(t)?t:gt(t,"number")}else{r=0}if(typeof r==="string"){r=ee.Call(ke,r);if(yt(r)){r=parseInt(M(r,2),2)}else if(ht(r)){r=parseInt(M(r,2),8)}else if(bt(r)||dt(r)){r=NaN}}var n=this;var o=a(function(){lt.prototype.valueOf.call(n);return true});if(n instanceof e&&!o){return new lt(r)}return lt(r)};return e}();ge(lt,mt,{});g(mt,{NaN:lt.NaN,MAX_VALUE:lt.MAX_VALUE,MIN_VALUE:lt.MIN_VALUE,NEGATIVE_INFINITY:lt.NEGATIVE_INFINITY,POSITIVE_INFINITY:lt.POSITIVE_INFINITY});Number=mt;m.redefine(S,"Number",mt)}var Ot=Math.pow(2,53)-1;g(Number,{MAX_SAFE_INTEGER:Ot,MIN_SAFE_INTEGER:-Ot,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:V,isInteger:function isInteger(e){return V(e)&&ee.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&k(e)<=Number.MAX_SAFE_INTEGER},isNaN:H});h(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if(![,1].find(function(e,t){return t===0})){K(Array.prototype,"find",Ue.find)}if([,1].findIndex(function(e,t){return t===0})!==0){K(Array.prototype,"findIndex",Ue.findIndex)}var wt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var jt=function ensureEnumerable(e,t){if(s&&wt(e,t)){Object.defineProperty(e,t,{enumerable:false})}};var St=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var Tt=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var It=function(e,t){var r=n(Object(t));var o;if(ee.IsCallable(Object.getOwnPropertySymbols)){o=v(Object.getOwnPropertySymbols(Object(t)),wt(t))}return p(E(r,o||[]),Tt(t),e)};var Et={assign:function(e,t){var r=ee.ToObject(e,"Cannot convert undefined or null to object");return p(ee.Call(St,1,arguments),It,r)},is:function is(e,t){return ee.SameValue(e,t)}};var Pt=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(Pt){K(Object,"assign",Et.assign)}g(Object,Et);if(s){var Mt={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!ee.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||ee.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(a){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};g(Object,Mt)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf,r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var Ct=!i(function(){Object.keys("foo")});if(!Ct){var xt=Object.keys;K(Object,"keys",function keys(e){return xt(ee.ToObject(e))});n=Object.keys}if(Object.getOwnPropertyNames){var Nt=!i(function(){Object.getOwnPropertyNames("foo")});if(!Nt){var At=typeof window==="object"?Object.getOwnPropertyNames(window):[];var Rt=Object.getOwnPropertyNames;K(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=ee.ToObject(e);if(b(t)==="[object Window]"){try{return Rt(t)}catch(r){return E([],At)}}return Rt(t)})}}if(Object.getOwnPropertyDescriptor){var _t=!i(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!_t){var kt=Object.getOwnPropertyDescriptor;K(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return kt(ee.ToObject(e),t)})}}if(Object.seal){var Ft=!i(function(){Object.seal("foo")});if(!Ft){var Lt=Object.seal;K(Object,"seal",function seal(e){if(!J.object(e)){return e}return Lt(e)})}}if(Object.isSealed){var Dt=!i(function(){Object.isSealed("foo")});if(!Dt){var zt=Object.isSealed;K(Object,"isSealed",function isSealed(e){if(!J.object(e)){return true}return zt(e)})}}if(Object.freeze){var qt=!i(function(){Object.freeze("foo")});if(!qt){var Gt=Object.freeze;K(Object,"freeze",function freeze(e){if(!J.object(e)){return e}return Gt(e)})}}if(Object.isFrozen){var Wt=!i(function(){Object.isFrozen("foo")});if(!Wt){var Ht=Object.isFrozen;K(Object,"isFrozen",function isFrozen(e){if(!J.object(e)){return true}return Ht(e)})}}if(Object.preventExtensions){var Vt=!i(function(){Object.preventExtensions("foo")});if(!Vt){var Bt=Object.preventExtensions;K(Object,"preventExtensions",function preventExtensions(e){if(!J.object(e)){return e}return Bt(e)})}}if(Object.isExtensible){var $t=!i(function(){Object.isExtensible("foo")});if(!$t){var Ut=Object.isExtensible;K(Object,"isExtensible",function isExtensible(e){if(!J.object(e)){return false}return Ut(e)})}}if(Object.getPrototypeOf){var Jt=!i(function(){Object.getPrototypeOf("foo")});if(!Jt){var Kt=Object.getPrototypeOf;K(Object,"getPrototypeOf",function getPrototypeOf(e){return Kt(ee.ToObject(e))})}}var Xt=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&ee.IsCallable(e.get)}();if(s&&!Xt){var Zt=function flags(){if(!ee.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};m.getter(RegExp.prototype,"flags",Zt)}var Yt=s&&a(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});var Qt=X&&s&&function(){var e=/./;e[G.match]=false;return RegExp(e)===e}();if(s&&(!Yt||Qt)){var er=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get;var tr=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{};var rr=function(){return this.source};var nr=ee.IsCallable(tr.get)?tr.get:rr;var or=RegExp;var ir=function(){return function RegExp(e,t){var r=ee.IsRegExp(e);var n=this instanceof RegExp;if(!n&&r&&typeof t==="undefined"&&e.constructor===RegExp){return e}var o=e;var i=t;if(J.regex(e)){o=ee.Call(nr,e);i=typeof t==="undefined"?ee.Call(er,e):t;return new RegExp(o,i)}else if(r){o=e.source;i=typeof t==="undefined"?e.flags:t}return new or(e,t)}}();ge(or,ir,{$input:true});RegExp=ir;m.redefine(S,"RegExp",ir)}if(s){var ar={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(n(ar),function(e){if(e in RegExp&&!(ar[e]in RegExp)){m.getter(RegExp,ar[e],function get(){return RegExp[e]})}})}de(RegExp);var ur=1/Number.EPSILON;var fr=function roundTiesToEven(e){return e+ur-ur};var sr=Math.pow(2,-23);var cr=Math.pow(2,127)*(2-sr);var lr=Math.pow(2,-126);var pr=Number.prototype.clz;delete Number.prototype.clz;var vr={acosh:function acosh(e){var t=Number(e);if(Number.isNaN(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return F(t/Math.E+L(t+1)*L(t-1)/Math.E)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}return t<0?-Math.asinh(-t):F(t+L(t*t+1))},atanh:function atanh(e){var t=Number(e);if(Number.isNaN(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*F((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0,n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=Math.exp(F(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var t=Number(e);var r=ee.ToUint32(t);if(r===0){return 32}return pr?ee.Call(pr,r):31-_(F(r+.5)*Math.LOG2E)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(Number.isNaN(t)){return NaN}if(!T(t)){return Infinity}if(t<0){t=-t}if(t>21){return Math.exp(t)/2}return(Math.exp(t)+Math.exp(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(k(t)>.5){return Math.exp(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=k(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*L(r)},log2:function log2(e){return F(e)*Math.LOG2E},log10:function log10(e){return F(e)*Math.LOG10E},log1p:function log1p(e){var t=Number(e);if(t<-1||Number.isNaN(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(F(1+t)/(1+t-1))},sign:function sign(e){var t=Number(e);if(t===0){return t}if(Number.isNaN(t)){return t}return t<0?-1:1},sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}if(k(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(Math.exp(t-1)-Math.exp(-t-1))*Math.E/2},tanh:function tanh(e){var t=Number(e);if(Number.isNaN(t)||t===0){return t}if(t===Infinity){return 1}if(t===-Infinity){return-1}var r=Math.expm1(t);var n=Math.expm1(-t);if(r===Infinity){return 1}if(n===Infinity){return-1}return(r-n)/(Math.exp(t)+Math.exp(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-_(-t):_(t)},imul:function imul(e,t){var r=ee.ToUint32(e);var n=ee.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||H(t)){return t}var r=Math.sign(t);var n=k(t);if(n<lr){return r*fr(n/lr/sr)*lr*sr}var o=(1+sr/Number.EPSILON)*n;var i=o-(o-n);if(i>cr||H(i)){return r*Infinity}return r*i}};g(Math,vr);h(Math,"log1p",vr.log1p,Math.log1p(-1e-17)!==-1e-17);h(Math,"asinh",vr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));h(Math,"tanh",vr.tanh,Math.tanh(-2e-17)!==-2e-17);h(Math,"acosh",vr.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);h(Math,"cbrt",vr.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);h(Math,"sinh",vr.sinh,Math.sinh(-2e-17)!==-2e-17);var yr=Math.expm1(10);h(Math,"expm1",vr.expm1,yr>22025.465794806718||yr<22025.465794806718);var hr=Math.round;var gr=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var br=ur+1;var dr=2*ur-1;var mr=[br,dr].every(function(e){return Math.round(e)===e});h(Math,"round",function round(e){var t=_(e);var r=t===-1?-0:t+1;return e-t<.5?t:r},!gr||!mr);m.preserveToString(Math.round,hr);var Or=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=vr.imul;
m.preserveToString(Math.imul,Or)}if(Math.imul.length!==2){K(Math,"imul",function imul(e,t){return ee.Call(Or,Math,arguments)})}var wr=function(){var e=S.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}ee.IsPromise=function(e){if(!ee.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!ee.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.resolve=void 0;t.reject=void 0;t.promise=new e(r);if(!(ee.IsCallable(t.resolve)&&ee.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&ee.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){C(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=N(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;var t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}};var i=ee.IsCallable(S.setImmediate)?S.setImmediate:typeof process==="object"&&process.nextTick?process.nextTick:o()||(ee.IsCallable(n)?n():function(t){e(t,0)});var a=function(e){return e};var u=function(e){throw e};var f=0;var s=1;var c=2;var l=0;var p=1;var v=2;var y={};var h=function(e,t,r){i(function(){b(e,t,r)})};var b=function(e,t,r){var n,o;if(t===y){return e(r)}try{n=e(r);o=t.resolve}catch(i){n=i;o=t.reject}o(n)};var d=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.fulfillReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+l],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=s;r.reactionLength=0};var m=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.rejectReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+p],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=c;r.reactionLength=0};var O=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return m(e,new TypeError("Self resolution"))}if(!ee.TypeIsObject(r)){return d(e,r)}try{n=r.then}catch(o){return m(e,o)}if(!ee.IsCallable(n)){return d(e,r)}i(function(){j(e,r,n)})};var n=function(r){if(t){return}t=true;return m(e,r)};return{resolve:r,reject:n}};var w=function(e,r,n,o){if(e===I){t(e,r,n,o,y)}else{t(e,r,n,o)}};var j=function(e,t,r){var n=O(e);var o=n.resolve;var i=n.reject;try{w(r,t,o,i)}catch(a){i(a)}};var T,I;var E=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!ee.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=je(this,e,T,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}});var n=O(r);var o=n.reject;try{t(n.resolve,o)}catch(i){o(i)}return r};return e}();T=E.prototype;var P=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var M=function(e,t,r){var n=e.iterator;var o=[],i={count:1},a,u;var f=0;while(true){try{a=ee.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(s){e.done=true;throw s}o[f]=void 0;var c=t.resolve(u);var l=P(f,o,r,i);i.count+=1;w(c.then,c,l,r.reject);f+=1}if(--i.count===0){var p=r.resolve;p(o)}return r.promise};var x=function(e,t,r){var n=e.iterator,o,i,a;while(true){try{o=ee.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(u){e.done=true;throw u}a=t.resolve(i);w(a.then,a,r.resolve,r.reject)}return r.promise};g(E,{all:function all(e){var t=this;if(!ee.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=ee.GetIterator(e);i={iterator:o,done:false};return M(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{ee.IteratorClose(o,true)}catch(f){u=f}}var s=n.reject;s(u);return n.promise}},race:function race(e){var t=this;if(!ee.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=ee.GetIterator(e);i={iterator:o,done:false};return x(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{ee.IteratorClose(o,true)}catch(f){u=f}}var s=n.reject;s(u);return n.promise}},reject:function reject(e){var t=this;if(!ee.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(!ee.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}if(ee.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});g(T,{"catch":function(e){return this.then(null,e)},then:function then(e,t){var n=this;if(!ee.IsPromise(n)){throw new TypeError("not a promise")}var o=ee.SpeciesConstructor(n,E);var i;var g=arguments.length>2&&arguments[2]===y;if(g&&o===E){i=y}else{i=new r(o)}var b=ee.IsCallable(e)?e:a;var d=ee.IsCallable(t)?t:u;var m=n._promise;var O;if(m.state===f){if(m.reactionLength===0){m.fulfillReactionHandler0=b;m.rejectReactionHandler0=d;m.reactionCapability0=i}else{var w=3*(m.reactionLength-1);m[w+l]=b;m[w+p]=d;m[w+v]=i}m.reactionLength+=1}else if(m.state===s){O=m.result;h(b,i,O)}else if(m.state===c){O=m.result;h(d,i,O)}else{throw new TypeError("unexpected Promise state")}return i.promise}});y=new r(E);I=T.then;return E}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof wr==="function"){g(S,{Promise:wr});var jr=w(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var Sr=!i(function(){S.Promise.reject(42).then(null,5).then(null,q)});var Tr=i(function(){S.Promise.call(3,q)});var Ir=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);try{r.then(null,q).then(null,q)}catch(n){return true}return t===r}(S.Promise);var Er=s&&function(){var e=0;var t=Object.defineProperty({},"then",{get:function(){e+=1}});Promise.resolve(t);return e===1}();var Pr=function BadResolverPromise(e){var t=new Promise(e);e(3,function(){});this.then=t.then;this.constructor=BadResolverPromise};Pr.prototype=Promise.prototype;Pr.all=Promise.all;var Mr=a(function(){return!!Pr.all([1,2])});if(!jr||!Sr||!Tr||Ir||!Er||Mr){Promise=wr;K(S,"Promise",wr)}if(Promise.all.length!==1){var Cr=Promise.all;K(Promise,"all",function all(e){return ee.Call(Cr,this,arguments)})}if(Promise.race.length!==1){var xr=Promise.race;K(Promise,"race",function race(e){return ee.Call(xr,this,arguments)})}if(Promise.resolve.length!==1){var Nr=Promise.resolve;K(Promise,"resolve",function resolve(e){return ee.Call(Nr,this,arguments)})}if(Promise.reject.length!==1){var Ar=Promise.reject;K(Promise,"reject",function reject(e){return ee.Call(Ar,this,arguments)})}jt(Promise,"all");jt(Promise,"race");jt(Promise,"resolve");jt(Promise,"reject");de(Promise)}var Rr=function(e){var t=n(p(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var _r=Rr(["z","a","bb"]);var kr=Rr(["z",1,"a","3",2]);if(s){var Fr=function fastkey(e){if(!_r){return null}if(typeof e==="undefined"||e===null){return"^"+ee.ToString(e)}else if(typeof e==="string"){return"$"+e}else if(typeof e==="number"){if(!kr){return"n"+e}return e}else if(typeof e==="boolean"){return"b"+e}return null};var Lr=function emptyObject(){return Object.create?Object.create(null):{}};var Dr=function addIterableToMap(e,n,o){if(r(o)||J.string(o)){l(o,function(e){if(!ee.TypeIsObject(e)){throw new TypeError("Iterator value "+e+" is not an entry object")}n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.set;if(!ee.IsCallable(a)){throw new TypeError("bad map")}i=ee.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=ee.IteratorStep(i);if(u===false){break}var f=u.value;try{if(!ee.TypeIsObject(f)){throw new TypeError("Iterator value "+f+" is not an entry object")}t(a,n,f[0],f[1])}catch(s){ee.IteratorClose(i,true);throw s}}}}};var zr=function addIterableToSet(e,n,o){if(r(o)||J.string(o)){l(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.add;if(!ee.IsCallable(a)){throw new TypeError("bad set")}i=ee.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=ee.IteratorStep(i);if(u===false){break}var f=u.value;try{t(a,n,f)}catch(s){ee.IteratorClose(i,true);throw s}}}}};var qr={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!ee.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+ee.ToString(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i,t=this.kind,r=this.head,n;if(typeof this.i==="undefined"){return{value:void 0,done:true}}while(e.isRemoved()&&e!==r){e=e.prev}while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return{value:n,done:false}}}this.i=void 0;return{value:void 0,done:true}}};me(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=je(this,Map,a,{_es6map:true,_head:null,_storage:Lr(),_size:0});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){Dr(Map,e,arguments[0])}return e};a=u.prototype;m.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});g(a,{get:function get(e){o(this,"get");var t=Fr(e);if(t!==null){var r=this._storage[t];if(r){return r.value}else{return}}var n=this._head,i=n;while((i=i.next)!==n){if(ee.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Fr(e);if(t!==null){return typeof this._storage[t]!=="undefined"}var r=this._head,n=r;while((n=n.next)!==r){if(ee.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head,i=n,a;var u=Fr(e);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}while((i=i.next)!==n){if(ee.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(ee.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},"delete":function(t){o(this,"delete");var r=this._head,n=r;var i=Fr(t);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}while((n=n.next)!==r){if(ee.SameValueZero(n.key,t)){n.key=n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._size=0;this._storage=Lr();var t=this._head,r=t,n=r.next;while((r=n)!==t){r.key=r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});me(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!ee.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+ee.ToString(t))}};var o;var i=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=je(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:Lr()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){zr(Set,e,arguments[0])}return e};o=i.prototype;var a=function(e){var t=e;if(t==="^null"){return null}else if(t==="^undefined"){return void 0}else{var r=t.charAt(0);if(r==="$"){return M(t,1)}else if(r==="n"){return+M(t,1)}else if(r==="b"){return t==="btrue"}}return+t};var u=function ensureMap(e){if(!e["[[SetData]]"]){var t=e["[[SetData]]"]=new qr.Map;l(n(e._storage),function(e){var r=a(e);t.set(r,r)});e["[[SetData]]"]=t}e._storage=null};m.getter(i.prototype,"size",function(){r(this,"size");if(this._storage){return n(this._storage).length}u(this);return this["[[SetData]]"].size});g(i.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Fr(e))!==null){return!!this._storage[t]}u(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Fr(e))!==null){this._storage[t]=true;return this}u(this);this["[[SetData]]"].set(e,e);return this},"delete":function(e){r(this,"delete");var t;if(this._storage&&(t=Fr(e))!==null){var n=D(this._storage,t);return delete this._storage[t]&&n}u(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Lr()}if(this["[[SetData]]"]){this["[[SetData]]"].clear()}},values:function values(){r(this,"values");u(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");u(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;u(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});h(i.prototype,"keys",i.prototype.values,true);me(i.prototype,i.prototype.values);return i}()};if(S.Map||S.Set){var Gr=a(function(){return new Map([[1,2]]).get(1)===2});if(!Gr){var Wr=S.Map;S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new Wr;if(arguments.length>0){Dr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,S.Map.prototype);return e};S.Map.prototype=O(Wr.prototype);h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,Wr)}var Hr=new Map;var Vr=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);e.set(-0,e);return e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}();var Br=Hr.set(1,2)===Hr;if(!Vr||!Br){var $r=Map.prototype.set;K(Map.prototype,"set",function set(e,r){t($r,this,e===0?0:e,r);return this})}if(!Vr){var Ur=Map.prototype.get;var Jr=Map.prototype.has;g(Map.prototype,{get:function get(e){return t(Ur,this,e===0?0:e)},has:function has(e){return t(Jr,this,e===0?0:e)}},true);m.preserveToString(Map.prototype.get,Ur);m.preserveToString(Map.prototype.has,Jr)}var Kr=new Set;var Xr=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(Kr);var Zr=Kr.add(1)===Kr;if(!Xr||!Zr){var Yr=Set.prototype.add;Set.prototype.add=function add(e){t(Yr,this,e===0?0:e);return this};m.preserveToString(Set.prototype.add,Yr)}if(!Xr){var Qr=Set.prototype.has;Set.prototype.has=function has(e){return t(Qr,this,e===0?0:e)};m.preserveToString(Set.prototype.has,Qr);var en=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(en,this,e===0?0:e)};m.preserveToString(Set.prototype["delete"],en)}var tn=w(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var rn=Object.setPrototypeOf&&!tn;var nn=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||rn||!nn){var on=S.Map;S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new on;if(arguments.length>0){Dr(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Map.prototype);return e};S.Map.prototype=on.prototype;h(S.Map.prototype,"constructor",S.Map,true);m.preserveToString(S.Map,on)}var an=w(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var un=Object.setPrototypeOf&&!an;var fn=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||un||!fn){var sn=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new sn;if(arguments.length>0){zr(Set,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Set.prototype);return e};S.Set.prototype=sn.prototype;h(S.Set.prototype,"constructor",S.Set,true);m.preserveToString(S.Set,sn)}var cn=!a(function(){return(new Map).keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||(new S.Map).size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||u(S.Map)||u(S.Set)||typeof(new S.Map).keys().next!=="function"||cn||!tn){g(S,{Map:qr.Map,Set:qr.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){h(S.Set.prototype,"keys",S.Set.prototype.values,true)}me(Object.getPrototypeOf((new S.Map).keys()));me(Object.getPrototypeOf((new S.Set).keys()));if(c&&S.Set.prototype.has.name!=="has"){var ln=S.Set.prototype.has;K(S.Set.prototype,"has",function has(e){return t(ln,this,e)})}}g(S,qr);de(S.Map);de(S.Set)}var pn=function throwUnlessTargetIsObject(e){if(!ee.TypeIsObject(e)){throw new TypeError("target must be an object")}};var vn={apply:function apply(){return ee.Call(ee.Call,null,arguments)},construct:function construct(e,t){if(!ee.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length>2?arguments[2]:e;if(!ee.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return ee.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){pn(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},enumerate:function enumerate(e){pn(e);return new Be(e,"key")},has:function has(e,t){pn(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(vn,{ownKeys:function ownKeys(e){pn(e);var t=Object.getOwnPropertyNames(e);if(ee.IsCallable(Object.getOwnPropertySymbols)){x(t,Object.getOwnPropertySymbols(e))}return t}})}var yn=function ConvertExceptionToBoolean(e){return!i(e)};if(Object.preventExtensions){Object.assign(vn,{isExtensible:function isExtensible(e){pn(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){pn(e);return yn(function(){Object.preventExtensions(e)})}})}if(s){var hn=function get(e,t,r){var n=Object.getOwnPropertyDescriptor(e,t);if(!n){var o=Object.getPrototypeOf(e);if(o===null){return void 0}return hn(o,t,r)}if("value"in n){return n.value}if(n.get){return ee.Call(n.get,r)}return void 0};var gn=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return gn(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!ee.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return Y.defineProperty(o,r,{value:n})}else{return Y.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(vn,{defineProperty:function defineProperty(e,t,r){pn(e);return yn(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){pn(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){pn(e);var r=arguments.length>2?arguments[2]:e;return hn(e,t,r)},set:function set(e,t,r){pn(e);var n=arguments.length>3?arguments[3]:e;return gn(e,t,r,n)}})}if(Object.getPrototypeOf){var bn=Object.getPrototypeOf;vn.getPrototypeOf=function getPrototypeOf(e){pn(e);return bn(e)}}if(Object.setPrototypeOf&&vn.getPrototypeOf){var dn=function(e,t){var r=t;while(r){if(e===r){return true}r=vn.getPrototypeOf(r)}return false};Object.assign(vn,{setPrototypeOf:function setPrototypeOf(e,t){pn(e);if(t!==null&&!ee.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===Y.getPrototypeOf(e)){return true}if(Y.isExtensible&&!Y.isExtensible(e)){return false}if(dn(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var mn=function(e,t){if(!ee.IsCallable(S.Reflect[e])){h(S.Reflect,e,t)}else{var r=a(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){K(S.Reflect,e,t)}}};Object.keys(vn).forEach(function(e){mn(e,vn[e])});if(c&&S.Reflect.getPrototypeOf.name!=="getPrototypeOf"){var On=S.Reflect.getPrototypeOf;K(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(On,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(a(function(){S.Reflect.setPrototypeOf(1,{});return true})){K(S.Reflect,"setPrototypeOf",vn.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!a(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){K(S.Reflect,"defineProperty",vn.defineProperty)}}if(S.Reflect.construct){if(!a(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){K(S.Reflect,"construct",vn.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var wn=Date.prototype.toString;var jn=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return ee.Call(wn,this)};K(Date.prototype,"toString",jn)}var Sn={anchor:function anchor(e){return ee.CreateHTML(this,"a","name",e)},big:function big(){return ee.CreateHTML(this,"big","","")},blink:function blink(){return ee.CreateHTML(this,"blink","","")},bold:function bold(){return ee.CreateHTML(this,"b","","")},fixed:function fixed(){return ee.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return ee.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return ee.CreateHTML(this,"font","size",e)},italics:function italics(){return ee.CreateHTML(this,"i","","")},link:function link(e){return ee.CreateHTML(this,"a","href",e)},small:function small(){return ee.CreateHTML(this,"small","","")},strike:function strike(){return ee.CreateHTML(this,"strike","","")},sub:function sub(){return ee.CreateHTML(this,"sub","","")},sup:function sub(){return ee.CreateHTML(this,"sup","","")}};l(Object.keys(Sn),function(e){var r=String.prototype[e];var n=false;if(ee.IsCallable(r)){var o=t(r,"",' " ');var i=E([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){K(String.prototype,e,Sn[e])}});var Tn=function(){if(!X){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e(G())!=="undefined"){return true}if(e([G()])!=="[null]"){return true}var t={a:G()};t[G()]=true;if(e(t)!=="{}"){return true}return false}();var In=a(function(){if(!X){return true}return JSON.stringify(Object(G()))==="{}"&&JSON.stringify([Object(G())])==="[{}]"});if(Tn||!In){var En=JSON.stringify;K(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=ee.IsCallable(n)?n:null;var a=function(e,r){var n=i?t(i,this,e,r):r;if(typeof n!=="symbol"){if(J.symbol(n)){return Tt({})(n)}else{return n}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return En.apply(this,o)})}return S});
//# sourceMappingURL=es6-shim.map

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'frontend/_shared/libs/mutationObserver/MutationObserver.js' */
if(typeof WeakMap==="undefined"){(function(){var b=Object.defineProperty;var a=Date.now()%1000000000;var c=function(){this.name="__st"+(Math.random()*1000000000>>>0)+(a+++"__")};c.prototype={set:function(d,f){var e=d[this.name];if(e&&e[0]===d){e[1]=f}else{b(d,this.name,{value:[d,f],writable:true})}return this},get:function(d){var e;return(e=d[this.name])&&e[0]===d?e[1]:undefined},"delete":function(d){var e=d[this.name];if(!e||e[0]!==d){return false}e[0]=e[1]=undefined;return true},has:function(d){var e=d[this.name];if(!e){return false}return e[0]===d}};window.WeakMap=c})()}(function(r){var w=new WeakMap();var t;if(/Trident|Edge/.test(navigator.userAgent)){t=setTimeout}else{if(window.setImmediate){t=window.setImmediate}else{var j=[];var o=String(Math.random());window.addEventListener("message",function(z){if(z.data===o){var y=j;j=[];y.forEach(function(A){A()})}});t=function(y){j.push(y);window.postMessage(o,"*")}}}var g=false;var i=[];function d(y){i.push(y);if(!g){g=true;t(k)}}function x(y){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(y)||y}function k(){g=false;var z=i;i=[];z.sort(function(B,A){return B.uid_-A.uid_});var y=false;z.forEach(function(B){var A=B.takeRecords();q(B);if(A.length){B.callback_(A,B);y=true}});if(y){k()}}function q(y){y.nodes_.forEach(function(z){var A=w.get(z);if(!A){return}A.forEach(function(B){if(B.observer===y){B.removeTransientObservers()}})})}function f(E,F){for(var C=E;C;C=C.parentNode){var D=w.get(C);if(D){for(var B=0;B<D.length;B++){var A=D[B];var z=A.options;if(C!==E&&!z.subtree){continue}var y=F(z);if(y){A.enqueue(y)}}}}}var s=0;function n(y){this.callback_=y;this.nodes_=[];this.records_=[];this.uid_=++s}n.prototype={observe:function(C,z){C=x(C);if(!z.childList&&!z.attributes&&!z.characterData||z.attributeOldValue&&!z.attributes||z.attributeFilter&&z.attributeFilter.length&&!z.attributes||z.characterDataOldValue&&!z.characterData){throw new SyntaxError()}var B=w.get(C);if(!B){w.set(C,B=[])}var y;for(var A=0;A<B.length;A++){if(B[A].observer===this){y=B[A];y.removeListeners();y.options=z;break}}if(!y){y=new u(this,C,z);B.push(y);this.nodes_.push(C)}y.addListeners()},disconnect:function(){this.nodes_.forEach(function(A){var B=w.get(A);for(var z=0;z<B.length;z++){var y=B[z];if(y.observer===this){y.removeListeners();B.splice(z,1);break}}},this);this.records_=[]},takeRecords:function(){var y=this.records_;this.records_=[];return y}};function h(y,z){this.type=y;this.target=z;this.addedNodes=[];this.removedNodes=[];this.previousSibling=null;this.nextSibling=null;this.attributeName=null;this.attributeNamespace=null;this.oldValue=null}function p(z){var y=new h(z.type,z.target);y.addedNodes=z.addedNodes.slice();y.removedNodes=z.removedNodes.slice();y.previousSibling=z.previousSibling;y.nextSibling=z.nextSibling;y.attributeName=z.attributeName;y.attributeNamespace=z.attributeNamespace;y.oldValue=z.oldValue;return y}var c,e;function a(y,z){return c=new h(y,z)}function b(y){if(e){return e}e=p(c);e.oldValue=y;return e}function m(){c=e=undefined}function v(y){return y===e||y===c}function l(z,y){if(z===y){return z}if(e&&v(z)){return e}return null}function u(y,A,z){this.observer=y;this.target=A;this.options=z;this.transientObservedNodes=[]}u.prototype={enqueue:function(y){var z=this.observer.records_;var A=z.length;if(z.length>0){var B=z[A-1];var C=l(B,y);if(C){z[A-1]=C;return}}else{d(this.observer)}z[A]=y},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(z){var y=this.options;if(y.attributes){z.addEventListener("DOMAttrModified",this,true)}if(y.characterData){z.addEventListener("DOMCharacterDataModified",this,true)}if(y.childList){z.addEventListener("DOMNodeInserted",this,true)}if(y.childList||y.subtree){z.addEventListener("DOMNodeRemoved",this,true)}},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(z){var y=this.options;if(y.attributes){z.removeEventListener("DOMAttrModified",this,true)}if(y.characterData){z.removeEventListener("DOMCharacterDataModified",this,true)}if(y.childList){z.removeEventListener("DOMNodeInserted",this,true)}if(y.childList||y.subtree){z.removeEventListener("DOMNodeRemoved",this,true)}},addTransientObserver:function(y){if(y===this.target){return}this.addListeners_(y);this.transientObservedNodes.push(y);var z=w.get(y);if(!z){w.set(y,z=[])}z.push(this)},removeTransientObservers:function(){var y=this.transientObservedNodes;this.transientObservedNodes=[];y.forEach(function(A){this.removeListeners_(A);var B=w.get(A);for(var z=0;z<B.length;z++){if(B[z]===this){B.splice(z,1);break}}},this)},handleEvent:function(G){G.stopImmediatePropagation();switch(G.type){case"DOMAttrModified":var A=G.attrName;var B=G.relatedNode.namespaceURI;var H=G.target;var E=new a("attributes",H);E.attributeName=A;E.attributeNamespace=B;var z=G.attrChange===MutationEvent.ADDITION?null:G.prevValue;f(H,function(J){if(!J.attributes){return}if(J.attributeFilter&&J.attributeFilter.length&&J.attributeFilter.indexOf(A)===-1&&J.attributeFilter.indexOf(B)===-1){return}if(J.attributeOldValue){return b(z)}return E});break;case"DOMCharacterDataModified":var H=G.target;var E=a("characterData",H);var z=G.prevValue;f(H,function(J){if(!J.characterData){return}if(J.characterDataOldValue){return b(z)}return E});break;case"DOMNodeRemoved":this.addTransientObserver(G.target);case"DOMNodeInserted":var I=G.target;var F,C;if(G.type==="DOMNodeInserted"){F=[I];C=[]}else{F=[];C=[I]}var y=I.previousSibling;var D=I.nextSibling;var E=a("childList",G.target.parentNode);E.addedNodes=F;E.removedNodes=C;E.previousSibling=y;E.nextSibling=D;f(G.relatedNode,function(J){if(!J.childList){return}return E})}m()}};r.JsMutationObserver=n;if(!r.MutationObserver){r.MutationObserver=n}})(this);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/modules/module-utils.soy' */
// This file was automatically generated from module-utils.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Modules == 'undefined') { RW.Templates.Modules = {}; }
if (typeof RW.Templates.Modules.Util == 'undefined') { RW.Templates.Modules.Util = {}; }


RW.Templates.Modules.Util.selectModuleType = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_input_content rw_has_input_desc" style="text-align:center;"><ul class="rw_module_templates">');
  var templateList4 = opt_data.templates;
  var templateListLen4 = templateList4.length;
  for (var templateIndex4 = 0; templateIndex4 < templateListLen4; templateIndex4++) {
    var templateData4 = templateList4[templateIndex4];
    output.append('<li class="rw_module_template', (! opt_data.type && templateData4.type == 'category' || opt_data.type == templateData4.type) ? ' rw_selected' : '', '" data-type="', soy.$$escapeHtml(templateData4.type), '">');
    RWJS.Templates.Icons.getIcon({icon: templateData4.icon}, output);
    output.append('<div class="rw_module_template_meta"><div class="rw_module_template_name" title="', soy.$$escapeHtml(templateData4.name), '">', soy.$$escapeHtml(templateData4.name), '</div><div class="rw_small_text" title="', soy.$$escapeHtml(templateData4.desc), '">', soy.$$escapeHtml(templateData4.desc), '</div></div></li>');
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/modules/blog-module.soy' */
// This file was automatically generated from blog-module.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Modules == 'undefined') { RW.Templates.Modules = {}; }
if (typeof RW.Templates.Modules.Blog == 'undefined') { RW.Templates.Modules.Blog = {}; }


RW.Templates.Modules.Blog.editBlogModule = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_section ', (opt_data.disabled) ? 'rw_click_to_edit' : '', '" >');
  RWJS.Templates.Utils.inputRow({type: 'text', name: 'limit', value: (opt_data.data.limit) ? soy.$$escapeHtml(opt_data.data.limit) : soy.$$escapeHtml(opt_data.defaults.limit), label: soy.$$escapeHtml("Number of blogposts"), mandatory: true, helpText: soy.$$escapeHtml(AJS.format("Maximum number of blogposts to display (up to {0}). Default is {1}",opt_data.defaults.upperLimit,opt_data.defaults.limit)), size: opt_data.size, disabled: opt_data.disabled}, output);
  var customChecked__soy26 = opt_data.data && opt_data.data.selectedMode == 'custom' || ! opt_data.data || ! opt_data.data.selectedMode && opt_data.defaults.selectedMode == 'custom';
  RWJS.Templates.Utils.inputRow({type: 'radio', name: 'blogSelection', value: 'custom', label: soy.$$escapeHtml("Search spaces"), helpText: soy.$$escapeHtml("Manually specify what spaces to display blogs from."), checked: customChecked__soy26, size: opt_data.size, disabled: opt_data.disabled}, output);
  RWJS.Templates.Utils.inputRow({type: 'radio', name: 'blogSelection', value: 'all', label: soy.$$escapeHtml("All Blogs"), checked: opt_data.data && opt_data.data.selectedMode == 'all' || ! opt_data.data || ! opt_data.data.selectedMode && opt_data.defaults.selectedMode == 'all', size: opt_data.size, disabled: opt_data.disabled}, output);
  RWJS.Templates.Utils.inputRow({type: 'radio', name: 'blogSelection', value: 'blogMode', checked: opt_data.data && opt_data.data.selectedMode == 'blogMode' || ! opt_data.data || ! opt_data.data.selectedMode && opt_data.defaults.selectedMode == 'blogMode', label: soy.$$escapeHtml("From Blog Portal"), helpText: "Fetch blogs from the blog portal.", size: opt_data.size, disabled: opt_data.disabled}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Modules.Blog.editBlogModuleSearch = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_input_container ', (opt_data.size) ? 'rw_size_' + soy.$$escapeHtml(opt_data.size) : '', '"><div id="rw_blog_search_container">');
  RWJS.Templates.Utils.inputRow({type: 'text', name: 'search', size: opt_data.size, cssClass: 'rw_has_input_desc'}, output);
  output.append('<ul class="rw_space_blogs">');
  if (opt_data.spaceTitles) {
    var keyList87 = soy.$$getMapKeys(opt_data.spaceTitles);
    var keyListLen87 = keyList87.length;
    for (var keyIndex87 = 0; keyIndex87 < keyListLen87; keyIndex87++) {
      var keyData87 = keyList87[keyIndex87];
      RWJS.Templates.Buttons.removableButton({label: opt_data.spaceTitles[keyData87], dataKey: 'space-key', dataValue: keyData87}, output);
    }
  }
  output.append('</ul></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Modules.Blog.blogModule = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((! opt_data.data.hideTitle) ? '<h3>' + soy.$$escapeHtml(opt_data.data.title) + '</h3>' : '', '<div id="rw_navigation_module_', soy.$$escapeHtml(opt_data.data.nameKey), '" class="rw_navigation_module rw_navigation_module_blogs"><ul class="rw_content_list">');
  if (opt_data.blogs && opt_data.blogs.length > 0) {
    var blogList105 = opt_data.blogs;
    var blogListLen105 = blogList105.length;
    for (var blogIndex105 = 0; blogIndex105 < blogListLen105; blogIndex105++) {
      var blogData105 = blogList105[blogIndex105];
      RW.Templates.Modules.Blog.blogItem({blog: blogData105}, output);
    }
  } else {
    RWJS.Templates.CategoryDropdown.empty(null, output);
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Modules.Blog.blogItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a', (opt_data.blog.url) ? ' href="' + soy.$$escapeHtml(opt_data.blog.url) + '"' : '', '><span class="rw_item_icon">', (opt_data.blog.author && opt_data.blog.author.profilePic) ? '<img src="' + soy.$$escapeHtml(opt_data.blog.author.profilePic) + '">' : '', '</span><span class="rw_item_content">', opt_data.blog.title, '<br/><div class="rw_date">', soy.$$escapeHtml(opt_data.blog.date), '</div></span></a></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/modules/questions-module.soy' */
// This file was automatically generated from questions-module.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Modules == 'undefined') { RW.Templates.Modules = {}; }
if (typeof RW.Templates.Modules.Questions == 'undefined') { RW.Templates.Modules.Questions = {}; }


RW.Templates.Modules.Questions.editQuestionModule = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_section ', (opt_data.disabled) ? 'rw_click_to_edit' : '', '">');
  RWJS.Templates.Utils.inputRow({type: 'text', name: 'limit', value: (opt_data.data.limit) ? soy.$$escapeHtml(opt_data.data.limit) : soy.$$escapeHtml(opt_data.defaults.limit), label: soy.$$escapeHtml("Number of questions"), mandatory: true, helpText: soy.$$escapeHtml("Maximum number of questions to display (up to 10)"), size: opt_data.size, disabled: opt_data.disabled}, output);
  var options__soy26 = ['popular', 'recent', 'unanswered'];
  RWJS.Templates.Utils.inputRow({type: 'select', name: 'filter', selectValues: options__soy26, value: (opt_data.data.filter) ? soy.$$escapeHtml(opt_data.data.filter) : soy.$$escapeHtml(opt_data.defaults.filter), label: soy.$$escapeHtml("Filter by"), mandatory: true, helpText: soy.$$escapeHtml("Show recent, popular or unanswered questions"), size: opt_data.size, disabled: opt_data.disabled}, output);
  RWJS.Templates.Utils.inputRow({type: 'text', name: 'topic', value: (opt_data.data.topic) ? soy.$$escapeHtml(opt_data.data.topic) : soy.$$escapeHtml(opt_data.defaults.topic), label: soy.$$escapeHtml("Topic"), helpText: soy.$$escapeHtml("Only include questions with these topics (separate each topic with a comma)"), size: opt_data.size, disabled: opt_data.disabled}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Modules.Questions.questionsModule = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((! opt_data.data.hideTitle && opt_data.data.title) ? '<h3>' + soy.$$escapeHtml(opt_data.data.title) + '</h3>' : '', '<div class="rw_navigation_module_questions rw_navigation_module">');
  if (opt_data.data.topics && opt_data.data.topics.length > 0) {
    output.append('<div class="rw_questions_topics"><p class="rw_questions_topics_label rw_left rw_margin_right">', (opt_data.data.topics.length > 1) ? soy.$$escapeHtml("Topics") : soy.$$escapeHtml("Topic"), ':</p>');
    var topicList80 = opt_data.data.topics;
    var topicListLen80 = topicList80.length;
    for (var topicIndex80 = 0; topicIndex80 < topicListLen80; topicIndex80++) {
      var topicData80 = topicList80[topicIndex80];
      output.append('<a class="rw_questions_topic" href="', soy.$$escapeHtml("/confluence"), '/questions/topics/', soy.$$escapeHtml(topicData80.id), '/', soy.$$escapeHtml(topicData80.name), '" data-topic="', soy.$$escapeHtml(topicData80.name), '">', soy.$$escapeHtml(topicData80.name), '</a>');
    }
    output.append('</div>');
  }
  output.append('<ul class="rw_content_list">');
  if (opt_data.questions && opt_data.questions.length > 0) {
    var questionList97 = opt_data.questions;
    var questionListLen97 = questionList97.length;
    for (var questionIndex97 = 0; questionIndex97 < questionListLen97; questionIndex97++) {
      var questionData97 = questionList97[questionIndex97];
      RW.Templates.Modules.Questions.questionsItem({item: questionData97}, output);
    }
  }
  output.append('</ol></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Modules.Questions.questionsItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class=""><div class="rw_item_icon"><span class="rw_total">', soy.$$escapeHtml(opt_data.item.votes.total), '</span><div class="rw_label">', (opt_data.item.votes.total == 1) ? soy.$$escapeHtml("vote") : soy.$$escapeHtml("votes"), '</div></div><div class="rw_item_content"><a href="', soy.$$escapeHtml("/confluence"), soy.$$escapeHtml(opt_data.item.url), '">', soy.$$escapeHtml(opt_data.item.title), '</a></div></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/modules/html-module.soy' */
// This file was automatically generated from html-module.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Modules == 'undefined') { RW.Templates.Modules = {}; }
if (typeof RW.Templates.Modules.Html == 'undefined') { RW.Templates.Modules.Html = {}; }


RW.Templates.Modules.Html.editHtmlModule = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_section">');
  RWJS.Templates.Utils.inputRow({type: 'textarea', name: 'htmlContent', value: (opt_data.data.htmlContent) ? opt_data.data.htmlContent : (opt_data.data.content) ? opt_data.data.content : '', label: soy.$$escapeHtml("HTML"), helpText: soy.$$escapeHtml("This feature could for example be used to include widgets."), size: opt_data.size, disabled: opt_data.disabled}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Modules.Html.htmlModule = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((! opt_data.data.hideTitle) ? '<h2>' + soy.$$escapeHtml(opt_data.data.name) + '</h2>' : '', '<div id="rw_navigation_module_', soy.$$escapeHtml(opt_data.data.nameKey), '" class="rw_navigation_module rw_navigation_module_html">', (opt_data.data.htmlContent) ? '<div class="rw_html_category_content">' + opt_data.data.htmlContent + '</div>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/modules/module-template-model.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}(function(c,b,d,a){RW.Models.ModuleTemplate=b.Model.extend({idAttribute:"type",namedAttributes:{name:"string",desc:"string",icon:"string",type:"string"}});RW.Models.ModuleTemplates=b.Collection.extend({model:RW.Models.ModuleTemplate,url:function(){return contextPath+"/rest/originaltheme/1.0/module/module-templates"}})})(RWJS.$,RWJS.Brace,RWJS.Backbone,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/modules/edit-blog-module.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(c,d,b,a){RW.Views.EditBlogModuleView=d.View.extend({spaceTitles:undefined,size:"",events:{'click input[name="blogSelection"]':"blogSelectionClicked","click .rw_remove":"removeSpaceTag"},initialize:function(f){var e=this;this.spaceTitles={};if(f&&f.size){this.size=f.size}a.each(this.model.get("spaceTitles"),function(h,g){e.spaceTitles[g]=h})},render:function(f){var e=f?f.defaults:{};this.$el.append(RW.Templates.Modules.Blog.editBlogModule({data:this.model.toJSON(),disabled:f&&f.disabled===true,size:this.size,defaults:a.extend({selectedMode:"custom",limit:"5",upperLimit:"10"},e)}));this.$('input[name="blogSelection"][value="custom"]').parent().append(RW.Templates.Modules.Blog.editBlogModuleSearch({spaceTitles:this.model.get("spaceTitles"),size:this.size}));if(this.$('input[name="blogSelection"][checked="checked"]').val()!=="custom"){this.$("#rw_blog_search_container").parent().hide()}this.initSearch();return this.$el},blogSelectionClicked:function(g){var f=c(g.currentTarget).val();if(f!=="custom"){this.$("#rw_blog_search_container").parent().hide()}else{this.$("#rw_blog_search_container").parent().show()}},initSearch:function(){var e=this;this.$("#rw_form_search").attr("autocomplete","off");RW.search.content(this.$("#rw_form_search"),function f(){var g=this.name;if(!a.isEmpty(this.url)){e.$("#rw_form_search").val("");var h=this.url.split("/").pop();if(!(h in e.spaceTitles)){e.spaceTitles[h]=this.name}else{return}e.addSpaceTag(g,h)}},"spacedesc")},addSpaceTag:function(f,g){var e=c(RWJS.Templates.Buttons.removableButton({label:f,dataKey:"space-key",dataValue:g}));this.$(".rw_space_blogs").append(e);return e},removeSpaceTag:function(h){var f=c(h.currentTarget).parent();var g=f.data("space-key");if(g in this.spaceTitles){delete this.spaceTitles[g]}f.remove()}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/modules/edit-questions-module.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,d,b,a){RW.Views.EditQuestionsModuleView=d.View.extend({size:"",initialize:function(e){if(e&&e.size){this.size=e.size}},render:function(e){this.$el.append(RW.Templates.Modules.Questions.editQuestionModule({data:this.model.toJSON(),disabled:e&&e.disabled===true,size:this.size,defaults:{limit:"5",filter:"popular",topic:""}}));return this.$el}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/modules/edit-html-module.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(c,d,b,a){RW.Views.EditHtmlModuleView=d.View.extend({size:"",initialize:function(e){if(e&&e.size){this.size=e.size}},render:function(f){var e=c(RW.Templates.Modules.Html.editHtmlModule({data:this.model.toJSON(),size:this.size,disabled:f&&f.disabled===true}));this.$el.append(e);return this.$el}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/modules/rendered-questions-module.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,d,b,a){RW.Views.QuestionsModuleView=d.View.extend({questions:[],events:{"click li a":"navigateToQuestion"},render:function(f){var e=this;if(typeof CQ==="undefined"){this.$el.html('<span class="rw_info">'+"Could not find the Confluence Questions add-on. Please re-install it."+"</span>");if(f&&f.callback){f.callback(e)}return this.$el}var g=this.populateTopicData();g.then(function(h){e.populateQuestionData(h).then(function(k){var i=e.model.toJSON();var j=c(RW.Templates.Modules.Questions.questionsModule({data:a.extend(i,{topics:h,title:i.title?i.title:i.name,hideTitle:f&&f.hideTitle}),questions:k}));e.$el.append(j);if(f&&f.callback){f.callback(e)}})});return this.$el},populateTopicData:function(){var e=this.model.get("topic");if(e==undefined){e=""}var f=e.split(",");var g=a.chain(f).map(function(j){return j.trim()}).uniq().value();var i=[];var h=c.Deferred();if(g.length>0){c.ajax({type:"GET",url:contextPath+"/rest/questions/1.0/topic",dataType:"json",data:{loadQuestionsCount:false,loadLatestQuestionTitle:false,loadAvatar:false},success:function(j){i=a.chain(j).map(function(k){return k.topic}).filter(function(k){return a.contains(g,k.name)}).value()}}).then(function(){h.resolve(i)})}else{h.resolve(i)}return h},populateQuestionData:function(j){var f=this;var i=c.Deferred();var e=this.model.get("limit");var h=this.model.get("filter");var g=[];if(j.length>0){a.each(j,function(k){g.push(f.fetchQuestionsWithTopic(k.id,e,h))})}else{g.push(f.fetchQuestionsWithTopic(undefined,e,h))}c.when.apply(c,g).then(function(k){f.questions=a.uniq(f.questions,function(l){return l.id});i.resolve(f.questions)});return i},fetchQuestionsWithTopic:function(h,f,g){var e=this;var i={limit:f,filter:g};if(h!==undefined){i.topicId=h}return c.ajax({type:"GET",dataType:"json",url:contextPath+"/rest/questions/1.0/questions",data:i,success:function(j){e.questions=e.questions.concat(j)}})},navigateToQuestion:function(h){var f=this.$el.closest("#rw_category_dropdown_container");var g=c("#rw_category_dropdown_loader");if(f.hasClass("rw_key_nav")){window.location=c(h.currentTarget).attr("href");f.hide();g.show();return false}else{return true}}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/modules/rendered-html-module.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(c,d,b,a){RW.Views.HtmlModuleView=d.View.extend({render:function(g){var f=c(RWJS.Templates.Utils.loader({size:"medium"}));if(!g||!g.hideLoader){this.$el.append(f);f.show()}var e=this.model.toJSON();var h=c(RW.Templates.Modules.Html.htmlModule({data:a.extend(e,{hideTitle:g&&g.hideTitle,title:e.title?e.title:e.name})}));this.$(".rw_loader_box").hide();this.$el.append(h);if(g&&g.callback){g.callback(this)}return this.$el}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/modules/rendered-blog-module.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.View==="undefined"){RW.View={}}(function(c,d,b,a){RW.Views.BlogModuleView=d.View.extend({render:function(g){var f=c(RWJS.Templates.Utils.loader({size:"medium"}));if(!g||!g.hideLoader){this.$el.append(f)}var e=this;this.fetchBlogs().then(function(i){var h=e.model.toJSON();h.hideTitle=true;var j=c(RW.Templates.Modules.Blog.blogModule({data:a.extend(h,{title:h.title?h.title:h.name,hideTitle:g&&g.hideTitle}),blogs:i.blogPosts}));if(!g||!g.hideLoader){e.$(".rw_loader_box").remove()}e.$el.append(j);if(g&&g.callback){g.callback(e)}});return this.$el},fetchBlogs:function(){var e=this;return c.ajax({type:"GET",url:contextPath+"/rest/originaltheme/1.0/blog/post",data:{"max-results":e.model.get("limit")?e.model.get("limit"):5,"profile-pic":true,"blog-mode":e.model.get("selectedMode")==="blogMode",keys:(e.model.get("spaceTitles")&&e.model.get("selectedMode")==="custom")?a.keys(e.model.get("spaceTitles")).join(", "):""},dataType:"json",contentType:"application/json",cache:false,error:function(f){if(f.status!==0){console.log(f.status+" "+f.statusText)}}})}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/libs/featherlight/featherlight.min.js' */
/**
 * Featherlight - ultra slim jQuery lightbox
 * Version 1.3.5 - http://noelboss.github.io/featherlight/
 *
 * Copyright 2015, Noël Raoul Bossart (http://www.noelboss.com)
 * MIT Licensed.
**/
!function(a){"use strict";function b(a,c){if(!(this instanceof b)){var d=new b(a,c);return d.open(),d}this.id=b.id++,this.setup(a,c),this.chainCallbacks(b._callbackChain)}if("undefined"==typeof a)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var c=[],d=function(b){return c=a.grep(c,function(a){return a!==b&&a.$instance.closest("body").length>0})},e=function(a,b){var c={},d=new RegExp("^"+b+"([A-Z])(.*)");for(var e in a){var f=e.match(d);if(f){var g=(f[1]+f[2].replace(/([A-Z])/g,"-$1")).toLowerCase();c[g]=a[e]}}return c},f={keyup:"onKeyUp",resize:"onResize"},g=function(c){a.each(b.opened().reverse(),function(){return c.isDefaultPrevented()||!1!==this[f[c.type]](c)?void 0:(c.preventDefault(),c.stopPropagation(),!1)})},h=function(c){if(c!==b._globalHandlerInstalled){b._globalHandlerInstalled=c;var d=a.map(f,function(a,c){return c+"."+b.prototype.namespace}).join(" ");a(window)[c?"on":"off"](d,g)}};b.prototype={constructor:b,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:a.noop,beforeContent:a.noop,beforeClose:a.noop,afterOpen:a.noop,afterContent:a.noop,afterClose:a.noop,onKeyUp:a.noop,onResize:a.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(b,c){"object"!=typeof b||b instanceof a!=!1||c||(c=b,b=void 0);var d=a.extend(this,c,{target:b}),e=d.resetCss?d.namespace+"-reset":d.namespace,f=a(d.background||['<div class="'+e+"-loading "+e+'">','<div class="'+e+'-content">','<span class="'+e+"-close-icon "+d.namespace+'-close">',d.closeIcon,"</span>",'<div class="'+d.namespace+'-inner">'+d.loading+"</div>","</div>","</div>"].join("")),g="."+d.namespace+"-close"+(d.otherClose?","+d.otherClose:"");return d.$instance=f.clone().addClass(d.variant),d.$instance.on(d.closeTrigger+"."+d.namespace,function(b){var c=a(b.target);("background"===d.closeOnClick&&c.is("."+d.namespace)||"anywhere"===d.closeOnClick||c.closest(g).length)&&(d.close(b),b.preventDefault())}),this},getContent:function(){if(this.persist!==!1&&this.$content)return this.$content;var b=this,c=this.constructor.contentFilters,d=function(a){return b.$currentTarget&&b.$currentTarget.attr(a)},e=d(b.targetAttr),f=b.target||e||"",g=c[b.type];if(!g&&f in c&&(g=c[f],f=b.target&&e),f=f||d("href")||"",!g)for(var h in c)b[h]&&(g=c[h],f=b[h]);if(!g){var i=f;if(f=null,a.each(b.contentFilters,function(){return g=c[this],g.test&&(f=g.test(i)),!f&&g.regex&&i.match&&i.match(g.regex)&&(f=i),!f}),!f)return"console"in window&&window.console.error("Featherlight: no content filter found "+(i?' for "'+i+'"':" (no target specified)")),!1}return g.process.call(b,f)},setContent:function(b){var c=this;return(b.is("iframe")||a("iframe",b).length>0)&&c.$instance.addClass(c.namespace+"-iframe"),c.$instance.removeClass(c.namespace+"-loading"),c.$instance.find("."+c.namespace+"-inner").not(b).slice(1).remove().end().replaceWith(a.contains(c.$instance[0],b[0])?"":b),c.$content=b.addClass(c.namespace+"-inner"),c},open:function(b){var d=this;if(d.$instance.hide().appendTo(d.root),!(b&&b.isDefaultPrevented()||d.beforeOpen(b)===!1)){b&&b.preventDefault();var e=d.getContent();if(e)return c.push(d),h(!0),d.$instance.fadeIn(d.openSpeed),d.beforeContent(b),a.when(e).always(function(a){d.setContent(a),d.afterContent(b)}).then(d.$instance.promise()).done(function(){d.afterOpen(b)})}return d.$instance.detach(),a.Deferred().reject().promise()},close:function(b){var c=this,e=a.Deferred();return c.beforeClose(b)===!1?e.reject():(0===d(c).length&&h(!1),c.$instance.fadeOut(c.closeSpeed,function(){c.$instance.detach(),c.afterClose(b),e.resolve()})),e.promise()},chainCallbacks:function(b){for(var c in b)this[c]=a.proxy(b[c],this,a.proxy(this[c],this))}},a.extend(b,{id:0,autoBind:"[data-featherlight]",defaults:b.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(b){return b instanceof a&&b},process:function(b){return this.persist!==!1?a(b):a(b).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(b){var c=this,d=a.Deferred(),e=new Image,f=a('<img src="'+b+'" alt="" class="'+c.namespace+'-image" />');return e.onload=function(){f.naturalWidth=e.width,f.naturalHeight=e.height,d.resolve(f)},e.onerror=function(){d.reject(f)},e.src=b,d.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(b){return a(b)}},ajax:{regex:/./,process:function(b){var c=a.Deferred(),d=a("<div></div>").load(b,function(a,b){"error"!==b&&c.resolve(d.contents()),c.fail()});return c.promise()}},iframe:{process:function(b){var c=new a.Deferred,d=a("<iframe/>").hide().attr("src",b).css(e(this,"iframe")).on("load",function(){c.resolve(d.show())}).appendTo(this.$instance.find("."+this.namespace+"-content"));return c.promise()}},text:{process:function(b){return a("<div>",{text:b})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(b,c){var d=this,e=new RegExp("^data-"+c+"-(.*)"),f={};return b&&b.attributes&&a.each(b.attributes,function(){var b=this.name.match(e);if(b){var c=this.value,g=a.camelCase(b[1]);if(a.inArray(g,d.functionAttributes)>=0)c=new Function(c);else try{c=a.parseJSON(c)}catch(h){}f[g]=c}}),f},extend:function(b,c){var d=function(){this.constructor=b};return d.prototype=this.prototype,b.prototype=new d,b.__super__=this.prototype,a.extend(b,this,c),b.defaults=b.prototype,b},attach:function(b,c,d){var e=this;"object"!=typeof c||c instanceof a!=!1||d||(d=c,c=void 0),d=a.extend({},d);var f,g=d.namespace||e.defaults.namespace,h=a.extend({},e.defaults,e.readElementConfig(b[0],g),d);return b.on(h.openTrigger+"."+h.namespace,h.filter,function(g){var i=a.extend({$source:b,$currentTarget:a(this)},e.readElementConfig(b[0],h.namespace),e.readElementConfig(this,h.namespace),d),j=f||a(this).data("featherlight-persisted")||new e(c,i);"shared"===j.persist?f=j:j.persist!==!1&&a(this).data("featherlight-persisted",j),i.$currentTarget.blur(),j.open(g)}),b},current:function(){var a=this.opened();return a[a.length-1]||null},opened:function(){var b=this;return d(),a.grep(c,function(a){return a instanceof b})},close:function(a){var b=this.current();return b?b.close(a):void 0},_onReady:function(){var b=this;b.autoBind&&(a(b.autoBind).each(function(){b.attach(a(this))}),a(document).on("click",b.autoBind,function(c){c.isDefaultPrevented()||"featherlight"===c.namespace||(c.preventDefault(),b.attach(a(c.currentTarget)),a(c.target).trigger("click.featherlight"))}))},_callbackChain:{onKeyUp:function(b,c){return 27===c.keyCode?(this.closeOnEsc&&a.featherlight.close(c),!1):b(c)},onResize:function(a,b){if(this.$content.naturalWidth){var c=this.$content.naturalWidth,d=this.$content.naturalHeight;this.$content.css("width","").css("height","");var e=Math.max(c/parseInt(this.$content.parent().css("width"),10),d/parseInt(this.$content.parent().css("height"),10));e>1&&this.$content.css("width",""+c/e+"px").css("height",""+d/e+"px")}return a(b)},afterContent:function(a,b){var c=a(b);return this.onResize(b),c}}}),a.featherlight=b,a.fn.featherlight=function(a,c){return b.attach(this,a,c)},a(document).ready(function(){b._onReady()})}(AJS.$);

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/global.soy' */
// This file was automatically generated from global.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }


RW.Templates.pageTreeErrorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t', (opt_data.type == 'nospacelayout') ? '<span>' + soy.$$escapeHtml("Must be in context of a space. Please set the \x27space\x27 parameter to the space you want to show the pagetree for.") + '</span>' : '');
  return opt_sb ? '' : output.toString();
};


RW.Templates.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a></a></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.contentItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a><span class="rw_item_favourite rw_item_icon_right rw_icon rw_iconfont_star"></span><span class="rw_item_content"></span></a></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.list = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul ', (opt_data.ulClass != 'undefined') ? 'class="' + soy.$$escapeHtml(opt_data.ulClass) + '"' : '', ' >');
  var elList22 = opt_data.list;
  var elListLen22 = elList22.length;
  for (var elIndex22 = 0; elIndex22 < elListLen22; elIndex22++) {
    var elData22 = elList22[elIndex22];
    output.append('<li><a title="', soy.$$escapeHtml(elData22.name), '" href="', soy.$$escapeHtml(elData22.url), '"><span>', soy.$$escapeHtml(elData22.name), '</span></a></li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.siblingList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_dialog_menu"><ul ', (opt_data.ulClass != 'undefined') ? 'class="' + soy.$$escapeHtml(opt_data.ulClass) + '"' : '', ' >');
  var elList40 = opt_data.list;
  var elListLen40 = elList40.length;
  for (var elIndex40 = 0; elIndex40 < elListLen40; elIndex40++) {
    var elData40 = elList40[elIndex40];
    output.append('<li><a title="', soy.$$escapeHtml(elData40.title), '" href="', soy.$$escapeHtml("/confluence"), '/spaces/viewspace.action?key=', soy.$$escapeHtml(elData40.key), '"', (elData40.key == opt_data.activeKey) ? 'class="rw_active"' : '', '><span class="rw_item_icon">', (elData40.logo) ? '<img src="' + soy.$$escapeHtml("/confluence") + soy.$$escapeHtml(elData40.logo) + '" />' : (elData40.icon) ? '<span class="rw_icon rw_iconfont_' + soy.$$escapeHtml(elData40.icon) + '"></span>' : '<span class="rw_icon rw_iconfont_space"></span>', '</span><span class="rw_item_content">', soy.$$escapeHtml(elData40.title), '</span></a></li>');
  }
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.searchPopup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="rw_popup_search" class="rw_popup_search rw_popup"><div class="rw_search"><form style="width:0px; height:0px; overflow:hidden; "><input type="text" name="hack" onfocus="this.blur()" /></form><form class="rw_search_form" method="get" action="', soy.$$escapeHtml("/confluence"), '/dosearchsite.action"><div class="rw_search_style rw_corners"><input class="rw_search_query rw_corners" id="rw_search_popup_query" type="text" value="', soy.$$escapeHtml("Search"), '" accessKey="', soy.$$escapeHtml("search-pages-action.accesskey"), '" autocomplete="off" name="queryString" size="25" /></div><div style="clear:both;"></div><div id="rw_search_result_container" class="rw_search_result_container rw_corners" style="display:none;"></div></form></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.moreRecentlyViewed = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul><li><a href=\'#\' id=\'rw_more_recently_viewed\'><span class="rw_icon rw_iconfont_activity"></span><span class="rw_search_item_title" title=\'', soy.$$escapeHtml("More recently viewed pages..."), '\'>', soy.$$escapeHtml("More recently viewed pages..."), '</span></a></li></ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.infoBox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_info_box">', (opt_data.content) ? soy.$$escapeHtml(opt_data.content) : '', '</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.warningBox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_warning_box">', (opt_data.content) ? soy.$$escapeHtml(opt_data.content) : '', '</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.errorBox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_error_box">', (opt_data.content) ? soy.$$escapeHtml(opt_data.content) : '', '</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.popup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_error_box"></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.popupLoader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class=\'rw_popup_loader\'>');
  RWJS.Templates.Utils.loader({size: 'medium'}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.searchItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a><span class="rw_search_item_title"></span><span class="rw_search_item_space"></span></a></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.iconTextItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li><a><span class="rw_item_icon"><img style="display:none;" /></span><span class="rw_item_content"></span></a></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.iconContentItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li><a><span class="rw_item_icon"></span><span class="rw_item_content"></span></a></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.popupTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class=\'rw_popup rw_corners\' style=\'display:none;\'><div class="rw_popup_container rw_corners"><div class="rw_popup_top"><a class="rw_close_button" href="#"><span class="rw_icon rw_iconfont_cancel"></span></a><h1 style="border:0px;"></h1></div><div class="rw_popup_content"></div></div><div class=\'rw_popup_loader\'>');
  RWJS.Templates.Utils.loader({size: 'medium'}, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.loadMoreButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<a class="rw_load_more_link rw_corners" ><span class="rw_load_more_text">', soy.$$escapeHtml("More"), '</span></a>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.contentListItemIconRight = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<span class="rw_item_icon_right rw_icon', (opt_data.cssClasses) ? ' ' + soy.$$escapeHtml(opt_data.cssClasses) : '', '">');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/user-categories.soy' */
// This file was automatically generated from user-categories.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.UserCategory == 'undefined') { RW.Templates.UserCategory = {}; }


RW.Templates.UserCategory.addDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div><form style="width:0px; height:0px; overflow:hidden; "><input type="text" name="hack" onfocus="this.blur()" /></form><form id="rw_user_category_form" class="rw_user_search_form" style=""><div id="rw_main_category_section" class="rw_hidden"><div id="rw_select_category_container" class="rw_admin_section"><div class="rw_input_container"><div class="rw_input_desc" style="line-height: 34px;"><label for="groups">', soy.$$escapeHtml("Category"), ':</label></div><div class="rw_input_content rw_has_input_desc"><span class="rw_item_name">', soy.$$escapeHtml(opt_data.model.name), ' <span class="rw_small_text">(', soy.$$escapeHtml(opt_data.model.key), ')</span></span><a class="rw_change_category_button aui-button"><span>', soy.$$escapeHtml("Change category"), '</span></a></div></div><div class="rw_input_container rw_category_chooser"  style="display:none;" ><div class="rw_input_content rw_has_input_desc"><ul></ul><a class="rw_cancel_category_button aui-button"><span>', soy.$$escapeHtml("Cancel"), '</span></a></div></div></div></div><div id="rw_main_dialog_section"><div class="rw_admin_section rw_padding_bottom_10px"><div id="rw_add_role_button_wrapper" class="rw_input_container"><div class="rw_input_desc" style="line-height: 34px;"><label for="groups">', soy.$$escapeHtml("Roles"), ':</label></div><div class="rw_input_content rw_has_input_desc"><a class="rw_add_role_button rw_button rw_margin_bottom_10px" href="#"><span class="rw_no_icon">', soy.$$escapeHtml("Add"), '</span></a></div></div>');
  RW.Templates.UserCategory.addRoleDialog(null, output);
  output.append('<ul id="rw_user_category_role_list" class="rw_items">');
  if (opt_data.model.roles) {
    var roleList22 = opt_data.model.roles;
    var roleListLen22 = roleList22.length;
    for (var roleIndex22 = 0; roleIndex22 < roleListLen22; roleIndex22++) {
      var roleData22 = roleList22[roleIndex22];
      RW.Templates.UserCategory.role({role: roleData22}, output);
    }
  }
  output.append('</ul></div><div id="rw_role_user_group_section" class="rw_admin_section rw_padding_top_10px">', (opt_data.model.type != 'space') ? '<div class="rw_input_container"><div class="rw_input_desc"><label for="visible">' + soy.$$escapeHtml("Category Dropdown") + ':</label></div><div class="rw_input_content rw_has_input_desc"><input type="checkbox" name="visible" class="rw_check_visibility" ' + ((opt_data.model.visible != false) ? 'checked="checked"' : '') + '><span> ' + soy.$$escapeHtml("Visible") + '</span><br><span class="rw_small_text">' + soy.$$escapeHtml("Show users in category dropdown menu") + '</span><br><input type="checkbox" name="rolesOnly" class="rw_check_rolesonly" ' + ((opt_data.model.rolesOnly == true) ? 'checked="checked"' : '') + '><span class="rw_check_rolesonly_text"> ' + soy.$$escapeHtml("Only display roles") + '</span><br><span class="rw_small_text">' + soy.$$escapeHtml("Only display users with roles in category dropdown menu") + '</span></div></div>' : '', '</div></div></form></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.addRoleDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_add_role_wrapper" style="display:none;"><div class="rw_input_container"><div class="rw_input_desc"><label for="users">', soy.$$escapeHtml("User"), ':</label></div><div class="rw_input_content rw_has_input_desc"><input type="text" name="users" placeholder="', soy.$$escapeHtml("Search"), '" id="rw_form_roles" autocomplete="off"><br><div id="rw_role_search_result_container" class="rw_results_container" style="display: none;"></div><div class="rw_error_text">', soy.$$escapeHtml("No user specified"), '</div><span class="rw_small_text">', soy.$$escapeHtml("Select user to assign to this role."), '</span><br><div class="rw_result_tags"><ul id="rw_role_user_result_container" class="rw_items"></ul></div></div></div><div class="rw_input_container"><div class="rw_input_desc"><label for="users">', soy.$$escapeHtml("Role"), ':</label></div><div class="rw_input_content rw_has_input_desc"><input type="text" name="users" placeholder="', soy.$$escapeHtml("Enter role name"), '" id="rw_form_role_name"><br><div class="rw_error_text">', soy.$$escapeHtml("No role name specified"), '</div><span class="rw_small_text">', soy.$$escapeHtml("Define the name of the role, or select one of the suggestions below."), '</span><br><div class="rw_result_tags"><ul id="rw_role_suggestions_container" class="rw_tag_list rw_items"></ul></div></div></div><div class="rw_input_container"><div class="rw_input_content rw_has_input_desc"><a class="rw_save_role_button aui-button aui-button-primary" href="#"><span>', soy.$$escapeHtml("Save role"), '</span></a><a class="rw_cancel_role_button aui-link rw_margin_left" href="#"><span>', soy.$$escapeHtml("Cancel"), '</span></a></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.role = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  var user__soy73 = opt_data.role.user;
  output.append('<li class="rw_user_role" data-username="', soy.$$escapeHtml(user__soy73.username), '" data-role-key="', soy.$$escapeHtml(opt_data.role.id), '"><div class="rw_user_role_wrapper"><div class="rw_item_icon"><a class="userLogoLink" data-username="', soy.$$escapeHtml(user__soy73.username), '" href="', soy.$$escapeHtml(contextPath), '/users/view-user-dashboard.action?username=', soy.$$escapeHtml(user__soy73.username), '" title="', soy.$$escapeHtml(user__soy73.fullName), '"><img class="userLogo logo" ', (user__soy73.profilePic) ? 'src="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(user__soy73.profilePic) + '"' : (opt_data.fullProfilePicUrl) ? 'src="' + soy.$$escapeHtml(opt_data.fullProfilePicUrl) + '"' : '', ' alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(user__soy73.username), '" title=""></a></div><div class="rw_item_content rw_has_icon"><div class="rw_ellipsis"><span ', (user__soy73 && user__soy73.fullName) ? 'title="' + user__soy73.fullName + '"' : '', '>', (user__soy73 && user__soy73.fullName) ? user__soy73.fullName : '', '</span><div style="clear:both;"></div><span ', (opt_data.role && opt_data.role.name) ? 'title="' + soy.$$escapeHtml(opt_data.role.name) + '"' : '', ' class="rw_small_text rw_user_category_role">', (opt_data.role && opt_data.role.name) ? soy.$$escapeHtml(opt_data.role.name) : '', '</span></div></div></div><span class="rw_delete_button">X</span></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.searchResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul>');
  var itemList126 = opt_data.results;
  var itemListLen126 = itemList126.length;
  for (var itemIndex126 = 0; itemIndex126 < itemListLen126; itemIndex126++) {
    var itemData126 = itemList126[itemIndex126];
    output.append('<li data-name=', (itemData126.type == 'user') ? soy.$$escapeHtml(itemData126.username) : soy.$$escapeHtml(itemData126.name), '>', (itemData126.type == 'user') ? '<img src="' + soy.$$escapeHtml(itemData126.thumbnailLink.href) + '" height="16px">' : '', '<a class="content-type-userinfo" ><span class="rw_search_item_title">', (itemData126.type == 'user') ? soy.$$escapeHtml(itemData126.title) : soy.$$escapeHtml(itemData126.name), '</span></a></li>');
  }
  output.append((opt_data.results.length == 0) ? '<span class="rw_padding">' + soy.$$escapeHtml("No search results found.") + '</span>' : '', '</ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.resultTag = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li ', (opt_data.key) ? 'data-key="' + soy.$$escapeHtml(opt_data.key) + '"' : '', ' data-name="', soy.$$escapeHtml(opt_data.name), '"><span title="', soy.$$escapeHtml("Remove"), '">', soy.$$escapeHtml(opt_data.name), '<span class=\'rw_delete_button\'>X</span></span></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div><a class="rw_item_icon rw_people_directory rw_user_category_link" data-tooltip="', soy.$$escapeHtml(opt_data.tooltip), '"></a></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.view = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div><div class="rw_user_category rw_in_popup">');
  if (opt_data.model.visible) {
    if ((opt_data.model.userSize == undefined || opt_data.model.userSize == 0) && (opt_data.model.roles == undefined || opt_data.model.roles.length == 0)) {
      RW.Templates.UserCategory.viewTitle({title: "No users found"}, output);
    } else {
      RW.Templates.UserCategory.viewTitle({title: opt_data.model.name}, output);
      if (opt_data.model.roles && opt_data.model.roles.length > 0) {
        output.append('<ul class="rw_items rw_roles ', (opt_data.model.allUsers && opt_data.model.allUsers.length > 0) ? 'rw_separator' : '', '">');
        var roleList189 = opt_data.model.roles;
        var roleListLen189 = roleList189.length;
        for (var roleIndex189 = 0; roleIndex189 < roleListLen189; roleIndex189++) {
          var roleData189 = roleList189[roleIndex189];
          var user__soy190 = roleData189.user;
          output.append('<li><a class="userLogoLink" data-username="', soy.$$escapeHtml(user__soy190.username), '" href="', soy.$$escapeHtml(contextPath), '/users/view-user-dashboard.action?username=', soy.$$escapeHtml(user__soy190.username), '" title="', soy.$$escapeHtml(user__soy190.fullName), '"><span class="rw_item_icon"><img class="userLogo logo" ', (user__soy190.profilePic) ? 'src="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(user__soy190.profilePic) + '"' : '', ' alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(user__soy190.username), '" title=""></span><span class="rw_item_content rw_has_icon"><span class="rw_ellipsis" title="', user__soy190.fullName, '">', user__soy190.fullName, '</span><span title="', soy.$$escapeHtml(roleData189.name), '" class="rw_small_text rw_user_category_role rw_ellipsis">', soy.$$escapeHtml(roleData189.name), '</span></span></a></li>');
        }
        output.append('</ul>');
      }
      if (opt_data.model.allUsers && opt_data.model.allUsers.length > 0 && opt_data.model.rolesOnly != true) {
        output.append('<ul class="rw_items rw_category_members rw_auto_column">');
        RW.Templates.UserCategory.userList({model: opt_data.model.allUsers}, output);
        output.append('</ul>');
      }
    }
  } else {
    if (opt_data.model.userSize == undefined || opt_data.model.userSize == 0) {
      RW.Templates.UserCategory.viewTitle({title: "No users found"}, output);
    } else {
      RW.Templates.UserCategory.viewTitle({title: "Users not visible"}, output);
    }
  }
  output.append((opt_data.model.hasMore) ? '<ul class="rw_items rw_category_admin"><li><a class="rw_load_more"><span class="rw_item_content rw_has_icon"><span class="rw_ellipsis">' + soy.$$escapeHtml("More") + '</span></span></a></li></ul>' : '', (opt_data.model.canEdit) ? '<ul class="rw_items rw_category_admin rw_edit_section"><li><a class="rw_configure_button"><span class="rw_item_icon"></span><span class="rw_item_content rw_has_icon"><span class="rw_ellipsis">' + soy.$$escapeHtml("Edit") + '</span></span></a></li></ul>' : '', '</div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.viewTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_title">', soy.$$escapeHtml(opt_data.title), '</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.inline = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div><div class="rw_user_category_inline"></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.dropDown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div><div class="rw_user_category_dd"></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.userList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  var userList258 = opt_data.model;
  var userListLen258 = userList258.length;
  for (var userIndex258 = 0; userIndex258 < userListLen258; userIndex258++) {
    var userData258 = userList258[userIndex258];
    output.append((opt_data.adminOnly && userData258.categorySpaceAdmin || ! opt_data.adminOnly) ? '<li ' + ((opt_data.size == 'large') ? 'class="rw_size_large"' : '') + '><a class="userLogoLink" data-username="' + soy.$$escapeHtml(userData258.username) + '" href="' + soy.$$escapeHtml(contextPath) + '/users/view-user-dashboard.action?username=' + soy.$$escapeHtml(userData258.username) + '" title="' + userData258.fullName + '">' + ((opt_data.layout == 'avatar') ? '<img class="userLogo logo" ' + ((userData258.profilePic) ? 'src="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(userData258.profilePic) + '"' : '') + ' alt="' + soy.$$escapeHtml("User icon") + ': ' + soy.$$escapeHtml(userData258.username) + '" title="">' : '<span class="rw_item_icon"><img class="userLogo logo" ' + ((userData258.profilePic) ? 'src="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(userData258.profilePic) + '"' : '') + ' alt="' + soy.$$escapeHtml("User icon") + ': ' + soy.$$escapeHtml(userData258.username) + '" title=""></span><span class="rw_item_content rw_has_icon"><span class="rw_ellipsis">' + userData258.fullName + '</span></span>') + '</a></li>' : '');
  }
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.categoryItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a data-category-key="', soy.$$escapeHtml(opt_data.category.nameKey), '" id="rw_category_item_', soy.$$escapeHtml(opt_data.category.nameKey), '" class="rw_ellipsis">', soy.$$escapeHtml(opt_data.category.name), '</a>');
  if (opt_data.category && opt_data.category.subCategories) {
    output.append('<ul>');
    var catList318 = opt_data.category.subCategories;
    var catListLen318 = catList318.length;
    for (var catIndex318 = 0; catIndex318 < catListLen318; catIndex318++) {
      var catData318 = catList318[catIndex318];
      RW.Templates.UserCategory.categoryItem({category: catData318}, output);
    }
    output.append('</ul>');
  }
  output.append('</div></div></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.spaceMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div><div class="rw_user_category rw_in_macro ', (opt_data.macroParam.layout != undefined) ? 'rw_layout_' + soy.$$escapeHtml(opt_data.macroParam.layout) : '', '">', (opt_data.macroParam.hideTitle != true) ? (opt_data.macroParam.title != undefined && opt_data.macroParam.title != '') ? '<h3 class="rw_ellipsis" title="' + soy.$$escapeHtml(opt_data.macroParam.title) + '">' + soy.$$escapeHtml(opt_data.macroParam.title) + '</h3>' : '<h3 class="rw_ellipsis" title="' + soy.$$escapeHtml("Space Users") + '">' + soy.$$escapeHtml("Space Users") + '</h3>' : '', (opt_data.macroParam.description != undefined && opt_data.macroParam.description != '') ? '<div class="rw_description">' + soy.$$escapeHtml(opt_data.macroParam.description) + '</div>' : '');
  if (opt_data.model.roles && opt_data.model.roles.length > 0) {
    output.append('<ul class="rw_items rw_roles">');
    var roleList354 = opt_data.model.roles;
    var roleListLen354 = roleList354.length;
    for (var roleIndex354 = 0; roleIndex354 < roleListLen354; roleIndex354++) {
      var roleData354 = roleList354[roleIndex354];
      var user__soy355 = roleData354.user;
      output.append('<li ', (opt_data.macroParam.size == 'large') ? 'class="rw_size_large"' : '', '><a class="userLogoLink" data-username="', soy.$$escapeHtml(user__soy355.username), '" href="', soy.$$escapeHtml(contextPath), '/users/view-user-dashboard.action?username=', soy.$$escapeHtml(user__soy355.username), '" title="', user__soy355.fullName, '"><span class="rw_item_icon"><img class="userLogo logo" ', (user__soy355.profilePic) ? 'src="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(user__soy355.profilePic) + '"' : '', ' alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(user__soy355.username), '" title=""></span><span class="rw_item_content rw_has_icon"><span class="rw_ellipsis" title="', user__soy355.fullName, '">', user__soy355.fullName, '</span><span title="', soy.$$escapeHtml(roleData354.name), '" class="rw_small_text rw_user_category_role rw_ellipsis">', soy.$$escapeHtml(roleData354.name), '</span></span></a></li>');
    }
    output.append('</ul>');
  }
  if (opt_data.model.allUsers) {
    if (opt_data.model.allUsers.length > 0 && ! opt_data.macroParam.rolesOnly) {
      output.append('<ul class="rw_items rw_category_members ', (opt_data.macroParam.layout != 'avatar') ? 'rw_auto_column' : '', ' ', (opt_data.model.roles && opt_data.model.roles.length > 0) ? 'rw_separator' : '', '">');
      RW.Templates.UserCategory.userList({model: opt_data.model.allUsers, layout: opt_data.macroParam.layout, size: opt_data.macroParam.size}, output);
      output.append('</ul>');
    }
    if (opt_data.macroParam.displayAdmins && opt_data.model.allUsers.length > 0) {
      output.append('<h4 class="rw_ellipsis" title="', soy.$$escapeHtml("Admins"), '">', soy.$$escapeHtml("Admins"), '</h3><ul class="rw_items rw_category_members rw_admins ', (opt_data.macroParam.layout != 'avatar') ? 'rw_auto_column' : '', ' ', (opt_data.model.roles && opt_data.model.roles.length > 0) ? 'rw_separator' : '', '">');
      RW.Templates.UserCategory.userList({model: opt_data.model.allUsers, layout: opt_data.macroParam.layout, size: opt_data.macroParam.size, adminOnly: true}, output);
      output.append('</ul>');
    }
  }
  output.append((opt_data.model.userSize == 0) ? '<div class="rw_help">' + soy.$$escapeHtml("Here you can add team members and define user roles.") + '</div>' : '', (opt_data.macroParam.canEdit == true) ? '<a class="rw_configure_button rw_button_discrete" ><span class="rw_icon rw_iconfont_edit"></span></a>' : '');
  if (opt_data.model.hasMore == true) {
    RW.Templates.loadMoreButton(null, output);
  }
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.categoryMacro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div><div class="rw_user_category rw_in_macro ', (opt_data.macroParam.layout != undefined) ? 'rw_layout_' + soy.$$escapeHtml(opt_data.macroParam.layout) : '', '"><div class="rw_macro_title"><div class="rw_icon rw_iconfont_users"></div>', (opt_data.macroParam.title != undefined && opt_data.macroParam.title != '') ? '<h2 class="rw_ellipsis" title="' + soy.$$escapeHtml(opt_data.macroParam.title) + '">' + soy.$$escapeHtml(opt_data.macroParam.title) + '</h2>' : (opt_data.model.name) ? '<h2 class="rw_ellipsis" title="' + soy.$$escapeHtml(opt_data.model.name) + '">' + soy.$$escapeHtml(opt_data.model.name) + '</h2>' : '<h2 class="rw_ellipsis" title="' + soy.$$escapeHtml("Users") + '">' + soy.$$escapeHtml("Users") + '</h2>', '</div>', (opt_data.macroParam.description != undefined && opt_data.macroParam.description != '') ? '<div class="rw_description">' + soy.$$escapeHtml(opt_data.macroParam.description) + '</div>' : '');
  if (opt_data.model.userSize > 0 || opt_data.model.children && opt_data.model.children.length > 0) {
    RW.Templates.UserCategory.categoryMacroUsers(opt_data, output);
  } else {
    RW.Templates.Users.empty(null, output);
  }
  output.append('</div><div style="clear:both;"></div>');
  if (opt_data.model.hasMore == true) {
    RW.Templates.loadMoreButton(null, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.UserCategory.categoryMacroUsers = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_tree_view ', (opt_data.macroParam.hierarchy == 'tree_view_closed') ? 'rw_closed' : '', '" data-category-key="', soy.$$escapeHtml(opt_data.model.key), '">', (opt_data.treeMode) ? '<div class="rw_item_link" data-category-key="' + soy.$$escapeHtml(opt_data.model.key) + '"><span>' + soy.$$escapeHtml(opt_data.model.name) + '</span></div><div class="rw_item_section">' : '');
  if (opt_data.model.roles && opt_data.model.roles.length > 0) {
    output.append('<ul class="rw_items rw_roles">');
    var roleList506 = opt_data.model.roles;
    var roleListLen506 = roleList506.length;
    for (var roleIndex506 = 0; roleIndex506 < roleListLen506; roleIndex506++) {
      var roleData506 = roleList506[roleIndex506];
      var user__soy507 = roleData506.user;
      output.append('<li ', (opt_data.macroParam.size == 'large') ? 'class="rw_size_large"' : '', '><a class="userLogoLink" data-username="', soy.$$escapeHtml(user__soy507.username), '" href="', soy.$$escapeHtml(contextPath), '/users/view-user-dashboard.action?username=', soy.$$escapeHtml(user__soy507.username), '" title="', soy.$$escapeHtml(user__soy507.fullName), '"><span class="rw_item_icon"><img class="userLogo logo" ', (user__soy507.profilePic) ? 'src="' + soy.$$escapeHtml(contextPath) + soy.$$escapeHtml(user__soy507.profilePic) + '"' : '', ' alt="', soy.$$escapeHtml("User icon"), ': ', soy.$$escapeHtml(user__soy507.username), '" title=""></span><span class="rw_item_content rw_has_icon"><span class="rw_ellipsis" title="', user__soy507.fullName, '">', user__soy507.fullName, '</span><span title="', soy.$$escapeHtml(roleData506.name), '" class="rw_small_text rw_user_category_role rw_ellipsis">', soy.$$escapeHtml(roleData506.name), '</span></span></a></li>');
    }
    output.append('</ul>');
  }
  if (opt_data.model.allUsers && opt_data.model.allUsers.length > 0 && ! opt_data.macroParam.rolesOnly) {
    output.append('<ul class="rw_items rw_category_members ', (opt_data.macroParam.layout != 'avatar') ? 'rw_auto_column' : '', ' ', (opt_data.model.roles && opt_data.model.roles.length > 0) ? 'rw_separator' : '', '">');
    RW.Templates.UserCategory.userList({model: opt_data.model.allUsers, layout: opt_data.macroParam.layout, size: opt_data.macroParam.size}, output);
    output.append('</ul>');
  }
  if (opt_data.model.children && opt_data.model.children.length > 0) {
    var childList562 = opt_data.model.children;
    var childListLen562 = childList562.length;
    for (var childIndex562 = 0; childIndex562 < childListLen562; childIndex562++) {
      var childData562 = childList562[childIndex562];
      RW.Templates.UserCategory.categoryMacroUsers({macroParam: opt_data.macroParam, model: childData562, treeMode: true}, output);
    }
  }
  output.append((opt_data.treeMode) ? '</div>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/cache-settings.soy' */
// This file was automatically generated from cache-settings.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Cache == 'undefined') { RW.Templates.Cache = {}; }


RW.Templates.Cache.adminSettings = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="rw_admin_cache_wrapper" class="rw_table"><div class="rw_table_cell" style="width: 60%"><div class="rw_editor rw_margin_bottom" style="background: #f6f6f6;">');
  RW.Templates.Config.toolbar({optTitle: "Cache Management"}, output);
  output.append('<div class="rw_editor_body"><div class="rw_admin_section">');
  RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'docache', value: opt_data.settings.params['docache'], label: "Enable caching", cssClass: 'rw_cacheParam'}, output);
  if (opt_data.settings.params.docache) {
    RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'category', value: opt_data.settings.params['category'], label: "Category REST API", disabled: opt_data.settings.params.docache == false, cssClass: 'rw_cacheParam', helpText: "Requests made for categories, the category menu and its content. REST GET-calls cached: \x3cul class\x3d\x22rw_items\x22\x3e\x3cli\x3e/rest/originaltheme/1.0/category/*\x3c/li\x3e\x3c/ul\x3e"}, output);
    RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'footer', value: opt_data.settings.params['footer'], label: "Footer REST API", disabled: opt_data.settings.params.docache == false, cssClass: 'rw_cacheParam', helpText: "Requests made for the footer and it\x27s columns. REST GET-calls cached: \x3cul class\x3d\x22rw_items\x22\x3e\x3cli\x3e/rest/originaltheme/1.0/footer/*\x3c/li\x3e\x3c/ul\x3e"}, output);
    RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'globalmenu', value: opt_data.settings.params['globalmenu'], label: "Global menu REST API", disabled: opt_data.settings.params.docache == false, cssClass: 'rw_cacheParam', helpText: "Requests made for global menu. REST GET-calls cached: \x3cul class\x3d\x22rw_items\x22\x3e\x3cli\x3e/rest/originaltheme/1.0/topmenu\x3c/li\x3e\x3c/ul\x3e"}, output);
    RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'usercategory', value: opt_data.settings.params['usercategory'], label: "User Category REST API", disabled: opt_data.settings.params.docache == false, cssClass: 'rw_cacheParam', helpText: "Requests made for users in category menu and category dropdown, as well as the \x3ca href\x3d\x22https://docs.refinedwiki.com/display/rwot/Users+in+category\x22\x3eusers in category\x3c/a\x3e and \x3ca href\x3d\x22https://docs.refinedwiki.com/display/rwot/Users+in+space\x22\x3eusers in space\x3c/a\x3e macros. REST GET-calls cached: \x3cul class\x3d\x22rw_items\x22\x3e\x3cli\x3e/rest/originaltheme/1.0/user-category/*\x3c/li\x3e\x3c/ul\x3e"}, output);
    RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'userdetails', value: opt_data.settings.params['userdetails'], label: "Users REST API", disabled: opt_data.settings.params.docache == false, cssClass: 'rw_cacheParam', helpText: "Requests made for \x3ca href\x3d\x22https://docs.refinedwiki.com/display/rwot/User+Details+Macro\x22\x3euser-details\x3c/a\x3e and \x3ca href\x3d\x22https://docs.refinedwiki.com/display/rwot/Users+Macro\x22\x3eusers-macros\x3c/a\x3e. REST GET-calls cached: \x3cul class\x3d\x22rw_items\x22\x3e\x3cli\x3e/rest/originaltheme/1.0/user\x3c/li\x3e \x3cli\x3e/rest/originaltheme/1.0/user/{username}\x3c/li\x3e\x3c/ul\x3e"}, output);
  }
  output.append('</div></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Cache.clearButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<a id="rw_clear_cache_button" class="aui-button" href="#" data-tooltip="', soy.$$escapeHtml("Will clear all active user caches by marking them as invalid."), '">', soy.$$escapeHtml("Clear cache"), '</a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/space-organizer.soy' */
// This file was automatically generated from space-organizer.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Organizer == 'undefined') { RW.Templates.Organizer = {}; }


RW.Templates.Organizer.mainContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_editor rw_margin_bottom" style="background:#f6f6f6"><div class="rw_editor_toolbar"><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner"><div class="aui-toolbar2-primary"><div class="rw_collapse_button"><span>', soy.$$escapeHtml("Collapse all"), '</span></div><div class="rw_expand_button"><span>', soy.$$escapeHtml("Expand all"), '</span></div></div><div class="aui-toolbar2-secondary"><button class="aui-button rw_add_category_button"><span>', soy.$$escapeHtml("Add category"), '</span></button></div></div></div></div><div class="rw_editor_body"><h3>', soy.$$escapeHtml("Main site"), ' <a href="', soy.$$escapeHtml("/confluence"), '/homepage.action" target="_blank">', soy.$$escapeHtml("View"), '</a></h3><ul class="rw_categories_list"></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.category = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="rw_category_list_item"><div class="rw_category ', (opt_data.closed) ? ' rw_closed ' : '', '" id="rw_category_key_', soy.$$escapeHtml(opt_data.category.nameKey), '" data-category-key="', soy.$$escapeHtml(opt_data.category.nameKey), '"><div class="droppable"><div id="rw_category_title_', soy.$$escapeHtml(opt_data.category.nameKey), '" class="rw_category_title', (opt_data.category.parentKey == undefined) ? ' rw_type_category ' : ' rw_type_sub_category ', (! opt_data.category.type) ? ' rw_category_module_category' : ' rw_category_module_' + soy.$$escapeHtml(opt_data.category.type), '" data-id="', soy.$$escapeHtml(opt_data.category.nameKey), '"><div class="rw_category_droppable"><span class="rw_category_name">', soy.$$escapeHtml(opt_data.category.name), '</span><span class="rw_category_key rw_small_text"> (', soy.$$escapeHtml(opt_data.category.nameKey), ') </span><div class="rw_menu_item"><div class="rw_simple_dd rw_right"><a><span class="rw_icon rw_iconfont_config"></span></a><div class="rw_dd"><ul><li><a class="rw_action_edit_category" data-id="', soy.$$escapeHtml(opt_data.category.nameKey), '"><span class="rw_item_icon rw_iconfont_edit"></span><span class="rw_item_content rw_has_icon">', soy.$$escapeHtml("Edit category"), '</span></a></li>', (opt_data.category.type == 'category') ? '<li><a class="rw_action_edit_users" data-id="' + soy.$$escapeHtml(opt_data.category.nameKey) + '"><span class="rw_item_icon rw_iconfont_user"></span><span class="rw_item_content rw_has_icon">' + soy.$$escapeHtml("Manage users") + '</span></a></li>' : '', '<li><a class="rw_action_delete_category" data-id="', soy.$$escapeHtml(opt_data.category.nameKey), '"><span class="rw_item_icon rw_iconfont_trash"></span><span class="rw_item_content rw_has_icon">', soy.$$escapeHtml("Delete"), '</span></a></li></ul></div></div></div>');
  if (opt_data.category.type == 'category') {
    output.append('<div class="rw_menu_item"><div class="rw_simple_dd rw_right"><a><span class="rw_icon rw_iconfont_add"></span></a><div class="rw_dd"><ul><li><a class="rw_action_add_subcategory" data-id="', soy.$$escapeHtml(opt_data.category.nameKey), '"><span class="rw_item_icon rw_iconfont_category"></span><span class="rw_item_content rw_has_icon">', soy.$$escapeHtml("Add subcategory"), '</span></a></li><li><a class="rw_action_add_link" data-id="', soy.$$escapeHtml(opt_data.category.nameKey), '"><span class="rw_item_icon rw_iconfont_link"></span><span class="rw_item_content rw_has_icon">', soy.$$escapeHtml("Add link"), '</span></a></li></ul></div></div></div>');
    if (opt_data.category.parentKey == undefined) {
      if (opt_data.category.hasUninitializedPermissions == true) {
        RW.Templates.Organizer.permissionWarningButton({categoryKey: opt_data.category.nameKey}, output);
      } else if (opt_data.isManualPermissionsActive == true) {
        RW.Templates.Organizer.permissionButton({categoryKey: opt_data.category.nameKey}, output);
      }
    }
    if (opt_data.category.design != undefined) {
      if (opt_data.category.design.designVariation != undefined) {
        RW.Templates.Organizer.designButton({designTitle: opt_data.category.design.name, designVariationTitle: opt_data.category.design.designVariation.name, categoryKey: opt_data.category.nameKey}, output);
      } else {
        RW.Templates.Organizer.designButton({designTitle: opt_data.category.design.name, categoryKey: opt_data.category.nameKey}, output);
      }
    } else if (opt_data.category.themeId > 0) {
      RW.Templates.Organizer.designButton({designTitle: "This category has an assigned theme.", categoryKey: opt_data.category.nameKey}, output);
    }
    output.append('<a class="rw_icon_button rw_reset_order" ', (opt_data.category.customOrder == false) ? ' style="display:none;" ' : '', ' title="', soy.$$escapeHtml("Sort alphabetically"), '" data-category-key="', soy.$$escapeHtml(opt_data.category.nameKey), '"><span class="rw_icon_container_20_40 rw_icon_sort_alpha"></span></a>');
  }
  output.append('</div></div></div>', (opt_data.category.type == 'category') ? '<ul class="rw_subcategories_list"><div class="rw_empty_dropspace_for_category_wrapper"><div class="rw_empty_dropspace"></div></div></ul>' : '', '</div>', (opt_data.category.parentKey != undefined) ? '<div class="rw_empty_dropspace_for_category_wrapper"><div class="rw_empty_dropspace"></div></div>' : '', '</li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.permissionButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<a data-id="', soy.$$escapeHtml(opt_data.categoryKey), '" class="rw_icon_button rw_edit_category_button rw_permissions_button"><span class="rw_icon_container_20 rw_icon_permission"></span></a>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.permissionWarningButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<a data-id="', soy.$$escapeHtml(opt_data.categoryKey), '" class="rw_icon_button rw_edit_category_button rw_uninitialized_warning" title="', soy.$$escapeHtml("No category permission is set. Please edit this category and choose a category permission level."), '"><span class="rw_icon_container_20 rw_icon_warning"></span></a>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.designButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<a data-id="', soy.$$escapeHtml(opt_data.categoryKey), '" class="rw_icon_button rw_edit_category_button rw_category_design_button" title="', soy.$$escapeHtml(opt_data.designTitle), (opt_data.designVariationTitle) ? ' (' + soy.$$escapeHtml(opt_data.designVariationTitle) + ')' : '', '"><span class="rw_icon_container_20 rw_icon_design"></span></a>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.categoryChildrenList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul id="rw_category_children_', soy.$$escapeHtml(opt_data.category.nameKey), '" class="rw_category_sortable_list rw_admin_content_list" data-category-key="', soy.$$escapeHtml(opt_data.category.nameKey), '" ', (opt_data.closed) ? ' style="display:none" ' : '', ' data-empty-text="', soy.$$escapeHtml("Drop spaces and links here"), '">');
  var childList149 = opt_data.category.children;
  var childListLen149 = childList149.length;
  for (var childIndex149 = 0; childIndex149 < childListLen149; childIndex149++) {
    var childData149 = childList149[childIndex149];
    RW.Templates.Organizer.child({child: childData149}, output);
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.child = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="child_key_', soy.$$escapeHtml(opt_data.child.key), '" class="rw_category_child rw_type_', soy.$$escapeHtml(opt_data.child.type), ' ', (opt_data.child.icon == 'blog') ? 'rw_blog_space' : '', '" data-id="', soy.$$escapeHtml(opt_data.child.key), '" data-type="', soy.$$escapeHtml(opt_data.child.type), '"><span class="rw_item_icon">', (opt_data.child.type == 'link') ? '<span class="rw_icon rw_iconfont_' + soy.$$escapeHtml(opt_data.child.icon) + '"></span>' : (opt_data.child.icon) ? '<span class="rw_icon rw_iconfont_' + soy.$$escapeHtml(opt_data.child.icon) + '"></span>' : '<span class="rw_icon rw_iconfont_space"></span>', '</span><span class="rw_item_content"><span class="rw_name">  ', soy.$$escapeHtml(opt_data.child.title), '  </span>', (opt_data.child.type == 'space') ? '<span class="rw_tag" title="' + soy.$$escapeHtml("Space") + '"></span><span class="rw_actions"><span class="rw_actions"><a href="' + soy.$$escapeHtml("/confluence") + '/display/' + soy.$$escapeHtml(opt_data.child.key) + '" target="_blank">' + soy.$$escapeHtml("View") + '</a></span></span>' : (opt_data.child.type == 'link') ? '<span class="rw_tag" title="' + soy.$$escapeHtml("Link") + '"></span><span class="rw_actions"><a class="rw_action_delete_link">' + soy.$$escapeHtml("Delete") + '</a><a class="rw_action_edit_link">' + soy.$$escapeHtml("Edit") + '</a></span>' : '', '</span></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.uncategorized = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_organizer_content_section"><div class="droppable rw_droppable_space_section" id=""><div class="rw_help_button" data-title="', soy.$$escapeHtml("Uncategorized"), '" data-text="', soy.$$escapeHtml("The spaces and blogs that are currently not organized into a category or the blog portal are displayed here. Simply use drag and drop to organize them."), '"><span class="rw_icon rw_iconfont_info"></span></div><h3>', soy.$$escapeHtml("Uncategorized"), '</h3><input class="rw_search_query" id="rw_search_query" type="text" accesskey="search-pages-action.accesskey" autocomplete="off" name="queryString" size="25" placeholder="', soy.$$escapeHtml("Filter uncategorized spaces"), '">');
  RW.Templates.Organizer.uncategorizedSpacesList(opt_data, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.uncategorizedSearchInput = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div><input class="rw_search_query" id="rw_search_query" type="text" accesskey="search-pages-action.accesskey" autocomplete="off" name="queryString" size="25"></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.uncategorizedSpacesList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="rw_admin_content_list" data-uncategorized="true" data-empty-text="', soy.$$escapeHtml("Drop spaces here"), '">');
  var spaceList223 = opt_data.spaces;
  var spaceListLen223 = spaceList223.length;
  for (var spaceIndex223 = 0; spaceIndex223 < spaceListLen223; spaceIndex223++) {
    var spaceData223 = spaceList223[spaceIndex223];
    output.append('<li id="child_key_', soy.$$escapeHtml(spaceData223.key), '" data-id="', soy.$$escapeHtml(spaceData223.key), '" data-type="space" data-parent-key="" class="rw_type_space ', (spaceData223.icon == 'blog') ? 'rw_blog_space' : '', '"><span class="rw_item_icon">', (spaceData223.icon) ? '<span class="rw_icon rw_iconfont_' + soy.$$escapeHtml(spaceData223.icon) + '"></span>' : '<span class="rw_icon rw_iconfont_space"></span>', '</span><span class="rw_item_content">', soy.$$escapeHtml(spaceData223.title), ' <span class="rw_tag" title="', soy.$$escapeHtml("Space"), '"></span><span class="rw_actions"><a href="', soy.$$escapeHtml("/confluence"), '/display/', soy.$$escapeHtml(spaceData223.key), '" target="_blank">', soy.$$escapeHtml("View"), '</a></span></span></li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.blogPortal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="rw_blog_portal_section" class="rw_organizer_content_section"><div class="droppable rw_droppable_space_section" id=""><div class="rw_help_button" data-title="', soy.$$escapeHtml("Blog Portal"), '" data-text="', soy.$$escapeHtml(AJS.format("The Blog Portal is a blogging interface separated from your main site. You can only drag blogs here. \x3ca href\x3d\x22{0}/admin/originaltheme/blogs.action\x22\x3eSetup the Blog Portal\x3c/a\x3e","/confluence")), '"><span class="rw_icon rw_iconfont_info"></span></div><h3>', soy.$$escapeHtml("Blog Portal"), ' <a href="', soy.$$escapeHtml("/confluence"), '/blog" target="_blank">', soy.$$escapeHtml("View"), '</a></h3><ul class="rw_admin_content_list" data-blog-portal="true" data-empty-text="', soy.$$escapeHtml("Drop blogs here"), '">');
  var spaceList267 = opt_data.spaces;
  var spaceListLen267 = spaceList267.length;
  for (var spaceIndex267 = 0; spaceIndex267 < spaceListLen267; spaceIndex267++) {
    var spaceData267 = spaceList267[spaceIndex267];
    output.append('<li id="child_key_', soy.$$escapeHtml(spaceData267.key), '" data-id="', soy.$$escapeHtml(spaceData267.key), '" data-type="space" data-parent-key="" class="rw_type_space rw_blog_space"><span class="rw_item_icon"><span class="rw_icon rw_iconfont_blog"></span></span><span class="rw_item_content">', soy.$$escapeHtml(spaceData267.title), '   <span class="rw_tag" title="', soy.$$escapeHtml("Blog"), '"></span><span class="rw_actions"><a href="', soy.$$escapeHtml("/confluence"), '/display/', soy.$$escapeHtml(spaceData267.key), '" target="_blank">', soy.$$escapeHtml("View"), '</a></span></span></li>');
  }
  output.append('</ul></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.editCategoryContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div>');
  if (opt_data.type == 'add_category' || opt_data.type == 'add_subcategory') {
    RW.Templates.Organizer.editCategoryType({templates: opt_data.templates, type: opt_data.category.type}, output);
  }
  output.append('<div class="rw_admin_section"><div class="rw_input_container"><div class="rw_input_desc"><label for="name">', soy.$$escapeHtml("Name"), ':<span class="rw_mandatory">*</span></label></div><div class="rw_input_content rw_has_input_desc"><input type="text" name="name" value="', soy.$$escapeHtml(opt_data.category.name), '" id="rw_input_category_name"><br><div id="rw_input_category_name_error" class="rw_error_text"></div><span class="rw_small_text">', soy.$$escapeHtml("Give the category a name"), '</span></div></div>', (opt_data.type == 'add_category' || opt_data.type == 'add_subcategory') ? '<div class="rw_input_container"><div class="rw_input_desc"><label for="key">' + soy.$$escapeHtml("Name key") + ':<span class="rw_mandatory">*</span></label></div><div class="rw_input_content rw_has_input_desc"><input type="text" name="nameKey" value="' + soy.$$escapeHtml(opt_data.category.nameKey) + '" id="rw_input_category_key"><br><div id="rw_input_category_key_error" class="rw_error_text"></div><span class="rw_small_text">' + soy.$$escapeHtml("Specify a unique key for the category") + '</span></div></div>' : '', '</div>', (opt_data.type == 'add_category' || opt_data.type == 'edit_category') ? (! opt_data.category.type || opt_data.category.type == 'category') ? '<div class="rw_admin_section" id="rw_design_picker"></div>' : '' : '', '<div class="rw_input_container"><div class="rw_input_desc"><label for="', soy.$$escapeHtml(opt_data.category.name), '">', soy.$$escapeHtml("Custom Logo"), ':</label></div><div class="rw_input_content rw_has_input_desc rw_has_input_help">', (opt_data.category.logo) ? '<div class="rw_margin_bottom rw_category_logo"><img src="' + soy.$$escapeHtml(contextPath) + '/plugins/servlet/rw-resources/categories/' + soy.$$escapeHtml(opt_data.category.logo.filePath) + '" width="48px" class="rw_margin_right rw_left"><a href="#" class="rw_left aui-button rw_delete_category_logo_button">' + soy.$$escapeHtml("Delete Logo") + '</a><div style="clear:both;"></div></div>' : '', '<form action="#" enctype="multipart/form-data" id="rw_upload_category_logo_form" method="post" name="UploadCategoryLogo.jspa"><input type="hidden" value="', soy.$$escapeHtml(opt_data.category.nameKey), '" name="nameKey"><input type="hidden" value="', soy.$$escapeHtml(opt_data.atlToken), '" name="atl_token"><input id="rw_input_category_logo" type="file" name="file" accept="image/jpeg, image/png, image/gif"></form><span class="rw_small_text">', soy.$$escapeHtml("Choose an image. Supported image formats: .png, .jpg and .gif."), '</span></div></div>');
  if (! opt_data.category.type || opt_data.category.type == 'category') {
    output.append('<div class="rw_input_container"><div class="rw_input_desc"><label for="', soy.$$escapeHtml(opt_data.category.name), '">', soy.$$escapeHtml("Custom Url"), ':</label></div><div class="rw_input_content rw_has_input_desc rw_has_input_help"><input type="checkbox" value="true" id="rw_custom_url_checkbox" ', (opt_data.category.link && opt_data.category.link.defaultLink == false) ? ' checked="checked" ' : '', ' name="openUrlNewWindow"><br><span class="rw_small_text">', soy.$$escapeHtml("You can point a category direct to a custom URL. E.g. to a single space in this category. Note that the category dashboard and the subcategories will not be usable.  "), '</span></div></div>');
    RW.Templates.Organizer.customUrl(opt_data, output);
    output.append((opt_data.type == 'add_category' || opt_data.type == 'edit_category') ? '<div id="rw_user_search_container"></div>' : '');
    if (opt_data.showPermissions) {
      RW.Templates.Organizer.categoryPermissions(opt_data, output);
    } else {
      output.append('<div class="rw_input_container"><div class="rw_input_desc"><label for="', soy.$$escapeHtml(opt_data.category.name), '">', soy.$$escapeHtml("View permission"), ':</label></div><div class="rw_input_content rw_has_input_desc rw_has_input_help"><span class="rw_help_text">', soy.$$escapeHtml("This category will be visible to users that have view permission to any content (space, blog, link or module) added to this category."), '</span></div></div>');
    }
  }
  if (opt_data.category.type && opt_data.category.type != 'category') {
    RW.Templates.Organizer.categoryPermissions({category: opt_data.category, excludeInheritOption: ! opt_data.showPermissions}, output);
  }
  if (opt_data.type == 'add_category' || opt_data.type == 'edit_category') {
    RWJS.Templates.Utils.inputRow({type: 'text', label: "Tooltip", name: 'input_category_tooltip', value: opt_data.category.tooltip}, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.categoryPermissions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_category_permissions rw_input_container"><div class="rw_input_desc"><label for="', soy.$$escapeHtml(opt_data.category.name), '">', soy.$$escapeHtml("View permission"), ':</label></div><div class="rw_input_content rw_has_input_desc"><div id="rw_category_permission">', (opt_data.category.hasUninitializedPermissions == true) ? '<div class="rw_warning_box rw_margin_bottom">' + soy.$$escapeHtml("This category has uninitialized permission. Please choose a permission level.") + '</div>' : '', (opt_data.category.parentKey != undefined && opt_data.category.parentKey != '' && ! opt_data.excludeInheritOption) ? '<input type="radio" class="rw_permission_level" name="permissionLevel" ' + ((opt_data.category.permissions == undefined || opt_data.category.permissions.view == undefined || opt_data.category.permissions.view.permissionLevel == 'inherit') ? ' checked="checked" ' : '') + ' value="inherit">' + soy.$$escapeHtml("Inherit") + '<br>' : '', '<input type="radio" class="rw_permission_level" name="permissionLevel" ', (opt_data.category.permissions && opt_data.category.permissions.view && opt_data.category.permissions.view.permissionLevel == 'anonymous') ? ' checked="checked" ' : '', ' value="anonymous">', soy.$$escapeHtml("Anonymous users"), '<br><input type="radio" class="rw_permission_level" name="permissionLevel" ', (opt_data.category.permissions && opt_data.category.permissions.view && opt_data.category.permissions.view.permissionLevel == 'logged-in-users' || ! opt_data.category.permissions) ? ' checked="checked" ' : '', ' value="logged-in-users">', soy.$$escapeHtml("Logged in users"), '<br><input type="radio" class="rw_permission_level" name="permissionLevel" ', (opt_data.category.permissions && opt_data.category.permissions.view && opt_data.category.permissions.view.permissionLevel == 'group') ? ' checked="checked" ' : '', ' value="group">', soy.$$escapeHtml("Groups"), '<br></div><div id="rw_category_permission_group" class="rw_padding_10px rw_margin_top" ', (opt_data.category.permissions == undefined || opt_data.category.permissions.view == undefined || opt_data.category.permissions.view.permissionLevel != 'group') ? ' style="display:none" ' : '', '><div id="rw_group_search_container"></div><br></div><br></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.customUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_custom_url" ', (! opt_data.category.link || opt_data.category.link.defaultLink) ? ' style="display:none" ' : '', '><div class="rw_input_container rw_size_small"><div class="rw_input_desc"><label for="', soy.$$escapeHtml(opt_data.category.name), '">', soy.$$escapeHtml("URL"), ':</label></div><div class="rw_input_content rw_has_input_desc rw_has_input_help"><input type="text" id="rw_custom_url" name="customUrl" ', (opt_data.category.link && ! opt_data.category.link.defaultLink) ? 'value="' + soy.$$escapeHtml(opt_data.category.link.url) + '"' : '', '></div></div><div class="rw_input_container rw_size_small"><div class="rw_input_desc"><label for="', soy.$$escapeHtml(opt_data.category.name), '">', soy.$$escapeHtml("Open in new window"), ':</label></div><div class="rw_input_content rw_has_input_desc rw_has_input_help"><input type="checkbox" value="true" id="rw_open_url_new_window" name="openUrlNewWindow" ', (opt_data.category.link && ! opt_data.category.link.defaultLink && opt_data.category.link.target == '_blank') ? ' checked="checked" ' : '', '><span class="rw_small_text">', soy.$$escapeHtml("Check this box if you want your link to open in a new window."), '</span></div></div>', (! opt_data.showPermissions) ? '<div class="rw_input_container rw_size_small"><div class="rw_input_desc"><label for="' + soy.$$escapeHtml(opt_data.category.name) + '">' + soy.$$escapeHtml("Permissions") + ' (' + soy.$$escapeHtml("Viewable for") + '):</label></div><div class="rw_input_content rw_has_input_desc rw_has_input_help" id="rw_custom_link_permissions"><span class="rw_small_text">' + soy.$$escapeHtml("Specifying an URL pointing to a space will make the category visible for all users who have view permission to that space. If you are pointing the category to an external URL or want to set custom permissions, you can use the permission settings below to manage who can view the category.") + '</span><br><br>' + soy.$$escapeHtml("Logged in users") + ':<input type="checkbox" id="permissionLoggedInUsers" class="rw_permission_level" name="permissionLoggedInUsers" ' + ((opt_data.category.permissions && opt_data.category.permissions.view && opt_data.category.permissions.view.permissionLevel == 'logged-in-users' || opt_data.category.permissions && opt_data.category.permissions.view && opt_data.category.permissions.view.permissionLevel == 'anonymous') ? ' checked="checked" ' : '') + '><span class="rw_small_text">' + soy.$$escapeHtml("E.g. all users who can log in to Confluence.") + '</span><br>' + soy.$$escapeHtml("Anonymous users") + ':<input type="checkbox" id="permissionAnonymousUsers" class="rw_permission_level" name="permissionAnonymousUsers" ' + ((opt_data.category.permissions && opt_data.category.permissions.view && opt_data.category.permissions.view.permissionLevel == 'anonymous') ? ' checked="checked" ' : '') + '><span class="rw_small_text">' + soy.$$escapeHtml("E.g. all users") + '</span><br>' + soy.$$escapeHtml("Groups") + ':<input type="checkbox" id="permissionGroups" class="rw_permission_level" name="permissionGroups" ' + ((opt_data.category.permissions && opt_data.category.permissions.view && opt_data.category.permissions.view.permissionLevel == 'group') ? ' checked="checked" ' : '') + '><span class="rw_small_text">' + soy.$$escapeHtml("Groups") + '<div id="rw_category_permission_group" class="rw_padding_10px rw_margin_top" ' + ((opt_data.category.permissions == undefined || opt_data.category.permissions.view == undefined || opt_data.category.permissions.view.permissionLevel != 'group') ? ' style="display:none" ' : '') + '><div id="rw_group_search_container"></div><br></div></div></div>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Organizer.editCategoryType = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="rw_category_section" class="rw_admin_section"><div class="rw_input_container rw_size_small">');
  RW.Templates.Modules.Util.selectModuleType(opt_data, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/users.soy' */
// This file was automatically generated from users.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Users == 'undefined') { RW.Templates.Users = {}; }


RW.Templates.Users.list = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  var users__soy4 = opt_data.model.users;
  var title__soy5 = opt_data.model.title;
  var layout__soy6 = opt_data.model.layout;
  var remoteUser__soy7 = opt_data.model.remoteUser;
  var description__soy8 = opt_data.model.description;
  var canSeePersonalSpace__soy9 = opt_data.model.canSeePersonalSpace;
  output.append('<div class="rw_users_container ', (layout__soy6 == 'list') ? 'rw_user_category rw_in_macro ' : '', (layout__soy6 != undefined) ? 'rw_layout_' + soy.$$escapeHtml(layout__soy6) : '', '">', (title__soy5 != undefined) ? '<h3>' + soy.$$escapeHtml(title__soy5) + '</h3>' : '', (description__soy8 != undefined && description__soy8 != '') ? '<div class="rw_description">' + soy.$$escapeHtml(description__soy8) + '</div>' : '');
  if (layout__soy6 == 'list') {
    output.append('<ul class="rw_items rw_category_members rw_auto_column">');
    RW.Templates.UserCategory.userList({model: users__soy4, layout: 'simple', size: 'small'}, output);
    output.append('</ul>');
  } else if (layout__soy6 == 'avatar' || opt_data.columns < 2) {
    output.append('<ul class="rw_items rw_users_list">');
    var userList39 = users__soy4;
    var userListLen39 = userList39.length;
    for (var userIndex39 = 0; userIndex39 < userListLen39; userIndex39++) {
      var userData39 = userList39[userIndex39];
      output.append('<li>');
      RW.Templates.Users.userDetails({user: userData39, layout: layout__soy6, remoteUser: remoteUser__soy7, following: userData39.following, canSeePersonalSpace: canSeePersonalSpace__soy9, hipChatBaseUrl: opt_data.hipChatBaseUrl, versionChecker: opt_data.versionChecker}, output);
      output.append('</li>');
    }
    output.append((users__soy4.length == 0) ? '<div class="rw_info_box">' + soy.$$escapeHtml("No users found") + '</div>' : '', '</ul>');
  } else {
    var count__soy58 = 0;
    output.append('<div class="rw_table rw_users_list"><div class="rw_table_row">');
    var userList60 = users__soy4;
    var userListLen60 = userList60.length;
    for (var userIndex60 = 0; userIndex60 < userListLen60; userIndex60++) {
      var userData60 = userList60[userIndex60];
      output.append('<div class="rw_table_cell">');
      RW.Templates.Users.userDetails({user: userData60, layout: layout__soy6, remoteUser: remoteUser__soy7, following: userData60.following, canSeePersonalSpace: canSeePersonalSpace__soy9, hipChatBaseUrl: opt_data.hipChatBaseUrl, versionChecker: opt_data.versionChecker}, output);
      output.append('</div>', ((userIndex60 + 1) % opt_data.columns == 0) ? '</div><div class="rw_table_row">' : '');
    }
    output.append((users__soy4.length == 0) ? '<div class="rw_info_box">' + soy.$$escapeHtml("No users found") + '</div>' : '', '</div></div>');
  }
  output.append('</div><div style="clear:both;"></div>');
  if (opt_data.model.hasMore == true) {
    RW.Templates.loadMoreButton(null, output);
  }
  return opt_sb ? '' : output.toString();
};


RW.Templates.Users.userDetails = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  if (opt_data.user) {
    var isRemoteUser__soy89 = opt_data.user.username == opt_data.remoteUser;
    output.append('<div class="rw_user_details rw_macro ', (isRemoteUser__soy89) ? 'rw_is_remote_user' : '', '  ', (opt_data.layout != undefined) ? 'rw_layout_' + soy.$$escapeHtml(opt_data.layout) : '', '" data-username="', soy.$$escapeHtml(opt_data.user.username), '">', (opt_data.title != undefined) ? '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3>' : '', (isRemoteUser__soy89 && opt_data.layout != 'avatar') ? '<a class="rw_button_discrete rw_right" onclick="RW.showUserSettingsPopup();" ><span class="rw_icon rw_iconfont_edit"></span></a>' : '', (opt_data.user.profilePic != undefined) ? (isRemoteUser__soy89 && opt_data.user.profilePic == '/images/icons/profilepics/default.png') ? (opt_data.versionChecker.comparedTo58 >= 0) ? '<a class="confluence-userlink rw_profile_picture" href="' + soy.$$escapeHtml("/confluence") + '/users/profile/editmyprofilepicture.action" data-username="' + soy.$$escapeHtml(opt_data.user.username) + '" title="" ><img class="userLogo logo" title="" alt="User icon: ' + soy.$$escapeHtml(opt_data.user.username) + '" src="' + soy.$$escapeHtml("/confluence") + '/images/icons/profilepics/add_profile_pic.png"></a>' : '<a class="confluence-userlink rw_profile_picture" href="' + soy.$$escapeHtml("/confluence") + '/users/editmyprofilepicture.action" data-username="' + soy.$$escapeHtml(opt_data.user.username) + '" title="" ><img class="userLogo logo" title="" alt="User icon: ' + soy.$$escapeHtml(opt_data.user.username) + '" src="' + soy.$$escapeHtml("/confluence") + '/images/icons/profilepics/add_profile_pic.png"></a>' : '<a class="confluence-userlink rw_profile_picture" href="' + soy.$$escapeHtml("/confluence") + '/users/view-user-dashboard.action?username=' + soy.$$escapeHtml(opt_data.user.username) + '" data-username="' + soy.$$escapeHtml(opt_data.user.username) + '" title="" ><img class="userLogo logo" title="" alt="User icon: ' + soy.$$escapeHtml(opt_data.user.username) + '" src="' + soy.$$escapeHtml("/confluence") + soy.$$escapeHtml(opt_data.user.profilePic) + '"></a>' : '');
    if (opt_data.layout != 'avatar') {
      output.append('<ul class="rw_items rw_user_info_list"><li><div class="rw_item_content"><h2 class="rw_user_link"><a href="', soy.$$escapeHtml("/confluence"), '/users/view-user-dashboard.action?username=', soy.$$escapeUri(opt_data.user.username), '" title="" class="confluence-userlink rw_ellipsis" data-username="', soy.$$escapeHtml(opt_data.user.username), '">', opt_data.user.fullName, '</a></h2></div></li>', (opt_data.layout != 'simple' && opt_data.versionChecker.comparedTo59 < 0) ? '<li><div class="rw_item_content">' + ((opt_data.user.statusText != undefined) ? '<div class="rw_status_box"><div class="rw_status_box_talk"></div><span class="status-text rw_block">' + opt_data.user.statusText + '</span>' + ((isRemoteUser__soy89) ? '<div style="float:right;">' + ((opt_data.canUpdateStatus) ? '<a class="rw_small_text rw_clear rw_update_status_button rw_padding_right_10px" style="float:none;">' + "Update Status\u2026" + '</a>' : '') + '<a class="rw_small_text rw_clear" onclick="RWJS.launchUrlInBackground(\'' + soy.$$escapeHtml("/confluence") + '/status/clear.action?username=' + soy.$$escapeHtml(opt_data.user.username) + '\',true)" style="float:none;">' + soy.$$escapeHtml("Clear") + '</a></div>' : '') + '<span class="rw_date rw_small_text">' + soy.$$escapeHtml(opt_data.user.statusDate) + '</span><div style="clear:both"></div></div>' : (isRemoteUser__soy89 && opt_data.canUpdateStatus) ? '<a class="aui-button rw_update_status_button"><span>' + "Update Status\u2026" + '</span></a>' : '') + '</div></li>' : '', (opt_data.user.email) ? '<li><div class="rw_item_icon"><div class="rw_icon rw_iconfont_mail" title=\'' + soy.$$escapeHtml("Email") + '\'></div></div><div class="rw_item_content rw_has_icon"><a class="rw_email" title="' + soy.$$escapeHtml(AJS.format("Send email to {0}",opt_data.user.fullName)) + '" href="mailto:' + soy.$$escapeHtml(opt_data.user.email) + '"><span class="rw_email rw_ellipsis">' + soy.$$escapeHtml(opt_data.user.email) + '</span></a></div></li>' : '', (opt_data.user.hipchatAccount != undefined && opt_data.user.hipchatAccount != '') ? '<li class="rw_hipchat_detail_wrapper"><div id="rw_hipchat_username" style="display:none;">' + soy.$$escapeHtml(opt_data.user.hipchatAccount) + '</div><div class="rw_item_icon"><div id="rw_hipchat_icon" class="rw_icon_container_24 rw_icon_hipchat"></div></div><div class="rw_item_content rw_has_icon"><span class="rw_im_title">HipChat:</span><a id="rw_go_to_hipchat_button" class="rw_button rw_im_action" href="' + soy.$$escapeHtml(opt_data.hipChatBaseUrl) + '/sign_in" title=\'' + soy.$$escapeHtml(AJS.format("Go to {0}",['HipChat'])) + '\' target="_blank"><span class="rw_no_icon">' + soy.$$escapeHtml(AJS.format("Go to {0}",['HipChat'])) + '</span></a></div></li>' : (opt_data.user.hipchatAccount != undefined && isRemoteUser__soy89) ? '<li><div class="rw_item_icon"><div class="rw_icon_container_24 rw_icon_hipchat"></div></div><div class="rw_item_content rw_has_icon"><a class="rw_button rw_im_action" onclick="RW.showUserSettingsPopup();" title=\'' + soy.$$escapeHtml("Configure") + '\' ><span class="rw_no_icon">' + soy.$$escapeHtml("Configure") + '</span></a></div></li>' : '');
      var keyList223 = soy.$$getMapKeys(opt_data.user.personalValues);
      var keyListLen223 = keyList223.length;
      for (var keyIndex223 = 0; keyIndex223 < keyListLen223; keyIndex223++) {
        var keyData223 = keyList223[keyIndex223];
        var value__soy224 = opt_data.user.personalValues[keyData223];
        output.append((value__soy224 != undefined && value__soy224 != '') ? (opt_data.layout == 'simple' && (keyData223 == 'im' || keyData223 == 'website')) ? '' : '<li><div class="rw_item_icon">' + ((keyData223 == 'website') ? '<div class="rw_icon rw_iconfont_homepage"></div>' : '<div class="rw_icon rw_iconfont_' + soy.$$escapeHtml(keyData223) + '"></div>') + '</div><div class="rw_item_content rw_has_icon rw_ellipsis">' + ((keyData223 == 'website') ? '<a href="' + soy.$$escapeHtml(value__soy224) + '" class="rw_ellipsis" target="_blank" title="' + soy.$$escapeHtml(value__soy224) + '">' + soy.$$escapeHtml(value__soy224) + '</a>' : soy.$$escapeHtml(value__soy224)) + '</div></li>' : '');
      }
      if (opt_data.layout == 'full') {
        if (opt_data.user.uCategories && opt_data.user.uCategories.length > 0) {
          output.append('<li><div class="rw_item_content rw_padding_top"><h3 class="rw_caption">', (opt_data.user.uCategories.length == 1) ? soy.$$escapeHtml("Member of category:") : soy.$$escapeHtml("Member of categories:"), '</h3></div></li><li><ul class="rw_user_categories rw_category">');
          var userCategoryList263 = opt_data.user.uCategories;
          var userCategoryListLen263 = userCategoryList263.length;
          for (var userCategoryIndex263 = 0; userCategoryIndex263 < userCategoryListLen263; userCategoryIndex263++) {
            var userCategoryData263 = userCategoryList263[userCategoryIndex263];
            RW.Templates.Users.userMember({userCategory: userCategoryData263}, output);
          }
          output.append('</ul></li>');
        }
        if (opt_data.user.uSpaces && opt_data.user.uSpaces.length > 0) {
          output.append('<li><div class="rw_item_content rw_padding_top"><h3 class="rw_caption">', (opt_data.user.uSpaces.length == 1) ? soy.$$escapeHtml("Member of space:") : soy.$$escapeHtml("Member of spaces:"), '</h3></div></li><li><ul class="rw_user_categories rw_space">');
          var userCategoryList277 = opt_data.user.uSpaces;
          var userCategoryListLen277 = userCategoryList277.length;
          for (var userCategoryIndex277 = 0; userCategoryIndex277 < userCategoryListLen277; userCategoryIndex277++) {
            var userCategoryData277 = userCategoryList277[userCategoryIndex277];
            RW.Templates.Users.userMember({userCategory: userCategoryData277}, output);
          }
          output.append('</ul></li>');
        }
        if (opt_data.user.companyValues != undefined && soy.$$getMapKeys(opt_data.user.companyValues).length > 0) {
          output.append('<li><div class="rw_item_content rw_padding_top"><h3 class="rw_caption">', soy.$$escapeHtml("Company"), '</h3></div></li>');
          var keyList287 = soy.$$getMapKeys(opt_data.user.companyValues);
          var keyListLen287 = keyList287.length;
          for (var keyIndex287 = 0; keyIndex287 < keyListLen287; keyIndex287++) {
            var keyData287 = keyList287[keyIndex287];
            var value__soy288 = opt_data.user.companyValues[keyData287];
            output.append((value__soy288 != undefined && value__soy288 != '') ? '<li><div class="rw_item_icon">' + ((keyData287 == 'position') ? '<div class="rw_icon rw_iconfont_job_title"></div>' : (keyData287 == 'department') ? '<div class="rw_icon rw_iconfont_category"></div>' : '<div class="rw_icon rw_iconfont_' + soy.$$escapeHtml(keyData287) + '"></div>') + '</div><div class="rw_item_content rw_has_icon rw_ellipsis">' + soy.$$escapeHtml(value__soy288) + '</div></li>' : '');
          }
        }
        output.append((opt_data.following == true) ? '<li><div class="rw_item_content rw_padding_top rw_unfollow" data-username="' + soy.$$escapeUri(opt_data.user.username) + '"><a class="aui-button"><span>' + soy.$$escapeHtml("Stop Following") + '</span></a></div></li>' : (! opt_data.following) ? '<li><div class="rw_item_content rw_padding_top rw_follow" data-username="' + soy.$$escapeUri(opt_data.user.username) + '"><a class="aui-button"><span>' + soy.$$escapeHtml("Follow") + '</span></a></div></li>' : '', (opt_data.canSeePersonalSpace) ? '<li><div class="rw_item_content rw_padding_top"><a class="aui-button" href="' + soy.$$escapeHtml("/confluence") + '/spaces/viewspace.action?key=~' + soy.$$escapeUri(opt_data.user.username) + '" title="' + soy.$$escapeHtml("View personal space ") + '"><span>' + soy.$$escapeHtml("Personal Space") + '</span></a></div></li>' : '');
      }
      output.append('</ul>');
    }
    output.append('</div>');
  }
  return opt_sb ? '' : output.toString();
};


RW.Templates.Users.userSearch = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div><form class="rw_user_search_form"><div id="rw_category_attributes_container" class="rw_admin_section"><div class="rw_input_container"><div class="rw_input_desc"><label for="users">', soy.$$escapeHtml(opt_data.title), ':</label></div><div class="rw_input_content rw_has_input_desc rw_has_input_help"><input type="text" name="users" placeholder="', soy.$$escapeHtml("Search to add"), '" id="rw_input_search_users" autocomplete="off"><br><div id="rw_user_search_result_container" class="rw_results_container" style="display: none;"></div><span class="rw_small_text">', soy.$$escapeHtml(opt_data.description), '</span><br><div class="rw_result_tags"><ul id="rw_users_result_container" class="rw_tag_list rw_search_result_users">');
  if (opt_data.users) {
    var userList344 = opt_data.users;
    var userListLen344 = userList344.length;
    for (var userIndex344 = 0; userIndex344 < userListLen344; userIndex344++) {
      var userData344 = userList344[userIndex344];
      if (userData344.username) {
        if (userData344.name) {
          RW.Templates.Users.resultTag({name: userData344.name, key: userData344.username}, output);
        } else if (userData344.fullName) {
          RW.Templates.Users.resultTag({name: userData344.fullName, key: userData344.username}, output);
        }
      }
    }
  }
  output.append('</ul></div></div></div></div></form></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Users.groupSearch = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div><form class="rw_user_search_form"><div class="rw_input_container">', (opt_data.title) ? '<div class="rw_input_desc"><label for="groups">' + soy.$$escapeHtml(opt_data.title) + ':</label></div>' : '', '<div class="rw_input_content rw_has_input_desc"><input type="text" name="groups" placeholder="', soy.$$escapeHtml("Search to add"), '" id="rw_input_search_groups" autocomplete="off"><br><div class="rw_search_group rw_results_container" style="display: none;"></div>', (opt_data.description) ? '<span class="rw_small_text">' + soy.$$escapeHtml(opt_data.description) + '</span><br>' : '', '<div class="rw_result_tags"><ul class="rw_tag_list rw_search_result_groups">');
  if (opt_data.groups) {
    var groupList376 = opt_data.groups;
    var groupListLen376 = groupList376.length;
    for (var groupIndex376 = 0; groupIndex376 < groupListLen376; groupIndex376++) {
      var groupData376 = groupList376[groupIndex376];
      RW.Templates.Users.resultTag({name: groupData376, key: groupData376}, output);
    }
  }
  output.append('</ul></div></div></div></form></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Users.searchResult = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul>');
  var itemList384 = opt_data.results;
  var itemListLen384 = itemList384.length;
  for (var itemIndex384 = 0; itemIndex384 < itemListLen384; itemIndex384++) {
    var itemData384 = itemList384[itemIndex384];
    output.append('<li data-name="', (itemData384.type == 'user') ? soy.$$escapeHtml(itemData384.username) : soy.$$escapeHtml(itemData384.name), '">', (itemData384.type == 'user') ? '<img src="' + soy.$$escapeHtml(itemData384.thumbnailLink.href) + '" height="16px">' : '', '<a class="content-type-userinfo" ><span class="rw_search_item_title">', (itemData384.type == 'user') ? soy.$$escapeHtml(itemData384.title) : soy.$$escapeHtml(itemData384.name), '</span></a></li>');
  }
  output.append((opt_data.results.length == 0) ? '<span class="rw_padding">' + soy.$$escapeHtml("No search results found.") + '</span>' : '', '</ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Users.resultTag = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li ', (opt_data.key) ? 'data-key="' + soy.$$escapeHtml(opt_data.key) + '"' : '', ' data-name="', soy.$$escapeHtml(opt_data.name), '"><span title="', soy.$$escapeHtml("Remove"), '">', opt_data.name, '<span class=\'rw_delete_button\'>X</span></span></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Users.userMember = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li>', (opt_data.userCategory.linkingAllowed) ? (opt_data.userCategory.type == 'space') ? '<a href="' + soy.$$escapeHtml("/confluence") + '/display/' + soy.$$escapeHtml(opt_data.userCategory.key) + '" title="' + soy.$$escapeHtml(opt_data.userCategory.name) + '">' : (opt_data.userCategory.type == 'category') ? '<a href="' + soy.$$escapeHtml("/confluence") + '/category/' + soy.$$escapeHtml(opt_data.userCategory.key) + '" title="' + soy.$$escapeHtml(opt_data.userCategory.name) + '">' : '' : '<a class="rw_disabled_link">', '<span class="rw_item_name">', soy.$$escapeHtml(opt_data.userCategory.name), '</span><span class="rw_item_role">');
  if (opt_data.userCategory.roles && opt_data.userCategory.roles.length) {
    var roleList454 = opt_data.userCategory.roles;
    var roleListLen454 = roleList454.length;
    for (var roleIndex454 = 0; roleIndex454 < roleListLen454; roleIndex454++) {
      var roleData454 = roleList454[roleIndex454];
      output.append(soy.$$escapeHtml(roleData454), (roleIndex454 != opt_data.userCategory.roles.length - 1) ? ', ' : '');
    }
  }
  output.append('</span></a></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Users.empty = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_no_items rw_users rw_corners">', soy.$$escapeHtml("No users found"), '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/global-menu.soy' */
// This file was automatically generated from global-menu.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.GlobalMenu == 'undefined') { RW.Templates.GlobalMenu = {}; }


RW.Templates.GlobalMenu.component = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_component" style="max-width:250px"><div class="rw_unsaved_changes">', soy.$$escapeHtml("Unsaved changes"), '</div><div class="rw_section rw_component_logo">', (opt_data.globalMenu.type == 'sidemenu') ? '<img height="120px" width="120px" src="' + soy.$$escapeHtml("/confluence") + '/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/admin/icons/sidebar_icon.png" />' : '<img height="120px" width="120px" src="' + soy.$$escapeHtml("/confluence") + '/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/admin/icons/top_menu_icon.png" />', '</div><h3>', soy.$$escapeHtml("Global menu"), '<div class="rw_help_button" data-title="', soy.$$escapeHtml("Footer"), ' " data-text="', soy.$$escapeHtml(AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/global_menu_sidebar.jpg /\x3e\x3cbr\x3eThe global menu contains links to global features of your instance like People Directory, Blogs, and Space Directory, as well as items related to the currently logged in user.","/confluence")), '"><span class="rw_icon rw_iconfont_info"></span></div></h3><div class="rw_section">');
  var values__soy22 = ['default', 'sidemenu'];
  var names__soy23 = ["Header", "Sidebar"];
  RWJS.Templates.Utils.inputRow({type: 'select', name: 'globalMenuLayout', label: "Layout", size: 'small', cssClass: 'rw_menu_type', value: opt_data.globalMenu.type, selectValues: values__soy22, selectNames: names__soy23, dialogHelpText: AJS.format("The global menu can be displayed in the header or as a sidebar. \x3cbr\x3e \x3cbr\x3eSIDEBAR:\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/global_menu_sidebar.jpg /\x3e \x3cbr\x3e \x3cbr\x3eHEADER:\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/global_menu_header.jpg /\x3e","/confluence")}, output);
  if (opt_data.globalMenu.type == 'sidemenu') {
    var values__soy36 = ['responsive', 'open', 'closed'];
    var names__soy37 = ["Responsive", "Always open", "Always closed"];
    RWJS.Templates.Utils.inputRow({type: 'select', name: 'globalMenuDisplay', label: "Display", size: 'small', cssClass: 'rw_menu_mode', value: opt_data.globalMenu.mode, selectValues: values__soy36, selectNames: names__soy37, dialogHelpText: "The sidebar menu can be set to always open, always closed or responsive (open or closed depending on your browser width)."}, output);
    if (opt_data.legacyTheming) {
      var values__soy50 = ['default', 'dark'];
      var names__soy51 = ["Default", "Dark"];
      RWJS.Templates.Utils.inputRow({type: 'select', name: 'globalMenuTheme', label: "Theme", size: 'small', cssClass: 'rw_menu_theme', value: opt_data.globalMenu.theme, selectValues: values__soy50, selectNames: names__soy51, dialogHelpText: "Choose which theme you want to use."}, output);
    }
  }
  output.append((opt_data.unsavedChanges) ? '<div class="rw_input_section"><button class="aui-button aui-button-link rw_cancel_button rw_right">' + soy.$$escapeHtml("Cancel") + '</button><button class="aui-button aui-button-primary rw_save_button rw_right rw_margin_right">' + soy.$$escapeHtml("Save") + '</button></div>' : '', '</div><div class="rw_section"><h4>', soy.$$escapeHtml("Content"), '</h4><a class="aui-button" href="', soy.$$escapeHtml("/confluence"), '/admin/topmenu/edit-topmenu.action">', soy.$$escapeHtml("Manage global menu"), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/categories.soy' */
// This file was automatically generated from categories.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Categories == 'undefined') { RW.Templates.Categories = {}; }


RW.Templates.Categories.categoryBlueprint = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_board"><div class="rw_board_column" style="width:500px; padding:0px;"><div id="rw_category_chooser">', (opt_data.blogPortalEnabled == true) ? '<h3>' + soy.$$escapeHtml("Blog Portal") + '</h3><ul class="rw_blog_portal_section"><li><a data-blog-portal="true">' + soy.$$escapeHtml("Add your blog to the blog portal") + '</a></li></ul><h3>' + soy.$$escapeHtml("Main site") + '</h3>' : '');
  RW.Templates.Categories.abstractCategoriesList({abstractCategories: opt_data.model}, output);
  output.append((opt_data.model.length == 0) ? '<div class="rw_info_box">' + soy.$$escapeHtml("No categories found") + '</div>' : '', '</div></div><div class="rw_board_column" style="padding:20px;"><h3>', soy.$$escapeHtml("About organizing spaces"), '</h3><p>', soy.$$escapeHtml("Spaces can be organized into categories and subcategories. The main navigation feature is based on this structure."), '</p></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Categories.abstractCategoriesList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul>');
  var abstractCategoryList27 = opt_data.abstractCategories;
  var abstractCategoryListLen27 = abstractCategoryList27.length;
  for (var abstractCategoryIndex27 = 0; abstractCategoryIndex27 < abstractCategoryListLen27; abstractCategoryIndex27++) {
    var abstractCategoryData27 = abstractCategoryList27[abstractCategoryIndex27];
    if (! abstractCategoryData27.type || abstractCategoryData27.type == 'category') {
      output.append('<li><a id="rw_category_item_', soy.$$escapeHtml(abstractCategoryData27.nameKey), '" data-category-key="', soy.$$escapeHtml(abstractCategoryData27.nameKey), '">', soy.$$escapeHtml(abstractCategoryData27.name), '</a>');
      if (abstractCategoryData27.subCategories != undefined) {
        RW.Templates.Categories.abstractCategoriesList({abstractCategories: abstractCategoryData27.subCategories}, output);
      }
      output.append('</li>');
    }
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Categories.customCategory = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="aui-dropdown2 rw_custom_category" data-aui-dropdown2-ajax-key="browse_link" data-dropdown2-alignment="right" aria-hidden="false">');
  RW.Templates.Categories.confluenceCategorySections(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Categories.component = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_component" style="width: 300px"><div class="rw_unsaved_changes">', soy.$$escapeHtml("Unsaved changes"), '</div><div class="rw_section rw_component_logo"><img height="120px" width="120px" src="', soy.$$escapeHtml("/confluence"), '/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/admin/icons/category_menu_icon.png" /></div><h3>', soy.$$escapeHtml("Category menu"), '<div class="rw_help_button" data-title="', soy.$$escapeHtml("Category menu"), ' " data-text="', soy.$$escapeHtml(AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_menu.jpg /\x3e\x3cbr\x3eThe category menu is your main source of navigation. It\x27\x27s based on the content structure created in the \x3ca href\x3d\x22{0}/admin/originaltheme/organizer.action\x22\x3eOrganizer\x3c/a\x3e.","/confluence")), '"><span class="rw_icon rw_iconfont_info"></span></div></h3><div class="rw_section">');
  if (opt_data.categoryMenu.menu && opt_data.categoryMenu.dropdown) {
    RW.Templates.Categories.categoryComponent(opt_data, output);
  }
  output.append('</div><div class="rw_section"><h4>', soy.$$escapeHtml("Content"), '</h4><a class="aui-button" href="', soy.$$escapeHtml("/confluence"), '/admin/originaltheme/organizer.action">', soy.$$escapeHtml("Organizer"), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Categories.confluenceCategorySections = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var sectionList74 = opt_data.sections;
  var sectionListLen74 = sectionList74.length;
  for (var sectionIndex74 = 0; sectionIndex74 < sectionListLen74; sectionIndex74++) {
    var sectionData74 = sectionList74[sectionIndex74];
    output.append('<div class="aui-dropdown2-section">', (sectionData74.label) ? '<strong>' + soy.$$escapeHtml(sectionData74.label) + '</strong>' : '', '<ul class="aui-list-truncate rw_content_list" id="', soy.$$escapeHtml(sectionData74.id), '">');
    var itemList84 = sectionData74.items;
    var itemListLen84 = itemList84.length;
    for (var itemIndex84 = 0; itemIndex84 < itemListLen84; itemIndex84++) {
      var itemData84 = itemList84[itemIndex84];
      output.append('<li id="', soy.$$escapeHtml(itemData84.id), '" class="rw_jira_category_item"><a href="', soy.$$escapeHtml(itemData84.url), '" id="', soy.$$escapeHtml(itemData84.id), '_lnk" ', (itemData84.title) ? 'title="' + soy.$$escapeHtml(itemData84.title) + '"' : '', ' ', (itemData84.iconUrl) ? 'class="rw_has_icon"' : '', '>', (itemData84.iconUrl) ? '<img class="icon rw_jira_category_icon" src="' + soy.$$escapeHtml(itemData84.iconUrl) + '" />' : '', soy.$$escapeHtml(itemData84.label), '</a></li>');
    }
    output.append('</ul></div>');
  }
  return opt_sb ? '' : output.toString();
};


RW.Templates.Categories.categoryComponent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_input_section"><h4>', soy.$$escapeHtml("Dashboard link"), '</h4>');
  RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'dashboardLinkDisabled', label: "Disable dashboard link", size: 'small', value: opt_data.categoryMenu.menu.dashboardLinkDisabled, dialogHelpText: AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_menu_dashboard_link.jpg /\x3e Choose if the dashboard link should be visible in the category menu.","/confluence")}, output);
  if (opt_data.categoryMenu.menu.dashboardTitle) {
    RWJS.Templates.Utils.inputRow({type: 'text', name: 'dashboardTitle', label: "Name", size: 'small', value: opt_data.categoryMenu.menu.dashboardTitle, dialogHelpText: AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_menu_dashboard_link.jpg /\x3e Set the name of the main dashboard. This is displayed on the dashboard link located in the category menu.","/confluence")}, output);
  } else {
    RWJS.Templates.Utils.inputRow({type: 'text', name: 'dashboardTitle', label: "Name", size: 'small', value: "Dashboard", dialogHelpText: AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_menu_dashboard_link.jpg /\x3e Set the name of the main dashboard. This is displayed on the dashboard link located in the category menu.","/confluence")}, output);
  }
  output.append('</div><div class="rw_input_section"><h4>', soy.$$escapeHtml("Dropdown"), ' <input class="rw_input_enabled" type="checkbox" name="dropdownEnabled" value="true" ', (! opt_data.categoryMenu.dropdown.disabled) ? ' checked="checked" ' : '', ' /></h4>');
  if (! opt_data.categoryMenu.dropdown.disabled) {
    var values__soy149 = ['dynamic_column', 'multi_column', 'single_column'];
    var names__soy150 = ["Dynamic column", "Multi column", "Single column"];
    RWJS.Templates.Utils.inputRow({type: 'select', name: 'dropdownLayout', label: "Layout", size: 'small', value: opt_data.categoryMenu.dropdown.layout, selectValues: values__soy149, selectNames: names__soy150, dialogHelpText: AJS.format("A category dropdown can contain columns for its content. Here you can decide the layout of those columns. \x3cbr /\x3e\x3cbr /\x3e DYNAMIC: \x3cbr/\x3e\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_dd_layout_dynamic.jpg /\x3e \x3cbr /\x3e MULTI: \x3cbr/\x3e\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_dd_layout_multi.jpg /\x3e \x3cbr /\x3e SINGLE: \x3cbr/\x3e\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_dd_layout_single.jpg /\x3e","/confluence")}, output);
    var values__soy160 = ['small', 'medium', 'large'];
    var names__soy161 = ["Small", "Medium", "Large"];
    RWJS.Templates.Utils.inputRow({type: 'select', name: 'contentSize', label: "Content Size", size: 'small', value: opt_data.categoryMenu.dropdown.contentSize, selectValues: values__soy160, selectNames: names__soy161, dialogHelpText: AJS.format("Choose which size you want on your items in the category dropdown menu. \x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_dd_content_size.jpg /\x3e","/confluence")}, output);
    RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'collapsedSubCategories', label: "Collapsed subcategories", size: 'small', value: opt_data.categoryMenu.dropdown.collapsedSubCategories, dialogHelpText: AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_dd_collapsed.jpg /\x3e When checked, subcategories in the dropdown menu will be loaded in a collapsed state. The user can toggle between collapsed and expanded to show/hide the subcategory content.","/confluence")}, output);
    RWJS.Templates.Utils.inputRow({type: 'text', name: 'minColumnWidth', label: "Min column width", size: 'small', value: (opt_data.categoryMenu.dropdown.minColumnWidth) ? soy.$$escapeHtml(opt_data.categoryMenu.dropdown.minColumnWidth) : soy.$$escapeHtml(opt_data.defaults.columnWidth), help: "Type a number between 100 and 1800, 340 is default.", dialogHelpText: AJS.format("Set the minimum column width for columns in the dropdown menu. A column will never be smaller than this value.","/confluence")}, output);
    RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'excludeArchivedSpaces', label: "Exclude archived spaces", size: 'small', value: opt_data.categoryMenu.dropdown.excludeArchivedSpaces}, output);
  }
  output.append('</div><div class="rw_input_section"><h4>', soy.$$escapeHtml("Logos \x26 icons"), '</h4>');
  RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'showDashboardLogo', label: "Display dashboard icon", size: 'small', value: opt_data.categoryMenu.menu.showDashboardLogo, dialogHelpText: AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_menu_dashboard_icon.jpg /\x3e","/confluence")}, output);
  RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'showCategoryLogo', label: "Display category logos", size: 'small', value: opt_data.categoryMenu.menu.showCategoryLogo, dialogHelpText: AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_menu_category_logo.jpg /\x3e","/confluence")}, output);
  RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'showSpaceLogo', label: "Display space logos", size: 'small', value: opt_data.categoryMenu.dropdown.showSpaceLogo, dialogHelpText: AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_menu_space_logo.jpg /\x3e","/confluence")}, output);
  RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'showSpaceIcon', label: "Display space icons", size: 'small', value: opt_data.categoryMenu.dropdown.showSpaceIcon, dialogHelpText: AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/category_menu_space_icon.jpg /\x3e","/confluence")}, output);
  output.append('</div><div class="rw_input_section rw_save_section"><button class="aui-button aui-button-link rw_cancel_button rw_right">', soy.$$escapeHtml("Cancel"), '</button><button class="aui-button aui-button-primary rw_save_button rw_right rw_margin_right">', soy.$$escapeHtml("Save"), '</button></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Categories.onboardingLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a href="', soy.$$escapeHtml("/confluence"), '/admin/originaltheme/organizer.action"><span style="padding-left: 15px; padding-right: 15px;">', soy.$$escapeHtml("Let\x27s create your site navigation!"), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/layoutboard.soy' */
// This file was automatically generated from layoutboard.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Layout == 'undefined') { RW.Templates.Layout = {}; }


RW.Templates.Layout.board = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_layout_board rw_', soy.$$escapeHtml(opt_data.model.type), '_board">');
  RW.Templates.Layout.toolBar(opt_data, output);
  var iLimit10 = opt_data.maxGroup;
  for (var i10 = 0; i10 < iLimit10; i10++) {
    output.append('<div class="rw_board"><div class="rw_board_row rw_board_group_', soy.$$escapeHtml(i10), '"></div></div>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.spaceBoard = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_layout_board rw_', soy.$$escapeHtml(opt_data.model.type), '_board">');
  RW.Templates.Layout.toolBar(opt_data, output);
  output.append('<div class="rw_board"><div class="rw_board_row rw_board_group_0"><div class="rw_menu_settings"><label class="rw_space_setting rw_spacelogo_setting" for="rw_spacesettings_spacelogo"><input data-key="spaceLogoVisible" id="rw_spacesettings_spacelogo" type="checkbox" ', (opt_data.model.spaceLogoVisible) ? 'checked' : '', '>', soy.$$escapeHtml("Space logo"));
  RW.Templates.Layout.helpButton({title: soy.$$escapeHtml("Space logo"), text: soy.$$escapeHtml(AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/space-logo.jpg /\x3e\x3cbr\x3e Toggle space logo visibility","/confluence"))}, output);
  output.append('</label><label class="rw_space_setting" for="rw_spacesettings_spacegroup"><input data-key="spaceGroupVisible" id="rw_spacesettings_spacegroup" type="checkbox" ', (opt_data.model.spaceGroupVisible) ? 'checked' : '', '>', soy.$$escapeHtml("Space Siblings"));
  RW.Templates.Layout.helpButton({title: soy.$$escapeHtml("Space Siblings"), text: soy.$$escapeHtml(AJS.format("\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/space-siblings.jpg /\x3e\x3cbr\x3e Show a dropdown menu for categorized spaces, where sibling spaces are displayed. Great for documentation spaces with different versions.","/confluence"))}, output);
  output.append('</label><label class="rw_space_setting rw_right" for="rw_spacesettings_menubar"><input data-key="menuLayoutType" id="rw_spacesettings_menubar" type="checkbox" ', (opt_data.model.menuLayoutType == 'simple') ? 'checked' : '', '>', soy.$$escapeHtml("Concealed menu layout"));
  RW.Templates.Layout.helpButton({title: soy.$$escapeHtml("Concealed menu layout"), text: soy.$$escapeHtml(AJS.format("Check this box to hide the page menu and show a cleaner layout. This is great for spaces where most of the users are readers.\x3cbr\x3e\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/concealed-menu-layout-page.jpg /\x3e\x3cbr\x3e\x3cimg src\x3d{0}/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/help/concealed-menu-layout-space.jpg /\x3e\x3cbr\x3e","/confluence"))}, output);
  output.append('</label></div><div id="rw_space_section_placeholder_0"></div><div id="rw_space_section_placeholder_1"></div><div class="rw_space_settings"><label class="rw_space_setting ', (opt_data.model.menuLayoutType == 'simple') ? 'rw_hidden' : '', '" for="rw_spacesettings_breadcrumbs"><input data-key="breadcrumbsVisible" id="rw_spacesettings_breadcrumbs" type="checkbox" ', (opt_data.model.breadcrumbsVisible) ? 'checked' : '', '>', soy.$$escapeHtml("Breadcrumbs"));
  RW.Templates.Layout.helpButton({title: soy.$$escapeHtml("Breadcrumbs"), text: soy.$$escapeHtml("Show breadcrumbs section")}, output);
  output.append('</label></div>');
  RW.Templates.Layout.spaceLayoutTitle(null, output);
  output.append('<div class="rw_space_settings"><label class="rw_space_setting rw_block" for="rw_spacesettings_metadata"><input data-key="metaDataVisible" id="rw_spacesettings_metadata" type="checkbox" ', (opt_data.model.metaDataVisible) ? 'checked' : '', '> ', soy.$$escapeHtml("Meta data"), '<span class="rw_metadata_fade_setting rw_padding_left', (! opt_data.model.metaDataVisible) ? ' rw_hidden' : '', '"><input data-key="metaDataFade" id="rw_spacesetting_metadata_fade" type="checkbox" ', (opt_data.model.metaDataFade) ? 'checked' : '', '>', soy.$$escapeHtml("Auto-hide meta data"), '</span>');
  RW.Templates.Layout.helpButton({title: soy.$$escapeHtml("Meta data"), text: soy.$$escapeHtml("Toggle meta data section visibility")}, output);
  output.append('</label></div><div id="rw_space_section_placeholder_2"></div>');
  RW.Templates.Layout.spaceLayoutText(null, output);
  output.append('<div id="rw_space_section_placeholder_3"></div><div class="rw_space_settings"><label class="rw_space_setting" for="rw_spacesettings_likes"><input data-key="likesVisible" id="rw_spacesettings_likes" type="checkbox" ', (opt_data.model.likesVisible) ? 'checked' : '', '>', soy.$$escapeHtml("Likes"));
  RW.Templates.Layout.helpButton({title: soy.$$escapeHtml("Likes"), text: soy.$$escapeHtml("Show like section")}, output);
  output.append('</label><label class="rw_space_setting" for="rw_spacesettings_labels"><input data-key="labelsVisible" id="rw_spacesettings_labels" type="checkbox" ', (opt_data.model.labelsVisible) ? 'checked' : '', '>', soy.$$escapeHtml("Labels"));
  RW.Templates.Layout.helpButton({title: soy.$$escapeHtml("Labels"), text: soy.$$escapeHtml("Toggle labels section visibility")}, output);
  output.append('</label></div><label class="rw_space_settings rw_spacesettings_children" for="rw_spacesettings_children"><span class="rw_space_setting rw_block"><input data-key="childrenVisible" id="rw_spacesettings_children" type="checkbox" ', (opt_data.model.childrenVisible) ? 'checked' : '', '>', soy.$$escapeHtml("Children"));
  RW.Templates.Layout.helpButton({title: soy.$$escapeHtml("Children"), text: soy.$$escapeHtml("Show page children section")}, output);
  output.append('</label><label class="rw_space_settings" for="rw_spacesettings_comments"><span class="rw_space_setting rw_block"><input data-key="commentsVisible" id="rw_spacesettings_comments" type="checkbox" ', (opt_data.model.commentsVisible) ? 'checked' : '', '>', soy.$$escapeHtml("Comments"));
  RW.Templates.Layout.helpButton({title: soy.$$escapeHtml("Comments"), text: soy.$$escapeHtml("Show comments section")}, output);
  output.append('</label><div id="rw_space_section_placeholder_4"></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.helpButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_help_button" data-title="', soy.$$escapeHtml(opt_data.title), '" data-text="', opt_data.text, '"><span class="rw_icon rw_iconfont_info"></span></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.toolBar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_layout_board_toolbar"><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner"><div class="aui-toolbar2-primary">', (opt_data.model.type == 'space-template') ? '<h1>' + soy.$$escapeHtml(opt_data.model.name) + '</h1>' : '<h1>' + soy.$$escapeHtml(opt_data.title) + '</h1>', '<div class="aui-buttons">');
  if (opt_data.model.type == 'space-template') {
    RWJS.Templates.Buttons.button({cssClass: 'rw_edit_template_details_button rw_tooltip', tooltip: soy.$$escapeHtml("Edit the name and description of this template"), content: soy.$$escapeHtml("Edit details"), icon: 'edit'}, output);
  }
  if (opt_data.model.type != 'space' && opt_data.model.type != 'global_space' && opt_data.model.type != 'space-template') {
    RWJS.Templates.Buttons.button({cssClass: 'rw_layout_mode_button rw_tooltip', tooltip: soy.$$escapeHtml("Edit Board Layout"), content: soy.$$escapeHtml("Board Layout"), icon: 'layout'}, output);
  }
  if (opt_data.model.type != 'space') {
    RWJS.Templates.Buttons.button({cssClass: 'rw_open_attachments_button rw_tooltip', tooltip: soy.$$escapeHtml("Edit attachments for this board"), content: soy.$$escapeHtml("Attachments"), icon: 'attachment'}, output);
  }
  RWJS.Templates.Buttons.button({cssClass: 'rw_versions_button rw_tooltip', tooltip: soy.$$escapeHtml("View History"), content: soy.$$escapeHtml("Version History"), icon: 'activity'}, output);
  output.append('</div>');
  if (opt_data.model.type != 'space-template') {
    if (opt_data.model.type == 'space' || opt_data.model.type == 'global_space') {
      RWJS.Templates.Buttons.button({cssClass: 'rw_template_button rw_tooltip', tooltip: soy.$$escapeHtml("View Space Layouts"), content: soy.$$escapeHtml("View Space Layouts")}, output);
    } else {
      RWJS.Templates.Buttons.button({cssClass: 'rw_template_button rw_tooltip', tooltip: soy.$$escapeHtml("Start from template"), content: soy.$$escapeHtml("Start from template")}, output);
    }
  }
  output.append((opt_data.model.layoutBoardInfo != undefined && opt_data.model.type != 'space-template') ? (opt_data.model.layoutBoardInfo.level == opt_data.level) ? '<div class="rw_layout_board_mode ' + ((opt_data.model.layoutBoardInfo.spaceType != undefined) ? 'rw_space_type' : 'rw_custom') + '" ' + ((opt_data.model.layoutBoardInfo.spaceType != undefined) ? 'data-space-type="' + soy.$$escapeHtml(opt_data.model.layoutBoardInfo.spaceType) + '"' : '') + '>' + (((opt_data.model.layoutBoardInfo.type == 'space' || opt_data.model.layoutBoardInfo.type == 'global_space') && opt_data.model.layoutBoardInfo.spaceType != undefined) ? soy.$$escapeHtml(opt_data.model.name) : soy.$$escapeHtml("Custom settings")) + '<span class="rw_delete_button rw_tooltip" data-confirm="' + soy.$$escapeHtml("Are you sure you want to revert to the default settings?") + '" data-tooltip="' + soy.$$escapeHtml("Revert back to the default settings") + '">x</span></div>' : (opt_data.level == 'global') ? '<div class="rw_layout_board_mode">' + soy.$$escapeHtml("Default settings") + '</div>' : '<div class="rw_layout_board_mode">' + soy.$$escapeHtml("Global settings") + '</div>' : '', '</div><div class="aui-toolbar2-secondary"><div class="rw_unsaved_changes">', soy.$$escapeHtml("Unsaved changes"), '</div>');
  RWJS.Templates.Buttons.button({cssClass: 'rw_save_button aui-button-primary', content: soy.$$escapeHtml("Save")}, output);
  RWJS.Templates.Buttons.button({cssClass: 'rw_select_space_type_button rw_hidden aui-button-primary', content: soy.$$escapeHtml("Save Space Layout")}, output);
  RWJS.Templates.Buttons.button({cssClass: 'rw_cancel_button aui-button-link', content: soy.$$escapeHtml("Cancel")}, output);
  output.append('</div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.boardLayout = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_layout_board rw_layout_mode rw_edit_section_board rw_', soy.$$escapeHtml(opt_data.model.type), '_board" data-id="', soy.$$escapeHtml(opt_data.model.id), '"><div class="rw_layout_board_toolbar"><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner"><div class="aui-toolbar2-primary"><h1>', soy.$$escapeHtml("Board Layout"), '</h1></div><div class="aui-toolbar2-secondary"><div class="rw_unsaved_changes">', soy.$$escapeHtml("Unsaved changes"), '</div>');
  RWJS.Templates.Buttons.button({cssClass: 'rw_layout_mode_done_button aui-button-primary', content: soy.$$escapeHtml("Done")}, output);
  RWJS.Templates.Buttons.button({cssClass: 'rw_layout_mode_cancel_button aui-button-link', content: soy.$$escapeHtml("Cancel")}, output);
  output.append('</div></div></div></div><div class="rw_layout_board_content"><div class="rw_layout_button_container">');
  RWJS.Templates.Buttons.add({cssClass: 'rw_add_top_section_button aui-button-link rw_tooltip', tooltip: soy.$$escapeHtml("Add section")}, output);
  output.append('</div>');
  var iLimit304 = opt_data.maxGroup;
  for (var i304 = 0; i304 < iLimit304; i304++) {
    output.append('<div class="rw_board"><div class="rw_board_group_', soy.$$escapeHtml(i304), '"></div></div>');
  }
  output.append('<div class="rw_layout_button_container">');
  RWJS.Templates.Buttons.add({cssClass: 'rw_add_bottom_section_button aui-button-link rw_tooltip', tooltip: soy.$$escapeHtml("Add section")}, output);
  output.append('<div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.boardVersions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_layout_board rw_version_mode"><div class="rw_layout_board_toolbar"><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner"><div class="aui-toolbar2-primary"><h1>', soy.$$escapeHtml("Version History"), '</h1></div><div class="aui-toolbar2-secondary">');
  RWJS.Templates.Buttons.button({cssClass: 'rw_version_mode_done_button aui-button-primary', content: soy.$$escapeHtml("Done")}, output);
  output.append('</div></div></div></div><div class="rw_layout_board_content">', (opt_data.defaultBoard) ? '<div class="rw_info_box">' + soy.$$escapeHtml("A default board is currently in use. Below you can find previous versions of this board.") + '</div>' : '');
  if (opt_data.versionsModel.versions.length > 0) {
    output.append('<ul class="rw_items rw_versions"><li class="rw_heading" ><div class="rw_item_version">', soy.$$escapeHtml("Version"), '</div><div class="rw_item_date">', soy.$$escapeHtml("Date"), '</div><div class="rw_item_author">', soy.$$escapeHtml("Changed By"), '</div><div class="rw_item_operations">', soy.$$escapeHtml("Operations"), '</div><div class="rw_item_comment">', soy.$$escapeHtml("Comment"), '</div></li>');
    var versionList343 = opt_data.versionsModel.versions;
    var versionListLen343 = versionList343.length;
    for (var versionIndex343 = 0; versionIndex343 < versionListLen343; versionIndex343++) {
      var versionData343 = versionList343[versionIndex343];
      output.append('<li class="rw_item" data-id="', soy.$$escapeHtml(versionData343.versionNumber), '"><div class="rw_item_version">', soy.$$escapeHtml(versionData343.versionNumber), '</div><div class="rw_item_date">', (versionData343.date) ? soy.$$escapeHtml(versionData343.date) : '', '</div><div class="rw_item_author">', (versionData343.author) ? '<a class="confluence-userlink userlink-0" data-username="' + soy.$$escapeHtml(versionData343.author.username) + '" href="/display/~' + soy.$$escapeHtml(versionData343.author.username) + '" title="' + soy.$$escapeHtml(versionData343.author.fullName) + '">' + soy.$$escapeHtml(versionData343.author.fullName) + '</a>' : '', '</div><div class="rw_item_operations">');
      if (! (versionIndex343 == 0) || opt_data.defaultBoard) {
        RWJS.Templates.Buttons.button({cssClass: 'rw_layout_revert_button', content: soy.$$escapeHtml("Restore this version")}, output);
        RWJS.Templates.Buttons.button({cssClass: 'rw_layout_preview_button', content: soy.$$escapeHtml("Preview")}, output);
        RWJS.Templates.Buttons.button({cssClass: 'rw_layout_delete_button', content: soy.$$escapeHtml("Delete"), dataConfirm: soy.$$escapeHtml(AJS.format("This will delete version {0} of this board, are you sure?",versionData343.versionNumber))}, output);
        output.append('<div class="data_param_add_comment" style="display:none;">', soy.$$escapeHtml("Add comment"), '</div><div class="data_param_default_comment" style="display:none;">', soy.$$escapeHtml("Restored to version"), ' ', soy.$$escapeHtml(versionData343.versionNumber), '</div>');
      } else {
        output.append('<div class="aui-lozenge aui-lozenge-success">', soy.$$escapeHtml("Current version"), '</div>');
      }
      output.append('</div><div class="rw_item_comment">', soy.$$escapeHtml(versionData343.comment), '</div></li>');
    }
    output.append('</ul>');
  } else {
    output.append(soy.$$escapeHtml("There are no previous versions available."));
  }
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.restoreVersion = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="rw_restore_version_form" title="', soy.$$escapeHtml("Restore this version"), '"><p>', soy.$$escapeHtml("Are you sure you want to revert the content back to this previous version?"), '</p><form class="aui" onkeypress="return event.keyCode != 13;"><div class="field-group"><label for="comment">', soy.$$escapeHtml("Add comment"), '</label><input type="text" name="comment" class="text long-field" id="comment-field" class="" value="" maxlength="100"/></div></form></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.section = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_board_column" ', (opt_data.section.width) ? 'style="width:' + soy.$$escapeHtml(opt_data.section.width) + '%"' : '', '><ul class="rw_board_items rw_layout_section" id="rw_section_', soy.$$escapeHtml(opt_data.section.id), '" data-id="', soy.$$escapeHtml(opt_data.section.id), '" ><div class="rw_add_item_container">');
  RWJS.Templates.Buttons.button({cssClass: 'rw_add_item_button rw_tooltip', content: soy.$$escapeHtml("Add"), tooltip: soy.$$escapeHtml("Add new item")}, output);
  output.append('</div></ul></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.editableSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_layout_section rw_editable_section rw_middle_section" id="rw_section_', soy.$$escapeHtml(opt_data.section.id), '" data-id="', soy.$$escapeHtml(opt_data.section.id), '" style="width:', soy.$$escapeHtml(Math.round(opt_data.section.width)), '0px">', (opt_data.section.items.length > 0) ? '<span class="rw_section_has_content rw_tooltip" data-tooltip="' + soy.$$escapeHtml("This section contains content and can\x27t be deleted") + '">' + soy.$$escapeHtml("Has content") + '</span>' : '<span class="rw_remove_section_button rw_tooltip" data-tooltip="' + soy.$$escapeHtml("Remove section") + '">X</span>', '<h1>', soy.$$escapeHtml(Math.round(opt_data.section.width)), '%</h1></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li id="rw_item_', soy.$$escapeHtml(opt_data.item.id), '" data-id="', soy.$$escapeHtml(opt_data.item.id), '" class="rw_item rw_item_board">', (opt_data.content) ? '<ul class="rw_items rw_item_preview">' + opt_data.content + '</ul>' : '', '<div class="rw_item_operations">');
  RWJS.Templates.Buttons.button({cssClass: 'rw_open_editor rw_tooltip', content: soy.$$escapeHtml("Edit"), tooltip: soy.$$escapeHtml("Open in editor")}, output);
  RWJS.Templates.Buttons.button({cssClass: 'rw_remove_item rw_tooltip', content: soy.$$escapeHtml("Remove"), tooltip: soy.$$escapeHtml("Remove this item")}, output);
  output.append('</div></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.addItemDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_layout_board_dialog"><div class="rw_board rw_primary"><div class="rw_board_column"><ul class="rw_items rw_quicklinks">');
  var macroList483 = opt_data.defaultMacros;
  var macroListLen483 = macroList483.length;
  for (var macroIndex483 = 0; macroIndex483 < macroListLen483; macroIndex483++) {
    var macroData483 = macroList483[macroIndex483];
    if (macroIndex483 % 2 == 0) {
      RW.Templates.Layout.macroItem({macro: macroData483}, output);
    }
  }
  output.append('</ul></div><div class="rw_board_column"><ul class="rw_items rw_quicklinks">');
  var macroList490 = opt_data.defaultMacros;
  var macroListLen490 = macroList490.length;
  for (var macroIndex490 = 0; macroIndex490 < macroListLen490; macroIndex490++) {
    var macroData490 = macroList490[macroIndex490];
    if (macroIndex490 % 2 != 0) {
      RW.Templates.Layout.macroItem({macro: macroData490}, output);
    }
  }
  output.append('</ul></div></div><div class="rw_board rw_secondary"><div class="rw_board_column"><button class="aui-button aui-button-primary"  id="rw_macrobrowser_button">', soy.$$escapeHtml("Add macro"), '</button></div><div class="rw_board_column"><p><strong>', soy.$$escapeHtml("OR"), '</strong></p></div><div class="rw_board_column"><button class="aui-button" id="rw_editor_button">', soy.$$escapeHtml("Open Editor"), '</button></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.macroItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li data-item="', soy.$$escapeHtml(opt_data.macro.key), '" class="rw_size_large rw_quicklink_button"><div class="rw_item_icon"></div><div class="rw_item_content rw_has_icon"></div></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.spaceLayoutText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_space_board_text rw_board_column"><strong>', soy.$$escapeHtml("Page body"), '</strong></br>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.spaceLayoutTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1 class="rw_space_board_title rw_board_column">', soy.$$escapeHtml("Page Title"), '</h1>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.loader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_loader_container"><div class="rw_loader_32_image"></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.spaceLayoutBlueprint = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_board"><div class="rw_board_column" style="width:500px; padding:0px;"><div id="rw_layout_template_chooser"><ul class="rw_items"><li><a data-template-key="global" class="rw_selected"><h4>', soy.$$escapeHtml("Global Space Layout"), '</h4><span>', soy.$$escapeHtml("Use the default space layout defined by your administrator."), '</span></a></li></ul><ul class="rw_items">');
  var templateList523 = opt_data.model.templates;
  var templateListLen523 = templateList523.length;
  for (var templateIndex523 = 0; templateIndex523 < templateListLen523; templateIndex523++) {
    var templateData523 = templateList523[templateIndex523];
    output.append('<li><a data-template-key="', soy.$$escapeHtml(templateData523.contentKey), '"><h4>', soy.$$escapeHtml(templateData523.name), '</h4><span>', soy.$$escapeHtml(templateData523.description), '</span></a></li>');
  }
  output.append('</ul><ul class="rw_items"><li><a data-template-key="custom"><h4>', soy.$$escapeHtml("Custom Space Layout"), '</h4><span>', soy.$$escapeHtml("Create a custom space layout. You will be redirected to the space layout editor"), '</span></a></li></ul></div></div><div class="rw_board_column" style="padding:20px;" ><h3>', soy.$$escapeHtml("About Space Layouts"), '</h3><p>', soy.$$escapeHtml("The space layout defines the functionality which will be available on all pages in your space. Use the global, create a custom or choose one of the predefined."), '</p></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.templateList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="rw_layout_template_chooser"><ul class="rw_items">');
  var templateList543 = opt_data.model.templates;
  var templateListLen543 = templateList543.length;
  for (var templateIndex543 = 0; templateIndex543 < templateListLen543; templateIndex543++) {
    var templateData543 = templateList543[templateIndex543];
    output.append('<li><a id="rw_template_', soy.$$escapeHtml(templateData543.contentKey), '" data-template-key="', soy.$$escapeHtml(templateData543.contentKey), '"><h4>', soy.$$escapeHtml(templateData543.name), '</h4><span>', soy.$$escapeHtml(templateData543.description), '</span></a></li>');
  }
  output.append((opt_data.model.templates.length == 0) ? '<div class="rw_info_box">' + soy.$$escapeHtml("No items found") + '</div>' : '', '</ul></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.macroPreview = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li class="rw_macro_preview"><div class="rw_item_icon">', (opt_data.macro.icon) ? '<img src="' + soy.$$escapeHtml("/confluence") + soy.$$escapeHtml(opt_data.macro.icon.location) + '"/>' : '<span class="icon-' + soy.$$escapeHtml(opt_data.macro.name) + '"></span>', '</div>', (opt_data.macro.hasEdit) ? '<div class="rw_item_edit"><div class="rw_edit_macro rw_tooltip" data-tooltip="' + soy.$$escapeHtml("Edit macro") + '"></div></div>' : '', '<div class="rw_item_content ', (opt_data.macro.hasEdit) ? 'rw_has_edit' : '', '">', (opt_data.macro.title) ? soy.$$escapeHtml(opt_data.macro.title) : soy.$$escapeHtml(opt_data.macro.name), '</div>', (opt_data.macro.body) ? '<div class="rw_item_body"><span>' + soy.$$escapeHtml("This macro has a body") + '</span></div>' : '', (opt_data.macro.paramDesc) ? '<div class="rw_item_parameters">' + opt_data.macro.paramDesc + '</div>' : '', '</li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.itemPreview = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="rw_content_preview">', opt_data.content, '</li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.imagePreview = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="rw_image_preview">', opt_data.image, '</li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.customLayoutBoardList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  if (opt_data.type == 'spaces') {
    output.append('<p>', soy.$$escapeHtml("Here you will find all spaces with custom space layouts"), '</p><ul class="rw_items">');
    var spaceList618 = opt_data.list;
    var spaceListLen618 = spaceList618.length;
    for (var spaceIndex618 = 0; spaceIndex618 < spaceListLen618; spaceIndex618++) {
      var spaceData618 = spaceList618[spaceIndex618];
      output.append('<li data-key="', soy.$$escapeHtml(spaceData618.key), '" data-name="', soy.$$escapeHtml(spaceData618.name), '"><div>', spaceData618.name, ' <span class="rw_small_text">(', soy.$$escapeHtml(spaceData618.key), ')</span>', (spaceData618.type == 'space') ? '<div class="rw_layout_board_mode rw_custom">' + soy.$$escapeHtml("Custom Space Layout") + '</div>' : '<div class="rw_layout_board_mode rw_space_type">' + soy.$$escapeHtml(spaceData618.type) + '</div>', '<a href="', soy.$$escapeHtml("/confluence"), '/spaces/refinedwiki/edit-space-layout.action?key=', soy.$$escapeHtml(spaceData618.key), '" target="_blank" class="aui-button">', soy.$$escapeHtml("Edit"), '</a><a href="', soy.$$escapeHtml("/confluence"), '/display/', soy.$$escapeHtml(spaceData618.key), '" target="_blank" class="aui-button">', soy.$$escapeHtml("View"), '</a></div></li>');
    }
    output.append((opt_data.list.length == 0) ? '<div class="rw_info_box">' + soy.$$escapeHtml("No items found") + '</div>' : '', '</ul>');
  } else if (opt_data.type == 'users') {
    output.append('<p>', soy.$$escapeHtml("Here you will find all users with custom user dashboards."), '</p><ul class="rw_items">');
    var userList662 = opt_data.list;
    var userListLen662 = userList662.length;
    for (var userIndex662 = 0; userIndex662 < userListLen662; userIndex662++) {
      var userData662 = userList662[userIndex662];
      output.append('<li data-key="', soy.$$escapeHtml(userData662.key), '"><div>', soy.$$escapeHtml(userData662.name), '<div class="rw_layout_board_mode rw_custom">', soy.$$escapeHtml("Custom settings"), '</div><a href="', soy.$$escapeHtml("/confluence"), '/users/edit-user-dashboard.action?username=', soy.$$escapeHtml(userData662.key), '" target="_blank" class="aui-button">', soy.$$escapeHtml("Edit"), '</a><a href="', soy.$$escapeHtml("/confluence"), '/users/view-user-dashboard.action?username=', soy.$$escapeHtml(userData662.key), '" target="_blank" class="aui-button">', soy.$$escapeHtml("View"), '</a></div></li>');
    }
    output.append((opt_data.list.length == 0) ? '<div class="rw_info_box">' + soy.$$escapeHtml("No items found") + '</div>' : '', '</ul>');
  } else if (opt_data.type == 'dashboards') {
    output.append('<p>', soy.$$escapeHtml("Here you will find all dashboards with custom layouts."), '</p><ul class="rw_items">');
    var dashboardList693 = opt_data.list;
    var dashboardListLen693 = dashboardList693.length;
    for (var dashboardIndex693 = 0; dashboardIndex693 < dashboardListLen693; dashboardIndex693++) {
      var dashboardData693 = dashboardList693[dashboardIndex693];
      output.append('<li data-key="', soy.$$escapeHtml(dashboardData693.key), '"><div>', soy.$$escapeHtml(dashboardData693.name), '<div class="rw_layout_board_mode rw_custom">', soy.$$escapeHtml("Custom settings"), '</div><a href="', soy.$$escapeHtml("/confluence"), '/category/edit-sub-dashboard.action?categoryKey=', soy.$$escapeHtml(dashboardData693.key), '" target="_blank" class="aui-button">', soy.$$escapeHtml("Edit"), '</a><a href="', soy.$$escapeHtml("/confluence"), '/category/', soy.$$escapeHtml(dashboardData693.key), '" target="_blank" class="aui-button">', soy.$$escapeHtml("View"), '</a></div></li>');
    }
    output.append((opt_data.list.length == 0) ? '<div class="rw_info_box">' + soy.$$escapeHtml("No items found") + '</div>' : '', '</ul>');
  }
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.spaceLayoutComponent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_component"><div class="rw_section rw_component_logo"><img height="120px" width="120px" src="', soy.$$escapeHtml("/confluence"), '/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/admin/icons/space_layout_icon.png"/></div><h3>', soy.$$escapeHtml("Space Layout"), '<div class="rw_help_button" data-title="', soy.$$escapeHtml("Space Layout"), ' " data-text="', soy.$$escapeHtml("Different spaces have different needs in terms of UI. Define space layouts that are taylor made for these needs. Space layouts are assigned to spaces upon creation or through the admin section of a space.\x3cbr/\x3e \x3cbr/\x3e The default space layouts can be disabled or enabled."), '"><span class="rw_icon rw_iconfont_info"></span></div></h3><div class="rw_section"><h4>', soy.$$escapeHtml("Default space layouts"), '</h4><ul class="rw_items">');
  var templateList732 = opt_data.model.templates;
  var templateListLen732 = templateList732.length;
  for (var templateIndex732 = 0; templateIndex732 < templateListLen732; templateIndex732++) {
    var templateData732 = templateList732[templateIndex732];
    output.append((templateData732.defaultBoard) ? '<li class="rw_template_item_' + soy.$$escapeHtml(templateData732.contentKey) + '"><div class="rw_item_content"><div class="rw_actions"><button class="aui-button aui-button-link rw_delete_template" data-key="' + soy.$$escapeHtml(templateData732.contentKey) + '">' + ((templateData732.enabled) ? soy.$$escapeHtml("Disable") : soy.$$escapeHtml("Enable")) + '</button></div><span ' + ((! templateData732.enabled) ? 'style="opacity:0.5"' : '') + '>' + soy.$$escapeHtml(templateData732.name) + ((! templateData732.enabled) ? ' (' + soy.$$escapeHtml("Disabled") + ')' : '') + '</span></div></li>' : '');
  }
  output.append('</ul></div><div class="rw_section"><h4>', soy.$$escapeHtml("Custom Space Layouts"), '</h4><ul class="rw_items">');
  var templateList761 = opt_data.model.templates;
  var templateListLen761 = templateList761.length;
  for (var templateIndex761 = 0; templateIndex761 < templateListLen761; templateIndex761++) {
    var templateData761 = templateList761[templateIndex761];
    output.append((! templateData761.defaultBoard) ? '<li class="rw_template_item_' + soy.$$escapeHtml(templateData761.contentKey) + '"><div class="rw_item_content"><div class="rw_actions"><a class="aui-button" href="' + soy.$$escapeHtml("/confluence") + '/admin/spaces/edit-spacelayout-template.action?key=' + soy.$$escapeHtml(templateData761.contentKey) + '">' + soy.$$escapeHtml("Edit") + '</a><button class="aui-button aui-button-link rw_delete_template" data-key="' + soy.$$escapeHtml(templateData761.contentKey) + '">' + soy.$$escapeHtml("Delete") + '</button></div><span>' + soy.$$escapeHtml(templateData761.name) + '</span></div></li>' : '');
  }
  output.append('</ul><div class="rw_items_toolbar"><button class="aui-button rw_add_template">', soy.$$escapeHtml("Add Space Layout"), '</button></div></div><div class="rw_section"><h4>', soy.$$escapeHtml("Global Space Layout"), '</h4>', (opt_data.globalSpaceLayoutModel.layoutBoardInfo.type == 'default_space') ? '<div class="rw_layout_board_mode">' + soy.$$escapeHtml("Default settings") + '</div>' : (opt_data.globalSpaceLayoutModel.layoutBoardInfo.spaceType) ? '<div class="rw_layout_board_mode rw_space_type">' + soy.$$escapeHtml(opt_data.globalSpaceLayoutModel.name) + '</div>' : (opt_data.globalSpaceLayoutModel.layoutBoardInfo.type == 'global_space') ? '<div class="rw_layout_board_mode rw_custom">' + soy.$$escapeHtml("Custom settings") + '</div>' : '', '<div class="rw_margin_top"><a class="aui-button" href="', soy.$$escapeHtml("/confluence"), '/admin/spaces/editglobalspacelayout.action">', soy.$$escapeHtml("Edit"), '</a></div></div><div class="rw_section"><h4>', soy.$$escapeHtml("Spaces with custom space layouts"), '</h4><a class="aui-button" onClick="RWJS.PubSub.trigger(\'layoutboard:open-custom-spaces\'); return false;">', soy.$$escapeHtml("View"), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.dashboardComponent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_component"><div class="rw_section rw_component_logo"><img height="120px" width="120px" src="', soy.$$escapeHtml("/confluence"), '/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/admin/icons/dashboard_icon.png"/></div><h3>', soy.$$escapeHtml("Dashboard"), '<div class="rw_help_button" data-title="', soy.$$escapeHtml("Dashboard"), ' " data-text="', soy.$$escapeHtml("The main dashboard and category dashboards can be customized to fit all needs. Start from one of the default templates or create a customized dashboard."), '"><span class="rw_icon rw_iconfont_info"></span></div></h3><div class="rw_section"><h4>', soy.$$escapeHtml("Main Dashboard"), '</h4>', (opt_data.model.layoutBoardInfo.level == 'default') ? '<div class="rw_layout_board_mode">' + soy.$$escapeHtml("Default settings") + '</div>' : (opt_data.model.layoutBoardInfo.level == 'content') ? '<div class="rw_layout_board_mode rw_custom">' + soy.$$escapeHtml("Custom settings") + '</div>' : '', '<div class="rw_margin_top"><a class="aui-button" href="', soy.$$escapeHtml("/confluence"), '/dashboard/edit-dashboard.action?redirect=admin">', soy.$$escapeHtml("Edit"), '</a></div></div><div class="rw_section"><h4>', soy.$$escapeHtml("Categories with custom dashboards"), '</h4><a class="aui-button" onClick="RWJS.PubSub.trigger(\'layoutboard:open-custom-dashboards\'); return false;">', soy.$$escapeHtml("View"), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.userDashboardComponent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_component"><div class="rw_section rw_component_logo"><img height="120px" width="120px" src="', soy.$$escapeHtml("/confluence"), '/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/admin/icons/dashboard_icon.png"/></div><h3>', soy.$$escapeHtml("User dashboard"), '<div class="rw_help_button" data-title="', soy.$$escapeHtml("User dashboard"), ' " data-text="', soy.$$escapeHtml("The user dashboard is a personal dashboard available to all users. It can be customized globally by an administrator or individually by each user when allowed. \x3cbr/\x3e\x3cbr/\x3ePermissions are set at the Theme Configuration page."), '"><span class="rw_icon rw_iconfont_info"></span></div></h3><div class="rw_section"><h4>', soy.$$escapeHtml("Global User Dashboard Layout"), '</h4>', (opt_data.model.layoutBoardInfo.type == 'default_user') ? '<div class="rw_layout_board_mode">' + soy.$$escapeHtml("Default settings") + '</div>' : (opt_data.model.layoutBoardInfo.type == 'global_user') ? '<div class="rw_layout_board_mode rw_custom">' + soy.$$escapeHtml("Custom settings") + '</div>' : '', '<div class="rw_margin_top"><a class="aui-button" href="', soy.$$escapeHtml("/confluence"), '/admin/originaltheme/editglobaluserdashboard.action">', soy.$$escapeHtml("Edit"), '</a></div></div><div class="rw_section"><h4>', soy.$$escapeHtml("Users with custom user dashboards"), '</h4><a class="aui-button" onClick="RWJS.PubSub.trigger(\'layoutboard:open-custom-users\'); return false;">', soy.$$escapeHtml("View"), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Layout.addSpaceLayoutTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div>');
  RWJS.Templates.Utils.inputRow({type: 'text', name: 'name', label: soy.$$escapeHtml("Name"), mandatory: true}, output);
  RWJS.Templates.Utils.inputRow({type: 'text', name: 'key', label: soy.$$escapeHtml("Name key"), mandatory: true, disabled: opt_data.disableKey}, output);
  RWJS.Templates.Utils.inputRow({type: 'textarea', name: 'description', label: soy.$$escapeHtml("Description")}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/activity.soy' */
// This file was automatically generated from activity.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Activity == 'undefined') { RW.Templates.Activity = {}; }


RW.Templates.Activity.set = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_activity_set"><div class="rw_activity_set_pic"><div class="rw_profile_pic"><a class="userLogoLink"><img class="userLogo logo"></a></div></div><div class="rw_activity_set_content rw_corners"><div class="rw_author"><a class="confluence-userlink"></a></div><ul class="rw_items rw_activity_items"></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Activity.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><div class="rw_item_icon"><span class="rw_activity_item_icon rw_icon_container_16 "></span></div><div class="rw_item_content rw_has_icon"><div class="rw_ellipsis"><a class="rw_activity_link"></a><span class="rw_activity_space_name rw_small_text"></span></div><div class="rw_summary"></div><div class="rw_date"></div><div class="rw_thumbnail"></div></div></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Activity.popularSet = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_activity_set rw_activity_set_popular"><div class="rw_activity_set_pic"><div class="rw_profile_pic"><a class="userLogoLink"><img class="userLogo logo"></a></div></div><div class="rw_activity_set_content rw_corners"><ul class="rw_items rw_activity_items"></ul></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Activity.popularItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><div class="rw_item_icon"><span class="rw_activity_item_icon rw_icon_container_16 "></span></div><div class="rw_item_content"><span class="rw_popularity_data"></span><a class="rw_activity_link"></a><div class="rw_date"></div><div class="rw_author"><a class="confluence-userlink"></a></div><div style="clear:both;"></div></div></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Activity.loadMoreSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul><li class="rw_corners">');
  RW.Templates.loadMoreButton(null, output);
  output.append('</li></ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Activity.empty = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_no_items rw_activity rw_corners">', soy.$$escapeHtml("No recently updated content found."), '</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Activity.replyButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a onclick="RWJS.showSmallLoader(this)" class="rw_button_small"></a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/spaces.soy' */
// This file was automatically generated from spaces.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Spaces == 'undefined') { RW.Templates.Spaces = {}; }


RW.Templates.Spaces.section = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_box"><ul class="rw_content_list"></ul></div><div style="clear:both;"></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Spaces.categorySection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_box"><ul class="rw_content_list"></ul><div style="clear:both"></div><div class="rw_spaces_subcategories"></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Spaces.categoryItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_category"><div class="rw_spaces_category_title"><span>', (opt_data.category && opt_data.category.name) ? soy.$$escapeHtml(opt_data.category.name) : '', '</span></div><div class="rw_spaces_category_content" ><ul class="rw_content_list"></ul><div style="clear:both"></div><div class="rw_spaces_subcategories">');
  if (opt_data.category && opt_data.category.subCategories) {
    var catList14 = opt_data.category.subCategories;
    var catListLen14 = catList14.length;
    for (var catIndex14 = 0; catIndex14 < catListLen14; catIndex14++) {
      var catData14 = catList14[catIndex14];
      RW.Templates.Spaces.categoryItem({category: catData14}, output);
    }
  }
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Spaces.categoryItemWithDashboard = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_category"><a class="rw_item_expand"><span></span></a><div class="rw_spaces_category_title rw_has_expand"><span>', (opt_data.category && opt_data.category.name) ? soy.$$escapeHtml(opt_data.category.name) : '', '</span></div><div class="rw_spaces_category_content" ><ul class="rw_content_list"></ul><div style="clear:both"></div><div class="rw_spaces_subcategories">');
  if (opt_data.category && opt_data.category.subCategories) {
    var catList27 = opt_data.category.subCategories;
    var catListLen27 = catList27.length;
    for (var catIndex27 = 0; catIndex27 < catListLen27; catIndex27++) {
      var catData27 = catList27[catIndex27];
      RW.Templates.Spaces.categoryItem({category: catData27}, output);
    }
  }
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Spaces.empty = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_no_items rw_spaces rw_corners">', soy.$$escapeHtml("There are no spaces at the moment."), '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/news.soy' */
// This file was automatically generated from news.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.News == 'undefined') { RW.Templates.News = {}; }


RW.Templates.News.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_news_item"><div class="rw_news_item_btn" onClick="RW.news.toggleNewsItem(this);return false;" href="#" title="', soy.$$escapeHtml("Show this news"), '" ><div class="rw_item_icon"><a class="userLogoLink"><img class="userLogo logo"></a></div><div class="rw_item_expand"><span class="rw_icon rw_iconfont_add"></div><div class="rw_item_content" style=""><a class="rw_caption rw_ellipsis"></a><div><span class="rw_date"></span><span class="rw_space_name rw_ellipsis"></span></div></div></div><div style="clear:both;"></div><div class="rw_news_item_content"><div class="rw_box_section"><span class="rw_small_text rw_author">', soy.$$escapeHtml("Written by:"), ' <a class="rw_user_link url fn confluence-userlink"></a></span><br/><div class="wiki-content"></div><div style="clear:both;"></div><a class="rw_button rw_right rw_read_more_popup rw_button_group_right rw_margin_top" title="', soy.$$escapeHtml("View in popup"), '"><span class="rw_open_popup rw_only_icon"></span></a><a class="rw_button rw_right rw_read_more_page rw_button_group_left rw_margin_top" title="', soy.$$escapeHtml("Read more"), '"><span class="rw_no_icon">', soy.$$escapeHtml("Read more"), '</span></a><a class="rw_comments_link rw_left rw_button rw_margin_top"><span class="rw_comment_gray"></span></a><div style="clear:both;"></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.News.itemSimple = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_news_item"><a class="rw_caption rw_ellipsis"></a><span class="rw_date"></span><span class="rw_space_name rw_ellipsis"></span><div class="wiki-content"></div><div class="rw_item_footer"><div class="rw_section"><div class="rw_read_more"><a class="rw_button rw_right rw_read_more_popup rw_button_group_right" title="', soy.$$escapeHtml("View in popup"), '"><span class="rw_open_popup rw_only_icon"></span></a><a class="rw_button rw_right rw_read_more_page rw_button_group_left" title="', soy.$$escapeHtml("Read more"), '"><span class="rw_no_icon">', soy.$$escapeHtml("Read more"), '</span></a></div><a class="url fn confluence-userlink rw_user_link"><img class="userLogo logo"><span></span></a></div></div><div style="clear:both;"></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.News.empty = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_no_items rw_news rw_corners">', soy.$$escapeHtml("No blog posts found."), '</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.News.popupButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="rw_news_in_popup rw_icon_button_24 rw_right"><span class="rw_icon_container_20 rw_open_popup_small"></span></a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/blogs.soy' */
// This file was automatically generated from blogs.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Blogs == 'undefined') { RW.Templates.Blogs = {}; }


RW.Templates.Blogs.createBlogSpace = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_admin_section">');
  RWJS.Templates.Utils.inputRow({type: 'text', name: 'blog_space_title', label: soy.$$escapeHtml("Space name"), mandatory: true}, output);
  RWJS.Templates.Utils.inputRow({type: 'text', name: 'blog_space_key', label: soy.$$escapeHtml("Space key"), mandatory: true}, output);
  RWJS.Templates.Utils.inputRow({type: 'textarea', label: soy.$$escapeHtml("Description"), name: 'blog_space_description'}, output);
  RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'blog_space_allow_sharing', label: soy.$$escapeHtml("Allow sharing")}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.legacyBlogsComponent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.model.length > 0) {
    output.append('<div class="rw_admin_component"><div class="rw_section"></div><h3>', soy.$$escapeHtml("Unmigrated blogs"), '</h3><div class="rw_section">', "Unmigrated blogs refers to spaces marked as using \x3ca href\x3d\x22http://docs.refinedwiki.com/x/uQKCAg\x22 target\x3d\x22_blank\x22\x3eblog mode\x3c/a\x3e in RefinedTheme 4.x and prior. In RefinedTheme 5.0 you create blogs separate from spaces from a \x22Blog Space\x22-blueprint. Migrate and upgrade old spaces running blog mode to new Blog Space blueprints in this section. \x3cbr/\x3eBelow you\x27ll find the aspects to consider when migrating and a description of what each action does.");
    RW.Templates.Blogs.actionTable(null, output);
    RW.Templates.Blogs.lozengeTable(null, output);
    output.append('</div><div class="rw_section"><h4>', soy.$$escapeHtml("Spaces with legacy blog functionality"), '</h4><ul class="rw_items">');
    var blogList48 = opt_data.model;
    var blogListLen48 = blogList48.length;
    for (var blogIndex48 = 0; blogIndex48 < blogListLen48; blogIndex48++) {
      var blogData48 = blogList48[blogIndex48];
      RW.Templates.Blogs.legacyBlogItem({blog: blogData48}, output);
    }
    output.append('</ul></div></div>');
  }
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.actionTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="aui"><thead><tr><th id="rw_table_action">', soy.$$escapeHtml("Action"), '</th><th id="rw_table_desc">', soy.$$escapeHtml("Description"), '</th></tr></thead><tbody style="border: 1px solid #ccc;"><tr><td headers="rw_table_action">', soy.$$escapeHtml("Upgrade space to blog"), '</td><td headers="rw_table_desc">', soy.$$escapeHtml("Upgrading a space to a blog will convert it to a Blog Space. The space name, logo and description will be populated with values from the old blog. If the blog had a custom design this will be migrated as well. No pages will be removed, but navigation will be focused on blogs and be presented in the blog portal."), '</td></tr><tr><td headers="rw_table_action">', soy.$$escapeHtml("Migrate blog to separate space"), '</td><td headers="rw_table_desc">', soy.$$escapeHtml("This option will keep the space as is. A new Blog Space copy of the space will be created and all blog posts will be moved to this new space. If the blog had a custom design this will be migrated as well. The end result is two spaces; the old space containing the pages, and a new Blog Space containing the blog posts."), '</td></tr><tr><td headers="rw_table_action">', soy.$$escapeHtml("Ignore"), '</td><td headers="rw_table_desc">', soy.$$escapeHtml("Does no upgrade or migration but rather just removes the space from this list. This will result in the space being presented the same way it is right now (you can check the result by following the view space link in the list below)."), '</td></tr></tbody></table>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.lozengeTable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table class="aui"><thead><tr><th id="rw_table_reason">', soy.$$escapeHtml("Reason"), '</th><th id="rw_table_desc">', soy.$$escapeHtml("Description"), '</th><th id="rw_table_rec_action">', soy.$$escapeHtml("Recommended action"), '</th></tr></thead><tbody style="border: 1px solid #ccc;"><tr><td headers="rw_table_reason"><span class="aui-lozenge aui-lozenge-current" data-tooltip="', soy.$$escapeHtml("This blog was not published and thus not visible in the blog section. If there was a design work in progress you could upgrade the space to a blog and finish a new theme from there. If this space wasn\x27t meant to be used as a blog you could ignore it."), '">', soy.$$escapeHtml("Unpublished"), '</span></td><td headers="rw_table_desc">', soy.$$escapeHtml("This blog was not published and thus not visible in the blog section. If there was a design work in progress you could upgrade the space to a blog and finish a new theme from there. If this space wasn\x27t meant to be used as a blog you could ignore it."), '</td><td headers="rw_table_rec_action">', soy.$$escapeHtml("Ignore or Upgrade space to blog"), '</td></tr><tr><td headers="rw_table_reason"><span class="aui-lozenge aui-lozenge-complete" data-tooltip="', soy.$$escapeHtml("This space contains several pages. Pages will not be removed, but will not be visible for blogs. Recommended action: Migrate blog to separate space."), '">', soy.$$escapeHtml("Pages"), '</span></td><td headers="rw_table_desc">', soy.$$escapeHtml("This space contains several pages. Pages will not be removed, but will not be visible for blogs. Recommended action: Migrate blog to separate space."), '</td><td headers="rw_table_rec_action">', soy.$$escapeHtml("Migrate blog to separate space"), '</td></tr><tr><td headers="rw_table_reason"><span class="aui-lozenge aui-lozenge-moved" data-tooltip="', soy.$$escapeHtml("There were differences between the space and the blog representing the blog posts in the space. Usually the names are inconsistent. Upgrading the space to a blog will use the blog name for the space. If you want to keep them separate you should migrate the blog to a separate space."), '">', soy.$$escapeHtml("Diff"), '</span></td><td headers="rw_table_desc">', soy.$$escapeHtml("There were differences between the space and the blog representing the blog posts in the space. Usually the names are inconsistent. Upgrading the space to a blog will use the blog name for the space. If you want to keep them separate you should migrate the blog to a separate space."), '</td><td headers="rw_table_rec_action">', soy.$$escapeHtml("Upgrade space to blog or Migrate blog to separate space"), '</td></tr><tr><td headers="rw_table_reason"><span class="aui-lozenge aui-lozenge-default" data-tooltip="', soy.$$escapeHtml("This space is a personal space. Personal spaces cannot be directly upgraded to blogs. You can choose to migrate the blog posts to a separate blog space or ignore it and let the user create their own blog at a later time."), '">', soy.$$escapeHtml("Personal"), '</span></td><td headers="rw_table_desc">', soy.$$escapeHtml("This space is a personal space. Personal spaces cannot be directly upgraded to blogs. You can choose to migrate the blog posts to a separate blog space or ignore it and let the user create their own blog at a later time."), '</td><td headers="rw_table_rec_action">', soy.$$escapeHtml("Ignore or Migrate blog to separate space"), '</td></tr><tr><td headers="rw_table_reason"></td><td headers="rw_table_desc">', soy.$$escapeHtml("An entry without Reason-tag is most likely cleared to be upgraded directly to a blog."), '</td><td headers="rw_table_rec_action">', soy.$$escapeHtml("Upgrade space to blog"), '</td></tr></tbody></table>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.legacyBlogItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-name-key="', soy.$$escapeHtml(opt_data.blog.nameKey), '"><div class="rw_item_content"><div class="rw_actions rw_margin_left">', (! opt_data.blog.personal) ? '<button class="aui-button" data-action="upgrade">' + soy.$$escapeHtml("Upgrade space to blog") + '</button>' : '', '<button class="aui-button" data-action="separate">', soy.$$escapeHtml("Migrate blog to separate space"), '</button><button class="aui-button" data-action="ignore">', soy.$$escapeHtml("Ignore"), '</button></div><span>');
  RWJS.Templates.Icons.getIcon({icon: 'blog', cssClass: 'rw_left rw_margin_right_5px'}, output);
  output.append(soy.$$escapeHtml(opt_data.blog.name), '</span>', (opt_data.blog.unpublished) ? '<span class="aui-lozenge aui-lozenge-current" data-tooltip="' + soy.$$escapeHtml("This blog was not published and thus not visible in the blog section. If there was a design work in progress you could upgrade the space to a blog and finish a new theme from there. If this space wasn\x27t meant to be used as a blog you could ignore it.") + '">' + soy.$$escapeHtml("Unpublished") + '</span>' : '', (opt_data.blog.hasSeveralPages) ? '<span class="aui-lozenge aui-lozenge-complete" data-tooltip="' + soy.$$escapeHtml("This space contains several pages. Pages will not be removed, but will not be visible for blogs. Recommended action: Migrate blog to separate space.") + '">' + soy.$$escapeHtml("Pages") + '</span>' : '', (opt_data.blog.diffFromSpace) ? '<span class="aui-lozenge aui-lozenge-moved" data-tooltip="' + soy.$$escapeHtml("There were differences between the space and the blog representing the blog posts in the space. Usually the names are inconsistent. Upgrading the space to a blog will use the blog name for the space. If you want to keep them separate you should migrate the blog to a separate space.") + '">' + soy.$$escapeHtml("Diff") + '</span>' : '', (opt_data.blog.personal) ? '<span class="aui-lozenge aui-lozenge-default" data-tooltip="' + soy.$$escapeHtml("This space is a personal space. Personal spaces cannot be directly upgraded to blogs. You can choose to migrate the blog posts to a separate blog space or ignore it and let the user create their own blog at a later time.") + '">' + soy.$$escapeHtml("Personal") + '</span>' : '', '<span class="rw_small_text" style="display:block;">');
  RWJS.Templates.Icons.getIcon({icon: 'space', cssClass: 'rw_left rw_margin_right_5px'}, output);
  output.append(soy.$$escapeHtml(opt_data.blog.spaceName), ' (', soy.$$escapeHtml(opt_data.blog.nameKey), ') <a href="', soy.$$escapeHtml(contextPath), '/display/', soy.$$escapeHtml(opt_data.blog.nameKey), '" target="_blank">', soy.$$escapeHtml("View space"), '</a></span></div></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.blogComponent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="rw_blog_functionality_component" class="rw_admin_component" style="width:500px"><div class="rw_section rw_component_logo"><img height="120px" width="120px" src="', soy.$$escapeHtml(contextPath), '/download/resources/com.refinedwiki.confluence.plugins.theme.original/images/admin/icons/blogs_icon.png" /></div><h3>', soy.$$escapeHtml("Blog functionality"), '<div class="rw_help_button" data-title="', soy.$$escapeHtml("Blog functionality"), ' " data-text="', soy.$$escapeHtml("This is the summary of the Blog Portal-settings and all created blogs on this instance."), '"><span class="rw_icon rw_iconfont_info"></span></div></h3><div class="rw_section"><h4>', soy.$$escapeHtml("Blog Portal"), '</h4>');
  RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'blogEnabled', value: opt_data.settings.blogPortalEnabled, label: soy.$$escapeHtml("Enabled"), dialogHelpText: "If disabled the Blog Portal will be removed from the global menu and no Blog spaces will be displayed in this interface. Any blog currently placed in the Portal will be moved."}, output);
  var param197 = new soy.StringBuilder('<div class="rw_blog_theme">');
  if (opt_data.settings.portalThemeId > 0) {
    param197.append('<div class="rw_theme_card"><div class="rw_name"><button class="aui-button rw_edit_blog_theme_button" data-id="', soy.$$escapeHtml(opt_data.blogTheme.id), '">', soy.$$escapeHtml("Edit"), '</button><label style="margin-left: 10px;"><input class="rw_publish_button" type="checkbox" ', (opt_data.blogTheme.published) ? 'checked' : '', '>', soy.$$escapeHtml("Activated"), '</label></div>');
    if (opt_data.blogTheme.icon) {
      param197.append('<div class="rw_image" style="background-image: url(', soy.$$escapeHtml(opt_data.blogTheme.icon), ');"></div>');
    } else {
      param197.append('<div class="rw_image">');
      RWJS.Templates.Icons.getIcon({icon: 'photo', cssClass: 'rw_no_thumb'}, param197);
      param197.append('<span class="rw_small_text">', soy.$$escapeHtml("No thumbnail generated yet. Re-save Theme to generate one."), '</span></div>');
    }
    param197.append('</div><br/>');
  } else {
    param197.append('<button class="aui-button rw_edit_blog_theme_button" data-id="', soy.$$escapeHtml(opt_data.model.id), '">', soy.$$escapeHtml("Edit"), '</button>');
  }
  param197.append('</div>');
  RWJS.Templates.Utils.customRow({contents: param197.toString(), label: soy.$$escapeHtml("Default Blog Theme"), dialogHelpText: "Assign a Theme to the Blog Portal. All blogs that doesn\x27t have a custom theme will use the default Blog Portal theme."}, output);
  output.append('</div><div class="rw_section"><h4>', soy.$$escapeHtml("Spaces with blog functionality"), '</h4><ul class="rw_items">');
  var blogList240 = opt_data.model;
  var blogListLen240 = blogList240.length;
  for (var blogIndex240 = 0; blogIndex240 < blogListLen240; blogIndex240++) {
    var blogData240 = blogList240[blogIndex240];
    output.append('<li id="rw_blog_listing_', soy.$$escapeHtml(blogData240.nameKey), '"><div class="rw_item_content"><div class="rw_actions"><a class="aui-button rw_view_blog_button" href="', soy.$$escapeHtml("/confluence"), '/display/', soy.$$escapeHtml(blogData240.nameKey), '">', soy.$$escapeHtml("View"), '</a></div><span>', soy.$$escapeHtml(blogData240.name), '</span>', (blogData240.blogspace) ? '<span class="aui-lozenge aui-lozenge-current">' + soy.$$escapeHtml("Blog Space") + '</span>' : '', (blogData240.blogPortal) ? '<span class="aui-lozenge aui-lozenge-complete">' + soy.$$escapeHtml("Blog Portal") + '</span>' : '', (blogData240.category) ? '<span class="aui-lozenge aui-lozenge-success">' + soy.$$escapeHtml("Category") + ': ' + soy.$$escapeHtml(blogData240.category.name) + '</span>' : '', '</div></li>');
  }
  output.append('</ul></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.spaceBlogSettings = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h1>', soy.$$escapeHtml("Blog settings"), '</h1>');
  if (! opt_data.model.blogspace) {
    RW.Templates.infoBox({content: "You can turn this space into a blog space. A blog space is a space where only blog post are visible. It\x27s perfect for a more traditional blog experience. Please note that pages will not be removed, just hidden."}, output);
  }
  output.append('<div class="rw_admin_section">');
  RWJS.Templates.Utils.inputRow({type: 'button', name: 'blogspace', value: (opt_data.model.blogspace) ? soy.$$escapeHtml(opt_data.model.blogspace) : '', label: soy.$$escapeHtml("Blog Space"), value: (opt_data.model.blogspace) ? soy.$$escapeHtml("Deactivate") : soy.$$escapeHtml("Activate")}, output);
  if (opt_data.model.blogspace) {
    RWJS.Templates.Utils.inputRow({type: 'text', name: 'name', value: (opt_data.model.name) ? opt_data.model.name : '', label: soy.$$escapeHtml("Name"), mandatory: true}, output);
    RWJS.Templates.Utils.inputRow({type: 'textarea', value: (opt_data.model.description) ? opt_data.model.description : '', name: 'description', label: soy.$$escapeHtml("Description")}, output);
    RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'allowsharing', value: (opt_data.model.allowSharing) ? soy.$$escapeHtml(opt_data.model.allowSharing) : '', label: soy.$$escapeHtml("Allow sharing")}, output);
    if (opt_data.blogPortalEnabled) {
      RWJS.Templates.Utils.inputRow({type: 'checkbox', name: 'blogportal', value: (opt_data.model.blogPortal) ? soy.$$escapeHtml(opt_data.model.blogPortal) : '', label: soy.$$escapeHtml("Blog Portal")}, output);
      if (opt_data.model.blogPortal) {
        var param351 = new soy.StringBuilder('<div class="rw_blog_theme">');
        if (opt_data.blogTheme.id > 0) {
          param351.append('<div class="rw_theme_card"><div class="rw_name"><button class="aui-button rw_edit_blog_theme_button" data-id="', soy.$$escapeHtml(opt_data.model.id), '">', soy.$$escapeHtml("Edit"), '</button><label style="margin-left: 10px;"><input class="rw_publish_button" type="checkbox" ', (opt_data.blogTheme.published) ? 'checked' : '', '>', soy.$$escapeHtml("Activated"), '</label></div>');
          if (opt_data.blogTheme.icon) {
            param351.append('<div class="rw_image" style="background-image: url(', soy.$$escapeHtml(opt_data.blogTheme.icon), ');"></div>');
          } else {
            param351.append('<div class="rw_image">');
            RWJS.Templates.Icons.getIcon({icon: 'photo', cssClass: 'rw_no_thumb'}, param351);
            param351.append('<span class="rw_small_text">', soy.$$escapeHtml("No thumbnail generated yet. Re-save Theme to generate one."), '</span></div>');
          }
          param351.append('</div><br/>');
        } else {
          param351.append('<button class="aui-button rw_edit_blog_theme_button" data-id="', soy.$$escapeHtml(opt_data.model.id), '">', soy.$$escapeHtml("Edit"), '</button>');
        }
        param351.append('</div>');
        RWJS.Templates.Utils.customRow({contents: param351.toString(), label: soy.$$escapeHtml("Blog Theme")}, output);
      }
    }
    output.append('<div class="rw_right">');
    RWJS.Templates.Buttons.button({content: "Save", cssClass: 'aui-button-primary rw_save_button'}, output);
    output.append('</div>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.blogLinkList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul>');
  var blogList398 = opt_data.blogs.blogs;
  var blogListLen398 = blogList398.length;
  for (var blogIndex398 = 0; blogIndex398 < blogListLen398; blogIndex398++) {
    var blogData398 = blogList398[blogIndex398];
    output.append('<li><a data-space-key="', soy.$$escapeHtml(blogData398.nameKey), '" title="', soy.$$escapeHtml(AJS.format("Add a blog post to {0}",blogData398.name)), '"><span class="rw_item_icon rw_iconfont_blog"></span><span class="rw_item_content"><span class="rw_ellipsis">', soy.$$escapeHtml(blogData398.name), '</span></span></a></li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.blogListElement = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a title="', soy.$$escapeHtml(opt_data.tooltip), '"', (opt_data.url) ? ' href="' + soy.$$escapeHtml(opt_data.url) + '"' : '', '><span class="rw_item_content', (opt_data.isActive) ? ' rw_active' : '', ' rw_ellipsis">', (opt_data.description) ? '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3>' + soy.$$escapeHtml(opt_data.description) : (opt_data.inPopup) ? '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3>' : soy.$$escapeHtml(opt_data.title), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.blogpostList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_blogpost_listing"><div class="rw_margin_bottom rw_block"><span class="rw_logo_block"><a ', (! opt_data.blogPost.author.anonymous) ? 'class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.blogPost.author.username) + '" href="' + soy.$$escapeHtml("/confluence") + '/display/~' + soy.$$escapeHtml(opt_data.blogPost.author.username) + '"' : '', '><img src="', soy.$$escapeHtml(opt_data.blogPost.author.profilePic), '" width="48px" height="48px"/></a></span><span class="rw_has_logo_block rw_block"><div class="page-metadata not-personal">', soy.$$escapeHtml(opt_data.blogPost.date), '</div><a class="rw_blogpost_heading_link" href="', soy.$$escapeHtml(opt_data.blogPost.url), '">', opt_data.blogPost.title, '</a><a class="rw_blog_link"></a></span></div><div class="rw_item_content">', (opt_data.blogPost.bodyContent) ? opt_data.blogPost.bodyContent : '', '</div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Blogs.blogpostPopupButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<a class="rw_button_discrete rw_read_more_popup rw_right" title=""><span class="rw_icon_container_16 rw_icon_popup"></span></a>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/keyable.soy' */
// This file was automatically generated from keyable.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Keyable == 'undefined') { RW.Templates.Keyable = {}; }


RW.Templates.Keyable.container = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_keynavigation_container" style="display:none;"></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Keyable.row = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_keynavigation_row"></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Keyable.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_keynavigation_item"><span class="rw_item_icon"></span><br /><span class="rw_item_content">Navigate Menu</span><div class="rw_keynavigation_item_target" style="display:none"></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Keyable.emptyItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_keynavigation_empty_item"></div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/favourite.soy' */
// This file was automatically generated from favourite.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Favourite == 'undefined') { RW.Templates.Favourite = {}; }


RW.Templates.Favourite.spaces = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul class="rw_content_list"><div class="rw_group_result">', soy.$$escapeHtml(opt_data.title), '</div>');
  var itemList6 = opt_data.model.spaces;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    output.append('<li><a href="', soy.$$escapeHtml("/confluence"), '/display/', soy.$$escapeHtml(itemData6.key), '" data-space-key="', soy.$$escapeHtml(itemData6.key), '">', (itemData6.logo) ? '<span class="rw_item_icon"><img src="' + soy.$$escapeHtml(itemData6.logo) + '" class="rw_space_logo" /></span>' : (itemData6.icon) ? '<span class="rw_item_icon rw_icon rw_iconfont_' + soy.$$escapeHtml(itemData6.icon) + '"></span>' : '<span class="rw_item_icon rw_icon rw_iconfont_space"></span>', (opt_data.remoteUser) ? (itemData6.favourite) ? '<span title="' + soy.$$escapeHtml("Remove from your favourite list") + '" class="rw_item_favourite rw_item_icon_right rw_icon rw_iconfont_star rw_selected"></span>' : '<span title="' + soy.$$escapeHtml("Add to your favourite list") + '" class="rw_item_favourite rw_item_icon_right rw_icon rw_iconfont_star"></span>' : '', '<span class="rw_item_content rw_has_icon_right">', itemData6.name, '</span></a></li>');
  }
  output.append((opt_data.model.spaces.length == 0) ? '<div class="rw_small_text">' + soy.$$escapeHtml("No items found") + '</div>' : '', '</ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Favourite.pages = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="rw_content_list"><div class="rw_group_result">', soy.$$escapeHtml(opt_data.title), '</div>');
  var itemList51 = opt_data.model.pages;
  var itemListLen51 = itemList51.length;
  for (var itemIndex51 = 0; itemIndex51 < itemListLen51; itemIndex51++) {
    var itemData51 = itemList51[itemIndex51];
    output.append('<li><a href="', soy.$$escapeHtml(itemData51.url), '" data-url="', soy.$$escapeHtml(itemData51.url), '" data-page-id="', soy.$$escapeHtml(itemData51.id), '">', (opt_data.versionChecker.comparedTo57 < 0) ? '<span class="rw_item_icon rw_icon rw_iconfont_text"></span>' : (itemData51.type == 'blogpost') ? '<span class="rw_item_icon"><span class="aui-icon aui-icon-small aui-iconfont-page-blogpost"></span></span>' : '<span class="rw_item_icon"><span class="aui-icon aui-icon-small aui-iconfont-page-default"></span></span>', (opt_data.remoteUser) ? (itemData51.favourite) ? '<span title="' + soy.$$escapeHtml("Remove from your favourite list") + '" class="rw_item_favourite rw_item_icon_right rw_icon rw_iconfont_star rw_selected"></span>' : '<span title="' + soy.$$escapeHtml("Add to your favourite list") + '" class="rw_item_favourite rw_item_icon_right rw_icon rw_iconfont_star"></span>' : '', '<span class="rw_item_content rw_has_icon_right">', itemData51.name, (itemData51.spaceName) ? '<span class="rw_small_text"> (' + itemData51.spaceName + ')</span>' : '', '</span></a></li>');
  }
  output.append((opt_data.model.pages.length == 0) ? '<div class="rw_small_text">' + soy.$$escapeHtml("No items found") + '</div>' : '', '</ul>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/velocity-templates.soy' */
// This file was automatically generated from velocity-templates.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Velocity == 'undefined') { RW.Templates.Velocity = {}; }


RW.Templates.Velocity.pageChildrenListContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<ul class="rw_pagetree_list" ></ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.pageItemContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li><div class="rw_icon_content"><div class="rw_item_icon"><span></span></div><div class="rw_item_content"><a></a></div></div></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.viewerTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="rw_viewer" class="rw_viewer_wrapper" style="display:none;"><div class="rw_viewer_container"><a class="rw_viewer_close" >', soy.$$escapeHtml("Done"), '</a><div style="clear:both;"></div><div class="rw_viewer_content"><div style="clear:both;"></div><div class="rw_viewer_loader"><div class="rw_viewer_loader_image"></div></div><div class="rw_viewer_data"></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.blogCalendarItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li><a><span></span></a></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.blogCalendarSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="rw_corners"></ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.blogCalendarLoader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_loader"><span class="rw_loader_circle_16_gray"></span></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.blogpostNavButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="rw_button"><span></span></a>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.bufferItemTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<a class="aui-button rw_buffer_item"><span></span></a>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.editorSuggestionPopupTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_editor_suggestion_popup"></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.editorSuggestionDocTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_editor_suggestion_doc" id="rw_editor_suggestion_doc_containter"><div class="rw_input_help"><span>', soy.$$escapeHtml("No images found."), '</span><div class="rw_input_help_arrow"></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.editorSuggestionSelectionTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<select size=5></select>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.editorSuggestionSelectionOptionTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<option></option>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.editorSuggestionDocumentationTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_editor_suggestion_documentation"></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.designImageTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div onclick="" class="rw_image_top"><img src="" style="max-height:120px; max-width:200px;"></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.spaceNewsContainerTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_page_left_section rw_space_news rw_corners"><div id="rw_space_news_show" class="rw_item_header" onClick="RW.spacenews.showSpaceNews(this)" title="', soy.$$escapeHtml("Show news"), '" ', (! opt_data.isHomePage && opt_data.collapsed != false || opt_data.collapsed == true) ? ' style="display:block" ' : '', ' ><span class="rw_icon rw_iconfont_collapsed"></span><span class="rw_caption rw_ellipsis">', (opt_data.title) ? opt_data.title : soy.$$escapeHtml("Space news"), '</span></div><div id="rw_space_news_hide" class="rw_item_header" onClick="RW.spacenews.hideSpaceNews(this)" title="', soy.$$escapeHtml("Hide news"), '" ', (opt_data.isHomePage && opt_data.collapsed != true || opt_data.collapsed == false) ? ' style="display:block" ' : '', '><span class="rw_icon rw_iconfont_expanded"></span><span class="rw_caption rw_ellipsis">', (opt_data.title) ? opt_data.title : soy.$$escapeHtml("Space news"), '</span></div><div id="rw_space_news_container" ', (opt_data.isHomePage && opt_data.collapsed != true || opt_data.collapsed == false) ? ' style="display:block" ' : '', '><ul></ul></div><div style="clear:both"></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Velocity.spaceNewsItemTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li><a><span></span><span class="rw_date"></span></a></li>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/page.soy' */
// This file was automatically generated from page.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Page == 'undefined') { RW.Templates.Page = {}; }


RW.Templates.Page.breadcrumbs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.data.categories) {
    var itemList5 = opt_data.data.categories;
    var itemListLen5 = itemList5.length;
    for (var itemIndex5 = 0; itemIndex5 < itemListLen5; itemIndex5++) {
      var itemData5 = itemList5[itemIndex5];
      output.append('<a href="', soy.$$escapeHtml(itemData5.link.url), '">', soy.$$escapeHtml(itemData5.name), '</a>');
    }
  }
  output.append((opt_data.data.space) ? '<a href="' + soy.$$escapeHtml(contextPath) + '/display/' + soy.$$escapeHtml(opt_data.data.space.key) + '">' + soy.$$escapeHtml(opt_data.data.space.name) + '</a>' : '');
  if (opt_data.data.pages) {
    var itemList23 = opt_data.data.pages;
    var itemListLen23 = itemList23.length;
    for (var itemIndex23 = 0; itemIndex23 < itemListLen23; itemIndex23++) {
      var itemData23 = itemList23[itemIndex23];
      output.append((itemIndex23 == itemListLen23 - 1) ? '<span>' + soy.$$escapeHtml(itemData23.name) + '</span>' : '<a href="' + soy.$$escapeHtml(itemData23.url) + '">' + soy.$$escapeHtml(itemData23.name) + '</a>');
    }
  }
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/calendar.soy' */
// This file was automatically generated from calendar.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.Calendar == 'undefined') { RW.Templates.Calendar = {}; }


RW.Templates.Calendar.dateEventHolder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li class="event-group"><div class="group-details-container"><div class="group-details"><div class="group-headline"><span class="other-days">');
  RW.Templates.Calendar.getDayNames({index: opt_data.date, i18nMessages: opt_data.i18nMessages}, output);
  output.append('</span><span class="today">', soy.$$escapeHtml("Today"), '</span></div><ul class="events" id=', soy.$$escapeHtml(opt_data.ulId), '></ul></div></div><div class="group-date"><div class="day">', soy.$$escapeHtml(opt_data.day), '</div><div class="month">');
  RW.Templates.Calendar.getMonthNamesShort({index: opt_data.month, i18nMessages: opt_data.i18nMessages}, output);
  output.append('</div></div><div class="event-group-clear"></div></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Calendar.module = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="dashboard-calendar"><div class="calendar-heading"><h2 class="upcoming-events-sub-heading">', soy.$$escapeHtml("Upcoming Events"), '</h2><div class="view-my-calendars"><a href="', soy.$$escapeHtml("/confluence"), '/calendar/mycalendar.action">', soy.$$escapeHtml("My Calendars"), '</a></div></div><div class="dashboard-upcoming-events"><div class="plugin-calendar-container dashboard"><div class="dashboard-calendar"><div class="events-container"><ul id="rw_calendar_dashboard" class="group-list"></div><a href="#" class="more-events hidden">', soy.$$escapeHtml("More"), '</a></div></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Calendar.event = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li id="', soy.$$escapeHtml(opt_data.eventId), '" data-event-id="', soy.$$escapeHtml(opt_data.calendarEvent.id), '" data-sub-calendar-name="', soy.$$escapeHtml(opt_data.subCalendar.name), '"><div class="event-details"><div class="event-subcalendar ', soy.$$escapeHtml(opt_data.subCalendar.color), '" title="', soy.$$escapeHtml(opt_data.subCalendar.name), '"></div><img class="event-icon" src="', soy.$$escapeHtml(opt_data.calendarEvent.iconUrl), '"><strong class="event-name">', soy.$$escapeHtml(opt_data.calendarEvent.title), '</strong><span class="event-subcalendar-name">', soy.$$escapeHtml(opt_data.subCalendar.name), '</span><div class="event-description">', (opt_data.calendarEvent.description) ? '<span class="rw_ellipsis ellipsis_text">' + soy.$$escapeHtml(opt_data.calendarEvent.description) + '</span>' : '', '</div></div></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.Calendar.getMonthNamesShort = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  var months__soy54 = [opt_data.i18nMessages['calendar3.month.short.january'], opt_data.i18nMessages['calendar3.month.short.february'], opt_data.i18nMessages['calendar3.month.short.march'], opt_data.i18nMessages['calendar3.month.short.april'], opt_data.i18nMessages['calendar3.month.short.may'], opt_data.i18nMessages['calendar3.month.short.june'], opt_data.i18nMessages['calendar3.month.short.july'], opt_data.i18nMessages['calendar3.month.short.august'], opt_data.i18nMessages['calendar3.month.short.september'], opt_data.i18nMessages['calendar3.month.short.october'], opt_data.i18nMessages['calendar3.month.short.november'], opt_data.i18nMessages['calendar3.month.short.december']];
  output.append(soy.$$escapeHtml(months__soy54[opt_data.index]));
  return opt_sb ? '' : output.toString();
};


RW.Templates.Calendar.getDayNames = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  var days__soy58 = [opt_data.i18nMessages['calendar3.day.long.sunday'], opt_data.i18nMessages['calendar3.day.long.monday'], opt_data.i18nMessages['calendar3.day.long.tuesday'], opt_data.i18nMessages['calendar3.day.long.wednesday'], opt_data.i18nMessages['calendar3.day.long.thursday'], opt_data.i18nMessages['calendar3.day.long.friday'], opt_data.i18nMessages['calendar3.day.long.saturday']];
  output.append(soy.$$escapeHtml(days__soy58[opt_data.index]));
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = '/originaltheme/templates/soy/mywork.soy' */
// This file was automatically generated from mywork.soy.
// Please don't edit this file by hand.

if (typeof RW == 'undefined') { var RW = {}; }
if (typeof RW.Templates == 'undefined') { RW.Templates = {}; }
if (typeof RW.Templates.MyWork == 'undefined') { RW.Templates.MyWork = {}; }


RW.Templates.MyWork.macro = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_mywork_header">');
  if (! opt_data.inPopup) {
    output.append('<div class="rw_macro_title"><div class="rw_icon rw_recently_worked_on"></div><h2>', (opt_data.title) ? soy.$$escapeHtml(opt_data.title) : soy.$$escapeHtml("My Work"), '</h2></div><div class="rw_right"><!-- Trigger --><button aria-owns="rw_mywork_dropdown" aria-haspopup="true" class="aui-button aui-style-default aui-dropdown2-trigger rw_mywork_dropdown_trigger">');
    if (opt_data.selected == 'favourites') {
      RW.Templates.MyWork.favouritesDDItem(null, output);
    } else if (opt_data.selected == 'visited') {
      RW.Templates.MyWork.visitedDDItem(null, output);
    } else {
      RW.Templates.MyWork.editedDDItem(null, output);
    }
    output.append('</button><!-- Dropdown --><div id="rw_mywork_dropdown" class="rw_mywork_dropdown aui-style-default aui-dropdown2"><ul><li class="rw_recently_edited"><a class="aui-icon-container">');
    RW.Templates.MyWork.editedDDItem(null, output);
    output.append('</a></li><li class="rw_recently_visited"><a class="aui-icon-container">');
    RW.Templates.MyWork.visitedDDItem(null, output);
    output.append('</a></li><li class="rw_favourites"><a class="aui-icon-container">');
    RW.Templates.MyWork.favouritesDDItem(null, output);
    output.append('</a></li></ul></div></div>');
  } else {
    output.append('<ul class="rw_horizontal_menu"><li data-action="edited" ', (opt_data.selected == 'edited' || ! opt_data.selected) ? 'class="rw_active"' : '', '><a>');
    RW.Templates.MyWork.editedDDItem(null, output);
    output.append('</a></li><li data-action="visited" ', (opt_data.selected == 'visited') ? 'class="rw_active"' : '', '><a>');
    RW.Templates.MyWork.visitedDDItem(null, output);
    output.append('</a></li><li data-action="favourites" ', (opt_data.selected == 'favourites') ? 'class="rw_active"' : '', '><a>');
    RW.Templates.MyWork.favouritesDDItem(null, output);
    output.append('</a></li></ul>');
  }
  output.append('</div><div class="rw_mywork_body"></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.MyWork.editedDDItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="rw_text">', soy.$$escapeHtml("Recently worked on"), '</span>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.MyWork.visitedDDItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="rw_text">', soy.$$escapeHtml("Recently visited"), '</span>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.MyWork.favouritesDDItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="rw_text">', soy.$$escapeHtml("Favourites"), '</span>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.MyWork.content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="rw_content_list" data-calendarvalue="', soy.$$escapeHtml(opt_data.calendar[0]), '"><div class="rw_group_result">', soy.$$escapeHtml(opt_data.calendar[1]), '</div>');
  RW.Templates.MyWork.contentList(opt_data, output);
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.MyWork.favouriteContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="rw_content_list"></ul>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.MyWork.favouritePagesAndSpaces = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_favourite_container"><div class="rw_favourite_pages"></div><div class="rw_favourite_spaces"></div></div>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.MyWork.contentList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.results && opt_data.results.length > 0) {
    var resultList76 = opt_data.results;
    var resultListLen76 = resultList76.length;
    for (var resultIndex76 = 0; resultIndex76 < resultListLen76; resultIndex76++) {
      var resultData76 = resultList76[resultIndex76];
      RW.Templates.MyWork.item({data: resultData76}, output);
    }
  }
  return opt_sb ? '' : output.toString();
};


RW.Templates.MyWork.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-id="', soy.$$escapeHtml(opt_data.data.id), '"><a href="', soy.$$escapeHtml("/confluence"), soy.$$escapeHtml(opt_data.data._links.webui), '"><span class="rw_item_icon"><span class="rw_icon_container_16 aui-icon aui-icon-small', (opt_data.data.type == 'page') ? ' aui-iconfont-page-default' : (opt_data.data.type == 'blogpost') ? ' aui-iconfont-page-blogpost' : '', '"></span></span>', (opt_data.data.metadata.currentuser && opt_data.data.metadata.currentuser.favourited && opt_data.data.metadata.currentuser.favourited.isFavourite) ? '<span class="rw_item_icon_right rw_item_favourite rw_icon rw_iconfont_star rw_selected" title="' + soy.$$escapeHtml("Delete this page from your favourites list") + '"></span>' : '<span class="rw_item_icon_right rw_item_favourite rw_icon rw_iconfont_star" title="' + soy.$$escapeHtml("Add this page from your favourites list") + '"></span>', '<span class="rw_item_content rw_has_icon_right">', soy.$$escapeHtml(opt_data.data.title), ' <span class="rw_small_text">(', soy.$$escapeHtml(opt_data.data.container.name), ')</span></span></a></li>');
  return opt_sb ? '' : output.toString();
};


RW.Templates.MyWork.empty = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_no_items rw_corners rw_my_work">', soy.$$escapeHtml("No items found"), '</div>');
  return opt_sb ? '' : output.toString();
};

} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/atlassian/highlight-actions-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(a){AJS.toInit(function(){if(a("#main-content").length>0){var f;var l;Confluence.HighlightAction.WORKING_AREA={MAINCONTENT_AND_COMMENT:function(n){l=l||a("#main-content, .comment-content");return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(l,n)},MAINCONTENT_ONLY:function(n){f=f||a("#main-content");return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(f,n)},COMMENT_ONLY:function(n){return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(a(".comment-content"),n)}};if(RW.versionChecker.comparedTo57>=0){var g=Confluence.HighlightAction.RangeHelper.computeSearchTextObject;Confluence.HighlightAction.RangeHelper.computeSearchTextObject=function(o,n){if(o.hasClass("rw_custom_section")||o.parent().hasClass("rw_custom_section")){return g(f,n)}else{return g(o,n)}}}}if(Confluence.HighlightAction){var i=Confluence.HighlightAction.getButtonHandler("com.atlassian.confluence.plugins.confluence-inline-comments:create-inline-comment");i.shouldDisplay=Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY}var h="#main-content";var j="com.atlassian.confluence.plugins.confluence-jira-content:create-JIRA-issue-summary";var c=function(n){return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(a(h),n)};if(Confluence.CreateJiraContent){if(Confluence.CreateJiraContent.InlineDialog){var k;var e;var d=function(n){if(k){k.remove()}k=Confluence.CreateJiraContent.InlineDialog.openCreateIssueDialog(n);k.show();Confluence.CreateJiraContent.displayDialog=k;Confluence.CreateJiraContent.Analytics.sendAnalyticsForDialogOpen()};var b=function(n){if(e){e.remove()}e=Confluence.CreateJiraContent.InlineDialog.openFeatureDiscoveryDialog(n,d);e.show()};var m=function(n){n.searchText=Confluence.HighlightAction.RangeHelper.computeSearchTextObject(a(h),n.range);if(Confluence.CreateJiraContent.FeatureDiscoveryDialog.shouldShowFeatureDiscovery()){b(n)}else{d(n)}};Confluence&&Confluence.HighlightAction&&Confluence.HighlightAction.registerButtonHandler(j,{onClick:m,shouldDisplay:c})}else{Confluence&&Confluence.HighlightAction&&Confluence.HighlightAction.registerButtonHandler(j,{onClick:function(o){var n=function(){o.searchText=Confluence.HighlightAction.RangeHelper.computeSearchTextObject(a(h),o.range);if(Confluence.CreateJiraContent.FeatureDiscovery.shouldShowFeatureDiscovery()){Confluence.CreateJiraContent.Dialogs.showFeatureDiscoveryDialog(o)}else{Confluence.CreateJiraContent.Dialogs.showCreateIssueDialog(o)}};if(RW.versionChecker.comparedTo59>=0){var p="wr!com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources";WRM.require(p).done(n)}else{n()}},shouldDisplay:c})}}})})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/atlassian/page-editor.js' */
if(typeof RW==="undefined"){var RW={}}(function(e,g,c,a){var d;AJS.toInit(function(){if(AJS.DarkFeatures.isEnabled("confluence.view.edit.transition")){var h=e('<div id="rw_editpage_shortcut" style="display: none"></div>');e("#rw_main").append(h);AJS.$("#rw_editpage_shortcut").bind("click",function(m){if(m.metaKey||m.shiftKey||m.ctrlKey||m.altKey||m.which===2||m.which===3){return}if(AJS.DarkFeatures.isEnabled("confluence.view.edit.transition")){var l=e("#main-content");var j=e("#header");var k=e("#main-header");var i=window.pageYOffset+j.outerHeight()+k.outerHeight();d=b(l,i,AJS.params.pageId);sessionStorage.viewPort=JSON.stringify(d)}return false});AJS.whenIType("e").click("#rw_editpage_shortcut")}});AJS.bind("rte-ready",function(){if(AJS.DarkFeatures.isEnabled("confluence.view.edit.transition")){if(sessionStorage.viewPort&&tinymce&&tinymce.activeEditor){d=JSON.parse(sessionStorage.viewPort);f(tinymce.activeEditor)}var i=function(){var l=require("tinymce");var k=l.activeEditor.getWin();var j=e(k.document).find("#tinymce");var m=b(j,k.pageYOffset,AJS.params.pageId);if(m){sessionStorage.viewPort=JSON.stringify(m)}};var h=function(){if(AJS.DarkFeatures.isEnabled("confluence.view.edit.transition")){i()}};Confluence.Editor.addCancelHandler(h);Confluence.Editor.addSaveHandler(h)}});function f(h){var i=function(j){return j.children().first().children().eq(d.blockIndex).find(".innerCell")};setTimeout(function(){if(!d){return}var j;var k=e(h.getBody());if(d.blockIndex!==-1){j=i(k).eq(d.columnIndex).children().eq(d.index)}else{j=k.children().eq(d.index)}h.getWin().scrollTo(0,j.offset().top+d.offset);e("#main").css("visibility","visible")})}function b(n,k,i){var o={pageId:i,blockIndex:-1,columnIndex:-1,index:-1,offset:0,hasBlock:function(){return this.blockIndex!==-1}};var p=false;var j=function(q,s){var r=q.offset();if(h(q)){o.index=s;o.offset=k-r.top;p=true}};var h=function(q){var r=q.offset();return r.top-8<=k&&r.top+q.height()>=k};var l=n.children().length===1&&n.children().first().hasClass("contentLayout2");if(l){n.children().first().children().each(function(q){if(o.hasBlock()){return}if(h(e(this))){o.blockIndex=q}});if(o.hasBlock()){var m=n.children().first().children().eq(o.blockIndex).find(".innerCell");m.each(function(q){if(o.columnIndex!==-1){return}var r=e(this).children().length;if(r>0){if(r<2){if(e(this).children().first().height()>25){o.columnIndex=q}}else{o.columnIndex=q}}});m.eq(o.columnIndex).children().each(function(q){if(p){return}j(e(this),q)})}}else{n.children().each(function(q){if(p){return}j(e(this),q)})}return p?o:null}})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/atlassian/dom.js' */
define("refinedtheme/confluence/fh/utils/dom",["jquery","ajs","exports"],function(d,g,r){var k,j,q,o,e;function b(s){if(b.done&&!s){return}var t="#main .aui-page-panel-outer-content";j=d(t).length!==0?d(t):d("#main");q=d("#header");o=d("#main-header");e=d(".rw_content");b.done=true}function p(){var s=g.Meta.get("content-type");if(s==="page"||s==="blogpost"){d(tinymce.activeEditor.getWin().document).find("body#tinymce").addClass("page-edit")}}function a(){b();o.css({width:e.outerWidth()-(parseInt(e.css("padding-left"))+parseInt(e.css("padding-right")))});if(d("#main-header-placeholder").length){d("#title-text").show();k.css({height:o.height()});d("#title-text").hide()}}function c(){b();var s=parseInt(o.css("top"))+o.outerHeight();if(isNaN(s)||s===c.lastValue){return}c.lastValue=s;g.trigger("sticky-table-headers.change.options",{fixedOffset:s,cacheHeaderHeight:true})}function m(u,s,t){if(t){m[t]=m[t]||{};if(s===m[t].lastValue){return}m[t].lastValue=s}u.css({transform:"translateY("+s+"px)","-webkit-transform":"translateY("+s+"px)","-ms-transform":"translateY("+s+"px)"})}function h(v,s,t){var u={};t.forEach(function(w){u[w]=v.css(w)});s.css(u)}var f={mt:"margin-top",mr:"margin-right",ml:"margin-left",mb:"margin-bottom",pt:"padding-top",pr:"padding-right",pl:"padding-left",pb:"padding-bottom",ff:"font-family",fsi:"font-size",fst:"font-style",fw:"font-weight",td:"text-decoration",ls:"letter-spacing",ta:"text-align",c:"color"};f.margin=[f.mt,f.mr,f.ml,f.mb];f.padding=[f.pt,f.pr,f.pl,f.pb];f.font=[f.ff,f.fsi,f.fst,f.fw];function n(){b();if(k){return k}k=d('<div id="main-header-placeholder"></div>');var u=d("#title-text"),t=u.find("a"),s=u.clone().removeAttr("id"),v=s.find("a");h(o,k,f.margin.concat(f.padding));k.css({height:o.outerHeight()});h(u,s,f.font.concat(f.td,f.ls,f.ta,f.pr,f.pb,f.pl,f.mr,f.mb,f.ml));s.css({paddingTop:parseInt(u.css("padding-top"))+Math.round(u.offset().top-o.offset().top)});h(t,v,f.font.concat(f.margin,f.padding,f.font,f.c,f.td,f.ls,f.ta));k.append(s);return k}function l(){k&&k.remove()}function i(u){u=typeof(u)==="string"?u:d(this).attr("href");if(!u){return}b();var t=q.outerHeight();var s=d(u.replace(/(!|\"|\$|%|&|'|\(|\)|\*|\+|,|\.|\/|\:|;|<|=|>|\?|@|\[|\\|\]|\^|`|\{|\||\}|~)/g,"\\$1"));if(s.length){window.scrollTo(0,s.offset().top-t);if(history&&"pushState" in history){history.pushState({},document.title,window.location.pathname+window.location.search+u);return false}}}r.forceInitialize=function(){b(true)};r.addClassToPage=p;r.adjustMainHeaderSize=a;r.updateTableStickyHeaderOption=c;r.translateVertical=m;r.createMainHeaderPlaceHolder=n;r.removeMainHeaderPlaceHolder=l;r.scrollIfAnchor=i});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/atlassian/page-view-handlers.js' */
define("refinedtheme/confluence/fh/handlers/page-view-handler",["refinedtheme/confluence/fh/utils/dom","jquery","ajs","exports"],function(a,z,t,H){var i,j,B,v,h,F,r,k,c,y,E,D=false,m=false,e=false,G=0,n=0,x=0,l=50,C=100,o="by-hover",q="by-scroll",g="by-other",b=g,A=false;var w;var p;var d;function f(L){if(f.done&&!L){return}i=z("#header");j=z("#main .aui-page-panel-outer-content");j.length===0&&(j=z("#main"));B=z("#main-header");v=z("#action-menu-link");h=a.createMainHeaderPlaceHolder();F=z(".ia-splitter-left .ia-fixed-sidebar");r=B.prop("style");k=j.prop("style");c=Math.round(i.offset().top);y=i.height();E=Math.round(B.offset().top)-y-(parseInt(j.css("padding-top"))+parseInt(B.css("margin-top")));w=z(".rw_content");p=z("#app-switcher");d=RW.versionChecker.comparedTo510;f.done=true}function I(){f(true);if(i&&i.offset){var L=z("#main-header-placeholder");if(!L.length){L=B}c=Math.round(i.offset().top);E=Math.round(L.offset().top)-y-(parseInt(j.css("padding-top"))+parseInt(L.css("margin-top")))}B.css({width:w.outerWidth()-(parseInt(w.css("padding-left"))+parseInt(w.css("padding-right")))})}var s=function(){f();var M=z(window).scrollTop();var O=M>c;if(O&&parseInt(F.css("top"))<y){F.css({top:y+"px"})}if(!D&&O){D=true;i.addClass("fixed-header");j.css({marginTop:y+"px"})}else{if(!O){i.removeClass("fixed-header");k.removeProperty("margin-top");D=false}}var S=M>E;if(!m&&(M>E+B.height())){m=true;B.find("#title-text").hide();B.addClass("rw_fixed_header");B.css({width:w.outerWidth()-(parseInt(w.css("padding-left"))+parseInt(w.css("padding-right")))});B.before(a.createMainHeaderPlaceHolder())}else{if(!S&&(M<=(E-B.height()/2))){["position","width","right","top","margin-top","padding-top","padding-bottom","padding-left","padding-right","z-index"].forEach(function(T){r.removeProperty(T)});B.removeClass("overlay-header");B.removeClass("rw_fixed_header");B.find("#title-text").show();m=false;e=false;a.removeMainHeaderPlaceHolder()}}var Q,P,N=B.outerHeight(),L=G-M,R=parseInt(B.css("top"))+L;if(M<=0){x=0;n=0;Q=y}else{if(m&&L>0){if(R>y){x=y;n=0;Q=y;P=C}else{x+=Math.abs(L);if(x>=l||M<=N){n-=Math.abs(L);Q=R;P=C}}if(M>N+l&&!e){B.addClass("overlay-header");e=true}b=q}else{if(m&&L<0){if(R<y-N){x=0;n=N;Q=y-N;P=0}else{n+=Math.abs(L);Q=R}}}}if(P!==undefined&&Q!==undefined){B.css({top:Q+"px",zIndex:P})}else{if(Q!==undefined){B.css({top:Q+"px"})}}if(A){a.translateVertical(v,n,v.attr("id"))}a.updateTableStickyHeaderOption();G=M};function J(){if(!m||n===0){return}n=0;B.addClass("overlay-header");B.css({top:y+"px",zIndex:C});if(A){a.translateVertical(v,n,v.attr("id"))}a.updateTableStickyHeaderOption()}function u(){f();J();b=o}function K(){f();J();t.bind("quick-edit.viewport.saved",function(){i.removeAttr("style");a.removeMainHeaderPlaceHolder()});z(window).off("scroll",s).off("resize.confluence-fixed-headers-responsive");t.trigger("analyticsEvent",{name:"view.edit.transition.edit.button.clicked",data:{method:b}})}H.forceInitialize=function(){f(true)};H.updateOffsets=function(){I()};H.onScrollHandler=s;H.onHoverActionMenuLinkHandler=u;H.onClickEditPageLinkHandler=K;H.isKeepDotDotDotButton=A;H.__getShowMainHeaderBy=function(){return b};H.__getFixedHeader=function(){return D};H.__getFixedMainHeader=function(){return m};H.__setFixedHeader=function(L){D=L};H.__setFixedMainHeader=function(L){m=L};H.__setMainHeaderOverlay=function(L){e=L};H.__setScrollPosition=function(L){G=L};H.__setMovingDistance=function(L){n=L}});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/atlassian/confluence-fixed-headers.js' */
require(["refinedtheme/confluence/fh/utils/dom","refinedtheme/confluence/fh/handlers/page-view-handler","ajs","jquery"],function(d,b,a,c){a.toInit(function(){if(!a.DarkFeatures.isEnabled("confluence.view.edit.transition")){return}var o=a.Meta.get("content-type");if(!o||o==="blogpost"){return}if(c("#main-content").find("style").length>0){return}if(c("body").hasClass("theme-documentation")){return}var e=c("#header"),l=c("#main-header"),i=c("#main"),g=c("#content"),k=c("#editPageLink"),n=c("#action-menu-link");var m=c(".app-switcher-trigger");if(m.attr("href")==="#app-switcher"){m.attr("href","#")}var p=["inline-dialog-notifications-miniview","inline-dialog-confluence-watch","inline-dialog-shareContentPopup","inline-dialog-ap-inline-dialog-content-confstats-connect-dev__confstats-live-watcher","inline-dialog-jira-metadata-dialog"];var j=function(){var r=c('.aui-dropdown2[aria-hidden="false"]');r.length&&c('.aui-dropdown2-trigger[aria-owns="'+r.attr("id")+'"]').trigger("aui-button-invoke");var q=c(".aui-inline-dialog:visible");if(q.length){q=q.filter(function(){var u=c(this);var t=u.attr("id");return u.hasClass("non-persistence-dialog")||p.indexOf(t)!==-1});q.css({display:"none"});var s=".aui-button.active, .aui-nav-imagelink.active";e.find(s).removeClass("active");l.find(s).removeClass("active");document.activeElement.blur()}};var h=new MutationObserver(function(q){d.adjustMainHeaderSize()});if(i.length>0){h.observe(i[0],{attributes:true,attributeFilter:["style"]})}if(c("#rw_splitter").length>0){h.observe(c("#rw_splitter")[0],{attributes:true,attributeFilter:["style"]})}a.bind("rw-page:fullscreen-toggle",function(s,r,q){b.updateOffsets()});var f=new MutationObserver(function(q){g.css("padding-right")==="0px"&&g.css({paddingRight:"28px"})});if(g.length>0){f.observe(g[0],{attributes:true,attributeFilter:["style"]})}c(window).off("scroll").off("resize.confluence-fixed-headers-responsive");c(window).on("resize.confluence-fixed-headers-responsive",a.debounce(d.adjustMainHeaderSize,100)).on("scroll",b.onScrollHandler).scroll(a.debounceImmediate(j,250));if(b.isKeepDotDotDotButton){i.addClass("floating-action-menu");n.on("hover",b.onHoverActionMenuLinkHandler)}k.click(function(){f&&f.disconnect();b.onClickEditPageLinkHandler();a.$("#rw_editpage_shortcut").click()});setTimeout(function(){d.scrollIfAnchor(window.location.hash)});c("body").on("click",'a[href^="#"]',d.scrollIfAnchor)})});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/atlassian/share-dialog-handler.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,d,b,a){AJS.toInit(function(){var f;var h=20;var i=0;c(window).resize(function(){f=undefined});var k=new MutationObserver(function(m){i++;if(i>h){k.disconnect();return}var l=c("#inline-dialog-shareContentPopup");var u=c(".aui-inline-dialog-contents",l);if(!u.length){u=c(".contents",l)}var r=c("#arrow-shareContentPopup");if(f){k.disconnect();l.css("right",f.right);l.css("left",f.left);l.css("top",f.top);r.css("left",f.arrow);k.observe(l[0],{attributes:true,attributeFilter:["style"]})}var q=c("body").width();var s=u[0].getBoundingClientRect();var p=10;var t=s.left+s.width+p-q;if(t>0){k.disconnect();l.css("right","10px");l.css("left","auto");k.observe(l[0],{attributes:true,attributeFilter:["style"]});try{var o=Number(r.css("left").replace(/[^-\d\.]/g,""));r.css("left",o+t);f=a.extend(f?f:{},{arrow:r.css("left")})}catch(n){}}f=a.extend(f?f:{},{right:l.css("right"),left:l.css("left"),top:l.css("top")})});var j=function(p,m,o){var n=c("#inline-dialog-shareContentPopup");var l=c(".aui-inline-dialog-contents",n);if(!l.length){l=c(".contents",n)}if(o&&o.id==="shareContentPopup"&&l&&l.length&&MutationObserver){AJS.$("#inline-dialog-shareContentPopup .textarea, #inline-dialog-shareContentPopup .text").unbind("keypress",g).bind("keypress",g);k.disconnect();k.observe(n[0],{attributes:true,attributeFilter:["style"]})}};var e=function(n,l,m){if(m&&m.id==="shareContentPopup"){i=0;if(k&&k.disconnect){k.disconnect()}}};var g=function(l){i=0};AJS.$(document).unbind("hideLayer",e).bind("hideLayer",e);AJS.$(document).unbind("showLayer",j).bind("showLayer",j)})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/theme-js-init-min.js' */
if(RWJS===undefined){RWJS={}}(function(a){RWJS.initPubSub();function b(c){return !(/^(GET|HEAD|OPTIONS|TRACE)$/.test(c))}a.ajaxSetup({crossDomain:false,beforeSend:function(d,c){if(b(c.type)){d.setRequestHeader("X-Atlassian-Token","no-check")}}})})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/storage-min.js' */
if(typeof RW==="undefined"){var RW={}}RW.AUTOSELECT_CATEGORY_KEY="autoselectCategory";(function(a){console.log("RW: Init local storage");RW.storage=new RWJS.storage("rwot.")})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/cache/cache-storage-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(a){console.log("RW: Init cache storage");var b="cache.";function c(){this.getCacheValue=function(d){if(!RW.storage.supportStorage()){return}return RW.storage.getValue(b+d)};this.setCacheValue=function(d,e){if(!RW.storage.supportStorage()){return}RW.storage.setValue(b+d,e)};this.clearCacheKeys=function(){if(!RW.storage.supportStorage()){return}var f=RW.storage.getPrefix()+b;var e=RW.storage.getStorage();for(var d in e){if(d.slice(0,f.length)==f){RW.storage.removeValueWithExactKey(d)}}};this.clearCacheKeysStartingWith=function(g){if(!RW.storage.supportStorage()){return}var f=RW.storage.getPrefix()+b+g;var e=RW.storage.getStorage();for(var d in e){if(d.slice(0,f.length)==f){RW.storage.removeValueWithExactKey(d)}}};return this}RW.cacheStorage=new c()})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/cache/cache-manager-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(c){var a=AJS.contextPath()+"/rest/originaltheme/1.0/";var f="/login.action?logout=true";var b="cacheSettings";var e=false;var d={category:"category",footer:"footer",globalmenu:"topmenu",usercategory:"user-category",userdetails:"user"};if(typeof String.prototype.startsWith!="function"){String.prototype.startsWith=function(g){return this.slice(0,g.length)==g}}if(typeof String.prototype.endsWith!="function"){String.prototype.endsWith=function(g){return this.indexOf(g,this.length-g.length)!==-1}}if(typeof String.prototype.contains==="undefined"){String.prototype.contains=function(g){return this.indexOf(g)!=-1}}AJS.toInit(function(){if(RW.storage.supportStorage()){RW.cacheManager.init()}if(window.location.href!==undefined&&window.location.href.endsWith(f)){RW.cacheStorage.clearCacheKeys()}});RW.cacheManager=new function(){this.doPoll=function(){var k=RW.cacheSettings;if(k!=undefined&&k.params.docache){if(!e){RW.cacheManager.listenForRWRestCalls()}RW.cacheManager.clearOutdatedCache(k)}else{if(k!=undefined&&!k.params.docache&&e){RW.cacheManager.clearCache();c(document).unbind("ajaxSend",g);e=false}}var l=JSON.stringify(k);if(l!=undefined){RW.cacheStorage.setCacheValue(b,l)}};this.listenForRWRestCalls=function(){c(document).unbind("ajaxSend",g);c(document).ajaxSend(g)};this.clearCache=function(){RW.cacheStorage.clearCacheKeys()};this.clearOutdatedCache=function(l){var m=RW.cacheStorage.getCacheValue(b);if(m!==undefined){var n=JSON.parse(m)}if(n!=undefined&&n.params!=undefined){for(var k in n.params){if(n.params[k]&&l.params!=undefined&&l.params[k]){if(n.lastChange!=undefined&&l.lastChange!=undefined&&n.lastChange[k]<l.lastChange[k]){RW.cacheManager.clearKey(k)}}else{if(n.params[k]){RW.cacheManager.clearKey(k)}else{if(n.lastChange!=undefined&&l.lastChange!=undefined&&n.lastChange[k]<l.lastChange[k]){RW.cacheManager.clearKey(k)}}}}}};this.clearKey=function(k){var l=a+d[k];if(RW.remoteUser!=undefined){l=RW.remoteUser+"."+l}else{l="."+l}RW.cacheStorage.clearCacheKeysStartingWith(l)};function i(k,p,l){var n=RW.cacheStorage.getCacheValue(b);if(n!==undefined){var o=JSON.parse(n);if(RW.remoteUser!=undefined){k=RW.remoteUser+"."+k}else{k="."+k}if(RW.cacheStorage.getCacheValue(k)!=undefined){p.abort();var m=JSON.parse(RW.cacheStorage.getCacheValue(k));m.cacheAbort=true;l.success(m);return}}p.done(function(q){if(p.status==200){RW.cacheStorage.setCacheValue(k,JSON.stringify(q))}});return true}function h(k){return k.type!=undefined&&k.type=="GET"&&k.url!=undefined&&k.url.startsWith(a)}this.init=function(){if(RW.cacheSettings){var k=RW.cacheSettings;var l=JSON.stringify(k);RW.cacheManager.clearOutdatedCache(k);RW.cacheStorage.setCacheValue(b,l);j()}};function j(){var l=RW.cacheStorage.getCacheValue(b);if(l!==undefined){var k=JSON.parse(l)}if(k!=undefined&&k.params.docache){RW.cacheManager.listenForRWRestCalls()}else{if(k.params.docache==false){c(document).unbind("ajaxSend",g)}}RW.cacheManager.doPoll()}function g(n,q,m){e=true;if(h(m)){var l=m.url;l=l.replace(/[?&]{1}_=[0-9]*/,"");var k=l.substr(a.length);var o=RW.cacheStorage.getCacheValue(b);if(o!==undefined){var p=JSON.parse(o)}if(p!=undefined&&p.params!=undefined){if(p.params.category&&k.startsWith("category")&&!k.contains("/unique")){return i(l,q,m)}else{if(p.params.footer&&k.startsWith("footer")){return i(l,q,m)}else{if(p.params.globalmenu&&k.startsWith("topmenu")){return i(l,q,m)}else{if(p.params.usercategory&&k.startsWith("user-category")&&!k.contains("/admin-config")){return i(l,q,m)}else{if(p.params.userdetails&&k.startsWith("user")){return i(l,q,m)}}}}}}}}return this}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/category-public-methods.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RWA==="undefined"){var RWA={}}if(typeof RWA.Category==="undefined"){RWA.Category={}}(function(c,d,b,a){RWA.Category.hideUserCategory=function(){c("#rw_wrapper").find(".rw_user_category_dd").hide();var e=c("#rw_category_dropdown_wrapper");e.removeClass("rw_has_user_category");c("#rw_category_dropdown_users",e).hide()};RW.hideUserCategory=function(){console.info("RW.hideUserCategory is depricated. Use RWA.Category.hideUserCategory() instead.");RWA.Category.hideUserCategory()};RWA.Category.hideInlineUserCategoryDialogs=function(){c("#rw_wrapper").find(".rw_user_category_dd").hide()};RWA.Category.hideCategory=function(){if(RW.inCategoryDropDown){RWA.Category.hideInlineUserCategoryDialogs();var e=RWJS.hideCategory();RW.inCategoryDropDown=false;RW.quitKeyable();if(e.charAt(0)!=="#"){e="#"+e}var f=RWJS.findCategory(RW._getCategories(),e.substr("#rw_category_key_".length));if(f&&f.toJSON){f=f.toJSON()}AJS.trigger("rw-categories:category-dropdown-closed",[c(e),f]);return e}};RW.hideCategory=function(){console.info("RW.hideCategory is depricated. Use RWA.Category.hideCategory() instead.");RWA.Category.hideCategory()};RWA.Category.showCategory=function(e,h,i){if(RW.inTopMenu&&RW.hideTopMenu){RW.hideTopMenu()}RW.inCategoryDropDown=false;var g=RWJS.findCategory(RW._getCategories(),e);if(g){try{while(g.get("parentKey")!==undefined){g=RWJS.findCategory(RW._getCategories(),g.get("parentKey"))}e=g.get("nameKey");RWJS.showCategory(e,h,i);return true}catch(f){return false}}return false};RW.showCategory=function(e,f,g){console.info("RW.showCategory is depricated. Use RWA.Category.showCategory() instead.");RWA.Category.showCategory(e,f,g)};RWA.Category.toggleSubCategory=function(h){var e;if(h instanceof jQuery){e=h}else{if(h.indexOf("rw_sub_category_key_")!=-1){}else{h="#rw_sub_category_key_"+h}if(h.charAt(0)!=="#"){h="#"+h}e=c(h)}if(e.length>0){var f;if(RW._getCategories){var g=RW._getCategories();if(g){f=RWJS.findCategory(g,h.substr("#rw_sub_category_key_".length));f=f.toJSON()}}RWJS.toggleSubCategory(e);if(e.hasClass("rw_dd_category_collapsed")){AJS.trigger("rw-categories:category-closed",[e,f])}else{if(e.hasClass("rw_dd_category_expanded")){AJS.trigger("rw-categories:category-opened",[e,f])}}RWJS.PubSub.trigger("category:inject-users",view,view.model)}};RW.toggleSubCategory=RW.toggleCategory=function(e){console.info("RW.toggleSubCategory and RW.toggleCategory are depricated. Use RWA.Category.toggleSubCategory() instead.");RWA.Category.toggleSubCategory(e)};RWA.Category.getActiveCategoryKey=function(){return RW.activeCategoryKey};RW.getActiveCategoryKey=function(){console.info("RW.getActiveCategoryKey is depricated. Use RWA.Category.getActiveCategoryKey() instead.")}})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/pages/page-public-methods.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RWA==="undefined"){var RWA={}}if(typeof RWA.Page==="undefined"){RWA.Page={}}(function(c,d,b,a){RWA.Page.isFullscreen=function(){return RW.storage.getValueAsBoolean("in-fullscreen")};RWA.Page.openFullscreen=function(){RW.openFullscreen()};RWA.Page.closeFullscreen=function(){RW.closeFullscreen()}})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/sidebar/sidebar-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(a){AJS.toInit(function(){RW.leftColumnHidden=false;var f=false;var j=false;var z=0;var x;var m=a("#main");var y=a("#rw_left_column",m);var e=a("#rw_main_column",m);var n=a("#rw_show_left_column",m);var w=a("#rw_hide_left_column",m);var B=a("#rw_splitter",m);var o=a(window);var A=a(document);var c=150;var b=48;var t=300;var C=250;var v=-17;var u="leftcolumn.width";var i="leftcolumn.state";var k="collapsed";var h="expanded";RW.hideLeftColumn=function(){if(!j){s();RW.storage.setValue(i,k)}};RW.showLeftColumn=function(){if(!j){var D=RW.storage.getValue(u);if(D===undefined){D=Math.round(z*0.23)}p(D);RW.storage.setValue(i,h);RW.storage.setValue(u,D)}};RW.toggleLeftColumn=function(){if(RW.leftColumnHidden){RW.showLeftColumn()}else{RW.hideLeftColumn()}};function d(E,D){if(!a("#rw_main_column").hasClass("rw_has_left_column")){return}if(E<b){E=b}else{if(E>z-t){E=z-t}}x=E;if(E>c){RW.leftColumnHidden=false;y.removeClass("rw_collapsed").css({position:"static"});if(f){a("#rw_sidebar .acs-side-bar").removeClass("collapsed")}w.show();n.hide()}else{RW.leftColumnHidden=true;y.addClass("rw_collapsed");if(f){a("#rw_sidebar .acs-side-bar").addClass("collapsed");setTimeout(function(){a("#rw_sidebar .acs-side-bar").addClass("collapsed")},100)}w.hide();n.show()}y.width(E);if(D!=undefined&&D===true){if(B!=undefined){B.css("left",y.outerWidth()+v)}}}function s(){RW.leftColumnHidden=true;d(48,true);B.attr("data-tooltip","Expand left column")}function p(D){RW.leftColumnHidden=false;d(D,true);B.attr("data-tooltip","Collapse left column")}function l(){if(RW.leftColumnHidden){var D=e.offset().top,E=o.scrollTop(),F=o.scrollLeft();if(E<0){return}if(E>(A.height()-o.height())){return}if(E>D){y.css({position:"fixed"});e.css({"padding-left":y.outerWidth()})}else{y.css({position:"static"});e.css({"padding-left":0})}}}function g(){z=m.width();if(x!=undefined){if(x>z-t){d(x,true)}}}if(y.length>0){z=m.width();w.click(RW.hideLeftColumn);n.click(RW.showLeftColumn);if(a("#rw_sidebar").length>0){f=true;if(RW.storage.getValue(i)!=k){a("#rw_sidebar .acs-side-bar").removeClass("collapsed");setTimeout(function(){a("#rw_sidebar .acs-side-bar").removeClass("collapsed")},100)}}if(y.hasClass("rw_collapsed_locked")){j=true;s();if(f){a("#rw_sidebar .acs-side-bar").addClass("collapsed");setTimeout(function(){a("#rw_sidebar .acs-side-bar").addClass("collapsed")},100)}}if(B.length>0){var r=false;console.log("RW: Initiate splitter functionality");if(RW.storage.getValue(i)!=k){if(RW.storage.getValue(i)!==undefined){var q=RW.storage.getValue(u);if(q===undefined){q=Math.round(z*0.23)}d(q,true)}else{d(C,true)}}B.draggable({containment:"parent",axis:"x",start:function(D,E){B.attr("data-tooltip","");RWJS.removeTooltip();RWJS.closeInlineDialog();r=true},drag:function(){d(parseInt(a(this).css("left"),10)-v)},stop:function(E,F){if((parseInt(a(this).css("left"),10)-v)<=c){d(48,true);RW.storage.setValue(u,48);RW.storage.setValue(i,k);B.attr("data-tooltip","Expand left column")}else{RW.leftColumnHidden=false;var D=parseInt(y.outerWidth(),10);a(this).css("left",D+v);RW.storage.setValue(u,D);RW.storage.setValue(i,h);B.attr("data-tooltip","Collapse left column")}setTimeout(function(){r=false},300)}}).click(function(){if(!r){RW.toggleLeftColumn()}}).css({left:(parseInt(y.outerWidth(),10)+v),height:e.parent().height()});a("#rw_splitter_handle",B).css("top",(B.height()/2)-10);if(RW.storage.getValue(i)==k){B.attr("data-tooltip","Expand left column")}else{B.attr("data-tooltip","Collapse left column")}a("#rw_splitter_handle",B).removeClass("rw_hidden");RWJS.applyTooltip("#main #rw_splitter")}if(RW.storage.getValue(i)==k){s()}RWJS.applyTooltip(".rw_sidebar_icon");o.scroll(l);o.resize(l,g);o.on("touchend",l)}})})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/sidebar/sidebar-flyout-min.js' */
(function(a){if(RW.sidebar==undefined){RW.sidebar={}}RW.sidebar.createFlyout=function(b,d,f,e){var g=b.attr("data-tooltip");if(e===undefined){e=new RWJS.InlineDialog({$button:b,id:d,width:400,persistsInDom:"true",arrowPosition:"h",cssClass:"rw_space_flyout"})}var c=false;b.click(function(){b.attr("data-tooltip","");if(!c){e.open(f.getContent());c=true;var h=e.getDomRepresentation();h.on("close",function(){b.attr("data-tooltip",g)})}else{e.toggle()}});a(window).scroll(function(){e.close()});return e}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/sidebar/sidebar-quicklinks-min.js' */
(function(a){if(RW.sidebar==undefined){RW.sidebar={}}RW.sidebar.quickLinksObject=function(o,i,d){var k=a('<ul class="rw_items"></ul>');var r=a(RW.Templates.iconContentItem());var c=k.clone();var p;var h;var g;var l=a("<h5>"+"Space shortcuts"+"</h5>");var s=a("#rw_sidebar_icon_quicklinks");var n=a(RWJS.Templates.Utils.loader({size:"medium"})).clone();var m=contextPath+"/rest/ia/1.0/link/";var t=false;var b=false;o.bind("loaded",function(v,u){if(!b){b=true;if(u>0||d){o.show();o.prepend(l);o.append(n.hide());o.append(c.addClass("rw_quick_links").attr("id","rw_quick_links"));if(d){p=a('<a class="rw_configure_button rw_button_discrete"><span class="rw_icon rw_iconfont_edit"></span></a>');o.prepend(p);p.click(function(){e()})}}}});function q(v){var u=r.clone();u.addClass("acs-nav-item "+v.styleClass);a(".rw_item_icon",u).addClass("icon");a(".rw_item_content",u).html(RWJS.htmlEncode(v.title)).addClass("rw_has_icon");u.attr("data-id",v.id);if(t){var w=a('<span class="rw_delete" data-tooltip="'+"Remove link"+'"></span>');a("a",u).before('<span class="rw_move"></span>');a("a",u).before(w);w.click(function(){j.deleteLink(a(this).parent().attr("data-id"));a(this).attr("data-tooltip","");RWJS.removeTooltip()})}else{a("a",u).attr("href",v.url)}return u}function e(){var u=new a.Deferred();if(!AJS.Rte||!AJS.Rte.BookmarkManager){c.hide();n.show();AJS.Confluence.EditorLoader.load(function(){u.resolve()},function(){u.reject()})}else{u.resolve()}u.then(function(){c.show();n.hide();p.addClass("rw_hidden");if(!h){h=a('<button class="rw_done_button aui-button aui-button-primary ">'+"Done"+"</button>");o.append(h);h.click(function(){f()})}else{h.show()}if(!g){g=a('<button class="rw_add_button aui-button">'+"Add link"+"</button>");o.append(g);g.click(function(){RW.sidebar.linkAdapter.hijackLinkBrowser();Confluence.Editor.LinkBrowser.open();a("#recentlyviewed-panel-id").click()})}else{g.show()}c.addClass("rw_configure");t=true;j.refreshLinks()})}function f(){p.removeClass("rw_hidden");g.hide();h.hide();c.removeClass("rw_configure");t=false;j.refreshLinks()}this.getLinks=function(){n.show();a.ajax({type:"GET",url:m+"quick?spaceKey="+i,dataType:"json",success:function(u){n.hide();if(u.length>0){a.each(u,function(){c.prepend(q(this))});s.removeClass("rw_hidden")}else{if(d){if(t){c.append('<span class="rw_help">'+"Click \"Add link\" to add links to the sidebar."+"</span>")}else{o.append('<span class="rw_help">'+AJS.format("Here you can add shortcut links to the most important content for your team or project. \u003ca href=\"{0}\" class=\"{1}\"\u003eConfigure sidebar\u003c/a\u003e.","","rw_configure_link")+"</span>");a(".rw_configure_link",o).click(function(v){e();v.preventDefault()})}}s.addClass("rw_hidden")}o.trigger("loaded",[u.length])},error:function(u){}}).done(function(){if(t){var v={},u;c.sortable({update:function(w,x){u=x.item.next();if(!u.length){v.position="first"}else{v.after=m+u.attr("data-id")}v.spaceKey=i;j.moveLink(x.item.attr("data-id"),v)}}).disableSelection();RWJS.applyTooltip("#rw_quick_links .rw_delete")}})};this.addLink=function(u){a.ajax({type:"POST",url:m,data:AJS.$.toJSON(u),dataType:"json",contentType:"application/json",success:function(v){j.refreshLinks()}})};this.deleteLink=function(v){var u={};u.spaceKey=i;a.ajax({type:"DELETE",url:m+v+"?spaceKey="+i,dataType:"json",contentType:"application/json",success:function(w){j.refreshLinks()}})};this.refreshLinks=function(){c.html("");a(".rw_help",o).remove();j.getLinks()};this.moveLink=function(v,u){a.ajax({type:"POST",url:m+v+"/move",dataType:"json",contentType:"application/json",data:JSON.stringify(u),complete:function(){},success:function(w){},error:function(w){}})};if(d){RW.sidebar.quickLinks=this}var j=this;return this};RW.sidebar.linkAdapter={setLink:function(d){var c=AJS.Meta.get("context-path");var e=Confluence.unescapeEntities(d.getHtml());var b={spaceKey:AJS.Meta.get("space-key"),customTitle:e==d.getDefaultAlias()?"":e,url:d.attrs.href};if(d.attrs["data-linked-resource-type"]&&d.attrs["data-linked-resource-type"]!="page"){b.resourceId=d.attrs["data-linked-resource-id"];b.resourceType=d.attrs["data-linked-resource-type"]}else{b.pageId=d.attrs["data-linked-resource-id"]}RW.sidebar.quickLinks.addLink(b)},getLink:function(){return Confluence.Link.fromData({attrs:{},body:{isEditable:true,isImage:false,html:"",imgName:"",text:""}})},hijackedLinkBrowser:false,hijackLinkBrowser:function(){var b=RW.sidebar.linkAdapter;if(!b.hijackedLinkBrowser){b.storeBookmark=AJS.Rte.BookmarkManager.storeBookmark;b.restoreBookmark=AJS.Rte.BookmarkManager.restoreBookmark;AJS.Rte.BookmarkManager.storeBookmark=a.noop;AJS.Rte.BookmarkManager.restoreBookmark=a.noop;b.oldLinkAdapter=Confluence.Editor.LinkAdapter;Confluence.Editor.LinkAdapter=b;b.$oldTabItems=a("#link-browser-tab-items div");b.$oldTabItems.each(function(){var c=a(this).text();if(c!="search"&&c!="recentlyviewed"&&c!="weblink"){a(this).remove()}});b.hijackedLinkBrowser=true}},releaseLinkBrowser:function(){var b=RW.sidebar.linkAdapter;if(b.hijackedLinkBrowser){AJS.Rte.BookmarkManager.storeBookmark=b.storeBookmark;AJS.Rte.BookmarkManager.restoreBookmark=b.restoreBookmark;a("#link-browser-tab-items").empty().append(b.$oldTabItems);Confluence.Editor.LinkAdapter=b.oldLinkAdapter;b.hijackedLinkBrowser=false}}};AJS.bind("closed.link-browser",function(){if(RW.sidebar.linkAdapter.hijackedLinkBrowser){RW.sidebar.linkAdapter.releaseLinkBrowser()}});AJS.bind("updated.link-browser-recently-viewed",function(){var c=AJS.Meta.get("page-title"),b=AJS.Meta.get("space-name");if(c&&b){a("#insert-link-dialog .recently-viewed-panel .data-table tr").each(function(){var d=a(this);if(d.find(".title-field").text()==c&&d.find(".space-field").text()==b){d.click()}})}})})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/usercategories/usercategories-controller.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Users==="undefined"){RW.Users={}}(function(f,c){var d;var e;var b;var a;AJS.toInit(function(){if(f("#rw_category_menu").length>0){var g=new RW.Models.UserCategory.UserCategoryList();g.fetch({data:{type:"category"},success:function(){RW.Users.categories=g;RWJS.PubSub.trigger("user-categories:fetched")}})}var i=f(".rw_user_category_macro");var h=f(".rw_users_space_macro");if(i.length>0){c.each(i,function(l){var m=f(".rw_user_category_macro_params",f(l)).data();var k=new RW.Models.UserCategory.UserCategoryItem({key:m.categoryKey,type:"category",rolesOnly:m.rolesOnly});var j={type:k.get("type"),rolesOnly:m.rolesOnly,"max-results":m.maxResults};if(m.hierarchy!=undefined&&m.hierarchy!="no_hierarchy"){j.recursive=true}f(l).html(RWJS.Templates.Utils.loader({size:"medium"}));if(k.get("key")!==undefined){k.fetch({data:j,success:function(){var n=new RW.Views.UserCategory.UserCategoryMacroView({model:k,macroParam:m});f(l).html(n.render());Confluence.Binder.userHover()},error:function(p,n,o){if(n.status===401){f(l).html(RW.Templates.infoBox({content:"The content of this macro can only be viewed by users who have logged in."}))}else{if(n.status===404){f(l).html(RW.Templates.warningBox({content:"Category not found."}))}else{f(l).html(RW.Templates.warningBox({content:"An unexpected error has occurred. We apologize for this inconvenience."}))}}}})}else{f(l).html(RW.Templates.infoBox({content:"Please specify a category key."}))}})}if(h.length>0){c.each(h,function(k){var l=f(".rw_users_space_macro_params",f(k)).data();if(l.shouldDisplay==true){var j;if(l.usersFromCategory){j=new RW.Models.UserCategory.UserCategoryItem({key:String(l.usersFromCategory),type:"category",rolesOnly:l.rolesOnly})}else{j=new RW.Models.UserCategory.UserCategoryItem({key:String(l.spaceKey),type:"space",rolesOnly:l.rolesOnly})}f(k).html(RWJS.Templates.Utils.loader({size:"medium"}));f(k).show();j.fetch({data:{type:j.get("type"),rolesOnly:l.rolesOnly,displayAdmins:l.displayAdmins,"max-results":l.maxResults},success:function(){var m=new RW.Views.UserCategory.UserSpaceMacroView({model:j,macroParam:l});f(k).html(m.render());if(l.canEdit||j.get("userSize")>0){f(k).show()}else{f(k).remove()}Confluence.Binder.userHover()},error:function(o,m,n){f(k).show();if(m.status===401){f(k).html(RW.Templates.infoBox({content:"The content of this macro can only be viewed by users who have logged in."}))}else{if(m.status===404){f(k).html(RW.Templates.errorBox({content:"Space not found."}))}else{f(k).html(RW.Templates.warningBox({content:"An unexpected error has occurred. We apologize for this inconvenience."}))}}}})}})}f("#rw_edit_user_category_button").click(function(k){var j=f(k.currentTarget);RW.createUserCategoryDialog(j.attr("data-category-key"),"category",false);return false});f("#rw_space_users_button").click(function(k){var j=f(k.currentTarget);RW.createUserCategoryDialog(j.data("spaceKey"),"space",true);return false})});RW.createUserCategoryDialog=function(h,i,g){if(g==undefined){g=false}var j=new RW.Models.UserCategory.UserCategoryItem({key:h,type:i});j.fetch({url:j.url()+"admin-config",data:{type:j.get("type")},success:function(){var k=new RW.Views.UserCategory.AddDialogView({model:j,includeSubCategories:!g,parentCategory:h})}})}})(RWJS.$,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/usercategories/usercategories-models.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}if(typeof RW.Models.UserCategory==="undefined"){RW.Models.UserCategory={}}(function(b,a){RW.Models.UserCategory.UserCategoryList=a.Collection.extend({initialize:function(d,c){if(c&&c.listObject){this.model=c.listObject}else{this.model=RW.Models.UserCategory.UserCategoryItem}},url:function(){return contextPath+"/rest/originaltheme/1.0/user-category"}});RW.Models.UserCategory.CategoryRoles=a.Collection.extend({initialize:function(c){this.model=RW.Models.UserCategory.CategoryRole;if(c&&c.key){this.key=c.key}},url:function(){return contextPath+"/rest/originaltheme/1.0/user-category/"+this.key+"/role"}});RW.Models.UserCategory.UserCategoryItem=a.Model.extend({idAttribute:"key",namedAttributes:{name:"string",key:"string",type:"string",users:"object",groups:"object",userSize:"number",hasMore:"boolean",allUsers:"object",visible:"boolean",rolesOnly:"boolean",roles:RW.Models.UserCategory.CategoryRoles,canEdit:"boolean",children:RW.Models.UserCategory.UserCategoryList},initialize:function(c){},url:function(){return contextPath+"/rest/originaltheme/1.0/user-category/"+this.get("key")+"/"}});RW.Models.UserCategory.CategoryRole=a.Model.extend({idAttribute:"id",namedAttributes:{key:"string",id:"string",type:"string",user:"object",name:"string",position:"number"},url:function(){return contextPath+"/rest/originaltheme/1.0/user-category/"+this.get("key")+"/role"}})})(RWJS.$,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/usercategories/usercategories-views.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}if(typeof RW.Views.UserCategory==="undefined"){RW.Views.UserCategory={}}(function(b,d,a){RW.Views.UserCategory.AddDialogView=d.View.extend({dialog:null,groupQuery:null,userGroupsModel:null,userQuery:null,userModel:null,roleModel:null,roleQuery:null,includeSubCategories:false,parentCategory:"",events:{"keyup #rw_form_roles":"searchRoles","click #rw_role_search_result_container li":"addRoleUser","keyup #rw_form_role_name":"updateRoleUser","click #rw_user_category_role_list .rw_delete_button":"removeRole","click .rw_add_role_button":"addRole","click .rw_cancel_role_button":"cancelRole","click .rw_save_role_button":"saveRole","click .rw_change_category_button":"changeCategory","click .rw_cancel_category_button":"cancelCategorySelection","click .rw_category_chooser ul a":"selectCategory","click .rw_check_visibility":"toggleVisibility","click .rw_check_rolesonly":"toggleRolesOnly"},initialize:function(h){RWJS.closeInlineDialog();var f=this;if(h&&h.includeSubCategories){this.includeSubCategories=h.includeSubCategories}if(h&&h.parentCategory){this.parentCategory=h.parentCategory}while(b("#rw_popup_dialog_admin").length>0){b("#rw_popup_dialog_admin").remove()}this.dialog=new AJS.Dialog({id:"rw_popup_dialog_admin",width:800,height:600});this.dialog.hide();if(this.model.get("type")=="space"){this.dialog.addHeader(AJS.format("Users assigned to {0}",this.model.get("name"),this.model.get("key")))}else{this.dialog.addHeader(AJS.format("Users assigned to category {0}",this.model.get("name"),this.model.get("key")))}this.dialog.addPanel();b("#rw_popup_dialog_admin").click(function(i){i.stopPropagation()});this.dialog.addButton("Done",a.bind(this.submitNewCategory,this));this.dialog.addLink("Cancel",function(){f.dialog.remove()});if(this.model.get("type")==="space"&&this.model.get("key")!=undefined){this.dialog.addLink("Edit macro in space layout",function(){window.open(contextPath+"/spaces/refinedwiki/edit-space-layout.action?key="+AJS.Meta.get("space-key"),"_blank")},"rw_left")}var g=b(RW.Templates.UserCategory.addDialog({model:this.model.toJSON()}));if(!this.includeSubCategories){b("#rw_main_category_section",g).remove()}b("#rw_popup_dialog_admin .dialog-panel-body").html(g);this.setElement(b("#rw_popup_dialog_admin .dialog-panel-body"));b(this.el).bind("keydown",function(i){if(i.which==27&&(f.$("#rw_user_search_result_container").is(":visible")||f.$("#rw_group_search_result_container").is(":visible")||f.$("#rw_role_search_result_container").is(":visible"))){f.$("#rw_user_search_result_container").hide();f.$("#rw_group_search_result_container").hide();f.$("#rw_role_search_result_container").hide();return false}});this.render();if(this.model.get("type")=="space"){var e=b('<span id="rw_space_user_info" data-tooltip="'+"Please note: The Users in space macro needs to be present to be able to display this functionality. Make sure the Users in space macro is added to your space layout or added to a page."+'" class="rw_help_sign rw_icon rw_iconfont_question"></span>');b(".dialog-title",this.dialog.popup.element).append(e);RWJS.applyTooltip("#rw_space_user_info",{gravity:"n"})}},render:function(){var h=b(RW.Templates.UserCategory.addDialog({model:this.model.toJSON()}));if(!this.includeSubCategories){b("#rw_main_category_section",h).remove()}this.$el.html(h.html());var m=new RW.Models.UserSearchWrapper({type:"user"});if(this.model.get("type")=="category"){var i="rw.user.category.users.desc"}else{if(this.model.get("type")=="space"){var i="rw.user.space.users.desc"}}var j=new RW.Views.UserSearchView({model:this.model,title:"Users",description:AJS.I18n.getText(i),searchWrapperModel:m});this.$("#rw_role_user_group_section").prepend(j.render());var k=new RW.Models.UserSearchWrapper({type:"group"});if(this.model.get("type")=="category"){var g="rw.user.category.groups.desc"}else{if(this.model.get("type")=="space"){var g="rw.user.space.groups.desc"}}var e=new RW.Views.UserSearchView({model:this.model,title:"User groups",description:AJS.I18n.getText(g),searchWrapperModel:k});this.$("#rw_role_user_group_section").prepend(e.render());if(this.model.get("type")=="category"&&this.includeSubCategories){var f=new RW.Models.AbstractCategory();var l=this;f.fetch({url:contextPath+"/rest/originaltheme/1.0/category/"+l.parentCategory+"/",data:{recursive:"true","include-children":"false"},success:function(){if(f.get("subCategories").length>0){var n=b(RW.Templates.UserCategory.categoryItem({category:f.toJSON()}));b("a[data-category-key="+l.model.get("key")+"]",n).addClass("rw_selected");l.$(".rw_category_chooser ul").html(n);l.$("#rw_main_category_section").removeClass("rw_hidden")}}})}this.dialog.show();var l=this;this.$("#rw_user_category_role_list").sortable({update:function(r,p){var o=p.item.index();var n=b(p.item).data("roleKey");var q=l.model.get("roles").get(n);q.save({},{url:q.url()+"?position="+o+"&roleKey="+n+"&type="+q.get("type")})}});this.$("#rw_user_category_role_list").disableSelection();if(this.model.get("type")=="space"){l.dialog.addHeader(AJS.format("Users assigned to {0}",l.model.get("name"),l.model.get("key")))}else{l.dialog.addHeader(AJS.format("Users assigned to category {0}",l.model.get("name"),l.model.get("key")))}RWJS.hideLoader()},addRoleUser:function(j){var l=b(j.currentTarget).attr("data-name");var h=RWJS.htmlDecode(b(".rw_search_item_title",j.currentTarget).html());var f=b("#rw_form_role_name").val();var k={user:{username:l,fullName:h},name:f};var g=b("img",b(j.currentTarget)).attr("src");var i=b(RW.Templates.UserCategory.role({role:k,fullProfilePicUrl:g}));b(".rw_delete_button",i).remove();this.$("#rw_role_user_result_container").html(i);this.$("#rw_form_roles").val(h);b("#rw_role_search_result_container").html("");b("#rw_role_search_result_container").hide()},updateRoleUser:function(){this.$("#rw_form_role_name").parent().removeClass("rw_error");var e=b("#rw_form_role_name").val();this.$("#rw_role_user_result_container .rw_user_category_role").html(RWJS.htmlEncode(e))},addRole:function(g){var f=this;this.$("#rw_role_suggestions_container").html("");this.$("#rw_form_roles").val("");this.$("#rw_form_role_name").val("");this.$("#rw_role_user_result_container").html("");this.$(".rw_add_role_wrapper").slideDown(250);this.$("#rw_add_role_button_wrapper").slideUp(250);this.$("#rw_role_user_group_section").hide();this.$("#rw_user_category_role_list").hide();b.get(contextPath+"/rest/originaltheme/1.0/user-category/"+this.model.get("key")+"/role/suggestion?type="+this.model.get("type"),{},function(e){a.each(e,function(j,h){var i=b(RW.Templates.UserCategory.resultTag({name:j}));b("span",i).css("padding-right","5px");i.css("cursor","pointer");b(".rw_delete_button",i).remove();b("span",i).attr("title",j);i.click(function(k){f.$("#rw_form_role_name").val(j);f.updateRoleUser()});f.$("#rw_role_suggestions_container").append(i);if((h+1)%3==0){f.$("#rw_role_suggestions_container").append("<div style='clear:both;'></div>")}})});return false},cancelRole:function(f){this.$(".rw_add_role_wrapper").slideUp(250);this.$("#rw_add_role_button_wrapper").slideDown(250);this.$("#rw_role_user_group_section").show();this.$("#rw_user_category_role_list").show();return false},saveRole:function(l){var i={username:this.$("#rw_role_user_result_container .rw_user_role").attr("data-username")};var g=this.$("#rw_form_role_name").val();var f=this.model.get("roles").length;var j=false;if(a.isEmpty(g)){this.$("#rw_form_role_name").parent().addClass("rw_error");j=true}else{this.$("#rw_form_role_name").parent().removeClass("rw_error")}if(a.isEmpty(i.username)){this.$("#rw_form_roles").parent().addClass("rw_error");j=true}else{this.$("#rw_form_roles").parent().removeClass("rw_error")}if(j){return false}var k=new RW.Models.UserCategory.CategoryRole({key:this.model.get("key"),type:this.model.get("type"),user:i,name:g,position:f});var h=this;k.save({},{type:"POST",success:function(e){h.model.get("roles").add(k);h.render()}});return false},removeRole:function(j){var g=b(j.currentTarget).closest("li");var k=g.attr("data-username");var h=g.data("roleKey");var i=this.model.get("roles").get(h);var f=this;i.destroy({url:i.url()+"?roleKey="+h,success:function(e){f.render()}})},searchRoles:function(i){if(i.which!=13){var f=this;i.stopPropagation();this.$("#rw_form_roles").parent().removeClass("rw_error");var g=this.$("#rw_form_roles").val();if(this.roleQuery!=g){this.roleQuery=g;if(a.isEmpty(this.roleModel)){this.roleModel=new RW.Models.UserSearchWrapper({type:"user",query:g})}else{this.roleModel.set("query",g)}if(!a.isEmpty(g)){var h={reset:true,success:function(j){var e=b(RW.Templates.Users.searchResult({results:f.roleModel.toJSON().result}));f.$("#rw_role_search_result_container").html(e);f.$("#rw_role_search_result_container").show();RW.startKeyable(f.$("#rw_role_search_result_container"),null,"search")}};this.roleModel.fetch(h)}else{this.$("#rw_"+type+"_search_result_container").html("");this.$("#rw_"+type+"_search_result_container").hide()}}}},changeCategory:function(f){if(this.$(".rw_category_chooser ul").children().length!==0){this.$(".rw_change_category_button").hide();this.$(".rw_category_chooser").slideDown(100);this.$("#rw_main_dialog_section").slideUp(100)}},cancelCategorySelection:function(f){this.$(".rw_change_category_button").show();this.$("#rw_main_dialog_section").slideDown(100);this.$(".rw_category_chooser").slideUp(100)},selectCategory:function(i){var f=this;RWJS.showLoader();var g=b(i.currentTarget).attr("data-category-key");var h=new RW.Models.UserCategory.UserCategoryItem({key:g,type:"category"});h.fetch({data:{type:h.get("type")},url:h.url()+"admin-config",success:function(){f.model=h;f.render()}})},toggleVisibility:function(g){var f=b(g.currentTarget).prop("checked");this.model.set("visible",f);if(!f){this.$(".rw_check_rolesonly").disable();this.$(".rw_check_rolesonly_text").addClass("rw_text_gray")}else{this.$(".rw_check_rolesonly").enable();this.$(".rw_check_rolesonly_text").removeClass("rw_text_gray")}},toggleRolesOnly:function(g){var f=b(g.currentTarget).prop("checked");this.model.set("rolesOnly",f)},submitNewCategory:function(f){var e=this;f.remove();if(!a.isEmpty(e.model)&&(!a.isEmpty(e.model.get("users"))||!a.isEmpty(e.model.get("groups"))||(!a.isEmpty(e.model.get("roles"))&&!a.isEmpty(e.model.get("roles").models)))){var g=e.model.get("type");e.model.save({},{success:function(){if(!a.isEmpty(RW.Users.categories)){RW.Users.categories.remove(e.model.get("key"));RW.Users.categories.add(e.model)}if(RW.cacheManager){RW.cacheManager.clearKey("usercategory")}RWJS.PubSub.trigger("user-category:updated",{userCategory:e.model})}})}else{if(!a.isEmpty(e.model)){e.model.destroy({url:e.model.url()+"?type="+e.model.get("type"),success:function(){RWJS.PubSub.trigger("user-category:updated",{userCategory:e.model})}});if(!a.isEmpty(RW.Users.categories)){RW.Users.categories.remove(e.model.get("key"))}}}}});var c=50;RW.Views.UserCategory.UserCategoryButtonView=d.View.extend({categoryKey:"",tooltip:"",events:{"click .rw_user_category_link":"toggleDropDown"},initialize:function(f){if(f&&f.categoryKey){this.categoryKey=f.categoryKey}if(f&&f.tooltip){this.tooltip=f.tooltip}var e=b(RW.Templates.UserCategory.button({tooltip:this.tooltip}));this.setElement(e)},render:function(){var e=b(RW.Templates.UserCategory.button({tooltip:this.tooltip}));this.$el.html(e.html());return this.$el},toggleDropDown:function(i){var f=this;b("#rw_wrapper .rw_user_category_dd").parent().remove();var g=b(".rw_user_category_link",f.$el.parent());var h=new RW.Views.UserCategory.UserCategoryDDView({categoryKey:f.categoryKey,ddButton:g});b("#rw_wrapper").append(h.render());return false}});RW.Views.UserCategory.UserCategoryDDView=d.View.extend({categoryKey:"",$ddButton:undefined,tooltip:"",events:{"click .rw_user_category_dd":"wrapperClick"},initialize:function(h){var e=this;if(h&&h.ddButton){this.$ddButton=h.ddButton}if(h&&h.categoryKey){this.categoryKey=h.categoryKey}var f=RW.Templates.UserCategory.dropDown();var g=b(f);this.setElement(g)},render:function(){var g=b(RW.Templates.UserCategory.dropDown());this.$el.html(g.html());var f=this;var e=RW.Users.categories.get(this.categoryKey);if(e!==undefined){f.$(".rw_user_category_dd").html(RWJS.Templates.Utils.loader({size:"medium"}));e.fetch({data:{type:e.get("type")},success:function(){var i=new RW.Views.UserCategory.UserCategoryView({model:e});f.$(".rw_user_category_dd").html(i.render());Confluence.Binder.userHover()}})}else{var h=new RW.Views.UserCategory.UserCategoryView({categoryKey:this.categoryKey});this.$(".rw_user_category_dd").append(h.render())}b("body").bind("click",a.bind(this.removeDD,this));b("#rw_category_dropdown_wrapper").bind("click",a.bind(this.removeDD,this));this.adjustDropDownPosition();this.$ddButton.closest(".rw_has_user_category").addClass("rw_dd_open");this.tooltip=this.$ddButton.attr("data-tooltip");this.$ddButton.attr("data-tooltip","");RWJS.removeTooltip();return this.$el},wrapperClick:function(f){f.stopPropagation()},removeDD:function(){this.$ddButton.attr("data-tooltip",this.tooltip);this.$ddButton.closest(".rw_has_user_category").removeClass("rw_dd_open");this.remove()},adjustDropDownPosition:function(){this.$(".rw_user_category_dd").css("left",this.$ddButton.offset().left+(this.$ddButton.outerWidth()/2)-200).css("top",this.$ddButton.offset().top+this.$ddButton.outerHeight()-b("#rw_wrapper").offset().top)}});RW.Views.UserCategory.UserCategoryInline=d.View.extend({events:{"click .rw_configure_button":"editUserCategory"},initialize:function(g){var e=this;var f=b(RW.Templates.UserCategory.inline());this.setElement(f)},render:function(){var h=this.model.get("name");var f=b(RW.Templates.UserCategory.inline());this.$el.html(f.html());var g=new RW.Views.UserCategory.UserCategoryView({model:this.model});var e=g.render();this.$(".rw_user_category_inline").append(e);return this.$el},editUserCategory:function(f){if(this.model===undefined){RW.createUserCategoryDialog(this.categoryKey,"category",true)}else{RW.createUserCategoryDialog(this.model.get("key"),this.model.get("type"),true)}return false}});RW.Views.UserCategory.UserCategoryView=d.View.extend({categoryKey:"",startIndex:0,events:{"click .rw_configure_button":"editUserCategory","click .rw_load_more":"loadMore"},initialize:function(g){if(g&&g.categoryKey){this.categoryKey=g.categoryKey}var f;if(this.model!==undefined){f=this.model.toJSON()}else{f={canEdit:true}}var e=b(RW.Templates.UserCategory.view({model:f}));this.setElement(e);this.initSubscriptions()},initSubscriptions:function(){var e=this;RWJS.PubSub.on("user-category:updated",function(f){if(e.model===undefined){e.model=new RW.Models.UserCategory.UserCategoryItem({key:e.categoryKey,type:"category"})}if(f!==undefined&&f.userCategory!==undefined&&f.userCategory.get("key")===e.model.get("key")&&f.userCategory.get("type")===e.model.get("type")){e.$el.html(RWJS.Templates.Utils.loader({size:"medium"}));e.model=new RW.Models.UserCategory.UserCategoryItem({key:e.model.get("key"),type:"category"});e.model.fetch({data:{type:e.model.get("type")},success:function(){e.render()}})}})},render:function(){var f;if(this.model!==undefined){f=this.model.toJSON()}else{f={canEdit:true}}var e=b(RW.Templates.UserCategory.view({model:f}));this.$el.html(e.html());return this.$el},editUserCategory:function(f){if(this.model===undefined){RW.createUserCategoryDialog(this.categoryKey,"category",true)}else{RW.createUserCategoryDialog(this.model.get("key"),this.model.get("type"),true)}return false},loadMore:function(h){var g=this;var f={type:g.model.get("type")};f["start-index"]=this.startIndex+c;this.startIndex+=c;g.model.fetch({data:f,success:function(){var e=b(RW.Templates.UserCategory.view({model:g.model.toJSON()}));b(".rw_title, .rw_edit_section",e).remove();b(h.currentTarget).remove();g.$(".rw_user_category.rw_in_popup").append(b(".rw_user_category",e).html())}});return false}});RW.Views.UserCategory.UserCategoryMacroView=d.View.extend({macroParam:null,startIndex:0,events:{"click .rw_item_link":"toggleTreeItem","click .rw_load_more_link":"loadMore"},initialize:function(f){if(f.macroParam!==undefined){this.macroParam=f.macroParam}var e=b(RW.Templates.UserCategory.categoryMacro({model:this.model.toJSON(),macroParam:this.macroParam}));this.setElement(e);this.initSubscriptions();this.startIndex=0},initSubscriptions:function(){var e=this;RWJS.PubSub.on("user-category:updated",function(){e.$el.html(RWJS.Templates.Utils.loader({size:"medium"}));e.model=new RW.Models.UserCategory.UserCategoryItem({key:e.model.get("key"),type:"category"});var f={type:e.model.get("type")};if(e.macroParam.hierarchy!=undefined&&e.macroParam.hierarchy!="no_hierarchy"){f.recursive=true}e.model.fetch({data:f,success:function(){e.render()}})})},render:function(){var e=b(RW.Templates.UserCategory.categoryMacro({model:this.model.toJSON(),macroParam:this.macroParam}));this.$el.html(e.html());if(b(".rw_load_more_link",e).length==0&&this.checkForMore(this.model)){this.$el.append(RW.Templates.loadMoreButton())}return this.$el},checkForMore:function(f){var e=this;if(f.get("hasMore")===true){return true}var i=false;if(f.get("children")){var g=f.get("children").where({hasMore:true});i=g.length>0}if(i===true){return true}else{if(f.get("children")&&f.get("children").filter){var h=f.get("children").filter(function(j){return j.get("children")!==undefined});a.each(h,function(j){if(e.checkForMore(j)){return true}});return false}}return false},loadMore:function(i){var h=this;var g={type:h.model.get("type")};var f=c;if(this.macroParam&&this.macroParam.maxResults){f=this.macroParam.maxResults}g["start-index"]=this.startIndex+f;g["max-results"]=f;this.startIndex+=f;if(h.macroParam.hierarchy!=undefined&&h.macroParam.hierarchy!="no_hierarchy"){g.recursive=true}h.model.fetch({data:g,success:function(){var e=b(RW.Templates.UserCategory.categoryMacro({model:h.model.toJSON(),macroParam:h.macroParam}));b(".rw_macro_title",e).remove();b(".rw_description",e).remove();var j=b(".rw_item_link[data-category-key]",e);a.each(j,function(n){var l=b(n).attr("data-category-key");var o=h.$('.rw_item_link[data-category-key="'+l+'"]');if(o.length>0){var q=o.siblings(".rw_item_section");var k=b(n).siblings(".rw_item_section");var m=b("li",k).closest("[data-category-key]");if(m.length==0||m.attr("data-category-key")==l){if(b(".rw_roles",q).length>0){b(".rw_roles:first li",k).detach().appendTo(b(".rw_roles",q))}else{b(".rw_roles:first li",k).detach().appendTo(q)}if(b(".rw_category_members",q).length>0){b(".rw_category_members:first li",k).detach().appendTo(b(".rw_category_members",q))}else{b(".rw_category_members:first",k).detach().appendTo(q)}}b(n).remove()}else{var p=b(n).parent();if(b("li",p).length>0){var r=p.parent().closest(".rw_tree_view").attr("data-category-key");if(r){o=h.$('.rw_tree_view[data-category-key="'+r+'"]');if(o.length>0){if(b("> .rw_item_section",o).length>0){b("> .rw_item_section",o).append(p)}else{b(o).append(p)}}}}}});b('[data-category-key="'+h.model.get("key")+'"] > .rw_roles li',e).detach().appendTo(h.$('[data-category-key="'+h.model.get("key")+'"] > .rw_roles'));b('[data-category-key="'+h.model.get("key")+'"] > .rw_category_members li',e).detach().appendTo(h.$('[data-category-key="'+h.model.get("key")+'"] > .rw_category_members'));b(".rw_load_more_link",e).detach().replaceAll(b(i.currentTarget));if(b(".rw_load_more_link",e).length==0&&h.$(".rw_load_more_link").length==0&&h.checkForMore(h.model)){h.$el.append(RW.Templates.loadMoreButton())}}}).always(function(j,e,k){Confluence.Binder.userHover()});return false},toggleTreeItem:function(f){b(f.currentTarget).parent().toggleClass("rw_closed");return false}});RW.Views.UserCategory.UserSpaceMacroView=d.View.extend({macroParam:null,startIndex:0,events:{"click .rw_configure_button":"editUsers","click .rw_load_more_link":"loadMore"},initialize:function(f){if(f.macroParam!==undefined){this.macroParam=f.macroParam}var e=b(RW.Templates.UserCategory.spaceMacro({model:this.model.toJSON(),macroParam:this.macroParam}));this.setElement(e);this.initSubscriptions()},initSubscriptions:function(){var e=this;RWJS.PubSub.on("user-category:updated",function(f){if(f!==undefined&&f.userCategory!==undefined&&f.userCategory.get("key")===e.model.get("key")&&f.userCategory.get("type")===e.model.get("type")){e.$el.html(RWJS.Templates.Utils.loader({size:"medium"}));e.model=new RW.Models.UserCategory.UserCategoryItem({key:e.macroParam.spaceKey,type:"space"});e.model.fetch({data:{type:e.model.get("type")},success:function(){e.render()}})}})},render:function(){var e=b(RW.Templates.UserCategory.spaceMacro({model:this.model.toJSON(),macroParam:this.macroParam}));this.$el.html(e.html());return this.$el},loadMore:function(i){var h=this;var g={type:h.model.get("type")};var f=c;if(this.macroParam&&this.macroParam.maxResults){f=this.macroParam.maxResults}g["start-index"]=this.startIndex+f;g["max-results"]=f;this.startIndex+=f;h.model.fetch({data:g,success:function(){var e=b(RW.Templates.UserCategory.spaceMacro({model:h.model.toJSON(),macroParam:h.macroParam}));b(".rw_roles li",e).detach().appendTo(h.$(".rw_roles"));b(".rw_category_members:not(.rw_admins) li",e).detach().appendTo(h.$(".rw_category_members::not(.rw_admins)"));b(".rw_admins li",e).detach().appendTo(h.$(".rw_admins"));b(".rw_load_more_link",e).replaceAll(b(i.currentTarget))}}).always(function(j,e,k){Confluence.Binder.userHover()});return false},editUsers:function(f){RW.createUserCategoryDialog(this.macroParam.spaceKey,"space",true);return false}})})(RWJS.$,RWJS.Backbone,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/navigation/theme-side-menu.js' */
if(typeof RW.sideMenu==="undefined"){RW.sideMenu={}}(function(a){RW.Views.SideMenu=RWJS.Views.SideMenu.extend({$sideMenuWrapper:undefined,start:function(b){RW.Views.SideMenu.__super__.STORAGE_PREFIX="rwot.";this.$sideMenuWrapper=b;RW.Views.SideMenu.__super__.start.call(this,RW.remoteUser);RW.Views.SideMenu.__super__.resetActive.call(this,b)},bindListeners:function(c){var b=this;RWJS.PubSub.on("topmenu:loaded",RW.Views.SideMenu.__super__.resetActive.call(b));RWJS.PubSub.on("favourite-popup:show",function(){RW.Views.SideMenu.__super__.setActive.call(b,a(".rw_item_favourite_content",c))});RWJS.PubSub.on("favourite-popup:hide",function(){RW.Views.SideMenu.__super__.resetActive.call(b,a(".rw_item_favourite_content",c))});RWJS.PubSub.on("activity-popup:show",function(){RW.Views.SideMenu.__super__.setActive.call(b,a(".rw_item_activity_popup",c))});RWJS.PubSub.on("activity-popup:hide",function(){RW.Views.SideMenu.__super__.resetActive.call(b,a(".rw_item_activity_popup",c))});RWJS.PubSub.on("search-popup:show",function(){RW.Views.SideMenu.__super__.setActive.call(b,a("#rw_search_popup_button",c))});RWJS.PubSub.on("search-popup:hide",function(){RW.Views.SideMenu.__super__.resetActive.call(b,a("#rw_search_popup_button",c))});a("#notifications-anchor",c).click(function(){RW.Views.SideMenu.__super__.setActive.call(b,a(this));setTimeout(function(){a("#mw-deprecated-task-show-me",a("#notifications-miniview-iframe").contents()).unbind().click(function(){window.location=contextPath+"/plugins/inlinetasks/mytasks.action"})},1000)})},startKeyNav:function(b){if(b!==undefined){}else{if(a("ul:nth-child(3) li:first-child",this.$sideMenuWrapper).length>0){b=a("ul:nth-child(3) li:first-child",this.$sideMenuWrapper)}else{if(a("ul:nth-child(2) li:first-child",this.$sideMenuWrapper).length>0){b=a("ul:nth-child(2) li:first-child",this.$sideMenuWrapper)}else{if(a("ul:first-child li:first-child",this.$sideMenuWrapper).length>0){b=a("ul:first-child li:first-child",this.$sideMenuWrapper)}}}}if(this.$sideMenuWrapper.hasClass("rw_mode_closed")){this.$sideMenuWrapper.addClass("rw_open")}RW.startKeyable(this.$sideMenuWrapper,null,"sidebar",b)},startDDKeyNav:function(b){var c=a("#"+b.data("dd"));RW.startKeyable(c,null,"sidebar_dd",a("div:first-child li:first-child",c))},quitDDKeyNav:function(b){RW.Views.SideMenu.__super__.hideDD.call(this);RW.sideMenu.startKeyNav(b)},showDD:function(b,c){RW.Views.SideMenu.__super__.showDD.call(this,b,c);this.updateEventsIfNeeded(b)},updateEventsIfNeeded:function(d){var b=this;if(d.attr("id")=="user-menu-link"){var c=a("#create-user-status-link");c.unbind("click");c.bind("click",function(){var e=WRM.require("wr!confluence.userstatus:userstatus-resources",function(){AJS.$("#create-user-status-link").trigger("deferred.userstatus.click");RW.Views.SideMenu.__super__.hideDD.call(b)});return false})}},quitKeyable:function(){RW.quitKeyable()},executeLink:function(c){RW.quitKeyable();var e=c.attr("id");var d=c.attr("href");if(e==="create-user-status-link"||e==="set-user-status-link"||e==="create-personal-space-link"||e==="keyboard-shortcuts-link"||e==="whats-new-menu-link"||e==="gadget-directory-link"||e==="confluence-about-link"||e==="view-user-history-link"){if(e==="create-user-status-link"){RW.Views.SideMenu.__super__.hideDD.call(this);if(WRM&&WRM.require==="function"){var b=WRM.require("wr!confluence.userstatus:userstatus-resources",function(){AJS.$(c).trigger("deferred.userstatus.click")})}}else{c.trigger("click")}}else{if(d!==undefined&&d!=="#"){if(c.attr("target")==="_blank"){window.open(d)}else{RWJS.showLoader();window.location=d}}else{c.trigger("click")}}if(c.hasClass("rw_has_dd")){this.startDDKeyNav(c)}}});RWJS.hideDDOutside=function(){RW.sideMenu.hideDD()}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/shortcuts/keyable.js' */
if(typeof RW.Keyable==="undefined"){RW.Keyable={}}(function(b){var a;RW.startKeyable=function(c,f,e,d){if(typeof a!="undefined"){RW.quitKeyable()}a=c.keyable(f,e,d)};RW.quitKeyable=function(){if(typeof a!="undefined"){a.quit()}try{RW.stopMenuKeyNavigation()}catch(c){}};b.fn.keyable=function(k,L,H){var E=b(this);var h=null;var q=null;var f=null;var y=null;var j=null;var v=null;var F=null;var D=null;var x=null;var e=true;var i=false;var n=false;j=y=b("li:visible",E);if(typeof H!="undefined"&&H!=null){H.addClass("rw_selected");E.addClass("rw_key_nav")}switch(L){case"category_menu":r();break;case"blog_post_popup":p();break;case"category_dropdown_menu":c();break}switch(k){case"multi_column":if(L==="category_dropdown_menu"){q=b(".rw_dd_section",E)}else{q=b("ul",E)}break}function B(N){x=N;D=null;e=true;if(h!=null){F=h;h=null}else{F=b("li.rw_selected",E)}switch(L){case"category_menu":I();break;case"category_dropdown_menu":if(v!==null&&!v.data("loadCategory")){RW.Keyable.prevItem=v}t();break;case"page_tree":u();break;case"menu_dropdown":l();break;case"blog_post_popup":p();break;case"search":K();break;case"sidebar":w();break;case"sidebar_dd":C();break}switch(k){case"multi_column":m();break;case"horizontal":d();break}var M=j.index(F);E.addClass("rw_key_nav");if(e){if(D==null){if(M===-1){if(x===40){D=0}else{if(x===38){D=j.length-1}}}else{if((M===0)&&x===38){if(L!="page_tree"){D=j.length-1}else{D=M}}else{if((M+1===j.length)&&x===40){D=0}else{if(x===40){D=M+1}else{if(x===38){D=M-1}}}}}}b("li.rw_selected",E).removeClass("rw_selected");v=j.eq(D);v.addClass("rw_selected")}switch(L){case"category_menu":s();break;case"category_dropdown_menu":A();break;case"page_tree":if(e){o()}break;case"menu_dropdown":z();break}J()}function m(){if(F.length!=0){for(var M=0;M<q.length;M++){if(b("li",q[M]).index(F)!==-1){f=q[M]}}}else{f=q[0]}j=b("li",f);if(x===37||x===39){var O=j.index(F);var N=q.index(f);if(x===37){if(N===0){f=q[q.length-1]}else{f=q[N-1]}}else{if(x===39){if(N===(q.length-1)){f=q[0]}else{f=q[N+1]}}}j=b("li",f);if(O===-1){D=0}else{if(O>=j.length){D=(j.length-1)}else{D=O}}}}function d(){if(x===39){x=40}else{if(x===37){x=38}else{e=false}}}function r(){if(RW.inCategoryDropDown){var M=RWA.Category.hideCategory();b("#"+M,RW.category.object).addClass("rw_selected")}else{if(b("li.rw_selected",E).length===0){b(j[0]).addClass("rw_selected");E.addClass("rw_key_nav");RW.category.scrollContainer.animate({scrollLeft:"0px"},200)}}}function c(){if(RW.category.collapsedSubCategories){var M=b("#rw_category_dropdown_wrapper .rw_dd_category");b.each(M,function(){if(b("ul",this).is(":empty")&&b(".rw_dd_category",this).length===0){b("ul",this).append('<li data-load-category="true"></li>').data("empty",true)}})}}function I(){if(x===40){if(b(".rw_dropdown_btn",F).length>0){var M=b(F).attr("data-name-key");RWA.Category.showCategory(M)}}}function s(){if(RW.category.scrolling()&&b("li.rw_selected",E).length>0){if(D===0){RW.category.scrollContainer.animate({scrollLeft:"0"},100)}else{if(D===(y.size()-1)){RW.category.scrollContainer.animate({scrollLeft:"+=99999"},100)}else{if(RW.category.scrollContainer.offset().left+E.width()<b(".rw_selected",E).offset().left+b(".rw_selected",E).width()){RW.category.scrollContainer.animate({scrollLeft:"+=400"},100)}else{if(RW.category.scrollContainer.offset().left>b(".rw_selected",E).offset().left){RW.category.scrollContainer.animate({scrollLeft:"-=400"},100)}}}}}}function t(){if(F.length===0&&(x===39||x===37)){var O=RWA.Category.hideCategory();var Q=b("#"+O,RW.category.object);var N;var P=b("li",RW.category.object);var M=P.index(Q);if(x===37&&M===0){N=P[P.length-1]}else{if(x===37){N=P[M-1]}else{if(x===39&&M===(P.length-1)){N=P[0]}else{N=P[M+1]}}}RW.startCategoryKeyNavigation(b(N))}if(j.index(F)===0&&x===38){var O=RWA.Category.hideCategory();var Q=b("#"+O,RW.category.object);RW.startCategoryKeyNavigation(Q)}}function A(){if(RW.category.collapsedSubCategories&&v.data("loadCategory")){var M=v.closest(".rw_dd_category");v.remove();if(M.hasClass("rw_dd_category_collapsed")){b("a.rw_item_expand",M).trigger("click")}}}function u(){var M=b("li:visible:last",E);if(x===39){e=false;if(b("> .rw_icon_content .rw_icon",F).hasClass("rw_icon_plus")){b("> .rw_icon_content .rw_item_icon",F).trigger("click")}}else{if(x===37){e=false;if(b("> .rw_icon_content .rw_icon",F).hasClass("rw_icon_minus")){b("> .rw_icon_content .rw_item_icon",F).trigger("click")}}else{if(x===40){if(b("> .rw_icon_content .rw_item_icon",F).attr("id")==b("> .rw_icon_content .rw_item_icon",M).attr("id")){e=false}}}}}function K(){if(x===39||x===37){e=false}}function w(){if(x===39||x===37){e=false}if(x===37){var M=b(">a",F);RW.sideMenu.executeLink(M)}}function C(){if(x===39||x===37){e=false}if(x===39){RW.sideMenu.quitDDKeyNav(b("#"+E.data("owner")).parent())}}function o(){if(n==v){return}if(x===40||x==38){if(!(b(v).closest("ul").is(":visible"))){if(n==null){n=v}B(x)}}else{n=null}}function p(){var M=b(".rw_prev",E).parent();var N=b(".rw_next",E).parent();if(x===39){if(!N.hasClass("rw_transparent")){N.click()}}else{if(x===37){if(!M.hasClass("rw_transparent")){M.click()}}}}function l(){var M=j.index(F);if(M===0&&x===38){b("#rw_menu_bar").click();RW.startConf5MenuKeyNavigation()}}function z(){b(".active",E).removeClass("active");b("a",v).addClass("active")}function J(){if(!RW.isScrolling){RWJS.scrollToElementWithOffsetAndDelay(v,250,100,{before:function(){i=true},complete:function(){i=false},error:function(){i=false}})}}var g=function(P){if(P.which==13){if(b("li.rw_selected",E).length===1){if(L=="page_tree"){window.location.href=b("li.rw_selected a",E).attr("href");if(L=="page_tree"){RWJS.showLoader()}}else{if(L=="sidebar"||L=="sidebar_dd"){RW.sideMenu.executeLink(b("li.rw_selected > a",E));return false}else{if(L==="category_menu"&&RW.categoryMenuData.disabledDashboards){var N=b("li.rw_selected",E).attr("data-name-key");RWA.Category.showCategory(N)}else{var O=b("li.rw_selected a",E).data("events");if((O!=null&&typeof(O.click)!==undefined)||b("li.rw_selected a",E).attr("href")===undefined||b("li.rw_selected a",E).attr("href")==="#"){b("li.rw_selected a",E).trigger("click")}else{window.location.href=b("li.rw_selected a",E).attr("href")}}}}}P.preventDefault();return false}else{if(P.which===37||P.which===38||P.which===39||P.which===40){B(P.which);if(L=="search"&&(P.which===37||P.which===39)){return true}else{P.preventDefault();return false}}}if(P.which===27){if(L==="blog_post_popup"){var M=b(".rw_del",E).parent();M.click()}}};var G=function(){if(!i){h=b(this);E.removeClass("rw_key_nav");b("li.rw_selected",E).removeClass("rw_selected")}};this.quit=function(){b("li.rw_selected",E).removeClass("rw_selected");E.removeClass("rw_key_nav");b(document).unbind("keydown",g);b("li",E).unbind("mouseenter",G)};b(document).keydown(g);b("iframe#rw_popup_iframe_id").load(function(){var M=document.activeElement.contentWindow&&document.activeElement.contentWindow.document;if(M){b(M).keydown(g)}b(this).keydown(g)});b("li",E).mouseenter(G);return this}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/views/category-children-view.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(a){RW.Views.CategoryChildrenView=RWJS.Views.CategoryChildrenView.extend({events:{"click li > a":"navigateToChild","click li > a .rw_item_favourite":"toggleFavourite"},addChildInfoToTemplate:function(e,c){if(e.get("type")==="space"){var d=e.get("logo");if(RW.categoryMenuData.showSpaceLogo&&d){a(".rw_item_icon",c).html('<img class="rw_space_logo" src="'+contextPath+d+'">')}else{if(RW.categoryMenuData.showSpaceIcon){if(e.get("icon")!==undefined){a(".rw_item_icon",c).addClass("rw_iconfont_"+e.get("icon"))}else{a(".rw_item_icon",c).addClass("rw_iconfont_space")}}else{a(".rw_item_icon",c).remove()}}if(RW.remoteUser){var b=a(RW.Templates.contentListItemIconRight({cssClasses:" rw_item_favourite rw_iconfont_star"}));b.addClass("").attr("data-key",e.get("key"));if(e.get("favourite")){b.addClass("rw_selected")}a(".rw_item_content",c).addClass("rw_has_icon_right").prepend(b)}}else{if(e.get("type")==="link"){a(".rw_item_icon",c).addClass("rw_iconfont_"+e.get("icon"))}}},navigateToChild:function(d){var b=this.$el.closest("#rw_category_dropdown_container");var c=a("#rw_category_dropdown_loader");if(b.hasClass("rw_key_nav")){window.location=a(d.currentTarget).attr("href");b.hide();c.show();return false}else{return true}},toggleFavourite:function(b){RW.addOrRemoveFav(a(b.currentTarget).data("key"),b.currentTarget);return false}})})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/views/abstract-category-module-view.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,d,b,a){RW.Views.AbstractModuleCategoryView=RWJS.Views.CategoryColumnView.extend({initialize:function(e){RWJS.Views.CategoryColumnView.prototype.initialize.call(this,e)},render:function(h){var f=(h&&h.ddView&&h.ddView.allExpanded===true);var i=false;try{i=this.templateData.menuData.collapsedSubCategories}catch(g){}if(!this.model.get("parentKey")||!i||f){this.fetchAndRender(h,false)}else{this.renderCollapsed(h)}if(h&&h.ddView){h.ddView.hideLoader()}var e=this.model.get("type");if(e==="blog"||e==="html"){this.$el.find("a.rw_sub_category_link").removeAttr("href","")}return this.$el},fetchAndRender:function(g,f){var h=this;if(f){var e=this.model.get("hideTitle");this.model.set("hideTitle",true)}RWJS.Views.CategoryColumnView.prototype.render.call(this);if(f){this.model.set("hideTitle",e)}this.moduleView.render({hideTitle:true,hideLoader:true,callback:function(i){if(g){if(g.loader){g.loader.hide()}if(g.ddView){g.ddView.hideLoader();RW.startKeyable(g.ddView.$("#rw_category_dropdown_container"),g.ddView.printedColumnLayout,"category_dropdown_menu")}h.triggerPublicEvent(g)}}})},renderCollapsed:function(e){if(this.$el.data("loaded")===true){this.fetchAndRender(e,true)}else{RWJS.Views.CategoryColumnView.prototype.render.call(this);if(e){if(e.loader){e.loader.hide()}}this.triggerPublicEvent(e)}}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/views/confluence-category-view.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(a){RW.Views.ConfluenceCategoryView=RWJS.Views.CustomCategoryColumnView.extend({initialize:function(c){RWJS.Views.CustomCategoryColumnView.prototype.initialize.call(this,c);var b=undefined;if(this.model.get("link")&&this.model.get("link").url){b=this.model.get("link").url}if(!this.templateData){this.templateData={}}this.templateData.url=b;this.initSubscription()},render:function(c){var b=RWJS.Views.CustomCategoryColumnView.prototype.render.call(this,c);var d=this.model.toJSON();if(this.categoryMenuData&&this.categoryMenuData.disabledSubdashboards===true&&d.link&&d.link.defaultLink!=false){a(".rw_sub_category_link",b).removeAttr("href")}return b}})})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/views/blog-category-view.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(c,d,b,a){RW.Views.BlogCategoryView=RW.Views.AbstractModuleCategoryView.extend({events:a.extend(RWJS.Views.CategoryColumnView.prototype.events,{"click li a":"navigateToBlog"}),initialize:function(e){RW.Views.AbstractModuleCategoryView.prototype.initialize.call(this,e);this.moduleView=new RW.Views.BlogModuleView({model:this.model,el:this.$el})},navigateToBlog:function(h){var f=this.$el.closest("#rw_category_dropdown_container");var g=c("#rw_category_dropdown_loader");if(f.hasClass("rw_key_nav")){window.location=c(h.currentTarget).attr("href");f.hide();g.show();return false}else{return true}}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/views/questions-category-view.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,d,b,a){RW.Views.QuestionsCategoryView=RW.Views.AbstractModuleCategoryView.extend({initialize:function(e){RW.Views.AbstractModuleCategoryView.prototype.initialize.call(this,e);this.moduleView=new RW.Views.QuestionsModuleView({model:this.model,el:this.$el})}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/views/html-category-view.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,d,b,a){RW.Views.HtmlCategoryView=RW.Views.AbstractModuleCategoryView.extend({initialize:function(e){RW.Views.AbstractModuleCategoryView.prototype.initialize.call(this,e);this.moduleView=new RW.Views.HtmlModuleView({model:this.model,el:this.$el})}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/models/category-children-model.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}(function(b,c,a){RW.Models.CategoryChild=RWJS.Models.CategoryChild.extend({namedAttributes:{parentKey:"string",icon:"string",favourite:"boolean",logo:"string",description:"string",target:"boolean"},initialize:function(){},url:function(){return contextPath+"/rest/originaltheme/1.0/category/"+this.get("categoryKey")+"/child/"+this.get("key")},destroyLink:function(d){this.isNew=function(){return false};if(!d){d={}}d.url=contextPath+"/rest/originaltheme/1.0/category/"+this.get("categoryKey")+"/link/"+this.get("key");return c.Model.prototype.destroy.call(this,d)},move:function(f,e,d,g){this.id=this.get("key");f.type="PUT";f.url=contextPath+"/rest/originaltheme/1.0/category/move-children?oldKey="+e+"&newKey="+d+"&newPosition="+g;return c.Model.prototype.save.call(this,{},f)}});RW.Models.CategoryChildren=RWJS.Models.CategoryChildren.extend({model:RW.Models.CategoryChild});RW.Models.Spaces=RW.Models.CategoryChildren.extend({url:function(){return contextPath+"/rest/originaltheme/1.0/space"},fetchUncategorized:function(d,f,e){if(!d){d={}}if(!f){f=""}if(!e){e=false}d.url=this.url()+"/uncategorized?filterString="+f+"&simpleVersion="+e;return a.Collection.prototype.fetch.call(this,d)},fetchBlogPortalSpaces:function(d){if(!d){d={}}d.url=this.url()+"/blog-portal";return a.Collection.prototype.fetch.call(this,d)},comparator:function(d){return d.get("title").toLowerCase()}});RW.Models.CategoryChildrenContainer=a.Model.extend({namedAttributes:{children:RW.Models.CategoryChildren},initialize:function(d){this.set("children",new RW.Models.CategoryChildren())},move:function(f,e,d,g){f.type="PUT";f.url=contextPath+"/rest/originaltheme/1.0/category/move-children?oldKey="+e+"&newKey="+d+"&newPosition="+g;return c.Model.prototype.save.call(this,{},f)}})})(RWJS.$,RWJS.Backbone,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/models/rendered-category-model.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}(function(){RW.Models.Categories=RWJS.Models.Categories.extend({model:function(b,a){switch(b.type){case"category":return new RW.Models.CustomCategory(b,a);case"questions":return new RW.Models.QuestionsCategory(b,a);case"blog":return new RW.Models.BlogCategory(b,a);case"html":return new RW.Models.HtmlCategory(b,a);default:return new RWJS.Models.Category(b,a)}},url:function(){return contextPath+"/rest/originaltheme/1.0/category"}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/models/rendered-custom-category-model.js' */
if(typeof RW==="undefined"){var RW={}}(function(){RW.Models.CustomCategory=RWJS.Models.CustomCategory.extend({namedAttributes:{children:RW.Models.CategoryChildren,subCategories:RW.Models.Categories,categoryAdmins:RW.Models.Users},url:function(){return contextPath+"/rest/originaltheme/1.0/category/"+this.get("nameKey")+"/"},toggleCategory:function(b,c,a){if(!b){b={}}b.url=contextPath+"/rest/originaltheme/1.0/category/"+RWJS.htmlEncode(this.get("nameKey"))+"/?include-children=true&recursive="+c+"&exclude-archived-spaces="+a;return RWJS.Models.CustomCategory.prototype.fetch.call(this,b)}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/models/rendered-questions-category-model.js' */
if(typeof RW==="undefined"){var RW={}}(function(){RW.Models.QuestionsCategory=RWJS.Models.Category.extend({namedAttributes:{limit:"number",filter:"string",topic:"string"},url:function(){return contextPath+"/rest/originaltheme/1.0/category/"+this.get("nameKey")+"/"},toggleCategory:function(b,c,a){if(!b){b={}}return this.fetch(b)}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/models/rendered-blog-category-model.js' */
if(typeof RW==="undefined"){var RW={}}(function(){RW.Models.BlogCategory=RWJS.Models.Category.extend({namedAttributes:{selectedMode:"string",spaceTitles:"object",limit:"number"},url:function(){return contextPath+"/rest/originaltheme/1.0/category/"+this.get("nameKey")+"/"},toggleCategory:function(b,c,a){if(!b){b={}}return this.fetch(b)}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/models/rendered-html-category-model.js' */
if(typeof RW==="undefined"){var RW={}}(function(){RW.Models.HtmlCategory=RWJS.Models.Category.extend({namedAttributes:{htmlContent:"string"},url:function(){return contextPath+"/rest/originaltheme/1.0/category/"+this.get("nameKey")+"/"},toggleCategory:function(b,c,a){if(!b){b={}}return this.fetch(b)}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/category-controller.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}if(typeof RW.category==="undefined"){RW.category={}}(function(e,i){var c="single_column";var f=[];AJS.toInit(function(){RW.category.object=e("#rw_category_menu");if(RW.category.object.length>0){RW.category.scrollContainer=e("#rw_category_menu_scroll_container",RW.category.object);RW.category.scrollEnabled=RW.category.scrollContainer.length>0;var j=new RW.Models.Categories();var l={category:RW.Views.ConfluenceCategoryView,blog:RW.Views.BlogCategoryView,questions:RW.Views.QuestionsCategoryView,html:RW.Views.HtmlCategoryView};var k=0;var m=0;RWJS.bindLink(e("#rw_dashboard_link a",RW.category.object),contextPath+"/dashboard.action",false,RW.category.object);j.fetch({success:function(r){d();var p=b();RW.categoryMenuData=RWA.Category.settings=p;var o=new (RWJS.Views.CategoryMenu.extend({el:RW.category.object,model:j,categoryMenuData:p,categoryViews:l,childrenColumnView:RW.Views.CategoryChildrenView,totalLeftWidth:k,totalRightWidth:m,mainWrapper:e("#rw_main"),showDropdown:function(u,s,t,v){RW.closePopups();return RWJS.Views.CategoryMenu.prototype.showDropdown.call(this,u,s,t,v)}}))();RW.category.scrolling=function(){return o.isScrolling};if(p.minColumnWidth!=null&&p.minColumnWidth!==""&&p.minColumnWidth!="0"){var q=parseInt(p.minColumnWidth);o.setMinWidth(q)}RW.hideCategoryDropdownHandler=function(){var s=false;if(o.dropdownView&&o.dropdownView.hasOwnProperty("linkClicked")){s=o.dropdownView.linkClicked}if(!s){RWA.Category.hideCategory()}else{if(o.dropdownView){o.dropdownView.linkClicked=false}}};o.ddCallback=function(t){RWA.Category.hideInlineUserCategoryDialogs();RW.inCategoryDropDown=true;if(t.isEmpty){var s=t.$(".rw_empty_dropdown");s.html("There doesn\'t seem to be anything here");RW.startKeyable(t.$("#rw_category_dropdown_container"),c,"category_dropdown_menu")}else{RW.startKeyable(t.$("#rw_category_dropdown_container"),t.printedColumnLayout,"category_dropdown_menu")}e(document).unbind("click",RW.hideCategoryDropdownHandler);e(document).bind("click",RW.hideCategoryDropdownHandler);RWJS.applyTooltip(".rw_sub_category_link",{gravity:"n"})};o.render();if(RW.isConfluenceAdministrator&&(j!==undefined&&j.size()===0)){var n=e(RW.Templates.Categories.onboardingLink());e("ul",RW.category.object).append(n);e("ul",RW.category.object).width("auto")}e("#rw_category_menu").on("loaded",function(){RWJS.applyTooltip("#rw_category_menu ul > li",{gravity:"n"})});RW.category.object.trigger("loaded");AJS.$(RW.category.object).trigger("loaded");AJS.trigger("rw-categories:menu-loaded",[RW.category.object,j.toJSON()])}});RW._getCategories=function(){return j}}});function d(){var j=function(l,m,k){if(RW.Keyable.prevItem){RW.startKeyable(l.$("#rw_category_dropdown_container"),l.printedColumnLayout,"category_dropdown_menu",RW.Keyable.prevItem)}if(m.toJSON){m=m.toJSON()}if(m.canEdit===true){h(f,m)}else{g(f,m)}a(m.canEdit)};RWJS.PubSub.on("category:inject-users",j);RWJS.PubSub.on("category-collapse:closed",function(l,m,k){AJS.trigger("rw-categories:category-closed",[l.$el,m.toJSON()])});RWJS.PubSub.on("category:dropdown-open",function(o,n){var l=o.get("nameKey");RWJS.removeTooltip();if(!i.isEmpty(RW.Users.categories)&&RW.Users.categories.get(l)&&RW.Users.categories.get(l).get("visible")){n.addClass("rw_has_user_category");var m=e('<div id="rw_category_dropdown_users"></div>');n.append(m);m.html(RWJS.Templates.Utils.loader({size:"medium"}));var k=RW.Users.categories.get(l);k.fetch({data:{type:k.get("type"),rolesOnly:k.get("rolesOnly")},success:function(){var p=new RW.Views.UserCategory.UserCategoryInline({model:k});m.html(p.render());Confluence.Binder.userHover()}})}if(o.get("canEdit")){h(f,o.toJSON())}else{g(f,o.toJSON())}a(o.get("canEdit"));AJS.trigger("rw-categories:category-dropdown-open",[n,o.toJSON()])});RWJS.PubSub.on("category:dropdown-closed",function(k,l){AJS.trigger("rw-categories:category-dropdown-closed",[k.$el,l.toJSON()])})}function b(){var k={};var j=e("#rw_category_menu_parameters");k.dropDownDisabled=e("#rw_category_dd_disabled",j).html()==="true";k.dropDownlayout=e("#rw_category_dd_layout",j).html();k.dropDownContentSize=j.data("dropDownContentSize");k.showCategoryLogo=e("#rw_show_category_logo",j).html()==="true";k.showSpaceLogo=e("#rw_show_space_logo",j).html()==="true";k.showSpaceIcon=e("#rw_show_space_icon",j).html()==="true";k.activeCategoryKey=e("#rw_active_category_key",j).html();k.isDashboard=e("#rw_is_dashboard",j).html()==="true";k.minColumnWidth=e("#rw_min_column_width",j).html();k.excludeArchivedSpaces=e("#rw_exclude_archived_spaces",j).html()==="true";k.isUsingManualPermissions=e("#rw_manual_permissions",j).html()==="true";k.disabledSubdashboards=e("#rw_disable_subcategory_dashboards",j).html()==="true";k.disabledDashboards=e("#rw_disable_category_dashboards",j).html()==="true";k.version=e("#rw_version",j).html();if(typeof k.disabledSubdashboards=="string"){k.disabledSubdashboards=(k.disabledSubdashboards==="true")}RW.category.collapsedSubCategories=k.collapsedSubCategories=e("#rw_sub_category_collapsed",j).html()==="true";if(!k.dropDownlayout||k.dropDownlayout==""){k.dropDownlayout="dynamic_column"}if(k.isDashboard===true){e("#rw_dashboard_link",RW.category.object).addClass("rw_active")}return k}function g(k,j){if(!i.isEmpty(RW.Users.categories)&&RW.Users.categories.get(j.nameKey)!==undefined){k.push(j)}if(j.subCategories!==undefined){i.each(j.subCategories,function(l){g(k,l)})}}function h(k,j){k.push(j);if(j.subCategories!==undefined){i.each(j.subCategories,function(l){h(k,l)})}}function a(j){f=i.uniq(f,function(k){return k.nameKey});i.each(f,function(m){var l=e("#rw_sub_category_key_"+m.nameKey+" > h2");if(!i.isEmpty(RW.Users.categories)&&!l.hasClass("rw_has_user_category")){var k=RW.Users.categories.get(m.nameKey);if(k!==undefined&&k.get("visible")==true){var n=new RW.Views.UserCategory.UserCategoryButtonView({categoryKey:m.nameKey,tooltip:"Users"});e("#rw_sub_category_key_"+m.nameKey+" > h2 .rw_sub_category_link").append(n.render());e("#rw_sub_category_key_"+m.nameKey+" > h2").addClass("rw_has_user_category")}else{if(j){var n=new RW.Views.UserCategory.UserCategoryButtonView({categoryKey:m.nameKey,tooltip:"Manage users"});e("#rw_sub_category_key_"+m.nameKey+" > h2 .rw_sub_category_link").append(n.render());l.addClass("rw_has_user_category");l.addClass("rw_hidden_mode")}}}});RWJS.applyTooltip("#rw_category_dropdown_container .rw_user_category_link",{gravity:"n"})}})(RWJS.$,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/pages/attachments-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(d){RW.inAttachments=false;var c=false;var a;AJS.toInit(function(){d("#rw_attachment_dialog_button").click(RW.showAttachments)});function b(){var f=contextPath+"/pages/popup/view-attachments.action?pageId="+AJS.params.pageId;var e=RWJS.openIframeDialog(f,"Attachments","",true);e.addButton("Done",function(){e.remove();RWJS.hideLoader()});e.show();return e}RW.showAttachments=function(){if(AJS.params.pageId!=undefined){b()}return false};RW.hideAttachments=function(){RW.inAttachments=false;a.remove();RW.quitKeyable();return false}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/pages/fullscreen-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(c){RW.inFullscreen=false;var a=false;var d=function(e){e.stopPropagation()};var b;AJS.toInit(function(){c("#rw_open_fullscreen").click(RW.openFullscreen);c("#rw_close_fullscreen").click(RW.closeFullscreen);if(RW.storage.getValueAsBoolean("in-fullscreen")){c("#rw_open_fullscreen").trigger("click")}});RW.openFullscreen=function(){if(c("#rw_main_column").length!=0){RW.inFullscreen=true;if(c("#rw_side_menu").length>0){if(c("#rw_wrapper").hasClass("rw_has_side_menu")){a=true;c("#rw_wrapper").removeClass("rw_has_side_menu")}c("#rw_side_menu").hide()}c("#rw_main_column").addClass("rw_in_fullscreen");c("#rw_open_fullscreen").hide();c("#rw_close_fullscreen").show();if(!c("#rw_main #rw_fullscreen_bg").length){b=c('<div id="rw_fullscreen_bg"></div>');c("#rw_main").append(b)}if(c("#main-header").hasClass("rw_fixed_header")){AJS.$("#rw_editpage_shortcut").click();if(sessionStorage&&sessionStorage.viewPort){var f=JSON.parse(sessionStorage.viewPort);var e=f.offset;window.scrollTo(0,e);AJS.$(window).trigger("resize.confluence-fixed-headers-responsive")}}else{window.scroll(0,0)}RW.storage.setValue("in-fullscreen",true);AJS.trigger("rw-page:fullscreen-toggle",[c("#rw_main_column"),true])}};RW.closeFullscreen=function(){RW.inFullscreen=false;if(c("#rw_side_menu").length>0){if(a){c("#rw_wrapper").addClass("rw_has_side_menu")}c("#rw_side_menu").show()}c("#rw_main_column").removeClass("rw_in_fullscreen");if(b&&b.length){b.remove()}c("#rw_open_fullscreen").show();c("#rw_close_fullscreen").hide();AJS.$(window).trigger("resize.confluence-fixed-headers-responsive");RW.storage.setValue("in-fullscreen",false);AJS.trigger("rw-page:fullscreen-toggle",[c("#rw_main_column"),false])}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/global/models/favorite-spaces-model-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}(function(c,d,b,a){RW.Models.FavoriteSpacesModel=d.Model.extend({url:function(){return contextPath+"/rest/originaltheme/1.0/favourite/space"}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/global/models/favorite-pages-model-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}(function(c,d,b,a){RW.Models.FavoritePagesModel=d.Model.extend({url:function(){return contextPath+"/rest/originaltheme/1.0/favourite/page"}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/global/views/favorite-spaces-view-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(c,d,b,a){RW.Views.FavoriteSpacesView=d.View.extend({events:{"click a":"linkClicked","click .rw_item_favourite":"favouriteClicked"},initialize:function(e){},render:function(f){var e=c(RW.Templates.Favourite.spaces({title:"Spaces & Blogs",model:this.model.toJSON(),remoteUser:RW.remoteUser}));this.$el.html(e);return this.$el},linkClicked:function(f){if(c(f.currentTarget).closest(".rw_favourite_container").hasClass("rw_key_nav")){window.location=contextPath+"/display/"+c(f.currentTarget).data("space-key");return false}else{return true}},favouriteClicked:function(f){RW.addOrRemoveFav(c(f.currentTarget).parent().data("space-key"),c(f.currentTarget));return false}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/global/views/favorite-pages-view-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(c,d,b,a){RW.Views.FavoritePagesView=d.View.extend({events:{"click a":"linkClicked","click .rw_item_favourite":"favouriteClicked"},initialize:function(e){},render:function(f){var e=c(RW.Templates.Favourite.pages({title:"Pages",model:this.model.toJSON(),remoteUser:RW.remoteUser,versionChecker:RW.versionChecker}));this.$el.html(e);return this.$el},linkClicked:function(f){if(c(f.currentTarget).closest(".rw_favourite_container").hasClass("rw_key_nav")){window.location=c(f.currentTarget).data("url");return false}else{return true}},favouriteClicked:function(f){RW.addOrRemoveFavPage(c(f.currentTarget).parent().data("page-id"),c(f.currentTarget));return false}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/global/favorite-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(g){RW.inFavPageAndSpace=false;var b;var a;var f;var d;var e;var c;RW.showFavourite=function(h){if(d==undefined){d=g("<div><h2></h2><ul></ul></div>")}if(f==undefined){if(RW.versionChecker.comparedTo59>=0){f=new RW.ui.popup("rw_favorite_popup","My Work","mywork")}else{f=new RW.ui.popup("rw_favorite_popup","Favourite","star")}f.closeButton.click(RW.hideFavourite);f.obj.click(function(p){p.stopPropagation()})}a=f.container;if(RW.versionChecker.comparedTo59>=0){RW.closePopups();f.show();RW.inFavPageAndSpace=true;var o=g("<div></div>");a.append(o);var i=new RW.Models.MyWorkMacroModel();var m=new RW.Views.MyWorkMacroView({el:o,model:i,index:10000,inPopup:true});m.render();f.hideLoader();setTimeout(function(){g(document).bind("click",RW.hideFavourite)},200)}else{RW.closePopups();f.show();RW.inFavPageAndSpace=true;a.addClass("rw_favourite_container");var k=g('<div class="rw_favourite_spaces">');var l=g('<div class="rw_favourite_pages">');a.append(k);a.append(l);var j=new RW.Models.FavoriteSpacesModel();var n=new RW.Models.FavoritePagesModel();j.fetch({success:function(){var p=new RW.Views.FavoriteSpacesView({el:k,model:j});p.render();n.fetch({success:function(){var r=new RW.Views.FavoritePagesView({el:l,model:n});r.render();var s=g("li",a);var q=g(s[0]);if(h!=undefined&&h.which==1){q=null}RW.startKeyable(a,"multi_column",null,q);f.hideLoader();g(document).bind("click",RW.hideFavourite)}})}})}RWJS.PubSub.trigger("favourite-popup:show")};RW.hideFavourite=function(){f.hide();f.clear();RW.inFavPageAndSpace=false;g(document).unbind("click",RW.hideFavourite);RW.quitKeyable();RWJS.PubSub.trigger("favourite-popup:hide")}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/global/menubar-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(g){var d;var f;var c;var b;AJS.toInit(function(){d=g("#rw_menu_bar_wrapper");f=g("#rw_menu_bar_button",d);c=g("#rw_menu_bar_icon",d);if(c.length>0){var h=g(".space-logo",c);if(h.length>0){h.attr("title",h.attr("data-name")).click(function(){window.location=contextPath+"/display/"+g(this).attr("data-key")})}}if(f.length>0){b=g("#rw_menu_bar_content",d);f.click(function(){a();return false});if(d.hasClass("rw_closed")){f.attr("title","Show menu")}else{f.attr("title","Hide menu")}}d.click(function(i){if(g(i.currentTarget).hasClass("rw_closed")){a()}})});function e(h){g.ajax({url:contextPath+"/rest/originaltheme/1.0/setting/user/menubar/state?value="+h,type:"PUT",dataType:"json",success:function(i){},error:function(i){}})}function a(){if(d.hasClass("rw_closed")){f.attr("title","Hide menu");e("open")}else{f.attr("title","Show menu");e("closed")}d.toggleClass("rw_closed");g("#rw_wrapper").toggleClass("rw_content_menu_open")}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/globalmenu/globalmenu-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(e,l){RW.inTopMenu=false;var m;var k;var d;var f;var o;var h=false;var a;var c;AJS.toInit(function(){e("#rw_top_menu_button").click(p);if(!((typeof Confluence==="undefined")||Confluence.KeyboardShortcuts.enabled!==false)){e("#rw_top_menu_button").removeAttr("title")}if(e("#rw_side_menu").length>0){j();b()}if(e("#notifications-anchor").children().length===0||(e("#notifications-anchor").children().length==1&&l.isEmpty(e("#notifications-anchor").children().attr("class")))){e("#notifications-anchor").parent().remove()}});function p(){if(RWA.Category.hideCategory){RWA.Category.hideCategory()}if(RW.inTopMenu){RW.hideTopMenu()}else{RW.showTopMenu()}return false}function j(){if(!h){h=true;m=e("<ul></ul>");k=e(RW.Templates.iconTextItem());a=e(RW.Templates.popupLoader());f=e("#rw_top_menu_items_container");o=e("#rw_top_menu_button");c=e('<li><a id="rw_custom_links" href="#" title="" class="rw_has_dd rw_tooltip" data-dd="rw_custom_links-dd" data-tooltip=""><span class="rw_item_icon rw_iconfont_more"></span></a><nav id="rw_custom_links-dd" class="rw_side_menu_dd" data-owner="rw_custom_links"><div class="rw_section"><ul></ul></div></nav></li>')}}function i(q){RWJS.scrollToElementWithOffset(e("#rw_top_menu"),100);if(f.offset().left<0){f.css("left","0")}f.html(a.clone());e.ajax({url:contextPath+"/rest/originaltheme/1.0/topmenu",type:"GET",dataType:"json",success:function(u){f.html("");var s=false;if(u.defaultItems.length!=0){var w=m.clone();e.each(u.defaultItems,function(){w.append(g(this))});f.append(w);s=true}if(u.confluenceItems.length!=0){var y=m.clone();e.each(u.confluenceItems,function(){y.append(g(this))});f.append(y);s=true}if(u.customItems.length!=0){var x=m.clone();if(s){x.addClass("rw_section")}e.each(u.customItems,function(){x.append(g(this))});f.append(x)}if(RW.isConfluenceAdministrator){var r=m.clone();if(s){r.addClass("rw_section")}var v=k.clone();v.css("opacity","0.6");e("span.rw_item_content",v).html("Manage global menu");e("a",v).attr("title",RWJS.htmlDecode("Manage global menu"));RWJS.bindLink(e("a",v),contextPath+"/admin/topmenu/edit-topmenu.action",false,f);r.append(v);f.append(r)}if(q){var t=e("li",f);RW.startKeyable(f,null,null,e(t[0]))}else{RW.startKeyable(f,null,null)}e(document).bind("click",RW.hideTopMenu)},error:function(r){if(r.status!=0){console.log(r.status+" "+r.statusText);RW.hideTopMenu()}}})}function g(s){var r=k.clone();var q;var u=e("a",r);e("span.rw_item_content",r).html(s.name);n(u,s);if(s.id){u.attr("id",s.id)}if(s.type==="custom"){if(s.icon!=null){e("span.rw_item_icon img",r).attr("src",s.icon).show()}else{e("span.rw_item_icon",r).addClass("rw_no_icon_link")}q=s.url}else{if(s.iconClass){e("span.rw_item_icon",r).addClass(s.iconClass)}else{e("span.rw_item_icon",r).addClass("rw_"+s.nameKey)}q=s.url;if(s.id){u.addClass("rw_item_"+s.id)}else{u.addClass("rw_item_"+s.nameKey)}}if(s.target==="_blank"){e("span.rw_item_content",r).addClass("rw_blank")}if(s.nameKey==="activity_popup"){u.click(RW.showActivitiyStream)}else{if(s.nameKey==="favourite_content"){u.click(RW.showFavourite)}else{var t=false;if(s.target==="_blank"){t=true}RWJS.bindLink(u,q,t,f)}}return r}function n(r,q){e("#rw_search_popup_button").attr("title","Search (/)");if(q.nameKey==="favourite_content"){if(RW.versionChecker.comparedTo59>=0){r.attr("title","My Work (M)")}else{r.attr("title","Favourite ( Type \'M\', shift + m )")}}else{if(q.nameKey==="activity_popup"){r.attr("title","Activity stream (A)")}else{if(q.tooltip){r.attr("title",RWJS.htmlDecode(q.tooltip))}else{r.attr("title",RWJS.htmlDecode(q.name))}}}}function b(q){var r=e("#rw_side_menu_container");e.ajax({url:contextPath+"/rest/originaltheme/1.0/topmenu",type:"GET",dataType:"json",success:function(t){var v=false;if(t.defaultItems.length!=0){e.each(t.defaultItems,function(){e(">ul:last-child",r).append(g(this))})}var u=m.clone();r.append(u);if(t.confluenceItems.length!=0){e.each(t.confluenceItems,function(){if(this.id==="space-directory-link"||this.id==="confluence-questions-link"||this.nameKey==="header-teamcalendars-link"||this.id==="people-directory-link"||this.nameKey==="rw-blogs-header-link"){u.append(g(this))}else{v=true;e("ul",c).append(g(this))}})}if(t.customItems.length!=0){e.each(t.customItems,function(){if(this.icon===undefined){v=true;e("ul",c).append(g(this))}else{u.append(g(this))}})}var s=new RW.Views.SideMenu();RW.sideMenu=s;var w=e("#rw_side_menu");s.$el=w;s.start(w);if(v){u.append(c);RW.sideMenu.bindDDEvents(e("a.rw_has_dd",c))}RWJS.PubSub.trigger("topmenu:loaded")},error:function(s){if(s.status!=0){console.log(s.status+" "+s.statusText);RW.hideTopMenu()}}})}RW.hideTopMenu=function(){f.hide();RW.inTopMenu=false;o.removeClass("rw_active active");RW.quitKeyable();e(document).unbind("click",RW.hideTopMenu)};RW.showTopMenu=function(q){j();if(f.length>0){RW.closePopups();o.addClass("rw_active active");f.show();RW.inTopMenu=true;i(q)}}})(RWJS.$,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/search/search-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(b,d,a){AJS.toInit(function(){b("#rw_search_query").val("Search").originalThemeSearch(true);b("#rw_blogpost_query").originalThemeSearch(false)});b.fn.originalThemeSearch=function(B){inSearchResult=false;var C=null;var n=false;var j=null;var E=false;var y;var w;var A=b(this);var f;var e;var m;var s;var t;var q=false;var D=b(this);var l=false;A.focus(h);if(B){AJS.whenIType("gg").execute(function(){b("#rw_search_query").trigger("focus")})}function h(){j=undefined;if(!n){n=true;e=b(this).closest(".rw_search");m=b(".rw_search_form",e);s=b(".rw_search_result_container",e);var G=b(".rw_search_parameters",e);if(G.length>0){t="";l=false;b("input",G).each(function(){t+="&"+b(this).attr("name")+"="+b(this).attr("value");if(b(this).attr("name")==="spaceKey"){l=true}})}A.val("");m.keypress(function(H){if(H.which==13){return false}});A.keyup(function(H){if(H.which==13){if(b("li.rw_selected",s).length===0&&A.val().length>0){m.submit()}if(A.val().length>0){p()}H.stopPropagation()}else{if(H.which==39||H.which==37){}else{if(H.which==27){if(inSearchResult){f()}A.blur();if(RW.inSearch){RW.hideSearch()}if(RW.inStickyBar){RW.hideSearchStickyBar()}}else{r();if(b(this).val().length>1){x(b(this).val())}else{if((b(e.context).attr("id")=="rw_search_popup_query"||b(e.context).attr("id")=="rw_search_query")){if(b("#rw_more_recently_viewed").length==0&&b(this).val().length==0){z();k()}else{j=undefined;if(b(this).val().length==1){f()}}H.stopPropagation()}else{j=undefined;f()}}}}}});b(this).click(function(H){H.stopPropagation()});if(e.data("custom")){var F=e.parent();b("#rw_wrapper").append(s);s.css("top",F.offset().top+F.height()-b("#rw_main").offset().top);s.css("left",F.offset().left)}}if(b(e.context).attr("id")=="rw_search_query"){RW.closePopups();RW.hideMainSearchResult=function(){f()}}if(b(this).val().length==0&&(b(e.context).attr("id")=="rw_search_popup_query"||b(e.context).attr("id")=="rw_search_query")){k()}}function x(F){if(j!=F){j=F;if(E===false){v(j)}}}function v(G){E=true;var F="query="+encodeURIComponent(G);if(typeof t!="undefined"){F+=t}D.addClass("rw_loading");b.ajax({url:contextPath+"/json/contentnamesearch.action",type:"GET",data:F,dataType:"json",success:function(H){if(typeof H.errorMessage==="undefined"&&H.statusMessage==null){z();D.removeClass("rw_loading");b.each(H.contentNameMatches,function(I){if(I+1===H.contentNameMatches.length){i(this,true)}else{i(this,false)}});if(j!=G){v(j)}else{E=false}u();if(RW.searchMode=="confluence"){RW.startKeyable(s,null,"search")}else{if(G.indexOf("*")>-1){RW.startKeyable(s,null,"search",s.find(".search-for").parent())}else{RW.startKeyable(s,null,"search",s.find("ul:first-child li:first-child"))}}}else{if(H.statusMessage!=null){s.html("<div class='rw_padding'>"+H.statusMessage+"</div>");u();E=false}else{s.html("<div class='rw_padding'>"+H.errorMessage+"</div>");u();E=false}}},error:function(H){}})}function r(){if(typeof y==="undefined"){y=b("<ul></ul>")}if(typeof w==="undefined"){w=b(RW.Templates.searchItem())}}function z(){s.html("")}function u(){if(!inSearchResult){inSearchResult=true;s.show();b(document).bind("click",f)}}function i(G,F){var H=y.clone();b.each(G,function(J){var I=["admin-item","calendar-item","question-item"];if(!l||a.indexOf(I,this.className)===-1){H.append(o(this))}});if(F){H.addClass("rw_last_section")}s.append(H)}function p(){if(b("body").hasClass("rw_popup_design_confluence")){s.html(RWJS.Templates.Utils.loader({size:"medium"}))}else{s.html(RWJS.Templates.Utils.loader({size:"medium",color:"light"}))}}function o(I){var G=w.clone();var F=I.href;b("span.rw_search_item_title",G).html(I.name);if(I.spaceName!=undefined){b("span.rw_search_item_space",G).html(I.spaceName)}else{b("span.rw_search_item_space",G).remove()}if(I.className==="admin-item"){b("span.rw_search_item_title",G).addClass("aui-iconfont-configure")}b("a",G).addClass(I.className);if(RW.userDashboardRedirection&&F.indexOf("/display/~")>=0){var H=F.substr(F.indexOf("~")+1,F.length);if(H.indexOf("/")==-1){F=contextPath+"/users/view-user-dashboard.action?username="+F.substr(F.indexOf("~")+1,F.length)}}if(I.className=="search-for"){F=g(F)}b("a",G).attr("href",F).click(function(J){q=true;if(s.hasClass("rw_key_nav")){window.location=F;J.stopPropagation();return false}else{return true}});if(I.icon!=null){G.prepend("<img src='"+I.icon+"' height='16px' />")}return G}function f(){if(!q){inSearchResult=false;z();s.hide();RW.quitKeyable();b(document).unbind("click",f)}else{q=false}}function g(F){if(t!==undefined){F=F+t}return F}function k(){if(b("#rw_more_recently_viewed",s).length===0&&RW.remoteUser!=undefined){r();var F=new c();D.addClass("rw_loading");F.fetch({success:function(){D.removeClass("rw_loading");var G=[];a.each(F.toJSON(),function(J){var I={};I.id=J.id.toString();I.href=contextPath+J.url;I.className="content-type-"+J.type;I.name=RWJS.htmlEncode(J.title);I.spaceName=RWJS.htmlEncode(J.space);I.spaceKey="";G.push(I)});if(G.length>0){s.html('<span class="rw_search_result_title">'+"Recently viewed pages"+"</span>");i(G,false);u();var H=RW.Templates.moreRecentlyViewed();s.append(H);RW.startKeyable(s,null,"search");b("#rw_more_recently_viewed").bind("click",function(){AJS.$("#view-user-history-link").click();RYQ.util.analytics.trackQuickNavRecentlyDialogOpen()})}}})}}};var c=d.Model.extend({url:function(){return contextPath+"/rest/recentlyviewed/1.0/recent?limit=7"}})})(RWJS.$,RWJS.Backbone,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/blogs/views/edit-blog-view.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,a,d,b){RW.Views.EditBlogView=RWJS.ReactiveView.extend({autofill:true,inputs:{"#rw_form_blogspace":"blogspace","#rw_form_blogportal":"blogPortal","#rw_form_name":"name","#rw_form_description":"description","#rw_form_allowsharing":"allowSharing"},add:undefined,popupView:undefined,submit:function(){if((!this.model.get("name")&&this.model.get("blogPortal"))||!this.model.get("nameKey")){RWJS.message({type:"error"},"Required fields are empty");return false}var e=this;this.model.save({},{success:function(){RWJS.message({type:"success"},"Your changes have been saved");location.reload()},error:function(){RWJS.message({type:"error"},"An error has occurred. Your changes are not saved.");if(e.popupView){e.popupView.remove()}}});return false}})})(RWJS.jQuery,RWJS._,RWJS.Backbone,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/blogs/views/create-new-blog-space-view-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,a,d,b){RW.Views.CreateNewBlogSpaceView=d.View.extend({popupView:undefined,onSuccess:undefined,events:{"keyup #rw_form_blog_space_key":"validateBlogKey"},initialize:function(e){if(e&&e.onSuccess){this.onSuccess=e.onSuccess}},render:function(){this.$el.html(RW.Templates.Blogs.createBlogSpace());var e=this.$("#rw_form_blog_space_key");e.generateFrom(this.$("#rw_form_blog_space_title"),{uppercase:false,maxKeyLength:255,maxNameLength:255,timeoutMS:100,validationCallback:function(){e.keyup()}});return this},popUp:function(){this.popupView=new AJS.Dialog({id:"rw_edit_blog_form",closeOnOutsideClick:false,width:600});this.popupView.addHeader("Create blog");this.render();this.popupView.addPanel("",this.$el,"");var e=this;this.popupView.addButton("Save",function(){e.submit()},"aui-button aui-button-primary rw_margin_right");this.popupView.popup.element.find(".button-panel-button").removeClass("button-panel-button");this.popupView.addCancel("Cancel",function(){if(e.add){e.model.collection.remove(e.model)}e.popupView.remove()});this.popupView.show()},submit:function(){var e=this;var i=this.$("#rw_form_blog_space_title").val();var k=this.$("#rw_form_blog_space_key").val();var j=this.$("#rw_form_blog_space_description").val();var h=this.$("#rw_form_blog_space_allow_sharing").is(":checked");if(i.length<1||k.length<1){RWJS.mxessage({type:"error"},"Required fields are empty");return false}var g=new RW.Models.Blog({name:i,nameKey:k,description:j,allowSharing:h,blogPortal:true,blogspace:true});RWJS.showLoader();var f=function(){RWJS.message({type:"error"},"An error has occurred. Your changes are not saved.");if(e.popupView){e.popupView.remove()}};c.when(g.createBlogSpace(undefined,{error:function(l,m){if(m.status===403){RWJS.message({type:"error"},"A space with this space key already exists.")}else{RWJS.message({type:"error"},"An error has occurred. Your changes are not saved.")}RWJS.hideLoader()}})).done(function(){RWJS.hideLoader();RWJS.message({type:"success"},"Your changes have been saved");if(e.popupView){e.popupView.remove();e.onSuccess(g)}})},validateBlogKey:function(){var h=new c.Deferred();var f=new RegExp("^[a-zA-Z0-9]+$");if(this.$("#rw_form_blog_space_key").val()!==""&&f.exec(this.$("#rw_form_blog_space_key").val())===null){this.$("#rw_form_blog_space_key").parent().addClass("rw_error");this.$("#rw_form_blog_space_key_error").html("Name keys may only consist of ASCII letters or numbers (A-Z, a-z, 0-9)");this.enableOrDisableSaveButton();h.resolve(false)}var i=this.$("#rw_form_blog_space_key").val();var g=true;if(this.newBlogKey!==i&&i&&i.length>0){this.newBlogKey=i;var e=this;c.ajax({type:"GET",url:contextPath+"/ajax/spaceavailable.action?key="+i.toLowerCase(),success:function(j){if(j.available!==true){e.$("#rw_form_blog_space_key").parent().addClass("rw_error");e.$("#rw_form_blog_space_key_error").html(j.message)}else{e.$("#rw_form_blog_space_key").parent().removeClass("rw_error")}g=j.available;e.enableOrDisableSaveButton()}}).always(function(){h.resolve(g)})}else{h.resolve(g)}return h},enableOrDisableSaveButton:function(){try{var e;if(this.$("#rw_form_blog_space_key").parent().hasClass("rw_error")){e=this.popupView.page[0].buttonpanel;c(".aui-button-primary",e).disable()}else{e=this.popupView.page[0].buttonpanel;c(".aui-button-primary",e).enable()}}catch(f){console.debug("Error enabling/disabling save button")}}})})(RWJS.jQuery,RWJS._,RWJS.Backbone,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/blogs/views/space-admin-edit-blog-view.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,a,d,b){RW.Views.EditSpaceBlog=RW.Views.EditBlogView.extend({blogTheme:undefined,blogPortalEnabled:true,hasChangedTheme:false,events:{"click #rw_form_blogspace":"toggleButtonClicked","click .rw_save_button":"saveBlogSettings","click .rw_edit_blog_theme_button":"editBlogThemeClicked","click .rw_publish_button":"publishThemeClicked"},initialize:function(e){if(e){if(e.model){this.model=e.model}if(e.blogTheme){this.blogTheme=e.blogTheme}this.blogPortalEnabled=e.blogPortalEnabled}this.listenTo(this.model,"change:blogPortal",this.render)},render:function(){var e=this;this.$el.html(RW.Templates.Blogs.spaceBlogSettings({model:this.model.toJSON(),blogTheme:this.blogTheme.toJSON(),blogPortalEnabled:this.blogPortalEnabled}));this.hasChangedTheme=false;return this},saveBlogSettings:function(f){var g;if(this.hasChangedTheme){if(this.blogTheme.get("published")===true){g=this.blogTheme.publish()}else{g=this.blogTheme.unpublish()}g.always(a.bind(function(){this.submit()},this))}else{this.submit()}},editBlogTheme:function(){var e=this;if(this.model.get("themeId")===undefined||this.model.get("themeId")===0){e.blogTheme.save({},{url:e.blogTheme.url()+"?key="+e.model.get("nameKey"),success:function(){e.model.set("themeId",e.blogTheme.get("id"));e.model.save({},{success:function(){window.location=contextPath+"/themeeditor/edit-blog-theme.action?atl_token="+AJS.Meta.get("atl-token")+"&themeId="+e.model.get("themeId")+"&blogKey="+e.model.get("nameKey")}})}})}else{window.location=contextPath+"/themeeditor/edit-blog-theme.action?atl_token="+AJS.Meta.get("atl-token")+"&themeId="+e.model.get("themeId")+"&blogKey="+e.model.get("nameKey")}},toggleBlogSpace:function(){var e=this;if(this.model.get("blogspace")){if(confirm("Are you sure you want to deactivate blog space. All blog specific settings will be removed. This space will become a regular Confluence space.")){this.model.set("blogspace",false);this.model.destroy().then(function(f){RWJS.showLoader();location.reload()})}}else{this.model.save({blogspace:true}).then(function(f){e.model.fetch().then(function(g){RWJS.showLoader();location.reload()})})}},publishThemeClicked:function(f){this.blogTheme.set("published",c(f.currentTarget).is(":checked"));this.hasChangedTheme=true},toggleButtonClicked:function(f){this.toggleBlogSpace()},editBlogThemeClicked:function(f){this.editBlogTheme()}})})(RWJS.jQuery,RWJS._,RWJS.Backbone,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/blogs/blog-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(B){if(typeof RW.blogs==="undefined"){RW.blogs={}}var R;var s;var E;var O;var q;var k;var C;var v;var o;var d;var Q;var K;var j;var L;var S=null;var b;var c=false;var N=false;var t=undefined;var i={padding:0,speedIn:500,speedOut:500,overlayShow:true,overlayOpacity:0.5,dataAttr:"image-src"};var D=new Array();AJS.toInit(function(){if(B("#rw_blog_space_settings").length>0){t=B("#rw_blog_space_settings").data()}if(B("#rw_blogpost_nav").length>0){p()}if(B("#rw_blog_calendar").length>0){G()}if(B("#rw_wrapper.rw_blog_portal").length>0){g()}if(B("#rw_create_blogpost_dialog_button").length>0){H()}if(B("#rw_blog_menu_button").length>0){z()}if(B("#rw_blog_posts").length>0){T(B("#rw_blog_posts"),t.blogKeys,t.blogAuthor,0,10)}if(B("#rw_blog_menu").length>0){I(B("#rw_blog_menu"))}if(B("#rw_blog_contributors").length>0){U(B("#rw_blog_contributors"))}if(B("#rw_wrapper").hasClass("rw_blog_space")){A()}var aa=B("#content").find(".rw_space_blog_settings");var Z=aa.data();if(aa.length>0){RWJS.showLoader();var Y=new RW.Models.Blog({nameKey:AJS.Meta.get("space-key")});B.when(Y.fetchBlog()).done(function(){RWJS.hideLoader();var ab;if(Y.get("themeId")===undefined||Y.get("themeId")===0){ab=new RW.Models.ThemeEditor.BlogTheme(RW.Recipes.BlogDefaultTheme);ab.set("name",Y.get("name"));var ac=new RW.Views.EditSpaceBlog({model:Y,el:aa,blogTheme:ab,blogPortalEnabled:Z.blogPortalEnabled});ac.render()}else{ab=new RW.Models.ThemeEditor.BlogTheme({id:Y.get("themeId")});ab.fetch({success:function(){var ad=new RW.Views.EditSpaceBlog({model:Y,el:aa,blogTheme:ab,blogPortalEnabled:Z.blogPortalEnabled});ad.render()}})}})}});function g(){if(B("#rw_share_navigation").length>0){var Y=B("#shareContentLink");Y.appendTo("#rw_share_navigation");Y.click(function(){RWJS.scrollToElement(B("#rw_share_navigation"))})}if(B("#rw_blog_chooser").length>0){F()}if(B("#rw_blog_admin_button").length>0){e()}B("#rw_blogpost_permalink").click(function(Z){if(!S){X()}S.show();B("#link-page-popup-form #link-popup-field-tiny-link").select();return AJS.stopEvent(Z)});RW.initLabelClickEvent(B("#labels-section .label-list"),true);B("#show-resolved-comments").live("click",function(){B("#rw_blog_admin_button").trigger("click")})}function A(){if(B("#rw_blog_watch_start").length>0){B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/watch",type:"GET",dataType:"json",data:{key:B("#rw_space_key").html()},success:function(Y){if(Y==true){B("#rw_blog_watch_stop").show()}else{B("#rw_blog_watch_start").show()}},error:function(Y){if(Y.status!=0){Q.html("<div class='rw_warning_box'>"+Y.status+" "+Y.statusText+"</div>").show()}}})}B("#rw_blog_watch_start").click(function(Y){B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/watch/add?key="+B("#rw_space_key").html(),type:"PUT",dataType:"json",success:function(Z){B("#rw_blog_watch_start").hide();B("#rw_blog_watch_stop").show()},error:function(Z){if(Z.status!=0){Q.html("<div class='rw_warning_box'>"+Z.status+" "+Z.statusText+"</div>").show()}}});Y.preventDefault()});B("#rw_blog_watch_stop").click(function(Y){B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/watch/remove?key="+B("#rw_space_key").html(),type:"PUT",dataType:"json",success:function(Z){B("#rw_blog_watch_stop").hide();B("#rw_blog_watch_start").show()},error:function(Z){if(Z.status!=0){Q.html("<div class='rw_warning_box'>"+Z.status+" "+Z.statusText+"</div>").show()}}});Y.preventDefault()})}function p(){Q=B("#rw_blogpost_nav");j=B("#rw_blogpost_id",Q).html();B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/post/"+j+"/navigation",type:"GET",dataType:"json",success:function(Y){if(typeof(Y.links)!=="undefined"&&Y.links.length>0){B.each(Y.links,function(){var aa=B(RWJS.Templates.Utils.iconButton({cssClass:this.key,title:RWJS.htmlDecode(this.title)}));var Z=this.url;aa.click(function(){window.location=Z});Q.append(aa)})}},error:function(Y){if(Y.status!=0){Q.html("<div class='rw_warning_box'>"+Y.status+" "+Y.statusText+"</div>").show()}}})}function G(){var Z=B("#rw_blog_calendar_wrapper");s=B(RW.Templates.Velocity.blogCalendarItem());R=B(RW.Templates.Velocity.blogCalendarSection());j=B("#rw_blogpost_id",Z).html();d=B("#rw_blog_calendar",Z);L=B("#rw_space_key",Z).html();var aa;var ac;if(B("#rw_calendar_year",Z).length>0){aa=B("#rw_calendar_year",Z).html()}if(B("#rw_calendar_month",Z).length>0){ac=B("#rw_calendar_month",Z).html()}if(typeof(j)==="undefined"){j=""}var ab=R.clone();ab.addClass("rw_blog_calendar_months");var Y=B(RWJS.Templates.Utils.loader({bg:"gray",size:"medium",corners:true}));ab.append(Y);d.append(ab);B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/calendar",data:{key:L,id:j,month:ac,year:aa},type:"GET",dataType:"json",success:function(ad){if(typeof(ad.months)!=="undefined"&&ad.months.length>0){Y.remove();y(ad,false,ab)}else{Y.remove();d.remove()}},error:function(ad){if(ad.status!=0){d.html("<div class='rw_warning_box'>"+ad.status+" "+ad.statusText+"</div>").show()}}})}function r(ab,aa,Z){Z.remove();var Y=B(RWJS.Templates.Utils.loader({bg:"gray",size:"small"}));B("ul.rw_blog_calendar_months",d).prepend(Y);B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/calendar/next",data:{key:L,month:aa,year:ab},type:"GET",dataType:"json",success:function(ac){Y.remove();if(typeof(ac.months)!=="undefined"&&ac.months.length>0){y(ac,true,B("ul.rw_blog_calendar_months",d))}else{B("li:first > a",d).addClass("rw_corners_top");B("li:last > a",d).addClass("rw_corners_bottom")}},error:function(ac){if(ac.status!=0){d.html("<div class='rw_warning_box'>"+ac.status+" "+ac.statusText+"</div>").show()}}})}function W(ab,aa,Z){Z.remove();var Y=B(RWJS.Templates.Utils.loader({bg:"gray",size:"small"}));B("ul.rw_blog_calendar_months",d).append(Y);B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/calendar/prev",data:{key:L,month:aa,year:ab},type:"GET",dataType:"json",success:function(ac){Y.remove();if(typeof(ac.months)!=="undefined"&&ac.months.length>0){y(ac,false,B("ul.rw_blog_calendar_months",d))}else{B("li:first > a",d).addClass("rw_corners_top");B("li:last > a",d).addClass("rw_corners_bottom")}},error:function(ac){if(ac.status!=0){d.html("<div class='rw_warning_box'>"+ac.status+" "+ac.statusText+"</div>").show()}}})}function a(ab,aa,Z){L=B("#rw_space_key").html();if(B("ul",Z).length===0){Z.toggleClass("rw_open");var Y=B(RWJS.Templates.Utils.loader({bg:"gray",size:"small"}));Z.append(Y);B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/calendar/"+ab+"/"+aa,data:{key:L},type:"GET",dataType:"json",success:function(ac){if(typeof(ac.posts)!=="undefined"&&ac.posts.length>0){m(ac.posts,Z)}Y.remove()},error:function(ac){if(ac.status!=0){Z.html("<div class='rw_warning_box'>"+ac.status+" "+ac.statusText+"</div>").show()}}})}else{w(Z)}}function w(Z){var Y=B("ul",Z);if(Y.length!=0){if(Y.is(":visible")){Y.hide()}else{Y.show()}Z.toggleClass("rw_open")}}function y(ac,ah,Z){var ag,ae,af,ab,Y=1;B.each(ac.months,function(){var aj=s.clone(),ai=this.year,ak=this.month;B("span",aj).html(this.title);B("a",aj).attr("title",this.title).click(function(){a(ai,ak,aj)}).addClass("rw_first_level");if(typeof(this.posts)!=="undefined"&&this.posts.length>0){aj.addClass("rw_open");m(this.posts,aj)}if(ah){Z.prepend(aj);if(Y==ac.months.length){ag=ai;ae=ak}}else{Z.append(aj);if(Y==1){ag=ai;ae=ak}if(Y==ac.months.length){af=ai;ab=ak}}Y++});if(ac.hasNext){var ad=s.clone();ad.addClass("rw_blog_calendar_next");B("span",ad).html("More");B("a",ad).click(function(){r(ag,ae,ad)}).addClass("rw_first_level");Z.prepend(ad)}if(ac.hasPrev){var aa=s.clone();aa.addClass("rw_blog_calendar_prev");B("span",aa).html("More");B("a",aa).click(function(){W(af,ab,aa)}).addClass("rw_first_level");Z.append(aa)}l()}function m(Z,Y){var aa=R.clone();B.each(Z,function(){var ac=s.clone();var ab=this.url;B("span",ac).html(this.title);B("a",ac).attr("title",RWJS.htmlDecode(this.title));ac.click(function(){window.location=ab});if(j==this.id){ac.addClass("rw_active")}aa.append(ac)});Y.append(aa)}function l(){B("li:first > a.rw_first_level",d).addClass("rw_corners_top");B("li:last > a.rw_first_level",d).addClass("rw_corners_bottom")}function F(){B("#rw_blog_chooser_button").click(u)}function u(){if(c){P()}else{f()}}function f(){c=true;if(q==undefined){q=B("<ul></ul>")}var Y=q.clone();if(k==undefined){k=B(RW.Templates.iconTextItem())}if(K==undefined){K=B("#rw_blog_chooser_items_container")}if(O==undefined){O=B(RW.Templates.popupLoader())}K.html("");K.show().append(O.clone());B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog",type:"GET",dataType:"json",success:function(Z){Z.blogs=_.sortBy(Z.blogs,"name");K.html("");if(typeof(Z.blogs)!=="undefined"&&Z.blogs.length>0){B.each(Z.blogs,function(){Y.append(V(this,false))})}else{var ab=B('<div class="rw_no_items rw_blogs rw_corners"><div>');ab.html("No blogs found");K.append(ab)}K.append(Y);if(t.canCreateBlogPermission){var aa=B('<ul class="rw_section"></ul>');aa.append(h());K.append(aa)}B(document).bind("click",P)},error:function(Z){B(document).bind("click",P);if(Z.status!=0){K.html("<div class='rw_warning_box'>"+Z.status+" "+Z.statusText+"</div>").show()}}})}function P(){K.hide();B(document).unbind("click",P);c=false}function V(ac,ad){var ab=ad&&ac.description?ac.description:undefined;var aa=ac.logoPath?contextPath+ac.logoPath:undefined;var Z=contextPath+"/blog/"+ac.nameKey;var Y=B(RW.Templates.Blogs.blogListElement({title:ac.name,tooltip:ac.name,url:Z,isActive:ac.nameKey===L,description:ab,imageSrc:aa,inPopup:ad}));B("[href]",Y).click(function(){if(ad){N=true}if(b!=undefined&&b.container.hasClass("rw_key_nav")){window.location=Z;if(ad){b.showLoader()}}});return Y}function h(){var Z="Create blog";var Y=B(RW.Templates.Blogs.blogListElement({title:Z,tooltip:RWJS.htmlDecode(Z),isActive:false,iconClass:"rw_iconfont_add"}));Y.click(function(){var aa=new RW.Views.CreateNewBlogSpaceView({onSuccess:function(ab){window.location=contextPath+"/blog/"+ab.get("nameKey")}});aa.popUp()});Y.css("opacity",0.6);return Y}function e(){B("#rw_blog_admin_button").click(x)}function x(){B("#rw_blog_admin_button").toggleClass("rw_active");B("#rw_blog_admin_menu").toggle()}function X(){S=new AJS.Dialog(600,210,"link-page-popup").addHeader("Link to this page").addPanel("Link to this page","<form id='link-page-popup-form' class='aui'><fieldset></fieldset></form>").addCancel("Close",function(aa){S.hide();return false});var Y=[{label:"Link",id:"link",value:B("link[rel=canonical]").attr("href")},{label:"Tiny link",id:"tiny-link",value:B("link[rel=shortlink]").attr("href")}];B.each(Y,function(){B("#link-page-popup-form fieldset").append(AJS.format("<div class='field-group'><label for=''link-popup-field-{0}''>{1}:</label><input id=''link-popup-field-{0}'' readonly=''readonly'' value='''' class=''text'' type=''text''></div>",this.id,this.label)).find("input:last").val(this.value)});var Z=B("#link-page-popup-form fieldset input.text");Z.focus(function(){B(this).select()});Z.mouseup(function(aa){aa.preventDefault()})}function T(Y,ad,ae,Z,af){if(ad!==undefined){ad=String(ad)}if(ae!==undefined){ae=String(ae)}if(C==undefined){C=B(RWJS.Templates.Utils.loader({size:"medium"}))}if(o==undefined){o=B('<a class="aui-button"><span></span></a>')}var ac=true;if(ad===""){var ah=B('<div class="rw_no_items rw_blogs rw_corners"><div>');ah.html("No blogs found");$createBlogButton=B("<a>"+"Create your first blog"+"</a>");if(t&&t.canCreateBlogPermission){ah.append($createBlogButton);$createBlogButton.click(function(){var ai=new RW.Views.CreateNewBlogSpaceView({onSuccess:function(aj){window.location=contextPath+"/blog/"+aj.get("nameKey")}});ai.popUp()})}Y.append(ah);return}if(ad.indexOf(",")===-1||ad.trim().indexOf(",")===ad.length-1){ac=false}var ab=undefined;var aa=0;var ag=C.clone();Y.append(ag);B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/post",type:"GET",data:{"start-index":Z,"max-results":af,keys:ad,labels:"",authors:ae,"body-type":"excerpts","profile-pic":true,"all-info":true},dataType:"json",success:function(ai){ag.remove();if(typeof(ai.blogPosts)!=="undefined"&&ai.blogPosts.length>0){var ak=0;B.each(ai.blogPosts,function(){if(D[ak]==undefined){D[ak]=ai.blogPosts}else{D[ak]=D[ak].concat(ai.blogPosts)}ak=ak+1});ak=0;B.each(ai.blogPosts,function(){if(ab==undefined&&ak==0){ab=this}M(Y,this,ac,ak);ak=ak+1});aa=ak;if(ai.hasMore){if(v==undefined){v=B(RW.Templates.loadMoreButton())}var aj=v.clone();aj.click(function(){T(Y,ad,ae,Z+af,af);B(this).remove();return false});Y.append(aj)}Confluence.Binder.userHover()}else{if(Z===0){var al=B('<div class="rw_no_items rw_news rw_corners"><div>');al.html("No blog posts found");if(t.blogContext==="blogs"){if(t.canCreateBlogPostPermission){$createBlogPostButton=B("<a>"+"Create your first blog post!"+"</a>");al.append($createBlogPostButton);J($createBlogPostButton)}}else{if(t.canCreateBlogPostPermissionSpace){$createBlogPostButton=B("<a>"+"Create your first blog post!"+"</a>");al.append($createBlogPostButton);$createBlogPostButton.click(function(){window.location=contextPath+"/pages/createblogpost.action?spaceKey="+ad})}}Y.append(al)}}},error:function(ai){Y.html("<div class='rw_warning_box'>"+ai.status+" "+ai.statusText+"</div>").show()}})}function M(Y,ab,Z,ad){var af=B(RW.Templates.Blogs.blogpostList({blogPost:ab}));var ae=B(".rw_item_content",af);if(ab.bodyContent){B("img.confluence-embedded-image",ae).each(function(){var ah=B(this);if(RW.versionChecker.comparedTo59>=0){ah.attr("data-featherlight",ah.attr("src"))}else{if(ah.fancybox){ah.fancybox(i)}}ah.removeAttr("width")})}var aa=B('<div class="rw_buttons_section"></div>');var ac=o.clone();ac.click(function(){window.location=ab.url});B("span",ac).html("Read more").attr("title","Read more");aa.append(ac);var ag=o.clone();ag.click(function(){window.location=ab.commentUrl}).addClass("aui-button-subtle");B("span",ag).html(ab.commentTitle).attr("title",ab.commentTitle);aa.append(ag);ae.append(aa);if(Z&&ab.blog!=null){B(".rw_blog_link",af).html(RWJS.htmlEncode(ab.blog.name));B(".rw_blog_link",af).click(function(){window.location=contextPath+"/blog/"+ab.blog.nameKey})}else{B(".rw_blog_link",af).remove()}Y.append(af)}function I(Y){if(C==undefined){C=B(RWJS.Templates.Utils.loader({size:"medium"}))}Y.addClass("rw_side_menu_container");Y.append(C.clone());B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog",type:"GET",dataType:"json",success:function(Z){Z.blogs=_.sortBy(Z.blogs,"name");Y.html("");Y.append(RW.getSideMenuTitle("Blogs"));if(typeof(Z.blogs)!=="undefined"&&Z.blogs.length>0){if(q==undefined){q=B("<ul></ul>")}var aa=q.clone();B.each(Z.blogs,function(){aa.append(V(this,false))});aa.addClass("rw_side_menu");aa.addClass("rw_corners");B("li:first-child a",aa).addClass("rw_corners_top");B("li:last-child a",aa).addClass("rw_corners_bottom");Y.append(aa)}else{Y.remove()}},error:function(Z){if(Z.status!=0){Y.html("<div class='rw_warning_box'>"+Z.status+" "+Z.statusText+"</div>").show()}}})}function U(Y){if(C==undefined){C=B(RWJS.Templates.Utils.loader({size:"medium"}))}var Z=String(t.blogKeys);if(!Z||Z.trim().length===0){return}Y.addClass("rw_side_menu_container");Y.append(C.clone());B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/authors",data:{"start-index":0,"max-results":50,keys:Z},type:"GET",dataType:"json",success:function(aa){Y.html("");Y.append(RW.getSideMenuTitle("Recent contributors"));if(typeof(aa.authors)!=="undefined"&&aa.authors.length>0){if(q==undefined){q=B("<ul></ul>")}var ab=q.clone();B.each(aa.authors,function(){ab.append(n(this))});ab.addClass("rw_side_menu");ab.addClass("rw_corners");B("li:first-child a",ab).addClass("rw_corners_top");B("li:last-child a",ab).addClass("rw_corners_bottom");Y.append(ab)}else{Y.remove()}},error:function(aa){if(aa.status!=0){Y.html("<div class='rw_warning_box'>"+aa.status+" "+aa.statusText+"</div>").show()}}})}function n(aa){if(k==undefined){k=B(RW.Templates.iconTextItem())}var Z=k.clone();var Y;var ab=B("a",Z);B("span.rw_item_content",Z).html(aa.fullName).addClass("rw_has_icon");ab.attr("title",aa.fullName);if(aa.profilePic!=null){B("span.rw_item_icon img",Z).attr("src",aa.profilePic).show()}else{B("span.rw_item_icon",Z).addClass("rw_no_contributer_icon")}Y=contextPath+"/blog/view-blogs.action?author="+aa.username;ab.click(function(){window.location=Y});return Z}function H(){var Y=B("#rw_create_blogpost_dialog_button");J(Y)}function J(Z){var Y=new RWJS.InlineDialog({$button:Z,id:"createBlogPost",width:300,title:"Add blog post"});Z.click(function(){Y.open();Y.showLoader();var aa=new RW.Models.BlogPortal();aa.fetchBlogsWithCreatePermission({success:function(){aa.set("blogs",_.sortBy(aa.get("blogs"),"name"));var ac=B("<div></div>");ac.addClass("rw_dialog_menu");Y.setContent(ac);var ab=new RW.Views.CreateBlogpostListView({model:aa,el:ac,dialog:Y});ab.render();Y.hideLoader()}});return false})}function z(){B("#rw_favourite_blog_button").click(function(ad){RW.addOrRemoveFav(B(ad.currentTarget).data("key"),ad.currentTarget);return false});var ab=B("#rw_blog_menu_button");var Y=ab.next();var ac=300;var aa="Blog menu";if(Y.data("is-space-admin")){ac=500;aa=RWJS.htmlEncode(AJS.Meta.get("space-name"))}var Z=new RWJS.InlineDialog({$button:ab,id:"blogMenu",width:ac,title:aa});Y.hide();Y.removeClass();Y.addClass("rw_dialog_menu");ab.click(function(){Z.open();Z.setContent(Y);Y.show();B("a",Y).click(function(){Z.showLoader()});return false})}RW.blogs.showBlogsPopup=function(){if(q==undefined){q=B("<ul></ul>")}if(b==undefined){b=new RW.ui.popup("rw_blogs_popup","Blogs");b.closeButton.click(RW.blogs.hideBlogsPopup);b.obj.click(function(Y){if(!N){Y.stopPropagation()}})}RW.closePopups();RW.blogs.inBlogsPopup=true;b.show();b.showLoader();b.obj.addClass("rw_dd_large");B.ajax({url:contextPath+"/rest/originaltheme/1.0/blog",type:"GET",dataType:"json",success:function(Z){var aa=q.clone();b.hideLoader();if(typeof(Z.blogs)!=="undefined"&&Z.blogs&&Z.blogs.length>0){B.each(Z.blogs,function(){aa.append(V(this,true))});b.content(aa);b.container.append("<div style='clear:both;'></div>")}else{var ab=B('<div class="rw_no_items rw_blogs rw_corners"><div>');ab.html("No blogs found");b.content(ab)}var Y=B("li",b.container);if(Y.length>0){RW.startKeyable(b.container,null,null,B(Y[0]))}else{RW.startKeyable(b.container,null,null)}B(document).bind("click",RW.blogs.hideBlogsPopup)},error:function(Y){B(document).bind("click",RW.blogs.hideBlogsPopup);if(Y.status!=0){b.content("<div class='rw_warning_box'>"+Y.status+" "+Y.statusText+"</div>")}}})};RW.blogs.hideBlogsPopup=function(){if(!N){b.hide();b.clear();RW.blogs.inBlogsPopup=false;B(document).unbind("click",RW.blogs.hideBlogsPopup);RW.quitKeyable()}else{N=false}}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/blogs/models/blog-models-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,a,d,b){RW.Models.BlogPortal=b.Model.extend({namedAttributes:{blogs:RW.Models.BlogsCollection},url:function(){return contextPath+"/rest/originaltheme/1.0/blog"},fetchBlogsWithCreatePermission:function(e){if(!e){e={}}e.url=this.url()+"?with-create-permission=true";return d.Model.prototype.fetch.call(this,e)}});RW.Models.BlogsCollection=d.Collection.extend({initialize:function(){this.model=RW.Models.Blog}});RW.Models.BlogSpaces=d.Collection.extend({initialize:function(){this.model=RW.Models.Blog},url:function(){return contextPath+"/rest/originaltheme/1.0/blog/space"}});RW.Models.Blog=d.Model.extend({namedAttributes:{name:"string",nameKey:"string",description:"string",position:"number",themeId:"number",allowSharing:"boolean",blogPortal:"boolean",blogspace:"boolean"},url:function(){return contextPath+"/rest/originaltheme/1.0/blog/space/"+(this.get("id")?this.get("nameKey")+"/":"")},createBlogSpace:function(f,e){if(!e){e={}}e.url=this.url()+"?createSpace=true";return d.Model.prototype.save.call(this,f,e)},fetchBlog:function(e){if(!e){e={}}e.url=this.url()+this.get("nameKey")+"/";return d.Model.prototype.fetch.call(this,e)}});RW.Models.BlogSettings=b.Model.extend({namedAttributes:{blogPortalEnabled:"boolean",portalThemeId:"number"},url:function(){return contextPath+"/rest/originaltheme/1.0/blog/settings"}})})(RWJS.jQuery,RWJS._,RWJS.Backbone,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/activitystream/activitystream-macro.js' */
if(typeof RW==="undefined"){var RW={}}(function(y){var x="/images/icons/profilepics/anonymous.png";RW.activity={};var U,k,G,u,M,F,n,I,O,c,a,f,A,p,m;var s=false,H=false,B=[],z=[],W;var t;var Q="my",K="all",e="network",P="team",l="popular";var d={padding:0,speedIn:500,speedOut:500,overlayShow:true,overlayOpacity:0.5,dataAttr:"image-src"};AJS.toInit(function(){M=y('<div><span class="icon icon-like"></span><span class="count"></span></div>');F=y('<div><span class="icon icon-comment"></span><span class="count"></span></div>');if(y("#rw_activity_macro_wrapper").length>0){U=y(RW.Templates.Activity.item());k=y(RW.Templates.Activity.set());G=y(RW.Templates.Activity.popularSet());u=y(RW.Templates.Activity.popularItem());n=y(RW.Templates.Activity.empty());I=y(RW.Templates.loadMoreButton());c=y(RW.Templates.Activity.replyButton());a=y(RWJS.Templates.Utils.loader({size:"medium"}));for(var X=0;X<y(".rw_activity_macro","#main").length;X++){var Y=y(y(".rw_activity_macro","#main")[X]);Y.data("categories-loaded",false);Y.data("hasmore","false");Y.data("linkclicked","false");Y.data("category","");y("#rw_activity_menu",Y).attr("id","rw_activity_menu_"+X);y(".rw_activity_menu_button",Y).addClass("aui-dropdown2-trigger").attr("aria-owns","rw_activity_menu_"+X);o(y("#typesVarActivity",Y).html().trim(),Y);C(Y)}}});function C(Y){y(".rw_option_popular",Y).show();var X=Y.data("option");y(".rw_activity_menu_button",Y).html(y(".rw_option_"+X+" a",Y).html());y(".rw_activity_menu a",Y).click(function(){y(".rw_activity_menu_button",Y).html(y(this).html());RW.activity.filterBySpaces(y(this).data("option"),"",Y)});y(".rw_activity_menu_button",Y).click(function(Z){g(Y)});W=y("#selectedTeamVarActivity",Y).html().trim();Y.data("category",W);if(W.length>0){g(Y)}r(y("#typesVarActivity",Y).html().trim(),y("#selectedTabVarActivity",Y).html().trim(),W,0,Y);V(Y);y(window).resize(function(){V(Y)})}function V(X){if(X.width()<400){X.addClass("rw_small")}else{X.removeClass("rw_small")}}function r(ae,al,ad,Z,ak){var Y=y("#rw_activity_macro_container",ak);var X=false;var aa=false;var ag=y("#spacesVarActivity",ak).html().trim();var aj=y("#stepSizeVarActivity",ak).html().trim();var ab=y("#categoryKeyVarActivity",ak).html().trim();var ai=y("#authorsVarActivity",ak).html().trim();var ac=y("#labelsVarActivity",ak).html().trim();if(Z==0){Y.html(a.clone())}if(ab==""){ab=ad}if(al==Q){X=true}if(al==e){aa=true}if(al!=l){y("#rw_filter_button, #rw_content_types_container",ak).removeClass("rw_hidden");y.ajax({url:contextPath+"/rest/originaltheme/1.0/activitystream/?types="+ae+"&category-key="+ab+"&labels="+ac+"&spaces="+ag+"&authors="+ai+"&favourite="+X+"&network="+aa+"&start-index="+Z+"&max-results="+aj,type:"GET",dataType:"json",success:function(an){y(".rw_loader_box",ak).remove();if(Z==0){Y.html("")}ak.data("hasmore",an.hasMore);if(an.activitySets.length>0){y.each(an.activitySets,function(){D(this,Y,false)});if(ak.data("hasmore")){var ao=I.clone();var am=parseInt(Z)+parseInt(aj);ao.click(function(){ao.after(RWJS.Templates.Utils.loader({size:"medium"}));ao.remove();r(ae,al,ad,am,ak);return false});Y.append(ao)}Confluence.Binder.userHover()}else{if(Z==0){Y.append(n.clone())}}},error:function(am){if(am.status!=0){y(ak).html("<div class='rw_warning_box'>"+am.status+" "+am.statusText+"</div>").show();y("#rw_activity_macro_loader").hide()}}})}else{y("#rw_filter_button, #rw_content_types_container",ak).addClass("rw_hidden");var ah=parseInt(Z)+parseInt(aj);var af=contextPath+"/rest/popular/1/stream/content?days=7&pageSize="+ah;y.ajax({url:af,type:"GET",dataType:"json",success:function(an){Y.html("");if(an.streamItems.length>0){y.each(an.streamItems,function(){L(this,Y,false)});Confluence.Binder.userHover();if(an.streamItems.length>=ah){var ao=I.clone();var am=parseInt(Z)+parseInt(aj);ao.click(function(){ao.after(RWJS.Templates.Utils.loader({size:"medium"}));ao.remove();r(ae,al,ad,am,ak);return false});Y.append(ao)}}else{Y.append(n.clone())}},error:function(am){if(am.status!=0){y(ak).html("<div class='rw_warning_box'>"+am.status+" "+am.statusText+"</div>").show();y("#rw_activity_macro_loader").hide()}}})}}function g(Y){var X=y(".rw_option_categories","#"+y(".rw_activity_menu_button",Y).attr("aria-owns"));if(!Y.data("categories-loaded")){X.append("<li><a>Loading...</a></li>");y.ajax({url:contextPath+"/rest/originaltheme/1.0/category",type:"GET",dataType:"json",success:function(Z){X.html("");Y.data("categories-loaded",true);if(typeof(Z)!=="undefined"&&Z.length>0){y.each(Z,function(){b(this,X,Y)})}else{X.remove()}},error:function(Z){}})}}function b(Y,X,ab){if(m==undefined){m=y(RW.Templates.item())}var aa=m.clone(),Z=y("a",aa);aa.attr("id","rw_team_"+Y.nameKey);if(ab.data("category")===Y.nameKey){y(".rw_activity_menu_button",ab).html(RWJS.htmlEncode(Y.name))}if(Y.isCategory){aa.addClass("rw_is_category")}Z.html(RWJS.htmlEncode(Y.name)).click(function(){y(".rw_activity_menu_button",ab).html(y(this).html());RW.activity.filterBySpaces("team",Y.nameKey,ab)});X.append(aa)}function D(X,Y,ab){if(k==undefined){k=y(RW.Templates.Activity.set())}var af=k.clone(),aa=y(".rw_author",af),ac=y(".rw_activity_items",af),ae=y(".userLogoLink",af);var Z=y("a",aa);var ad=y("img",ae);if(X.author!=undefined){if(X.author.username==RW.remoteUser){af.addClass("rw_activity_set_my")}Z.html(X.author.fullName);if(!X.author.anonymous){Z.attr("data-username",RWJS.htmlDecode(X.author.username)).attr("href",contextPath+"/display/~"+RWJS.htmlDecode(X.author.username))}else{Z.removeClass("confluence-userlink")}if(!X.author.anonymous){ae.attr("data-username",RWJS.htmlDecode(X.author.username));ae.attr("href",contextPath+"/display/~"+RWJS.htmlDecode(X.author.username))}else{ae.removeClass("userLogoLink")}ad.attr("title",RWJS.htmlDecode(X.author.username)).attr("alt","User icon: "+RWJS.htmlDecode(X.author.username)).attr("src",X.author.profilePic)}y.each(X.items,function(){if(ab){ac.append(T(this,Y))}else{ac.append(E(this))}});Y.append(af)}function E(ai){var Z=U.clone(),af=y(".rw_activity_item_icon",Z),Y=y(".rw_activity_link",Z),ad=y(".rw_activity_space_name",Z),ah=y(".rw_summary",Z),X=y(".rw_thumbnail",Z),ae=y(".rw_activity_view_diff",Z),ac=y(".rw_date",Z);af.addClass(ai.iconClass);if(ai.type!="status"){Y.attr("href",ai.url);Y.attr("title",RWJS.htmlDecode(ai.title));Y.prepend(ai.title)}else{y(".rw_ellipsis",Z).removeClass("rw_ellipsis").addClass("rw_status");Y.before(ai.title);Y.remove()}ac.html(ai.date);if(ai.spaceName!=undefined&&ai.spaceName!=""){ad.html("("+ai.spaceName+")");ad.attr("title",RWJS.htmlDecode(ai.spaceName));Y.attr("title",RWJS.htmlDecode(ai.title)+" ("+RWJS.htmlDecode(ai.spaceName)+")")}if(ai.description.length>0){ah.html(ai.description);ae.html("");if(ai.commentPermission){var ag=ai.url.replace("focusedCommentId","replyToComment");var ab=c.clone();ab.html("Reply");ab.attr("href",ag);ab.attr("title","Reply");ah.append(ab)}}if(ai.changeComment!=undefined&&ai.changeComment!=""){ah.html(RWJS.htmlEncode(ai.changeComment))}if(ai.changeUrl!==undefined&&ai.newContent===false){var aa=c.clone();aa.html("View Changes");aa.addClass("rw_view_change_button");var Y=contextPath+ai.changeUrl;aa.attr("href",Y);ac.append(aa)}if(ai.thumbnail!=undefined){X.append("<img data-image-src='"+contextPath+ai.thumbnail.imageUrl+"' src='"+ai.thumbnail.url+"' />");if(RW.versionChecker.comparedTo59>=0){y("img",X).attr("data-featherlight",contextPath+ai.thumbnail.imageUrl)}else{if(y("img",X).fancybox){y("img",X).fancybox(d)}}}return Z}function T(ab,X){if(f==undefined){f=y(RW.Templates.iconTextItem())}var Y=f.clone(),Z=y(".rw_item_icon",Y),ac=y(".rw_item_content",Y),aa=y("a",Y);Z.addClass(ab.iconClass).addClass("rw_icon_container_16");if(ab.type!="status"){ac.html('<span class="rw_ellipsis">'+ab.title+"</span>");if(ab.spaceName!=undefined&&ab.spaceName!=""){y(".rw_ellipsis",ac).append(" <span class='rw_small_text'>("+ab.spaceName+")</span>")}aa.attr("href",ab.url).click(function(){H=true;if(X.hasClass("rw_key_nav")){window.location=ab.url;t.showLoader();return false}else{return true}}).attr("title",RWJS.htmlDecode(ab.title));if(ab.description.length>0){ac.append("<span class='rw_small_text'>"+ab.description+"</span><br/>")}if(ab.changeComment!=undefined&&ab.changeComment!=""){ac.append("<span class='rw_small_text'>"+RWJS.htmlEncode(ab.changeComment)+"</span><br/>")}}else{ac.html(ab.title);Y.append("<div class='rw_no_link'>"+aa.html())+"</div>";aa.remove()}ac.append('<div class="rw_date">'+ab.date+"</div>");return Y}function L(ab,X,ac){if(G==undefined){G=y(RW.Templates.Activity.popularSet())}var ae=G.clone(),Y=y(".rw_activity_items",ae),aa=y(".userLogoLink",ae),Z=y("img",aa);var ad=ab.author.userName;if(ad!=""){aa.attr("data-username",ad);aa.attr("href",contextPath+"/display/~"+ad)}else{aa.removeClass("userLogoLink")}Z.attr("title",ad).attr("alt","User icon: "+ad).attr("src",ab.author.avatarUrl);if(ac){Y.append(S(ab,X))}else{Y.append(q(ab))}X.append(ae)}function q(ai){var X=u.clone(),af=y(".rw_activity_item_icon",X),ae=y(".rw_activity_link",X),Y=y(".rw_popularity_data",X),ab=y(".rw_author",X),Z=y(".rw_date",X);af.addClass(ai.iconCssClass);ae.attr("href",ai.url);ae.attr("title",ai.title);ae.html(RWJS.htmlEncode(ai.title));if(ai.numberOfComments>0){var ah=F.clone(),ad=y(".count",ah);ad.html(ai.numberOfComments);Y.append(ah)}if(ai.numberOfLikes>0){var ag=M.clone(),ad=y(".count",ag);ad.html(ai.numberOfLikes);Y.append(ag)}Z.html(ai.friendlyDate);var aa=y("a",ab);aa.html(ai.author.fullName);var ac=ai.author.userName;if(ac!=""){aa.attr("data-username",ac).attr("href",contextPath+"/display/~"+ac)}else{aa.removeClass("confluence-userlink")}return X}function S(ag,X){if(f==undefined){f=y(RW.Templates.iconTextItem())}var Y=f.clone(),ac=y(".rw_item_icon",Y),ae=y(".rw_item_content",Y),ab=y("a",Y);ac.addClass(ag.iconCssClass).addClass("rw_icon_container_16");ae.html(RWJS.htmlEncode(ag.title));ab.click(function(){H=true;if(X.hasClass("rw_key_nav")){window.location=ag.url;t.showLoader();return false}}).attr("title",ag.title).attr("href",ag.url);var Z=y('<span class="rw_popularity_data"></span>');if(ag.numberOfComments>0){var af=F.clone(),aa=y(".count",af);aa.html(ag.numberOfComments);Z.append(af)}if(ag.numberOfLikes>0){var ad=M.clone(),aa=y(".count",ad);aa.html(ag.numberOfLikes);Z.append(ad)}ae.append(Z);ae.append(' <span class="rw_date_time">'+ag.friendlyDate+", "+ag.author.fullName+"</span>");return Y}function o(X,Z){y("#rw_content_types a.rw_checkbox_select",Z).click(function(aa){aa.preventDefault();if(y(this).parent().is(".rw_type_all")){y('#rw_content_types input[type="checkbox"]:checked',Z).each(function(){y(this).parent().removeClass("rw_active");y(this).parent().find("input").attr("checked",false)});y("#rw_filter_button",Z).removeClass("rw_filter_on");y("#rw_filter_button #rw_filter_button_off",Z).show();y("#rw_filter_button #rw_filter_button_on",Z).hide()}else{y("#rw_content_types li.rw_type_all",Z).removeClass("rw_active");y("#rw_content_types li.rw_type_all",Z).find("input").attr("checked",false);y("#rw_filter_button",Z).addClass("rw_filter_on");y("#rw_filter_button #rw_filter_button_off",Z).hide();y("#rw_filter_button #rw_filter_button_on",Z).show()}y(this).parent().addClass("rw_active");y(this).parent().find("input").attr("checked",true);v(true,Z)});y("#rw_content_types .rw_checkbox_deselect",Z).click(function(ab){ab.preventDefault();y(this).parent().removeClass("rw_active");y(this).parent().find("input").attr("checked",false);var aa=0;y('#rw_content_types input[type="checkbox"]:checked',Z).each(function(){aa=aa+1});if(aa==0){y("#rw_content_types li.rw_type_all",Z).addClass("rw_active");y("#rw_content_types li.rw_type_all",Z).find("input").attr("checked",true);y("#rw_filter_button",Z).removeClass("rw_filter_on");y("#rw_filter_button #rw_filter_button_off",Z).show();y("#rw_filter_button #rw_filter_button_on",Z).hide()}v(true,Z)});y("#rw_filter_button",Z).click(function(){y(this).toggleClass("active");y("#rw_content_types_container",Z).toggle()});y('#rw_content_types input[type="checkbox"]:checked',Z).each(function(){y(this).parent().removeClass("rw_active");y(this).parent().find("input").attr("checked",false)});if(X.trim){X=X.trim()}if(X.length>0){typeList=X.split(",");for(i=0;i<typeList.length;i++){var Y=typeList[i];y("#rw_content_types li.rw_type_"+Y,Z).addClass("rw_active");y("#rw_content_types li.rw_type_"+Y,Z).find("input").attr("checked",true)}y("#rw_filter_button",Z).addClass("rw_filter_on");y("#rw_filter_button #rw_filter_button_off",Z).hide();y("#rw_filter_button #rw_filter_button_on",Z).show()}else{y("#rw_content_types li.rw_type_all",Z).addClass("rw_active");y("#rw_content_types li.rw_type_all",Z).find("input").attr("checked",true)}}function v(aa,ab){var Y="";var Z="";var X="";if(!y("#rw_content_types li.rw_type_all",ab).find("input").attr("checked")){y('#rw_content_types input[type="checkbox"]:checked',ab).each(function(){if(y(this).val().length>0){Y+=y(this).val()+","}});if(Y.length>0){Y=Y.substring(0,Y.length-1)}}if(ab.data("option")!=undefined){Z=ab.data("option")}if(ab.data("category")!=undefined){X=ab.data("category")}r(Y,Z,X,0,ab);if(aa){N(Y)}}function j(X){y.ajax({url:contextPath+"/rest/originaltheme/1.0/setting/user/activitystream/selectedtab?value="+X,type:"PUT",dataType:"json",success:function(Y){}})}function J(X){y.ajax({url:contextPath+"/rest/originaltheme/1.0/setting/user/activitystream/selectedteam?value="+X,type:"PUT",dataType:"json",success:function(Y){}})}function N(Z){var X=y("meta[id=atlassian-token]");var Y=X.attr("content");y.ajax({url:contextPath+"/rest/originaltheme/1.0/setting/user/activitystream/filter?value="+Z,type:"PUT",dataType:"json",success:function(aa){},error:function(aa){}})}function w(ah,Y,ad,ab,ae,X,aa,Z,ag,ac,af){if(A==undefined){A=y(RW.Templates.popupLoader())}Y.append(A);y.ajax({url:contextPath+"/rest/originaltheme/1.0/activitystream/",data:{types:ad,"category-key":ab,spaces:ae,favourite:X,network:aa,"start-index":Z,"max-results":ag,authors:af},type:"GET",dataType:"json",success:function(aj){y(".rw_popup_loader",Y).remove();if(aj.activitySets.length>0){y.each(aj.activitySets,function(){D(this,Y,true)});if(aj.hasMore){if(O==undefined){O=y(RW.Templates.Activity.loadMoreSection())}var al=O.clone();al.addClass("rw_load_more_section");y("a",al).click(function(am){y(this).parent().parent().remove();w(am,Y,ad,ab,ae,X,aa,Z+ag,ag,y(this).parent().hasClass("rw_selected"),af);return false});Y.append(al)}Confluence.Binder.userHover()}else{if(Z==0){if(n==undefined){n=y(RW.Templates.Activity.empty())}Y.append(n.clone())}}if(ac){var ai=y("li",Y);if(ai.size()>(Z+ag)){RW.startKeyable(Y,null,null,y(ai.get(Z)))}else{RW.startKeyable(Y,null,null,y(ai.get(Z-1)))}}else{var ai=y("li",Y);var ak=y(ai.get(Z));if(ah!=null&&ah!=undefined&&ah.which==1){ak=null}RW.startKeyable(Y,null,null,ak)}},error:function(ai){if(ai.status!=0){t.content("<div class='rw_warning_box'>"+ai.status+" "+ai.statusText+"</div>")}}})}function R(Z,ac,X,aa){if(A==undefined){A=y(RW.Templates.popupLoader())}Z.append(A);var Y=parseInt(ac)+parseInt(X);var ab=contextPath+"/rest/popular/1/stream/content?days=7&pageSize="+Y;y.ajax({url:ab,type:"GET",dataType:"json",success:function(af){Z.html("");if(af.streamItems.length>0){y.each(af.streamItems,function(){L(this,Z,true)});Confluence.Binder.userHover();if(af.streamItems.length>=Y){if(O==undefined){O=y(RW.Templates.Activity.loadMoreSection())}var ag=O.clone();ag.addClass("rw_load_more_section");var ad=parseInt(ac)+parseInt(X);y("a",ag).click(function(){y(this).parent().parent().remove();R(Z,ad,X,y(this).parent().hasClass("rw_selected"));return false});Z.append(ag)}}else{if(ac==0){if(n==undefined){n=y(RW.Templates.Activity.empty())}Z.append(n.clone())}}if(aa){var ae=y("li",Z);if(ae.size()>(ac+X)){RW.startKeyable(Z,null,null,y(ae.get(ac)))}else{RW.startKeyable(Z,null,null,y(ae.get(ac-1)))}}else{RW.startKeyable(Z,null,null)}},error:function(ad){if(ad.status!=0){y("#rw_activity_macro_wrapper").html("<div class='rw_warning_box'>"+ad.status+" "+ad.statusText+"</div>").show();y("#rw_activity_macro_loader").hide()}}})}function h(Y,Z,ac,X,aa,ab){if(p==undefined){p=y("<ul></ul>")}if(m==undefined){m=y(RW.Templates.item())}y.ajax({url:contextPath+"/rest/originaltheme/1.0/label/teamlabel",type:"GET",dataType:"json",success:function(af){var aj=p.clone();aj.addClass("rw_horizontal_menu");if(typeof RW.remoteUser!="undefined"){var ak=m.clone();y("a",ak).html("Popular").click(function(){RWJS.clearActiveMenuItems(Y);y(this).parent().addClass("rw_active");y(".rw_activity_popup_items",Y).html("");R(y(".rw_activity_popup_items",Y),ac,X,false);j(l)});if(aa==l){RWJS.setActiveMenuItem(ak)}aj.append(ak);var ae=m.clone();y("a",ae).html("Favourite").click(function(al){RWJS.clearActiveMenuItems(Y);y(this).parent().addClass("rw_active");y(".rw_activity_popup_items",Y).html("");w(al,y(".rw_activity_popup_items",Y),Z,"","",true,false,ac,X,false);j(Q)});if(aa==Q){RWJS.setActiveMenuItem(ae)}aj.append(ae);var ai=m.clone();y("a",ai).html("Network").click(function(al){RWJS.clearActiveMenuItems(Y);RWJS.setActiveMenuItem(y(this).parent());y(".rw_activity_popup_items",Y).html("");w(al,y(".rw_activity_popup_items",Y),Z,"","",false,true,ac,X,false);j(e)});if(aa==e){RWJS.setActiveMenuItem(ai)}aj.append(ai)}if(typeof(af.items)!=="undefined"&&af.items.length>0){var ah=m.clone();ah.addClass("rw_has_dd");y("a",ah).html("Category").addClass("rw_dd_link");var ad=p.clone();ad.addClass("rw_dd");y.each(af.items,function(){var am=m.clone();var al=this.key;y("a",am).html(this.value).click(function(an){RWJS.clearActiveMenuItems(Y);RWJS.setActiveMenuItem(y(this).parent().parent().parent());RWJS.setActiveMenuItemDD(y(this).parent());y(".rw_activity_popup_items",Y).html("");w(an,y(".rw_activity_popup_items",Y),Z,al,"",false,false,ac,X,false);j(P);J(al)});if(ab==al&&aa==P){RWJS.setActiveMenuItemDD(am)}ad.append(am)});ah.append("<div style='clear:both;'></div>");ah.append(ad);if(aa==P){RWJS.setActiveMenuItem(ah)}aj.append(ah)}var ag=m.clone();y("a",ag).html("All").click(function(al){RWJS.clearActiveMenuItems(Y);RWJS.setActiveMenuItem(y(this).parent());y(".rw_activity_popup_items",Y).html("");w(al,y(".rw_activity_popup_items",Y),Z,"","",false,false,ac,X,false);j(K)});if(aa==K){RWJS.setActiveMenuItem(ag)}aj.append(ag);Y.prepend(aj)},error:function(ad){if(ad.status!=0){t.content("<div class='rw_warning_box'>"+ad.status+" "+ad.statusText+"</div>")}}})}RW.activity.filterBySpaces=function(Z,Y,aa){var X=y(".rw_activity_menu",aa);aa.data("option",Z);if(Y!=""){aa.data("category",Y);J(Y)}else{aa.data("category","")}j(Z);v(false,aa)};RW.showActivitiyStream=function(ah,ai,ab){if(typeof ai!="string"){ai=""}if(typeof ab!="string"){ab=""}if(t==undefined){t=new RW.ui.popup("rw_activity_popup","Activity stream","activity");t.closeButton.click(RW.hideActivitiyStream);t.obj.click(function(ak){if(!H){ak.stopPropagation()}})}var aj=y(".rw_popup_top h1",t.obj);if(ai==""){aj.html("Activity stream")}else{aj.html(RWJS.htmlEncode(ab)+" : "+"Network")}RW.closePopups();RW.activity.inActivityPopup=true;t.show();t.hideLoader();var Y=t.container;var ac=y("<div class='rw_activity_popup_items'></div>");Y.append(ac);var ae="";var ad="";var af="";var X=false;var aa=false;var Z=0;var ag=10;y.ajax({url:contextPath+"/rest/originaltheme/1.0/setting/user/activitystream",type:"GET",dataType:"json",success:function(ak){var al;var am;if(typeof(ak.selectedType)!=="undefined"){al=ak.selectedType}if(typeof(ak.selectedCategory)!=="undefined"){am=ak.selectedCategory}if(al==l){h(Y,ae,Z,ag,l,am);R(ac,Z,ag,false)}else{if(al==Q){X=true}else{if(al==e){aa=true}else{if(al==P){ad=am}else{al=K}}}if(ai==""){h(Y,ae,Z,ag,al,am)}if(ai==""){w(ah,ac,ae,ad,af,X,aa,Z,ag,false)}else{ai=ai.replace("[","");ai=ai.replace("]","");if(ai==""){ai=false}w(ah,ac,ae,"",af,false,false,Z,ag,false,ai)}}y(document).bind("click",RW.hideActivitiyStream)},error:function(ak){if(ak.status!=0){t.content("<div class='rw_warning_box'>"+ak.status+" "+ak.statusText+"</div>")}}});RWJS.PubSub.trigger("activity-popup:show")};RW.hideActivitiyStream=function(){if(!H){t.hide();t.clear();RW.activity.inActivityPopup=false;y(document).unbind("click",RW.hideActivitiyStream);RW.quitKeyable()}else{H=false}RWJS.PubSub.trigger("activity-popup:hide")}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/news/news-macro-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(i){RW.news={};var n="blog";var k="/pages/popup/view-page-simple.action?pageId=";var o;var e;var m;var g;var a;var j;var b=0;var d=2;var p=[];var f={padding:0,speedIn:500,speedOut:500,overlayShow:true,overlayOpacity:0.5,dataAttr:"image-src"};AJS.toInit(function(){o=i(RW.Templates.News.item());e=i(RW.Templates.News.itemSimple());g=i(RW.Templates.loadMoreButton());m=i(RW.Templates.News.empty());a=i(RWJS.Templates.Utils.loader({size:"medium"}));j=i(RW.Templates.News.popupButton());i("#main .rw_news_macro").each(function(q){c(i(this),0,q)})});function c(s,A,u){var r=i(".rw_news_container",s);if(A==0){r.append(a.clone())}var z=i("#contentVarNews",s).html();var v=i("#stepSizeVarNews",s).html();var B=i("#spacesVarNews",s).html();var y=i("#labelsVarNews",s).html().trim();var E=i("#profilePicVarNews",s).html();var D=i("#typeVarNews",s).html();var t=i("#showSpaceNameVarNews",s).html();t=Boolean(t.trim());var C=i("#popupVarNews",s).html();var w=i("#themeVarNews",s).html();var x=i("#categoriesVarNews",s).html();z="excerpts";var q="";if(D==="blog"){q="blogs"}else{if(D==="blog-portal"){q="blog-portal"}}i.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/post/",type:"GET",data:{"start-index":A,"max-results":v,keys:B,labels:y,"body-type":z,"profile-pic":E,"all-info":true,"blog-source":q,"category-keys":x},dataType:"json",success:function(F){i(".rw_loader_box",r).remove();var H=F.hasMore;if(A==0){r.html("")}if(typeof(F.blogPosts)!=="undefined"&&F.blogPosts.length>0){if(p[u]==undefined){p[u]=F.blogPosts}else{p[u]=p[u].concat(F.blogPosts)}i.each(F.blogPosts,function(I){if(C=="true"&&A==0&&I==0){var K=this;var J=j.clone();J.click(function(){RW.openBlogPostPopup(K,0,u,p);return false}).attr("title","View in popup");i(".rw_macro_title h2",s).append(J)}if(w==="simple"){l(this,r,t,C,D,A+I,u)}else{h(this,r,t,C,D,A+I,u)}if(I+A==0&&i("#firstExpandedVarNews",s).html()=="true"){i(".rw_news_item_btn",r.last()).click()}});if(H){var G=g.clone();G.click(function(){G.after(RWJS.Templates.Utils.loader({size:"medium"}));G.remove();c(s,A+F.blogPosts.length,u);return false});r.append(G)}Confluence.Binder.userHover()}else{if(A===0){r.after(m.clone()).remove()}}i(".rw_news_item_btn:first",r).addClass("rw_corners_top");if(!H){i(".rw_news_item_btn:last",r).addClass("rw_corners_bottom")}},error:function(F){r.html("<div class='rw_warning_box'>"+F.status+" "+F.statusText+"</div>").show()}})}function h(t,A,I,r,u,H,D){var F=o.clone(),E=i(".rw_caption",F),G=i(".rw_date",F),B=i(".rw_item_icon img",F),w=i(".rw_item_content",F),C=i(".wiki-content",F),y=i(".rw_read_more_page",F),q=i(".rw_read_more_popup",F),x=i(".rw_comments_link",F),s=i(".rw_space_name",F),v=i(".rw_news_item_btn",F),z=i(".rw_user_link",F);E.html(t.title);E.attr("href",t.url);E.attr("title",RWJS.htmlDecode(t.title));E.click(function(J){J.stopPropagation()});G.html(t.date);if(t.blog&&t.blog.blogspace){if(I){s.html(RWJS.htmlEncode(t.blog.name)).addClass("rw_blog_name").attr("title",RWJS.htmlEncode(t.blog.name)).click(function(J){window.location=contextPath+"/blog/"+t.blog.nameKey;J.stopPropagation()})}else{s.remove()}}else{if(I){s.html(RWJS.htmlEncode(t.spaceName)).attr("title",RWJS.htmlEncode(t.spaceName)).addClass("rw_iconfont_space");s.click(function(J){window.location=contextPath+"/display/"+t.spaceKey;return false})}else{s.remove()}}if(t.author.profilePic){if(!t.author.anonymous){B.parent().attr("data-username",t.author.username)}else{B.parent().removeClass("userLogoLink")}B.attr("src",t.author.profilePic);w.addClass("rw_has_icon")}else{B.remove()}if(!t.author.anonymous){z.attr("href",contextPath+"/display/~"+t.author.username);z.attr("data-username",t.author.username)}else{z.removeClass("confluence-userlink")}z.html(t.author.fullName);if(t.bodyContent){C.html(t.bodyContent);i("img.confluence-embedded-image",C).each(function(){var J=i(this);if(RW.versionChecker.comparedTo59>=0){J.attr("data-featherlight",J.attr("src"))}else{if(J.fancybox){J.fancybox(f)}}J.removeAttr("width")})}y.attr("href",t.url);if(r=="true"){q.click(function(){RW.openBlogPostPopup(t,H,D,p);return false})}else{q.remove()}x.attr("href",t.commentUrl).attr("title",t.commentTitle);i("span",x).html(t.commentTitle);A.append(F)}function l(t,A,H,r,u,G,C){var E=e.clone(),D=i(".rw_caption",E),F=i(".rw_date",E),y=i(".rw_user_link img",E),B=i(".wiki-content",E),x=i(".rw_read_more_page",E),q=i(".rw_read_more_popup",E),w=i(".rw_comments_link",E),s=i(".rw_space_name",E),v=i(".rw_news_item_btn",E),z=i(".rw_user_link",E);D.html(t.title);D.attr("href",t.url);D.attr("title",RWJS.htmlDecode(t.title));F.html(t.date);if(t.blog&&t.blog.blogspace){if(H){s.html(RWJS.htmlEncode(t.blog.name)).addClass("rw_blog_name").attr("title",RWJS.htmlEncode(t.blog.name)).click(function(I){window.location=contextPath+"/blog/"+t.blog.nameKey;I.stopPropagation()})}else{s.remove()}}else{if(H){s.html(RWJS.htmlEncode(t.spaceName)).attr("title",RWJS.htmlEncode(t.spaceName)).addClass("rw_iconfont_space");s.click(function(I){window.location=contextPath+"/display/"+t.spaceKey;return false})}else{s.remove()}}if(t.author.profilePic){y.attr("src",t.author.profilePic);z.addClass("rw_has_icon")}else{y.remove()}if(!t.author.anonymous){z.attr("href",contextPath+"/display/~"+t.author.username);z.attr("data-username",t.author.username)}else{z.removeClass("confluence-userlink")}i("span",z).html(t.author.fullName);if(t.bodyContent){B.html(t.bodyContent);i("img.confluence-embedded-image",B).each(function(){var I=i(this);if(RW.versionChecker.comparedTo59>=0){I.attr("data-featherlight",I.attr("src"))}else{if(I.fancybox){I.fancybox(f)}}I.removeAttr("width")})}x.attr("href",t.url);if(r=="true"){q.click(function(){RW.openBlogPostPopup(t,G,C,p);return false})}else{q.remove()}w.attr("href",t.commentUrl).attr("title",t.commentTitle);i("span",w).html(t.commentTitle);A.append(E)}RW.openBlogPostPopup=function(v,q,r,u){var t=RWJS.openIframeDialog(contextPath+k+v.id,RWJS.htmlDecode(v.title));if(q!=0){t.addButton("<span class='rw_next'>"+"Next"+"</span>",function(){t.remove();RW.openBlogPostPopup(u[r][q-1],q-1,r,u)},"rw_button rw_right")}else{t.addButton("<span class='rw_next'>"+"Next"+"</span>",function(){return false},"rw_button rw_right rw_transparent")}if(u[r].length!=q+1){t.addButton("<span class='rw_prev'>"+"Previous"+"</span>",function(){t.remove();RW.openBlogPostPopup(u[r][q+1],q+1,r,u)},"rw_button rw_right")}else{t.addButton("<span class='rw_prev'>"+"Previous"+"</span>",function(){return false},"rw_button rw_right rw_transparent")}t.addButton("<span class='rw_comment_gray'>"+v.commentTitle+"</span>",function(){window.location=v.commentUrl},"rw_button rw_left");if(v.canEdit){t.addButton("<span class='rw_edit_gray'>"+"Edit"+"</span>",function(){window.location=contextPath+"/pages/editblogpost.action?pageId="+v.id},"rw_button rw_left")}try{RW.startKeyable(i("#rw_popup_dialog"),null,"blog_post_popup",i(".rw_button .rw_right"))}catch(s){}};RW.news.toggleNewsItem=function(q){if(i(q).parent().hasClass("rw_open")){i(q).parent().removeClass("rw_open");i(q).parent().find(".rw_news_item_content").hide();i(q).find(".rw_item_expand .rw_icon").removeClass("rw_iconfont_sub").addClass("rw_iconfont_add")}else{i(q).parent().addClass("rw_open");i(q).parent().find(".rw_news_item_content").show();i(q).find(".rw_item_expand .rw_icon").removeClass("rw_iconfont_add").addClass("rw_iconfont_sub")}}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/news/space-news-macro-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(g){RW.spacenews={};var f;var h;var j;var i;var b=0;var d=2;var c=false;AJS.toInit(function(){h=g(RW.Templates.Velocity.spaceNewsItemTemplate());j=g(RW.Templates.loadMoreButton());i=g("<ul></ul>");velocityCount=0;g("#main .rw_space_news_macro").each(function(q){if(q===0){k(g("#rw_space_news_macro",g(this)),b,true)}else{k(g("#rw_space_news_macro",g(this)),b,false)}});var o=g("#rw_blogpost_calendar");if(o.length>0){var p=g(".rw_sidebar_icon",o);var m=p.attr("data-tooltip");var n={getContent:function(){var q=g("<div></div>");q.append("<h5>"+m+"</h5>");a(q,0,true,AJS.Meta.get("space-key"),5,false,"",true);return q}};var l=RW.sidebar.createFlyout(p,"rw_flyout_space_news",n)}});function k(s,o,t){var p=g("#spaceKeyVarSpaceNews",s.parent()).html();var m=g("#stepSizeVarNews",s.parent()).html();var l=g("#collapsedVarSpaceNews",s.parent()).html();l=l.trim()==="true";var n=g("#labelsVarSpaceNews",s.parent()).html().trim();var r=g("#isHomePageVarSpaceNews",s.parent()).html();var q=g("#titleVarSpaceNews",s.parent()).html();f=g(RW.Templates.Velocity.spaceNewsContainerTemplate({isHomePage:r,collapsed:l,spaceKey:p,title:q}));if(!_.isEmpty(m)){m=g.trim(m)}if(p==undefined||p==""){if(parent!=undefined){if(parent.parent!=undefined&&(parent.parent.RW.spaceLayoutKey!=undefined&&parent.parent.RW.spaceLayoutKey!="")){p=parent.parent.RW.spaceLayoutKey}else{if(parent.RW.spaceLayoutKey!=undefined&&parent.RW.spaceLayoutKey!=""){p=parent.RW.spaceLayoutKey}}}}if(p==undefined||p==""){return}a(s,o,t,p,m,l,n)}function a(r,m,n,p,l,q,s,o){g.ajax({type:"GET",url:contextPath+"/rest/originaltheme/1.0/blog/post",data:{"start-index":m,"max-results":l,keys:p,labels:s,"profile-pic":false},dataType:"json",success:function(u){g(".rw_loader_box",r).remove();c=u.hasMore;if(typeof(u.blogPosts)!=="undefined"&&u.blogPosts.length>0){if(n){r.parent().find(".rw_sidebar_icon").removeClass("rw_hidden")}if(m==0){if(o){var y=i.clone();y.addClass("rw_flyout_items");y.attr("id","rw_space_news_list");r.append(y)}else{r.append(f.clone())}}var x=g("ul",r);g.each(u.blogPosts,function(){velocityCount++;e(this,x)});if(c){var v=j.clone();v.click(function(){v.after(RWJS.Templates.Utils.loader({size:"medium"}));v.remove();a(r,m+u.blogPosts.length,n,p,l,q,s,o);return false});x.append(v)}else{g("li:last-child a",x).addClass("rw_corners_bottom")}if(n){var A=g(".rw_sidebar_icon",r.parent());var w=A.attr("data-tooltip");var z={getContent:function(){var B=g("<div></div>");B.append("<h5>"+w+"</h5>");a(B,m,n,p,l,q,s,true);return B}};var t=RW.sidebar.createFlyout(A,"rw_flyout_space_news",z)}}else{if(m==0){r.parent().remove()}}},error:function(t){if(t.status!=0){g("#rw_space_news_macro",r).html("<div class='rw_warning_box'>"+t.status+" "+t.statusText+"</div>").show()}}})}function e(n,l){var p=h.clone(),o=g("a",p),q=g("a span",p),m=g(".rw_date",p);o.attr("title",n.title);o.attr("href",n.url);q.html(n.title);m.html(n.date);if(velocityCount%2==0){o.addClass("rw_space_news_alternating")}l.append(p)}RW.spacenews.showSpaceNews=function(l){var m=g(l).parent();m.find("#rw_space_news_container").show();m.find("#rw_space_news_show").hide();m.find("#rw_space_news_hide").show()};RW.spacenews.hideSpaceNews=function(l){var m=g(l).parent();m.find("#rw_space_news_container").hide();m.find("#rw_space_news_show").show();m.find("#rw_space_news_hide").hide()}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/spaces/spaces-macro-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(v,J){RW.spaces={};var y;var I;var r;var n;var A;var x;var h;var p;var z=[];var d=false;AJS.toInit(function(){if(v("#rw_spaces_macro").length>0){y=v(RW.Templates.Spaces.categoryItem({}));I=v(RW.Templates.Spaces.categorySection());r=v(RW.Templates.contentItem());n=v(RW.Templates.Spaces.section());A=v(RW.Templates.Spaces.empty());x=v(RWJS.Templates.Utils.loader({size:"medium"}));h=v(RW.Templates.item());for(var M=0;M<v(".rw_spaces_macro","#main").length;M++){var L=v(v(".rw_spaces_macro","#main")[M]);L.data("closedcategories",v("#spacesVarClosedCategories",L).html());L.data("showlogo",v("#spacesVarShowLogo",L).html());L.data("excludearchivedspaces",v("#spacesVarExcludeArchivedSpaces",L).html());L.data("includelinks",v("#spacesVarIncludeLinks",L).html());L.data("excludeDescriptions",v("#spacesVarExcludeDescriptions",L).html());p=v("#spacesVarManualPermissions",L).html();L.data("isspacedirectory",false);v("#rw_spaces_menu",L).attr("id","rw_spaces_menu_"+M);v(".rw_spaces_menu_button",L).addClass("aui-dropdown2-trigger").attr("aria-owns","rw_spaces_menu_"+M);w(L)}}});function w(L){var M=L.data("option");v(".rw_spaces_menu_button",L).html(v(".rw_option_"+M+" a",L).html());v(".rw_spaces_menu a",L).click(function(){v(".rw_spaces_menu_button",L).html(v(this).html());RW.spaces.filterSpaces(v(this).data("option"),L)});v(".rw_spaces_menu_button",L).click(function(){e(L)});selectedTeamLabel=v("#spacesVarSelectedTeam",L).html();L.data("category",selectedTeamLabel);if(selectedTeamLabel.length>0){e(L)}if(v("#spacesVarCategoryKey",L).length>0){F(v("#spacesVarCategoryKey",L).html(),v("#rw_spaces_macro_container",L),L)}else{L.data("selectedteamlabel",v("#spacesVarSelectedTeam",L).html());if(v("#spacesVarSpaceDirectory",L).html()==="true"){L.data("isspacedirectory",true)}H(v("#spacesVarSpacesSelectedTab",L).html(),L.data("selectedteamlabel"),"",L.data("isspacedirectory"),L);if(L.data("isspacedirectory")){e(L)}}}function t(L){L.data("closedcategories",v("#spacesVarClosedCategories",L).html());L.data("showlogo",v("#spacesVarShowLogo",L).html());L.data("excludearchivedspaces",v("#spacesVarExcludeArchivedSpaces",L).html());L.data("includelinks",v("#spacesVarIncludeLinks",L).html());L.data("excludeDescriptions",v("#spacesVarExcludeDescriptions",L).html());p=v("#spacesVarManualPermissions",L).html();return{closedCategories:L.data("closedcategories"),showLogo:L.data("showlogo"),excludeArchivedSpaces:L.data("excludearchivedspaces"),includeLinks:(L.data("includelinks")==="true"),isSpaceDirectory:L.data("isspacedirectory"),excludeDescriptions:L.data("excludeDescriptions"),showDashboards:L.data("showDashboards"),disabledDashboards:L.data("disabledDashboards"),disabledSubdashboards:L.data("disabledSubdashboards")}}function m(M){var L=v("#rw_spaces_macro_container",M);L.html(x);v.ajax({url:contextPath+"/rest/originaltheme/1.0/category?include-children=true&recursive=true&exclude-archived-spaces="+M.data("excludearchivedspaces")+"&exclude-links="+(M.data("includelinks")!=="true"),type:"GET",dataType:"json",success:function(N){L.html("");if(typeof(N)!=="undefined"&&N.length>0){K(N,v("#rw_spaces_macro_container",M),t(M),M)}s(v("#rw_spaces_macro_container",M),M,(typeof(N)==="undefined"||N.length==0))},error:function(N){if(N.status!=0){L.html("<div class='rw_warning_box'>"+N.status+" "+N.statusText+"</div>").show()}}})}function s(O,M,L){var N=v("<div></div>");q(N,M,L);O.append(N)}function f(M){var L=v("#rw_spaces_macro_container",M);L.html(x);v.ajax({url:contextPath+"/rest/originaltheme/1.0/category?exclude-archived-spaces="+M.data("excludearchivedspaces"),type:"GET",dataType:"json",success:function(N){L.html("");if(typeof(N)!=="undefined"&&N.length>0){g(N,L,M,t(M))}j(L,M,t(M))},error:function(N){if(N.status!=0){L.html("<div class='rw_warning_box'>"+N.status+" "+N.statusText+"</div>").show()}}})}function F(M,L,O){L.html(x);var N=t(O).closedCategories!=="true";v.ajax({url:contextPath+"/rest/originaltheme/1.0/category/"+M+"/?include-children=true&recursive="+N+"&exclude-archived-spaces="+O.data("excludearchivedspaces")+"&exclude-links="+(O.data("includelinks")!=="true"),type:"GET",dataType:"json",success:function(P){L.html("");if((typeof(P.children)==="undefined"||P.children.length==0)&&(typeof(P.subCategories)==="undefined"||P.subCategories.length==0)){L.html(A.clone())}else{b(P,L,t(O),O)}},error:function(P){if(P.status!=0){L.html("<div class='rw_warning_box'>"+P.status+" "+P.statusText+"</div>").show()}}})}function i(N,M){var L=v("#rw_spaces_macro_container",M);L.html(x);v.ajax({url:contextPath+"/rest/originaltheme/1.0/label/space?label="+N+"&exclude-archived-spaces="+M.data("excludearchivedspaces"),type:"GET",dataType:"json",success:function(O){L.html("");a(O,L,t(M))},error:function(O){if(O.status!=0){L.html("<div class='rw_warning_box'>"+O.status+" "+O.statusText+"</div>").show()}}})}function D(M){var L=v("#rw_spaces_macro_container",M);L.html(x);v.ajax({url:contextPath+"/rest/originaltheme/1.0/favourite/spaces?exclude-archived-spaces="+M.data("excludearchivedspaces"),type:"GET",dataType:"json",success:function(N){L.html("");if(typeof(N)!=="undefined"&&N.length>0){a({children:N},L,t(M))}else{L.html(A.clone())}},error:function(N){if(N.status!=0){L.html("<div class='rw_warning_box'>"+N.status+" "+N.statusText+"</div>").show()}}})}function q(M,N,L){M.html(x);v.ajax({url:contextPath+"/rest/originaltheme/1.0/space/uncategorized?exclude-archived-spaces="+N.data("excludearchivedspaces"),type:"GET",dataType:"json",success:function(O){M.html("");if(typeof(O)!=="undefined"&&O.length>0){a({children:O},M,t(N))}else{if(L){M.html(A.clone())}}},error:function(O){if(O.status!=0){M.html("<div class='rw_warning_box'>"+O.status+" "+O.statusText+"</div>").show()}}})}function e(L){if(L.data("isspacedirectory")){var M=v(".rw_space_filter_menu",L)}else{var M=v(".rw_option_categories","#"+v(".rw_spaces_menu_button",L).attr("aria-owns"))}if(!L.data("categories-loaded")){if(!L.data("isspacedirectory")){M.append("<li><a>Loading...</a></li>")}v.ajax({url:contextPath+"/rest/originaltheme/1.0/category",type:"GET",dataType:"json",success:function(N){L.data("categories-loaded",true);if(!L.data("isspacedirectory")){M.html("")}if(typeof(N)!=="undefined"&&N.length>0){v.each(N,function(){if(this.url==undefined||this.url==""){l(this,M,L)}})}else{if(!L.data("isspacedirectory")){M.remove()}}},error:function(N){}})}}function o(L){v.ajax({url:contextPath+"/rest/originaltheme/1.0/setting/user/spaces/selectedtab?value="+L,type:"PUT",dataType:"json",success:function(M){}})}function C(L){v.ajax({url:contextPath+"/rest/originaltheme/1.0/setting/user/spaces/selectedteam?value="+L,type:"PUT",dataType:"json",success:function(M){}})}function l(P,L,M){var O=h.clone(),N=v("a",O);O.attr("id","rw_team_"+RWJS.htmlEncode(P.nameKey));if(M.data("selectedteamlabel")===P.nameKey){if(M.data("isspacedirectory")){O.addClass("rw_active")}else{v(".rw_spaces_menu_button",M).html(RWJS.htmlEncode(P.name))}}N.html(RWJS.htmlEncode(P.name)).click(function(){v(".rw_spaces_menu_button",M).html(v(this).html());RW.spaces.filterSpaces("team",M,P.nameKey,"",M.data("isspacedirectory"))});L.append(O)}function K(N,L,M,O){if(typeof(N)!=="undefined"){v.each(N,function(){if(this.type==="category"){B(this,L,M,O)}})}}function g(N,L,O,M){if(typeof(N)!=="undefined"){v.each(N,function(){if(this.type==="category"){var P=this.nameKey;var R;if(M.showDashboards&&!M.disabledDashboards){R=v(RW.Templates.Spaces.categoryItemWithDashboard({}))}else{R=y.clone()}var W=v("div.rw_spaces_category_title",R),V=v("div.rw_spaces_category_title span",R),U=v("div.rw_spaces_subcategories",R),P=this.nameKey,Q=v(".rw_item_expand",R);RW.spaces.toggleCategorySection(W);V.html(RWJS.htmlEncode(this.name));if(this.link!=undefined&&this.link.defaultLink===false){var T=this.link.url;V.addClass("rw_custom_link");if(this.link.target!=undefined){V.append('<span class="rw_new_window"></span>');W.click(function(){window.open(T)})}else{W.click(function(){window.location=T})}}else{var S;if(M.showDashboards&&!M.disabledDashboards){S=Q}else{S=W}S.click(function(){RW.spaces.toggleCategorySection(this)}).click(function(X){F(P,U,O);W.unbind(X)});if(M.showDashboards&&!M.disabledDashboards){W.click(function(){window.location=contextPath+"/category/"+P})}}RWJS.PubSub.on("user-categories:fetched",function(){var Y=O.data("showUsers");if(!J.isEmpty(RW.Users.categories)&&RW.Users.categories.get(P)&&Y==true&&!W.hasClass("rw_has_user_category")){var X=new RW.Views.UserCategory.UserCategoryButtonView({categoryKey:P});V.after(X.render());W.addClass("rw_has_user_category")}});if(!J.isEmpty(RW.Users.categories)){RWJS.PubSub.trigger("user-categories:fetched")}L.append(R)}})}}function B(N,L,O,P){if(N.link!==undefined){}else{if(O.closedCategories!=="true"&&(N.children===undefined||N.children.length===0)&&(N.subCategories===undefined||N.subCategories.length===0)){return}else{if(O.closedCategories!=="true"&&(N.children===undefined||N.children.length===0)&&!u(N.subCategories)){return}}}var X;var U=false;if(!O.showDashboards||(N.parentKey===undefined&&O.disabledDashboards)||(N.parentKey!==undefined&&O.disabledSubdashboards)){X=y.clone()}else{X=v(RW.Templates.Spaces.categoryItemWithDashboard({}));U=true}var W=v("div.rw_spaces_category_title",X),V=v("div.rw_spaces_category_title span",X),R=v("ul.rw_content_list",X),T=v("div.rw_spaces_subcategories",X),M=v(".rw_item_expand",X);if(O.closedCategories==="true"){RW.spaces.toggleCategorySection(W)}V.html(RWJS.htmlEncode(N.name));if(N.link!=undefined&&N.link.defaultLink===false){var S=N.link.url;V.addClass("rw_custom_link");if(N.link.target!=undefined){V.append('<span class="rw_new_window"></span>');W.click(function(){window.open(S)})}else{W.click(function(){window.location=S})}}else{var Q;if(U){Q=M}else{Q=W}Q.click(function(){var Y=v(".rw_spaces_category_content",X);if(v("ul.rw_content_list",Y).children().length==0&&v("div.rw_spaces_subcategories",Y).children().length==0){v(".rw_no_items",L).remove();F(N.nameKey,Y,P)}RW.spaces.toggleCategorySection(this)});if(U){W.click(function(){window.location=contextPath+"/category/"+N.nameKey})}}if(O.closedCategories!=="true"&&(N.children===undefined||N.children.length===0)&&(N.subCategories===undefined||N.subCategories.length===0)){if(N.link===undefined||N.link.defaultLink===true){R.append(A.clone())}}else{k(N.children,R,O);K(N.subCategories,T,O,P)}RWJS.PubSub.on("user-categories:fetched",function(){var Z=P.data("showUsers");if(!J.isEmpty(RW.Users.categories)&&RW.Users.categories.get(N.nameKey)&&Z==true&&!W.hasClass("rw_has_user_category")){var Y=new RW.Views.UserCategory.UserCategoryButtonView({categoryKey:N.nameKey});V.after(Y.render());W.addClass("rw_has_user_category")}});if(!J.isEmpty(RW.Users.categories)){RWJS.PubSub.trigger("user-categories:fetched")}L.append(X)}function u(M){for(var L=0;L<M.length;L++){var N=M[L];if(N.children.length>0){return true}else{return u(N.subCategories)}}return false}function b(Q,L,N,O){if(Q.type==="category"){var P=I.clone(),M=v("ul.rw_content_list",P),R=v("div.rw_spaces_subcategories",P);k(Q.children,M,N);K(Q.subCategories,R,N,O);L.append(P)}}function c(O,L,N,M){if(O.type=="space"){E(O,L,N,M)}else{if(O.type=="link"){G(O,L,N,M)}}}function G(P,R,O,M){if(P==undefined){return}var S=v('<li><a><span class="rw_item_icon rw_icon"></span><span class="rw_item_content"></span></a></li>'),Q=v(".rw_item_icon",S),N=v(".rw_item_content",S),L=v("a",S);if(O%2===0){S.addClass("rw_alternating")}S.attr("id","rw_link_id_"+P.key);N.html(RWJS.htmlEncode(P.title));N.attr("title",P.title);if(P.icon!=undefined){Q.addClass("rw_iconfont_"+P.icon)}else{Q.remove()}if(P.target){L.prepend('<span class="rw_item_icon_right rw_icon rw_iconfont_new_window"></span>');L.attr("target","_blank");N.addClass("rw_has_icon_right")}L.attr("href",P.url).click(function(){linkedClicked=true;if(dropDownContainer.hasClass("rw_key_nav")){if(P.target=="_blank"){window.open(P.url)}else{window.location=P.url}dropDownContainer.hide();dropDownLoader.show();return false}else{return true}});R.append(S)}function E(L,M,P,O){var N=r.clone(),T=v("a",N),Q=v("span.rw_item_content",N),R=v("span.rw_item_favourite",N),S=L.key;Q.html(RWJS.htmlEncode(L.title));Q.attr("title",L.title);if(P%2===0){N.addClass("rw_alternating")}if(userIsLoggedIn){if(L.favourite){R.addClass("rw_selected").attr("title","Remove from your favourite list")}else{R.attr("title","Add to your favourite list")}R.click(function(U){RW.addOrRemoveFav(S,this);U.stopPropagation();return false});Q.addClass("rw_has_icon_right")}else{R.remove()}T.attr("href",contextPath+"/display/"+S);if(O.excludeDescriptions!="true"&&L.description!=undefined&&L.description!=""){T.append('<span class="rw_space_description rw_small_text">'+RWJS.htmlEncode(L.description)+"</span>")}if(O.showLogo==="true"&&typeof(L.logo)!=="undefined"){T.prepend('<span class="rw_item_icon"><img src="'+contextPath+L.logo+'" class="rw_space_logo" /></span>')}else{if(L.icon!=undefined){T.prepend('<span class="rw_item_icon rw_icon rw_iconfont_'+L.icon+'"></span>')}else{T.prepend('<span class="rw_item_icon rw_icon rw_iconfont_space"></span>')}}M.append(N)}function k(N,L,M){if(typeof(N)!=="undefined"){v.each(N,function(O){c(this,L,O,M)})}}function a(O,L,N){var P=n.clone(),M=v("ul.rw_content_list",P);if(typeof(O.children)!=="undefined"){v.each(O.children,function(Q){c(this,M,Q,N)})}L.append(P)}function j(L,P,O){var U;if(O.showDashboards&&!O.disabledDashboards){U=v(RW.Templates.Spaces.categoryItemWithDashboard({}))}else{U=y.clone()}var T=v("div.rw_spaces_category_title",U),R=v("div.rw_spaces_category_title span",U),Q=v("ul.rw_content_list",U),S=v("div.rw_spaces_subcategories",U),M=v(".rw_item_expand",U),N=this.nameKey;U.addClass("rw_uncategorized_spaces");RW.spaces.toggleCategorySection(T);R.html(unCategorizedSpaces);T.click(function(){RW.spaces.toggleCategorySection(this)}).click(function(V){q(Q,P,true);T.unbind(V)});M.click(function(){RW.spaces.toggleCategorySection(this)}).click(function(V){q(Q,P,true);M.unbind(V)});L.append(U)}function H(L,P,N,O,M){v("#rw_spacelist_menu .rw_active",M).removeClass("rw_active");v("#rw_spacelist_menu .rw_active_team",M).removeClass("rw_active_team");if(L==="team"){if(O){v("#rw_spacelist_menu #rw_team_"+P,M).addClass("rw_active")}else{v("#rw_spacelist_menu #rw_spacelist_team",M).addClass("rw_active");v("#rw_spacelist_menu #rw_team_"+P,M).addClass("rw_active_team")}if(P!==""){F(P,v("#rw_spaces_macro_container",M),M)}else{i(N,M)}}else{if(L==="my"){v("#rw_spacelist_menu #rw_spacelist_my",M).addClass("rw_active");D(M)}else{v("#rw_spacelist_menu #rw_spacelist_all",M).addClass("rw_active");if(M.data("closedcategories")==="true"){f(M)}else{m(M)}}}}RW.spaces.filterSpaces=function(L,M){RW.spaces.filterSpaces(L,M,"","",false)};RW.spaces.filterSpaces=function(L,M,N){RW.spaces.filterSpaces(L,M,"",N,false)};RW.spaces.filterSpaces=function(L,M,P,N,O){H(L,P,N,O,M);o(L);if(L==="team"){if(P!==""){C(P)}else{C(N)}}};RW.spaces.toggleCategorySection=function(L){v(L).closest(".rw_category").toggleClass("rw_closed")}})(RWJS.$,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/pages/pagetree-macro-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(e){var f;var a;var d=null;var m;RW.inPageTree=false;var i="none";var l="default";var h="public";var k="rw_in_key_nav";AJS.toInit(function(){f=e(RW.Templates.Velocity.pageItemContainer());a=e(RW.Templates.Velocity.pageChildrenListContainer());m=e(RWJS.Templates.Utils.loader({size:"medium"})).clone();e("#main .rw_page_tree_wrapper").each(function(q){if(q===0){n(e(this),true)}else{n(e(this),false)}})});function n(q,A){if(A){q.attr("id","rw_page_tree_wrapper");d=q}var u=e(".rw_param_start_page_id",q).attr("data-value");var t=e(".rw_param_theme",q).attr("data-value");var B=e(".rw_param_search",q).attr("data-value");var w=e(".rw_param_expand_collapse",q).attr("data-value");var s=e(".rw_param_page_id",q).attr("data-value");var z=e(".rw_param_space_key",q).attr("data-value");var y=e(".rw_param_space_admin",q).attr("data-value");var v=e(".rw_param_space_shortcuts",q).attr("data-value");if(z==undefined||z==""){if(parent!=undefined){if(parent.parent!=undefined&&(parent.parent.RW.spaceLayoutKey!=undefined&&parent.parent.RW.spaceLayoutKey!="")){z=parent.parent.RW.spaceLayoutKey;s=""}else{if(parent.RW.spaceLayoutKey!=undefined&&parent.RW.spaceLayoutKey!=""){z=parent.RW.spaceLayoutKey;s=""}else{return}}}}var r={inLeftColumn:A,startPageId:u,theme:t,pageId:s,spaceKey:z};if(B==="true"){r.search=true}else{r.search=false}if(w==="false"){r.expandCollapse=false}else{r.expandCollapse=true}if(y==="true"){r.spaceAdmin=true}else{r.spaceAdmin=false}if(v==="true"){r.spaceShortcuts=true}else{r.spaceShortcuts=false}var x=e(".rw_pagetree",q);if(r.theme===i){}else{if(r.theme===h){x.addClass("rw_theme_"+h)}else{x.addClass("rw_theme_"+l)}}c(e(".rw_quick_links_container",q),r);if(r.search){e("#rw_pagetree_query",q).originalThemeSearch(false)}if(e("#sv-active-indicator").length>0){x.removeAttr("style")}else{o(x,q,r)}}function o(s,q,t){var r="";if(t.startPageId!=""&&t.startPageId!=undefined){r=contextPath+"/rest/originaltheme/1.0/space/"+t.spaceKey+"/pagetree?selected="+t.pageId+"&root="+t.startPageId}else{r=contextPath+"/rest/originaltheme/1.0/space/"+t.spaceKey+"/pagetree?selected="+t.pageId}q.append(m);e.ajax({type:"GET",url:r,dataType:"json",success:function(x){var u=a.clone();u.addClass("rw_pagetree_list rw_toplevel rw_sidebar_content rw_corners");if(x.pages&&x.pages.length>0){j(u,t.pageId,x.pages);e(".rw_page_tree_container",s).append(u);if(t.expandCollapse===false){e(".rw_expand_collapse",s).remove()}else{e(".rw_expand_all",s).click(function(){p(e(this).parent().parent());return false});e(".rw_collapse_all",s).click(function(){g(e(this).parent().parent());return false})}RW.inPageTree=true;if(t.inLeftColumn){var w={getContent:function(){var z=e("<h5>"+"Page tree"+'</h5><div class="rw_pagetree rw_corners"><div class="rw_page_tree_container"></div></div>');var y={inleftColumn:false,startPageId:t.startPageId,theme:"none",expandCollapse:false,pageId:t.pageId,spaceKey:t.spaceKey};o(z,q,y);return z}};var v=RW.sidebar.createFlyout(e("#rw_sidebar_icon_pagetree",q).removeClass("rw_hidden"),"rw_flyout_pagetree",w)}}m.remove();s.removeAttr("style")},error:function(u){if(u.status!=0){alert(u.status+" "+u.statusText)}}})}function c(s,u){if(u.spaceShortcuts){var r=new RW.sidebar.quickLinksObject(s,u.spaceKey,u.spaceAdmin);r.getLinks();if(u.inLeftColumn){var t={getContent:function(){var w=e("<div class='rw_quick_links_container'></div>");var v=new RW.sidebar.quickLinksObject(w,u.spaceKey,false);v.getLinks();return w}};var q=RW.sidebar.createFlyout(e("#rw_sidebar_icon_quicklinks"),"rw_flyout_quicklinks",t)}}}function j(q,r,t,s){e.each(t,function(){var x=f.clone(),u=e(".rw_item_icon",x),w=e("a",x);w.html(this.title);w.attr("href",this.url);w.attr("title",RWJS.htmlDecode(this.title));u.attr("id",this.id);x.attr("id","rw_pagetree_item_"+this.id);if(this.hasChildren){u.children("span").attr("class","rw_icon rw_icon_plus")}if(r==this.id){w.addClass("rw_current_page_item")}if(this.children&&this.children!=undefined&&this.children!=[]&&this.children.length>0){u.children("span").attr("class","rw_icon rw_icon_minus");var v=a.clone();j(v,r,this.children,s);x.append(v)}q.append(x);if(this.hasChildren){u.bind("click",b);if(s){u.trigger("click",[true])}}})}function b(w,t){var r=e(this).closest("li");var v=e(this).children("span");var s=e(this).attr("id");var x=e(this).closest(".rw_page_tree_wrapper");var q=false;if(x.hasClass("rw_key_nav")){q=true}if(v.hasClass("rw_icon_plus")){if(v.closest("li").children("ul").size()>0){v.closest("li").children("ul").show();v.attr("class","rw_icon rw_icon_minus");if(q){RW.startKeyable(d.not("li ul:visible"),null,"page_tree",v.closest("li"))}return}r.append(m);e.ajax({type:"GET",url:contextPath+"/rest/originaltheme/1.0/page/"+s+"/children",dataType:"json",success:function(z){m.remove();var y=a.clone();if(z.pages.length>0){j(y,s,z.pages,t);r.append(y);v.attr("class","rw_icon rw_icon_minus");if(q){RW.startKeyable(d.not("li ul:visible"),null,"page_tree",v.closest("li"))}}},error:function(y){if(y.status!=0){alert(y.status+" "+y.statusText)}}})}else{if(v.hasClass("rw_icon_minus")){var u=v.closest("li").children("ul");u.hide();v.attr("class","rw_icon rw_icon_plus");if(q){RW.startKeyable(d,null,"page_tree",v.closest("li"))}}}}function p(q){if(q.hasClass("rw_loaded")){e(".rw_pagetree_list",q).show();e(".rw_icon.rw_icon_plus",q).attr("class","rw_icon rw_icon_minus")}else{var r=e(".rw_icon.rw_icon_plus",q);e.each(r,function(){e(this).trigger("click",[true])});q.addClass("rw_loaded")}return false}function g(q){e(".rw_pagetree_list",q).hide();e(".rw_toplevel",q).show();e(".rw_icon.rw_icon_minus",q).attr("class","rw_icon rw_icon_plus")}RW.startPageTreeNavigation=function(){if(RW.leftColumnHidden){RW.showLeftColumn()}var q;if(e(".rw_current_page_item",d).length>0){q=e(".rw_current_page_item",d).closest("li")}else{q=d.find("li:first-child").first()}RW.startKeyable(d,null,"page_tree",q);RWJS.scrollToElementWithOffset(q,100)};RW.quitPageTreeNavigation=function(){RW.quitKeyable()}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/base-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(f){var b;var d;AJS.toInit(function(){e();f("#rw_toolbar .rw_toolbar_dropdown_button").click(function(){h(f(this));return false});f("#rw_toolbar .ajs-button a").click(function(){a()});var o=f("#action-menu-link").next();o.css({margin:0,right:"auto",left:0});if(f("#user-menu-link").outerWidth()>f("#browse_and_user_menu div.user").outerWidth()){f("#browse_and_user_menu div.user").css("width",f("#user-menu-link").outerWidth()-2)}l();i();if(RW.userDashboardRedirection){f("a.confluence-userlink, a.userLogoLink").live("click",function(){var p=f(this).attr("data-username");if(p!=undefined&&p!=""&&f(this).attr("href").indexOf("editmyprofilepicture.action")==-1){window.location=contextPath+"/users/view-user-dashboard.action?username="+p;return false}})}f("#main").find(".rw_dashboard").find(".wiki-content ul.inline-task-list li").click(c);if(f("#rw_breadcrumbs_container").length>0){var n=f("#rw_breadcrumbs_container");f("#breadcrumbs",n).prepend(f("#rw_breadcrumbs",n).html());f("#breadcrumbs .first",n).removeClass("first")}});var k=function(n){f("#rw_toolbar li.dropdown_open").removeClass("dropdown_open");f(this).addClass("dropdown_open")};function h(n){j();n.parent().addClass("dropdown_open");f("#rw_toolbar .toolbar-dropdown-menu-item").bind("mouseenter",k);f(document).bind("click",a)}var a=function(){f("#rw_toolbar li.dropdown_open").removeClass("dropdown_open");f("#rw_toolbar .toolbar-dropdown-menu-item").unbind("mouseenter",k);f(document).unbind("click",a)};function j(){a();try{if(AJS.InlineDialog.current!=null){AJS.InlineDialog.current.hide()}}catch(n){}}function e(){f("#rw_toolbar .toolbar-dropdown-menu-item").each(function(){dd=f(".ajs-drop-down",this);if(!dd.length){return}dd=dd[0];dd.hide=function(){};dd.show=function(){}});var o=f("#action-view-storage-link");if(o.length>0){var n=f("#action-view-storage-link").clone();o.after(n);o.remove();n.click(function(p){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");p.preventDefault();return false})}}var g=function(n){f.ajax({type:"PUT",url:n,dataType:"json",success:function(o){},error:function(o){alert("Server error while updating watching page")}}).done(function(){if(d.length>0){d.toggleClass("rw_selected");if(f("span",d).hasClass("rw_selected")){d.attr("title","Stop watching")}else{d.attr("title","Watch")}}})};function l(){b=f("#rw_page_optional_favourite");d=f("#rw_page_optional_watch");if(b.length>0){f.ajax({type:"GET",url:contextPath+"/rest/originaltheme/1.0/page/"+AJS.params.pageId+"/favourite/",dataType:"json",success:function(o){if(o.result){b.addClass("rw_selected");b.attr("title","Remove from your favourite list")}else{b.removeClass("rw_selected");b.attr("title","Add to your favourite list")}b.show();b.click(function(){RW.addOrRemoveFavPage(AJS.params.pageId,b)})},error:function(o){}})}if(d.length>0){if(f("#space-watching").length>0){d.addClass("rw_selected");d.show().attr("title","Watching space");d.click(function(){window.location=contextPath+"/users/viewnotifications.action"})}else{var n;f.ajax({type:"GET",url:contextPath+"/rest/originaltheme/1.0/page/"+AJS.params.pageId+"/watch/",dataType:"json",success:function(o){if(o.result){d.addClass("rw_selected");n=contextPath+"/rest/originaltheme/1.0/page/"+AJS.params.pageId+"/watch/remove";d.attr("title","Stop watching")}else{d.removeClass("rw_selected");n=contextPath+"/rest/originaltheme/1.0/page/"+AJS.params.pageId+"/watch/add";d.attr("title","Watch")}d.show();d.click(function(){g(n)})},error:function(o){}})}}}function i(){var n=f(".rw_news_dashboard_button");if(n.length>0){n.click(function(){f(this).toggleClass("rw_selected");var o="remove";if(f(this).hasClass("rw_selected")){o="add"}f.ajax({url:contextPath+"/rest/originaltheme/1.0/blog/post/"+f(this).data("id")+"/dashboard/"+o,type:"PUT",success:function(p){},error:function(p){}});return false})}}function c(r){if(!r.offsetX){r.offsetX=(r.pageX-f(r.target).offset().left);r.offsetY=(r.pageY-f(r.target).offset().top)}if(r.offsetX<22&&r.offsetY<22){var p=f(r.currentTarget).data("inline-task-id");var o=f(r.currentTarget).closest(".inline-task-list").data("inline-tasks-content-id");f(r.currentTarget).toggleClass("checked");var n;if(f(r.currentTarget).hasClass("checked")){n="CHECKED"}else{n="UNCHECKED"}var q={status:n,trigger:"VIEW_PAGE"};AJS.safe.ajax({url:contextPath+"/rest/inlinetasks/1/task/"+o+"/"+p+"/",type:"POST",dataType:"json",data:q,success:function(s){}})}}var m=new Array();RW.addOrRemoveFav=function(p,q){if(m[q.id]==null){m[q.id]=true;var o;var r;var n;if(f(q).hasClass("rw_selected")){o=contextPath+"/rest/originaltheme/1.0/space/"+p+"/favourite/remove";f(q).attr("title","Add to your favourite list")}else{o=contextPath+"/rest/originaltheme/1.0/space/"+p+"/favourite/add";f(q).attr("title","Remove from your favourite list")}f(q).toggleClass("rw_selected");f.ajax({type:"PUT",url:o,dataType:"json",success:function(s){},error:function(s){m[q.id]=null;f(q).toggleClass("rw_selected")}}).done(function(){m[q.id]=null;if(RW.cacheStorage){var s=RW.remoteUser+"."+AJS.contextPath()+"/rest/originaltheme/1.0/category";RW.cacheStorage.clearCacheKeysStartingWith(s)}})}};RW.addOrRemoveFavPage=function(o,n){var p;var q=false;if(n.hasClass("rw_selected")){p=contextPath+"/rest/originaltheme/1.0/page/"+o+"/favourite/remove";n.attr("title","Add to your favourite list")}else{p=contextPath+"/rest/originaltheme/1.0/page/"+o+"/favourite/add";n.attr("title","Remove from your favourite list");q=true}f.ajax({type:"PUT",url:p,dataType:"json",success:function(r){},error:function(r){}}).done(function(){n.toggleClass("rw_selected");if(o===AJS.params.pageId){f("#page-favourite span").toggleClass("selected");f("#page-favourite span").toggleClass("ie-page-favourite-selected");if(q){b.addClass("rw_selected")}else{b.removeClass("rw_selected")}}})};RW.showPopupLoader=function(){f(".rw_popup_container").hide();f(".rw_popup_loader").show()}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/shortcuts/shortcuts-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(a){AJS.toInit(function(){var c=false;var d=false;var e=false;var b=false;a(document).keydown(function(g){if((typeof Confluence==="undefined")||Confluence.KeyboardShortcuts.enabled!=false){if(!a(g.target).is("input, textarea, select")&&!g.metaKey&&!g.ctrlKey&&!g.shiftKey&&!g.altKey){if(g.which==71){b=true}if(g.which==78&&!e&&!b){var f=a(".ic-display-comment-view");if(!f||f.length===0){e=true;RW.closePopups();RW.openMainKeyNavigation()}}}}});a(document).keypress(function(f){var g=String.fromCharCode(f.which);if((typeof Confluence==="undefined")||Confluence.KeyboardShortcuts.enabled!=false){if(!a(f.target).is("input, textarea, select")){if(g=="/"){Confluence.KeyboardShortcuts.closeDialog();RW.showSearch()}else{if(g=="?"){Confluence.KeyboardShortcuts.openDialog()}}}}});a(document).keyup(function(g){if((typeof Confluence==="undefined")||Confluence.KeyboardShortcuts.enabled!=false){if(!a(g.target).is("input, textarea, select")){if(g.which==71&&b){setTimeout(function(){b=false},700)}if(g.shiftKey&&g.which==70){if(RW.inFullscreen){RW.closeFullscreen()}else{RW.openFullscreen()}}else{if((g.altKey&&g.which==53||g.which==56)||g.which==219){if(RW.leftColumnHidden){RW.showLeftColumn()}else{RW.hideLeftColumn()}}else{if(g.which==77&&g.shiftKey){if(typeof RW.remoteUser!="undefined"){if(RW.inFavPageAndSpace){RW.hideFavourite()}else{RW.showFavourite()}}}else{if(g.which==80){var f=a(".ic-display-comment-view");if(!f||f.length===0){if(RW.inTopMenu){RW.hideTopMenu()}else{RW.showTopMenu(true)}}}else{if(g.shiftKey&&g.which==65){if(RW.activity.inActivityPopup){RW.hideActivitiyStream()}else{RW.showActivitiyStream()}}else{if(g.which==65){if(a("#view-attachments-link").length){window.location=a("#view-attachments-link").attr("href")}}else{if((g.shiftKey==true&&g.which==55)||g.which==191){RW.showSearch()}else{if(g.which==78){e=false;RW.closeMainKeyNavigation()}}}}}}}}if(g.which==27){RW.killPopupAndNavigationEvents()}}}})});RW.inCategoryKeyNavigation=false;RW.startCategoryKeyNavigation=function(b){RW.inCategoryKeyNavigation=true;RWJS.scrollToElementWithOffset(a("#rw_category_menu"),100);RW.startKeyable(RW.category.object,"horizontal","category_menu",b);a(document).bind("click",function(c){RW.quitCategoryKeyNavigation();a(document).unbind(c)})};RW.quitCategoryKeyNavigation=function(){RW.inCategoryKeyNavigation=false;RW.quitKeyable()};RW.closePopups=function(){a(".rw_inline_dialog").remove();if(RW.inCategoryDropDown){RWA.Category.hideCategory()}if(RW.hideMainSearchResult){RW.hideMainSearchResult()}if(RW.inFavPageAndSpace==true){RW.hideFavourite()}if(RW.inTopMenu==true){RW.hideTopMenu()}if(typeof RW.blogs!="undefined"&&RW.blogs.inBlogsPopup==true){RW.blogs.hideBlogsPopup()}if(typeof RW.activity!="undefined"&&RW.activity.inActivityPopup){RW.hideActivitiyStream()}if(RW.inSearch){RW.hideSearch()}if(RW.inCategoryKeyNavigation==true){RW.quitCategoryKeyNavigation()}};RW.killPopupAndNavigationEvents=function(){if(RW.inFavPageAndSpace==true){RW.hideFavourite()}else{if(RW.inTopMenu==true){RW.hideTopMenu()}else{if(typeof RW.blogs!="undefined"&&RW.blogs.inBlogsPopup==true){RW.blogs.hideBlogsPopup()}else{if(typeof RW.activity!="undefined"&&RW.activity.inActivityPopup){RW.hideActivitiyStream()}else{if(RW.inCategoryDropDown==true){RWA.Category.hideCategory()}else{if(RW.inAttachments==true){RW.hideAttachments()}else{if(RW.inFullscreen==true){RW.closeFullscreen()}else{if(RW.inStickyBar==true){RW.hideSearchStickyBar()}else{if(RW.inCategoryKeyNavigation){RW.quitCategoryKeyNavigation()}else{if(RW.inPageTree){RW.quitPageTreeNavigation()}else{if(RW.inMenuBarNavigation){RW.stopMenuKeyNavigation()}else{if(RW.sideMenu&&RW.sideMenu.isActive&&RW.sideMenu.isActive()){RW.sideMenu.close()}}}}}}}}}}}}if(RW.inSearch){RW.hideSearch()}}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/utils/ui-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.ui==="undefined"){RW.ui={}}(function(b){var a;RW.ui.popup=function(h,g,e){var f=b(RW.Templates.popupTemplate()).clone();f.attr("id",h);var d=b("a.rw_close_button",f);var c=b(".rw_popup_content",f);b("body").append(f);b(".rw_popup_top h1",f).html(g);if(e!==undefined){b(".rw_popup_top",f).prepend(RWJS.Templates.Icons.getIcon({icon:e}));b(".rw_popup_top h1",f).addClass("rw_has_icon")}this.show=function(){f.show();b("#rw_popup_bg").show();window.scroll(0,0)};this.hide=function(){f.hide();b("#rw_popup_bg").hide()};this.showLoader=function(){b(".rw_popup_container",f).hide();b(".rw_popup_loader",f).show()};this.hideLoader=function(){b(".rw_popup_container",f).show();b(".rw_popup_loader",f).hide()};this.content=function(i){b(".rw_popup_container",f).show();b(".rw_popup_content",f).html(i)};this.clear=function(i){b(".rw_popup_content",f).html("")};this.obj=f;this.closeButton=d;this.container=c;return this};RW.getSideMenuTitle=function(c){if(a==undefined){a=b('<div class="rw_side_menu_title rw_corners_top"></div>')}var d=a.clone();d.html(c);return d}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/users/user-settings-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(b){var a;AJS.toInit(function(){if(b("#rw_personal_first_time").html()=="true"){RW.showUserSettingsPopup()}});RW.closeUserSettingsDialog=function(){a.remove();window.location.reload();return true};RW.closeUserSettingsDialogWithNoReload=function(){a.remove();return true};RW.showUserSettingsPopup=function(){a=RWJS.openIframeDialog(contextPath+"/originaltheme/dialog/users/edit-user-settings.action?","User Configuration","admin")}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/users/im-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(b,a){AJS.toInit(function(){RW.initHipchatStatus()});RW.initHipchatStatus=function(){a.each(b(".rw_hipchat_detail_wrapper"),function(d){c(d)})};function c(e){var f=b("#rw_hipchat_icon",e);if(f.length>0){var g=b("#rw_hipchat_username",e).html();var d=true;b.ajax({type:"GET",url:contextPath+"/rest/originaltheme/1.0/hipchat/user/show?user-id="+g,dataType:"json",success:function(h){if(h.name!=null){f.append('<span class="rw_icon_container_10 rw_icon_hipchat_'+h.status+'" ></span>');if(h.statusMessage!=null&&h.statusMessage!=""){f.attr("title","HipChat - "+h.name+": "+h.statusMessage)}else{f.attr("title","HipChat - "+h.name)}if(h.userId!==undefined){b("#rw_go_to_hipchat_button",e).attr("href",b('meta[name="rw-hipchat-base-url"]').prop("content")+"/people/show/"+h.userId)}}}})}}})(RWJS.$,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/legacy/twitter-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(f){var b="https://api.twitter.com/1/statuses/user_timeline.json?include_rts=true";var j="http://search.twitter.com/search.json";var l="http://twitter.com";var p=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];var v;var c;var x;var h=null;var y;var o;var m;var n=f("<div class='rw_info_box'></div>");AJS.toInit(function(){RW.initTwitter()});RW.initTwitter=function(){var A=f("#main .rw_twitter_macro_container");if(A.length>0){c=f(f("#rw_twitter_wrapper_template").html());x=f(f("#rw_twitter_item").html());h=f(f("#rw_twitter_avatar").html());y=f(f("#rw_twitter_loader_template").html());v=f(f("#rw_twitter_wrapper_template").html());o=f(f("#rw_twitter_load_more_template").html());m=f(f("#rw_confluence_status_item_template").html());for(var z=0;z<A.length;++z){RW.initModule(A.eq(z))}}};RW.initModule=function(A){var E=f(A).find("#rw_twitter_max_id").html();var G=f(A).find("#rw_twitter_username").html();var F=f(A).find("#rw_twitter_count").html();var D=f(A).find("#rw_twitter_hashtag").html();var B=f(A).find("#rw_twitter_include_activitystream").html();var C=f(A).find("#rw_twitter_confluence_username").html();var z=y.clone();if(f(A).find("#rw_load_more_twitter_link").length>0){f(A).find("#rw_load_more_twitter_link").find(".rw_load_more_text").html("");f(A).find("#rw_load_more_twitter_link").find(".rw_loader_128_image").show()}else{f(A).append(z)}if(D){i(D,F,A,C,B,E,z)}else{w(G,F,A,C,B,E,z)}};function t(z){z="  "+z;z=z.replace(/http:\/\/\S+/g,'<a href="$&" target="_blank">$&</a>');z=z.replace(/https:\/\/\S+/g,'<a href="$&" target="_blank">$&</a>');z=z.replace(/(\s)+(#[A-Za-z������0-9\-\_]+)/g,' <a href="http://twitter.com/$2" target="_blank">$2</a>');z=z.replace(/(\s)+(@[A-Za-z�����0-9\-\_]+)/g,' <a href="http://twitter.com/$2" target="_blank">$2</a>');z=z.substring(1);return z}function g(A){var B=A.split(" ");var z=B[3].split(":");return(Date.UTC(B[5],e(B[1]),B[2],z[0],z[1],z[2],0))}function a(A){var B=A.split(" ");var z=B[4].split(":");return(Date.UTC(B[3],e(B[2].split(",")[0]),B[1],z[0],z[1],z[2],0))}function e(A){for(var z=0;z<p.length;++z){if(p[z]==A){return z}}return -1}function i(z,D,A,C,H,E,G){var I=D;I++;var B="";if(E>0){B="&max_id="+E}if(H=="true"){var F=new Array();q(D,C,F,A,G)}else{G.remove();A.append(n.clone().append("No status updates found."))}}function w(B,C,z,A,G,D,F){var E=new Array();var H=C;H++;if(B==""){if(G=="true"){var E=new Array();q(C,A,E,z,F)}else{F.remove();z.append(n.clone().append("No status updates found."))}}else{if(G=="true"){var E=new Array();q(C,A,E,z,F)}else{F.remove();z.append(n.clone().append("No status updates found."))}}}function q(G,E,L,A,M){var H="status";var D="";var F="";var I="";var K=E;var z="";var C="";var B=f(A).find("#rw_twitter_item_count").html();var J=G;f.ajax({url:contextPath+"/rest/originaltheme/1.0/activitystream/?types="+H+"&category-key="+D+"&labels="+F+"&spaces="+I+"&authors="+K+"&favourite="+z+"&network="+C+"&start-index="+B+"&max-results="+J,type:"GET",dataType:"json",success:function(O){var P=new Array();var N=null;f.each(O.activitySets,function(){N=this.author;f.each(this.items,function(){var Q=this;Q.url=N.profilePic;Q.spaceName=N.username;Q.fullName=N.fullName;P.push(Q)})});d(s(L,P,G),A,G,M)},error:function(N){if(N.status!=0){alert(N.status+" "+N.statusText)}}})}function s(z,F,E){var D=0;var C=0;var B=new Array();for(var A=0;A<E;++A){if((z[D]&&!F[C])||(z[D]&&F[C]&&z[D].timestamp>F[C].timestamp)){B.push(z[D]);D++}else{if(F[C]){B.push(F[C]);C++}}}return B}function d(E,z,D,I){var F;if(f("ul",z).length>0){F=f("ul",z)}else{F=v.clone()}var G=o.clone();G.click(function(){RW.initModule(f(this).parent())});var B=0;var C=0;var J=z.find("#rw_twitter_item_count").html();var H=false;f.each(E,function(){if(B!=D){if(this.type=="user_tweet"||this.type=="search_tweet"){F.append(u(this));C=this.id}else{F.append(k(this));J++}H=true}B++});z.append(F);if(H){z.find("#rw_load_more_twitter_link").remove();z.find("#rw_twitter_max_id").html(C);z.find("#rw_twitter_item_count").html(J);z.append(G)}else{z.find("#rw_load_more_twitter_link").remove()}I.remove();try{Confluence.Binder.userHover()}catch(A){}if(J==0&&E.length==0){z.append(n.clone().append("No status updates found."))}f("li:first-child",z).addClass("rw_corners_top");Confluence.Binder.userHover()}function r(){var z={type:"",imageurl:"",text:"",timestamp:"",profileurl:"",id:"","isRetweet:":""};return z}function u(D){var A=x.clone(),B=f(".rw_twitter_profile_picture",A),C=f(".rw_twitter_content",A),z=f(".rw_date",A),E=f(".rw_twitter_profile_link",A);B.attr("src",D.imageurl);C.html(D.text);z.html(RWJS.getTimeString(D.timestamp));E.attr("href",D.profileurl);if(D.isRetweet=="true"){A.addClass("rw_retweet_item")}return A}function k(E){var A=m.clone(),z=f(".userLogoLink",A),F=f(".userLogo",A),D=f(".rw_content_holder",A),B=f(".rw_date",A);D.html(E.title);F.attr("src",E.url);if(E.timestamp==undefined&&E.date!=undefined){E.timestamp=E.date}B.html(RWJS.getTimeString(E.timestamp));z.attr("data-username",E.spaceName);var C=f("<span class='rw_small_text rw_author'>  <a href='"+contextPath+"/users/view-user-dashboard.action?username="+E.spaceName+"' class='rw_user_link url fn confluence-userlink' data-username='"+E.spaceName+"'>"+E.fullName+"</a></span>");B.after(C);z.attr("href",contextPath+"/display/~"+E.spaceName);return A}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/shortcuts/key-nav-popup-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(h){var r;var p;var o;var d;var s="categories";var v="pagetree";var w="menu";var e="favourite";var i="mywork";var m="activitystream";var u="topmenu";var j="allblog";var q="allblogpost";var x="prevblog";var y="nextblog";var g="dashboardlink";var f="blogs";var c="search";var t="cancel";var b="empty";var k="sidebar";RW.openMainKeyNavigation=function(){RW.quitKeyable();if(typeof RW.blogs!="undefined"&&RW.blogs.inBlogsPopup==true){RW.blogs.hideBlogsPopup()}if(RW.inStickyBar==true){RW.hideSearchStickyBar()}r=h(RW.Templates.Keyable.item());p=h(RW.Templates.Keyable.emptyItem());o=h(RW.Templates.Keyable.row());d=h(RW.Templates.Keyable.container()).clone();var F=new Array();if(h("#rw_blog_mode").length>0){if(h("#rw_blog_posts").length>0){var z=o.clone();z.addClass("rw_row_1");z.append(a(g));if(RW.blogPortalEnabled&&h(".rw_blog_info_icon").length==0){z.append(a(j))}if(h("#rw_side_menu").length>0){z.append(a(k))}d.append(z);F[0]=z;var E=o.clone();E.addClass("rw_row_2");E.append(a(b));E.append(a(t));E.append(a(b));d.append(E);F[1]=E}else{if("#blogpost_container"){var C=b;var B=b;if(h("#rw_blogpost_nav").find(".rw_prev").length>0){C=x}if(h("#rw_blogpost_nav").find(".rw_next").length>0){B=y}var z=o.clone();z.addClass("rw_row_1");z.append(a(g));z.append(a(q));if(h("#rw_side_menu").length>0){z.append(a(k))}d.append(z);F[0]=z;var E=o.clone();E.addClass("rw_row_2");E.append(a(C));E.append(a(t));E.append(a(B));d.append(E);F[1]=E}else{closeMainKeyNavigation()}}var A=o.clone();A.addClass("rw_row_3");if(RW.remoteUser!=undefined){if(RW.versionChecker.comparedTo59>=0){A.append(a(i))}else{A.append(a(e))}}else{A.append(a(b))}A.append(a(c));A.append(a(m));d.append(A);F[2]=A;l(F,1,1)}else{var D=false;if(h("#rw_side_menu").length>0){D=true}var z=o.clone();z.addClass("rw_row_1");z.append(a(g));if(h("#rw_category_menu").length>0){z.append(a(s))}if(h("#rw_top_menu").length>0){z.append(a(u))}if(D){if(h("ul:visible","#rw_menu_bar").not("#rw_space_menu").length>0){z.append(a(w))}else{if(h("#rw_menu_bar_wrapper").hasClass("rw_closed")){z.append(a(w))}}}d.append(z);F[0]=z;var E=o.clone();E.addClass("rw_row_2");if(h("#rw_page_tree_wrapper").length>0){E.append(a(v))}else{E.append(a(b))}E.append(a(t));if(D){E.append(a(k))}else{if(h("ul:visible","#rw_menu_bar").not("#rw_space_menu").length>0){E.append(a(w))}else{if(h("#rw_menu_bar_wrapper").hasClass("rw_closed")){E.append(a(w))}else{E.append(a(b))}}}d.append(E);F[1]=E;var A=o.clone();A.addClass("rw_row_3");if(RW.remoteUser!=undefined){if(RW.versionChecker.comparedTo59>=0){A.append(a(i))}else{A.append(a(e))}}A.append(a(m));A.append(a(c));if(RW.blogPortalEnabled){A.append(a(f))}d.append(A);F[2]=A;l(F,1,1)}h("body").append(d);h("#rw_popup_bg").show();d.show();h(".rw_keynavigation_item",d).bind("click",function(H){h(".rw_selected",d).removeClass("rw_selected");h(this).addClass("rw_selected");var G=h(this).parent().index();var I=h(this).index();h(document).unbind("keydown.bottomkeynav");l(F,G,I)})};RW.closeMainKeyNavigation=function(){h("#rw_popup_bg").hide();h(document).unbind("keydown.bottomkeynav");var z=h(".rw_keynavigation_container").find(".rw_selected");if(z!=undefined){n(z)}h(".rw_keynavigation_container").remove()};RW.startMenuKeyNavigation=function(){console.error("Method is deprecated - use RW.startConf5MenuKeyNavigation() instead.")};RW.startConf5MenuKeyNavigation=function(){RW.quitKeyable();var A=new Array();var C=h("ul:visible","#rw_menu_bar").not("#rw_space_menu");var B=0;h.each(h(C).get().reverse(),function(){h.each(h(this).children("li:visible"),function(){A[B]=this;B++})});var z=0;if(h(".rw_current",C).length>0){z=h(".rw_current",C).html();h(".rw_current",C).remove();h(A[z]).removeClass("dropdown_open")}if(A.length>0){h(A[z]).addClass("rw_selected")}h(".rw_current",C).remove();RW.inMenuBarNavigation=true;RWJS.scrollToElementWithOffset(h(A[z]),100);h("li",C).mouseenter(function(){RW.stopMenuKeyNavigation();h("li",C).unbind("mouseenter")});h(document).bind("keydown.menukeynav",function(G){if(G.keyCode===39){if(z<A.length-1){h(A[z]).removeClass("rw_selected");z++;h(A[z]).addClass("rw_selected")}}else{if(G.keyCode===37){if(z>0){h(A[z]).removeClass("rw_selected");z--;h(A[z]).addClass("rw_selected")}}else{if(G.keyCode===38){h("#rw_menu_bar").click();G.preventDefault()}else{if(G.keyCode===13||G.keyCode===40){if(h(A[z]).hasClass("toolbar-dropdown-menu-item")||(h(A[z]).hasClass("ajs-menu-item"))){RW.quitKeyable();var E=h("#action-menu").find("ul");h(A[z]).children("a").click();h(A[z]).append("<div style='display:none;' class='rw_current'>"+z+"</div>");h(".assistive",E).hide();RW.startKeyable(E,"single_column","menu_dropdown",h(E).children("li:first"))}else{var D=h(A[z]).children("a");var F=D.data("events");if(F!=null&&typeof(F.click)!==undefined){D[0].click()}else{window.location.href=h(A[z]).children("a").attr("href")}}G.preventDefault()}}}}})};RW.stopMenuKeyNavigation=function(){h(document).unbind("keydown.menukeynav");h("#rw_menu_bar").find(".rw_selected").removeClass("rw_selected")};function n(A){var z=h(A).children(".rw_keynavigation_item_target").html();if(z==t){}else{if(z==s){if(RW.inCategoryKeyNavigation){RW.quitCategoryKeyNavigation()}else{RW.startCategoryKeyNavigation()}}else{if(z==w){if(h("#rw_menu_bar_button").length>0&&h("#rw_menu_bar_wrapper").hasClass("rw_closed")){h("#rw_menu_bar_button").click()}RW.startConf5MenuKeyNavigation()}else{if(z==v){if(RW.inPageTree){RW.startPageTreeNavigation()}}else{if(z==e||z==i){if(RW.inFavPageAndSpace){RW.hideFavourite()}else{RW.showFavourite()}}else{if(z==u){if(RW.inTopMenu){RW.hideTopMenu()}else{RW.showTopMenu(true)}}else{if(z==m){if(RW.activity.inActivityPopup){RW.hideActivitiyStream()}else{RW.showActivitiyStream()}}else{if(z==q){h("#rw_blogpost_nav").find(".rw_all").click()}else{if(z==y){h("#rw_blogpost_nav").find(".rw_next").click()}else{if(z==x){h("#rw_blogpost_nav").find(".rw_prev").click()}else{if(z==j){window.location.href=contextPath+"/blog"}else{if(z==g){window.location.href=contextPath+"/homepage.action"}else{if(z==f){window.location.href=contextPath+"/blog"}else{if(z==c){RW.showSearch()}else{if(z==k){RW.sideMenu.startKeyNav()}}}}}}}}}}}}}}}}function a(z){var A;if(z==null||z==b){A=p.clone()}else{A=r.clone();h(A).children(".rw_keynavigation_item_target").html(z);h(A).children(".rw_item_content").html(AJS.I18n.getText("rw.keynav."+z));A.attr("id","rw_navigation_item_"+z)}return A}function l(B,D,F){var H=B[D];var C=h(".rw_keynavigation_item, .rw_keynavigation_empty_item",H);var G=h(".rw_keynavigation_item",H);var z=h(".rw_keynavigation_empty_item",H);var A;if(z.length==1&&h(z.get(0)).index()==2){A=0}else{A=C.length-G.length}F=F-A;if(F>=G.length){F=G.length-1}if(F<0){F=0}var E=G[F];h(E).addClass("rw_selected");h(document).bind("keydown.bottomkeynav",function(J){if(J.keyCode===78){return}if(J.keyCode===13){RW.closeMainKeyNavigation();return}h(".rw_selected",d).removeClass("rw_selected");if(J.keyCode===38){if(D==0){h(E).addClass("rw_selected")}else{var I;if(C.length>2&&h(C[0]).attr("id")==h(E).attr("id")){I=0}else{if(C.length>2&&h(C[C.length-1]).attr("id")==h(E).attr("id")){I=B[D-1].children("div").length-1}else{I=Math.floor(B[D-1].children("div").length/2)}}l(B,D-1,I)}J.preventDefault()}else{if(J.keyCode===39){if((F+1)<G.length){F=F+1;h(E).removeClass("rw_selected");E=G[F];h(E).addClass("rw_selected")}else{h(E).addClass("rw_selected")}}else{if(J.keyCode===37){if(F>0){F=F-1;h(E).removeClass("rw_selected");E=G[F];h(E).addClass("rw_selected")}else{h(E).addClass("rw_selected")}}else{if(J.keyCode===40){if(B.length>(D+1)){h(document).unbind("keydown.bottomkeynav");var I;if(C.length>2&&h(C[0]).attr("id")==h(E).attr("id")){I=0}else{if(C.length>2&&h(C[C.length-1]).attr("id")==h(E).attr("id")){I=B[D+1].children("div").length-1}else{I=Math.floor(B[D+1].children("div").length/2)}}l(B,D+1,I)}else{h(E).addClass("rw_selected")}J.preventDefault()}else{if(J.keyCode===13){RW.closeMainKeyNavigation()}}}}}})}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/pages/label-popup-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(g){var k=0;var h=10;var m=0;var n=10;var d;var l;var b;var f;function a(u,A,v){var t=RWJS.getPopupWidth();var y=RWJS.getPopupHeight();var B=70;if(t>1200){t=1200}var w=new AJS.Dialog({width:t,height:y,id:"rw_popup_dialog"});w.addButton("Classic Label View",function(){window.location=v},"rw_left");w.addButton("Close",function(){w.remove();RWJS.hideLoader()});var z="All content with label \u003cb\u003e{0}\u003c/b\u003e.".replace("{0}",A);z=z.replace("<b>","");z=z.replace("</b>","");w.addHeader(z,"");l=g("<div><h2></h2><ul></ul></div>").clone();var p=l.clone();p.addClass("rw_labels_section");g("h2",p).html("Pages");g("ul",p).addClass("rw_items rw_content_list");var s=l.clone();s.addClass("rw_labels_section");g("h2",s).html("Blog Posts");g("ul",s).addClass("rw_items rw_content_list");var o=g('<div class="rw_board"></div>').clone();var x=g('<div class="rw_board_column"></div>');var r=x.clone();var q=x.clone();r.css("width","50%");q.css("width","50%");if(u){r.append(s);q.append(p)}else{r.append(p);q.append(s)}o.append(r);o.append(q);w.addPanel("",o,"");w.show();d=g(RW.Templates.iconContentItem());b=g(RWJS.Templates.Utils.loader({size:"medium"}));f=g(RW.Templates.loadMoreButton());c(A,k,h,s,true,f.clone());i(A,m,n,p,true,f.clone())}function c(r,v,o,p,t,u){var s=g(".rw_items",p);var q=b.clone();s.append(q);g.ajax({url:contextPath+"/rest/originaltheme/1.0/label/blogpost",type:"GET",dataType:"json",data:{label:r,"start-index":v,"max-results":o},success:function(w){q.remove();if(w.blogPosts!=undefined&&w.blogPosts.length>0){g.each(w.blogPosts,function(){e(this,s,"blogpost")});g("li:even",s).addClass("rw_alternating")}else{s.append("<div class='rw_info_box'>"+"No items found"+"</div>")}if(t&&w.blogPosts.length==o){p.append(u);j(r,p,u,c,v,o)}if(w.blogPosts.length==o){u.show()}},error:function(w){if(w.status!=0){navigationContainer.html("<div class='rw_warning_box'>"+w.status+" "+w.statusText+"</div>").show()}}})}function i(q,v,o,s,t,u){var r=g(".rw_items",s);var p=b.clone();r.append(p);g.ajax({url:contextPath+"/rest/originaltheme/1.0/label/page",type:"GET",dataType:"json",data:{label:q,"start-index":v,"max-results":o},success:function(w){p.remove();if(w.pages!=undefined&&w.pages.length>0){g.each(w.pages,function(){e(this,r,"page")});g("li:even",r).addClass("rw_alternating")}else{r.append("<div class='rw_info_box'>"+"No items found"+"</div>")}if(t&&w.pages.length==o){s.append(u);j(q,s,u,i,v,o)}if(w.pages.length==o){u.show()}},error:function(w){if(w.status!=0){navigationContainer.html("<div class='rw_warning_box'>"+w.status+" "+w.statusText+"</div>").show()}}})}function e(p,o,u){var t=d.clone(),q=g(".rw_item_icon",t),s=g(".rw_item_content",t),r=g("a",t);q.html('<span class="rw_icon_container_16 icon-'+u+'"></span>');s.html(p.title+" <span class='rw_small_text'>("+p.spaceName+")</span>");r.attr("href",p.url);o.append(t)}function j(r,q,s,p,u,o){var t=u;s.click(function(){s.hide();t=t+o;var v=p(r,t,o,q,false,s)})}RW.initLabelClickEvent=function(o,p){o.click(function(s){s.preventDefault();var r=s.target.parentNode.className;if(s.target.nodeName=="SPAN"&&(s.target.parentNode.className).indexOf("show-labels-editor")==-1&&(s.target.parentNode.className).indexOf("no-labels-message-container")==-1){var q=s.target.innerHTML;a(p,q,s.target.parentNode.href)}else{if(s.target.nodeName=="A"&&(s.target.parentNode.className).indexOf("show-labels-editor")==-1&&(s.target.parentNode.className).indexOf("no-labels-message-container")==-1){var q=s.target.innerHTML;a(p,q,s.target.href)}}})}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/footer/footer.js' */
if(typeof RW==="undefined"){var RW={}}(function(g){if(typeof RW.Footer==="undefined"){RW.Footer={}}var o="footer-column-links";var f="footer-column-logo";var a="footer-column-blogs";var k="footer-column-questions";var u="footer-column-custom";var i=300;var n=g('<li><a><span class="rw_item_icon"></span><span class="rw_item_content"></span></a></li>');var l=g('<li><a><span class="rw_item_icon"></span><span class="rw_item_content"></span></a></li>');var j=g('<a class="rw_edit_button"><span class="rw_icon rw_iconfont_edit"></span></a>');var r;var c;var b;AJS.toInit(function(){if(g("#rw_footer_wrapper").length>0){w()}});function w(){r=g("#rw_footer_wrapper");c=g("#rw_footer_container");b=g("#rw_main");m();if(RW.isConfluenceAdministrator){var x=j.clone();x.attr("href",contextPath+"/admin/originaltheme/footer.action").attr("title","Edit");g("#rw_footer_container",r).append(x)}d()}function m(){var x=c.height()+80;b.css("padding-bottom",x+100);r.css("height",x)}function e(){var x=g("#rw_footer_columns",r);var y=g(".rw_column",x).length;g("#rw_footer_columns_container",r).css("max-width",y*i).show()}function d(){g.ajax({type:"GET",url:contextPath+"/rest/originaltheme/1.0/footer/",dataType:"json",contentType:"application/json",cache:false,success:function(x){if(x.columns!=undefined){g.each(x.columns,function(){if(this.type===o){v(this)}if(this.type===a){h(this)}if(this.type===k){p(this)}})}if(x.cacheAbort){t()}},error:function(x){if(x.status!=0){console.log(x.status+" "+x.statusText)}}}).done(function(){t()})}function t(){e();m();s()}function s(){if((".rw_custom_content",r).length>0){setInterval(function(){m()},1000)}}function v(z){var y=g("#rw_footer_column_"+z.nameKey,r);var x=g("ul",y);if(y.length==0){return}var A=false;if(z.links!=undefined){g.each(z.links,function(){A=true;q(this,x)})}if(A){if(z.name!=undefined&&z.name!=""){g("h3",y).html(RWJS.htmlEncode(z.name))}else{g("h3",y).remove()}RWJS.adjustIconTextSpace(x)}else{y.remove()}}function p(A){var y=g("#rw_footer_column_"+A.nameKey,r);y.html("");var z=new Backbone.Model(A);var x=new RW.Views.QuestionsModuleView({model:z,el:y});x.render({callback:function(B){B.$(".rw_popup_loader").remove()}})}function h(A){var y=g("#rw_footer_column_"+A.nameKey,r);y.html("");var z=new Backbone.Model(A);var x=new RW.Views.BlogModuleView({model:z,el:y});x.render({callback:function(B){B.$(".rw_popup_loader").remove();RWJS.adjustIconTextSpace(g("ul",y))}})}function q(z,B){if(z==undefined){return}var C=n.clone(),A=g(".rw_item_icon",C),y=g(".rw_item_content",C),x=g("a",C);C.attr("id","rw_link_id_"+z.id);y.html(RWJS.htmlEncode(z.title));if(z.icon==undefined){A.remove()}else{A.addClass("rw_iconfont_"+z.icon)}if(z.target=="_blank"){x.prepend('<span class="rw_item_icon_right rw_icon rw_iconfont_new_window"></span>');x.attr("target","_blank");y.addClass("rw_has_icon_right")}x.attr("href",RWJS.htmlEncodeUrl(z.url));B.append(C)}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/spaces/spacegroup-min.js' */
(function(a){AJS.toInit(function(){var c=a("#rw_space_nav .rw_space_group");if(c.length>0){var b=new RWJS.InlineDialog({$button:c,id:"spaceGroupMenu",width:350});c.click(function(){b.open();b.showLoader();var d=AJS.Meta.get("abstract-category-key");var e=contextPath+"/rest/originaltheme/1.0/space/uncategorized?exclude-archived-spaces=false";if(d!=="undefined"&&d!==""){e=contextPath+"/rest/originaltheme/1.0/category/"+d+"/child"}a.ajax({url:e,type:"GET",dataType:"json",success:function(f){for(var g in f.spaces){var h=f.spaces[g];h.url=contextPath+"/display/"+h.key}b.setContent(a(RW.Templates.siblingList({ulClass:"rw_dialog_menu",list:f,activeKey:AJS.Meta.get("space-key")})));b.hideLoader()},error:function(){}});return false})}})})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/spaces/simple-menu.js' */
if(typeof RW==="undefined"){var RW={}}(function(f){var h;var c;var i=undefined;var j;var b=false;var e=["cw-manage-watchers","checkbox"];var k=["#inline-dialog-shareContentPopup",".checkbox"];AJS.toInit(function(){h=f("#rw_simple_menu_button");if(h.length>0){c=f("#rw_simple_menu_content");var l;h.click(function(m){if(i===undefined){i=RWJS.InlineDialog({width:400,$button:h,id:"page_menu",persistsInDom:true});j=i.close;i.close=d;i.open(c.children());c.show();l=i.getDomRepresentation();l.click(function(){f("#inline-dialog-confluence-watch").hide();if(f("#watch-content-button").hasClass("active")){f("#watch-content-button").removeClass("active");AJS.$(document).trigger("hideLayer",["inlineDialog",{id:"confluence-watch"}])}f("#inline-dialog-shareContentPopup").hide();if(f("#shareContentLink").hasClass("active")){f("#shareContentLink").removeClass("active");AJS.$(document).trigger("hideLayer",["inlineDialog",{id:"shareContentPopup"}])}});g(l)}else{i.toggle()}if(!b){b=true;if((typeof Confluence==="undefined")||Confluence.KeyboardShortcuts.enabled!=false){f(document).keyup(function(n){if(!f(n.target).is("input, textarea, select")){if(n.which===27){i.close()}}})}}return false});a("#shareContentLink","#inline-dialog-shareContentPopup",83);a("#watch-content-button","#inline-dialog-confluence-watch",87)}});function g(l){f("#ellipsis",l).click(function(n){var m=f(n.currentTarget).parent();f(n.currentTarget).remove();f(".hidden-crumb",m).removeClass("hidden-crumb")})}function a(m,l,n){if(f(m).length>0){f(document).keyup(function(t){if(f(l).length>0&&f(l).is(":visible")){if(n!==87&&t.which===n&&Confluence.KeyboardShortcuts.enabled){var o=f("#rw_inline_dialog_page_menu");if(!h.hasClass("active")&&o.length>0&&!o.is(":visible")){h.click()}var q=f(m).offset();var s=q.top+30;var r=q.left;var p=f(l);p.offset({top:s,left:r});p.addClass("rw_in_simple_menu")}}});f(m).on("click",function(p){var o=f(l);o.addClass("rw_in_simple_menu")})}}function d(o){var n=true;if(n&&o&&o.target){var m=!_.every(e,function(p){return !f(o.target).hasClass(p)});n=!m;if(n){var l=!_.every(k,function(p){return !f(o.target).parents(p).length>0});n=!l}}if(n){j(o)}}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/spaces/space-nav-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,d,a){AJS.toInit(function(){var j=c("#rw_space_nav");if(j.length>0){c(".rw_favourite_space",j).click(function(k){RW.addOrRemoveFav(c(k.currentTarget).data("key"),k.currentTarget);return false})}var h=c("#rw_space_menu_button",j);if(h.length>0){var f;var g=false;var e=h.next();if(h.data("blogSpace")){var i=300;if(e.data("is-space-admin")){i=500}f=new RWJS.InlineDialog({$button:h,id:"blogMenu",width:i,title:RWJS.htmlEncode(AJS.Meta.get("space-name")),persistsInDom:"true"})}else{var i=400;if(e.data("is-space-admin")){i=600}f=new RWJS.InlineDialog({$button:h,id:"spaceMenu",width:i,title:RWJS.htmlEncode(AJS.Meta.get("space-name")),persistsInDom:"true"})}e.hide();e.removeClass();e.addClass("rw_dialog_menu");h.click(function(){f.setButton(h);if(!g){b(f,e,h.data("blogSpace"));g=true}else{f.toggle()}return false})}});function b(f,e,g){f.open();f.setContent(e);if(g){e.show()}else{e.css("display","table")}}})(RWJS.$,RWJS.Backbone,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/search/search-macro-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(b,a){AJS.toInit(function(){b(".rw_search_macro_wrapper").each(function(d){var c=b(".rw_param_space_key",this).attr("data-value");b("#rw_searchmacro_query",this).originalThemeSearch(a.isEmpty(c))})})})(RWJS.$,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/search/search-popup-min.js' */
(function(b){var a;AJS.toInit(function(){if(b("#rw_search_popup_button").length>0){b("#rw_search_popup_button").click(RW.showSearch)}});RW.showSearch=function(){RW.closePopups();RW.inSearch=true;a=b(RW.Templates.searchPopup());b("#rw_main").append(a);a.click(function(c){c.stopPropagation()});b("#rw_search_popup_query",a).originalThemeSearch();b("#rw_search_popup_query",a).focus();setTimeout(function(){b(document).bind("click",RW.hideSearch)},100);RWJS.PubSub.trigger("search-popup:show")};RW.hideSearch=function(){b(document).unbind("click",RW.hideSearch);RW.inSearch=false;a.remove();RWJS.PubSub.trigger("search-popup:hide")}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/blogs/views/create-blogpost-list-view-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,a,d,b){RW.Views.CreateBlogpostListView=d.View.extend({dialog:undefined,events:{"click a":"createBlog"},initialize:function(e){if(e){this.dialog=e.dialog}},render:function(){this.$el.html(RW.Templates.Blogs.blogLinkList({blogs:this.model.toJSON()}));return this},createBlog:function(f){window.location=contextPath+"/pages/createblogpost.action?spaceKey="+c(f.currentTarget).data("spaceKey");this.dialog.showLoader()}})})(RWJS.jQuery,RWJS._,RWJS.Backbone,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/utils/theme-utils-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Util==="undefined"){RW.Util={}}(function(a){RW.Util.versionCompare=function(h,g,k){if(!h||!g){return false}var j=k&&k.lexicographical;var e=k&&k.zeroExtend;var c=h.split(".");var f=g.split(".");function b(i){return(j?/^\d+[A-Za-z]*\d*$/:/^\d+$/).test(i)}if(!c.every(b)||!f.every(b)){return NaN}if(e){while(c.length<f.length){c.push("0")}while(f.length<c.length){f.push("0")}}if(!j){c=c.map(Number);f=f.map(Number)}for(var d=0;d<c.length;++d){if(f.length===d){return 1}if(c[d]===f[d]){}else{if(c[d]>f[d]){return 1}else{return -1}}}if(c.length!==f.length){return -1}return 0}})(AJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/macros/calendar/calendar-dashboard-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}if(typeof RW.Models==="undefined"){RW.Models={}}if(typeof RWJS==="undefined"){var RWJS={}}(function(d,k,j,l){var b=30;var m=86400000;var g=b;var f=0;var c;var h=0;var i;var e;var a=false;RW.Views.CalendarModuleView=k.View.extend({loadMoreButtonClicked:false,pluginVersion:undefined,i18nMessages:undefined,completeEventList:undefined,dialogSequence:0,subCalendars:undefined,calendarFilter:function(o){var n=false;if(o.toJSON){var p=o.toJSON();if(p.hasOwnProperty("eventsHidden")){n=p.eventsHidden}}else{if(o.hasOwnProperty("eventsHidden")){n=o.eventsHidden}}return n===false},events:{"mouseover ul.events > li":"highlightItem","mouseout ul.events > li":"deHighlightItem","click ul.events > li":"renderEventPopupContent","click .more-events":"loadMoreHandler"},deHighlightItem:function(n){d(n.currentTarget).removeClass("highlighted")},highlightItem:function(n){this.$(".highlighted").removeClass("highlighted");d(n.currentTarget).addClass("highlighted")},renderEventPopupContent:function(r){var u=this;var w=u.getI18nMessages();var p=[w["calendar3.month.short.january"],w["calendar3.month.short.february"],w["calendar3.month.short.march"],w["calendar3.month.short.april"],w["calendar3.month.short.may"],w["calendar3.month.short.june"],w["calendar3.month.short.july"],w["calendar3.month.short.august"],w["calendar3.month.short.september"],w["calendar3.month.short.october"],w["calendar3.month.short.november"],w["calendar3.month.short.december"]];var n=d(r.currentTarget).data("eventId");var v=this.completeEventList.get(n);var o=v.toJSON();var t=this.subCalendars[o.subCalendarId];var q=d(Confluence.TeamCalendars.Templates.eventPopup({contextClass:"",baseUrl:AJS.contextPath(),event:d.extend(d.extend({},o),{colour:t.color,subCalendarDisplayName:t.name,subCalendarId:t.parentId?t.parentId:t.id,inviteesSupported:t.inviteesSupported})}));var s=AJS.InlineDialog(d(r.currentTarget),this.dialogSequence++,function(z,y,D){d(z).html(q);z.css("padding","0");d(".field-subcalendar-name",q).show();d(".event-delete",q).remove();d(".event-hyperlink-separator",q).remove();var x=new Date(o.start);var C=new Date(o.end);var A=contextPath+"/calendar/mycalendar.action?"+d.param({startDayOfMonth:x.getDate(),startMonthOfYear:x.getMonth(),startYear:x.getUTCFullYear(),editSubCalendarId:t.id,editEventId:o.id,editView:"month"});d(".event-edit",q).attr("href",A);var E=d(".field-duration",q);if(o.localizedStartDate!==o.localizedEndDate){var F=x.getDate()+" "+p[x.getMonth()];var B=C.getDate()+" "+p[C.getMonth()];if(x.getDate()<10){F="0"+F}if(C.getDate()<10){B="0"+B}E.empty().text(F+" - "+B)}else{if(!((o.allDayFlipped?!o.allDay:o.allDay))){E.empty().text(o.localizedStartTime+" - "+o.localizedEndTime)}}D()});s.show()},initialize:function(o){var n=d(RW.Templates.Calendar.module());this.setElement(n);if(o&&o.pluginVersion){this.pluginVersion=o.pluginVersion}this.subCalendars={};this.getI18nMessages()},render:function(){var n=d(RW.Templates.Calendar.module());this.$el.html(n.html());return this.$el},activate:function(){f=0;var n=d(RW.Templates.Calendar.module());this.$el.html(n.html());g=b;f=0;c=undefined;h=0;i=undefined;e=undefined;a=false;this.setup()},setup:function(){var n=this;RWJS.PubSub.bind("calendar-module:events-fetched",function(p){o++;if(o===h&&h!==0){n.$(".rw_loader_box").remove();n.loadMoreEvents();n.completeEventList=p[0]}});i=new RW.Models.Events();e=new RW.Models.Calendars();n.initCalendars(i,e);var o=0},loadMoreClicked:function(){this.loadMoreButtonClicked=true;this.loadMoreEvents();return false},loadMoreEvents:function(){var q=new Date(c);q.setTime(c.getTime()+f*m);q.setHours(0,0,0,0);var n=new RW.Models.Events();var o=new Date(c.getTime()+(f+b)*m);i.each(function(r){if(new Date(r.get("start"))<=o){n.add(r)}});var p=n.find(function(u){var r=new Date(u.get("end"));if(u.get("allDay")){r.setTime(r.getTime()+m-1)}if(r>q||(r>q&&u.get("allDay"))){var t=new Date(c);var s=new Date(u.get("start"));t.setHours(0,0,0,0);s.setHours(0,0,0,0);f=Math.ceil((s.getTime()-t.getTime())/m);if(f>0){a=true}f=f<0?0:f;f+=b;return true}});if(p){this.addEvents(i,e,this)}else{f+=b;if(g<500){g+=b;this.setup()}else{this.$(".rw_loader_box").remove();this.$("#rw_calendar_dashboard").append(RW.Templates.infoBox({content:"No upcoming events found."}))}}},addEvents:function(p,s,n){f=4;var q=new Date(c);if(a){q.setHours(0,0,0,0)}q.setTime(q.getTime()+f*m);var r=new Date(q);r.setTime(q.getTime()-b*m);r.setHours(0,0,0,0);var o=new Date();o.setHours(0,0,0,0);p.each(function(w){var y=new Date(w.get("start"));var u=new Date(w.get("end"));if(w.get("allDay")){u.setTime(u.getTime()+m)}if((u<=q&&u>=r||(y>=r&&y<=q&&w.get("allDay")))){var v=n.$("#"+w.get("id").replace("@","_")+"_"+n.formatDateWithoutTime(u));if(v.length===0){var t=new Date(w.get("start"));var x=new Date(w.get("end"));n.addEvent(s,w,new Date(t.getFullYear(),t.getMonth(),t.getDate()),new Date(x.getFullYear(),x.getMonth(),x.getDate()),o,q)}}})},loadMoreHandler:function(){this.$("li.rw_hidden").removeClass("rw_hidden");this.$(".more-events").addClass("hidden");return false},addEvent:function(B,E,o,A,C,v){var w=this;var D="rw_div_"+o.getDate()+"-"+o.getMonth()+"-"+o.getYear();var z=this.$("#"+D);if(o.getTime()>=C.getTime()){if(z.length===0){var y=d(RW.Templates.Calendar.dateEventHolder({date:o.getDay(),ulId:D,day:o.getDate(),month:o.getMonth(),i18nMessages:w.getI18nMessages()}));if(o.getTime()===C.getTime()){d(".other-days",y).hide();d(".today",y).show()}var q=w.$(".events:not(#"+D+") li");if(q.length>=10){y.addClass("rw_hidden");w.$(".more-events").removeClass("hidden")}d("#rw_calendar_dashboard").append(y);z=this.$("#"+D)}var x=E.get("id").replace("@","_")+"_"+w.formatDateWithoutTime(o);var t=w.$("#"+x);if(t.length===0&&d("li",z).length<10){var u=d(RW.Templates.Calendar.event({calendarEvent:E.toJSON(),subCalendar:B.get(E.get("subCalendarId")).toJSON(),eventId:x}));z.append(u);if(RWJS.isIE()&&RWJS.isIE()<=9){d(".rw_ellipsis",u).hide()}}else{var s=d("li:last .event-details",z);var r=z.data("hiddenEventCount");if(!r){var p=d('<div class="clear"></div><div class="x-more-events"></div>');s.after(p);r=0}z.data("hiddenEventCount",++r);if(r==1){d(".x-more-events",z).html(AJS.format("And {0} more event...",r))}else{d(".x-more-events",z).html(AJS.format("And {0} more events...",r))}}}var n=o;n.setTime(o.getTime()+m);if(n<=A&&n<=v){this.addEvent(B,E,n,A,C,v)}},initCalendars:function(o,q){var n=new RW.Models.CalendarList();var p=this;if(this.$(".rw_loader_box").length===0){this.$("#rw_calendar_dashboard").append(RWJS.Templates.Utils.loader({size:"medium"}))}n.fetch({success:function(){n.get("payload").each(function(r){if(p.calendarFilter(r)){q.add(r.get("subCalendar"));h++}});if(q.isEmpty()){p.$(".rw_loader_box").remove();p.$("#rw_calendar_dashboard").append(RW.Templates.infoBox({content:"You have no calendars in your list."}))}n.get("payload").each(function(r){if(p.calendarFilter(r)){p.fetchCalendar(r,o)}})},error:function(){p.$(".rw_loader_box").remove();p.$("#rw_calendar_dashboard").append(RW.Templates.infoBox({content:"Unable to load data."}));console.error("Unable to fetch subCalendars.")}})},fetchCalendar:function(s,n){var o=this;var p=s.get("childSubCalendars");if(p){h--;e.remove(s.get("subCalendar").id);l.each(p,function(u){var t=new RW.Models.Calendar(u);if(o.calendarFilter(u)){e.add(t.get("subCalendar"));h++;o.fetchCalendar(t,n)}})}else{var q=s.get("subCalendar");o.subCalendars[q.id]=q;var r=new RW.Models.Events();r.url=function(){var u=new Date();u.setDate(u.getDate());var t=o.formatDate(u);c=u;var w=o.createEndDate(u,g);var v="";if(q.timeZoneId){v="&userTimeZoneId="+encodeURIComponent(q.timeZoneId)}return contextPath+"/rest/calendar-services/1.0/calendar/events.json?subCalendarId="+q.id+v+"&start="+t+"&end="+w};r.fetch({success:function(){if(RW.Util.versionCompare(o.pluginVersion,"5.2.10",{zeroExtend:true})>-1){var t=r.models[0].get("events");l.each(r.models[0].get("events"),function(u){n.add(u)})}else{r.each(function(u){n.add(u)})}RWJS.PubSub.trigger("calendar-module:events-fetched",[n])},error:function(){if(d.trim(d("#rw_calendar_dashboard_subcalendar_error_"+q.id).html())===""){var u=o.$("#rw_calendar_dashboard");var t=d(RW.Templates.infoBox({content:AJS.format("Unable to load subcalendar \"{0}\" data.",q.name)}));t.addClass("rw_margin_bottom");u.append(t)}RWJS.PubSub.trigger("calendar-module:events-fetched",[n]);console.error("Unable to fetch events.")}})}},createEndDate:function(n,p){var o=new Date(n);o.setTime(n.getTime()+p*2*m);o=this.formatDate(o);return o},formatDate:function(n){return encodeURIComponent(n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2)+"T00:00:00Z")},formatDateWithoutTime:function(n){return encodeURIComponent(n.getFullYear()+"-"+("0"+(n.getMonth()+1)).slice(-2)+"-"+("0"+n.getDate()).slice(-2))},getI18nMessages:function(){var n=this;if(!n.i18nMessages){n.i18nMessages={};d("fieldset input",d("<div/>",{html:d("#team-calendars-messages").html()})).each(function(){n.i18nMessages[this.name]=this.value})}return n.i18nMessages}});RW.Models.Calendar=k.Model.extend({});RW.Models.Calendars=k.Collection.extend({initialize:function(){this.model=RW.Models.Calendar}});RW.Models.CalendarList=j.Model.extend({startIndex:0,namedAttributes:{payload:RW.Models.Calendars,success:"boolean"},initialize:function(){this.set("payload",new RW.Models.Calendars())},url:function(){return contextPath+"/rest/calendar-services/1.0/calendar/subcalendars.json"}});RW.Models.Event=k.Model.extend({});RW.Models.Events=k.Collection.extend({initialize:function(){this.model=RW.Models.Event},fetchUrl:function(q,o,p,n){return contextPath+"/rest/calendar-services/1.0/calendar/events.json?subCalendarId="+q+"&userTimeZoneId="+o+"&start="+p+"&end="+n},comparator:function(n){return(n.get("start"))}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/macros/calendar/calendar-dashboard-controller-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RWJS==="undefined"){var RWJS={}}(function(c,d,b,a){AJS.toInit(function(){var e=c(".rw_calendar_dashboard");if(e.length>0){a.each(e,function(g){if(c(g).data("pluginEnabled")){var f=new RW.Views.CalendarModuleView({version:c(g).data("pluginVersion")});c(g).html(f.render());f.activate()}else{c(g).html(RW.Templates.infoBox({content:"The Team Calendars add-on wasn\'t enabled."}))}})}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/layoutboard/layoutboard-models-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}if(typeof RW.Models.Layout==="undefined"){RW.Models.Layout={}}(function(c,d,b,a){RW.TYPE_SPACE_TEMPLATE="space-template";RW.Models.Layout.Sections=b.Collection.extend({comparator:function(e){return e.get("group")+""+e.get("position")}});RW.Models.Layout.Items=b.Collection.extend({comparator:function(e){return e.getPosition()}});RW.Models.Layout.Boards=b.Collection.extend();RW.Models.Layout.VersionListItems=b.Collection.extend();RW.Models.Layout.Templates=b.Collection.extend();RW.Models.Layout.QuickLinkMacros=b.Collection.extend({initialize:function(){this.url=contextPath+"/rest/originaltheme/1.0/layoutboard/RW_TYPE_PLACEHOLDER/suggested-macros";this.model=RW.Models.Layout.QuickLinkMacro}});RW.Models.Layout.Board=b.Model.extend({namedAttributes:{sections:RW.Models.Layout.Sections,type:"string",contentKey:"string",name:"string",description:"string",enabled:"boolean",defaultBoard:"boolean",layoutBoardInfo:RW.Models.Layout.LayoutBoardInfo},parse:function(e){if(e==undefined){e={id:this.get("type")+"_"+this.get("contentKey")}}else{e.id=e.type+"_"+e.contentKey}return e},initialize:function(e){RW.Models.Layout.Sections.model=RW.Models.Layout.Section;RW.Models.Layout.Items.model=RW.Models.Layout.Item;if(!e.sections){this.setSections(new RW.Models.Layout.Sections())}},url:function(){return contextPath+"/rest/originaltheme/1.0/layoutboard/"+this.getType()+"/"+this.get("contentKey")+"/"},addSection:function(f,g){if(f==undefined){f=100}var e=new RW.Models.Layout.Section({position:this.getSectionsInGroup(g).length,width:f,group:g});var i=this.get("contentKey")+"_"+this.get("type")+"-section-"+g+"-"+this.getSectionsInGroup(g).length;var h=a.pluck(this.get("sections").models,"id");while(a.contains(h,i)){i=i+Math.floor((Math.random()*100)+1)}e.set("id",i);this.get("sections").add(e);return e},removeSection:function(h){var e=h.get("items");var g=true;for(var f=0;f<e.length;f++){if(e.models[f].get("locked")){g=false}}if(g){h.destroy()}},getSectionsInGroup:function(e){var f=a.filter(this.get("sections").models,function(g){return g.get("group")==e});return f},getMaxGroup:function(){if(this.get("sections").length>0){var e=this.get("sections").max(function(f){return f.get("group")});return e.get("group")}},getGroupList:function(){var e=[];this.get("sections").each(function(f){var g=f.get("group");if(a.isUndefined(e[g])){e[g]=new Array()}e[g].push(f)});return e},sortLayoutBoard:function(){var e=this.get("sections");if(e!=undefined){e.each(function(g){var f=g.get("items");if(f!=undefined){g.set("items",f.sortBy(function(h){return h.get("position")}))}});this.set("sections",e.sortBy(function(f){return f.get("position")}))}}});RW.Models.Layout.Section=b.Model.extend({namedAttributes:{id:"string",position:"number",items:RW.Models.Layout.Items,width:"number",group:"number"},initialize:function(e){if(!e.items){this.setItems(new RW.Models.Layout.Items())}},addItem:function(g){if(g==undefined){var h=this.get("id")+"-";var e=0;if(this.get("items")!=undefined&&this.get("items").length!=undefined){e=this.get("items").length}var f=new RW.Models.Layout.Item({position:e,content:"",locked:false});f.setId(h+f.cid);this.get("items").add(f);return f}else{this.get("items").add(g);return g}},removeItem:function(e){this.get("items").remove(e)},destroy:function(){while(this.get("items").length>0){this.get("items").last().destroy()}this.trigger("destroy",this)}});RW.Models.Layout.Item=b.Model.extend({namedAttributes:{id:"string",position:"number",content:"string",locked:"boolean",params:"object",defaultParameterValue:"object",macroName:"string"},setContentAsMacro:function(e,l,g){var k=e.callback;var j=e.params;var h={name:j.name,params:j.params,boardType:g};if(j.defaultParameterValue){h.defaultParameterValue=j.defaultParameterValue}if(j.bodyHTML){h.body=j.bodyHTML}var f=new RW.Models.Layout.Macro(h);var i={contentKey:l,type:f.get("boardType"),name:f.get("name"),params:JSON.stringify(f.get("params"))};if(!a.isEmpty(f.getBody)){i.body=f.getBody}if(!a.isEmpty(f.getDefaultParameterValue())){i.defaultParameterValue=f.getDefaultParameterValue()}f.fetch({data:c.param(i),success:a.bind(function(m){if(!a.isEmpty(f.getParams())){this.setParams(f.getParams());this.setMacroName(f.getName())}if(!a.isEmpty(f.getDefaultParameterValue())){this.setDefaultParameterValue(f.getDefaultParameterValue())}else{delete this.attributes.defaultParameterValue}if(m.get("storageFormat")!=undefined){this.setContent(m.get("storageFormat"))}else{this.setContent("")}k(f)},this),failure:function(m){console.log("failed to fetch content")}})},destroy:function(){if(!this.get("locked")){this.trigger("destroy",this)}else{console.log("Cannot destroy item "+this.get("id")+" - it's locked.")}}});RW.Models.Layout.SpaceLayoutBoard=RW.Models.Layout.Board.extend({namedAttributes:a.extend({},RW.Models.Layout.Board.namedAttributes,{spaceGroupVisible:"boolean",menuLayoutType:"string",metaDataVisible:"boolean",metaDataFade:"boolean",commentsVisible:"boolean",labelsVisible:"boolean",likesVisible:"boolean",favouriteVisible:"boolean",watchVisible:"boolean",spaceLogoVisible:"boolean",childrenVisible:"boolean",breadcrumbsVisible:"boolean"})});RW.Models.Layout.VersionList=b.Model.extend({namedAttributes:{contentKey:"string",type:"string",versions:RW.Models.Layout.VersionListItems},parse:function(e){e.id=e.type+"_"+e.contentKey;return e},initialize:function(e){RW.Models.Layout.VersionListItems.model=RW.Models.Layout.Version;if(!e.versions){this.setVersions(new RW.Models.Layout.VersionListItems())}},url:function(){return contextPath+"/rest/originaltheme/1.0/layoutboard/"+this.get("type")+"/"+this.get("contentKey")+"/version"},deleteVersion:function(f){var e=this.get("versions").filter(function(g){return g.get("versionNumber")==f});this.trigger("destroy",this)}});RW.Models.Layout.Version=b.Model.extend({namedAttributes:{contentKey:"string",type:"string",versionNumber:"number",date:"string",author:"object",comment:"string",layoutBoard:"object"},idAttribute:"versionNumber",url:function(){return contextPath+"/rest/originaltheme/1.0/layoutboard/"+this.get("type")+"/"+this.get("contentKey")+"/version/"+this.get("versionNumber").toString()}});RW.Models.Layout.Macro=b.Model.extend({namedAttributes:{name:"string",params:"object",boardType:"string",body:"string",storageFormat:"string",defaultParameterValue:null},url:function(){return contextPath+"/rest/originaltheme/1.0/layoutboard/macro"}});RW.Models.Layout.QuickLinkMacro=b.Model.extend({namedAttributes:{key:"string",name:"string",icon:"string"}});RW.Models.Layout.LayoutBoardInfo=b.Model.extend({namedAttributes:{type:"string",spaceType:"string",level:"string"}});RW.Models.Layout.TemplateList=b.Model.extend({namedAttributes:{contentKey:"string",type:"string",displayAll:"boolean",templates:RW.Models.Layout.Templates},initialize:function(e){RW.Models.Layout.Templates.model=RW.Models.Layout.Template;this.set("id",this.get("type")+"_"+this.get("contentKey"));if(!e.templates){this.setTemplates(new RW.Models.Layout.Templates())}},url:function(){return contextPath+"/rest/originaltheme/1.0/layoutboard/"+this.getType()+"/template-board?contentKey="+this.get("contentKey")+(this.get("displayAll")?"&displayAll=true":"")}});RW.Models.Layout.Template=b.Model.extend({namedAttributes:{name:"string",contentKey:"string",description:"string",source:"string",type:"string",enabled:"boolean",defaultBoard:"boolean",sections:"object"},url:function(){return contextPath+"/rest/originaltheme/1.0/layoutboard/"+this.get("type")+"/template-board?contentKey="+this.get("contentKey")},saveEnabled:function(g){g=g||{};var f=this.url();g.url=f.substring(0,f.lastIndexOf("?"))+"/toggle?"+c.param({contentKey:this.get("contentKey"),enabled:this.get("enabled")});g.type="PUT";var e=g.success;g.success=function(){RWJS.message({type:"success"},"Your changes have been saved");if(e&&typeof e==="function"){e()}};return d.Model.prototype.save.call(this,{},g)}});RW.Models.Layout.LayoutSpaceKey=d.Model.extend({initialize:function(f,e){e||(e={});this.init&&this.init(attributes,e);this.bind("error",this.defaultErrorHandler)},defaultErrorHandler:function(f,e){if(e.status==401||e.status==403){}},url:contextPath+"/rest/originaltheme/1.0/layoutboard/layout-space-key"})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/categories/category-models-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}(function(b,c,a){RW.Models.AbstractCategories=a.Collection.extend();RW.Models.CategoryList=RW.Models.AbstractCategories.extend({namedAttributes:{categories:RW.Models.AbstractCategories},url:function(){return contextPath+"/rest/originaltheme/1.0/category"}});RW.Models.AbstractCategory=c.Model.extend({namedAttributes:{subCategories:RW.Models.AbstractCategories},initialize:function(d){RW.Models.AbstractCategories.model=RW.Models.AbstractCategory;if(!d||!d.subCategories){this.set("subCategories",new RW.Models.AbstractCategories())}}})})(RWJS.$,RWJS.Backbone,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/layoutboard/layoutboard-views.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}if(typeof RW.Views.Layout==="undefined"){RW.Views.Layout={}}(function(c,d,a){RWJS.initPubSub();var b=10;RW.Views.Layout.MainView=d.View.extend({events:{"click .rw_save_button":"saveModel","click .rw_cancel_button":"cancel","click .rw_template_button":"showTemplates","click .rw_layout_mode_button":"openLayoutMode","click .rw_layout_mode_done_button":"openBoardView","click .rw_layout_mode_cancel_button":"cancelLayoutMode","click .rw_delete_button":"deleteModel","click .rw_versions_button":"openVersionsView","click .rw_version_mode_done_button":"openBoardView","click .rw_preview_button":"showPreview","click .rw_select_template_button":"selectTemplate","click .rw_select_space_type_button":"selectTemplate","click .rw_open_attachments_button":"openAttachments","click .rw_edit_template_details_button":"editTemplateDetails"},currentView:null,previewsView:null,unsavedChanges:false,previewsUnsavedChanges:false,title:"",level:"",$toolbarMenu:null,antiXSS:true,view:"",mainView:"",cancelButtonTemplate:null,initialize:function(e){if(e.title!==undefined){this.title=e.title}if(e.level!==undefined){this.level=e.level}if(e.antiXSS!==undefined){this.antiXSS=e.antiXSS}mainView=this;if(this.model.get("type")=="space"||this.model.get("type")=="global_space"||this.model.get("type")===RW.TYPE_SPACE_TEMPLATE){this.currentView=new RW.Views.Layout.SpaceBoardView({model:this.model,title:this.title,level:this.level})}else{this.currentView=new RW.Views.Layout.BoardView({model:this.model,title:this.title,level:this.level})}this.initSubscriptions();RWJS.applyTooltip("#rw_layout_board_container .rw_tooltip",{gravity:"n"});c(window).resize(function(){mainView.responsiveLayoutEditor()})},initSubscriptions:function(){RWJS.PubSub.on("layoutboard:editor-view-ready",a.bind(function(e){var f=e.item.model;if(this.antiXSS){c("input[name=formattedBodyString]","#rw_board_editor_form").attr("value",encodeURIComponent(f.get("content")))}else{c("input[name=formattedBodyString]","#rw_board_editor_form").attr("value",f.get("content"))}c("input[name=contentKey]","#rw_board_editor_form").attr("value",mainView.model.get("contentKey"));c("input[name=type]","#rw_board_editor_form").attr("value",mainView.model.get("type"));c("input[name=itemId]","#rw_board_editor_form").attr("value",f.get("id"));var g=RW.openEditorIframeDialog();g.show();c("#rw_board_editor_form").submit();e.item.bindFrame(g)},this));RWJS.PubSub.on("layoutboard:editor-loaded",function(f){var e=f.form;e.append("<input type='hidden' name='type' value='"+mainView.model.get("type")+"' />");e.append("<input type='hidden' name='contentKey' value='"+mainView.model.get("contentKey")+"' />")});RWJS.PubSub.on("layoutboard:popup-loaded",function(e){var g=e.itemView;var f=new RW.Models.Layout.QuickLinkMacros();f.url=f.url.replace("RW_TYPE_PLACEHOLDER",mainView.model.get("type"));f.url+="?contentKey="+mainView.model.get("contentKey");f.fetch({success:function(i){g.popup.show();var h=c(RW.Templates.Layout.addItemDialog({item:g.model.toJSON(),defaultMacros:f.toJSON()}));c("li",h).each(function(){var k=c(this);var j=AJS.MacroBrowser.getMacroMetadata(k.data("item"));if(j&&j.title){c(".rw_item_content",k).html(j.title);k.attr("title",j.title);if(j.icon!==undefined&&j.icon!==null){c(".rw_item_icon",k).html('<img src="'+contextPath+j.icon.location+'" />')}}});g.popup.addPanel("",h,"");c(g.el).html(c(".dialog-page-body","#rw_layoutboard_popup_frame").html())},failure:function(h){console.log("failed to fetch content")}})});RWJS.PubSub.on("layoutboard:macro-browser-ready",function(e){var f=e.view;var h=RW.Util.XHTMLparser.parse(f.model);if(h.length==1){var g=h[0]}tinymce.confluence.macrobrowser.macroBrowserComplete=function(l){var i=AJS.MacroBrowser.getMacroMetadata(l.name);var j=l;try{var j=AJS.MacroBrowser.getMacroDefinitionFromForm(i)}catch(k){}f.model.setContentAsMacro({params:j,callback:function(m){if(i.formDetails==undefined){i=AJS.MacroBrowser.dialog.activeMetadata}if(!a.isEmpty(i.formDetails.body)&&i.formDetails.body.bodyType!="NONE"){f.openEditor(null,true)}RWJS.PubSub.trigger("layoutboard:unsaved-changes")}},mainView.model.get("contentKey"),mainView.model.get("type"))};tinymce.confluence.macrobrowser.openMacro(g)});RWJS.PubSub.on("layoutboard:quick-links-ready",function(f){var e=f.view;var g=e.macro;tinymce.confluence.macrobrowser.macroBrowserComplete=function(h){e.model.setContentAsMacro({params:h,callback:function(){}},mainView.model.get("contentKey"),mainView.model.get("type"))};tinymce.confluence.macrobrowser.openMacro(g)});RWJS.PubSub.on("layoutboard:editor-clicked",function(e){RWJS.showLoader();c(".rw_save_button",mainView.$el).prop("disabled","disabled")});RWJS.PubSub.on("layoutboard:selected-space-type",function(e){c(".rw_save_button",mainView.$el).prop("disabled","disabled");c(".rw_save_button",mainView.$el).hide();c(".rw_select_space_type_button",mainView.$el).attr("data-space-type",e);c(".rw_select_space_type_button",mainView.$el).removeProp("disabled");c(".rw_select_space_type_button",mainView.$el).removeClass("rw_hidden");c(".rw_layout_board_mode .rw_delete_button",mainView.$el).remove()});RWJS.PubSub.on("layoutboard:unsaved-changes",function(e){mainView.unsavedChanges=true;mainView.currentView.showUnsavedChangesBadge();RWJS.hideLoader();c(".rw_save_button",mainView.$el).removeProp("disabled");c(".rw_save_button",mainView.$el).show();c(".rw_select_space_type_button",mainView.$el).prop("disabled","disabled");if(!c(".rw_select_space_type_button",mainView.$el).hasClass("rw_hidden")){c(".rw_select_space_type_button",mainView.$el).addClass("rw_hidden")}});RWJS.PubSub.on("layoutboard:refresh",function(e){mainView.unsavedChanges=false;mainView.openBoardView()});RWJS.PubSub.on("layoutboard:update-column-height",function(e){if(mainView.model.get("type")!="space"&&mainView.model.get("type")!="global_space"&&mainView.model.get("type")!=RW.TYPE_SPACE_TEMPLATE){mainView.$(".rw_layout_board > .rw_board").each(function(){c(".rw_layout_section",this).css("min-height","inherit");c(".rw_layout_section",this).css("min-height",c(this).height()-64)})}});AJS.$(document).unbind("hideLayer");AJS.$(document).bind("hideLayer",function(h,g,f){if(g==="popup"&&(f.element[0].id==="rw_popup_preview_dialog"||f.element[0].id==="rw_popup_editor_dialog")){f.remove()}});this.model.on("sync",function(e,f){if(f==undefined){RWJS.hideLoader();mainView.unsavedChanges=false;mainView.openBoardView();mainView.responsiveLayoutEditor();RWJS.PubSub.trigger("layoutboard:saved")}});this.model.on("error",function(f,e){RWJS.hideLoader();alert(e.statusText)})},render:function(){this.$el.html(this.currentView.render());RWJS.removeTooltip();this.responsiveLayoutEditor();return this.$el},saveModel:function(h){h.preventDefault();RWJS.showLoader();var i=this.model.get("contentKey");var g=this.model.get("type");this.model.get("sections").each(function(j){var e=i+"_"+g+"-section-"+j.get("group")+"-"+j.get("position");j.setId(e);if(j.get("items").comparator){j.get("items").sort()}j.get("items").each(function(k){var l=k.get("id");var m=e+"-"+k.get("position");k.setId(m)})});delete this.model.attributes.layoutBoardInfo;delete this.model.attributes.id;delete this.model.id;var f=this;this.model.save()},deleteModel:function(f){f.preventDefault();if(confirm(c(f.currentTarget).data("confirm"))){this.model.id="-";this.model.destroy({success:function(g,e){RWJS.PubSub.trigger("layoutboard:deleted")}})}},cancel:function(f){f.preventDefault();RWJS.PubSub.trigger("layoutboard:canceled")},showTemplates:function(h){h.preventDefault();var f=new RW.Models.Layout.TemplateList({type:this.model.getType(),contentKey:this.model.get("contentKey")});RWJS.showLoader();var g=this.model.get("type");f.fetch({success:function(i){RWJS.hideLoader();var e=new RW.Views.Layout.TemplatesView({model:f,boardType:g})},error:function(e){RWJS.hideLoader()}})},loadTemplate:function(e){this.model.fetch({data:c.param({template:e}),reset:true,success:a.bind(function(f){if(this.model.getType()=="space"||this.model.getType()=="global_space"||this.model.get("type")===RW.TYPE_SPACE_TEMPLATE){this.currentView.hideUnsavedChangesBadge();RWJS.PubSub.trigger("layoutboard:selected-space-type",e)}else{this.currentView.showUnsavedChangesBadge()}this.responsiveLayoutEditor()},this),error:function(){console.log("Something went wrong while fetching model with id "+e)}})},selectTemplate:function(g){var f=c(g.currentTarget).data("space-type");c.ajax({url:contextPath+"/rest/originaltheme/1.0/layoutboard/"+this.model.get("type")+"/template-board/"+this.model.get("contentKey")+"?template="+f,type:"PUT",dataType:"json",success:function(e){RWJS.PubSub.trigger("layoutboard:space-type-selected")},error:function(e){}})},openLayoutMode:function(f){this.currentView.destroy();this.previewsView=new RW.Models.Layout.Board(this.model.toJSON());this.previewsUnsavedChanges=this.unsavedChanges;this.currentView=new RW.Views.Layout.SectionLayoutView({model:this.model,unsavedChanges:this.unsavedChanges});this.render()},openBoardView:function(f){this.currentView.destroy();if(this.model.get("type")=="space"||this.model.get("type")=="global_space"||this.model.get("type")===RW.TYPE_SPACE_TEMPLATE){this.currentView=new RW.Views.Layout.SpaceBoardView({model:this.model,unsavedChanges:this.unsavedChanges,title:this.title,level:this.level})}else{this.currentView=new RW.Views.Layout.BoardView({model:this.model,unsavedChanges:this.unsavedChanges,title:this.title,level:this.level})}this.render();RWJS.PubSub.trigger("layoutboard:update-column-height")},openVersionsView:function(h){h.preventDefault();RWJS.showLoader();var g=new RW.Models.Layout.VersionList({contentKey:this.model.get("contentKey"),type:this.model.get("type")});var f=this;var i=true;if((f.model.get("type")===f.model.get("layoutBoardInfo").type)&&f.model.get("layoutBoardInfo").spaceType==undefined){i=false}g.fetch({success:function(e){f.currentView.destroy();f.currentView=new RW.Views.Layout.VersionsView({model:g,defaultBoard:i});f.render();Confluence.Binder.userHover();RWJS.hideLoader()},failure:function(e){RWJS.hideLoader()}})},showPreview:function(g){g.stopPropagation();g.preventDefault();var f=this.model.toJSON();f=a.omit(f,"id");f=JSON.stringify(f);c("input[name=type]","#rw_board_preview_form").attr("value",this.model.get("type"));c("input[name=contentKey]","#rw_board_preview_form").attr("value",this.model.get("contentKey"));c("input[name=boardAsJSON]","#rw_board_preview_form").attr("value",f);var h=RW.openPreviewDialog();h.show();c("#rw_board_preview_form").submit()},openAttachments:function(g){g.stopPropagation();g.preventDefault();var f=RWJS.openIframeDialog(contextPath+"/pages/popup/view-attachments.action?pageId="+AJS.params.pageId,"Attachments","",true);f.addButton("Done",function(){f.remove();RWJS.hideLoader()},"rw_editor_done_button");f.show()},editTemplateDetails:function(){var e=new RW.Views.EditSpaceLayoutTemplateView({model:this.model});e.popUp();return false},cancelLayoutMode:function(f){this.model=this.previewsView;this.unsavedChanges=this.previewsUnsavedChanges;this.openBoardView()},responsiveLayoutEditor:function(){if(c(".rw_layout_board_toolbar",this.$el).width()<1180){c(".rw_layout_board_toolbar",this.$el).addClass("rw_collapsed")}else{c(".rw_layout_board_toolbar",this.$el).removeClass("rw_collapsed")}}});RW.Views.Layout.SectionLayoutView=d.View.extend({events:{"click .rw_add_section_button":"createSection","click .rw_add_top_section_button":"createTopSection","click .rw_add_bottom_section_button":"createBottomSection","click .rw_remove_section_button":"removeSection"},template:null,views:[],minWidth:100,maxTotalWidth:1000,unsavedChanges:false,initialize:function(e){var f=this.model.get("sections");this.template=RW.Templates.Layout.boardLayout({model:this.model.toJSON()});this.setElement(this.template);if(e.unsavedChanges!==undefined){this.unsavedChanges=e.unsavedChanges}},render:function(){var e=this;this.views=[];this.template=RW.Templates.Layout.boardLayout({model:this.model.toJSON(),maxGroup:this.model.getMaxGroup()+1});c(this.el).html(c(this.template).html());this.addAll();for(var g=0;g<this.model.getGroupList().length;g++){if(this.model.getGroupList()[g]){if(this.model.getGroupList()[g].length<b){var f=RWJS.Templates.Buttons.add({cssClass:"rw_add_section_button rw_tooltip",data:g,tooltip:"Add section"});c(".rw_board_group_"+g,this.$el).append(c(f))}}else{c(".rw_board_group_"+g,this.$el).remove()}}a.each(this.model.getGroupList(),a.bind(function(i){var j=a.filter(this.views,function(k){return k.model.get("group")==i[0].getGroup()});var h=0;if(j.length>0){h=44}RW.disarm=j[0].$el;RW.Util.ResizableUtil.resizeColumns(j,".rw_board_group_"+i[0].getGroup(),1000-(j.length)*h,100-(j.length-1)*4,true,function(){a.each(j,function(k,l){k.model.set("width",parseInt(k.$el.find("h1").text()));RWJS.PubSub.trigger("layoutboard:unsaved-changes")})});a.each(j,function(k,l){k.$el.width(parseInt(k.$el.width())-h)})},this));c(".ui-resizable-handle",this.el).attr("data-tooltip","Resize sections");RWJS.applyTooltip("#rw_layout_board_container .ui-resizable-handle");if(this.unsavedChanges){this.showUnsavedChangesBadge()}RWJS.removeTooltip();return c(this.el)},addOne:function(f){var e=new RW.Views.Layout.EditableSectionView({model:f});var g=".rw_board_group_"+f.get("group");c(g,this.$el).append(c(e.render()));this.views.push(e)},addAll:function(){this.model.get("sections").forEach(a.bind(function(e){this.addOne(e)},this))},createSection:function(i){i.preventDefault();i.stopPropagation();var h=parseInt(c(i.currentTarget).attr("data-id"));var l=this.model.getSectionsInGroup(h);var k=l.length;if(k<b){var j=Math.floor(100/(k+1));var f=0;a.each(l,function(m,e){f+=j;m.set("width",j)});var g=this.model.addSection(100-f,h);RWJS.PubSub.trigger("layoutboard:unsaved-changes");this.render()}},createTopSection:function(f){f.preventDefault();f.stopPropagation();this.model.get("sections").each(function(e){var g=e.getGroup();e.setGroup(g+1)});this.model.addSection(100,0);RWJS.PubSub.trigger("layoutboard:unsaved-changes");this.render()},createBottomSection:function(f){f.preventDefault();f.stopPropagation();this.model.addSection(100,this.model.getGroupList().length);RWJS.PubSub.trigger("layoutboard:unsaved-changes");this.render()},removeSection:function(h){var g=c(h.target).parent().data("id");var i=this.model.get("sections").get(g);var f=this.model;this.model.removeSection(i);var l=this.model.getSectionsInGroup(i.getGroup());var k=l.length;if(k===0){this.model.get("sections").each(function(m){if(m.getGroup()>i.getGroup()){m.setGroup(m.getGroup()-1)}})}var j=Math.floor(100/(k));var e=0;a.each(l,function(n,m){if(k===(m+1)){n.set("width",100-e)}else{n.set("width",j)}e+=j});c("#rw_section_"+g).trigger("destroy");RWJS.PubSub.trigger("layoutboard:unsaved-changes");this.render()},showUnsavedChangesBadge:function(){c(this.el).addClass("rw_has_unsaved_changes")},hideUnsavedChangesBadge:function(){c(this.el).removeClass("rw_has_unsaved_changes")},destroy:function(){this.undelegateEvents();this.$el.removeData().unbind();this.remove();d.View.prototype.remove.call(this)}});RW.Views.Layout.BoardView=d.View.extend({unsavedChanges:false,title:"",level:"",initialize:function(e){if(e.unsavedChanges!==undefined){this.unsavedChanges=e.unsavedChanges}if(e.title!==undefined){this.title=e.title}if(e.level!==undefined){this.level=e.level}var f=RW.Templates.Layout.board({model:this.model.toJSON(),title:this.title,level:this.level});this.setElement(f);if(this.model.get("type")=="space"){RW.spaceLayoutKey=this.model.get("contentKey")}this.model.unbind("change");this.model.bind("change",this.render,this)},render:function(){var e=RW.Templates.Layout.board({model:this.model.toJSON(),maxGroup:this.model.getMaxGroup()+1,title:this.title,level:this.level});c(this.el).html(c(e).html());this.addAll();if(this.unsavedChanges){this.showUnsavedChangesBadge()}return c(this.el)},addOne:function(g){var e=new RW.Views.Layout.SectionView({model:g});if(this.model.get("type")=="space"||this.model.get("type")=="global_space"||this.model.get("type")===RW.TYPE_SPACE_TEMPLATE){var f=c(e.render().el);f.addClass("rw_space_board_position_"+g.get("position"));if(g.get("position")==0){f.addClass("rw_left_column_board")}else{f.addClass("rw_right_column_board")}c("#rw_space_section_placeholder_"+g.get("position"),c(this.el)).after(f);c("#rw_space_section_placeholder_"+g.get("position"),c(this.el)).remove()}else{var h=".rw_board_group_"+g.get("group");c(h,c(this.el)).append(c(e.render().el))}e.makeSortable()},addAll:function(){var f=0;var e=this;this.model.get("sections").forEach(a.bind(function(g){this.addOne(g);f++},this))},showUnsavedChangesBadge:function(){c(this.el).addClass("rw_has_unsaved_changes")},hideUnsavedChangesBadge:function(){c(this.el).removeClass("rw_has_unsaved_changes")},destroy:function(){this.undelegateEvents();this.$el.removeData().unbind();this.remove();d.View.prototype.remove.call(this)}});RW.Views.Layout.SpaceBoardView=RW.Views.Layout.BoardView.extend({events:function(){return a.extend({},RW.Views.Layout.BoardView.prototype.events,{"click .rw_space_setting input":"checkBoxEvent","click .rw_space_setting .rw_help_button":"showHelpDialog"})},render:function(){var e=RW.Templates.Layout.spaceBoard({model:this.model.toJSON(),title:this.title,level:this.level});c(this.el).html(c(e).html());this.addAll();if(this.unsavedChanges){this.showUnsavedChangesBadge()}return c(this.el)},checkBoxEvent:function(g){var h=c(g.currentTarget).data("key");var f=c(g.currentTarget).is(":checked");if(h==="metaDataVisible"){this.$(".rw_metadata_fade_setting").toggleClass("rw_hidden",!f)}if(h==="menuLayoutType"){if(c(g.currentTarget).is(":checked")){this.model.set(h,"simple",{silent:true});this.$("#rw_spacesettings_breadcrumbs").parent().addClass("rw_hidden")}else{this.model.set(h,"",{silent:true});this.$("#rw_spacesettings_breadcrumbs").parent().removeClass("rw_hidden")}}else{this.model.set(h,f,{silent:true})}RWJS.PubSub.trigger("layoutboard:unsaved-changes")},showHelpDialog:function(f){RWJS.showHelpDialog(c(f.currentTarget));return false}});RW.Views.Layout.VersionsView=d.View.extend({events:{"click .rw_layout_preview_button":"previewVersion","click .rw_layout_revert_button":"revertToVersion","click .rw_layout_delete_button":"deleteVersion"},defaultBoard:false,initialize:function(e){if(e.defaultBoard!==undefined){this.defaultBoard=e.defaultBoard}this.template=RW.Templates.Layout.boardVersions({versionsModel:this.model.toJSON(),defaultBoard:this.defaultBoard});this.setElement(this.template);this.model.unbind("change");this.model.bind("change",this.updateTemplate,this)},render:function(){c(this.el).html(c(this.template).html());return c(this.el)},updateTemplate:function(){this.template=RW.Templates.Layout.boardVersions({versionsModel:this.model.toJSON(),defaultBoard:this.defaultBoard});this.render()},previewVersion:function(g){g.preventDefault();var f=c(g.currentTarget).closest(".rw_item").attr("data-id");c("input[name=versionNumber]","#rw_board_preview_form").attr("value",f);c("input[name=type]","#rw_board_preview_form").attr("value",mainView.model.get("type"));c("input[name=contentKey]","#rw_board_preview_form").attr("value",mainView.model.get("contentKey"));var h=RW.openPreviewDialog();h.show();c("#rw_board_preview_form").submit();g.stopPropagation();g.preventDefault()},revertToVersion:function(j){j.preventDefault();var h=parseInt(c(j.currentTarget).closest(".rw_item").attr("data-id"));var i=this.model.get("type");var k=this.model.get("contentKey");var g=new AJS.Dialog({id:"rw_layoutboard_restore_version",closeOnOutsideClick:true,width:500,height:300});g.addHeader("Restore this version");var f=c(RW.Templates.Layout.restoreVersion());g.addPanel("",f,"");g.addButton("Restore this version",function(){var e=new RW.Models.Layout.Version({versionNumber:h,contentKey:k,type:i,comment:c("#comment-field",f).val()});e.id=null;e.save({},{success:function(m,l){RWJS.PubSub.trigger("layoutboard:version-restored")}});g.remove()});g.addCancel("Cancel",function(){g.remove()});c("input",f).val("Restored to version"+" "+h);g.show()},deleteVersion:function(i){i.preventDefault();var g=this;var h=c(i.currentTarget).closest(".rw_item").attr("data-id");var f=this.model.get("versions").filter(function(e){return e.getVersionNumber()==h});if(f&&confirm(c(i.currentTarget).data("confirm"))){f[0].destroy({success:function(){g.model.fetch({success:function(){g.updateTemplate();g.render()}})}});this.model.trigger("change")}},destroy:function(){this.undelegateEvents();this.$el.removeData().unbind();this.remove();d.View.prototype.remove.call(this)}});RW.Views.Layout.EditableSectionView=d.View.extend({initialize:function(){var e=RW.Templates.Layout.editableSection({section:this.model.toJSON()});this.setElement(e)},render:function(){var e=RW.Templates.Layout.editableSection({section:this.model.toJSON()});c(this.el).html(c(e).html());return c(this.el)},destroy:function(){this.undelegateEvents();this.$el.removeData().unbind();this.remove();d.View.prototype.remove.call(this)}});RW.Views.Layout.SectionView=d.View.extend({events:{"click .rw_open_editor":"openEditorDirectly","click .rw_edit_macro":"editMacro","click .rw_add_item_button":"createItem",updatePositions:"updatePositions","click .rw_remove_item":"deleteItem"},initialize:function(){var e=RW.Templates.Layout.section({section:this.model.toJSON()});this.setElement(e);this.views=[];this.initSubscriptions()},render:function(){var e=RW.Templates.Layout.section({section:this.model.toJSON()});c(this.el).html(c(e).html());this.addAll();return this},initSubscriptions:function(){var e=this;RWJS.PubSub.on("layoutboard:create-dialog-cancel",function(f){a.each(e.views,function(g){if(f.view.model.id===g.model.id){e.removeItem(g.model.id)}})});c(document).keyup(function(f){if((typeof Confluence==="undefined")||Confluence.KeyboardShortcuts.enabled!=false){if(f.which==27){RWJS.hideLoader()}}})},addOne:function(f){var e=new RW.Views.Layout.ItemView({model:f});c(".rw_add_item_container",this.el).before(c(e.render().el));this.views.push(e)},addAll:function(){this.model.get("items").forEach(a.bind(function(e){this.addOne(e)},this))},removeItem:function(f){var e=this.model.get("items").get(f);this.model.removeItem(e);c("#rw_item_"+f.replace(/\~/g,"\\~")).trigger("destroy");this.updatePositions();RWJS.removeTooltip()},addItem:function(f){var e=this.model.addItem(f);this.addOne(e);this.updatePositions()},makeSortable:function(){var f=this;var e=this.views;this.$(".rw_layout_section").sortable({items:"li.rw_item_board",helper:"original",connectWith:".ui-sortable",dropOnEmpty:true,tolerance:"pointer",over:function(g,h){c("#rw_layout_board_container .rw_selected").removeClass("rw_selected");c(this).addClass("rw_selected")},stop:function(g,h){c("#rw_layout_board_container .rw_selected").removeClass("rw_selected");RWJS.removeTooltip()},update:function(h,n){var p=f.model.id;if(n.sender!=undefined){var j=c(n.sender).data("id");if(p!=j){c(this).append(c(".rw_add_item_container",this));var i=f.model.collection;var g=i.get(p);var m=c(n.item).data("id");var o=i.get(j);var q=o.get("items").get(m);o.removeItem(q);g.addItem(q);c("#rw_section_"+j.replace(/\~/g,"\\~")).trigger("updatePositions");c("#rw_section_"+p.replace(/\~/g,"\\~")).trigger("updatePositions")}else{}}else{var i=f.model.collection;var l=i.get(p);var k=l.get("items");k.comparator=function(s,r){return s.getPosition()-r.getPosition()};k.sort()}c("#rw_section_"+p.replace(/\~/g,"\\~")).trigger("updatePositions");RWJS.PubSub.trigger("layoutboard:update-column-height")}})},openEditor:function(h){var g=this.model.get("items").get(c(h.currentTarget).closest(".rw_item").data("id"));h.stopPropagation();h.preventDefault();var f=new RW.Views.Layout.Popup({model:g})},openEditorDirectly:function(h){h.stopPropagation();h.preventDefault();var g=this.model.get("items").get(c(h.currentTarget).closest(".rw_item").data("id"));var f=new RW.Views.Layout.Popup({model:g,skipPopup:true})},editMacro:function(h){h.stopPropagation();h.preventDefault();var g=this.model.get("items").get(c(h.currentTarget).closest(".rw_item").data("id"));var f=new RW.Views.Layout.Popup({model:g,editMacro:true})},createItem:function(h){h.preventDefault();h.stopPropagation();var g;g=this.model.addItem();this.addOne(g);this.updatePositions();var f=new RW.Views.Layout.Popup({model:g})},deleteItem:function(f){this.removeItem(c(f.currentTarget).closest(".rw_item").data("id"));f.stopPropagation();f.preventDefault()},updatePositions:function(){for(var f=0;f<this.model.get("items").models.length;f++){var g=this.model.get("items").models[f];var e=c("#rw_item_"+g.get("id").replace(/\~/g,"\\~"),"#rw_section_"+this.model.get("id").replace(/\~/g,"\\~")).index();g.set("position",e)}RWJS.PubSub.trigger("layoutboard:unsaved-changes")}});RW.Views.Layout.ItemView=d.View.extend({events:{destroy:"destroyItem"},initialize:function(){var e=RW.Templates.Layout.item({item:this.model});this.setElement(e);this.model.unbind("change");this.model.bind("change",this.render,this)},render:function(){if(this.model.get("content")!=undefined&&this.model.get("content").length>0){var g=RW.Util.XHTMLparser.parse(this.model);var f=RW.Util.XHTMLparser.getAsHTML(g);var e="";for(var i in f){e+=f[i]}}var h=RW.Templates.Layout.item({item:this.model,content:e});c(this.el).html(c(h).html());return this},destroyItem:function(){this.undelegateEvents();this.$el.removeData().unbind();this.remove();d.View.prototype.remove.call(this)}});RW.Views.Layout.Popup=d.View.extend({popup:null,skipPopup:false,editMacro:false,itemView:null,events:{"click #rw_macrobrowser_button":"openMacroBrowser","click #rw_editor_button":"openEditor","click .rw_quicklink_button":"macroItemLinkHandler"},initialize:function(e){if(c("#rw_layoutboard_popup_frame").length>0){c("#rw_layoutboard_popup_frame").remove()}else{}if(e.skipPopup){this.openEditor()}else{if(e.editMacro){this.openMacroBrowser()}else{this.render()}}this.setElement(c(".dialog-page-body","#rw_layoutboard_popup_frame"))},render:function(){var e=this;this.popup=new AJS.Dialog({id:"rw_layoutboard_popup_frame",closeOnOutsideClick:true});this.popup.addHeader("Add new item");this.popup.addButton("Cancel",function(){e.popup.remove();RWJS.PubSub.trigger("layoutboard:create-dialog-cancel",{view:e})});RWJS.PubSub.trigger("layoutboard:popup-loaded",{itemView:e})},macroItemLinkHandler:function(g){var e=this;var f={name:c(g.currentTarget).data("item")};e.macro=f;RWJS.PubSub.trigger("layoutboard:quick-links-ready",{view:e});this.destroy()},openMacroBrowser:function(f){var e=this;RWJS.PubSub.trigger("layoutboard:macro-browser-ready",{view:e});this.destroy()},openEditor:function(f,g){if(f){f.stopPropagation()}var e=new RW.Views.Layout.EditFrame({model:this.model});if(!g){this.destroy()}},destroy:function(e){if(this.popup!=undefined){this.popup.remove()}else{c("#rw_layoutboard_popup_frame").remove()}this.undelegateEvents();this.$el.removeData().unbind();this.remove();d.View.prototype.remove.call(this)}});RW.Views.Layout.EditFrame=d.View.extend({initialize:function(){this.render()},render:function(){var e=this;RWJS.PubSub.trigger("layoutboard:editor-view-ready",{item:e})},bindFrame:function(h){var g=this.model;var e=this;var f;RWJS.$("#rw_popup_iframe_id").bind("editorIframeHasLoaded",function(){RWJS.PubSub.trigger("layoutboard:editor-loaded",{form:c("#rw_popup_iframe_id").contents().find("#editpageform")});if(c("#rw_popup_iframe_id").contents().find("#rw_saved_content").length>0){var l="";var k=c("#rw_popup_iframe_id").contents().find("#rw_saved_content");if(k.data("anti-xss")){l=k.text()}else{l=RWJS.htmlDecode(k.html())}g.set("content",l);var j=[];var i=[];c.each(c(".rw_macro_param_data",c("#rw_popup_iframe_id").contents().find("#rw_saved_macro_params")),function(m,n){var o=c(n).data();if(a.isEmpty(o.macroDefaultParameter)){i.push("")}else{i.push(o.macroDefaultParameter);delete o.macroDefaultParameter}j.push(o)});if(j.length>0){g.set("params",j)}if(i.length>0){g.set("defaultParameterValue",i)}else{g.set("defaultParameterValue",null)}h.remove();RWJS.hideLoader();RWJS.PubSub.trigger("layoutboard:unsaved-changes")}else{c("#rw_popup_iframe_id").contents().find("body").addClass("rw_layout_board_confluence_editor");c("#rw_popup_iframe_id").contents().find("#editor-precursor").css("height",0).hide();c("#rw_popup_iframe_id").contents().find("#header-precursor").css("height",0).hide();c("#rw_popup_iframe_id").contents().find("#rte-button-toolbartoggle").hide();c("#rw_popup_iframe_id").contents().find("#rte-button-publish, #rte-button-overwrite, #rte-button-preview").attr("aria-disabled","true");c("#rw_popup_iframe_id").css("visibility","visible");RWJS.hideLoader();c(".rw_editor_done_button","#rw_popup_editor_dialog").bind("click",function(){e.incrementPageVersion();c("#rw_popup_iframe_id").contents().find("#rte-button-publish, #rte-button-overwrite, #rte-button-preview").attr("aria-disabled","false");c("#rw_popup_iframe_id").contents().find("#rte-savebar").show();var m=document.getElementById("rw_popup_iframe_id").contentWindow;if(m&&m.Confluence&&m.Confluence.Editor&&m.Confluence.Editor.restoreDefaultSave){m.Confluence.Editor.restoreDefaultSave()}c("#rw_popup_iframe_id").contents().find("#rte-button-publish").click();c("#rw_popup_editor_dialog").hide();c(".aui-blanket","body").hide();RWJS.PubSub.trigger("layoutboard:editor-clicked")})}})},incrementPageVersion:function(){var e=c("#rw_popup_iframe_id").contents().find('head meta[name="page-version"]');a.each([c("#rw_popup_iframe_id").contents().find('head meta[name="page-version"]'),c("#rw_popup_iframe_id").contents().find('head meta[name="ajs-page-version"]')],function(g,i,j){if(!g.length){var h;if(i==0){h="page-version"}else{h="ajs-page-version"}g=c('<meta name="'+h+'" content="">')}var f=Number(g.attr("content"));if(f===NaN){f=999}g.attr("content",f+1)})}});RW.Views.Layout.TemplatesView=d.View.extend({boardType:"",events:{"click a":"selectTemplate"},initialize:function(e){if(e.boardType!==undefined){this.boardType=e.boardType}this.render()},render:function(){var f=0;var e=c("#rw_layout_board_container .rw_layout_board_mode").data("space-type");var j=new AJS.Dialog({id:"rw_layout_template_popup",closeOnOutsideClick:true});var h=0;var g=c(RW.Templates.Layout.templateList({model:this.model.toJSON()}));j.addPanel("",g,"");if(e!=undefined){c("#rw_template_"+e).addClass("rw_selected")}if(this.boardType==="space"||this.boardType==="global_space"||this.model.get("type")===RW.TYPE_SPACE_TEMPLATE){j.addHeader("Choose a Space Layout");j.addSubmit("Select Space Layout",function(i){if(c("a.rw_selected",g).data("template-key")!==undefined){mainView.loadTemplate(c("a.rw_selected",g).data("template-key"))}j.remove()})}else{j.addHeader("Choose a template");j.addSubmit("Select template",function(i){if(c("a.rw_selected",g).data("template-key")!==undefined){mainView.loadTemplate(c("a.rw_selected",g).data("template-key"))}j.remove()})}j.addCancel("Cancel",function(){j.remove()});j.show();j.gotoPanel(f);this.setElement(g);return this.$el},selectTemplate:function(f){c("a.rw_selected",this.$el).removeClass("rw_selected");c(f.currentTarget).addClass("rw_selected")}})})(RWJS.$,RWJS.Backbone,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/layoutboard/layoutboard-controller-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(c){var e=false;var b;var d;AJS.toInit(function(){if(c("#rw_layout_board_container").length>0){c("#rw_layout_board_container").html(RW.Templates.Layout.loader())}AJS.$(document).ajaxSuccess(function(m,n,l){if(l.url.indexOf(AJS.params.contextPath+"/plugins/macrobrowser/browse-macros.action")==0){if(c("#rw_global_dashboard_editor_oa").length>0){var j=new RW.Models.Layout.Board({contentKey:"dashboard",type:"dashboard"});a(j,c("#rw_dashboard_link").text().trim(),"content",c("#rw_global_dashboard_editor_oa").data("anti-xss"));var i=function(o){if(RWJS.getParameterByName("redirect",window.location.href)==="admin"){f(o,contextPath+"/admin/originaltheme/templates.action")}else{f(o,contextPath+"/dashboard.action")}};RWJS.PubSub.on("layoutboard:saved",function(){i(true)});RWJS.PubSub.on("layoutboard:deleted",i);RWJS.PubSub.on("layoutboard:canceled",i);RWJS.PubSub.on("layoutboard:version-restored",function(){i(true)})}else{if(c("#rw_global_dashboard_editor_category").length>0){var k=c("#rw_global_dashboard_editor_category");var j=new RW.Models.Layout.Board({contentKey:k.attr("data-category-key"),type:"category"});a(j,k.data("category-name")+" "+"Dashboard","content",c("#rw_global_dashboard_editor_category").data("anti-xss"));var i=function(o){f(o,contextPath+"/category/"+k.attr("data-category-key"))};RWJS.PubSub.on("layoutboard:saved",function(){i(true)});RWJS.PubSub.on("layoutboard:deleted",i);RWJS.PubSub.on("layoutboard:canceled",i);RWJS.PubSub.on("layoutboard:version-restored",function(){i(true)})}else{if(c("#rw_edit_space_layout_board").length>0){var j=new RW.Models.Layout.SpaceLayoutBoard({contentKey:c("#rw_space_key").html(),type:"space"});a(j,"Space Layout","content",c("#rw_edit_space_layout_board").data("anti-xss"));var i=function(o){f(o,contextPath+"/spaces/viewspace.action?key="+c("#rw_space_key").html())};RWJS.PubSub.on("layoutboard:saved",function(){i(true)});RWJS.PubSub.on("layoutboard:deleted",i);RWJS.PubSub.on("layoutboard:canceled",i);RWJS.PubSub.on("layoutboard:version-restored",function(){i(true)});RWJS.PubSub.on("layoutboard:space-type-selected",function(){i(true)})}else{if(c("#rw_edit_user_dashboard_layout").length>0){var j=new RW.Models.Layout.Board({contentKey:c("#rw_user_key").html(),type:"user"});a(j,"User dashboard","content",c("#rw_edit_user_dashboard_layout").data("anti-xss"));var i=function(o){f(o,contextPath+"/users/view-user-dashboard.action?username="+c("#rw_user_key").html())};RWJS.PubSub.on("layoutboard:saved",function(){i(true)});RWJS.PubSub.on("layoutboard:deleted",i);RWJS.PubSub.on("layoutboard:canceled",i);RWJS.PubSub.on("layoutboard:version-restored",function(){i(true)})}else{if(c("#rw_edit_global_user_dashboard_layout").length>0){var h=c("#rw_custom_user_dashboard_list").length>0;var j=new RW.Models.Layout.Board({contentKey:c("#rw_user_key").html(),type:"global_user"});a(j,"User dashboard","global",c("#rw_edit_global_user_dashboard_layout").data("anti-xss"));RWJS.PubSub.on("layoutboard:saved",function(){if(h){RWJS.PubSub.trigger("layoutboard:add-custom-users")}RWJS.showLoader();f(true,contextPath+"/admin/originaltheme/templates.action")});RWJS.PubSub.on("layoutboard:deleted",function(){RWJS.message({type:"success"},"You have successfully reverted back to the default settings");j.fetch({success:function(){RW.mainView.responsiveLayoutEditor()}});if(h){RWJS.PubSub.trigger("layoutboard:add-custom-users");j=new RW.Models.Layout.Board({contentKey:c("#rw_user_key").html(),type:"global_user"});a(j,"User dashboard","global")}});RWJS.PubSub.on("layoutboard:canceled",function(){RWJS.showLoader();f(false,contextPath+"/admin/originaltheme/templates.action")});RWJS.PubSub.on("layoutboard:version-restored",function(){RWJS.message({type:"success"},"You have successfully restored a previous version");j.fetch({success:function(){RW.mainView.responsiveLayoutEditor()}});RWJS.PubSub.trigger("layoutboard:refresh")});if(h){RWJS.PubSub.on("layoutboard:change-to-custom",function(o){j=new RW.Models.Layout.SpaceLayoutBoard({contentKey:o.key,type:"user"});a(j,o.key,"content")});RWJS.PubSub.trigger("layoutboard:add-custom-users")}}else{if(c("#rw_edit_global_space_layout_board").length>0){var j=new RW.Models.Layout.SpaceLayoutBoard({contentKey:"global_space",type:"global_space"});a(j,"Space Layout","global",c("#rw_edit_global_space_layout_board").data("anti-xss"));RWJS.PubSub.on("layoutboard:saved",function(){RWJS.showLoader();f(true,contextPath+"/admin/originaltheme/templates.action")});RWJS.PubSub.on("layoutboard:deleted",function(){RWJS.message({type:"success"},"You have successfully reverted back to the default settings");j.fetch({success:function(){RW.mainView.responsiveLayoutEditor()}});RWJS.PubSub.trigger("layoutboard:add-custom-spaces");j=new RW.Models.Layout.SpaceLayoutBoard({contentKey:"global_space",type:"global_space"});a(j,"Space Layout","global")});RWJS.PubSub.on("layoutboard:canceled",function(){RWJS.showLoader();f(false,contextPath+"/admin/originaltheme/templates.action")});RWJS.PubSub.on("layoutboard:space-type-selected",function(){RWJS.showLoader();f(true,contextPath+"/admin/originaltheme/templates.action")});RWJS.PubSub.on("layoutboard:version-restored",function(){RWJS.message({type:"success"},"You have successfully restored a previous version");j.fetch({success:function(){RW.mainView.responsiveLayoutEditor()}});RWJS.PubSub.trigger("layoutboard:refresh")});RWJS.PubSub.on("layoutboard:change-to-custom",function(o){j=new RW.Models.Layout.SpaceLayoutBoard({contentKey:o.key,type:"space"});a(j,o.name,"content")})}else{if(c("#rw_edit_space_layout_template").length>0){var j=new RW.Models.Layout.SpaceLayoutBoard({contentKey:c("#rw_space_key").html(),type:RW.TYPE_SPACE_TEMPLATE});a(j,"Custom Space Layout","content",c("#rw_edit_space_layout_template").data("anti-xss"));RWJS.PubSub.on("layoutboard:saved",function(){RWJS.showLoader();f(true,contextPath+"/admin/originaltheme/templates.action")});RWJS.PubSub.on("layoutboard:deleted",function(){RWJS.message({type:"success"},"You have successfully reverted back to the default settings");j.fetch({success:function(){RW.mainView.responsiveLayoutEditor()}});RWJS.PubSub.trigger("layoutboard:add-custom-spaces");j=new RW.Models.Layout.SpaceLayoutBoard({contentKey:"global_space",type:"global_space"});a(j,"Space Layout","global")});RWJS.PubSub.on("layoutboard:canceled",function(){f(false,contextPath+"/admin/originaltheme/templates.action")});RWJS.PubSub.on("layoutboard:space-type-selected",function(){RWJS.message({type:"success"},"You have successfully selected a Space Layout");j.fetch({success:function(){RW.mainView.responsiveLayoutEditor()}})});RWJS.PubSub.on("layoutboard:version-restored",function(){RWJS.message({type:"success"},"You have successfully restored a previous version");j.fetch({success:function(){RW.mainView.responsiveLayoutEditor()}});RWJS.PubSub.trigger("layoutboard:refresh")});RWJS.PubSub.on("layoutboard:change-to-custom",function(o){j=new RW.Models.Layout.SpaceLayoutBoard({contentKey:o.key,type:"space"});a(j,o.name,"content")})}}}}}}}var g=c("#rw_layout_board_container").data("cannotAddAttachments");if(g===true){c("#action-messages").append(AJS.messages.warning({title:"Cannot add new attachments",body:"<p>"+"You won\'t be able to add new attachments here since you\'re not a member of the default Confluence user group \'confluence-users\'"+"</p>"+"\u003ca target=\"_blank\" href=\"https://docs.refinedwiki.com/display/rwot/Setup+and+edit+dashboards#Setupandeditdashboards-Dashboardattachments\"\u003eLearn more\u003c/a\u003e"}))}}});var f=function(i,h){d=i;if(c.browser.msie&&!i){window.onbeforeunload=function(){};var g=RW.backEventHandler();if(g!=undefined&&g.length>0){if(confirm(g)){window.location=h;return}}else{window.location=h}}else{window.location=h}window.onbeforeunload=RW.backEventHandler}});function a(f,h,i,g){if(!e){window.onbeforeunload=RW.backEventHandler;e=true}f.fetch({reset:true,success:function(j){f.sortLayoutBoard();RW.mainView=new RW.Views.Layout.MainView({model:f,title:h,level:i,antiXSS:g});b=RW.mainView;c("#rw_layout_board_container").html(RW.mainView.render());RW.mainView.responsiveLayoutEditor();RWJS.PubSub.trigger("layoutboard:update-column-height")},failure:function(j){console.log("failed to fetch content")}});RW.openEditorIframeDialog=function(m,q){RWJS.showLoader();var k="rw_popup_editor_dialog";var p=RWJS.getPopupWidth();var l=RWJS.getPopupHeight();var j=new AJS.Dialog({width:p,height:l,id:k});var n="RWJS.$(this).trigger('editorIframeHasLoaded')";var o=c('<div><iframe id="rw_popup_iframe_id" name="rw_popup_iframe_id" style="visibility:hidden;" onload="'+n+' " allowTransparency="true" frameBorder="0" class="rw_popup_iframe" style="width:100%;" ></iframe></div>');j.addPanel("",o,"");j.addButton("Done",function(){},"aui-button aui-button-primary rw_editor_done_button");j.addCancel("Cancel",function(){j.remove();RWJS.hideLoader()});j.show();c("iframe",o).attr("height",c(".dialog-panel-body",j.popup.element).height());return j};RW.openPreviewDialog=function(){var k="rw_popup_preview_dialog";var p=RWJS.getPopupWidth();var l=RWJS.getPopupHeight();var m=55;var j=new AJS.Dialog({width:p,height:l,id:k});var p=RWJS.getPopupWidth();var l=RWJS.getPopupHeight();var j=new AJS.Dialog({width:p,height:l,id:k});var n="RWJS.$(this).trigger('editorIframeHasLoaded')";var o=c('<div><iframe id="rw_preview_popup_iframe_id" name="rw_preview_popup_iframe_id" onload="RWJS.hideLoader(); '+n+' " allowTransparency="true" frameBorder="0" class="rw_popup_iframe" style="width:100%;" ></iframe></div>');j.addPanel("",o,"");j.addButton("Done",function(){j.remove();RWJS.hideLoader()},"aui-button aui-button-primary rw_editor_done_button");j.show();c("iframe",o).attr("height",c(".dialog-panel-body",j.popup.element).height());return j}}RW.backEventHandler=function(f){if(b&&b.unsavedChanges&&!d){return "The board still has unsaved changes, are you sure you want to leave?"}}})(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/layoutboard/custom-layout-board-list-min.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,i,h,j){AJS.toInit(function(){RWJS.PubSub.on("layoutboard:open-custom-spaces",function(){e("Spaces with custom space layouts","spaces")});RWJS.PubSub.on("layoutboard:open-custom-users",function(){e("Users with custom user dashboards","users")});RWJS.PubSub.on("layoutboard:open-custom-dashboards",function(){e("Dashboards with custom layouts","dashboards")})});function e(n,l,m){var k=null;if(l==="spaces"){k=new g()}else{if(l==="dashboards"){k=new a()}else{k=new d()}}k.fetch({success:function(q){var o=new b({model:k});var p=new AJS.Dialog({id:"rw_layout_board_list_dialog",closeOnOutsideClick:false,width:840});p.addHeader(n);p.addPanel("",o.render(l),"");p.show();p.addCancel("Cancel",function(){p.remove()});p.addButton("Refresh",function(){o.refresh()},"rw_left")},failure:function(o){console.log("failed to fetch content")}})}var g=h.Model.extend({namedAttributes:{spaces:f},url:function(){return contextPath+"/rest/originaltheme/1.0/layoutboard/custom-spaces"}});var d=h.Model.extend({namedAttributes:{users:f},url:function(){return contextPath+"/rest/originaltheme/1.0/layoutboard/custom-users"}});var a=h.Model.extend({namedAttributes:{dashboards:f},url:function(){return contextPath+"/rest/originaltheme/1.0/layoutboard/custom-dashboards"}});var f=h.Model.extend({});var b=i.View.extend({type:"",events:{"click .rw_refresh":"refresh"},initialize:function(){},render:function(l){this.type=l;var m;if(l=="spaces"){m=this.model.get("spaces")}else{if(l=="users"){m=this.model.get("users")}else{if(l==="dashboards"){m=this.model.get("dashboards")}}}var k=RW.Templates.Layout.customLayoutBoardList({list:m,type:l});this.$el.html(k);return this.$el},refresh:function(){var k=this;this.model.fetch({success:function(l){k.render(k.type)}})}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/utils/xhtml-parser-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Util==="undefined"){RW.Util={}}(function(d,r){var n="AC:MACRO";var g="AC:STRUCTURED-MACRO";var k="structured-macro";var q="macro";var i="ac:name";var c="AC:PARAMETER";var f="parameter";var b="AC:DEFAULT-PARAMETER";var h="default-parameter";var p="AC:RICH-TEXT-BODY";var e="rich-text-body";var a="AC:PLAIN-TEXT-BODY";var l="plain-text-body";var m=50;var o="AC:IMAGE";var j="image";RW.Util.XHTMLparser={parse:function(w){var v=w.get("content");var y=[];var s=[];var x=[];var u=false;var A=0;var z=0;if(d.browser.msie&&parseInt(d.browser.version,10)===8&&v.indexOf("</ac:structured-macro>")===-1){v=v.replace(/(<ac:structured-macro.*?)\/>/g,"$1></ac:structured-macro>")}v=v.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,"");t(v);if(u){x.push({more:true})}return x;function t(B){d.each(d(B),function(){var F=d(this).prop("tagName");if(F==n||F==g||F==q||F==k){var H={};H.name=d(this).attr(i);var C;C=AJS.MacroBrowser.getMacroMetadata(H.name);if(C){H.icon=C.icon;if(C.title){H.title=C.title}}d.each(this.childNodes,function(){var K=d(this).prop("tagName");var M=this.innerHTML;switch(K){case f:case c:if(!H.params){H.params={}}var L=d(this).attr(i);if(r.isEmpty(L)){H.defaultParameterValue=M}else{H.params[L]=M}break;case h:case b:H.defaultParameterValue=M;break;case e:case p:H.body=this;break;case l:case a:H.body=this;break;default:console.log("Found an unknown macro property while generating preview html: "+K);break}});var J;var E;if(r.isArray(w.get("params"))){J=w.get("params")[A];A++}else{J=w.get("params")}if(r.isArray(w.get("defaultParameterValue"))){E=w.get("defaultParameterValue")[z];z++}else{E=w.get("defaultParameterValue")}if(!r.isEmpty(J)){H.params=J}if(!r.isEmpty(E)){H.defaultParameterValue=E}if(x.length<3){x.push(H)}else{u=true;return}}else{if(F=="P"){t(this.childNodes)}else{if(x.length<3){if(F==o||F==j){var D={};D.isImage=true;D.content="<div>"+"Unable to preview item"+"</div>";if(d(":first",this).attr("ri:filename")!=undefined){D.content='<div data-file-name="'+d(":first",this).attr("ri:filename")+'"><div class="rw_img_container" style="background-image:url('+contextPath+"/download/attachments/"+AJS.Meta.get("page-id")+"/"+d(":first",this).attr("ri:filename")+')" ></div></div>'}else{if(d(":first",this).attr("ri:value")!=undefined){D.content='<div data-file-name=""><div class="rw_img_container" style="background-image:url('+d(":first",this).attr("ri:value")+')" ></div></div>'}}x.push(D)}else{var I;if(this.textContent!=undefined){I=this.textContent}else{if(this.innerText!=undefined){I=this.innerText}else{if(F==undefined&&this.nodeName=="#text"){I=this.data}}}if(I!=undefined){var G=I.replace(/\W|\n/g,"");if(G.length>0){x.push(this)}}else{}}}else{u=true;return}}}})}},getAsHTML:function(v){var u=v;var w=false;if(u.length==1&&u[0].name&&!u[0].body){w=true}var s=[];if(u.length==0){var x=d("<div>"+"Unable to preview item"+"</div>");u.push(x)}for(var t=0;t<u.length;t++){var A=u[t];if(A.name){var B="";if(A.defaultParameterValue){B+="<li><b>"+A.defaultParameterValue+"</b></li>"}if(A.params){if(B===undefined){var B="<ul>"}for(var y in A.params){B+="<li>"+y+": <b>";B+=RWJS.htmlEncode(A.params[y]);B+="</b></li>"}}if(B!==""){A.paramDesc="<ul>"+B+"</ul>"}if(w){A.hasEdit=true}s.push(RW.Templates.Layout.macroPreview({macro:A}))}else{if(A.isImage){s.push(RW.Templates.Layout.imagePreview({image:A.content}))}else{if(A.more){s.push('<li class="rw_more_preview" data-tooltip="">...</li>')}else{var z=d("<div></div>");z.append(A);s.push(RW.Templates.Layout.itemPreview({content:z.html()}))}}}}return s}}})(RWJS.$,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/utils/resize-util-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Util==="undefined"){RW.Util={}}(function(b,a){RW.Util.ResizableUtil={totalSize:0,resizeColumns:function(k,c,h,e,i,j){var f=this;var g=0;var d=a.pluck(k,"model");a.each(a.initial(k),function(l,m){b(l.$el,b(c)).resizable({handles:"e",containment:"parent",grid:[1,0],maxWidth:h-(k.length-1)*e,minWidth:e,start:function(n,o){b("#rw_layout_board_container .ui-resizable-handle").attr("data-tooltip","");RWJS.removeTooltip();g=o.originalSize.width;f.setCurrentMaxWidth(o.element,d,h,e);o.element.parent().addClass("rw_resizing")},stop:function(n,o){o.element.parent().removeClass("rw_resizing");b("#rw_layout_board_container .ui-resizable-handle").attr("data-tooltip","Resize sections");j()},resize:function(p,r){var s=g-r.size.width;f.sumOfCalculatedWidthRate=0;var o=0;var q=[];var n=0;a.each(d,function(u,t){if(u.id!=b(r.element).data("id")){o+=parseInt(b("#rw_section_"+u.id).width())}else{n=t}});if(r.position.left==r.originalPosition.left){q=a.rest(d,(n+1));q=q.concat(a.first(d,(n)).reverse())}a.each(q,function(u,t){if(u.id!=b(r.element).data("id")){var w=parseInt(b("#rw_section_"+u.id).width());var v=Math.max(e,h-b(r.element).width()-(o-w));b("#rw_section_"+u.id).width(v);o-=(w-v);b("#rw_section_"+u.id).find("h1").html(Math.round(Math.max(10,(v/h)*100))+"%");f.sumOfCalculatedWidthRate+=Math.round(Math.max(10,(v/h)*100));s=s-(w-b("#rw_section_"+u.id).width())}});g=g-s;b(r.element).find("h1").html(Math.round(100-f.sumOfCalculatedWidthRate)+"%")}})})},setCurrentMaxWidth:function(f,j,i,e){var h=b(f).data("id");var c=0;var d=0;a.each(j,function(l,k){if(l.id!=h){d+=parseInt(b("#rw_section_"+l.id).width())}else{c=d}});var g=a.pluck(j,"id");b(f).resizable({maxWidth:i-c-a.rest(g,a.indexOf(g,h)+1).length*e})}}})(RWJS.$,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/utils/dialog-util-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}if(typeof RW.Views.SpaceOrganizer==="undefined"){RW.Views.SpaceOrganizer={}}(function(b,a){RW.Views.Dialog=a.View.extend({dialog:null,template:null,clickedDone:false,initialize:function(c){this.template=RW.Templates.popup();this.setElement(b(this.template))},render:function(){this.template=RW.Templates.popup();this.setElement(b(this.template));return this.$el},open:function(g,f,e,h,d){var c=true;if(d==true){c=false}this.render();var i=this;this.dialog=new AJS.Dialog({id:"rw_popup_dialog_admin",width:800,height:600,closeOnOutsideClick:c});this.dialog.hide();this.dialog.addHeader(f);this.dialog.addPanel();this.dialog.addButton("Save",function(){i.clickedDone=true;var j=b(i.dialog.popup.element).clone();if(e&&e(j)){i.dialog.remove()}},"aui-button aui-button-primary rw_margin_right");b(".button-panel-button",this.dialog.popup.element).removeClass("button-panel-button");this.dialog.addLink("Cancel",function(){i.dialog.remove()});AJS.$(document).bind("hideLayer",function(l,k,j){if(!i.clickedDone){if(k==="popup"&&j===i.dialog.popup){if(h){h()}}}else{i.clickedDone=false}});this.renderViewInDialog(g)},renderViewInDialog:function(c){if(c!=undefined&&c.render!=undefined){var d=b(".dialog-panel-body",this.dialog.popup.element);d.html(c.render());this.dialog.show();d.scrollTop(0)}},destroy:function(){try{this.dialog.remove();this.undelegateEvents();this.$el.removeData().unbind();this.remove()}catch(c){}}})})(RWJS.$,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/spaces/space-layout-dialog-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(d,f,b){var e=false;AJS.toInit(function(){RWJS.PubSub.on("space-layout-blueprint:show",function(g){if(AJS.Meta.get("show-space-layout-dialog")==true){a(g.contentKey)}else{location.reload()}})});function a(h){var g=new RW.Models.Layout.TemplateList({type:"space",contentKey:h});RWJS.showLoader();g.fetch({success:function(n){RWJS.hideLoader();var k=new c({model:g});var l=new AJS.Dialog({id:"rw_space_layout_dialog",closeOnOutsideClick:false,width:840});l.addHeader("Choose a Space Layout");var j=k.render();l.addPanel("",j,"");l.show();l.addCancel("Cancel",function(){l.remove()});var i=d("#rw_space_layout_dialog .dialog-button-panel");var m=d(RWJS.Templates.Buttons.button({cssClass:"aui-button aui-button-primary",content:"Done"}));m.css("margin-right","10px").click(function(){var o=d("a.rw_selected",j).data("template-key");if(o==="global"||o===undefined){l.remove();location.reload()}else{if(o==="custom"){RWJS.showLoader();window.location=contextPath+"/spaces/refinedwiki/edit-space-layout.action?key="+AJS.Meta.get("space-key")}else{RWJS.showLoader();d.ajax({url:contextPath+"/rest/originaltheme/1.0/layoutboard/space/template-board/"+AJS.Meta.get("space-key")+"?template="+o,type:"PUT",dataType:"json",success:function(p){location.reload()},error:function(p){}})}}});i.prepend(m);l.show()},error:function(i){RWJS.hideLoader()}})}var c=f.View.extend({events:{"click a":"selectTemplate"},initialize:function(){},render:function(){var g=RW.Templates.Layout.spaceLayoutBlueprint({model:this.model.toJSON()});this.setElement(g);return this.$el},selectTemplate:function(g){d("a.rw_selected",this.$el).removeClass("rw_selected");d(g.currentTarget).addClass("rw_selected")}})})(RWJS.$,RWJS.Backbone,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/spaces/space-category-dialog.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(e,h,c,b){var f=false;AJS.toInit(function(){if(AJS.Meta.get("space-just-created")){if(AJS.Meta.get("show-move-space-dialog")){f=true;d()}else{if(AJS.Meta.get("show-space-layout-dialog")){RWJS.PubSub.trigger("space-layout-blueprint:show",{contentKey:AJS.Meta.get("space-key")})}}}if(e("#rw_space_category_btn, #rw_space_category_btn-tab").length>0){e("#rw_space_category_btn, #rw_space_category_btn-tab").click(function(){d();return false})}e("#addSpaceLink").click(function(){e(".create-dialog-create-button.aui-button.aui-button-primary").click(function(){e(".create-dialog-create-button.aui-button.aui-button-primary").click(function(){var i=RW.activeCategoryKey;RW.storage.setValue(RW.AUTOSELECT_CATEGORY_KEY,i)})})})});function d(){var i=new RW.Models.CategoryList();RWJS.showLoader();i.fetch({data:{recursive:"true"},success:function(n){RWJS.closeInlineDialog();RWJS.hideLoader();var q=new g({model:i});var s=new AJS.Dialog({id:"rw_space_category_dialog",closeOnOutsideClick:false,width:840});s.addHeader("Choose a category");var l=q.render();s.addPanel("",l,"");s.show();var t="_uncategorized";s.addCancel("Cancel",function(){s.remove()});var p=e("#rw_space_category_dialog .dialog-button-panel");if(f){var o=e(RWJS.Templates.Buttons.button({cssClass:"aui-button aui-button-primary",content:"Next"}))}else{var o=e(RWJS.Templates.Buttons.button({cssClass:"aui-button aui-button-primary",content:"Done"}))}o.css("margin-right","10px").click(function(){var v=new a();v.setKey(t);v.setContentType("space");v.setId(AJS.Meta.get("space-key"));if(e("a.rw_selected",l).length>0){if(e("a.rw_selected",l).data("blog-portal")){var u=new RW.Models.Blog({nameKey:AJS.Meta.get("space-key")});RWJS.showLoader();e.when(u.fetchBlog()).done(function(){u.set("blogPortal",true);u.save({},{success:function(){if(f){RWJS.hideLoader();RWJS.PubSub.trigger("space-layout-blueprint:show",{contentKey:AJS.Meta.get("space-key")});s.remove()}else{location.reload()}},error:function(w,x){RWJS.hideLoader();if(x.status==401){alert("You don\'t have the right permissions to move this space to another category")}location.reload()}})})}else{v.setNewCategoryKey(e("a.rw_selected",l).attr("data-category-key"))}}else{v.setNewCategoryKey("")}if(!e("a.rw_selected",l).data("blog-portal")){RWJS.showLoader();v.save({},{success:function(w){if(f){RWJS.hideLoader();RWJS.PubSub.trigger("space-layout-blueprint:show",{contentKey:AJS.Meta.get("space-key")});s.remove()}else{location.reload()}},error:function(w,x){RWJS.hideLoader();if(x.status==401){alert("You don\'t have the right permissions to move this space to another category")}location.reload()}})}});p.prepend(o);if(AJS.Meta.get("abstract-category-key")!==""){t=AJS.Meta.get("abstract-category-key");var j=e("#rw_category_item_"+t,l);j.addClass("rw_selected");var m=j.closest("#rw_category_chooser");if(j!=undefined&&j.length>0){var k=j.offset().top;var r=k+j.height();if(r>m.height()){m.scrollTop(r-m.height())}}}s.show()},error:function(j){}})}var a=c.Model.extend({namedAttributes:{key:"string",id:"string",newCategoryKey:"string",contentType:"string"},url:function(){return contextPath+"/rest/originaltheme/1.0/category/"+this.get("key")+"/child/"+this.get("id")+"/move"}});var g=h.View.extend({events:{"click a":"selectCategory"},initialize:function(i){},render:function(){var j=AJS.Meta.get("blog-portal-enabled");var k=RW.Templates.Categories.categoryBlueprint({model:this.model.toJSON(),blogPortalEnabled:j});this.setElement(k);var i=RW.storage.getValue(RW.AUTOSELECT_CATEGORY_KEY);if(i){this.$el.find("a[data-category-key="+i+"]").addClass("rw_selected")}RW.storage.removeValueWithExactKey(RW.storage.getPrefix()+RW.AUTOSELECT_CATEGORY_KEY);return this.$el},selectCategory:function(i){if(e(i.target).hasClass("rw_selected")){e("a.rw_selected",this.$el).removeClass("rw_selected")}else{e("a.rw_selected",this.$el).removeClass("rw_selected");e(i.target).addClass("rw_selected")}}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/users/users-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(d,f,c,a){var b=250;var e=25;RW.Models.Users=c.Collection.extend({initialize:function(g){}});RW.Models.User=c.Model.extend({saveAsCategoryAdmin:function(h,g){if(h==undefined){h={}}h.url=contextPath+"/rest/originaltheme/1.0/category/"+g+"/admin?username="+this.get("username");this.id=1;return f.Model.prototype.save.call(this,{},h)}});RW.Models.Users.model=RW.Models.User;RW.Models.UsersModel=c.Model.extend({namedAttributes:{usersParam:"string",groupsParam:"string",layout:"string",title:"string",remoteUser:"string",description:"string",excludeUserCategories:"boolean",following:"boolean",canSeePersonalSpace:"boolean",maxResults:"number",users:RW.Models.Users,hasMore:"boolean"},initialize:function(g){this.users=new RW.Models.Users()},url:function(){return contextPath+"/rest/originaltheme/1.0/user?users="+encodeURIComponent(this.get("usersParam"))+"&groups="+encodeURIComponent(this.get("groupsParam"))+"&layout="+encodeURIComponent(this.get("layout"))+"&excludeUserCategories="+encodeURIComponent(this.get("excludeUserCategories"))+"&max-results="+(this.get("maxResults")?encodeURIComponent(this.get("maxResults")):e)}});RW.Models.UserSearchData=c.Model.extend({namedAttributes:{title:"string",description:"string",groups:"object",type:"string",users:RW.Models.Users,searchWrapper:RW.Models.UserSearchWrapper}});RW.Models.UserSearchWrapper=c.Model.extend({title:"",namedAttributes:{totalSize:"number",result:RW.Models.UserSearchResults,group:"object",query:"string",type:"string"},initialize:function(g){if(g){if(g.type){this.type=g.type}if(g.title){this.title=g.title}}},url:function(){return contextPath+"/rest/prototype/1/search/"+this.type+"?query="+this.get("query")},fetchGroups:function(g){if(g==undefined){g={}}g.url=contextPath+"/rest/prototype/1/search/group?query="+this.get("query");return f.Model.prototype.fetch.call(this,g)},legacyUrl:function(){return contextPath+"/rest/originaltheme/1.0/search/group?query="+this.get("query")}});RW.Models.UserSearchResults=c.Collection.extend({initialize:function(g){this.model=RW.Models.UserSearchResult}});RW.Models.UserSearchResult=c.Model.extend({});RW.Views.UsersView=f.View.extend({width:0,startIndex:0,events:{"click .rw_load_more_link":"loadMore"},initialize:function(g){if(g&&g.width!==undefined){this.width=g.width}},render:function(){var h=this.prepareModelData();var g=RW.Templates.Users.list({model:h.model,columns:h.columns,usersPerColumn:h.usersPerColumn,remaining:h.remaining,hipChatBaseUrl:d('meta[name="rw-hipchat-base-url"]').prop("content"),versionChecker:RW.versionChecker});this.$el.html(g);return this.$el},prepareModelData:function(g){var j;if(!g){j=this.model.toJSON()}else{j=this.model.toJSON();if(!g.users){g.users=[]}g.users=g.users.concat(j.users);j.users=g.users;this.model.set("users",new RW.Models.Users(j.users))}a.each(j.users,function(l){l.uCategories=[];l.uSpaces=[];a.each(l.userCategories,function(m){if(m.type=="category"){l.uCategories.push(m)}else{if(m.type=="space"){l.uSpaces.push(m)}}})});var i=Math.floor(this.width/b);var h=Math.floor(j.users.length/i);var k=j.users.length%i;return{model:j,columns:i,usersPerColumn:h,remaining:k}},loadMore:function(k){var h=this;var g=this.model.get("maxResults");if(!g||g<=0){g=e}var j={"start-index":this.startIndex+g};this.startIndex+=g;var i=this.model.toJSON();d(k.currentTarget).replaceWith(d(RWJS.Templates.Utils.loader({size:"medium"})));this.model.fetch({data:j,success:function(){var m=h.prepareModelData(i);var l=RW.Templates.Users.list({model:m.model,columns:m.columns,usersPerColumn:m.usersPerColumn,remaining:m.remaining,hipChatBaseUrl:d('meta[name="rw-hipchat-base-url"]').prop("content"),versionChecker:RW.versionChecker});h.$el.html(l)}}).always(function(){h.$(".rw_loader_box").remove()});return false}});RW.Views.UserView=f.View.extend({title:undefined,canUpdateStatus:undefined,initialize:function(g){if(g&&g.title){this.title=g.title}if(g&&g.canUpdateStatus){this.canUpdateStatus=g.canUpdateStatus}},render:function(){var i=this.model.get("users");if(i&&i.at(0)!=undefined){var g=i.at(0).toJSON()}if(g){g.uCategories=[];g.uSpaces=[];a.each(g.userCategories,function(j){if(j.type=="category"){g.uCategories.push(j)}else{if(j.type=="space"){g.uSpaces.push(j)}}})}g.username=RWJS.htmlDecode(g.username);var h=RW.Templates.Users.userDetails({user:g,layout:this.model.get("layout"),remoteUser:this.model.get("remoteUser"),following:g.following,canSeePersonalSpace:this.model.get("canSeePersonalSpace"),title:this.title,canUpdateStatus:this.canUpdateStatus,hipChatBaseUrl:d('meta[name="rw-hipchat-base-url"]').prop("content"),versionChecker:RW.versionChecker});this.setElement(h);return this.$el}});RW.Views.UserSearchView=c.View.extend({searchWrapperModel:null,title:null,description:null,lastQuery:"",events:{"keyup #rw_input_search_groups":"search","keyup #rw_input_search_users":"search",keydown:"handleKeyDown","click .rw_results_container li":"addTag","click .rw_tag_list .rw_delete_button":"removeTag"},initialize:function(g){if(g&&g.searchWrapperModel){this.searchWrapperModel=g.searchWrapperModel}else{this.searchWrapperModel=this.model.get("searchWrapper")}if(g&&g.title){this.title=g.title}else{this.title=this.model.get("title")}if(g&&g.description){this.description=g.description}else{this.description=this.model.get("description")}if(this.searchWrapperModel.get("type")=="user"){var h;if(this.model.get("users").toJSON!==undefined){h=this.model.get("users").toJSON()}else{h=this.model.get("users")}this.template=RW.Templates.Users.userSearch({users:h,title:this.title,description:this.description})}else{this.template=RW.Templates.Users.groupSearch({groups:this.model.get("groups"),title:this.title,description:this.description})}this.setElement(d(this.template))},render:function(){if(this.searchWrapperModel.get("type")=="user"){var g;if(this.model.get("users").toJSON!==undefined){g=this.model.get("users").toJSON()}else{g=this.model.get("users")}this.template=RW.Templates.Users.userSearch({users:g,title:this.title,description:this.description})}else{this.template=RW.Templates.Users.groupSearch({groups:this.model.get("groups"),title:this.title,description:this.description})}this.$el.html(d(this.template).html());return this.$el},handleKeyDown:function(g){if(g.which==27&&(this.$(".rw_results_container").is(":visible"))){this.$(".rw_results_container").hide();return false}},search:function(i){i.stopPropagation();var h=d(i.currentTarget).val();if(h!=""&&h!=this.lastQuery){this.lastQuery=h;var g=this;this.searchWrapperModel.set("query",h);if(this.searchWrapperModel.get("type")=="user"){this.searchWrapperModel.fetch({success:function(){var j=d(RW.Templates.Users.searchResult({results:g.searchWrapperModel.toJSON().result}));g.$(".rw_results_container").html(j);g.$(".rw_results_container").show();RW.startKeyable(g.$(".rw_results_container"),null,"search")}})}else{this.searchWrapperModel.fetchGroups({success:function(){var j=d(RW.Templates.Users.searchResult({results:g.searchWrapperModel.toJSON().result}));g.$(".rw_results_container").html(j);g.$(".rw_results_container").show();RW.startKeyable(g.$(".rw_results_container"),null,"search")}})}}else{if(h==""){this.$(".rw_results_container").html("");this.$(".rw_results_container").hide()}}},addTag:function(g){if(this.searchWrapperModel.get("type")=="user"){this.addUser(g)}else{if(this.searchWrapperModel.get("type")=="group"){this.addGroup(g)}}},addUser:function(m){var j=d(m.currentTarget).attr("data-name");var g=d(".rw_search_item_title",m.currentTarget).html();this.$("#rw_input_search_users").val("");var p=false;var o=this;if(this.model.get("users") instanceof f.Collection){a.each(this.model.get("users").models,function(i){if(i.get("username")==j){p=true}})}else{for(var k=0;k<this.model.get("users").length;k++){var h=this.model.get("users")[k];var n=h.username!=undefined?h.username:h.get("username");if(n==j){p=true;break}}}if(!p){var h=new RW.Models.User({name:g,username:j});if(this.model.get("users").add!=undefined){this.model.get("users").add(h)}else{this.model.get("users").push(h)}var l=d(RW.Templates.Users.resultTag({name:g,key:j}));this.$(".rw_search_result_users").append(l)}this.$(".rw_results_container").html("");this.$(".rw_results_container").hide();this.lastQuery=""},addGroup:function(k){var i=d(k.currentTarget).attr("data-name");this.$("#rw_input_search_groups").val("");var j=false;var g=this;a.each(this.model.get("groups"),function(l){if(l==i){j=true}});if(!j){if(this.model.get("groups")==undefined){this.model.set("groups",[])}this.model.get("groups").push(i);var h=d(RW.Templates.Users.resultTag({name:i,key:i}));this.$(".rw_search_result_groups").append(h)}this.$(".rw_results_container").html("");this.$(".rw_results_container").hide();this.lastQuery=""},removeTag:function(g){if(this.searchWrapperModel.get("type")=="user"){this.removeUser(g)}else{if(this.searchWrapperModel.get("type")=="group"){this.removeGroup(g)}}},removeUser:function(h){var g=d(h.currentTarget).closest("li");var j=g.data("key");if(this.model.get("users").models!=undefined){this.model.get("users").models=a.filter(this.model.get("users").models,function(k){return k.get("username")!=j})}else{var i=this.model.get("users");i=a.filter(i,function(k){return k.username!=j});this.model.set("users",i)}g.remove()},removeGroup:function(j){var h=d(j.currentTarget).closest("li");var g=h.data("key");var i=a.filter(this.model.get("groups"),function(k){return k!=g});this.model.set("groups",i);h.remove()}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/users/users-controller-min.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(d,b){AJS.toInit(function(){RW.registerUserClickEvents();var e=d(".rw_users_macro");if(e.length>0){b.each(e,function(g){c(d(g))})}var f=d(".rw_user_details_macro");if(f.length>0){b.each(f,function(g){a(d(g))})}});var c=function(m){var e=d(".rw_users_macro_params",m).attr("data-users")+"";var f=d(".rw_users_macro_params",m).attr("data-groups")+"";var k=d(".rw_users_macro_params",m).attr("data-title")+"";var j=d(".rw_users_macro_params",m).data("layout")+"";var l=d(".rw_users_macro_params",m).attr("data-description")+"";var n=d(".rw_users_macro_params",m).data("excludeUserCategories");var i=d(".rw_users_macro_params",m).data("max-results");var g=new RW.Models.UsersModel({usersParam:e,groupsParam:f,title:k,layout:j,description:l,excludeUserCategories:n,remoteUser:AJS.Meta.get("remote-user"),maxResults:i});var h=d(RWJS.Templates.Utils.loader({size:"medium"}));m.append(h);g.fetch({success:function(){var o=new RW.Views.UsersView({model:g,width:m.width()});h.remove();m.append(o.render());RW.initHipchatStatus();Confluence.Binder.userHover();RW.registerUserClickEvents()},error:function(q,o,p){h.remove();if(o.statusText!=="abort"){if(o.status===401){m.html(RW.Templates.infoBox({content:"The content of this macro can only be viewed by users who have logged in."}))}else{m.html(RW.Templates.warningBox({content:"An unexpected error has occurred. We apologize for this inconvenience."}))}}}})};var a=function(l){var g=l.attr("data-username")+"";var k=l.attr("data-title");var h=l.data("layout");var i=l.data("can-update-status");var j=l.data("canSeePersonalSpace");if(b.isEmpty(h)){h="full"}var m=l.data("excludeUserCategories");var e=new RW.Models.UsersModel({usersParam:g,title:k,layout:h,excludeUserCategories:m,canSeePersonalSpace:j,remoteUser:AJS.Meta.get("remote-user")});var f=d(RWJS.Templates.Utils.loader({size:"medium"}));l.append(f);e.fetch({data:{showDeactive:true},success:function(){var n=new RW.Views.UserView({model:e,title:k,canUpdateStatus:i});f.remove();l.append(n.render());RW.initHipchatStatus();Confluence.Binder.userHover();RW.registerUserClickEvents()},error:function(p,n,o){f.remove();if(n.statusText!=="abort"){if(n.status===401){l.html(RW.Templates.infoBox({content:"The content of this macro can only be viewed by users who have logged in."}))}else{l.html(RW.Templates.warningBox({content:"An unexpected error has occurred. We apologize for this inconvenience."}))}}}})};RW.registerUserClickEvents=function(){b.each(d(".rw_user_details .rw_follow"),function(e){d("a",e).unbind("click");d("a",e).bind("click",function(f){f.stopPropagation();d("span",e).removeClass("rw_no_icon").addClass("rw_loading");d.ajax({url:contextPath+"/rest/originaltheme/1.0/user/"+d(e).data("username")+"/follow",type:"POST",dataType:"json",success:function(g){var h=g;d("span",e).addClass("rw_no_icon").removeClass("rw_loading");if(h){d(e).removeClass("rw_follow");d(e).addClass("rw_unfollow");d("span",e).html("Stop Following")}RW.registerUserClickEvents()},error:function(g){if(g.status!=0){alert(g.status+" "+g.statusText)}}})})});b.each(d(".rw_user_details .rw_unfollow"),function(e){d("a",e).unbind("click");d("a",e).bind("click",function(f){f.stopPropagation();d("span",e).removeClass("rw_no_icon").addClass("rw_loading");d.ajax({url:contextPath+"/rest/originaltheme/1.0/user/"+d(e).data("username")+"/unfollow",type:"POST",dataType:"json",success:function(g){var h=g;d("span",e).addClass("rw_no_icon").removeClass("rw_loading");if(!h){d(e).removeClass("rw_unfollow");d(e).addClass("rw_follow");d("span",e).html("Follow")}RW.registerUserClickEvents()},error:function(g){if(g.status!=0){alert(g.status+" "+g.statusText)}}});RW.registerUserClickEvents()})});b.each(d(".rw_user_details .rw_update_status_button"),function(e){d(e).unbind("click");d(e).bind("click",function(g){g.stopPropagation();var f=WRM.require("wr!confluence.userstatus:userstatus-resources",function(){AJS.$("#create-user-status-link").trigger("deferred.userstatus.click");d(".status-update-button","#update-user-status-dialog").bind("click",function(h){d(document).ajaxSuccess(function(j,k,i){if(i.url.indexOf("status/update.action")!=-1){location.href=location.href}})})})})})}})(RWJS.$,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/mywork/models/mywork-macro-model.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Models==="undefined"){RW.Models={}}(function(c,d,b,a){RW.Models.MyWorkMacroModel=d.Model.extend({url:function(){return contextPath+"/rest/api/content/search"}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/mywork/views/mywork-macro-view.js' */
if(typeof RW==="undefined"){var RW={}}if(typeof RW.Views==="undefined"){RW.Views={}}(function(d,k,i,l){var f="newer";var c="today";var j="yesterday";var a="this-week";var h="last-week";var e="older";var b={0:f,1:c,2:j,3:a,4:h,5:e};RW.Views.MyWorkMacroView=k.View.extend({events:{"click .rw_mywork_dropdown_trigger":"initDropdown","click .rw_item_favourite":"toggleFavourite","click .rw_load_more_link":"loadMoreButtonClicked","click .rw_horizontal_menu li":"horizontalMenuClicked"},$loader:undefined,index:undefined,inPopup:false,startIndex:0,maxResults:10,initialize:function(m){this.$loader=d(RWJS.Templates.Utils.loader({size:"medium"}));try{this.index=m.index;if(m.inPopup){this.inPopup=m.inPopup}}catch(n){console.error("RW.Views.MyWorkMacroView need to supply index!",this)}},render:function(o){var n=RW.storage.getValue("mywork-macro.state"+this.index);if(!n){n=o&&o.selected}if(this.$el.data("max-results")!==undefined){this.maxResults=this.$el.data("max-results")}var p=this.$el.data("title");var m=d(RW.Templates.MyWork.macro({selected:n,title:p,inPopup:this.inPopup}));d("#rw_mywork_dropdown",m).attr("id","rw_mywork_dropdown"+this.index);d(".rw_mywork_dropdown_trigger",m).attr("aria-owns","rw_mywork_dropdown"+this.index);this.$el.html(m);if(this.maxResults==="not_valid"){this.$(".rw_mywork_body").html(RW.Templates.errorBox({content:"The \'Number of Items\' parameter wasn\'t a number."}));return this.$el}if(n=="visited"){this.openRecentlyVisited()}else{if(n=="favourites"){this.openFavourites()}else{this.openRecentlyEdited()}}return this.$el},initDropdown:function(m){d("#rw_mywork_dropdown"+this.index).find(".rw_recently_edited").unbind("click");d("#rw_mywork_dropdown"+this.index).find(".rw_recently_edited").bind("click",l.bind(this.openRecentlyEdited,this));d("#rw_mywork_dropdown"+this.index).find(".rw_recently_visited").unbind("click");d("#rw_mywork_dropdown"+this.index).find(".rw_recently_visited").bind("click",l.bind(this.openRecentlyVisited,this));d("#rw_mywork_dropdown"+this.index).find(".rw_favourites").unbind("click");d("#rw_mywork_dropdown"+this.index).find(".rw_favourites").bind("click",l.bind(this.openFavourites,this))},horizontalMenuClicked:function(o){if(o.currentTarget===undefined){return}var m=d(o.currentTarget);var n=m.data("action");this.$(".rw_horizontal_menu .rw_active").removeClass("rw_active");m.addClass("rw_active");if(n==="edited"){this.openRecentlyEdited()}else{if(n==="visited"){this.openRecentlyVisited()}else{if(n==="favourites"){this.openFavourites()}}}},toggleFavourite:function(n){var m=d(n.currentTarget).closest("li").data("id");RW.addOrRemoveFavPage(m,d(n.currentTarget));n.stopPropagation();return false},openRecentlyEdited:function(m){this.startIndex=0;this.$(".rw_mywork_body").html("");this.loadRecentlyEdited();this.$(".rw_mywork_dropdown_trigger").html(RW.Templates.MyWork.editedDDItem());RW.storage.setValue("mywork-macro.state"+this.index,"edited")},loadRecentlyEdited:function(){var n=d(RWJS.Templates.Utils.loader({size:"medium"}));this.$(".rw_mywork_body").append(n);var m=this;this.model.fetch({data:{limit:this.maxResults,expand:"container,metadata.currentuser.lastmodified,metadata.currentuser.favourited",cql:"type in (page,blogpost) and id in recentlyModifiedPagesAndBlogPostsByUser(currentUser(), "+this.startIndex+", "+this.maxResults+")"},success:function(){WRM.require("wr!confluence.web.resources:moment").done(function(){n.remove();if(m.model.get("results")&&(m.model.get("results").length>0)){var o=m.groupResults(m.model.toJSON().results,"metadata.currentuser.lastmodified.version.when");m.insertFetchedContent(o)}else{if(m.startIndex===0){m.$(".rw_mywork_body").html(RW.Templates.MyWork.empty())}}if(m.model.get("results")>=m.maxResults){m.$(".rw_mywork_body").append("<li>"+RW.Templates.loadMoreButton()+"</li>")}})},error:function(){}})},openRecentlyVisited:function(m){this.startIndex=0;this.$(".rw_mywork_body").html("");this.loadRecentlyVisited();this.$(".rw_mywork_dropdown_trigger").html(RW.Templates.MyWork.visitedDDItem());RW.storage.setValue("mywork-macro.state"+this.index,"visited")},loadRecentlyVisited:function(){var n=d(RWJS.Templates.Utils.loader({size:"medium"}));this.$(".rw_mywork_body").append(n);var m=this;this.model.fetch({data:{limit:this.maxResults,data:0,expand:"container,metadata.currentuser.viewed,metadata.currentuser.favourited",cql:"type in (page,blogpost) and id in recentlyViewedContent("+this.maxResults+", "+this.startIndex+")"},success:function(){WRM.require("wr!confluence.web.resources:moment").done(function(){n.remove();if(m.model.get("results")&&(m.model.get("results").length>0)){var o=m.groupResults(m.model.toJSON().results,"metadata.currentuser.viewed.lastSeen");m.insertFetchedContent(o)}else{if(m.startIndex===0){m.$(".rw_mywork_body").html(RW.Templates.MyWork.empty())}}if(m.model.get("results")>=m.maxResults){m.$(".rw_mywork_body").append("<li>"+RW.Templates.loadMoreButton()+"</li>")}})},error:function(){}})},openFavourites:function(m){this.startIndex=0;this.$(".rw_mywork_body").show();this.$(".rw_mywork_body").html(RW.Templates.MyWork.favouritePagesAndSpaces());this.loadFavourtieSpacesAndPages();this.$(".rw_mywork_dropdown_trigger").html(RW.Templates.MyWork.favouritesDDItem());RW.storage.setValue("mywork-macro.state"+this.index,"favourites")},loadFavourtieSpacesAndPages:function(){var m=this;var n=new RW.Models.FavoriteSpacesModel();var o=new RW.Models.FavoritePagesModel();o.fetch({success:function(){var p=new RW.Views.FavoritePagesView({el:m.$(".rw_favourite_pages"),model:o});p.render();n.fetch({success:function(){var q=new RW.Views.FavoriteSpacesView({el:m.$(".rw_favourite_spaces"),model:n});q.render();if(m.inPopup){RW.startKeyable(m.$(".rw_favourite_container"),"multi_column",null,null)}}})}})},groupResults:function(n,m){this.momentCalendar();var o=l.groupBy(n,l.bind(function(q){try{var r=g(q,m);if(this.isTimeTraveler(moment(r))){return f}else{if(this.isToday(moment(r))){return c}else{if(this.isYesterday(moment(r))){return j}else{if(this.isThisWeek(moment(r))){return a}else{if(this.isLastWeek(moment(r))){return h}else{return e}}}}}}catch(s){console.error("Couldn't parse date from result",q);return"error"}},this));var p=l.keys(o);l.each(p,function(q){o[q]=l.sortBy(o[q],function(r){return -(new Date(g(r,m))).getTime()})});return o},insertFetchedContent:function(m){var q=l.map(b,function(s){return[s,AJS.I18n.getText("rw.global."+s)]});for(var p=0;p<q.length;p++){var r=this.$('.rw_content_list:[data-calendarvalue="'+q[p][0]+'"]');var o=m[q[p][0]];if(o){if(r.length===0){var n=d(RW.Templates.MyWork.content({results:m[AJS.I18n.getText(q[p][0])],calendar:q[p]}));this.$(".rw_mywork_body").append(n)}else{var n=d(RW.Templates.MyWork.contentList({results:m[q[p][0]]}));r.append(n)}}}if(this.model.get("size")>=this.maxResults){this.$(".rw_mywork_body").append("<li>"+RW.Templates.loadMoreButton()+"</li>")}this.initKeyNavigation(this.startIndex);this.startIndex+=this.maxResults},momentCalendar:function(){var q=moment();var n=q.clone().startOf("day");var m=q.clone().subtract(1,"days").startOf("day");var o=q.clone().startOf("week");var p=o.clone().subtract(1,"days").startOf("week");this.isTimeTraveler=function(r){return r.isAfter(n,"d")};this.isToday=function(r){return r.isSame(n,"d")};this.isYesterday=function(r){return r.isSame(m,"d")};this.isThisWeek=function(r){return r.isAfter(o)};this.isLastWeek=function(r){return r.isAfter(p)}},loadMoreItems:function(){var m=RW.storage.getValue("mywork-macro.state"+this.index);if(m=="visited"){this.loadRecentlyVisited()}else{if(m!=="favourites"){this.loadRecentlyEdited()}}},loadMoreButtonClicked:function(m){this.loadMoreItems();d(m.currentTarget).parent().remove()},initKeyNavigation:function(o){if(this.inPopup){var n=null;if(o>0){var m=this.$(".rw_mywork_body li");if(m.length>o){n=d(m[o])}}RW.startKeyable(this.$(".rw_mywork_body"),"single_column",null,n)}}});var g=function(p,o){for(var n=0,o=o.split("."),m=o.length;n<m;n++){p=p[o[n]]}return p}})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:core-resources', location = 'originaltheme/js/mywork/mywork-controller.js' */
if(typeof RW==="undefined"){var RW={}}(function(c,d,b,a){AJS.toInit(function(){var e=c(".rw_mywork_macro");if(e.length>0){a.each(e,function(j,g){c(j).attr("id","rw_mywork_macro_"+g);if(!RW.remoteUser&&c("body.content-preview").length===0){c(j).html(RW.Templates.infoBox({content:"The content of this macro can only be viewed by users who have logged in."}))}else{var f=new RW.Models.MyWorkMacroModel();var h=new RW.Views.MyWorkMacroView({el:j,model:f,index:g});h.render()}})}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
