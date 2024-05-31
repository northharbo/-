<template>
	<view class="content">
		<!-- <nav-bg :title="title"></nav-bg> -->
		<navigation-share :title="title"></navigation-share>
		
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<view class="title">
						{{title}}
					</view>
					<mp-html :content="$marked(content)" />
     		    </view>
				<white-space></white-space>
			</scroll-view>
		</view>
		<view class="btm-btn">
			<view class="btn-content">
				<view class="btm-left" v-if="urlList.length">
					<download-file :download-url="urlList"></download-file>
				</view>
				<view class="btm-right">
					<button class='share ' open-type="share">
						<text class="icon-tijiao iconfont share-icon "></text>
					</button>

				</view>
			</view>
			<safe-footer></safe-footer>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				urlList: [],
				title: "",
				content: ``
			};
		},
		onShareAppMessage() {
			return {
				title: this.title,
				imageUrl: this.articleInfo.url[0] || "",
				path: '/pagesShare/task-share/task-share',
			};
		},
		onLoad(e) {
			console.log(e)
			// this.detail = JSON.parse(e.detail)
			wx.setNavigationBarTitle({
				title: e.title
			})
			this.title = e.title || ""
			this.taskId = e.id
			//  获取考核详情
			this.getTaskDetail()
			this.$forceUpdate()
			// console.log(e.title)
		},
		methods: {
			clickLikeBtn() {
				this.isLike = !this.isLike
			},
			clickCollectBtn() {
				this.isCollect = !this.isCollect
			},
			async getTaskDetail() {
				uni.showLoading({
					icon:"none"
				})
				const {
					data: res
				} = await this.$httpApi.getAssessmentDetail({
					id: this.taskId
				})
				this.content = res.content;
				this.title = res.title;
				if (res.attachmentUrl) {
					this.urlList.push(res.attachmentUrl)
				}
				this.$forceUpdate()
				uni.hideLoading()
				console.log(this.urlList.length)
			},
			navToArticleDetail(e) {
				uni.navigateTo({
					url: `/pages/article-detail/article-detail?article=${JSON.stringify(e)}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		height: 100%;
		display: flex;
		flex-direction: column;
		background: rgba($color: #ffffff, $alpha: 0.5);
		
		&::after{
			content: "";
			position: absolute;
			height: 100%;
			width: 100%;
			box-sizing: border-box;
			padding-top: 100px;
			background-origin: content-box;
			background: url("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-87d8bdc7-ca98-47a8-86ca-374392c30b11/f0dbe48b-efd4-4cbe-8be0-2021c4b16ddd.png");
			background-size: 100% auto;
			// background-repeat: no-repeat;
			z-index: -1;
		}
		.main {
			flex: 1;
			overflow: hidden;

			.scroll-Y {
				height: 100%;

				.scroll-main {
					padding: 10rpx 20rpx;
				}
			}

		}
	}

	//  头部标题
	.title {
		font-size: 36rpx;
		font-weight: bold;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/be9db812-997d-4290-823b-f8643de9b004.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	//  底部下载区域
	.bottom-download {

		.title {
			color: #0048AB;
			padding-left: 40rpx;
		}
	}



	//  底部点赞
	.btm-btn {
		position: relative;
		z-index: 1;
		width: 100%;
		background: #FFFFFF;

		box-shadow: 0px -2rpx 2px rgba(229, 229, 229, 0.9);

		.btn-content {
			display: flex;
			flex-direction: row;
			padding: 10rpx;

			.btm-left {
				flex: 1;

				.like-count {
					color: #adadad;
				}
			}

			.btm-right {
				margin-left: auto;
				flex-shrink: 0;
				padding: 0 40rpx;
				display: flex;

				.share {
					border: none;
					// background: red;
					width: 64rpx;
					height: 64rpx;
					background: #FFFFFF;
					padding: 0;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					box-shadow: 0rpx 0rpx 5rpx 5rpx #f8f8f8;
					// overflow: hidden;
					font-size: 0;
					// margin-right: 40rpx;

					.share-icon {
						padding: 0;
						margin: 0;
						color: #4f87ff;
						font-size: 40rpx;
						// border: 1rpx solid red;
					}

				}
			}
		}
	}
</style>
