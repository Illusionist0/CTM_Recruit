(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-person-edit-skill"],{"0265":function(e,r,n){"use strict";n("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,n("a9e3");var t={computed:{contentLength:function(){return this.content.length}},props:{pl:{type:String,default:"请输入"},len:{type:Number,default:200}},data:function(){return{content:""}}};r.default=t},"045d":function(e,r,n){"use strict";var t=n("d8f7"),c=n.n(t);c.a},2595:function(e,r,n){"use strict";n("7a82"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;r.default={loginRule:[{name:"openId",checkType:"notnull",checkRule:"",errorMsg:"登录的openId为空,请从所属公众号菜单打开链接"},{name:"phoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"},{name:"code",checkType:"string",checkRule:"6",errorMsg:"请输入6位验证码"}],sendCodeRule:[{name:"phoneNo",checkType:"notnull",checkRule:"",errorMsg:"手机号不能为空"},{name:"phoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"}],regContentRule:[{name:"content",checkType:"notnull",checkRule:"",errorMsg:"内容不能为空"}],regResumeBaseRule:[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"姓名不能为空"},{name:"sex",checkType:"notnull",checkRule:"",errorMsg:"性别不能为空"},{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"联系方式格式不正确"},{name:"education",checkType:"notnull",checkRule:"",errorMsg:"最高学历不能为空"},{name:"timeToWork",checkType:"notnull",checkRule:"",errorMsg:"参加工作时间不能为空"},{name:"birthday",checkType:"notnull",checkRule:"",errorMsg:"出生年月不能为空"}],regExpectRule:[{name:"jobType",checkType:"notnull",checkRule:"",errorMsg:"求职类型不能为空"},{name:"postId",checkType:"notnull",checkRule:"",errorMsg:"职位不能为空"},{name:"industryId",checkType:"notnull",checkRule:"",errorMsg:"行业不能为空"},{name:"expectSalary",checkType:"notnull",checkRule:"",errorMsg:"期望薪资不能为空"}],regCompanyRule:[{name:"logo",checkType:"notnull",checkRule:"",errorMsg:"公司Logo不能为空"},{name:"name",checkType:"notnull",checkRule:"",errorMsg:"公司简称不能为空"},{name:"fullName",checkType:"notnull",checkRule:"",errorMsg:"公司全称不能为空"},{name:"industryId",checkType:"notnull",checkRule:"",errorMsg:"行业不能为空"},{name:"staffSize",checkType:"notnull",checkRule:"",errorMsg:"公司规模不能为空"},{name:"nature",checkType:"notnull",checkRule:"",errorMsg:"公司性质不能为空"},{name:"postName",checkType:"notnull",checkRule:"",errorMsg:"担任职位不能为空"}],regPositionRule:[{name:"postName",checkType:"notnull",checkRule:"",errorMsg:"职位名称不能为空"},{name:"minEducation",checkType:"notnull",checkRule:"",errorMsg:"学历不能为空"},{name:"salary",checkType:"notnull",checkRule:"",errorMsg:"薪资要求不能为空"},{name:"descr",checkType:"职位描述",checkRule:"",errorMsg:"职位描述不能为空"},{name:"address",checkType:"工作地点",checkRule:"",errorMsg:"工作地点不能为空"},{name:"addressHouse",checkType:"工作点门牌号",checkRule:"",errorMsg:"工作点门牌号不能为空"}],regCompanyAuthRule:[{name:"realName",checkType:"notnull",checkRule:"",errorMsg:"公司名称不能为空"},{name:"legalPerson",checkType:"notnull",checkRule:"",errorMsg:"法人姓名不能为空"},{name:"identity",checkType:"notnull",checkRule:"",errorMsg:"信用代码不能为空"},{name:"businessLicense",checkType:"notnull",checkRule:"",errorMsg:"营业执照不能为空"}],regCompanyEditRule:[{name:"logo",checkType:"notnull",checkRule:"",errorMsg:"公司Logo不能为空"},{name:"name",checkType:"notnull",checkRule:"",errorMsg:"公司简称不能为空"},{name:"fullName",checkType:"notnull",checkRule:"",errorMsg:"公司全称不能为空"},{name:"industryId",checkType:"notnull",checkRule:"",errorMsg:"行业不能为空"},{name:"staffSize",checkType:"notnull",checkRule:"",errorMsg:"公司规模不能为空"},{name:"natures",checkType:"notnull",checkRule:"",errorMsg:"公司性质不能为空"}],addTaskRule:[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"项目名称不能为空"},{name:"money",checkType:"int",checkRule:"1,10",errorMsg:"预算金额格式不正确"},{name:"type",checkType:"notnull",checkRule:"",errorMsg:"软件类型不能为空"},{name:"content",checkType:"notnull",checkRule:"",errorMsg:"需求详情不能为空"}],updataCustomerCardRule:[{name:"customerNo",checkType:"notnull",checkRule:"",errorMsg:"商户编号为空"},{name:"userName",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"idCard",checkType:"string",checkRule:"15,18",errorMsg:"身份证号格式不正确"},{name:"cardNo",checkType:"int",checkRule:"3,20",errorMsg:"银行卡号格式不正确"},{name:"cityNo",checkType:"notnull",checkRule:"",errorMsg:"请选择开户地区"},{name:"bankName",checkType:"notnull",checkRule:"",errorMsg:"未查询到银行名称"},{name:"phoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"},{name:"settleCardImgId",checkType:"notnull",checkRule:"",errorMsg:"请上传身份证和结算卡照片"},{name:"cardHolderIdImgId",checkType:"notnull",checkRule:"",errorMsg:"请上传手持身份证合影照片"}],ccAddRule:[{name:"cardNo",checkType:"int",checkRule:"3,20",errorMsg:"银行卡号格式不正确"},{name:"accountName",checkType:"notnull",checkRule:"",errorMsg:"开户名称不能为空"},{name:"reservedPhoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"},{name:"idCard",checkType:"string",checkRule:"15,18",errorMsg:"身份证号格式不正确"},{name:"bankName",checkType:"notnull",checkRule:"",errorMsg:"银行名称不能为空"}]}},"355f":function(e,r,n){"use strict";n.r(r);var t=n("e23e"),c=n("a5dd");for(var o in c)["default"].indexOf(o)<0&&function(e){n.d(r,e,(function(){return c[e]}))}(o);n("3770");var a=n("f0c5"),u=Object(a["a"])(c["default"],t["b"],t["c"],!1,null,"55200025",null,!1,t["a"],void 0);r["default"]=u.exports},3770:function(e,r,n){"use strict";var t=n("df6d"),c=n.n(t);c.a},"8d48":function(e,r,n){var t=n("24fb");r=t(!1),r.push([e.i,"uni-textarea[data-v-55200025]{height:%?400?%;width:100%}.r-top[data-v-55200025]{padding:%?10?%;background:#fff;border-radius:%?20?%;height:100%}.r-top-t[data-v-55200025]{display:flex;justify-content:space-between;font-family:PingFang SC;font-weight:400;line-height:20px;color:#999;opacity:1}",""]),e.exports=r},"8e77":function(e,r,n){n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("00b4"),n("a9e3"),n("c975"),e.exports={error:"",check:function(e,r){for(var n=0;n<r.length;n++){if(!r[n].checkType)return!0;if(!r[n].name)return!0;if(!r[n].errorMsg)return!0;if(!e[r[n].name])return this.error=r[n].errorMsg,!1;switch(r[n].checkType){case"string":var t=new RegExp("^.{"+r[n].checkRule+"}$");if(!t.test(e[r[n].name]))return this.error=r[n].errorMsg,!1;break;case"int":t=new RegExp("^(-[1-9]|[1-9])[0-9]{"+r[n].checkRule+"}$");if(!t.test(e[r[n].name]))return this.error=r[n].errorMsg,!1;break;case"between":if(!this.isNumber(e[r[n].name]))return this.error=r[n].errorMsg,!1;var c=r[n].checkRule.split(",");if(c[0]=Number(c[0]),c[1]=Number(c[1]),e[r[n].name]>c[1]||e[r[n].name]<c[0])return this.error=r[n].errorMsg,!1;break;case"betweenD":t=/^-?[1-9][0-9]?$/;if(!t.test(e[r[n].name]))return this.error=r[n].errorMsg,!1;c=r[n].checkRule.split(",");if(c[0]=Number(c[0]),c[1]=Number(c[1]),e[r[n].name]>c[1]||e[r[n].name]<c[0])return this.error=r[n].errorMsg,!1;break;case"betweenF":t=/^-?[0-9][0-9]?.+[0-9]+$/;if(!t.test(e[r[n].name]))return this.error=r[n].errorMsg,!1;c=r[n].checkRule.split(",");if(c[0]=Number(c[0]),c[1]=Number(c[1]),e[r[n].name]>c[1]||e[r[n].name]<c[0])return this.error=r[n].errorMsg,!1;break;case"same":if(e[r[n].name]!=r[n].checkRule)return this.error=r[n].errorMsg,!1;break;case"notsame":if(e[r[n].name]==r[n].checkRule)return this.error=r[n].errorMsg,!1;break;case"email":t=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!t.test(e[r[n].name]))return this.error=r[n].errorMsg,!1;break;case"phoneno":t=/^1[0-9]{10,10}$/;if(!t.test(e[r[n].name]))return this.error=r[n].errorMsg,!1;break;case"zipcode":t=/^[0-9]{6}$/;if(!t.test(e[r[n].name]))return this.error=r[n].errorMsg,!1;break;case"reg":t=new RegExp(r[n].checkRule);if(!t.test(e[r[n].name]))return this.error=r[n].errorMsg,!1;break;case"in":if(-1==r[n].checkRule.indexOf(e[r[n].name]))return this.error=r[n].errorMsg,!1;break;case"notnull":if(null==e[r[n].name]||e[r[n].name].length<1)return this.error=r[n].errorMsg,!1;break}}return!0},isNumber:function(e){return/^-?[1-9][0-9]?.?[0-9]*$/.test(e)}}},"95d9":function(e,r,n){"use strict";n.d(r,"b",(function(){return t})),n.d(r,"c",(function(){return c})),n.d(r,"a",(function(){}));var t=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("v-uni-view",{staticClass:"content reg-page"},[n("v-uni-view",{staticClass:"column body"},[n("v-uni-text",{staticClass:"title"},[e._v("我的优势")]),n("v-uni-text",{staticClass:"text-color"},[e._v("一句话介绍自己，突出核心优势")]),n("v-uni-view",{staticClass:"r-top"},[n("v-uni-textarea",{attrs:{maxlength:e.len,"placeholder-style":"color:rgba(153,153,153,1);",placeholder:"请输入内容"},model:{value:e.content,callback:function(r){e.content=r},expression:"content"}}),n("v-uni-view",{staticClass:"r-top-t"},[n("v-uni-view"),n("v-uni-view",[e._v(e._s(e.contentLength)+"/"+e._s(e.len))])],1)],1)],1),n("v-uni-view",{staticClass:"btn-row"},[n("v-uni-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.register.apply(void 0,arguments)}}},[e._v("保存")])],1)],1)},c=[]},a5dd:function(e,r,n){"use strict";n.r(r);var t=n("0265"),c=n.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){n.d(r,e,(function(){return t[e]}))}(o);r["default"]=c.a},b17f:function(e,r,n){"use strict";n.r(r);var t=n("95d9"),c=n("de9d");for(var o in c)["default"].indexOf(o)<0&&function(e){n.d(r,e,(function(){return c[e]}))}(o);n("045d");var a=n("f0c5"),u=Object(a["a"])(c["default"],t["b"],t["c"],!1,null,"4ab542a1",null,!1,t["a"],void 0);r["default"]=u.exports},b228:function(e,r,n){"use strict";n("7a82");var t=n("ee27").default;Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var c=t(n("f07e")),o=t(n("c964")),a=t(n("f3f3")),u=n("26cb"),l=t(n("355f")),s=t(n("2595")),i=t(n("8e77")),h={components:{mTextarea:l.default},computed:(0,a.default)((0,a.default)({},(0,u.mapState)(["openId","customerInfo"])),{},{contentLength:function(){return this.content.length}}),data:function(){return{id:0,content:"",len:150}},onLoad:function(e){console.log("query====",e),this.id=e.id,this.content=e.content,console.log(this.id)},methods:{register:function(){var e=this;return(0,o.default)((0,c.default)().mark((function r(){var n,t,o,a;return(0,c.default)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n={content:e.content},t=i.default.check(n,s.default.regContentRule),t){r.next=5;break}return uni.showToast({title:i.default.error,icon:"none"}),r.abrupt("return");case 5:return o={id:e.id,personalSkill:e.content},r.next=8,e.$apis.updateResumeBasic(o);case 8:a=r.sent,a&&(e.$mPage.prePage().resume.personalSkill=e.content,uni.navigateBack({delta:1}));case 10:case"end":return r.stop()}}),r)})))()}}};r.default=h},d8b7:function(e,r,n){var t=n("24fb");r=t(!1),r.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-4ab542a1]{background:#fff;box-sizing:border-box}.body[data-v-4ab542a1]{padding:%?20?%}.title[data-v-4ab542a1]{font-size:%?40?%;font-weight:700}.btn-row[data-v-4ab542a1]{position:fixed;bottom:%?0?%;width:100%;background-color:#fff;box-sizing:border-box}.btn-row uni-button[data-v-4ab542a1]{background-color:#26cd8c;height:%?90?%;line-height:%?90?%;font-size:%?34?%;border-radius:%?0?%}uni-textarea[data-v-4ab542a1]{height:%?400?%;width:100%}.r-top[data-v-4ab542a1]{margin-top:%?50?%;padding:%?10?%;background:#fff;border-radius:%?20?%;height:100%}.r-top-t[data-v-4ab542a1]{display:flex;justify-content:space-between;font-family:PingFang SC;font-weight:400;line-height:20px;color:#999;opacity:1}',""]),e.exports=r},d8f7:function(e,r,n){var t=n("d8b7");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var c=n("4f06").default;c("338c2fe8",t,!0,{sourceMap:!1,shadowMode:!1})},de9d:function(e,r,n){"use strict";n.r(r);var t=n("b228"),c=n.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){n.d(r,e,(function(){return t[e]}))}(o);r["default"]=c.a},df6d:function(e,r,n){var t=n("8d48");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var c=n("4f06").default;c("0d7bdbb0",t,!0,{sourceMap:!1,shadowMode:!1})},e23e:function(e,r,n){"use strict";n.d(r,"b",(function(){return t})),n.d(r,"c",(function(){return c})),n.d(r,"a",(function(){}));var t=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("v-uni-view",{staticClass:"r-top"},[n("v-uni-textarea",{attrs:{maxlength:e.len,"placeholder-style":"color:rgba(153,153,153,1);",placeholder:e.pl},model:{value:e.content,callback:function(r){e.content=r},expression:"content"}}),n("v-uni-view",{staticClass:"r-top-t"},[n("v-uni-view"),n("v-uni-view",[e._v(e._s(e.contentLength)+"/"+e._s(e.len))])],1)],1)},c=[]}}]);