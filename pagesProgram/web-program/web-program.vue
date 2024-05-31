<template>
	<view class="swrap">
		<nav-bg title="WEB应用"></nav-bg>
		
		<view class="program-list">
			<program-card :index="index" :data="item" v-for="(item,index) in programlist" :key="index" @click="cilckProgram"></program-card>
			
		</view>
		
		<white-space></white-space>
	</view>
</template>

<script>
	export default {
		components:{
			
		},
		data() {
			return {
				programlist: [{

						title: "江西农业大学管理系统",
						name: "李海峰老师",
						time: "2013年",
						des:"  江西农业大学管理系统用于学生信息管理，成绩管理等学生、老师服务。",
						image: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/0b613a8c-98d8-4d46-9a08-f72d8442f33e.png",
						// video: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/dd61026b-680c-419c-a4b8-67e978296e0e.mp4"
					},

					{

						title: "江农教学发布",
						name: "张慈仁",
						time: "2017年",
						des:"  手机端学生信息管理系统，查看课表、成绩、选课等信息",
						image: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/5dd615aa-9d35-4bda-8536-9664d9c2fea3.jpg",
						// video: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/fe88ad2d-3c9b-4614-8f01-7fa0dda4cfbb.mp4"
					},

					
					{

						title: "金圣红土行",
						name: "杨金福、徐毅",
						time: "2021年",
						des:`
### 项目描述：
> 主要用于江西中烟有限公司内部人员使用，建党100周年活动，步数打卡，通过步数排行统计成绩、还提供党史答题模块、题型主要包括单选题、多选题、判断题、填空题。以及江西红的打卡点显示。

### 主要技术
- 1、前端采用uni-app + vuex + uview实现小程序编写，vuex全局状态管理同时结合本地储存，存储全局数据
- 2、后台管理系统使用layui实现
- 4、注册登录模块： 注册主要包含单选框、联级选择框、输入框非法验证，登录主要采用微信一键登录，登录token拦截。
- 5、步数上传模块： 获取微信步数，提交至后台，步数防止多次提交采用提交请求是禁止按钮提交
防止后台数据解析错误，
- 6、排行榜数据显示模块： 采用uni-app的swiper滑块视图容器，实现左右滑动切换排行数据、并实现排行步数分页显示、下拉刷新、上拉加载
- 7、红色打卡点内容显示： 富文本渲染使用组件库、音乐播放（播放与暂停）、打卡点的上锁与解锁显示，控制页面跳转。
- 8、党史答题：主要实现单选、多选、判断、填空题，类型显示不同选择框，多选题采用Set存储
- 9、个人信息修改： 表单提交注册相似
- 10、小程序的维护与升级管理，使用git进行版本管理，防止代码丢失。
						`,
						image: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/b87fd5bb-326b-489d-8590-e234ab5a026c.jpg",
						// video: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/a99d5694-9565-46d5-89bf-78ae21b4c64e.mp4"
					},
				]
			};
		},
		methods:{
			//  点击瀑布流
			cilckProgram(item) {
				console.log(item)
				uni.navigateTo({
					url: `/program/video-detail/video-detail?params=${JSON.stringify(item)}`
				})
			},
		}
	}
</script>

<style lang="scss">
	.program-list {
		padding: 10px 10rpx;
	}

	.cell {
		border-bottom: 1px solid #f4f4f4;
		padding: 10px;
	}
</style>



















