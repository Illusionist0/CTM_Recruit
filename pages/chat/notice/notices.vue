<template>
	<view class="content" style="height: 100vh;">
		<uni-list :border="true">
			<view v-if="loading" class="loading"><text>加载中...</text></view>
			<m-empty-data v-else-if="data.length == 0" :coverUrl="no_order_1" noTxt="暂无记录"></m-empty-data>
			<uni-list-chat
				v-for="(item, index) in data"
				:key="index"
				:title="item.title"
				:avatar="item.pic"
				avatar-circle="true"
				:note="item.summary"
				:time="formatCreateTime(item.createTime)"
				clickable="true"
				badge-positon="right"
				badge-text="dot"
				:showBadge="item.ifRead"
				@click="toDetail(item)"
			></uni-list-chat>
			<!-- click无效 -->
		</uni-list>
	</view>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import mEmptyData from '@/components/m-empty-data/m-empty-data.vue';
import { formatDate } from '@/common/date';
export default {
	components: {
		mEmptyData
	},
	computed: {
		...mapGetters({
			currentUser: 'user/info',
			hasLogin: 'user/hasLogin'
		})
	},
	data() {
		return {
			clickable:true,
			unreadTotal: 0,
			where: {},
			data:[],
			// data: [
			// 	{
			// 		title: '系统通知',
			// 		summary: '人才直聘新版本即将上线，敬请期待~~~~',
			// 		createTime: '2022-04-26',
			// 		pic: '/static/logo.png'
			// 	}
			// ],
			loading: false,
			no_order_1: this.$mAssetsPath.no_order_1
		};
	},
	onPullDownRefresh() {
		console.log('---onPullDownRefresh---');
	},
	onReachBottom() {
		console.log('---onReachBottom---');
	},
	onLoad() {
		this.getNoticeList();
	},
	onShow() {},

	methods: {
		async getNoticeList() {
			let param = {
				page: 1,
				// limit: 1
			};
			let res = await this.$apis.getNoticeList(param);
			console.log('getNoticeList===', res);
			if (res.data.length > 0) {
				this.data = res.data;
				console.log('data===', this.data);
			}
		},

		toDetail(item) {
			console.log('toDetail', item);
			this.$mRouter.push({
				route: this.$mRoutesConfig.noticeDetail,
				query: {
					id: item.noticeId
				}
			});
		},
		onqueryload(val) {
			this.datas = val;
			console.log('onqueryload==', val);
		},
		onqueryerror(val) {
			console.log('onqueryerror==', val);
		},
		
		formatCreateTime(time) {
			if (time == null || time === '') {
				return null;
			}
			let str = time.replace(/-/g,'/');
			let date = new Date(str);
			return formatDate(date, 'MM-dd hh:mm');
		},
	}
};
</script>

<style lang="scss">
.loading {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 20upx;
	text {
		color: $font-color-666;
	}
}
</style>
