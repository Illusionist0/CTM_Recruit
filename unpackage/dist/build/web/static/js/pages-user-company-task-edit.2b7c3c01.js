(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-company-task-edit"],{"1b31":function(t,e,n){var a=n("5aa0");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("086a35dd",a,!0,{sourceMap:!1,shadowMode:!1})},"1c64":function(t,e,n){"use strict";var a=n("1b31"),i=n.n(a);i.a},"530e":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return a}));var a={mInput:n("23c0").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content reg-page"},[n("v-uni-view",{staticClass:"input-group"},[n("v-uni-view",{staticClass:"input-column border-bottom-1px"},[n("v-uni-text",{staticClass:"title"},[t._v("项目名称")]),n("v-uni-view",{staticClass:"input-item"},[n("m-input",{attrs:{type:"text",placeholder:"请输入项目名称",maxLength:30},model:{value:t.task.name,callback:function(e){t.$set(t.task,"name",e)},expression:"task.name"}})],1)],1),n("v-uni-view",{staticClass:"input-column border-bottom-1px"},[n("v-uni-text",{staticClass:"title"},[t._v("预算资金")]),n("v-uni-view",{staticClass:"input-item"},[n("m-input",{attrs:{type:"text",placeholder:"请输入预算资金(元)",maxLength:30},model:{value:t.task.money,callback:function(e){t.$set(t.task,"money",e)},expression:"task.money"}})],1)],1),n("v-uni-view",{staticClass:"input-column border-bottom-1px"},[n("v-uni-text",{staticClass:"title"},[t._v("软件类型")]),n("v-uni-view",{staticClass:"picker"},[n("v-uni-picker",{attrs:{value:t.task.type,range:t.array},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[n("v-uni-input",{staticClass:"padding-10",attrs:{disabled:"true",placeholder:"请选择软件类型",value:t.task.type}})],1),n("v-uni-text",{staticClass:"yzb yzb-next"})],1)],1),n("v-uni-view",{staticClass:"input-column border-bottom-1px"},[n("v-uni-text",{staticClass:"title"},[t._v("需求详情")]),n("v-uni-view",{staticClass:"picker"},[n("v-uni-textarea",{attrs:{maxlength:"500",placeholder:"请输入内容"},model:{value:t.task.content,callback:function(e){t.$set(t.task,"content",e)},expression:"task.content"}}),n("v-uni-view",{staticClass:"r-top-t"},[n("v-uni-view"),n("v-uni-view",[t._v(t._s(t.contentLength)+"/"+t._s(t.len))])],1)],1)],1)],1),n("v-uni-view",{staticClass:"btn-row"},[n("v-uni-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.update.apply(void 0,arguments)}}},[t._v("保存")])],1)],1)},o=[]},5526:function(t,e,n){"use strict";n.r(e);var a=n("c187"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=i.a},"5aa0":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.input-group[data-v-0179c032]{border-radius:%?10?%;margin-top:%?10?%;overflow:hidden;margin-bottom:%?100?%}.input-row .title[data-v-0179c032]{width:25%;padding:%?20?% 0;padding-left:%?20?%;line-height:%?50?%}.border-bottom-1px[data-v-0179c032]{position:relative}.border-bottom-1px[data-v-0179c032]::after{position:absolute;z-index:1;right:0;bottom:0;left:%?20?%;height:%?1?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e2e2e2}.input-column[data-v-0179c032]{display:flex;flex-direction:column;background-color:#fff;padding:%?20?% %?20?% %?10?% %?20?%}.input-column .title[data-v-0179c032]{margin-left:%?10?%;font-size:%?32?%;font-weight:700}.input-column .picker[data-v-0179c032]{padding:%?30?% 0 %?20?% 0;margin-left:%?10?%;position:relative}.input-column .picker uni-picker[data-v-0179c032]{font-size:%?32?%;width:100%;position:absolute}.input-column .yzb-next[data-v-0179c032]{float:right;color:#999}.content[data-v-0179c032]{background:#fff}.btn-row[data-v-0179c032]{position:fixed;bottom:%?10?%;width:100%;box-sizing:border-box}.btn-row uni-button[data-v-0179c032]{background-color:#01beff;height:%?90?%;line-height:%?90?%;font-size:%?34?%}uni-textarea[data-v-0179c032]{width:98%;border:%?1?% solid #f8f8f8;padding:%?20?%;box-sizing:border-box;height:230px}.r-top-t[data-v-0179c032]{display:flex;justify-content:space-between;font-family:PingFang SC;font-weight:400;line-height:20px;color:#999;opacity:1}',""]),t.exports=e},b9a4:function(t,e,n){"use strict";n.r(e);var a=n("530e"),i=n("5526");for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("1c64");var s=n("f0c5"),r=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"0179c032",null,!1,a["a"],void 0);e["default"]=r.exports},c187:function(t,e,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("f07e")),o=a(n("c964")),s=a(n("23c0")),r=a(n("6d8f")),u=a(n("1c0c")),c={components:{mInput:s.default},computed:{contentLength:function(){return this.task.content.length}},data:function(){return{array:["小程序开发","App开发","管理系统","工具软件","网站开发","办公软件","软件定制","其他软件"],task:{name:null,money:null,type:null,content:""},len:500}},onLoad:function(t){t.id&&this.getTaskDetail(t.id)},methods:{getTaskDetail:function(t){var e=this;return(0,o.default)((0,i.default)().mark((function n(){var a,o;return(0,i.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a={id:t},n.next=3,e.$apis.getTaskDetail(a);case 3:o=n.sent,o&&(e.task=o,console.log("getTaskDetail",e.task));case 5:case"end":return n.stop()}}),n)})))()},bindPickerChange:function(t){this.task.type=this.array[t.target.value]},update:function(){var t=this;return(0,o.default)((0,i.default)().mark((function e(){var n,a;return(0,i.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=r.default.check(t.task,u.default.addTaskRule),n){e.next=4;break}return uni.showToast({title:r.default.error,icon:"none"}),e.abrupt("return");case 4:return e.next=6,t.$apis.updateTask(t.task);case 6:a=e.sent,a&&uni.navigateBack({delta:1});case 8:case"end":return e.stop()}}),e)})))()}}};e.default=c}}]);