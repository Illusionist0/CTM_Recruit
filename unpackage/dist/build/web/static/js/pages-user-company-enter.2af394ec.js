(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-company-enter"],{1866:function(e,t,n){var a=n("f0bf");(function(){var e=a.util,t=a.SHA1=function(n,a){var r=e.wordsToBytes(t._sha1(n));return a&&a.asBytes?r:a&&a.asString?e.bytesToString(r):e.bytesToHex(r)};t._sha1=function(t){var n=e.stringToWords(t),a=8*t.length,r=[],i=1732584193,o=-271733879,c=-1732584194,s=271733878,u=-1009589776;n[a>>5]|=128<<24-a%32,n[15+(a+64>>>9<<4)]=a;for(var l=0;l<n.length;l+=16){for(var d=i,h=o,f=c,p=s,g=u,m=0;m<80;m++){if(m<16)r[m]=n[l+m];else{var v=r[m-3]^r[m-8]^r[m-14]^r[m-16];r[m]=v<<1|v>>>31}var b=(i<<5|i>>>27)+u+(r[m]>>>0)+(m<20?1518500249+(o&c|~o&s):m<40?1859775393+(o^c^s):m<60?(o&c|o&s|c&s)-1894007588:(o^c^s)-899497514);u=s,s=c,c=o<<30|o>>>2,o=i,i=b}i+=d,o+=h,c+=f,s+=p,u+=g}return[i,o,c,s,u]},t._blocksize=16})(),e.exports=a},"1aaf":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"bjx-inputs",style:e.getStyle},[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"bjx-background",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.isShow=!1}}}),n("v-uni-view",{staticClass:"bjx-con"},[e._t("left"),n("v-uni-input",{attrs:{disabled:e.theDisabled,placeholder:e.placeholder,autocomplete:"off"},on:{input:function(t){arguments[0]=t=e.$handleEvent(t),e.theInput.apply(void 0,arguments)},focus:function(t){arguments[0]=t=e.$handleEvent(t),e.theFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.theBlur.apply(void 0,arguments)},click:function(t){arguments[0]=t=e.$handleEvent(t),e.isShow=e.data.length}},model:{value:e.theValue,callback:function(t){e.theValue=t},expression:"theValue"}}),e._t("right")],2),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"bjx-select"},[n("v-uni-view",{staticClass:"data"},e._l(e.data,(function(t,a){return n("v-uni-view",{key:a,staticClass:"select-item",class:"item-"+e.overflow,on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.selectItem(t,a)}}},[n("v-uni-view",{staticClass:"item-text",class:{active:e.getItem(t)==e.theValue}},[e._v(e._s(e.getItem(t)))])],1)})),1),n("v-uni-view",{staticClass:"item-close",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.isShow=!1}}},[e._v("收起")])],1)],1)},r=[]},"1c0c":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={loginRule:[{name:"openId",checkType:"notnull",checkRule:"",errorMsg:"登录的openId为空,请从所属公众号菜单打开链接"},{name:"phoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"},{name:"code",checkType:"string",checkRule:"6",errorMsg:"请输入6位验证码"}],sendCodeRule:[{name:"phoneNo",checkType:"notnull",checkRule:"",errorMsg:"手机号不能为空"},{name:"phoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"}],regContentRule:[{name:"content",checkType:"notnull",checkRule:"",errorMsg:"内容不能为空"}],regResumeBaseRule:[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"姓名不能为空"},{name:"sex",checkType:"notnull",checkRule:"",errorMsg:"性别不能为空"},{name:"phone",checkType:"phoneno",checkRule:"",errorMsg:"联系方式格式不正确"},{name:"education",checkType:"notnull",checkRule:"",errorMsg:"最高学历不能为空"},{name:"timeToWork",checkType:"notnull",checkRule:"",errorMsg:"参加工作时间不能为空"},{name:"birthday",checkType:"notnull",checkRule:"",errorMsg:"出生年月不能为空"}],regExpectRule:[{name:"jobType",checkType:"notnull",checkRule:"",errorMsg:"求职类型不能为空"},{name:"postId",checkType:"notnull",checkRule:"",errorMsg:"职位不能为空"},{name:"industryId",checkType:"notnull",checkRule:"",errorMsg:"行业不能为空"},{name:"expectSalary",checkType:"notnull",checkRule:"",errorMsg:"期望薪资不能为空"}],regCompanyRule:[{name:"logo",checkType:"notnull",checkRule:"",errorMsg:"公司Logo不能为空"},{name:"name",checkType:"notnull",checkRule:"",errorMsg:"公司简称不能为空"},{name:"fullName",checkType:"notnull",checkRule:"",errorMsg:"公司全称不能为空"},{name:"industryId",checkType:"notnull",checkRule:"",errorMsg:"行业不能为空"},{name:"staffSize",checkType:"notnull",checkRule:"",errorMsg:"公司规模不能为空"},{name:"nature",checkType:"notnull",checkRule:"",errorMsg:"公司性质不能为空"},{name:"postName",checkType:"notnull",checkRule:"",errorMsg:"担任职位不能为空"}],regPositionRule:[{name:"postName",checkType:"notnull",checkRule:"",errorMsg:"职位名称不能为空"},{name:"minEducation",checkType:"notnull",checkRule:"",errorMsg:"学历不能为空"},{name:"salary",checkType:"notnull",checkRule:"",errorMsg:"薪资要求不能为空"},{name:"descr",checkType:"职位描述",checkRule:"",errorMsg:"职位描述不能为空"},{name:"address",checkType:"工作地点",checkRule:"",errorMsg:"工作地点不能为空"},{name:"addressHouse",checkType:"工作点门牌号",checkRule:"",errorMsg:"工作点门牌号不能为空"}],regCompanyAuthRule:[{name:"realName",checkType:"notnull",checkRule:"",errorMsg:"公司名称不能为空"},{name:"legalPerson",checkType:"notnull",checkRule:"",errorMsg:"法人姓名不能为空"},{name:"identity",checkType:"notnull",checkRule:"",errorMsg:"信用代码不能为空"},{name:"businessLicense",checkType:"notnull",checkRule:"",errorMsg:"营业执照不能为空"}],regCompanyEditRule:[{name:"logo",checkType:"notnull",checkRule:"",errorMsg:"公司Logo不能为空"},{name:"name",checkType:"notnull",checkRule:"",errorMsg:"公司简称不能为空"},{name:"fullName",checkType:"notnull",checkRule:"",errorMsg:"公司全称不能为空"},{name:"industryId",checkType:"notnull",checkRule:"",errorMsg:"行业不能为空"},{name:"staffSize",checkType:"notnull",checkRule:"",errorMsg:"公司规模不能为空"},{name:"natures",checkType:"notnull",checkRule:"",errorMsg:"公司性质不能为空"}],addTaskRule:[{name:"name",checkType:"notnull",checkRule:"",errorMsg:"项目名称不能为空"},{name:"money",checkType:"int",checkRule:"1,10",errorMsg:"预算金额格式不正确"},{name:"type",checkType:"notnull",checkRule:"",errorMsg:"软件类型不能为空"},{name:"content",checkType:"notnull",checkRule:"",errorMsg:"需求详情不能为空"}],updataCustomerCardRule:[{name:"customerNo",checkType:"notnull",checkRule:"",errorMsg:"商户编号为空"},{name:"userName",checkType:"string",checkRule:"1,3",errorMsg:"姓名应为1-3个字符"},{name:"idCard",checkType:"string",checkRule:"15,18",errorMsg:"身份证号格式不正确"},{name:"cardNo",checkType:"int",checkRule:"3,20",errorMsg:"银行卡号格式不正确"},{name:"cityNo",checkType:"notnull",checkRule:"",errorMsg:"请选择开户地区"},{name:"bankName",checkType:"notnull",checkRule:"",errorMsg:"未查询到银行名称"},{name:"phoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"},{name:"settleCardImgId",checkType:"notnull",checkRule:"",errorMsg:"请上传身份证和结算卡照片"},{name:"cardHolderIdImgId",checkType:"notnull",checkRule:"",errorMsg:"请上传手持身份证合影照片"}],ccAddRule:[{name:"cardNo",checkType:"int",checkRule:"3,20",errorMsg:"银行卡号格式不正确"},{name:"accountName",checkType:"notnull",checkRule:"",errorMsg:"开户名称不能为空"},{name:"reservedPhoneNo",checkType:"phoneno",checkRule:"",errorMsg:"手机号格式不正确"},{name:"idCard",checkType:"string",checkRule:"15,18",errorMsg:"身份证号格式不正确"},{name:"bankName",checkType:"notnull",checkRule:"",errorMsg:"银行名称不能为空"}]}},"22f5":function(e,t,n){"use strict";n.r(t);var a=n("1aaf"),r=n("7943");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("51ea");var o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"184933c0",null,!1,a["a"],void 0);t["default"]=c.exports},"2c9b":function(e,t,n){var a=n("4f91");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("5d15e9a6",a,!0,{sourceMap:!1,shadowMode:!1})},"3a07":function(e,t,n){"use strict";function a(e){return("00"+e).substr(e.length)}n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.calCurrentYear=function(e){var t=new Date(e).getFullYear(),n=(new Date).getFullYear();return console.log(n-t),n-t},t.calDay=function(e,t){var n=new Date(e).getTime(),a=new Date(t).getTime(),r=a-n,i=r/864e5;return parseInt(i)},t.calYear=function(e,t){var n=new Date(e).getFullYear(),a=new Date(t).getFullYear();return console.log(a-n),a-n},t.formatDate=function(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var r in n)if(new RegExp("(".concat(r,")")).test(t)){var i=n[r]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?i:a(i))}return t},t.str2Date=function(e,t){t||(t="-");var n,a=e.split(t),r=parseInt(a[0]);n=0==a[1].indexOf("0")?parseInt(a[1].substring(1)):parseInt(a[1]);var i=parseInt(a[2]),o=new Date(r,n-1,i);return o},n("ac1f"),n("00b4"),n("5319"),n("4d63"),n("c607"),n("2c3e"),n("25f0"),n("1276"),n("e25e"),n("c975")},"3a18":function(e,t,n){var a=n("72a5");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=n("4f06").default;r("075f687c",a,!0,{sourceMap:!1,shadowMode:!1})},"45b0":function(e,t,n){n("d9e2"),n("d401"),n("e9c4");var a=n("b8dc"),r=n("eff8");n("5eac"),n("1866");var i=n("f0bf"),o=function(){var e=new Date;e.setHours(e.getHours()+a.timeout);var t=e.toISOString(),n={expiration:t,conditions:[["content-length-range",0,838860800]]},i=r.encode(JSON.stringify(n));return console.log(i),i},c=function(e){var t=a.AccessKeySecret,n=i.HMAC(i.SHA1,e,t,{asBytes:!0}),r=i.util.bytesToBase64(n);return console.log(r),r};e.exports=function(e,t,n,r,i){if(!t||t.length<9)uni.showModal({title:"图片错误",content:"请重试",showCancel:!1});else{var s=null;s=1==e?n+(new Date).getTime()+Math.floor(150*Math.random())+".mp4":n+(new Date).getTime()+Math.floor(150*Math.random())+".png";var u=a.uploadImageUrl,l=a.OSSAccessKeyId,d=o(),h=c(d);uni.uploadFile({url:u,filePath:t,name:"file",formData:{key:s,policy:d,OSSAccessKeyId:l,signature:h,success_action_status:"200"},success:function(e){console.log(e),200==e.statusCode?r(u+s):i(new Error("上传错误:"+JSON.stringify(e)))},fail:function(e){e.wxaddinfo=u,i(e)}})}}},"4f91":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.navbar[data-v-7109263d]{position:fixed;top:0;width:100%;background-color:#01beff;z-index:99;align-items:center;display:flex;justify-content:center}.navbar uni-text[data-v-7109263d]{color:#fff;font-size:%?30?%}uni-input[data-v-7109263d]{width:90%}.input-group[data-v-7109263d]{border-radius:%?10?%;margin-top:%?10?%;overflow:hidden;margin-bottom:%?140?%}.notice[data-v-7109263d]{display:flex;flex-direction:row;align-items:center;padding:%?20?%}.notice .yzb-tixing[data-v-7109263d]{margin-right:%?10?%;color:#f0ad4e;font-weight:700;font-size:%?40?%}.notice uni-text[data-v-7109263d]:last-child{color:#666}.input-row[data-v-7109263d]{display:flex;flex-direction:row;position:relative;background:#fff;justify-content:space-between;align-items:center;padding:%?15?% %?10?%}.input-row .title[data-v-7109263d]{width:25%;padding:%?20?% 0;padding-left:%?20?%;line-height:%?50?%}.border-bottom-1px[data-v-7109263d]{position:relative}.border-bottom-1px[data-v-7109263d]::after{position:absolute;z-index:1;right:0;bottom:0;left:%?20?%;right:%?20?%;height:%?1?%;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e2e2e2}.header[data-v-7109263d]{display:flex;flex-direction:column}.header .tip[data-v-7109263d]{font-size:%?24?%;color:#666;margin-left:%?20?%}.head-img[data-v-7109263d]{margin-right:%?15?%}.head-img uni-image[data-v-7109263d]{width:%?160?%;height:%?160?%;border-radius:50%}uni-radio-group[data-v-7109263d]{margin-right:%?10?%}.radio[data-v-7109263d]{margin-left:%?20?%}.input-column[data-v-7109263d]{display:flex;flex-direction:column;background-color:#fff;padding:%?30?% %?20?% %?10?% %?20?%}.input-column .title[data-v-7109263d]{margin-left:%?10?%}.input-column .input-item[data-v-7109263d]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.input-column .picker[data-v-7109263d]{padding:%?30?% 0;margin-left:%?10?%;position:relative}.input-column .picker uni-picker[data-v-7109263d]{font-size:%?32?%;width:100%;position:absolute}.input-column .yzb-next[data-v-7109263d]{float:right;color:#999}.content[data-v-7109263d]{background:#fff}.btn-row[data-v-7109263d]{position:fixed;z-index:999;bottom:%?0?%;padding:%?20?%;background-color:#fff;width:100%;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.btn-row .btn-delete[data-v-7109263d]{background-color:#f4f4f4;height:%?90?%;line-height:%?90?%;margin-right:%?20?%;font-size:%?34?%;color:#333;width:30%}.btn-row .btn-save[data-v-7109263d]{background-color:#01beff;height:%?90?%;line-height:%?90?%;font-size:%?34?%}.btn-row .width-55[data-v-7109263d]{width:55%}.btn-row .width-90[data-v-7109263d]{width:90%}',""]),e.exports=t},"51ea":function(e,t,n){"use strict";var a=n("3a18"),r=n.n(a);r.a},"5eac":function(e,t,n){n("fb6a");var a=n("f0bf");(function(){var e=a.util;a.HMAC=function(t,n,a,r){a=a.length>4*t._blocksize?t(a,{asBytes:!0}):e.stringToBytes(a);for(var i=a,o=a.slice(0),c=0;c<4*t._blocksize;c++)i[c]^=92,o[c]^=54;var s=t(e.bytesToString(i)+t(e.bytesToString(o)+n,{asString:!0}),{asBytes:!0});return r&&r.asBytes?s:r&&r.asString?e.bytesToString(s):e.bytesToHex(s)}})(),e.exports=a},"6d8f":function(e,t,n){n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0"),n("00b4"),n("a9e3"),n("c975"),e.exports={error:"",check:function(e,t){for(var n=0;n<t.length;n++){if(!t[n].checkType)return!0;if(!t[n].name)return!0;if(!t[n].errorMsg)return!0;if(!e[t[n].name])return this.error=t[n].errorMsg,!1;switch(t[n].checkType){case"string":var a=new RegExp("^.{"+t[n].checkRule+"}$");if(!a.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"int":a=new RegExp("^(-[1-9]|[1-9])[0-9]{"+t[n].checkRule+"}$");if(!a.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"between":if(!this.isNumber(e[t[n].name]))return this.error=t[n].errorMsg,!1;var r=t[n].checkRule.split(",");if(r[0]=Number(r[0]),r[1]=Number(r[1]),e[t[n].name]>r[1]||e[t[n].name]<r[0])return this.error=t[n].errorMsg,!1;break;case"betweenD":a=/^-?[1-9][0-9]?$/;if(!a.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;r=t[n].checkRule.split(",");if(r[0]=Number(r[0]),r[1]=Number(r[1]),e[t[n].name]>r[1]||e[t[n].name]<r[0])return this.error=t[n].errorMsg,!1;break;case"betweenF":a=/^-?[0-9][0-9]?.+[0-9]+$/;if(!a.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;r=t[n].checkRule.split(",");if(r[0]=Number(r[0]),r[1]=Number(r[1]),e[t[n].name]>r[1]||e[t[n].name]<r[0])return this.error=t[n].errorMsg,!1;break;case"same":if(e[t[n].name]!=t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"notsame":if(e[t[n].name]==t[n].checkRule)return this.error=t[n].errorMsg,!1;break;case"email":a=/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;if(!a.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"phoneno":a=/^1[0-9]{10,10}$/;if(!a.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"zipcode":a=/^[0-9]{6}$/;if(!a.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"reg":a=new RegExp(t[n].checkRule);if(!a.test(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"in":if(-1==t[n].checkRule.indexOf(e[t[n].name]))return this.error=t[n].errorMsg,!1;break;case"notnull":if(null==e[t[n].name]||e[t[n].name].length<1)return this.error=t[n].errorMsg,!1;break}}return!0},isNumber:function(e){return/^-?[1-9][0-9]?.?[0-9]*$/.test(e)}}},"72a5":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 背景颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.bjx-inputs[data-v-184933c0]{max-width:100%;position:relative}.bjx-inputs .bjx-background[data-v-184933c0]{position:fixed;top:0;left:0;width:%?750?%;height:100%}.bjx-inputs .bjx-con[data-v-184933c0]{display:flex;align-items:center;justify-content:center}.bjx-inputs .bjx-con uni-input[data-v-184933c0]{flex:1;margin:0 %?6?%;padding:%?10?% 0}.bjx-inputs .bjx-select[data-v-184933c0]{border:1px solid #eee;position:absolute;border-radius:%?20?%;z-index:999;background:#f8f8f8;width:80%}.bjx-inputs .bjx-select .data[data-v-184933c0]{max-height:%?660?%;padding:%?15?%;overflow:auto}.bjx-inputs .bjx-select .data .select-item[data-v-184933c0]{width:100%;border-bottom:%?1?% solid #eee}.bjx-inputs .bjx-select .data .select-item .item-text[data-v-184933c0]{padding:%?10?% 0}.bjx-inputs .bjx-select .data .select-item .active[data-v-184933c0]{font-weight:700}.bjx-inputs .bjx-select .data .item-auto[data-v-184933c0]{overflow:auto}.bjx-inputs .bjx-select .data .item-auto .item-text[data-v-184933c0]{width:-webkit-max-content;width:max-content}.bjx-inputs .bjx-select .data .item-hide .item-text[data-v-184933c0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bjx-inputs .bjx-select .item-close[data-v-184933c0]{padding:%?20?%;text-align:center;font-size:%?32?%;border-top:1px solid #eee;color:#8f8f94;color:#12ae85}',""]),e.exports=t},7943:function(e,t,n){"use strict";n.r(t);var a=n("f96f"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},a45f:function(e,t,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("159b"),n("c975"),n("14d9");var r=a(n("f07e")),i=a(n("c964")),o=a(n("f3f3")),c=n("26cb"),s=(n("3a07"),a(n("45b0"))),u=a(n("1c0c")),l=a(n("6d8f")),d=a(n("22f5")),h={components:{yzbSelectInput:d.default},computed:(0,o.default)((0,o.default)({},(0,c.mapState)(["userInfo"])),(0,c.mapGetters)(["hasLogin"])),data:function(){return{array:["0-20人","20-99人","100-499人","500-999人","1000-9999人","10000人以上"],natures:["外资企业","中外合资企业","私营/民营企业","国有企业","国内上市公司","跨国公司","政府/非盈利机构","事业单位","其他"],company:{logo:null,name:null,fullName:null,industryId:null,industryName:null,staffSize:null},navBarHeight:0,statusBarHeight:0,navigatorHeight:0,menu:{},totalHeight:0,menuHeight:0,menuTop:0,system:{},query:{page:1,limit:20,keyword:""},candidates:[],disabled:!1}},created:function(){this.navBarHeight=uni.getMenuButtonBoundingClientRect().bottom,this.system=uni.getSystemInfoSync(),this.menu=uni.getMenuButtonBoundingClientRect(),this.statusBarHeight=this.system.statusBarHeight,this.navigatorHeight=2*(this.menu.top-this.system.statusBarHeight)+this.menu.height,this.totalHeight=this.statusBarHeight+this.navigatorHeight,this.menuHeight=this.menu.height,this.menuTop=this.menu.top},onLoad:function(e){console.log(e)},methods:{getData:function(e){var t=this;return(0,i.default)((0,r.default)().mark((function n(){var a,i;return(0,r.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),t.company.fullName=e.value,t.query.keyword=e.value,n.next=5,t.$apis.getCompanyListForSelect(t.query);case 5:a=n.sent,console.log("res==",a),t.candidates=a.data,i=[],t.candidates.forEach((function(t){t.value=t.fullName,console.log(t),t.value.indexOf(e.value)>-1&&i.push(t)})),e.callback(i);case 11:case"end":return n.stop()}}),n)})))()},select:function(e){this.company.id=e.id,this.company.fullName=e.value,this.company.name=e.name,this.company.industryId=e.industryId,this.company.industryName=e.industryName,this.company.staffSize=e.staffSize,this.company.logo=e.logo,this.company.nature=e.nature,3==e.verifyStatus&&(this.disabled=!0),console.log(e)},bindPickerChange:function(e){this.company.staffSize=this.array[e.target.value]},bindNaturePickerChange:function(e){this.company.nature=this.natures[e.target.value],this.$forceUpdate()},toIndustry:function(){this.$mRouter.push({route:this.$mRoutesConfig.industry,query:{id:1}})},uploadImgs:function(){var e=this;uni.chooseImage({success:function(t){var n=t.tempFilePaths;e.tmpImageUrl=n[0],e.uploadFile()}})},uploadFile:function(){var e=this;uni.showLoading({title:"图片上传中"}),(0,s.default)(0,this.tmpImageUrl,"hjy/user/",(function(t){console.log("图片上传结果：",t),e.company.logo=t,uni.hideLoading()}))},register:function(){var e=this;return(0,i.default)((0,r.default)().mark((function t(){var n,a;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=l.default.check(e.company,u.default.regCompanyRule),n){t.next=4;break}return uni.showToast({title:l.default.error,icon:"none"}),t.abrupt("return");case 4:return t.next=6,e.$apis.updateCompany(e.company);case 6:a=t.sent,a&&uni.navigateBack({delta:1});case 8:case"end":return t.stop()}}),t)})))()},remove:function(){var e=this;return(0,i.default)((0,r.default)().mark((function t(){var n;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e,uni.showModal({title:"",content:"确定切换到求职？",success:function(e){e.confirm&&n.doswitch(1)}});case 2:case"end":return t.stop()}}),t)})))()},doswitch:function(){var e=this;return(0,i.default)((0,r.default)().mark((function t(){var n;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$apis.switchRole({role:0});case 2:n=t.sent,n.result&&(uni.showToast({icon:"none",title:"切换成功"}),uni.navigateBack({delta:1}));case 4:case"end":return t.stop()}}),t)})))()}}};t.default=h},b198:function(e,t,n){"use strict";n.r(t);var a=n("a45f"),r=n.n(a);for(var i in a)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(i);t["default"]=r.a},b8dc:function(e,t){e.exports={uploadImageUrl:"https://test.oss-cn-hangzhou.aliyuncs.com/",AccessKeySecret:"xxxxxxxxxxxxx",OSSAccessKeyId:"xxxxxxxxxxxxx",timeout:876e3}},da99:function(e,t,n){"use strict";var a=n("2c9b"),r=n.n(a);r.a},dd3d:function(e,t,n){"use strict";n.r(t);var a=n("f4f7"),r=n("b198");for(var i in r)["default"].indexOf(i)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(i);n("da99");var o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"7109263d",null,!1,a["a"],void 0);t["default"]=c.exports},eff8:function(e,t){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);e.exports={encode:function(e){var t,a,r,i,o,c;r=e.length,a=0,t="";while(a<r){if(i=255&e.charCodeAt(a++),a==r){t+=n.charAt(i>>2),t+=n.charAt((3&i)<<4),t+="==";break}if(o=e.charCodeAt(a++),a==r){t+=n.charAt(i>>2),t+=n.charAt((3&i)<<4|(240&o)>>4),t+=n.charAt((15&o)<<2),t+="=";break}c=e.charCodeAt(a++),t+=n.charAt(i>>2),t+=n.charAt((3&i)<<4|(240&o)>>4),t+=n.charAt((15&o)<<2|(192&c)>>6),t+=n.charAt(63&c)}return t},decode:function(e){var t,n,r,i,o,c,s;c=e.length,o=0,s="";while(o<c){do{t=a[255&e.charCodeAt(o++)]}while(o<c&&-1==t);if(-1==t)break;do{n=a[255&e.charCodeAt(o++)]}while(o<c&&-1==n);if(-1==n)break;s+=String.fromCharCode(t<<2|(48&n)>>4);do{if(r=255&e.charCodeAt(o++),61==r)return s;r=a[r]}while(o<c&&-1==r);if(-1==r)break;s+=String.fromCharCode((15&n)<<4|(60&r)>>2);do{if(i=255&e.charCodeAt(o++),61==i)return s;i=a[i]}while(o<c&&-1==i);if(-1==i)break;s+=String.fromCharCode((3&r)<<6|i)}return s},utf16to8:function(e){var t,n,a,r;for(t="",a=e.length,n=0;n<a;n++)r=e.charCodeAt(n),r>=1&&r<=127?t+=e.charAt(n):r>2047?(t+=String.fromCharCode(224|r>>12&15),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|r>>0&63)):(t+=String.fromCharCode(192|r>>6&31),t+=String.fromCharCode(128|r>>0&63));return t},utf8to16:function(e){var t,n,a,r,i,o;t="",a=e.length,n=0;while(n<a)switch(r=e.charCodeAt(n++),r>>4){case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:t+=e.charAt(n-1);break;case 12:case 13:i=e.charCodeAt(n++),t+=String.fromCharCode((31&r)<<6|63&i);break;case 14:i=e.charCodeAt(n++),o=e.charCodeAt(n++),t+=String.fromCharCode((15&r)<<12|(63&i)<<6|(63&o)<<0);break}return t}}},f0bf:function(e,t,n){n("a9e3"),n("14d9"),n("d401"),n("d3b7"),n("25f0"),n("e25e"),n("0eb6"),n("b7ef"),n("8bd4"),n("81b2"),n("ac1f"),n("5319");var a={};(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=a.util={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&t.rotl(e,8)|4278255360&t.rotl(e,24);for(var n=0;n<e.length;n++)e[n]=t.endian(e[n]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")},stringToWords:function(e){for(var t=[],n=0,a=0;n<e.length;n++,a+=8)t[a>>>5]|=e.charCodeAt(n)<<24-a%32;return t},bytesToWords:function(e){for(var t=[],n=0,a=0;n<e.length;n++,a+=8)t[a>>>5]|=e[n]<<24-a%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(n){if("function"==typeof btoa)return btoa(t.bytesToString(n));for(var a,r=[],i=0;i<n.length;i++)switch(i%3){case 0:r.push(e.charAt(n[i]>>>2)),a=(3&n[i])<<4;break;case 1:r.push(e.charAt(a|n[i]>>>4)),a=(15&n[i])<<2;break;case 2:r.push(e.charAt(a|n[i]>>>6)),r.push(e.charAt(63&n[i])),a=-1}void 0!=a&&-1!=a&&r.push(e.charAt(a));while(r.length%4!=0)r.push("=");return r.join("")},base64ToBytes:function(n){if("function"==typeof atob)return t.stringToBytes(atob(n));n=n.replace(/[^A-Z0-9+\/]/gi,"");for(var a=[],r=0;r<n.length;r++)switch(r%4){case 1:a.push(e.indexOf(n.charAt(r-1))<<2|e.indexOf(n.charAt(r))>>>4);break;case 2:a.push((15&e.indexOf(n.charAt(r-1)))<<4|e.indexOf(n.charAt(r))>>>2);break;case 3:a.push((3&e.indexOf(n.charAt(r-1)))<<6|e.indexOf(n.charAt(r)));break}return a}};a.mode={}})(),e.exports=a},f4f7:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content reg-page"},[n("v-uni-view",{staticClass:"navbar",style:{height:e.totalHeight+"px"}},[n("v-uni-text",{style:{"margin-top":e.statusBarHeight+"px"}},[e._v("公司入驻")])],1),n("v-uni-view",{staticClass:"input-group",style:{"margin-top":e.totalHeight+"px"}},[n("v-uni-view",{staticClass:"notice border-bottom-1px"},[n("v-uni-text",{staticClass:"yzb yzb-tixing"}),n("v-uni-text",[e._v("温馨提示：")]),n("v-uni-text",[e._v("如公司已入驻，输入全称搜索即可！")])],1),n("v-uni-view",{staticClass:"input-row border-bottom-1px",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadImgs()}}},[n("v-uni-view",{staticClass:"header"},[n("v-uni-text",{staticClass:"title"},[e._v("公司Logo")]),n("v-uni-text",{staticClass:"tip"},[e._v("公司Logo将出现在公司主页、公司职位等位置！")])],1),n("v-uni-view",{staticClass:"head-img"},[n("v-uni-image",{attrs:{src:e.company.logo||"/static/img/head.png"}})],1)],1),n("v-uni-view",{staticClass:"input-column border-bottom-1px"},[n("v-uni-text",{staticClass:"title"},[e._v("公司全称")]),n("v-uni-view",{staticClass:"input-item"},[n("yzb-select-input",{attrs:{"the-style":"margin: 20upx auto;font-size: 46upx;",value:e.company.fullName,"item-key":"value",placeholder:"请输入公司全称",overflow:"hide"},on:{list:function(t){arguments[0]=t=e.$handleEvent(t),e.getData.apply(void 0,arguments)},select:function(t){arguments[0]=t=e.$handleEvent(t),e.select.apply(void 0,arguments)}}})],1)],1),n("v-uni-view",{staticClass:"input-column border-bottom-1px"},[n("v-uni-text",{staticClass:"title"},[e._v("公司简称")]),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-input",{staticClass:"padding-10",attrs:{disabled:e.disabled,placeholder:"请输入公司简称"},model:{value:e.company.name,callback:function(t){e.$set(e.company,"name",t)},expression:"company.name"}})],1)],1),n("v-uni-view",{staticClass:"input-column border-bottom-1px",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),0==e.disabled&&e.toIndustry()}}},[n("v-uni-text",{staticClass:"title"},[e._v("所在行业")]),n("v-uni-view",{staticClass:"space-between-algin row padding-height-20"},[n("v-uni-input",{staticClass:"padding-10",attrs:{disabled:"true",placeholder:"请选择所在行业",value:e.company.industryName}}),n("v-uni-text",{staticClass:"yzb yzb-next"})],1)],1),n("v-uni-view",{staticClass:"input-column border-bottom-1px"},[n("v-uni-text",{staticClass:"title"},[e._v("公司性质")]),n("v-uni-view",{staticClass:"picker"},[n("v-uni-picker",{attrs:{disabled:e.disabled,value:e.company.nature,range:e.natures},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindNaturePickerChange.apply(void 0,arguments)}}},[n("v-uni-input",{staticClass:"padding-10",attrs:{disabled:"true",placeholder:"请选择公司性质",value:e.company.nature}})],1),n("v-uni-text",{staticClass:"yzb yzb-next"})],1)],1),n("v-uni-view",{staticClass:"input-column border-bottom-1px"},[n("v-uni-text",{staticClass:"title"},[e._v("人员规模")]),n("v-uni-view",{staticClass:"picker"},[n("v-uni-picker",{attrs:{disabled:e.disabled,value:e.company.staffSize,range:e.array},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[n("v-uni-input",{staticClass:"padding-10",attrs:{disabled:"true",placeholder:"请选择人员规模",value:e.company.staffSize}})],1),n("v-uni-text",{staticClass:"yzb yzb-next"})],1)],1),n("v-uni-view",{staticClass:"input-column border-bottom-1px"},[n("v-uni-text",{staticClass:"title"},[e._v("担任职位")]),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-input",{staticClass:"padding-10",attrs:{placeholder:"请输入职位,如总经理/招聘人员等"},model:{value:e.company.postName,callback:function(t){e.$set(e.company,"postName",t)},expression:"company.postName"}})],1)],1)],1),n("v-uni-view",{staticClass:"btn-row row"},[n("v-uni-button",{staticClass:"btn-delete",attrs:{type:"warn"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.remove.apply(void 0,arguments)}}},[e._v("再想想")]),n("v-uni-button",{staticClass:"btn-save",class:e.id?"width-55":"width-90",attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[e._v("保存")])],1)],1)},r=[]},f96f:function(e,t,n){"use strict";n("7a82");var a=n("ee27").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("0122"));n("a9e3"),n("ac1f"),n("5319");var i={name:"BjxInputs",props:{placeholder:{type:String,default:""},value:{type:String,default:""},itemKey:{type:String,default:""},width:{type:String,default:"600"},disabled:{type:Boolean,default:!1},timeDelay:{type:Number,default:60},theStyle:{type:String,default:""},overflow:{type:String,default:"auto"}},data:function(){return{timer:null,data:[],isShow:!1,theValue:this.value,theDisabled:this.disabled}},watch:{value:function(e){this.theValue=e}},computed:{show:function(){return this.isShow&&this.data.length},getStyle:function(){var e=this.theStyle.replace(/upx/g,"upx"),t="width:"+(isNaN(Number(this.width))?this.width:this.width+"upx")+";";return e+t}},methods:{showItem:function(){this.isShow=this.data.length>0},theFocus:function(e){this.$emit("focus",e)},theBlur:function(e){this.$emit("blur",e)},theInput:function(e){var t=this;clearTimeout(this.timer),this.timer=setTimeout((function(){t.$emit("list",{value:e.detail.value,callback:t.setData})}),this.timeDelay)},getItem:function(e){return this.itemKey&&"object"==(0,r.default)(e)?e[this.itemKey]:e},selectItem:function(e){this.isShow=!1,this.theValue=this.itemKey?e[this.itemKey]:e,this.$emit("select",e)},setData:function(e){e&&(this.isShow=!0,this.data=e)},setValue:function(e){this.theValue=e},setDisabled:function(e){this.theDisabled=e}}};t.default=i}}]);