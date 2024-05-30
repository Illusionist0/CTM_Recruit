(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-person-edit-work-content"],{"0265":function(e,n,r){"use strict";r("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,r("a9e3");var t={computed:{contentLength:function(){return this.content.length}},props:{pl:{type:String,default:"请输入"},len:{type:Number,default:200}},data:function(){return{content:""}}};n.default=t},2595:function(e,n,r){"use strict";r("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default={loginRule:[{name:"openId",checkType:"notnull",checkRule:"",errorMsg:"登录的openId为空,请从所属公众号菜单打开链接"},{name:"phoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"},{name:"code",checkType:"string",checkRule:"6",errorMsg:"请输入6位验证码"}],sendCodeRule:[{name:"phoneNo",checkType:"notnull",checkRule:"",errorMsg:"手机号不能为空"},{name:"phoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"}],regContentRule:[{name:"content",checkType:"notnull",checkRule:"",errorMsg:"内容不能为空"}],regResumeBaseRule:[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"姓名不能为空"},{name:"sex",checkType:"notnull",checkRule:"",errorMsg:"性别不能为空"},{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"联系方式格式不正确"},{name:"education",checkType:"notnull",checkRule:"",errorMsg:"最高学历不能为空"},{name:"timeToWork",checkType:"notnull",checkRule:"",errorMsg:"参加工作时间不能为空"},{name:"birthday",checkType:"notnull",checkRule:"",errorMsg:"出生年月不能为空"}],regExpectRule:[{name:"jobType",checkType:"notnull",checkRule:"",errorMsg:"求职类型不能为空"},{name:"postId",checkType:"notnull",checkRule:"",errorMsg:"职位不能为空"},{name:"industryId",checkType:"notnull",checkRule:"",errorMsg:"行业不能为空"},{name:"expectSalary",checkType:"notnull",checkRule:"",errorMsg:"期望薪资不能为空"}],regCompanyRule:[{name:"logo",checkType:"notnull",checkRule:"",errorMsg:"公司Logo不能为空"},{name:"name",checkType:"notnull",checkRule:"",errorMsg:"公司简称不能为空"},{name:"fullName",checkType:"notnull",checkRule:"",errorMsg:"公司全称不能为空"},{name:"industryId",checkType:"notnull",checkRule:"",errorMsg:"行业不能为空"},{name:"staffSize",checkType:"notnull",checkRule:"",errorMsg:"公司规模不能为空"},{name:"nature",checkType:"notnull",checkRule:"",errorMsg:"公司性质不能为空"},{name:"postName",checkType:"notnull",checkRule:"",errorMsg:"担任职位不能为空"}],regPositionRule:[{name:"postName",checkType:"notnull",checkRule:"",errorMsg:"职位名称不能为空"},{name:"minEducation",checkType:"notnull",checkRule:"",errorMsg:"学历不能为空"},{name:"salary",checkType:"notnull",checkRule:"",errorMsg:"薪资要求不能为空"},{name:"descr",checkType:"职位描述",checkRule:"",errorMsg:"职位描述不能为空"},{name:"address",checkType:"工作地点",checkRule:"",errorMsg:"工作地点不能为空"},{name:"addressHouse",checkType:"工作点门牌号",checkRule:"",errorMsg:"工作点门牌号不能为空"}],regCompanyAuthRule:[{name:"realName",checkType:"notnull",checkRule:"",errorMsg:"公司名称不能为空"},{name:"legalPerson",checkType:"notnull",checkRule:"",errorMsg:"法人姓名不能为空"},{name:"identity",checkType:"notnull",checkRule:"",errorMsg:"信用代码不能为空"},{name:"businessLicense",checkType:"notnull",checkRule:"",errorMsg:"营业执照不能为空"}],regCompanyEditRule:[{name:"logo",checkType:"notnull",checkRule:"",errorMsg:"公司Logo不能为空"},{name:"name",checkType:"notnull",checkRule:"",errorMsg:"公司简称不能为空"},{name:"fullName",checkType:"notnull",checkRule:"",errorMsg:"公司全称不能为空"},{name:"industryId",checkType:"notnull",checkRule:"",errorMsg:"行业不能为空"},{name:"staffSize",checkType:"notnull",checkRule:"",errorMsg:"公司规模不能为空"},{name:"natures",checkType:"notnull",checkRule:"",errorMsg:"公司性质不能为空"}],addTaskRule:[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"项目名称不能为空"},{name:"money",checkType:"int",checkRule:"1,10",errorMsg:"预算金额格式不正确"},{name:"type",checkType:"notnull",checkRule:"",errorMsg:"软件类型不能为空"},{name:"content",checkType:"notnull",checkRule:"",errorMsg:"需求详情不能为空"}],updataCustomerCardRule:[{name:"customerNo",checkType:"notnull",checkRule:"",errorMsg:"商户编号为空"},{name:"userName",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"idCard",checkType:"string",checkRule:"15,18",errorMsg:"身份证号格式不正确"},{name:"cardNo",checkType:"int",checkRule:"3,20",errorMsg:"银行卡号格式不正确"},{name:"cityNo",checkType:"notnull",checkRule:"",errorMsg:"请选择开户地区"},{name:"bankName",checkType:"notnull",checkRule:"",errorMsg:"未查询到银行名称"},{name:"phoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"},{name:"settleCardImgId",checkType:"notnull",checkRule:"",errorMsg:"请上传身份证和结算卡照片"},{name:"cardHolderIdImgId",checkType:"notnull",checkRule:"",errorMsg:"请上传手持身份证合影照片"}],ccAddRule:[{name:"cardNo",checkType:"int",checkRule:"3,20",errorMsg:"银行卡号格式不正确"},{name:"accountName",checkType:"notnull",checkRule:"",errorMsg:"开户名称不能为空"},{name:"reservedPhoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"},{name:"idCard",checkType:"string",checkRule:"15,18",errorMsg:"身份证号格式不正确"},{name:"bankName",checkType:"notnull",checkRule:"",errorMsg:"银行名称不能为空"}]}},"355f":function(e,n,r){"use strict";r.r(n);var t=r("e23e"),c=r("a5dd");for(var o in c)["default"].indexOf(o)<0&&function(e){r.d(n,e,(function(){return c[e]}))}(o);r("3770");var a=r("f0c5"),u=Object(a["a"])(c["default"],t["b"],t["c"],!1,null,"55200025",null,!1,t["a"],void 0);n["default"]=u.exports},3770:function(e,n,r){"use strict";var t=r("df6d"),c=r.n(t);c.a},"593e":function(e,n,r){"use strict";r.r(n);var t=r("97e6"),c=r("f786");for(var o in c)["default"].indexOf(o)<0&&function(e){r.d(n,e,(function(){return c[e]}))}(o);r("8701");var a=r("f0c5"),u=Object(a["a"])(c["default"],t["b"],t["c"],!1,null,"04d32200",null,!1,t["a"],void 0);n["default"]=u.exports},"7ec1":function(e,n,r){var t=r("24fb");n=t(!1),n.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-04d32200]{background:#fff;box-sizing:border-box}.title[data-v-04d32200]{font-size:%?40?%;font-weight:700}.btn-row[data-v-04d32200]{position:fixed;bottom:%?20?%;width:100%;box-sizing:border-box}.btn-row uni-button[data-v-04d32200]{background-color:#26cd8c;height:%?90?%;line-height:%?90?%;font-size:%?34?%;width:90%}uni-textarea[data-v-04d32200]{width:100%;font-size:%?28?%}.r-top[data-v-04d32200]{margin-top:%?20?%;padding:%?10?%;background:#fff;border-radius:%?20?%;height:100%}.r-top-t[data-v-04d32200]{display:flex;justify-content:space-between;font-family:PingFang SC;font-weight:400;line-height:20px;color:#999;opacity:1}',""]),e.exports=n},8701:function(e,n,r){"use strict";var t=r("deba"),c=r.n(t);c.a},"8d48":function(e,n,r){var t=r("24fb");n=t(!1),n.push([e.i,"uni-textarea[data-v-55200025]{height:%?400?%;width:100%}.r-top[data-v-55200025]{padding:%?10?%;background:#fff;border-radius:%?20?%;height:100%}.r-top-t[data-v-55200025]{display:flex;justify-content:space-between;font-family:PingFang SC;font-weight:400;line-height:20px;color:#999;opacity:1}",""]),e.exports=n},"8e77":function(e,n,r){r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("25f0"),r("00b4"),r("a9e3"),r("c975"),e.exports={error:"",check:function(e,n){for(var r=0;r<n.length;r++){if(!n[r].checkType)return!0;if(!n[r].name)return!0;if(!n[r].errorMsg)return!0;if(!e[n[r].name])return this.error=n[r].errorMsg,!1;switch(n[r].checkType){case"string":var t=new RegExp("^.{"+n[r].checkRule+"}$");if(!t.test(e[n[r].name]))return this.error=n[r].errorMsg,!1;break;case"int":t=new RegExp("^(-[1-9]|[1-9])[0-9]{"+n[r].checkRule+"}$");if(!t.test(e[n[r].name]))return this.error=n[r].errorMsg,!1;break;case"between":if(!this.isNumber(e[n[r].name]))return this.error=n[r].errorMsg,!1;var c=n[r].checkRule.split(",");if(c[0]=Number(c[0]),c[1]=Number(c[1]),e[n[r].name]>c[1]||e[n[r].name]<c[0])return this.error=n[r].errorMsg,!1;break;case"betweenD":t=/^-?[1-9][0-9]?$/;if(!t.test(e[n[r].name]))return this.error=n[r].errorMsg,!1;c=n[r].checkRule.split(",");if(c[0]=Number(c[0]),c[1]=Number(c[1]),e[n[r].name]>c[1]||e[n[r].name]<c[0])return this.error=n[r].errorMsg,!1;break;case"betweenF":t=/^-?[0-9][0-9]?.+[0-9]+$/;if(!t.test(e[n[r].name]))return this.error=n[r].errorMsg,!1;c=n[r].checkRule.split(",");if(c[0]=Number(c[0]),c[1]=Number(c[1]),e[n[r].name]>c[1]||e[n[r].name]<c[0])return this.error=n[r].errorMsg,!1;break;case"same":if(e[n[r].name]!=n[r].checkRule)return this.error=n[r].errorMsg,!1;break;case"notsame":if(e[n[r].name]==n[r].checkRule)return this.error=n[r].errorMsg,!1;break;case"email":t=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!t.test(e[n[r].name]))return this.error=n[r].errorMsg,!1;break;case"phoneno":t=/^1[0-9]{10,10}$/;if(!t.test(e[n[r].name]))return this.error=n[r].errorMsg,!1;break;case"zipcode":t=/^[0-9]{6}$/;if(!t.test(e[n[r].name]))return this.error=n[r].errorMsg,!1;break;case"reg":t=new RegExp(n[r].checkRule);if(!t.test(e[n[r].name]))return this.error=n[r].errorMsg,!1;break;case"in":if(-1==n[r].checkRule.indexOf(e[n[r].name]))return this.error=n[r].errorMsg,!1;break;case"notnull":if(null==e[n[r].name]||e[n[r].name].length<1)return this.error=n[r].errorMsg,!1;break}}return!0},isNumber:function(e){return/^-?[1-9][0-9]?.?[0-9]*$/.test(e)}}},9417:function(e,n,r){"use strict";r("7a82");var t=r("ee27").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=t(r("f07e")),o=t(r("c964")),a=t(r("f3f3")),u=r("26cb"),l=t(r("355f")),s=t(r("2595")),i=t(r("8e77")),h={components:{mTextarea:l.default},computed:(0,a.default)((0,a.default)({},(0,u.mapState)(["openId","customerInfo"])),{},{contentLength:function(){return this.content.length}}),data:function(){return{KeyboardHeight:0,height:0,id:0,content:"",len:1500,placeholder:"如:\n1、主要负责新员工入职培训。\n2、分析制定员工每个月的个人销售业绩；\n3、帮助员工提高每日客单价，整体店面管理等工作"}},mounted:function(){var e=this;uni.onKeyboardHeightChange((function(n){console.log("log",n),e.KeyboardHeight=n.height}))},onLoad:function(e){console.log("query====",e),this.id=e.id,e.content&&"undefined"!=e.content&&(this.content=e.content),console.log(this.id);var n=uni.getSystemInfoSync().windowHeight;this.height=n-uni.upx2px(200)},methods:{register:function(){var e=this;return(0,o.default)((0,c.default)().mark((function n(){var r,t;return(0,c.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r={content:e.content},t=i.default.check(r,s.default.regContentRule),t){n.next=5;break}return uni.showToast({title:i.default.error,icon:"none"}),n.abrupt("return");case 5:e.$mPage.prePage().workContent=e.content,uni.navigateBack({delta:1});case 7:case"end":return n.stop()}}),n)})))()}}};n.default=h},"97e6":function(e,n,r){"use strict";r.d(n,"b",(function(){return t})),r.d(n,"c",(function(){return c})),r.d(n,"a",(function(){}));var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("v-uni-view",{staticClass:"content reg-page"},[r("v-uni-view",{staticClass:"column padding-20"},[r("v-uni-view",{staticClass:"r-top"},[r("v-uni-textarea",{style:{height:e.height+"px"},attrs:{"adjust-position":!1,maxlength:e.len,"placeholder-style":"color:rgba(153,153,153,1);",placeholder:e.placeholder},model:{value:e.content,callback:function(n){e.content=n},expression:"content"}}),r("v-uni-view",{staticClass:"r-top-t"},[r("v-uni-view"),r("v-uni-view",[e._v(e._s(e.contentLength)+"/"+e._s(e.len))])],1)],1)],1),r("v-uni-view",{staticClass:"btn-row"},[r("v-uni-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.register.apply(void 0,arguments)}}},[e._v("保存")])],1)],1)},c=[]},a5dd:function(e,n,r){"use strict";r.r(n);var t=r("0265"),c=r.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){r.d(n,e,(function(){return t[e]}))}(o);n["default"]=c.a},deba:function(e,n,r){var t=r("7ec1");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var c=r("4f06").default;c("b74043f6",t,!0,{sourceMap:!1,shadowMode:!1})},df6d:function(e,n,r){var t=r("8d48");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var c=r("4f06").default;c("0d7bdbb0",t,!0,{sourceMap:!1,shadowMode:!1})},e23e:function(e,n,r){"use strict";r.d(n,"b",(function(){return t})),r.d(n,"c",(function(){return c})),r.d(n,"a",(function(){}));var t=function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("v-uni-view",{staticClass:"r-top"},[r("v-uni-textarea",{attrs:{maxlength:e.len,"placeholder-style":"color:rgba(153,153,153,1);",placeholder:e.pl},model:{value:e.content,callback:function(n){e.content=n},expression:"content"}}),r("v-uni-view",{staticClass:"r-top-t"},[r("v-uni-view"),r("v-uni-view",[e._v(e._s(e.contentLength)+"/"+e._s(e.len))])],1)],1)},c=[]},f786:function(e,n,r){"use strict";r.r(n);var t=r("9417"),c=r.n(t);for(var o in t)["default"].indexOf(o)<0&&function(e){r.d(n,e,(function(){return t[e]}))}(o);n["default"]=c.a}}]);