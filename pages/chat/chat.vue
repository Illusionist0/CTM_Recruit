<template>
	<view class="content">
		<view class="top">
			<view class="bg"></view>
			<view class="v-grid" v-if="userInfo.memberRole == 1">
				<uni-grid class="grid" :column="3" :show-border="false" :square="false">
					<uni-grid-item v-for="(item, index) in list2" :index="index" :key="index" @click.native="tapGrid(item)">
						<view class="grid-item-box">
							<!-- <image class="image" :src="item.url" mode="aspectFill" /> -->
							<text class="yzb" :class="item.icon" :style="{ color: item.color }"></text>
							<text class="text">{{ item.text }}</text>
							<view v-if="item.badge" class="grid-dot"><uni-badge :text="item.badge" :type="item.type" /></view>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
			<view class="v-grid" v-else>
				<uni-grid class="grid" :column="3" :show-border="false" :square="false">
					<uni-grid-item v-for="(item, index) in list" :index="index" :key="index" @click.native="tapGrid(item)">
						<view class="grid-item-box">
							<!-- <image class="image" :src="item.url" mode="aspectFill" /> -->
							<text class="yzb" :class="item.icon" :style="{ color: item.color }"></text>
							<text class="text">{{ item.text }}</text>
							<view v-if="item.badge" class="grid-dot"><uni-badge :text="item.badge" :type="item.type" /></view>
						</view>
					</uni-grid-item>
				</uni-grid>
			</view>
		</view>
		<view v-if="loading" class="loading"><text>加载中...</text></view>
		<view class="nodata" v-if="loading == false && conversations.length == 0 && !notice"><text>暂无消息</text></view>
		<uni-list :border="true" v-if="notice || conversations.length != 0">
			<template v-if="notice">
				<uni-list-chat
					title="系统通知"
					avatar="/static/img/notice.png"
					:note="notice.title"
					:time="formatCreateTime(notice.createTime)"
					badge-positon="left"
					badge-text="dot"
					:showBadge="false"
					@click="toNotice()"
					:clickable="clickable"
				></uni-list-chat>
			</template>

			<uni-list-chat
				v-for="(item, index) in conversations"
				:key="index"
				:title="item.data.name"
				:avatar="item.data.avatar"
				:note="item.lastMessage.payload.text"
				:time="formatDate(item.lastMessage.timestamp)"
				badge-positon="left"
				:badge-text="item.unread"
				:showBadge="true"
				@click="toChat(item)"
				@longTimeClick="longTimeClick(item)"
				:clickable="clickable"
			></uni-list-chat>
		</uni-list>
	</view>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
import GoEasyAudioPlayer from '@/components/GoEasyAudioPlayer/GoEasyAudioPlayer';
import EmojiDecoder from '@/lib/EmojiDecoder';
import mEmptyData from '@/components/m-empty-data/m-empty-data.vue';
import { formatDate } from '@/common/date';
import IMService from '@/lib/imservice';
const recorderManager = uni.getRecorderManager();

export default {
	components: {
		GoEasyAudioPlayer,
		mEmptyData
	},
	computed: {
		...mapState(['userInfo']),
		...mapGetters(['hasLogin'])
	},
	data() {
		return {
			clickable:true,
			no_order_1: this.$mAssetsPath.no_order_1,
			where: {},
			loading: false,
			notice: {
				title: '荟就业新版本即将上线',
				summary: '荟就业新版本即将上线，敬请期待~~~~',
				createTime: '2022-04-26',
				pic: '/static/logo.png'
			},
			unreadTotal: 0,
			conversations: [],
			list: [
				{
					icon: 'yzb-ic_xiaoxi_xitongxiaoxi',
					text: '系统消息',
					// badge: '99',
					type: 'warning',
					to: this.$mRoutesConfig.notices,
					color: '#bb8dbb'
				},
				{
					icon: 'yzb-fasong',
					text: '求职反馈',
					// badge: '1',
					type: 'success',
					to: this.$mRoutesConfig.apply,
					color: '#6ab493'
				},
				{
					icon: 'yzb-kanguowode',
					text: '谁看过我',
					// badge: '19',
					type: 'error',
					to: this.$mRoutesConfig.visitme,
					color: '#cac87e',
					_id: '623f0f3c748f900001fc6853'
				}
			],
			list2: [
				{
					icon: 'yzb-ic_xiaoxi_xitongxiaoxi',
					text: '系统消息',
					// badge: '99',
					type: 'error',
					to: this.$mRoutesConfig.notices,
					color: '#bb8dbb'
				},
				{
					icon: 'yzb-fasong',
					text: '收到简历',
					// badge: '1',
					type: 'error',
					to: this.$mRoutesConfig.apply,
					color: '#6ab493'
				},
				{
					icon: 'yzb-kanguowode',
					text: '谁看过我',
					// badge: '19',
					type: 'error',
					to: this.$mRoutesConfig.visitme,
					color: '#cac87e',
					_id: '623f0f3c748f900001fc6853'
				}
			]
		};
	},
	onLoad() {
		this.getNoticeList();
	},
	async onShow() {
		this.initData();
	},
	methods: {
		initData() {
			if (this.hasLogin) {
				if (this.goEasy.getConnectionStatus() === 'disconnected') {
					getApp().globalData.imService = new IMService(this.goEasy, this.GoEasy);
					getApp().globalData.imService.connect(this.userInfo);
				}
				//监听会话列表变化
				let self = this;
				this.goEasy.im.on(this.GoEasy.IM_EVENT.CONVERSATIONS_UPDATED, content => {
					self.renderConversations(content);
				});
				//加载会话列表
				this.goEasy.im.latestConversations({
					onSuccess: function(result) {
						let content = result.content;
						self.renderConversations(content);
					},
					onFailed: function(error) {
						//获取失败
						console.log('失败获取最新会话列表, code:' + error.code + ' content:' + error.content);
					}
				});
			}
		},

		async getNoticeList() {
			let param = {
				page: 1,
				limit: 1
			};
			let res = await this.$apis.getNoticeList(param);
			if (res.data.length > 0) {
				this.notice = res.data[0];
			}
		},

		onqueryload(val) {
		},
		renderConversations(content) {
			this.conversations = content.conversations || [];
			//格式化内容
			this.conversations.forEach(function (item, index) {
			    if(item.lastMessage.type=='text'){
				}else if(item.lastMessage.type=='video'){
					item.lastMessage.payload.text='[视频消息]';
				}else if(item.lastMessage.type=='audio'){
					item.lastMessage.payload.text='[语音消息]';
				}else if(item.lastMessage.type=='image'){
					item.lastMessage.payload.text='[图片消息]';
				}else if(item.lastMessage.type=='file'){
					item.lastMessage.payload.text='[文件消息]';
				}else if(item.lastMessage.type=='resume'){
					item.lastMessage.payload.text='[简历附件]';
				}
			});
			let unreadTotal = content.unreadTotal;
			this.setUnreadAmount(unreadTotal);
		},

		setUnreadAmount(unreadTotal) {
			this.unreadTotal = unreadTotal;
			if (this.unreadTotal > 0) {
				uni.setTabBarBadge({
					index: 2,
					text: this.unreadTotal.toString()
				});
			} else {
				uni.removeTabBarBadge({
					index: 2
				});
			}
		},

		toChat(item) {
			this.$mRouter.push({
				route: this.$mRoutesConfig.privateChat,
				query: {
					id: item.userId,
					avatar: item.data.avatar,
					name: item.data.name
				}
			});
		},

		longTimeClick(item) {
			let that = this;
			uni.showModal({
				title: '提示',
				content: '确定要删除该聊天吗？',
				success: res => {
					if (res.confirm) {
						that.goEasy.im.removePrivateConversation({
							userId: item.userId,
							onSuccess: function() {
								uni.showToast({
									icon: 'none',
									title: '删除成功'
								});
								console.log('Remove private conversation successfully.');
							},
							onFailed: function(error) {
								uni.showToast({
									icon: 'none',
									title: '删除失败' + error.content
								});
								console.log('Failed to remove private conversation, code:' + error.code + ' content:' + error.content);
							}
						});
					}
				}
			});
		},

		tapGrid(item) {
			this.$mRouter.push({
				route: item.to
			});
		},

		toNotice() {
			this.$mRouter.push({
				route: this.$mRoutesConfig.notices
			});
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
.top {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	.bg {
		background-color: $main-color;
		height: 120upx;
		width: 100%;
	}
	.v-grid {
		padding: 0 0 15upx 0;
		margin-top: -100upx;
		background-color: $bgcolor_white;
		width: 90%;
		border-radius: 24upx;
		box-shadow: 0 0 20upx rgba(0, 0, 0, 0.15);
		margin-bottom: 30upx;
	}

	.grid {
	}

	.image {
		width: 80upx;
		height: 80upx;
	}

	.grid-item-box {
		flex: 1;
		// position: relative;
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 10upx 0;
	}

	.grid-dot {
		position: absolute;
		top: 5px;
		right: 15px;
	}
	.yzb {
		font-size: 85upx;
		color: $main-color;
		height: 125upx;
	}
}
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
.nodata {
	display: flex;
	justify-content: center;
	align-items: center;
	color: $font-color-666;
	font-size: $uni-font-size-lg;
	margin-top: 250upx;
}
</style>
