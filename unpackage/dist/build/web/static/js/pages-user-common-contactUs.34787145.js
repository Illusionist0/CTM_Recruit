(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-common-contactUs"],{"387e":function(t,e,n){"use strict";var i=n("b1cd"),a=n.n(i);a.a},"5f5d":function(t,e,n){"use strict";n.r(e);var i=n("9339"),a=n("d35c");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("387e");var c=n("f0c5"),s=Object(c["a"])(a["default"],i["b"],i["c"],!1,null,"384a47e4",null,!1,i["a"],void 0);e["default"]=s.exports},9339:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uniList:n("e338").default,uniListItem:n("e5fe").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"column with-100"},[n("v-uni-view",{staticClass:"bg-white column padding-height-20 margin-bottom-20"},[n("v-uni-view",{staticClass:"contact-content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:t.item.logo}}),n("v-uni-text",{staticClass:"name"},[t._v(t._s(t.item.name))]),n("uni-list",{staticClass:"list"},[n("uni-list-item",{attrs:{title:"联系电话",showArrow:!0,clickable:"true",rightText:t.item.servicePhone,thumb:"/static/img/phone.png","thumb-size":"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.call(t.item.servicePhone)}}}),n("uni-list-item",{attrs:{title:"客服微信",showArrow:!0,clickable:"true",rightText:t.item.wechatNumber,thumb:"/static/img/wechat.png","thumb-size":"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyText(t.item.wechatNumber)}}}),n("uni-list-item",{attrs:{title:"客服QQ",showArrow:!0,clickable:"true",rightText:t.item.qqNumber,thumb:"/static/img/qq.png","thumb-size":"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyText(t.item.qqNumber)}}}),n("uni-list-item",{attrs:{title:"邮箱地址",showArrow:!0,clickable:"true",rightText:t.item.email,thumb:"/static/img/email.png","thumb-size":"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyText(t.item.email)}}}),n("uni-list-item",{attrs:{title:"公司官网",showArrow:!0,clickable:"true",rightText:t.item.website,thumb:"/static/img/website.png","thumb-size":"sm"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.copyText(t.item.website)}}})],1)],1)],1)],1)},o=[]},b1cd:function(t,e,n){var i=n("c931");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("3f3a81c4",i,!0,{sourceMap:!1,shadowMode:!1})},c931:function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.contact-content[data-v-384a47e4]{display:flex;flex-direction:column;align-items:center}.contact-content .logo[data-v-384a47e4]{width:%?200?%;height:%?200?%;padding:%?30?% 0}.contact-content .list[data-v-384a47e4]{margin-top:%?50?%;width:100%}',""]),t.exports=e},d35c:function(t,e,n){"use strict";n.r(e);var i=n("d3e5"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},d3e5:function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("f07e")),o=i(n("c964")),c={data:function(){return{opinion:"",aboutus:"",item:{logo:"/static/logo.png",name:"xxx网络科技有限公司",servicePhone:"15888888888",wechatNumber:"232323232",qqNumber:"2342342323",email:"123123123213@qq.com",website:"www.baidu.com"}}},onLoad:function(){this.getContactUs()},methods:{getContactUs:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$apis.getContactUs();case 2:t.item=e.sent,console.log(t.item);case 4:case"end":return e.stop()}}),e)})))()},onqueryload:function(t){console.log("onqueryload==",t)},opinionInput:function(t){this.opinion=t.detail.value},call:function(t){console.log("拨打电话：",t),uni.makePhoneCall({phoneNumber:t})},copyText:function(t){console.log("copyText==",t),uni.setClipboardData({data:t,success:function(t){uni.getClipboardData({success:function(t){uni.showToast({title:"复制成功",duration:2e3})}})}})}}};e.default=c}}]);