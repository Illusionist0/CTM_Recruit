# cc-beautyTabs

### 我的技术微信公众号

查看更多前端组件和框架信息，请关注我的技术微信公众号【前端组件开发】

![图片](https://i.postimg.cc/RZ0sjnYP/front-End-Component.jpg)


#### 使用方法 
```使用方法
<!-- tabchange: tab选择事件 tabList：tab数据-->
<cc-beautyTabs @tabChange="tabChange" :tabList="tabList"></cc-beautyTabs>

```

#### HTML代码实现部分
```html
<template>
	<view class="content">

		<view style="height: 22px;"></view>

		<!-- tabchange: tab选择事件 tabList：tab数据-->
		<cc-beautyTabs @tabChange="tabChange" :tabList="tabList"></cc-beautyTabs>

		<view style="height: 2px;"></view>
		<!-- tabchange: tab选择事件 tabList：tab数据-->
		<cc-beautyTabs @tabChange="tabChange" :tabList="tabListTwo"></cc-beautyTabs>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [{
						key: '1',
						value: '首页'
					},
					{
						key: '2',
						value: '标题一'
					},
					{
						key: '3',
						value: '标题二'
					},
					{
						key: '4',
						value: '标题三'
					},
					{
						key: '5',
						value: '标题四'
					},
					{
						key: '6',
						value: '标题五'
					},
					{
						key: '7',
						value: '标题六'
					},
					{
						key: '8',
						value: '标题七'
					},
					{
						key: '9',
						value: '标题八'
					},


				],
				tabListTwo: [{
						key: '1',
						value: '推荐'
					},
					{
						key: '2',
						value: '选项一'
					},
					{
						key: '3',
						value: '选项二'
					},
					{
						key: '4',
						value: '选项三'
					},
					{
						key: '5',
						value: '选项四'
					},
					{
						key: '6',
						value: '选项五'
					},
					{
						key: '7',
						value: '选项六'
					},
					{
						key: '8',
						value: '选项七'
					},
					{
						key: '9',
						value: '选项八'
					},


				],

			}
		},
		onLoad() {

		},
		methods: {

			tabChange: function(t) {

				console.log("tab选择序列 = " + JSON.stringify(t));
			},

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;

	}
</style>

```
