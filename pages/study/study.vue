<template>
	<view class="content">
		<nav-bg title="学习" :isBack="false"></nav-bg>
		<view class="main">
			<scroll-view scroll-y="true"  class="scroll-Y" @scrolltolower="scrollBottomLoadMore"
			
			refresher-enabled="true" :refresher-triggered="triggered"
			            :refresher-threshold="100"  
			            @refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort"
			>
				<view class="scroll-main">
					<view class="banner-list">
						<u-swiper border-radius="0" height="400" :list="bannerList"  :border-radius="10" effect3d effect3d-previous-margin="20" @click="clickBanner"></u-swiper>
					</view>
					<view class="study-list">
						<news-card class="study-item" :data="item" v-for="(item,index) in articleList" :key='index' > </news-card>
					</view>
					<u-loadmore :status="status" icon-type="flower" />
					
					<safe-footer></safe-footer>
				</view>
			</scroll-view>
		</view>
		<view class="btn">
				<view class="nav-list" v-if="showNav" >
					<view class="nav-item" v-for="(item,index) in tabList" :key="index" @click="navChange(item)">
						<image  class="nav-icon-img" :src="item.icon" mode=""></image>
						<text>{{item.name}}</text>
					</view>
				</view>
			<text class="iconfont icon-caidan2 nav-icon"  @click="clickClassityBtn"></text>
		</view>
	</view>
</template>

<script>
	// import {mapState} from 'vuex'
	export default {
		components:{
			// sendCard
		},
		computed:{
			// ...mapState(['loginStatus'])
		},
		data() {
			
			return {
				tabIndex:0,
				showNav:false,
				sendList:{
					 
				},
				status: 'loading',
				animationData:{},
				tabList:[
				],
				bannerList:[
					{
						id:1,
						name:"竞赛答题",
						url:"/pagesPk/index/index",
						image: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/79825a1f-b511-48b9-b553-bb721cf6cca7.png',
						// title: '身无彩凤双飞翼，心有灵犀一点通'
					}
				],
				
				articleList:[],
				//  请求分页信息
				pageInfo:{
					curPage:1,
					pageSize:5,
				},
				//  后端返回分页信息
				resPage:{
					curPage:0,
					pageSize:0,
					totalNum:0,
					totalPage:0,
				},
				//  下拉刷新状态
				 triggered: false
				
				
			};
		},
		
		watch:{
			tabIndex(newValue){
			}
		},
		onLoad(e) {
			this.getStudyClassifyList(),
			this._freshing = false;
			
		},
		onShow() {
			this.getArticleList()
		},
		methods: {
			
			//  获取数据
			async getArticleList(){
				// uni.showLoading({icon:"none"})
				const {data:res,page:resPage} = await this.$httpApi.getStudyIndexList({
					...this.pageInfo
				})
				
				this.articleList.push(...res);
				this.resPage = resPage
				// 当总条数小于3是修改加载动画为，没有更多
				if(resPage.totalNum <= 3 ){
					this.status = "nomore"
				}
				this.triggered = false;
				this._freshing = false;
				
				// uni.hideLoading()
			},
			
			//  获取分类数据
			async getStudyClassifyList(){
				const { data:res} = await this.$httpApi.getStudyClassifyList({
					pid:0
				})
				this.tabList = res.map((item)=>({
					color:item.color,
					name:item.className,
					icon:item.image,
					id:item.id,
					url:item.url
				}))
				// console.log(res)
			},
			//  滚动到底部
			scrollBottomLoadMore(){
				this.pageInfo.curPage ++;
				if( this.pageInfo.curPage <= this.resPage.totalPage ) {
					//  当还有总页数大于当前页数说明还有数据 可以再请发送请求数据 信息接口
					this.getArticleList()
				}else{
					// this.pageInfo.curPage =  this.resPage.curPage
					this.status = "nomore"
				}
			},
			//  点击导航栏，改变分类
			navChange(data){
				this.showNav = false
				uni.navigateTo({
					url:`/pagesStudy/study-classify/study-classify?params=${JSON.stringify(data)}`
				})
			},
		
			clickClassityBtn(){
			
				this.showNav = !this.showNav;
			},
			//  点击轮播图
			clickBanner(index){
				uni.showToast({
					title:"该功能暂未开放！",
					icon:"none"
				})
				// uni.navigateTo({
				// 	url:this.bannerList[index].url
				// })
			},
			// 刷新状态开始
			onPulling(e) {
				console.log("onpulling", e);
			},
			//  触发下拉
			onRefresh() {
				if (this._freshing) return;
				this._freshing = true;
				//  重置分页信息
				this.pageInfo = {
					curPage:1,
					pageSize:5,
				}
				this.status = "loading"
				// 重置文章信息
				this.articleList = []
				this.triggered = true;  // 开启刷新
				
				// 重新获取数据
				this.getArticleList()
				
				
				// console.log(console.log(1))
				
				
				// setTimeout(() => {
				// 	this.triggered = false;
				// 	this._freshing = false;
				// }, 3000)
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			}
			// 刷新状态结束
			
		}
	}
</script>

<style lang="scss">
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: rgba($color: #f5f5f5, $alpha: 1.0);
		
		.main {
			flex: 1;
			// background: #007AFF;
			overflow: hidden;
		}
	}
	.scroll-Y{
		height: 100%;
	}
	
	.banner-list{
		padding: 10rpx ;
	}
	
	
	.btn{
		position: fixed;
		right: 50rpx;
		bottom: 50rpx;
		display: flex;
		flex-direction: column;
		border-radius: 30rpx;
		padding: 0 20rpx;
		background: rgba($color: #dee1ff, $alpha: 0.6);
		min-height: 80rpx;
		min-width: 80rpx;
		justify-content: center;
		align-items: center;
		.nav-item{
			padding: 20rpx 0;
			display: flex;
			flex-direction: column;
			.nav-icon-img{
				width: 64rpx;
				height: 64rpx;
			}
		}
		.nav-item-icon{
			font-size: 56rpx;
		}
		.nav-icon{
			font-size: 56rpx;
			color: #007AFF;
		}
	}
	.nav-list{
		
		// width: 50rpx;
		
	}
</style>
