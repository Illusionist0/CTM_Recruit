<template>
	<yzb-page :loadStatus="loadStatus">
		<view class="top">
			<view class="search">
				<view class="search-input">
					<text class="yzb yzb-search"></text>
					<input class="text-normal" type="text" :value="searchValue" :placeholder="placeholder" @input="searchInput" />
				</view>
				<view class="btn-cancel" @click="cancelSearch">清空</view>	
			</view>
			<yzb-filter-dropdown
			:menuTop="0"
			:filterData="filterData"
			:defaultSelected="defaultSelected"
			:updateMenuName="true"
			@confirm="confirm"
			dataFormat="Object"
			></yzb-filter-dropdown>
		</view>
		
		<view class="body">
			<view class=""></view>
			<!-- <m-swiper :list="banner"></m-swiper> -->
			<yzb-task :list="list" @click="toDetail"></yzb-task>
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
import mSwiper from '@/components/m-swiper/m-swiper2.vue';
import yzbTask from '@/components/yzb/yzb-task.vue'; 
import yzbFilterDropdown from '@/components/yzb/yzb-filterDropdown.vue';
import { formatDate } from '@/common/date';
export default {
	components: {
		mSwiper,
		yzbTask,
		yzbFilterDropdown
	},
	data() {
		return {
			status: '',
			query:{
				page: 1,
				limit: 10,
				status:2,//已发布
				keyword:'',
				lineId:'',
				areaId:''
			},
			loadStatus:'loading',//loading、fail、success
			banner: [],
			type: 1,
			list:[],
			searchValue: '',
			placeholder: '请输入关键词搜索相关内容',
			defaultSelected:[],
			filterData: [
				{
					name: '全部招聘会',
					type: 'hierarchy',
					child: [{
						name:'全部招聘会',
						id:'all'
					},
					{
						name:'现场招聘会',
						id:'offline'
					},
					{
						name:'网络招聘会',
						id:'online'
					},]
				},
				{
					name: '全部区域',
					type: 'hierarchy',
					child: [{
						name:'全部区域',
						id:'allarea'
					},
					{
						name:'西湖区',
						id:'xihu'
					},
					{
						name:'安义县',
						id:'anyi'
					},
					{
						name:'VR产业基地',
						id:'vr'
					},
					{
						name:'南昌县',
						id:'ncx'
					},
					{
						name:'红谷滩区',
						id:'hgt'
					},
					{
						name:'新建区',
						id:'xinjian'
					},
					{
						name:'小蓝开发区',
						id:'xiaolan'
					},
					{
						name:'进贤县',
						id:'jinxian'
					},
					{
						name:'经济技术开发区',
						id:'jinkai'
					},
					{
						name:'东湖区',
						id:'donghu'
					},
					{
						name:'青山湖区',
						id:'qingshanhu'
					},
					{
						name:'湾里管理局',
						id:'wanli'
					}]
				},
			]
		};
	},
	async onLoad(query) {
		console.log(query);
		this.type = query.type;
		this.getBanners();
	},
	
	onShow() {
		this.list=[];
		this.query.page=1;
		this.getTaskList();
	},

	onReachBottom() {
		this.query.page++;
		this.getTaskList();
	},

	onPullDownRefresh() {
		this.query.page=1;
		this.list=[];
		this.getTaskList();
	},

	methods: {
		// 修改筛选
		confirm(options) {
			console.log('--confirm--', options);
			// if (options.value[0][2] != null) {
			// 	this.query.postId = options.value[0][2];
			// } else {
			// 	this.query.postId = '';
			// }
			// if (options.value[1][1] != null) {
			// 	this.query.industryId = options.value[1][1];
			// } else {
			// 	this.query.industryId = '';
			// }
			// if (options.value[2][0] != null && options.value[2][0] != '不限') {
			// 	this.query.salary = options.value[2][0];
			// } else {
			// 	this.query.salary = '';
			// }
			// if (options.value[3][0] != null && options.value[3][0] != '不限') {
			// 	this.query.nature = options.value[3][0];
			// } else {
			// 	this.query.nature = '';
			// }
			this.query.page = 1;
			this.list=[];
			this.getTaskList();
		},
		formatCreateTime(time) {
			if (time == null || time === '') {
				return null;
			}
			let str = time.replace(/-/g,'/');
			let date = new Date(str);
			return formatDate(date, 'yyyy-MM-dd');
		},

		async getBanners() {
			let data = await this.$apis.getBanners({apId:3});
			if (data) {
				this.banner = data;
			}
		},
		async getTaskList() {
			this.status = '请求中';
			let res = await this.$apis.getTaskList(this.query);
			if (res) {
				let data = res.data;
				this.list = this.list.concat(data || []);
				this.changeStatus(res);
				this.loadStatus='success';
			}else{
				this.loadStatus='fail';
			}
			uni.stopPullDownRefresh();
		},

		// 修改请求状态
		changeStatus(data) {
			if (this.list.length === 0) {
				this.status = '暂无数据';
			} else if (this.query.page >= Math.ceil(data.count / this.query.limit)) {
				this.status = '没有更多';
			} else {
				this.status = '请求更多';
			}
		},

		toDetail(item) {
			this.$mRouter.push({
				route: this.$mRoutesConfig.taskDetail,
				query: {
					id: item.id
				}
			});
		},

		searchInput(e) {
			this.searchValue = e.detail.value;
			console.log('searchInput', this.searchValue);
			if (this.searchValue) {
				this.query.page=1;
				this.query.keyword=this.searchValue;
				this.list=[];
				this.getTaskList();
			} else {
				this.cancelSearch();
			}
		},
		// 取消搜索
		cancelSearch() {
			this.searchValue = '';
			this.query.page=1;
			this.query.keyword='';
			this.list=[];
			this.getTaskList();
		}
	}
};
</script>

<style lang="scss">
.body {
	margin-top: 170upx;
	background-color: #ffffff;
}
.top {
	width: 100%;
	// height: 180upx;
	position: fixed;
	top: "--var-top";
	z-index: 999;
	display: flex;
	flex-direction: column;
}
.search {
	z-index: 999;
	width: 100%;
	display: flex;
	height: 90upx;
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
		line-height: 65upx;
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

</style>
