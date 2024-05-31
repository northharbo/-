<template>
	<view class="content">
		<nav-bg title="浏览记录"></nav-bg>
		<view class="main">
			<scroll-view :scroll-y="true" class="scroll-Y" @scrolltolower="scrollBottomLoadMore">
				<view class="scroll-main">
					<view class="new-list">
						<news-card class="study-item" :data="item" v-for="(item,index) in articleList" :key='index'/>
					</view>
					<u-loadmore :status="loadingStatus" icon-type="flower" />
					<safe-footer></safe-footer>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				articleList: [],
				// 页面请求数据
				pageInfo:{
					curPage:1,
					pageSize:10,
					
				},
				//  后端返回页面信息
				resPage:{
					
				},
				loadingStatus:"loading"  // 加载状态

			};
		},
		onLoad() {
			this.getViewHistoryList()
		},
		methods: {
			async getViewHistoryList(){
				const{ data :res = [],page:resPage} = await this.$httpApi.getViewHistoryList({
					...this.pageInfo
				})
				this.articleList.push(...res),
				this.resPage = resPage;
				if(resPage.totalNum <= 6){
					this.loadingStatus = "nomore"
				}
				
			},
			//  滚动到底部
			scrollBottomLoadMore() {
				this.pageInfo.curPage++;
				if (this.pageInfo.curPage <= this.resPage.totalPage) {
					//  当还有总页数大于当前页数说明还有数据 可以再请发送请求数据 信息接口
					this.getViewHistoryList()
				} else {
					// this.pageInfo.curPage =  this.resPage.curPage
					this.loadingStatus = "nomore"
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		display: flex;
		flex-direction: column;
		height: 100%;
		.main {
			flex: 1;
			overflow: hidden;
			.scroll-Y {
				height: 100%;
				
			}

		}
	}

	.new-list {
		position: relative;
	}
</style>
