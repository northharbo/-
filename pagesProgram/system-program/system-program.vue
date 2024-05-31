<template>
	<view class="swrap">
		<nav-bg title="管理系统"></nav-bg>
		
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

						title: "3D 塔防小游戏",
						name: "彭雨熙",
						time: "2020年",
						des:"  使用unity3D实现小型3D塔防游戏，主要使用技术unity3D、C#",
						image: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/c8fd7cf7-8f7f-4f3c-a1df-3dff7bf2849e.png",
						// video: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/4c658703-bfc2-4449-82d5-2a2c60541e53.mp4"
					},
					{

						title: "U团互助",
						name: "杨金福、欧阳润午、魏继文",
						time: "2021年",
						des:`### 项目描述：
> 该小程序的主要功能就是提供一个学生之间的互助平台，在这个平台上你可以发布你的需求，如：取快递、取外卖、帮忙打印、向同学提问等功能，同时在认证自己信息之后，你也可以通过这款小程序去帮助他人，如接单、回答问题等之类的功能。
### 主要技术
- 1、前端采用uni-app + vuex + uview实现小程序编写
- 2、后台管理系统使用vue+vuex+ vue-router+ axios实现
- 3、使用XD自己构思设计图、按照设计图实现页面效果
- 4、发布模块： 外卖订单、快递、打印等服务发布（主要信息填写提交后台、图片上传至OSS、打印文件上传）， 互助问题发布
- 5、内容展示： 首页轮播图、列表显示、数据分页渲染、上拉加载下拉刷新数据处理、图片预览显示、打印文件下载显示通过转发打印、接单与未接单安全状态变化、提交搜索使用防抖节流防止多次请求
- 6、信息上传与修改,个人信息修改、投诉、申诉、信息发布、认证图片上传。
						`,
						image: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/9d519933-8e6f-4dce-805f-835d36464f52.jpg",
						// video: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/ef32241c-ad2b-4e10-ba0e-55e55b7cfc54.mp4"
					},
					{

						title: "来打我啊(Unity3D小游戏)",
						name: "艾星宇",
						time: "2017年",
						des:"主要使用技术unity3D",
						image: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/58d22609-5680-48c6-a8ac-c6e1c13341e4.jpg",
						// video: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/4c658703-bfc2-4449-82d5-2a2c60541e53.mp4'
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



















