(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-common-system"],{10034:function(t,n,e){"use strict";e.r(n);var i=e("d295"),o=e("a70d");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("51f4");var s=e("f0c5"),r=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,"12282df8",null,!1,i["a"],void 0);n["default"]=r.exports},"1cca":function(t,n,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("14d9");var o=i(e("f3f3")),a=e("26cb"),s={computed:(0,o.default)((0,o.default)({},(0,a.mapState)(["userInfo"])),(0,a.mapGetters)(["hasLogin"])),data:function(){return{severList2:[[{name:"版本号",show:!0,right:!1,icon:"",content:"1.0.1",url:null},{name:"发布日期",show:!0,right:!1,icon:"",content:"2022-05-01",url:null}],[{name:"修改密码",show:!0,right:!0,icon:"",content:"",url:this.$mRoutesConfig.resetPwd},{name:"用户协议",show:!0,right:!0,icon:"mingxi.png",content:"",url:this.$mRoutesConfig.terms},{name:"隐私政策",show:!0,right:!0,icon:"choujiang.png",content:"",url:this.$mRoutesConfig.privacy},{name:"关于我们",show:!0,right:!0,icon:"addr.png",content:"",url:this.$mRoutesConfig.aboutUs}]]}},onLoad:function(){},methods:{loginOut:function(){var t=this;uni.showLoading({mask:!0}),setTimeout((function(){uni.clearStorageSync(),uni.hideLoading(),t.$store.commit("SET_LOGOUT"),"connected"===t.goEasy.getConnectionStatus()&&(console.log("do  disconnect"),getApp().globalData.imService.disconnect()),uni.reLaunch({url:"/pages/user/user"})}),1500)},toPage2:function(t,n){if(this.severList2[t][n].url){this.$mRouter.push({route:this.severList2[t][n].url,query:{id:1}})}}}};n.default=s},"51f4":function(t,n,e){"use strict";var i=e("a351"),o=e.n(i);o.a},"90e8":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.system[data-v-12282df8]{width:94.5%;height:%?100?%}.btn[data-v-12282df8]{border-radius:%?20?%;margin-top:%?50?%;font-size:%?35?%;width:90%;background-color:#dd524d;color:#fff}.list[data-v-12282df8]{width:100%;border-bottom:solid %?26?% #f1f1f1}.list .li[data-v-12282df8]{width:96%;height:%?100?%;padding:0 2%;border-bottom:solid %?1?% #e7e7e7;display:flex;align-items:center}.list .li.noborder[data-v-12282df8]{border-bottom:0}.list .li .icon[data-v-12282df8]{flex-shrink:0;width:%?50?%;height:%?50?%}.list .li .icon uni-image[data-v-12282df8]{width:%?50?%;height:%?50?%}.list .li .text[data-v-12282df8]{padding-left:%?30?%;width:100%;color:#666}.list .li .text2[data-v-12282df8]{width:40%;color:#666;text-align:right}.list .li .to[data-v-12282df8]{flex-shrink:0;width:%?40?%;height:%?40?%}.list .li .icon-next[data-v-12282df8]{font-size:%?34?%;color:#999;margin-left:%?15?%}',""]),t.exports=n},a351:function(t,n,e){var i=e("90e8");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("1c310c53",i,!0,{sourceMap:!1,shadowMode:!1})},a70d:function(t,n,e){"use strict";e.r(n);var i=e("1cca"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},d295:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content with-100"},[t._l(t.severList2,(function(n,i){return e("v-uni-view",{key:i,staticClass:"list"},[t.hasLogin?t._l(n,(function(o,a){return e("v-uni-view",{key:o.name,staticClass:"li",class:{noborder:a==n.length-1},attrs:{"hover-class":"hover"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toPage2(i,a)}}},[e("v-uni-view",{staticClass:"text"},[t._v(t._s(o.name))]),e("v-uni-text",{staticClass:"text2"},[t._v(t._s(o.content))]),o.right?e("v-uni-text",{staticClass:"yzb yzb-next icon-next"}):t._e()],1)})):t._l(n,(function(o,a){return 1!=i||0!=a?e("v-uni-view",{key:o.name,staticClass:"li",class:{noborder:a==n.length-1},attrs:{"hover-class":"hover"},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toPage2(i,a)}}},[e("v-uni-view",{staticClass:"text"},[t._v(t._s(o.name))]),e("v-uni-text",{staticClass:"text2"},[t._v(t._s(o.content))]),o.right?e("v-uni-text",{staticClass:"yzb yzb-next icon-next"}):t._e()],1):t._e()}))],2)})),t.hasLogin?e("v-uni-button",{staticClass:"btn",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.loginOut.apply(void 0,arguments)}}},[t._v("退出登录")]):t._e()],2)},o=[]}}]);