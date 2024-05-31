<template>
	<view class="content">
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="scrollBottom"
			refresher-enabled="true" :refresher-triggered="triggered"
			:refresher-threshold="100" 
			@refresherrefresh="onRefresh" @refresherrestore="onRestore" @refresherabort="onAbort"

			>
				<view class="scroll-main">
					<image class="hd-bg" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/435aeb51-2825-4eac-9174-9c4f2a575da5.jpg" mode="widthFix"></image>
					<view class="header">
						
						<view class="title">
							<bg-title title="项目展示" type="blue" :isBottomBorder="false" ></bg-title>
						</view>
						<vear-carousel :imgList="bannerList" urlKey="picUrl" @click="clickBanner"></vear-carousel>
					</view>
					<view class="options">
						<minicry-btn :iconList="IconList" @click="clickMinicry"></minicry-btn>
					</view>
					<view class="program-list">
						<program-card :index="index" :data="item" v-for="(item,index) in videoList" :key="index" @click="cilckProgram"></program-card>
					</view>
					<u-loadmore :status="status" icon-type="flower" />
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import videoList from '@/data/videoList'
	export default {
		data() {
			return {
				videoList: [],
				status: 'loading',
				pageInfo:{
					curPage:1,
					pageSize:5,
				},
				resPage:{},
				bannerList: [
				],
				IconList: [],
				//  下拉刷新状态
				 triggered: false
				
			};
		},
		onLoad(){
			this.getInfoInit()
			this.getProgramCarousel()
		    this._freshing = false;
		},
		methods:{
			clickBanner(e){
				uni.navigateTo({
					url: `/pagesProgram/video-detail/video-detail?params=${JSON.stringify({...e,id:e.foreignId})}`
				})
			},
			async getProgramCarousel(){
				const {data:res} = await this.$httpApi.getProgramCarousel()
				this.bannerList = res
				
			},
			// 点击分类数据
			clickMinicry(data){
				uni.navigateTo({
					url:`/pagesProgram/program-classify/program-classify?params=${JSON.stringify(data)}`
				})
			},
			
			//  跳转至详情数据
			cilckProgram(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pagesProgram/video-detail/video-detail?params=${JSON.stringify(item)}`
				})
			},
			
			//  初始化数据
			getInfoInit(){
				this.getProgramList()
				this.getWorksClass()
			},
			// 滚动到底部
			scrollBottom(){
				this.pageInfo.curPage++;
				if(this.pageInfo.curPage > this.resPage.totalPage){
					this.status = "nomore"
				}else{
					this.getProgramList()
				}
			},
			//获取项目列表
			async getProgramList(){
				try{
					const {data:res = [],page:resPage} = await this.$httpApi.getWorksPageList({
						...this.pageInfo
					})
					this.videoList.push(...res);
					if(resPage.curPage == resPage.totalPage || resPage.totalPage == 0){
						this.status = "nomore"
					}
					this.resPage = resPage;
					this.triggered = false;
					this._freshing = false;
				}catch(e){
					this.triggered = false;
					this._freshing = false;
					this.status = "nomore"
					//TODO handle the exception
				}
				
				
			},
			// 获取项目分类
			async getWorksClass(){
				const {data:res} = await this.$httpApi.getWorksClass()
				// console.log(res)
				this.IconList = res.map((item)=>({
					color:item.color,
					name:item.className,
					icon:item.icon,
					id:item.id
				}))
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
				this.videoList = []
				this.triggered = true;  // 开启刷新
				
				// 重新获取数据
				this.getProgramList()
				this.getProgramCarousel()
			
			},
			onRestore() {
				this.triggered = 'restore'; // 需要重置
				console.log("onRestore");
			},
			onAbort() {
				console.log("onAbort");
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content{
		position: relative;
		display: flex;
		
	}
	.header{
		width: 100%;
		 padding-top: 100rpx;
		.title{
			margin-bottom: 80rpx;
		}
	}
	.content{
		background: #FFFFFF;
		// background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/435aeb51-2825-4eac-9174-9c4f2a575da5.jpg);
		// background-repeat: no-repeat;
		// background-size: 100% auto;
		.hd-bg{
			width: 100%;
			position: absolute;
			top: 0;
		}
	}
	
	.hedaer-img{
		width: 100%;
	}
	
	.options{
		width: 100%;
		padding-top: 140rpx;
	}
	.program-list{
		margin: 20rpx ;
		
	}
	
	
</style>