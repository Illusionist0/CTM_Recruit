<template>
	<view class="xzw_notice" :style="{color:getColor(theme),backgroundColor:getBgColor(theme)}">
		<uni-icons v-if="showIcon === true || showIcon === 'true'" class="notice_left" type="sound" :color="getColor(theme)" size="22" />
		<swiper class="notice_center" vertical v-if="direction=='column'" :autoplay="true" :interval="4000" :duration="500" :circular="true" disable-touch>
			<swiper-item v-for="(item, index) in list" :key="index" class="swiperIn" @click="goItem(item)">
				<view>{{item[theKey]}}</view>
			</swiper-item>
		</swiper>
		<view class="notice_center2" v-else><view>{{list[0][theKey]}}</view></view>
		<view class="notice_right" v-if="showMore">
			<view @click="goMore">更多</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"yzb-notice",
		props:{
			//主题色,default|primary|error|warning|success|info
			theme: {
				type: String,
				default: 'default'
			},
			// 是否显示左侧icon
			showIcon: {
				type: [Boolean, String],
				default: true
			},
			// 是否显示更多
			showMore: {
				type: [Boolean, String],
				default: true
			},
			list: {
				type: Array,
				default() {
					return [{id:1,title:'公告1'},{id:2,title:'公告2'}]
				}
			},
			//公告数组的键名
			theKey:{
				type: String,
				default: 'title'
			},
			//方向，column垂直，row水平时取第一条公告
			direction:{
				type: String,
				default: 'column'
			}
		},
		data() {
			return {
				text:''
			};
		},
		methods:{
			getColor(theme){
				if(theme=="primary"){
					return "#2979FF"
				}else if(theme=="error"){
					return "#FA3534"
				}else if(theme=="warning"){
					return "#FF9A43"
				}else if(theme=="success"){
					return "#1BBF6C"
				}else if(theme=="info"){
					return "#909399"
				}else{
					return "#303133"
				}
			},
			getBgColor(theme){
				if(theme=="primary"){
					return "#ECF5FF"
				}else if(theme=="error"){
					return "#FEF0F0"
				}else if(theme=="warning"){
					return "#FDF6EC"
				}else if(theme=="success"){
					return "#DBF1E1"
				}else if(theme=="info"){
					return "#F4F4F5"
				}else{
					return "#FFFFFF"
				}
			},
			goItem(item){
				this.$emit('goItem',item)
			},
			goMore(){
				this.$emit('goMore')
			}
		}
	}
</script>

<style lang="scss">
	.xzw_notice {
		font-size: 26upx;
		height: 90upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20upx;
		box-sizing: border-box;
		width: 100%;
		.notice_left{
			margin: 0 20upx 0 0;
		}
		.notice_center{
			flex:1;
			height:90upx;
			.swiperIn{
				height:80upx;
				display: flex;
				align-items: center;
				view{
					overflow: hidden;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
			}
		}
		.notice_center2{
			flex:1;
			position: relative;
			display: flex;
			align-items: center;
			height:90upx;
			overflow: hidden;
			view{
				position: absolute;
				white-space: nowrap;
				padding-left: 100%;
				animation: notice 5s 0s linear infinite both;
			}
		}
		.notice_right {
			margin: 0 0 0 20upx;
		}
		@keyframes notice {
			100% {
				transform: translate3d(-100%, 0, 0);
			}
		}
	}
</style>
