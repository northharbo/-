<template>
	<view class="bg-gradual-blue">
		<scroll-view scroll-y class="DrawerPage" :class="modalName=='viewModal'?'show':''"
			@scrolltolower="scrollBottomLoadMore">
			<nav-bg :title="'收藏夹'+title"></nav-bg>

			<view class="fixed-btn" @click="showModal" data-target="viewModal">
				<text class="btn-icon icon-fenshu_liang iconfont"></text>
			</view>
			<view class="scroll-main">
				<view class="new-list">
					<view class="empty"  v-if="isShowEmpty">
						<u-empty text="暂无收藏" mode="favor"></u-empty>
						<!-- <image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/d4d6a865-ae90-43af-9dda-dff4a6c72ff1.png" mode=""></image> -->
					</view>
					<news-card class="study-item" :data="item" v-for="(item,index) in articleList" :key='index'
						@click="navToArticleDetail(item)" />
				</view>
				<u-loadmore :status="status" icon-type="flower" v-if="!isShowEmpty"/>
				<safe-footer></safe-footer>
			</view>
		</scroll-view>
		<view class="DrawerClose" :class="modalName=='viewModal'?'show':''" @tap="hideModal">
			<text class="icon-arrow-right1 iconfont"></text>
		</view>
		<scroll-view scroll-y class="DrawerWindow" :class="modalName=='viewModal'?'show':''">
			<view class="classify-menu">
				<view class="classify-parent " v-for="(classify, index) in articleClassify" :key="index"
					 :class="{'active-classify':classify.id == currentActiveClassify}">
					<view class="classify-content" >

						<view class="classify-parent-name"
							:class="{'classify-parent-name-active':classify.id == currentActiveClassify}"
							@click="clickParentClassify(classify)"
							>
							<view class="name-icon">
								<image class="icon-image" :src="classify.image" mode="widthFix"></image>
								<text>{{classify.className}}</text>
							</view>
							<view class=" iconfont icon-youjiantou"
								:class="{'right-icon-active':classify.id == currentActiveClassify}" v-if="classify.id !== -1"></view>
						</view>
						<view class="classify-item"
							:class="{'classify-item-active':classify.id == currentActiveClassify}"
							v-for="classifyItem in classify.classList" :key="classifyItem.id" @tap="clickClassifyItem(classifyItem)">
							<text class="iconfont " :style="{color:classifyItem.color}" :class="classifyItem.icon"> </text>
							<text>{{classifyItem.className}}</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				modalName: null,
				itemList: [{
					head: "赏识在于角度的转换",
					body: "只要我们正确择取一个合适的参照物乃至稍降一格去看待他人，值得赏识的东西便会扑面而来",
					open: true,
					disabled: true
				}, {
					head: "生活中不是缺少美，而是缺少发现美的眼睛",
					body: "学会欣赏，实际是一种积极生活的态度，是生活的调味品，会在欣赏中发现生活的美",
					open: false,
				}, {
					head: "周围一些不起眼的人、事、物，或许都隐藏着不同凡响的智慧",
					body: "但是据说雕刻大卫像所用的这块大理石，曾被多位雕刻家批评得一无是处，有些人认为这块大理石采凿得不好，有些人嫌它的纹路不够美",
					open: false,
				}],
				status: 'loading', // 上拉加载状态
				//  文章列表
				articleList: [

				],
				isShowEmpty:false,  // 是否显示内容为空
				articleClassify: [],
				title: "全部",//收藏夹标题,
				//  文章分页信息
				pageInfo: {
					curPage: 1,
					pageSize: 10,
				},
				//  后端返回分页信息
				resPage: {

				},
				currentActiveClassify: 0,
				classId: null, //  当前分类ID
				classity: [
					"面经",
					"学习路线",
					"算法"
				]
			};
		},

		onLoad() {
			this.initStatusData()
		},
		methods: {

			//  初始化数据
			initStatusData() {
				this.getAllArticleClassify()
				this.getCollectionArticleList()

			},

			//  获取收藏文章列表
			async getCollectionArticleList() {
				const {
					data: res,
					page: resPage
				} = await this.$httpApi.getCollectionArticleList({
					...this.pageInfo,
					classId: this.classId,
				})
				// this.articleList = res  // 绑定文章数据
				this.articleList.push(...res);
				this.resPage = resPage
				// 当总条数小于3是修改加载动画为，没有更多
				if (resPage.totalNum <= 5) {
					this.status = "nomore"
				}
				this.isShowEmpty = resPage.totalNum == 0 ? true: false

			},
			//  获取 文章总分类
			async getAllArticleClassify() {
				const {
					data: res
				} = await this.$httpApi.getAllArticleClassify()
				res.unshift({
					"id": -1,
					"className": "全部",
					"image": "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/4920ccba-4e38-4a58-a8a4-52e03a2f9893.png"
				})
				this.articleClassify = res
				
			},
			//  滚动到底部
			scrollBottomLoadMore() {
				this.pageInfo.curPage++;
				if (this.pageInfo.curPage <= this.resPage.totalPage) {
					//  当还有总页数大于当前页数说明还有数据 可以再请发送请求数据 信息接口
					this.getCollectionArticleList()
				} else {
					// this.pageInfo.curPage =  this.resPage.curPage
					this.status = "nomore"
				}
			},

			// 点击父级分类
			clickParentClassify(classify) {
				console.log(this.currentActiveClassify, classify)
				if (classify.id === this.currentActiveClassify) {
					return this.currentActiveClassify = ""
				}
				if(classify.id === -1){
					//  展示全部
					this.classId = null;
					this.pageInfo =  {
						curPage: 1,
						pageSize:10,
					},
					this.articleList = []
					this.getCollectionArticleList()
					this.hideModal()
				}
				// 当前激活的分类
				this.currentActiveClassify = classify.id
			},
			
			//点击二级ID
			clickClassifyItem(classify){
				this.title = `(${classify.className})`
				this.classId = classify.id;
				this.pageInfo =  {
					curPage: 1,
					pageSize:10,
				},
				this.articleList = []
				this.getCollectionArticleList()
				this.hideModal()
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			},
			navToArticleDetail(e) {
				this.$u.route({
					url: '/pages/article-detail/article-detail',
					params: {
						...e,
						keywordList:null
					}
				})
			},
		},
	}
</script>

<style lang="scss" scoped>
	page {
		background-image: var(--gradualBlue);
		width: 100vw;
		overflow: hidden;
	}





	//  悬浮按钮
	.fixed-btn {
		position: fixed;
		right: 40rpx;
		bottom: 100rpx;
		background: rgba($color: #49b6f9, $alpha: 0.8);
		border-radius: 50%;
		width: 86rpx;
		height: 86rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;

		.btn-icon {
			color: #ffb726;
			font-size: 46rpx;
		}
	}

	//  收藏夹分类
	.classify-menu {
		border-radius: 10rpx;
		background: #FFFFFF;
		margin: 0 20rpx;
		margin-top: 100rpx;
		box-sizing: border-box;
		padding: 20rpx;
	}

	
	.classify-content {
		padding: 30rpx 0;
		border-bottom: 1rpx solid #f8f8f8;

	}
	.active-classify{
		// background: red;
		.classify-content {
			border-bottom: none;
			
		}
	}
	// .classify-parent:last-child {
		
	// }

	.classify-parent-name {
		// 父级分类
		font-size: 32rpx;
		display: flex;
		justify-content: space-between;
		color: #000000;

		.name-icon {
			display: flex;
			align-items: center;

			.icon-image {
				width: 36rpx;
				height: 36rpx;
				margin-right: 10rpx;
			}
		}

		.iconfont {
			// transition: transform 3s linear 5s;  //属性为all，时长为3S，匀速，延迟5S后在开始过度动画

		}

		.right-icon-active {
			transform: rotateZ(90deg);
		}

	}

	.classify-parent-name-active {
		color: #007AFF;

	}

	//  二级分类
	.classify-item {
		color: #000000;
		
		padding: 30rpx 0;
		padding-left: 40rpx;
		color: #626262;
		border-bottom: 1rpx dotted #f7f7f7;
		// display: flex;
		display: none;
		align-items: center;
		.iconfont{
			margin-right: 10rpx;
		}

	}

	.classify-item-active {
		display: block;
	}

//  内容为空
	.empty{
		height: 80vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}




	.DrawerPage {
		position: fixed;
		width: 100vw;
		height: 100vh;
		left: 0vw;
		background-color: #f1f1f1;
		transition: all 0.4s;
	}

	.DrawerPage.show {
		transform: scale(0.9, 0.9);
		left: 85vw;
		box-shadow: 0 0 60upx rgba(0, 0, 0, 0.2);
		transform-origin: 0;
	}

	.DrawerWindow {
		position: absolute;
		width: 85vw;
		height: 100vh;
		left: 0;
		top: 0;
		transform: scale(0.9, 0.9) translateX(-100%);
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
		padding: 100upx 0;
		background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/857f7e55-6d4e-4dfe-9a0c-f41ae23bdc5f.jpeg);
		background-size: 100% 100%;

	}

	.DrawerWindow.show {
		transform: scale(1, 1) translateX(0%);
		opacity: 1;
		pointer-events: all;
	}

	.DrawerClose {
		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		top: 0;
		color: transparent;
		padding-bottom: 30upx;
		display: flex;
		align-items: flex-end;
		justify-content: center;
		background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.6));
		letter-spacing: 5px;
		font-size: 50upx;
		opacity: 0;
		pointer-events: none;
		transition: all 0.4s;
	}

	.DrawerClose.show {
		opacity: 1;
		pointer-events: all;
		width: 15vw;
		color: #fff;
	}

	.DrawerPage .cu-bar.tabbar .action button.cuIcon {
		width: 64upx;
		height: 64upx;
		line-height: 64upx;
		margin: 0;
		display: inline-block;
	}

	.DrawerPage .cu-bar.tabbar .action .cu-avatar {
		margin: 0;
	}

	.DrawerPage .nav {
		flex: 1;
	}

	.DrawerPage .nav .cu-item.cur {
		border-bottom: 0;
		position: relative;
	}

	.DrawerPage .nav .cu-item.cur::after {
		content: "";
		width: 10upx;
		height: 10upx;
		background-color: currentColor;
		position: absolute;
		bottom: 10upx;
		border-radius: 10upx;
		left: 0;
		right: 0;
		margin: auto;
	}

	.DrawerPage .cu-bar.tabbar .action {
		flex: initial;
	}
</style>
