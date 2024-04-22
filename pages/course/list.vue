<template>
	<yzb-page :loadStatus="loadStatus">
		<view class="search">
			<view style="margin-right: 10px;" @click="onBack">
				<image src="@/static/images/Arrow-Left.png" style="width: 10px;height: 10px;"></image>
				<text>返回</text>
			</view>
			<view class="search-input">
				<text class="yzb yzb-search"></text>
				<input class="text-normal" type="text" :value="searchValue" :placeholder="placeholder" @input="searchInput" />
			</view>
			<view class="btn-cancel" @click="cancelSearch">清空</view>
		</view>
		<view>
			<!-- tabs -->
			<!-- <cc-newsTabs :tab-arr="tablist"></cc-newsTabs> -->
			<cc-orderTabs :tab-list="tablist" :active="showIndex" @tabsClick="tabsClick"></cc-orderTabs>
		</view>
		<!-- 文章内容 -->
		<view class="body">
			<view v-show="showIndex==0">
				<yzb-article :list="list" @click="toDetail"></yzb-article>
			</view>
			<!-- 考试 -->
			<view v-show="showIndex==1">
				<image :src="$mAssetsPath.grid_11" style="height: 100px;width: 100px;"></image>
				<yzb-article :list="list" @click="toDetail"></yzb-article>
			</view>
			<!-- 通知 -->
			<view v-show="showIndex==2">
				<yzb-article :list="list" @click="toDetail"></yzb-article>
			</view>
			<!-- 新闻 -->
			<view v-show="showIndex==3">
				<yzb-article :list="list" @click="toDetail"></yzb-article>
			</view>
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
import mSwiper from '@/components/m-swiper/m-swiper2.vue';
import yzbCourse from '@/components/yzb/yzb-course.vue';
import yzbArticle from '../../components/yzb/yzb-article.vue';
import mAd from '@/components/m-ad/m-ad.vue';
import yzbfilterDropdown from '@/components/yzb/yzb-filterDropdown.vue';
export default {
	components: {
		mSwiper,
		yzbCourse,
		yzbArticle,
		mAd,
		yzbfilterDropdown
	},
	computed: {
		...mapState(['forcedLogin']),
		...mapGetters(['hasLogin'])
	},
	data() {
		return {
			status: '',
			query:{
				page: 1,
				limit: 10,
				keyword:'',
				status:'ENABLE',
			},
			banner: [],
			list:[],
			loadStatus:'loading',//loading、fail、success
			searchValue: '',
			placeholder: '请输入文章标题或内容',
			showIndex:0,
			tablist:[{
				name:'全部',
				id:0
			},
			{
				name:'考试公告',
				id:1
			},
			{
				name:'通知公告',
				id:2
			},
			{
				name:'新闻资讯',
				id:3
			}]
			
		};
	},
	async onLoad(query) {
		console.log(query);
		this.getBanners();
	},
	
	onShow() {
		this.query.page=1;
		this.list=[];
		this.getCourseList();
	},

	onReachBottom() {
		this.query.page++;
		this.getCourseList();
	},
	
	onPullDownRefresh() {
		this.query.page=1;
		this.list=[];
		this.getCourseList();
	},

	methods: {
		onBack(){
			uni.switchTab({
				url:'/pages/index/index'
			})
		},
		tabsClick(item, index){
			this.showIndex=item.id
		},
		tabChange(e){
			console.log(e)
			this.showIndex=e.detail.index
			this.list=[]
			if (this.showIndex==1) {
				this.query.page=1;
				this.query.keyword="考试公告";
				this.list=[];
				this.getCourseList();
			} else if(this.showIndex==2) {
				this.query.page=1;
				this.query.keyword="通知公告";
				this.list=[];
				this.getCourseList();
			} else if(this.showIndex==3){
				this.query.page=1;
				this.query.keyword="新闻资讯";
				this.list=[];
				this.getCourseList();
			}else{
				this.list=[];
				this.getCourseList();
			}
		},
		
		async getCourseList() {
			this.status = '请求中';
			let res = await this.$apis.getCourseList(this.query);
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
		
		toDetail(item){
			this.$mRouter.push({
				route: this.$mRoutesConfig.courseDetail,
				query: {
					id: item.id,
				}
			});
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

		searchInput(e) {
			this.searchValue = e.detail.value;
			console.log('searchInput', this.searchValue);
			if (this.searchValue) {
				this.query.page=1;
				this.query.keyword=this.searchValue;
				this.list=[];
				this.getCourseList();
			} else {
				this.cancelSearch();
			}
		},
		// 取消搜索
		cancelSearch() {
			this.searchValue = '';
			this.query.keyword='';
			this.query.page=1;
			this.list=[];
			this.getCourseList();
		}
	}
};
</script>

<style lang="scss">
.body {
	margin-top: 80upx;
	background-color: #ffffff;
}

.search {
	position: fixed;
	top: 0;
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
