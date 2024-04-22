import store from "@/store"
function HTTP(obj, config) {

	let defaultConfig = {
		isRes: false,
		loading: false
	}

	config = { ...defaultConfig,
		...config
	}


	// 如果需要显示loading,mask防止点击穿透
	config.loading && uni.showLoading({
		title: '加载中',
		mask: true
	});

	return new Promise((resolve, reject) => {

		let options = {
			url: "",
			method: "GET",
			data: {},
			dataType: "json",
			header: {
				"content-type": "application/json",
				"X-requested-With": "XMLHttpRequest"
			},
			success: (res) => {
				console.log("HTTP请求结果：",res)
				uni.hideLoading();
				// 状态码为200
				if (res.statusCode == 200) {
					let data = res.data;

					//自动校验用户是否登录过期
					if (data.code == "01") {
						store.dispatch("reLogin");
						return;
					}

					//返回 { code:10000,msg:"消息",data:[] }
					if (config.isRes) {
						resolve(data)
					}
					// 返回 data:[]
					else {
						if (data.code == "200") {
							resolve(data.data||true)
						} else {
							wx.showToast({
								title: data.message,
								icon: "none",
								duration: 2000
							})
							reject(data.message);
						}
					}
				} else {
					reject("HTTP:状态码异常！");
				}
			},
			fail: (err) => {
				uni.hideLoading();
				uni.showToast({
					title: "网络异常，请稍后再试!",
					icon: "none",
				})
				reject("网络异常，请稍后再试!");
			},
			complete: () => {}
		}

		options = { ...options,
			...obj
		};
		
		const OPENID = uni.getStorageSync("openId");
		const Token=uni.getStorageSync("token");
		// const location=uni.getStorageSync("location");
		// if(location){
		// 	//所有接口带上当前位置信息
		// 	options["data"]["latitude"] = location.latitude;
		// 	options["data"]["longitude"] = location.longitude;
		// 	options["data"]["pcitycode"] = location.pcitycode;
		// }
		// console.log("Token==="+Token);
		if (OPENID) options["header"]["openId"] = OPENID;
		if (Token) options["header"]["token"] = Token;
		if (options.url && options.method) {
			wx.request(options);
		} else {
			wx.showToast({
				title: 'HTTP：缺失参数',
				icon: "none",
				duration: 2000
			})
		}
	})

}



export default {
	GET(url, data = {}, config) {
		return HTTP({
			url,
			data,
			method: "GET"
		}, config);
	},
	POST(url, data = {}, config) {
		return HTTP({
			url,
			data,
			method: "POST"
		}, config);
	},

	POSTformdata(url, data = {}, config) {
		return HTTP({
			url,
			data,
			method: "POST"
		}, config);
	}
}
