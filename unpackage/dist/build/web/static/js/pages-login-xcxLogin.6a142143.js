(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-xcxLogin"],{"2a8a":function(n,e,t){"use strict";t("7a82");var i=t("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(t("f07e")),o=i(t("c964")),s={data:function(){return{canIUse:uni.canIUse("button.open-type.getUserInfo"),bindUserInfo:null}},onShow:function(){this.verifyPro()},methods:{verifyPro:function(){var n=userUtils.getPrivacyVersion();""!=n&&null!=n||uni.navigateTo({url:"/pages/my/protocol/protocol?type=1"})},wxAuth:function(){var n=this;return(0,o.default)((0,a.default)().mark((function e(){var t;return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=n,uni.getSetting({success:function(n){console.log("getSetting",n),n.authSetting["scope.userInfo"]&&uni.getUserInfo({success:function(n){uni.login({success:function(n){console.log("用户的code:"+n.code),t.getOpenId(n.code)}})}})}});case 2:case"end":return e.stop()}}),e)})))()},getOpenId:function(n){var e=this;return(0,o.default)((0,a.default)().mark((function t(){var i;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$apis.getOpenId({code:n});case 2:i=t.sent,e.openid=i.openid,e.session_key=i.session_key,e.$store.commit("SET_OPENID",i.openId),uni.setStorage({key:"session_key",data:i.session_key}),null!=i&&e.xcxLogin(i.openId);case 8:case"end":return t.stop()}}),t)})))()},bindGetUserInfo:function(n){if(n.detail.userInfo){this.bindUserInfo=n.detail.userInfo,this.isHide=!0,this.isPhoneShow=!0,uni.showLoading({title:"授权登录中···"}),this.wxAuth()}else uni.showModal({title:"警告",content:"您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!",showCancel:!1,confirmText:"返回授权",success:function(n){n.confirm&&console.log("用户点击了“返回授权”")}})},xcxLogin:function(n){var e=this;return(0,o.default)((0,a.default)().mark((function t(){var i,o;return(0,a.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e,i={openid:n,avatar:e.bindUserInfo.avatarUrl,nickName:e.bindUserInfo.nickName},t.next=4,e.$apis.xcxUserLogin(i);case 4:o=t.sent,console.log("xcxUserLogin===",o),"账号不存在"!=o&&"未绑定手机号"!=o?(e.$store.commit("SET_USERINFO",o.currMember||{}),e.$store.commit("SET_TOKEN",o.token),uni.navigateBack({delta:1})):(console.log("绑定手机号"),uni.redirectTo({url:"/pages/login/authphonelogin"}));case 7:case"end":return t.stop()}}),t)})))()},toPhoneLogin:function(){uni.redirectTo({url:"./phonelogin"})},cancle:function(){uni.navigateBack({delta:1})},updateMember:function(){if(null!=this.bindUserInfo){var n={avatar:this.bindUserInfo.avatarUrl,name:this.bindUserInfo.nickName,sex:this.bindUserInfo.gender,nickName:this.bindUserInfo.nickName};api.getUpdateMemberInfo(n,(function(n){200==n.data.code&&uni.showToast({title:n.data.message})}))}}}};e.default=s},"2e16":function(n,e,t){var i=t("24fb");e=i(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 微信授权 */.wx-auth[data-v-5a057fc1]{height:calc(100vh);width:100%}.header[data-v-5a057fc1]{margin:%?50?% 0 %?50?% 0;border-bottom:1px solid #eee;text-align:center;width:100%;height:%?300?%;line-height:%?450?%}.header uni-image[data-v-5a057fc1]{width:%?200?%;height:%?200?%}.content2[data-v-5a057fc1]{padding:%?30?% %?80?%}.content2 uni-text[data-v-5a057fc1]{display:block;color:#9d9d9d;margin-top:%?40?%}.bottom[data-v-5a057fc1]{display:flex;flex-direction:row;justify-content:center;align-items:center}.auth[data-v-5a057fc1]{border-radius:%?15?%;margin:%?70?% %?50?% %?50?% %?50?%;font-size:%?35?%;width:60%;background-color:#2c8cf0;color:#fff}.cancel-login[data-v-5a057fc1]{border-radius:%?15?%;margin:%?70?% %?20?% %?50?% %?50?%;font-size:%?35?%;background-color:#eee;width:30%}.phone-login[data-v-5a057fc1]{width:100%;justify-content:center}.phone-login-text[data-v-5a057fc1]{color:#666;border-bottom:#999 solid %?2?%}",""]),n.exports=e},"3dba":function(n,e,t){var i=t("2e16");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=t("4f06").default;a("75b16a56",i,!0,{sourceMap:!1,shadowMode:!1})},"722c":function(n,e,t){"use strict";t.r(e);var i=t("2a8a"),a=t.n(i);for(var o in i)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return i[n]}))}(o);e["default"]=a.a},8012:function(n,e,t){n.exports=t.p+"static/logo.png"},"8b69":function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){}));var i=function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("v-uni-view",{staticClass:"wx-auth"},[n.canIUse?i("v-uni-view",{staticClass:"wx-auth"},[i("v-uni-view",{staticClass:"header"},[i("v-uni-image",{attrs:{src:t("8012")}})],1),i("v-uni-view",{staticClass:"content2"},[i("v-uni-view",{staticClass:"text-size-max"},[n._v("申请获取以下权限")]),i("v-uni-text",[n._v("获得您的公开信息(昵称，头像等)")])],1),i("v-uni-view",{staticClass:"bottom"},[i("v-uni-button",{staticClass:"cancel-login",attrs:{type:"default",lang:"zh_CN"},on:{click:function(e){arguments[0]=e=n.$handleEvent(e),n.cancle()}}},[n._v("暂不登录")]),i("v-uni-button",{staticClass:"auth",attrs:{"open-type":"getUserInfo",lang:"zh_CN"},on:{getuserinfo:function(e){arguments[0]=e=n.$handleEvent(e),n.bindGetUserInfo.apply(void 0,arguments)}}},[n._v("授权登录")])],1)],1):i("v-uni-view",[n._v("请升级微信版本")])],1)},a=[]},"8c9d":function(n,e,t){"use strict";t.r(e);var i=t("8b69"),a=t("722c");for(var o in a)["default"].indexOf(o)<0&&function(n){t.d(e,n,(function(){return a[n]}))}(o);t("d0c0");var s=t("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5a057fc1",null,!1,i["a"],void 0);e["default"]=c.exports},d0c0:function(n,e,t){"use strict";var i=t("3dba"),a=t.n(i);a.a}}]);