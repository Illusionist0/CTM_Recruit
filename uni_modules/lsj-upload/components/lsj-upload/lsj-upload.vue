<template>
	<view class="lsj-file" :style="[getStyles]">
		<view ref="lsj" class="hFile" :style="[getStyles]" @click="onClick">
			<slot><view class="defview" :style="[getStyles]">附件上传</view></slot>
		</view>
	</view>
</template>

<script>
// 查看文档：https://ext.dcloud.net.cn/plugin?id=5459
import {LsjFile} from './LsjFile.js' 
export default {
	props: {
		// 打印日志
		debug: {type: Boolean,default: false},
		// 自动上传
		instantly: {type: Boolean,default: false},
		// 上传接口参数设置
		option: {type: Object,default: ()=>{}},
		// 文件大小上限
		size: { type: Number, default: 10 },
		// 文件选择个数上限,超出后不触发点击
		count: { type: Number, default: 10 },
		// 禁止的格式（多个以逗号隔开）
		formats: { type: String, default:''},
		// input file选择限制
		accept: {type: String,default: ''},
		// webviewID需唯一，不同窗口也不要同Id
		childId: { type: String, default: 'lsjUpload' },
		// 文件选择触发面宽度
		width: { type: String, default: '100%' },
		// 文件选择触发面高度
		height: { type: String, default: '80rpx' },
		
		// top,left,bottom,right仅position=absolute时才需要传入
		top: { type: [String, Number], default: '' },
		left: { type: [String, Number], default: '' },
		bottom: { type: [String, Number], default: '' },
		right: { type: [String, Number], default: '' },
		// nvue不支持跟随窗口滚动
		position: { 
			type: String,
			// #ifdef APP-NVUE
			 default: 'absolute',
			// #endif
			// #ifndef APP-NVUE
			default: 'static',
			// #endif
		},
	},
	data() {
		return {
			selectCount:0,
		}
	},
	watch: {
		option: {
			handler(option) {
			  this.lsjFile&&this.lsjFile.setData(option);
			  // #ifdef APP-PLUS
			  this.lsjFile&&this.show();
			  // #endif
			},
			deep: true
		}
	},
	updated() {
		// #ifdef APP-PLUS
			if (this.isShow) {
				this.lsjFile&&this.show();
			}
		// #endif
	},
	computed: {
		getStyles() {
			let styles = {
				width: this.width,
				height: this.height
			}
			if (this.position == 'absolute') {
				styles['top'] = this.top
				styles['bottom'] = this.bottom
				styles['left'] = this.left
				styles['right'] = this.right
				styles['position'] = 'fixed'
			}

			return styles
		}
	},
	mounted() {
		this.lsjFile = new LsjFile({
			debug: this.debug,
			id: this.childId,
			width: this.width,
			height: this.height,
			option: this.option,
			instantly: this.instantly,
			// 限制条件
			prohibited: {
				// 大小
				size: this.size,
				// 不允许的格式
				formats: this.formats,
				// 限制选择的格式
				accept: this.accept,
			},
			onchange: this.onchange,
			onprogress: this.onprogress,
		});
		this.create();
		
	},
	beforeDestroy() {
		this.clear();
	},
	methods: {
		getDomStyles(callback) {
			// #ifndef APP-NVUE
			let view = uni
				.createSelectorQuery()
				.in(this)
				.select('.lsj-file')
			view.fields(
				{
					size: true,
					rect: true
				},
				({ height, width, top, left, right, bottom }) => {
					uni.createSelectorQuery()
					.selectViewport()
					.scrollOffset(({ scrollTop }) => {
						return callback({
							top: parseInt(top) + parseInt(scrollTop) + 'px',
							left: parseInt(left) + 'px',
							width: parseInt(width) + 'px',
							height: parseInt(height) + 'px'
						})
					})
					.exec()
				}
			).exec()
			// #endif
			// #ifdef APP-NVUE
			const dom = weex.requireModule('dom')
			dom.getComponentRect(this.$refs.lsjFile, ({ size: { height, width, top, left, right, bottom } }) => {
				return callback({
					top: parseInt(top) + 'px',
					left: parseInt(left) + 'px',
					width: parseInt(width) + 'px',
					height: parseInt(height) + 'px',
					right: parseInt(right) + 'px',
					bottom: parseInt(bottom) + 'px'
				})
			})
			// #endif
		},
		show() {
			this.isShow = true;
			// #ifdef APP-PLUS
			this.getDomStyles(styles => {
				this.lsjFile.dom.setStyle(styles)
			});
			// #endif
			// #ifdef H5
			this.lsjFile.dom.style.display = 'inline'
			// #endif
		},
		hide() {
			this.isShow = false;
			// #ifdef APP-PLUS
			this.lsjFile.dom.setStyle({
				top: '-500px',
				left:'0px',
				width: '1px',
				height: '1px',
			});
			// #endif
			// #ifdef H5
			this.lsjFile.dom.style.display = 'none'
			// #endif
		},
		/**
		 * 手动提交上传
		 * @param {string}name 文件名称，不传则上传所有type等于waiting和fail的文件
		 */
		upload(name) {
			this.lsjFile&&this.lsjFile.upload(name);
		},
		/**
		 * @returns {Map} 已选择的文件Map集
		 */
		onchange(files) {
			this.$emit('change',files);
			this._size = files.size;
			console.log("this._size=====",this._size)
			return files.size >= this.count ? this.hide() : this.show();
		},
		/**
		 * @returns {object} 当前上传中的对象
		 */
		onprogress(item) {
			this.$emit('progress',item);
		},
		/**
		 * 移除组件内缓存的某条数据
		 * @param {string}name 文件名称,不指定默认清除所有文件
		 */
		clear(name) {
			// this.lsjFile.clear(name);
		},
		
		// 创建选择器
		create() {
			let path = '/uni_modules/lsj-upload/hybrid/html/uploadFile.html';
			let dom = this.lsjFile.create(path);
			// #ifdef H5
			this.$refs.lsj.$el.appendChild(dom);
			// #endif
			
			// #ifdef APP-PLUS
			dom.setStyle({position: this.position});
			dom.loadURL(path);
			setTimeout(()=>{
				plus.webview.getTopWebview().append(dom);
			},300)
			// #endif
		},
		// 点击选择附件
		onClick() {
			if (this._size >= this.count) {
				this.toast(`只允许上传${this.count}个文件`);
				return;
			}
			// #ifdef MP-WEIXIN
			if(!this._size){
				this._size=0;
			}
			console.log("this._size===1111==",this._size);
			console.log("this._size===2222==",this.count - this._size);
			this.lsjFile.chooseMessageFile(this.count - this._size);
			// #endif
		},
		toast(msg) {
			uni.showToast({
				title: msg,
				icon: 'none'
			});
		}
	}
}
</script>

<style scoped>
.lsj-file {
	display: inline-block;
}
.defview {
	background-color: #12ae85;
	color: #fff;
	border-radius: 10rpx;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 28rpx;
}
.hFile {
	position: relative;
	overflow: hidden;
}
</style>
