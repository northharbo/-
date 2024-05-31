<template>
	<view class="content">
		<nav-bg title="首页" :is-back="false"></nav-bg>
		<!-- <button type="default" @click="navJxauQtWeb">官网</button> -->
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<view class="banner-list ">
					<u-swiper border-radius="20" effect3d effect3d-previous-margin="20" height="340"
							:list="bannerList" indicator-pos="bottomRight" @click="clickSwiper"></u-swiper>
					</view>
					<view class="header ">
						<view class="avater u-skeleton-circle" @click="navJxauQtWeb">
							<image
								src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/8266fcc8-7332-43e1-9108-edd7b7f585ae.jpg"
								mode=""></image>
						</view>
						<view class="name ">
							江西农业大学青藤工作室
						</view>
					</view>
					<view class="sc-content ">
						<view class="card des-card">
							<icon-title title="介绍" class="min-height: 70rpx;" isRight right-text="详细介绍"
								iconColor="#12c112" icon="icon-xuexi2" @click="clickDesMore"></icon-title>
							<view class="des ">
								<!-- {{studioIntro}}
								 -->
								<u-parse :html="studioIntro"></u-parse>

							</view>
						</view>
						<view class="task card ">
							<icon-title title="考核任务" isRight icon="icon-renwu" @click="clickTaskMore"></icon-title>
							<view class="task-list">
								<task-card :listItem="task" @click='clickTaskEvent(task)'
									v-for="(task,index) in taskList" :key="index" />
							</view>
						</view>
						<view class="study-card card ">
							<icon-title title="学习专区" icon="icon-sds_di42leiwangzhanfuwu--" iconColor="#ff4ff7"
								@click="clickTaskMore"></icon-title>
							<view class="study">

								<view class="study-item" v-for="(study,index) in studyImgList" :key="study.id"
									@click="clickStudyClassify(study)">
									<view class="study-img">
										<image :src="study.icon" mode="aspectFill"></image>
									</view>
								</view>
							</view>

						</view>
						<view class="message card ">
							<icon-title title="工作室寄语" iconColor="#ff181b" isRight icon="icon-baoming3"
								@click="clickSendMessage"></icon-title>
							<view class="message-list">
								<view class="message-item" v-for="(studioMotto,index) in studioMottoList"
									:key="studioMotto.id">
									<view class="msg-header">
										{{studioMotto.authorName }} - {{studioMotto.clazz }}
									</view>
									<view class="msg-des">
										<view class="des-text">
											{{studioMotto.motto}}
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>

					<!-- 技术服务商 -->
					<technical-services></technical-services>
				</view>

			</scroll-view>
			<!---->
		</view>
		<dong-mouse @click="clickContactUsEvent"></dong-mouse>

	</view>
</template>

<script>
	import lineTitle from '@/components/line-title/line-title.vue'
	import taskCard from './components/task-card/task-card.vue'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		components: {
			lineTitle,
			taskCard
		},
		computed: {
			...mapState('globalVar', {
				tipShow: state => state.tipShow
			}),
			...mapState(['userInfo'])
		},
		data() {
			return {
				studioIntro: "",
				studioMottoList: [],
				loading: true, // 是否显示骨架屏组件
				studyImgList: [
					// {
					// 	id:1,
					// 	icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/2512f6cf-348c-402b-a22b-06ffaa6366a4.png",
					// 	name:"前端",
					// 	color:"#ff55ff",
					// 	url:"/pagesStudy/web-font/web-font",						
					// },{
					// 	id:2,
					// 	icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/fd65cc70-cfbf-4f5e-97a2-d2f96bf63b0d.png",
					// 	name:"后端",
					// 	color:"#aa55ff",
					// 	url:"/pagesStudy/web-end/web-end",						
					// },{
					// 	id:3,
					// 	icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/605f834c-8526-49a7-875c-cac4eb1c94dc.png",
					// 	name:"游戏",
					// 	color:"#cfcf00",
					// 	url:"/pagesStudy/game/game",
					// },
					// {
					// 	id:4,
					// 	icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/8cbe7932-b458-4e12-9b41-35769c518815.png",
					// 	name:"考研",
					// 	color:"#cf7159",
					// 	url:"/pagesStudy/examination/examination",	
					// }
				],

				bannerList: [

				],
				taskList: [

				],
			}
		},
		mounted() {

		},
		onLoad() {
			this.userLogin()
			this.indexTipControl()
			this.getInfoInit()

		},

		methods: {
			...mapActions('globalVar', {
				'up_tip_show': 'up_tip_show',
			}),
			...mapActions(['setUserInfo', 'setToken','login']),

			getInfoInit() {
				this.getIntroInfo()
				this.getIndexCarousel()
				this.getIndexMotto()
				this.getIndexTaskList()
				this.getStudyClassify()

			},
			navJxauQtWeb(){
				uni.navigateTo({
					url:"../qt-studio/qt-studio"
				})
			},
			Test() {
				uni.navigateTo({
					url: "/pages/weChatAuth/weChatAuth"
				})
			},
			//  获取工作室介绍信息

			async getIntroInfo() {
				uni.showLoading({
					title: "加载中"
				})
				try {
					const {
						data: res = []
					} = await this.$httpApi.getIndexIntro() // null
					// console.log(res)
					this.studioIntro = res
				} catch (e) {
					//TODO handle the exception
				}
				uni.hideLoading()
				this.loading = false
			},
			//  获取轮播图
			async getIndexCarousel() {
				try {
					const {
						data: res
					} = await this.$httpApi.getIndexCarousel()
					this.bannerList = res?.map(item => {
						return {
							id: item.id,
							image: item.picUrl,
							title: item.describe,
							foreignId: item.foreignId
						}
					})
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 获取工作室寄语
			async getIndexMotto() {
				try {
					const {
						data: res
					} = await this.$httpApi.getMottoList({
						curPage: 1,
						pageSize: 4
					})

					this.studioMottoList = res;
				} catch (e) {

				}
			},
			async getIndexTaskList() {
				const {
					data: res
				} = await this.$httpApi.getIndexTaskList()
				this.taskList = res
			},
			// 获取学习分类
			async getStudyClassify() {
				const {
					data: res
				} = await this.$httpApi.getStudyClassList()
				this.studyImgList = res;
				// console.log(1, res)
			},

			userLogin() {
				const _this = this

				if (this.userInfo.id) {
					wx.login({
						success: async (code) => {
							console.log(code.code)
							const {
								data: res,
								token
							} = await _this.$httpApi.userLogin({
								code: code.code,

							})
							_this.login({
								userInfo:res,
								token:token
							})
							_this.$forceUpdate()


						},
						fail(err) {
							console.log('code获取失败', err)
						}
					})
				}
			},
			//  小程序提示
			indexTipControl() {
				if (!this.tipShow) {
					uni.showModal({
						title: "温馨提示",
						content: `此小程序部分功能主要用于 《江西农业大学软件学院》 学生使用`,
						success: (e) => {
							console.log(e)
							if (e.cancel) {
								this.up_tip_show(true);
							}
						},
						cancelText: "不再提示",

					})
				}
			},
			// 点击头像
			clickAvater() {
				uni.navigateTo({
					url: './introduce/introduce'
				})
			},
			clickDesMore() {
				this.clickAvater()
			},
			// 点击每项考核
			clickTaskEvent(e) {
				console.log(e)
				
				this.$u.route({
					url: "/pages/task-detail/task-detail",
					params: {
						...e,
						content: ""
					}
				})
				
			},
			// 点击考核更多
			clickTaskMore() {
				uni.navigateTo({
					url: "/pagesTool/assessment-task/assessment-task"
				})
			},

			//  点击寄语更多
			clickSendMessage() {
				uni.navigateTo({
					url: './send-word/send-word'
				})
			},
			// 点击学习分类
			clickStudyClassify(study) {
				uni.navigateTo({
					url: `/pagesStudy/study-classify/study-classify?params=${JSON.stringify(study)}`
				})
			},

			//  点击轮播图
			async clickSwiper(index) {
				const articleId = this.bannerList[index].foreignId;
				const {
					data: res
				} = await this.$httpApi.getArticleDetail({
					id: articleId
				})
				//  跳转文章详情
				if (res.url) {
					this.$u.route({
						url: '/pages/weixin_article/weixin_article',
						params: {
							id: articleId
						}
					})
				} else {
					this.$u.route({
						url: '/pages/article-detail/article-detail',
						params: {
							type: "banner",
							id: this.bannerList[index].foreignId
						}
					})
				}


			},
			// 点击联系我们
			clickContactUsEvent() {
				// this.optionsShow = true;
				// console.log(1)
				uni.navigateTo({
					url: '/pages/about-us/about-us'
				})
			},
			navWeixinArticle() {
				uni.navigateTo({
					url: '../weChatAuth/weChatAuth'
				})
			}
		},

	}
</script>

<style lang="scss">
	.content {
		display: flex;
		height: 100%;
		flex-direction: column;
		width: 100%;
		overflow: hidden;
		background: rgba($color: #f4f4f4, $alpha: 1.0);
	
		.main {
			//  主要内容区域
			width: 100%;
			flex: 1;
			overflow: hidden;

			.scroll-Y {
				height: 100%;
			}

			.scroll-main {}
		}

		// 联系我们
		.contact-us {
			z-index: 1000000;
			position: fixed;
			bottom: 10rpx;
			right: 10rpx;
			background: rgba($color: #53e0ff, $alpha: 0.6);
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
			width: 100rpx;
			height: 100rpx;

			.iconfont {
				font-size: 48rpx;
				// font-weight: bold;
				color: #FFF;
			}
		}
	}

	//  轮播图
	.banner-list {
		margin: 20rpx 40rpx;
		// border-radius: 30rpx;
		overflow: hidden;
	}

	.header {
		//  头部的logo
		position: relative;
		top: -64rpx;
		width: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;

		.name {
			position: absolute;
			bottom: -54rpx;
			font-weight: bold;
			font-size: 32rpx;
		}

	}

	//  头像
	.avater {

		width: 128rpx;
		height: 128rpx;
		overflow: hidden;
		border-radius: 50%;
		// border: 1rpx solid red;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba($color: #4ff09a, $alpha: 0.2);

		image {
			width: 96%;
			height: 96%;
			border-radius: 50%;
		}
	}

	//  滚动中间部分
	.sc-content {
		.card {
			background: #FFF;
			margin: 40rpx 0;
			border-radius: 20rpx;
			padding: 20rpx 10rpx;
		}

		.des-card {

			.des {
				margin: 0 10rpx;
				padding: 10rpx;
				background: rgba($color: #c3f1e0, $alpha: 0.2);
				border-radius: 10rpx;
				text-indent: 1rem;
				min-height: 100rpx;
			}
		}

		// 任务样式
		.task {
			// background: rgba($color: #000000, $alpha: 0);
			min-height: 150rpx;
		}

		.message {
			.message-item {
				margin: 40rpx 0;
				// border: 1rpx solid red;
				display: flex;
				flex-direction: column;
				padding: 20rpx 20rpx;
				border-radius: 10rpx;
				box-shadow: 0rpx 5rpx 5px rgba($color: #000000, $alpha: 0.1);

				.msg-header {
					padding: 10rpx 0;
					font-weight: bold;
				}

				.msg-des {
					// margin: 0 10rpx;
					padding: 10rpx;
					background: rgba($color: #c3f1e0, $alpha: 0.2);
					border-radius: 10rpx;

					.des-text {
						text-indent: 1rem;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						// max-width: 240rpx;
						-webkit-box-orient: vertical;
						-webkit-line-clamp: 4;
					}
				}
			}
		}
	}

	// 学习
	.study {
		display: flex;
		// justify-content: center;
		flex-wrap: wrap;
		min-height: 100rpx;

		.study-item {
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 10rpx 0;
			height: 140rpx;
			border-radius: 20rpx;

			// overflow: hidden;
			.study-img {
				width: 90%;
				height: 100%;
				border-radius: 20rpx;
				box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);

				image {
					border-radius: 10rpx;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
