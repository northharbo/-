<template>
	<view class="content">
		<nav-bg :title="title"></nav-bg>
		
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="scrollBottom">
					<view>
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
				title:"",
				pageInfo:{
					curPage:1,
					pageSize:5,
				},
				resPage:{},
				list: [{
					url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/f84f04a1-96fe-4078-9abe-94a8d4cba1d2.png"
				},
				{
					url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/b87fd5bb-326b-489d-8590-e234ab5a026c.jpg"
				},
				{
					url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/f84f04a1-96fe-4078-9abe-94a8d4cba1d2.png"
				},
				{
					url:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/f84f04a1-96fe-4078-9abe-94a8d4cba1d2.png"
				}
				],
				IconList: []
				
			};
		},
		onLoad(e){
			console.log(e)
			const params = JSON.parse(e.params)
			this.classId = params.id;
			this.title = params.name
			this.getInfoInit()
		},
		methods:{
			clickMinicry(data){
				uni.navigateTo({
					url:'/pagesProgram/weixin-program/weixin-program'
				})
			},
			cilckProgram(item) {
				console.log(item)
				uni.navigateTo({
					url: `/pagesProgram/video-detail/video-detail?params=${JSON.stringify(item)}`
				})
			},
			
			getInfoInit(){
				this.getProgramList()
				this.getWorksClass()
			},
			// 滚动到底部
			scrollBottom(){
				this.pageInfo.curPage++;
				if(this.pageInfo.curPage >= this.resPage.totalPage){
					this.status = "nomore"
				}else{
					this.getProgramList()
				}
			},
			//获取项目列表
			async getProgramList(){
				const {data:res,page:resPage} = await this.$httpApi.getWorksPageList({
					...this.pageInfo,
					classId:this.classId
				})
				this.videoList.push(...res);
				this.resPage = resPage;
				console.log(resPage)
				if(resPage.curPage <= resPage.totalPage || resPage.totalPage == 0){
					this.status = "nomore"
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
		margin-top: 160rpx;
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
		margin-top: 60rpx;
	}
	.program-list{
		margin: 20rpx ;
		
	}
	
	
</style>