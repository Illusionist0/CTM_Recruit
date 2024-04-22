<template>
	<yzb-page class="">
		<view class="search">
			<view class="search-input">
				<text class="yzb yzb-search"></text>
				<input class="text-normal" type="text" :value="searchValue" :placeholder="placeholder" @input="searchInput" />
			</view>
			<view class="btn-cancel" @click="cancelSearch">清空</view>
		</view>
		<view style="position: relative; top:80upx;">
			<m-company :list="list" @click="detail">
			</m-company>
			<view class="load-more-box">
				<uni-load-more v-if="status == '请求中'" status="正在加载..." :showIcon="true"></uni-load-more>
				<uni-load-more v-if="status == '没有更多'" status="没有更多了" :showIcon="false"></uni-load-more>
				<uni-load-more v-if="status == '暂无数据'" status="暂无数据" :showIcon="false"></uni-load-more>
				<uni-load-more v-if="status == '请求失败'" status="加载失败，点我重试" :showIcon="false" @click="reLoad"></uni-load-more>
			</view>
		</view>
	</yzb-page>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import mSwiper from '@/components/m-swiper/m-swiper.vue';
import mCompany from '@/components/m-company/m-company.vue';
import mAd from '@/components/m-ad/m-ad.vue';
export default {
	components: {
		mSwiper,
		mCompany,
		mAd
	}, 
	computed: {
		...mapState(['forcedLogin']),
		...mapGetters(['hasLogin'])
	},
	data() {
		return {
			list: [],
			query:{
				page: 1,
				limit: 10,
				keyword:'',
				type:0
			},
			status:""
			
		};
	},
	async onLoad(query) {
		this.getList();
	},
	
	onReachBottom() {
		this.query.page++;
		this.getList();
	},
	
	methods: {
		async getList() {
			let param = {
				page: this.query.page,
				limit: this.query.limit,
				type:this.query.type
			};
			this.query.latitude = getApp().globalData.location.latitude;
			this.query.longitude = getApp().globalData.location.longitude;
			this.query.pcitycode = getApp().globalData.location.pcitycode;
			this.status = '请求中';
			let res = await this.$apis.getCompanyList(this.query);
			if (res) {
				let data = res.data;
				// for (let i in data) {
				// 	if (data[i].skill) {
				// 		data[i].skill = data[i].skill.split(',');
				// 	}
				// }
				this.list = this.list.concat(data || []);
				this.changeStatus(res);
			}
			uni.stopPullDownRefresh();
		},
		
		// 修改请求状态
		changeStatus(data) {
			if (this.list.length === 0) {
				this.status = '暂无数据';
			} else if (this.page >= Math.ceil(data.count / this.limit)) {
				this.status = '没有更多';
			} else {
				this.status = '请求更多';
			}
		},
		
		detail(item) {
			this.$mRouter.push({
				route: this.$mRoutesConfig.companyDetail,
				query: {
					id: item.id
				}
			});
		},
		
		searchInput(e) {
			this.searchValue = e.detail.value;
			console.log('searchInput', this.searchValue);
			if (this.searchValue) {
				this.query.page = 1;
				this.query.keyword = this.searchValue;
				this.list = [];
				this.getList();
			} else {
				this.cancelSearch();
			}
		},
		// 取消搜索
		cancelSearch() {
			this.searchValue = '';
			this.query.keyword = '';
			this.query.page = 1;
			this.list = [];
			this.getList();
		}
	}
};
</script>

<style lang="scss" scoped>
.ka {
	width: 100%;
	height: 260upx;
	position: relative;

	&:after {
		content: '';
		position: absolute;
		transform-origin: center;
		box-sizing: border-box;
		pointer-events: none;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		border-bottom: 1px solid #c8c7cc;
		transform: scale(0.5);
	}
}

// 搜索框
.search {
	position: fixed;
	width: 100%;
	display: flex;
	height: 90upx;
	z-index: 999;
	flex-direction: row;
	background-color: $main-color;
	color: #ffffff;
	align-items: center;
	justify-content: center;
	.yzb-search {
		color: $font-color-999;
		font-size: $uni-font-size-base;
		margin: 0 15upx;
		margin-top: 8upx;
	}
	.search-input {
		width: 77%;
		height: 65upx;
		border-radius: 50upx;
		display: flex;
		flex-direction: row;
		background-color: #ffffff;
		align-items: center;
	}
	.search-input image {
		width: 35upx;
		height: 35upx;
		margin-right: 10upx;
	}
	.search-input input {
		width: 65%;
		font-size: 28upx;
		color: $font-color-333;
	}

	.btn-search {
		margin-left: 20upx;
	}

	.btn-cancel {
		margin-left: 20upx;
	}
}

.notice {
	width: 100%;
	// padding: 3%;
	margin-top: 20upx;
	padding: 20upx 0;
	background-color: #ffffff;
	.content {
		width: 90%;
		padding: 20upx 15upx;
		margin: 0 auto;
		border-radius: $uni-border-radius-lg;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.notice-icon {
			color: $main-color;
			font-size: $font-size-36;
		}
		.notice-text {
			color: $font-color-light;
			text {
				color: $font-color-dark;
				font-weight: bold;
				padding: 0 15upx;
			}
		}
		.notice-next {
			font-size: $font-size-34;
			color: $font-color-light;
		}
	}
}

.post {
	margin-top: 2upx;
	background-color: #ffffff;
	padding: 20upx;
	.title {
		font-weight: bold;
		font-size: $uni-font-size-lg;
	}

	.post-list {
		overflow: hidden;
		white-space: nowrap;
		flex-wrap: wrap;
		width: 96%;
		padding: 2%;
	}
	.post-item {
		// background-color: #F7F7F7;
		border: 1upx solid $border-color-base;
		font-size: $uni-font-size-sm;
		float: left;
		width: 22%;
		padding: 15upx 0upx;
		border-radius: 8upx;
		margin-top: 20upx;
		text-align: center;
	}
	.post-item-left {
		margin-left: 3%;
	}

	.all {
		margin-top: 10upx;
		display: flex;
		justify-content: center;
		align-items: center;
		.all-text {
			color: $main-color;
			font-weight: bold;
		}
		.post-next {
			font-size: $font-size-34;
			color: $main-color;
			margin-left: 5upx;
		}
	}
}

.expect {
	padding: 25upx 2%;
	margin-top: 20upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: row;
	background-color: $bgcolor_white;
	border-bottom: 1upx solid $border-color-base;
	.items {
		width: 80%;
		padding: 0 3%;
		flex-wrap: wrap;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		white-space: nowrap;
		align-items: center;
		text {
			padding: 0 10upx;
			font-size: $uni-font-size-lg;
			color: $font-color-base;
		}
		.selected {
			font-weight: bold;
			color: $font-color-000;
			font-size: $font-size-34;
		}
	}
	.expect-icon {
		size: $uni-font-size-lg;
		color: $font-color-gray;
		margin-right: 10upx;
	}
}
</style>
