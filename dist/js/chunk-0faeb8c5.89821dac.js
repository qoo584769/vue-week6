(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0faeb8c5"],{"0cb2":function(e,t,n){var r=n("7b0b"),c=Math.floor,a="".replace,i=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,u,l,s){var f=n+e.length,d=u.length,p=o;return void 0!==l&&(l=r(l),p=i),a.call(s,p,(function(r,a){var i;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(f);case"<":i=l[a.slice(1,-1)];break;default:var o=+a;if(0===o)return r;if(o>d){var s=c(o/10);return 0===s?r:s<=d?void 0===u[s-1]?a.charAt(1):u[s-1]+a.charAt(1):r}i=u[o-1]}return void 0===i?"":i}))}},"14c3":function(e,t,n){var r=n("c6b6"),c=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var a=n.call(e,t);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return c.call(e,t)}},5319:function(e,t,n){"use strict";var r=n("d784"),c=n("825a"),a=n("50c4"),i=n("a691"),o=n("1d80"),u=n("8aa5"),l=n("0cb2"),s=n("14c3"),f=Math.max,d=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var v=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,h=v?"$":"$0";return[function(n,r){var c=o(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,c,r):t.call(String(c),n,r)},function(e,r){if(!v&&g||"string"===typeof r&&-1===r.indexOf(h)){var o=n(t,e,this,r);if(o.done)return o.value}var x=c(e),b=String(this),E="function"===typeof r;E||(r=String(r));var m=x.global;if(m){var O=x.unicode;x.lastIndex=0}var R=[];while(1){var y=s(x,b);if(null===y)break;if(R.push(y),!m)break;var I=String(y[0]);""===I&&(x.lastIndex=u(b,a(x.lastIndex),O))}for(var S="",_=0,$=0;$<R.length;$++){y=R[$];for(var j=String(y[0]),A=f(d(i(y.index),b.length),0),T=[],w=1;w<y.length;w++)T.push(p(y[w]));var P=y.groups;if(E){var k=[j].concat(T,A,b);void 0!==P&&k.push(P);var U=String(r.apply(void 0,k))}else U=l(j,b,A,T,P,r);A>=_&&(S+=b.slice(_,A)+U,_=A+j.length)}return S+b.slice(_)}]}))},6567:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),c=Object(r["L"])("data-v-164c7f9e");Object(r["v"])("data-v-164c7f9e");var a=Object(r["f"])(" 後台 "),i=Object(r["f"])("後台產品列表"),o=Object(r["f"])("後台訂單");Object(r["t"])();var u=c((function(e,t,n,u,l,s){var f=Object(r["z"])("router-link"),d=Object(r["z"])("router-view");return Object(r["s"])(),Object(r["d"])("div",null,[a,Object(r["g"])(f,{to:{name:"product-list"},class:"btn btn-primary m-2"},{default:c((function(){return[i]})),_:1}),Object(r["g"])(f,{to:{name:"AdminOrder"},class:"btn btn-primary m-2"},{default:c((function(){return[o]})),_:1}),Object(r["g"])(d)])})),l=(n("ac1f"),n("5319"),n("5c40")),s=n("bc3a"),f=n.n(s),d=n("6c02"),p={setup:function(){var e=Object(d["d"])(),t=function(){var t=document.cookie.replace(/(?:(?:^|.*;\s*)henToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");console.log(t),f.a.defaults.headers.common.Authorization=t,f.a.post("".concat("https://vue3-course-api.hexschool.io","/api/user/check")).then((function(t){t.data.success?e.push({name:"product-list"}):(alert(t.data.message),e.push({name:"login"}))})).catch((function(e){alert(e.message)}))};Object(l["w"])((function(){t()}))}};n("f324");p.render=u,p.__scopeId="data-v-164c7f9e";t["default"]=p},7483:function(e,t,n){},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),c=n("9f7f"),a=n("5692"),i=RegExp.prototype.exec,o=a("native-string-replace",String.prototype.replace),u=i,l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),s=c.UNSUPPORTED_Y||c.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=l||f||s;d&&(u=function(e){var t,n,c,a,u=this,d=s&&u.sticky,p=r.call(u),v=u.source,g=0,h=e;return d&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),h=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),n=new RegExp("^(?:"+v+")",p)),f&&(n=new RegExp("^"+v+"$(?!\\s)",p)),l&&(t=u.lastIndex),c=i.call(d?n:u,h),d?c?(c.input=c.input.slice(g),c[0]=c[0].slice(g),c.index=u.lastIndex,u.lastIndex+=c[0].length):u.lastIndex=0:l&&c&&(u.lastIndex=u.global?c.index+c[0].length:t),f&&c&&c.length>1&&o.call(c[0],n,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(c[a]=void 0)})),c}),e.exports=u},"9f7f":function(e,t,n){"use strict";var r=n("d039");function c(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),c=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==c},{exec:c})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),c=n("9263"),a=n("d039"),i=n("b622"),o=n("9112"),u=i("species"),l=RegExp.prototype,s=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),v=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var g=i(e),h=!a((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),x=h&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!h||!x||"replace"===e&&(!s||!f||p)||"split"===e&&!v){var b=/./[g],E=n(g,""[e],(function(e,t,n,r,a){var i=t.exec;return i===c||i===l.exec?h&&!a?{done:!0,value:b.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=E[0],O=E[1];r(String.prototype,e,m),r(l,g,2==t?function(e,t){return O.call(e,this,t)}:function(e){return O.call(e,this)})}d&&o(l[g],"sham",!0)}},f324:function(e,t,n){"use strict";n("7483")}}]);
//# sourceMappingURL=chunk-0faeb8c5.89821dac.js.map