(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-person-resume"],{"0aed":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"m-cell",class:{"bottom-line":t.bottomLine,"top-line":t.topLine},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.click.apply(void 0,arguments)}}},[t._t("icon"),i("v-uni-view",{staticClass:"title",class:{"ml-20":t.isIcon}},[t._v(t._s(t.title))]),t.desc?i("v-uni-view",{staticClass:"desc"},[t._v(t._s(t.desc))]):i("v-uni-view",{staticClass:"cont"},[t._t("default")],2),t.isLink?i("v-uni-image",{staticClass:"link-icon",attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAgCAMAAAAootjDAAAAPFBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZlr8OySAAAAE3RSTlMABA2nfQeel5GKr4R1FLppzsxxRm9JNQAAAFhJREFUKM+l0UsOgDAIBFBa7Qdbv3P/u7pwByQ1heXLkBCGHHNzkFRQpYWKYlmSxjpHjKxyDUv8YbQ6rGPbpZ04xvSoxW5JVCdMSEPWksRTx0JGGddXo39eigoD2cYeb8gAAAAASUVORK5CYII=",alt:""}}):t._e()],2)},a=[]},1654:function(t,e,i){"use strict";var n=i("bc11"),a=i.n(n);a.a},"1bf2":function(t,e,i){"use strict";i.r(e);var n=i("318c"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},2469:function(t,e,i){"use strict";i.r(e);var n=i("dfb0"),a=i("c407");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("d8c3");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"f46eaa58",null,!1,n["a"],void 0);e["default"]=r.exports},"289c":function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("f07e")),o=n(i("c964"));i("14d9"),i("ac1f"),i("5319"),i("a434");var s=n(i("5f01")),r=i("be4d"),l={components:{mCell:s.default},data:function(){return{skillContent:"",statusIndex:0,workStatusArray:["待业","在职，但考虑换个环境","在职,观望有好的机会","在职，暂无跳槽打算","应届毕业生"],resume:{},workStatus:null,skills:[],dialogTitle:"添加关键词",skillValue:"",horizontal:"right",vertical:"bottom",direction:"vertical",pattern:{color:"#333",backgroundColor:"#fff",selectedColor:"#333",buttonColor:"#12ae85",iconColor:"#fff"},contents:[{iconPath:"/static/img/preview.png",selectedIconPath:"/static/img/preview.png",text:"预览",active:!1},{iconPath:"/static/img/export.png",selectedIconPath:"/static/img/export.png",text:"导出",active:!1}]}},onShow:function(){this.getResume()},methods:{trigger:function(t){console.log(t),this.contents[t.index].active=!t.item.active,0==t.index?this.$mRouter.push({route:this.$mRoutesConfig.resumePreview,query:{id:this.resume.id}}):1==t.index&&this.exportWord()},exportWord:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:uni.showModal({title:"提示",content:"确定要导出模板简历吗？",success:function(e){e.confirm&&t.doExport()}});case 1:case"end":return e.stop()}}),e)})))()},doExport:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){var i;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return uni.showLoading(),e.next=3,t.$apis.exportResumeWord({id:t.resume.id});case 3:i=e.sent,uni.hideLoading(),i&&t.$mRouter.push({route:t.$mRoutesConfig.resumeFile,query:{url:i}});case 6:case"end":return e.stop()}}),e)})))()},fabClick:function(){},formatDates:function(t){if(null==t||""===t)return"N/A";var e=t.replace(/-/g,"/"),i=new Date(e);return(0,r.formatDate)(i,"yyyy.MM")},formatAge:function(t){return(0,r.calCurrentYear)(t)},getResume:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$apis.getResume();case 2:t.resume=e.sent,t.workStatus=t.resume.jobStatus,t.resume.skills&&(t.skills=t.resume.skills.split(","));case 5:case"end":return e.stop()}}),e)})))()},bindPickerChange:function(t){var e=this;return(0,o.default)((0,a.default)().mark((function i(){var n;return(0,a.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return console.log("picker发送选择改变，携带值为",t.target.value),e.workStatus=e.workStatusArray[t.target.value],n={id:e.resume.id,jobStatus:e.workStatus},i.next=5,e.$apis.updateResumeBasic(n);case 5:i.sent;case 6:case"end":return i.stop()}}),i)})))()},toUserEdit:function(){this.toEdit(this.$mRoutesConfig.userInfo)},toSkillEdit:function(){this.$mRouter.push({route:this.$mRoutesConfig.editSkill,query:{id:this.resume.id,content:this.resume.personalSkill}})},toExpectEdit:function(t){this.toEdit(this.$mRoutesConfig.editExpect,t)},toWorkEdit:function(t){this.toEdit(this.$mRoutesConfig.editWork,t)},toProEdit:function(t){this.toEdit(this.$mRoutesConfig.editPro,t)},toEduEdit:function(t){this.toEdit(this.$mRoutesConfig.editEdu,t)},toCertEdit:function(){this.toEdit(this.$mRoutesConfig.editCert,1)},toEdit:function(t,e){this.$mRouter.push({route:t,query:{id:e}})},confirmDialog:function(){8!=this.skills.length?(this.dialogTitle="添加技能标签",this.$refs.dialogInput2.init(),this.$refs.dialogInput.open()):uni.showToast({icon:"none",title:"最多添加8个技能标签"})},dialogInputConfirm:function(t){console.log(t),t?t.length<2||t.length>8?uni.showToast({icon:"none",title:"请输入2-8个字"}):(this.skills.push(t),this.$refs.dialogInput.close(),this.updateSkills()):uni.showToast({icon:"none",title:"请输入内容"})},select:function(t){this.dialogTitle="修改技能标签",this.skillValue=this.skills[t],this.$refs.dialogInput.open()},deleteImg:function(t){this.skills.splice(t,1),this.updateSkills()},updateSkills:function(){var t=this;return(0,o.default)((0,a.default)().mark((function e(){var i,n,o,s;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n in i="",t.skills)i=i+","+t.skills[n];return i=i.substr(1,i.length),o={id:t.resume.id,skills:i},e.next=6,t.$apis.updateResumeBasic(o);case 6:s=e.sent,s&&uni.showToast({icon:"none",title:"添加成功"});case 8:case"end":return e.stop()}}),e)})))()},hidePhone:function(t){return this.$mUtils.phoneHiden(t)}}};e.default=l},"318c":function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var a=n(i("be7a")),o=i("37dc"),s=n(i("ee4d")),r=(0,o.initVueI18n)(s.default),l=r.t,c={name:"uniPopupDialog",mixins:[a.default],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||l("uni-popup.ok")},closeText:function(){return this.cancelText||l("uni-popup.cancel")},placeholderText:function(){return this.placeholder||l("uni-popup.placeholder")},titleText:function(){return this.title||l("uni-popup.title")}},watch:{type:function(t){this.dialogType=t},mode:function(t){"input"===t&&(this.dialogType="info")},value:function(t){console.log("value====",t),this.val=t}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()},init:function(){this.val=""}}};e.default=c},"3be8":function(t,e,i){"use strict";i.r(e);var n=i("6ff3"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"41ba":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.m-cell[data-v-51cd81f0]{position:relative;display:flex;background-color:#fff;padding:%?24?% %?20?%;box-sizing:border-box;align-items:center}.m-cell .title[data-v-51cd81f0]{width:25%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.m-cell .ml-20[data-v-51cd81f0]{margin-left:%?20?%}.m-cell .desc[data-v-51cd81f0]{color:#666;flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;text-align:right;padding:0 %?20?%;box-sizing:border-box\n  /* display: table-cell;  */\n  /* line-height: 30rpx;  */\n  /* vertical-align:middle; */}.m-cell .cont[data-v-51cd81f0]{flex:1;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 %?20?%;box-sizing:border-box}.m-cell .link-icon[data-v-51cd81f0]{width:%?20?%;height:%?34?%;margin-left:%?6?%}.m-cell .mr-l[data-v-51cd81f0]{margin-right:%?20?%}.bottom-line[data-v-51cd81f0]:after{position:absolute;right:0;bottom:0;left:%?20?%;height:%?1?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e2e2e2}.top-line[data-v-51cd81f0]:before{position:absolute;right:0;top:0;left:%?20?%;height:%?1?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e2e2e2}',""]),t.exports=e},"5f01":function(t,e,i){"use strict";i.r(e);var n=i("0aed"),a=i("3be8");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("e31f");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"51cd81f0",null,!1,n["a"],void 0);e["default"]=r.exports},"665d":function(t,e,i){"use strict";var n=i("c083"),a=i.n(n);a.a},"6e22":function(t,e,i){"use strict";i.r(e);var n=i("289c"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"6e8c":function(t,e,i){var n=i("96d1");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3b0f2ec8",n,!0,{sourceMap:!1,shadowMode:!1})},"6ff3":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={props:{title:String,desc:[String,Number],isLink:Boolean,bottomLine:Boolean,topLine:Boolean,isIcon:Boolean},methods:{click:function(){this.$emit("click")}}};e.default=n},"71e8":function(t,e,i){"use strict";i.r(e);var n=i("f8f2"),a=i("1bf2");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("1654");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"e6c1304c",null,!1,n["a"],void 0);e["default"]=r.exports},9292:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-4594e29e]{display:flex}.text-title[data-v-4594e29e]{font-size:%?36?%;font-weight:700;color:#000}.text-sub-title[data-v-4594e29e]{font-size:%?30?%;font-weight:700;color:#000}.item-content[data-v-4594e29e]{color:#333}.content[data-v-4594e29e]{padding:%?20?%;box-sizing:border-box}.base-info .name[data-v-4594e29e]{font-size:%?44?%;font-weight:700}.base-info .yzb-bianji2[data-v-4594e29e]{color:#000}.base-info .header[data-v-4594e29e]{width:%?150?%;height:%?150?%;border-radius:50%}.base-info .phone[data-v-4594e29e]{color:#333}.base-info .phone .yzb-dianhua1[data-v-4594e29e]{margin-left:%?10?%;color:#26cd8c}.yzb-jia1[data-v-4594e29e]{color:#333;font-weight:700;font-size:%?44?%}.skill-item[data-v-4594e29e]{padding:%?20?%;flex-wrap:wrap;display:flex}.skill-item .skill-item-item[data-v-4594e29e]{position:relative;margin-right:%?20?%}.skill-item .item[data-v-4594e29e]{font-size:%?24?%;padding:%?12?% %?20?%;margin-right:%?20?%;margin-bottom:%?20?%;border-radius:%?8?%}.skill-item .del[data-v-4594e29e]{color:#dd524d;position:relative;top:0}.skill-item .img_delete[data-v-4594e29e]{width:%?40?%;height:%?40?%;border-radius:50%;background:rgba(234,178,178,.5);position:absolute;right:%?-8?%;top:%?-18?%;z-index:10;align-items:center}.skill-item .text-blue[data-v-4594e29e]{color:#26cd8c;border:%?1?% solid #ebeef5;background-color:#ebeef5;color:#666}.skill-item .text-normal[data-v-4594e29e]{color:#666;border:%?1?% solid #ebeef5}.edu-exp[data-v-4594e29e]{margin-bottom:%?100?%}',""]),t.exports=e},"96d1":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-fab[data-v-f46eaa58]{position:fixed;display:flex;justify-content:center;align-items:center;z-index:10;border-radius:45px;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.uni-cursor-point[data-v-f46eaa58]{cursor:pointer}.uni-fab--active[data-v-f46eaa58]{opacity:1}.uni-fab--leftBottom[data-v-f46eaa58]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.uni-fab--leftTop[data-v-f46eaa58]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.uni-fab--rightBottom[data-v-f46eaa58]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.uni-fab--rightTop[data-v-f46eaa58]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.uni-fab__circle[data-v-f46eaa58]{position:fixed;display:flex;justify-content:center;align-items:center;width:55px;height:55px;background-color:#3c3e49;border-radius:45px;z-index:11}.uni-fab__circle--leftBottom[data-v-f46eaa58]{left:15px;bottom:30px;left:calc(15px + var(--window-left));bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--leftTop[data-v-f46eaa58]{left:15px;top:30px;left:calc(15px + var(--window-left));top:calc(30px + var(--window-top))}.uni-fab__circle--rightBottom[data-v-f46eaa58]{right:15px;bottom:30px;right:calc(15px + var(--window-right));bottom:calc(30px + var(--window-bottom))}.uni-fab__circle--rightTop[data-v-f46eaa58]{right:15px;top:30px;right:calc(15px + var(--window-right));top:calc(30px + var(--window-top))}.uni-fab__circle--left[data-v-f46eaa58]{left:0}.uni-fab__circle--right[data-v-f46eaa58]{right:0}.uni-fab__circle--top[data-v-f46eaa58]{top:0}.uni-fab__circle--bottom[data-v-f46eaa58]{bottom:0}.uni-fab__plus[data-v-f46eaa58]{font-weight:700}.fab-circle-icon[data-v-f46eaa58]{-webkit-transform:rotate(0deg);transform:rotate(0deg);transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;font-weight:200}.uni-fab__plus--active[data-v-f46eaa58]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.uni-fab__content[data-v-f46eaa58]{box-sizing:border-box;display:flex;flex-direction:row;border-radius:55px;overflow:hidden;transition-property:width,height;transition-duration:.2s;width:55px;border-color:#ddd;border-width:%?1?%;border-style:solid}.uni-fab__content--other-platform[data-v-f46eaa58]{border-width:0;box-shadow:0 1px 5px 2px rgba(0,0,0,.3)}.uni-fab__content--left[data-v-f46eaa58]{justify-content:flex-start}.uni-fab__content--right[data-v-f46eaa58]{justify-content:flex-end}.uni-fab__content--flexDirection[data-v-f46eaa58]{flex-direction:column;justify-content:flex-end}.uni-fab__content--flexDirectionStart[data-v-f46eaa58]{flex-direction:column;justify-content:flex-start}.uni-fab__content--flexDirectionEnd[data-v-f46eaa58]{flex-direction:column;justify-content:flex-end}.uni-fab__item[data-v-f46eaa58]{display:flex;flex-direction:column;justify-content:center;align-items:center;width:55px;height:55px;opacity:0;transition:opacity .2s}.uni-fab__item--active[data-v-f46eaa58]{opacity:1}.uni-fab__item-image[data-v-f46eaa58]{width:20px;height:20px;margin-bottom:4px}.uni-fab__item-text[data-v-f46eaa58]{color:#fff;font-size:12px;line-height:12px;margin-top:2px}.uni-fab__item--first[data-v-f46eaa58]{width:55px}',""]),t.exports=e},"9a7e":function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},a26b:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("dba5").default,uniPopupDialog:i("71e8").default,uniFab:i("2469").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"base-info space-between-algin bottom-line padding-height-20",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toUserEdit()}}},[i("v-uni-view",{staticClass:"column"},[i("v-uni-view",{staticClass:"align-height"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.resume.name))]),i("v-uni-text",{staticClass:"yzb yzb-bianji2 margin-left-20"})],1),i("v-uni-text",{staticClass:"text-color"},[t._v(t._s(t.formatAge(t.resume.timeToWork))+"年经验 · "+t._s(t.formatAge(t.resume.birthday))+"岁 · "+t._s(t.resume.education))]),t.resume.phone?i("v-uni-view",{staticClass:"phone"},[i("v-uni-text",[t._v(t._s(t.hidePhone(t.resume.phone)))])],1):t._e()],1),i("v-uni-image",{staticClass:"header",attrs:{src:t.resume.avatar||"/static/img/man.png"}})],1),i("v-uni-view",{staticClass:"skill width-100 padding-height-30 column"},[i("v-uni-view",{staticClass:"space-between-algin"},[i("v-uni-text",{staticClass:"text-title"},[t._v("个人优势")]),i("v-uni-text",{staticClass:"yzb yzb-bianji2",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSkillEdit()}}})],1),i("v-uni-text",{staticClass:"item-content ellipsis-twoline margin-height-20"},[t._v(t._s(t.resume.personalSkill))])],1),i("v-uni-view",{staticClass:"status width-100 space-between-algin padding-height-40 bottom-line"},[i("v-uni-text",{staticClass:"text-title"},[t._v("求职状态")]),i("v-uni-view",{staticClass:"align-height"},[i("v-uni-picker",{attrs:{value:t.workStatus,range:t.workStatusArray},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-input",{staticClass:"padding-10",staticStyle:{"text-align":"right"},attrs:{disabled:"true",placeholder:"请选择求职状态"},model:{value:t.workStatus,callback:function(e){t.workStatus=e},expression:"workStatus"}})],1),i("v-uni-text",{staticClass:"yzb yzb-next margin-left-10"})],1)],1),i("v-uni-view",{staticClass:"expect column width-100 padding-height-30 bottom-line"},[i("v-uni-view",{staticClass:"space-between-algin"},[i("v-uni-text",{staticClass:"text-title"},[t._v("求职期望")]),t.resume.jobExpectList&&t.resume.jobExpectList.length<5?i("v-uni-text",{staticClass:"yzb yzb-jia1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toExpectEdit(0)}}}):t._e()],1),i("v-uni-view",{staticClass:"column margin-top-10"},t._l(t.resume.jobExpectList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"column margin-top-10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toExpectEdit(e.id)}}},[i("v-uni-view",{staticClass:"space-between-algin"},[i("v-uni-text",{staticClass:"text-sub-title"},[t._v(t._s(e.postName))]),i("v-uni-text",{staticClass:"yzb yzb-next"})],1),i("v-uni-text",{staticClass:"text-color"},[t._v(t._s(e.expectSalary)+" . "+t._s(e.industryName))])],1)})),1)],1),i("v-uni-view",{staticClass:"work-exp column width-100 padding-height-30 bottom-line"},[i("v-uni-view",{staticClass:"space-between-algin"},[i("v-uni-text",{staticClass:"text-title"},[t._v("工作经历")]),i("v-uni-text",{staticClass:"yzb yzb-jia1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toWorkEdit(0)}}})],1),t._l(t.resume.workExpList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"column margin-top-10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toWorkEdit(e.id)}}},[i("v-uni-view",{staticClass:"space-between-algin"},[i("v-uni-text",{staticClass:"text-sub-title"},[t._v(t._s(e.companyName))]),i("v-uni-view",{staticClass:"align-height"},[i("v-uni-text",{staticClass:"text-color-grey"},[t._v(t._s(t.formatDates(e.startDate))+"-"+t._s(t.formatDates(e.endDate)))]),i("v-uni-text",{staticClass:"yzb yzb-next"})],1)],1),i("v-uni-text",{staticClass:"text-color"},[t._v(t._s(e.postName))]),i("v-uni-text",{staticClass:"item-content ellipsis-twoline margin-height-20"},[t._v(t._s(e.jobContent))])],1)}))],2),i("v-uni-view",{staticClass:"pro-exp column width-100 padding-height-30 bottom-line"},[i("v-uni-view",{staticClass:"space-between-algin"},[i("v-uni-text",{staticClass:"text-title"},[t._v("项目经历")]),i("v-uni-text",{staticClass:"yzb yzb-jia1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toProEdit(0)}}})],1),t._l(t.resume.proExpList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"column margin-top-10",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toProEdit(e.id)}}},[i("v-uni-view",{staticClass:"space-between-algin"},[i("v-uni-text",{staticClass:"text-sub-title"},[t._v(t._s(e.name))]),i("v-uni-view",{staticClass:"align-height"},[i("v-uni-text",{staticClass:"text-color-grey"},[t._v(t._s(t.formatDates(e.startDate))+"-"+t._s(t.formatDates(e.endDate)))]),i("v-uni-text",{staticClass:"yzb yzb-next"})],1)],1),i("v-uni-text",{staticClass:"text-color"},[t._v(t._s(e.role))]),i("v-uni-text",{staticClass:"item-content ellipsis-twoline margin-top-20"},[t._v("内容："+t._s(e.descr))]),e.performance?i("v-uni-text",{staticClass:"item-content ellipsis-twoline margin-top-10"},[t._v("业绩："+t._s(e.performance))]):t._e()],1)}))],2),i("v-uni-view",{staticClass:"edu-exp column width-100 padding-height-30 bottom-line"},[i("v-uni-view",{staticClass:"space-between-algin"},[i("v-uni-text",{staticClass:"text-title"},[t._v("教育经历")]),i("v-uni-text",{staticClass:"yzb yzb-jia1",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toEduEdit(0)}}})],1),t._l(t.resume.eduExpList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"column margin-top-10 width-100",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toEduEdit(e.id)}}},[i("v-uni-view",{staticClass:"space-between-algin"},[i("v-uni-text",{staticClass:"text-sub-title"},[t._v(t._s(e.school))]),i("v-uni-view",{staticClass:"align-height"},[i("v-uni-text",{staticClass:"text-color-grey"},[t._v(t._s(t.formatDates(e.startTime))+"-"+t._s(t.formatDates(e.endTime)))]),i("v-uni-text",{staticClass:"yzb yzb-next"})],1)],1),i("v-uni-text",{staticClass:"text-color"},[t._v(t._s(e.major)+" "+t._s(e.education))])],1)}))],2),i("uni-popup",{ref:"dialogInput",attrs:{id:"dialogInput",type:"dialog"}},[i("uni-popup-dialog",{ref:"dialogInput2",attrs:{id:"dialogInput2",mode:"input",title:t.dialogTitle,value:t.skillValue,placeholder:"请输入技能信息(2-8字)"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.dialogInputConfirm.apply(void 0,arguments)}}})],1),i("uni-fab",{ref:"fab",attrs:{pattern:t.pattern,content:t.contents,horizontal:t.horizontal,vertical:t.vertical,direction:t.direction},on:{trigger:function(e){arguments[0]=e=t.$handleEvent(e),t.trigger.apply(void 0,arguments)},fabClick:function(e){arguments[0]=e=t.$handleEvent(e),t.fabClick.apply(void 0,arguments)}}})],1)},o=[]},a52c:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},afc8:function(t,e,i){var n=i("41ba");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("42a70ede",n,!0,{sourceMap:!1,shadowMode:!1})},bc11:function(t,e,i){var n=i("e08f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0c1b9648",n,!0,{sourceMap:!1,shadowMode:!1})},be4d:function(t,e,i){"use strict";function n(t){return("00"+t).substr(t.length)}i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.calCurrentYear=function(t){var e=new Date(t).getFullYear(),i=(new Date).getFullYear();return console.log(i-e),i-e},e.calDay=function(t,e){var i=new Date(t).getTime(),n=new Date(e).getTime(),a=n-i,o=a/864e5;return parseInt(o)},e.calYear=function(t,e){var i=new Date(t).getFullYear(),n=new Date(e).getFullYear();return console.log(n-i),n-i},e.formatDate=function(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var i={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var a in i)if(new RegExp("(".concat(a,")")).test(e)){var o=i[a]+"";e=e.replace(RegExp.$1,1===RegExp.$1.length?o:n(o))}return e},e.str2Date=function(t,e){e||(e="-");var i,n=t.split(e),a=parseInt(n[0]);i=0==n[1].indexOf("0")?parseInt(n[1].substring(1)):parseInt(n[1]);var o=parseInt(n[2]),s=new Date(a,i-1,o);return s},i("ac1f"),i("00b4"),i("5319"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("1276"),i("e25e"),i("c975")},be7a:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",e=this.$parent,i=e.$options.name;while(i!==t){if(e=e.$parent,!e)return!1;i=e.$options.name}return e}}};e.default=n},c083:function(t,e,i){var n=i("9292");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("16b06393",n,!0,{sourceMap:!1,shadowMode:!1})},c407:function(t,e,i){"use strict";i.r(e);var n=i("fe24"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},ce6e:function(t){t.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},d3e7:function(t,e,i){"use strict";i.r(e);var n=i("a26b"),a=i("6e22");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("665d");var s=i("f0c5"),r=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"4594e29e",null,!1,n["a"],void 0);e["default"]=r.exports},d8c3:function(t,e,i){"use strict";var n=i("6e8c"),a=i.n(n);a.a},dfb0:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniIcons:i("08ae").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-cursor-point"},[t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0?i("v-uni-view",{staticClass:"uni-fab",class:{"uni-fab--leftBottom":t.leftBottom,"uni-fab--rightBottom":t.rightBottom,"uni-fab--leftTop":t.leftTop,"uni-fab--rightTop":t.rightTop}},[i("v-uni-view",{staticClass:"uni-fab__content",class:{"uni-fab__content--left":"left"===t.horizontal,"uni-fab__content--right":"right"===t.horizontal,"uni-fab__content--flexDirection":"vertical"===t.direction,"uni-fab__content--flexDirectionStart":t.flexDirectionStart,"uni-fab__content--flexDirectionEnd":t.flexDirectionEnd,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{width:t.boxWidth,height:t.boxHeight,backgroundColor:t.styles.backgroundColor},attrs:{elevation:"5"}},[t.flexDirectionStart||t.horizontalLeft?i("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e(),t._l(t.content,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-fab__item",class:{"uni-fab__item--active":t.isShow},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t._onItemClick(n,e)}}},[i("v-uni-image",{staticClass:"uni-fab__item-image",attrs:{src:e.active?e.selectedIconPath:e.iconPath,mode:"aspectFit"}}),i("v-uni-text",{staticClass:"uni-fab__item-text",style:{color:e.active?t.styles.selectedColor:t.styles.color}},[t._v(t._s(e.text))])],1)})),t.flexDirectionEnd||t.horizontalRight?i("v-uni-view",{staticClass:"uni-fab__item uni-fab__item--first"}):t._e()],2)],1):t._e(),i("v-uni-view",{staticClass:"uni-fab__circle uni-fab__plus",class:{"uni-fab__circle--leftBottom":t.leftBottom,"uni-fab__circle--rightBottom":t.rightBottom,"uni-fab__circle--leftTop":t.leftTop,"uni-fab__circle--rightTop":t.rightTop,"uni-fab__content--other-platform":!t.isAndroidNvue},style:{"background-color":t.styles.buttonColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[i("uni-icons",{staticClass:"fab-circle-icon",class:{"uni-fab__plus--active":t.isShow&&t.content.length>0},attrs:{type:"plusempty",color:t.styles.iconColor,size:"32"}})],1)],1)},o=[]},e08f:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup-dialog[data-v-e6c1304c]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-e6c1304c]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-e6c1304c]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-e6c1304c]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-e6c1304c]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-e6c1304c]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-e6c1304c]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-e6c1304c]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-e6c1304c]{font-size:16px;color:#333}.uni-button-color[data-v-e6c1304c]{color:#12ae85}.uni-dialog-input[data-v-e6c1304c]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-e6c1304c]{color:#4cd964}.uni-popup__warn[data-v-e6c1304c]{color:#f0ad4e}.uni-popup__error[data-v-e6c1304c]{color:#dd524d}.uni-popup__info[data-v-e6c1304c]{color:#909399}',""]),t.exports=e},e31f:function(t,e,i){"use strict";var n=i("afc8"),a=i.n(n);a.a},ee4d:function(t,e,i){"use strict";i("7a82");var n=i("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("ce6e")),o=n(i("a52c")),s=n(i("9a7e")),r={en:a.default,"zh-Hans":o.default,"zh-Hant":s.default};e.default=r},f8f2:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-popup-dialog"},[i("v-uni-view",{staticClass:"uni-dialog-title"},[i("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+t.dialogType]},[t._v(t._s(t.titleText))])],1),"base"===t.mode?i("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[i("v-uni-text",{staticClass:"uni-dialog-content-text"},[t._v(t._s(t.content))])])],2):i("v-uni-view",{staticClass:"uni-dialog-content"},[t._t("default",[i("v-uni-input",{staticClass:"uni-dialog-input",attrs:{type:"text",placeholder:t.placeholderText,focus:t.focus},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})])],2),i("v-uni-view",{staticClass:"uni-dialog-button-group"},[i("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closeDialog.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text"},[t._v(t._s(t.closeText))])],1),i("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onOk.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[t._v(t._s(t.okText))])],1)],1)],1)},a=[]},fe24:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:function(){return{}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:!1,styles:{color:"#3c3e49",selectedColor:"#12ae85",backgroundColor:"#fff",buttonColor:"#12ae85",iconColor:"#fff"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+15+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")}},watch:{pattern:{handler:function(t,e){this.styles=Object.assign({},this.styles,t)},deep:!0}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow)},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,e){this.$emit("trigger",{index:t,item:e})},getPosition:function(t,e,i){return 0===t?this.horizontal===e&&this.vertical===i:1===t?this.direction===e&&this.vertical===i:2===t?this.direction===e&&this.horizontal===i:this.isShow&&this.direction===e?this.contentWidth:this.contentWidthMin}}};e.default=n}}]);