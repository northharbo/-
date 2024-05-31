<template>
	<view class="content">
		<nav-bg title="考核任务列表"></nav-bg>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="taskScrolltolowerBottom">
				<view class="card-item" v-for="(task ,i ) in taskList " :key="task.id" @click="navToTaskDetail(task)">
					<view class="pic">
						<image :src="task.imageUrl" mode="aspectFill"></image>
					</view>
					<view class="rg">
						<view class="title">
							{{task.title}}
						</view>
						<view class="rg-main">
							<view class="rg-main-lf">
								<view class="mark">
									<view class="post mark-count">
										提交：<text class="count">{{task.postNum}}</text>
									</view>
									<view class="marked mark-count">
										已批阅：<text class="count">{{task.markNum}}</text>
									</view>
								</view>
								<view class="main-time">
									<view class="end ">
										结束：<text class="count">{{task.endTime}}</text>
									</view>
									<view class="start">
										开始：<text class="count">{{task.createTime}}</text>
									</view>
								</view>
							</view>
							<view class="rg-main-rg">
								<text class="tag" :class="{finsh:task.status}">结束</text>
							</view>
						</view>
					</view>
				</view>
				<u-loadmore :status="status" icon-type="flower" />
			</scroll-view>
		</view>
		<safe-footer></safe-footer>
	</view>
</template>

<script>
	// import {mapState} from 'vuex'
	import taskCard from '../components/task-card/task-card.vue'
	import taskedCard from '../components/tasked-card/tasked-card.vue'
	export default {
		components: {
			taskCard,
			taskedCard
		},
		computed: {
			// ...mapState(['loginStatus'])
		},
		data() {

			return {
				tabIndex: 0,
				sendList: {

				},
				curierlist: [],
				taskList: [],
				status: "loading",
				// 上拉记载状态
				// tablist 数据
				tabList: [{
						id: '0',
						name: '考核任务',
						count: 20,
						icon: "icon-renwu2",
						color: "#f55dff"
					}, {
						id: '1',
						name: '考核答案',
						count: 20,
						icon: "icon-tijiaowancheng",
						color: "#55a7ff"
					}

				],
				//  请求分页信息
				page: {
					curPage: 1,
					pageSize: 7,
				},
				//  后端返回分页信息
				resPage: {},



			};
		},
		onLoad(e) {
			this.getTaskList()
		},
		watch: {
			tabIndex(newValue) {

			}
		},
		methods: {

			// 考核任务滚动到底部
			taskScrolltolowerBottom() {
				if (this.resPage.curPage < this.resPage.totalPage) {
					this.resPage.curPage++;
					this.getTaskList()
				} else {
					this.status = "nomore"
				}
			},




			// 点击进入考核任务详情
			navToTaskDetail(e) {
				// ?detail=${JSON.stringify(e)}
				this.$u.route({
					url: 'pagesTool/admin-submited-asm/admin-submited-asm',
					params: {
						...e,
						content: ""
					}
				})
			},
			//  获取考核任务列表
			async getTaskList() {

				try {
					const {
						data: res = [],
						page: resPage
					} = await this.$httpApi.getAdminAsmList({
						page: {
							...this.page
						},
						body: {
							type: 1
						}
					})
					this.taskList.push(...res);

					// 当总条数小于3是修改加载动画为，没有更多
					if (resPage.totalNum <= 7 || resPage.totalNum == resPage.curPage) {
						this.status = "nomore"
					}
					this.resPage = resPage;
				} catch (e) {

				}
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: rgba($color: #f5f5f5, $alpha: 1.0);

		.main {
			flex: 1;
			overflow: hidden;
		}
	}

	.scroll-Y {
		height: 100%;
	}

	.card-item {
		margin: 0 20rpx;
		margin-bottom: 20rpx;
		background: #FFFFFF;
		display: flex;
		padding: 10rpx 10rpx;

		.pic {
			image {
				width: 168rpx;
				height: 168rpx;
			}
		}

		.rg {
			flex: 1;
		   padding-left: 20rpx;
			.title {
				// font-size: 32rpx;
				font-weight: bold;
				padding-bottom: 10rpx;
			}

			.rg-main {
				width: 100%;
				display: flex;
				flex-direction: row;
			}
			.rg-main-lf {
			
				display: flex;
				flex-direction: column;
			}
			// 考核提交信息
			.mark {
				display: flex;
				flex-direction: row;
				padding: 5rpx 0;
				.mark-count{
					width: 50%;
				}
				.marked{
					margin-left: auto;
					
				}
			}
			.main-time{
				color: #9c9a9d;
			}
			.rg-main-rg{
				display: flex;
				flex: 1;
				align-items: center;
				.tag{
					background: #dc6575;
					padding:4rpx 20rpx;
					color: #FFFFFF;
					margin-left: auto;
					font-size: 24rpx;
					
				}
				.finsh{
					background: #1CBBB4;
				}
			}

			
		}
	}
</style>
