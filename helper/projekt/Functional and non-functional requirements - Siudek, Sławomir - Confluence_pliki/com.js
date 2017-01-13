;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/libs/jquery/jquery-1.7.2.js' */
if(typeof RWJS==="undefined"){var RWJS={};
/*!
 * jQuery JavaScript Library v1.7.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Mar 21 12:46:34 2012 -0700
 */
}(function(bd,L){var av=bd.document,bu=bd.navigator,bm=bd.location;var b=(function(){var bF=function(b0,b1){return new bF.fn.init(b0,b1,bD)},bU=bd.jQuery,bH=bd.$,bD,bY=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,bM=/\S/,bI=/^\s+/,bE=/\s+$/,bA=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,bN=/^[\],:{}\s]*$/,bW=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,bP=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,bJ=/(?:^|:|,)(?:\s*\[)+/g,by=/(webkit)[ \/]([\w.]+)/,bR=/(opera)(?:.*version)?[ \/]([\w.]+)/,bQ=/(msie) ([\w.]+)/,bS=/(mozilla)(?:.*? rv:([\w.]+))?/,bB=/-([a-z]|[0-9])/ig,bZ=/^-ms-/,bT=function(b0,b1){return(b1+"").toUpperCase()},bX=bu.userAgent,bV,bC,e,bL=Object.prototype.toString,bG=Object.prototype.hasOwnProperty,bz=Array.prototype.push,bK=Array.prototype.slice,bO=String.prototype.trim,bv=Array.prototype.indexOf,bx={};bF.fn=bF.prototype={constructor:bF,init:function(b0,b4,b3){var b2,b5,b1,b6;if(!b0){return this}if(b0.nodeType){this.context=this[0]=b0;this.length=1;return this}if(b0==="body"&&!b4&&av.body){this.context=av;this[0]=av.body;this.selector=b0;this.length=1;return this}if(typeof b0==="string"){if(b0.charAt(0)==="<"&&b0.charAt(b0.length-1)===">"&&b0.length>=3){b2=[null,b0,null]}else{b2=bY.exec(b0)}if(b2&&(b2[1]||!b4)){if(b2[1]){b4=b4 instanceof bF?b4[0]:b4;b6=(b4?b4.ownerDocument||b4:av);b1=bA.exec(b0);if(b1){if(bF.isPlainObject(b4)){b0=[av.createElement(b1[1])];bF.fn.attr.call(b0,b4,true)}else{b0=[b6.createElement(b1[1])]}}else{b1=bF.buildFragment([b2[1]],[b6]);b0=(b1.cacheable?bF.clone(b1.fragment):b1.fragment).childNodes}return bF.merge(this,b0)}else{b5=av.getElementById(b2[2]);if(b5&&b5.parentNode){if(b5.id!==b2[2]){return b3.find(b0)}this.length=1;this[0]=b5}this.context=av;this.selector=b0;return this}}else{if(!b4||b4.jquery){return(b4||b3).find(b0)}else{return this.constructor(b4).find(b0)}}}else{if(bF.isFunction(b0)){return b3.ready(b0)}}if(b0.selector!==L){this.selector=b0.selector;this.context=b0.context}return bF.makeArray(b0,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return bK.call(this,0)},get:function(b0){return b0==null?this.toArray():(b0<0?this[this.length+b0]:this[b0])},pushStack:function(b1,b3,b0){var b2=this.constructor();if(bF.isArray(b1)){bz.apply(b2,b1)}else{bF.merge(b2,b1)}b2.prevObject=this;b2.context=this.context;if(b3==="find"){b2.selector=this.selector+(this.selector?" ":"")+b0}else{if(b3){b2.selector=this.selector+"."+b3+"("+b0+")"}}return b2},each:function(b1,b0){return bF.each(this,b1,b0)},ready:function(b0){bF.bindReady();bC.add(b0);return this},eq:function(b0){b0=+b0;return b0===-1?this.slice(b0):this.slice(b0,b0+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(bK.apply(this,arguments),"slice",bK.call(arguments).join(","))},map:function(b0){return this.pushStack(bF.map(this,function(b2,b1){return b0.call(b2,b1,b2)}))},end:function(){return this.prevObject||this.constructor(null)},push:bz,sort:[].sort,splice:[].splice};bF.fn.init.prototype=bF.fn;bF.extend=bF.fn.extend=function(){var b9,b2,b0,b1,b6,b7,b5=arguments[0]||{},b4=1,b3=arguments.length,b8=false;if(typeof b5==="boolean"){b8=b5;b5=arguments[1]||{};b4=2}if(typeof b5!=="object"&&!bF.isFunction(b5)){b5={}}if(b3===b4){b5=this;--b4}for(;b4<b3;b4++){if((b9=arguments[b4])!=null){for(b2 in b9){b0=b5[b2];b1=b9[b2];if(b5===b1){continue}if(b8&&b1&&(bF.isPlainObject(b1)||(b6=bF.isArray(b1)))){if(b6){b6=false;b7=b0&&bF.isArray(b0)?b0:[]}else{b7=b0&&bF.isPlainObject(b0)?b0:{}}b5[b2]=bF.extend(b8,b7,b1)}else{if(b1!==L){b5[b2]=b1}}}}}return b5};bF.extend({noConflict:function(b0){if(bd.$===bF){bd.$=bH}if(b0&&bd.jQuery===bF){bd.jQuery=bU}return bF},isReady:false,readyWait:1,holdReady:function(b0){if(b0){bF.readyWait++}else{bF.ready(true)}},ready:function(b0){if((b0===true&&!--bF.readyWait)||(b0!==true&&!bF.isReady)){if(!av.body){return setTimeout(bF.ready,1)}bF.isReady=true;if(b0!==true&&--bF.readyWait>0){return}bC.fireWith(av,[bF]);if(bF.fn.trigger){bF(av).trigger("ready").off("ready")}}},bindReady:function(){if(bC){return}bC=bF.Callbacks("once memory");if(av.readyState==="complete"){return setTimeout(bF.ready,1)}if(av.addEventListener){av.addEventListener("DOMContentLoaded",e,false);bd.addEventListener("load",bF.ready,false)}else{if(av.attachEvent){av.attachEvent("onreadystatechange",e);bd.attachEvent("onload",bF.ready);var b0=false;try{b0=bd.frameElement==null}catch(b1){}if(av.documentElement.doScroll&&b0){bw()}}}},isFunction:function(b0){return bF.type(b0)==="function"},isArray:Array.isArray||function(b0){return bF.type(b0)==="array"},isWindow:function(b0){return b0!=null&&b0==b0.window},isNumeric:function(b0){return !isNaN(parseFloat(b0))&&isFinite(b0)},type:function(b0){return b0==null?String(b0):bx[bL.call(b0)]||"object"},isPlainObject:function(b2){if(!b2||bF.type(b2)!=="object"||b2.nodeType||bF.isWindow(b2)){return false}try{if(b2.constructor&&!bG.call(b2,"constructor")&&!bG.call(b2.constructor.prototype,"isPrototypeOf")){return false}}catch(b1){return false}var b0;for(b0 in b2){}return b0===L||bG.call(b2,b0)},isEmptyObject:function(b1){for(var b0 in b1){return false}return true},error:function(b0){throw new Error(b0)},parseJSON:function(b0){if(typeof b0!=="string"||!b0){return null}b0=bF.trim(b0);if(bd.JSON&&bd.JSON.parse){return bd.JSON.parse(b0)}if(bN.test(b0.replace(bW,"@").replace(bP,"]").replace(bJ,""))){return(new Function("return "+b0))()}bF.error("Invalid JSON: "+b0)},parseXML:function(b2){if(typeof b2!=="string"||!b2){return null}var b0,b1;try{if(bd.DOMParser){b1=new DOMParser();b0=b1.parseFromString(b2,"text/xml")}else{b0=new ActiveXObject("Microsoft.XMLDOM");b0.async="false";b0.loadXML(b2)}}catch(b3){b0=L}if(!b0||!b0.documentElement||b0.getElementsByTagName("parsererror").length){bF.error("Invalid XML: "+b2)}return b0},noop:function(){},globalEval:function(b0){if(b0&&bM.test(b0)){(bd.execScript||function(b1){bd["eval"].call(bd,b1)})(b0)}},camelCase:function(b0){return b0.replace(bZ,"ms-").replace(bB,bT)},nodeName:function(b1,b0){return b1.nodeName&&b1.nodeName.toUpperCase()===b0.toUpperCase()},each:function(b3,b6,b2){var b1,b4=0,b5=b3.length,b0=b5===L||bF.isFunction(b3);if(b2){if(b0){for(b1 in b3){if(b6.apply(b3[b1],b2)===false){break}}}else{for(;b4<b5;){if(b6.apply(b3[b4++],b2)===false){break}}}}else{if(b0){for(b1 in b3){if(b6.call(b3[b1],b1,b3[b1])===false){break}}}else{for(;b4<b5;){if(b6.call(b3[b4],b4,b3[b4++])===false){break}}}}return b3},trim:bO?function(b0){return b0==null?"":bO.call(b0)}:function(b0){return b0==null?"":b0.toString().replace(bI,"").replace(bE,"")},makeArray:function(b3,b1){var b0=b1||[];if(b3!=null){var b2=bF.type(b3);if(b3.length==null||b2==="string"||b2==="function"||b2==="regexp"||bF.isWindow(b3)){bz.call(b0,b3)}else{bF.merge(b0,b3)}}return b0},inArray:function(b2,b3,b1){var b0;if(b3){if(bv){return bv.call(b3,b2,b1)}b0=b3.length;b1=b1?b1<0?Math.max(0,b0+b1):b1:0;for(;b1<b0;b1++){if(b1 in b3&&b3[b1]===b2){return b1}}}return -1},merge:function(b4,b2){var b3=b4.length,b1=0;if(typeof b2.length==="number"){for(var b0=b2.length;b1<b0;b1++){b4[b3++]=b2[b1]}}else{while(b2[b1]!==L){b4[b3++]=b2[b1++]}}b4.length=b3;return b4},grep:function(b1,b6,b0){var b2=[],b5;b0=!!b0;for(var b3=0,b4=b1.length;b3<b4;b3++){b5=!!b6(b1[b3],b3);if(b0!==b5){b2.push(b1[b3])}}return b2},map:function(b0,b7,b8){var b5,b6,b4=[],b2=0,b1=b0.length,b3=b0 instanceof bF||b1!==L&&typeof b1==="number"&&((b1>0&&b0[0]&&b0[b1-1])||b1===0||bF.isArray(b0));if(b3){for(;b2<b1;b2++){b5=b7(b0[b2],b2,b8);if(b5!=null){b4[b4.length]=b5}}}else{for(b6 in b0){b5=b7(b0[b6],b6,b8);if(b5!=null){b4[b4.length]=b5}}}return b4.concat.apply([],b4)},guid:1,proxy:function(b4,b3){if(typeof b3==="string"){var b2=b4[b3];b3=b4;b4=b2}if(!bF.isFunction(b4)){return L}var b0=bK.call(arguments,2),b1=function(){return b4.apply(b3,b0.concat(bK.call(arguments)))};b1.guid=b4.guid=b4.guid||b1.guid||bF.guid++;return b1},access:function(b0,b6,b9,b7,b4,ca,b8){var b2,b5=b9==null,b3=0,b1=b0.length;if(b9&&typeof b9==="object"){for(b3 in b9){bF.access(b0,b6,b3,b9[b3],1,ca,b7)}b4=1}else{if(b7!==L){b2=b8===L&&bF.isFunction(b7);if(b5){if(b2){b2=b6;b6=function(cc,cb,cd){return b2.call(bF(cc),cd)}}else{b6.call(b0,b7);b6=null}}if(b6){for(;b3<b1;b3++){b6(b0[b3],b9,b2?b7.call(b0[b3],b3,b6(b0[b3],b9)):b7,b8)}}b4=1}}return b4?b0:b5?b6.call(b0):b1?b6(b0[0],b9):ca},now:function(){return(new Date()).getTime()},uaMatch:function(b1){b1=b1.toLowerCase();var b0=by.exec(b1)||bR.exec(b1)||bQ.exec(b1)||b1.indexOf("compatible")<0&&bS.exec(b1)||[];return{browser:b0[1]||"",version:b0[2]||"0"}},sub:function(){function b0(b3,b4){return new b0.fn.init(b3,b4)}bF.extend(true,b0,this);b0.superclass=this;b0.fn=b0.prototype=this();b0.fn.constructor=b0;b0.sub=this.sub;b0.fn.init=function b2(b3,b4){if(b4&&b4 instanceof bF&&!(b4 instanceof b0)){b4=b0(b4)}return bF.fn.init.call(this,b3,b4,b1)};b0.fn.init.prototype=b0.fn;var b1=b0(av);return b0},browser:{}});bF.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(b1,b0){bx["[object "+b0+"]"]=b0.toLowerCase()});bV=bF.uaMatch(bX);if(bV.browser){bF.browser[bV.browser]=true;bF.browser.version=bV.version}if(bF.browser.webkit){bF.browser.safari=true}if(bM.test("\xA0")){bI=/^[\s\xA0]+/;bE=/[\s\xA0]+$/}bD=bF(av);if(av.addEventListener){e=function(){av.removeEventListener("DOMContentLoaded",e,false);bF.ready()}}else{if(av.attachEvent){e=function(){if(av.readyState==="complete"){av.detachEvent("onreadystatechange",e);bF.ready()}}}}function bw(){if(bF.isReady){return}try{av.documentElement.doScroll("left")}catch(b0){setTimeout(bw,1);return}bF.ready()}return bF})();var a3={};function X(e){var bv=a3[e]={},bw,bx;e=e.split(/\s+/);for(bw=0,bx=e.length;bw<bx;bw++){bv[e[bw]]=true}return bv}b.Callbacks=function(bx){bx=bx?(a3[bx]||X(bx)):{};var bC=[],bD=[],by,e,bz,bw,bA,bB,bF=function(bG){var bH,bK,bJ,bI,bL;for(bH=0,bK=bG.length;bH<bK;bH++){bJ=bG[bH];bI=b.type(bJ);if(bI==="array"){bF(bJ)}else{if(bI==="function"){if(!bx.unique||!bE.has(bJ)){bC.push(bJ)}}}}},bv=function(bH,bG){bG=bG||[];by=!bx.memory||[bH,bG];e=true;bz=true;bB=bw||0;bw=0;bA=bC.length;for(;bC&&bB<bA;bB++){if(bC[bB].apply(bH,bG)===false&&bx.stopOnFalse){by=true;break}}bz=false;if(bC){if(!bx.once){if(bD&&bD.length){by=bD.shift();bE.fireWith(by[0],by[1])}}else{if(by===true){bE.disable()}else{bC=[]}}}},bE={add:function(){if(bC){var bG=bC.length;bF(arguments);if(bz){bA=bC.length}else{if(by&&by!==true){bw=bG;bv(by[0],by[1])}}}return this},remove:function(){if(bC){var bG=arguments,bI=0,bJ=bG.length;for(;bI<bJ;bI++){for(var bH=0;bH<bC.length;bH++){if(bG[bI]===bC[bH]){if(bz){if(bH<=bA){bA--;if(bH<=bB){bB--}}}bC.splice(bH--,1);if(bx.unique){break}}}}}return this},has:function(bH){if(bC){var bG=0,bI=bC.length;for(;bG<bI;bG++){if(bH===bC[bG]){return true}}}return false},empty:function(){bC=[];return this},disable:function(){bC=bD=by=L;return this},disabled:function(){return !bC},lock:function(){bD=L;if(!by||by===true){bE.disable()}return this},locked:function(){return !bD},fireWith:function(bH,bG){if(bD){if(bz){if(!bx.once){bD.push([bH,bG])}}else{if(!(bx.once&&by)){bv(bH,bG)}}}return this},fire:function(){bE.fireWith(this,arguments);return this},fired:function(){return !!e}};return bE};var aK=[].slice;b.extend({Deferred:function(by){var bx=b.Callbacks("once memory"),bw=b.Callbacks("once memory"),bv=b.Callbacks("memory"),e="pending",bA={resolve:bx,reject:bw,notify:bv},bC={done:bx.add,fail:bw.add,progress:bv.add,state:function(){return e},isResolved:bx.fired,isRejected:bw.fired,then:function(bE,bD,bF){bB.done(bE).fail(bD).progress(bF);return this},always:function(){bB.done.apply(bB,arguments).fail.apply(bB,arguments);return this},pipe:function(bF,bE,bD){return b.Deferred(function(bG){b.each({done:[bF,"resolve"],fail:[bE,"reject"],progress:[bD,"notify"]},function(bI,bL){var bH=bL[0],bK=bL[1],bJ;if(b.isFunction(bH)){bB[bI](function(){bJ=bH.apply(this,arguments);if(bJ&&b.isFunction(bJ.promise)){bJ.promise().then(bG.resolve,bG.reject,bG.notify)}else{bG[bK+"With"](this===bB?bG:this,[bJ])}})}else{bB[bI](bG[bK])}})}).promise()},promise:function(bE){if(bE==null){bE=bC}else{for(var bD in bC){bE[bD]=bC[bD]}}return bE}},bB=bC.promise({}),bz;for(bz in bA){bB[bz]=bA[bz].fire;bB[bz+"With"]=bA[bz].fireWith}bB.done(function(){e="resolved"},bw.disable,bv.lock).fail(function(){e="rejected"},bx.disable,bv.lock);if(by){by.call(bB,bB)}return bB},when:function(bA){var bx=aK.call(arguments,0),bv=0,e=bx.length,bB=new Array(e),bw=e,by=e,bC=e<=1&&bA&&b.isFunction(bA.promise)?bA:b.Deferred(),bE=bC.promise();function bD(bF){return function(bG){bx[bF]=arguments.length>1?aK.call(arguments,0):bG;if(!(--bw)){bC.resolveWith(bC,bx)}}}function bz(bF){return function(bG){bB[bF]=arguments.length>1?aK.call(arguments,0):bG;bC.notifyWith(bE,bB)}}if(e>1){for(;bv<e;bv++){if(bx[bv]&&bx[bv].promise&&b.isFunction(bx[bv].promise)){bx[bv].promise().then(bD(bv),bC.reject,bz(bv))}else{--bw}}if(!bw){bC.resolveWith(bC,bx)}}else{if(bC!==bA){bC.resolveWith(bC,e?[bA]:[])}}return bE}});b.support=(function(){var bI,bH,bE,bF,bx,bD,bC,bz,bJ,bA,by,bw,bv=av.createElement("div"),bG=av.documentElement;bv.setAttribute("className","t");bv.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>";bH=bv.getElementsByTagName("*");bE=bv.getElementsByTagName("a")[0];if(!bH||!bH.length||!bE){return{}}bF=av.createElement("select");bx=bF.appendChild(av.createElement("option"));bD=bv.getElementsByTagName("input")[0];bI={leadingWhitespace:(bv.firstChild.nodeType===3),tbody:!bv.getElementsByTagName("tbody").length,htmlSerialize:!!bv.getElementsByTagName("link").length,style:/top/.test(bE.getAttribute("style")),hrefNormalized:(bE.getAttribute("href")==="/a"),opacity:/^0.55/.test(bE.style.opacity),cssFloat:!!bE.style.cssFloat,checkOn:(bD.value==="on"),optSelected:bx.selected,getSetAttribute:bv.className!=="t",enctype:!!av.createElement("form").enctype,html5Clone:av.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,pixelMargin:true};b.boxModel=bI.boxModel=(av.compatMode==="CSS1Compat");bD.checked=true;bI.noCloneChecked=bD.cloneNode(true).checked;bF.disabled=true;bI.optDisabled=!bx.disabled;try{delete bv.test}catch(bB){bI.deleteExpando=false}if(!bv.addEventListener&&bv.attachEvent&&bv.fireEvent){bv.attachEvent("onclick",function(){bI.noCloneEvent=false});bv.cloneNode(true).fireEvent("onclick")}bD=av.createElement("input");bD.value="t";bD.setAttribute("type","radio");bI.radioValue=bD.value==="t";bD.setAttribute("checked","checked");bD.setAttribute("name","t");bv.appendChild(bD);bC=av.createDocumentFragment();bC.appendChild(bv.lastChild);bI.checkClone=bC.cloneNode(true).cloneNode(true).lastChild.checked;bI.appendChecked=bD.checked;bC.removeChild(bD);bC.appendChild(bv);if(bv.attachEvent){for(by in {submit:1,change:1,focusin:1}){bA="on"+by;bw=(bA in bv);if(!bw){bv.setAttribute(bA,"return;");bw=(typeof bv[bA]==="function")}bI[by+"Bubbles"]=bw}}bC.removeChild(bv);bC=bF=bx=bv=bD=null;b(function(){var bM,bV,bW,bU,bO,bP,bR,bL,bK,bQ,bN,e,bT,bS=av.getElementsByTagName("body")[0];if(!bS){return}bL=1;bT="padding:0;margin:0;border:";bN="position:absolute;top:0;left:0;width:1px;height:1px;";e=bT+"0;visibility:hidden;";bK="style='"+bN+bT+"5px solid #000;";bQ="<div "+bK+"display:block;'><div style='"+bT+"0;display:block;overflow:hidden;'></div></div><table "+bK+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";bM=av.createElement("div");bM.style.cssText=e+"width:0;height:0;position:static;top:0;margin-top:"+bL+"px";bS.insertBefore(bM,bS.firstChild);bv=av.createElement("div");bM.appendChild(bv);bv.innerHTML="<table><tr><td style='"+bT+"0;display:none'></td><td>t</td></tr></table>";bz=bv.getElementsByTagName("td");bw=(bz[0].offsetHeight===0);bz[0].style.display="";bz[1].style.display="none";bI.reliableHiddenOffsets=bw&&(bz[0].offsetHeight===0);if(bd.getComputedStyle){bv.innerHTML="";bR=av.createElement("div");bR.style.width="0";bR.style.marginRight="0";bv.style.width="2px";bv.appendChild(bR);bI.reliableMarginRight=(parseInt((bd.getComputedStyle(bR,null)||{marginRight:0}).marginRight,10)||0)===0}if(typeof bv.style.zoom!=="undefined"){bv.innerHTML="";bv.style.width=bv.style.padding="1px";bv.style.border=0;bv.style.overflow="hidden";bv.style.display="inline";bv.style.zoom=1;bI.inlineBlockNeedsLayout=(bv.offsetWidth===3);bv.style.display="block";bv.style.overflow="visible";bv.innerHTML="<div style='width:5px;'></div>";bI.shrinkWrapBlocks=(bv.offsetWidth!==3)}bv.style.cssText=bN+e;bv.innerHTML=bQ;bV=bv.firstChild;bW=bV.firstChild;bO=bV.nextSibling.firstChild.firstChild;bP={doesNotAddBorder:(bW.offsetTop!==5),doesAddBorderForTableAndCells:(bO.offsetTop===5)};bW.style.position="fixed";bW.style.top="20px";bP.fixedPosition=(bW.offsetTop===20||bW.offsetTop===15);bW.style.position=bW.style.top="";bV.style.overflow="hidden";bV.style.position="relative";bP.subtractsBorderForOverflowNotVisible=(bW.offsetTop===-5);bP.doesNotIncludeMarginInBodyOffset=(bS.offsetTop!==bL);if(bd.getComputedStyle){bv.style.marginTop="1%";bI.pixelMargin=(bd.getComputedStyle(bv,null)||{marginTop:0}).marginTop!=="1%"}if(typeof bM.style.zoom!=="undefined"){bM.style.zoom=1}bS.removeChild(bM);bR=bv=bM=null;b.extend(bI,bP)});return bI})();var aT=/^(?:\{.*\}|\[.*\])$/,aA=/([A-Z])/g;b.extend({cache:{},uuid:0,expando:"jQuery"+(b.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?b.cache[e[b.expando]]:e[b.expando];return !!e&&!S(e)},data:function(bx,bv,bz,by){if(!b.acceptData(bx)){return}var bG,bA,bD,bE=b.expando,bC=typeof bv==="string",bF=bx.nodeType,e=bF?b.cache:bx,bw=bF?bx[bE]:bx[bE]&&bE,bB=bv==="events";if((!bw||!e[bw]||(!bB&&!by&&!e[bw].data))&&bC&&bz===L){return}if(!bw){if(bF){bx[bE]=bw=++b.uuid}else{bw=bE}}if(!e[bw]){e[bw]={};if(!bF){e[bw].toJSON=b.noop}}if(typeof bv==="object"||typeof bv==="function"){if(by){e[bw]=b.extend(e[bw],bv)}else{e[bw].data=b.extend(e[bw].data,bv)}}bG=bA=e[bw];if(!by){if(!bA.data){bA.data={}}bA=bA.data}if(bz!==L){bA[b.camelCase(bv)]=bz}if(bB&&!bA[bv]){return bG.events}if(bC){bD=bA[bv];if(bD==null){bD=bA[b.camelCase(bv)]}}else{bD=bA}return bD},removeData:function(bx,bv,by){if(!b.acceptData(bx)){return}var bB,bA,bz,bC=b.expando,bD=bx.nodeType,e=bD?b.cache:bx,bw=bD?bx[bC]:bC;if(!e[bw]){return}if(bv){bB=by?e[bw]:e[bw].data;if(bB){if(!b.isArray(bv)){if(bv in bB){bv=[bv]}else{bv=b.camelCase(bv);if(bv in bB){bv=[bv]}else{bv=bv.split(" ")}}}for(bA=0,bz=bv.length;bA<bz;bA++){delete bB[bv[bA]]}if(!(by?S:b.isEmptyObject)(bB)){return}}}if(!by){delete e[bw].data;if(!S(e[bw])){return}}if(b.support.deleteExpando||!e.setInterval){delete e[bw]}else{e[bw]=null}if(bD){if(b.support.deleteExpando){delete bx[bC]}else{if(bx.removeAttribute){bx.removeAttribute(bC)}else{bx[bC]=null}}}},_data:function(bv,e,bw){return b.data(bv,e,bw,true)},acceptData:function(bv){if(bv.nodeName){var e=b.noData[bv.nodeName.toLowerCase()];if(e){return !(e===true||bv.getAttribute("classid")!==e)}}return true}});b.fn.extend({data:function(bD,bC){var by,bv,bB,e,bx,bw=this[0],bA=0,bz=null;if(bD===L){if(this.length){bz=b.data(bw);if(bw.nodeType===1&&!b._data(bw,"parsedAttrs")){bB=bw.attributes;for(bx=bB.length;bA<bx;bA++){e=bB[bA].name;if(e.indexOf("data-")===0){e=b.camelCase(e.substring(5));a6(bw,e,bz[e])}}b._data(bw,"parsedAttrs",true)}}return bz}if(typeof bD==="object"){return this.each(function(){b.data(this,bD)})}by=bD.split(".",2);by[1]=by[1]?"."+by[1]:"";bv=by[1]+"!";return b.access(this,function(bE){if(bE===L){bz=this.triggerHandler("getData"+bv,[by[0]]);if(bz===L&&bw){bz=b.data(bw,bD);bz=a6(bw,bD,bz)}return bz===L&&by[1]?this.data(by[0]):bz}by[1]=bE;this.each(function(){var bF=b(this);bF.triggerHandler("setData"+bv,by);b.data(this,bD,bE);bF.triggerHandler("changeData"+bv,by)})},null,bC,arguments.length>1,null,false)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function a6(bx,bw,by){if(by===L&&bx.nodeType===1){var bv="data-"+bw.replace(aA,"-$1").toLowerCase();by=bx.getAttribute(bv);if(typeof by==="string"){try{by=by==="true"?true:by==="false"?false:by==="null"?null:b.isNumeric(by)?+by:aT.test(by)?b.parseJSON(by):by}catch(bz){}b.data(bx,bw,by)}else{by=L}}return by}function S(bv){for(var e in bv){if(e==="data"&&b.isEmptyObject(bv[e])){continue}if(e!=="toJSON"){return false}}return true}function bj(by,bx,bA){var bw=bx+"defer",bv=bx+"queue",e=bx+"mark",bz=b._data(by,bw);if(bz&&(bA==="queue"||!b._data(by,bv))&&(bA==="mark"||!b._data(by,e))){setTimeout(function(){if(!b._data(by,bv)&&!b._data(by,e)){b.removeData(by,bw,true);bz.fire()}},0)}}b.extend({_mark:function(bv,e){if(bv){e=(e||"fx")+"mark";b._data(bv,e,(b._data(bv,e)||0)+1)}},_unmark:function(by,bx,bv){if(by!==true){bv=bx;bx=by;by=false}if(bx){bv=bv||"fx";var e=bv+"mark",bw=by?0:((b._data(bx,e)||1)-1);if(bw){b._data(bx,e,bw)}else{b.removeData(bx,e,true);bj(bx,bv,"mark")}}},queue:function(bv,e,bx){var bw;if(bv){e=(e||"fx")+"queue";bw=b._data(bv,e);if(bx){if(!bw||b.isArray(bx)){bw=b._data(bv,e,b.makeArray(bx))}else{bw.push(bx)}}return bw||[]}},dequeue:function(by,bx){bx=bx||"fx";var bv=b.queue(by,bx),bw=bv.shift(),e={};if(bw==="inprogress"){bw=bv.shift()}if(bw){if(bx==="fx"){bv.unshift("inprogress")}b._data(by,bx+".run",e);bw.call(by,function(){b.dequeue(by,bx)},e)}if(!bv.length){b.removeData(by,bx+"queue "+bx+".run",true);bj(by,bx,"queue")}}});b.fn.extend({queue:function(e,bv){var bw=2;if(typeof e!=="string"){bv=e;e="fx";bw--}if(arguments.length<bw){return b.queue(this[0],e)}return bv===L?this:this.each(function(){var bx=b.queue(this,e,bv);if(e==="fx"&&bx[0]!=="inprogress"){b.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(bv,e){bv=b.fx?b.fx.speeds[bv]||bv:bv;e=e||"fx";return this.queue(e,function(bx,bw){var by=setTimeout(bx,bv);bw.stop=function(){clearTimeout(by)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(bD,bw){if(typeof bD!=="string"){bw=bD;bD=L}bD=bD||"fx";var e=b.Deferred(),bv=this,by=bv.length,bB=1,bz=bD+"defer",bA=bD+"queue",bC=bD+"mark",bx;function bE(){if(!(--bB)){e.resolveWith(bv,[bv])}}while(by--){if((bx=b.data(bv[by],bz,L,true)||(b.data(bv[by],bA,L,true)||b.data(bv[by],bC,L,true))&&b.data(bv[by],bz,b.Callbacks("once memory"),true))){bB++;bx.add(bE)}}bE();return e.promise(bw)}});var aQ=/[\n\t\r]/g,ag=/\s+/,aV=/\r/g,g=/^(?:button|input)$/i,C=/^(?:button|input|object|select|textarea)$/i,l=/^a(?:rea)?$/i,ao=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,E=b.support.getSetAttribute,bf,aZ,aG;b.fn.extend({attr:function(e,bv){return b.access(this,b.attr,e,bv,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,bv){return b.access(this,b.prop,e,bv,arguments.length>1)},removeProp:function(e){e=b.propFix[e]||e;return this.each(function(){try{this[e]=L;delete this[e]}catch(bv){}})},addClass:function(by){var bA,bw,bv,bx,bz,bB,e;if(b.isFunction(by)){return this.each(function(bC){b(this).addClass(by.call(this,bC,this.className))})}if(by&&typeof by==="string"){bA=by.split(ag);for(bw=0,bv=this.length;bw<bv;bw++){bx=this[bw];if(bx.nodeType===1){if(!bx.className&&bA.length===1){bx.className=by}else{bz=" "+bx.className+" ";for(bB=0,e=bA.length;bB<e;bB++){if(!~bz.indexOf(" "+bA[bB]+" ")){bz+=bA[bB]+" "}}bx.className=b.trim(bz)}}}}return this},removeClass:function(bz){var bA,bw,bv,by,bx,bB,e;if(b.isFunction(bz)){return this.each(function(bC){b(this).removeClass(bz.call(this,bC,this.className))})}if((bz&&typeof bz==="string")||bz===L){bA=(bz||"").split(ag);for(bw=0,bv=this.length;bw<bv;bw++){by=this[bw];if(by.nodeType===1&&by.className){if(bz){bx=(" "+by.className+" ").replace(aQ," ");for(bB=0,e=bA.length;bB<e;bB++){bx=bx.replace(" "+bA[bB]+" "," ")}by.className=b.trim(bx)}else{by.className=""}}}}return this},toggleClass:function(bx,bv){var bw=typeof bx,e=typeof bv==="boolean";if(b.isFunction(bx)){return this.each(function(by){b(this).toggleClass(bx.call(this,by,this.className,bv),bv)})}return this.each(function(){if(bw==="string"){var bA,bz=0,by=b(this),bB=bv,bC=bx.split(ag);while((bA=bC[bz++])){bB=e?bB:!by.hasClass(bA);by[bB?"addClass":"removeClass"](bA)}}else{if(bw==="undefined"||bw==="boolean"){if(this.className){b._data(this,"__className__",this.className)}this.className=this.className||bx===false?"":b._data(this,"__className__")||""}}})},hasClass:function(e){var bx=" "+e+" ",bw=0,bv=this.length;for(;bw<bv;bw++){if(this[bw].nodeType===1&&(" "+this[bw].className+" ").replace(aQ," ").indexOf(bx)>-1){return true}}return false},val:function(bx){var e,bv,by,bw=this[0];if(!arguments.length){if(bw){e=b.valHooks[bw.type]||b.valHooks[bw.nodeName.toLowerCase()];if(e&&"get" in e&&(bv=e.get(bw,"value"))!==L){return bv}bv=bw.value;return typeof bv==="string"?bv.replace(aV,""):bv==null?"":bv}return}by=b.isFunction(bx);return this.each(function(bA){var bz=b(this),bB;if(this.nodeType!==1){return}if(by){bB=bx.call(this,bA,bz.val())}else{bB=bx}if(bB==null){bB=""}else{if(typeof bB==="number"){bB+=""}else{if(b.isArray(bB)){bB=b.map(bB,function(bC){return bC==null?"":bC+""})}}}e=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()];if(!e||!("set" in e)||e.set(this,bB,"value")===L){this.value=bB}})}});b.extend({valHooks:{option:{get:function(e){var bv=e.attributes.value;return !bv||bv.specified?e.value:e.text}},select:{get:function(e){var bA,bv,bz,bx,by=e.selectedIndex,bB=[],bC=e.options,bw=e.type==="select-one";if(by<0){return null}bv=bw?by:0;bz=bw?by+1:bC.length;for(;bv<bz;bv++){bx=bC[bv];if(bx.selected&&(b.support.optDisabled?!bx.disabled:bx.getAttribute("disabled")===null)&&(!bx.parentNode.disabled||!b.nodeName(bx.parentNode,"optgroup"))){bA=b(bx).val();if(bw){return bA}bB.push(bA)}}if(bw&&!bB.length&&bC.length){return b(bC[by]).val()}return bB},set:function(bv,bw){var e=b.makeArray(bw);b(bv).find("option").each(function(){this.selected=b.inArray(b(this).val(),e)>=0});if(!e.length){bv.selectedIndex=-1}return e}}},attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(bA,bx,bB,bz){var bw,e,by,bv=bA.nodeType;if(!bA||bv===3||bv===8||bv===2){return}if(bz&&bx in b.attrFn){return b(bA)[bx](bB)}if(typeof bA.getAttribute==="undefined"){return b.prop(bA,bx,bB)}by=bv!==1||!b.isXMLDoc(bA);if(by){bx=bx.toLowerCase();e=b.attrHooks[bx]||(ao.test(bx)?aZ:bf)}if(bB!==L){if(bB===null){b.removeAttr(bA,bx);return}else{if(e&&"set" in e&&by&&(bw=e.set(bA,bB,bx))!==L){return bw}else{bA.setAttribute(bx,""+bB);return bB}}}else{if(e&&"get" in e&&by&&(bw=e.get(bA,bx))!==null){return bw}else{bw=bA.getAttribute(bx);return bw===null?L:bw}}},removeAttr:function(by,bA){var bz,bB,bw,e,bv,bx=0;if(bA&&by.nodeType===1){bB=bA.toLowerCase().split(ag);e=bB.length;for(;bx<e;bx++){bw=bB[bx];if(bw){bz=b.propFix[bw]||bw;bv=ao.test(bw);if(!bv){b.attr(by,bw,"")}by.removeAttribute(E?bw:bz);if(bv&&bz in by){by[bz]=false}}}}},attrHooks:{type:{set:function(e,bv){if(g.test(e.nodeName)&&e.parentNode){b.error("type property can't be changed")}else{if(!b.support.radioValue&&bv==="radio"&&b.nodeName(e,"input")){var bw=e.value;e.setAttribute("type",bv);if(bw){e.value=bw}return bv}}}},value:{get:function(bv,e){if(bf&&b.nodeName(bv,"button")){return bf.get(bv,e)}return e in bv?bv.value:null},set:function(bv,bw,e){if(bf&&b.nodeName(bv,"button")){return bf.set(bv,bw,e)}bv.value=bw}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bz,bx,bA){var bw,e,by,bv=bz.nodeType;if(!bz||bv===3||bv===8||bv===2){return}by=bv!==1||!b.isXMLDoc(bz);if(by){bx=b.propFix[bx]||bx;e=b.propHooks[bx]}if(bA!==L){if(e&&"set" in e&&(bw=e.set(bz,bA,bx))!==L){return bw}else{return(bz[bx]=bA)}}else{if(e&&"get" in e&&(bw=e.get(bz,bx))!==null){return bw}else{return bz[bx]}}},propHooks:{tabIndex:{get:function(bv){var e=bv.getAttributeNode("tabindex");return e&&e.specified?parseInt(e.value,10):C.test(bv.nodeName)||l.test(bv.nodeName)&&bv.href?0:L}}}});b.attrHooks.tabindex=b.propHooks.tabIndex;aZ={get:function(bv,e){var bx,bw=b.prop(bv,e);return bw===true||typeof bw!=="boolean"&&(bx=bv.getAttributeNode(e))&&bx.nodeValue!==false?e.toLowerCase():L},set:function(bv,bx,e){var bw;if(bx===false){b.removeAttr(bv,e)}else{bw=b.propFix[e]||e;if(bw in bv){bv[bw]=true}bv.setAttribute(e,e.toLowerCase())}return e}};if(!E){aG={name:true,id:true,coords:true};bf=b.valHooks.button={get:function(bw,bv){var e;e=bw.getAttributeNode(bv);return e&&(aG[bv]?e.nodeValue!=="":e.specified)?e.nodeValue:L},set:function(bw,bx,bv){var e=bw.getAttributeNode(bv);if(!e){e=av.createAttribute(bv);bw.setAttributeNode(e)}return(e.nodeValue=bx+"")}};b.attrHooks.tabindex.set=bf.set;b.each(["width","height"],function(bv,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{set:function(bw,bx){if(bx===""){bw.setAttribute(e,"auto");return bx}}})});b.attrHooks.contenteditable={get:bf.get,set:function(bv,bw,e){if(bw===""){bw="false"}bf.set(bv,bw,e)}}}if(!b.support.hrefNormalized){b.each(["href","src","width","height"],function(bv,e){b.attrHooks[e]=b.extend(b.attrHooks[e],{get:function(bx){var bw=bx.getAttribute(e,2);return bw===null?L:bw}})})}if(!b.support.style){b.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||L},set:function(e,bv){return(e.style.cssText=""+bv)}}}if(!b.support.optSelected){b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(bv){var e=bv.parentNode;if(e){e.selectedIndex;if(e.parentNode){e.parentNode.selectedIndex}}return null}})}if(!b.support.enctype){b.propFix.enctype="encoding"}if(!b.support.checkOn){b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}})}b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,bv){if(b.isArray(bv)){return(e.checked=b.inArray(b(e).val(),bv)>=0)}}})});var be=/^(?:textarea|input|select)$/i,n=/^([^\.]*)?(?:\.(.+))?$/,J=/(?:^|\s)hover(\.\S+)?\b/,aP=/^key/,bg=/^(?:mouse|contextmenu)|click/,T=/^(?:focusinfocus|focusoutblur)$/,U=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,Y=function(e){var bv=U.exec(e);if(bv){bv[1]=(bv[1]||"").toLowerCase();bv[3]=bv[3]&&new RegExp("(?:^|\\s)"+bv[3]+"(?:\\s|$)")}return bv},j=function(bw,e){var bv=bw.attributes||{};return((!e[1]||bw.nodeName.toLowerCase()===e[1])&&(!e[2]||(bv.id||{}).value===e[2])&&(!e[3]||e[3].test((bv["class"]||{}).value)))},bt=function(e){return b.event.special.hover?e:e.replace(J,"mouseenter$1 mouseleave$1")};b.event={add:function(bx,bC,bJ,bA,by){var bD,bB,bK,bI,bH,bF,e,bG,bv,bz,bw,bE;if(bx.nodeType===3||bx.nodeType===8||!bC||!bJ||!(bD=b._data(bx))){return}if(bJ.handler){bv=bJ;bJ=bv.handler;by=bv.selector}if(!bJ.guid){bJ.guid=b.guid++}bK=bD.events;if(!bK){bD.events=bK={}}bB=bD.handle;if(!bB){bD.handle=bB=function(bL){return typeof b!=="undefined"&&(!bL||b.event.triggered!==bL.type)?b.event.dispatch.apply(bB.elem,arguments):L};bB.elem=bx}bC=b.trim(bt(bC)).split(" ");for(bI=0;bI<bC.length;bI++){bH=n.exec(bC[bI])||[];bF=bH[1];e=(bH[2]||"").split(".").sort();bE=b.event.special[bF]||{};bF=(by?bE.delegateType:bE.bindType)||bF;bE=b.event.special[bF]||{};bG=b.extend({type:bF,origType:bH[1],data:bA,handler:bJ,guid:bJ.guid,selector:by,quick:by&&Y(by),namespace:e.join(".")},bv);bw=bK[bF];if(!bw){bw=bK[bF]=[];bw.delegateCount=0;if(!bE.setup||bE.setup.call(bx,bA,e,bB)===false){if(bx.addEventListener){bx.addEventListener(bF,bB,false)}else{if(bx.attachEvent){bx.attachEvent("on"+bF,bB)}}}}if(bE.add){bE.add.call(bx,bG);if(!bG.handler.guid){bG.handler.guid=bJ.guid}}if(by){bw.splice(bw.delegateCount++,0,bG)}else{bw.push(bG)}b.event.global[bF]=true}bx=null},global:{},remove:function(bJ,bE,bv,bH,bB){var bI=b.hasData(bJ)&&b._data(bJ),bF,bx,bz,bL,bC,bA,bG,bw,by,bK,bD,e;if(!bI||!(bw=bI.events)){return}bE=b.trim(bt(bE||"")).split(" ");for(bF=0;bF<bE.length;bF++){bx=n.exec(bE[bF])||[];bz=bL=bx[1];bC=bx[2];if(!bz){for(bz in bw){b.event.remove(bJ,bz+bE[bF],bv,bH,true)}continue}by=b.event.special[bz]||{};bz=(bH?by.delegateType:by.bindType)||bz;bD=bw[bz]||[];bA=bD.length;bC=bC?new RegExp("(^|\\.)"+bC.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(bG=0;bG<bD.length;bG++){e=bD[bG];if((bB||bL===e.origType)&&(!bv||bv.guid===e.guid)&&(!bC||bC.test(e.namespace))&&(!bH||bH===e.selector||bH==="**"&&e.selector)){bD.splice(bG--,1);if(e.selector){bD.delegateCount--}if(by.remove){by.remove.call(bJ,e)}}}if(bD.length===0&&bA!==bD.length){if(!by.teardown||by.teardown.call(bJ,bC)===false){b.removeEvent(bJ,bz,bI.handle)}delete bw[bz]}}if(b.isEmptyObject(bw)){bK=bI.handle;if(bK){bK.elem=null}b.removeData(bJ,["events","handle"],true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bv,bD,bA,bJ){if(bA&&(bA.nodeType===3||bA.nodeType===8)){return}var bG=bv.type||bv,bx=[],e,bw,bC,bH,bz,by,bF,bE,bB,bI;if(T.test(bG+b.event.triggered)){return}if(bG.indexOf("!")>=0){bG=bG.slice(0,-1);bw=true}if(bG.indexOf(".")>=0){bx=bG.split(".");bG=bx.shift();bx.sort()}if((!bA||b.event.customEvent[bG])&&!b.event.global[bG]){return}bv=typeof bv==="object"?bv[b.expando]?bv:new b.Event(bG,bv):new b.Event(bG);bv.type=bG;bv.isTrigger=true;bv.exclusive=bw;bv.namespace=bx.join(".");bv.namespace_re=bv.namespace?new RegExp("(^|\\.)"+bx.join("\\.(?:.*\\.)?")+"(\\.|$)"):null;by=bG.indexOf(":")<0?"on"+bG:"";if(!bA){e=b.cache;for(bC in e){if(e[bC].events&&e[bC].events[bG]){b.event.trigger(bv,bD,e[bC].handle.elem,true)}}return}bv.result=L;if(!bv.target){bv.target=bA}bD=bD!=null?b.makeArray(bD):[];bD.unshift(bv);bF=b.event.special[bG]||{};if(bF.trigger&&bF.trigger.apply(bA,bD)===false){return}bB=[[bA,bF.bindType||bG]];if(!bJ&&!bF.noBubble&&!b.isWindow(bA)){bI=bF.delegateType||bG;bH=T.test(bI+bG)?bA:bA.parentNode;bz=null;for(;bH;bH=bH.parentNode){bB.push([bH,bI]);bz=bH}if(bz&&bz===bA.ownerDocument){bB.push([bz.defaultView||bz.parentWindow||bd,bI])}}for(bC=0;bC<bB.length&&!bv.isPropagationStopped();bC++){bH=bB[bC][0];bv.type=bB[bC][1];bE=(b._data(bH,"events")||{})[bv.type]&&b._data(bH,"handle");if(bE){bE.apply(bH,bD)}bE=by&&bH[by];if(bE&&b.acceptData(bH)&&bE.apply(bH,bD)===false){bv.preventDefault()}}bv.type=bG;if(!bJ&&!bv.isDefaultPrevented()){if((!bF._default||bF._default.apply(bA.ownerDocument,bD)===false)&&!(bG==="click"&&b.nodeName(bA,"a"))&&b.acceptData(bA)){if(by&&bA[bG]&&((bG!=="focus"&&bG!=="blur")||bv.target.offsetWidth!==0)&&!b.isWindow(bA)){bz=bA[by];if(bz){bA[by]=null}b.event.triggered=bG;bA[bG]();b.event.triggered=L;if(bz){bA[by]=bz}}}}return bv.result},dispatch:function(bH){bH=b.event.fix(bH||bd.event);var bD=((b._data(this,"events")||{})[bH.type]||[]),bC=bD.delegateCount,bx=[].slice.call(arguments,0),bE=!bH.exclusive&&!bH.namespace,bz=b.event.special[bH.type]||{},bv=[],bJ,bG,by,bA,bK,bI,bB,bw,e,bF,bL;bx[0]=bH;bH.delegateTarget=this;if(bz.preDispatch&&bz.preDispatch.call(this,bH)===false){return}if(bC&&!(bH.button&&bH.type==="click")){bA=b(this);bA.context=this.ownerDocument||this;for(by=bH.target;by!=this;by=by.parentNode||this){if(by.disabled!==true){bI={};bw=[];bA[0]=by;for(bJ=0;bJ<bC;bJ++){e=bD[bJ];bF=e.selector;if(bI[bF]===L){bI[bF]=(e.quick?j(by,e.quick):bA.is(bF))}if(bI[bF]){bw.push(e)}}if(bw.length){bv.push({elem:by,matches:bw})}}}}if(bD.length>bC){bv.push({elem:this,matches:bD.slice(bC)})}for(bJ=0;bJ<bv.length&&!bH.isPropagationStopped();bJ++){bB=bv[bJ];bH.currentTarget=bB.elem;for(bG=0;bG<bB.matches.length&&!bH.isImmediatePropagationStopped();bG++){e=bB.matches[bG];if(bE||(!bH.namespace&&!e.namespace)||bH.namespace_re&&bH.namespace_re.test(e.namespace)){bH.data=e.data;bH.handleObj=e;bK=((b.event.special[e.origType]||{}).handle||e.handler).apply(bB.elem,bx);if(bK!==L){bH.result=bK;if(bK===false){bH.preventDefault();bH.stopPropagation()}}}}}if(bz.postDispatch){bz.postDispatch.call(this,bH)}return bH.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bv,e){if(bv.which==null){bv.which=e.charCode!=null?e.charCode:e.keyCode}return bv}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(bx,bw){var by,bz,e,bv=bw.button,bA=bw.fromElement;if(bx.pageX==null&&bw.clientX!=null){by=bx.target.ownerDocument||av;bz=by.documentElement;e=by.body;bx.pageX=bw.clientX+(bz&&bz.scrollLeft||e&&e.scrollLeft||0)-(bz&&bz.clientLeft||e&&e.clientLeft||0);bx.pageY=bw.clientY+(bz&&bz.scrollTop||e&&e.scrollTop||0)-(bz&&bz.clientTop||e&&e.clientTop||0)}if(!bx.relatedTarget&&bA){bx.relatedTarget=bA===bx.target?bw.toElement:bA}if(!bx.which&&bv!==L){bx.which=(bv&1?1:(bv&2?3:(bv&4?2:0)))}return bx}},fix:function(bw){if(bw[b.expando]){return bw}var bv,bz,e=bw,bx=b.event.fixHooks[bw.type]||{},by=bx.props?this.props.concat(bx.props):this.props;bw=b.Event(e);for(bv=by.length;bv;){bz=by[--bv];bw[bz]=e[bz]}if(!bw.target){bw.target=e.srcElement||av}if(bw.target.nodeType===3){bw.target=bw.target.parentNode}if(bw.metaKey===L){bw.metaKey=bw.ctrlKey}return bx.filter?bx.filter(bw,e):bw},special:{ready:{setup:b.bindReady},load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(bw,bv,e){if(b.isWindow(this)){this.onbeforeunload=e}},teardown:function(bv,e){if(this.onbeforeunload===e){this.onbeforeunload=null}}}},simulate:function(bw,by,bx,bv){var bz=b.extend(new b.Event(),bx,{type:bw,isSimulated:true,originalEvent:{}});if(bv){b.event.trigger(bz,null,by)}else{b.event.dispatch.call(by,bz)}if(bz.isDefaultPrevented()){bx.preventDefault()}}};b.event.handle=b.event.dispatch;b.removeEvent=av.removeEventListener?function(bv,e,bw){if(bv.removeEventListener){bv.removeEventListener(e,bw,false)}}:function(bv,e,bw){if(bv.detachEvent){bv.detachEvent("on"+e,bw)}};b.Event=function(bv,e){if(!(this instanceof b.Event)){return new b.Event(bv,e)}if(bv&&bv.type){this.originalEvent=bv;this.type=bv.type;this.isDefaultPrevented=(bv.defaultPrevented||bv.returnValue===false||bv.getPreventDefault&&bv.getPreventDefault())?i:bl}else{this.type=bv}if(e){b.extend(this,e)}this.timeStamp=bv&&bv.timeStamp||b.now();this[b.expando]=true};function bl(){return false}function i(){return true}b.Event.prototype={preventDefault:function(){this.isDefaultPrevented=i;var bv=this.originalEvent;if(!bv){return}if(bv.preventDefault){bv.preventDefault()}else{bv.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=i;var bv=this.originalEvent;if(!bv){return}if(bv.stopPropagation){bv.stopPropagation()}bv.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=i;this.stopPropagation()},isDefaultPrevented:bl,isPropagationStopped:bl,isImmediatePropagationStopped:bl};b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bv,e){b.event.special[bv]={delegateType:e,bindType:e,handle:function(bz){var bB=this,bA=bz.relatedTarget,by=bz.handleObj,bw=by.selector,bx;if(!bA||(bA!==bB&&!b.contains(bB,bA))){bz.type=by.origType;bx=by.handler.apply(this,arguments);bz.type=e}return bx}}});if(!b.support.submitBubbles){b.event.special.submit={setup:function(){if(b.nodeName(this,"form")){return false}b.event.add(this,"click._submit keypress._submit",function(bx){var bw=bx.target,bv=b.nodeName(bw,"input")||b.nodeName(bw,"button")?bw.form:L;if(bv&&!bv._submit_attached){b.event.add(bv,"submit._submit",function(e){e._submit_bubble=true});bv._submit_attached=true}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;if(this.parentNode&&!e.isTrigger){b.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(b.nodeName(this,"form")){return false}b.event.remove(this,"._submit")}}}if(!b.support.changeBubbles){b.event.special.change={setup:function(){if(be.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){b.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true}});b.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false;b.event.simulate("change",this,e,true)}})}return false}b.event.add(this,"beforeactivate._change",function(bw){var bv=bw.target;if(be.test(bv.nodeName)&&!bv._change_attached){b.event.add(bv,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){b.event.simulate("change",this.parentNode,e,true)}});bv._change_attached=true}})},handle:function(bv){var e=bv.target;if(this!==e||bv.isSimulated||bv.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return bv.handleObj.handler.apply(this,arguments)}},teardown:function(){b.event.remove(this,"._change");return be.test(this.nodeName)}}}if(!b.support.focusinBubbles){b.each({focus:"focusin",blur:"focusout"},function(bx,e){var bv=0,bw=function(by){b.event.simulate(e,by.target,b.event.fix(by),true)};b.event.special[e]={setup:function(){if(bv++===0){av.addEventListener(bx,bw,true)}},teardown:function(){if(--bv===0){av.removeEventListener(bx,bw,true)}}}})}b.fn.extend({on:function(bw,e,bz,by,bv){var bA,bx;if(typeof bw==="object"){if(typeof e!=="string"){bz=bz||e;e=L}for(bx in bw){this.on(bx,e,bz,bw[bx],bv)}return this}if(bz==null&&by==null){by=e;bz=e=L}else{if(by==null){if(typeof e==="string"){by=bz;bz=L}else{by=bz;bz=e;e=L}}}if(by===false){by=bl}else{if(!by){return this}}if(bv===1){bA=by;by=function(bB){b().off(bB);return bA.apply(this,arguments)};by.guid=bA.guid||(bA.guid=b.guid++)}return this.each(function(){b.event.add(this,bw,by,bz,e)})},one:function(bv,e,bx,bw){return this.on(bv,e,bx,bw,1)},off:function(bw,e,by){if(bw&&bw.preventDefault&&bw.handleObj){var bv=bw.handleObj;b(bw.delegateTarget).off(bv.namespace?bv.origType+"."+bv.namespace:bv.origType,bv.selector,bv.handler);return this}if(typeof bw==="object"){for(var bx in bw){this.off(bx,e,bw[bx])}return this}if(e===false||typeof e==="function"){by=e;e=L}if(by===false){by=bl}return this.each(function(){b.event.remove(this,bw,by,e)})},bind:function(e,bw,bv){return this.on(e,null,bw,bv)},unbind:function(e,bv){return this.off(e,null,bv)},live:function(e,bw,bv){b(this.context).on(e,this.selector,bw,bv);return this},die:function(e,bv){b(this.context).off(e,this.selector||"**",bv);return this},delegate:function(e,bv,bx,bw){return this.on(bv,e,bx,bw)},undelegate:function(e,bv,bw){return arguments.length==1?this.off(e,"**"):this.off(bv,e,bw)},trigger:function(e,bv){return this.each(function(){b.event.trigger(e,bv,this)})},triggerHandler:function(e,bv){if(this[0]){return b.event.trigger(e,bv,this[0],true)}},toggle:function(bx){var bv=arguments,e=bx.guid||b.guid++,bw=0,by=function(bz){var bA=(b._data(this,"lastToggle"+bx.guid)||0)%bw;b._data(this,"lastToggle"+bx.guid,bA+1);bz.preventDefault();return bv[bA].apply(this,arguments)||false};by.guid=e;while(bw<bv.length){bv[bw++].guid=e}return this.click(by)},hover:function(e,bv){return this.mouseenter(e).mouseleave(bv||e)}});b.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bv,e){b.fn[e]=function(bx,bw){if(bw==null){bw=bx;bx=null}return arguments.length>0?this.on(e,null,bx,bw):this.trigger(e)};if(b.attrFn){b.attrFn[e]=true}if(aP.test(e)){b.event.fixHooks[e]=b.event.keyHooks}if(bg.test(e)){b.event.fixHooks[e]=b.event.mouseHooks}});
/*!
   * Sizzle CSS Selector Engine
   *  Copyright 2011, The Dojo Foundation
   *  Released under the MIT, BSD, and GPL Licenses.
   *  More information: http://sizzlejs.com/
   */
(function(){var bH=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,bC="sizcache"+(Math.random()+"").replace(".",""),bI=0,bL=Object.prototype.toString,bB=false,bA=true,bK=/\\/g,bO=/\r\n/g,bQ=/\W/;[0,0].sort(function(){bA=false;return 0});var by=function(bV,e,bY,bZ){bY=bY||[];e=e||av;var b1=e;if(e.nodeType!==1&&e.nodeType!==9){return[]}if(!bV||typeof bV!=="string"){return bY}var bS,b3,b6,bR,b2,b5,b4,bX,bU=true,bT=by.isXML(e),bW=[],b0=bV;do{bH.exec("");bS=bH.exec(b0);if(bS){b0=bS[3];bW.push(bS[1]);if(bS[2]){bR=bS[3];break}}}while(bS);if(bW.length>1&&bD.exec(bV)){if(bW.length===2&&bE.relative[bW[0]]){b3=bM(bW[0]+bW[1],e,bZ)}else{b3=bE.relative[bW[0]]?[e]:by(bW.shift(),e);while(bW.length){bV=bW.shift();if(bE.relative[bV]){bV+=bW.shift()}b3=bM(bV,b3,bZ)}}}else{if(!bZ&&bW.length>1&&e.nodeType===9&&!bT&&bE.match.ID.test(bW[0])&&!bE.match.ID.test(bW[bW.length-1])){b2=by.find(bW.shift(),e,bT);e=b2.expr?by.filter(b2.expr,b2.set)[0]:b2.set[0]}if(e){b2=bZ?{expr:bW.pop(),set:bF(bZ)}:by.find(bW.pop(),bW.length===1&&(bW[0]==="~"||bW[0]==="+")&&e.parentNode?e.parentNode:e,bT);b3=b2.expr?by.filter(b2.expr,b2.set):b2.set;if(bW.length>0){b6=bF(b3)}else{bU=false}while(bW.length){b5=bW.pop();b4=b5;if(!bE.relative[b5]){b5=""}else{b4=bW.pop()}if(b4==null){b4=e}bE.relative[b5](b6,b4,bT)}}else{b6=bW=[]}}if(!b6){b6=b3}if(!b6){by.error(b5||bV)}if(bL.call(b6)==="[object Array]"){if(!bU){bY.push.apply(bY,b6)}else{if(e&&e.nodeType===1){for(bX=0;b6[bX]!=null;bX++){if(b6[bX]&&(b6[bX]===true||b6[bX].nodeType===1&&by.contains(e,b6[bX]))){bY.push(b3[bX])}}}else{for(bX=0;b6[bX]!=null;bX++){if(b6[bX]&&b6[bX].nodeType===1){bY.push(b3[bX])}}}}}else{bF(b6,bY)}if(bR){by(bR,b1,bY,bZ);by.uniqueSort(bY)}return bY};by.uniqueSort=function(bR){if(bJ){bB=bA;bR.sort(bJ);if(bB){for(var e=1;e<bR.length;e++){if(bR[e]===bR[e-1]){bR.splice(e--,1)}}}}return bR};by.matches=function(e,bR){return by(e,null,null,bR)};by.matchesSelector=function(e,bR){return by(bR,null,null,[e]).length>0};by.find=function(bX,e,bY){var bW,bS,bU,bT,bV,bR;if(!bX){return[]}for(bS=0,bU=bE.order.length;bS<bU;bS++){bV=bE.order[bS];if((bT=bE.leftMatch[bV].exec(bX))){bR=bT[1];bT.splice(1,1);if(bR.substr(bR.length-1)!=="\\"){bT[1]=(bT[1]||"").replace(bK,"");bW=bE.find[bV](bT,e,bY);if(bW!=null){bX=bX.replace(bE.match[bV],"");break}}}}if(!bW){bW=typeof e.getElementsByTagName!=="undefined"?e.getElementsByTagName("*"):[]}return{set:bW,expr:bX}};by.filter=function(b1,b0,b4,bU){var bW,e,bZ,b6,b3,bR,bT,bV,b2,bS=b1,b5=[],bY=b0,bX=b0&&b0[0]&&by.isXML(b0[0]);while(b1&&b0.length){for(bZ in bE.filter){if((bW=bE.leftMatch[bZ].exec(b1))!=null&&bW[2]){bR=bE.filter[bZ];bT=bW[1];e=false;bW.splice(1,1);if(bT.substr(bT.length-1)==="\\"){continue}if(bY===b5){b5=[]}if(bE.preFilter[bZ]){bW=bE.preFilter[bZ](bW,bY,b4,b5,bU,bX);if(!bW){e=b6=true}else{if(bW===true){continue}}}if(bW){for(bV=0;(b3=bY[bV])!=null;bV++){if(b3){b6=bR(b3,bW,bV,bY);b2=bU^b6;if(b4&&b6!=null){if(b2){e=true}else{bY[bV]=false}}else{if(b2){b5.push(b3);e=true}}}}}if(b6!==L){if(!b4){bY=b5}b1=b1.replace(bE.match[bZ],"");if(!e){return[]}break}}}if(b1===bS){if(e==null){by.error(b1)}else{break}}bS=b1}return bY};by.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};var bw=by.getText=function(bU){var bS,bT,e=bU.nodeType,bR="";if(e){if(e===1||e===9||e===11){if(typeof bU.textContent==="string"){return bU.textContent}else{if(typeof bU.innerText==="string"){return bU.innerText.replace(bO,"")}else{for(bU=bU.firstChild;bU;bU=bU.nextSibling){bR+=bw(bU)}}}}else{if(e===3||e===4){return bU.nodeValue}}}else{for(bS=0;(bT=bU[bS]);bS++){if(bT.nodeType!==8){bR+=bw(bT)}}}return bR};var bE=by.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(e){return e.getAttribute("href")},type:function(e){return e.getAttribute("type")}},relative:{"+":function(bW,bR){var bT=typeof bR==="string",bV=bT&&!bQ.test(bR),bX=bT&&!bV;if(bV){bR=bR.toLowerCase()}for(var bS=0,e=bW.length,bU;bS<e;bS++){if((bU=bW[bS])){while((bU=bU.previousSibling)&&bU.nodeType!==1){}bW[bS]=bX||bU&&bU.nodeName.toLowerCase()===bR?bU||false:bU===bR}}if(bX){by.filter(bR,bW,true)}},">":function(bW,bR){var bV,bU=typeof bR==="string",bS=0,e=bW.length;if(bU&&!bQ.test(bR)){bR=bR.toLowerCase();for(;bS<e;bS++){bV=bW[bS];if(bV){var bT=bV.parentNode;bW[bS]=bT.nodeName.toLowerCase()===bR?bT:false}}}else{for(;bS<e;bS++){bV=bW[bS];if(bV){bW[bS]=bU?bV.parentNode:bV.parentNode===bR}}if(bU){by.filter(bR,bW,true)}}},"":function(bT,bR,bV){var bU,bS=bI++,e=bN;if(typeof bR==="string"&&!bQ.test(bR)){bR=bR.toLowerCase();bU=bR;e=bv}e("parentNode",bR,bS,bT,bU,bV)},"~":function(bT,bR,bV){var bU,bS=bI++,e=bN;if(typeof bR==="string"&&!bQ.test(bR)){bR=bR.toLowerCase();bU=bR;e=bv}e("previousSibling",bR,bS,bT,bU,bV)}},find:{ID:function(bR,bS,bT){if(typeof bS.getElementById!=="undefined"&&!bT){var e=bS.getElementById(bR[1]);return e&&e.parentNode?[e]:[]}},NAME:function(bS,bV){if(typeof bV.getElementsByName!=="undefined"){var bR=[],bU=bV.getElementsByName(bS[1]);for(var bT=0,e=bU.length;bT<e;bT++){if(bU[bT].getAttribute("name")===bS[1]){bR.push(bU[bT])}}return bR.length===0?null:bR}},TAG:function(e,bR){if(typeof bR.getElementsByTagName!=="undefined"){return bR.getElementsByTagName(e[1])}}},preFilter:{CLASS:function(bT,bR,bS,e,bW,bX){bT=" "+bT[1].replace(bK,"")+" ";if(bX){return bT}for(var bU=0,bV;(bV=bR[bU])!=null;bU++){if(bV){if(bW^(bV.className&&(" "+bV.className+" ").replace(/[\t\n\r]/g," ").indexOf(bT)>=0)){if(!bS){e.push(bV)}}else{if(bS){bR[bU]=false}}}}return false},ID:function(e){return e[1].replace(bK,"")},TAG:function(bR,e){return bR[1].replace(bK,"").toLowerCase()},CHILD:function(e){if(e[1]==="nth"){if(!e[2]){by.error(e[0])}e[2]=e[2].replace(/^\+|\s*/g,"");var bR=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(e[2]==="even"&&"2n"||e[2]==="odd"&&"2n+1"||!/\D/.test(e[2])&&"0n+"+e[2]||e[2]);e[2]=(bR[1]+(bR[2]||1))-0;e[3]=bR[3]-0}else{if(e[2]){by.error(e[0])}}e[0]=bI++;return e},ATTR:function(bU,bR,bS,e,bV,bW){var bT=bU[1]=bU[1].replace(bK,"");if(!bW&&bE.attrMap[bT]){bU[1]=bE.attrMap[bT]}bU[4]=(bU[4]||bU[5]||"").replace(bK,"");if(bU[2]==="~="){bU[4]=" "+bU[4]+" "}return bU},PSEUDO:function(bU,bR,bS,e,bV){if(bU[1]==="not"){if((bH.exec(bU[3])||"").length>1||/^\w/.test(bU[3])){bU[3]=by(bU[3],null,null,bR)}else{var bT=by.filter(bU[3],bR,bS,true^bV);if(!bS){e.push.apply(e,bT)}return false}}else{if(bE.match.POS.test(bU[0])||bE.match.CHILD.test(bU[0])){return true}}return bU},POS:function(e){e.unshift(true);return e}},filters:{enabled:function(e){return e.disabled===false&&e.type!=="hidden"},disabled:function(e){return e.disabled===true},checked:function(e){return e.checked===true},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},parent:function(e){return !!e.firstChild},empty:function(e){return !e.firstChild},has:function(bS,bR,e){return !!by(e[3],bS).length},header:function(e){return(/h\d/i).test(e.nodeName)},text:function(bS){var e=bS.getAttribute("type"),bR=bS.type;return bS.nodeName.toLowerCase()==="input"&&"text"===bR&&(e===bR||e===null)},radio:function(e){return e.nodeName.toLowerCase()==="input"&&"radio"===e.type},checkbox:function(e){return e.nodeName.toLowerCase()==="input"&&"checkbox"===e.type},file:function(e){return e.nodeName.toLowerCase()==="input"&&"file"===e.type},password:function(e){return e.nodeName.toLowerCase()==="input"&&"password"===e.type},submit:function(bR){var e=bR.nodeName.toLowerCase();return(e==="input"||e==="button")&&"submit"===bR.type},image:function(e){return e.nodeName.toLowerCase()==="input"&&"image"===e.type},reset:function(bR){var e=bR.nodeName.toLowerCase();return(e==="input"||e==="button")&&"reset"===bR.type},button:function(bR){var e=bR.nodeName.toLowerCase();return e==="input"&&"button"===bR.type||e==="button"},input:function(e){return(/input|select|textarea|button/i).test(e.nodeName)},focus:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(bR,e){return e===0},last:function(bS,bR,e,bT){return bR===bT.length-1},even:function(bR,e){return e%2===0},odd:function(bR,e){return e%2===1},lt:function(bS,bR,e){return bR<e[3]-0},gt:function(bS,bR,e){return bR>e[3]-0},nth:function(bS,bR,e){return e[3]-0===bR},eq:function(bS,bR,e){return e[3]-0===bR}},filter:{PSEUDO:function(bS,bX,bW,bY){var e=bX[1],bR=bE.filters[e];if(bR){return bR(bS,bW,bX,bY)}else{if(e==="contains"){return(bS.textContent||bS.innerText||bw([bS])||"").indexOf(bX[3])>=0}else{if(e==="not"){var bT=bX[3];for(var bV=0,bU=bT.length;bV<bU;bV++){if(bT[bV]===bS){return false}}return true}else{by.error(e)}}}},CHILD:function(bS,bU){var bT,b0,bW,bZ,e,bV,bY,bX=bU[1],bR=bS;switch(bX){case"only":case"first":while((bR=bR.previousSibling)){if(bR.nodeType===1){return false}}if(bX==="first"){return true}bR=bS;case"last":while((bR=bR.nextSibling)){if(bR.nodeType===1){return false}}return true;case"nth":bT=bU[2];b0=bU[3];if(bT===1&&b0===0){return true}bW=bU[0];bZ=bS.parentNode;if(bZ&&(bZ[bC]!==bW||!bS.nodeIndex)){bV=0;for(bR=bZ.firstChild;bR;bR=bR.nextSibling){if(bR.nodeType===1){bR.nodeIndex=++bV}}bZ[bC]=bW}bY=bS.nodeIndex-b0;if(bT===0){return bY===0}else{return(bY%bT===0&&bY/bT>=0)}}},ID:function(bR,e){return bR.nodeType===1&&bR.getAttribute("id")===e},TAG:function(bR,e){return(e==="*"&&bR.nodeType===1)||!!bR.nodeName&&bR.nodeName.toLowerCase()===e},CLASS:function(bR,e){return(" "+(bR.className||bR.getAttribute("class"))+" ").indexOf(e)>-1},ATTR:function(bV,bT){var bS=bT[1],e=by.attr?by.attr(bV,bS):bE.attrHandle[bS]?bE.attrHandle[bS](bV):bV[bS]!=null?bV[bS]:bV.getAttribute(bS),bW=e+"",bU=bT[2],bR=bT[4];return e==null?bU==="!=":!bU&&by.attr?e!=null:bU==="="?bW===bR:bU==="*="?bW.indexOf(bR)>=0:bU==="~="?(" "+bW+" ").indexOf(bR)>=0:!bR?bW&&e!==false:bU==="!="?bW!==bR:bU==="^="?bW.indexOf(bR)===0:bU==="$="?bW.substr(bW.length-bR.length)===bR:bU==="|="?bW===bR||bW.substr(0,bR.length+1)===bR+"-":false},POS:function(bU,bR,bS,bV){var e=bR[2],bT=bE.setFilters[e];if(bT){return bT(bU,bS,bR,bV)}}}};var bD=bE.match.POS,bx=function(bR,e){return"\\"+(e-0+1)};for(var bz in bE.match){bE.match[bz]=new RegExp(bE.match[bz].source+(/(?![^\[]*\])(?![^\(]*\))/.source));bE.leftMatch[bz]=new RegExp(/(^(?:.|\r|\n)*?)/.source+bE.match[bz].source.replace(/\\(\d+)/g,bx))}bE.match.globalPOS=bD;var bF=function(bR,e){bR=Array.prototype.slice.call(bR,0);if(e){e.push.apply(e,bR);return e}return bR};try{Array.prototype.slice.call(av.documentElement.childNodes,0)[0].nodeType}catch(bP){bF=function(bU,bT){var bS=0,bR=bT||[];if(bL.call(bU)==="[object Array]"){Array.prototype.push.apply(bR,bU)}else{if(typeof bU.length==="number"){for(var e=bU.length;bS<e;bS++){bR.push(bU[bS])}}else{for(;bU[bS];bS++){bR.push(bU[bS])}}}return bR}}var bJ,bG;if(av.documentElement.compareDocumentPosition){bJ=function(bR,e){if(bR===e){bB=true;return 0}if(!bR.compareDocumentPosition||!e.compareDocumentPosition){return bR.compareDocumentPosition?-1:1}return bR.compareDocumentPosition(e)&4?-1:1}}else{bJ=function(bY,bX){if(bY===bX){bB=true;return 0}else{if(bY.sourceIndex&&bX.sourceIndex){return bY.sourceIndex-bX.sourceIndex}}var bV,bR,bS=[],e=[],bU=bY.parentNode,bW=bX.parentNode,bZ=bU;if(bU===bW){return bG(bY,bX)}else{if(!bU){return -1}else{if(!bW){return 1}}}while(bZ){bS.unshift(bZ);bZ=bZ.parentNode}bZ=bW;while(bZ){e.unshift(bZ);bZ=bZ.parentNode}bV=bS.length;bR=e.length;for(var bT=0;bT<bV&&bT<bR;bT++){if(bS[bT]!==e[bT]){return bG(bS[bT],e[bT])}}return bT===bV?bG(bY,e[bT],-1):bG(bS[bT],bX,1)};bG=function(bR,e,bS){if(bR===e){return bS}var bT=bR.nextSibling;while(bT){if(bT===e){return -1}bT=bT.nextSibling}return 1}}(function(){var bR=av.createElement("div"),bS="script"+(new Date()).getTime(),e=av.documentElement;bR.innerHTML="<a name='"+bS+"'/>";e.insertBefore(bR,e.firstChild);if(av.getElementById(bS)){bE.find.ID=function(bU,bV,bW){if(typeof bV.getElementById!=="undefined"&&!bW){var bT=bV.getElementById(bU[1]);return bT?bT.id===bU[1]||typeof bT.getAttributeNode!=="undefined"&&bT.getAttributeNode("id").nodeValue===bU[1]?[bT]:L:[]}};bE.filter.ID=function(bV,bT){var bU=typeof bV.getAttributeNode!=="undefined"&&bV.getAttributeNode("id");return bV.nodeType===1&&bU&&bU.nodeValue===bT}}e.removeChild(bR);e=bR=null})();(function(){var e=av.createElement("div");e.appendChild(av.createComment(""));if(e.getElementsByTagName("*").length>0){bE.find.TAG=function(bR,bV){var bU=bV.getElementsByTagName(bR[1]);if(bR[1]==="*"){var bT=[];for(var bS=0;bU[bS];bS++){if(bU[bS].nodeType===1){bT.push(bU[bS])}}bU=bT}return bU}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){bE.attrHandle.href=function(bR){return bR.getAttribute("href",2)}}e=null})();if(av.querySelectorAll){(function(){var e=by,bT=av.createElement("div"),bS="__sizzle__";bT.innerHTML="<p class='TEST'></p>";if(bT.querySelectorAll&&bT.querySelectorAll(".TEST").length===0){return}by=function(b4,bV,bZ,b3){bV=bV||av;if(!b3&&!by.isXML(bV)){var b2=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b4);if(b2&&(bV.nodeType===1||bV.nodeType===9)){if(b2[1]){return bF(bV.getElementsByTagName(b4),bZ)}else{if(b2[2]&&bE.find.CLASS&&bV.getElementsByClassName){return bF(bV.getElementsByClassName(b2[2]),bZ)}}}if(bV.nodeType===9){if(b4==="body"&&bV.body){return bF([bV.body],bZ)}else{if(b2&&b2[3]){var bY=bV.getElementById(b2[3]);if(bY&&bY.parentNode){if(bY.id===b2[3]){return bF([bY],bZ)}}else{return bF([],bZ)}}}try{return bF(bV.querySelectorAll(b4),bZ)}catch(b0){}}else{if(bV.nodeType===1&&bV.nodeName.toLowerCase()!=="object"){var bW=bV,bX=bV.getAttribute("id"),bU=bX||bS,b6=bV.parentNode,b5=/^\s*[+~]/.test(b4);if(!bX){bV.setAttribute("id",bU)}else{bU=bU.replace(/'/g,"\\$&")}if(b5&&b6){bV=bV.parentNode}try{if(!b5||b6){return bF(bV.querySelectorAll("[id='"+bU+"'] "+b4),bZ)}}catch(b1){}finally{if(!bX){bW.removeAttribute("id")}}}}}return e(b4,bV,bZ,b3)};for(var bR in e){by[bR]=e[bR]}bT=null})()}(function(){var e=av.documentElement,bS=e.matchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.msMatchesSelector;if(bS){var bU=!bS.call(av.createElement("div"),"div"),bR=false;try{bS.call(av.documentElement,"[test!='']:sizzle")}catch(bT){bR=true}by.matchesSelector=function(bW,bY){bY=bY.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!by.isXML(bW)){try{if(bR||!bE.match.PSEUDO.test(bY)&&!/!=/.test(bY)){var bV=bS.call(bW,bY);if(bV||!bU||bW.document&&bW.document.nodeType!==11){return bV}}}catch(bX){}}return by(bY,null,null,[bW]).length>0}}})();(function(){var e=av.createElement("div");e.innerHTML="<div class='test e'></div><div class='test'></div>";if(!e.getElementsByClassName||e.getElementsByClassName("e").length===0){return}e.lastChild.className="e";if(e.getElementsByClassName("e").length===1){return}bE.order.splice(1,0,"CLASS");bE.find.CLASS=function(bR,bS,bT){if(typeof bS.getElementsByClassName!=="undefined"&&!bT){return bS.getElementsByClassName(bR[1])}};e=null})();function bv(bR,bW,bV,bZ,bX,bY){for(var bT=0,bS=bZ.length;bT<bS;bT++){var e=bZ[bT];if(e){var bU=false;e=e[bR];while(e){if(e[bC]===bV){bU=bZ[e.sizset];break}if(e.nodeType===1&&!bY){e[bC]=bV;e.sizset=bT}if(e.nodeName.toLowerCase()===bW){bU=e;break}e=e[bR]}bZ[bT]=bU}}}function bN(bR,bW,bV,bZ,bX,bY){for(var bT=0,bS=bZ.length;bT<bS;bT++){var e=bZ[bT];if(e){var bU=false;e=e[bR];while(e){if(e[bC]===bV){bU=bZ[e.sizset];break}if(e.nodeType===1){if(!bY){e[bC]=bV;e.sizset=bT}if(typeof bW!=="string"){if(e===bW){bU=true;break}}else{if(by.filter(bW,[e]).length>0){bU=e;break}}}e=e[bR]}bZ[bT]=bU}}}if(av.documentElement.contains){by.contains=function(bR,e){return bR!==e&&(bR.contains?bR.contains(e):true)}}else{if(av.documentElement.compareDocumentPosition){by.contains=function(bR,e){return !!(bR.compareDocumentPosition(e)&16)}}else{by.contains=function(){return false}}}by.isXML=function(e){var bR=(e?e.ownerDocument||e:0).documentElement;return bR?bR.nodeName!=="HTML":false};var bM=function(bS,e,bW){var bV,bX=[],bU="",bY=e.nodeType?[e]:e;while((bV=bE.match.PSEUDO.exec(bS))){bU+=bV[0];bS=bS.replace(bE.match.PSEUDO,"")}bS=bE.relative[bS]?bS+"*":bS;for(var bT=0,bR=bY.length;bT<bR;bT++){by(bS,bY[bT],bX,bW)}return by.filter(bU,bX)};by.attr=b.attr;by.selectors.attrMap={};b.find=by;b.expr=by.selectors;b.expr[":"]=b.expr.filters;b.unique=by.uniqueSort;b.text=by.getText;b.isXMLDoc=by.isXML;b.contains=by.contains})();var ab=/Until$/,aq=/^(?:parents|prevUntil|prevAll)/,bb=/,/,bp=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,H=b.expr.match.globalPOS,ay={children:true,contents:true,next:true,prev:true};b.fn.extend({find:function(e){var bw=this,by,bv;if(typeof e!=="string"){return b(e).filter(function(){for(by=0,bv=bw.length;by<bv;by++){if(b.contains(bw[by],this)){return true}}})}var bx=this.pushStack("","find",e),bA,bB,bz;for(by=0,bv=this.length;by<bv;by++){bA=bx.length;b.find(e,this[by],bx);if(by>0){for(bB=bA;bB<bx.length;bB++){for(bz=0;bz<bA;bz++){if(bx[bz]===bx[bB]){bx.splice(bB--,1);break}}}}}return bx},has:function(bv){var e=b(bv);return this.filter(function(){for(var bx=0,bw=e.length;bx<bw;bx++){if(b.contains(this,e[bx])){return true}}})},not:function(e){return this.pushStack(aH(this,e,false),"not",e)},filter:function(e){return this.pushStack(aH(this,e,true),"filter",e)},is:function(e){return !!e&&(typeof e==="string"?H.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(by,bx){var bv=[],bw,e,bz=this[0];if(b.isArray(by)){var bB=1;while(bz&&bz.ownerDocument&&bz!==bx){for(bw=0;bw<by.length;bw++){if(b(bz).is(by[bw])){bv.push({selector:by[bw],elem:bz,level:bB})}}bz=bz.parentNode;bB++}return bv}var bA=H.test(by)||typeof by!=="string"?b(by,bx||this.context):0;for(bw=0,e=this.length;bw<e;bw++){bz=this[bw];while(bz){if(bA?bA.index(bz)>-1:b.find.matchesSelector(bz,by)){bv.push(bz);break}else{bz=bz.parentNode;if(!bz||!bz.ownerDocument||bz===bx||bz.nodeType===11){break}}}}bv=bv.length>1?b.unique(bv):bv;return this.pushStack(bv,"closest",by)},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1}if(typeof e==="string"){return b.inArray(this[0],b(e))}return b.inArray(e.jquery?e[0]:e,this)},add:function(e,bv){var bx=typeof e==="string"?b(e,bv):b.makeArray(e&&e.nodeType?[e]:e),bw=b.merge(this.get(),bx);return this.pushStack(B(bx[0])||B(bw[0])?bw:b.unique(bw))},andSelf:function(){return this.add(this.prevObject)}});function B(e){return !e||!e.parentNode||e.parentNode.nodeType===11}b.each({parent:function(bv){var e=bv.parentNode;return e&&e.nodeType!==11?e:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(bv,e,bw){return b.dir(bv,"parentNode",bw)},next:function(e){return b.nth(e,2,"nextSibling")},prev:function(e){return b.nth(e,2,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(bv,e,bw){return b.dir(bv,"nextSibling",bw)},prevUntil:function(bv,e,bw){return b.dir(bv,"previousSibling",bw)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.makeArray(e.childNodes)}},function(e,bv){b.fn[e]=function(by,bw){var bx=b.map(this,bv,by);if(!ab.test(e)){bw=by}if(bw&&typeof bw==="string"){bx=b.filter(bw,bx)}bx=this.length>1&&!ay[e]?b.unique(bx):bx;if((this.length>1||bb.test(bw))&&aq.test(e)){bx=bx.reverse()}return this.pushStack(bx,e,P.call(arguments).join(","))}});b.extend({filter:function(bw,e,bv){if(bv){bw=":not("+bw+")"}return e.length===1?b.find.matchesSelector(e[0],bw)?[e[0]]:[]:b.find.matches(bw,e)},dir:function(bw,bv,by){var e=[],bx=bw[bv];while(bx&&bx.nodeType!==9&&(by===L||bx.nodeType!==1||!b(bx).is(by))){if(bx.nodeType===1){e.push(bx)}bx=bx[bv]}return e},nth:function(by,e,bw,bx){e=e||1;var bv=0;for(;by;by=by[bw]){if(by.nodeType===1&&++bv===e){break}}return by},sibling:function(bw,bv){var e=[];for(;bw;bw=bw.nextSibling){if(bw.nodeType===1&&bw!==bv){e.push(bw)}}return e}});function aH(bx,bw,e){bw=bw||0;if(b.isFunction(bw)){return b.grep(bx,function(bz,by){var bA=!!bw.call(bz,by,bz);return bA===e})}else{if(bw.nodeType){return b.grep(bx,function(bz,by){return(bz===bw)===e})}else{if(typeof bw==="string"){var bv=b.grep(bx,function(by){return by.nodeType===1});if(bp.test(bw)){return b.filter(bw,bv,!e)}else{bw=b.filter(bw,bv)}}}}return b.grep(bx,function(bz,by){return(b.inArray(bz,bw)>=0)===e})}function a(e){var bw=aS.split("|"),bv=e.createDocumentFragment();if(bv.createElement){while(bw.length){bv.createElement(bw.pop())}}return bv}var aS="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ah=/ jQuery\d+="(?:\d+|null)"/g,ar=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,d=/<([\w:]+)/,v=/<tbody/i,W=/<|&#?\w+;/,ae=/<(?:script|style)/i,O=/<(?:script|object|embed|option|style)/i,ai=new RegExp("<(?:"+aS+")[\\s/>]","i"),o=/checked\s*(?:[^=]|=\s*.checked.)/i,bn=/\/(java|ecma)script/i,aO=/^\s*<!(?:\[CDATA\[|\-\-)/,ax={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},ac=a(av);ax.optgroup=ax.option;ax.tbody=ax.tfoot=ax.colgroup=ax.caption=ax.thead;ax.th=ax.td;if(!b.support.htmlSerialize){ax._default=[1,"div<div>","</div>"]}b.fn.extend({text:function(e){return b.access(this,function(bv){return bv===L?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||av).createTextNode(bv))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e)){return this.each(function(bw){b(this).wrapAll(e.call(this,bw))})}if(this[0]){var bv=b(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){bv.insertBefore(this[0])}bv.map(function(){var bw=this;while(bw.firstChild&&bw.firstChild.nodeType===1){bw=bw.firstChild}return bw}).append(this)}return this},wrapInner:function(e){if(b.isFunction(e)){return this.each(function(bv){b(this).wrapInner(e.call(this,bv))})}return this.each(function(){var bv=b(this),bw=bv.contents();if(bw.length){bw.wrapAll(e)}else{bv.append(e)}})},wrap:function(e){var bv=b.isFunction(e);return this.each(function(bw){b(this).wrapAll(bv?e.call(this,bw):e)})},unwrap:function(){return this.parent().each(function(){if(!b.nodeName(this,"body")){b(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.appendChild(e)}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1){this.insertBefore(e,this.firstChild)}})},before:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bv){this.parentNode.insertBefore(bv,this)})}else{if(arguments.length){var e=b.clean(arguments);e.push.apply(e,this.toArray());return this.pushStack(e,"before",arguments)}}},after:function(){if(this[0]&&this[0].parentNode){return this.domManip(arguments,false,function(bv){this.parentNode.insertBefore(bv,this.nextSibling)})}else{if(arguments.length){var e=this.pushStack(this,"after",arguments);e.push.apply(e,b.clean(arguments));return e}}},remove:function(e,bx){for(var bv=0,bw;(bw=this[bv])!=null;bv++){if(!e||b.filter(e,[bw]).length){if(!bx&&bw.nodeType===1){b.cleanData(bw.getElementsByTagName("*"));b.cleanData([bw])}if(bw.parentNode){bw.parentNode.removeChild(bw)}}}return this},empty:function(){for(var e=0,bv;(bv=this[e])!=null;e++){if(bv.nodeType===1){b.cleanData(bv.getElementsByTagName("*"))}while(bv.firstChild){bv.removeChild(bv.firstChild)}}return this},clone:function(bv,e){bv=bv==null?false:bv;e=e==null?bv:e;return this.map(function(){return b.clone(this,bv,e)})},html:function(e){return b.access(this,function(by){var bx=this[0]||{},bw=0,bv=this.length;if(by===L){return bx.nodeType===1?bx.innerHTML.replace(ah,""):null}if(typeof by==="string"&&!ae.test(by)&&(b.support.leadingWhitespace||!ar.test(by))&&!ax[(d.exec(by)||["",""])[1].toLowerCase()]){by=by.replace(R,"<$1></$2>");try{for(;bw<bv;bw++){bx=this[bw]||{};if(bx.nodeType===1){b.cleanData(bx.getElementsByTagName("*"));bx.innerHTML=by}}bx=0}catch(bz){}}if(bx){this.empty().append(by)}},null,e,arguments.length)},replaceWith:function(e){if(this[0]&&this[0].parentNode){if(b.isFunction(e)){return this.each(function(bx){var bw=b(this),bv=bw.html();bw.replaceWith(e.call(this,bx,bv))})}if(typeof e!=="string"){e=b(e).detach()}return this.each(function(){var bw=this.nextSibling,bv=this.parentNode;b(this).remove();if(bw){b(bw).before(e)}else{b(bv).append(e)}})}else{return this.length?this.pushStack(b(b.isFunction(e)?e():e),"replaceWith",e):this}},detach:function(e){return this.remove(e,true)},domManip:function(bB,bF,bE){var bx,by,bA,bD,bC=bB[0],bv=[];if(!b.support.checkClone&&arguments.length===3&&typeof bC==="string"&&o.test(bC)){return this.each(function(){b(this).domManip(bB,bF,bE,true)})}if(b.isFunction(bC)){return this.each(function(bH){var bG=b(this);bB[0]=bC.call(this,bH,bF?bG.html():L);bG.domManip(bB,bF,bE)})}if(this[0]){bD=bC&&bC.parentNode;if(b.support.parentNode&&bD&&bD.nodeType===11&&bD.childNodes.length===this.length){bx={fragment:bD}}else{bx=b.buildFragment(bB,this,bv)}bA=bx.fragment;if(bA.childNodes.length===1){by=bA=bA.firstChild}else{by=bA.firstChild}if(by){bF=bF&&b.nodeName(by,"tr");for(var bw=0,e=this.length,bz=e-1;bw<e;bw++){bE.call(bF?bc(this[bw],by):this[bw],bx.cacheable||(e>1&&bw<bz)?b.clone(bA,true,true):bA)}}if(bv.length){b.each(bv,function(bG,bH){if(bH.src){b.ajax({type:"GET",global:false,url:bH.src,async:false,dataType:"script"})}else{b.globalEval((bH.text||bH.textContent||bH.innerHTML||"").replace(aO,"/*$0*/"))}if(bH.parentNode){bH.parentNode.removeChild(bH)}})}}return this}});function bc(e,bv){return b.nodeName(e,"table")?(e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody"))):e}function s(bB,bv){if(bv.nodeType!==1||!b.hasData(bB)){return}var by,bx,e,bA=b._data(bB),bz=b._data(bv,bA),bw=bA.events;if(bw){delete bz.handle;bz.events={};for(by in bw){for(bx=0,e=bw[by].length;bx<e;bx++){b.event.add(bv,by,bw[by][bx])}}}if(bz.data){bz.data=b.extend({},bz.data)}}function aj(bv,e){var bw;if(e.nodeType!==1){return}if(e.clearAttributes){e.clearAttributes()}if(e.mergeAttributes){e.mergeAttributes(bv)}bw=e.nodeName.toLowerCase();if(bw==="object"){e.outerHTML=bv.outerHTML}else{if(bw==="input"&&(bv.type==="checkbox"||bv.type==="radio")){if(bv.checked){e.defaultChecked=e.checked=bv.checked}if(e.value!==bv.value){e.value=bv.value}}else{if(bw==="option"){e.selected=bv.defaultSelected}else{if(bw==="input"||bw==="textarea"){e.defaultValue=bv.defaultValue}else{if(bw==="script"&&e.text!==bv.text){e.text=bv.text}}}}}e.removeAttribute(b.expando);e.removeAttribute("_submit_attached");e.removeAttribute("_change_attached")}b.buildFragment=function(bz,bx,bv){var by,e,bw,bA,bB=bz[0];if(bx&&bx[0]){bA=bx[0].ownerDocument||bx[0]}if(!bA.createDocumentFragment){bA=av}if(bz.length===1&&typeof bB==="string"&&bB.length<512&&bA===av&&bB.charAt(0)==="<"&&!O.test(bB)&&(b.support.checkClone||!o.test(bB))&&(b.support.html5Clone||!ai.test(bB))){e=true;bw=b.fragments[bB];if(bw&&bw!==1){by=bw}}if(!by){by=bA.createDocumentFragment();b.clean(bz,bA,by,bv)}if(e){b.fragments[bB]=bw?by:1}return{fragment:by,cacheable:e}};b.fragments={};b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,bv){b.fn[e]=function(bw){var bz=[],bC=b(bw),bB=this.length===1&&this[0].parentNode;if(bB&&bB.nodeType===11&&bB.childNodes.length===1&&bC.length===1){bC[bv](this[0]);return this}else{for(var bA=0,bx=bC.length;bA<bx;bA++){var by=(bA>0?this.clone(true):this).get();b(bC[bA])[bv](by);bz=bz.concat(by)}return this.pushStack(bz,e,bC.selector)}}});function bh(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")}else{if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")}else{return[]}}}function az(e){if(e.type==="checkbox"||e.type==="radio"){e.defaultChecked=e.checked}}function D(e){var bv=(e.nodeName||"").toLowerCase();if(bv==="input"){az(e)}else{if(bv!=="script"&&typeof e.getElementsByTagName!=="undefined"){b.grep(e.getElementsByTagName("input"),az)}}}function am(e){var bv=av.createElement("div");ac.appendChild(bv);bv.innerHTML=e.outerHTML;return bv.firstChild}b.extend({clone:function(by,bA,bw){var e,bv,bx,bz=b.support.html5Clone||b.isXMLDoc(by)||!ai.test("<"+by.nodeName+">")?by.cloneNode(true):am(by);if((!b.support.noCloneEvent||!b.support.noCloneChecked)&&(by.nodeType===1||by.nodeType===11)&&!b.isXMLDoc(by)){aj(by,bz);e=bh(by);bv=bh(bz);for(bx=0;e[bx];++bx){if(bv[bx]){aj(e[bx],bv[bx])}}}if(bA){s(by,bz);if(bw){e=bh(by);bv=bh(bz);for(bx=0;e[bx];++bx){s(e[bx],bv[bx])}}}e=bv=null;return bz},clean:function(bI,bw,bv,bx){var bA,bH,bD,bJ=[];bw=bw||av;if(typeof bw.createElement==="undefined"){bw=bw.ownerDocument||bw[0]&&bw[0].ownerDocument||av}for(var bE=0,bG;(bG=bI[bE])!=null;bE++){if(typeof bG==="number"){bG+=""}if(!bG){continue}if(typeof bG==="string"){if(!W.test(bG)){bG=bw.createTextNode(bG)}else{bG=bG.replace(R,"<$1></$2>");var bN=(d.exec(bG)||["",""])[1].toLowerCase(),bz=ax[bN]||ax._default,bK=bz[0],bB=bw.createElement("div"),bL=ac.childNodes,bM;if(bw===av){ac.appendChild(bB)}else{a(bw).appendChild(bB)}bB.innerHTML=bz[1]+bG+bz[2];while(bK--){bB=bB.lastChild}if(!b.support.tbody){var by=v.test(bG),e=bN==="table"&&!by?bB.firstChild&&bB.firstChild.childNodes:bz[1]==="<table>"&&!by?bB.childNodes:[];for(bD=e.length-1;bD>=0;--bD){if(b.nodeName(e[bD],"tbody")&&!e[bD].childNodes.length){e[bD].parentNode.removeChild(e[bD])}}}if(!b.support.leadingWhitespace&&ar.test(bG)){bB.insertBefore(bw.createTextNode(ar.exec(bG)[0]),bB.firstChild)}bG=bB.childNodes;if(bB){bB.parentNode.removeChild(bB);if(bL.length>0){bM=bL[bL.length-1];if(bM&&bM.parentNode){bM.parentNode.removeChild(bM)}}}}}var bF;if(!b.support.appendChecked){if(bG[0]&&typeof(bF=bG.length)==="number"){for(bD=0;bD<bF;bD++){D(bG[bD])}}else{D(bG)}}if(bG.nodeType){bJ.push(bG)}else{bJ=b.merge(bJ,bG)}}if(bv){bA=function(bO){return !bO.type||bn.test(bO.type)};for(bE=0;bJ[bE];bE++){bH=bJ[bE];if(bx&&b.nodeName(bH,"script")&&(!bH.type||bn.test(bH.type))){bx.push(bH.parentNode?bH.parentNode.removeChild(bH):bH)}else{if(bH.nodeType===1){var bC=b.grep(bH.getElementsByTagName("script"),bA);bJ.splice.apply(bJ,[bE+1,0].concat(bC))}bv.appendChild(bH)}}}return bJ},cleanData:function(bv){var by,bw,e=b.cache,bB=b.event.special,bA=b.support.deleteExpando;for(var bz=0,bx;(bx=bv[bz])!=null;bz++){if(bx.nodeName&&b.noData[bx.nodeName.toLowerCase()]){continue}bw=bx[b.expando];if(bw){by=e[bw];if(by&&by.events){for(var bC in by.events){if(bB[bC]){b.event.remove(bx,bC)}else{b.removeEvent(bx,bC,by.handle)}}if(by.handle){by.handle.elem=null}}if(bA){delete bx[b.expando]}else{if(bx.removeAttribute){bx.removeAttribute(b.expando)}}delete e[bw]}}}});var al=/alpha\([^)]*\)/i,au=/opacity=([^)]*)/,y=/([A-Z]|^ms)/g,bo=/^[\-+]?(?:\d*\.)?\d+$/i,a1=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,I=/^([\-+])=([\-+.\de]+)/,aE=/^margin/,a9={position:"absolute",visibility:"hidden",display:"block"},G=["Top","Right","Bottom","Left"],Z,aJ,aY;b.fn.css=function(e,bv){return b.access(this,function(bx,bw,by){return by!==L?b.style(bx,bw,by):b.css(bx,bw)},e,bv,arguments.length>1)};b.extend({cssHooks:{opacity:{get:function(bw,bv){if(bv){var e=Z(bw,"opacity");return e===""?"1":e}else{return bw.style.opacity}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(bx,bw,bD,by){if(!bx||bx.nodeType===3||bx.nodeType===8||!bx.style){return}var bB,bC,bz=b.camelCase(bw),bv=bx.style,bE=b.cssHooks[bz];bw=b.cssProps[bz]||bz;if(bD!==L){bC=typeof bD;if(bC==="string"&&(bB=I.exec(bD))){bD=(+(bB[1]+1)*+bB[2])+parseFloat(b.css(bx,bw));bC="number"}if(bD==null||bC==="number"&&isNaN(bD)){return}if(bC==="number"&&!b.cssNumber[bz]){bD+="px"}if(!bE||!("set" in bE)||(bD=bE.set(bx,bD))!==L){try{bv[bw]=bD}catch(bA){}}}else{if(bE&&"get" in bE&&(bB=bE.get(bx,false,by))!==L){return bB}return bv[bw]}},css:function(by,bx,bv){var bw,e;bx=b.camelCase(bx);e=b.cssHooks[bx];bx=b.cssProps[bx]||bx;if(bx==="cssFloat"){bx="float"}if(e&&"get" in e&&(bw=e.get(by,true,bv))!==L){return bw}else{if(Z){return Z(by,bx)}}},swap:function(by,bx,bz){var e={},bw,bv;for(bv in bx){e[bv]=by.style[bv];by.style[bv]=bx[bv]}bw=bz.call(by);for(bv in bx){by.style[bv]=e[bv]}return bw}});b.curCSS=b.css;if(av.defaultView&&av.defaultView.getComputedStyle){aJ=function(bA,bw){var bv,bz,e,by,bx=bA.style;bw=bw.replace(y,"-$1").toLowerCase();if((bz=bA.ownerDocument.defaultView)&&(e=bz.getComputedStyle(bA,null))){bv=e.getPropertyValue(bw);if(bv===""&&!b.contains(bA.ownerDocument.documentElement,bA)){bv=b.style(bA,bw)}}if(!b.support.pixelMargin&&e&&aE.test(bw)&&a1.test(bv)){by=bx.width;bx.width=bv;bv=e.width;bx.width=by}return bv}}if(av.documentElement.currentStyle){aY=function(bz,bw){var bA,e,by,bv=bz.currentStyle&&bz.currentStyle[bw],bx=bz.style;if(bv==null&&bx&&(by=bx[bw])){bv=by}if(a1.test(bv)){bA=bx.left;e=bz.runtimeStyle&&bz.runtimeStyle.left;if(e){bz.runtimeStyle.left=bz.currentStyle.left}bx.left=bw==="fontSize"?"1em":bv;bv=bx.pixelLeft+"px";bx.left=bA;if(e){bz.runtimeStyle.left=e}}return bv===""?"auto":bv}}Z=aJ||aY;function af(by,bw,bv){var bz=bw==="width"?by.offsetWidth:by.offsetHeight,bx=bw==="width"?1:0,e=4;if(bz>0){if(bv!=="border"){for(;bx<e;bx+=2){if(!bv){bz-=parseFloat(b.css(by,"padding"+G[bx]))||0}if(bv==="margin"){bz+=parseFloat(b.css(by,bv+G[bx]))||0}else{bz-=parseFloat(b.css(by,"border"+G[bx]+"Width"))||0}}}return bz+"px"}bz=Z(by,bw);if(bz<0||bz==null){bz=by.style[bw]}if(a1.test(bz)){return bz}bz=parseFloat(bz)||0;if(bv){for(;bx<e;bx+=2){bz+=parseFloat(b.css(by,"padding"+G[bx]))||0;if(bv!=="padding"){bz+=parseFloat(b.css(by,"border"+G[bx]+"Width"))||0}if(bv==="margin"){bz+=parseFloat(b.css(by,bv+G[bx]))||0}}}return bz+"px"}b.each(["height","width"],function(bv,e){b.cssHooks[e]={get:function(by,bx,bw){if(bx){if(by.offsetWidth!==0){return af(by,e,bw)}else{return b.swap(by,a9,function(){return af(by,e,bw)})}}},set:function(bw,bx){return bo.test(bx)?bx+"px":bx}}});if(!b.support.opacity){b.cssHooks.opacity={get:function(bv,e){return au.test((e&&bv.currentStyle?bv.currentStyle.filter:bv.style.filter)||"")?(parseFloat(RegExp.$1)/100)+"":e?"1":""},set:function(by,bz){var bx=by.style,bv=by.currentStyle,e=b.isNumeric(bz)?"alpha(opacity="+bz*100+")":"",bw=bv&&bv.filter||bx.filter||"";bx.zoom=1;if(bz>=1&&b.trim(bw.replace(al,""))===""){bx.removeAttribute("filter");if(bv&&!bv.filter){return}}bx.filter=al.test(bw)?bw.replace(al,e):bw+" "+e}}}b(function(){if(!b.support.reliableMarginRight){b.cssHooks.marginRight={get:function(bv,e){return b.swap(bv,{display:"inline-block"},function(){if(e){return Z(bv,"margin-right")}else{return bv.style.marginRight}})}}}});if(b.expr&&b.expr.filters){b.expr.filters.hidden=function(bw){var bv=bw.offsetWidth,e=bw.offsetHeight;return(bv===0&&e===0)||(!b.support.reliableHiddenOffsets&&((bw.style&&bw.style.display)||b.css(bw,"display"))==="none")};b.expr.filters.visible=function(e){return !b.expr.filters.hidden(e)}}b.each({margin:"",padding:"",border:"Width"},function(e,bv){b.cssHooks[e+bv]={expand:function(by){var bx,bz=typeof by==="string"?by.split(" "):[by],bw={};for(bx=0;bx<4;bx++){bw[e+G[bx]+bv]=bz[bx]||bz[bx-2]||bz[0]}return bw}}});var k=/%20/g,ap=/\[\]$/,bs=/\r?\n/g,bq=/#.*$/,aD=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,a0=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,aN=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,aR=/^(?:GET|HEAD)$/,c=/^\/\//,M=/\?/,a7=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,p=/^(?:select|textarea)/i,h=/\s+/,br=/([?&])_=[^&]*/,K=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,z=b.fn.load,aa={},q={},aF,r,aW=["*/"]+["*"];try{aF=bm.href}catch(aw){aF=av.createElement("a");aF.href="";aF=aF.href}r=K.exec(aF.toLowerCase())||[];function f(e){return function(by,bA){if(typeof by!=="string"){bA=by;by="*"}if(b.isFunction(bA)){var bx=by.toLowerCase().split(h),bw=0,bz=bx.length,bv,bB,bC;for(;bw<bz;bw++){bv=bx[bw];bC=/^\+/.test(bv);if(bC){bv=bv.substr(1)||"*"}bB=e[bv]=e[bv]||[];bB[bC?"unshift":"push"](bA)}}}}function aX(bv,bE,bz,bD,bB,bx){bB=bB||bE.dataTypes[0];bx=bx||{};bx[bB]=true;var bA=bv[bB],bw=0,e=bA?bA.length:0,by=(bv===aa),bC;for(;bw<e&&(by||!bC);bw++){bC=bA[bw](bE,bz,bD);if(typeof bC==="string"){if(!by||bx[bC]){bC=L}else{bE.dataTypes.unshift(bC);bC=aX(bv,bE,bz,bD,bC,bx)}}}if((by||!bC)&&!bx["*"]){bC=aX(bv,bE,bz,bD,"*",bx)}return bC}function an(bw,bx){var bv,e,by=b.ajaxSettings.flatOptions||{};for(bv in bx){if(bx[bv]!==L){(by[bv]?bw:(e||(e={})))[bv]=bx[bv]}}if(e){b.extend(true,bw,e)}}b.fn.extend({load:function(bw,bz,bA){if(typeof bw!=="string"&&z){return z.apply(this,arguments)}else{if(!this.length){return this}}var by=bw.indexOf(" ");if(by>=0){var e=bw.slice(by,bw.length);bw=bw.slice(0,by)}var bx="GET";if(bz){if(b.isFunction(bz)){bA=bz;bz=L}else{if(typeof bz==="object"){bz=b.param(bz,b.ajaxSettings.traditional);bx="POST"}}}var bv=this;b.ajax({url:bw,type:bx,dataType:"html",data:bz,complete:function(bC,bB,bD){bD=bC.responseText;if(bC.isResolved()){bC.done(function(bE){bD=bE});bv.html(e?b("<div>").append(bD.replace(a7,"")).find(e):bD)}if(bA){bv.each(bA,[bD,bB,bC])}}});return this},serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?b.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||p.test(this.nodeName)||a0.test(this.type))}).map(function(e,bv){var bw=b(this).val();return bw==null?null:b.isArray(bw)?b.map(bw,function(by,bx){return{name:bv.name,value:by.replace(bs,"\r\n")}}):{name:bv.name,value:bw.replace(bs,"\r\n")}}).get()}});b.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,bv){b.fn[bv]=function(bw){return this.on(bv,bw)}});b.each(["get","post"],function(e,bv){b[bv]=function(bw,by,bz,bx){if(b.isFunction(by)){bx=bx||bz;bz=by;by=L}return b.ajax({type:bv,url:bw,data:by,success:bz,dataType:bx})}});b.extend({getScript:function(e,bv){return b.get(e,L,bv,"script")},getJSON:function(e,bv,bw){return b.get(e,bv,bw,"json")},ajaxSetup:function(bv,e){if(e){an(bv,b.ajaxSettings)}else{e=bv;bv=b.ajaxSettings}an(bv,e);return bv},ajaxSettings:{url:aF,isLocal:aN.test(r[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":aW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":bd.String,"text html":true,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:f(aa),ajaxTransport:f(q),ajax:function(bz,bx){if(typeof bz==="object"){bx=bz;bz=L}bx=bx||{};var bD=b.ajaxSetup({},bx),bS=bD.context||bD,bG=bS!==bD&&(bS.nodeType||bS instanceof b)?b(bS):b.event,bR=b.Deferred(),bN=b.Callbacks("once memory"),bB=bD.statusCode||{},bC,bH={},bO={},bQ,by,bL,bE,bI,bA=0,bw,bK,bJ={readyState:0,setRequestHeader:function(bT,bU){if(!bA){var e=bT.toLowerCase();bT=bO[e]=bO[e]||bT;bH[bT]=bU}return this},getAllResponseHeaders:function(){return bA===2?bQ:null},getResponseHeader:function(bT){var e;if(bA===2){if(!by){by={};while((e=aD.exec(bQ))){by[e[1].toLowerCase()]=e[2]}}e=by[bT.toLowerCase()]}return e===L?null:e},overrideMimeType:function(e){if(!bA){bD.mimeType=e}return this},abort:function(e){e=e||"abort";if(bL){bL.abort(e)}bF(0,e);return this}};function bF(bZ,bU,b0,bW){if(bA===2){return}bA=2;if(bE){clearTimeout(bE)}bL=L;bQ=bW||"";bJ.readyState=bZ>0?4:0;var bT,b4,b3,bX=bU,bY=b0?bk(bD,bJ,b0):L,bV,b2;if(bZ>=200&&bZ<300||bZ===304){if(bD.ifModified){if((bV=bJ.getResponseHeader("Last-Modified"))){b.lastModified[bC]=bV}if((b2=bJ.getResponseHeader("Etag"))){b.etag[bC]=b2}}if(bZ===304){bX="notmodified";bT=true}else{try{b4=F(bD,bY);bX="success";bT=true}catch(b1){bX="parsererror";b3=b1}}}else{b3=bX;if(!bX||bZ){bX="error";if(bZ<0){bZ=0}}}bJ.status=bZ;bJ.statusText=""+(bU||bX);if(bT){bR.resolveWith(bS,[b4,bX,bJ])}else{bR.rejectWith(bS,[bJ,bX,b3])}bJ.statusCode(bB);bB=L;if(bw){bG.trigger("ajax"+(bT?"Success":"Error"),[bJ,bD,bT?b4:b3])}bN.fireWith(bS,[bJ,bX]);if(bw){bG.trigger("ajaxComplete",[bJ,bD]);if(!(--b.active)){b.event.trigger("ajaxStop")}}}bR.promise(bJ);bJ.success=bJ.done;bJ.error=bJ.fail;bJ.complete=bN.add;bJ.statusCode=function(bT){if(bT){var e;if(bA<2){for(e in bT){bB[e]=[bB[e],bT[e]]}}else{e=bT[bJ.status];bJ.then(e,e)}}return this};bD.url=((bz||bD.url)+"").replace(bq,"").replace(c,r[1]+"//");bD.dataTypes=b.trim(bD.dataType||"*").toLowerCase().split(h);if(bD.crossDomain==null){bI=K.exec(bD.url.toLowerCase());bD.crossDomain=!!(bI&&(bI[1]!=r[1]||bI[2]!=r[2]||(bI[3]||(bI[1]==="http:"?80:443))!=(r[3]||(r[1]==="http:"?80:443))))}if(bD.data&&bD.processData&&typeof bD.data!=="string"){bD.data=b.param(bD.data,bD.traditional)}aX(aa,bD,bx,bJ);if(bA===2){return false}bw=bD.global;bD.type=bD.type.toUpperCase();bD.hasContent=!aR.test(bD.type);if(bw&&b.active++===0){b.event.trigger("ajaxStart")}if(!bD.hasContent){if(bD.data){bD.url+=(M.test(bD.url)?"&":"?")+bD.data;delete bD.data}bC=bD.url;if(bD.cache===false){var bv=b.now(),bP=bD.url.replace(br,"$1_="+bv);bD.url=bP+((bP===bD.url)?(M.test(bD.url)?"&":"?")+"_="+bv:"")}}if(bD.data&&bD.hasContent&&bD.contentType!==false||bx.contentType){bJ.setRequestHeader("Content-Type",bD.contentType)}if(bD.ifModified){bC=bC||bD.url;if(b.lastModified[bC]){bJ.setRequestHeader("If-Modified-Since",b.lastModified[bC])}if(b.etag[bC]){bJ.setRequestHeader("If-None-Match",b.etag[bC])}}bJ.setRequestHeader("Accept",bD.dataTypes[0]&&bD.accepts[bD.dataTypes[0]]?bD.accepts[bD.dataTypes[0]]+(bD.dataTypes[0]!=="*"?", "+aW+"; q=0.01":""):bD.accepts["*"]);for(bK in bD.headers){bJ.setRequestHeader(bK,bD.headers[bK])}if(bD.beforeSend&&(bD.beforeSend.call(bS,bJ,bD)===false||bA===2)){bJ.abort();return false}for(bK in {success:1,error:1,complete:1}){bJ[bK](bD[bK])}bL=aX(q,bD,bx,bJ);if(!bL){bF(-1,"No Transport")}else{bJ.readyState=1;if(bw){bG.trigger("ajaxSend",[bJ,bD])}if(bD.async&&bD.timeout>0){bE=setTimeout(function(){bJ.abort("timeout")},bD.timeout)}try{bA=1;bL.send(bH,bF)}catch(bM){if(bA<2){bF(-1,bM)}else{throw bM}}}return bJ},param:function(e,bw){var bv=[],by=function(bz,bA){bA=b.isFunction(bA)?bA():bA;bv[bv.length]=encodeURIComponent(bz)+"="+encodeURIComponent(bA)};if(bw===L){bw=b.ajaxSettings.traditional}if(b.isArray(e)||(e.jquery&&!b.isPlainObject(e))){b.each(e,function(){by(this.name,this.value)})}else{for(var bx in e){u(bx,e[bx],bw,by)}}return bv.join("&").replace(k,"+")}});function u(bw,by,bv,bx){if(b.isArray(by)){b.each(by,function(bA,bz){if(bv||ap.test(bw)){bx(bw,bz)}else{u(bw+"["+(typeof bz==="object"?bA:"")+"]",bz,bv,bx)}})}else{if(!bv&&b.type(by)==="object"){for(var e in by){u(bw+"["+e+"]",by[e],bv,bx)}}else{bx(bw,by)}}}b.extend({active:0,lastModified:{},etag:{}});function bk(bD,bC,bz){var bv=bD.contents,bB=bD.dataTypes,bw=bD.responseFields,by,bA,bx,e;for(bA in bw){if(bA in bz){bC[bw[bA]]=bz[bA]}}while(bB[0]==="*"){bB.shift();if(by===L){by=bD.mimeType||bC.getResponseHeader("content-type")}}if(by){for(bA in bv){if(bv[bA]&&bv[bA].test(by)){bB.unshift(bA);break}}}if(bB[0] in bz){bx=bB[0]}else{for(bA in bz){if(!bB[0]||bD.converters[bA+" "+bB[0]]){bx=bA;break}if(!e){e=bA}}bx=bx||e}if(bx){if(bx!==bB[0]){bB.unshift(bx)}return bz[bx]}}function F(bH,bz){if(bH.dataFilter){bz=bH.dataFilter(bz,bH.dataType)}var bD=bH.dataTypes,bG={},bA,bE,bw=bD.length,bB,bC=bD[0],bx,by,bF,bv,e;for(bA=1;bA<bw;bA++){if(bA===1){for(bE in bH.converters){if(typeof bE==="string"){bG[bE.toLowerCase()]=bH.converters[bE]}}}bx=bC;bC=bD[bA];if(bC==="*"){bC=bx}else{if(bx!=="*"&&bx!==bC){by=bx+" "+bC;bF=bG[by]||bG["* "+bC];if(!bF){e=L;for(bv in bG){bB=bv.split(" ");if(bB[0]===bx||bB[0]==="*"){e=bG[bB[1]+" "+bC];if(e){bv=bG[bv];if(bv===true){bF=e}else{if(e===true){bF=bv}}break}}}}if(!(bF||e)){b.error("No conversion from "+by.replace(" "," to "))}if(bF!==true){bz=bF?bF(bz):e(bv(bz))}}}}return bz}var aC=b.now(),t=/(\=)\?(&|$)|\?\?/i;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return b.expando+"_"+(aC++)}});b.ajaxPrefilter("json jsonp",function(bD,bA,bC){var bx=(typeof bD.data==="string")&&/^application\/x\-www\-form\-urlencoded/.test(bD.contentType);if(bD.dataTypes[0]==="jsonp"||bD.jsonp!==false&&(t.test(bD.url)||bx&&t.test(bD.data))){var bB,bw=bD.jsonpCallback=b.isFunction(bD.jsonpCallback)?bD.jsonpCallback():bD.jsonpCallback,bz=bd[bw],e=bD.url,by=bD.data,bv="$1"+bw+"$2";if(bD.jsonp!==false){e=e.replace(t,bv);if(bD.url===e){if(bx){by=by.replace(t,bv)}if(bD.data===by){e+=(/\?/.test(e)?"&":"?")+bD.jsonp+"="+bw}}}bD.url=e;bD.data=by;bd[bw]=function(bE){bB=[bE]};bC.always(function(){bd[bw]=bz;if(bB&&b.isFunction(bz)){bd[bw](bB[0])}});bD.converters["script json"]=function(){if(!bB){b.error(bw+" was not called")}return bB[0]};bD.dataTypes[0]="json";return"script"}});b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){b.globalEval(e);return e}}});b.ajaxPrefilter("script",function(e){if(e.cache===L){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});b.ajaxTransport("script",function(bw){if(bw.crossDomain){var e,bv=av.head||av.getElementsByTagName("head")[0]||av.documentElement;return{send:function(bx,by){e=av.createElement("script");e.async="async";if(bw.scriptCharset){e.charset=bw.scriptCharset}e.src=bw.url;e.onload=e.onreadystatechange=function(bA,bz){if(bz||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;if(bv&&e.parentNode){bv.removeChild(e)}e=L;if(!bz){by(200,"success")}}};bv.insertBefore(e,bv.firstChild)},abort:function(){if(e){e.onload(0,1)}}}}});var A=bd.ActiveXObject?function(){for(var e in N){N[e](0,1)}}:false,x=0,N;function aM(){try{return new bd.XMLHttpRequest()}catch(bv){}}function ak(){try{return new bd.ActiveXObject("Microsoft.XMLHTTP")}catch(bv){}}b.ajaxSettings.xhr=bd.ActiveXObject?function(){return !this.isLocal&&aM()||ak()}:aM;(function(e){b.extend(b.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})})(b.ajaxSettings.xhr());if(b.support.ajax){b.ajaxTransport(function(e){if(!e.crossDomain||b.support.cors){var bv;return{send:function(bB,bw){var bA=e.xhr(),bz,by;if(e.username){bA.open(e.type,e.url,e.async,e.username,e.password)}else{bA.open(e.type,e.url,e.async)}if(e.xhrFields){for(by in e.xhrFields){bA[by]=e.xhrFields[by]}}if(e.mimeType&&bA.overrideMimeType){bA.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!bB["X-Requested-With"]){bB["X-Requested-With"]="XMLHttpRequest"}try{for(by in bB){bA.setRequestHeader(by,bB[by])}}catch(bx){}bA.send((e.hasContent&&e.data)||null);bv=function(bK,bE){var bF,bD,bC,bI,bH;try{if(bv&&(bE||bA.readyState===4)){bv=L;if(bz){bA.onreadystatechange=b.noop;if(A){delete N[bz]}}if(bE){if(bA.readyState!==4){bA.abort()}}else{bF=bA.status;bC=bA.getAllResponseHeaders();bI={};bH=bA.responseXML;if(bH&&bH.documentElement){bI.xml=bH}try{bI.text=bA.responseText}catch(bK){}try{bD=bA.statusText}catch(bJ){bD=""}if(!bF&&e.isLocal&&!e.crossDomain){bF=bI.text?200:404}else{if(bF===1223){bF=204}}}}}catch(bG){if(!bE){bw(-1,bG)}}if(bI){bw(bF,bD,bI,bC)}};if(!e.async||bA.readyState===4){bv()}else{bz=++x;if(A){if(!N){N={};b(bd).unload(A)}N[bz]=bv}bA.onreadystatechange=bv}},abort:function(){if(bv){bv(0,1)}}}}})}var Q={},ba,m,aB=/^(?:toggle|show|hide)$/,aU=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,a4,aI=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],a5;b.fn.extend({show:function(bx,bA,bz){var bw,by;if(bx||bx===0){return this.animate(a2("show",3),bx,bA,bz)}else{for(var bv=0,e=this.length;bv<e;bv++){bw=this[bv];if(bw.style){by=bw.style.display;if(!b._data(bw,"olddisplay")&&by==="none"){by=bw.style.display=""}if((by===""&&b.css(bw,"display")==="none")||!b.contains(bw.ownerDocument.documentElement,bw)){b._data(bw,"olddisplay",w(bw.nodeName))}}}for(bv=0;bv<e;bv++){bw=this[bv];if(bw.style){by=bw.style.display;if(by===""||by==="none"){bw.style.display=b._data(bw,"olddisplay")||""}}}return this}},hide:function(bx,bA,bz){if(bx||bx===0){return this.animate(a2("hide",3),bx,bA,bz)}else{var bw,by,bv=0,e=this.length;for(;bv<e;bv++){bw=this[bv];if(bw.style){by=b.css(bw,"display");if(by!=="none"&&!b._data(bw,"olddisplay")){b._data(bw,"olddisplay",by)}}}for(bv=0;bv<e;bv++){if(this[bv].style){this[bv].style.display="none"}}return this}},_toggle:b.fn.toggle,toggle:function(bw,bv,bx){var e=typeof bw==="boolean";if(b.isFunction(bw)&&b.isFunction(bv)){this._toggle.apply(this,arguments)}else{if(bw==null||e){this.each(function(){var by=e?bw:b(this).is(":hidden");b(this)[by?"show":"hide"]()})}else{this.animate(a2("toggle",3),bw,bv,bx)}}return this},fadeTo:function(e,bx,bw,bv){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:bx},e,bw,bv)},animate:function(bz,bw,by,bx){var e=b.speed(bw,by,bx);if(b.isEmptyObject(bz)){return this.each(e.complete,[false])}bz=b.extend({},bz);function bv(){if(e.queue===false){b._mark(this)}var bE=b.extend({},e),bL=this.nodeType===1,bJ=bL&&b(this).is(":hidden"),bB,bG,bD,bK,bN,bF,bI,bC,bH,bM,bA;bE.animatedProperties={};for(bD in bz){bB=b.camelCase(bD);if(bD!==bB){bz[bB]=bz[bD];delete bz[bD]}if((bN=b.cssHooks[bB])&&"expand" in bN){bF=bN.expand(bz[bB]);delete bz[bB];for(bD in bF){if(!(bD in bz)){bz[bD]=bF[bD]}}}}for(bB in bz){bG=bz[bB];if(b.isArray(bG)){bE.animatedProperties[bB]=bG[1];bG=bz[bB]=bG[0]}else{bE.animatedProperties[bB]=bE.specialEasing&&bE.specialEasing[bB]||bE.easing||"swing"}if(bG==="hide"&&bJ||bG==="show"&&!bJ){return bE.complete.call(this)}if(bL&&(bB==="height"||bB==="width")){bE.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(b.css(this,"display")==="inline"&&b.css(this,"float")==="none"){if(!b.support.inlineBlockNeedsLayout||w(this.nodeName)==="inline"){this.style.display="inline-block"}else{this.style.zoom=1}}}}if(bE.overflow!=null){this.style.overflow="hidden"}for(bD in bz){bK=new b.fx(this,bE,bD);bG=bz[bD];if(aB.test(bG)){bA=b._data(this,"toggle"+bD)||(bG==="toggle"?bJ?"show":"hide":0);if(bA){b._data(this,"toggle"+bD,bA==="show"?"hide":"show");bK[bA]()}else{bK[bG]()}}else{bI=aU.exec(bG);bC=bK.cur();if(bI){bH=parseFloat(bI[2]);bM=bI[3]||(b.cssNumber[bD]?"":"px");if(bM!=="px"){b.style(this,bD,(bH||1)+bM);bC=((bH||1)/bK.cur())*bC;b.style(this,bD,bC+bM)}if(bI[1]){bH=((bI[1]==="-="?-1:1)*bH)+bC}bK.custom(bC,bH,bM)}else{bK.custom(bC,bG,"")}}}return true}return e.queue===false?this.each(bv):this.queue(e.queue,bv)},stop:function(bw,bv,e){if(typeof bw!=="string"){e=bv;bv=bw;bw=L}if(bv&&bw!==false){this.queue(bw||"fx",[])}return this.each(function(){var bx,by=false,bA=b.timers,bz=b._data(this);if(!e){b._unmark(true,this)}function bB(bE,bF,bD){var bC=bF[bD];b.removeData(bE,bD,true);bC.stop(e)}if(bw==null){for(bx in bz){if(bz[bx]&&bz[bx].stop&&bx.indexOf(".run")===bx.length-4){bB(this,bz,bx)}}}else{if(bz[bx=bw+".run"]&&bz[bx].stop){bB(this,bz,bx)}}for(bx=bA.length;bx--;){if(bA[bx].elem===this&&(bw==null||bA[bx].queue===bw)){if(e){bA[bx](true)}else{bA[bx].saveState()}by=true;bA.splice(bx,1)}}if(!(e&&by)){b.dequeue(this,bw)}})}});function bi(){setTimeout(at,0);return(a5=b.now())}function at(){a5=L}function a2(bv,e){var bw={};b.each(aI.concat.apply([],aI.slice(0,e)),function(){bw[this]=bv});return bw}b.each({slideDown:a2("show",1),slideUp:a2("hide",1),slideToggle:a2("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,bv){b.fn[e]=function(bw,by,bx){return this.animate(bv,bw,by,bx)}});b.extend({speed:function(bw,bx,bv){var e=bw&&typeof bw==="object"?b.extend({},bw):{complete:bv||!bv&&bx||b.isFunction(bw)&&bw,duration:bw,easing:bv&&bx||bx&&!b.isFunction(bx)&&bx};e.duration=b.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in b.fx.speeds?b.fx.speeds[e.duration]:b.fx.speeds._default;if(e.queue==null||e.queue===true){e.queue="fx"}e.old=e.complete;e.complete=function(by){if(b.isFunction(e.old)){e.old.call(this)}if(e.queue){b.dequeue(this,e.queue)}else{if(by!==false){b._unmark(this)}}};return e},easing:{linear:function(e){return e},swing:function(e){return(-Math.cos(e*Math.PI)/2)+0.5}},timers:[],fx:function(bv,e,bw){this.options=e;this.elem=bv;this.prop=bw;e.orig=e.orig||{}}});b.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(b.fx.step[this.prop]||b.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var e,bv=b.css(this.elem,this.prop);return isNaN(e=parseFloat(bv))?!bv||bv==="auto"?0:bv:e},custom:function(bz,by,bx){var e=this,bw=b.fx;this.startTime=a5||bi();this.end=by;this.now=this.start=bz;this.pos=this.state=0;this.unit=bx||this.unit||(b.cssNumber[this.prop]?"":"px");function bv(bA){return e.step(bA)}bv.queue=this.options.queue;bv.elem=this.elem;bv.saveState=function(){if(b._data(e.elem,"fxshow"+e.prop)===L){if(e.options.hide){b._data(e.elem,"fxshow"+e.prop,e.start)}else{if(e.options.show){b._data(e.elem,"fxshow"+e.prop,e.end)}}}};if(bv()&&b.timers.push(bv)&&!a4){a4=setInterval(bw.tick,bw.interval)}},show:function(){var e=b._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=e||b.style(this.elem,this.prop);this.options.show=true;if(e!==L){this.custom(this.cur(),e)}else{this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur())}b(this.elem).show()},hide:function(){this.options.orig[this.prop]=b._data(this.elem,"fxshow"+this.prop)||b.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(by){var bA,bB,bv,bx=a5||bi(),e=true,bz=this.elem,bw=this.options;if(by||bx>=bw.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();bw.animatedProperties[this.prop]=true;for(bA in bw.animatedProperties){if(bw.animatedProperties[bA]!==true){e=false}}if(e){if(bw.overflow!=null&&!b.support.shrinkWrapBlocks){b.each(["","X","Y"],function(bC,bD){bz.style["overflow"+bD]=bw.overflow[bC]})}if(bw.hide){b(bz).hide()}if(bw.hide||bw.show){for(bA in bw.animatedProperties){b.style(bz,bA,bw.orig[bA]);b.removeData(bz,"fxshow"+bA,true);b.removeData(bz,"toggle"+bA,true)}}bv=bw.complete;if(bv){bw.complete=false;bv.call(bz)}}return false}else{if(bw.duration==Infinity){this.now=bx}else{bB=bx-this.startTime;this.state=bB/bw.duration;this.pos=b.easing[bw.animatedProperties[this.prop]](this.state,bB,0,1,bw.duration);this.now=this.start+((this.end-this.start)*this.pos)}this.update()}return true}};b.extend(b.fx,{tick:function(){var bw,bv=b.timers,e=0;for(;e<bv.length;e++){bw=bv[e];if(!bw()&&bv[e]===bw){bv.splice(e--,1)}}if(!bv.length){b.fx.stop()}},interval:13,stop:function(){clearInterval(a4);a4=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(e){b.style(e.elem,"opacity",e.now)},_default:function(e){if(e.elem.style&&e.elem.style[e.prop]!=null){e.elem.style[e.prop]=e.now+e.unit}else{e.elem[e.prop]=e.now}}}});b.each(aI.concat.apply([],aI),function(e,bv){if(bv.indexOf("margin")){b.fx.step[bv]=function(bw){b.style(bw.elem,bv,Math.max(0,bw.now)+bw.unit)}}});if(b.expr&&b.expr.filters){b.expr.filters.animated=function(e){return b.grep(b.timers,function(bv){return e===bv.elem}).length}}function w(bx){if(!Q[bx]){var e=av.body,bv=b("<"+bx+">").appendTo(e),bw=bv.css("display");bv.remove();if(bw==="none"||bw===""){if(!ba){ba=av.createElement("iframe");ba.frameBorder=ba.width=ba.height=0}e.appendChild(ba);if(!m||!ba.createElement){m=(ba.contentWindow||ba.contentDocument).document;m.write((b.support.boxModel?"<!doctype html>":"")+"<html><body>");m.close()}bv=m.createElement(bx);m.body.appendChild(bv);bw=b.css(bv,"display");e.removeChild(ba)}Q[bx]=bw}return Q[bx]}var a8,V=/^t(?:able|d|h)$/i,ad=/^(?:body|html)$/i;if("getBoundingClientRect" in av.documentElement){a8=function(by,bH,bw,bB){try{bB=by.getBoundingClientRect()}catch(bF){}if(!bB||!b.contains(bw,by)){return bB?{top:bB.top,left:bB.left}:{top:0,left:0}}var bC=bH.body,bD=aL(bH),bA=bw.clientTop||bC.clientTop||0,bE=bw.clientLeft||bC.clientLeft||0,bv=bD.pageYOffset||b.support.boxModel&&bw.scrollTop||bC.scrollTop,bz=bD.pageXOffset||b.support.boxModel&&bw.scrollLeft||bC.scrollLeft,bG=bB.top+bv-bA,bx=bB.left+bz-bE;return{top:bG,left:bx}}}else{a8=function(bz,bE,bx){var bC,bw=bz.offsetParent,bv=bz,bA=bE.body,bB=bE.defaultView,e=bB?bB.getComputedStyle(bz,null):bz.currentStyle,bD=bz.offsetTop,by=bz.offsetLeft;while((bz=bz.parentNode)&&bz!==bA&&bz!==bx){if(b.support.fixedPosition&&e.position==="fixed"){break}bC=bB?bB.getComputedStyle(bz,null):bz.currentStyle;bD-=bz.scrollTop;by-=bz.scrollLeft;if(bz===bw){bD+=bz.offsetTop;by+=bz.offsetLeft;if(b.support.doesNotAddBorder&&!(b.support.doesAddBorderForTableAndCells&&V.test(bz.nodeName))){bD+=parseFloat(bC.borderTopWidth)||0;by+=parseFloat(bC.borderLeftWidth)||0}bv=bw;bw=bz.offsetParent}if(b.support.subtractsBorderForOverflowNotVisible&&bC.overflow!=="visible"){bD+=parseFloat(bC.borderTopWidth)||0;by+=parseFloat(bC.borderLeftWidth)||0}e=bC}if(e.position==="relative"||e.position==="static"){bD+=bA.offsetTop;by+=bA.offsetLeft}if(b.support.fixedPosition&&e.position==="fixed"){bD+=Math.max(bx.scrollTop,bA.scrollTop);by+=Math.max(bx.scrollLeft,bA.scrollLeft)}return{top:bD,left:by}}}b.fn.offset=function(e){if(arguments.length){return e===L?this:this.each(function(bx){b.offset.setOffset(this,e,bx)})}var bv=this[0],bw=bv&&bv.ownerDocument;if(!bw){return null}if(bv===bw.body){return b.offset.bodyOffset(bv)}return a8(bv,bw,bw.documentElement)};b.offset={bodyOffset:function(e){var bw=e.offsetTop,bv=e.offsetLeft;if(b.support.doesNotIncludeMarginInBodyOffset){bw+=parseFloat(b.css(e,"marginTop"))||0;bv+=parseFloat(b.css(e,"marginLeft"))||0}return{top:bw,left:bv}},setOffset:function(bx,bG,bA){var bB=b.css(bx,"position");if(bB==="static"){bx.style.position="relative"}var bz=b(bx),bv=bz.offset(),e=b.css(bx,"top"),bE=b.css(bx,"left"),bF=(bB==="absolute"||bB==="fixed")&&b.inArray("auto",[e,bE])>-1,bD={},bC={},bw,by;if(bF){bC=bz.position();bw=bC.top;by=bC.left}else{bw=parseFloat(e)||0;by=parseFloat(bE)||0}if(b.isFunction(bG)){bG=bG.call(bx,bA,bv)}if(bG.top!=null){bD.top=(bG.top-bv.top)+bw}if(bG.left!=null){bD.left=(bG.left-bv.left)+by}if("using" in bG){bG.using.call(bx,bD)}else{bz.css(bD)}}};b.fn.extend({position:function(){if(!this[0]){return null}var bw=this[0],bv=this.offsetParent(),bx=this.offset(),e=ad.test(bv[0].nodeName)?{top:0,left:0}:bv.offset();bx.top-=parseFloat(b.css(bw,"marginTop"))||0;bx.left-=parseFloat(b.css(bw,"marginLeft"))||0;e.top+=parseFloat(b.css(bv[0],"borderTopWidth"))||0;e.left+=parseFloat(b.css(bv[0],"borderLeftWidth"))||0;return{top:bx.top-e.top,left:bx.left-e.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||av.body;while(e&&(!ad.test(e.nodeName)&&b.css(e,"position")==="static")){e=e.offsetParent}return e})}});b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(bw,bv){var e=/Y/.test(bv);b.fn[bw]=function(bx){return b.access(this,function(by,bB,bA){var bz=aL(by);if(bA===L){return bz?(bv in bz)?bz[bv]:b.support.boxModel&&bz.document.documentElement[bB]||bz.document.body[bB]:by[bB]}if(bz){bz.scrollTo(!e?bA:b(bz).scrollLeft(),e?bA:b(bz).scrollTop())}else{by[bB]=bA}},bw,bx,arguments.length,null)}});function aL(e){return b.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false}b.each({Height:"height",Width:"width"},function(bw,bx){var bv="client"+bw,e="scroll"+bw,by="offset"+bw;b.fn["inner"+bw]=function(){var bz=this[0];return bz?bz.style?parseFloat(b.css(bz,bx,"padding")):this[bx]():null};b.fn["outer"+bw]=function(bA){var bz=this[0];return bz?bz.style?parseFloat(b.css(bz,bx,bA?"margin":"border")):this[bx]():null};b.fn[bx]=function(bz){return b.access(this,function(bC,bB,bD){var bF,bE,bG,bA;if(b.isWindow(bC)){bF=bC.document;bE=bF.documentElement[bv];return b.support.boxModel&&bE||bF.body&&bF.body[bv]||bE}if(bC.nodeType===9){bF=bC.documentElement;if(bF[bv]>=bF[e]){return bF[bv]}return Math.max(bC.body[e],bF[e],bC.body[by],bF[by])}if(bD===L){bG=b.css(bC,bB);bA=parseFloat(bG);return b.isNumeric(bA)?bA:bG}b(bC).css(bB,bD)},bx,bz,arguments.length,null)}});RWJS.$=RWJS.jQuery=b;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return b})}})(window);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/libs/jquery/jquery-ui-1.11.3.js' */
/*! jQuery UI - v1.11.4 - 2015-07-05
 * http://jqueryui.com
 * Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, progressbar.js, selectmenu.js, slider.js, spinner.js, tabs.js, tooltip.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
 * Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery.multisortable.js"],a)}else{a(RWJS.jQuery)}}(function(I){
/*!
   * jQuery UI Core 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */
I.ui=I.ui||{};I.extend(I.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});I.fn.extend({scrollParent:function(ag){var af=this.css("position"),ae=af==="absolute",ah=ag?/(auto|scroll|hidden)/:/(auto|scroll)/,ai=this.parents().filter(function(){var aj=I(this);if(ae&&aj.css("position")==="static"){return false}return ah.test(aj.css("overflow")+aj.css("overflow-y")+aj.css("overflow-x"))}).eq(0);return af==="fixed"||!ai.length?I(this[0].ownerDocument||document):ai},uniqueId:(function(){var ae=0;return function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++ae)}})}})(),removeUniqueId:function(){return this.each(function(){if(/^ui-id-\d+$/.test(this.id)){I(this).removeAttr("id")}})}});function v(ag,ae){var ai,ah,af,aj=ag.nodeName.toLowerCase();if("area"===aj){ai=ag.parentNode;ah=ai.name;if(!ag.href||!ah||ai.nodeName.toLowerCase()!=="map"){return false}af=I("img[usemap='#"+ah+"']")[0];return !!af&&w(af)}return(/^(input|select|textarea|button|object)$/.test(aj)?!ag.disabled:"a"===aj?ag.href||ae:ae)&&w(ag)}function w(ae){return I.expr.filters.visible(ae)&&!I(ae).parents().addBack().filter(function(){return I.css(this,"visibility")==="hidden"}).length}I.extend(I.expr[":"],{data:I.expr.createPseudo?I.expr.createPseudo(function(ae){return function(af){return !!I.data(af,ae)}}):function(ag,af,ae){return !!I.data(ag,ae[3])},focusable:function(ae){return v(ae,!isNaN(I.attr(ae,"tabindex")))},tabbable:function(ag){var ae=I.attr(ag,"tabindex"),af=isNaN(ae);return(af||ae>=0)&&v(ag,!af)}});if(!I("<a>").outerWidth(1).jquery){I.each(["Width","Height"],function(ag,ae){var af=ae==="Width"?["Left","Right"]:["Top","Bottom"],ah=ae.toLowerCase(),aj={innerWidth:I.fn.innerWidth,innerHeight:I.fn.innerHeight,outerWidth:I.fn.outerWidth,outerHeight:I.fn.outerHeight};function ai(am,al,ak,an){I.each(af,function(){al-=parseFloat(I.css(am,"padding"+this))||0;if(ak){al-=parseFloat(I.css(am,"border"+this+"Width"))||0}if(an){al-=parseFloat(I.css(am,"margin"+this))||0}});return al}I.fn["inner"+ae]=function(ak){if(ak===undefined){return aj["inner"+ae].call(this)}return this.each(function(){I(this).css(ah,ai(this,ak)+"px")})};I.fn["outer"+ae]=function(ak,al){if(typeof ak!=="number"){return aj["outer"+ae].call(this,ak)}return this.each(function(){I(this).css(ah,ai(this,ak,true,al)+"px")})}})}if(!I.fn.addBack){I.fn.addBack=function(ae){return this.add(ae==null?this.prevObject:this.prevObject.filter(ae))}}if(I("<a>").data("a-b","a").removeData("a-b").data("a-b")){I.fn.removeData=(function(ae){return function(af){if(arguments.length){return ae.call(this,I.camelCase(af))}else{return ae.call(this)}}})(I.fn.removeData)}I.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());I.fn.extend({focus:(function(ae){return function(af,ag){return typeof af==="number"?this.each(function(){var ah=this;setTimeout(function(){I(ah).focus();if(ag){ag.call(ah)}},af)}):ae.apply(this,arguments)}})(I.fn.focus),disableSelection:(function(){var ae="onselectstart" in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(ae+".ui-disableSelection",function(af){af.preventDefault()})}})(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(ah){if(ah!==undefined){return this.css("zIndex",ah)}if(this.length){var af=I(this[0]),ae,ag;while(af.length&&af[0]!==document){ae=af.css("position");if(ae==="absolute"||ae==="relative"||ae==="fixed"){ag=parseInt(af.css("zIndex"),10);if(!isNaN(ag)&&ag!==0){return ag}}af=af.parent()}}return 0}});I.ui.plugin={add:function(af,ag,ai){var ae,ah=I.ui[af].prototype;for(ae in ai){ah.plugins[ae]=ah.plugins[ae]||[];ah.plugins[ae].push([ag,ai[ae]])}},call:function(ae,ah,ag,af){var ai,aj=ae.plugins[ah];if(!aj){return}if(!af&&(!ae.element[0].parentNode||ae.element[0].parentNode.nodeType===11)){return}for(ai=0;ai<aj.length;ai++){if(ae.options[aj[ai][0]]){aj[ai][1].apply(ae.element,ag)}}}};
/*!
   * jQuery UI Widget 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/jQuery.widget/
   */
var O=0,i=Array.prototype.slice;I.cleanData=(function(ae){return function(af){var ah,ai,ag;for(ag=0;(ai=af[ag])!=null;ag++){try{ah=I._data(ai,"events");if(ah&&ah.remove){I(ai).triggerHandler("remove")}}catch(aj){}}ae(af)}})(I.cleanData);I.widget=function(ae,af,am){var aj,ak,ah,al,ag={},ai=ae.split(".")[0];ae=ae.split(".")[1];aj=ai+"-"+ae;if(!am){am=af;af=I.Widget}I.expr[":"][aj.toLowerCase()]=function(an){return !!I.data(an,aj)};I[ai]=I[ai]||{};ak=I[ai][ae];ah=I[ai][ae]=function(an,ao){if(!this._createWidget){return new ah(an,ao)}if(arguments.length){this._createWidget(an,ao)}};I.extend(ah,ak,{version:am.version,_proto:I.extend({},am),_childConstructors:[]});al=new af();al.options=I.widget.extend({},al.options);I.each(am,function(ao,an){if(!I.isFunction(an)){ag[ao]=an;return}ag[ao]=(function(){var ap=function(){return af.prototype[ao].apply(this,arguments)},aq=function(ar){return af.prototype[ao].apply(this,ar)};return function(){var au=this._super,ar=this._superApply,at;this._super=ap;this._superApply=aq;at=an.apply(this,arguments);this._super=au;this._superApply=ar;return at}})()});ah.prototype=I.widget.extend(al,{widgetEventPrefix:ak?(al.widgetEventPrefix||ae):ae},ag,{constructor:ah,namespace:ai,widgetName:ae,widgetFullName:aj});if(ak){I.each(ak._childConstructors,function(ao,ap){var an=ap.prototype;I.widget(an.namespace+"."+an.widgetName,ah,ap._proto)});delete ak._childConstructors}else{af._childConstructors.push(ah)}I.widget.bridge(ae,ah);return ah};I.widget.extend=function(aj){var af=i.call(arguments,1),ai=0,ae=af.length,ag,ah;for(;ai<ae;ai++){for(ag in af[ai]){ah=af[ai][ag];if(af[ai].hasOwnProperty(ag)&&ah!==undefined){if(I.isPlainObject(ah)){aj[ag]=I.isPlainObject(aj[ag])?I.widget.extend({},aj[ag],ah):I.widget.extend({},ah)}else{aj[ag]=ah}}}}return aj};I.widget.bridge=function(af,ae){var ag=ae.prototype.widgetFullName||af;I.fn[af]=function(aj){var ah=typeof aj==="string",ai=i.call(arguments,1),ak=this;if(ah){this.each(function(){var am,al=I.data(this,ag);if(aj==="instance"){ak=al;return false}if(!al){return I.error("cannot call methods on "+af+" prior to initialization; attempted to call method '"+aj+"'")}if(!I.isFunction(al[aj])||aj.charAt(0)==="_"){return I.error("no such method '"+aj+"' for "+af+" widget instance")}am=al[aj].apply(al,ai);if(am!==al&&am!==undefined){ak=am&&am.jquery?ak.pushStack(am.get()):am;return false}})}else{if(ai.length){aj=I.widget.extend.apply(null,[aj].concat(ai))}this.each(function(){var al=I.data(this,ag);if(al){al.option(aj||{});if(al._init){al._init()}}else{I.data(this,ag,new ae(aj,this))}})}return ak}};I.Widget=function(){};I.Widget._childConstructors=[];I.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(ae,af){af=I(af||this.defaultElement||this)[0];this.element=I(af);this.uuid=O++;this.eventNamespace="."+this.widgetName+this.uuid;this.bindings=I();this.hoverable=I();this.focusable=I();if(af!==this){I.data(af,this.widgetFullName,this);this._on(true,this.element,{remove:function(ag){if(ag.target===af){this.destroy()}}});this.document=I(af.style?af.ownerDocument:af.document||af);this.window=I(this.document[0].defaultView||this.document[0].parentWindow)}this.options=I.widget.extend({},this.options,this._getCreateOptions(),ae);this._create();this._trigger("create",null,this._getCreateEventData());this._init()},_getCreateOptions:I.noop,_getCreateEventData:I.noop,_create:I.noop,_init:I.noop,destroy:function(){this._destroy();this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(I.camelCase(this.widgetFullName));this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")},_destroy:I.noop,widget:function(){return this.element},option:function(ah,ai){var ae=ah,aj,ag,af;if(arguments.length===0){return I.widget.extend({},this.options)}if(typeof ah==="string"){ae={};aj=ah.split(".");ah=aj.shift();if(aj.length){ag=ae[ah]=I.widget.extend({},this.options[ah]);for(af=0;af<aj.length-1;af++){ag[aj[af]]=ag[aj[af]]||{};ag=ag[aj[af]]}ah=aj.pop();if(arguments.length===1){return ag[ah]===undefined?null:ag[ah]}ag[ah]=ai}else{if(arguments.length===1){return this.options[ah]===undefined?null:this.options[ah]}ae[ah]=ai}}this._setOptions(ae);return this},_setOptions:function(ae){var af;for(af in ae){this._setOption(af,ae[af])}return this},_setOption:function(ae,af){this.options[ae]=af;if(ae==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled",!!af);if(af){this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")}}return this},enable:function(){return this._setOptions({disabled:false})},disable:function(){return this._setOptions({disabled:true})},_on:function(ah,ag,af){var ai,ae=this;if(typeof ah!=="boolean"){af=ag;ag=ah;ah=false}if(!af){af=ag;ag=this.element;ai=this.widget()}else{ag=ai=I(ag);this.bindings=this.bindings.add(ag)}I.each(af,function(ao,an){function al(){if(!ah&&(ae.options.disabled===true||I(this).hasClass("ui-state-disabled"))){return}return(typeof an==="string"?ae[an]:an).apply(ae,arguments)}if(typeof an!=="string"){al.guid=an.guid=an.guid||al.guid||I.guid++}var am=ao.match(/^([\w:-]*)\s*(.*)$/),ak=am[1]+ae.eventNamespace,aj=am[2];if(aj){ai.delegate(aj,ak,al)}else{ag.bind(ak,al)}})},_off:function(af,ae){ae=(ae||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;af.unbind(ae).undelegate(ae);this.bindings=I(this.bindings.not(af).get());this.focusable=I(this.focusable.not(af).get());this.hoverable=I(this.hoverable.not(af).get())},_delay:function(ah,ag){function af(){return(typeof ah==="string"?ae[ah]:ah).apply(ae,arguments)}var ae=this;return setTimeout(af,ag||0)},_hoverable:function(ae){this.hoverable=this.hoverable.add(ae);this._on(ae,{mouseenter:function(af){I(af.currentTarget).addClass("ui-state-hover")},mouseleave:function(af){I(af.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(ae){this.focusable=this.focusable.add(ae);this._on(ae,{focusin:function(af){I(af.currentTarget).addClass("ui-state-focus")},focusout:function(af){I(af.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(ae,af,ag){var aj,ai,ah=this.options[ae];ag=ag||{};af=I.Event(af);af.type=(ae===this.widgetEventPrefix?ae:this.widgetEventPrefix+ae).toLowerCase();af.target=this.element[0];ai=af.originalEvent;if(ai){for(aj in ai){if(!(aj in af)){af[aj]=ai[aj]}}}this.element.trigger(af,ag);return !(I.isFunction(ah)&&ah.apply(this.element[0],[af].concat(ag))===false||af.isDefaultPrevented())}};I.each({show:"fadeIn",hide:"fadeOut"},function(af,ae){I.Widget.prototype["_"+af]=function(ai,ah,ak){if(typeof ah==="string"){ah={effect:ah}}var aj,ag=!ah?af:ah===true||typeof ah==="number"?ae:ah.effect||ae;ah=ah||{};if(typeof ah==="number"){ah={duration:ah}}aj=!I.isEmptyObject(ah);ah.complete=ak;if(ah.delay){ai.delay(ah.delay)}if(aj&&I.effects&&I.effects.effect[ag]){ai[af](ah)}else{if(ag!==af&&ai[ag]){ai[ag](ah.duration,ah.easing,ak)}else{ai.queue(function(al){I(this)[af]();if(ak){ak.call(ai[0])}al()})}}}});var J=I.widget;
/*!
   * jQuery UI Mouse 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/mouse/
   */
var b=false;I(document).mouseup(function(){b=false});var G=I.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var ae=this;this.element.bind("mousedown."+this.widgetName,function(af){return ae._mouseDown(af)}).bind("click."+this.widgetName,function(af){if(true===I.data(af.target,ae.widgetName+".preventClickEvent")){I.removeData(af.target,ae.widgetName+".preventClickEvent");af.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);if(this._mouseMoveDelegate){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)}},_mouseDown:function(ag){if(b){return}this._mouseMoved=false;(this._mouseStarted&&this._mouseUp(ag));this._mouseDownEvent=ag;var af=this,ah=(ag.which===1),ae=(typeof this.options.cancel==="string"&&ag.target.nodeName?I(ag.target).closest(this.options.cancel).length:false);if(!ah||ae||!this._mouseCapture(ag)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){af.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(ag)&&this._mouseDelayMet(ag)){this._mouseStarted=(this._mouseStart(ag)!==false);if(!this._mouseStarted){ag.preventDefault();return true}}if(true===I.data(ag.target,this.widgetName+".preventClickEvent")){I.removeData(ag.target,this.widgetName+".preventClickEvent")}this._mouseMoveDelegate=function(ai){return af._mouseMove(ai)};this._mouseUpDelegate=function(ai){return af._mouseUp(ai)};this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);ag.preventDefault();b=true;return true},_mouseMove:function(ae){if(this._mouseMoved){if(I.ui.ie&&(!document.documentMode||document.documentMode<9)&&!ae.button){return this._mouseUp(ae)}else{if(!ae.which){return this._mouseUp(ae)}}}if(ae.which||ae.button){this._mouseMoved=true}if(this._mouseStarted){this._mouseDrag(ae);return ae.preventDefault()}if(this._mouseDistanceMet(ae)&&this._mouseDelayMet(ae)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,ae)!==false);(this._mouseStarted?this._mouseDrag(ae):this._mouseUp(ae))}return !this._mouseStarted},_mouseUp:function(ae){this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;if(ae.target===this._mouseDownEvent.target){I.data(ae.target,this.widgetName+".preventClickEvent",true)}this._mouseStop(ae)}b=false;return false},_mouseDistanceMet:function(ae){return(Math.max(Math.abs(this._mouseDownEvent.pageX-ae.pageX),Math.abs(this._mouseDownEvent.pageY-ae.pageY))>=this.options.distance)},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}});
/*!
   * jQuery UI Position 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/position/
   */
(function(){I.ui=I.ui||{};var al,ao,am=Math.max,ar=Math.abs,ap=Math.round,ag=/left|center|right/,aj=/top|center|bottom/,ae=/[\+\-]\d+(\.[\d]+)?%?/,an=/^\w+/,af=/%$/,ai=I.fn.position;function aq(av,au,at){return[parseFloat(av[0])*(af.test(av[0])?au/100:1),parseFloat(av[1])*(af.test(av[1])?at/100:1)]}function ak(at,au){return parseInt(I.css(at,au),10)||0}function ah(au){var at=au[0];if(at.nodeType===9){return{width:au.width(),height:au.height(),offset:{top:0,left:0}}}if(I.isWindow(at)){return{width:au.width(),height:au.height(),offset:{top:au.scrollTop(),left:au.scrollLeft()}}}if(at.preventDefault){return{width:0,height:0,offset:{top:at.pageY,left:at.pageX}}}return{width:au.outerWidth(),height:au.outerHeight(),offset:au.offset()}}I.position={scrollbarWidth:function(){if(al!==undefined){return al}var au,at,aw=I("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),av=aw.children()[0];I("body").append(aw);au=av.offsetWidth;aw.css("overflow","scroll");at=av.offsetWidth;if(au===at){at=aw[0].clientWidth}aw.remove();return(al=au-at)},getScrollInfo:function(ax){var aw=ax.isWindow||ax.isDocument?"":ax.element.css("overflow-x"),av=ax.isWindow||ax.isDocument?"":ax.element.css("overflow-y"),au=aw==="scroll"||(aw==="auto"&&ax.width<ax.element[0].scrollWidth),at=av==="scroll"||(av==="auto"&&ax.height<ax.element[0].scrollHeight);return{width:at?I.position.scrollbarWidth():0,height:au?I.position.scrollbarWidth():0}},getWithinInfo:function(au){var av=I(au||window),at=I.isWindow(av[0]),aw=!!av[0]&&av[0].nodeType===9;return{element:av,isWindow:at,isDocument:aw,offset:av.offset()||{left:0,top:0},scrollLeft:av.scrollLeft(),scrollTop:av.scrollTop(),width:at||aw?av.width():av.outerWidth(),height:at||aw?av.height():av.outerHeight()}}};I.fn.position=function(aD){if(!aD||!aD.of){return ai.apply(this,arguments)}aD=I.extend({},aD);var aE,aA,ay,aC,ax,at,az=I(aD.of),aw=I.position.getWithinInfo(aD.within),au=I.position.getScrollInfo(aw),aB=(aD.collision||"flip").split(" "),av={};at=ah(az);if(az[0].preventDefault){aD.at="left top"}aA=at.width;ay=at.height;aC=at.offset;ax=I.extend({},aC);I.each(["my","at"],function(){var aH=(aD[this]||"").split(" "),aG,aF;if(aH.length===1){aH=ag.test(aH[0])?aH.concat(["center"]):aj.test(aH[0])?["center"].concat(aH):["center","center"]}aH[0]=ag.test(aH[0])?aH[0]:"center";aH[1]=aj.test(aH[1])?aH[1]:"center";aG=ae.exec(aH[0]);aF=ae.exec(aH[1]);av[this]=[aG?aG[0]:0,aF?aF[0]:0];aD[this]=[an.exec(aH[0])[0],an.exec(aH[1])[0]]});if(aB.length===1){aB[1]=aB[0]}if(aD.at[0]==="right"){ax.left+=aA}else{if(aD.at[0]==="center"){ax.left+=aA/2}}if(aD.at[1]==="bottom"){ax.top+=ay}else{if(aD.at[1]==="center"){ax.top+=ay/2}}aE=aq(av.at,aA,ay);ax.left+=aE[0];ax.top+=aE[1];return this.each(function(){var aG,aP,aI=I(this),aK=aI.outerWidth(),aH=aI.outerHeight(),aJ=ak(this,"marginLeft"),aF=ak(this,"marginTop"),aO=aK+aJ+ak(this,"marginRight")+au.width,aN=aH+aF+ak(this,"marginBottom")+au.height,aL=I.extend({},ax),aM=aq(av.my,aI.outerWidth(),aI.outerHeight());if(aD.my[0]==="right"){aL.left-=aK}else{if(aD.my[0]==="center"){aL.left-=aK/2}}if(aD.my[1]==="bottom"){aL.top-=aH}else{if(aD.my[1]==="center"){aL.top-=aH/2}}aL.left+=aM[0];aL.top+=aM[1];if(!ao){aL.left=ap(aL.left);aL.top=ap(aL.top)}aG={marginLeft:aJ,marginTop:aF};I.each(["left","top"],function(aR,aQ){if(I.ui.position[aB[aR]]){I.ui.position[aB[aR]][aQ](aL,{targetWidth:aA,targetHeight:ay,elemWidth:aK,elemHeight:aH,collisionPosition:aG,collisionWidth:aO,collisionHeight:aN,offset:[aE[0]+aM[0],aE[1]+aM[1]],my:aD.my,at:aD.at,within:aw,elem:aI})}});if(aD.using){aP=function(aT){var aV=aC.left-aL.left,aS=aV+aA-aK,aU=aC.top-aL.top,aR=aU+ay-aH,aQ={target:{element:az,left:aC.left,top:aC.top,width:aA,height:ay},element:{element:aI,left:aL.left,top:aL.top,width:aK,height:aH},horizontal:aS<0?"left":aV>0?"right":"center",vertical:aR<0?"top":aU>0?"bottom":"middle"};if(aA<aK&&ar(aV+aS)<aA){aQ.horizontal="center"}if(ay<aH&&ar(aU+aR)<ay){aQ.vertical="middle"}if(am(ar(aV),ar(aS))>am(ar(aU),ar(aR))){aQ.important="horizontal"}else{aQ.important="vertical"}aD.using.call(this,aT,aQ)}}aI.offset(I.extend(aL,{using:aP}))})};I.ui.position={fit:{left:function(ax,aw){var av=aw.within,az=av.isWindow?av.scrollLeft:av.offset.left,aB=av.width,ay=ax.left-aw.collisionPosition.marginLeft,aA=az-ay,au=ay+aw.collisionWidth-aB-az,at;if(aw.collisionWidth>aB){if(aA>0&&au<=0){at=ax.left+aA+aw.collisionWidth-aB-az;ax.left+=aA-at}else{if(au>0&&aA<=0){ax.left=az}else{if(aA>au){ax.left=az+aB-aw.collisionWidth}else{ax.left=az}}}}else{if(aA>0){ax.left+=aA}else{if(au>0){ax.left-=au}else{ax.left=am(ax.left-ay,ax.left)}}}},top:function(aw,av){var au=av.within,aA=au.isWindow?au.scrollTop:au.offset.top,aB=av.within.height,ay=aw.top-av.collisionPosition.marginTop,az=aA-ay,ax=ay+av.collisionHeight-aB-aA,at;if(av.collisionHeight>aB){if(az>0&&ax<=0){at=aw.top+az+av.collisionHeight-aB-aA;aw.top+=az-at}else{if(ax>0&&az<=0){aw.top=aA}else{if(az>ax){aw.top=aA+aB-av.collisionHeight}else{aw.top=aA}}}}else{if(az>0){aw.top+=az}else{if(ax>0){aw.top-=ax}else{aw.top=am(aw.top-ay,aw.top)}}}}},flip:{left:function(az,ay){var ax=ay.within,aD=ax.offset.left+ax.scrollLeft,aG=ax.width,av=ax.isWindow?ax.scrollLeft:ax.offset.left,aA=az.left-ay.collisionPosition.marginLeft,aE=aA-av,au=aA+ay.collisionWidth-aG-av,aC=ay.my[0]==="left"?-ay.elemWidth:ay.my[0]==="right"?ay.elemWidth:0,aF=ay.at[0]==="left"?ay.targetWidth:ay.at[0]==="right"?-ay.targetWidth:0,aw=-2*ay.offset[0],at,aB;if(aE<0){at=az.left+aC+aF+aw+ay.collisionWidth-aG-aD;if(at<0||at<ar(aE)){az.left+=aC+aF+aw}}else{if(au>0){aB=az.left-ay.collisionPosition.marginLeft+aC+aF+aw-av;if(aB>0||ar(aB)<au){az.left+=aC+aF+aw}}}},top:function(ay,ax){var aw=ax.within,aF=aw.offset.top+aw.scrollTop,aG=aw.height,at=aw.isWindow?aw.scrollTop:aw.offset.top,aA=ay.top-ax.collisionPosition.marginTop,aC=aA-at,az=aA+ax.collisionHeight-aG-at,aD=ax.my[1]==="top",aB=aD?-ax.elemHeight:ax.my[1]==="bottom"?ax.elemHeight:0,aH=ax.at[1]==="top"?ax.targetHeight:ax.at[1]==="bottom"?-ax.targetHeight:0,av=-2*ax.offset[1],aE,au;if(aC<0){au=ay.top+aB+aH+av+ax.collisionHeight-aG-aF;if(au<0||au<ar(aC)){ay.top+=aB+aH+av}}else{if(az>0){aE=ay.top-ax.collisionPosition.marginTop+aB+aH+av-at;if(aE>0||ar(aE)<az){ay.top+=aB+aH+av}}}}},flipfit:{left:function(){I.ui.position.flip.left.apply(this,arguments);I.ui.position.fit.left.apply(this,arguments)},top:function(){I.ui.position.flip.top.apply(this,arguments);I.ui.position.fit.top.apply(this,arguments)}}};(function(){var ax,az,au,aw,av,at=document.getElementsByTagName("body")[0],ay=document.createElement("div");ax=document.createElement(at?"div":"body");au={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};if(at){I.extend(au,{position:"absolute",left:"-1000px",top:"-1000px"})}for(av in au){ax.style[av]=au[av]}ax.appendChild(ay);az=at||document.documentElement;az.insertBefore(ax,az.firstChild);ay.style.cssText="position: absolute; left: 10.7432222px;";aw=I(ay).offset().left;ao=aw>10&&aw<11;ax.innerHTML="";az.removeChild(ax)})()})();var P=I.ui.position;
/*!
   * jQuery UI Draggable 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/draggable/
   */
I.widget("ui.draggable",I.ui.mouse,{version:"1.11.4",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"){this._setPositionRelative()}if(this.options.addClasses){this.element.addClass("ui-draggable")}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")}this._setHandleClassName();this._mouseInit()},_setOption:function(ae,af){this._super(ae,af);if(ae==="handle"){this._removeHandleClassName();this._setHandleClassName()}},_destroy:function(){if((this.helper||this.element).is(".ui-draggable-dragging")){this.destroyOnClear=true;return}this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._removeHandleClassName();this._mouseDestroy()},_mouseCapture:function(ae){var af=this.options;this._blurActiveElement(ae);if(this.helper||af.disabled||I(ae.target).closest(".ui-resizable-handle").length>0){return false}this.handle=this._getHandle(ae);if(!this.handle){return false}this._blockFrames(af.iframeFix===true?"iframe":af.iframeFix);return true},_blockFrames:function(ae){this.iframeBlocks=this.document.find(ae).map(function(){var af=I(this);return I("<div>").css("position","absolute").appendTo(af.parent()).outerWidth(af.outerWidth()).outerHeight(af.outerHeight()).offset(af.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks}},_blurActiveElement:function(ag){var ae=this.document[0];if(!this.handleElement.is(ag.target)){return}try{if(ae.activeElement&&ae.activeElement.nodeName.toLowerCase()!=="body"){I(ae.activeElement).blur()}}catch(af){}},_mouseStart:function(ae){var af=this.options;this.helper=this._createHelper(ae);this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if(I.ui.ddmanager){I.ui.ddmanager.current=this}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent(true);this.offsetParent=this.helper.offsetParent();this.hasFixedAncestor=this.helper.parents().filter(function(){return I(this).css("position")==="fixed"}).length>0;this.positionAbs=this.element.offset();this._refreshOffsets(ae);this.originalPosition=this.position=this._generatePosition(ae,false);this.originalPageX=ae.pageX;this.originalPageY=ae.pageY;(af.cursorAt&&this._adjustOffsetFromHelper(af.cursorAt));this._setContainment();if(this._trigger("start",ae)===false){this._clear();return false}this._cacheHelperProportions();if(I.ui.ddmanager&&!af.dropBehaviour){I.ui.ddmanager.prepareOffsets(this,ae)}this._normalizeRightBottom();this._mouseDrag(ae,true);if(I.ui.ddmanager){I.ui.ddmanager.dragStart(this,ae)}return true},_refreshOffsets:function(ae){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:false,parent:this._getParentOffset(),relative:this._getRelativeOffset()};this.offset.click={left:ae.pageX-this.offset.left,top:ae.pageY-this.offset.top}},_mouseDrag:function(ae,ag){if(this.hasFixedAncestor){this.offset.parent=this._getParentOffset()}this.position=this._generatePosition(ae,true);this.positionAbs=this._convertPositionTo("absolute");if(!ag){var af=this._uiHash();if(this._trigger("drag",ae,af)===false){this._mouseUp({});return false}this.position=af.position}this.helper[0].style.left=this.position.left+"px";this.helper[0].style.top=this.position.top+"px";if(I.ui.ddmanager){I.ui.ddmanager.drag(this,ae)}return false},_mouseStop:function(af){var ae=this,ag=false;if(I.ui.ddmanager&&!this.options.dropBehaviour){ag=I.ui.ddmanager.drop(this,af)}if(this.dropped){ag=this.dropped;this.dropped=false}if((this.options.revert==="invalid"&&!ag)||(this.options.revert==="valid"&&ag)||this.options.revert===true||(I.isFunction(this.options.revert)&&this.options.revert.call(this.element,ag))){I(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(ae._trigger("stop",af)!==false){ae._clear()}})}else{if(this._trigger("stop",af)!==false){this._clear()}}return false},_mouseUp:function(ae){this._unblockFrames();if(I.ui.ddmanager){I.ui.ddmanager.dragStop(this,ae)}if(this.handleElement.is(ae.target)){this.element.focus()}return I.ui.mouse.prototype._mouseUp.call(this,ae)},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})}else{this._clear()}return this},_getHandle:function(ae){return this.options.handle?!!I(ae.target).closest(this.element.find(this.options.handle)).length:true},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element;this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(af){var ah=this.options,ag=I.isFunction(ah.helper),ae=ag?I(ah.helper.apply(this.element[0],[af])):(ah.helper==="clone"?this.element.clone().removeAttr("id"):this.element);if(!ae.parents("body").length){ae.appendTo((ah.appendTo==="parent"?this.element[0].parentNode:ah.appendTo))}if(ag&&ae[0]===this.element[0]){this._setPositionRelative()}if(ae[0]!==this.element[0]&&!(/(fixed|absolute)/).test(ae.css("position"))){ae.css("position","absolute")}return ae},_setPositionRelative:function(){if(!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"}},_adjustOffsetFromHelper:function(ae){if(typeof ae==="string"){ae=ae.split(" ")}if(I.isArray(ae)){ae={left:+ae[0],top:+ae[1]||0}}if("left" in ae){this.offset.click.left=ae.left+this.margins.left}if("right" in ae){this.offset.click.left=this.helperProportions.width-ae.right+this.margins.left}if("top" in ae){this.offset.click.top=ae.top+this.margins.top}if("bottom" in ae){this.offset.click.top=this.helperProportions.height-ae.bottom+this.margins.top}},_isRootNode:function(ae){return(/(html|body)/i).test(ae.tagName)||ae===this.document[0]},_getParentOffset:function(){var af=this.offsetParent.offset(),ae=this.document[0];if(this.cssPosition==="absolute"&&this.scrollParent[0]!==ae&&I.contains(this.scrollParent[0],this.offsetParent[0])){af.left+=this.scrollParent.scrollLeft();af.top+=this.scrollParent.scrollTop()}if(this._isRootNode(this.offsetParent[0])){af={top:0,left:0}}return{top:af.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:af.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition!=="relative"){return{top:0,left:0}}var ae=this.element.position(),af=this._isRootNode(this.scrollParent[0]);return{top:ae.top-(parseInt(this.helper.css("top"),10)||0)+(!af?this.scrollParent.scrollTop():0),left:ae.left-(parseInt(this.helper.css("left"),10)||0)+(!af?this.scrollParent.scrollLeft():0)}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var af,ai,ag,ah=this.options,ae=this.document[0];this.relativeContainer=null;if(!ah.containment){this.containment=null;return}if(ah.containment==="window"){this.containment=[I(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,I(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,I(window).scrollLeft()+I(window).width()-this.helperProportions.width-this.margins.left,I(window).scrollTop()+(I(window).height()||ae.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(ah.containment==="document"){this.containment=[0,0,I(ae).width()-this.helperProportions.width-this.margins.left,(I(ae).height()||ae.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];return}if(ah.containment.constructor===Array){this.containment=ah.containment;return}if(ah.containment==="parent"){ah.containment=this.helper[0].parentNode}ai=I(ah.containment);ag=ai[0];if(!ag){return}af=/(scroll|auto)/.test(ai.css("overflow"));this.containment=[(parseInt(ai.css("borderLeftWidth"),10)||0)+(parseInt(ai.css("paddingLeft"),10)||0),(parseInt(ai.css("borderTopWidth"),10)||0)+(parseInt(ai.css("paddingTop"),10)||0),(af?Math.max(ag.scrollWidth,ag.offsetWidth):ag.offsetWidth)-(parseInt(ai.css("borderRightWidth"),10)||0)-(parseInt(ai.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(af?Math.max(ag.scrollHeight,ag.offsetHeight):ag.offsetHeight)-(parseInt(ai.css("borderBottomWidth"),10)||0)-(parseInt(ai.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relativeContainer=ai},_convertPositionTo:function(af,ah){if(!ah){ah=this.position}var ae=af==="absolute"?1:-1,ag=this._isRootNode(this.scrollParent[0]);return{top:(ah.top+this.offset.relative.top*ae+this.offset.parent.top*ae-((this.cssPosition==="fixed"?-this.offset.scroll.top:(ag?0:this.offset.scroll.top))*ae)),left:(ah.left+this.offset.relative.left*ae+this.offset.parent.left*ae-((this.cssPosition==="fixed"?-this.offset.scroll.left:(ag?0:this.offset.scroll.left))*ae))}},_generatePosition:function(af,al){var ae,am,an,ah,ag=this.options,ak=this._isRootNode(this.scrollParent[0]),aj=af.pageX,ai=af.pageY;if(!ak||!this.offset.scroll){this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}}if(al){if(this.containment){if(this.relativeContainer){am=this.relativeContainer.offset();ae=[this.containment[0]+am.left,this.containment[1]+am.top,this.containment[2]+am.left,this.containment[3]+am.top]}else{ae=this.containment}if(af.pageX-this.offset.click.left<ae[0]){aj=ae[0]+this.offset.click.left}if(af.pageY-this.offset.click.top<ae[1]){ai=ae[1]+this.offset.click.top}if(af.pageX-this.offset.click.left>ae[2]){aj=ae[2]+this.offset.click.left}if(af.pageY-this.offset.click.top>ae[3]){ai=ae[3]+this.offset.click.top}}if(ag.grid){an=ag.grid[1]?this.originalPageY+Math.round((ai-this.originalPageY)/ag.grid[1])*ag.grid[1]:this.originalPageY;ai=ae?((an-this.offset.click.top>=ae[1]||an-this.offset.click.top>ae[3])?an:((an-this.offset.click.top>=ae[1])?an-ag.grid[1]:an+ag.grid[1])):an;ah=ag.grid[0]?this.originalPageX+Math.round((aj-this.originalPageX)/ag.grid[0])*ag.grid[0]:this.originalPageX;aj=ae?((ah-this.offset.click.left>=ae[0]||ah-this.offset.click.left>ae[2])?ah:((ah-this.offset.click.left>=ae[0])?ah-ag.grid[0]:ah+ag.grid[0])):ah}if(ag.axis==="y"){aj=this.originalPageX}if(ag.axis==="x"){ai=this.originalPageY}}return{top:(ai-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(this.cssPosition==="fixed"?-this.offset.scroll.top:(ak?0:this.offset.scroll.top))),left:(aj-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(this.cssPosition==="fixed"?-this.offset.scroll.left:(ak?0:this.offset.scroll.left)))}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()}this.helper=null;this.cancelHelperRemoval=false;if(this.destroyOnClear){this.destroy()}},_normalizeRightBottom:function(){if(this.options.axis!=="y"&&this.helper.css("right")!=="auto"){this.helper.width(this.helper.width());this.helper.css("right","auto")}if(this.options.axis!=="x"&&this.helper.css("bottom")!=="auto"){this.helper.height(this.helper.height());this.helper.css("bottom","auto")}},_trigger:function(ae,af,ag){ag=ag||this._uiHash();I.ui.plugin.call(this,ae,[af,ag,this],true);if(/^(drag|start|stop)/.test(ae)){this.positionAbs=this._convertPositionTo("absolute");ag.offset=this.positionAbs}return I.Widget.prototype._trigger.call(this,ae,af,ag)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});I.ui.plugin.add("draggable","connectToSortable",{start:function(ag,ah,ae){var af=I.extend({},ah,{item:ae.element});ae.sortables=[];I(ae.options.connectToSortable).each(function(){var ai=I(this).sortable("instance");if(ai&&!ai.options.disabled){ae.sortables.push(ai);ai.refreshPositions();ai._trigger("activate",ag,af)}})},stop:function(ag,ah,ae){var af=I.extend({},ah,{item:ae.element});ae.cancelHelperRemoval=false;I.each(ae.sortables,function(){var ai=this;if(ai.isOver){ai.isOver=0;ae.cancelHelperRemoval=true;ai.cancelHelperRemoval=false;ai._storedCSS={position:ai.placeholder.css("position"),top:ai.placeholder.css("top"),left:ai.placeholder.css("left")};ai._mouseStop(ag);ai.options.helper=ai.options._helper}else{ai.cancelHelperRemoval=true;ai._trigger("deactivate",ag,af)}})},drag:function(af,ag,ae){I.each(ae.sortables,function(){var ah=false,ai=this;ai.positionAbs=ae.positionAbs;ai.helperProportions=ae.helperProportions;ai.offset.click=ae.offset.click;if(ai._intersectsWith(ai.containerCache)){ah=true;I.each(ae.sortables,function(){this.positionAbs=ae.positionAbs;this.helperProportions=ae.helperProportions;this.offset.click=ae.offset.click;if(this!==ai&&this._intersectsWith(this.containerCache)&&I.contains(ai.element[0],this.element[0])){ah=false}return ah})}if(ah){if(!ai.isOver){ai.isOver=1;ae._parent=ag.helper.parent();ai.currentItem=ag.helper.appendTo(ai.element).data("ui-sortable-item",true);ai.options._helper=ai.options.helper;ai.options.helper=function(){return ag.helper[0]};af.target=ai.currentItem[0];ai._mouseCapture(af,true);ai._mouseStart(af,true,true);ai.offset.click.top=ae.offset.click.top;ai.offset.click.left=ae.offset.click.left;ai.offset.parent.left-=ae.offset.parent.left-ai.offset.parent.left;ai.offset.parent.top-=ae.offset.parent.top-ai.offset.parent.top;ae._trigger("toSortable",af);ae.dropped=ai.element;I.each(ae.sortables,function(){this.refreshPositions()});ae.currentItem=ae.element;ai.fromOutside=ae}if(ai.currentItem){ai._mouseDrag(af);ag.position=ai.position}}else{if(ai.isOver){ai.isOver=0;ai.cancelHelperRemoval=true;ai.options._revert=ai.options.revert;ai.options.revert=false;ai._trigger("out",af,ai._uiHash(ai));ai._mouseStop(af,true);ai.options.revert=ai.options._revert;ai.options.helper=ai.options._helper;if(ai.placeholder){ai.placeholder.remove()}ag.helper.appendTo(ae._parent);ae._refreshOffsets(af);ag.position=ae._generatePosition(af,true);ae._trigger("fromSortable",af);ae.dropped=false;I.each(ae.sortables,function(){this.refreshPositions()})}}})}});I.ui.plugin.add("draggable","cursor",{start:function(ag,ah,ae){var af=I("body"),ai=ae.options;if(af.css("cursor")){ai._cursor=af.css("cursor")}af.css("cursor",ai.cursor)},stop:function(af,ag,ae){var ah=ae.options;if(ah._cursor){I("body").css("cursor",ah._cursor)}}});I.ui.plugin.add("draggable","opacity",{start:function(ag,ah,ae){var af=I(ah.helper),ai=ae.options;if(af.css("opacity")){ai._opacity=af.css("opacity")}af.css("opacity",ai.opacity)},stop:function(af,ag,ae){var ah=ae.options;if(ah._opacity){I(ag.helper).css("opacity",ah._opacity)}}});I.ui.plugin.add("draggable","scroll",{start:function(af,ag,ae){if(!ae.scrollParentNotHidden){ae.scrollParentNotHidden=ae.helper.scrollParent(false)}if(ae.scrollParentNotHidden[0]!==ae.document[0]&&ae.scrollParentNotHidden[0].tagName!=="HTML"){ae.overflowOffset=ae.scrollParentNotHidden.offset()}},drag:function(ah,ai,ag){var aj=ag.options,af=false,ak=ag.scrollParentNotHidden[0],ae=ag.document[0];if(ak!==ae&&ak.tagName!=="HTML"){if(!aj.axis||aj.axis!=="x"){if((ag.overflowOffset.top+ak.offsetHeight)-ah.pageY<aj.scrollSensitivity){ak.scrollTop=af=ak.scrollTop+aj.scrollSpeed}else{if(ah.pageY-ag.overflowOffset.top<aj.scrollSensitivity){ak.scrollTop=af=ak.scrollTop-aj.scrollSpeed}}}if(!aj.axis||aj.axis!=="y"){if((ag.overflowOffset.left+ak.offsetWidth)-ah.pageX<aj.scrollSensitivity){ak.scrollLeft=af=ak.scrollLeft+aj.scrollSpeed}else{if(ah.pageX-ag.overflowOffset.left<aj.scrollSensitivity){ak.scrollLeft=af=ak.scrollLeft-aj.scrollSpeed}}}}else{if(!aj.axis||aj.axis!=="x"){if(ah.pageY-I(ae).scrollTop()<aj.scrollSensitivity){af=I(ae).scrollTop(I(ae).scrollTop()-aj.scrollSpeed)}else{if(I(window).height()-(ah.pageY-I(ae).scrollTop())<aj.scrollSensitivity){af=I(ae).scrollTop(I(ae).scrollTop()+aj.scrollSpeed)}}}if(!aj.axis||aj.axis!=="y"){if(ah.pageX-I(ae).scrollLeft()<aj.scrollSensitivity){af=I(ae).scrollLeft(I(ae).scrollLeft()-aj.scrollSpeed)}else{if(I(window).width()-(ah.pageX-I(ae).scrollLeft())<aj.scrollSensitivity){af=I(ae).scrollLeft(I(ae).scrollLeft()+aj.scrollSpeed)}}}}if(af!==false&&I.ui.ddmanager&&!aj.dropBehaviour){I.ui.ddmanager.prepareOffsets(ag,ah)}}});I.ui.plugin.add("draggable","snap",{start:function(af,ag,ae){var ah=ae.options;ae.snapElements=[];I(ah.snap.constructor!==String?(ah.snap.items||":data(ui-draggable)"):ah.snap).each(function(){var aj=I(this),ai=aj.offset();if(this!==ae.element[0]){ae.snapElements.push({item:this,width:aj.outerWidth(),height:aj.outerHeight(),top:ai.top,left:ai.left})}})},drag:function(aq,an,ah){var ae,aw,aj,ak,ap,am,al,ax,ar,ai,ao=ah.options,av=ao.snapTolerance,au=an.offset.left,at=au+ah.helperProportions.width,ag=an.offset.top,af=ag+ah.helperProportions.height;for(ar=ah.snapElements.length-1;ar>=0;ar--){ap=ah.snapElements[ar].left-ah.margins.left;am=ap+ah.snapElements[ar].width;al=ah.snapElements[ar].top-ah.margins.top;ax=al+ah.snapElements[ar].height;if(at<ap-av||au>am+av||af<al-av||ag>ax+av||!I.contains(ah.snapElements[ar].item.ownerDocument,ah.snapElements[ar].item)){if(ah.snapElements[ar].snapping){(ah.options.snap.release&&ah.options.snap.release.call(ah.element,aq,I.extend(ah._uiHash(),{snapItem:ah.snapElements[ar].item})))}ah.snapElements[ar].snapping=false;continue}if(ao.snapMode!=="inner"){ae=Math.abs(al-af)<=av;aw=Math.abs(ax-ag)<=av;aj=Math.abs(ap-at)<=av;ak=Math.abs(am-au)<=av;if(ae){an.position.top=ah._convertPositionTo("relative",{top:al-ah.helperProportions.height,left:0}).top}if(aw){an.position.top=ah._convertPositionTo("relative",{top:ax,left:0}).top}if(aj){an.position.left=ah._convertPositionTo("relative",{top:0,left:ap-ah.helperProportions.width}).left}if(ak){an.position.left=ah._convertPositionTo("relative",{top:0,left:am}).left}}ai=(ae||aw||aj||ak);if(ao.snapMode!=="outer"){ae=Math.abs(al-ag)<=av;aw=Math.abs(ax-af)<=av;aj=Math.abs(ap-au)<=av;ak=Math.abs(am-at)<=av;if(ae){an.position.top=ah._convertPositionTo("relative",{top:al,left:0}).top}if(aw){an.position.top=ah._convertPositionTo("relative",{top:ax-ah.helperProportions.height,left:0}).top}if(aj){an.position.left=ah._convertPositionTo("relative",{top:0,left:ap}).left}if(ak){an.position.left=ah._convertPositionTo("relative",{top:0,left:am-ah.helperProportions.width}).left}}if(!ah.snapElements[ar].snapping&&(ae||aw||aj||ak||ai)){(ah.options.snap.snap&&ah.options.snap.snap.call(ah.element,aq,I.extend(ah._uiHash(),{snapItem:ah.snapElements[ar].item})))}ah.snapElements[ar].snapping=(ae||aw||aj||ak||ai)}}});I.ui.plugin.add("draggable","stack",{start:function(ag,ah,ae){var af,aj=ae.options,ai=I.makeArray(I(aj.stack)).sort(function(al,ak){return(parseInt(I(al).css("zIndex"),10)||0)-(parseInt(I(ak).css("zIndex"),10)||0)});if(!ai.length){return}af=parseInt(I(ai[0]).css("zIndex"),10)||0;I(ai).each(function(ak){I(this).css("zIndex",af+ak)});this.css("zIndex",(af+ai.length))}});I.ui.plugin.add("draggable","zIndex",{start:function(ag,ah,ae){var af=I(ah.helper),ai=ae.options;if(af.css("zIndex")){ai._zIndex=af.css("zIndex")}af.css("zIndex",ai.zIndex)},stop:function(af,ag,ae){var ah=ae.options;if(ah._zIndex){I(ag.helper).css("zIndex",ah._zIndex)}}});var X=I.ui.draggable;
/*!
   * jQuery UI Droppable 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/droppable/
   */
I.widget("ui.droppable",{version:"1.11.4",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var af,ag=this.options,ae=ag.accept;this.isover=false;this.isout=true;this.accept=I.isFunction(ae)?ae:function(ah){return ah.is(ae)};this.proportions=function(){if(arguments.length){af=arguments[0]}else{return af?af:af={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}}};this._addToManager(ag.scope);ag.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(ae){I.ui.ddmanager.droppables[ae]=I.ui.ddmanager.droppables[ae]||[];I.ui.ddmanager.droppables[ae].push(this)},_splice:function(ae){var af=0;for(;af<ae.length;af++){if(ae[af]===this){ae.splice(af,1)}}},_destroy:function(){var ae=I.ui.ddmanager.droppables[this.options.scope];this._splice(ae);this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(af,ag){if(af==="accept"){this.accept=I.isFunction(ag)?ag:function(ah){return ah.is(ag)}}else{if(af==="scope"){var ae=I.ui.ddmanager.droppables[this.options.scope];this._splice(ae);this._addToManager(ag)}}this._super(af,ag)},_activate:function(af){var ae=I.ui.ddmanager.current;if(this.options.activeClass){this.element.addClass(this.options.activeClass)}if(ae){this._trigger("activate",af,this.ui(ae))}},_deactivate:function(af){var ae=I.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(ae){this._trigger("deactivate",af,this.ui(ae))}},_over:function(af){var ae=I.ui.ddmanager.current;if(!ae||(ae.currentItem||ae.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],(ae.currentItem||ae.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)}this._trigger("over",af,this.ui(ae))}},_out:function(af){var ae=I.ui.ddmanager.current;if(!ae||(ae.currentItem||ae.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],(ae.currentItem||ae.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("out",af,this.ui(ae))}},_drop:function(af,ag){var ae=ag||I.ui.ddmanager.current,ah=false;if(!ae||(ae.currentItem||ae.element)[0]===this.element[0]){return false}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var ai=I(this).droppable("instance");if(ai.options.greedy&&!ai.options.disabled&&ai.options.scope===ae.options.scope&&ai.accept.call(ai.element[0],(ae.currentItem||ae.element))&&I.ui.intersect(ae,I.extend(ai,{offset:ai.element.offset()}),ai.options.tolerance,af)){ah=true;return false}});if(ah){return false}if(this.accept.call(this.element[0],(ae.currentItem||ae.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",af,this.ui(ae));return this.element}return false},ui:function(ae){return{draggable:(ae.currentItem||ae.element),helper:ae.helper,position:ae.position,offset:ae.positionAbs}}});I.ui.intersect=(function(){function ae(ag,af,ah){return(ag>=af)&&(ag<(af+ah))}return function(aq,ak,ao,ag){if(!ak.offset){return false}var ai=(aq.positionAbs||aq.position.absolute).left+aq.margins.left,an=(aq.positionAbs||aq.position.absolute).top+aq.margins.top,ah=ai+aq.helperProportions.width,am=an+aq.helperProportions.height,aj=ak.offset.left,ap=ak.offset.top,af=aj+ak.proportions().width,al=ap+ak.proportions().height;switch(ao){case"fit":return(aj<=ai&&ah<=af&&ap<=an&&am<=al);case"intersect":return(aj<ai+(aq.helperProportions.width/2)&&ah-(aq.helperProportions.width/2)<af&&ap<an+(aq.helperProportions.height/2)&&am-(aq.helperProportions.height/2)<al);case"pointer":return ae(ag.pageY,ap,ak.proportions().height)&&ae(ag.pageX,aj,ak.proportions().width);case"touch":return((an>=ap&&an<=al)||(am>=ap&&am<=al)||(an<ap&&am>al))&&((ai>=aj&&ai<=af)||(ah>=aj&&ah<=af)||(ai<aj&&ah>af));default:return false}}})();I.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(ah,aj){var ag,af,ae=I.ui.ddmanager.droppables[ah.options.scope]||[],ai=aj?aj.type:null,ak=(ah.currentItem||ah.element).find(":data(ui-droppable)").addBack();droppablesLoop:for(ag=0;ag<ae.length;ag++){if(ae[ag].options.disabled||(ah&&!ae[ag].accept.call(ae[ag].element[0],(ah.currentItem||ah.element)))){continue}for(af=0;af<ak.length;af++){if(ak[af]===ae[ag].element[0]){ae[ag].proportions().height=0;continue droppablesLoop}}ae[ag].visible=ae[ag].element.css("display")!=="none";if(!ae[ag].visible){continue}if(ai==="mousedown"){ae[ag]._activate.call(ae[ag],aj)}ae[ag].offset=ae[ag].element.offset();ae[ag].proportions({width:ae[ag].element[0].offsetWidth,height:ae[ag].element[0].offsetHeight})}},drop:function(ae,af){var ag=false;I.each((I.ui.ddmanager.droppables[ae.options.scope]||[]).slice(),function(){if(!this.options){return}if(!this.options.disabled&&this.visible&&I.ui.intersect(ae,this,this.options.tolerance,af)){ag=this._drop.call(this,af)||ag}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(ae.currentItem||ae.element))){this.isout=true;this.isover=false;this._deactivate.call(this,af)}});return ag},dragStart:function(ae,af){ae.element.parentsUntil("body").bind("scroll.droppable",function(){if(!ae.options.refreshPositions){I.ui.ddmanager.prepareOffsets(ae,af)}})},drag:function(ae,af){if(ae.options.refreshPositions){I.ui.ddmanager.prepareOffsets(ae,af)}I.each(I.ui.ddmanager.droppables[ae.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return}var aj,ah,ag,ai=I.ui.intersect(ae,this,this.options.tolerance,af),ak=!ai&&this.isover?"isout":(ai&&!this.isover?"isover":null);if(!ak){return}if(this.options.greedy){ah=this.options.scope;ag=this.element.parents(":data(ui-droppable)").filter(function(){return I(this).droppable("instance").options.scope===ah});if(ag.length){aj=I(ag[0]).droppable("instance");aj.greedyChild=(ak==="isover")}}if(aj&&ak==="isover"){aj.isover=false;aj.isout=true;aj._out.call(aj,af)}this[ak]=true;this[ak==="isout"?"isover":"isout"]=false;this[ak==="isover"?"_over":"_out"].call(this,af);if(aj&&ak==="isout"){aj.isout=false;aj.isover=true;aj._over.call(aj,af)}})},dragStop:function(ae,af){ae.element.parentsUntil("body").unbind("scroll.droppable");if(!ae.options.refreshPositions){I.ui.ddmanager.prepareOffsets(ae,af)}}};var d=I.ui.droppable;
/*!
   * jQuery UI Resizable 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/resizable/
   */
I.widget("ui.resizable",I.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:false,animate:false,animateDuration:"slow",animateEasing:"swing",aspectRatio:false,autoHide:false,containment:false,ghost:false,grid:false,handles:"e,s,se",helper:false,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(ae){return parseInt(ae,10)||0},_isNumber:function(ae){return !isNaN(parseInt(ae,10))},_hasScroll:function(ah,af){if(I(ah).css("overflow")==="hidden"){return false}var ae=(af&&af==="left")?"scrollLeft":"scrollTop",ag=false;if(ah[ae]>0){return true}ah[ae]=1;ag=(ah[ae]>0);ah[ae]=0;return ag},_create:function(){var ak,af,ai,ag,ae,ah=this,aj=this.options;this.element.addClass("ui-resizable");I.extend(this,{_aspectRatio:!!(aj.aspectRatio),aspectRatio:aj.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:aj.helper||aj.ghost||aj.animate?aj.helper||"ui-resizable-helper":null});if(this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){this.element.wrap(I("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")}));this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance"));this.elementIsWrapper=true;this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")});this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0});this.originalResizeStyle=this.originalElement.css("resize");this.originalElement.css("resize","none");this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"}));this.originalElement.css({margin:this.originalElement.css("margin")});this._proportionallyResize()}this.handles=aj.handles||(!I(".ui-resizable-handle",this.element).length?"e,s,se":{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"});this._handles=I();if(this.handles.constructor===String){if(this.handles==="all"){this.handles="n,e,s,w,se,sw,ne,nw"}ak=this.handles.split(",");this.handles={};for(af=0;af<ak.length;af++){ai=I.trim(ak[af]);ae="ui-resizable-"+ai;ag=I("<div class='ui-resizable-handle "+ae+"'></div>");ag.css({zIndex:aj.zIndex});if("se"===ai){ag.addClass("ui-icon ui-icon-gripsmall-diagonal-se")}this.handles[ai]=".ui-resizable-"+ai;this.element.append(ag)}}this._renderAxis=function(ap){var am,an,al,ao;ap=ap||this.element;for(am in this.handles){if(this.handles[am].constructor===String){this.handles[am]=this.element.children(this.handles[am]).first().show()}else{if(this.handles[am].jquery||this.handles[am].nodeType){this.handles[am]=I(this.handles[am]);this._on(this.handles[am],{mousedown:ah._mouseDown})}}if(this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)){an=I(this.handles[am],this.element);ao=/sw|ne|nw|se|n|s/.test(am)?an.outerHeight():an.outerWidth();al=["padding",/ne|nw|n/.test(am)?"Top":/se|sw|s/.test(am)?"Bottom":/^e$/.test(am)?"Right":"Left"].join("");ap.css(al,ao);this._proportionallyResize()}this._handles=this._handles.add(this.handles[am])}};this._renderAxis(this.element);this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));this._handles.disableSelection();this._handles.mouseover(function(){if(!ah.resizing){if(this.className){ag=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)}ah.axis=ag&&ag[1]?ag[1]:"se"}});if(aj.autoHide){this._handles.hide();I(this.element).addClass("ui-resizable-autohide").mouseenter(function(){if(aj.disabled){return}I(this).removeClass("ui-resizable-autohide");ah._handles.show()}).mouseleave(function(){if(aj.disabled){return}if(!ah.resizing){I(this).addClass("ui-resizable-autohide");ah._handles.hide()}})}this._mouseInit()},_destroy:function(){this._mouseDestroy();var af,ae=function(ag){I(ag).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};if(this.elementIsWrapper){ae(this.element);af=this.element;this.originalElement.css({position:af.css("position"),width:af.outerWidth(),height:af.outerHeight(),top:af.css("top"),left:af.css("left")}).insertAfter(af);af.remove()}this.originalElement.css("resize",this.originalResizeStyle);ae(this.originalElement);return this},_mouseCapture:function(ag){var af,ah,ae=false;for(af in this.handles){ah=I(this.handles[af])[0];if(ah===ag.target||I.contains(ah,ag.target)){ae=true}}return !this.options.disabled&&ae},_mouseStart:function(af){var aj,ag,ai,ah=this.options,ae=this.element;this.resizing=true;this._renderProxy();aj=this._num(this.helper.css("left"));ag=this._num(this.helper.css("top"));if(ah.containment){aj+=I(ah.containment).scrollLeft()||0;ag+=I(ah.containment).scrollTop()||0}this.offset=this.helper.offset();this.position={left:aj,top:ag};this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:ae.width(),height:ae.height()};this.originalSize=this._helper?{width:ae.outerWidth(),height:ae.outerHeight()}:{width:ae.width(),height:ae.height()};this.sizeDiff={width:ae.outerWidth()-ae.width(),height:ae.outerHeight()-ae.height()};this.originalPosition={left:aj,top:ag};this.originalMousePosition={left:af.pageX,top:af.pageY};this.aspectRatio=(typeof ah.aspectRatio==="number")?ah.aspectRatio:((this.originalSize.width/this.originalSize.height)||1);ai=I(".ui-resizable-"+this.axis).css("cursor");I("body").css("cursor",ai==="auto"?this.axis+"-resize":ai);ae.addClass("ui-resizable-resizing");this._propagate("start",af);return true},_mouseDrag:function(aj){var ak,ai,al=this.originalMousePosition,af=this.axis,ag=(aj.pageX-al.left)||0,ae=(aj.pageY-al.top)||0,ah=this._change[af];this._updatePrevProperties();if(!ah){return false}ak=ah.apply(this,[aj,ag,ae]);this._updateVirtualBoundaries(aj.shiftKey);if(this._aspectRatio||aj.shiftKey){ak=this._updateRatio(ak,aj)}ak=this._respectSize(ak,aj);this._updateCache(ak);this._propagate("resize",aj);ai=this._applyChanges();if(!this._helper&&this._proportionallyResizeElements.length){this._proportionallyResize()}if(!I.isEmptyObject(ai)){this._updatePrevProperties();this._trigger("resize",aj,this.ui());this._applyChanges()}return false},_mouseStop:function(ah){this.resizing=false;var ag,ae,af,ak,an,aj,am,ai=this.options,al=this;if(this._helper){ag=this._proportionallyResizeElements;ae=ag.length&&(/textarea/i).test(ag[0].nodeName);af=ae&&this._hasScroll(ag[0],"left")?0:al.sizeDiff.height;ak=ae?0:al.sizeDiff.width;an={width:(al.helper.width()-ak),height:(al.helper.height()-af)};aj=(parseInt(al.element.css("left"),10)+(al.position.left-al.originalPosition.left))||null;am=(parseInt(al.element.css("top"),10)+(al.position.top-al.originalPosition.top))||null;if(!ai.animate){this.element.css(I.extend(an,{top:am,left:aj}))}al.helper.height(al.size.height);al.helper.width(al.size.width);if(this._helper&&!ai.animate){this._proportionallyResize()}}I("body").css("cursor","auto");this.element.removeClass("ui-resizable-resizing");this._propagate("stop",ah);if(this._helper){this.helper.remove()}return false},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left};this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var ae={};if(this.position.top!==this.prevPosition.top){ae.top=this.position.top+"px"}if(this.position.left!==this.prevPosition.left){ae.left=this.position.left+"px"}if(this.size.width!==this.prevSize.width){ae.width=this.size.width+"px"}if(this.size.height!==this.prevSize.height){ae.height=this.size.height+"px"}this.helper.css(ae);return ae},_updateVirtualBoundaries:function(ag){var ai,ah,af,ak,ae,aj=this.options;ae={minWidth:this._isNumber(aj.minWidth)?aj.minWidth:0,maxWidth:this._isNumber(aj.maxWidth)?aj.maxWidth:Infinity,minHeight:this._isNumber(aj.minHeight)?aj.minHeight:0,maxHeight:this._isNumber(aj.maxHeight)?aj.maxHeight:Infinity};if(this._aspectRatio||ag){ai=ae.minHeight*this.aspectRatio;af=ae.minWidth/this.aspectRatio;ah=ae.maxHeight*this.aspectRatio;ak=ae.maxWidth/this.aspectRatio;if(ai>ae.minWidth){ae.minWidth=ai}if(af>ae.minHeight){ae.minHeight=af}if(ah<ae.maxWidth){ae.maxWidth=ah}if(ak<ae.maxHeight){ae.maxHeight=ak}}this._vBoundaries=ae},_updateCache:function(ae){this.offset=this.helper.offset();if(this._isNumber(ae.left)){this.position.left=ae.left}if(this._isNumber(ae.top)){this.position.top=ae.top}if(this._isNumber(ae.height)){this.size.height=ae.height}if(this._isNumber(ae.width)){this.size.width=ae.width}},_updateRatio:function(ag){var ah=this.position,af=this.size,ae=this.axis;if(this._isNumber(ag.height)){ag.width=(ag.height*this.aspectRatio)}else{if(this._isNumber(ag.width)){ag.height=(ag.width/this.aspectRatio)}}if(ae==="sw"){ag.left=ah.left+(af.width-ag.width);ag.top=null}if(ae==="nw"){ag.top=ah.top+(af.height-ag.height);ag.left=ah.left+(af.width-ag.width)}return ag},_respectSize:function(aj){var ag=this._vBoundaries,am=this.axis,ao=this._isNumber(aj.width)&&ag.maxWidth&&(ag.maxWidth<aj.width),ak=this._isNumber(aj.height)&&ag.maxHeight&&(ag.maxHeight<aj.height),ah=this._isNumber(aj.width)&&ag.minWidth&&(ag.minWidth>aj.width),an=this._isNumber(aj.height)&&ag.minHeight&&(ag.minHeight>aj.height),af=this.originalPosition.left+this.originalSize.width,al=this.position.top+this.size.height,ai=/sw|nw|w/.test(am),ae=/nw|ne|n/.test(am);if(ah){aj.width=ag.minWidth}if(an){aj.height=ag.minHeight}if(ao){aj.width=ag.maxWidth}if(ak){aj.height=ag.maxHeight}if(ah&&ai){aj.left=af-ag.minWidth}if(ao&&ai){aj.left=af-ag.maxWidth}if(an&&ae){aj.top=al-ag.minHeight}if(ak&&ae){aj.top=al-ag.maxHeight}if(!aj.width&&!aj.height&&!aj.left&&aj.top){aj.top=null}else{if(!aj.width&&!aj.height&&!aj.top&&aj.left){aj.left=null}}return aj},_getPaddingPlusBorderDimensions:function(ag){var af=0,ah=[],ai=[ag.css("borderTopWidth"),ag.css("borderRightWidth"),ag.css("borderBottomWidth"),ag.css("borderLeftWidth")],ae=[ag.css("paddingTop"),ag.css("paddingRight"),ag.css("paddingBottom"),ag.css("paddingLeft")];for(;af<4;af++){ah[af]=(parseInt(ai[af],10)||0);ah[af]+=(parseInt(ae[af],10)||0)}return{height:ah[0]+ah[2],width:ah[1]+ah[3]}},_proportionallyResize:function(){if(!this._proportionallyResizeElements.length){return}var ag,af=0,ae=this.helper||this.element;for(;af<this._proportionallyResizeElements.length;af++){ag=this._proportionallyResizeElements[af];if(!this.outerDimensions){this.outerDimensions=this._getPaddingPlusBorderDimensions(ag)}ag.css({height:(ae.height()-this.outerDimensions.height)||0,width:(ae.width()-this.outerDimensions.width)||0})}},_renderProxy:function(){var ae=this.element,af=this.options;this.elementOffset=ae.offset();if(this._helper){this.helper=this.helper||I("<div style='overflow:hidden;'></div>");this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++af.zIndex});this.helper.appendTo("body").disableSelection()}else{this.helper=this.element}},_change:{e:function(af,ae){return{width:this.originalSize.width+ae}},w:function(ag,ae){var af=this.originalSize,ah=this.originalPosition;return{left:ah.left+ae,width:af.width-ae}},n:function(ah,af,ae){var ag=this.originalSize,ai=this.originalPosition;return{top:ai.top+ae,height:ag.height-ae}},s:function(ag,af,ae){return{height:this.originalSize.height+ae}},se:function(ag,af,ae){return I.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[ag,af,ae]))},sw:function(ag,af,ae){return I.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[ag,af,ae]))},ne:function(ag,af,ae){return I.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[ag,af,ae]))},nw:function(ag,af,ae){return I.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[ag,af,ae]))}},_propagate:function(af,ae){I.ui.plugin.call(this,af,[ae,this.ui()]);(af!=="resize"&&this._trigger(af,ae,this.ui()))},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}});I.ui.plugin.add("resizable","animate",{stop:function(ah){var am=I(this).resizable("instance"),aj=am.options,ag=am._proportionallyResizeElements,ae=ag.length&&(/textarea/i).test(ag[0].nodeName),af=ae&&am._hasScroll(ag[0],"left")?0:am.sizeDiff.height,al=ae?0:am.sizeDiff.width,ai={width:(am.size.width-al),height:(am.size.height-af)},ak=(parseInt(am.element.css("left"),10)+(am.position.left-am.originalPosition.left))||null,an=(parseInt(am.element.css("top"),10)+(am.position.top-am.originalPosition.top))||null;am.element.animate(I.extend(ai,an&&ak?{top:an,left:ak}:{}),{duration:aj.animateDuration,easing:aj.animateEasing,step:function(){var ao={width:parseInt(am.element.css("width"),10),height:parseInt(am.element.css("height"),10),top:parseInt(am.element.css("top"),10),left:parseInt(am.element.css("left"),10)};if(ag&&ag.length){I(ag[0]).css({width:ao.width,height:ao.height})}am._updateCache(ao);am._propagate("resize",ah)}})}});I.ui.plugin.add("resizable","containment",{start:function(){var am,ag,ao,ae,al,ah,ap,an=I(this).resizable("instance"),ak=an.options,aj=an.element,af=ak.containment,ai=(af instanceof I)?af.get(0):(/parent/.test(af))?aj.parent().get(0):af;if(!ai){return}an.containerElement=I(ai);if(/document/.test(af)||af===document){an.containerOffset={left:0,top:0};an.containerPosition={left:0,top:0};an.parentData={element:I(document),left:0,top:0,width:I(document).width(),height:I(document).height()||document.body.parentNode.scrollHeight}}else{am=I(ai);ag=[];I(["Top","Right","Left","Bottom"]).each(function(ar,aq){ag[ar]=an._num(am.css("padding"+aq))});an.containerOffset=am.offset();an.containerPosition=am.position();an.containerSize={height:(am.innerHeight()-ag[3]),width:(am.innerWidth()-ag[1])};ao=an.containerOffset;ae=an.containerSize.height;al=an.containerSize.width;ah=(an._hasScroll(ai,"left")?ai.scrollWidth:al);ap=(an._hasScroll(ai)?ai.scrollHeight:ae);an.parentData={element:ai,left:ao.left,top:ao.top,width:ah,height:ap}}},resize:function(af){var al,aq,ak,ai,am=I(this).resizable("instance"),ah=am.options,ao=am.containerOffset,an=am.position,ap=am._aspectRatio||af.shiftKey,ae={top:0,left:0},ag=am.containerElement,aj=true;if(ag[0]!==document&&(/static/).test(ag.css("position"))){ae=ao}if(an.left<(am._helper?ao.left:0)){am.size.width=am.size.width+(am._helper?(am.position.left-ao.left):(am.position.left-ae.left));if(ap){am.size.height=am.size.width/am.aspectRatio;aj=false}am.position.left=ah.helper?ao.left:0}if(an.top<(am._helper?ao.top:0)){am.size.height=am.size.height+(am._helper?(am.position.top-ao.top):am.position.top);if(ap){am.size.width=am.size.height*am.aspectRatio;aj=false}am.position.top=am._helper?ao.top:0}ak=am.containerElement.get(0)===am.element.parent().get(0);ai=/relative|absolute/.test(am.containerElement.css("position"));if(ak&&ai){am.offset.left=am.parentData.left+am.position.left;am.offset.top=am.parentData.top+am.position.top}else{am.offset.left=am.element.offset().left;am.offset.top=am.element.offset().top}al=Math.abs(am.sizeDiff.width+(am._helper?am.offset.left-ae.left:(am.offset.left-ao.left)));aq=Math.abs(am.sizeDiff.height+(am._helper?am.offset.top-ae.top:(am.offset.top-ao.top)));if(al+am.size.width>=am.parentData.width){am.size.width=am.parentData.width-al;if(ap){am.size.height=am.size.width/am.aspectRatio;aj=false}}if(aq+am.size.height>=am.parentData.height){am.size.height=am.parentData.height-aq;if(ap){am.size.width=am.size.height*am.aspectRatio;aj=false}}if(!aj){am.position.left=am.prevPosition.left;am.position.top=am.prevPosition.top;am.size.width=am.prevSize.width;am.size.height=am.prevSize.height}},stop:function(){var aj=I(this).resizable("instance"),af=aj.options,ak=aj.containerOffset,ae=aj.containerPosition,ag=aj.containerElement,ah=I(aj.helper),am=ah.offset(),al=ah.outerWidth()-aj.sizeDiff.width,ai=ah.outerHeight()-aj.sizeDiff.height;if(aj._helper&&!af.animate&&(/relative/).test(ag.css("position"))){I(this).css({left:am.left-ae.left-ak.left,width:al,height:ai})}if(aj._helper&&!af.animate&&(/static/).test(ag.css("position"))){I(this).css({left:am.left-ae.left-ak.left,width:al,height:ai})}}});I.ui.plugin.add("resizable","alsoResize",{start:function(){var ae=I(this).resizable("instance"),af=ae.options;I(af.alsoResize).each(function(){var ag=I(this);ag.data("ui-resizable-alsoresize",{width:parseInt(ag.width(),10),height:parseInt(ag.height(),10),left:parseInt(ag.css("left"),10),top:parseInt(ag.css("top"),10)})})},resize:function(af,ah){var ae=I(this).resizable("instance"),ai=ae.options,ag=ae.originalSize,ak=ae.originalPosition,aj={height:(ae.size.height-ag.height)||0,width:(ae.size.width-ag.width)||0,top:(ae.position.top-ak.top)||0,left:(ae.position.left-ak.left)||0};I(ai.alsoResize).each(function(){var an=I(this),ao=I(this).data("ui-resizable-alsoresize"),am={},al=an.parents(ah.originalElement[0]).length?["width","height"]:["width","height","top","left"];I.each(al,function(ap,ar){var aq=(ao[ar]||0)+(aj[ar]||0);if(aq&&aq>=0){am[ar]=aq||null}});an.css(am)})},stop:function(){I(this).removeData("resizable-alsoresize")}});I.ui.plugin.add("resizable","ghost",{start:function(){var af=I(this).resizable("instance"),ag=af.options,ae=af.size;af.ghost=af.originalElement.clone();af.ghost.css({opacity:0.25,display:"block",position:"relative",height:ae.height,width:ae.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass(typeof ag.ghost==="string"?ag.ghost:"");af.ghost.appendTo(af.helper)},resize:function(){var ae=I(this).resizable("instance");if(ae.ghost){ae.ghost.css({position:"relative",height:ae.size.height,width:ae.size.width})}},stop:function(){var ae=I(this).resizable("instance");if(ae.ghost&&ae.helper){ae.helper.get(0).removeChild(ae.ghost.get(0))}}});I.ui.plugin.add("resizable","grid",{resize:function(){var ah,am=I(this).resizable("instance"),aq=am.options,ak=am.size,al=am.originalSize,an=am.originalPosition,aw=am.axis,ae=typeof aq.grid==="number"?[aq.grid,aq.grid]:aq.grid,au=(ae[0]||1),at=(ae[1]||1),aj=Math.round((ak.width-al.width)/au)*au,ai=Math.round((ak.height-al.height)/at)*at,ao=al.width+aj,ar=al.height+ai,ag=aq.maxWidth&&(aq.maxWidth<ao),ap=aq.maxHeight&&(aq.maxHeight<ar),av=aq.minWidth&&(aq.minWidth>ao),af=aq.minHeight&&(aq.minHeight>ar);aq.grid=ae;if(av){ao+=au}if(af){ar+=at}if(ag){ao-=au}if(ap){ar-=at}if(/^(se|s|e)$/.test(aw)){am.size.width=ao;am.size.height=ar}else{if(/^(ne)$/.test(aw)){am.size.width=ao;am.size.height=ar;am.position.top=an.top-ai}else{if(/^(sw)$/.test(aw)){am.size.width=ao;am.size.height=ar;am.position.left=an.left-aj}else{if(ar-at<=0||ao-au<=0){ah=am._getPaddingPlusBorderDimensions(this)}if(ar-at>0){am.size.height=ar;am.position.top=an.top-ai}else{ar=at-ah.height;am.size.height=ar;am.position.top=an.top+al.height-ar}if(ao-au>0){am.size.width=ao;am.position.left=an.left-aj}else{ao=au-ah.width;am.size.width=ao;am.position.left=an.left+al.width-ao}}}}}});var N=I.ui.resizable;
/*!
   * jQuery UI Selectable 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/selectable/
   */
var e=I.widget("ui.selectable",I.ui.mouse,{version:"1.11.4",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var af,ae=this;this.element.addClass("ui-selectable");this.dragged=false;this.refresh=function(){af=I(ae.options.filter,ae.element[0]);af.addClass("ui-selectee");af.each(function(){var ag=I(this),ah=ag.offset();I.data(this,"selectable-item",{element:this,$element:ag,left:ah.left,top:ah.top,right:ah.left+ag.outerWidth(),bottom:ah.top+ag.outerHeight(),startselected:false,selected:ag.hasClass("ui-selected"),selecting:ag.hasClass("ui-selecting"),unselecting:ag.hasClass("ui-unselecting")})})};this.refresh();this.selectees=af.addClass("ui-selectee");this._mouseInit();this.helper=I("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()},_mouseStart:function(ag){var af=this,ae=this.options;this.opos=[ag.pageX,ag.pageY];if(this.options.disabled){return}this.selectees=I(ae.filter,this.element[0]);this._trigger("start",ag);I(ae.appendTo).append(this.helper);this.helper.css({left:ag.pageX,top:ag.pageY,width:0,height:0});if(ae.autoRefresh){this.refresh()}this.selectees.filter(".ui-selected").each(function(){var ah=I.data(this,"selectable-item");ah.startselected=true;if(!ag.metaKey&&!ag.ctrlKey){ah.$element.removeClass("ui-selected");ah.selected=false;ah.$element.addClass("ui-unselecting");ah.unselecting=true;af._trigger("unselecting",ag,{unselecting:ah.element})}});I(ag.target).parents().addBack().each(function(){var ah,ai=I.data(this,"selectable-item");if(ai){ah=(!ag.metaKey&&!ag.ctrlKey)||!ai.$element.hasClass("ui-selected");ai.$element.removeClass(ah?"ui-unselecting":"ui-selected").addClass(ah?"ui-selecting":"ui-unselecting");ai.unselecting=!ah;ai.selecting=ah;ai.selected=ah;if(ah){af._trigger("selecting",ag,{selecting:ai.element})}else{af._trigger("unselecting",ag,{unselecting:ai.element})}return false}})},_mouseDrag:function(al){this.dragged=true;if(this.options.disabled){return}var ai,ak=this,ag=this.options,af=this.opos[0],aj=this.opos[1],ae=al.pageX,ah=al.pageY;if(af>ae){ai=ae;ae=af;af=ai}if(aj>ah){ai=ah;ah=aj;aj=ai}this.helper.css({left:af,top:aj,width:ae-af,height:ah-aj});this.selectees.each(function(){var am=I.data(this,"selectable-item"),an=false;if(!am||am.element===ak.element[0]){return}if(ag.tolerance==="touch"){an=(!(am.left>ae||am.right<af||am.top>ah||am.bottom<aj))}else{if(ag.tolerance==="fit"){an=(am.left>af&&am.right<ae&&am.top>aj&&am.bottom<ah)}}if(an){if(am.selected){am.$element.removeClass("ui-selected");am.selected=false}if(am.unselecting){am.$element.removeClass("ui-unselecting");am.unselecting=false}if(!am.selecting){am.$element.addClass("ui-selecting");am.selecting=true;ak._trigger("selecting",al,{selecting:am.element})}}else{if(am.selecting){if((al.metaKey||al.ctrlKey)&&am.startselected){am.$element.removeClass("ui-selecting");am.selecting=false;am.$element.addClass("ui-selected");am.selected=true}else{am.$element.removeClass("ui-selecting");am.selecting=false;if(am.startselected){am.$element.addClass("ui-unselecting");am.unselecting=true}ak._trigger("unselecting",al,{unselecting:am.element})}}if(am.selected){if(!al.metaKey&&!al.ctrlKey&&!am.startselected){am.$element.removeClass("ui-selected");am.selected=false;am.$element.addClass("ui-unselecting");am.unselecting=true;ak._trigger("unselecting",al,{unselecting:am.element})}}}});return false},_mouseStop:function(af){var ae=this;this.dragged=false;I(".ui-unselecting",this.element[0]).each(function(){var ag=I.data(this,"selectable-item");ag.$element.removeClass("ui-unselecting");ag.unselecting=false;ag.startselected=false;ae._trigger("unselected",af,{unselected:ag.element})});I(".ui-selecting",this.element[0]).each(function(){var ag=I.data(this,"selectable-item");ag.$element.removeClass("ui-selecting").addClass("ui-selected");ag.selecting=false;ag.selected=true;ag.startselected=true;ae._trigger("selected",af,{selected:ag.element})});this._trigger("stop",af);this.helper.remove();return false}});
/*!
   * jQuery UI Sortable 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/sortable/
   */
var C=I.widget("ui.sortable",I.ui.mouse,{version:"1.11.4",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(af,ae,ag){return(af>=ae)&&(af<(ae+ag))},_isFloating:function(ae){return(/left|right/).test(ae.css("float"))||(/inline|table-cell/).test(ae.css("display"))},_create:function(){this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.offset=this.element.offset();this._mouseInit();this._setHandleClassName();this.ready=true},_setOption:function(ae,af){this._super(ae,af);if(ae==="handle"){this._setHandleClassName()}},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");I.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");this._mouseDestroy();for(var ae=this.items.length-1;ae>=0;ae--){this.items[ae].item.removeData(this.widgetName+"-item")}return this},_mouseCapture:function(ag,ah){var ae=null,ai=false,af=this;if(this.reverting){return false}if(this.options.disabled||this.options.type==="static"){return false}this._refreshItems(ag);I(ag.target).parents().each(function(){if(I.data(this,af.widgetName+"-item")===af){ae=I(this);return false}});if(I.data(ag.target,af.widgetName+"-item")===af){ae=I(ag.target)}if(!ae){return false}if(this.options.handle&&!ah){I(this.options.handle,ae).find("*").addBack().each(function(){if(this===ag.target){ai=true}});if(!ai){return false}}this.currentItem=ae;this._removeCurrentsFromItems();return true},_mouseStart:function(ah,ai,af){var ag,ae,aj=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(ah);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};I.extend(this.offset,{click:{left:ah.pageX-this.offset.left,top:ah.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(ah);this.originalPageX=ah.pageX;this.originalPageY=ah.pageY;(aj.cursorAt&&this._adjustOffsetFromHelper(aj.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(aj.containment){this._setContainment()}if(aj.cursor&&aj.cursor!=="auto"){ae=this.document.find("body");this.storedCursor=ae.css("cursor");ae.css("cursor",aj.cursor);this.storedStylesheet=I("<style>*{ cursor: "+aj.cursor+" !important; }</style>").appendTo(ae)}if(aj.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",aj.opacity)}if(aj.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",aj.zIndex)}if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",ah,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!af){for(ag=this.containers.length-1;ag>=0;ag--){this.containers[ag]._trigger("activate",ah,this._uiHash(this))}}if(I.ui.ddmanager){I.ui.ddmanager.current=this}if(I.ui.ddmanager&&!aj.dropBehaviour){I.ui.ddmanager.prepareOffsets(this,ah)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(ah);return true},_mouseDrag:function(ai){var ag,ah,af,ak,aj=this.options,ae=false;this.position=this._generatePosition(ai);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){if(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-ai.pageY<aj.scrollSensitivity){this.scrollParent[0].scrollTop=ae=this.scrollParent[0].scrollTop+aj.scrollSpeed}else{if(ai.pageY-this.overflowOffset.top<aj.scrollSensitivity){this.scrollParent[0].scrollTop=ae=this.scrollParent[0].scrollTop-aj.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-ai.pageX<aj.scrollSensitivity){this.scrollParent[0].scrollLeft=ae=this.scrollParent[0].scrollLeft+aj.scrollSpeed}else{if(ai.pageX-this.overflowOffset.left<aj.scrollSensitivity){this.scrollParent[0].scrollLeft=ae=this.scrollParent[0].scrollLeft-aj.scrollSpeed}}}else{if(ai.pageY-this.document.scrollTop()<aj.scrollSensitivity){ae=this.document.scrollTop(this.document.scrollTop()-aj.scrollSpeed)}else{if(this.window.height()-(ai.pageY-this.document.scrollTop())<aj.scrollSensitivity){ae=this.document.scrollTop(this.document.scrollTop()+aj.scrollSpeed)}}if(ai.pageX-this.document.scrollLeft()<aj.scrollSensitivity){ae=this.document.scrollLeft(this.document.scrollLeft()-aj.scrollSpeed)}else{if(this.window.width()-(ai.pageX-this.document.scrollLeft())<aj.scrollSensitivity){ae=this.document.scrollLeft(this.document.scrollLeft()+aj.scrollSpeed)}}}if(ae!==false&&I.ui.ddmanager&&!aj.dropBehaviour){I.ui.ddmanager.prepareOffsets(this,ai)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"}for(ag=this.items.length-1;ag>=0;ag--){ah=this.items[ag];af=ah.item[0];ak=this._intersectsWithPointer(ah);if(!ak){continue}if(ah.instance!==this.currentContainer){continue}if(af!==this.currentItem[0]&&this.placeholder[ak===1?"next":"prev"]()[0]!==af&&!I.contains(this.placeholder[0],af)&&(this.options.type==="semi-dynamic"?!I.contains(this.element[0],af):true)){this.direction=ak===1?"down":"up";if(this.options.tolerance==="pointer"||this._intersectsWithSides(ah)){this._rearrange(ai,ah)}else{break}this._trigger("change",ai,this._uiHash());break}}this._contactContainers(ai);if(I.ui.ddmanager){I.ui.ddmanager.drag(this,ai)}this._trigger("sort",ai,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(ag,ai){if(!ag){return}if(I.ui.ddmanager&&!this.options.dropBehaviour){I.ui.ddmanager.drop(this,ag)}if(this.options.revert){var af=this,aj=this.placeholder.offset(),ae=this.options.axis,ah={};if(!ae||ae==="x"){ah.left=aj.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)}if(!ae||ae==="y"){ah.top=aj.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)}this.reverting=true;I(this.helper).animate(ah,parseInt(this.options.revert,10)||500,function(){af._clear(ag)})}else{this._clear(ag,ai)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var ae=this.containers.length-1;ae>=0;ae--){this.containers[ae]._trigger("deactivate",null,this._uiHash(this));if(this.containers[ae].containerCache.over){this.containers[ae]._trigger("out",null,this._uiHash(this));this.containers[ae].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}I.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){I(this.domPosition.prev).after(this.currentItem)}else{I(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(ag){var ae=this._getItemsAsjQuery(ag&&ag.connected),af=[];ag=ag||{};I(ae).each(function(){var ah=(I(ag.item||this).attr(ag.attribute||"id")||"").match(ag.expression||(/(.+)[\-=_](.+)/));if(ah){af.push((ag.key||ah[1]+"[]")+"="+(ag.key&&ag.expression?ah[1]:ah[2]))}});if(!af.length&&ag.key){af.push(ag.key+"=")}return af.join("&")},toArray:function(ag){var ae=this._getItemsAsjQuery(ag&&ag.connected),af=[];ag=ag||{};ae.each(function(){af.push(I(ag.item||this).attr(ag.attribute||"id")||"")});return af},_intersectsWith:function(ap){var ag=this.positionAbs.left,af=ag+this.helperProportions.width,an=this.positionAbs.top,am=an+this.helperProportions.height,ah=ap.left,ae=ah+ap.width,aq=ap.top,al=aq+ap.height,ar=this.offset.click.top,ak=this.offset.click.left,aj=(this.options.axis==="x")||((an+ar)>aq&&(an+ar)<al),ao=(this.options.axis==="y")||((ag+ak)>ah&&(ag+ak)<ae),ai=aj&&ao;if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>ap[this.floating?"width":"height"])){return ai}else{return(ah<ag+(this.helperProportions.width/2)&&af-(this.helperProportions.width/2)<ae&&aq<an+(this.helperProportions.height/2)&&am-(this.helperProportions.height/2)<al)}},_intersectsWithPointer:function(ag){var ah=(this.options.axis==="x")||this._isOverAxis(this.positionAbs.top+this.offset.click.top,ag.top,ag.height),af=(this.options.axis==="y")||this._isOverAxis(this.positionAbs.left+this.offset.click.left,ag.left,ag.width),aj=ah&&af,ae=this._getDragVerticalDirection(),ai=this._getDragHorizontalDirection();if(!aj){return false}return this.floating?(((ai&&ai==="right")||ae==="down")?2:1):(ae&&(ae==="down"?2:1))},_intersectsWithSides:function(ah){var af=this._isOverAxis(this.positionAbs.top+this.offset.click.top,ah.top+(ah.height/2),ah.height),ag=this._isOverAxis(this.positionAbs.left+this.offset.click.left,ah.left+(ah.width/2),ah.width),ae=this._getDragVerticalDirection(),ai=this._getDragHorizontalDirection();if(this.floating&&ai){return((ai==="right"&&ag)||(ai==="left"&&!ag))}else{return ae&&((ae==="down"&&af)||(ae==="up"&&!af))}},_getDragVerticalDirection:function(){var ae=this.positionAbs.top-this.lastPositionAbs.top;return ae!==0&&(ae>0?"down":"up")},_getDragHorizontalDirection:function(){var ae=this.positionAbs.left-this.lastPositionAbs.left;return ae!==0&&(ae>0?"right":"left")},refresh:function(ae){this._refreshItems(ae);this._setHandleClassName();this.refreshPositions();return this},_connectWith:function(){var ae=this.options;return ae.connectWith.constructor===String?[ae.connectWith]:ae.connectWith},_getItemsAsjQuery:function(ae){var ag,af,al,ai,aj=[],ah=[],ak=this._connectWith();if(ak&&ae){for(ag=ak.length-1;ag>=0;ag--){al=I(ak[ag],this.document[0]);for(af=al.length-1;af>=0;af--){ai=I.data(al[af],this.widgetFullName);if(ai&&ai!==this&&!ai.options.disabled){ah.push([I.isFunction(ai.options.items)?ai.options.items.call(ai.element):I(ai.options.items,ai.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),ai])}}}}ah.push([I.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):I(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);function am(){aj.push(this)}for(ag=ah.length-1;ag>=0;ag--){ah[ag][0].each(am)}return I(aj)},_removeCurrentsFromItems:function(){var ae=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=I.grep(this.items,function(ag){for(var af=0;af<ae.length;af++){if(ae[af]===ag.item[0]){return false}}return true})},_refreshItems:function(ae){this.items=[];this.containers=[this];var ai,ag,an,aj,am,af,ap,ao,ak=this.items,ah=[[I.isFunction(this.options.items)?this.options.items.call(this.element[0],ae,{item:this.currentItem}):I(this.options.items,this.element),this]],al=this._connectWith();if(al&&this.ready){for(ai=al.length-1;ai>=0;ai--){an=I(al[ai],this.document[0]);for(ag=an.length-1;ag>=0;ag--){aj=I.data(an[ag],this.widgetFullName);if(aj&&aj!==this&&!aj.options.disabled){ah.push([I.isFunction(aj.options.items)?aj.options.items.call(aj.element[0],ae,{item:this.currentItem}):I(aj.options.items,aj.element),aj]);this.containers.push(aj)}}}}for(ai=ah.length-1;ai>=0;ai--){am=ah[ai][1];af=ah[ai][0];for(ag=0,ao=af.length;ag<ao;ag++){ap=I(af[ag]);ap.data(this.widgetName+"-item",am);ak.push({item:ap,instance:am,width:0,height:0,left:0,top:0})}}},refreshPositions:function(ae){this.floating=this.items.length?this.options.axis==="x"||this._isFloating(this.items[0].item):false;if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}var ag,ah,af,ai;for(ag=this.items.length-1;ag>=0;ag--){ah=this.items[ag];if(ah.instance!==this.currentContainer&&this.currentContainer&&ah.item[0]!==this.currentItem[0]){continue}af=this.options.toleranceElement?I(this.options.toleranceElement,ah.item):ah.item;if(!ae){ah.width=af.outerWidth();ah.height=af.outerHeight()}ai=af.offset();ah.left=ai.left;ah.top=ai.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(ag=this.containers.length-1;ag>=0;ag--){ai=this.containers[ag].element.offset();this.containers[ag].containerCache.left=ai.left;this.containers[ag].containerCache.top=ai.top;this.containers[ag].containerCache.width=this.containers[ag].element.outerWidth();this.containers[ag].containerCache.height=this.containers[ag].element.outerHeight()}}return this},_createPlaceholder:function(af){af=af||this;var ae,ag=af.options;if(!ag.placeholder||ag.placeholder.constructor===String){ae=ag.placeholder;ag.placeholder={element:function(){var ai=af.currentItem[0].nodeName.toLowerCase(),ah=I("<"+ai+">",af.document[0]).addClass(ae||af.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");if(ai==="tbody"){af._createTrPlaceholder(af.currentItem.find("tr").eq(0),I("<tr>",af.document[0]).appendTo(ah))}else{if(ai==="tr"){af._createTrPlaceholder(af.currentItem,ah)}else{if(ai==="img"){ah.attr("src",af.currentItem.attr("src"))}}}if(!ae){ah.css("visibility","hidden")}return ah},update:function(ah,ai){if(ae&&!ag.forcePlaceholderSize){return}if(!ai.height()){ai.height(af.currentItem.innerHeight()-parseInt(af.currentItem.css("paddingTop")||0,10)-parseInt(af.currentItem.css("paddingBottom")||0,10))}if(!ai.width()){ai.width(af.currentItem.innerWidth()-parseInt(af.currentItem.css("paddingLeft")||0,10)-parseInt(af.currentItem.css("paddingRight")||0,10))}}}}af.placeholder=I(ag.placeholder.element.call(af.element,af.currentItem));af.currentItem.after(af.placeholder);ag.placeholder.update(af,af.placeholder)},_createTrPlaceholder:function(af,ae){var ag=this;af.children().each(function(){I("<td>&#160;</td>",ag.document[0]).attr("colspan",I(this).attr("colspan")||1).appendTo(ae)})},_contactContainers:function(ae){var aj,ah,an,ak,al,ap,aq,ai,am,ag,af=null,ao=null;for(aj=this.containers.length-1;aj>=0;aj--){if(I.contains(this.currentItem[0],this.containers[aj].element[0])){continue}if(this._intersectsWith(this.containers[aj].containerCache)){if(af&&I.contains(this.containers[aj].element[0],af.element[0])){continue}af=this.containers[aj];ao=aj}else{if(this.containers[aj].containerCache.over){this.containers[aj]._trigger("out",ae,this._uiHash(this));this.containers[aj].containerCache.over=0}}}if(!af){return}if(this.containers.length===1){if(!this.containers[ao].containerCache.over){this.containers[ao]._trigger("over",ae,this._uiHash(this));this.containers[ao].containerCache.over=1}}else{an=10000;ak=null;am=af.floating||this._isFloating(this.currentItem);al=am?"left":"top";ap=am?"width":"height";ag=am?"clientX":"clientY";for(ah=this.items.length-1;ah>=0;ah--){if(!I.contains(this.containers[ao].element[0],this.items[ah].item[0])){continue}if(this.items[ah].item[0]===this.currentItem[0]){continue}aq=this.items[ah].item.offset()[al];ai=false;if(ae[ag]-aq>this.items[ah][ap]/2){ai=true}if(Math.abs(ae[ag]-aq)<an){an=Math.abs(ae[ag]-aq);ak=this.items[ah];this.direction=ai?"up":"down"}}if(!ak&&!this.options.dropOnEmpty){return}if(this.currentContainer===this.containers[ao]){if(!this.currentContainer.containerCache.over){this.containers[ao]._trigger("over",ae,this._uiHash());this.currentContainer.containerCache.over=1}return}ak?this._rearrange(ae,ak,null,true):this._rearrange(ae,null,this.containers[ao].element,true);this._trigger("change",ae,this._uiHash());this.containers[ao]._trigger("change",ae,this._uiHash(this));this.currentContainer=this.containers[ao];this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[ao]._trigger("over",ae,this._uiHash(this));this.containers[ao].containerCache.over=1}},_createHelper:function(af){var ag=this.options,ae=I.isFunction(ag.helper)?I(ag.helper.apply(this.element[0],[af,this.currentItem])):(ag.helper==="clone"?this.currentItem.clone():this.currentItem);if(!ae.parents("body").length){I(ag.appendTo!=="parent"?ag.appendTo:this.currentItem[0].parentNode)[0].appendChild(ae[0])}if(ae[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(!ae[0].style.width||ag.forceHelperSize){ae.width(this.currentItem.width())}if(!ae[0].style.height||ag.forceHelperSize){ae.height(this.currentItem.height())}return ae},_adjustOffsetFromHelper:function(ae){if(typeof ae==="string"){ae=ae.split(" ")}if(I.isArray(ae)){ae={left:+ae[0],top:+ae[1]||0}}if("left" in ae){this.offset.click.left=ae.left+this.margins.left}if("right" in ae){this.offset.click.left=this.helperProportions.width-ae.right+this.margins.left}if("top" in ae){this.offset.click.top=ae.top+this.margins.top}if("bottom" in ae){this.offset.click.top=this.helperProportions.height-ae.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var ae=this.offsetParent.offset();if(this.cssPosition==="absolute"&&this.scrollParent[0]!==this.document[0]&&I.contains(this.scrollParent[0],this.offsetParent[0])){ae.left+=this.scrollParent.scrollLeft();ae.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===this.document[0].body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&I.ui.ie)){ae={top:0,left:0}}return{top:ae.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:ae.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var ae=this.currentItem.position();return{top:ae.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:ae.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var af,ah,ae,ag=this.options;if(ag.containment==="parent"){ag.containment=this.helper[0].parentNode}if(ag.containment==="document"||ag.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,ag.containment==="document"?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,(ag.containment==="document"?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(ag.containment)){af=I(ag.containment)[0];ah=I(ag.containment).offset();ae=(I(af).css("overflow")!=="hidden");this.containment=[ah.left+(parseInt(I(af).css("borderLeftWidth"),10)||0)+(parseInt(I(af).css("paddingLeft"),10)||0)-this.margins.left,ah.top+(parseInt(I(af).css("borderTopWidth"),10)||0)+(parseInt(I(af).css("paddingTop"),10)||0)-this.margins.top,ah.left+(ae?Math.max(af.scrollWidth,af.offsetWidth):af.offsetWidth)-(parseInt(I(af).css("borderLeftWidth"),10)||0)-(parseInt(I(af).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,ah.top+(ae?Math.max(af.scrollHeight,af.offsetHeight):af.offsetHeight)-(parseInt(I(af).css("borderTopWidth"),10)||0)-(parseInt(I(af).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(ag,ai){if(!ai){ai=this.position}var af=ag==="absolute"?1:-1,ae=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&I.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,ah=(/(html|body)/i).test(ae[0].tagName);return{top:(ai.top+this.offset.relative.top*af+this.offset.parent.top*af-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(ah?0:ae.scrollTop()))*af)),left:(ai.left+this.offset.relative.left*af+this.offset.parent.left*af-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():ah?0:ae.scrollLeft())*af))}},_generatePosition:function(ah){var aj,ai,ak=this.options,ag=ah.pageX,af=ah.pageY,ae=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==this.document[0]&&I.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,al=(/(html|body)/i).test(ae[0].tagName);if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}if(this.originalPosition){if(this.containment){if(ah.pageX-this.offset.click.left<this.containment[0]){ag=this.containment[0]+this.offset.click.left}if(ah.pageY-this.offset.click.top<this.containment[1]){af=this.containment[1]+this.offset.click.top}if(ah.pageX-this.offset.click.left>this.containment[2]){ag=this.containment[2]+this.offset.click.left}if(ah.pageY-this.offset.click.top>this.containment[3]){af=this.containment[3]+this.offset.click.top}}if(ak.grid){aj=this.originalPageY+Math.round((af-this.originalPageY)/ak.grid[1])*ak.grid[1];af=this.containment?((aj-this.offset.click.top>=this.containment[1]&&aj-this.offset.click.top<=this.containment[3])?aj:((aj-this.offset.click.top>=this.containment[1])?aj-ak.grid[1]:aj+ak.grid[1])):aj;ai=this.originalPageX+Math.round((ag-this.originalPageX)/ak.grid[0])*ak.grid[0];ag=this.containment?((ai-this.offset.click.left>=this.containment[0]&&ai-this.offset.click.left<=this.containment[2])?ai:((ai-this.offset.click.left>=this.containment[0])?ai-ak.grid[0]:ai+ak.grid[0])):ai}}return{top:(af-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(al?0:ae.scrollTop())))),left:(ag-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():al?0:ae.scrollLeft())))}},_rearrange:function(ai,ah,af,ag){af?af[0].appendChild(this.placeholder[0]):ah.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?ah.item[0]:ah.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var ae=this.counter;this._delay(function(){if(ae===this.counter){this.refreshPositions(!ag)}})},_clear:function(af,ah){this.reverting=false;var ae,ai=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(ae in this._storedCSS){if(this._storedCSS[ae]==="auto"||this._storedCSS[ae]==="static"){this._storedCSS[ae]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!ah){ai.push(function(aj){this._trigger("receive",aj,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!ah){ai.push(function(aj){this._trigger("update",aj,this._uiHash())})}if(this!==this.currentContainer){if(!ah){ai.push(function(aj){this._trigger("remove",aj,this._uiHash())});ai.push((function(aj){return function(ak){aj._trigger("receive",ak,this._uiHash(this))}}).call(this,this.currentContainer));ai.push((function(aj){return function(ak){aj._trigger("update",ak,this._uiHash(this))}}).call(this,this.currentContainer))}}function ag(al,aj,ak){return function(am){ak._trigger(al,am,aj._uiHash(aj))}}for(ae=this.containers.length-1;ae>=0;ae--){if(!ah){ai.push(ag("deactivate",this,this.containers[ae]))}if(this.containers[ae].containerCache.over){ai.push(ag("out",this,this.containers[ae]));this.containers[ae].containerCache.over=0}}if(this.storedCursor){this.document.find("body").css("cursor",this.storedCursor);this.storedStylesheet.remove()}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)}this.dragging=false;if(!ah){this._trigger("beforeStop",af,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(!this.cancelHelperRemoval){if(this.helper[0]!==this.currentItem[0]){this.helper.remove()}this.helper=null}if(!ah){for(ae=0;ae<ai.length;ae++){ai[ae].call(this,af)}this._trigger("stop",af,this._uiHash())}this.fromOutside=false;return !this.cancelHelperRemoval},_trigger:function(){if(I.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(ae){var af=ae||this;return{helper:af.helper,placeholder:af.placeholder||I([]),position:af.position,originalPosition:af.originalPosition,offset:af.positionAbs,item:af.currentItem,sender:ae?ae.element:null}}});
/*!
   * jQuery UI Accordion 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/accordion/
   */
var ad=I.widget("ui.accordion",{version:"1.11.4",options:{active:0,animate:{},collapsible:false,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var ae=this.options;this.prevShow=this.prevHide=I();this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist");if(!ae.collapsible&&(ae.active===false||ae.active==null)){ae.active=0}this._processPanels();if(ae.active<0){ae.active+=this.headers.length}this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:!this.active.length?I():this.active.next()}},_createIcons:function(){var ae=this.options.icons;if(ae){I("<span>").addClass("ui-accordion-header-icon ui-icon "+ae.header).prependTo(this.headers);this.active.children(".ui-accordion-header-icon").removeClass(ae.header).addClass(ae.activeHeader);this.headers.addClass("ui-accordion-icons")}},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var ae;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();this._destroyIcons();ae=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();if(this.options.heightStyle!=="content"){ae.css("height","")}},_setOption:function(ae,af){if(ae==="active"){this._activate(af);return}if(ae==="event"){if(this.options.event){this._off(this.headers,this.options.event)}this._setupEvents(af)}this._super(ae,af);if(ae==="collapsible"&&!af&&this.options.active===false){this._activate(0)}if(ae==="icons"){this._destroyIcons();if(af){this._createIcons()}}if(ae==="disabled"){this.element.toggleClass("ui-state-disabled",!!af).attr("aria-disabled",af);this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!af)}},_keydown:function(ah){if(ah.altKey||ah.ctrlKey){return}var ai=I.ui.keyCode,ag=this.headers.length,ae=this.headers.index(ah.target),af=false;switch(ah.keyCode){case ai.RIGHT:case ai.DOWN:af=this.headers[(ae+1)%ag];break;case ai.LEFT:case ai.UP:af=this.headers[(ae-1+ag)%ag];break;case ai.SPACE:case ai.ENTER:this._eventHandler(ah);break;case ai.HOME:af=this.headers[0];break;case ai.END:af=this.headers[ag-1];break}if(af){I(ah.target).attr("tabIndex",-1);I(af).attr("tabIndex",0);af.focus();ah.preventDefault()}},_panelKeyDown:function(ae){if(ae.keyCode===I.ui.keyCode.UP&&ae.ctrlKey){I(ae.currentTarget).prev().focus()}},refresh:function(){var ae=this.options;this._processPanels();if((ae.active===false&&ae.collapsible===true)||!this.headers.length){ae.active=false;this.active=I()}else{if(ae.active===false){this._activate(0)}else{if(this.active.length&&!I.contains(this.element[0],this.active[0])){if(this.headers.length===this.headers.find(".ui-state-disabled").length){ae.active=false;this.active=I()}else{this._activate(Math.max(0,ae.active-1))}}else{ae.active=this.headers.index(this.active)}}}this._destroyIcons();this._refresh()},_processPanels:function(){var af=this.headers,ae=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();if(ae){this._off(af.not(this.headers));this._off(ae.not(this.panels))}},_refresh:function(){var ah,af=this.options,ae=af.heightStyle,ag=this.element.parent();this.active=this._findActive(af.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");this.active.next().addClass("ui-accordion-content-active").show();this.headers.attr("role","tab").each(function(){var al=I(this),ak=al.uniqueId().attr("id"),ai=al.next(),aj=ai.uniqueId().attr("id");al.attr("aria-controls",aj);ai.attr("aria-labelledby",ak)}).next().attr("role","tabpanel");this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide();if(!this.active.length){this.headers.eq(0).attr("tabIndex",0)}else{this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"})}this._createIcons();this._setupEvents(af.event);if(ae==="fill"){ah=ag.height();this.element.siblings(":visible").each(function(){var aj=I(this),ai=aj.css("position");if(ai==="absolute"||ai==="fixed"){return}ah-=aj.outerHeight(true)});this.headers.each(function(){ah-=I(this).outerHeight(true)});this.headers.next().each(function(){I(this).height(Math.max(0,ah-I(this).innerHeight()+I(this).height()))}).css("overflow","auto")}else{if(ae==="auto"){ah=0;this.headers.next().each(function(){ah=Math.max(ah,I(this).css("height","").height())}).height(ah)}}},_activate:function(ae){var af=this._findActive(ae)[0];if(af===this.active[0]){return}af=af||this.active[0];this._eventHandler({target:af,currentTarget:af,preventDefault:I.noop})},_findActive:function(ae){return typeof ae==="number"?this.headers.eq(ae):I()},_setupEvents:function(af){var ae={keydown:"_keydown"};if(af){I.each(af.split(" "),function(ah,ag){ae[ag]="_eventHandler"})}this._off(this.headers.add(this.headers.next()));this._on(this.headers,ae);this._on(this.headers.next(),{keydown:"_panelKeyDown"});this._hoverable(this.headers);this._focusable(this.headers)},_eventHandler:function(ae){var am=this.options,ah=this.active,ai=I(ae.currentTarget),ak=ai[0]===ah[0],af=ak&&am.collapsible,ag=af?I():ai.next(),aj=ah.next(),al={oldHeader:ah,oldPanel:aj,newHeader:af?I():ai,newPanel:ag};ae.preventDefault();if((ak&&!am.collapsible)||(this._trigger("beforeActivate",ae,al)===false)){return}am.active=af?false:this.headers.index(ai);this.active=ak?I():ai;this._toggle(al);ah.removeClass("ui-accordion-header-active ui-state-active");if(am.icons){ah.children(".ui-accordion-header-icon").removeClass(am.icons.activeHeader).addClass(am.icons.header)}if(!ak){ai.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top");if(am.icons){ai.children(".ui-accordion-header-icon").removeClass(am.icons.header).addClass(am.icons.activeHeader)}ai.next().addClass("ui-accordion-content-active")}},_toggle:function(ag){var ae=ag.newPanel,af=this.prevShow.length?this.prevShow:ag.oldPanel;this.prevShow.add(this.prevHide).stop(true,true);this.prevShow=ae;this.prevHide=af;if(this.options.animate){this._animate(ae,af,ag)}else{af.hide();ae.show();this._toggleComplete(ag)}af.attr({"aria-hidden":"true"});af.prev().attr({"aria-selected":"false","aria-expanded":"false"});if(ae.length&&af.length){af.prev().attr({tabIndex:-1,"aria-expanded":"false"})}else{if(ae.length){this.headers.filter(function(){return parseInt(I(this).attr("tabIndex"),10)===0}).attr("tabIndex",-1)}}ae.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(ae,an,aj){var am,al,ai,ak=this,ao=0,ah=ae.css("box-sizing"),ap=ae.length&&(!an.length||(ae.index()<an.index())),ag=this.options.animate||{},aq=ap&&ag.down||ag,af=function(){ak._toggleComplete(aj)};if(typeof aq==="number"){ai=aq}if(typeof aq==="string"){al=aq}al=al||aq.easing||ag.easing;ai=ai||aq.duration||ag.duration;if(!an.length){return ae.animate(this.showProps,ai,al,af)}if(!ae.length){return an.animate(this.hideProps,ai,al,af)}am=ae.show().outerHeight();an.animate(this.hideProps,{duration:ai,easing:al,step:function(ar,at){at.now=Math.round(ar)}});ae.hide().animate(this.showProps,{duration:ai,easing:al,complete:af,step:function(ar,at){at.now=Math.round(ar);if(at.prop!=="height"){if(ah==="content-box"){ao+=at.now}}else{if(ak.options.heightStyle!=="content"){at.now=Math.round(am-an.outerHeight()-ao);ao=0}}}})},_toggleComplete:function(af){var ae=af.oldPanel;ae.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");if(ae.length){ae.parent()[0].className=ae.parent()[0].className}this._trigger("activate",null,af)}});
/*!
   * jQuery UI Menu 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/menu/
   */
var aa=I.widget("ui.menu",{version:"1.11.4",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;this.mouseHandled=false;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0});if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")}this._on({"mousedown .ui-menu-item":function(ae){ae.preventDefault()},"click .ui-menu-item":function(ae){var af=I(ae.target);if(!this.mouseHandled&&af.not(".ui-state-disabled").length){this.select(ae);if(!ae.isPropagationStopped()){this.mouseHandled=true}if(af.has(".ui-menu").length){this.expand(ae)}else{if(!this.element.is(":focus")&&I(this.document[0].activeElement).closest(".ui-menu").length){this.element.trigger("focus",[true]);if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)}}}}},"mouseenter .ui-menu-item":function(ae){if(this.previousFilter){return}var af=I(ae.currentTarget);af.siblings(".ui-state-active").removeClass("ui-state-active");this.focus(ae,af)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(ag,ae){var af=this.active||this.element.find(this.options.items).eq(0);if(!ae){this.focus(ag,af)}},blur:function(ae){this._delay(function(){if(!I.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(ae)}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(ae){if(this._closeOnDocumentClick(ae)){this.collapseAll(ae)}this.mouseHandled=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var ae=I(this);if(ae.data("ui-menu-submenu-carat")){ae.remove()}});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(ai){var af,ah,aj,ag,ae=true;switch(ai.keyCode){case I.ui.keyCode.PAGE_UP:this.previousPage(ai);break;case I.ui.keyCode.PAGE_DOWN:this.nextPage(ai);break;case I.ui.keyCode.HOME:this._move("first","first",ai);break;case I.ui.keyCode.END:this._move("last","last",ai);break;case I.ui.keyCode.UP:this.previous(ai);break;case I.ui.keyCode.DOWN:this.next(ai);break;case I.ui.keyCode.LEFT:this.collapse(ai);break;case I.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(ai)}break;case I.ui.keyCode.ENTER:case I.ui.keyCode.SPACE:this._activate(ai);break;case I.ui.keyCode.ESCAPE:this.collapse(ai);break;default:ae=false;ah=this.previousFilter||"";aj=String.fromCharCode(ai.keyCode);ag=false;clearTimeout(this.filterTimer);if(aj===ah){ag=true}else{aj=ah+aj}af=this._filterMenuItems(aj);af=ag&&af.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):af;if(!af.length){aj=String.fromCharCode(ai.keyCode);af=this._filterMenuItems(aj)}if(af.length){this.focus(ai,af);this.previousFilter=aj;this.filterTimer=this._delay(function(){delete this.previousFilter},1000)}else{delete this.previousFilter}}if(ae){ai.preventDefault()}},_activate:function(ae){if(!this.active.is(".ui-state-disabled")){if(this.active.is("[aria-haspopup='true']")){this.expand(ae)}else{this.select(ae)}}},refresh:function(){var ai,af,ah=this,ag=this.options.icons.submenu,ae=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length);ae.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var al=I(this),ak=al.parent(),aj=I("<span>").addClass("ui-menu-icon ui-icon "+ag).data("ui-menu-submenu-carat",true);ak.attr("aria-haspopup","true").prepend(aj);al.attr("aria-labelledby",ak.attr("id"))});ai=ae.add(this.element);af=ai.find(this.options.items);af.not(".ui-menu-item").each(function(){var aj=I(this);if(ah._isDivider(aj)){aj.addClass("ui-widget-content ui-menu-divider")}});af.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()});af.filter(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!I.contains(this.element[0],this.active[0])){this.blur()}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(ae,af){if(ae==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(af.submenu)}if(ae==="disabled"){this.element.toggleClass("ui-state-disabled",!!af).attr("aria-disabled",af)}this._super(ae,af)},focus:function(af,ae){var ah,ag;this.blur(af,af&&af.type==="focus");this._scrollIntoView(ae);this.active=ae.first();ag=this.active.addClass("ui-state-focus").removeClass("ui-state-active");if(this.options.role){this.element.attr("aria-activedescendant",ag.attr("id"))}this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");if(af&&af.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()},this.delay)}ah=ae.children(".ui-menu");if(ah.length&&af&&(/^mouse/.test(af.type))){this._startOpening(ah)}this.activeMenu=ae.parent();this._trigger("focus",af,{item:ae})},_scrollIntoView:function(ah){var ak,ag,ai,ae,af,aj;if(this._hasScroll()){ak=parseFloat(I.css(this.activeMenu[0],"borderTopWidth"))||0;ag=parseFloat(I.css(this.activeMenu[0],"paddingTop"))||0;ai=ah.offset().top-this.activeMenu.offset().top-ak-ag;ae=this.activeMenu.scrollTop();af=this.activeMenu.height();aj=ah.outerHeight();if(ai<0){this.activeMenu.scrollTop(ae+ai)}else{if(ai+aj>af){this.activeMenu.scrollTop(ae+ai-af+aj)}}}},blur:function(af,ae){if(!ae){clearTimeout(this.timer)}if(!this.active){return}this.active.removeClass("ui-state-focus");this.active=null;this._trigger("blur",af,{item:this.active})},_startOpening:function(ae){clearTimeout(this.timer);if(ae.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close();this._open(ae)},this.delay)},_open:function(af){var ae=I.extend({of:this.active},this.options.position);clearTimeout(this.timer);this.element.find(".ui-menu").not(af.parents(".ui-menu")).hide().attr("aria-hidden","true");af.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(ae)},collapseAll:function(af,ae){clearTimeout(this.timer);this.timer=this._delay(function(){var ag=ae?this.element:I(af&&af.target).closest(this.element.find(".ui-menu"));if(!ag.length){ag=this.element}this._close(ag);this.blur(af);this.activeMenu=ag},this.delay)},_close:function(ae){if(!ae){ae=this.active?this.active.parent():this.element}ae.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(ae){return !I(ae.target).closest(".ui-menu").length},_isDivider:function(ae){return !/[^\-\u2014\u2013\s]/.test(ae.text())},collapse:function(af){var ae=this.active&&this.active.parent().closest(".ui-menu-item",this.element);if(ae&&ae.length){this._close();this.focus(af,ae)}},expand:function(af){var ae=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();if(ae&&ae.length){this._open(ae.parent());this._delay(function(){this.focus(af,ae)})}},next:function(ae){this._move("next","first",ae)},previous:function(ae){this._move("prev","last",ae)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(ah,af,ag){var ae;if(this.active){if(ah==="first"||ah==="last"){ae=this.active[ah==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)}else{ae=this.active[ah+"All"](".ui-menu-item").eq(0)}}if(!ae||!ae.length||!this.active){ae=this.activeMenu.find(this.options.items)[af]()}this.focus(ag,ae)},nextPage:function(ag){var af,ah,ae;if(!this.active){this.next(ag);return}if(this.isLastItem()){return}if(this._hasScroll()){ah=this.active.offset().top;ae=this.element.height();this.active.nextAll(".ui-menu-item").each(function(){af=I(this);return af.offset().top-ah-ae<0});this.focus(ag,af)}else{this.focus(ag,this.activeMenu.find(this.options.items)[!this.active?"first":"last"]())}},previousPage:function(ag){var af,ah,ae;if(!this.active){this.next(ag);return}if(this.isFirstItem()){return}if(this._hasScroll()){ah=this.active.offset().top;ae=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){af=I(this);return af.offset().top-ah+ae>0});this.focus(ag,af)}else{this.focus(ag,this.activeMenu.find(this.options.items).first())}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(ae){this.active=this.active||I(ae.target).closest(".ui-menu-item");var af={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(ae,true)}this._trigger("select",ae,af)},_filterMenuItems:function(ag){var ae=ag.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),af=new RegExp("^"+ae,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return af.test(I.trim(I(this).text()))})}});
/*!
   * jQuery UI Autocomplete 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/autocomplete/
   */
I.widget("ui.autocomplete",{version:"1.11.4",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var ag,ae,ah,aj=this.element[0].nodeName.toLowerCase(),ai=aj==="textarea",af=aj==="input";this.isMultiLine=ai?true:af?false:this.element.prop("isContentEditable");this.valueMethod=this.element[ai||af?"val":"text"];this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");this._on(this.element,{keydown:function(ak){if(this.element.prop("readOnly")){ag=true;ah=true;ae=true;return}ag=false;ah=false;ae=false;var al=I.ui.keyCode;switch(ak.keyCode){case al.PAGE_UP:ag=true;this._move("previousPage",ak);break;case al.PAGE_DOWN:ag=true;this._move("nextPage",ak);break;case al.UP:ag=true;this._keyEvent("previous",ak);break;case al.DOWN:ag=true;this._keyEvent("next",ak);break;case al.ENTER:if(this.menu.active){ag=true;ak.preventDefault();this.menu.select(ak)}break;case al.TAB:if(this.menu.active){this.menu.select(ak)}break;case al.ESCAPE:if(this.menu.element.is(":visible")){if(!this.isMultiLine){this._value(this.term)}this.close(ak);ak.preventDefault()}break;default:ae=true;this._searchTimeout(ak);break}},keypress:function(ak){if(ag){ag=false;if(!this.isMultiLine||this.menu.element.is(":visible")){ak.preventDefault()}return}if(ae){return}var al=I.ui.keyCode;switch(ak.keyCode){case al.PAGE_UP:this._move("previousPage",ak);break;case al.PAGE_DOWN:this._move("nextPage",ak);break;case al.UP:this._keyEvent("previous",ak);break;case al.DOWN:this._keyEvent("next",ak);break}},input:function(ak){if(ah){ah=false;ak.preventDefault();return}this._searchTimeout(ak)},focus:function(){this.selectedItem=null;this.previous=this._value()},blur:function(ak){if(this.cancelBlur){delete this.cancelBlur;return}clearTimeout(this.searching);this.close(ak);this._change(ak)}});this._initSource();this.menu=I("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance");this._on(this.menu.element,{mousedown:function(ak){ak.preventDefault();this.cancelBlur=true;this._delay(function(){delete this.cancelBlur});var al=this.menu.element[0];if(!I(ak.target).closest(".ui-menu-item").length){this._delay(function(){var am=this;this.document.one("mousedown",function(an){if(an.target!==am.element[0]&&an.target!==al&&!I.contains(al,an.target)){am.close()}})})}},menufocus:function(am,an){var ak,al;if(this.isNewMenu){this.isNewMenu=false;if(am.originalEvent&&/^mouse/.test(am.originalEvent.type)){this.menu.blur();this.document.one("mousemove",function(){I(am.target).trigger(am.originalEvent)});return}}al=an.item.data("ui-autocomplete-item");if(false!==this._trigger("focus",am,{item:al})){if(am.originalEvent&&/^key/.test(am.originalEvent.type)){this._value(al.value)}}ak=an.item.attr("aria-label")||al.value;if(ak&&I.trim(ak).length){this.liveRegion.children().hide();I("<div>").text(ak).appendTo(this.liveRegion)}},menuselect:function(am,an){var al=an.item.data("ui-autocomplete-item"),ak=this.previous;if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=ak;this._delay(function(){this.previous=ak;this.selectedItem=al})}if(false!==this._trigger("select",am,{item:al})){this._value(al.value)}this.term=this._value();this.close(am);this.selectedItem=al}});this.liveRegion=I("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");this.menu.element.remove();this.liveRegion.remove()},_setOption:function(ae,af){this._super(ae,af);if(ae==="source"){this._initSource()}if(ae==="appendTo"){this.menu.element.appendTo(this._appendTo())}if(ae==="disabled"&&af&&this.xhr){this.xhr.abort()}},_appendTo:function(){var ae=this.options.appendTo;if(ae){ae=ae.jquery||ae.nodeType?I(ae):this.document.find(ae).eq(0)}if(!ae||!ae[0]){ae=this.element.closest(".ui-front")}if(!ae.length){ae=this.document[0].body}return ae},_initSource:function(){var ag,ae,af=this;if(I.isArray(this.options.source)){ag=this.options.source;this.source=function(ai,ah){ah(I.ui.autocomplete.filter(ag,ai.term))}}else{if(typeof this.options.source==="string"){ae=this.options.source;this.source=function(ai,ah){if(af.xhr){af.xhr.abort()}af.xhr=I.ajax({url:ae,data:ai,dataType:"json",success:function(aj){ah(aj)},error:function(){ah([])}})}}else{this.source=this.options.source}}},_searchTimeout:function(ae){clearTimeout(this.searching);this.searching=this._delay(function(){var ag=this.term===this._value(),af=this.menu.element.is(":visible"),ah=ae.altKey||ae.ctrlKey||ae.metaKey||ae.shiftKey;if(!ag||(ag&&!af&&!ah)){this.selectedItem=null;this.search(null,ae)}},this.options.delay)},search:function(af,ae){af=af!=null?af:this._value();this.term=this._value();if(af.length<this.options.minLength){return this.close(ae)}if(this._trigger("search",ae)===false){return}return this._search(af)},_search:function(ae){this.pending++;this.element.addClass("ui-autocomplete-loading");this.cancelSearch=false;this.source({term:ae},this._response())},_response:function(){var ae=++this.requestIndex;return I.proxy(function(af){if(ae===this.requestIndex){this.__response(af)}this.pending--;if(!this.pending){this.element.removeClass("ui-autocomplete-loading")}},this)},__response:function(ae){if(ae){ae=this._normalize(ae)}this._trigger("response",null,{content:ae});if(!this.options.disabled&&ae&&ae.length&&!this.cancelSearch){this._suggest(ae);this._trigger("open")}else{this._close()}},close:function(ae){this.cancelSearch=true;this._close(ae)},_close:function(ae){if(this.menu.element.is(":visible")){this.menu.element.hide();this.menu.blur();this.isNewMenu=true;this._trigger("close",ae)}},_change:function(ae){if(this.previous!==this._value()){this._trigger("change",ae,{item:this.selectedItem})}},_normalize:function(ae){if(ae.length&&ae[0].label&&ae[0].value){return ae}return I.map(ae,function(af){if(typeof af==="string"){return{label:af,value:af}}return I.extend({},af,{label:af.label||af.value,value:af.value||af.label})})},_suggest:function(ae){var af=this.menu.element.empty();this._renderMenu(af,ae);this.isNewMenu=true;this.menu.refresh();af.show();this._resizeMenu();af.position(I.extend({of:this.element},this.options.position));if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var ae=this.menu.element;ae.outerWidth(Math.max(ae.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(af,ae){var ag=this;I.each(ae,function(ah,ai){ag._renderItemData(af,ai)})},_renderItemData:function(ae,af){return this._renderItem(ae,af).data("ui-autocomplete-item",af)},_renderItem:function(ae,af){return I("<li>").text(af.label).appendTo(ae)},_move:function(af,ae){if(!this.menu.element.is(":visible")){this.search(null,ae);return}if(this.menu.isFirstItem()&&/^previous/.test(af)||this.menu.isLastItem()&&/^next/.test(af)){if(!this.isMultiLine){this._value(this.term)}this.menu.blur();return}this.menu[af](ae)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(af,ae){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(af,ae);ae.preventDefault()}}});I.extend(I.ui.autocomplete,{escapeRegex:function(ae){return ae.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(ag,ae){var af=new RegExp(I.ui.autocomplete.escapeRegex(ae),"i");return I.grep(ag,function(ah){return af.test(ah.label||ah.value||ah)})}});I.widget("ui.autocomplete",I.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(ae){return ae+(ae>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(af){var ae;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return}if(af&&af.length){ae=this.options.messages.results(af.length)}else{ae=this.options.messages.noResults}this.liveRegion.children().hide();I("<div>").text(ae).appendTo(this.liveRegion)}});var c=I.ui.autocomplete;
/*!
   * jQuery UI Button 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/button/
   */
var r,Z="ui-button ui-widget ui-state-default ui-corner-all",y="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",n=function(){var ae=I(this);setTimeout(function(){ae.find(":ui-button").button("refresh")},1)},z=function(af){var ae=af.name,ag=af.form,ah=I([]);if(ae){ae=ae.replace(/'/g,"\\'");if(ag){ah=I(ag).find("[name='"+ae+"'][type=radio]")}else{ah=I("[name='"+ae+"'][type=radio]",af.ownerDocument).filter(function(){return !this.form})}}return ah};I.widget("ui.button",{version:"1.11.4",defaultElement:"<button>",options:{disabled:null,text:true,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,n);if(typeof this.options.disabled!=="boolean"){this.options.disabled=!!this.element.prop("disabled")}else{this.element.prop("disabled",this.options.disabled)}this._determineButtonType();this.hasTitle=!!this.buttonElement.attr("title");var ag=this,ae=this.options,ah=this.type==="checkbox"||this.type==="radio",af=!ah?"ui-state-active":"";if(ae.label===null){ae.label=(this.type==="input"?this.buttonElement.val():this.buttonElement.html())}this._hoverable(this.buttonElement);this.buttonElement.addClass(Z).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){if(ae.disabled){return}if(this===r){I(this).addClass("ui-state-active")}}).bind("mouseleave"+this.eventNamespace,function(){if(ae.disabled){return}I(this).removeClass(af)}).bind("click"+this.eventNamespace,function(ai){if(ae.disabled){ai.preventDefault();ai.stopImmediatePropagation()}});this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}});if(ah){this.element.bind("change"+this.eventNamespace,function(){ag.refresh()})}if(this.type==="checkbox"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(ae.disabled){return false}})}else{if(this.type==="radio"){this.buttonElement.bind("click"+this.eventNamespace,function(){if(ae.disabled){return false}I(this).addClass("ui-state-active");ag.buttonElement.attr("aria-pressed","true");var ai=ag.element[0];z(ai).not(ai).map(function(){return I(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")})}else{this.buttonElement.bind("mousedown"+this.eventNamespace,function(){if(ae.disabled){return false}I(this).addClass("ui-state-active");r=this;ag.document.one("mouseup",function(){r=null})}).bind("mouseup"+this.eventNamespace,function(){if(ae.disabled){return false}I(this).removeClass("ui-state-active")}).bind("keydown"+this.eventNamespace,function(ai){if(ae.disabled){return false}if(ai.keyCode===I.ui.keyCode.SPACE||ai.keyCode===I.ui.keyCode.ENTER){I(this).addClass("ui-state-active")}}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){I(this).removeClass("ui-state-active")});if(this.buttonElement.is("a")){this.buttonElement.keyup(function(ai){if(ai.keyCode===I.ui.keyCode.SPACE){I(this).click()}})}}}this._setOption("disabled",ae.disabled);this._resetButton()},_determineButtonType:function(){var ae,ag,af;if(this.element.is("[type=checkbox]")){this.type="checkbox"}else{if(this.element.is("[type=radio]")){this.type="radio"}else{if(this.element.is("input")){this.type="input"}else{this.type="button"}}}if(this.type==="checkbox"||this.type==="radio"){ae=this.element.parents().last();ag="label[for='"+this.element.attr("id")+"']";this.buttonElement=ae.find(ag);if(!this.buttonElement.length){ae=ae.length?ae.siblings():this.element.siblings();this.buttonElement=ae.filter(ag);if(!this.buttonElement.length){this.buttonElement=ae.find(ag)}}this.element.addClass("ui-helper-hidden-accessible");af=this.element.is(":checked");if(af){this.buttonElement.addClass("ui-state-active")}this.buttonElement.prop("aria-pressed",af)}else{this.buttonElement=this.element}},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible");this.buttonElement.removeClass(Z+" ui-state-active "+y).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());if(!this.hasTitle){this.buttonElement.removeAttr("title")}},_setOption:function(ae,af){this._super(ae,af);if(ae==="disabled"){this.widget().toggleClass("ui-state-disabled",!!af);this.element.prop("disabled",!!af);if(af){if(this.type==="checkbox"||this.type==="radio"){this.buttonElement.removeClass("ui-state-focus")}else{this.buttonElement.removeClass("ui-state-focus ui-state-active")}}return}this._resetButton()},refresh:function(){var ae=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");if(ae!==this.options.disabled){this._setOption("disabled",ae)}if(this.type==="radio"){z(this.element[0]).each(function(){if(I(this).is(":checked")){I(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true")}else{I(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}})}else{if(this.type==="checkbox"){if(this.element.is(":checked")){this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true")}else{this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false")}}}},_resetButton:function(){if(this.type==="input"){if(this.options.label){this.element.val(this.options.label)}return}var ai=this.buttonElement.removeClass(y),ag=I("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(ai.empty()).text(),af=this.options.icons,ae=af.primary&&af.secondary,ah=[];if(af.primary||af.secondary){if(this.options.text){ah.push("ui-button-text-icon"+(ae?"s":(af.primary?"-primary":"-secondary")))}if(af.primary){ai.prepend("<span class='ui-button-icon-primary ui-icon "+af.primary+"'></span>")}if(af.secondary){ai.append("<span class='ui-button-icon-secondary ui-icon "+af.secondary+"'></span>")}if(!this.options.text){ah.push(ae?"ui-button-icons-only":"ui-button-icon-only");if(!this.hasTitle){ai.attr("title",I.trim(ag))}}}else{ah.push("ui-button-text-only")}ai.addClass(ah.join(" "))}});I.widget("ui.buttonset",{version:"1.11.4",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(ae,af){if(ae==="disabled"){this.buttons.button("option",ae,af)}this._super(ae,af)},refresh:function(){var af=this.element.css("direction")==="rtl",ae=this.element.find(this.options.items),ag=ae.filter(":ui-button");ae.not(":ui-button").button();ag.button("refresh");this.buttons=ae.map(function(){return I(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(af?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(af?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset");this.buttons.map(function(){return I(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}});var q=I.ui.button;
/*!
   * jQuery UI Datepicker 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/datepicker/
   */
I.extend(I.ui,{datepicker:{version:"1.11.4"}});var l;function t(af){var ae,ag;while(af.length&&af[0]!==document){ae=af.css("position");if(ae==="absolute"||ae==="relative"||ae==="fixed"){ag=parseInt(af.css("zIndex"),10);if(!isNaN(ag)&&ag!==0){return ag}}af=af.parent()}return 0}function ac(){this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};I.extend(this._defaults,this.regional[""]);this.regional.en=I.extend(true,{},this.regional[""]);this.regional["en-US"]=I.extend(true,{},this.regional.en);this.dpDiv=h(I("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}I.extend(ac.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(ae){x(this._defaults,ae||{});return this},_attachDatepicker:function(ah,ae){var ai,ag,af;ai=ah.nodeName.toLowerCase();ag=(ai==="div"||ai==="span");if(!ah.id){this.uuid+=1;ah.id="dp"+this.uuid}af=this._newInst(I(ah),ag);af.settings=I.extend({},ae||{});if(ai==="input"){this._connectDatepicker(ah,af)}else{if(ag){this._inlineDatepicker(ah,af)}}},_newInst:function(af,ae){var ag=af[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:ag,input:af,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:ae,dpDiv:(!ae?this.dpDiv:h(I("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}},_connectDatepicker:function(ag,af){var ae=I(ag);af.append=I([]);af.trigger=I([]);if(ae.hasClass(this.markerClassName)){return}this._attachments(ae,af);ae.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);this._autoSize(af);I.data(ag,"datepicker",af);if(af.settings.disabled){this._disableDatepicker(ag)}},_attachments:function(ag,aj){var af,ai,ae,ak=this._get(aj,"appendText"),ah=this._get(aj,"isRTL");if(aj.append){aj.append.remove()}if(ak){aj.append=I("<span class='"+this._appendClass+"'>"+ak+"</span>");ag[ah?"before":"after"](aj.append)}ag.unbind("focus",this._showDatepicker);if(aj.trigger){aj.trigger.remove()}af=this._get(aj,"showOn");if(af==="focus"||af==="both"){ag.focus(this._showDatepicker)}if(af==="button"||af==="both"){ai=this._get(aj,"buttonText");ae=this._get(aj,"buttonImage");aj.trigger=I(this._get(aj,"buttonImageOnly")?I("<img/>").addClass(this._triggerClass).attr({src:ae,alt:ai,title:ai}):I("<button type='button'></button>").addClass(this._triggerClass).html(!ae?ai:I("<img/>").attr({src:ae,alt:ai,title:ai})));ag[ah?"before":"after"](aj.trigger);aj.trigger.click(function(){if(I.datepicker._datepickerShowing&&I.datepicker._lastInput===ag[0]){I.datepicker._hideDatepicker()}else{if(I.datepicker._datepickerShowing&&I.datepicker._lastInput!==ag[0]){I.datepicker._hideDatepicker();I.datepicker._showDatepicker(ag[0])}else{I.datepicker._showDatepicker(ag[0])}}return false})}},_autoSize:function(ak){if(this._get(ak,"autoSize")&&!ak.inline){var ah,af,ag,aj,ai=new Date(2009,12-1,20),ae=this._get(ak,"dateFormat");if(ae.match(/[DM]/)){ah=function(al){af=0;ag=0;for(aj=0;aj<al.length;aj++){if(al[aj].length>af){af=al[aj].length;ag=aj}}return ag};ai.setMonth(ah(this._get(ak,(ae.match(/MM/)?"monthNames":"monthNamesShort"))));ai.setDate(ah(this._get(ak,(ae.match(/DD/)?"dayNames":"dayNamesShort")))+20-ai.getDay())}ak.input.attr("size",this._formatDate(ak,ai).length)}},_inlineDatepicker:function(af,ae){var ag=I(af);if(ag.hasClass(this.markerClassName)){return}ag.addClass(this.markerClassName).append(ae.dpDiv);I.data(af,"datepicker",ae);this._setDate(ae,this._getDefaultDate(ae),true);this._updateDatepicker(ae);this._updateAlternate(ae);if(ae.settings.disabled){this._disableDatepicker(af)}ae.dpDiv.css("display","block")},_dialogDatepicker:function(al,af,aj,ag,ak){var ae,ao,ai,an,am,ah=this._dialogInst;if(!ah){this.uuid+=1;ae="dp"+this.uuid;this._dialogInput=I("<input type='text' id='"+ae+"' style='position: absolute; top: -100px; width: 0px;'/>");this._dialogInput.keydown(this._doKeyDown);I("body").append(this._dialogInput);ah=this._dialogInst=this._newInst(this._dialogInput,false);ah.settings={};I.data(this._dialogInput[0],"datepicker",ah)}x(ah.settings,ag||{});af=(af&&af.constructor===Date?this._formatDate(ah,af):af);this._dialogInput.val(af);this._pos=(ak?(ak.length?ak:[ak.pageX,ak.pageY]):null);if(!this._pos){ao=document.documentElement.clientWidth;ai=document.documentElement.clientHeight;an=document.documentElement.scrollLeft||document.body.scrollLeft;am=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(ao/2)-100+an,(ai/2)-150+am]}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");ah.settings.onSelect=aj;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);this._showDatepicker(this._dialogInput[0]);if(I.blockUI){I.blockUI(this.dpDiv)}I.data(this._dialogInput[0],"datepicker",ah);return this},_destroyDatepicker:function(ag){var ah,ae=I(ag),af=I.data(ag,"datepicker");if(!ae.hasClass(this.markerClassName)){return}ah=ag.nodeName.toLowerCase();I.removeData(ag,"datepicker");if(ah==="input"){af.append.remove();af.trigger.remove();ae.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)}else{if(ah==="div"||ah==="span"){ae.removeClass(this.markerClassName).empty()}}if(l===af){l=null}},_enableDatepicker:function(ah){var ai,ag,ae=I(ah),af=I.data(ah,"datepicker");if(!ae.hasClass(this.markerClassName)){return}ai=ah.nodeName.toLowerCase();if(ai==="input"){ah.disabled=false;af.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})}else{if(ai==="div"||ai==="span"){ag=ae.children("."+this._inlineClass);ag.children().removeClass("ui-state-disabled");ag.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)}}this._disabledInputs=I.map(this._disabledInputs,function(aj){return(aj===ah?null:aj)})},_disableDatepicker:function(ah){var ai,ag,ae=I(ah),af=I.data(ah,"datepicker");if(!ae.hasClass(this.markerClassName)){return}ai=ah.nodeName.toLowerCase();if(ai==="input"){ah.disabled=true;af.trigger.filter("button").each(function(){this.disabled=true}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(ai==="div"||ai==="span"){ag=ae.children("."+this._inlineClass);ag.children().addClass("ui-state-disabled");ag.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)}}this._disabledInputs=I.map(this._disabledInputs,function(aj){return(aj===ah?null:aj)});this._disabledInputs[this._disabledInputs.length]=ah},_isDisabledDatepicker:function(af){if(!af){return false}for(var ae=0;ae<this._disabledInputs.length;ae++){if(this._disabledInputs[ae]===af){return true}}return false},_getInst:function(af){try{return I.data(af,"datepicker")}catch(ae){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(ak,af,aj){var ag,ae,ai,al,ah=this._getInst(ak);if(arguments.length===2&&typeof af==="string"){return(af==="defaults"?I.extend({},I.datepicker._defaults):(ah?(af==="all"?I.extend({},ah.settings):this._get(ah,af)):null))}ag=af||{};if(typeof af==="string"){ag={};ag[af]=aj}if(ah){if(this._curInst===ah){this._hideDatepicker()}ae=this._getDateDatepicker(ak,true);ai=this._getMinMaxDate(ah,"min");al=this._getMinMaxDate(ah,"max");x(ah.settings,ag);if(ai!==null&&ag.dateFormat!==undefined&&ag.minDate===undefined){ah.settings.minDate=this._formatDate(ah,ai)}if(al!==null&&ag.dateFormat!==undefined&&ag.maxDate===undefined){ah.settings.maxDate=this._formatDate(ah,al)}if("disabled" in ag){if(ag.disabled){this._disableDatepicker(ak)}else{this._enableDatepicker(ak)}}this._attachments(I(ak),ah);this._autoSize(ah);this._setDate(ah,ae);this._updateAlternate(ah);this._updateDatepicker(ah)}},_changeDatepicker:function(ag,ae,af){this._optionDatepicker(ag,ae,af)},_refreshDatepicker:function(af){var ae=this._getInst(af);if(ae){this._updateDatepicker(ae)}},_setDateDatepicker:function(ag,ae){var af=this._getInst(ag);if(af){this._setDate(af,ae);this._updateDatepicker(af);this._updateAlternate(af)}},_getDateDatepicker:function(ag,ae){var af=this._getInst(ag);if(af&&!af.inline){this._setDateFromField(af,ae)}return(af?this._getDate(af):null)},_doKeyDown:function(ah){var af,ae,aj,ai=I.datepicker._getInst(ah.target),ak=true,ag=ai.dpDiv.is(".ui-datepicker-rtl");ai._keyEvent=true;if(I.datepicker._datepickerShowing){switch(ah.keyCode){case 9:I.datepicker._hideDatepicker();ak=false;break;case 13:aj=I("td."+I.datepicker._dayOverClass+":not(."+I.datepicker._currentClass+")",ai.dpDiv);if(aj[0]){I.datepicker._selectDay(ah.target,ai.selectedMonth,ai.selectedYear,aj[0])}af=I.datepicker._get(ai,"onSelect");if(af){ae=I.datepicker._formatDate(ai);af.apply((ai.input?ai.input[0]:null),[ae,ai])}else{I.datepicker._hideDatepicker()}return false;case 27:I.datepicker._hideDatepicker();break;case 33:I.datepicker._adjustDate(ah.target,(ah.ctrlKey?-I.datepicker._get(ai,"stepBigMonths"):-I.datepicker._get(ai,"stepMonths")),"M");break;case 34:I.datepicker._adjustDate(ah.target,(ah.ctrlKey?+I.datepicker._get(ai,"stepBigMonths"):+I.datepicker._get(ai,"stepMonths")),"M");break;case 35:if(ah.ctrlKey||ah.metaKey){I.datepicker._clearDate(ah.target)}ak=ah.ctrlKey||ah.metaKey;break;case 36:if(ah.ctrlKey||ah.metaKey){I.datepicker._gotoToday(ah.target)}ak=ah.ctrlKey||ah.metaKey;break;case 37:if(ah.ctrlKey||ah.metaKey){I.datepicker._adjustDate(ah.target,(ag?+1:-1),"D")}ak=ah.ctrlKey||ah.metaKey;if(ah.originalEvent.altKey){I.datepicker._adjustDate(ah.target,(ah.ctrlKey?-I.datepicker._get(ai,"stepBigMonths"):-I.datepicker._get(ai,"stepMonths")),"M")}break;case 38:if(ah.ctrlKey||ah.metaKey){I.datepicker._adjustDate(ah.target,-7,"D")}ak=ah.ctrlKey||ah.metaKey;break;case 39:if(ah.ctrlKey||ah.metaKey){I.datepicker._adjustDate(ah.target,(ag?-1:+1),"D")}ak=ah.ctrlKey||ah.metaKey;if(ah.originalEvent.altKey){I.datepicker._adjustDate(ah.target,(ah.ctrlKey?+I.datepicker._get(ai,"stepBigMonths"):+I.datepicker._get(ai,"stepMonths")),"M")}break;case 40:if(ah.ctrlKey||ah.metaKey){I.datepicker._adjustDate(ah.target,+7,"D")}ak=ah.ctrlKey||ah.metaKey;break;default:ak=false}}else{if(ah.keyCode===36&&ah.ctrlKey){I.datepicker._showDatepicker(this)}else{ak=false}}if(ak){ah.preventDefault();ah.stopPropagation()}},_doKeyPress:function(ag){var af,ae,ah=I.datepicker._getInst(ag.target);if(I.datepicker._get(ah,"constrainInput")){af=I.datepicker._possibleChars(I.datepicker._get(ah,"dateFormat"));ae=String.fromCharCode(ag.charCode==null?ag.keyCode:ag.charCode);return ag.ctrlKey||ag.metaKey||(ae<" "||!af||af.indexOf(ae)>-1)}},_doKeyUp:function(ag){var ae,ah=I.datepicker._getInst(ag.target);if(ah.input.val()!==ah.lastVal){try{ae=I.datepicker.parseDate(I.datepicker._get(ah,"dateFormat"),(ah.input?ah.input.val():null),I.datepicker._getFormatConfig(ah));if(ae){I.datepicker._setDateFromField(ah);I.datepicker._updateAlternate(ah);I.datepicker._updateDatepicker(ah)}}catch(af){}}return true},_showDatepicker:function(af){af=af.target||af;if(af.nodeName.toLowerCase()!=="input"){af=I("input",af.parentNode)[0]}if(I.datepicker._isDisabledDatepicker(af)||I.datepicker._lastInput===af){return}var ah,al,ag,aj,ak,ae,ai;ah=I.datepicker._getInst(af);if(I.datepicker._curInst&&I.datepicker._curInst!==ah){I.datepicker._curInst.dpDiv.stop(true,true);if(ah&&I.datepicker._datepickerShowing){I.datepicker._hideDatepicker(I.datepicker._curInst.input[0])}}al=I.datepicker._get(ah,"beforeShow");ag=al?al.apply(af,[af,ah]):{};if(ag===false){return}x(ah.settings,ag);ah.lastVal=null;I.datepicker._lastInput=af;I.datepicker._setDateFromField(ah);if(I.datepicker._inDialog){af.value=""}if(!I.datepicker._pos){I.datepicker._pos=I.datepicker._findPos(af);I.datepicker._pos[1]+=af.offsetHeight}aj=false;I(af).parents().each(function(){aj|=I(this).css("position")==="fixed";return !aj});ak={left:I.datepicker._pos[0],top:I.datepicker._pos[1]};I.datepicker._pos=null;ah.dpDiv.empty();ah.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});I.datepicker._updateDatepicker(ah);ak=I.datepicker._checkOffset(ah,ak,aj);ah.dpDiv.css({position:(I.datepicker._inDialog&&I.blockUI?"static":(aj?"fixed":"absolute")),display:"none",left:ak.left+"px",top:ak.top+"px"});if(!ah.inline){ae=I.datepicker._get(ah,"showAnim");ai=I.datepicker._get(ah,"duration");ah.dpDiv.css("z-index",t(I(af))+1);I.datepicker._datepickerShowing=true;if(I.effects&&I.effects.effect[ae]){ah.dpDiv.show(ae,I.datepicker._get(ah,"showOptions"),ai)}else{ah.dpDiv[ae||"show"](ae?ai:null)}if(I.datepicker._shouldFocusInput(ah)){ah.input.focus()}I.datepicker._curInst=ah}},_updateDatepicker:function(ah){this.maxRows=4;l=ah;ah.dpDiv.empty().append(this._generateHTML(ah));this._attachHandlers(ah);var aj,ae=this._getNumberOfMonths(ah),ai=ae[1],ag=17,af=ah.dpDiv.find("."+this._dayOverClass+" a");if(af.length>0){p.apply(af.get(0))}ah.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");if(ai>1){ah.dpDiv.addClass("ui-datepicker-multi-"+ai).css("width",(ag*ai)+"em")}ah.dpDiv[(ae[0]!==1||ae[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");ah.dpDiv[(this._get(ah,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(ah===I.datepicker._curInst&&I.datepicker._datepickerShowing&&I.datepicker._shouldFocusInput(ah)){ah.input.focus()}if(ah.yearshtml){aj=ah.yearshtml;setTimeout(function(){if(aj===ah.yearshtml&&ah.yearshtml){ah.dpDiv.find("select.ui-datepicker-year:first").replaceWith(ah.yearshtml)}aj=ah.yearshtml=null},0)}},_shouldFocusInput:function(ae){return ae.input&&ae.input.is(":visible")&&!ae.input.is(":disabled")&&!ae.input.is(":focus")},_checkOffset:function(aj,ah,ag){var ai=aj.dpDiv.outerWidth(),am=aj.dpDiv.outerHeight(),al=aj.input?aj.input.outerWidth():0,ae=aj.input?aj.input.outerHeight():0,ak=document.documentElement.clientWidth+(ag?0:I(document).scrollLeft()),af=document.documentElement.clientHeight+(ag?0:I(document).scrollTop());ah.left-=(this._get(aj,"isRTL")?(ai-al):0);ah.left-=(ag&&ah.left===aj.input.offset().left)?I(document).scrollLeft():0;ah.top-=(ag&&ah.top===(aj.input.offset().top+ae))?I(document).scrollTop():0;ah.left-=Math.min(ah.left,(ah.left+ai>ak&&ak>ai)?Math.abs(ah.left+ai-ak):0);ah.top-=Math.min(ah.top,(ah.top+am>af&&af>am)?Math.abs(am+ae):0);return ah},_findPos:function(ah){var ae,ag=this._getInst(ah),af=this._get(ag,"isRTL");while(ah&&(ah.type==="hidden"||ah.nodeType!==1||I.expr.filters.hidden(ah))){ah=ah[af?"previousSibling":"nextSibling"]}ae=I(ah).offset();return[ae.left,ae.top]},_hideDatepicker:function(ag){var af,aj,ai,ae,ah=this._curInst;if(!ah||(ag&&ah!==I.data(ag,"datepicker"))){return}if(this._datepickerShowing){af=this._get(ah,"showAnim");aj=this._get(ah,"duration");ai=function(){I.datepicker._tidyDialog(ah)};if(I.effects&&(I.effects.effect[af]||I.effects[af])){ah.dpDiv.hide(af,I.datepicker._get(ah,"showOptions"),aj,ai)}else{ah.dpDiv[(af==="slideDown"?"slideUp":(af==="fadeIn"?"fadeOut":"hide"))]((af?aj:null),ai)}if(!af){ai()}this._datepickerShowing=false;ae=this._get(ah,"onClose");if(ae){ae.apply((ah.input?ah.input[0]:null),[(ah.input?ah.input.val():""),ah])}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});if(I.blockUI){I.unblockUI();I("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(ae){ae.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(af){if(!I.datepicker._curInst){return}var ae=I(af.target),ag=I.datepicker._getInst(ae[0]);if(((ae[0].id!==I.datepicker._mainDivId&&ae.parents("#"+I.datepicker._mainDivId).length===0&&!ae.hasClass(I.datepicker.markerClassName)&&!ae.closest("."+I.datepicker._triggerClass).length&&I.datepicker._datepickerShowing&&!(I.datepicker._inDialog&&I.blockUI)))||(ae.hasClass(I.datepicker.markerClassName)&&I.datepicker._curInst!==ag)){I.datepicker._hideDatepicker()}},_adjustDate:function(ai,ah,ag){var af=I(ai),ae=this._getInst(af[0]);if(this._isDisabledDatepicker(af[0])){return}this._adjustInstDate(ae,ah+(ag==="M"?this._get(ae,"showCurrentAtPos"):0),ag);this._updateDatepicker(ae)},_gotoToday:function(ah){var ae,ag=I(ah),af=this._getInst(ag[0]);if(this._get(af,"gotoCurrent")&&af.currentDay){af.selectedDay=af.currentDay;af.drawMonth=af.selectedMonth=af.currentMonth;af.drawYear=af.selectedYear=af.currentYear}else{ae=new Date();af.selectedDay=ae.getDate();af.drawMonth=af.selectedMonth=ae.getMonth();af.drawYear=af.selectedYear=ae.getFullYear()}this._notifyChange(af);this._adjustDate(ag)},_selectMonthYear:function(ai,ae,ah){var ag=I(ai),af=this._getInst(ag[0]);af["selected"+(ah==="M"?"Month":"Year")]=af["draw"+(ah==="M"?"Month":"Year")]=parseInt(ae.options[ae.selectedIndex].value,10);this._notifyChange(af);this._adjustDate(ag)},_selectDay:function(aj,ah,ae,ai){var af,ag=I(aj);if(I(ai).hasClass(this._unselectableClass)||this._isDisabledDatepicker(ag[0])){return}af=this._getInst(ag[0]);af.selectedDay=af.currentDay=I("a",ai).html();af.selectedMonth=af.currentMonth=ah;af.selectedYear=af.currentYear=ae;this._selectDate(aj,this._formatDate(af,af.currentDay,af.currentMonth,af.currentYear))},_clearDate:function(af){var ae=I(af);this._selectDate(ae,"")},_selectDate:function(ai,ae){var af,ah=I(ai),ag=this._getInst(ah[0]);ae=(ae!=null?ae:this._formatDate(ag));if(ag.input){ag.input.val(ae)}this._updateAlternate(ag);af=this._get(ag,"onSelect");if(af){af.apply((ag.input?ag.input[0]:null),[ae,ag])}else{if(ag.input){ag.input.trigger("change")}}if(ag.inline){this._updateDatepicker(ag)}else{this._hideDatepicker();this._lastInput=ag.input[0];if(typeof(ag.input[0])!=="object"){ag.input.focus()}this._lastInput=null}},_updateAlternate:function(ai){var ah,ag,ae,af=this._get(ai,"altField");if(af){ah=this._get(ai,"altFormat")||this._get(ai,"dateFormat");ag=this._getDate(ai);ae=this.formatDate(ah,ag,this._getFormatConfig(ai));I(af).each(function(){I(this).val(ae)})}},noWeekends:function(af){var ae=af.getDay();return[(ae>0&&ae<6),""]},iso8601Week:function(ae){var af,ag=new Date(ae.getTime());ag.setDate(ag.getDate()+4-(ag.getDay()||7));af=ag.getTime();ag.setMonth(0);ag.setDate(1);return Math.floor(Math.round((af-ag)/86400000)/7)+1},parseDate:function(av,ap,ax){if(av==null||ap==null){throw"Invalid arguments"}ap=(typeof ap==="object"?ap.toString():ap+"");if(ap===""){return null}var ah,ar,af,aw=0,ak=(ax?ax.shortYearCutoff:null)||this._defaults.shortYearCutoff,ag=(typeof ak!=="string"?ak:new Date().getFullYear()%100+parseInt(ak,10)),an=(ax?ax.dayNamesShort:null)||this._defaults.dayNamesShort,az=(ax?ax.dayNames:null)||this._defaults.dayNames,ae=(ax?ax.monthNamesShort:null)||this._defaults.monthNamesShort,ai=(ax?ax.monthNames:null)||this._defaults.monthNames,aj=-1,aA=-1,au=-1,am=-1,at=false,ay,ao=function(aC){var aD=(ah+1<av.length&&av.charAt(ah+1)===aC);if(aD){ah++}return aD},aB=function(aE){var aC=ao(aE),aF=(aE==="@"?14:(aE==="!"?20:(aE==="y"&&aC?4:(aE==="o"?3:2)))),aH=(aE==="y"?aF:1),aG=new RegExp("^\\d{"+aH+","+aF+"}"),aD=ap.substring(aw).match(aG);if(!aD){throw"Missing number at position "+aw}aw+=aD[0].length;return parseInt(aD[0],10)},al=function(aD,aE,aG){var aC=-1,aF=I.map(ao(aD)?aG:aE,function(aI,aH){return[[aH,aI]]}).sort(function(aI,aH){return -(aI[1].length-aH[1].length)});I.each(aF,function(aI,aJ){var aH=aJ[1];if(ap.substr(aw,aH.length).toLowerCase()===aH.toLowerCase()){aC=aJ[0];aw+=aH.length;return false}});if(aC!==-1){return aC+1}else{throw"Unknown name at position "+aw}},aq=function(){if(ap.charAt(aw)!==av.charAt(ah)){throw"Unexpected literal at position "+aw}aw++};for(ah=0;ah<av.length;ah++){if(at){if(av.charAt(ah)==="'"&&!ao("'")){at=false}else{aq()}}else{switch(av.charAt(ah)){case"d":au=aB("d");break;case"D":al("D",an,az);break;case"o":am=aB("o");break;case"m":aA=aB("m");break;case"M":aA=al("M",ae,ai);break;case"y":aj=aB("y");break;case"@":ay=new Date(aB("@"));aj=ay.getFullYear();aA=ay.getMonth()+1;au=ay.getDate();break;case"!":ay=new Date((aB("!")-this._ticksTo1970)/10000);aj=ay.getFullYear();aA=ay.getMonth()+1;au=ay.getDate();break;case"'":if(ao("'")){aq()}else{at=true}break;default:aq()}}}if(aw<ap.length){af=ap.substr(aw);if(!/^\s+/.test(af)){throw"Extra/unparsed characters found in date: "+af}}if(aj===-1){aj=new Date().getFullYear()}else{if(aj<100){aj+=new Date().getFullYear()-new Date().getFullYear()%100+(aj<=ag?0:-100)}}if(am>-1){aA=1;au=am;do{ar=this._getDaysInMonth(aj,aA-1);if(au<=ar){break}aA++;au-=ar}while(true)}ay=this._daylightSavingAdjust(new Date(aj,aA-1,au));if(ay.getFullYear()!==aj||ay.getMonth()+1!==aA||ay.getDate()!==au){throw"Invalid date"}return ay},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(an,ah,ai){if(!ah){return""}var ap,aq=(ai?ai.dayNamesShort:null)||this._defaults.dayNamesShort,af=(ai?ai.dayNames:null)||this._defaults.dayNames,al=(ai?ai.monthNamesShort:null)||this._defaults.monthNamesShort,aj=(ai?ai.monthNames:null)||this._defaults.monthNames,ao=function(ar){var at=(ap+1<an.length&&an.charAt(ap+1)===ar);if(at){ap++}return at},ae=function(au,av,ar){var at=""+av;if(ao(au)){while(at.length<ar){at="0"+at}}return at},ak=function(ar,au,at,av){return(ao(ar)?av[au]:at[au])},ag="",am=false;if(ah){for(ap=0;ap<an.length;ap++){if(am){if(an.charAt(ap)==="'"&&!ao("'")){am=false}else{ag+=an.charAt(ap)}}else{switch(an.charAt(ap)){case"d":ag+=ae("d",ah.getDate(),2);break;case"D":ag+=ak("D",ah.getDay(),aq,af);break;case"o":ag+=ae("o",Math.round((new Date(ah.getFullYear(),ah.getMonth(),ah.getDate()).getTime()-new Date(ah.getFullYear(),0,0).getTime())/86400000),3);break;case"m":ag+=ae("m",ah.getMonth()+1,2);break;case"M":ag+=ak("M",ah.getMonth(),al,aj);break;case"y":ag+=(ao("y")?ah.getFullYear():(ah.getYear()%100<10?"0":"")+ah.getYear()%100);break;case"@":ag+=ah.getTime();break;case"!":ag+=ah.getTime()*10000+this._ticksTo1970;break;case"'":if(ao("'")){ag+="'"}else{am=true}break;default:ag+=an.charAt(ap)}}}}return ag},_possibleChars:function(ai){var ah,ag="",af=false,ae=function(aj){var ak=(ah+1<ai.length&&ai.charAt(ah+1)===aj);if(ak){ah++}return ak};for(ah=0;ah<ai.length;ah++){if(af){if(ai.charAt(ah)==="'"&&!ae("'")){af=false}else{ag+=ai.charAt(ah)}}else{switch(ai.charAt(ah)){case"d":case"m":case"y":case"@":ag+="0123456789";break;case"D":case"M":return null;case"'":if(ae("'")){ag+="'"}else{af=true}break;default:ag+=ai.charAt(ah)}}}return ag},_get:function(af,ae){return af.settings[ae]!==undefined?af.settings[ae]:this._defaults[ae]},_setDateFromField:function(aj,ag){if(aj.input.val()===aj.lastVal){return}var ae=this._get(aj,"dateFormat"),al=aj.lastVal=aj.input?aj.input.val():null,ak=this._getDefaultDate(aj),af=ak,ah=this._getFormatConfig(aj);try{af=this.parseDate(ae,al,ah)||ak}catch(ai){al=(ag?"":al)}aj.selectedDay=af.getDate();aj.drawMonth=aj.selectedMonth=af.getMonth();aj.drawYear=aj.selectedYear=af.getFullYear();aj.currentDay=(al?af.getDate():0);aj.currentMonth=(al?af.getMonth():0);aj.currentYear=(al?af.getFullYear():0);this._adjustInstDate(aj)},_getDefaultDate:function(ae){return this._restrictMinMax(ae,this._determineDate(ae,this._get(ae,"defaultDate"),new Date()))},_determineDate:function(ai,af,aj){var ah=function(al){var ak=new Date();ak.setDate(ak.getDate()+al);return ak},ag=function(ar){try{return I.datepicker.parseDate(I.datepicker._get(ai,"dateFormat"),ar,I.datepicker._getFormatConfig(ai))}catch(aq){}var al=(ar.toLowerCase().match(/^c/)?I.datepicker._getDate(ai):null)||new Date(),am=al.getFullYear(),ap=al.getMonth(),ak=al.getDate(),ao=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,an=ao.exec(ar);while(an){switch(an[2]||"d"){case"d":case"D":ak+=parseInt(an[1],10);break;case"w":case"W":ak+=parseInt(an[1],10)*7;break;case"m":case"M":ap+=parseInt(an[1],10);ak=Math.min(ak,I.datepicker._getDaysInMonth(am,ap));break;case"y":case"Y":am+=parseInt(an[1],10);ak=Math.min(ak,I.datepicker._getDaysInMonth(am,ap));break}an=ao.exec(ar)}return new Date(am,ap,ak)},ae=(af==null||af===""?aj:(typeof af==="string"?ag(af):(typeof af==="number"?(isNaN(af)?aj:ah(af)):new Date(af.getTime()))));ae=(ae&&ae.toString()==="Invalid Date"?aj:ae);if(ae){ae.setHours(0);ae.setMinutes(0);ae.setSeconds(0);ae.setMilliseconds(0)}return this._daylightSavingAdjust(ae)},_daylightSavingAdjust:function(ae){if(!ae){return null}ae.setHours(ae.getHours()>12?ae.getHours()+2:0);return ae},_setDate:function(ak,ah,aj){var ae=!ah,ag=ak.selectedMonth,ai=ak.selectedYear,af=this._restrictMinMax(ak,this._determineDate(ak,ah,new Date()));ak.selectedDay=ak.currentDay=af.getDate();ak.drawMonth=ak.selectedMonth=ak.currentMonth=af.getMonth();ak.drawYear=ak.selectedYear=ak.currentYear=af.getFullYear();if((ag!==ak.selectedMonth||ai!==ak.selectedYear)&&!aj){this._notifyChange(ak)}this._adjustInstDate(ak);if(ak.input){ak.input.val(ae?"":this._formatDate(ak))}},_getDate:function(af){var ae=(!af.currentYear||(af.input&&af.input.val()==="")?null:this._daylightSavingAdjust(new Date(af.currentYear,af.currentMonth,af.currentDay)));return ae},_attachHandlers:function(af){var ae=this._get(af,"stepMonths"),ag="#"+af.id.replace(/\\\\/g,"\\");af.dpDiv.find("[data-handler]").map(function(){var ah={prev:function(){I.datepicker._adjustDate(ag,-ae,"M")},next:function(){I.datepicker._adjustDate(ag,+ae,"M")},hide:function(){I.datepicker._hideDatepicker()},today:function(){I.datepicker._gotoToday(ag)},selectDay:function(){I.datepicker._selectDay(ag,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);return false},selectMonth:function(){I.datepicker._selectMonthYear(ag,this,"M");return false},selectYear:function(){I.datepicker._selectMonthYear(ag,this,"Y");return false}};I(this).bind(this.getAttribute("data-event"),ah[this.getAttribute("data-handler")])})},_generateHTML:function(aV){var ay,ax,aQ,aI,ai,aZ,aT,aM,a2,aG,a6,ap,ar,aq,af,aY,an,aB,a1,aO,a7,aA,aF,ao,aj,aR,aK,aN,aL,am,aD,at,aU,aX,ah,a0,a4,aJ,au,aW=new Date(),az=this._daylightSavingAdjust(new Date(aW.getFullYear(),aW.getMonth(),aW.getDate())),a3=this._get(aV,"isRTL"),a5=this._get(aV,"showButtonPanel"),aP=this._get(aV,"hideIfNoPrevNext"),aE=this._get(aV,"navigationAsDateFormat"),av=this._getNumberOfMonths(aV),al=this._get(aV,"showCurrentAtPos"),aH=this._get(aV,"stepMonths"),aC=(av[0]!==1||av[1]!==1),ag=this._daylightSavingAdjust((!aV.currentDay?new Date(9999,9,9):new Date(aV.currentYear,aV.currentMonth,aV.currentDay))),ak=this._getMinMaxDate(aV,"min"),aw=this._getMinMaxDate(aV,"max"),ae=aV.drawMonth-al,aS=aV.drawYear;if(ae<0){ae+=12;aS--}if(aw){ay=this._daylightSavingAdjust(new Date(aw.getFullYear(),aw.getMonth()-(av[0]*av[1])+1,aw.getDate()));ay=(ak&&ay<ak?ak:ay);while(this._daylightSavingAdjust(new Date(aS,ae,1))>ay){ae--;if(ae<0){ae=11;aS--}}}aV.drawMonth=ae;aV.drawYear=aS;ax=this._get(aV,"prevText");ax=(!aE?ax:this.formatDate(ax,this._daylightSavingAdjust(new Date(aS,ae-aH,1)),this._getFormatConfig(aV)));aQ=(this._canAdjustMonth(aV,-1,aS,ae)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+ax+"'><span class='ui-icon ui-icon-circle-triangle-"+(a3?"e":"w")+"'>"+ax+"</span></a>":(aP?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+ax+"'><span class='ui-icon ui-icon-circle-triangle-"+(a3?"e":"w")+"'>"+ax+"</span></a>"));aI=this._get(aV,"nextText");aI=(!aE?aI:this.formatDate(aI,this._daylightSavingAdjust(new Date(aS,ae+aH,1)),this._getFormatConfig(aV)));ai=(this._canAdjustMonth(aV,+1,aS,ae)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aI+"'><span class='ui-icon ui-icon-circle-triangle-"+(a3?"w":"e")+"'>"+aI+"</span></a>":(aP?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aI+"'><span class='ui-icon ui-icon-circle-triangle-"+(a3?"w":"e")+"'>"+aI+"</span></a>"));aZ=this._get(aV,"currentText");aT=(this._get(aV,"gotoCurrent")&&aV.currentDay?ag:az);aZ=(!aE?aZ:this.formatDate(aZ,aT,this._getFormatConfig(aV)));aM=(!aV.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aV,"closeText")+"</button>":"");a2=(a5)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(a3?aM:"")+(this._isInRange(aV,aT)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+aZ+"</button>":"")+(a3?"":aM)+"</div>":"";aG=parseInt(this._get(aV,"firstDay"),10);aG=(isNaN(aG)?0:aG);a6=this._get(aV,"showWeek");ap=this._get(aV,"dayNames");ar=this._get(aV,"dayNamesMin");aq=this._get(aV,"monthNames");af=this._get(aV,"monthNamesShort");aY=this._get(aV,"beforeShowDay");an=this._get(aV,"showOtherMonths");aB=this._get(aV,"selectOtherMonths");a1=this._getDefaultDate(aV);aO="";a7;for(aA=0;aA<av[0];aA++){aF="";this.maxRows=4;for(ao=0;ao<av[1];ao++){aj=this._daylightSavingAdjust(new Date(aS,ae,aV.selectedDay));aR=" ui-corner-all";aK="";if(aC){aK+="<div class='ui-datepicker-group";if(av[1]>1){switch(ao){case 0:aK+=" ui-datepicker-group-first";aR=" ui-corner-"+(a3?"right":"left");break;case av[1]-1:aK+=" ui-datepicker-group-last";aR=" ui-corner-"+(a3?"left":"right");break;default:aK+=" ui-datepicker-group-middle";aR="";break}}aK+="'>"}aK+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+aR+"'>"+(/all|left/.test(aR)&&aA===0?(a3?ai:aQ):"")+(/all|right/.test(aR)&&aA===0?(a3?aQ:ai):"")+this._generateMonthYearHeader(aV,ae,aS,ak,aw,aA>0||ao>0,aq,af)+"</div><table class='ui-datepicker-calendar'><thead><tr>";aN=(a6?"<th class='ui-datepicker-week-col'>"+this._get(aV,"weekHeader")+"</th>":"");for(a7=0;a7<7;a7++){aL=(a7+aG)%7;aN+="<th scope='col'"+((a7+aG+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+ap[aL]+"'>"+ar[aL]+"</span></th>"}aK+=aN+"</tr></thead><tbody>";am=this._getDaysInMonth(aS,ae);if(aS===aV.selectedYear&&ae===aV.selectedMonth){aV.selectedDay=Math.min(aV.selectedDay,am)}aD=(this._getFirstDayOfMonth(aS,ae)-aG+7)%7;at=Math.ceil((aD+am)/7);aU=(aC?this.maxRows>at?this.maxRows:at:at);this.maxRows=aU;aX=this._daylightSavingAdjust(new Date(aS,ae,1-aD));for(ah=0;ah<aU;ah++){aK+="<tr>";a0=(!a6?"":"<td class='ui-datepicker-week-col'>"+this._get(aV,"calculateWeek")(aX)+"</td>");for(a7=0;a7<7;a7++){a4=(aY?aY.apply((aV.input?aV.input[0]:null),[aX]):[true,""]);aJ=(aX.getMonth()!==ae);au=(aJ&&!aB)||!a4[0]||(ak&&aX<ak)||(aw&&aX>aw);a0+="<td class='"+((a7+aG+6)%7>=5?" ui-datepicker-week-end":"")+(aJ?" ui-datepicker-other-month":"")+((aX.getTime()===aj.getTime()&&ae===aV.selectedMonth&&aV._keyEvent)||(a1.getTime()===aX.getTime()&&a1.getTime()===aj.getTime())?" "+this._dayOverClass:"")+(au?" "+this._unselectableClass+" ui-state-disabled":"")+(aJ&&!an?"":" "+a4[1]+(aX.getTime()===ag.getTime()?" "+this._currentClass:"")+(aX.getTime()===az.getTime()?" ui-datepicker-today":""))+"'"+((!aJ||an)&&a4[2]?" title='"+a4[2].replace(/'/g,"&#39;")+"'":"")+(au?"":" data-handler='selectDay' data-event='click' data-month='"+aX.getMonth()+"' data-year='"+aX.getFullYear()+"'")+">"+(aJ&&!an?"&#xa0;":(au?"<span class='ui-state-default'>"+aX.getDate()+"</span>":"<a class='ui-state-default"+(aX.getTime()===az.getTime()?" ui-state-highlight":"")+(aX.getTime()===ag.getTime()?" ui-state-active":"")+(aJ?" ui-priority-secondary":"")+"' href='#'>"+aX.getDate()+"</a>"))+"</td>";aX.setDate(aX.getDate()+1);aX=this._daylightSavingAdjust(aX)}aK+=a0+"</tr>"}ae++;if(ae>11){ae=0;aS++}aK+="</tbody></table>"+(aC?"</div>"+((av[0]>0&&ao===av[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");aF+=aK}aO+=aF}aO+=a2;aV._keyEvent=false;return aO},_generateMonthYearHeader:function(ai,ag,aq,ak,ao,ar,am,ae){var aw,af,ax,au,aj,at,ap,al,ah=this._get(ai,"changeMonth"),ay=this._get(ai,"changeYear"),az=this._get(ai,"showMonthAfterYear"),an="<div class='ui-datepicker-title'>",av="";if(ar||!ah){av+="<span class='ui-datepicker-month'>"+am[ag]+"</span>"}else{aw=(ak&&ak.getFullYear()===aq);af=(ao&&ao.getFullYear()===aq);av+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";for(ax=0;ax<12;ax++){if((!aw||ax>=ak.getMonth())&&(!af||ax<=ao.getMonth())){av+="<option value='"+ax+"'"+(ax===ag?" selected='selected'":"")+">"+ae[ax]+"</option>"}}av+="</select>"}if(!az){an+=av+(ar||!(ah&&ay)?"&#xa0;":"")}if(!ai.yearshtml){ai.yearshtml="";if(ar||!ay){an+="<span class='ui-datepicker-year'>"+aq+"</span>"}else{au=this._get(ai,"yearRange").split(":");aj=new Date().getFullYear();at=function(aB){var aA=(aB.match(/c[+\-].*/)?aq+parseInt(aB.substring(1),10):(aB.match(/[+\-].*/)?aj+parseInt(aB,10):parseInt(aB,10)));return(isNaN(aA)?aj:aA)};ap=at(au[0]);al=Math.max(ap,at(au[1]||""));ap=(ak?Math.max(ap,ak.getFullYear()):ap);al=(ao?Math.min(al,ao.getFullYear()):al);ai.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";for(;ap<=al;ap++){ai.yearshtml+="<option value='"+ap+"'"+(ap===aq?" selected='selected'":"")+">"+ap+"</option>"}ai.yearshtml+="</select>";an+=ai.yearshtml;ai.yearshtml=null}}an+=this._get(ai,"yearSuffix");if(az){an+=(ar||!(ah&&ay)?"&#xa0;":"")+av}an+="</div>";return an},_adjustInstDate:function(ah,ak,aj){var ag=ah.drawYear+(aj==="Y"?ak:0),ai=ah.drawMonth+(aj==="M"?ak:0),ae=Math.min(ah.selectedDay,this._getDaysInMonth(ag,ai))+(aj==="D"?ak:0),af=this._restrictMinMax(ah,this._daylightSavingAdjust(new Date(ag,ai,ae)));ah.selectedDay=af.getDate();ah.drawMonth=ah.selectedMonth=af.getMonth();ah.drawYear=ah.selectedYear=af.getFullYear();if(aj==="M"||aj==="Y"){this._notifyChange(ah)}},_restrictMinMax:function(ah,af){var ag=this._getMinMaxDate(ah,"min"),ai=this._getMinMaxDate(ah,"max"),ae=(ag&&af<ag?ag:af);return(ai&&ae>ai?ai:ae)},_notifyChange:function(af){var ae=this._get(af,"onChangeMonthYear");if(ae){ae.apply((af.input?af.input[0]:null),[af.selectedYear,af.selectedMonth+1,af])}},_getNumberOfMonths:function(af){var ae=this._get(af,"numberOfMonths");return(ae==null?[1,1]:(typeof ae==="number"?[1,ae]:ae))},_getMinMaxDate:function(af,ae){return this._determineDate(af,this._get(af,ae+"Date"),null)},_getDaysInMonth:function(ae,af){return 32-this._daylightSavingAdjust(new Date(ae,af,32)).getDate()},_getFirstDayOfMonth:function(ae,af){return new Date(ae,af,1).getDay()},_canAdjustMonth:function(ah,aj,ag,ai){var ae=this._getNumberOfMonths(ah),af=this._daylightSavingAdjust(new Date(ag,ai+(aj<0?aj:ae[0]*ae[1]),1));if(aj<0){af.setDate(this._getDaysInMonth(af.getFullYear(),af.getMonth()))}return this._isInRange(ah,af)},_isInRange:function(ai,ag){var af,al,ah=this._getMinMaxDate(ai,"min"),ae=this._getMinMaxDate(ai,"max"),am=null,aj=null,ak=this._get(ai,"yearRange");if(ak){af=ak.split(":");al=new Date().getFullYear();am=parseInt(af[0],10);aj=parseInt(af[1],10);if(af[0].match(/[+\-].*/)){am+=al}if(af[1].match(/[+\-].*/)){aj+=al}}return((!ah||ag.getTime()>=ah.getTime())&&(!ae||ag.getTime()<=ae.getTime())&&(!am||ag.getFullYear()>=am)&&(!aj||ag.getFullYear()<=aj))},_getFormatConfig:function(ae){var af=this._get(ae,"shortYearCutoff");af=(typeof af!=="string"?af:new Date().getFullYear()%100+parseInt(af,10));return{shortYearCutoff:af,dayNamesShort:this._get(ae,"dayNamesShort"),dayNames:this._get(ae,"dayNames"),monthNamesShort:this._get(ae,"monthNamesShort"),monthNames:this._get(ae,"monthNames")}},_formatDate:function(ah,ae,ai,ag){if(!ae){ah.currentDay=ah.selectedDay;ah.currentMonth=ah.selectedMonth;ah.currentYear=ah.selectedYear}var af=(ae?(typeof ae==="object"?ae:this._daylightSavingAdjust(new Date(ag,ai,ae))):this._daylightSavingAdjust(new Date(ah.currentYear,ah.currentMonth,ah.currentDay)));return this.formatDate(this._get(ah,"dateFormat"),af,this._getFormatConfig(ah))}});function h(af){var ae="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return af.delegate(ae,"mouseout",function(){I(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){I(this).removeClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!==-1){I(this).removeClass("ui-datepicker-next-hover")}}).delegate(ae,"mouseover",p)}function p(){if(!I.datepicker._isDisabledDatepicker(l.inline?l.dpDiv.parent()[0]:l.input[0])){I(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");I(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){I(this).addClass("ui-datepicker-prev-hover")}if(this.className.indexOf("ui-datepicker-next")!==-1){I(this).addClass("ui-datepicker-next-hover")}}}function x(ag,af){I.extend(ag,af);for(var ae in af){if(af[ae]==null){ag[ae]=af[ae]}}return ag}I.fn.datepicker=function(af){if(!this.length){return this}if(!I.datepicker.initialized){I(document).mousedown(I.datepicker._checkExternalClick);I.datepicker.initialized=true}if(I("#"+I.datepicker._mainDivId).length===0){I("body").append(I.datepicker.dpDiv)}var ae=Array.prototype.slice.call(arguments,1);if(typeof af==="string"&&(af==="isDisabled"||af==="getDate"||af==="widget")){return I.datepicker["_"+af+"Datepicker"].apply(I.datepicker,[this[0]].concat(ae))}if(af==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return I.datepicker["_"+af+"Datepicker"].apply(I.datepicker,[this[0]].concat(ae))}return this.each(function(){typeof af==="string"?I.datepicker["_"+af+"Datepicker"].apply(I.datepicker,[this].concat(ae)):I.datepicker._attachDatepicker(this,af)})};I.datepicker=new ac();I.datepicker.initialized=false;I.datepicker.uuid=new Date().getTime();I.datepicker.version="1.11.4";var E=I.datepicker;
/*!
   * jQuery UI Dialog 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/dialog/
   */
var U=I.widget("ui.dialog",{version:"1.11.4",options:{appendTo:"body",autoOpen:true,buttons:[],closeOnEscape:true,closeText:"Close",dialogClass:"",draggable:true,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:false,position:{my:"center",at:"center",of:window,collision:"fit",using:function(af){var ae=I(this).css(af).offset().top;if(ae<0){I(this).css("top",af.top-ae)}}},resizable:true,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:true,height:true,maxHeight:true,maxWidth:true,minHeight:true,minWidth:true,width:true},resizableRelatedOptions:{maxHeight:true,maxWidth:true,minHeight:true,minWidth:true},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height};this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)};this.originalTitle=this.element.attr("title");this.options.title=this.options.title||this.originalTitle;this._createWrapper();this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);this._createTitlebar();this._createButtonPane();if(this.options.draggable&&I.fn.draggable){this._makeDraggable()}if(this.options.resizable&&I.fn.resizable){this._makeResizable()}this._isOpen=false;this._trackFocus()},_init:function(){if(this.options.autoOpen){this.open()}},_appendTo:function(){var ae=this.options.appendTo;if(ae&&(ae.jquery||ae.nodeType)){return I(ae)}return this.document.find(ae||"body").eq(0)},_destroy:function(){var af,ae=this.originalPosition;this._untrackInstance();this._destroyOverlay();this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();this.uiDialog.stop(true,true).remove();if(this.originalTitle){this.element.attr("title",this.originalTitle)}af=ae.parent.children().eq(ae.index);if(af.length&&af[0]!==this.element[0]){af.before(this.element)}else{ae.parent.append(this.element)}},widget:function(){return this.uiDialog},disable:I.noop,enable:I.noop,close:function(ah){var ag,af=this;if(!this._isOpen||this._trigger("beforeClose",ah)===false){return}this._isOpen=false;this._focusedElement=null;this._destroyOverlay();this._untrackInstance();if(!this.opener.filter(":focusable").focus().length){try{ag=this.document[0].activeElement;if(ag&&ag.nodeName.toLowerCase()!=="body"){I(ag).blur()}}catch(ae){}}this._hide(this.uiDialog,this.options.hide,function(){af._trigger("close",ah)})},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(ai,ae){var ah=false,ag=this.uiDialog.siblings(".ui-front:visible").map(function(){return +I(this).css("z-index")}).get(),af=Math.max.apply(null,ag);if(af>=+this.uiDialog.css("z-index")){this.uiDialog.css("z-index",af+1);ah=true}if(ah&&!ae){this._trigger("focus",ai)}return ah},open:function(){var ae=this;if(this._isOpen){if(this._moveToTop()){this._focusTabbable()}return}this._isOpen=true;this.opener=I(this.document[0].activeElement);this._size();this._position();this._createOverlay();this._moveToTop(null,true);if(this.overlay){this.overlay.css("z-index",this.uiDialog.css("z-index")-1)}this._show(this.uiDialog,this.options.show,function(){ae._focusTabbable();ae._trigger("focus")});this._makeFocusTarget();this._trigger("open")},_focusTabbable:function(){var ae=this._focusedElement;if(!ae){ae=this.element.find("[autofocus]")}if(!ae.length){ae=this.element.find(":tabbable")}if(!ae.length){ae=this.uiDialogButtonPane.find(":tabbable")}if(!ae.length){ae=this.uiDialogTitlebarClose.filter(":tabbable")}if(!ae.length){ae=this.uiDialog}ae.eq(0).focus()},_keepFocus:function(ae){function af(){var ah=this.document[0].activeElement,ag=this.uiDialog[0]===ah||I.contains(this.uiDialog[0],ah);if(!ag){this._focusTabbable()}}ae.preventDefault();af.call(this);this._delay(af)},_createWrapper:function(){this.uiDialog=I("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo());this._on(this.uiDialog,{keydown:function(ag){if(this.options.closeOnEscape&&!ag.isDefaultPrevented()&&ag.keyCode&&ag.keyCode===I.ui.keyCode.ESCAPE){ag.preventDefault();this.close(ag);return}if(ag.keyCode!==I.ui.keyCode.TAB||ag.isDefaultPrevented()){return}var af=this.uiDialog.find(":tabbable"),ah=af.filter(":first"),ae=af.filter(":last");if((ag.target===ae[0]||ag.target===this.uiDialog[0])&&!ag.shiftKey){this._delay(function(){ah.focus()});ag.preventDefault()}else{if((ag.target===ah[0]||ag.target===this.uiDialog[0])&&ag.shiftKey){this._delay(function(){ae.focus()});ag.preventDefault()}}},mousedown:function(ae){if(this._moveToTop(ae)){this._focusTabbable()}}});if(!this.element.find("[aria-describedby]").length){this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})}},_createTitlebar:function(){var ae;this.uiDialogTitlebar=I("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);this._on(this.uiDialogTitlebar,{mousedown:function(af){if(!I(af.target).closest(".ui-dialog-titlebar-close")){this.uiDialog.focus()}}});this.uiDialogTitlebarClose=I("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:false}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);this._on(this.uiDialogTitlebarClose,{click:function(af){af.preventDefault();this.close(af)}});ae=I("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);this._title(ae);this.uiDialog.attr({"aria-labelledby":ae.attr("id")})},_title:function(ae){if(!this.options.title){ae.html("&#160;")}ae.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=I("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");this.uiButtonSet=I("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);this._createButtons()},_createButtons:function(){var af=this,ae=this.options.buttons;this.uiDialogButtonPane.remove();this.uiButtonSet.empty();if(I.isEmptyObject(ae)||(I.isArray(ae)&&!ae.length)){this.uiDialog.removeClass("ui-dialog-buttons");return}I.each(ae,function(ag,ah){var ai,aj;ah=I.isFunction(ah)?{click:ah,text:ag}:ah;ah=I.extend({type:"button"},ah);ai=ah.click;ah.click=function(){ai.apply(af.element[0],arguments)};aj={icons:ah.icons,text:ah.showText};delete ah.icons;delete ah.showText;I("<button></button>",ah).button(aj).appendTo(af.uiButtonSet)});this.uiDialog.addClass("ui-dialog-buttons");this.uiDialogButtonPane.appendTo(this.uiDialog)},_makeDraggable:function(){var ag=this,af=this.options;function ae(ah){return{position:ah.position,offset:ah.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(ah,ai){I(this).addClass("ui-dialog-dragging");ag._blockFrames();ag._trigger("dragStart",ah,ae(ai))},drag:function(ah,ai){ag._trigger("drag",ah,ae(ai))},stop:function(ah,ai){var ak=ai.offset.left-ag.document.scrollLeft(),aj=ai.offset.top-ag.document.scrollTop();af.position={my:"left top",at:"left"+(ak>=0?"+":"")+ak+" top"+(aj>=0?"+":"")+aj,of:ag.window};I(this).removeClass("ui-dialog-dragging");ag._unblockFrames();ag._trigger("dragStop",ah,ae(ai))}})},_makeResizable:function(){var aj=this,ah=this.options,ai=ah.resizable,ae=this.uiDialog.css("position"),ag=typeof ai==="string"?ai:"n,e,s,w,se,sw,ne,nw";function af(ak){return{originalPosition:ak.originalPosition,originalSize:ak.originalSize,position:ak.position,size:ak.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:ah.maxWidth,maxHeight:ah.maxHeight,minWidth:ah.minWidth,minHeight:this._minHeight(),handles:ag,start:function(ak,al){I(this).addClass("ui-dialog-resizing");aj._blockFrames();aj._trigger("resizeStart",ak,af(al))},resize:function(ak,al){aj._trigger("resize",ak,af(al))},stop:function(ak,al){var ao=aj.uiDialog.offset(),an=ao.left-aj.document.scrollLeft(),am=ao.top-aj.document.scrollTop();ah.height=aj.uiDialog.height();ah.width=aj.uiDialog.width();ah.position={my:"left top",at:"left"+(an>=0?"+":"")+an+" top"+(am>=0?"+":"")+am,of:aj.window};I(this).removeClass("ui-dialog-resizing");aj._unblockFrames();aj._trigger("resizeStop",ak,af(al))}}).css("position",ae)},_trackFocus:function(){this._on(this.widget(),{focusin:function(ae){this._makeFocusTarget();this._focusedElement=I(ae.target)}})},_makeFocusTarget:function(){this._untrackInstance();this._trackingInstances().unshift(this)},_untrackInstance:function(){var af=this._trackingInstances(),ae=I.inArray(this,af);if(ae!==-1){af.splice(ae,1)}},_trackingInstances:function(){var ae=this.document.data("ui-dialog-instances");if(!ae){ae=[];this.document.data("ui-dialog-instances",ae)}return ae},_minHeight:function(){var ae=this.options;return ae.height==="auto"?ae.minHeight:Math.min(ae.minHeight,ae.height)},_position:function(){var ae=this.uiDialog.is(":visible");if(!ae){this.uiDialog.show()}this.uiDialog.position(this.options.position);if(!ae){this.uiDialog.hide()}},_setOptions:function(ag){var ah=this,af=false,ae={};I.each(ag,function(ai,aj){ah._setOption(ai,aj);if(ai in ah.sizeRelatedOptions){af=true}if(ai in ah.resizableRelatedOptions){ae[ai]=aj}});if(af){this._size();this._position()}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option",ae)}},_setOption:function(ag,ah){var af,ai,ae=this.uiDialog;if(ag==="dialogClass"){ae.removeClass(this.options.dialogClass).addClass(ah)}if(ag==="disabled"){return}this._super(ag,ah);if(ag==="appendTo"){this.uiDialog.appendTo(this._appendTo())}if(ag==="buttons"){this._createButtons()}if(ag==="closeText"){this.uiDialogTitlebarClose.button({label:""+ah})}if(ag==="draggable"){af=ae.is(":data(ui-draggable)");if(af&&!ah){ae.draggable("destroy")}if(!af&&ah){this._makeDraggable()}}if(ag==="position"){this._position()}if(ag==="resizable"){ai=ae.is(":data(ui-resizable)");if(ai&&!ah){ae.resizable("destroy")}if(ai&&typeof ah==="string"){ae.resizable("option","handles",ah)}if(!ai&&ah!==false){this._makeResizable()}}if(ag==="title"){this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))}},_size:function(){var ae,ag,ah,af=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});if(af.minWidth>af.width){af.width=af.minWidth}ae=this.uiDialog.css({height:"auto",width:af.width}).outerHeight();ag=Math.max(0,af.minHeight-ae);ah=typeof af.maxHeight==="number"?Math.max(0,af.maxHeight-ae):"none";if(af.height==="auto"){this.element.css({minHeight:ag,maxHeight:ah,height:"auto"})}else{this.element.height(Math.max(0,af.height-ae))}if(this.uiDialog.is(":data(ui-resizable)")){this.uiDialog.resizable("option","minHeight",this._minHeight())}},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var ae=I(this);return I("<div>").css({position:"absolute",width:ae.outerWidth(),height:ae.outerHeight()}).appendTo(ae.parent()).offset(ae.offset())[0]})},_unblockFrames:function(){if(this.iframeBlocks){this.iframeBlocks.remove();delete this.iframeBlocks}},_allowInteraction:function(ae){if(I(ae.target).closest(".ui-dialog").length){return true}return !!I(ae.target).closest(".ui-datepicker").length},_createOverlay:function(){if(!this.options.modal){return}var ae=true;this._delay(function(){ae=false});if(!this.document.data("ui-dialog-overlays")){this._on(this.document,{focusin:function(af){if(ae){return}if(!this._allowInteraction(af)){af.preventDefault();this._trackingInstances()[0]._focusTabbable()}}})}this.overlay=I("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());this._on(this.overlay,{mousedown:"_keepFocus"});this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)},_destroyOverlay:function(){if(!this.options.modal){return}if(this.overlay){var ae=this.document.data("ui-dialog-overlays")-1;if(!ae){this.document.unbind("focusin").removeData("ui-dialog-overlays")}else{this.document.data("ui-dialog-overlays",ae)}this.overlay.remove();this.overlay=null}}});
/*!
   * jQuery UI Progressbar 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/progressbar/
   */
var V=I.widget("ui.progressbar",{version:"1.11.4",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue();this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min});this.valueDiv=I("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.valueDiv.remove()},value:function(ae){if(ae===undefined){return this.options.value}this.options.value=this._constrainedValue(ae);this._refreshValue()},_constrainedValue:function(ae){if(ae===undefined){ae=this.options.value}this.indeterminate=ae===false;if(typeof ae!=="number"){ae=0}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,ae))},_setOptions:function(ae){var af=ae.value;delete ae.value;this._super(ae);this.options.value=this._constrainedValue(af);this._refreshValue()},_setOption:function(ae,af){if(ae==="max"){af=Math.max(this.min,af)}if(ae==="disabled"){this.element.toggleClass("ui-state-disabled",!!af).attr("aria-disabled",af)}this._super(ae,af)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var af=this.options.value,ae=this._percentage();this.valueDiv.toggle(this.indeterminate||af>this.min).toggleClass("ui-corner-right",af===this.options.max).width(ae.toFixed(0)+"%");this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate);if(this.indeterminate){this.element.removeAttr("aria-valuenow");if(!this.overlayDiv){this.overlayDiv=I("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":af});if(this.overlayDiv){this.overlayDiv.remove();this.overlayDiv=null}}if(this.oldValue!==af){this.oldValue=af;this._trigger("change")}if(af===this.options.max){this._trigger("complete")}}});
/*!
   * jQuery UI Selectmenu 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/selectmenu
   */
var W=I.widget("ui.selectmenu",{version:"1.11.4",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var ae=this.element.uniqueId().attr("id");this.ids={element:ae,button:ae+"-button",menu:ae+"-menu"};this._drawButton();this._drawMenu();if(this.options.disabled){this.disable()}},_drawButton:function(){var ae=this;this.label=I("label[for='"+this.ids.element+"']").attr("for",this.ids.button);this._on(this.label,{click:function(af){this.button.focus();af.preventDefault()}});this.element.hide();this.button=I("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element);I("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button);this.buttonText=I("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button);this._setText(this.buttonText,this.element.find("option:selected").text());this._resizeButton();this._on(this.button,this._buttonEvents);this.button.one("focusin",function(){if(!ae.menuItems){ae._refreshMenu()}});this._hoverable(this.button);this._focusable(this.button)},_drawMenu:function(){var ae=this;this.menu=I("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu});this.menuWrap=I("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo());this.menuInstance=this.menu.menu({role:"listbox",select:function(af,ag){af.preventDefault();ae._setSelection();ae._select(ag.item.data("ui-selectmenu-item"),af)},focus:function(ag,ah){var af=ah.item.data("ui-selectmenu-item");if(ae.focusIndex!=null&&af.index!==ae.focusIndex){ae._trigger("focus",ag,{item:af});if(!ae.isOpen){ae._select(af,ag)}}ae.focusIndex=af.index;ae.button.attr("aria-activedescendant",ae.menuItems.eq(af.index).attr("id"))}}).menu("instance");this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");this.menuInstance._off(this.menu,"mouseleave");this.menuInstance._closeOnDocumentClick=function(){return false};this.menuInstance._isDivider=function(){return false}},refresh:function(){this._refreshMenu();this._setText(this.buttonText,this._getSelectedItem().text());if(!this.options.width){this._resizeButton()}},_refreshMenu:function(){this.menu.empty();var af,ae=this.element.find("option");if(!ae.length){return}this._parseOptions(ae);this._renderMenu(this.menu,this.items);this.menuInstance.refresh();this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup");af=this._getSelectedItem();this.menuInstance.focus(null,af);this._setAria(af.data("ui-selectmenu-item"));this._setOption("disabled",this.element.prop("disabled"))},open:function(ae){if(this.options.disabled){return}if(!this.menuItems){this._refreshMenu()}else{this.menu.find(".ui-state-focus").removeClass("ui-state-focus");this.menuInstance.focus(null,this._getSelectedItem())}this.isOpen=true;this._toggleAttr();this._resizeMenu();this._position();this._on(this.document,this._documentClick);this._trigger("open",ae)},_position:function(){this.menuWrap.position(I.extend({of:this.button},this.options.position))},close:function(ae){if(!this.isOpen){return}this.isOpen=false;this._toggleAttr();this.range=null;this._off(this.document);this._trigger("close",ae)},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(ag,af){var ah=this,ae="";I.each(af,function(ai,aj){if(aj.optgroup!==ae){I("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(aj.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:aj.optgroup}).appendTo(ag);ae=aj.optgroup}ah._renderItemData(ag,aj)})},_renderItemData:function(ae,af){return this._renderItem(ae,af).data("ui-selectmenu-item",af)},_renderItem:function(af,ag){var ae=I("<li>");if(ag.disabled){ae.addClass("ui-state-disabled")}this._setText(ae,ag.label);return ae.appendTo(af)},_setText:function(ae,af){if(af){ae.text(af)}else{ae.html("&#160;")}},_move:function(ai,ah){var ag,af,ae=".ui-menu-item";if(this.isOpen){ag=this.menuItems.eq(this.focusIndex)}else{ag=this.menuItems.eq(this.element[0].selectedIndex);ae+=":not(.ui-state-disabled)"}if(ai==="first"||ai==="last"){af=ag[ai==="first"?"prevAll":"nextAll"](ae).eq(-1)}else{af=ag[ai+"All"](ae).eq(0)}if(af.length){this.menuInstance.focus(ah,af)}},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(ae){this[this.isOpen?"close":"open"](ae)},_setSelection:function(){var ae;if(!this.range){return}if(window.getSelection){ae=window.getSelection();ae.removeAllRanges();ae.addRange(this.range)}else{this.range.select()}this.button.focus()},_documentClick:{mousedown:function(ae){if(!this.isOpen){return}if(!I(ae.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length){this.close(ae)}}},_buttonEvents:{mousedown:function(){var ae;if(window.getSelection){ae=window.getSelection();if(ae.rangeCount){this.range=ae.getRangeAt(0)}}else{this.range=document.selection.createRange()}},click:function(ae){this._setSelection();this._toggle(ae)},keydown:function(af){var ae=true;switch(af.keyCode){case I.ui.keyCode.TAB:case I.ui.keyCode.ESCAPE:this.close(af);ae=false;break;case I.ui.keyCode.ENTER:if(this.isOpen){this._selectFocusedItem(af)}break;case I.ui.keyCode.UP:if(af.altKey){this._toggle(af)}else{this._move("prev",af)}break;case I.ui.keyCode.DOWN:if(af.altKey){this._toggle(af)}else{this._move("next",af)}break;case I.ui.keyCode.SPACE:if(this.isOpen){this._selectFocusedItem(af)}else{this._toggle(af)}break;case I.ui.keyCode.LEFT:this._move("prev",af);break;case I.ui.keyCode.RIGHT:this._move("next",af);break;case I.ui.keyCode.HOME:case I.ui.keyCode.PAGE_UP:this._move("first",af);break;case I.ui.keyCode.END:case I.ui.keyCode.PAGE_DOWN:this._move("last",af);break;default:this.menu.trigger(af);ae=false}if(ae){af.preventDefault()}}},_selectFocusedItem:function(af){var ae=this.menuItems.eq(this.focusIndex);if(!ae.hasClass("ui-state-disabled")){this._select(ae.data("ui-selectmenu-item"),af)}},_select:function(af,ae){var ag=this.element[0].selectedIndex;this.element[0].selectedIndex=af.index;this._setText(this.buttonText,af.label);this._setAria(af);this._trigger("select",ae,{item:af});if(af.index!==ag){this._trigger("change",ae,{item:af})}this.close(ae)},_setAria:function(ae){var af=this.menuItems.eq(ae.index).attr("id");this.button.attr({"aria-labelledby":af,"aria-activedescendant":af});this.menu.attr("aria-activedescendant",af)},_setOption:function(ae,af){if(ae==="icons"){this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(af.button)}this._super(ae,af);if(ae==="appendTo"){this.menuWrap.appendTo(this._appendTo())}if(ae==="disabled"){this.menuInstance.option("disabled",af);this.button.toggleClass("ui-state-disabled",af).attr("aria-disabled",af);this.element.prop("disabled",af);if(af){this.button.attr("tabindex",-1);this.close()}else{this.button.attr("tabindex",0)}}if(ae==="width"){this._resizeButton()}},_appendTo:function(){var ae=this.options.appendTo;if(ae){ae=ae.jquery||ae.nodeType?I(ae):this.document.find(ae).eq(0)}if(!ae||!ae[0]){ae=this.element.closest(".ui-front")}if(!ae.length){ae=this.document[0].body}return ae},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen);this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen);this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var ae=this.options.width;if(!ae){ae=this.element.show().outerWidth();this.element.hide()}this.button.outerWidth(ae)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(ae){var af=[];ae.each(function(ah,aj){var ai=I(aj),ag=ai.parent("optgroup");af.push({element:ai,index:ah,value:ai.val(),label:ai.text(),optgroup:ag.attr("label")||"",disabled:ag.prop("disabled")||ai.prop("disabled")})});this.items=af},_destroy:function(){this.menuWrap.remove();this.button.remove();this.element.show();this.element.removeUniqueId();this.label.attr("for",this.ids.element)}});
/*!
   * jQuery UI Slider 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/slider/
   */
var g=I.widget("ui.slider",I.ui.mouse,{version:"1.11.4",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this._calculateNewMax();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");this._refresh();this._setOption("disabled",this.options.disabled);this._animateOff=false},_refresh:function(){this._createRange();this._createHandles();this._setupEvents();this._refreshValue()},_createHandles:function(){var ah,ae,af=this.options,aj=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),ai="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",ag=[];ae=(af.values&&af.values.length)||1;if(aj.length>ae){aj.slice(ae).remove();aj=aj.slice(0,ae)}for(ah=aj.length;ah<ae;ah++){ag.push(ai)}this.handles=aj.add(I(ag.join("")).appendTo(this.element));this.handle=this.handles.eq(0);this.handles.each(function(ak){I(this).data("ui-slider-handle-index",ak)})},_createRange:function(){var ae=this.options,af="";if(ae.range){if(ae.range===true){if(!ae.values){ae.values=[this._valueMin(),this._valueMin()]}else{if(ae.values.length&&ae.values.length!==2){ae.values=[ae.values[0],ae.values[0]]}else{if(I.isArray(ae.values)){ae.values=ae.values.slice(0)}}}}if(!this.range||!this.range.length){this.range=I("<div></div>").appendTo(this.element);af="ui-slider-range ui-widget-header ui-corner-all"}else{this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""})}this.range.addClass(af+((ae.range==="min"||ae.range==="max")?" ui-slider-range-"+ae.range:""))}else{if(this.range){this.range.remove()}this.range=null}},_setupEvents:function(){this._off(this.handles);this._on(this.handles,this._handleEvents);this._hoverable(this.handles);this._focusable(this.handles)},_destroy:function(){this.handles.remove();if(this.range){this.range.remove()}this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");this._mouseDestroy()},_mouseCapture:function(ag){var ak,an,af,ai,am,ao,aj,ae,al=this,ah=this.options;if(ah.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();ak={x:ag.pageX,y:ag.pageY};an=this._normValueFromMouse(ak);af=this._valueMax()-this._valueMin()+1;this.handles.each(function(ap){var aq=Math.abs(an-al.values(ap));if((af>aq)||(af===aq&&(ap===al._lastChangedValue||al.values(ap)===ah.min))){af=aq;ai=I(this);am=ap}});ao=this._start(ag,am);if(ao===false){return false}this._mouseSliding=true;this._handleIndex=am;ai.addClass("ui-state-active").focus();aj=ai.offset();ae=!I(ag.target).parents().addBack().is(".ui-slider-handle");this._clickOffset=ae?{left:0,top:0}:{left:ag.pageX-aj.left-(ai.width()/2),top:ag.pageY-aj.top-(ai.height()/2)-(parseInt(ai.css("borderTopWidth"),10)||0)-(parseInt(ai.css("borderBottomWidth"),10)||0)+(parseInt(ai.css("marginTop"),10)||0)};if(!this.handles.hasClass("ui-state-hover")){this._slide(ag,am,an)}this._animateOff=true;return true},_mouseStart:function(){return true},_mouseDrag:function(ag){var ae={x:ag.pageX,y:ag.pageY},af=this._normValueFromMouse(ae);this._slide(ag,this._handleIndex,af);return false},_mouseStop:function(ae){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(ae,this._handleIndex);this._change(ae,this._handleIndex);this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"},_normValueFromMouse:function(af){var ae,ai,ah,ag,aj;if(this.orientation==="horizontal"){ae=this.elementSize.width;ai=af.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{ae=this.elementSize.height;ai=af.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}ah=(ai/ae);if(ah>1){ah=1}if(ah<0){ah=0}if(this.orientation==="vertical"){ah=1-ah}ag=this._valueMax()-this._valueMin();aj=this._valueMin()+ah*ag;return this._trimAlignValue(aj)},_start:function(ag,af){var ae={handle:this.handles[af],value:this.value()};if(this.options.values&&this.options.values.length){ae.value=this.values(af);ae.values=this.values()}return this._trigger("start",ag,ae)},_slide:function(ai,ah,ag){var ae,af,aj;if(this.options.values&&this.options.values.length){ae=this.values(ah?0:1);if((this.options.values.length===2&&this.options.range===true)&&((ah===0&&ag>ae)||(ah===1&&ag<ae))){ag=ae}if(ag!==this.values(ah)){af=this.values();af[ah]=ag;aj=this._trigger("slide",ai,{handle:this.handles[ah],value:ag,values:af});ae=this.values(ah?0:1);if(aj!==false){this.values(ah,ag)}}}else{if(ag!==this.value()){aj=this._trigger("slide",ai,{handle:this.handles[ah],value:ag});if(aj!==false){this.value(ag)}}}},_stop:function(ag,af){var ae={handle:this.handles[af],value:this.value()};if(this.options.values&&this.options.values.length){ae.value=this.values(af);ae.values=this.values()}this._trigger("stop",ag,ae)},_change:function(ag,af){if(!this._keySliding&&!this._mouseSliding){var ae={handle:this.handles[af],value:this.value()};if(this.options.values&&this.options.values.length){ae.value=this.values(af);ae.values=this.values()}this._lastChangedValue=af;this._trigger("change",ag,ae)}},value:function(ae){if(arguments.length){this.options.value=this._trimAlignValue(ae);this._refreshValue();this._change(null,0);return}return this._value()},values:function(af,ai){var ah,ae,ag;if(arguments.length>1){this.options.values[af]=this._trimAlignValue(ai);this._refreshValue();this._change(null,af);return}if(arguments.length){if(I.isArray(arguments[0])){ah=this.options.values;ae=arguments[0];for(ag=0;ag<ah.length;ag+=1){ah[ag]=this._trimAlignValue(ae[ag]);this._change(null,ag)}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(af)}else{return this.value()}}}else{return this._values()}},_setOption:function(af,ag){var ae,ah=0;if(af==="range"&&this.options.range===true){if(ag==="min"){this.options.value=this._values(0);this.options.values=null}else{if(ag==="max"){this.options.value=this._values(this.options.values.length-1);this.options.values=null}}}if(I.isArray(this.options.values)){ah=this.options.values.length}if(af==="disabled"){this.element.toggleClass("ui-state-disabled",!!ag)}this._super(af,ag);switch(af){case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();this.handles.css(ag==="horizontal"?"bottom":"left","");break;case"value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;this._refreshValue();for(ae=0;ae<ah;ae+=1){this._change(null,ae)}this._animateOff=false;break;case"step":case"min":case"max":this._animateOff=true;this._calculateNewMax();this._refreshValue();this._animateOff=false;break;case"range":this._animateOff=true;this._refresh();this._animateOff=false;break}},_value:function(){var ae=this.options.value;ae=this._trimAlignValue(ae);return ae},_values:function(ae){var ah,ag,af;if(arguments.length){ah=this.options.values[ae];ah=this._trimAlignValue(ah);return ah}else{if(this.options.values&&this.options.values.length){ag=this.options.values.slice();for(af=0;af<ag.length;af+=1){ag[af]=this._trimAlignValue(ag[af])}return ag}else{return[]}}},_trimAlignValue:function(ah){if(ah<=this._valueMin()){return this._valueMin()}if(ah>=this._valueMax()){return this._valueMax()}var ae=(this.options.step>0)?this.options.step:1,ag=(ah-this._valueMin())%ae,af=ah-ag;if(Math.abs(ag)*2>=ae){af+=(ag>0)?ae:(-ae)}return parseFloat(af.toFixed(5))},_calculateNewMax:function(){var ae=this.options.max,af=this._valueMin(),ag=this.options.step,ah=Math.floor((+(ae-af).toFixed(this._precision()))/ag)*ag;ae=ah+af;this.max=parseFloat(ae.toFixed(this._precision()))},_precision:function(){var ae=this._precisionOf(this.options.step);if(this.options.min!==null){ae=Math.max(ae,this._precisionOf(this.options.min))}return ae},_precisionOf:function(af){var ag=af.toString(),ae=ag.indexOf(".");return ae===-1?0:ag.length-ae-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var aj,ai,am,ak,an,ah=this.options.range,ag=this.options,al=this,af=(!this._animateOff)?ag.animate:false,ae={};if(this.options.values&&this.options.values.length){this.handles.each(function(ao){ai=(al.values(ao)-al._valueMin())/(al._valueMax()-al._valueMin())*100;ae[al.orientation==="horizontal"?"left":"bottom"]=ai+"%";I(this).stop(1,1)[af?"animate":"css"](ae,ag.animate);if(al.options.range===true){if(al.orientation==="horizontal"){if(ao===0){al.range.stop(1,1)[af?"animate":"css"]({left:ai+"%"},ag.animate)}if(ao===1){al.range[af?"animate":"css"]({width:(ai-aj)+"%"},{queue:false,duration:ag.animate})}}else{if(ao===0){al.range.stop(1,1)[af?"animate":"css"]({bottom:(ai)+"%"},ag.animate)}if(ao===1){al.range[af?"animate":"css"]({height:(ai-aj)+"%"},{queue:false,duration:ag.animate})}}}aj=ai})}else{am=this.value();ak=this._valueMin();an=this._valueMax();ai=(an!==ak)?(am-ak)/(an-ak)*100:0;ae[this.orientation==="horizontal"?"left":"bottom"]=ai+"%";this.handle.stop(1,1)[af?"animate":"css"](ae,ag.animate);if(ah==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[af?"animate":"css"]({width:ai+"%"},ag.animate)}if(ah==="max"&&this.orientation==="horizontal"){this.range[af?"animate":"css"]({width:(100-ai)+"%"},{queue:false,duration:ag.animate})}if(ah==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[af?"animate":"css"]({height:ai+"%"},ag.animate)}if(ah==="max"&&this.orientation==="vertical"){this.range[af?"animate":"css"]({height:(100-ai)+"%"},{queue:false,duration:ag.animate})}}},_handleEvents:{keydown:function(ai){var aj,ag,af,ah,ae=I(ai.target).data("ui-slider-handle-index");switch(ai.keyCode){case I.ui.keyCode.HOME:case I.ui.keyCode.END:case I.ui.keyCode.PAGE_UP:case I.ui.keyCode.PAGE_DOWN:case I.ui.keyCode.UP:case I.ui.keyCode.RIGHT:case I.ui.keyCode.DOWN:case I.ui.keyCode.LEFT:ai.preventDefault();if(!this._keySliding){this._keySliding=true;I(ai.target).addClass("ui-state-active");aj=this._start(ai,ae);if(aj===false){return}}break}ah=this.options.step;if(this.options.values&&this.options.values.length){ag=af=this.values(ae)}else{ag=af=this.value()}switch(ai.keyCode){case I.ui.keyCode.HOME:af=this._valueMin();break;case I.ui.keyCode.END:af=this._valueMax();break;case I.ui.keyCode.PAGE_UP:af=this._trimAlignValue(ag+((this._valueMax()-this._valueMin())/this.numPages));break;case I.ui.keyCode.PAGE_DOWN:af=this._trimAlignValue(ag-((this._valueMax()-this._valueMin())/this.numPages));break;case I.ui.keyCode.UP:case I.ui.keyCode.RIGHT:if(ag===this._valueMax()){return}af=this._trimAlignValue(ag+ah);break;case I.ui.keyCode.DOWN:case I.ui.keyCode.LEFT:if(ag===this._valueMin()){return}af=this._trimAlignValue(ag-ah);break}this._slide(ai,ae,af)},keyup:function(af){var ae=I(af.target).data("ui-slider-handle-index");if(this._keySliding){this._keySliding=false;this._stop(af,ae);this._change(af,ae);I(af.target).removeClass("ui-state-active")}}}});
/*!
   * jQuery UI Spinner 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/spinner/
   */
function u(ae){return function(){var af=this.element.val();ae.apply(this,arguments);this._refresh();if(af!==this.element.val()){this._trigger("change")}}}var K=I.widget("ui.spinner",{version:"1.11.4",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:true,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max);this._setOption("min",this.options.min);this._setOption("step",this.options.step);if(this.value()!==""){this._value(this.element.val(),true)}this._draw();this._on(this._events);this._refresh();this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var ae={},af=this.element;I.each(["min","max","step"],function(ag,ah){var ai=af.attr(ah);if(ai!==undefined&&ai.length){ae[ah]=ai}});return ae},_events:{keydown:function(ae){if(this._start(ae)&&this._keydown(ae)){ae.preventDefault()}},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(ae){if(this.cancelBlur){delete this.cancelBlur;return}this._stop();this._refresh();if(this.previous!==this.element.val()){this._trigger("change",ae)}},mousewheel:function(ae,af){if(!af){return}if(!this.spinning&&!this._start(ae)){return false}this._spin((af>0?1:-1)*this.options.step,ae);clearTimeout(this.mousewheelTimer);this.mousewheelTimer=this._delay(function(){if(this.spinning){this._stop(ae)}},100);ae.preventDefault()},"mousedown .ui-spinner-button":function(af){var ae;ae=this.element[0]===this.document[0].activeElement?this.previous:this.element.val();function ag(){var ah=this.element[0]===this.document[0].activeElement;if(!ah){this.element.focus();this.previous=ae;this._delay(function(){this.previous=ae})}}af.preventDefault();ag.call(this);this.cancelBlur=true;this._delay(function(){delete this.cancelBlur;ag.call(this)});if(this._start(af)===false){return}this._repeat(null,I(af.currentTarget).hasClass("ui-spinner-up")?1:-1,af)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(ae){if(!I(ae.currentTarget).hasClass("ui-state-active")){return}if(this._start(ae)===false){return false}this._repeat(null,I(ae.currentTarget).hasClass("ui-spinner-up")?1:-1,ae)},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var ae=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton");this.buttons=ae.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all");if(this.buttons.height()>Math.ceil(ae.height()*0.5)&&ae.height()>0){ae.height(ae.height())}if(this.options.disabled){this.disable()}},_keydown:function(af){var ae=this.options,ag=I.ui.keyCode;switch(af.keyCode){case ag.UP:this._repeat(null,1,af);return true;case ag.DOWN:this._repeat(null,-1,af);return true;case ag.PAGE_UP:this._repeat(null,ae.page,af);return true;case ag.PAGE_DOWN:this._repeat(null,-ae.page,af);return true}return false},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"},_start:function(ae){if(!this.spinning&&this._trigger("start",ae)===false){return false}if(!this.counter){this.counter=1}this.spinning=true;return true},_repeat:function(af,ae,ag){af=af||500;clearTimeout(this.timer);this.timer=this._delay(function(){this._repeat(40,ae,ag)},af);this._spin(ae*this.options.step,ag)},_spin:function(af,ae){var ag=this.value()||0;if(!this.counter){this.counter=1}ag=this._adjustValue(ag+af*this._increment(this.counter));if(!this.spinning||this._trigger("spin",ae,{value:ag})!==false){this._value(ag);this.counter++}},_increment:function(ae){var af=this.options.incremental;if(af){return I.isFunction(af)?af(ae):Math.floor(ae*ae*ae/50000-ae*ae/500+17*ae/200+1)}return 1},_precision:function(){var ae=this._precisionOf(this.options.step);if(this.options.min!==null){ae=Math.max(ae,this._precisionOf(this.options.min))}return ae},_precisionOf:function(af){var ag=af.toString(),ae=ag.indexOf(".");return ae===-1?0:ag.length-ae-1},_adjustValue:function(ag){var af,ah,ae=this.options;af=ae.min!==null?ae.min:0;ah=ag-af;ah=Math.round(ah/ae.step)*ae.step;ag=af+ah;ag=parseFloat(ag.toFixed(this._precision()));if(ae.max!==null&&ag>ae.max){return ae.max}if(ae.min!==null&&ag<ae.min){return ae.min}return ag},_stop:function(ae){if(!this.spinning){return}clearTimeout(this.timer);clearTimeout(this.mousewheelTimer);this.counter=0;this.spinning=false;this._trigger("stop",ae)},_setOption:function(ae,af){if(ae==="culture"||ae==="numberFormat"){var ag=this._parse(this.element.val());this.options[ae]=af;this.element.val(this._format(ag));return}if(ae==="max"||ae==="min"||ae==="step"){if(typeof af==="string"){af=this._parse(af)}}if(ae==="icons"){this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(af.up);this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(af.down)}this._super(ae,af);if(ae==="disabled"){this.widget().toggleClass("ui-state-disabled",!!af);this.element.prop("disabled",!!af);this.buttons.button(af?"disable":"enable")}},_setOptions:u(function(ae){this._super(ae)}),_parse:function(ae){if(typeof ae==="string"&&ae!==""){ae=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(ae,10,this.options.culture):+ae}return ae===""||isNaN(ae)?null:ae},_format:function(ae){if(ae===""){return""}return window.Globalize&&this.options.numberFormat?Globalize.format(ae,this.options.numberFormat,this.options.culture):ae},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var ae=this.value();if(ae===null){return false}return ae===this._adjustValue(ae)},_value:function(ag,ae){var af;if(ag!==""){af=this._parse(ag);if(af!==null){if(!ae){af=this._adjustValue(af)}ag=this._format(af)}}this.element.val(ag);this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",false).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");this.uiSpinner.replaceWith(this.element)},stepUp:u(function(ae){this._stepUp(ae)}),_stepUp:function(ae){if(this._start()){this._spin((ae||1)*this.options.step);this._stop()}},stepDown:u(function(ae){this._stepDown(ae)}),_stepDown:function(ae){if(this._start()){this._spin((ae||1)*-this.options.step);this._stop()}},pageUp:u(function(ae){this._stepUp((ae||1)*this.options.page)}),pageDown:u(function(ae){this._stepDown((ae||1)*this.options.page)}),value:function(ae){if(!arguments.length){return this._parse(this.element.val())}u(this._value).call(this,ae)},widget:function(){return this.uiSpinner}});
/*!
   * jQuery UI Tabs 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/tabs/
   */
var k=I.widget("ui.tabs",{version:"1.11.4",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:(function(){var ae=/#.*$/;return function(ag){var ai,ah;ag=ag.cloneNode(false);ai=ag.href.replace(ae,"");ah=location.href.replace(ae,"");try{ai=decodeURIComponent(ai)}catch(af){}try{ah=decodeURIComponent(ah)}catch(af){}return ag.hash.length>1&&ai===ah}})(),_create:function(){var af=this,ae=this.options;this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",ae.collapsible);this._processTabs();ae.active=this._initialActive();if(I.isArray(ae.disabled)){ae.disabled=I.unique(ae.disabled.concat(I.map(this.tabs.filter(".ui-state-disabled"),function(ag){return af.tabs.index(ag)}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(ae.active)}else{this.active=I()}this._refresh();if(this.active.length){this.load(ae.active)}},_initialActive:function(){var af=this.options.active,ae=this.options.collapsible,ag=location.hash.substring(1);if(af===null){if(ag){this.tabs.each(function(ah,ai){if(I(ai).attr("aria-controls")===ag){af=ah;return false}})}if(af===null){af=this.tabs.index(this.tabs.filter(".ui-tabs-active"))}if(af===null||af===-1){af=this.tabs.length?0:false}}if(af!==false){af=this.tabs.index(this.tabs.eq(af));if(af===-1){af=ae?false:0}}if(!ae&&af===false&&this.anchors.length){af=0}return af},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?I():this._getPanelForTab(this.active)}},_tabKeydown:function(ag){var af=I(this.document[0].activeElement).closest("li"),ae=this.tabs.index(af),ah=true;if(this._handlePageNav(ag)){return}switch(ag.keyCode){case I.ui.keyCode.RIGHT:case I.ui.keyCode.DOWN:ae++;break;case I.ui.keyCode.UP:case I.ui.keyCode.LEFT:ah=false;ae--;break;case I.ui.keyCode.END:ae=this.anchors.length-1;break;case I.ui.keyCode.HOME:ae=0;break;case I.ui.keyCode.SPACE:ag.preventDefault();clearTimeout(this.activating);this._activate(ae);return;case I.ui.keyCode.ENTER:ag.preventDefault();clearTimeout(this.activating);this._activate(ae===this.options.active?false:ae);return;default:return}ag.preventDefault();clearTimeout(this.activating);ae=this._focusNextTab(ae,ah);if(!ag.ctrlKey&&!ag.metaKey){af.attr("aria-selected","false");this.tabs.eq(ae).attr("aria-selected","true");this.activating=this._delay(function(){this.option("active",ae)},this.delay)}},_panelKeydown:function(ae){if(this._handlePageNav(ae)){return}if(ae.ctrlKey&&ae.keyCode===I.ui.keyCode.UP){ae.preventDefault();this.active.focus()}},_handlePageNav:function(ae){if(ae.altKey&&ae.keyCode===I.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));return true}if(ae.altKey&&ae.keyCode===I.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));return true}},_findNextTab:function(af,ag){var ae=this.tabs.length-1;function ah(){if(af>ae){af=0}if(af<0){af=ae}return af}while(I.inArray(ah(),this.options.disabled)!==-1){af=ag?af+1:af-1}return af},_focusNextTab:function(ae,af){ae=this._findNextTab(ae,af);this.tabs.eq(ae).focus();return ae},_setOption:function(ae,af){if(ae==="active"){this._activate(af);return}if(ae==="disabled"){this._setupDisabled(af);return}this._super(ae,af);if(ae==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",af);if(!af&&this.options.active===false){this._activate(0)}}if(ae==="event"){this._setupEvents(af)}if(ae==="heightStyle"){this._setupHeightStyle(af)}},_sanitizeSelector:function(ae){return ae?ae.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var af=this.options,ae=this.tablist.children(":has(a[href])");af.disabled=I.map(ae.filter(".ui-state-disabled"),function(ag){return ae.index(ag)});this._processTabs();if(af.active===false||!this.anchors.length){af.active=false;this.active=I()}else{if(this.active.length&&!I.contains(this.tablist[0],this.active[0])){if(this.tabs.length===af.disabled.length){af.active=false;this.active=I()}else{this._activate(this._findNextTab(Math.max(0,af.active-1),false))}}else{af.active=this.tabs.index(this.active)}}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"});if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0});this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})}},_processTabs:function(){var ag=this,ah=this.tabs,af=this.anchors,ae=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(ai){if(I(this).is(".ui-state-disabled")){ai.preventDefault()}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(I(this).closest("li").is(".ui-state-disabled")){this.blur()}});this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});this.anchors=this.tabs.map(function(){return I("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});this.panels=I();this.anchors.each(function(an,al){var ai,aj,am,ak=I(al).uniqueId().attr("id"),ao=I(al).closest("li"),ap=ao.attr("aria-controls");if(ag._isLocal(al)){ai=al.hash;am=ai.substring(1);aj=ag.element.find(ag._sanitizeSelector(ai))}else{am=ao.attr("aria-controls")||I({}).uniqueId()[0].id;ai="#"+am;aj=ag.element.find(ai);if(!aj.length){aj=ag._createPanel(am);aj.insertAfter(ag.panels[an-1]||ag.tablist)}aj.attr("aria-live","polite")}if(aj.length){ag.panels=ag.panels.add(aj)}if(ap){ao.data("ui-tabs-aria-controls",ap)}ao.attr({"aria-controls":am,"aria-labelledby":ak});aj.attr("aria-labelledby",ak)});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel");if(ah){this._off(ah.not(this.tabs));this._off(af.not(this.anchors));this._off(ae.not(this.panels))}},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(ae){return I("<div>").attr("id",ae).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)},_setupDisabled:function(ag){if(I.isArray(ag)){if(!ag.length){ag=false}else{if(ag.length===this.anchors.length){ag=true}}}for(var af=0,ae;(ae=this.tabs[af]);af++){if(ag===true||I.inArray(af,ag)!==-1){I(ae).addClass("ui-state-disabled").attr("aria-disabled","true")}else{I(ae).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=ag},_setupEvents:function(af){var ae={};if(af){I.each(af.split(" "),function(ah,ag){ae[ag]="_eventHandler"})}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(true,this.anchors,{click:function(ag){ag.preventDefault()}});this._on(this.anchors,ae);this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(ae){var ag,af=this.element.parent();if(ae==="fill"){ag=af.height();ag-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var ai=I(this),ah=ai.css("position");if(ah==="absolute"||ah==="fixed"){return}ag-=ai.outerHeight(true)});this.element.children().not(this.panels).each(function(){ag-=I(this).outerHeight(true)});this.panels.each(function(){I(this).height(Math.max(0,ag-I(this).innerHeight()+I(this).height()))}).css("overflow","auto")}else{if(ae==="auto"){ag=0;this.panels.each(function(){ag=Math.max(ag,I(this).height("").height())}).height(ag)}}},_eventHandler:function(ae){var an=this.options,ai=this.active,aj=I(ae.currentTarget),ah=aj.closest("li"),al=ah[0]===ai[0],af=al&&an.collapsible,ag=af?I():this._getPanelForTab(ah),ak=!ai.length?I():this._getPanelForTab(ai),am={oldTab:ai,oldPanel:ak,newTab:af?I():ah,newPanel:ag};ae.preventDefault();if(ah.hasClass("ui-state-disabled")||ah.hasClass("ui-tabs-loading")||this.running||(al&&!an.collapsible)||(this._trigger("beforeActivate",ae,am)===false)){return}an.active=af?false:this.tabs.index(ah);this.active=al?I():ah;if(this.xhr){this.xhr.abort()}if(!ak.length&&!ag.length){I.error("jQuery UI Tabs: Mismatching fragment identifier.")}if(ag.length){this.load(this.tabs.index(ah),ae)}this._toggle(ae,am)},_toggle:function(ak,aj){var ai=this,ae=aj.newPanel,ah=aj.oldPanel;this.running=true;function ag(){ai.running=false;ai._trigger("activate",ak,aj)}function af(){aj.newTab.closest("li").addClass("ui-tabs-active ui-state-active");if(ae.length&&ai.options.show){ai._show(ae,ai.options.show,ag)}else{ae.show();ag()}}if(ah.length&&this.options.hide){this._hide(ah,this.options.hide,function(){aj.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");af()})}else{aj.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");ah.hide();af()}ah.attr("aria-hidden","true");aj.oldTab.attr({"aria-selected":"false","aria-expanded":"false"});if(ae.length&&ah.length){aj.oldTab.attr("tabIndex",-1)}else{if(ae.length){this.tabs.filter(function(){return I(this).attr("tabIndex")===0}).attr("tabIndex",-1)}}ae.attr("aria-hidden","false");aj.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(af){var ae,ag=this._findActive(af);if(ag[0]===this.active[0]){return}if(!ag.length){ag=this.active}ae=ag.find(".ui-tabs-anchor")[0];this._eventHandler({target:ae,currentTarget:ae,preventDefault:I.noop})},_findActive:function(ae){return ae===false?I():this.tabs.eq(ae)},_getIndex:function(ae){if(typeof ae==="string"){ae=this.anchors.index(this.anchors.filter("[href$='"+ae+"']"))}return ae},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();this.tablist.unbind(this.eventNamespace);this.tabs.add(this.panels).each(function(){if(I.data(this,"ui-tabs-destroy")){I(this).remove()}else{I(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}});this.tabs.each(function(){var ae=I(this),af=ae.data("ui-tabs-aria-controls");if(af){ae.attr("aria-controls",af).removeData("ui-tabs-aria-controls")}else{ae.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")}},enable:function(ae){var af=this.options.disabled;if(af===false){return}if(ae===undefined){af=false}else{ae=this._getIndex(ae);if(I.isArray(af)){af=I.map(af,function(ag){return ag!==ae?ag:null})}else{af=I.map(this.tabs,function(ag,ah){return ah!==ae?ah:null})}}this._setupDisabled(af)},disable:function(ae){var af=this.options.disabled;if(af===true){return}if(ae===undefined){af=true}else{ae=this._getIndex(ae);if(I.inArray(ae,af)!==-1){return}if(I.isArray(af)){af=I.merge([ae],af).sort()}else{af=[ae]}}this._setupDisabled(af)},load:function(ah,al){ah=this._getIndex(ah);var ak=this,ai=this.tabs.eq(ah),ag=ai.find(".ui-tabs-anchor"),af=this._getPanelForTab(ai),aj={tab:ai,panel:af},ae=function(an,am){if(am==="abort"){ak.panels.stop(false,true)}ai.removeClass("ui-tabs-loading");af.removeAttr("aria-busy");if(an===ak.xhr){delete ak.xhr}};if(this._isLocal(ag[0])){return}this.xhr=I.ajax(this._ajaxSettings(ag,al,aj));if(this.xhr&&this.xhr.statusText!=="canceled"){ai.addClass("ui-tabs-loading");af.attr("aria-busy","true");this.xhr.done(function(an,am,ao){setTimeout(function(){af.html(an);ak._trigger("load",al,aj);ae(ao,am)},1)}).fail(function(an,am){setTimeout(function(){ae(an,am)},1)})}},_ajaxSettings:function(ae,ah,ag){var af=this;return{url:ae.attr("href"),beforeSend:function(aj,ai){return af._trigger("beforeLoad",ah,I.extend({jqXHR:aj,ajaxSettings:ai},ag))}}},_getPanelForTab:function(ae){var af=I(ae).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+af))}});
/*!
   * jQuery UI Tooltip 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/tooltip/
   */
var L=I.widget("ui.tooltip",{version:"1.11.4",options:{content:function(){var ae=I(this).attr("title")||"";return I("<a>").text(ae).html()},hide:true,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:true,tooltipClass:null,track:false,close:null,open:null},_addDescribedBy:function(af,ag){var ae=(af.attr("aria-describedby")||"").split(/\s+/);ae.push(ag);af.data("ui-tooltip-id",ag).attr("aria-describedby",I.trim(ae.join(" ")))},_removeDescribedBy:function(ag){var ah=ag.data("ui-tooltip-id"),af=(ag.attr("aria-describedby")||"").split(/\s+/),ae=I.inArray(ah,af);if(ae!==-1){af.splice(ae,1)}ag.removeData("ui-tooltip-id");af=I.trim(af.join(" "));if(af){ag.attr("aria-describedby",af)}else{ag.removeAttr("aria-describedby")}},_create:function(){this._on({mouseover:"open",focusin:"open"});this.tooltips={};this.parents={};if(this.options.disabled){this._disable()}this.liveRegion=I("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(ae,ag){var af=this;if(ae==="disabled"){this[ag?"_disable":"_enable"]();this.options[ae]=ag;return}this._super(ae,ag);if(ae==="content"){I.each(this.tooltips,function(ai,ah){af._updateContent(ah.element)})}},_disable:function(){var ae=this;I.each(this.tooltips,function(ah,ag){var af=I.Event("blur");af.target=af.currentTarget=ag.element[0];ae.close(af,true)});this.element.find(this.options.items).addBack().each(function(){var af=I(this);if(af.is("[title]")){af.data("ui-tooltip-title",af.attr("title")).removeAttr("title")}})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var ae=I(this);if(ae.data("ui-tooltip-title")){ae.attr("title",ae.data("ui-tooltip-title"))}})},open:function(af){var ae=this,ag=I(af?af.target:this.element).closest(this.options.items);if(!ag.length||ag.data("ui-tooltip-id")){return}if(ag.attr("title")){ag.data("ui-tooltip-title",ag.attr("title"))}ag.data("ui-tooltip-open",true);if(af&&af.type==="mouseover"){ag.parents().each(function(){var ai=I(this),ah;if(ai.data("ui-tooltip-open")){ah=I.Event("blur");ah.target=ah.currentTarget=this;ae.close(ah,true)}if(ai.attr("title")){ai.uniqueId();ae.parents[this.id]={element:this,title:ai.attr("title")};ai.attr("title","")}})}this._registerCloseHandlers(af,ag);this._updateContent(ag,af)},_updateContent:function(aj,ai){var ah,ae=this.options.content,ag=this,af=ai?ai.type:null;if(typeof ae==="string"){return this._open(ai,aj,ae)}ah=ae.call(aj[0],function(ak){ag._delay(function(){if(!aj.data("ui-tooltip-open")){return}if(ai){ai.type=af}this._open(ai,aj,ak)})});if(ah){this._open(ai,aj,ah)}},_open:function(af,ai,aj){var ae,am,al,ag,ak=I.extend({},this.options.position);if(!aj){return}ae=this._find(ai);if(ae){ae.tooltip.find(".ui-tooltip-content").html(aj);return}if(ai.is("[title]")){if(af&&af.type==="mouseover"){ai.attr("title","")}else{ai.removeAttr("title")}}ae=this._tooltip(ai);am=ae.tooltip;this._addDescribedBy(ai,am.attr("id"));am.find(".ui-tooltip-content").html(aj);this.liveRegion.children().hide();if(aj.clone){ag=aj.clone();ag.removeAttr("id").find("[id]").removeAttr("id")}else{ag=aj}I("<div>").html(ag).appendTo(this.liveRegion);function ah(an){ak.of=an;if(am.is(":hidden")){return}am.position(ak)}if(this.options.track&&af&&/^mouse/.test(af.type)){this._on(this.document,{mousemove:ah});ah(af)}else{am.position(I.extend({of:ai},this.options.position))}am.hide();this._show(am,this.options.show);if(this.options.show&&this.options.show.delay){al=this.delayedShow=setInterval(function(){if(am.is(":visible")){ah(ak.of);clearInterval(al)}},I.fx.interval)}this._trigger("open",af,{tooltip:am})},_registerCloseHandlers:function(af,ag){var ae={keyup:function(ah){if(ah.keyCode===I.ui.keyCode.ESCAPE){var ai=I.Event(ah);ai.currentTarget=ag[0];this.close(ai,true)}}};if(ag[0]!==this.element[0]){ae.remove=function(){this._removeTooltip(this._find(ag).tooltip)}}if(!af||af.type==="mouseover"){ae.mouseleave="close"}if(!af||af.type==="focusin"){ae.focusout="close"}this._on(true,ag,ae)},close:function(af){var ah,ae=this,ai=I(af?af.currentTarget:this.element),ag=this._find(ai);if(!ag){ai.removeData("ui-tooltip-open");return}ah=ag.tooltip;if(ag.closing){return}clearInterval(this.delayedShow);if(ai.data("ui-tooltip-title")&&!ai.attr("title")){ai.attr("title",ai.data("ui-tooltip-title"))}this._removeDescribedBy(ai);ag.hiding=true;ah.stop(true);this._hide(ah,this.options.hide,function(){ae._removeTooltip(I(this))});ai.removeData("ui-tooltip-open");this._off(ai,"mouseleave focusout keyup");if(ai[0]!==this.element[0]){this._off(ai,"remove")}this._off(this.document,"mousemove");if(af&&af.type==="mouseleave"){I.each(this.parents,function(ak,aj){I(aj.element).attr("title",aj.title);delete ae.parents[ak]})}ag.closing=true;this._trigger("close",af,{tooltip:ah});if(!ag.hiding){ag.closing=false}},_tooltip:function(ae){var af=I("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),ag=af.uniqueId().attr("id");I("<div>").addClass("ui-tooltip-content").appendTo(af);af.appendTo(this.document[0].body);return this.tooltips[ag]={element:ae,tooltip:af}},_find:function(ae){var af=ae.data("ui-tooltip-id");return af?this.tooltips[af]:null},_removeTooltip:function(ae){ae.remove();delete this.tooltips[ae.attr("id")]},_destroy:function(){var ae=this;I.each(this.tooltips,function(ai,ah){var ag=I.Event("blur"),af=ah.element;ag.target=ag.currentTarget=af[0];ae.close(ag,true);I("#"+ai).remove();if(af.data("ui-tooltip-title")){if(!af.attr("title")){af.attr("title",af.data("ui-tooltip-title"))}af.removeData("ui-tooltip-title")}});this.liveRegion.remove()}});
/*!
   * jQuery UI Effects 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/effects-core/
   */
var j="ui-effects-",s=I;I.effects={effect:{}};
/*!
   * jQuery Color Animations v2.1.2
   * https://github.com/jquery/jquery-color
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * Date: Wed Jan 16 08:47:09 2013 -0600
   */
(function(at,ah){var ao="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",al=/^([\-+])=\s*(\d+\.?\d*)/,ak=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(au){return[au[1],au[2],au[3],au[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(au){return[au[1]*2.55,au[2]*2.55,au[3]*2.55,au[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(au){return[parseInt(au[1],16),parseInt(au[2],16),parseInt(au[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(au){return[parseInt(au[1]+au[1],16),parseInt(au[2]+au[2],16),parseInt(au[3]+au[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(au){return[au[1],au[2]/100,au[3]/100,au[4]]}}],ai=at.Color=function(av,aw,au,ax){return new at.Color.fn.parse(av,aw,au,ax)},an={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},ar={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},aq=ai.support={},af=at("<p>")[0],ae,ap=at.each;af.style.cssText="background-color:rgba(1,1,1,.5)";aq.rgba=af.style.backgroundColor.indexOf("rgba")>-1;ap(an,function(au,av){av.cache="_"+au;av.props.alpha={idx:3,type:"percent",def:1}});function am(av,ax,aw){var au=ar[ax.type]||{};if(av==null){return(aw||!ax.def)?null:ax.def}av=au.floor?~~av:parseFloat(av);if(isNaN(av)){return ax.def}if(au.mod){return(av+au.mod)%au.mod}return 0>av?0:au.max<av?au.max:av}function aj(au){var aw=ai(),av=aw._rgba=[];au=au.toLowerCase();ap(ak,function(aB,aC){var az,aA=aC.re.exec(au),ay=aA&&aC.parse(aA),ax=aC.space||"rgba";if(ay){az=aw[ax](ay);aw[an[ax].cache]=az[an[ax].cache];av=aw._rgba=az._rgba;return false}});if(av.length){if(av.join()==="0,0,0,0"){at.extend(av,ae.transparent)}return aw}return ae[au]}ai.fn=at.extend(ai.prototype,{parse:function(aA,ay,au,az){if(aA===ah){this._rgba=[null,null,null,null];return this}if(aA.jquery||aA.nodeType){aA=at(aA).css(ay);ay=ah}var ax=this,aw=at.type(aA),av=this._rgba=[];if(ay!==ah){aA=[aA,ay,au,az];aw="array"}if(aw==="string"){return this.parse(aj(aA)||ae._default)}if(aw==="array"){ap(an.rgba.props,function(aB,aC){av[aC.idx]=am(aA[aC.idx],aC)});return this}if(aw==="object"){if(aA instanceof ai){ap(an,function(aB,aC){if(aA[aC.cache]){ax[aC.cache]=aA[aC.cache].slice()}})}else{ap(an,function(aC,aD){var aB=aD.cache;ap(aD.props,function(aE,aF){if(!ax[aB]&&aD.to){if(aE==="alpha"||aA[aE]==null){return}ax[aB]=aD.to(ax._rgba)}ax[aB][aF.idx]=am(aA[aE],aF,true)});if(ax[aB]&&at.inArray(null,ax[aB].slice(0,3))<0){ax[aB][3]=1;if(aD.from){ax._rgba=aD.from(ax[aB])}}})}return this}},is:function(aw){var au=ai(aw),ax=true,av=this;ap(an,function(ay,aA){var aB,az=au[aA.cache];if(az){aB=av[aA.cache]||aA.to&&aA.to(av._rgba)||[];ap(aA.props,function(aC,aD){if(az[aD.idx]!=null){ax=(az[aD.idx]===aB[aD.idx]);return ax}})}return ax});return ax},_space:function(){var au=[],av=this;ap(an,function(aw,ax){if(av[ax.cache]){au.push(aw)}});return au.pop()},transition:function(av,aB){var aw=ai(av),ax=aw._space(),ay=an[ax],az=this.alpha()===0?ai("transparent"):this,aA=az[ay.cache]||ay.to(az._rgba),au=aA.slice();aw=aw[ay.cache];ap(ay.props,function(aF,aH){var aE=aH.idx,aD=aA[aE],aC=aw[aE],aG=ar[aH.type]||{};if(aC===null){return}if(aD===null){au[aE]=aC}else{if(aG.mod){if(aC-aD>aG.mod/2){aD+=aG.mod}else{if(aD-aC>aG.mod/2){aD-=aG.mod}}}au[aE]=am((aC-aD)*aB+aD,aH)}});return this[ax](au)},blend:function(ax){if(this._rgba[3]===1){return this}var aw=this._rgba.slice(),av=aw.pop(),au=ai(ax)._rgba;return ai(at.map(aw,function(ay,az){return(1-av)*au[az]+av*ay}))},toRgbaString:function(){var av="rgba(",au=at.map(this._rgba,function(aw,ax){return aw==null?(ax>2?1:0):aw});if(au[3]===1){au.pop();av="rgb("}return av+au.join()+")"},toHslaString:function(){var av="hsla(",au=at.map(this.hsla(),function(aw,ax){if(aw==null){aw=ax>2?1:0}if(ax&&ax<3){aw=Math.round(aw*100)+"%"}return aw});if(au[3]===1){au.pop();av="hsl("}return av+au.join()+")"},toHexString:function(au){var av=this._rgba.slice(),aw=av.pop();if(au){av.push(~~(aw*255))}return"#"+at.map(av,function(ax){ax=(ax||0).toString(16);return ax.length===1?"0"+ax:ax}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});ai.fn.parse.prototype=ai.fn;function ag(aw,av,au){au=(au+1)%1;if(au*6<1){return aw+(av-aw)*au*6}if(au*2<1){return av}if(au*3<2){return aw+(av-aw)*((2/3)-au)*6}return aw}an.hsla.to=function(aw){if(aw[0]==null||aw[1]==null||aw[2]==null){return[null,null,null,aw[3]]}var au=aw[0]/255,az=aw[1]/255,aA=aw[2]/255,aC=aw[3],aB=Math.max(au,az,aA),ax=Math.min(au,az,aA),aD=aB-ax,aE=aB+ax,av=aE*0.5,ay,aF;if(ax===aB){ay=0}else{if(au===aB){ay=(60*(az-aA)/aD)+360}else{if(az===aB){ay=(60*(aA-au)/aD)+120}else{ay=(60*(au-az)/aD)+240}}}if(aD===0){aF=0}else{if(av<=0.5){aF=aD/aE}else{aF=aD/(2-aE)}}return[Math.round(ay)%360,aF,av,aC==null?1:aC]};an.hsla.from=function(ay){if(ay[0]==null||ay[1]==null||ay[2]==null){return[null,null,null,ay[3]]}var ax=ay[0]/360,aw=ay[1],av=ay[2],au=ay[3],az=av<=0.5?av*(1+aw):av+aw-av*aw,aA=2*av-az;return[Math.round(ag(aA,az,ax+(1/3))*255),Math.round(ag(aA,az,ax)*255),Math.round(ag(aA,az,ax-(1/3))*255),au]};ap(an,function(av,ax){var aw=ax.props,au=ax.cache,az=ax.to,ay=ax.from;ai.fn[av]=function(aE){if(az&&!this[au]){this[au]=az(this._rgba)}if(aE===ah){return this[au].slice()}var aB,aD=at.type(aE),aA=(aD==="array"||aD==="object")?aE:arguments,aC=this[au].slice();ap(aw,function(aF,aH){var aG=aA[aD==="object"?aF:aH.idx];if(aG==null){aG=aC[aH.idx]}aC[aH.idx]=am(aG,aH)});if(ay){aB=ai(ay(aC));aB[au]=aC;return aB}else{return ai(aC)}};ap(aw,function(aA,aB){if(ai.fn[aA]){return}ai.fn[aA]=function(aF){var aH=at.type(aF),aE=(aA==="alpha"?(this._hsla?"hsla":"rgba"):av),aD=this[aE](),aG=aD[aB.idx],aC;if(aH==="undefined"){return aG}if(aH==="function"){aF=aF.call(this,aG);aH=at.type(aF)}if(aF==null&&aB.empty){return this}if(aH==="string"){aC=al.exec(aF);if(aC){aF=aG+parseFloat(aC[2])*(aC[1]==="+"?1:-1)}}aD[aB.idx]=aF;return this[aE](aD)}})});ai.hook=function(av){var au=av.split(" ");ap(au,function(aw,ax){at.cssHooks[ax]={set:function(aB,aC){var az,aA,ay="";if(aC!=="transparent"&&(at.type(aC)!=="string"||(az=aj(aC)))){aC=ai(az||aC);if(!aq.rgba&&aC._rgba[3]!==1){aA=ax==="backgroundColor"?aB.parentNode:aB;while((ay===""||ay==="transparent")&&aA&&aA.style){try{ay=at.css(aA,"backgroundColor");aA=aA.parentNode}catch(aD){}}aC=aC.blend(ay&&ay!=="transparent"?ay:"_default")}aC=aC.toRgbaString()}try{aB.style[ax]=aC}catch(aD){}}};at.fx.step[ax]=function(ay){if(!ay.colorInit){ay.start=ai(ay.elem,ax);ay.end=ai(ay.end);ay.colorInit=true}at.cssHooks[ax].set(ay.elem,ay.start.transition(ay.end,ay.pos))}})};ai.hook(ao);at.cssHooks.borderColor={expand:function(av){var au={};ap(["Top","Right","Bottom","Left"],function(ax,aw){au["border"+aw+"Color"]=av});return au}};ae=at.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}})(s);(function(){var af=["add","remove","toggle"],ag={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};I.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(ai,aj){I.fx.step[aj]=function(ak){if(ak.end!=="none"&&!ak.setAttr||ak.pos===1&&!ak.setAttr){s.style(ak.elem,aj,ak.end);ak.setAttr=true}}});function ah(am){var aj,ai,ak=am.ownerDocument.defaultView?am.ownerDocument.defaultView.getComputedStyle(am,null):am.currentStyle,al={};if(ak&&ak.length&&ak[0]&&ak[ak[0]]){ai=ak.length;while(ai--){aj=ak[ai];if(typeof ak[aj]==="string"){al[I.camelCase(aj)]=ak[aj]}}}else{for(aj in ak){if(typeof ak[aj]==="string"){al[aj]=ak[aj]}}}return al}function ae(ai,ak){var am={},aj,al;for(aj in ak){al=ak[aj];if(ai[aj]!==al){if(!ag[aj]){if(I.fx.step[aj]||!isNaN(parseFloat(al))){am[aj]=al}}}}return am}if(!I.fn.addBack){I.fn.addBack=function(ai){return this.add(ai==null?this.prevObject:this.prevObject.filter(ai))}}I.effects.animateClass=function(ai,aj,am,al){var ak=I.speed(aj,am,al);return this.queue(function(){var ap=I(this),an=ap.attr("class")||"",ao,aq=ak.children?ap.find("*").addBack():ap;aq=aq.map(function(){var ar=I(this);return{el:ar,start:ah(this)}});ao=function(){I.each(af,function(ar,at){if(ai[at]){ap[at+"Class"](ai[at])}})};ao();aq=aq.map(function(){this.end=ah(this.el[0]);this.diff=ae(this.start,this.end);return this});ap.attr("class",an);aq=aq.map(function(){var au=this,ar=I.Deferred(),at=I.extend({},ak,{queue:false,complete:function(){ar.resolve(au)}});this.el.animate(this.diff,at);return ar.promise()});I.when.apply(I,aq.get()).done(function(){ao();I.each(arguments,function(){var ar=this.el;I.each(this.diff,function(at){ar.css(at,"")})});ak.complete.call(ap[0])})})};I.fn.extend({addClass:(function(ai){return function(ak,aj,am,al){return aj?I.effects.animateClass.call(this,{add:ak},aj,am,al):ai.apply(this,arguments)}})(I.fn.addClass),removeClass:(function(ai){return function(ak,aj,am,al){return arguments.length>1?I.effects.animateClass.call(this,{remove:ak},aj,am,al):ai.apply(this,arguments)}})(I.fn.removeClass),toggleClass:(function(ai){return function(al,ak,aj,an,am){if(typeof ak==="boolean"||ak===undefined){if(!aj){return ai.apply(this,arguments)}else{return I.effects.animateClass.call(this,(ak?{add:al}:{remove:al}),aj,an,am)}}else{return I.effects.animateClass.call(this,{toggle:al},ak,aj,an)}}})(I.fn.toggleClass),switchClass:function(ai,ak,aj,am,al){return I.effects.animateClass.call(this,{add:ak,remove:ai},aj,am,al)}})})();(function(){I.extend(I.effects,{version:"1.11.4",save:function(ah,ai){for(var ag=0;ag<ai.length;ag++){if(ai[ag]!==null){ah.data(j+ai[ag],ah[0].style[ai[ag]])}}},restore:function(ah,aj){var ai,ag;for(ag=0;ag<aj.length;ag++){if(aj[ag]!==null){ai=ah.data(j+aj[ag]);if(ai===undefined){ai=""}ah.css(aj[ag],ai)}}},setMode:function(ag,ah){if(ah==="toggle"){ah=ag.is(":hidden")?"show":"hide"}return ah},getBaseline:function(ah,ai){var aj,ag;switch(ah[0]){case"top":aj=0;break;case"middle":aj=0.5;break;case"bottom":aj=1;break;default:aj=ah[0]/ai.height}switch(ah[1]){case"left":ag=0;break;case"center":ag=0.5;break;case"right":ag=1;break;default:ag=ah[1]/ai.width}return{x:ag,y:aj}},createWrapper:function(ah){if(ah.parent().is(".ui-effects-wrapper")){return ah.parent()}var ai={width:ah.outerWidth(true),height:ah.outerHeight(true),"float":ah.css("float")},al=I("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),ag={width:ah.width(),height:ah.height()},ak=document.activeElement;try{ak.id}catch(aj){ak=document.body}ah.wrap(al);if(ah[0]===ak||I.contains(ah[0],ak)){I(ak).focus()}al=ah.parent();if(ah.css("position")==="static"){al.css({position:"relative"});ah.css({position:"relative"})}else{I.extend(ai,{position:ah.css("position"),zIndex:ah.css("z-index")});I.each(["top","left","bottom","right"],function(am,an){ai[an]=ah.css(an);if(isNaN(parseInt(ai[an],10))){ai[an]="auto"}});ah.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}ah.css(ag);return al.css(ai).show()},removeWrapper:function(ag){var ah=document.activeElement;if(ag.parent().is(".ui-effects-wrapper")){ag.parent().replaceWith(ag);if(ag[0]===ah||I.contains(ag[0],ah)){I(ah).focus()}}return ag},setTransition:function(ah,aj,ag,ai){ai=ai||{};I.each(aj,function(al,ak){var am=ah.cssUnit(ak);if(am[0]>0){ai[ak]=am[0]*ag+am[1]}});return ai}});function ae(ah,ag,ai,aj){if(I.isPlainObject(ah)){ag=ah;ah=ah.effect}ah={effect:ah};if(ag==null){ag={}}if(I.isFunction(ag)){aj=ag;ai=null;ag={}}if(typeof ag==="number"||I.fx.speeds[ag]){aj=ai;ai=ag;ag={}}if(I.isFunction(ai)){aj=ai;ai=null}if(ag){I.extend(ah,ag)}ai=ai||ag.duration;ah.duration=I.fx.off?0:typeof ai==="number"?ai:ai in I.fx.speeds?I.fx.speeds[ai]:I.fx.speeds._default;ah.complete=aj||ag.complete;return ah}function af(ag){if(!ag||typeof ag==="number"||I.fx.speeds[ag]){return true}if(typeof ag==="string"&&!I.effects.effect[ag]){return true}if(I.isFunction(ag)){return true}if(typeof ag==="object"&&!ag.effect){return true}return false}I.fn.extend({effect:function(){var ai=ae.apply(this,arguments),ak=ai.mode,ag=ai.queue,ah=I.effects.effect[ai.effect];if(I.fx.off||!ah){if(ak){return this[ak](ai.duration,ai.complete)}else{return this.each(function(){if(ai.complete){ai.complete.call(this)}})}}function aj(an){var ao=I(this),am=ai.complete,ap=ai.mode;function al(){if(I.isFunction(am)){am.call(ao[0])}if(I.isFunction(an)){an()}}if(ao.is(":hidden")?ap==="hide":ap==="show"){ao[ap]();al()}else{ah.call(ao[0],ai,al)}}return ag===false?this.each(aj):this.queue(ag||"fx",aj)},show:(function(ag){return function(ai){if(af(ai)){return ag.apply(this,arguments)}else{var ah=ae.apply(this,arguments);ah.mode="show";return this.effect.call(this,ah)}}})(I.fn.show),hide:(function(ag){return function(ai){if(af(ai)){return ag.apply(this,arguments)}else{var ah=ae.apply(this,arguments);ah.mode="hide";return this.effect.call(this,ah)}}})(I.fn.hide),toggle:(function(ag){return function(ai){if(af(ai)||typeof ai==="boolean"){return ag.apply(this,arguments)}else{var ah=ae.apply(this,arguments);ah.mode="toggle";return this.effect.call(this,ah)}}})(I.fn.toggle),cssUnit:function(ag){var ah=this.css(ag),ai=[];I.each(["em","px","%","pt"],function(aj,ak){if(ah.indexOf(ak)>0){ai=[parseFloat(ah),ak]}});return ai}})})();(function(){var ae={};I.each(["Quad","Cubic","Quart","Quint","Expo"],function(ag,af){ae[af]=function(ah){return Math.pow(ah,ag+2)}});I.extend(ae,{Sine:function(af){return 1-Math.cos(af*Math.PI/2)},Circ:function(af){return 1-Math.sqrt(1-af*af)},Elastic:function(af){return af===0||af===1?af:-Math.pow(2,8*(af-1))*Math.sin(((af-1)*80-7.5)*Math.PI/15)},Back:function(af){return af*af*(3*af-2)},Bounce:function(ah){var af,ag=4;while(ah<((af=Math.pow(2,--ag))-1)/11){}return 1/Math.pow(4,3-ag)-7.5625*Math.pow((af*3-2)/22-ah,2)}});I.each(ae,function(ag,af){I.easing["easeIn"+ag]=af;I.easing["easeOut"+ag]=function(ah){return 1-af(1-ah)};I.easing["easeInOut"+ag]=function(ah){return ah<0.5?af(ah*2)/2:1-af(ah*-2+2)/2}})})();var T=I.effects;
/*!
   * jQuery UI Effects Blind 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/blind-effect/
   */
var Y=I.effects.effect.blind=function(ag,am){var ah=I(this),aq=/up|down|vertical/,ap=/up|left|vertical|horizontal/,ar=["position","top","bottom","left","right","height","width"],an=I.effects.setMode(ah,ag.mode||"hide"),at=ag.direction||"up",aj=aq.test(at),ai=aj?"height":"width",ao=aj?"top":"left",av=ap.test(at),al={},au=an==="show",af,ae,ak;if(ah.parent().is(".ui-effects-wrapper")){I.effects.save(ah.parent(),ar)}else{I.effects.save(ah,ar)}ah.show();af=I.effects.createWrapper(ah).css({overflow:"hidden"});ae=af[ai]();ak=parseFloat(af.css(ao))||0;al[ai]=au?ae:0;if(!av){ah.css(aj?"bottom":"right",0).css(aj?"top":"left","auto").css({position:"absolute"});al[ao]=au?ak:ae+ak}if(au){af.css(ai,0);if(!av){af.css(ao,ak+ae)}}af.animate(al,{duration:ag.duration,easing:ag.easing,queue:false,complete:function(){if(an==="hide"){ah.hide()}I.effects.restore(ah,ar);I.effects.removeWrapper(ah);am()}})};
/*!
   * jQuery UI Effects Bounce 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/bounce-effect/
   */
var S=I.effects.effect.bounce=function(an,am){var ae=I(this),af=["position","top","bottom","left","right","height","width"],al=I.effects.setMode(ae,an.mode||"effect"),ak=al==="hide",aw=al==="show",ax=an.direction||"up",ag=an.distance,aj=an.times||5,ay=aj*2+(aw||ak?1:0),av=an.duration/ay,ap=an.easing,ah=(ax==="up"||ax==="down")?"top":"left",ao=(ax==="up"||ax==="left"),au,ai,at,aq=ae.queue(),ar=aq.length;if(aw||ak){af.push("opacity")}I.effects.save(ae,af);ae.show();I.effects.createWrapper(ae);if(!ag){ag=ae[ah==="top"?"outerHeight":"outerWidth"]()/3}if(aw){at={opacity:1};at[ah]=0;ae.css("opacity",0).css(ah,ao?-ag*2:ag*2).animate(at,av,ap)}if(ak){ag=ag/Math.pow(2,aj-1)}at={};at[ah]=0;for(au=0;au<aj;au++){ai={};ai[ah]=(ao?"-=":"+=")+ag;ae.animate(ai,av,ap).animate(at,av,ap);ag=ak?ag*2:ag/2}if(ak){ai={opacity:0};ai[ah]=(ao?"-=":"+=")+ag;ae.animate(ai,av,ap)}ae.queue(function(){if(ak){ae.hide()}I.effects.restore(ae,af);I.effects.removeWrapper(ae);am()});if(ar>1){aq.splice.apply(aq,[1,0].concat(aq.splice(ar,ay+1)))}ae.dequeue()};
/*!
   * jQuery UI Effects Clip 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/clip-effect/
   */
var D=I.effects.effect.clip=function(ah,ak){var ai=I(this),ao=["position","top","bottom","left","right","height","width"],an=I.effects.setMode(ai,ah.mode||"hide"),aq=an==="show",ap=ah.direction||"vertical",am=ap==="vertical",ar=am?"height":"width",al=am?"top":"left",aj={},af,ag,ae;I.effects.save(ai,ao);ai.show();af=I.effects.createWrapper(ai).css({overflow:"hidden"});ag=(ai[0].tagName==="IMG")?af:ai;ae=ag[ar]();if(aq){ag.css(ar,0);ag.css(al,ae/2)}aj[ar]=aq?ae:0;aj[al]=aq?0:ae/2;ag.animate(aj,{queue:false,duration:ah.duration,easing:ah.easing,complete:function(){if(!aq){ai.hide()}I.effects.restore(ai,ao);I.effects.removeWrapper(ai);ak()}})};
/*!
   * jQuery UI Effects Drop 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/drop-effect/
   */
var o=I.effects.effect.drop=function(af,aj){var ag=I(this),al=["position","top","bottom","left","right","opacity","height","width"],ak=I.effects.setMode(ag,af.mode||"hide"),an=ak==="show",am=af.direction||"left",ah=(am==="up"||am==="down")?"top":"left",ao=(am==="up"||am==="left")?"pos":"neg",ai={opacity:an?1:0},ae;I.effects.save(ag,al);ag.show();I.effects.createWrapper(ag);ae=af.distance||ag[ah==="top"?"outerHeight":"outerWidth"](true)/2;if(an){ag.css("opacity",0).css(ah,ao==="pos"?-ae:ae)}ai[ah]=(an?(ao==="pos"?"+=":"-="):(ao==="pos"?"-=":"+="))+ae;ag.animate(ai,{queue:false,duration:af.duration,easing:af.easing,complete:function(){if(ak==="hide"){ag.hide()}I.effects.restore(ag,al);I.effects.removeWrapper(ag);aj()}})};
/*!
   * jQuery UI Effects Explode 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/explode-effect/
   */
var Q=I.effects.effect.explode=function(ar,aq){var ak=ar.pieces?Math.round(Math.sqrt(ar.pieces)):3,af=ak,ae=I(this),am=I.effects.setMode(ae,ar.mode||"hide"),aw=am==="show",ai=ae.show().css("visibility","hidden").offset(),at=Math.ceil(ae.outerWidth()/af),ap=Math.ceil(ae.outerHeight()/ak),aj=[],av,au,ag,ao,an,al;function ax(){aj.push(this);if(aj.length===ak*af){ah()}}for(av=0;av<ak;av++){ao=ai.top+av*ap;al=av-(ak-1)/2;for(au=0;au<af;au++){ag=ai.left+au*at;an=au-(af-1)/2;ae.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-au*at,top:-av*ap}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:at,height:ap,left:ag+(aw?an*at:0),top:ao+(aw?al*ap:0),opacity:aw?0:1}).animate({left:ag+(aw?0:an*at),top:ao+(aw?0:al*ap),opacity:aw?1:0},ar.duration||500,ar.easing,ax)}}function ah(){ae.css({visibility:"visible"});I(aj).remove();if(!aw){ae.hide()}aq()}};
/*!
   * jQuery UI Effects Fade 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/fade-effect/
   */
var R=I.effects.effect.fade=function(ah,ae){var af=I(this),ag=I.effects.setMode(af,ah.mode||"toggle");af.animate({opacity:ag},{queue:false,duration:ah.duration,easing:ah.easing,complete:ae})};
/*!
   * jQuery UI Effects Fold 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/fold-effect/
   */
var F=I.effects.effect.fold=function(ag,ak){var ah=I(this),ap=["position","top","bottom","left","right","height","width"],am=I.effects.setMode(ah,ag.mode||"hide"),at=am==="show",an=am==="hide",av=ag.size||15,ao=/([0-9]+)%/.exec(av),au=!!ag.horizFirst,al=at!==au,ai=al?["width","height"]:["height","width"],aj=ag.duration/2,af,ae,ar={},aq={};I.effects.save(ah,ap);ah.show();af=I.effects.createWrapper(ah).css({overflow:"hidden"});ae=al?[af.width(),af.height()]:[af.height(),af.width()];if(ao){av=parseInt(ao[1],10)/100*ae[an?0:1]}if(at){af.css(au?{height:0,width:av}:{height:av,width:0})}ar[ai[0]]=at?ae[0]:av;aq[ai[1]]=at?ae[1]:0;af.animate(ar,aj,ag.easing).animate(aq,aj,ag.easing,function(){if(an){ah.hide()}I.effects.restore(ah,ap);I.effects.removeWrapper(ah);ak()})};
/*!
   * jQuery UI Effects Highlight 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/highlight-effect/
   */
var M=I.effects.effect.highlight=function(aj,ae){var ag=I(this),af=["backgroundImage","backgroundColor","opacity"],ai=I.effects.setMode(ag,aj.mode||"show"),ah={backgroundColor:ag.css("backgroundColor")};if(ai==="hide"){ah.opacity=0}I.effects.save(ag,af);ag.show().css({backgroundImage:"none",backgroundColor:aj.color||"#ffff99"}).animate(ah,{queue:false,duration:aj.duration,easing:aj.easing,complete:function(){if(ai==="hide"){ag.hide()}I.effects.restore(ag,af);ae()}})};
/*!
   * jQuery UI Effects Size 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/size-effect/
   */
var a=I.effects.effect.size=function(an,am){var ar,ak,al,ae=I(this),aq=["position","top","bottom","left","right","width","height","overflow","opacity"],ap=["position","top","bottom","left","right","overflow","opacity"],ao=["width","height","overflow"],ai=["fontSize"],au=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],af=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],aj=I.effects.setMode(ae,an.mode||"effect"),at=an.restore||aj!=="effect",ax=an.scale||"both",av=an.origin||["middle","center"],aw=ae.css("position"),ag=at?aq:ap,ah={height:0,width:0,outerHeight:0,outerWidth:0};if(aj==="show"){ae.show()}ar={height:ae.height(),width:ae.width(),outerHeight:ae.outerHeight(),outerWidth:ae.outerWidth()};if(an.mode==="toggle"&&aj==="show"){ae.from=an.to||ah;ae.to=an.from||ar}else{ae.from=an.from||(aj==="show"?ah:ar);ae.to=an.to||(aj==="hide"?ah:ar)}al={from:{y:ae.from.height/ar.height,x:ae.from.width/ar.width},to:{y:ae.to.height/ar.height,x:ae.to.width/ar.width}};if(ax==="box"||ax==="both"){if(al.from.y!==al.to.y){ag=ag.concat(au);ae.from=I.effects.setTransition(ae,au,al.from.y,ae.from);ae.to=I.effects.setTransition(ae,au,al.to.y,ae.to)}if(al.from.x!==al.to.x){ag=ag.concat(af);ae.from=I.effects.setTransition(ae,af,al.from.x,ae.from);ae.to=I.effects.setTransition(ae,af,al.to.x,ae.to)}}if(ax==="content"||ax==="both"){if(al.from.y!==al.to.y){ag=ag.concat(ai).concat(ao);ae.from=I.effects.setTransition(ae,ai,al.from.y,ae.from);ae.to=I.effects.setTransition(ae,ai,al.to.y,ae.to)}}I.effects.save(ae,ag);ae.show();I.effects.createWrapper(ae);ae.css("overflow","hidden").css(ae.from);if(av){ak=I.effects.getBaseline(av,ar);ae.from.top=(ar.outerHeight-ae.outerHeight())*ak.y;ae.from.left=(ar.outerWidth-ae.outerWidth())*ak.x;ae.to.top=(ar.outerHeight-ae.to.outerHeight)*ak.y;ae.to.left=(ar.outerWidth-ae.to.outerWidth)*ak.x}ae.css(ae.from);if(ax==="content"||ax==="both"){au=au.concat(["marginTop","marginBottom"]).concat(ai);af=af.concat(["marginLeft","marginRight"]);ao=aq.concat(au).concat(af);ae.find("*[width]").each(function(){var az=I(this),ay={height:az.height(),width:az.width(),outerHeight:az.outerHeight(),outerWidth:az.outerWidth()};if(at){I.effects.save(az,ao)}az.from={height:ay.height*al.from.y,width:ay.width*al.from.x,outerHeight:ay.outerHeight*al.from.y,outerWidth:ay.outerWidth*al.from.x};az.to={height:ay.height*al.to.y,width:ay.width*al.to.x,outerHeight:ay.height*al.to.y,outerWidth:ay.width*al.to.x};if(al.from.y!==al.to.y){az.from=I.effects.setTransition(az,au,al.from.y,az.from);az.to=I.effects.setTransition(az,au,al.to.y,az.to)}if(al.from.x!==al.to.x){az.from=I.effects.setTransition(az,af,al.from.x,az.from);az.to=I.effects.setTransition(az,af,al.to.x,az.to)}az.css(az.from);az.animate(az.to,an.duration,an.easing,function(){if(at){I.effects.restore(az,ao)}})})}ae.animate(ae.to,{queue:false,duration:an.duration,easing:an.easing,complete:function(){if(ae.to.opacity===0){ae.css("opacity",ae.from.opacity)}if(aj==="hide"){ae.hide()}I.effects.restore(ae,ag);if(!at){if(aw==="static"){ae.css({position:"relative",top:ae.to.top,left:ae.to.left})}else{I.each(["top","left"],function(ay,az){ae.css(az,function(aB,aD){var aC=parseInt(aD,10),aA=ay?ae.to.left:ae.to.top;if(aD==="auto"){return aA+"px"}return aC+aA+"px"})})}}I.effects.removeWrapper(ae);am()}})};
/*!
   * jQuery UI Effects Scale 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/scale-effect/
   */
var f=I.effects.effect.scale=function(ae,ah){var af=I(this),an=I.extend(true,{},ae),ai=I.effects.setMode(af,ae.mode||"effect"),aj=parseInt(ae.percent,10)||(parseInt(ae.percent,10)===0?0:(ai==="hide"?0:100)),al=ae.direction||"both",am=ae.origin,ag={height:af.height(),width:af.width(),outerHeight:af.outerHeight(),outerWidth:af.outerWidth()},ak={y:al!=="horizontal"?(aj/100):1,x:al!=="vertical"?(aj/100):1};an.effect="size";an.queue=false;an.complete=ah;if(ai!=="effect"){an.origin=am||["middle","center"];an.restore=true}an.from=ae.from||(ai==="show"?{height:0,width:0,outerHeight:0,outerWidth:0}:ag);an.to={height:ag.height*ak.y,width:ag.width*ak.x,outerHeight:ag.outerHeight*ak.y,outerWidth:ag.outerWidth*ak.x};if(an.fade){if(ai==="show"){an.from.opacity=0;an.to.opacity=1}if(ai==="hide"){an.from.opacity=1;an.to.opacity=0}}af.effect(an)};
/*!
   * jQuery UI Effects Puff 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/puff-effect/
   */
var ab=I.effects.effect.puff=function(al,ae){var aj=I(this),ak=I.effects.setMode(aj,al.mode||"hide"),ah=ak==="hide",ai=parseInt(al.percent,10)||150,ag=ai/100,af={height:aj.height(),width:aj.width(),outerHeight:aj.outerHeight(),outerWidth:aj.outerWidth()};I.extend(al,{effect:"scale",queue:false,fade:true,mode:ak,complete:ae,percent:ah?ai:100,from:ah?af:{height:af.height*ag,width:af.width*ag,outerHeight:af.outerHeight*ag,outerWidth:af.outerWidth*ag}});aj.effect(al)};
/*!
   * jQuery UI Effects Pulsate 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/pulsate-effect/
   */
var H=I.effects.effect.pulsate=function(ae,ai){var ag=I(this),al=I.effects.setMode(ag,ae.mode||"show"),ap=al==="show",am=al==="hide",aq=(ap||al==="hide"),an=((ae.times||5)*2)+(aq?1:0),ah=ae.duration/an,ao=0,ak=ag.queue(),af=ak.length,aj;if(ap||!ag.is(":visible")){ag.css("opacity",0).show();ao=1}for(aj=1;aj<an;aj++){ag.animate({opacity:ao},ah,ae.easing);ao=1-ao}ag.animate({opacity:ao},ah,ae.easing);ag.queue(function(){if(am){ag.hide()}ai()});if(af>1){ak.splice.apply(ak,[1,0].concat(ak.splice(af,an+1)))}ag.dequeue()};
/*!
   * jQuery UI Effects Shake 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/shake-effect/
   */
var B=I.effects.effect.shake=function(am,al){var ae=I(this),af=["position","top","bottom","left","right","height","width"],ak=I.effects.setMode(ae,am.mode||"effect"),av=am.direction||"left",ag=am.distance||20,aj=am.times||3,aw=aj*2+1,aq=Math.round(am.duration/aw),ai=(av==="up"||av==="down")?"top":"left",ah=(av==="up"||av==="left"),au={},at={},ar={},ap,an=ae.queue(),ao=an.length;I.effects.save(ae,af);ae.show();I.effects.createWrapper(ae);au[ai]=(ah?"-=":"+=")+ag;at[ai]=(ah?"+=":"-=")+ag*2;ar[ai]=(ah?"-=":"+=")+ag*2;ae.animate(au,aq,am.easing);for(ap=1;ap<aj;ap++){ae.animate(at,aq,am.easing).animate(ar,aq,am.easing)}ae.animate(at,aq,am.easing).animate(au,aq/2,am.easing).queue(function(){if(ak==="hide"){ae.hide()}I.effects.restore(ae,af);I.effects.removeWrapper(ae);al()});if(ao>1){an.splice.apply(an,[1,0].concat(an.splice(ao,aw+1)))}ae.dequeue()};
/*!
   * jQuery UI Effects Slide 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/slide-effect/
   */
var A=I.effects.effect.slide=function(ag,ak){var ah=I(this),am=["position","top","bottom","left","right","width","height"],al=I.effects.setMode(ah,ag.mode||"show"),ao=al==="show",an=ag.direction||"left",ai=(an==="up"||an==="down")?"top":"left",af=(an==="up"||an==="left"),ae,aj={};I.effects.save(ah,am);ah.show();ae=ag.distance||ah[ai==="top"?"outerHeight":"outerWidth"](true);I.effects.createWrapper(ah).css({overflow:"hidden"});if(ao){ah.css(ai,af?(isNaN(ae)?"-"+ae:-ae):ae)}aj[ai]=(ao?(af?"+=":"-="):(af?"-=":"+="))+ae;ah.animate(aj,{queue:false,duration:ag.duration,easing:ag.easing,complete:function(){if(al==="hide"){ah.hide()}I.effects.restore(ah,am);I.effects.removeWrapper(ah);ak()}})};
/*!
   * jQuery UI Effects Transfer 1.11.4
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/transfer-effect/
   */
var m=I.effects.effect.transfer=function(af,aj){var ah=I(this),am=I(af.to),ap=am.css("position")==="fixed",al=I("body"),an=ap?al.scrollTop():0,ao=ap?al.scrollLeft():0,ae=am.offset(),ai={top:ae.top-an,left:ae.left-ao,height:am.innerHeight(),width:am.innerWidth()},ak=ah.offset(),ag=I("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(af.className).css({top:ak.top-an,left:ak.left-ao,height:ah.innerHeight(),width:ah.innerWidth(),position:ap?"fixed":"absolute"}).animate(ai,af.duration,af.easing,function(){ag.remove();aj()})}}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/libs/jquery/jquery.multisortable-min.js' */
!function(a){a.fn.multiselectable=function(c){if(!c){c={}}c=a.extend({},a.fn.multiselectable.defaults,c);function b(l){var k=a(this),i=k.parent(),f=k.index();var j=i.find(".multiselectable-previous");j=j.length?j:a(i.find("."+c.selectedClass)[0]).addClass("multiselectable-previous");var g=j.index();if(l.ctrlKey||l.metaKey){if(k.hasClass(c.selectedClass)){k.removeClass(c.selectedClass).removeClass("multiselectable-previous");if(k.not(".child").length){k.nextUntil(":not(.child)").removeClass(c.selectedClass)}}else{i.find(".multiselectable-previous").removeClass("multiselectable-previous");k.addClass(c.selectedClass).addClass("multiselectable-previous");if(k.not(".child").length){k.nextUntil(":not(.child)").addClass(c.selectedClass)}}}if(l.shiftKey){var h=i.find(".multiselectable-shift");h.removeClass(c.selectedClass).removeClass("multiselectable-shift");var m;if(g<f){m=k.prevUntil(".multiselectable-previous").add(j).add(k)}else{if(g>f){m=k.nextUntil(".multiselectable-previous").add(j).add(k)}}m.addClass(c.selectedClass).addClass("multiselectable-shift")}else{i.find(".multiselectable-shift").removeClass("multiselectable-shift")}if(!l.ctrlKey&&!l.metaKey&&!l.shiftKey){i.find(".multiselectable-previous").removeClass("multiselectable-previous");if(!k.hasClass(c.selectedClass)){i.find("."+c.selectedClass).removeClass(c.selectedClass);k.addClass(c.selectedClass).addClass("multiselectable-previous");if(k.not(".child").length){k.nextUntil(":not(.child)").addClass(c.selectedClass)}}}c.mousedown(l,k)}function d(h){if(a(this).is(".ui-draggable-dragging")){return}var g=a(this),f=g.parent();if(!h.ctrlKey&&!h.metaKey&&!h.shiftKey){f.find(".multiselectable-previous").removeClass("multiselectable-previous");f.find("."+c.selectedClass).removeClass(c.selectedClass);g.addClass(c.selectedClass).addClass("multiselectable-previous");if(g.not(".child").length){g.nextUntil(":not(.child)").addClass(c.selectedClass)}}c.click(h,g)}return this.each(function(){var e=a(this);if(!e.data("multiselectable")){e.data("multiselectable",true).delegate(c.items,"mousedown",b).delegate(c.items,"click",d).disableSelection()}})};a.fn.multiselectable.defaults={click:function(c,b){},mousedown:function(c,b){},selectedClass:"selected",items:"li"};a.fn.multisortable=function(c){if(!c){c={}}var d=a.extend({},a.fn.multisortable.defaults,c);function b(h,i){if(i.find("."+d.selectedClass).length>0){var e=h.data("i");var g=i.find("."+d.selectedClass).filter(function(){return a(this).data("i")<e}).css({position:"",width:"",left:"",top:"",zIndex:""});h.before(g);var f=i.find("."+d.selectedClass).filter(function(){return a(this).data("i")>e}).css({position:"",width:"",left:"",top:"",zIndex:""});h.after(f);setTimeout(function(){f.add(g).addClass(d.selectedClass)},0)}}return this.each(function(){var e=a(this);e.multiselectable({selectedClass:d.selectedClass,click:d.click,items:d.items,mousedown:d.mousedown});c.cancel=d.items+":not(."+d.selectedClass+")";c.placeholder=d.placeholder;c.start=function(h,i){if(i.item.hasClass(d.selectedClass)){var g=i.item.parent();g.find("."+d.selectedClass).each(function(j){a(this).data("i",j)});var f=g.find("."+d.selectedClass).length*i.item.outerHeight();i.placeholder.height(f)}d.start(h,i)};c.stop=function(f,g){b(g.item,g.item.parent());d.stop(f,g)};c.sort=function(i,j){var h=j.item.parent(),g=j.item.data("i"),l=parseInt(j.item.css("top").replace("px","")),k=parseInt(j.item.css("left").replace("px",""));a.fn.reverse=Array.prototype._reverse||Array.prototype.reverse;var f=0;a("."+d.selectedClass,h).filter(function(){return a(this).data("i")<g}).reverse().each(function(){f+=a(this).outerHeight();a(this).css({left:k,top:l-f,position:"absolute",zIndex:1000,width:j.item.width()})});f=j.item.outerHeight();a("."+d.selectedClass,h).filter(function(){return a(this).data("i")>g}).each(function(){var m=a(this);m.css({left:k,top:l+f,position:"absolute",zIndex:1000,width:j.item.width()});f+=m.outerHeight()});d.sort(i,j)};c.receive=function(f,g){b(g.item,g.sender);d.receive(f,g)};e.sortable(c).disableSelection()})};a.fn.multisortable.defaults={start:function(b,c){},stop:function(b,c){},sort:function(b,c){},receive:function(b,c){},click:function(c,b){},mousedown:function(c,b){},selectedClass:"selected",placeholder:"placeholder",items:"li"}}(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/libs/jquery/scrollock-min.js' */
!function(a){a.fn.scrollLock=function(){return a(this).bind("DOMMouseScroll mousewheel",function(l){var m=a(this),n=this.scrollTop,o=this.scrollHeight,e=m.height(),k=l.originalEvent.wheelDelta,j=k>0,p=function(){l.stopPropagation();l.preventDefault();l.returnValue=false;return false};if(!j&&-k>o-e-n){m.scrollTop(o);return p()}else{if(j&&k>n){m.scrollTop(0);return p()}}})};a.fn.scrollRelease=function(){return a(this).unbind("DOMMouseScroll mousewheel")}}(RWJS.$);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/libs/jquery/jquery-merger.js' */
if(typeof RWJS==="undefined"){var RWJS={}}(function(){AJS.toInit(function(){for(var a in AJS.$.fn){if(!RWJS.$.fn[a]){RWJS.$.fn[a]=AJS.$.fn[a]}}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/libs/backbone/1.1.2/underscore-min.js' */
if(typeof RWJS==="undefined"){var RWJS={}}(function(){var u=RWJS;var k=u._;var H=Array.prototype,g=Object.prototype,n=Function.prototype;var K=H.push,l=H.slice,c=g.toString,j=g.hasOwnProperty;var s=Array.isArray,e=Object.keys,I=n.bind,A=Object.create;var D=function(){};var M=function(N){if(N instanceof M){return N}if(!(this instanceof M)){return new M(N)}this._wrapped=N};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=M}exports._=M}else{u._=M}M.VERSION="1.8.2";var b=function(O,N,P){if(N===void 0){return O}switch(P==null?3:P){case 1:return function(Q){return O.call(N,Q)};case 2:return function(R,Q){return O.call(N,R,Q)};case 3:return function(R,Q,S){return O.call(N,R,Q,S)};case 4:return function(Q,S,R,T){return O.call(N,Q,S,R,T)}}return function(){return O.apply(N,arguments)}};var E=function(O,N,P){if(O==null){return M.identity}if(M.isFunction(O)){return b(O,N,P)}if(M.isObject(O)){return M.matcher(O)}return M.property(O)};M.iteratee=function(O,N){return E(O,N,Infinity)};var p=function(O,N){return function(W){var U=arguments.length;if(U<2||W==null){return W}for(var Q=1;Q<U;Q++){var V=arguments[Q],T=O(V),P=T.length;for(var S=0;S<P;S++){var R=T[S];if(!N||W[R]===void 0){W[R]=V[R]}}}return W}};var B=function(O){if(!M.isObject(O)){return{}}if(A){return A(O)}D.prototype=O;var N=new D;D.prototype=null;return N};var J=Math.pow(2,53)-1;var C=function(O){var N=O&&O.length;return typeof N=="number"&&N>=0&&N<=J};M.each=M.forEach=function(R,S,O){S=b(S,O);var N,Q;if(C(R)){for(N=0,Q=R.length;N<Q;N++){S(R[N],N,R)}}else{var P=M.keys(R);for(N=0,Q=P.length;N<Q;N++){S(R[P[N]],P[N],R)}}return R};M.map=M.collect=function(S,U,P){U=E(U,P);var R=!C(S)&&M.keys(S),Q=(R||S).length,O=Array(Q);for(var N=0;N<Q;N++){var T=R?R[N]:N;O[N]=U(S[T],T,S)}return O};function y(N){function O(T,V,P,S,Q,R){for(;Q>=0&&Q<R;Q+=N){var U=S?S[Q]:Q;P=V(P,T[U],U,T)}return P}return function(U,V,P,R){V=b(V,R,4);var T=!C(U)&&M.keys(U),S=(T||U).length,Q=N>0?0:S-1;if(arguments.length<3){P=U[T?T[Q]:Q];Q+=N}return O(U,V,P,T,Q,S)}}M.reduce=M.foldl=M.inject=y(1);M.reduceRight=M.foldr=y(-1);M.find=M.detect=function(Q,N,P){var O;if(C(Q)){O=M.findIndex(Q,N,P)}else{O=M.findKey(Q,N,P)}if(O!==void 0&&O!==-1){return Q[O]}};M.filter=M.select=function(Q,N,P){var O=[];N=E(N,P);M.each(Q,function(T,R,S){if(N(T,R,S)){O.push(T)}});return O};M.reject=function(P,N,O){return M.filter(P,M.negate(E(N)),O)};M.every=M.all=function(S,N,P){N=E(N,P);var R=!C(S)&&M.keys(S),Q=(R||S).length;for(var O=0;O<Q;O++){var T=R?R[O]:O;if(!N(S[T],T,S)){return false}}return true};M.some=M.any=function(S,N,P){N=E(N,P);var R=!C(S)&&M.keys(S),Q=(R||S).length;for(var O=0;O<Q;O++){var T=R?R[O]:O;if(N(S[T],T,S)){return true}}return false};M.contains=M.includes=M.include=function(P,O,N){if(!C(P)){P=M.values(P)}return M.indexOf(P,O,typeof N=="number"&&N)>=0};M.invoke=function(P,Q){var N=l.call(arguments,2);var O=M.isFunction(Q);return M.map(P,function(S){var R=O?Q:S[Q];return R==null?R:R.apply(S,N)})};M.pluck=function(O,N){return M.map(O,M.property(N))};M.where=function(O,N){return M.filter(O,M.matcher(N))};M.findWhere=function(O,N){return M.find(O,M.matcher(N))};M.max=function(Q,S,N){var V=-Infinity,T=-Infinity,U,P;if(S==null&&Q!=null){Q=C(Q)?Q:M.values(Q);for(var R=0,O=Q.length;R<O;R++){U=Q[R];if(U>V){V=U}}}else{S=E(S,N);M.each(Q,function(Y,W,X){P=S(Y,W,X);if(P>T||P===-Infinity&&V===-Infinity){V=Y;T=P}})}return V};M.min=function(Q,S,N){var V=Infinity,T=Infinity,U,P;if(S==null&&Q!=null){Q=C(Q)?Q:M.values(Q);for(var R=0,O=Q.length;R<O;R++){U=Q[R];if(U<V){V=U}}}else{S=E(S,N);M.each(Q,function(Y,W,X){P=S(Y,W,X);if(P<T||P===Infinity&&V===Infinity){V=Y;T=P}})}return V};M.shuffle=function(R){var S=C(R)?R:M.values(R);var Q=S.length;var N=Array(Q);for(var O=0,P;O<Q;O++){P=M.random(0,O);if(P!==O){N[O]=N[P]}N[P]=S[O]}return N};M.sample=function(O,P,N){if(P==null||N){if(!C(O)){O=M.values(O)}return O[M.random(O.length-1)]}return M.shuffle(O).slice(0,Math.max(0,P))};M.sortBy=function(O,P,N){P=E(P,N);return M.pluck(M.map(O,function(S,Q,R){return{value:S,index:Q,criteria:P(S,Q,R)}}).sort(function(T,S){var R=T.criteria;var Q=S.criteria;if(R!==Q){if(R>Q||R===void 0){return 1}if(R<Q||Q===void 0){return -1}}return T.index-S.index}),"value")};var q=function(N){return function(Q,R,P){var O={};R=E(R,P);M.each(Q,function(U,S){var T=R(U,S,Q);N(O,U,T)});return O}};M.groupBy=q(function(N,P,O){if(M.has(N,O)){N[O].push(P)}else{N[O]=[P]}});M.indexBy=q(function(N,P,O){N[O]=P});M.countBy=q(function(N,P,O){if(M.has(N,O)){N[O]++}else{N[O]=1}});M.toArray=function(N){if(!N){return[]}if(M.isArray(N)){return l.call(N)}if(C(N)){return M.map(N,M.identity)}return M.values(N)};M.size=function(N){if(N==null){return 0}return C(N)?N.length:M.keys(N).length};M.partition=function(R,N,P){N=E(N,P);var Q=[],O=[];M.each(R,function(T,S,U){(N(T,S,U)?Q:O).push(T)});return[Q,O]};M.first=M.head=M.take=function(P,O,N){if(P==null){return void 0}if(O==null||N){return P[0]}return M.initial(P,P.length-O)};M.initial=function(P,O,N){return l.call(P,0,Math.max(0,P.length-(O==null||N?1:O)))};M.last=function(P,O,N){if(P==null){return void 0}if(O==null||N){return P[P.length-1]}return M.rest(P,Math.max(0,P.length-O))};M.rest=M.tail=M.drop=function(P,O,N){return l.call(P,O==null||N?1:O)};M.compact=function(N){return M.filter(N,M.identity)};var v=function(T,P,U,X){var O=[],W=0;for(var R=X||0,N=T&&T.length;R<N;R++){var V=T[R];if(C(V)&&(M.isArray(V)||M.isArguments(V))){if(!P){V=v(V,P,U)}var Q=0,S=V.length;O.length+=S;while(Q<S){O[W++]=V[Q++]}}else{if(!U){O[W++]=V}}}return O};M.flatten=function(O,N){return v(O,N,false)};M.without=function(N){return M.difference(N,l.call(arguments,1))};M.uniq=M.unique=function(U,Q,T,O){if(U==null){return[]}if(!M.isBoolean(Q)){O=T;T=Q;Q=false}if(T!=null){T=E(T,O)}var W=[];var N=[];for(var S=0,P=U.length;S<P;S++){var V=U[S],R=T?T(V,S,U):V;if(Q){if(!S||N!==R){W.push(V)}N=R}else{if(T){if(!M.contains(N,R)){N.push(R);W.push(V)}}else{if(!M.contains(W,V)){W.push(V)}}}}return W};M.union=function(){return M.uniq(v(arguments,true,true))};M.intersection=function(T){if(T==null){return[]}var N=[];var S=arguments.length;for(var P=0,R=T.length;P<R;P++){var Q=T[P];if(M.contains(N,Q)){continue}for(var O=1;O<S;O++){if(!M.contains(arguments[O],Q)){break}}if(O===S){N.push(Q)}}return N};M.difference=function(O){var N=v(arguments,true,true,1);return M.filter(O,function(P){return !M.contains(N,P)})};M.zip=function(){return M.unzip(arguments)};M.unzip=function(Q){var P=Q&&M.max(Q,"length").length||0;var N=Array(P);for(var O=0;O<P;O++){N[O]=M.pluck(Q,O)}return N};M.object=function(R,O){var N={};for(var P=0,Q=R&&R.length;P<Q;P++){if(O){N[R[P]]=O[P]}else{N[R[P][0]]=R[P][1]}}return N};M.indexOf=function(R,P,Q){var N=0,O=R&&R.length;if(typeof Q=="number"){N=Q<0?Math.max(0,O+Q):Q}else{if(Q&&O){N=M.sortedIndex(R,P);return R[N]===P?N:-1}}if(P!==P){return M.findIndex(l.call(R,N),M.isNaN)}for(;N<O;N++){if(R[N]===P){return N}}return -1};M.lastIndexOf=function(Q,O,P){var N=Q?Q.length:0;if(typeof P=="number"){N=P<0?N+P+1:Math.min(N,P+1)}if(O!==O){return M.findLastIndex(l.call(Q,0,N),M.isNaN)}while(--N>=0){if(Q[N]===O){return N}}return -1};function f(N){return function(S,O,Q){O=E(O,Q);var R=S!=null&&S.length;var P=N>0?0:R-1;for(;P>=0&&P<R;P+=N){if(O(S[P],P,S)){return P}}return -1}}M.findIndex=f(1);M.findLastIndex=f(-1);M.sortedIndex=function(U,S,T,P){T=E(T,P,1);var R=T(S);var N=0,Q=U.length;while(N<Q){var O=Math.floor((N+Q)/2);if(T(U[O])<R){N=O+1}else{Q=O}}return N};M.range=function(S,P,R){if(arguments.length<=1){P=S||0;S=0}R=R||1;var Q=Math.max(Math.ceil((P-S)/R),0);var O=Array(Q);for(var N=0;N<Q;N++,S+=R){O[N]=S}return O};var x=function(S,P,R,T,Q){if(!(T instanceof P)){return S.apply(R,Q)}var O=B(S.prototype);var N=S.apply(O,Q);if(M.isObject(N)){return N}return O};M.bind=function(Q,O){if(I&&Q.bind===I){return I.apply(Q,l.call(arguments,1))}if(!M.isFunction(Q)){throw new TypeError("Bind must be called on a function")}var N=l.call(arguments,2);var P=function(){return x(Q,P,O,this,N.concat(l.call(arguments)))};return P};M.partial=function(O){var P=l.call(arguments,1);var N=function(){var Q=0,T=P.length;var R=Array(T);for(var S=0;S<T;S++){R[S]=P[S]===M?arguments[Q++]:P[S]}while(Q<arguments.length){R.push(arguments[Q++])}return x(O,N,this,this,R)};return N};M.bindAll=function(Q){var O,P=arguments.length,N;if(P<=1){throw new Error("bindAll must be passed function names")}for(O=1;O<P;O++){N=arguments[O];Q[N]=M.bind(Q[N],Q)}return Q};M.memoize=function(O,N){var P=function(S){var R=P.cache;var Q=""+(N?N.apply(this,arguments):S);if(!M.has(R,Q)){R[Q]=O.apply(this,arguments)}return R[Q]};P.cache={};return P};M.delay=function(O,P){var N=l.call(arguments,2);return setTimeout(function(){return O.apply(null,N)},P)};M.defer=M.partial(M.delay,M,1);M.throttle=function(O,Q,U){var N,S,V;var T=null;var R=0;if(!U){U={}}var P=function(){R=U.leading===false?0:M.now();T=null;V=O.apply(N,S);if(!T){N=S=null}};return function(){var W=M.now();if(!R&&U.leading===false){R=W}var X=Q-(W-R);N=this;S=arguments;if(X<=0||X>Q){if(T){clearTimeout(T);T=null}R=W;V=O.apply(N,S);if(!T){N=S=null}}else{if(!T&&U.trailing!==false){T=setTimeout(P,X)}}return V}};M.debounce=function(P,R,O){var U,T,N,S,V;var Q=function(){var W=M.now()-S;if(W<R&&W>=0){U=setTimeout(Q,R-W)}else{U=null;if(!O){V=P.apply(N,T);if(!U){N=T=null}}}};return function(){N=this;T=arguments;S=M.now();var W=O&&!U;if(!U){U=setTimeout(Q,R)}if(W){V=P.apply(N,T);N=T=null}return V}};M.wrap=function(N,O){return M.partial(O,N)};M.negate=function(N){return function(){return !N.apply(this,arguments)}};M.compose=function(){var N=arguments;var O=N.length-1;return function(){var Q=O;var P=N[O].apply(this,arguments);while(Q--){P=N[Q].call(this,P)}return P}};M.after=function(O,N){return function(){if(--O<1){return N.apply(this,arguments)}}};M.before=function(P,O){var N;return function(){if(--P>0){N=O.apply(this,arguments)}if(P<=1){O=null}return N}};M.once=M.partial(M.before,2);var F=!{toString:null}.propertyIsEnumerable("toString");var a=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];function d(R,Q){var N=a.length;var O=R.constructor;var P=(M.isFunction(O)&&O.prototype)||g;var S="constructor";if(M.has(R,S)&&!M.contains(Q,S)){Q.push(S)}while(N--){S=a[N];if(S in R&&R[S]!==P[S]&&!M.contains(Q,S)){Q.push(S)}}}M.keys=function(P){if(!M.isObject(P)){return[]}if(e){return e(P)}var O=[];for(var N in P){if(M.has(P,N)){O.push(N)}}if(F){d(P,O)}return O};M.allKeys=function(P){if(!M.isObject(P)){return[]}var O=[];for(var N in P){O.push(N)}if(F){d(P,O)}return O};M.values=function(R){var Q=M.keys(R);var P=Q.length;var N=Array(P);for(var O=0;O<P;O++){N[O]=R[Q[O]]}return N};M.mapObject=function(S,U,P){U=E(U,P);var R=M.keys(S),Q=R.length,O={},T;for(var N=0;N<Q;N++){T=R[N];O[T]=U(S[T],T,S)}return O};M.pairs=function(R){var P=M.keys(R);var O=P.length;var Q=Array(O);for(var N=0;N<O;N++){Q[N]=[P[N],R[P[N]]]}return Q};M.invert=function(R){var N={};var Q=M.keys(R);for(var O=0,P=Q.length;O<P;O++){N[R[Q[O]]]=Q[O]}return N};M.functions=M.methods=function(P){var O=[];for(var N in P){if(M.isFunction(P[N])){O.push(N)}}return O.sort()};M.extend=p(M.allKeys);M.extendOwn=M.assign=p(M.keys);M.findKey=function(T,N,Q){N=E(N,Q);var S=M.keys(T),P;for(var O=0,R=S.length;O<R;O++){P=S[O];if(N(T[P],P,T)){return P}}};M.pick=function(P,T,N){var X={},Q=P,S,W;if(Q==null){return X}if(M.isFunction(T)){W=M.allKeys(Q);S=b(T,N)}else{W=v(arguments,false,false,1);S=function(Z,Y,aa){return Y in aa};Q=Object(Q)}for(var R=0,O=W.length;R<O;R++){var V=W[R];var U=Q[V];if(S(U,V,Q)){X[V]=U}}return X};M.omit=function(P,Q,N){if(M.isFunction(Q)){Q=M.negate(Q)}else{var O=M.map(v(arguments,false,false,1),String);Q=function(S,R){return !M.contains(O,R)}}return M.pick(P,Q,N)};M.defaults=p(M.allKeys,true);M.clone=function(N){if(!M.isObject(N)){return N}return M.isArray(N)?N.slice():M.extend({},N)};M.tap=function(O,N){N(O);return O};M.isMatch=function(O,N){var S=M.keys(N),R=S.length;if(O==null){return !R}var T=Object(O);for(var Q=0;Q<R;Q++){var P=S[Q];if(N[P]!==T[P]||!(P in T)){return false}}return true};var L=function(V,U,O,Q){if(V===U){return V!==0||1/V===1/U}if(V==null||U==null){return V===U}if(V instanceof M){V=V._wrapped}if(U instanceof M){U=U._wrapped}var S=c.call(V);if(S!==c.call(U)){return false}switch(S){case"[object RegExp]":case"[object String]":return""+V===""+U;case"[object Number]":if(+V!==+V){return +U!==+U}return +V===0?1/+V===1/U:+V===+U;case"[object Date]":case"[object Boolean]":return +V===+U}var P=S==="[object Array]";if(!P){if(typeof V!="object"||typeof U!="object"){return false}var T=V.constructor,R=U.constructor;if(T!==R&&!(M.isFunction(T)&&T instanceof T&&M.isFunction(R)&&R instanceof R)&&("constructor" in V&&"constructor" in U)){return false}}O=O||[];Q=Q||[];var N=O.length;while(N--){if(O[N]===V){return Q[N]===U}}O.push(V);Q.push(U);if(P){N=V.length;if(N!==U.length){return false}while(N--){if(!L(V[N],U[N],O,Q)){return false}}}else{var X=M.keys(V),W;N=X.length;if(M.keys(U).length!==N){return false}while(N--){W=X[N];if(!(M.has(U,W)&&L(V[W],U[W],O,Q))){return false}}}O.pop();Q.pop();return true};M.isEqual=function(O,N){return L(O,N)};M.isEmpty=function(N){if(N==null){return true}if(C(N)&&(M.isArray(N)||M.isString(N)||M.isArguments(N))){return N.length===0}return M.keys(N).length===0};M.isElement=function(N){return !!(N&&N.nodeType===1)};M.isArray=s||function(N){return c.call(N)==="[object Array]"};M.isObject=function(O){var N=typeof O;return N==="function"||N==="object"&&!!O};M.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(N){M["is"+N]=function(O){return c.call(O)==="[object "+N+"]"}});if(!M.isArguments(arguments)){M.isArguments=function(N){return M.has(N,"callee")}}if(typeof/./!="function"&&typeof Int8Array!="object"){M.isFunction=function(N){return typeof N=="function"||false}}M.isFinite=function(N){return isFinite(N)&&!isNaN(parseFloat(N))};M.isNaN=function(N){return M.isNumber(N)&&N!==+N};M.isBoolean=function(N){return N===true||N===false||c.call(N)==="[object Boolean]"};M.isNull=function(N){return N===null};M.isUndefined=function(N){return N===void 0};M.has=function(O,N){return O!=null&&j.call(O,N)};M.noConflict=function(){u._=k;return this};M.identity=function(N){return N};M.constant=function(N){return function(){return N}};M.noop=function(){};M.property=function(N){return function(O){return O==null?void 0:O[N]}};M.propertyOf=function(N){return N==null?function(){}:function(O){return N[O]}};M.matcher=M.matches=function(N){N=M.extendOwn({},N);return function(O){return M.isMatch(O,N)}};M.times=function(R,Q,P){var N=Array(Math.max(0,R));Q=b(Q,P,1);for(var O=0;O<R;O++){N[O]=Q(O)}return N};M.random=function(O,N){if(N==null){N=O;O=0}return O+Math.floor(Math.random()*(N-O+1))};M.now=Date.now||function(){return new Date().getTime()};var r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};var m=M.invert(r);var w=function(R){var O=function(S){return R[S]};var Q="(?:"+M.keys(R).join("|")+")";var P=RegExp(Q);var N=RegExp(Q,"g");return function(S){S=S==null?"":""+S;return P.test(S)?S.replace(N,O):S}};M.escape=w(r);M.unescape=w(m);M.result=function(N,P,Q){var O=N==null?void 0:N[P];if(O===void 0){O=Q}return M.isFunction(O)?O.call(N):O};var z=0;M.uniqueId=function(N){var O=++z+"";return N?N+O:O};M.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var t=/(.)^/;var h={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"};var i=/\\|'|\r|\n|\u2028|\u2029/g;var G=function(N){return"\\"+h[N]};M.template=function(W,Q,T){if(!Q&&T){Q=T}Q=M.defaults({},Q,M.templateSettings);var R=RegExp([(Q.escape||t).source,(Q.interpolate||t).source,(Q.evaluate||t).source].join("|")+"|$","g");var S=0;var N="__p+='";W.replace(R,function(Y,Z,X,ab,aa){N+=W.slice(S,aa).replace(i,G);S=aa+Y.length;if(Z){N+="'+\n((__t=("+Z+"))==null?'':_.escape(__t))+\n'"}else{if(X){N+="'+\n((__t=("+X+"))==null?'':__t)+\n'"}else{if(ab){N+="';\n"+ab+"\n__p+='"}}}return Y});N+="';\n";if(!Q.variable){N="with(obj||{}){\n"+N+"}\n"}N="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+N+"return __p;\n";try{var P=new Function(Q.variable||"obj","_",N)}catch(U){U.source=N;throw U}var V=function(X){return P.call(this,X,M)};var O=Q.variable||"obj";V.source="function("+O+"){\n"+N+"}";return V};M.chain=function(O){var N=M(O);N._chain=true;return N};var o=function(N,O){return N._chain?M(O).chain():O};M.mixin=function(N){M.each(M.functions(N),function(O){var P=M[O]=N[O];M.prototype[O]=function(){var Q=[this._wrapped];K.apply(Q,arguments);return o(this,P.apply(M,Q))}})};M.mixin(M);M.each(["pop","push","reverse","shift","sort","splice","unshift"],function(N){var O=H[N];M.prototype[N]=function(){var P=this._wrapped;O.apply(P,arguments);if((N==="shift"||N==="splice")&&P.length===0){delete P[0]}return o(this,P)}});M.each(["concat","join","slice"],function(N){var O=H[N];M.prototype[N]=function(){return o(this,O.apply(this._wrapped,arguments))}});M.prototype.value=function(){return this._wrapped};M.prototype.valueOf=M.prototype.toJSON=M.prototype.value;M.prototype.toString=function(){return""+this._wrapped};if(typeof define==="function"&&define.amd){define("underscore",[],function(){return M})}}.call(this));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/libs/backbone/1.1.2/backbone-min.js' */
if(typeof RWJS==="undefined"){var RWJS={}}(function(a,b){if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(e,f,d){a.Backbone=b(a,d,e,f)})}else{if(typeof exports!=="undefined"){var c=require("underscore");b(a,exports,c)}else{RWJS.Backbone=b(a,{},RWJS._,(RWJS.jQuery||a.Zepto||a.ender||RWJS.$))}}}(this,function(v,B,N,z){var D=v.Backbone;var g=[];var F=g.push;var o=g.slice;var u=g.splice;B.VERSION="1.1.2";B.$=z;B.noConflict=function(){v.Backbone=D;return this};B.emulateHTTP=false;B.emulateJSON=false;var L=B.Events={on:function(O,R,Q){if(!y(this,"on",O,[R,Q])||!R){return this}this._events||(this._events={});var P=this._events[O]||(this._events[O]=[]);P.push({callback:R,context:Q,ctx:Q||this});return this},once:function(P,S,Q){if(!y(this,"once",P,[S,Q])||!S){return this}var O=this;var R=N.once(function(){O.off(P,R);S.apply(this,arguments)});R._callback=S;return this.on(P,R,Q)},off:function(O,X,P){var V,W,Y,U,T,Q,S,R;if(!this._events||!y(this,"off",O,[X,P])){return this}if(!O&&!X&&!P){this._events=void 0;return this}U=O?[O]:N.keys(this._events);for(T=0,Q=U.length;T<Q;T++){O=U[T];if(Y=this._events[O]){this._events[O]=V=[];if(X||P){for(S=0,R=Y.length;S<R;S++){W=Y[S];if((X&&X!==W.callback&&X!==W.callback._callback)||(P&&P!==W.context)){V.push(W)}}}if(!V.length){delete this._events[O]}}}return this},trigger:function(Q){if(!this._events){return this}var P=o.call(arguments,1);if(!y(this,"trigger",Q,P)){return this}var R=this._events[Q];var O=this._events.all;if(R){b(R,P)}if(O){b(O,arguments)}return this},stopListening:function(R,P,T){var Q=this._listeningTo;if(!Q){return this}var O=!P&&!T;if(!T&&typeof P==="object"){T=this}if(R){(Q={})[R._listenId]=R}for(var S in Q){R=Q[S];R.off(P,T,this);if(O||N.isEmpty(R._events)){delete this._listeningTo[S]}}return this}};var x=/\s+/;var y=function(V,T,P,S){if(!P){return true}if(typeof P==="object"){for(var R in P){V[T].apply(V,[R,P[R]].concat(S))}return false}if(x.test(P)){var U=P.split(x);for(var Q=0,O=U.length;Q<O;Q++){V[T].apply(V,[U[Q]].concat(S))}return false}return true};var b=function(T,R){var U,S=-1,Q=T.length,P=R[0],O=R[1],V=R[2];switch(R.length){case 0:while(++S<Q){(U=T[S]).callback.call(U.ctx)}return;case 1:while(++S<Q){(U=T[S]).callback.call(U.ctx,P)}return;case 2:while(++S<Q){(U=T[S]).callback.call(U.ctx,P,O)}return;case 3:while(++S<Q){(U=T[S]).callback.call(U.ctx,P,O,V)}return;default:while(++S<Q){(U=T[S]).callback.apply(U.ctx,R)}return}};var E={listenTo:"on",listenToOnce:"once"};N.each(E,function(O,P){L[P]=function(S,Q,U){var R=this._listeningTo||(this._listeningTo={});var T=S._listenId||(S._listenId=N.uniqueId("l"));R[T]=S;if(!U&&typeof Q==="object"){U=this}S[O](Q,U,this);return this}});L.bind=L.on;L.unbind=L.off;N.extend(B,L);var G=B.Model=function(O,Q){var P=O||{};Q||(Q={});this.cid=N.uniqueId("c");this.attributes={};if(Q.collection){this.collection=Q.collection}if(Q.parse){P=this.parse(P,Q)||{}}P=N.defaults({},P,N.result(this,"defaults"));this.set(P,Q);this.changed={};this.initialize.apply(this,arguments)};N.extend(G.prototype,L,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(O){return N.clone(this.attributes)},sync:function(){return B.sync.apply(this,arguments)},get:function(O){return this.attributes[O]},escape:function(O){return N.escape(this.get(O))},has:function(O){return this.get(O)!=null},set:function(W,O,aa){var U,X,Y,V,T,Z,Q,S;if(W==null){return this}if(typeof W==="object"){X=W;aa=O}else{(X={})[W]=O}aa||(aa={});if(!this._validate(X,aa)){return false}Y=aa.unset;T=aa.silent;V=[];Z=this._changing;this._changing=true;if(!Z){this._previousAttributes=N.clone(this.attributes);this.changed={}}S=this.attributes,Q=this._previousAttributes;if(this.idAttribute in X){this.id=X[this.idAttribute]}for(U in X){O=X[U];if(!N.isEqual(S[U],O)){V.push(U)}if(!N.isEqual(Q[U],O)){this.changed[U]=O}else{delete this.changed[U]}Y?delete S[U]:S[U]=O}if(!T){if(V.length){this._pending=aa}for(var R=0,P=V.length;R<P;R++){this.trigger("change:"+V[R],this,S[V[R]],aa)}}if(Z){return this}if(!T){while(this._pending){aa=this._pending;this._pending=false;this.trigger("change",this,aa)}}this._pending=false;this._changing=false;return this},unset:function(O,P){return this.set(O,void 0,N.extend({},P,{unset:true}))},clear:function(P){var O={};for(var Q in this.attributes){O[Q]=void 0}return this.set(O,N.extend({},P,{unset:true}))},hasChanged:function(O){if(O==null){return !N.isEmpty(this.changed)}return N.has(this.changed,O)},changedAttributes:function(Q){if(!Q){return this.hasChanged()?N.clone(this.changed):false}var S,R=false;var P=this._changing?this._previousAttributes:this.attributes;for(var O in Q){if(N.isEqual(P[O],(S=Q[O]))){continue}(R||(R={}))[O]=S}return R},previous:function(O){if(O==null||!this._previousAttributes){return null}return this._previousAttributes[O]},previousAttributes:function(){return N.clone(this._previousAttributes)},fetch:function(P){P=P?N.clone(P):{};if(P.parse===void 0){P.parse=true}var O=this;var Q=P.success;P.success=function(R){if(!O.set(O.parse(R,P),P)){return false}if(Q){Q(O,R,P)}O.trigger("sync",O,R,P)};J(this,P);return this.sync("read",this,P)},save:function(S,P,W){var T,O,V,Q=this.attributes;if(S==null||typeof S==="object"){T=S;W=P}else{(T={})[S]=P}W=N.extend({validate:true},W);if(T&&!W.wait){if(!this.set(T,W)){return false}}else{if(!this._validate(T,W)){return false}}if(T&&W.wait){this.attributes=N.extend({},Q,T)}if(W.parse===void 0){W.parse=true}var R=this;var U=W.success;W.success=function(Y){R.attributes=Q;var X=R.parse(Y,W);if(W.wait){X=N.extend(T||{},X)}if(N.isObject(X)&&!R.set(X,W)){return false}if(U){U(R,Y,W)}R.trigger("sync",R,Y,W)};J(this,W);O=this.isNew()?"create":(W.patch?"patch":"update");if(O==="patch"){W.attrs=T}V=this.sync(O,this,W);if(T&&W.wait){this.attributes=Q}return V},destroy:function(P){P=P?N.clone(P):{};var O=this;var S=P.success;var Q=function(){O.trigger("destroy",O,O.collection,P)};P.success=function(T){if(P.wait||O.isNew()){Q()}if(S){S(O,T,P)}if(!O.isNew()){O.trigger("sync",O,T,P)}};if(this.isNew()){P.success();return false}J(this,P);var R=this.sync("delete",this,P);if(!P.wait){Q()}return R},url:function(){var O=N.result(this,"urlRoot")||N.result(this.collection,"url")||s();if(this.isNew()){return O}return O.replace(/([^\/])$/,"$1/")+encodeURIComponent(this.id)},parse:function(P,O){return P},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return !this.has(this.idAttribute)},isValid:function(O){return this._validate({},N.extend(O||{},{validate:true}))},_validate:function(Q,P){if(!P.validate||!this.validate){return true}Q=N.extend({},this.attributes,Q);var O=this.validationError=this.validate(Q,P)||null;if(!O){return true}this.trigger("invalid",this,O,N.extend(P,{validationError:O}));return false}});var a=["keys","values","pairs","invert","pick","omit"];N.each(a,function(O){G.prototype[O]=function(){var P=o.call(arguments);P.unshift(this.attributes);return N[O].apply(N,P)}});var c=B.Collection=function(P,O){O||(O={});if(O.model){this.model=O.model}if(O.comparator!==void 0){this.comparator=O.comparator}this._reset();this.initialize.apply(this,arguments);if(P){this.reset(P,N.extend({silent:true},O))}};var p={add:true,remove:true,merge:true};var M={add:true,remove:false};N.extend(c.prototype,L,{model:G,initialize:function(){},toJSON:function(O){return this.map(function(P){return P.toJSON(O)})},sync:function(){return B.sync.apply(this,arguments)},add:function(P,O){return this.set(P,N.extend({merge:false},O,M))},remove:function(U,R){var T=!N.isArray(U);U=T?[U]:N.clone(U);R||(R={});var S,O,Q,P;for(S=0,O=U.length;S<O;S++){P=U[S]=this.get(U[S]);if(!P){continue}delete this._byId[P.id];delete this._byId[P.cid];Q=this.indexOf(P);this.models.splice(Q,1);this.length--;if(!R.silent){R.index=Q;P.trigger("remove",P,this,R)}this._removeReference(P,R)}return T?U[0]:U},set:function(ah,P){P=N.defaults({},P,p);if(P.parse){ah=this.parse(ah,P)}var S=!N.isArray(ah);ah=S?(ah?[ah]:[]):N.clone(ah);var ad,ab,X,Q,Z,W,ag;var U=P.at;var af=this.model;var O=this.comparator&&(U==null)&&P.sort!==false;var ae=N.isString(this.comparator)?this.comparator:null;var aj=[],aa=[],Y={};var V=P.add,R=P.merge,ai=P.remove;var ac=!O&&V&&ai?[]:false;for(ad=0,ab=ah.length;ad<ab;ad++){Z=ah[ad]||{};if(Z instanceof G){X=Q=Z}else{X=Z[af.prototype.idAttribute||"id"]}if(W=this.get(X)){if(ai){Y[W.cid]=true}if(R){Z=Z===Q?Q.attributes:Z;if(P.parse){Z=W.parse(Z,P)}W.set(Z,P);if(O&&!ag&&W.hasChanged(ae)){ag=true}}ah[ad]=W}else{if(V){Q=ah[ad]=this._prepareModel(Z,P);if(!Q){continue}aj.push(Q);this._addReference(Q,P)}}Q=W||Q;if(ac&&(Q.isNew()||!Y[Q.id])){ac.push(Q)}Y[Q.id]=true}if(ai){for(ad=0,ab=this.length;ad<ab;++ad){if(!Y[(Q=this.models[ad]).cid]){aa.push(Q)}}if(aa.length){this.remove(aa,P)}}if(aj.length||(ac&&ac.length)){if(O){ag=true}this.length+=aj.length;if(U!=null){for(ad=0,ab=aj.length;ad<ab;ad++){this.models.splice(U+ad,0,aj[ad])}}else{if(ac){this.models.length=0}var T=ac||aj;for(ad=0,ab=T.length;ad<ab;ad++){this.models.push(T[ad])}}}if(ag){this.sort({silent:true})}if(!P.silent){for(ad=0,ab=aj.length;ad<ab;ad++){(Q=aj[ad]).trigger("add",Q,this,P)}if(ag||(ac&&ac.length)){this.trigger("sort",this,P)}}return S?ah[0]:ah},reset:function(R,P){P||(P={});for(var Q=0,O=this.models.length;Q<O;Q++){this._removeReference(this.models[Q],P)}P.previousModels=this.models;this._reset();R=this.add(R,N.extend({silent:true},P));if(!P.silent){this.trigger("reset",this,P)}return R},push:function(P,O){return this.add(P,N.extend({at:this.length},O))},pop:function(P){var O=this.at(this.length-1);this.remove(O,P);return O},unshift:function(P,O){return this.add(P,N.extend({at:0},O))},shift:function(P){var O=this.at(0);this.remove(O,P);return O},slice:function(){return o.apply(this.models,arguments)},get:function(O){if(O==null){return void 0}return this._byId[O]||this._byId[O.id]||this._byId[O.cid]},at:function(O){return this.models[O]},where:function(O,P){if(N.isEmpty(O)){return P?void 0:[]}return this[P?"find":"filter"](function(Q){for(var R in O){if(O[R]!==Q.get(R)){return false}}return true})},findWhere:function(O){return this.where(O,true)},sort:function(O){if(!this.comparator){throw new Error("Cannot sort a set without a comparator")}O||(O={});if(N.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(N.bind(this.comparator,this))}if(!O.silent){this.trigger("sort",this,O)}return this},pluck:function(O){return N.invoke(this.models,"get",O)},fetch:function(O){O=O?N.clone(O):{};if(O.parse===void 0){O.parse=true}var Q=O.success;var P=this;O.success=function(R){var S=O.reset?"reset":"set";P[S](R,O);if(Q){Q(P,R,O)}P.trigger("sync",P,R,O)};J(this,O);return this.sync("read",this,O)},create:function(P,O){O=O?N.clone(O):{};if(!(P=this._prepareModel(P,O))){return false}if(!O.wait){this.add(P,O)}var R=this;var Q=O.success;O.success=function(S,T){if(O.wait){R.add(S,O)}if(Q){Q(S,T,O)}};P.save(null,O);return P},parse:function(P,O){return P},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(Q,P){if(Q instanceof G){return Q}P=P?N.clone(P):{};P.collection=this;var O=new this.model(Q,P);if(!O.validationError){return O}this.trigger("invalid",this,O.validationError,P);return false},_addReference:function(P,O){this._byId[P.cid]=P;if(P.id!=null){this._byId[P.id]=P}if(!P.collection){P.collection=this}P.on("all",this._onModelEvent,this)},_removeReference:function(P,O){if(this===P.collection){delete P.collection}P.off("all",this._onModelEvent,this)},_onModelEvent:function(Q,P,R,O){if((Q==="add"||Q==="remove")&&R!==this){return}if(Q==="destroy"){this.remove(P,O)}if(P&&Q==="change:"+P.idAttribute){delete this._byId[P.previous(P.idAttribute)];if(P.id!=null){this._byId[P.id]=P}}this.trigger.apply(this,arguments)}});var A=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain","sample"];N.each(A,function(O){c.prototype[O]=function(){var P=o.call(arguments);P.unshift(this.models);return N[O].apply(N,P)}});var l=["groupBy","countBy","sortBy","indexBy"];N.each(l,function(O){c.prototype[O]=function(R,P){var Q=N.isFunction(R)?R:function(S){return S.get(R)};return N[O](this.models,Q,P)}});var I=B.View=function(O){this.cid=N.uniqueId("view");O||(O={});N.extend(this,N.pick(O,e));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var w=/^(\S+)\s*(.*)$/;var e=["model","collection","el","id","attributes","className","tagName","events"];N.extend(I.prototype,L,{tagName:"div",$:function(O){return this.$el.find(O)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(O,P){if(this.$el){this.undelegateEvents()}this.$el=O instanceof B.$?O:B.$(O);this.el=this.$el[0];if(P!==false){this.delegateEvents()}return this},delegateEvents:function(S){if(!(S||(S=N.result(this,"events")))){return this}this.undelegateEvents();for(var R in S){var T=S[R];if(!N.isFunction(T)){T=this[S[R]]}if(!T){continue}var Q=R.match(w);var P=Q[1],O=Q[2];T=N.bind(T,this);P+=".delegateEvents"+this.cid;if(O===""){this.$el.on(P,T)}else{this.$el.on(P,O,T)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var O=N.extend({},N.result(this,"attributes"));if(this.id){O.id=N.result(this,"id")}if(this.className){O["class"]=N.result(this,"className")}var P=B.$("<"+N.result(this,"tagName")+">").attr(O);this.setElement(P,false)}else{this.setElement(N.result(this,"el"),false)}}});B.sync=function(U,P,O){var R=k[U];N.defaults(O||(O={}),{emulateHTTP:B.emulateHTTP,emulateJSON:B.emulateJSON});var T={type:R,dataType:"json"};if(!O.url){T.url=N.result(P,"url")||s()}if(O.data==null&&P&&(U==="create"||U==="update"||U==="patch")){T.contentType="application/json";T.data=JSON.stringify(O.attrs||P.toJSON(O))}if(O.emulateJSON){T.contentType="application/x-www-form-urlencoded";T.data=T.data?{model:T.data}:{}}if(O.emulateHTTP&&(R==="PUT"||R==="DELETE"||R==="PATCH")){T.type="POST";if(O.emulateJSON){T.data._method=R}var Q=O.beforeSend;O.beforeSend=function(V){V.setRequestHeader("X-HTTP-Method-Override",R);if(Q){return Q.apply(this,arguments)}}}if(T.type!=="GET"&&!O.emulateJSON){T.processData=false}if(T.type==="PATCH"&&j){T.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var S=O.xhr=B.ajax(N.extend(T,O));P.trigger("request",P,S,O);return S};var j=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var k={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};B.ajax=function(){return B.$.ajax.apply(B.$,arguments)};var q=B.Router=function(O){O||(O={});if(O.routes){this.routes=O.routes}this._bindRoutes();this.initialize.apply(this,arguments)};var r=/\((.*?)\)/g;var t=/(\(\?)?:\w+/g;var d=/\*\w+/g;var h=/[\-{}\[\]+?.,\\\^$|#\s]/g;N.extend(q.prototype,L,{initialize:function(){},route:function(P,Q,R){if(!N.isRegExp(P)){P=this._routeToRegExp(P)}if(N.isFunction(Q)){R=Q;Q=""}if(!R){R=this[Q]}var O=this;B.history.route(P,function(T){var S=O._extractParameters(P,T);O.execute(R,S);O.trigger.apply(O,["route:"+Q].concat(S));O.trigger("route",Q,S);B.history.trigger("route",O,Q,S)});return this},execute:function(P,O){if(P){P.apply(this,O)}},navigate:function(P,O){B.history.navigate(P,O);return this},_bindRoutes:function(){if(!this.routes){return}this.routes=N.result(this,"routes");var P,O=N.keys(this.routes);while((P=O.pop())!=null){this.route(P,this.routes[P])}},_routeToRegExp:function(O){O=O.replace(h,"\\$&").replace(r,"(?:$1)?").replace(t,function(Q,P){return P?Q:"([^/?]+)"}).replace(d,"([^?]*?)");return new RegExp("^"+O+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(O,P){var Q=O.exec(P).slice(1);return N.map(Q,function(S,R){if(R===Q.length-1){return S||null}return S?decodeURIComponent(S):null})}});var i=B.History=function(){this.handlers=[];N.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var C=/^[#\/]|\s+$/g;var f=/^\/+|\/+$/g;var K=/msie [\w.]+/;var n=/\/$/;var H=/#.*$/;i.started=false;N.extend(i.prototype,L,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root},getHash:function(P){var O=(P||this).location.href.match(/#(.*)$/);return O?O[1]:""},getFragment:function(Q,P){if(Q==null){if(this._hasPushState||!this._wantsHashChange||P){Q=decodeURI(this.location.pathname+this.location.search);var O=this.root.replace(n,"");if(!Q.indexOf(O)){Q=Q.slice(O.length)}}else{Q=this.getHash()}}return Q.replace(C,"")},start:function(Q){if(i.started){throw new Error("Backbone.history has already been started")}i.started=true;this.options=N.extend({root:"/"},this.options,Q);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var P=this.getFragment();var O=document.documentMode;var R=(K.exec(navigator.userAgent.toLowerCase())&&(!O||O<=7));this.root=("/"+this.root+"/").replace(f,"/");if(R&&this._wantsHashChange){var T=B.$('<iframe src="javascript:0" tabindex="-1">');this.iframe=T.hide().appendTo("body")[0].contentWindow;this.navigate(P)}if(this._hasPushState){B.$(window).on("popstate",this.checkUrl)}else{if(this._wantsHashChange&&("onhashchange" in window)&&!R){B.$(window).on("hashchange",this.checkUrl)}else{if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}}}this.fragment=P;var S=this.location;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){this.fragment=this.getFragment(null,true);this.location.replace(this.root+"#"+this.fragment);return true}else{if(this._hasPushState&&this.atRoot()&&S.hash){this.fragment=this.getHash().replace(C,"");this.history.replaceState({},document.title,this.root+this.fragment)}}}if(!this.options.silent){return this.loadUrl()}},stop:function(){B.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);if(this._checkUrlInterval){clearInterval(this._checkUrlInterval)}i.started=false},route:function(O,P){this.handlers.unshift({route:O,callback:P})},checkUrl:function(P){var O=this.getFragment();if(O===this.fragment&&this.iframe){O=this.getFragment(this.getHash(this.iframe))}if(O===this.fragment){return false}if(this.iframe){this.navigate(O)}this.loadUrl()},loadUrl:function(O){O=this.fragment=this.getFragment(O);return N.any(this.handlers,function(P){if(P.route.test(O)){P.callback(O);return true}})},navigate:function(Q,P){if(!i.started){return false}if(!P||P===true){P={trigger:!!P}}var O=this.root+(Q=this.getFragment(Q||""));Q=Q.replace(H,"");if(this.fragment===Q){return}this.fragment=Q;if(Q===""&&O!=="/"){O=O.slice(0,-1)}if(this._hasPushState){this.history[P.replace?"replaceState":"pushState"]({},document.title,O)}else{if(this._wantsHashChange){this._updateHash(this.location,Q,P.replace);if(this.iframe&&(Q!==this.getFragment(this.getHash(this.iframe)))){if(!P.replace){this.iframe.document.open().close()}this._updateHash(this.iframe.location,Q,P.replace)}}else{return this.location.assign(O)}}if(P.trigger){return this.loadUrl(Q)}},_updateHash:function(O,Q,R){if(R){var P=O.href.replace(/(javascript:|#).*$/,"");O.replace(P+"#"+Q)}else{O.hash="#"+Q}}});B.history=new i;var m=function(O,Q){var P=this;var S;if(O&&N.has(O,"constructor")){S=O.constructor}else{S=function(){return P.apply(this,arguments)}}N.extend(S,P,Q);var R=function(){this.constructor=S};R.prototype=P.prototype;S.prototype=new R;if(O){N.extend(S.prototype,O)}S.__super__=P.prototype;return S};G.extend=c.extend=q.extend=I.extend=i.extend=m;var s=function(){throw new Error('A "url" property or function must be specified')};var J=function(Q,P){var O=P.error;P.error=function(R){if(O){O(Q,R,P)}Q.trigger("error",Q,R,P)}};return B}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/libs/backbone/1.1.2/backbone.brace-min.js' */
/*!
 *  RW.Backbone Brace - 2014-06-27
 *  Copyright 2014 Atlassian Software Systems Pty Ltd
 *  Licensed under the Apache License, Version 2.0
 */
if(typeof RWJS==="undefined"){var RWJS={}}(function(c,d){var b="Brace";var e=c[b];var a=function(){c[b]=e;return this};if(typeof define==="function"&&define.amd){define(["underscore","backbone.brace.js"],d)}else{if(typeof exports==="object"){module.exports=d(require("underscore"),require("backbone"))}else{var f=d(RWJS._,RWJS.Backbone);f.noConflict=a;c[b]=f;RWJS.Brace=f}}}(this,function(o,m){var k={};function f(r){if(o.isArray(r)){return o.reduce(r,function(s,t){s[t]=null;return s},{})}return r}function b(r,s){if(!r||s==null){return s}if(r===String&&o.isString(s)){return s}if(r===Number&&o.isNumber(s)){return s}if(r===Boolean&&o.isBoolean(s)){return s}if(typeof r==="string"||r instanceof String){if(typeof s!==""+r){throw"The typeof "+s+" is "+typeof s+" but expected it to be "+r}return s}if(o.isArray(r)||r===Array){if(!l(s)){throw"Array type expected, but nonnull, non-Array value provided."}return r===Array||!r[0]?s:o.map(s,o.bind(b,null,r[0]))}if(typeof r!=="function"){throw"Invalid expected type "+r+". Should be falsy, String, Array, Backbone.Collection constructor, or function."}if(s instanceof r){return s}if(h(r)){return new r(b([r.model],s))}return new r(s)}function h(s,r){return s&&(s.__super__ instanceof (r||m.Collection)||s.__super__===(r||m.Collection).prototype||s===(r||m.Collection))}function l(r){return o.has(r,"length")&&!(r instanceof String||o.has({string:1,"function":1},typeof r)||r instanceof m.Collection)}function n(t,s){var r={};o.each(t,function(v,u){if(!s[u]||p(v,s[u])){r[u]=v}else{if(!v||p(s[u],v)){return}else{throw u+" has conflicted type descriptors."}}});return r}function p(s,r){if(!r||r===s){return true}if(!s||typeof s==="string"){return false}if(s instanceof Array){return r===Array||(r instanceof Array&&p(s[0],r[0]))}if(typeof r!=="function"){return false}if(h(r)){return h(s,r)}return s.prototype instanceof r}function e(r){if(o.isObject(r)){return o.reduce(r,function(s,u,t){if(u&&o.isFunction(u.toJSON)){s[t]=u.toJSON()}else{if(o.isArray(u)){s[t]=o.map(u,function(v){if(v&&o.isFunction(v.toJSON)){return v.toJSON()}else{return v}})}}return s},r)}else{return r}}function a(s){return function r(){var t=s.call(this);return e(t)}}k.Mixins={createMethodName:function(r,s){return r+s.charAt(0).toUpperCase()+s.substr(1)},applyMixin:function(s,r){o.forEach(o.keys(r),function(A){var x=s.prototype;if("initialize"===A){var z=x.initialize;x.initialize=function(){if(z){z.apply(this,arguments)}r.initialize.apply(this,arguments)};return}if("validate"===A){var t=x.validate;x.validate=function(){if(t){var C=t.apply(this,arguments);if(C){return C}}return r.validate.apply(this,arguments)};return}if("defaults"===A){var w=x.defaults||(x.defaults={});var y=r[A];for(var v in y){if(w.hasOwnProperty(v)){throw"Mixin error: class already has default '"+v+"' defined"}w[v]=y[v]}return}if("namedAttributes"===A){var u=f(x.namedAttributes)||{};var B=f(r[A]);x.namedAttributes=o.extend(u,n(B,u));return}if("namedEvents"===A){if(!o.isArray(r[A])){throw"Expects events member on mixin to be an array"}if(!x.namedEvents){x.namedEvents=[]}x.namedEvents=o.uniq(x.namedEvents.concat(r[A]));return}if(x.hasOwnProperty(A)){throw"Mixin error: class already has property '"+A+"' defined"}x[A]=r[A]},this)}};k.AttributesMixinCreator={create:function(s,t){var r={};if(!s){s={}}if(!o.has(s,"id")){s.id=null}o.each(s,function(y,x){var z=k.Mixins.createMethodName("set",x);r[z]=function(B,A){return this.set(x,B,A)};var w=k.Mixins.createMethodName("get",x);r[w]=function(){return this.get(x)}});if(typeof t==="string"&&typeof s[t]!=="undefined"&&t!=="id"){s.id=s[t];var v=k.Mixins.createMethodName("get",t);var u=k.Mixins.createMethodName("set",t);r.getId=function(){return this[v]()};r.setId=function(x,w){return this[u](x,w)}}return r},ensureType:b};k.EventsMixinCreator={create:function(s){var r={};var t=function(v){var u=k.Mixins.createMethodName("on",v);r[u]=function(){return this.on.apply(this,[v].concat(o.toArray(arguments)))};var w=k.Mixins.createMethodName("trigger",v);r[w]=function(){return this.trigger.apply(this,[v].concat(o.toArray(arguments)))}};o.each(s,o.bind(t,this));return r}};function d(s){return function r(v,w){var x;var u=o.extend({},v);var t;if(v&&v.mixins){t=v.mixins;delete u.mixins}x=s.call(this,u,w);if(this.prototype.namedEvents){k.Mixins.applyMixin(x,{namedEvents:this.prototype.namedEvents})}if(this.prototype.namedAttributes){k.Mixins.applyMixin(x,{namedAttributes:this.prototype.namedAttributes})}if(t){o.each(v.mixins,function(y){k.Mixins.applyMixin(x,y)})}if(x.prototype.namedEvents){k.Mixins.applyMixin(x,k.EventsMixinCreator.create(x.prototype.namedEvents))}if(x.prototype.namedAttributes){x.prototype.namedAttributes=f(x.prototype.namedAttributes);k.Mixins.applyMixin(x,k.AttributesMixinCreator.create(x.prototype.namedAttributes,x.prototype.idAttribute))}if(x.prototype.toJSON){x.prototype.toJSON=a(x.prototype.toJSON)}x.extend=r;return x}}function g(v,t){var u=v.prototype;var r=t.prototype;var s=u.set;r.set=function(B,C,A){var z,y=this.namedAttributes;if(!y||B==null){return s.apply(this,arguments)}if(o.isObject(B)){z=o.clone(B);A=C}else{z={};z[B]=C}for(var x in z){if(!o.has(z,x)){continue}if(!o.has(y,x)){throw"Attribute '"+x+"' does not exist"}z[x]=b(y[x],z[x])}return s.call(this,z,A)};var w=u.get;r.get=function(x){if(this.namedAttributes&&!o.has(this.namedAttributes,x)){throw"Attribute '"+x+"' does not exist"}return w.apply(this,arguments)}}function i(v,s){var u=v.prototype;var r=s.prototype;var t=u.parse;r.parse=function(w,x){return o.pick(t(w,x),o.keys(this.namedAttributes))}}function c(r){var t=r.extend();var s=r.extend;t.extend=d(s);return t}function j(r){var s=c(r);g(r,s);i(r,s);return s}k.Model=j(m.Model);k.Collection=c(m.Collection);k.View=c(m.View);k.Router=c(m.Router);var q=function(){this.initialize.apply(this,arguments)};o.extend(q.prototype,m.Events,{initialize:function(){}});q.extend=m.Model.extend;k.Evented=c(q);return k}));
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/shared/shared-bundle.js' */
// Defined pre-defined globals for jsHint specific for this file
// On the format: /* globals AGlobal, AnotherGlobal, ... */

// Init the RWJS variable if it doesn't exists
if (typeof RWJS === 'undefined') {
  var RWJS = {};
}
if (typeof RWJS.Models === 'undefined') {
  RWJS.Models = {};
}
if (typeof RWJS.Models.Admin === 'undefined') {
  RWJS.Models.Admin = {};
}

(function($, Backbone, Brace, _) {
  'use strict';

  RWJS.Models.Admin.Messages = Backbone.Collection.extend({

    baseUrl: 'string',
    namedAttributes: {
      model: RWJS.Models.Admin.Message
    },

    initialize: function(models, options) {
      if (options && options.baseUrl) {
        this.baseUrl = options.baseUrl;
      }
      return this;
    },

    /**
     * Parse is called because we want to pass baseUrl to the models
     *
     * @param data
     * @returns {Array}
     */
    parse: function(data) {
      var model = this;
      var array = [];
      _.each(data, function(message) {
        array.push(new RWJS.Models.Admin.Message(message, {baseUrl: model.baseUrl}));
      });

      return array;
    }

  });

  /**
   * AdminMessage list model.
   *
   * Standard fetch returns the unread messages.
   *
   * Expects a base url (baseUrl) as argument.
   *
   */
  RWJS.Models.Admin.MessageList = Brace.Model.extend({

    baseUrl: undefined,
    namedAttributes : {
      messages : RWJS.Models.Admin.Messages,
      hasMore : 'boolean'
    },

    initialize : function(models, options) {
      if (options && options.baseUrl) {
        this.baseUrl = options.baseUrl;
      }
      if(!models)
      {
        this.setMessages(new RWJS.Models.Admin.Messages([], {baseUrl: this.baseUrl}))
      }
    },

    /**
     * Parsealled because we want to pass baseUrl to the collection
     *
     * @param data
     */
    parse: function (data) {
      // Parse is set to true in order to force Backbone to call our own parse function
      this.setMessages(new RWJS.Models.Admin.Messages(data.messages, {baseUrl: this.baseUrl, parse: true}));
      this.setHasMore(data.hasMore);
    },

    url : function()
    {
      return this.baseUrl;
    },

    fetchUnreadMessages: function(data, success, error) {
      if (!data) {
        data = {};
      }
      this.fetch({

        data: data,
        success: success,
        error: error
      });
    },

    fetchReadMessages: function(data, success, error, update) {
      if (!data) {
        data = {};
      }
      var model = this;
      this.fetch({

        update: update,
        url: model.baseUrl + '/read',
        data: data,
        success: success,
        error: error
      });
    }

  });

  RWJS.Models.Admin.Message = Brace.Model.extend({
    baseUrl: undefined,
    namedAttributes : {
      id : "string",
      date : "number",
      content : "string",
      link : "string",
      type : "string",
      title : "string",
      visible : "boolean"
    },

    initialize: function(models, options) {
      if (options && options.baseUrl) {
        this.baseUrl = options.baseUrl;
      }
      return this;
    },

    url : function()
    {
      return this.baseUrl + "/" + this.get("id");
    }

  });

  RWJS.Models.Admin.NotificationCount = Brace.Model.extend({
    baseUrl: undefined,
    namedAttributes : {
      count : "number"
    },

    initialize: function(model, args) {
      if (args && args.baseUrl) {
        this.baseUrl = args.baseUrl;
      }
      this.setCount(model);
    },

    url : function()
    {
      return this.baseUrl + '/count';
    }
  });

})(RWJS.$, RWJS.Backbone, RWJS.Brace, RWJS._);
// Defined pre-defined globals for jsHint specific for this file
// On the format: /* globals AGlobal, AnotherGlobal, ... */

// Init the RWJS variable if it doesn't exists
if (typeof RWJS === 'undefined') {
  RWJS = {};
}
if (typeof RWJS.Views === 'undefined') {
  RWJS.Views = {};
}
if (typeof RWJS.Views.Admin === 'undefined') {
  RWJS.Views.Admin = {};
}

(function($, Backbone, Brace, _) {
  'use strict';

  RWJS.Views.Admin.MessagesView = Backbone.View.extend({

    ACTIVE_TAB_UNDONE: 'undone',
    ACTIVE_TAB_DONE: 'completed',
    LOAD_MORE_INCREMENT: 10,
    start: 0,
    max: 10,
    activeTab: undefined,
    onUpdate: undefined,

    events: {
      'click .markRead': 'markAsRead',
      'click .rw_mark_all_button': 'markAllAsRead',
      'click .menu-item': 'redraw',
      'click #rw_load_more_messages_link': 'loadMore'
    },

    initialize: function(args) {
      if (args) {
        if (args.activeTab) {
          this.activeTab = args.activeTab;
        }
        else {
          this.activeTab = this.ACTIVE_TAB_UNDONE;
        }
        if (args.onUpdate) {
          this.onUpdate = args.onUpdate;
        }
        else {
          this.onUpdate = function() {
          }
        }
      }
      var $template = $(RWJS.Templates.AdminMessage.messageList({
        messageList: this.model.get("messages").toJSON(),
        activeTab: this.activeTab,
        hasMore: this.model.get("hasMore")
      }));
      this.setElement($template);
    },

    render: function() {
      var $template = RWJS.Templates.AdminMessage.messageList({
        messageList: this.model.get("messages").toJSON(),
        activeTab: this.activeTab,
        hasMore: this.model.get("hasMore")
      });

      this.$el.html($template);
      $('.rw_date', this.$el).each(function() {
        $(this).html(RWJS.getTimeString($(this).data('date')));
      });

      return this.$el;
    },

    /**
     * Fetches the model and redraws the active view
     *
     * @param e
     */
    redraw: function(e) {
      var view = this;
      this.max = this.LOAD_MORE_INCREMENT;
      view.activeTab = $(e.currentTarget).attr("data-key");
      var data = {'start-index': view.start, 'max-results': view.max};
      var success = function() {
        RWJS.hideLoader();
        view.render();
      };
      var error = function() {
        RWJS.hideLoader();
        console.error('Failed to fetch content');
      };
      RWJS.showLoader();
      if (this.activeTab === this.ACTIVE_TAB_DONE) {
        this.model.fetchReadMessages(data, success, error, false);
      }
      else {
        this.model.fetchUnreadMessages({}, success, error);
      }
    },

    /**
     * Marks the clicked message as read
     *
     * @param e
     */
    markAsRead: function(e) {
      var view = this;
      var isChecked = !$(e.currentTarget).attr("checked");
      var messageKey = $(e.currentTarget).closest("li").attr("data-key");
      var message = this.model.get("messages").get(messageKey);
      message.setVisible(isChecked);
      message.save({}, {
        success: function() {
          // Visually mark it as read and remove it
          var $item = $(e.currentTarget).closest('li');
          $item.addClass('rw_read').delay(1000).fadeOut(function() {
            $item.remove();
          });
          view.onUpdate();
        }
      });
    },

    /**
     * Marks all unread messages as read. Calls onUpdate on success.
     */
    markAllAsRead: function() {
      var view = this;
      this.model.get("messages").each(function(model) {
        model.setVisible(false);
      });
      _.each($(".markRead", this.$el), function(checkbox) {
        $(checkbox).attr("checked", "checked");
        // Visually mark it as read and remove it
        var $item = $(checkbox).closest('li');
        $item.addClass('rw_read').delay(1000).fadeOut(function() {
          $item.remove();
        });
      });

      this.model.save({}, {
        type: 'PUT',
        success: _.bind(function() {
          view.onUpdate();
        }, this),
        error: function() {
          console.error('Could not move message');
        }
      });
    },

    /**
     * Loads more read messages. The unread tab has no max limit on how many messages can be shown, which means that
     * this function is hard coded for read messages
     *
     * @param event
     */
    loadMore: function(event) {
      var view = this;
      this.$(".rw_load_more_text", $(event.currentTarget)).hide();
      this.$('#rw_loader_space').append($(RWJS.Templates.Utils.loader({size: 'medium'})));
      this.max += this.LOAD_MORE_INCREMENT;
      var messages = this.model.get("messages");
      var data = {'start-index': view.start, 'max-results': view.max};
      var success = _.bind(function() {
        this.render();
      }, this);

      this.model.fetchReadMessages(data, success, function() {
        console.error('Could not load more');
      }, true);
    },

    /**
     * Test function that adds a message
     */
    addMessage: function() {
      var message = new RWJS.Models.Admin.Message({
        id: 'testId' + Math.random() * (Number.MAX_VALUE - 1) + 1,
        content: 'This is an important message for you all', link: '', type: 'info', title: 'Important', visible: false
      });
      message.save({}, {
        type: 'POST',
        url: this.model.baseUrl,
        error: _.bind(function() {
          console.error('lots of errors');
        }, this)

      })

    }

  });

})(RWJS.$, RWJS.Backbone, RWJS.Brace, RWJS._);
if (typeof RWJS === 'undefined') {
  var RWJS = {};
}

(function($) {
  'use strict';

  AJS.toInit(function() {
    if ($('#rw_admin_main_menu')) {
      initAdminMenu();
    }
  });

  function initAdminMenu() {
    var $adminMenu = $('#rw_admin_primary_menu');
    var $adminContent = $('#admin-content');
    var $adminBackButton = $('#rw_admin_back_button');

    // Move menu and breadcrumbs to the admin content
    $adminContent.prepend($adminMenu);

    // Get the width of the admin menu
    var adminMenuWidth = 0;

    $.each($('li', $adminMenu), function() {
      adminMenuWidth += $(this).width();
    });

    calculateAdminMenuMode(adminMenuWidth, $adminMenu);
    // Init resize event
    $(window).resize(function() {
      calculateAdminMenuMode(adminMenuWidth, $adminMenu);
    });

    // Move the admin back button
    $('#admin-heading-container .admin-heading').prepend($adminBackButton);
    $adminBackButton.removeClass('rw_hidden');


  }

  function calculateAdminMenuMode(adminMenuWidth, $adminMenu) {
    if (adminMenuWidth > $adminMenu.width() - 40) {
      $('ul', $adminMenu).addClass('rw_semi_collapsed');
    } else {
      $('ul', $adminMenu).removeClass('rw_semi_collapsed');
    }
  }

})(RWJS.$);

if (typeof RWJS === 'undefined') {
  var RWJS = {};
}

(function($) {
  'use strict';

  RWJS.bindAdminSection = function () {
    $('.rw_admin_section.rw_collapsible > .rw_title').not('[data-collapsed-bound="true"]').click(function (e) {
      $(e.currentTarget).parent().toggleClass('rw_collapsed');
    }).attr('data-collapsed-bound',true);
  };

})(RWJS.$);

if (typeof RWJS === 'undefined') {
  var RWJS = {};
}

(function($, _, Backbone, Brace) {
  'use strict';

  var viewStack = [];

  /**
   * Handles close on esc functionality on inline-dialogs, the todo-details view, the mainView dialog and other dialogs.
   * This Handler has a stack of views (mostly inline and backbone views, but it can handle almost anything, more
   * about that below).
   *
   * When esc is pressed the top element of the stack is hidden and removed from the stack (although this only happens
   * in the ToDos project). All inline dialogs are added to the stack when they are opened and removed automatically
   * when closed by clicking. If you want to add viewStack functionality to your own custom UI elements you have
   * to push to the stack after the element has been opened. The elements also have to implement a close method that
   * will be called every time esc is pressed (just programmatically hide the element in close). Additionally the
   * element has to have a DOM representation; either it's a DOM object, or you modify pushWithListener() with your own
   * implementation.
   *
   * At the moment we fully support DOM objects (with a close method implementation), inline views and Backbone views
   * since they are the only types that are automatically removed from the stack when they are removed from the DOM.
   * The currently supported DOM elements throw 'DOMNodeRemovedFromDocument' and 'remove' events when they are removed.
   * Just update the pushWithListener() method with new events if necessary.
   *
   * Although the views are removed from the stack automatically it's still possible to use this DialogHandler if you
   * for instance only want to hide your elements in your application (just as the sidebar details view in Todos).
   * Just call removeView() when the view is hidden and you should be fine. Note that this is something we want to avoid
   * if possible.
   *
   * @type {{pushViewToEsc: Function, peekViewFromEsc: Function, removeViewFromStack: Function, addInlineCloseListener:
   *   Function}}
   */
  RWJS.DialogHandler = {

    /**
     * Pushes the view to the stack.
     * @param view - Either an inline view, backbone view or a DOM object
     * @param exclusivePush boolean - if specified, only pushes the view if it is not already present in the viewStack.
     */
    pushView: function(view, exclusivePush) {
      if (exclusivePush) {
        var index = _.indexOf(viewStack, view);
        if (index <= -1) {
          this.addRemoveListener(view);
          viewStack.push(view);
        }
      } else {
        this.addRemoveListener(view);
        viewStack.push(view);
      }
      // Uncomment to print debug log
      // this.logStack('[added]');
    },

    /**
     * Adds a removal listener to the input view. The listener receives removal events and removes the views from
     * the viewStack when they are removed from the DOM.
     * @param view - Either an inline view, backbone view or a DOM object
     */
    addRemoveListener: function(view) {
      // inline dialog
      if(typeof view.getDomRepresentation === 'function') {
        view.getDomRepresentation().on("remove", function () {
          RWJS.DialogHandler.removeView(view);
        });
        // Backbone view!
      } else if (view.el) {
        $(view.el).on('DOMNodeRemovedFromDocument', function () {
          RWJS.DialogHandler.removeView(view);
        });
        // The rest
      } else {
        view.on('DOMNodeRemovedFromDocument', function () {
          RWJS.DialogHandler.removeView(view);
        });
        view.on('remove', function () {
          RWJS.DialogHandler.removeView(view);
        });
      }
    },

    /**
     * Look at the object at the top of the stack.
     * @returns {*}
     */
    peekView: function() {
      return _.last(viewStack);
    },

    /**
     * Removes the specified view from the stack.
     * @param view
     */
    removeView: function(view) {
      var index = _.indexOf(viewStack, view);
      if (index > -1) {
        viewStack.splice(index, 1);
      }
      // Uncomment to print debug log
      // this.logStack('[removed]');
    },

    /**
     * The stack content is deleted
     */
    clearStack: function() {
      viewStack = [];
    },

    /**
     * Outputs the stack to the console. Used for debugging.
     */
    logStack: function(message) {
      var i = 1;
      var views = '';
      _.each(viewStack, function(o) {
        if(o.cid) {
          views += i + ': ' + o.cid + ', ';
        } else if (typeof o.getId === 'function') {
          views += i + ': ' + o.getId() + ', ';
        }  else if (o.id) {
          views += i + ': ' + o.getId() + ', ';
        } else {
          views += i + ': ' + 'undefinedView' + ', ';
        }
        i++;
      });
      if(message) {
        console.debug(message, views);
      } else {
        console.debug(views);
      }
    }
  };
})

(AJS.$, RWJS._, RWJS.Backbone, RWJS.Brace);
// Defined pre-defined globals for jsHint specific for this file
// On the format: /* globals AGlobal, AnotherGlobal, ... */

// Init the RW variable if it doesn't exists
if (typeof RWJS === 'undefined') {
  var RWJS = {};
}
if (typeof RWJS.Feedback === 'undefined') {
  RWJS.Feedback = {};
}
if (typeof RWJS.Feedback.Product === 'undefined') {
  /**
   * Defined products with respective JIRA ID. These IDs are found from the issue field 'RefinedWiki Product'
   *
   * Examples:
   *
   * <b>RWJS.Feedback.Product.THEME_CONF</b>
   * <b>RWJS.Feedback.Product.TODO_JIRA</b>
   */
  RWJS.Feedback.Product = {};
}
if (typeof RWJS.Feedback.Component === 'undefined') {
  /**
   * Defined Components. These need to be pre-defined in the JIRA Feedback project and then added here.
   * The list of components can be found here:
   * http://issues.refinedwiki.com/plugins/servlet/project-config/FR/components
   * Examples:
   *
   * <b>RWJS.Feedback.Component.themeEditor</b>
   * <b>RWJS.Feedback.Component.organizer</b>
   */
  RWJS.Feedback.Component = {};
}

(function($, Backbone, Brace, _) {
  'use strict';

  // Defined products with respective JIRA id. These IDs are found from the issue field 'RefinedWiki Product'
  RWJS.Feedback.Product.THEME_CONF = '10170';
  RWJS.Feedback.Product.MOBILE_CONF = '10171';
  RWJS.Feedback.Product.TODO_JIRA = '10270';
  RWJS.Feedback.Product.UI_TOOL = '10173';
  RWJS.Feedback.Product.NONE = '-1';

  // Defined Components. These need to be pre-defined in the JIRA Feedback project and then added here.
  // The list of componenets is found here: http://issues.refinedwiki.com/plugins/servlet/project-config/FR/components
  // General
  RWJS.Feedback.Component.beta = '15154';
  RWJS.Feedback.Component.themeEditor = '15150';
  RWJS.Feedback.Component.config = '15152';
  // RefinedTheme
  RWJS.Feedback.Component.organizer = '15151';
  RWJS.Feedback.Component.advancedEditor = '15153';


  /**
   * Will create a button within the supplied wrapper - or if no wrapper is supplied - will look for the wrapper with
   * id 'rw_feedback_wrapper'. If you already have a custom element that you want to function as a feedback-action,
   * call {@link RWJS.initFeedbackOnElement}
   * @param $feedbackWrapper
   */
  RWJS.createFeedbackButton = function($feedbackWrapper, templateData) {
    if (!$feedbackWrapper) {
      $feedbackWrapper = $('#rw_feedback_wrapper');
    }
    if ($feedbackWrapper.length > 0 && !RWJS.feedbackInitialized) {

      // Check if we should create button or use the current element as is
      if ($feedbackWrapper.data('initOnElement')) {
        RWJS.initFeedbackOnElement($feedbackWrapper);
        return;
      }

      var processedComponents = getProcessedComponents($feedbackWrapper);
      var product = getProduct($feedbackWrapper);

      var view = new RWJS.Views.FeedbackButtonView({
        el: $feedbackWrapper,
        product: product,
        components: processedComponents,
        templateData: templateData
      });
      view.render();
      RWJS.feedbackInitialized = true;
    }
  };

  /**
   * Initializes feedback, using the supplied element as is. Populate data-components with commaseperated list of
   * components if needed. See {@link RWJS.Feedback.Component} for what's available.
   * @param $el
   */
  RWJS.initFeedbackOnElement = function($el) {
    if (!$el) {
      console.error('Cannot call RWJS.initFeedbackOnElement without element parameter!');
    }
    if ($el.length > 0 && !RWJS.feedbackInitialized) {
      var processedComponents = getProcessedComponents($el);
      var product = getProduct($el);

      var view = new RWJS.Views.FeedbackButtonView({
        el: $el,
        product: product,
        components: processedComponents
      });
      view.render($el);
      RWJS.feedbackInitialized = true;
    }
  };

  function getProduct($feedbackWrapper) {
    var productData = $feedbackWrapper.data('product');
    return RWJS.Feedback.Product[productData];
  }

  function getProcessedComponents($feedbackWrapper) {
    var componenets = $feedbackWrapper.data('components');
    var processedComponents = [];
    if (componenets) {
      var componentArray = componenets.split(',');
      for (var i = 0; i < componentArray.length; i++) {
        processedComponents.push(RWJS.Feedback.Component[componentArray[i]]);
      }
    }
    return processedComponents;
  }

})(RWJS.$, RWJS.Backbone, RWJS.Brace, RWJS._);
// Defined pre-defined globals for jsHint specific for this file
// On the format: /* globals AGlobal, AnotherGlobal, ... */

// Init the RW variable if it doesn't exists
if (typeof RW === 'undefined') {
  var RW = {};
}

(function($, Backbone, Brace, _) {
  'use strict';

  /**
   * Creates a Feedback view which upon render will produce a 'Give Feedback' button. The button will in turn open a
   * dialog to fill in a feedback form, which will be populated as a feedback-ticket on issues.refinedwiki.com.
   *
   * The ticket will contain info on the url from where the feedback was made, but to populate further issue-fields you
   * can provide the following params:
   *
   * <b>product</b> - The product this feedback regards. Defined in {@link RWJS.Feedback.Product}
   * <b>components</b> - A single component ID as string - or if several componenets are needed - an array of string
   * IDs, e.g.
   *
   * [RWJS.Feedback.Component.THEME_EDITOR, RWJS.Feedback.Component.ORGANIZER]
   *
   * These must exist in the JIRA project!
   * {@link RWJS.Feedback.Component}
   */
  RWJS.Views.FeedbackButtonView = Backbone.View.extend({
    product: undefined,
    components: undefined,
    templateData: undefined,

    initialize: function(args) {
      if (args && args.product) {
        this.product = args.product;
      }
      else {
        this.product = RWJS.Feedback.Product.NONE;
      }
      if (args && args.components) {
        this.components = args.components;
      }
      if(args && args.templateData) {
        this.templateData = args.templateData;
      }
    },

    render: function($suppliedTemplate) {
      // Fetch issue collector
      $.ajax({
        crossDomain: true,
        url: 'http://issues.refinedwiki.com/s/c15906b74bf36e4d5cde1dbdb4867961-T/en_US-ozy5k4/64024/51/1.4.26/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?locale=en-US&collectorId=38dc411c',
        type: 'get',
        cache: true,
        dataType: 'script'
      });
      if(!$suppliedTemplate) {
        var $template = $(RWJS.Templates.Feedback.feedbackButton(this.templateData));
        this.$el.html($template);
      }
      this.initIssueCollector($suppliedTemplate);
      return this;
    },


    initIssueCollector: function($suppliedTemplate) {
      window.ATL_JQ_PAGE_PROPS = $.extend(window.ATL_JQ_PAGE_PROPS, {
        // The triggerFunction will be invoked by the Issue Collector after the $(document).ready() phase.
        triggerFunction: function(showCollectorDialog) {
          if(!$suppliedTemplate) {
            $suppliedTemplate = $('#rw_feedback_button');
          }
          $suppliedTemplate.on('click', function(e) {
            e.preventDefault();
            showCollectorDialog();
          });
        },
        // Custom field values
        fieldValues: {
          // RefinedWiki Product
          'customfield_10710': this.product,
          // Components
          'components': this.components
        }

      });
    }

  });

})(RWJS.$, RWJS.Backbone, RWJS.Brace, RWJS._);
// init the RW variable if it not exists
// Whe use the origianlTheme variable to store all
// parameters and functions which is needed globaly
if (typeof RWJS === 'undefined') {
  var RWJS = {};
}

/**
 * Inline dialog functionality
 */
(function($, _, Backbone, Brace) {

  'use strict';

  RWJS.InlineDialog = {};

  /**
   * Refined Inline Dialogs. There are two types of dialogs child and parent InlineDialogs.
   *
   * Parent dialogs can have child dialogs opened from its content.(Use isParentDialog:true)
   *
   * Child dialogs can't open other dialogs from it's content. (Default behaviour)
   *
   * There can only be one child and one parent dialog at the time.
   *
   * @param $button - the button that triggers the dialog, the button is only used to position the dialog
   * @param id - the id of the dialog
   * @param title - the title of the dialog (optional)
   * @param theme - default(white), gray or black
   * @param width - default 300 (px)
   * @param isParentDialog - true, if dialogs should be able to be opened from this dialog
   * @param cssClass - if you want to add an extra css class
   * @param persistsInDom - true, if you want the dialog to remain in the DOM
   * @param $content - Content
   * @param $toolbarContent - Toolbar content
   * @param arrowPosition - the position the arrow will be positioned. Vertical (v) (Default), or Horizontal(h)
   */
  RWJS.InlineDialog = _.bind(function(args) {

    // The inline dialog
    var inlineDialog = this;

    // Vars
    var DIALOG_DISTANCE = 20;
    var MAX_HEIGHT = 600;
    var MIN_DISTANCE_TO_WINDOW = 250; // The minimum required distance to the edge of the window.

    var $inlineDialog; // The Dom representation

    var $button = args.$button;
    $button.addClass('rw_inline_dialog_button'); // Mark the button as an inline dialog button

    var id = args.id;
    var theme = 'default';

    var isParentDialog = false;
    var hasToolbar = false;
    var open = false;

    if (args.theme) {
      theme = args.theme;
    }

    var cssClass = args.cssClass;

    if (args.isParentDialog) {
      isParentDialog = true;
    }

    /**
     * If a dialog is already opened it will be closed and return false. If it's not opened it will be opened and
     * return true.
     *
     *
     * @param $content
     * @param $toolbarContent
     * @returns {boolean}
     */
    this.toggle = function($content, $toolbarContent) {

      // Toggling behavior: Close dialog if it's already opened.
      if (open) {
        inlineDialog.close();
        return false;
      }

      inlineDialog.open($content, $toolbarContent);
      return true;
    };

    this.isOpen = function() {
      return open;
    };


    this.open = function($content, $toolbarContent) {
      // Set this dialog as the active dialog
      if (isParentDialog) {

        // Make sure all previous dialogs are closed
        RWJS.closeChildInlineDialog();
        RWJS.closeParentInlineDialog();

        RWJS.activeParentInlineDialog = inlineDialog;
      } else {

        RWJS.closeChildInlineDialog();

        // If this dialog have no parent dialog, then we can close any other parent dialogs
        if (!$button.closest('.rw_inline_dialog').length) {
          RWJS.closeParentInlineDialog();
        }

        RWJS.activeChildInlineDialog = inlineDialog;
      }

      // Get the dialog from the soy file
      if ($inlineDialog === undefined) {
        $inlineDialog = $(RWJS.Templates.Utils.inlineDialog({
          id: id, toolbarContent: $toolbarContent, theme: theme, cssClass: cssClass
        }));

        // Set title
        if (args.title) {
          $('.rw_title', $inlineDialog).append(args.title);
          $inlineDialog.addClass('rw_has_title');
        }

        // Set width
        if (args.width) {
          $inlineDialog.width(args.width);
        }

        // If there is any arg.$content that should be inititated.
        if (args.$content) {
          $('.rw_body', $inlineDialog).append(args.$content);
        }

        // If there is any arg.$toolbarContent that should be inititated.
        if (args.$toolbarContent) {
          $('.rw_toolbar', $inlineDialog).append(args.$toolbarContent);
        }

      }
      else {
        $inlineDialog.show();
      }

      // inject content
      if ($content) {
        $('.rw_body', $inlineDialog).append($content);
      }

      // inject toolbar
      if ($toolbarContent) {
        $('.rw_toolbar', $inlineDialog).append($toolbarContent);
        $inlineDialog.addClass('rw_has_toolbar');
        hasToolbar = true;
      }

      // Add it to the dom
      $('body').append($inlineDialog);
      // Add active button
      $button.addClass('rw_active');

      // Position the DD
      inlineDialog.positionDD();

      // Bind propagation event
      $inlineDialog.click(function(e) {
        e.stopPropagation();
      });

      // Bind close event, FIX: a timeout needs to be added to prevent the dialog from closing from it's own event
      setTimeout(function() {
        $('body').bind('click', inlineDialog.close);
      }, 200);

      // When isParentDialog, we need to make sure that dialogs fired by this
      // dialog are closed when clicking inside.
      if (isParentDialog) {
        $inlineDialog.click(function(e) {

          // Check that click not comes from dialog buttons
          if (!$(e.target).hasClass('rw_inline_dialog_button')) {
            RWJS.closeChildInlineDialog();
          }
        });
      }
      RWJS.DialogHandler.pushView(inlineDialog);

      open = true;
    };

    this.getDomRepresentation = function() {
      return $inlineDialog;
    };

    /**
     * Set the given content to the dialog if it's visible
     * @param $content
     */
    this.setContent = function($content) {
      if ($inlineDialog !== undefined) {
        $('.rw_body', $inlineDialog).html($content);
      }
    }

    /**
     * Set the given $button as the new dialog button
     * @param $button
     */
    this.setButton = function($newButton) {
      $button = $newButton;
      $button.addClass('rw_inline_dialog_button');

      if (open) {
        $button.addClass('rw_active');
      }
    }

    /**
     * Close the dialog.
     *
     * @returns false - used to stop propagation
     */
    this.close = function() {

      if ($inlineDialog !== undefined) {

        // Trigger close event
        $inlineDialog.trigger('close');

        // Remove dialog
        if (args.persistsInDom) {
          // Hide the dialog
          $inlineDialog.hide();
        }
        else {
          // Remove the dialog from the dom
          $inlineDialog.remove();
          $inlineDialog = undefined;
        }
      }

      // Add active button
      $button.removeClass('rw_active');

      $('body').unbind('click', inlineDialog.close);

      open = false;

      // If this is a parent dialog, make sure that child dialogs are closed
      if (isParentDialog)
      {
        RWJS.closeChildInlineDialog();
      }

      //return false;
    };

    /**
     * Position the DD to align with the button
     */
    this.positionDD = function() {
      // Adjust it
      var buttonOffset = $button.offset();
      // Position the dialog;
      $inlineDialog.css('top', buttonOffset.top + $button.outerHeight() + DIALOG_DISTANCE);
      $inlineDialog.css('left', (buttonOffset.left + ($button.outerWidth() / 2)) - $inlineDialog.outerWidth() / 2);

      //
      // Check if DD is visible
      // If not position it
      //

      var windowScrollPosition = $(window).scrollTop();
      var windowHeight = $(window).height();
      var windowWidth = $(window).width()

      var dialogPositionTop = false; // true if the dialog is positioned above the button

      // Horizontal check
      var dialogOffset = $inlineDialog.offset();
      if (dialogOffset.left < 0) {
        $inlineDialog.css('left',
          buttonOffset.left + $button.outerWidth() / 2 - (DIALOG_DISTANCE * 1.5));
        $('.rw_arrow', $inlineDialog).addClass('rw_arrow_left');
      }
      else if (dialogOffset.left + $inlineDialog.width() > windowWidth) {
        $inlineDialog.css('left',
          buttonOffset.left + $button.outerWidth() / 2 + (DIALOG_DISTANCE * 1.5) - $inlineDialog.outerWidth());
        $('.rw_arrow', $inlineDialog).addClass('rw_arrow_right');
      }

      // Calculate the middle position of the button
      var buttonPosition = $button.offset().top + ($button.outerHeight() / 2);

      // Vertical check

      // If statement to determent if the dialog should be positioned above the button
      // if ((THE_DIALOG_IS_FITTED_INTO_THE_WINDOW and THE_DIALOG_BUTTON_IS_LOCATED_ON_THE_LOWER_PART_OF_THE_SCREEN) or
      // THE_DIALOG_BUTTON_IS_TOO_CLOSE_TO_THE_BOTTOM_OF_THE_WINDOW)
      if (((dialogOffset.top + $inlineDialog.outerHeight() > (windowScrollPosition + windowHeight)) &&
        (buttonPosition - windowScrollPosition) > (windowHeight / 2)) ||
        (windowScrollPosition + windowHeight) - buttonPosition < MIN_DISTANCE_TO_WINDOW) {
        $inlineDialog.css('top', 'auto');
        $inlineDialog.css('bottom', $(window).height() - (buttonOffset.top - DIALOG_DISTANCE));
        $('.rw_arrow', $inlineDialog).addClass('rw_arrow_bottom');
        dialogPositionTop = true;
      }

      // Set max height to the content section to make sure all content is visible
      var $contentSection = $('.rw_body', $inlineDialog);
      var $toolbarSection = $('.rw_toolbar', $inlineDialog);
      var contentOffset = $contentSection.offset();
      var dialogHeight = contentOffset.top;
      var availableMaxHeight = 0;
      if (dialogPositionTop) {
        availableMaxHeight = (dialogHeight + $contentSection.height()) - windowScrollPosition - DIALOG_DISTANCE;
      }
      else {
        // Add toolbar height if there is a toolbar.
        if (hasToolbar) {
          dialogHeight += $toolbarSection.outerHeight();
        }
        availableMaxHeight = (windowScrollPosition + windowHeight) - dialogHeight - DIALOG_DISTANCE;
      }

      if (availableMaxHeight < MAX_HEIGHT) {
        $contentSection.css('max-height', availableMaxHeight);
      } else {
        $contentSection.css('max-height', MAX_HEIGHT);
      }

      // Vertical or Horizontal position
      if (args.arrowPosition === 'h') {

        if (dialogPositionTop) {

        }
        else {
          $inlineDialog.css('top', buttonOffset.top + (($button.outerHeight() / 2) - 30));
          $inlineDialog.css('left', (buttonOffset.left + $button.outerWidth() + DIALOG_DISTANCE));
        }


        $('.rw_arrow', $inlineDialog).addClass('rw_arrow_horizontal');
      }


    };

    this.getId = function() {
      return id;
    };

    this.showLoader = function() {
      $inlineDialog.addClass('rw_loading');
    };

    this.hideLoader = function() {
      $inlineDialog.removeClass('rw_loading');
    };

    return this;

  }, RWJS.InlineDialog);

  /**
   * Close the currently active dialogs
   */
  RWJS.closeInlineDialog = function() {
    RWJS.closeChildInlineDialog();
    RWJS.closeParentInlineDialog();
  };

  RWJS.closeChildInlineDialog = function() {
    if (RWJS.activeChildInlineDialog) {
      RWJS.activeChildInlineDialog.close();
    }
  };

  RWJS.closeParentInlineDialog = function() {
    if (RWJS.activeParentInlineDialog) {
      RWJS.activeParentInlineDialog.close();
    }
  };

})
(RWJS.jQuery, RWJS._, RWJS.Backbone, RWJS.Brace);
(function($, Backbone, Brace, _) {


  RWJS.storage = function(prefix) {

    var PREFIX = prefix;

    var supportLocalStorage = false;

    try {
      supportLocalStorage = 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
      console.log("RW: Browser doesn't support local storage");
    }

    this.supportStorage = function() {
      return supportLocalStorage;
    };

    // Return the storage used.
    this.getStorage = function() {
      return localStorage;
    };

    this.getPrefix = function() {
      return PREFIX;
    };

    this.getValue = function(key) {
      if (!supportLocalStorage) {
        return;
      }

      return localStorage[PREFIX + key];
    };

    this.getValueAsInt = function(key) {
      if (!supportLocalStorage) {
        return;
      }

      return parseInt(this.getValue(key), 10);
    };

    this.getValueAsBoolean = function(key) {
      var value = this.getValue(key);

      if (value == "false") {
        return false;
      }
      if (value == "true") {
        return true;
      }

      return !!value;
    };

    this.setValue = function(key, value) {
      if (!supportLocalStorage) {
        return;
      }

      localStorage[PREFIX + key] = value;
    };

    this.removeValueWithExactKey = function(key) {
      if (!supportLocalStorage) {
        return;
      }
      localStorage.removeItem(key);
    };

    return this;
  }

})(RWJS.$, RWJS.Backbone, RWJS.Brace, RWJS._);// init the RW variable if it not exists
// Whe use the origianlTheme variable to store all
// parameters and functions which is needed globaly
if (typeof RWJS === 'undefined') {
  var RWJS = {};
}

(function($, _, Backbone, Brace) {
  'use strict';

  /**
   * Provides an automated way of dealing with reactive input forms. Automatically updates the model as changes are
   * made in input fields and automatically updates input fields as the model is changed
   * For a usage example, have a look at the Wiki: https://wiki.refinedwiki.com/display/MY/Reactive+Backbone+View
   */
  RWJS.ReactiveView = Backbone.View.extend({

    //Any subsclasses should also have an "inputs" hash mapping jQuery selectors to model attributes.

    /**
     * Maps model attributes to input element's jQuery selectors
     */
    attributeToElement: {},

    /**
     * Changes the behaviour related to saving, if this is true then save will be called on the model when a change is
     * made
     */
    saveOnChange: false,

    /**
     * Changes whether or not forms should automatically be filled out
     */
    autoFill: false,

    /**
     * Override of Backbone's delegateEvents
     * @param events
     * @returns {RWJS.ReactiveView}
     */
    delegateEvents: function(events) {
      // Call superclass
      Backbone.View.prototype.delegateEvents.call(this, events);
      var inputs = _.result(this, 'inputs');
      if (!inputs) {
        console.warn('Used a reactive view with an empty inputs hash, this is probably a mistake');
        return this;
      }
      this.delegateInputEvents(inputs);
      return this;
    },

    /**
     * Delegates events for inputs as well as the model's changes
     * @param inputs
     */
    delegateInputEvents: function(inputs) {
      for (var key in inputs) {
        if (!inputs.hasOwnProperty(key)) {
          continue;
        }
        this.attributeToElement[inputs[key]] = key;
        this.$el.on('change.delegateEvents' + this.cid, key, _.bind(this.handleInputChange, this));
        this.model.on('change:' + inputs[key], this.handleModelChange, this);
      }
      _.bindAll(this, 'render', 'afterRender');
      var _this = this;
      this.render = _.wrap(this.render, function(render) {
        var result = render();
        _this.afterRender();
        return result;
      });
    },

    afterRender: function() {
      if (this.autoFill) {
        for (var attribute in this.attributeToElement) {
          if (this.attributeToElement.hasOwnProperty(attribute) && this.model.get(attribute)) {
            this.$el.find(this.attributeToElement[attribute]).attr('value', this.model.get(attribute));
          }
        }
      }
    },

    /**
     * Handles changes in the specified input. Updates the linked field in the model
     * @param e
     */
    handleInputChange: function(e) {
      var $target = $(e.currentTarget);
      var id = '#' + $target.attr('id');
      if ($target && this.inputs.hasOwnProperty(id)) {
        var modelProperty = this.inputs[id];
        var val = $target.val();
        if ($target.attr('type') === 'checkbox') {
          val = $target.is(':checked');
        }
        this.model.set(modelProperty, val);
        if (this.saveOnChange) {
          this.model.save({}, {
            success: function() {
            },
            error: function(e) {
              console.error(e);
            }
          });
        }
      }
    },

    /**
     * Handles changes in the model and updates the relevant field as well as any elements linked for displaying the
     * data.
     * @param model
     * @param attribute
     */
    handleModelChange: function(model, attribute) {
      var changedProperties = Object.keys(model.changed);
      if (changedProperties.length !== 1) {
        //  Should only have 1 changed property
        return;
      }
      var selector = this.attributeToElement[changedProperties[0]];
      var $element = this.$el.find(selector);
      //displayElement is an element used to simply display the data
      var displayElementSelector = selector + '-display';
      //Replace id selector with class selector to allow several display elements
      if (displayElementSelector.charAt(0) === '#') {
        displayElementSelector = '.' + displayElementSelector.substring(1);
      }
      var $displayElement = this.$el.find(displayElementSelector);
      if ($element.length > 0) {
        $element.val(attribute);
      }
      if ($displayElement.length > 0) {
        $displayElement.html(attribute);
      }
    }
  })

})(RWJS.jQuery, RWJS._, RWJS.Backbone, RWJS.Brace);

/*
 * This file contains RefinedWiki UI objects
 */


// Init the RWJS variable if it not exists
// Whe use the originalTheme variable to store all
// parameters and functions which is needed globally
if (typeof RWJS === 'undefined') {
  var RWJS = {};
}
if (typeof RWJS.ui === 'undefined') {
  RWJS.ui = {};
}

(function($) {
  'use strict';
  // Templates
  var divTemplate;


  /**
   * Create a viewer which could be used to display different types of content.
   *
   * When the viewer is first appended to the body it's not visible.
   *
   * @param id - the id of the parent div tag
   * @return RWJS.ui.viewer object
   */
  RWJS.ui.viewer = function(id) {

    // The viewer object
    var viewer = this;

    // the popup object
    var obj = $(RWJS.Templates.Utils.viewer());
    obj.attr('id', id);

    // Close button
    var closeButton = $('.rw_viewer_close', obj);

    // Content container
    var container = $('.rw_viewer_container', obj);

    // Append the popup
    $('body').append(obj);


    this.show = function() {
      viewer.isOpened = true;
      obj.show();
    };

    this.hide = function() {
      viewer.isOpened = true;
      obj.hide();
    };

    this.showLoader = function() {
      $('.rw_viewer_loader', obj).show();
    };

    this.hideLoader = function() {
      $('.rw_viewer_loader', obj).hide();
    };

    /**
     * Hide the loader and add the given content to the data container
     */
    this.content = function(html) {
      obj.show();
      viewer.hideLoader();
      $('.rw_viewer_data', obj).html(html);
    };


    this.clear = function(html) {
      $('.rw_viewer_data', obj).html('');
    };

    // Make the object accessible
    this.obj = obj;

    // Make the closeButton accessible
    this.closeButton = closeButton;

    // Make the container accessible
    this.container = container;

    // Tells if the viewer is opened or not
    this.isOpened = false;


    //
    // Events
    //


    // Close on click on wrapper
    obj.bind('click', function(e) {
      viewer.hide();

    });

    // Close button
    closeButton.bind('click', function(e) {

      viewer.hide();

    });

    // Prevent the click in the popup to close the popup
    container.bind('click', function(e) {
      e.stopPropagation();
    });

    /*
     * Close viewer on ESC
     * */
    $(document).keyup(function(e) {

      // Exit all commands with escape
      if (e.keyCode == 27) {
        // Close the viewer
        if (viewer.isOpened === true) {
          viewer.hide();
        }
      }
    });

    return this;
  };

})(RWJS.jQuery);
/*
 * This document contains RefinedWiki JS Utils
 * 
 * All method are added to the namespace RWJS
 */

// Init the RWJS variable if it not exists
if (typeof RWJS === 'undefined') {
  var RWJS = {};
}

/**
 *  A Collection of util javascript functions
 */
(function($, Backbone, _) {
  'use strict';

  // Containing a viewer
  var viewer;

  // Templates
  var iframeTemplate = $('<div><iframe id="rw_popup_iframe_id" onload="RWJS.hideLoader()" allowTransparency="true" ' +
  'frameBorder="0" class="rw_popup_iframe"></iframe></div>');

  /**
   * This is part of a login check for ajax requests. RWAR (RefinedWiki Ajax Request)
   * If the response data don't start with RWAR then the the user is no longer authenticated.
   * Advice the user that the user are not longer authenticated
   */
  RWJS.validateAjaxResponse = function(html) {
    if (html.substring(0, 4) == 'RWAR') {
      return html.substring(4);
    }
    else {
      return '<div class="rw_warning_box"><a href="' + contextPath + '/login.action?os_destination=' +
        encodeURIComponent(window.location) + '">' + "Not logged in" +
        '</a></div>';
    }
  };


  /**
   * Replace a element and replace it with a small loader
   */
  RWJS.showSmallLoader = function(item) {
    // add the loader
    $(item).after('<div style="padding-left:5px;" class="rw_loader_16_image"></div>');

    // remove the button
    $(item).remove();

  };

  /**
   * Adds a loader on the top of a page.
   */
  RWJS.showLoader = function() {
    // Add the loader
    if ($('#rw_top_loader').length === 0) {

      $('body').prepend(RWJS.Templates.Utils.topLoader());

    } // Show the loader if it already exists
    else {
      $('#rw_top_loader').show();
    }
  };

  /**
   * Hide the  loader on the top of a page.
   */
  RWJS.hideLoader = function() {
    $('#rw_top_loader').hide();
  };

  /**
   * Show div element with buttons.
   * The elements should be named like this:
   * ELEMENT_NAME      - The elemnent name
   * ELEMENT_NAME_show    - The show element button
   * ELEMENT_NAME_hide    - The hide element button
   */
  RWJS.showDiv = function(divId) {
    $('#' + divId).show();
    $('#' + divId + '_show').hide();
    $('#' + divId + '_hide').show();
  };

  /**
   * Hide div element with buttons.
   * ELEMENT_NAME      - The elemnent name
   * ELEMENT_NAME_show    - The show element button
   * ELEMENT_NAME_hide    - The hide element button
   */
  RWJS.hideDiv = function(divId) {
    $('#' + divId).hide();
    $('#' + divId + '_show').show();
    $('#' + divId + '_hide').hide();
  };


  /**
   * Get 90% of the body width. Min 1020 px
   */
  RWJS.getPopupWidth = function() {
    var popupWidth = $(window).width();
    popupWidth = popupWidth * 0.9;
    if (popupWidth < 1020) {
      popupWidth = 1020;
    }

    return popupWidth;
  };

  /**
   * Get 90% of the body height. Min 600 px max 900px.
   */
  RWJS.getPopupHeight = function() {
    var popupHeight = $(window).height();
    popupHeight = popupHeight * 0.9;

    if (popupHeight < 600) {
      popupHeight = 600;
    } else if (popupHeight > 900) {
      popupHeight = 900;
    }

    return popupHeight;
  };


  /**
   * Scroll to the given element. The scroll
   * will only take place if the element is not currently visible at
   * the page.
   *
   * @param element - a jQuery element
   */
  RWJS.scrollToElement = function(element) {
    RWJS.scrollToElementWithOffset(element, 0);
  };

  /**
   * Scroll to the given element with a given offset. The scroll
   * will only take place if the element is not currently visible at
   * the page.
   *
   * @param element - a jQuery element
   * @param offset - the number of pixels which should be above the element after scrolling.
   *
   */
  RWJS.scrollToElementWithOffset = function(element, offset) {

    if (element !== undefined && element.length > 0 && element.offset()) {
      var windowPositionTop = $(window).scrollTop();
      var windowPositionBottom = windowPositionTop + $(window).height();

      var elementTop = element.offset().top;
      var elementBottom = elementTop + element.height();

      if (elementTop < windowPositionTop || elementBottom > windowPositionBottom) {
        window.scroll(0, element.offset().top - offset);
      }
    }
  };

  /**
   * Scroll to the given element with a given offset. The scroll
   * will only take place if the element is not currently visible at
   * the page.
   *
   * The time variable decides how long time in millesconds the scrolling should take.
   *
   * @param element - a jQuery element
   * @param offset - the number of pixels which sholud be above the element after scrolling.
   * @param time - number of millesconds the scroll time should take
   * @param callback - complete, error & before (Only run when scrolling actually takes place)
   */
  RWJS.scrollToElementWithOffsetAndDelay = function(element, offset, time, callback) {
    if (element && element.length > 0) {
      var windowPositionTop = $(window).scrollTop();
      var windowPositionBottom = windowPositionTop + $(window).height();

      var elementTop = element.offset().top;
      var elementBottom = elementTop + element.height();

      if (elementTop < windowPositionTop || elementBottom > windowPositionBottom) {
        RWJS.isScrolling = true;

        if (callback !== undefined) {
          callback.before.call();
        }

        $('html,body').animate({scrollTop: (element.offset().top - offset)}, {
          duration: time,
          complete: function() {
            RWJS.isScrolling = false;

            if (callback !== undefined) {
              callback.complete.call();
            }
          },
          error: function() {
            RWJS.isScrolling = false;

            if (callback !== undefined) {
              callback.error.call();
            }
          }
        });
      }
    }
  };


  /**
   * Scroll to the given element with a given offset in the given div
   *
   * @param $scrollableDiv - a jQuery element to scroll in
   * @param $element - a jQuery element to scroll to
   * @param offset - the number of pixels which should be above the element after scrolling.
   *
   */
  RWJS.scrollInDivToElementWithOffset = function($scrollableDiv, $element, offset) {

    RWJS.scrollInDivToElementWithOffsetAndTolerance($scrollableDiv, $element, offset, 0);

  };

  /**
   * Scroll to the given element with a given offset in the given div
   *
   * @param $scrollableDiv - a jQuery element to scroll in
   * @param $element - a jQuery element to scroll to
   * @param offset - the number of pixels which should be above the element after scrolling.
   * @param tolerance - the number of pixels it should use as a "safe" distance
   */
  RWJS.scrollInDivToElementWithOffsetAndTolerance = function($scrollableDiv, $element, offset, tolerance) {

    if ($element !== undefined && $element.length > 0 && $scrollableDiv.length > 0) {

      var windowPositionTop = $scrollableDiv.offset().top;
      var windowPositionBottom = windowPositionTop + $scrollableDiv.height();
      var currentScroll = $scrollableDiv.scrollTop();

      var elementTop = $element.offset().top;
      var elementBottom = elementTop + $element.outerHeight();

      if (elementTop < windowPositionTop || elementBottom > (windowPositionBottom - tolerance)) {
        $scrollableDiv[0].scrollTop = elementTop + currentScroll - windowPositionBottom + offset;
      }
    }
  };

  /**
   * Clear the active items in the given container.
   *
   * E.g. remove the class rw_active* from all elments who has
   * that class.
   *
   * @param container - a jQuery object
   */
  RWJS.clearActiveMenuItems = function(container) {
    $('.rw_active', container).removeClass('rw_active');
    $('.rw_active_dd', container).removeClass('rw_active_dd');
  };

  /**
   * Mark the given item as active.
   *
   * E.g. add the class rw_active the given element
   *
   * @param item - a jQuery object
   */
  RWJS.setActiveMenuItem = function(item) {
    item.addClass('rw_active');
  };

  /**
   * Mark the given item as active.
   *
   * E.g. add the class rw_active_dd the given element
   *
   * @param item - a jQuery object
   */
  RWJS.setActiveMenuItemDD = function(item) {
    item.addClass('rw_active_dd');
  };


  /**
   * Opens an AJS.Dialog and inject an iframe with the given url. The given title will be added as an header.
   *
   * @param url - the URL
   * @param title - title
   * @param theme - <code>admin</code> or leave this field empty for default theme
   * @param excludeClose - true if the close button should not be included
   */
  RWJS.openIframeDialog = function(url, title, theme, excludeClose) {
    // Show loader
    RWJS.showLoader();

    var dialogId = 'rw_popup_dialog';
    if (theme == 'admin') {
      dialogId = 'rw_popup_dialog_admin';
    }

    var dialogWidth = RWJS.getPopupWidth();
    var dialogHeight = RWJS.getPopupHeight();

    if (dialogWidth > 1000) {
      dialogWidth = 1000;
    }


    var iframeDialog = new AJS.Dialog({width: dialogWidth, height: dialogHeight, id: dialogId});

    if (title !== undefined || title !== '') {
      iframeDialog.addHeader(title);
    }

    // Add the iframe class
    iframeDialog.popup.element.addClass('rw_has_iframe');

    var iframe = iframeTemplate.clone();
    $('iframe', iframe).attr('src', url);
    iframeDialog.addPanel('', iframe, '');

    if (!excludeClose || excludeClose === false) {
      iframeDialog.addLink("Close", function() {
        iframeDialog.remove();
        RWJS.hideLoader();
      }, 'rw_right');
    }
    iframeDialog.show();

    // Adjust the height of the iframe
    $('iframe', iframe).attr('height', $('.dialog-panel-body', iframeDialog.popup.element).height());


    return iframeDialog;
  };


  /**
   * Opens an AJS.Dialog with the given panels. The given title will be added as an header.
   *
   * @param panels - A Json array with panels represented by LinksEntity. All panels have a url and a title
   * @param title - title
   * @param theme - <code>admin</code> or leave this field empty for default theme
   */
  RWJS.openIframeDialogWithPanels = function(panels, title, theme) {
    // Show loader
    RWJS.showLoader();

    var dialogId = 'rw_popup_dialog';
    if (theme == 'admin') {
      dialogId = 'rw_popup_dialog_admin';
    }

    var dialogWidth = RWJS.getPopupWidth();
    var dialogHeight = RWJS.getPopupHeight();

    if (dialogWidth > 1200) {
      dialogWidth = 1200;
    }

    var iframeDialog = new AJS.Dialog({width: dialogWidth, height: dialogHeight, id: dialogId});

    if (title !== undefined || title !== '') {
      iframeDialog.addHeader(title);
    }

    // Add the iframe class
    iframeDialog.popup.element.addClass('rw_has_iframe');

    iframeDialog.addLink("Close", function() {
      iframeDialog.remove();
      RWJS.hideLoader();
    }, 'rw_right');
    iframeDialog.show();

    // Add a panel for each note in response
    $.each(panels, function(count) {
      var iframe = iframeTemplate.clone();
      iframeDialog.addPanel(this.title, iframe, 'rw_dialog_panel', count + 1);
      $('iframe', iframe).attr('src', this.url);
      // Adjust the height of the iframe
      $('iframe', iframe).attr('height', $('.dialog-panel-body', iframeDialog.popup.element).height());

    });

    return iframeDialog;
  };


  /**
   * Used to htmlencode the string value.
   * @param value - string to be encoded.
   */
  RWJS.htmlEncode = function(value) {
    return $('<div/>').text(value).html();
  };

  RWJS.htmlEncodeUrl = function(value) {
    var safeValue = $('<div/>').text(value).html();
    return safeValue.replace('&amp;', '&');
  };

  RWJS.htmlDecode = function(value) {
    return $('<div/>').html(value).text();
  };


  /**
   * Bind a link which allso can be fired with keynavigation
   *
   * @param object - the jQuery object to bind the event to
   * @param url - the url
   * @param newWindow - true if the link should be opened in a new window
   * @param keyNacContainer - a jQuery object where the keynavigation class is bind to
   */
  RWJS.bindLink = function(object, url, newWindow, keyNavContainer) {

    if (newWindow) {
      object.attr('target', '_blank');
    }
    object.attr('href', url).click(function(e) {
      // Only fire the click event if we are in key navigation
      if (keyNavContainer.hasClass('rw_key_nav')) {
        // Navigate to the URL
        if (newWindow) {
          window.open(url);
        } else {
          window.location = url;
        }

        // Stop other event from fireing.
        e.stopPropagation();

        return false;
      }
      else {
        return true;
      }

    });
  };


  /**
   * Launch a given url in background.
   *
   * @param url - the url
   * @param refresh - <code>true</code> if the page should be refreshed on success.
   */
  RWJS.launchUrlInBackground = function(url, refresh) {
    AJS.safe.ajax({
      url: url,
      data: {},
      type: 'POST',
      success: function(data) {

        if (refresh) {
          window.location.reload();
        }

      },
      error: function(xhr) {
        console.error(xhr.status, xhr);
      }
    });
  };

  //
  // Viewer
  //

  /**
   * Open the an image in a Viewer
   * @return
   */
  RWJS.openImage = function(imageUrl) {
    if (!viewer) {
      viewer = new RWJS.ui.viewer();
    }

    var image = $('<img />');

    image.attr('src', imageUrl);
    viewer.content(image);

    // Place the image on load
    image.bind('load', function() {

      // Set the new container width. It includes 30 pixels of padding
      var newWidth = $(this).width() + 30;
      if (newWidth < 100) {
        newWidth = 100;
      }
      // Get the max popup widt h
      var popupWidth = RWJS.getPopupWidth();

      if (newWidth > popupWidth) {
        newWidth = popupWidth;
        $(this).width(newWidth - 30);
      }
      viewer.container.css('width', newWidth);


      var popupHeight = RWJS.getPopupHeight();
      // Calculate the marign top. Position the popup in the center of the screen
      viewer.container.css('margin-top', ($(window).height() - popupHeight) / 2 - 10);

    });
  };


  /**
   * Open the given youtube movie in a window
   * @return
   */
  RWJS.playMovie = function(youtubeId) {
    if (!viewer) {
      viewer = new RWJS.ui.viewer();
    }

    viewer.content('<iframe width="960" height="540" src="https://www.youtube.com/embed/' + youtubeId +
    '" frameborder="0" allowfullscreen></iframe>');

    // Set the new container width. It includes 30 pixels of padding
    var newWidth = 960 + 30;

    // Get the max popup widt h
    var popupWidth = RWJS.getPopupWidth();

    if (newWidth > popupWidth) {
      newWidth = popupWidth;
      $(this).width(newWidth - 30);
    }
    viewer.container.css('width', newWidth);


    var popupHeight = RWJS.getPopupHeight();
    // Calculate the marign top. Position the popup in the center of the screen
    viewer.container.css('margin-top', ($(window).height() - popupHeight) / 2 - 10);
  };


  /**
   * Returns a time string that will return 'x minutes ago' or
   * 'x hours ago' or if the supplied timestamp is older than a day,
   * will return the date
   */
  RWJS.getTimeString = function(millis) {
    if (typeof millis == 'string') {
      return millis;
    }
    var today = new Date();
    var diff = today.getTime() - millis;
    // Minutes
    if (diff < 60 * 60 * 1000) {
      var minutes = Math.floor(diff / (60 * 1000));
      if (minutes == 1) {
        return "1 minute ago.";
      } else {
        return AJS.format("{0} minutes ago.", ['first_parameter']).replace('first_parameter', minutes);
      }

    }
    // Hours
    else if (diff < 24 * 60 * 60 * 1000) {
      var hours = Math.floor(diff / (60 * 60 * 1000));

      if (hours === 1 || hours === 0) {
        return "1 hour ago.";
      } else {
        return AJS.format("{0} hours ago.", ['first_parameter']).replace('first_parameter', hours);
      }

    }
    // Days
    else if (diff < 100 * 24 * 60 * 60 * 1000) {
      var days = Math.floor(diff / (24 * 60 * 60 * 1000));

      if (days === 1 || days === 0) {
        return "1 day ago.";
      } else {
        return AJS.format("{0} days ago.", ['first_parameter']).replace('first_parameter', days);
      }

    }
    // Just print the date
    else {
      return (new Date(millis - 0)).toLocaleDateString();
    }
  };


  /**
   * Returns a date string that will return 'Today', 'Yesterday' or the date
   */
  RWJS.getDateString = function(millis) {
    if (typeof millis == 'string') {
      return millis;
    }

    var date = new Date(millis);

    // Today
    var today = new Date();

    // Tomorrow
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Yesterday
    var yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    // Today
    if (today.toLocaleDateString() == date.toLocaleDateString()) {
      return "Today";
    }
    // Tomorrow
    else if (tomorrow.toLocaleDateString() == date.toLocaleDateString()) {
      return "Tomorrow";
    }
    // Yesterday
    else if (yesterday.toLocaleDateString() == date.toLocaleDateString()) {
      return "Yesterday";
    }
    else {
      return (new Date(millis - 0)).toLocaleDateString();
    }
  };

  /**
   * Render a status update. Links(http://.. & www) and labels(#..) is turned in to proper links.
   */
  RWJS.renderStatusUpdate = function(content) {
    // Create links
    var linkExp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    content = content.replace(linkExp, '<a href="$1">$1</a>');


    // Create hashtags
    var hashExp = /((^)#[A-Za-z0-9\-\_]+)/g;
    content = content.replace(hashExp, '<a href="' + contextPath + '/label/$1">$1</a>');

    hashExp = /((\s)#[A-Za-z0-9\-\_]+)/g;
    content = content.replace(hashExp, ' <a href="' + contextPath + '/label/$1">$1</a>');

    // HACK!
    content = content.replace('/label/#', '/label/');

    return content;
  };

  /**
   * Apply a tooltip to element(s) with the supplied selector.
   * Pass a overrides object if you want to change any of the default settings
   * <code>
   * var defaults = {
        live: true, // Created links are handled automatically
        gravity: 'w', // Point the arrow to the top left
        title: 'data-tooltip', // Tooltip text is specified in this attribute value
        delayIn: 250, // Can be removed once AUI-1214 is resolved
        delayOut: 0, // Can be removed once AUI-1214 is resolved
        offset: 5  // Can be removed once AUI-1214 is resolved
    };
   </code>
   */
  RWJS.applyTooltip = function(selector, overrides) {
    var defaults = {
      live: true, // Created links are handled automatically
      gravity: 'w', // Point the arrow to the top left
      title: 'data-tooltip', // Tooltip text is specified in this attribute value
      delayIn: 250, // Can be removed once AUI-1214 is resolved
      delayOut: 0, // Can be removed once AUI-1214 is resolved
      offset: 5  // Can be removed once AUI-1214 is resolved
    };

    // We want to construct a jQuery object using the selector to guarantee that the tooltip function
    // can extract the object's selector (so that the live param will work)
    AJS.$(selector + '[' + defaults.title + ']').tooltip(overrides ? AJS.$.extend(defaults, overrides) : defaults);
  };

  /**
   * Apply a tooltip.
   * Pass a overrides object if you want to change any of the default settings
   * <code>
   * var defaults = {
        live: true, // Created links are handled automatically
        gravity: 'w', // Point the arrow to the top left
        title: 'data-tooltip', // Tooltip text is specified in this attribute value
        delayIn: 250, // Can be removed once AUI-1214 is resolved
        delayOut: 0, // Can be removed once AUI-1214 is resolved
        offset: 5  // Can be removed once AUI-1214 is resolved
    };
   </code>
   */
  RWJS.applyTooltipToElement = function($element, overrides) {
    var defaults = {
      live: true, // Created links are handled automatically
      gravity: 'w', // Point the arrow to the top left
      title: 'data-tooltip', // Tooltip text is specified in this attribute value
      delayIn: 250, // Can be removed once AUI-1214 is resolved
      delayOut: 0, // Can be removed once AUI-1214 is resolved
      offset: 5  // Can be removed once AUI-1214 is resolved
    };

    // We want to construct a jQuery object using the selector to guarantee that the tooltip function
    // can extract the object's selector (so that the live param will work)
    $element.tooltip(overrides ? AJS.$.extend(defaults, overrides) : defaults);
  };

  /**
   * This is a fix to remove tooltips.
   */
  RWJS.removeTooltip = function() {
    // Remove tipsies
    $('.tipsy').remove();

    // Tooltip fix, when the tooltip trigger is removed tooltips hang on to the page
    // This fix will be removed when Atlassian have resolved this issue
    setTimeout(function() {
      $('.tipsy').remove();
    }, 250);
  };

  /**
   * If there is items with icons and without icons in the same list we need to adjust so all items
   * start at the same position. E.g. We need to add empty icons container to thoose items that
   * doesn't have icons.
   *
   * @param {Object} $container
   */
  RWJS.adjustIconTextSpace = function($container) {
    // Number of items that have icon
    var itemIconCount = $('.rw_item_icon', $container).length;

    if (itemIconCount > 0 && itemIconCount < $('li', $container).length) {
      $('li', $container).each(function() {
        if ($('.rw_item_icon', this).length === 0) {
          $('a', this).prepend('<span class="rw_item_icon"></span>');
        }
      });
    }
  };


  /**
   * Prints a message with the given content in a popup.
   *
   * Overides(Args)
   * delay - Delay in milliseconds before the message is fading out
   * type - Different types: success, error, info
   *
   * @param {Object} overrides
   * @param {Object} content
   */
  RWJS.message = function(overrides, content) {
    var defaults = {
      delay: 4000, // Delay in milliseconds before the message is fading out
      type: 'success' // Different types: success, error, info
    };

    // Check which args we should use
    var args = overrides ? $.extend(defaults, overrides) : defaults;


    // If the container does not exist it will be added.
    if ($('#rw_message_container').length === 0) {
      $('body').prepend('<div id="rw_message_container"></div>');
    }

    var $messageContainer = $('#rw_message_container');

    // unbind all event, clear it.
    $messageContainer.unbind().html('');

    // Create the message
    var $message = $('<div class="rw_message"></div>');
    $message.html(content).addClass('rw_' + args.type);
    $messageContainer.append($message);

    $messageContainer.show();

    // Fade out the message
    $messageContainer.delay(args.delay).fadeOut(function() {
      $message.remove();
    });
  };

  /**
   * Init Pub Sub
   */
  RWJS.initPubSub = function() {
    if (!RWJS.PubSub) {
      RWJS.PubSub = _.extend({}, RWJS.Backbone.Events);
    }
  };


  /**
   * Change luminance of a hexa decimal color. E.g. make it lighter or darker
   *
   * @param hex - E.g. ee3344
   * @param lum - E.g. -0.3 or 0.1 ...
   */
  RWJS.colorLuminance = function(hex, lum) {
    // validate hex string
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    lum = lum || 0;
    // convert to decimal and change luminosity
    var rgb = '', c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ('00' + c).substr(c.length);
    }
    return rgb;
  };

  RWJS.getLuminanceValue = function(hex) {
    hex = String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    var i;
    var total = 0;
    for (i = 0; i < 3; i++) {
      total += parseInt(hex.substr(i * 2, 2), 16);
    }
    return total;
  };

  /**
   * SEt the caret at the end of a input field or textare
   * @param elem
   */
  RWJS.setCaretAtEnd = function(elem) {
    var elemLen = elem.value.length;
    // For IE Only
    if (document.selection) {
      // Set focus
      elem.focus();
      // Use IE Ranges
      var oSel = document.selection.createRange();
      // Reset position to 0 & then set at end
      oSel.moveStart('character', -elemLen);
      oSel.moveStart('character', elemLen);
      oSel.moveEnd('character', 0);
      oSel.select();
    }
    else if (elem.selectionStart || elem.selectionStart == '0') {
      // Firefox/Chrome
      elem.selectionStart = elemLen;
      elem.selectionEnd = elemLen;
      elem.focus();
    }
  };

  RWJS.hexToRgb = function(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  /**
   * Convert any colour to a CSS ready rgbaString
   * @param color any color, hex, rgb or rgba
   * @param alpha a number between 0 and 1
   * @returns {*} rgbaString
   */
  RWJS.toRgbaString = function(color, alpha) {

    var newAlpha;
    if (alpha >= 0 && alpha <= 1) {
      newAlpha = alpha;
    }
    else {
      newAlpha = 1;
    }

    var retColor;
    if (color.startsWith('rgb')) {
      // RGB matching
      var rgbRegex = /rgb\((\d{1,3}), *(\d{1,3}), *(\d{1,3})\)/;
      var rgbMatch = rgbRegex.exec(color);

      // RGBA matching
      var rgbaRegex = /rgba\((\d{1,3}), *(\d{1,3}), *(\d{1,3}), *(\d?\.?\d*)\)/;
      var rgbaMatch = rgbaRegex.exec(color);

      if (rgbMatch != null) {


        retColor = 'rgba(' + rgbMatch[1] + ',' + rgbMatch[2] + ',' +
          rgbMatch[3] + ',' + newAlpha + ')';
      }
      else if (rgbaMatch != null) {
        // Input alpha has priority
        if (newAlpha == 1 && rgbaMatch[4] >= 0 && rgbaMatch[4] < 1) {
          newAlpha = rgbaMatch[4];
        }

        retColor = 'rgba(' + rgbaMatch[1] + ',' + rgbaMatch[2] + ',' +
          rgbaMatch[3] + ',' + newAlpha + ')';
      }
    }
    else if (color.startsWith('#')) {
      // We have a hex colour
      var hexColor = RWJS.hexToRgb(color);
      if (hexColor) {
        retColor = 'rgba(' + hexColor.r + ',' + hexColor.g + ',' +
          hexColor.b + ',' + newAlpha + ')';
      }
      else {
        // Hex code is not complete, return black
        return 'rgba(0,0,0,1)';
      }
    }

    if (!retColor) {
      console.error('RWJS.toRgbaString: Input color is neither hex nor RGB(A).');
      return 'rgba(0,0,0,1)';
    }

    return retColor;
  };

  /**
   * User agent check for IE. Should be used with caution.
   * @returns {*}
   */
  RWJS.isIE = function() {
    var myNav = navigator.userAgent.toLowerCase();
    return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
  };


  RWJS.showHelpDialog = function ($button) {

      // Create toggle behaviour
      if ($button.hasClass('rw_active' )) {
        return false;
      }

      var helpDialog = new RWJS.InlineDialog({
        $button: $button, id: 'uncategorizedHelp', width: 400, title: $button.data('title'), cssClass: 'rw_help_dialog'
      });

      var $content = $('<div class="rw_section"></div>');
      $content.html($button.data('text'));

      // Open dialog and append the menu
      helpDialog.open();
      helpDialog.setContent($content);

  };


  /**
   * Get the given query value from the url
   * @param name
   * @param url
   * @returns {string}
   */
  RWJS.getParameterByName = function(name, url) {
    name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(url);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };


})(RWJS.jQuery, RWJS.Backbone, RWJS._);


} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/footer/templates/soy/footer.soy' */
// This file was automatically generated from footer.soy.
// Please don't edit this file by hand.

if (typeof RWJS == 'undefined') { var RWJS = {}; }
if (typeof RWJS.Templates == 'undefined') { RWJS.Templates = {}; }
if (typeof RWJS.Templates.Footer == 'undefined') { RWJS.Templates.Footer = {}; }


RWJS.Templates.Footer.columnMenu = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t', (! opt_data.inColumnEditMode) ? '<div class="rw_simple_dd rw_right"><a><span class="rw_icon rw_iconfont_config"></span></a><div class="rw_dd"><ul class="rw_admin_dropdown_menu rw_position_down">' + ((opt_data.editOption) ? '<li><a class="rw_action_edit_column"><span class="rw_item_icon rw_iconfont_edit"></span><span class="rw_item_content rw_has_icon">' + soy.$$escapeHtml("Edit column") + '</span></a></li>' : '') + '<li><a class="rw_action_delete_column"><span class="rw_item_icon rw_iconfont_trash"></span><span class="rw_item_content rw_has_icon">' + soy.$$escapeHtml("Delete column") + '</span></a></li></ul></div></div>' + ((opt_data.type == 'footer-column-links') ? '<div class="rw_simple_dd rw_right"><a><span class="rw_icon rw_iconfont_add"></span></a><div class="rw_dd"><ul class="rw_admin_dropdown_menu rw_position_down"><li><a class="rw_action_add_link"><span class="rw_item_icon rw_iconfont_link"></span><span class="rw_item_content rw_has_icon">' + soy.$$escapeHtml("Add link") + '</span></a></li></ul></div></div>' : '') : '');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Footer.configSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t', (opt_data.footer.disabled == false) ? '<div class="rw_editor" style="background:#f6f6f6"><div class="rw_editor_toolbar"><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner"><div class="aui-toolbar2-primary"><h1>' + soy.$$escapeHtml("Footer") + '</h1></div><div class="aui-toolbar2-primary"><a class="aui-button" id="rw_add_column_button"><span>' + soy.$$escapeHtml("Add column") + '</span></a></div><div class="aui-toolbar2-secondary"><a class="aui-button" href="' + soy.$$escapeHtml(opt_data.doneUrl) + '"><span>' + soy.$$escapeHtml("Done") + '</span></a></div></div></div></div><div class="rw_editor_body"><div><div id="rw_footer_editor"><div id="rw_footer_columns_container"><ul id="rw_footer_columns" class="ui-sortable"></ul></div><div class="rw_footer_content_editor"></div></div></div></div></div>' : '');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Footer.editContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_footer_content">', (! opt_data.inEditMode) ? opt_data.htmlContent + '<a id="rw_footer_content_button" class="aui-button" style="margin-left: 10px;"><span>' + soy.$$escapeHtml("Edit") + '</span></a>' : '<div class="rw_input_container"><div class="rw_input_desc">' + soy.$$escapeHtml("Footer content") + '</div><div class="rw_input_content rw_has_input_desc"><textarea name="footerContent" id="rw_form_footerContent">' + soy.$$escapeHtml(opt_data.content) + '</textarea></div><a id="rw_save_footer_content" class="aui-button"><span class="rw_no_icon">' + soy.$$escapeHtml("Save") + '</span></a><a class="aui-link" id="rw_cancel_content_edit" style="margin-left:15px;cursor: pointer;">' + soy.$$escapeHtml("Cancel") + '</a></div>', '</div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Footer.columnTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_footer_column">');
  RWJS.Templates.Footer.columnMenu({type: opt_data.column.type, editOption: opt_data.editOption, inColumnEditMode: opt_data.inColumnEditMode}, output);
  output.append((opt_data.title) ? '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3>' : '', '<div class="rw_column_content ', (! opt_data.inColumnEditMode && opt_data.editOption) ? 'rw_click_to_edit' : '', '"></div>', (opt_data.inColumnEditMode && opt_data.editOption) ? '<div class="rw_items_toolbar"><button class="aui-button aui-button-link rw_right rw_link_cancel">' + soy.$$escapeHtml("Cancel") + '</button><button class="aui-button aui-button-primary rw_right rw_margin_right rw_link_save">' + soy.$$escapeHtml("Save") + '</button></div>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Footer.linkTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  if (opt_data.inColumnEditMode) {
    output.append('<div class="rw_margin_top">');
    RWJS.Templates.Utils.inputRow({type: 'text', name: 'name', label: "Title", size: 'small', cssClass: 'rw_form_name', value: opt_data.column.name}, output);
    output.append('</div>');
  } else {
    output.append('<ul class="rw_admin_content_list" data-column-key="', soy.$$escapeHtml(opt_data.column.nameKey), '" data-empty-text="', soy.$$escapeHtml("Drop links here"), '">');
    var idList96 = soy.$$getMapKeys(opt_data.column.links);
    var idListLen96 = idList96.length;
    for (var idIndex96 = 0; idIndex96 < idListLen96; idIndex96++) {
      var idData96 = idList96[idIndex96];
      output.append('<li data-id="', soy.$$escapeHtml(opt_data.column.links[idData96].id), '" data-parent-key="', soy.$$escapeHtml(opt_data.column.nameKey), '" id="rw_link_', soy.$$escapeHtml(opt_data.column.links[idData96].id), '"><span class="rw_item_icon rw_icon ', (opt_data.column.links[idData96].icon) ? 'rw_iconfont_' + soy.$$escapeHtml(opt_data.column.links[idData96].icon) : '', '"></span><span class="rw_item_content">', soy.$$escapeHtml(opt_data.column.links[idData96].title), '<span class="rw_actions"><a class="rw_action_delete_link">', soy.$$escapeHtml("Delete"), '</a><a class="rw_action_edit_link">', soy.$$escapeHtml("Edit"), '</a></span></span></li>');
    }
    output.append('</ul>');
  }
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Footer.logoTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="rw_logo_preview">', (opt_data != null && opt_data.path) ? '<img src="' + soy.$$escapeHtml(opt_data.path) + '" />' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Footer.customColumnTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t');
  if (opt_data.inColumnEditMode) {
    output.append('<form id="rw_custom_form" style="">');
    RWJS.Templates.Utils.inputRow({type: 'text', name: 'name', label: "Title", size: 'small', cssClass: 'rw_form_title', value: opt_data.column.title}, output);
    RWJS.Templates.Utils.inputRow({type: 'textarea', name: 'name', label: "HTML", size: 'small', cssClass: 'rw_form_content', helpText: "This feature could for example be used to include widgets.", value: opt_data.column.content}, output);
    output.append('</form>');
  } else {
    output.append('<div class="rw_custom_content"><div class="rw_custom_html">', soy.$$escapeHtml(opt_data.column.content), '</div></div>');
  }
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Footer.columnListElement = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-name-key="', soy.$$escapeHtml(opt_data.column.nameKey), '"></li>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Footer.createNewColumnDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div class="rw_input_content rw_has_input_desc"><ul class="rw_module_templates">');
  var templateList156 = opt_data.columnData;
  var templateListLen156 = templateList156.length;
  for (var templateIndex156 = 0; templateIndex156 < templateListLen156; templateIndex156++) {
    var templateData156 = templateList156[templateIndex156];
    if (templateData156.enabled) {
      output.append('<li class="rw_module_template', (! opt_data.type && templateData156.type == 'footer-column-links' || opt_data.type == templateData156.type) ? ' rw_selected' : '', '" data-type="', soy.$$escapeHtml(templateData156.type), '">');
      RWJS.Templates.Icons.getIcon({icon: templateData156.icon}, output);
      output.append('<div class="rw_module_template_meta"><div class="rw_module_template_name" title="', soy.$$escapeHtml(templateData156.name), '">', soy.$$escapeHtml(templateData156.name), '</div><div class="rw_small_text" title="', soy.$$escapeHtml(templateData156.desc), '">', soy.$$escapeHtml(templateData156.desc), '</div></div></li>');
    }
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
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/footer/js/models/footer-column-model.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Models==="undefined"){RWJS.Models={}}(function(c,d,b,a){RWJS.Models.FooterColumn=d.Model.extend({idAttribute:"nameKey",namedAttributes:{type:"string",after:"string"},setDefaultValues:function(){console.error("RWJS.Models.FooterColumn: setDefaultValues - Override this function instead. Requires local implementation.")},deleteColumn:function(e){if(!e){e={}}e.url=this.url()+"/"+this.id;return d.Model.prototype.destroy.call(this,e)},getColumn:function(e){if(!e){e={}}e.url=this.url()+"/"+this.id;return d.Model.prototype.fetch.call(this,e)},updateColumn:function(e){if(!e){e={}}e.url=this.url()+"/"+this.id;e.type="post";return d.Model.prototype.save.call(this,{},e)},moveColumn:function(e,f){if(!e){e={}}e.url=this.url()+"/"+this.id+"/move";e.data=JSON.stringify(f);e.dataType="json";e.contentType="application/json";return d.Model.prototype.save.call(this,{},e)},url:function(){console.error("RWJS.Models.FooterColumn: url - Override this function instead. Requires local implementation.")}});RWJS.Models.FooterLinkColumn=RWJS.Models.FooterColumn.extend({namedAttributes:{name:"string"},initialize:function(e){RWJS.Models.FooterColumn.prototype.initialize.call(this,e)},setDefaultValues:function(){this.set("type","footer-column-links");this.set("name","Links");this.set("links",{})},url:function(){console.error("RWJS.Models.FooterLinkColumn: url - Override this function instead. Requires local implementation.")},moveLink:function(g,i,f){var e=this;if(!g){g={}}var h=i.newParentKey?i.newParentKey:f;g.url=this.url()+"/"+h+"/link/"+i.id+"/move";g.data=JSON.stringify(i);g.dataType="json";g.contentType="application/json";g.success=function(l,j,k){e.set("links",j)};return d.Model.prototype.save.call(this,{},g)}});RWJS.Models.FooterLogoColumn=RWJS.Models.FooterColumn.extend({initialize:function(e){RWJS.Models.FooterColumn.prototype.initialize.call(this,e)},setDefaultValues:function(){this.set("type","footer-column-logo")},url:function(){console.error("RWJS.Models.FooterLogoColumn: url - Override this function instead. Requires local implementation.")}});RWJS.Models.FooterCustomColumn=RWJS.Models.FooterColumn.extend({namedAttributes:{title:"string",content:"string"},initialize:function(e){RWJS.Models.FooterColumn.prototype.initialize.call(this,e)},setDefaultValues:function(){this.set("type","footer-column-custom");this.set("title","");this.set("content","")}});RWJS.Models.FooterColumns=d.Collection.extend({model:RWJS.Models.FooterColumn})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/footer/js/models/footer-model.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Models==="undefined"){RWJS.Models={}}(function(c,d,b,a){RWJS.Models.Footer=b.Model.extend({namedAttributes:{theme:"string",content:"string",htmlContent:"string",disabled:"boolean"},toggleEnabled:function(e){if(e==undefined){e={}}e.url=this.url()+"/toggle-enabled?disabled="+!this.get("disabled");e.type="PUT";return d.Model.prototype.save.call(this,{},e)},changeTheme:function(e,f){if(e==undefined){e={}}e.url=this.url()+"/change-theme?theme="+f;e.type="PUT";return d.Model.prototype.save.call(this,{},e)}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/footer/js/views/footer-column-dialog-view.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Views==="undefined"){RWJS.Views={}}(function(c,d,b,a){RWJS.Views.FooterColumnDialogView=d.View.extend({dialog:undefined,columnData:{},events:{"click .rw_module_template":"changeType"},initialize:function(g){var e=this;if(g){if(g.columnData){this.columnData=g.columnData}}this.dialog=new AJS.Dialog({id:"rw_popup_dialog_admin",height:"400",width:"560"});this.dialog.addHeader("Add column");var f=c(RWJS.Templates.Footer.createNewColumnDialog({columnData:this.columnData}));this.setElement(f);this.dialog.addPanel("",f,"");this.dialog.addSubmit("Save",a.bind(function(h){if(g&&g.callback){g.callback(h,e)}else{console.error("RWJS.Views.FooterColumnDialogView: initialize - No save button callback implemented")}},this));this.dialog.addCancel("Close",a.bind(function(){this.dialog.remove();this.undelegateEvents();this.remove();RWJS.hideLoader()},this))},render:function(){var e=c(RWJS.Templates.Footer.createNewColumnDialog({columnData:this.columnData}));this.setElement(e);this.dialog.getCurrentPanel().body.html(e);this.dialog.show()},changeType:function(f){a.each(this.$(".rw_module_template"),function(e){c(e).removeClass("rw_selected")});c(f.currentTarget).addClass("rw_selected")}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/footer/js/views/footer-column-view.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Views==="undefined"){RWJS.Views={}}(function(c,d,b,a){RWJS.Views.FooterColumnView=d.View.extend({events:{"click #rw_footer_columns li .rw_action_delete_column":"deleteColumn","click #rw_footer_columns li .rw_action_edit_column":"editColumn","click .rw_click_to_edit":"editColumn","click .rw_link_save":"saveEdit","click .rw_link_cancel":"cancelEdit"},inColumnEditMode:false,editOption:true,title:"",initialize:function(e){if(e){if(e.width){this.width=e.width}if(e.parent){this.parent=e.parent}if(e.inColumnEditMode){this.inColumnEditMode=e.inColumnEditMode}}this.setTitle()},render:function(){this.$el.html(RWJS.Templates.Footer.columnTemplate({column:this.model.toJSON(),editOption:this.editOption,inColumnEditMode:this.inColumnEditMode,title:this.title}));return this.$el},saveEdit:function(){this.saveModel();var f=this.parent.$("#rw_footer_columns");var e=f.find('li[data-name-key="'+this.model.id+'"]').index();var g=c(f.find("li[data-name-key]").get(e-1)).data("name-key");if(e){this.model.set("after",g);this.model.set("position",e)}RWJS.showLoader();this.model.updateColumn({success:a.bind(function(){this.inColumnEditMode=false;this.setTitle();this.render()},this)}).always(function(){RWJS.hideLoader()})},setTitle:function(){console.error("RWJS.Views.FooterColumnView: setTitle - override this function instead. Requires local implementation.")},saveModel:function(){console.error("RWJS.Views.FooterColumnView: saveModel - override this function instead. Requires local implementation.")},cancelEdit:function(){this.inColumnEditMode=false;this.render()},deleteColumn:function(g){if(confirm("Are you sure you want to delete this column? If this column contains links or blogs, they will be removed as well.")){var f=this;RWJS.showLoader();this.model.deleteColumn({}).always(function(){f.remove();f.render();RWJS.hideLoader()})}},editColumn:function(f){if(!c("#rw_footer_columns").hasClass("rw_sorting")){this.inColumnEditMode=true;this.render()}}});RWJS.Views.CustomColumnView=RWJS.Views.FooterColumnView.extend({initialize:function(e){RWJS.Views.FooterColumnView.prototype.initialize.call(this,e)},render:function(){var e=RWJS.Views.FooterColumnView.prototype.render.call(this);var f=c(RWJS.Templates.Footer.customColumnTemplate({column:this.model.toJSON(),inColumnEditMode:this.inColumnEditMode}));c(".rw_column_content",e).append(f);return e},setTitle:function(){this.title=this.model.get("title")},saveModel:function(){var f=this.$(".rw_form_title").val();var e=this.$(".rw_form_content").val();this.model.set("title",f);this.model.set("content",e)}});RWJS.Views.LinkColumnView=RWJS.Views.FooterColumnView.extend({events:a.extend({},RWJS.Views.FooterColumnView.prototype.events,{"click #rw_footer_columns li .rw_action_add_link":"addLink","click #rw_footer_columns li .rw_action_edit_link":"editLink","click #rw_footer_columns li .rw_action_delete_link":"deleteLink"}),setTitle:function(){this.title=this.model.get("name")},initialize:function(e){RWJS.Views.FooterColumnView.prototype.initialize.call(this,e)},render:function(){var e=RWJS.Views.FooterColumnView.prototype.render.call(this);var f=c(RWJS.Templates.Footer.linkTemplate({column:this.model.toJSON(),inColumnEditMode:this.inColumnEditMode}));c(".rw_column_content",e).append(f);return e},updateLinkColumn:function(e,f){if(e){this.model.get("links")[e.id]=e}else{delete this.model.get("links")[f]}this.render()},addLink:function(){console.error("RWJS.Views.LinkColumnView: addLink - Override this function instead. Requires local implementation.")},editLink:function(){console.error("RWJS.Views.LinkColumnView: editLink - Override this function instead. Requires local implementation.")},deleteLink:function(){console.error("RWJS.Views.LinkColumnView: deleteLink - Override this function instead. Requires local implementation.")},saveModel:function(){var e=this.$(".rw_form_name").val();this.model.set("name",e)}});RWJS.Views.LogoColumnView=RWJS.Views.FooterColumnView.extend({editOption:false,path:undefined,initialize:function(e){RWJS.Views.FooterColumnView.prototype.initialize.call(this,e)},render:function(){var e=RWJS.Views.FooterColumnView.prototype.render.call(this);var f=c(RWJS.Templates.Footer.logoTemplate({path:this.path}));c(".rw_column_content",e).append(f);return e},setTitle:function(){this.title="Logo column"}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/footer/js/views/footer-config-view.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Views==="undefined"){RWJS.Views={}}(function(c,d,b,a){RWJS.Views.FooterConfigView=d.View.extend({$wrapper:undefined,renderedColumnViews:{},createColumnInEditMode:[],editContentView:undefined,doneUrl:undefined,events:{"click #rw_add_column_button":"addNewColumn"},initialize:function(f){var e=this;if(f){if(f.wrapper){this.$wrapper=f.wrapper}if(f.columnData){this.columnData=f.columnData}if(f.doneUrl){this.doneUrl=f.doneUrl}}if(!this.doneUrl){console.error("[RWJS Dev] A url pointing to the location to navigate on done must be supplied to RWJS.Views.FooterConfigView")}this.initSubscriptions()},initSubscriptions:function(){this.model.get("columns").on("add",this.renderColumns,this);this.model.get("columns").on("remove",this.removeColumn,this)},render:function(){var e=c(RWJS.Templates.Footer.configSection({footer:this.model.toJSON(),doneUrl:this.doneUrl}));this.renderColumns(undefined,e);this.renderEditContentView(e);this.setElement(e);this.$wrapper.html(this.$el);this.initSortableColumns();return this.$el},renderEditContentView:function(f){var e=c("#rw_footer_editor .rw_footer_content_editor",f);if(!this.editContentView){this.editContentView=new RWJS.Views.EditFooterContentView({model:this.model,el:e,parentView:this})}else{this.editContentView.$el=e;this.editContentView.delegateEvents()}this.editContentView.render()},renderColumns:function(g,f){var e=this;var h;h=f?c("#rw_footer_columns",f):this.$("#rw_footer_columns");this.model.get("columns").each(function(l){var i=a.find(e.columnData,function(n){return n.type===l.get("type")}).view;if(!i){console.error("RWJS.Views.FooterConfigView: renderColumns - Couldn't find column! Please implement the corresponding column view",this.get("type"))}else{if(e.renderedColumnViews[l.id]){h.append(e.renderedColumnViews[l.id].render())}else{var k=c(RWJS.Templates.Footer.columnListElement({column:l.toJSON()}));var m=c.inArray(l.id,e.createColumnInEditMode)!==-1;var j=new i({model:l,parent:e,inColumnEditMode:m,el:k});e.renderedColumnViews[l.id]=j;h.append(j.render())}}});h.find("> li").width(100/e.model.get("columns").length+"%");return f},initSortableColumns:function(){var e=this;this.$("#rw_footer_columns").sortable({update:function(g,i){var h={},f;f=i.item.prev();if(!f.length){h.position="first"}else{h.after=f.data("name-key")}h.sort=c(this).children().length!=1;RWJS.showLoader();e.model.get("columns").get(i.item.data("name-key")).moveColumn(null,h).always(function(){RWJS.hideLoader()})},start:function(f,g){e.$("#rw_footer_columns").addClass("rw_sorting");e.$(".ui-sortable-placeholder").width(100/e.model.get("columns").length+"%")},stop:function(f,g){setTimeout(function(){e.$("#rw_footer_columns").removeClass("rw_sorting")},300)}}).bind("mousedown",function(f){f.stopPropagation()})},addNewColumn:function(h){var g=this;var f=new RWJS.Views.FooterColumnDialogView({columnData:this.columnData,callback:function(m,k){var j=k.$(".rw_selected").data("type");var l=a.find(g.columnData,function(e){return e.type===j});if(!l){console.error("RWJS.FooterConfigView: addNewColumn - Couldn't find column! Please implement the corresponding column view",this.get("type"))}else{var i=new l.model({});i.setDefaultValues();var n=c("#rw_footer_columns").find("li[data-name-key]").last().data("name-key");if(n){i.set("after",n)}}RWJS.showLoader();i.save({},{success:a.bind(function(){k.dialog.remove();k.undelegateEvents();k.remove();g.createColumnInEditMode.push(i.id);g.model.get("columns").add(i)},k)}).always(function(){RWJS.hideLoader()})}});f.render()},removeColumn:function(g){var f=this;delete this.renderedColumnViews[g.id];a.each(f.$("li[data-name-key]"),function(e){c(e).width(100/f.model.get("columns").length+"%")})}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/footer/js/views/footer-edit-content-view.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Views==="undefined"){RWJS.Views={}}(function(c,d,b,a){RWJS.Views.EditFooterContentView=d.View.extend({events:{"click #rw_footer_content_button":"editContent","click #rw_save_footer_content":"saveContent","click #rw_cancel_content_edit":"cancelContent"},parentView:undefined,inEditMode:false,initialize:function(e){if(e&&e.parentView){this.parentView=e.parentView}},render:function(){this.$el.html(RWJS.Templates.Footer.editContent({content:this.model.get("content"),htmlContent:this.model.get("htmlContent"),inEditMode:this.inEditMode}));return this},saveContent:function(h){var g=this;var f=this.$("#rw_form_footerContent").val();this.model.set("content",f,{silent:true});RWJS.showLoader();this.model.save({},{type:"PUT"}).always(function(){RWJS.hideLoader();g.inEditMode=false;g.render();g.parentView.initSubscriptions()})},cancelContent:function(f){this.inEditMode=false;this.render()},editContent:function(f){this.inEditMode=true;this.render()}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/utils/templates/soy/utils.soy' */
// This file was automatically generated from utils.soy.
// Please don't edit this file by hand.

if (typeof RWJS == 'undefined') { var RWJS = {}; }
if (typeof RWJS.Templates == 'undefined') { RWJS.Templates = {}; }
if (typeof RWJS.Templates.Utils == 'undefined') { RWJS.Templates.Utils = {}; }


RWJS.Templates.Utils.viewer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="rw_viewer" class="rw_viewer_wrapper" style="display:none;"><div class="rw_viewer_container"><a class="rw_viewer_close" >', soy.$$escapeHtml("Done"), '</a><div style="clear:both;"></div><div class="rw_viewer_content"><div style="clear:both;"></div><div class="rw_viewer_loader"><div class="rw_viewer_loader_image"></div></div><div class="rw_viewer_data"></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Utils.inlineDialog = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="rw_inline_dialog_', soy.$$escapeHtml(opt_data.id), '" class="rw_inline_dialog rw_theme_', soy.$$escapeHtml(opt_data.theme), ' ', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', ' rw_escapeable"><div class="rw_arrow"></div><div class="rw_title"></div><div class="rw_body"></div>', (opt_data.toolbarContent) ? '<div class="rw_toolbar"></div>' : '', '<div class="rw_loader">');
  RWJS.Templates.Utils.loader({size: 'medium'}, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Utils.customRow = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_input_container ', (opt_data.size) ? 'rw_size_' + soy.$$escapeHtml(opt_data.size) : '', '">', (opt_data.label) ? '<div class="rw_input_desc"><label>' + soy.$$escapeHtml(opt_data.label) + ((opt_data.size != 'small') ? ':' : '') + '</label></div>' : '', (opt_data.dialogHelpText) ? '<div class="rw_help_button" data-title="' + soy.$$escapeHtml(opt_data.label) + '" data-text="' + opt_data.dialogHelpText + '"><span class="rw_icon rw_iconfont_info"></span></div>' : '', '<div class="rw_input_content', (opt_data.label) ? ' rw_has_input_desc' : '', (opt_data.dialogHelpText) ? ' rw_has_input_help' : '', '">', (opt_data.contents) ? opt_data.contents : '', '</div></div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Utils.inputRow = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.type == 'hidden') {
    output.append('<input type="hidden" value="', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '" name=\'', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : '', '\' ', (opt_data.name) ? 'id=\'rw_form_' + soy.$$escapeHtml(opt_data.name) + '\'' : '', ' class=\'', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', '\' ', (opt_data.disabled) ? 'disabled="disabled"' : '', '/>');
  } else {
    output.append('<div class="rw_input_container', (opt_data.size) ? ' rw_size_' + soy.$$escapeHtml(opt_data.size) : '', ' rw_type_', soy.$$escapeHtml(opt_data.type), '">', (opt_data.label) ? '<div class="rw_input_desc"><label for="rw_form_' + soy.$$escapeHtml(opt_data.name) + '" title="' + soy.$$escapeHtml(opt_data.label) + '">' + soy.$$escapeHtml(opt_data.label) + ((opt_data.size != 'small') ? ':' : '') + ((opt_data.mandatory) ? '<span class="rw_mandatory">*</span>' : '') + '</label></div>' : '', (opt_data.helpImg) ? '<div class="rw_input_help_img"><a href="#" onclick="RWJS.openImage(\'' + soy.$$escapeHtml("/confluence") + '/download/resources/' + soy.$$escapeHtml(opt_data.pluginKey) + '/images/admin/' + soy.$$escapeHtml(opt_data.helpImg) + '.' + soy.$$escapeHtml(opt_data.helpImgExtension) + '\');return false;" ><img src="' + soy.$$escapeHtml("/confluence") + '/download/resources/' + soy.$$escapeHtml(opt_data.pluginKey) + '/images/admin/' + soy.$$escapeHtml(opt_data.helpImg) + '_small.' + soy.$$escapeHtml(opt_data.helpImgExtension) + '" /></a></div>' : '', (opt_data.dialogHelpText) ? '<div class="rw_help_button" data-title="' + soy.$$escapeHtml(opt_data.label) + '" data-text="' + opt_data.dialogHelpText + '"><span class="rw_icon rw_iconfont_info"></span></div>' : '', '<div class="rw_input_content', (opt_data.label) ? ' rw_has_input_desc' : '', ' ', (opt_data.dialogHelpText) ? 'rw_has_input_help' : '', ' ', (opt_data.helpImg) ? 'rw_has_input_help_img' : '', '">');
    if (opt_data.type == 'text') {
      output.append('<input type="text" name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : '', '"', (opt_data.name) ? 'id="rw_form_' + soy.$$escapeHtml(opt_data.name) + '"' : '', 'class="', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', '" value="', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '"', (opt_data.disabled) ? 'disabled="disabled"' : '', '/>', (opt_data.inputLabel) ? opt_data.inputLabel : '');
    } else if (opt_data.type == 'textarea') {
      output.append('<textarea name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : '', '"', (opt_data.name) ? 'id="rw_form_' + soy.$$escapeHtml(opt_data.name) + '"' : '', 'class="', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', '"', (opt_data.disabled) ? 'disabled="disabled"' : '', '>', (opt_data.value) ? opt_data.value : '', '</textarea>');
    } else if (opt_data.type == 'button') {
      output.append('<button name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : '', '"', (opt_data.name) ? 'id="rw_form_' + soy.$$escapeHtml(opt_data.name) + '"' : '', 'class="aui-button', (opt_data.cssClass) ? ' ' + soy.$$escapeHtml(opt_data.cssClass) : '', '"', (opt_data.disabled) ? 'disabled="disabled"' : '', '>', (opt_data.value) ? '<span>' + soy.$$escapeHtml(opt_data.value) + '</span>' : '', '</button>');
    } else if (opt_data.type == 'checkbox') {
      output.append('<input type="checkbox" value="true" name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : '', '"', (opt_data.name) ? 'id="rw_form_' + soy.$$escapeHtml(opt_data.name) + '"' : '', 'class="', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', '"', (opt_data.value) ? ' checked="checked" ' : '', (opt_data.disabled) ? 'disabled="disabled"' : '', '/>', (opt_data.inputLabel) ? opt_data.inputLabel : '');
    } else if (opt_data.type == 'info') {
      output.append('<span class="rw_text" >', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '</span>');
    } else if (opt_data.type == 'color') {
      output.append('<span class="rw_hash_contatiner">#</span><input type="text" name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : '', '"', (opt_data.name) ? 'id="rw_form_' + soy.$$escapeHtml(opt_data.name) + '"' : '', 'class="', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', '" value="', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '"', (opt_data.disabled) ? 'disabled="disabled"' : '', 'style="float:left;margin-right:10px;" /><div id="rw_form_', soy.$$escapeHtml(opt_data.name), 'Box" class="rw_color_box"', (opt_data.value) ? 'style="background:#' + soy.$$escapeHtml(opt_data.value) + ';"' : '', '></div>');
    } else if (opt_data.type == 'select') {
      output.append('<select name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : '', '"', (opt_data.name) ? 'id="rw_form_' + soy.$$escapeHtml(opt_data.name) + '"' : '', 'class="', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', '" value="', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '"', (opt_data.disabled) ? 'disabled="disabled"' : '', '>');
      var optionList319 = opt_data.selectValues;
      var optionListLen319 = optionList319.length;
      for (var optionIndex319 = 0; optionIndex319 < optionListLen319; optionIndex319++) {
        var optionData319 = optionList319[optionIndex319];
        output.append('<option value="', soy.$$escapeHtml(optionData319), '" ', (opt_data.value == optionData319) ? 'selected="selected"' : '', '>', (opt_data.selectNames) ? soy.$$escapeHtml(opt_data.selectNames[optionIndex319]) : soy.$$escapeHtml(optionData319), '</option>');
      }
      output.append('</select>');
    } else if (opt_data.type == 'radio') {
      if (! opt_data.selectValues) {
        output.append('<input type="radio" name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : '', '" class="', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', '" value="', (opt_data.value) ? soy.$$escapeHtml(opt_data.value) : '', '"', (opt_data.disabled) ? 'disabled="disabled"' : '', (opt_data.checked) ? 'checked="checked"' : '', '>', (opt_data.inputLabel) ? opt_data.inputLabel : '');
      } else {
        var optionList363 = opt_data.selectValues;
        var optionListLen363 = optionList363.length;
        for (var optionIndex363 = 0; optionIndex363 < optionListLen363; optionIndex363++) {
          var optionData363 = optionList363[optionIndex363];
          output.append('<input type="radio" name="', (opt_data.name) ? soy.$$escapeHtml(opt_data.name) : '', '" class="', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', '" value="', soy.$$escapeHtml(optionData363), '"', (opt_data.disabled) ? 'disabled="disabled"' : '', (opt_data.value == optionData363) ? 'checked="checked"' : '', '>', (opt_data.selectNames) ? soy.$$escapeHtml(opt_data.selectNames[optionIndex363]) : soy.$$escapeHtml(optionData363), '<br/>');
        }
      }
    }
    output.append('<div ', (opt_data.name) ? 'id="rw_form_' + soy.$$escapeHtml(opt_data.name) + '_error"' : '', ' class="rw_error_text"></div>', (opt_data.helpText) ? '<div class="rw_help_text">' + opt_data.helpText + '</div>' : '', '</div></div>');
  }
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Utils.loader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_loader_box', (opt_data.size) ? ' rw_size_' + soy.$$escapeHtml(opt_data.size) : '', (opt_data.bg) ? ' rw_bg_' + soy.$$escapeHtml(opt_data.bg) : '', (opt_data.corners) ? ' rw_corners' : '', ' ', (opt_data.color) ? ' rw_color_' + soy.$$escapeHtml(opt_data.color) : '', '"><div class=\'rw_loader_wrapper\'><div class=\'rw_loader_spinner\'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Utils.topLoader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="rw_top_loader"><div id="rw_top_loader_container">');
  RWJS.Templates.Utils.loader({size: 'medium'}, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Utils.iconButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a ', (opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="rw_icon_button2 ', (opt_data.size) ? 'rw_size_' + soy.$$escapeHtml(opt_data.size) : '', '" ', (opt_data.title) ? 'title="' + soy.$$escapeHtml(opt_data.title) + '"' : '', ' ', (opt_data.href) ? 'href="' + soy.$$escapeHtml(opt_data.href) + '"' : '', '><span class="rw_icon ', soy.$$escapeHtml(opt_data.cssClass), '"></span></a>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Utils.inputErrorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div ', (opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="rw_error_text">', opt_data.message, '</div>');
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
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/utils/templates/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

if (typeof RWJS == 'undefined') { var RWJS = {}; }
if (typeof RWJS.Templates == 'undefined') { RWJS.Templates = {}; }
if (typeof RWJS.Templates.Icons == 'undefined') { RWJS.Templates.Icons = {}; }


RWJS.Templates.Icons.getIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="rw_icon rw_iconfont_', soy.$$escapeHtml(opt_data.icon), (opt_data.cssClass) ? ' ' + soy.$$escapeHtml(opt_data.cssClass) : '', '"></span>');
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
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = 'frontend/_shared/utils/templates/soy/buttons.soy' */
// This file was automatically generated from buttons.soy.
// Please don't edit this file by hand.

if (typeof RWJS == 'undefined') { var RWJS = {}; }
if (typeof RWJS.Templates == 'undefined') { RWJS.Templates = {}; }
if (typeof RWJS.Templates.Buttons == 'undefined') { RWJS.Templates.Buttons = {}; }


RWJS.Templates.Buttons.removableButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="rw_removable_button', (opt_data.asLink) ? ' rw_clickable' : '', '"', (opt_data.dataKey && opt_data.dataValue) ? ' data-' + soy.$$escapeHtml(opt_data.dataKey) + '="' + soy.$$escapeHtml(opt_data.dataValue) + '"' : '', '>', (opt_data.asLink) ? '<span class="rw_link">' + soy.$$escapeHtml(opt_data.label) + '</span>' : soy.$$escapeHtml(opt_data.label), '<span class="rw_remove"></span></a>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Buttons.button = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<button ', (opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' class="aui-button ', (opt_data.cssClass) ? soy.$$escapeHtml(opt_data.cssClass) : '', '" ', (opt_data.href) ? 'href="' + soy.$$escapeHtml(opt_data.href) + '"' : '', ' ', (opt_data.confirm) ? 'onclick="return confirm(\'' + soy.$$escapeHtml(opt_data.confirm) + '\');"' : '', ' ', (opt_data.tooltip) ? 'data-tooltip="' + opt_data.tooltip + '"' : '', ' ', (opt_data.dataConfirm) ? 'data-confirm="' + soy.$$escapeHtml(opt_data.dataConfirm) + '"' : '', '>', (opt_data.icon) ? '<span class="aui-icon aui-icon-small rw_icon rw_iconfont_' + soy.$$escapeHtml(opt_data.icon) + '"></span>' : '', (opt_data.content) ? '<span>' + opt_data.content + '</span>' : '', '</button>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.Buttons.add = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="rw_button ', soy.$$escapeHtml(opt_data.cssClass), '" href="#" data-id="', soy.$$escapeHtml(opt_data.data), '" ', (opt_data.tooltip) ? 'data-tooltip="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '', '><span class="rw_add_gray rw_only_icon"></span></a>');
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
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/globalmenu/templates/soy/global-menu.soy' */
// This file was automatically generated from global-menu.soy.
// Please don't edit this file by hand.

if (typeof RWJS == 'undefined') { var RWJS = {}; }
if (typeof RWJS.Templates == 'undefined') { RWJS.Templates = {}; }
if (typeof RWJS.Templates.GlobalMenu == 'undefined') { RWJS.Templates.GlobalMenu = {}; }


RWJS.Templates.GlobalMenu.container = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="rw_side_menu" class="rw_theme_dark"><div id="rw_side_menu_handle" class="rw_handle"></div><div id="rw_side_menu_container"><ul class="rw_global_menu"></ul><ul><li><a id="rw_search_popup_button"><span class="rw_item_icon rw_iconfont_search"></span></a></li></ul><ul class="rw_application_menu"></ul></div><div class="rw_done_cover"></div></div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.GlobalMenu.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a data-tooltip="', soy.$$escapeHtml(opt_data.title), '" data-dd="', soy.$$escapeHtml(opt_data.key), '-menu-link-dd" class="rw_has_dd rw_tooltip" title="', soy.$$escapeHtml(opt_data.title), '" href="#" id="', soy.$$escapeHtml(opt_data.key), '-menu-link"><span class="rw_item_icon ', soy.$$escapeHtml(opt_data.iconClass), '"></span></a><nav data-owner="', soy.$$escapeHtml(opt_data.key), '-menu-link" class="rw_side_menu_dd" id="', soy.$$escapeHtml(opt_data.key), '-menu-link-dd"><div class="rw_section"><ul class="section-leading first" id="', soy.$$escapeHtml(opt_data.key), '-menu-link-leading"></ul></div></nav></li>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.GlobalMenu.sideMenuLinkTemplate = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<li><a id="rw_custom_links" href="#" title="" class="rw_has_dd rw_tooltip" data-dd="rw_custom_links-dd"><span class="rw_item_icon rw_iconfont_more"></span></a><nav id="rw_custom_links-dd" class="rw_side_menu_dd" data-owner="rw_custom_links"><div class="rw_section"><ul></ul></div></nav></li>\'');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.GlobalMenu.displaySettings = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a id="rw_user_settings_link" href="#" title="', soy.$$escapeHtml("Global Menu configuration"), '" class="rw_has_dd rw_tooltip" data-dd="rw_user_settings_link_dd"><span class="rw_item_icon rw_iconfont_edit"></span></a><nav id="rw_user_settings_link_dd" class="rw_side_menu_dd" data-owner="rw_user_settings_link"><h7 style="border:0px; padding:5px;">', soy.$$escapeHtml("DISPLAY MODE"), ' </h7><div class="rw_section" style="padding:5px; padding-top:15px;">');
  RWJS.Templates.GlobalMenu.dropDown(opt_data, output);
  output.append('</div></nav></li><div class="rw_done_cover"></div></div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.GlobalMenu.dropDown = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t <select name="sideMenuSettings" id="rw_side_menu_settings_dropDown">');
  var menuItemList35 = opt_data.menuItems;
  var menuItemListLen35 = menuItemList35.length;
  for (var menuItemIndex35 = 0; menuItemIndex35 < menuItemListLen35; menuItemIndex35++) {
    var menuItemData35 = menuItemList35[menuItemIndex35];
    output.append('<option value="', soy.$$escapeHtml(menuItemData35.key), '" ', (menuItemData35.selected) ? ' selected="selected"' : '', '>', soy.$$escapeHtml(menuItemData35.text), '</option>');
  }
  output.append('</select>');
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
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/globalmenu/js/global-menu.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Views==="undefined"){RWJS.Views={}}if(typeof RWJS.GlobalMenu==="undefined"){RWJS.GlobalMenu={}}(function(c,d,b,a){RWJS.GlobalMenu.STORAGE_KEY="user.setting.side.menu";RWJS.Views.SideMenu=b.View.extend({$page:undefined,$activeDD:undefined,$activeDDLink:undefined,ddActive:false,closedMode:false,mode:"",SIDE_MENU_WIDTH_LIMIT:1100,MODE_RESPONSIVE:"responsive",MODE_CLOSED:"closed",MODE_OPEN:"open",STORAGE_PREFIX:"undefined.",storage:undefined,events:{},initialize:function(f){if(f!==undefined&&f.$page!==undefined){this.$page=f.$page}var e=c(RWJS.Templates.GlobalMenu.container());this.setElement(e)},render:function(){var e=c(RWJS.Templates.GlobalMenu.container());this.$el.html(e.html());return this.$el},start:function(e){this.storage=RWJS.storage(this.STORAGE_PREFIX);this.initializeUserSettings(this.$el.data("mode"),e);this.bindDDEvents();this.setMode()},setMode:function(){var e=this;if(this.mode===this.MODE_CLOSED){this.activateClosedMode();c(window).off("resize")}else{if(this.mode===this.MODE_OPEN){c("#rw_wrapper").addClass("rw_has_side_menu");if(e.closedMode){e.deactivateClosedMode()}c(window).off("resize")}else{var f=c(window);f.on("resize",function(){if(f.width()>e.SIDE_MENU_WIDTH_LIMIT&&e.closedMode){c("#rw_wrapper").addClass("rw_has_side_menu");e.deactivateClosedMode()}else{if(f.width()<e.SIDE_MENU_WIDTH_LIMIT&&!e.closedMode){e.activateClosedMode()}}});if(f.width()<this.SIDE_MENU_WIDTH_LIMIT&&!this.closedMode){this.activateClosedMode()}else{if(f.width()>this.SIDE_MENU_WIDTH_LIMIT&&this.closedMode){c("#rw_wrapper").addClass("rw_has_side_menu");e.deactivateClosedMode()}}}}this.bindListeners()},initializeUserSettings:function(j,k){var n=this;var l=c("<ul></ul>");var h=c(RWJS.Templates.GlobalMenu.sideMenuLinkTemplate());var e=[];e[0]={text:"Responsive",key:n.MODE_RESPONSIVE};e[1]={text:"Always closed",key:n.MODE_CLOSED};e[2]={text:"Always open",key:n.MODE_OPEN};var m=this.storage.getValue(RWJS.GlobalMenu.STORAGE_KEY+"."+k);if(m){n.mode=m}else{n.mode=j}switch(this.mode){case n.MODE_RESPONSIVE:e[0].selected=true;break;case n.MODE_CLOSED:e[1].selected=true;break;case n.MODE_OPEN:e[2].selected=true;break}var i=c(RWJS.Templates.GlobalMenu.displaySettings({menuItems:e}));c("ul",h).append(i);var f=l.clone().addClass("rw_user_settings_section");f.append(i);c("#rw_side_menu_container",this.$el).append(f);var g=c("#rw_user_settings_link_dd",i);g.click(function(o){o.stopPropagation()});c("#rw_side_menu_settings_dropDown",g).on("change",function(){c("select option:selected").each(function(){n.storage.setValue(RWJS.GlobalMenu.STORAGE_KEY+"."+k,c(this).val());n.mode=c(this).val();n.setMode()});n.hideDD()})},bindDDEvents:function(){var e=this;this.$("a.rw_has_dd").click(function(f){f.preventDefault();if(e.ddActive===false){e.showDD(c(this),true)}}).hover(function(){if(e.$el.data("menu-state")==="active"){e.showDD(c(this))}})},bindListeners:function(){var e=this;this.$("#notifications-anchor").click(function(){e.setActive(c(this))})},initHiddenSideMenu:function(){var e=this;if(this.$el.hasClass("rw_mode_closed")&&!this.$el.data("closed-events-bound")){this.$el.data("closed-events-bound",true);this.$(".rw_handle, #rw_side_menu_container").hover(function(){e.$el.addClass("rw_open")});this.$(".rw_done_cover").on("mousemove",function(){e.$el.removeClass("rw_open");e.hideDD();e.quitKeyable()})}},activateClosedMode:function(){this.closedMode=true;this.$el.removeClass("rw_has_side_menu");this.$el.addClass("rw_mode_closed");c("#rw_wrapper").removeClass("rw_has_side_menu");this.initHiddenSideMenu()},deactivateClosedMode:function(){this.closedMode=false;this.$el.addClass("rw_has_side_menu");this.$el.removeClass("rw_mode_closed");this.$(".rw_done_cover").off("mousemove");this.$(".rw_handle, #rw_side_menu_container").off("hover");this.$el.data("closed-events-bound",false)},showDD:function(f,g){var e=this;if(this.$activeDD!==undefined){this.$activeDD.hide()}var i;this.setActive(f);this.$activeDDLink=f;if(f.data("dd-bound")===undefined){f.data("dd-bound","true");var h=f.parent();i=c("nav",h);i.css("right",80);i.css("top",f.offset().top-this.$el.offset().top+5);this.$el.append(i.show());this.$activeDD=i}else{i=this.$("#"+f.data("dd"));i.show();this.$activeDD=i}if(g){setTimeout(function(){if(e.ddActive===false){e.ddActive=true;c(document).bind("click",RWJS.hideDDOutside)}},100)}this.$el.data("menu-state","active")},hideDD:function(){if(this.$activeDD!==undefined){this.$activeDD.hide();this.resetActive(this.$activeDDLink);this.$el.data("menu-state","");this.ddActive=false;c(document).unbind("click",RWJS.hideDDOutside)}},resetActive:function(e){if(e!==undefined&&!e.hasClass("active")){return}this.$el.find(".active").removeClass("active");this.$el.find(".rw_item_"+this.$el.data("active-item")).addClass("active")},setActive:function(e){this.$el.find(".active").removeClass("active");e.addClass("active")},isActive:function(){if(this.ddActive){return true}if(this.closedMode&&this.$el.hasClass("rw_open")){return true}return !!this.$el.hasClass("rw_key_nav")},close:function(){if(this.ddActive){this.hideDD()}if(this.closedMode&&this.$el.hasClass("rw_open")){this.$el.removeClass("rw_open")}if(this.$el.hasClass("rw_key_nav")){this.quitKeyable()}},quitKeyable:function(){console.error("Override this function instead. Requires local implementation.")}});RWJS.hideDDOutside=function(){console.error("Override this function instead. Requires local implementation.")}})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/categories/templates/soy/category-dropdown.soy' */
// This file was automatically generated from category-dropdown.soy.
// Please don't edit this file by hand.

if (typeof RWJS == 'undefined') { var RWJS = {}; }
if (typeof RWJS.Templates == 'undefined') { RWJS.Templates = {}; }
if (typeof RWJS.Templates.CategoryDropdown == 'undefined') { RWJS.Templates.CategoryDropdown = {}; }


RWJS.Templates.CategoryDropdown.dropdownwrapper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<div id="rw_category_dropdown_wrapper" class="rw_corners"><div id="rw_category_dropdown_container" style="display:none;"><div class="rw_dd_content rw_content_list_size_', soy.$$escapeHtml(opt_data.contentSize), ' ', (opt_data.printedColumnLayout == 'multi_column') ? 'rw_multi_column' : '', ' ', (opt_data.collapsedSubCategories == true) ? 'rw_collapsible' : '', '" >');
  if (opt_data.printedColumnLayout == 'single_column') {
    if (opt_data.categories && opt_data.categories.length == 0) {
      output.append('<ul class="rw_dd_section rw_content_list rw_dd_category_column" style="float: none;" ></ul>');
    } else {
      RWJS.Templates.CategoryDropdown.singleColumn(opt_data, output);
    }
  } else if (opt_data.printedColumnLayout == 'multi_column') {
    RWJS.Templates.CategoryDropdown.multiColumn(opt_data, output);
  }
  output.append('</div>');
  if (opt_data.collapsedSubCategories == true && opt_data.categories.length > 0) {
    RWJS.Templates.CategoryDropdown.expandAllBottomSection(opt_data, output);
  }
  output.append('</div><div id="rw_category_dropdown_loader" class="rw_popup_loader">');
  RWJS.Templates.Utils.loader({size: 'medium'}, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.categoryColumn = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="rw_dd_section rw_content_list rw_dd_category_column" style="float: none;" ></ul>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.singleColumn = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="rw_dd_section" style="width: 100%;">', (opt_data.children && opt_data.children.length > 0) ? ((opt_data.categories && opt_data.categories.length == 0) ? '<ul class="rw_content_list rw_dd_section rw_dd_children" style="float: none;">' : '<ul class="rw_content_list rw_dd_children">') + '</ul>' : '');
  if (opt_data.categories && opt_data.categories.length > 0) {
    var categoryList51 = opt_data.categories;
    var categoryListLen51 = categoryList51.length;
    for (var categoryIndex51 = 0; categoryIndex51 < categoryListLen51; categoryIndex51++) {
      var categoryData51 = categoryList51[categoryIndex51];
      output.append('<div class="rw_dd_category ', (categoryIndex51 > 0 || opt_data.children && opt_data.children.length > 0) ? ' rw_separator' : '', '" id="rw_sub_category_key_', soy.$$escapeHtml(categoryData51.nameKey), '"></div>');
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.multiColumn = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var iLimit62 = opt_data.columnData.maxColumns;
  for (var i62 = 0; i62 < iLimit62; i62++) {
    output.append('<div class="rw_dd_section" id="rw_dd_section_', soy.$$escapeHtml(i62), '">', (opt_data.children && opt_data.children.length > 0) ? (i62 < opt_data.columnData.childrenColumnsCount) ? '<ul class="rw_content_list rw_dd_children"></ul>' : '' : '');
    if (opt_data.categories && opt_data.categories.length > 0) {
      var categoryColumnNbr__soy73 = i62 - opt_data.columnData.childrenColumnsCount;
      if (categoryColumnNbr__soy73 >= 0) {
        var jLimit76 = opt_data.columnData.maxCategoriesInColumn;
        for (var j76 = 0; j76 < jLimit76; j76++) {
          var index__soy77 = categoryColumnNbr__soy73 + j76 * opt_data.columnData.categoryColumnsCount;
          if (index__soy77 < opt_data.categories.length) {
            var category__soy80 = opt_data.categories[index__soy77];
            output.append('<div class="rw_dd_category', (j76 > 0) ? ' rw_separator' : '', '" id="rw_sub_category_key_', soy.$$escapeHtml(category__soy80.nameKey), '"></div>');
          }
        }
      }
    }
    output.append('</div>');
  }
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.empty = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="rw_info rw_empty_dropdown">', soy.$$escapeHtml("There doesn\x27t seem to be anything here"), '</span>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.error = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="rw_info">', soy.$$escapeHtml("An unexpected error has occurred. We apologize for this inconvenience."), '</span>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.notLoggedIn = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="rw_info">', soy.$$escapeHtml("Not logged in"), '</span>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.categoryColumnSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var showLogo__soy102 = opt_data.menuData && opt_data.menuData.showCategoryLogo && opt_data.category.logo && opt_data.category.logo.downloadPath;
  var isLink__soy103 = opt_data.menuData && opt_data.menuData.disabledSubdashboards == false || opt_data.category.link && opt_data.category.link.defaultLink == false;
  if (opt_data.category.hideTitle != true) {
    output.append('<h2', (isLink__soy103) ? ' class="rw_category_title_link"' : '', '>');
    var collapsedMode__soy111 = opt_data.menuData && opt_data.menuData.collapsedSubCategories == true;
    output.append((collapsedMode__soy111 == true) ? '<a class="rw_item_expand"><span></span></a>' : '', (isLink__soy103) ? '<a' : '<div', ' class="rw_sub_category_link', (opt_data.menuData && opt_data.menuData.collapsedSubCategories == true) ? ' rw_has_expand' : '', '"', (opt_data.category.tooltip) ? ' data-tooltip="' + soy.$$escapeHtml(opt_data.category.tooltip) + '"' : '', (opt_data.category.link && opt_data.category.link.url) ? ((isLink__soy103) ? 'href="' + soy.$$escapeHtml(opt_data.category.link.url) + '"' : '') + ((opt_data.category.link.target == '_blank') ? 'target="_blank"' : '') : '', '>', (opt_data.menuData && opt_data.menuData.disabledSubdashboards == false) ? (opt_data.menuData && opt_data.menuData.showCategoryLogo && opt_data.category.logo && opt_data.category.logo.downloadPath) ? '<span class="rw_item_left"><span class="rw_item_logo rw_image_container"><img src="' + soy.$$escapeHtml("/confluence") + soy.$$escapeHtml(opt_data.category.logo.downloadPath) + '" /></span><span class="rw_item_name">' + soy.$$escapeHtml(opt_data.category.name) + '</span>' + ((opt_data.category.link && opt_data.category.link.target == '_blank') ? '<span class="rw_item_icon rw_icon_container_10 rw_target_blank"></span>' : '') + '</span>' : soy.$$escapeHtml(opt_data.category.name) + ((opt_data.category.link && opt_data.category.link.target == '_blank') ? '<span class="rw_item_icon rw_icon_container_10 rw_target_blank"></span>' : '') : soy.$$escapeHtml(opt_data.category.name), (isLink__soy103) ? '</a>' : '</div>', '</h2>');
  }
  output.append((opt_data.canHaveChildren == true) ? '<ul class="rw_content_list"></ul>' : '');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.customCategoryColumnSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  RWJS.Templates.CategoryDropdown.categoryColumnSection({category: opt_data.category, menuData: opt_data.menuData, canHaveChildren: true}, output);
  if (opt_data.category.subCategories && opt_data.category.subCategories.length > 0) {
    var subCategoryList178 = opt_data.category.subCategories;
    var subCategoryListLen178 = subCategoryList178.length;
    for (var subCategoryIndex178 = 0; subCategoryIndex178 < subCategoryListLen178; subCategoryIndex178++) {
      var subCategoryData178 = subCategoryList178[subCategoryIndex178];
      output.append('<div class="rw_dd_category" id="rw_sub_category_key_', soy.$$escapeHtml(subCategoryData178.nameKey), '"></div>');
    }
  }
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.child = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="', soy.$$escapeHtml(opt_data.id), '"><a href="', soy.$$escapeHtml(opt_data.url), '" ', (opt_data.target) ? 'target="_blank"' : '', ' title="', soy.$$escapeHtml(opt_data.content), '">', (opt_data.target) ? '<span class="rw_item_icon_right rw_icon rw_iconfont_new_window"></span>' : '', '<span class="rw_item_icon', (opt_data.leftIconClasses) ? ' ' + soy.$$escapeHtml(opt_data.leftIconClasses) : '', ' ', (opt_data.target) ? 'rw_has_icon_right' : '', '"', (opt_data.leftIconTitle) ? 'title="' + soy.$$escapeHtml(opt_data.leftIconTitle) + '"' : '', '></span><span class="rw_item_content">', soy.$$escapeHtml(opt_data.content), '</span></a></li>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryDropdown.expandAllBottomSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class=\'rw_expand_all_section\'><a class=\'rw_expand_all\' data-allExpanded="', soy.$$escapeHtml(opt_data.allExpanded), '">', (opt_data.allExpanded == true) ? soy.$$escapeHtml("Collapse all") : soy.$$escapeHtml("Expand all"), '</a></div>');
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
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/categories/templates/soy/category-menu.soy' */
// This file was automatically generated from category-menu.soy.
// Please don't edit this file by hand.

if (typeof RWJS == 'undefined') { var RWJS = {}; }
if (typeof RWJS.Templates == 'undefined') { RWJS.Templates = {}; }
if (typeof RWJS.Templates.CategoryMenu == 'undefined') { RWJS.Templates.CategoryMenu = {}; }


RWJS.Templates.CategoryMenu.categoryItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var showLogo__soy3 = opt_data.categoryMenuData.showCategoryLogo && opt_data.category.logo && opt_data.category.logo.downloadPath;
  if (opt_data.categoryMenuData.version == 3) {
    output.append('<li id="rw_category_key_', soy.$$escapeHtml(opt_data.category.nameKey), '" data-name-key="', soy.$$escapeHtml(opt_data.category.nameKey), '"', (opt_data.category.tooltip) ? ' data-tooltip="' + soy.$$escapeHtml(opt_data.category.tooltip) + '"' : '', '><a>', (showLogo__soy3) ? '<span class="rw_item_logo">' + ((showLogo__soy3) ? '<img src="' + soy.$$escapeHtml("/confluence") + soy.$$escapeHtml(opt_data.category.logo.downloadPath) + '" />' : '') + '</span>' : '', '<span class="rw_item_name">', soy.$$escapeHtml(opt_data.category.name), '</span>', (opt_data.category.link && opt_data.category.link.target == '_blank') ? '<span class="rw_item_icon rw_target_blank rw_icon rw_iconfont_new_window"></span>' : (! opt_data.categoryMenuData.dropDownDisabled) ? '<span class="rw_item_dd rw_dropdown_btn"></span>' : '', '</a></li>');
  } else {
    RWJS.Templates.CategoryMenu.categoryItemLegacy({category: opt_data.category, categoryMenuData: opt_data.categoryMenuData, showLogo: showLogo__soy3}, output);
  }
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryMenu.categoryItemLegacy = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="rw_category_key_', soy.$$escapeHtml(opt_data.category.nameKey), '" data-name-key="', soy.$$escapeHtml(opt_data.category.nameKey), '"', (opt_data.category.tooltip) ? ' data-tooltip="' + soy.$$escapeHtml(opt_data.category.tooltip) + '"' : '', '><a', (opt_data.showLogo) ? ' class="rw_has_logo"' : '', '><!-- rw_item_left & rw_item_right is deprecated since RWOT 3.3 --><span class="rw_item_left"><span class="rw_item_logo', (opt_data.showLogo) ? ' rw_image_container' : '', '">', (opt_data.showLogo) ? '<img src="' + soy.$$escapeHtml("/confluence") + soy.$$escapeHtml(opt_data.category.logo.downloadPath) + '" />' : '', '</span><span class="rw_item_name">', soy.$$escapeHtml(opt_data.category.name), '</span><span class="rw_item_icon', (opt_data.category.link && opt_data.category.link.target == '_blank') ? ' rw_icon_container_10 rw_target_blank' : (! opt_data.categoryMenuData.dropDownDisabled) ? ' rw_icon_container_16 rw_dropdown_btn' : '', '"></span></span><span class="rw_item_right"></span></a></li>');
  return opt_sb ? '' : output.toString();
};


RWJS.Templates.CategoryMenu.scrollButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="rw_category_menu_', soy.$$escapeHtml(opt_data.orientation), '_container" style="display:none;"><a id="rw_category_menu_', soy.$$escapeHtml(opt_data.orientation), '_button"></a></div>');
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
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/categories/js/models/category-children-model.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Models==="undefined"){RWJS.Models={}}(function(b,c,a){RWJS.Models.CategoryChild=a.Model.extend({namedAttributes:{key:"string",title:"string",position:"number",type:"string",categoryKey:"string",url:"string"}});RWJS.Models.CategoryChildren=c.Collection.extend({model:RWJS.Models.CategoryChild})})(RWJS.$,RWJS.Backbone,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/categories/js/models/category-model.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Models==="undefined"){RWJS.Models={}}(function(b,c,a){RWJS.Models.Category=a.Model.extend({idAttribute:"nameKey",namedAttributes:{name:"string",nameKey:"string",position:"number",parentKey:"string",type:"string",link:"object",tooltip:"string",hideTitle:"boolean",customOrder:"boolean",hasUninitializedPermissions:"boolean",canEdit:"boolean",logo:"object",design:"object",permissions:"object",designKey:"string",designType:"string",themeId:"number"}});RWJS.Models.Categories=a.Collection.extend({model:RWJS.Models.Category})})(RWJS.$,RWJS.Backbone,RWJS.Brace);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/categories/js/models/custom-category-model.js' */
if(typeof RWJS==="undefined"){var RWJS={}}if(typeof RWJS.Models==="undefined"){RWJS.Models={}}(function(){RWJS.Models.CustomCategory=RWJS.Models.Category.extend({namedAttributes:{subCategories:RWJS.Models.Categories,children:RWJS.Models.CategoryChildren},initialize:function(a){}})})();
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/categories/js/views/category-children-view.js' */
if(typeof RWJS==="undefined"){RWJS={}}if(typeof RWJS.Views==="undefined"){RWJS.Views={}}(function(c,d,b,a){RWJS.Views.CategoryChildrenView=d.View.extend({templateData:undefined,initialize:function(){},render:function(){var e=this;this.$el.html("");this.model.each(function(h,g){var f=c(RWJS.Templates.CategoryDropdown.child(a.extend({content:h.get("title"),id:"rw_"+h.get("type")+"_key_"+h.get("key"),url:h.get("url"),target:h.get("target")},e.templateData)));if(g%2!==0){f.addClass("rw_alternating")}e.addChildInfoToTemplate(h,f);e.$el.append(f)})},addChildInfoToTemplate:function(f,e){},close:function(){this.stopListening();this.remove()}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/categories/js/views/category-column-views.js' */
if(typeof RWJS==="undefined"){RWJS={}}if(typeof RWJS.Views==="undefined"){RWJS.Views={}}(function(c,d,b,a){RWJS.Views.CategoryColumnView=d.View.extend({templateData:undefined,events:{"click .rw_item_expand, .rw_sub_category_link.rw_has_expand":"toggleCategory"},initialize:function(e){this.templateData={};if(e){if(e.categoryMenuData){this.templateData.menuData=e.categoryMenuData}if(e.hasOwnProperty("allExpanded")){this.allExpanded=e.allExpanded}}this.initSubscription()},initSubscription:function(){var f=this;var e=function(g,i,h){if(!i.hasTriggered){i.hasTriggered=true;if(!g.$el.hasClass("rw_dd_category_expanded")||(f.cid===g.cid&&!f.$el.hasClass("rw_dd_category_expanded"))){RWJS.toggleSubCategory(g.$el);g.render({view:g,ddView:g.ddView,loader:h})}else{if(i.toJSON){i=i.toJSON()}f.triggerPublicEvent({view:g,category:i})}}};RWJS.PubSub.on("category-collapse:open",e)},render:function(i){var e=this;var h=this.model.toJSON();h.title=this.model.get("name");var f=c(RWJS.Templates.CategoryDropdown.categoryColumnSection(a.extend({category:h,canHaveChildren:false,hideTitle:e.model.get("hideTitle")},e.templateData)));this.$el.append(f);var g;if(this.templateData){g=this.templateData.menuData}this.appendExpandCollapse(g);return this.$el},appendExpandCollapse:function(e){if(!this.model.get("hideTitle")){if(e&&e.collapsedSubCategories){if(this.allExpanded===true||this.$el.data("loaded")){this.$el.addClass("rw_dd_category_expanded");this.$el.removeClass("rw_dd_category_collapsed")}else{this.$el.addClass("rw_dd_category_collapsed");this.$el.removeClass("rw_dd_category_expanded")}}}},triggerPublicEvent:function(f){var e=undefined;if(f.ddView){e=f.ddView}else{e=f.view}if(e.model.get("parentKey")){RWJS.PubSub.trigger("category:inject-users",e,e.model);AJS.trigger("rw-categories:category-opened",[e.$el,e.model.toJSON()])}},toggleCategory:function(h){if(c(h.currentTarget).attr("href")!==undefined){return true}var f=this;if(!this.$el.data("loaded")&&!this.allExpanded){var g=c(RWJS.Templates.Utils.loader({size:"medium"}));this.$el.append(g);if(this.model.toggleCategory){this.model.toggleCategory({success:function(){f.$el.data("loaded",true)}},!f.templateData.menuData.collapsedSubCategories,f.templateData.menuData.excludeArchivedSpaces).always(function(){RWJS.PubSub.trigger("category-collapse:open",f,f.model,g)})}else{console.error("You need to implement a toggleCategory funciton in your category model if you want to be able to collapse/expand.")}}else{RWJS.toggleSubCategory(this.$el);if(this.$el.hasClass("rw_dd_category_expanded")){RWJS.PubSub.trigger("category-collapse:open",f,f.model)}else{RWJS.PubSub.trigger("category-collapse:closed",f,f.model)}}return false}});RWJS.Views.CustomCategoryColumnView=RWJS.Views.CategoryColumnView.extend({childrenView:undefined,categoryViews:undefined,categoryMenuData:undefined,ddView:undefined,initiatedCategoryViews:[],initiatedChildViews:[],initialize:function(e){RWJS.Views.CategoryColumnView.prototype.initialize.call(this,e);if(!this.templateData){this.templateData={}}this.templateData.canHaveChildren=true;if(e){if(e.childrenView){this.childrenView=e.childrenView}if(e.categoryViews){this.categoryViews=e.categoryViews}if(e.categoryMenuData){this.categoryMenuData=e.categoryMenuData}if(e.ddView){this.ddView=e.ddView}}this.listenTo(this.model,"sync",this.render)},close:function(){this.closeInitiatedViews();this.unbind();this.stopListening();this.remove()},closeInitiatedViews:function(){var e=this;while(this.initiatedCategoryViews.length){var f=this.initiatedCategoryViews.shift();if(f.cid!=e.cid&&f.close){f.close()}else{f.stopListening()}}while(this.initiatedChildViews.length){var g=this.initiatedChildViews.shift();if(g.cid!=e.cid&&g.close){g.close()}}},render:function(){this.$el.html("");var i=RWJS.Templates.CategoryDropdown.customCategoryColumnSection({category:this.model.toJSON(),menuData:this.categoryMenuData});this.$el.append(i);this.appendExpandCollapse(this.categoryMenuData);var h=this.model.get("children");var j=this.model.get("subCategories");var f=(!h||h.isEmpty())&&(!j||j.isEmpty());if(f){this.$el.append(RWJS.Templates.CategoryDropdown.empty())}else{if(f&&this.categoryMenuData&&this.categoryMenuData.collapsedSubCategories&&this.$el.hasClass("rw_dd_category_expanded")){this.$el.append(RWJS.Templates.CategoryDropdown.empty())}}if(h&&this.childrenView){var g=new this.childrenView({el:this.$("ul.rw_content_list"),model:h});this.initiatedChildViews.push(g);g.render()}if(j&&!j.isEmpty()){var e=this;j.each(function(m){var k=e.$("#rw_sub_category_key_"+m.get("nameKey"));var l=e.categoryViews[m.get("type")];if(!l){console.error("Unrecognized type in type->view mapping, attempting to create default view","Type was:"+m.get("type"));l=RWJS.Views.CategoryColumnView}var n=new l({model:m,el:k,childrenView:e.childrenView,categoryViews:e.categoryViews,categoryMenuData:e.categoryMenuData,allExpanded:e.allExpanded});e.initiatedCategoryViews.push(n);n.render({ddView:e.ddView})})}return this.$el}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/categories/js/views/category-dropdown-view.js' */
if(typeof RWJS==="undefined"){RWJS={}}if(typeof RWJS.Views==="undefined"){RWJS.Views={}}(function(f,h,g,i){var d="rw_category_key_";var c;var b="single_column";var a="multi_column";var e="dynamic_column";RWJS.Views.CategoryDropDownView=h.View.extend({MIN_COLUMN_WIDTH:340,SINGLE_COLUMN_WIDTH:440,USER_CATEGORY_WIDTH:180,DROPDOWN_SPACING:20,layout:undefined,printedColumnLayout:undefined,allExpanded:false,open:false,childrenColumnView:undefined,categoryViews:undefined,$mainWrapper:undefined,$categoryMenu:undefined,$dropDownContent:undefined,initiatedCategoryViews:[],initiatedChildViews:[],mainWrapperOffset:undefined,categoryMenuOffset:undefined,linkOffset:undefined,categoryKey:undefined,children:undefined,categories:undefined,isEmpty:false,events:{click:"clickHandler","click .rw_expand_all":"toggleAll"},initialize:function(j){this.applyArguments(j);this.calculateOffsets();this.calculateWidth();this.$el.css("top",this.categoryMenuOffset.top+this.$categoryMenu.height()-this.mainWrapperOffset.top);this.listenTo(this.model,"sync",this.render);this.listenTo(this.model,"error",this.errorMessage);this.$el.css("display","table")},errorMessage:function(k,l,j){this.hideLoader();if(l&&l.status===401){this.$("#rw_category_dropdown_container").html(RWJS.Templates.CategoryDropdown.notLoggedIn()).show()}else{this.$("#rw_category_dropdown_container").html(RWJS.Templates.CategoryDropdown.error()).show()}},close:function(){this.closeInitiatedViews();this.unbind();this.stopListening();this.remove();this.open=false;return this.categoryKey},closeInitiatedViews:function(){var j=this;while(this.initiatedCategoryViews.length){var k=this.initiatedCategoryViews.shift();if(k.cid!=j.cid&&k.close){k.close()}else{k.stopListening()}}while(this.initiatedChildViews.length){var l=this.initiatedChildViews.shift();if(l.cid!=j.cid&&l.close){l.close()}}},applyArguments:function(j){if(!j||!j.mainWrapper||!j.categoryMenu||!j.childrenColumnView||!j.categoryViews||!j.categoryMenuData){throw"A dropdownView requires, in addition to a model, at least the following arguments:\nmainWrapper - Usually #page, used for width/offset calculations\ncategoryMenu - The category navigation menu, used for dropdown positioning. Usually #rw_category_menu\nchildrenColumnView - Function/class reference to view extending RWJS.Views.CategoryChildrenView, or CategoryChildrenView if no special processing is needed.\ncategoryViews - Function/class reference to view extending RWJS.Views.CategoryColumnView, or CategoryColumnView itself if no extended behaviour is needed\ncategoryMenuData - Contains layout params and settings for the category menu. For confluence available in #rw_category_menu_parameters"}if(j){this.$mainWrapper=j.mainWrapper;this.$categoryMenu=j.categoryMenu;this.childrenColumnView=j.childrenColumnView;this.categoryViews=j.categoryViews;this.categoryMenuData=j.categoryMenuData;if(j.categoryMenuData.dropDownlayout){this.layout=j.categoryMenuData.dropDownlayout}else{this.layout=e}if(j.categoryMenuData.collapsedSubCategories){this.allExpanded=false}if(j.newMinWidth){this.setMinWidth(j.newMinWidth)}this.setCategoryAttributes()}},setCategoryAttributes:function(){c=this.categoryKey=this.model.get("nameKey");if(this.model.attributes.children){this.children=this.model.get("children")}else{this.children=new RWJS.Models.CategoryChildren()}if(this.model.attributes.subCategories){this.categories=this.model.get("subCategories")}else{this.categories=new RWJS.Models.Categories()}},clickHandler:function(j){if(f(j.target).closest("a").length>0){this.linkClicked=true}else{return false}},toggleAll:function(l){this.allExpanded=!this.allExpanded;if(!this.$el.data("loaded")){this.showLoader();var j=this;if(this.model.toggleCategory){this.model.toggleCategory({success:function(){j.closeInitiatedViews();j.$el.data("loaded",true)}},true,this.categoryMenuData.excludeArchivedSpaces)}else{console.error("You need to implement a toggleCategory function in your category model if you want to be able to collapse/expand.")}}else{var k=!this.allExpanded?this.$(".rw_dd_category_expanded"):this.$(".rw_dd_category_collapsed");RWJS.toggleSubCategory(k);this.$(".rw_expand_all_section").html(f(RWJS.Templates.CategoryDropdown.expandAllBottomSection({allExpanded:this.allExpanded})).html())}return false},render:function(){this.setCategoryAttributes();RWJS.PubSub.off("category-collapse:open");var k=this.prepareDropDownColumns(this.children,this.categories);if(this.printedColumnLayout===a){k=this.addMultiColumnData(k)}var l=f(RWJS.Templates.CategoryDropdown.dropdownwrapper({printedColumnLayout:this.printedColumnLayout,columnData:k,children:this.children.toJSON(),categories:this.categories.toJSON(),collapsedSubCategories:this.categoryMenuData.collapsedSubCategories,allExpanded:this.allExpanded,contentSize:this.categoryMenuData.dropDownContentSize}));this.$el.html(f(l).html());if(this.categories.isEmpty()&&this.children.isEmpty()){this.isEmpty=true}var j=this.printSingleCategoryColumn();if(!j){this.printChildren(k);this.printCategories(k)}this.hideLoader();this.$dropDownContent=this.$("#rw_category_dropdown_container .rw_popup_content");RWJS.PubSub.trigger("category:dropdown-open",this.model,this.$el);this.open=true;return this},addMultiColumnData:function(j){var l=this.children.isEmpty()?0:1;if(this.categories.length<j.maxColumns){if(!this.children.isEmpty()){l=1;if(this.children.length>5){l=j.maxColumns-this.categories.length}}}j.childrenColumnsCount=l;var k=j.maxColumns-l;var m=Math.ceil(this.categories.length/k);if(l>0){j.maxItemsInColumn=Math.ceil(this.children.length/l)}j.categoryColumnsCount=k;j.maxCategoriesInColumn=m;return j},showLoader:function(){this.$("#rw_category_dropdown_loader").show();this.$("#rw_category_dropdown_container").hide()},hideLoader:function(){this.$("#rw_category_dropdown_container").show();this.$("#rw_category_dropdown_loader").hide()},printChildren:function(l){var k=this.children;if(!k.isEmpty()){var j=this;this.$(".rw_dd_children").each(function(o){var q=o*l.maxItemsInColumn;var n=k.slice(q,q+l.maxItemsInColumn);var m=new RWJS.Models.CategoryChildren(n);var p=new j.childrenColumnView({el:f(this),model:m});j.initiatedChildViews.push(p);p.render()})}},printCategories:function(l){var k=this.categories;var j=this;if(!k.isEmpty()){k.each(function(p){var n=j.$("#rw_sub_category_key_"+p.get("nameKey"));var o=j.categoryViews[p.get("type")];if(!o){console.error("Unrecognized type in type->view mapping, attempting to create default view","Type was:"+p.get("type"));o=RWJS.Views.CategoryColumnView}var m=new o({model:p,el:n,childrenView:j.childrenColumnView,categoryViews:j.categoryViews,categoryMenuData:j.categoryMenuData,allExpanded:j.allExpanded,ddView:j});j.initiatedCategoryViews.push(m);m.render({ddView:j})})}},printSingleCategoryColumn:function(){var k=this;var m=this.$(".rw_dd_category_column");if(m.length>0){var l=k.categoryViews[this.model.get("type")];if(!l){console.error("Unrecognized type in type->view mapping, attempting to create default view","Type was:"+this.model.get("type"));l=RWJS.Views.CategoryColumnView}this.model.set("hideTitle",true);var j=new l({model:this.model,el:m,childrenView:k.childrenColumnView,categoryViews:k.categoryViews,categoryMenuData:k.categoryMenuData,ddView:k});this.initiatedCategoryViews.push(j);j.render({ddView:k})}return m.length>0},prepareDropDownColumns:function(n,m){var l,o,k;var j=this.calculateMaxColumns();if(m.isEmpty()){if(this.layout==a||this.layout==e){if(n.length<6){this.printedColumnLayout=b;l=n.length}else{if(n.length<17){if(this.layout==e){this.setDynamicColumn(2)}o=this.calculateColumnWidth(2);l=Math.ceil(n.length/2);k=2;this.printedColumnLayout=a}else{if(this.layout==e){this.setMultiColumn()}k=j;l=Math.ceil(n.length/k);o=this.calculateColumnWidth(k);this.printedColumnLayout=a}}}else{l=n.length;this.printedColumnLayout=b}}else{l=n.length;k=0;if(!n.isEmpty()){k++}if(m.length+k>j){k=j}else{k=k+m.length}if(this.layout==e){if(k===1){this.printedColumnLayout=b}else{if(k>1&&k<4){this.setDynamicColumn(k);this.printedColumnLayout=a}else{this.setMultiColumn();this.printedColumnLayout=a}}}else{this.printedColumnLayout=this.layout}}if(this.printedColumnLayout!==b){o=this.calculateColumnWidth(k)}return{columnWidth:o,maxColumns:k,maxItemsInColumn:l}},calculateOffsets:function(){var j=f("#"+d+this.categoryKey+" a:first",this.$categoryMenu);this.mainWrapperOffset=this.$mainWrapper.offset();this.categoryMenuOffset=f("ul",this.$categoryMenu).offset();this.linkOffset=j.offset()},calculateWidth:function(){if(this.layout==a){this.setMultiColumn()}else{if(this.layout==b){this.setSingleColumn()}else{this.layout=e;this.setSingleColumn()}}},calculateDropDownPosition:function(){var k=this.$mainWrapper.width()+this.mainWrapperOffset.left;var j=this.linkOffset.left+this.$el.width()-20;if(this.$mainWrapper.width()<this.$el.width()){this.setMultiColumn()}else{if(j>k){this.$el.css("left",k-this.$el.width()-this.DROPDOWN_SPACING)}else{this.$el.css("left",this.linkOffset.left-20)}}},calculateColumnWidth:function(l){var j=this.$el.width()-40;var k=j;if(l===1){k=j}else{if(l>=2&&l<16){k=(j-(l-1)*30)/l}else{k=(j-450)/16}}return k-1},calculateMaxColumns:function(){return Math.floor(this.$mainWrapper.width()/(this.MIN_COLUMN_WIDTH+30))},setMultiColumn:function(){if(this.mainWrapperOffset.left===0){this.$el.css("left",this.mainWrapperOffset.left+this.DROPDOWN_SPACING);this.$el.css("width",this.$mainWrapper.width()-(this.DROPDOWN_SPACING*2))}else{this.$el.css("left",this.mainWrapperOffset.left);this.$el.css("width",this.$mainWrapper.width())}},setSingleColumn:function(){this.$el.css("width",this.SINGLE_COLUMN_WIDTH);this.calculateDropDownPosition()},setDynamicColumn:function(j){this.$el.css("left",this.mainWrapperOffset.left);this.$el.css("width",(j*this.MIN_COLUMN_WIDTH)+((j-1)*20));this.calculateDropDownPosition()},setMinWidth:function(j){this.MIN_COLUMN_WIDTH=j;this.SINGLE_COLUMN_WIDTH=this.MIN_COLUMN_WIDTH+100},isOpen:function(){return this.open}})})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
;try {
/* module-key = 'com.refinedwiki.confluence.plugins.theme.original:shared-batch', location = '/frontend/categories/js/views/category-menu-view.js' */
if(typeof RWJS==="undefined"){RWJS={}}if(typeof RWJS.Views==="undefined"){RWJS.Views={}}(function(e,f,c,b){var d="rw_category_key_";var a;RWJS.Views.CategoryMenu=f.View.extend({categoryMenuData:{},categoryViews:undefined,childrenColumnView:undefined,dropdownView:undefined,totalChildrenOuterWidth:0,isScrolling:false,rightScrollButtonLoaded:false,leftScrollButtonLoaded:false,mainWrapper:undefined,ddCallback:undefined,events:{"click .rw_dropdown_btn":"showDropdown","click a":"categoryClicked","hover a":"categoryHovered","scroll #rw_category_menu_scroll_container":"scrollHandler","click a#rw_category_menu_right_button":"scrollRight","click a#rw_category_menu_left_button":"scrollLeft"},initialize:function(g){if(g){if(g.categoryMenuData){this.categoryMenuData=g.categoryMenuData}if(g.categoryViews){this.categoryViews=g.categoryViews}if(g.mainWrapper){this.mainWrapper=g.mainWrapper}if(g.childrenColumnView){this.childrenColumnView=g.childrenColumnView}}a=this},render:function(){var g=this;var h=this.$("ul");this.totalChildrenOuterWidth=g.getRoundedElementWidth(this.$("#rw_dashboard_link")[0]);this.model.each(function(i){var j=e(RWJS.Templates.CategoryMenu.categoryItem({category:i.toJSON(),categoryMenuData:g.categoryMenuData}));if(i.get("nameKey")===g.categoryMenuData.activeCategoryKey){j.addClass("rw_active")}if(!i.get("link")){console.error("ERROR - ENSURE LINK IS PROVIDED SERVERSIDE",i)}if(!i.get("type")||i.get("type")==="category"){var l=i.get("link");var k=false;if(l&&l.target==="_blank"){k=true}if(!l.defaultLink){e("a",j).addClass("rw_custom_url")}RWJS.bindLink(e("a",j),i.get("link").url,k,g.$el.closest("#rw_category_menu"))}h.append(j);g.totalChildrenOuterWidth+=g.getRoundedElementWidth(j[0])});this.scrollableCategories()},categoryClicked:function(i){if(this.categoryMenuData.disabledDashboards&&!e(i.currentTarget).hasClass("rw_custom_url")){var g=e(i.currentTarget).closest("li");var h=g.attr("data-name-key");if(h!==undefined){this.showDropdown(i);return false}}return true},categoryHovered:function(i){if(this.categoryMenuData.disabledDashboards&&this.dropdownView&&this.dropdownView.isOpen()&&e(i.currentTarget).attr("target")!="_blank"){var g=e(i.currentTarget).closest("li");var h=g.attr("data-name-key");if(h&&this.dropdownView.categoryKey!==h){this.showDropdown(i)}}},showDropdown:function(l,n,p,o){if(this.categoryMenuData.dropDownDisabled!==true){var i=e("#rw_category_menu");var k=e(l.currentTarget).closest("li");var j=k.attr("data-name-key");if(n){k=e("#rw_category_key_"+n);if(k.length===0){k=e("#rw_sub_category_key_"+n)}j=n}var g=this.model.get(j);if(!g){g=RWJS.findCategory(this.model,j)}e("a.rw_category_dropdown_visible",i).removeClass("rw_category_dropdown_visible rw_corners_top");e("a:first",k).addClass("rw_category_dropdown_visible rw_corners_top");if(this.dropdownView&&this.dropdownView.isOpen()){this.dropdownView.close();RWJS.PubSub.trigger("category:dropdown-closed",this.dropdownView,g)}var m=e(RWJS.Templates.CategoryDropdown.dropdownwrapper({}));m.hide();this.mainWrapper.append(m);this.dropdownView=new RWJS.Views.CategoryDropDownView({model:g,mainWrapper:this.mainWrapper,el:m,categoryMenu:i,childrenColumnView:this.childrenColumnView,categoryViews:this.categoryViews,categoryMenuData:this.categoryMenuData,newMinWidth:this.newMinWidth});var h=p||!this.categoryMenuData.collapsedSubCategories;g.fetch({data:{"include-children":true,recursive:h,"exclude-links":false,simpleVersion:false,"exclude-archived-spaces":this.categoryMenuData.excludeArchivedSpaces}}).always(b.bind(function(){if(this.ddCallback){this.ddCallback(this.dropdownView)}if(p&&this.categoryMenuData.collapsedSubCategories){this.dropdownView.$el.data("loaded",true);this.dropdownView.toggleAll()}if(o){o(this.dropdownView.$el,g.toJSON())}},this))}return false},hideDropdown:function(){var g=e("#rw_category_menu");e("a.rw_category_dropdown_visible",g).removeClass("rw_category_dropdown_visible rw_corners_top");if(this.dropdownView){return this.dropdownView.close()}return},scrollableCategories:function(){var h=e("#rw_category_menu_scroll_container");var g=e("#rw_category_menu");if(h.length>0){h.height(g.height()+50);e("ul",g).width(this.totalChildrenOuterWidth);h.scroll(b.bind(this.scrollHandler,this));e(window).resize(b.bind(this.scrollHandler,this));this.scrollHandler();this.scrollToActiveItem()}},scrollHandler:function(k){var j=e("#rw_category_menu_scroll_container");var g=e("#rw_category_menu");var h=this.scrollRightButton(j,g);var i=this.scrollLeftButton(j,g);this.isScrolling=h||i;e("#rw_category_dropdown_wrapper").remove();e("a.rw_category_dropdown_visible",g).blur();e("a.rw_category_dropdown_visible",g).removeClass("rw_category_dropdown_visible rw_corners_top")},scrollRightButton:function(i,h){var k=e(RWJS.Templates.CategoryMenu.scrollButton({orientation:"right"}));if(e("#rw_category_menu_right_container").length>0){k=e("#rw_category_menu_right_container")}var g=e("ul",h).outerWidth(true)-i.outerWidth(true);var j=i[0].scrollWidth-i[0].clientWidth;if(g>0&&i.scrollLeft()<j){if(!this.rightScrollButtonLoaded){this.appendScrollButton(h,k,i,"margin-right");this.rightScrollButtonLoaded=true}else{k.fadeIn(300)}return true}else{if(this.rightScrollButtonLoaded){k.fadeOut(300)}}return false},scrollLeftButton:function(h,g){var i=e(RWJS.Templates.CategoryMenu.scrollButton({orientation:"left"}));if(e("#rw_category_menu_left_container").length>0){i=e("#rw_category_menu_left_container")}if(h.scrollLeft()>0){if(!this.leftScrollButtonLoaded){this.appendScrollButton(g,i,h,"margin-left");this.leftScrollButtonLoaded=true}else{i.fadeIn(300)}return true}else{if(this.leftScrollButtonLoaded){i.fadeOut(300)}}return false},appendScrollButton:function(g,i,h,j){g.prepend(i);i.height(g.height());h.css(j,"25px");i.fadeIn(300)},scrollRight:function(){var g=e("#rw_category_menu_scroll_container");var h=g.width()>400?400:g.width();g.animate({scrollLeft:"+="+h+"px"},200)},scrollLeft:function(){var g=e("#rw_category_menu_scroll_container");var h=g.width()>400?400:g.width();g.animate({scrollLeft:"-="+h+"px"},200)},scrollToActiveItem:function(){var g=e("#rw_category_menu");var h=e("#rw_category_menu_scroll_container");if(this.isScrolling){var i=this.getScrollPositionForItem(e(".rw_active",g),h);if(i>0){h.animate({scrollLeft:(i+100)},0)}}},getScrollPositionForItem:function(h,g){if(h.length===0){return 0}else{return(h.offset().left+h.width())-(g.offset().left+g.width())}},setMinWidth:function(g){this.newMinWidth=g},getRoundedElementWidth:function(g){if(g===undefined){return 0}var h=g.getBoundingClientRect().width+parseInt(e(g).css("margin-left"))+parseInt(e(g).css("margin-right"));return Math.ceil(h)}});RWJS.findCategory=function(h,i){if(!h||h.isEmpty()){return}var j=h.get(i);if(j){return j}else{var g;h.each(function(k){if(!g&&k.attributes.hasOwnProperty("subCategories")){g=RWJS.findCategory(k.get("subCategories"),i)}});return g}};RWJS.toggleSubCategory=function(g){g.toggleClass("rw_dd_category_collapsed");g.toggleClass("rw_dd_category_expanded")};RWJS.showCategory=function(g,h,i){if(a){a.showDropdown({},g,h,i)}};RWJS.hideCategory=function(){var g;if(a){g=a.hideDropdown()}return d+g}})(RWJS.$,RWJS.Backbone,RWJS.Brace,RWJS._);
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}

;
