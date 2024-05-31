<template>
	<view class="content">
		<navigation-share :title="title"></navigation-share>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<view class="title">
						{{title}}
					</view>
					<view class="article-header">
			
						<view class="user-info">
							<avater :avaterUrl="articleInfo.authorAvatar || ''"></avater>
							<view class="user">
								<view class="name">
									{{articleDetail.authorName || ""}}
								</view>
								<view class="artcile-info">
									<view class="time">
										<text class="iconfont icon-shijian2"></text>
										{{articleInfo.createTime || ""}}
									</view>
									<view class="visit">
										<text class="iconfont icon-liulan"></text>
										<text class="des-count">{{articleInfo.views}}</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="des-content">
						<mp-html :content="content"></mp-html>
						<u-loadmore v-if="!content" status="loading" icon-type="flower" />
			
					</view>
					<view class="detail-btn">
						<view class="dt-btn-lf">
							<image class="icon-img"
								src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/e102a127-3e09-4d2e-915b-4249aca41bb2.png"
								mode=""></image>
							<text class="view-text">{{articleDetail.views}}</text>
						</view>
						<button class='cu-btn dt-btn-rg  shadow round ' open-type="share">
							<text class='share-text'>分享</text>
							<image class="share-icon icon-img"
								src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/a9a024c3-2a06-48d2-816d-81bfa25389d6.png"
								mode=""></image>
						</button>
					</view>
					<!--  黑色边界线 -->
					<view class="black-line"></view>
					<!--  加载动画 -->
					<u-loadmore v-if="recommendArticleLoading" status="loading" icon-type="flower" />
			
					<!-- 文章推荐 -->
					<view class="recommended">
						<view class="rec-hd">
							<view class="cu-bar bg-white margin-top-xs">
								<view class="action sub-title">
									<text class="text-xl text-bold text-blue text-shadow">热门推荐</text>
									<text class="text-ABC text-blue">Recommended</text>
								</view>
							</view>
						</view>
						<news-card class="study-item" :data="item" v-for="(item,index) in recommendArticle" :key='index'
							@click="navToArticleDetail(item)">
						</news-card>
					</view>
					<white-space></white-space>
			
				</view>
			</scroll-view>
		</view>
		<view class="btm-btn">
			<view class="btn-content">
				<view class="btm-left">
					<view class="cu-avatar-group" v-if="articleDetail.likeCount">
						<view class="cu-avatar round " v-for="(avater,index) in articleDetail.likedUserAvatar || []"
							:key="index" :style="{'background-image':'url('+avater+')'}">
							{{avatar}}
						</view>
					</view>
					<text class="like-count">
						{{articleDetail.likeCount || 0}}
					</text>
				</view>
				<view class="btm-right">
					<button class='share ' open-type="share">
						<text class="icon-tijiao iconfont share-icon "></text>
					</button>
					<view class="collect btm-btn-icon" @click="clickCollectBtn">
						<text class="icon-fenshu_liang  iconfont icon "
							:class="{'active-collect':articleDetail.isCollect}"></text>
					</view>
					<view class="like-btn btm-btn-icon" @click="clickLikeBtn">
						<text class="iconfont icon icon-xihuan-active "
							:class="{'active-like':articleDetail.isLike}"></text>
					</view>
				</view>
			</view>
			<safe-footer></safe-footer>
		</view>
		
	</view>
</template>

<script>
	import marked from 'marked' //转换Markdown格式富文本

	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {
		components: {},
		data() {
			return {
				scrollTop: 0,
				iconStyle: {
					fontSize: '32rpx',
					color: '#2979ff'
				},
				articleId: 0, // 文章id
				articleInfo: {}, // 文章信息
				content: "", // 文章内容
				title: "", // 文章标题
				recommendArticleLoading: true, // 文章推荐动画
				articleDetail: {},
				likeIcon: "",
				isLikeLoading: false,
				isCollect: false,
				avatar: [],
				recommendArticle: [],
				classId: 0,
				oldLikeStatus:null, // 最初始的点赞状态
			};
		},

		
		onLoad(e) {
			this.articleId = e.id
			this.classId = articleInfo.remid
			
			this.getInitData()

		},
		computed: {
			...mapState(['userInfo'])
		},
		methods: {
			//  初始化数据
			getInitData() {
				this.getArticleDetail()
				this.getRecommendArticle();
			},
			//  获取推荐文章
			async getRecommendArticle() {
				const {
					data: res
				} = await this.$httpApi.getRecommendStudyList({
					classId: this.classId
				})
				// console.log(res)
				this.recommendArticle = res

				//  关闭加载中动画
				this.recommendArticleLoading = false

				console.log("this.recommendArticle", this.recommendArticle)
			},
			//  获取文章详情
			async getArticleDetail() {
				uni.showLoading()
				const {
					data: res
				} = await this.$httpApi.getArticleDetail({
					id: this.articleId
				})
				this.content = marked(res.content)
				//  文章详情所有信息
				this.articleDetail = res;
				this.title = res.title
				console.log("this",this.title)
				this.oldLikeStatus =  res.isLike
			
				uni.hideLoading()
				console.log(res)

			},
			//  点赞按钮
			async clickLikeBtn() {
				// this.isLike = !this.isLike
				if (!this.isLikeLoading) {
					this.isLikeLoading = true
					uni.showLoading()
					await this.$httpApi.articleClickLike({
						artId: this.articleId,
						status: !this.articleDetail.isLike
					})
					this.isLikeLoading = false
					uni.hideLoading()
					// 修改点赞状态
					this.articleDetail.isLike = !this.articleDetail.isLike
					// this.articleDetail.likedUserAvatar.push(this.userInfo.avatarUrl)
					
					if(!this.oldLikeStatus){
						// console.log(oldLikeStatus)
						if(this.articleDetail.isLike){
							// console.log(this.articleDetail.likedUserAvatar)
							this.articleDetail.likedUserAvatar.push(this.userInfo.avatarUrl)
						}else{
							this.articleDetail.likedUserAvatar.pop()
						}
						this.$forceUpdate()
					}
					
				}

			},
			//  点击收藏按钮
			async clickCollectBtn() {
				uni.showLoading()
				await this.$httpApi.articleClickCollect({
					artId: this.articleId,
					status: !this.articleDetail.isCollect
				})
				uni.hideLoading()
				//  修改收藏按钮点赞状态
				this.articleDetail.isCollect = !this.articleDetail.isCollect

			},

			// 跳转推荐文章详情
			navToArticleDetail(e) {
				uni.navigateTo({
					url: `/pages/article-detail/article-detail?article=${JSON.stringify(e)}`
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;

		.main {
			flex: 1;
			// border: 1rpx solid red;
			overflow: hidden;

			.scroll-Y {
				height: 100%;
				overflow: hidden;

				.scroll-main {

					background: #fff;

					.des-content {
						padding: 0 20rpx;
					}
				}
			}
		}
	}

	// 文章标题
	.title {
		width: 100%;
		font-size: 36rpx;
		font-weight: bold;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/be9db812-997d-4290-823b-f8643de9b004.png);
		background-size: 100% 100%;
		background-repeat: no-repeat;
	}

	.article-header {
		//  头部信息
		padding: 50rpx 20rpx;
		padding-top: 0;
		width: 100%;


		.user-info {

			display: flex;
			flex-direction: row;

			.user {
				padding-left: 20rpx;
				display: flex;
				flex-direction: column;

				.name {
					font-weight: bold;
					font-size: 32rpx;

				}

				.artcile-info {
					display: flex;
					color: #C0C5CE;
					font-size: 24rpx;

					.iconfont {
						font-size: 24rpx;
						padding: 0 10rpx;
						padding-left: 0;
					}
				}
			}

		}
	}

	//  文章分享详情
	.detail-btn {
		margin: 50rpx 0;
		width: 100%;
		display: flex;
		flex-direction: row;
		padding: 0 40rpx;

		.icon-img {
			width: 36rpx;
			height: 36rpx;
		}

		.dt-btn-lf {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;

			.view-text {
				padding-left: 20rpx;
				color: #C0C0C0;
			}
		}

		.dt-btn-rg {
			margin-left: auto;
			background: rgba($color: #92ebff, $alpha: 1.0);
			padding: 15rrpx 10rpx;

			.share-text {
				color: #FFFFFF;
				padding-right: 10rpx;
			}

			// .share-icon{

			// }
		}
	}

	//  分割线
	.black-line {
		width: 100%;
		height: 30rpx;
		background: rgba($color: #f4f4f4, $alpha: 1.0);
	}

	//  热门推荐
	.recommended {
		margin-top: 20rpx;

		.rec-hd {
			border-bottom: 1rpx solid rgba($color: #ebebeb, $alpha: 1.0);
		}
	}

	.cu-avatar {
		// background-image: url('https://thirdwx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEJIiaZ10AszhtOnfuHqLictFn3G4cAlsfwYN8Jy60yePGeibcyB76saN8TW8DWCic0fQ2v2wByjsmFCrQ/132');
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
				display: flex;
				align-items: center;

				.like-count {
					color: #adadad;
				}
			}

			.btm-right {
				margin-left: auto;
				flex-shrink: 0;
				padding-right: 40rpx;
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
					margin-right: 40rpx;

					.share-icon {
						padding: 0;
						margin: 0;
						color: #4f87ff;
						font-size: 40rpx;
						// border: 1rpx solid red;
					}

				}

				.btm-btn-icon {
					width: 64rpx;
					height: 64rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border-radius: 50%;
					box-shadow: 0rpx 0rpx 5rpx 5rpx #f8f8f8;
					font-size: 0;
				}

				.icon {
					color: #ababab;
					font-size: 50rpx;

				}

				.collect {
					margin-right: 40rpx;

					.active-collect {
						color: #FF9700;
					}

				}

				.like-btn {

					.active-like {
						color: #ff2b2b;
					}
				}



			}
		}
	}
</style>
