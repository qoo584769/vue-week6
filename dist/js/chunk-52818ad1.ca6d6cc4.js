(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52818ad1"],{"062e":function(t,a,e){"use strict";var c=e("7a23"),n=Object(c["L"])("data-v-5057dd56");Object(c["v"])("data-v-5057dd56");var r={class:"page"};Object(c["t"])();var s=n((function(t,a,e,n,s,d){return Object(c["s"])(),Object(c["d"])("div",r,[Object(c["g"])("button",{class:"btn btn-secondary px-3 py-1 m-2",disabled:0==n.props.PageData.data.has_pre,onClick:a[1]||(a[1]=Object(c["K"])((function(t){return n.PageGetData(n.props.PageData.data.current_page-1)}),["prevent"]))},"上一頁",8,["disabled"]),(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(n.props.PageData.data.total_pages,(function(t){return Object(c["s"])(),Object(c["d"])("button",{class:["btn btn-primary px-3 py-1 m-2",{active:t==n.props.PageData.data.current_page}],key:t,onClick:Object(c["K"])((function(a){return n.PageGetData(t)}),["prevent"])},Object(c["C"])(t),11,["onClick"])})),128)),Object(c["g"])("button",{class:"btn btn-secondary px-3 py-1 m-2",disabled:0==n.props.PageData.data.has_next,onClick:a[2]||(a[2]=Object(c["K"])((function(t){return n.PageGetData(n.props.PageData.data.current_page+1)}),["prevent"]))},"下一頁",8,["disabled"])])})),d={name:"Pagenation",components:{},props:{PageData:{type:Object,default:function(){return{}}}},setup:function(t,a){var e=a.emit,c=function(a){a!==t.PageData.data.current_page&&e("out_getdata",a)};return{props:t,PageGetData:c}}};e("f22d");d.render=s,d.__scopeId="data-v-5057dd56";a["a"]=d},"1dde":function(t,a,e){var c=e("d039"),n=e("b622"),r=e("2d00"),s=n("species");t.exports=function(t){return r>=51||!c((function(){var a=[],e=a.constructor={};return e[s]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},8418:function(t,a,e){"use strict";var c=e("c04e"),n=e("9bf2"),r=e("5c6c");t.exports=function(t,a,e){var s=c(a);s in t?n.f(t,s,r(0,e)):t[s]=e}},"99af":function(t,a,e){"use strict";var c=e("23e7"),n=e("d039"),r=e("e8b5"),s=e("861d"),d=e("7b0b"),o=e("50c4"),i=e("8418"),u=e("65f0"),b=e("1dde"),p=e("b622"),O=e("2d00"),g=p("isConcatSpreadable"),l=9007199254740991,f="Maximum allowed index exceeded",j=O>=51||!n((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),v=b("concat"),h=function(t){if(!s(t))return!1;var a=t[g];return void 0!==a?!!a:r(t)},m=!j||!v;c({target:"Array",proto:!0,forced:m},{concat:function(t){var a,e,c,n,r,s=d(this),b=u(s,0),p=0;for(a=-1,c=arguments.length;a<c;a++)if(r=-1===a?s:arguments[a],h(r)){if(n=o(r.length),p+n>l)throw TypeError(f);for(e=0;e<n;e++,p++)e in r&&i(b,p,r[e])}else{if(p>=l)throw TypeError(f);i(b,p++,r)}return b.length=p,b}})},a7c7:function(t,a,e){},b494:function(t,a,e){"use strict";e.r(a);var c=e("7a23"),n=Object(c["L"])("data-v-08c4f17e");Object(c["v"])("data-v-08c4f17e");var r={class:"container m-auto"},s={class:"table"},d=Object(c["g"])("thead",{class:""},[Object(c["g"])("th",{class:"",width:"100"},"建立日期"),Object(c["g"])("th",{class:"",width:"100"},"訂單ID"),Object(c["g"])("th",{class:"",width:"100"},"數量"),Object(c["g"])("th",{class:"",width:"100"},"訂單價格"),Object(c["g"])("th",{class:"",width:"100"},"是否付款")],-1),o={class:""},i={class:""},u={class:""},b={class:""},p={class:""};Object(c["t"])();var O=n((function(t,a,e,n,O,g){var l=Object(c["z"])("pagenation");return Object(c["s"])(),Object(c["d"])("div",r,[Object(c["g"])("table",s,[d,Object(c["g"])("tbody",o,[(Object(c["s"])(!0),Object(c["d"])(c["a"],null,Object(c["y"])(n.AdminOrderList.data,(function(t){return Object(c["s"])(),Object(c["d"])("tr",{key:t.id,class:""},[Object(c["g"])("td",i,Object(c["C"])(t.create_at),1),Object(c["g"])("td",u,Object(c["C"])(t.id),1),Object(c["g"])("td",b,Object(c["C"])(t.num),1),Object(c["g"])("td",p,Object(c["C"])(t.total),1),Object(c["g"])("td",{class:["",{"text-success":t.is_paid,"text-danger":!t.is_paid}]},Object(c["C"])(t.is_paid?"是":"否"),3)])})),128))])]),Object(c["g"])(l,{PageData:n.AdminOrderPagination,onOut_getdata:n.AdminGetOrderList},null,8,["PageData","onOut_getdata"])])})),g=(e("99af"),e("bc3a")),l=e.n(g),f=e("a1e9"),j=e("5c40"),v=e("062e"),h={components:{pagenation:v["a"]},setup:function(){var t=Object(f["i"])({data:[]}),a=Object(f["i"])({data:{}}),e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;l.a.get("".concat("https://vue3-course-api.hexschool.io/api/vue-live","/admin/orders?page=").concat(e)).then((function(e){e.data.success?(console.log(e),t.data=e.data.orders,a.data=e.data.pagination,console.log(t.data)):alert(e.data.message)})).catch((function(t){alert(t.message)}))};return Object(j["w"])((function(){e()})),{AdminOrderList:t,AdminOrderPagination:a,AdminGetOrderList:e}}};e("ed5a");h.render=O,h.__scopeId="data-v-08c4f17e";a["default"]=h},cc86:function(t,a,e){},ed5a:function(t,a,e){"use strict";e("a7c7")},f22d:function(t,a,e){"use strict";e("cc86")}}]);
//# sourceMappingURL=chunk-52818ad1.ca6d6cc4.js.map