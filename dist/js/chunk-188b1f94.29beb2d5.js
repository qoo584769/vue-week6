(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-188b1f94"],{"1dde":function(t,e,c){var a=c("d039"),n=c("b622"),r=c("2d00"),s=n("species");t.exports=function(t){return r>=51||!a((function(){var e=[],c=e.constructor={};return c[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"46cc":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n=Object(a["L"])("data-v-2946ee12");Object(a["v"])("data-v-2946ee12");var r={class:"container m-auto"},s={class:"row"},o={class:"col"},i={class:"table"},d=Object(a["g"])("thead",{class:""},[Object(a["g"])("th",{class:"","width:150":""},"圖片"),Object(a["g"])("th",{class:""},"名稱"),Object(a["g"])("th",{class:""},"價格"),Object(a["g"])("th",{class:""},"查看更多"),Object(a["g"])("th",{class:""},"加到購物車")],-1),b={class:""},u={class:"img-block"},l={class:""},j={class:""},O={key:0},f={key:1,class:"text-decoration-line-through"},p=Object(a["g"])("br",null,null,-1),g={key:2},v={class:""},h=Object(a["f"])("查看更多"),m={class:""};Object(a["t"])();var w=n((function(t,e,c,w,y,k){var C=Object(a["z"])("router-link");return Object(a["s"])(),Object(a["d"])("div",r,[Object(a["g"])("div",s,[Object(a["g"])("div",o,[Object(a["g"])("table",i,[d,Object(a["g"])("tbody",b,[(Object(a["s"])(!0),Object(a["d"])(a["a"],null,Object(a["y"])(w.ProductList.data,(function(t){return Object(a["s"])(),Object(a["d"])("tr",{key:t.id,class:""},[Object(a["g"])("td",u,[Object(a["g"])("img",{src:t.imageUrl,alt:""},null,8,["src"])]),Object(a["g"])("td",l,Object(a["C"])(t.title),1),Object(a["g"])("td",j,[t.price?Object(a["e"])("",!0):(Object(a["s"])(),Object(a["d"])("span",O,"價格 : "+Object(a["C"])(t.origin_price),1)),t.price?(Object(a["s"])(),Object(a["d"])("span",f,"折價前 : "+Object(a["C"])(t.origin_price),1)):Object(a["e"])("",!0),p,t.price?(Object(a["s"])(),Object(a["d"])("span",g,"折價後 : "+Object(a["C"])(t.price),1)):Object(a["e"])("",!0)]),Object(a["g"])("td",v,[Object(a["g"])(C,{to:{name:"detail",params:{id:"".concat(t.id)}},class:"btn btn-secondary"},{default:n((function(){return[h]})),_:2},1032,["to"])]),Object(a["g"])("td",m,[Object(a["g"])("button",{class:"btn btn-primary",onClick:Object(a["K"])((function(e){return w.AddToCart(t.id)}),["prevent"])},"加入購物車",8,["onClick"])])])})),128))])])])])])})),y=(c("99af"),c("bc3a")),k=c.n(y),C=c("a1e9"),x=c("5c40"),_={components:{},setup:function(){var t=Object(C["i"])({data:[]}),e=Object(C["i"])({data:{}}),c=Object(C["i"])({data:{product_id:"",qty:1}}),a=function(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;k.a.get("".concat("https://vue3-course-api.hexschool.io/api/vue-live","/products?page=").concat(c)).then((function(c){c.data.success?(t.data=c.data.products,e.data=c.data.pagination):alert(c.data.message)})).catch((function(t){alert(t.message)}))},n=function(t){c.data.product_id=t,k.a.post("".concat("https://vue3-course-api.hexschool.io/api/vue-live","/cart"),c).then((function(t){t.data.success,alert(t.data.message)})).catch((function(t){alert(t.message)}))};return Object(x["w"])((function(){a()})),{ProductList:t,CartData:c,AddToCart:n}}};c("fa63");_.render=w,_.__scopeId="data-v-2946ee12";e["default"]=_},8418:function(t,e,c){"use strict";var a=c("c04e"),n=c("9bf2"),r=c("5c6c");t.exports=function(t,e,c){var s=a(e);s in t?n.f(t,s,r(0,c)):t[s]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),n=c("d039"),r=c("e8b5"),s=c("861d"),o=c("7b0b"),i=c("50c4"),d=c("8418"),b=c("65f0"),u=c("1dde"),l=c("b622"),j=c("2d00"),O=l("isConcatSpreadable"),f=9007199254740991,p="Maximum allowed index exceeded",g=j>=51||!n((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),v=u("concat"),h=function(t){if(!s(t))return!1;var e=t[O];return void 0!==e?!!e:r(t)},m=!g||!v;a({target:"Array",proto:!0,forced:m},{concat:function(t){var e,c,a,n,r,s=o(this),u=b(s,0),l=0;for(e=-1,a=arguments.length;e<a;e++)if(r=-1===e?s:arguments[e],h(r)){if(n=i(r.length),l+n>f)throw TypeError(p);for(c=0;c<n;c++,l++)c in r&&d(u,l,r[c])}else{if(l>=f)throw TypeError(p);d(u,l++,r)}return u.length=l,u}})},e560:function(t,e,c){},fa63:function(t,e,c){"use strict";c("e560")}}]);
//# sourceMappingURL=chunk-188b1f94.29beb2d5.js.map