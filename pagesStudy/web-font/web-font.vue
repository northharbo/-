<template>
	<view class="content">
		<nav-bg title="前端"></nav-bg>
		<top-nav :showIcon="true" :list="tabList" :tabIndex="tabIndex" @click="getTabIndex"></top-nav>
		<view class="main">
			<swiper class="swiper"  @change="swiperChange" :current="tabIndex" :duration="500">
				<swiper-item class="send-swiper" >
					<scroll-view scroll-y="true" class="scroll-Y">
						<!-- <list-card :listItem="learn" v-for="(learn ,i ) in learnList " :key="learn.id" @tap="bindArticle(learn)"></list-card> -->
					<news-card class="study-item" :data="item" v-for="(item,index) in articleList" :key='index' @click="navToArticleDetail(item)"> </news-card>
					
					</scroll-view>
				</swiper-item>
			<swiper-item class="send-swiper" >
				<scroll-view scroll-y="true" class="scroll-Y">
					<list-card :listItem="article" v-for="(article ,i ) in articleList " :key="article.id" @tap="bindArticle(article)"></list-card>
					
					<!-- <list-card :listItem="articleList"></list-card> -->
				</scroll-view>
			</swiper-item>
			<swiper-item class="send-swiper" >
				<scroll-view scroll-y="true" class="scroll-Y">
					<list-card :listItem="interview" v-for="(interview ,i ) in interviewList " :key="interview.id" @tap="bindArticle(article)"></list-card>
					
					<!-- <list-card :listItem="interviewList"></list-card> -->
				</scroll-view>
			</swiper-item>
			</swiper>
		</view>
		<safe-footer></safe-footer>
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
				sendList:{
					 
				},
				classPid:0,
				curierlist:[],
				learnList:[
					{
						id:1,
						title:"前端学习路线",
						url:['https://server.zzidc.com/uploads/allimg/170908/1-1FZQF4231c.jpg'],
						content:"第一阶段首先肯定是基础的html+css+js三剑客了，这是最基本的知识，所以基础阶段一定要打好,这个阶段的学习时间段一般是2个月以内。",
						count:23,
						time:"2019-3-15",
						author:"晴栀Sunset",
						article:"",
						tag:"算法"
					}
				],
				
				articleList:[
					{
						id:0,
						title:"前端学习路线",
						url:['https://server.zzidc.com/uploads/allimg/170908/1-1FZQF4231c.jpg'],
						content:"第一阶段首先肯定是基础的html+css+js三剑客了，这是最基本的知识，所以基础阶段一定要打好,这个阶段的学习时间段一般是2个月以内。",
						count:23,
						time:"2019-3-15",
						author:"晴栀Sunset",
						tags:["前端","算法","学习路线"]
					},
					{
						id:1,
						title:"2021腾讯CSIG第一次面试",
						url:['https://www.tuimzi.com/pic/2019/05/09/smjpu51i1sl.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-16",
						author:"晴栀Sunset",
						article:"",
						tags:["后端","算法","学习路线"]
						
					},
					{
						id:2,
						title:"游戏学习路线",
						url:['http://img1.juimg.com/180706/330685-1PF600244212.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-16",
						author:"晴栀Sunset",
						article:"",
						tags:["游戏","算法","学习路线"]
						
					},
					{
						id:3,
						title:"前端学习路线",
						url:['http://i3.yeyou.itc.cn/v3/hdzy.game/2015/01/19/011917303469710159.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-16",
						author:"晴栀Sunset",
						article:"",
						tags:["前端","算法","学习路线"]
						
					},
					{
						id:5,
						title:"如何应对考研",
						url:['https://www.tuimzi.com/pic/2019/05/09/smjpu51i1sl.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-16",
						author:"晴栀Sunset",
						article:"",
						tags:["考研"]
						
					}
				],
				
				interviewList:[
					{
						id:0,
						title:"前端学习路线",
						url:['https://server.zzidc.com/uploads/allimg/170908/1-1FZQF4231c.jpg'],
						content:"第一阶段首先肯定是基础的html+css+js三剑客了，这是最基本的知识，所以基础阶段一定要打好,这个阶段的学习时间段一般是2个月以内。",
						count:23,
						time:"2019-3-15",
						author:"晴栀Sunset",
						tags:["前端","算法","学习路线"]
					},
					{
						id:1,
						title:"2021腾讯CSIG第一次面试",
						url:['https://www.tuimzi.com/pic/2019/05/09/smjpu51i1sl.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-16",
						author:"晴栀Sunset",
						article:"",
						tags:["后端","算法","学习路线"]
						
					},
					{
						id:2,
						title:"游戏学习路线",
						url:['http://img1.juimg.com/180706/330685-1PF600244212.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-16",
						author:"晴栀Sunset",
						article:"",
						tags:["游戏","算法","学习路线"]
						
					},
					{
						id:3,
						title:"前端学习路线",
						url:['http://i3.yeyou.itc.cn/v3/hdzy.game/2015/01/19/011917303469710159.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-16",
						author:"晴栀Sunset",
						article:"",
						tags:["前端","算法","学习路线"]
						
					},
					{
						id:5,
						title:"如何应对考研",
						url:['https://www.tuimzi.com/pic/2019/05/09/smjpu51i1sl.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-16",
						author:"晴栀Sunset",
						article:"",
						tags:["考研"]
						
					}
				],
				
				// tablist 数据
				tabList: [
					{
						id: '0',
						name: '学习路线',
						count: 20,
						icon:"icon-icon_xianlu",
						color:"#f55dff"
					},{
						id: '1',
						name: '文章',
						count: 20,
						icon:"icon-qianduankaifa",
						color:"#55a7ff"
					},{
						id: '2',
						name: '面经',
						count: 20,
						icon:"icon-jingyan",
						color:"#ff628c"
					},
				
				],
				
			};
		},
		onLoad(e) {
			console.log(e)
			const params = JSON.parse(e.params || "{}")
			this.classPid = params.id;
			
			this.getClassList()
		},
		watch:{
			tabIndex(newValue){
			}
		},
		methods: {
			 async getClassList(){
				 const {data:res} = await this.$httpApi.getStudyClassifyList({
					 pid:this.classPid
				 })
				 console.log(res)
				 
			 },
			 
			 
			 //  初始化
			initStatus(){
				
			},
			
			
			onPulling(e) {
				// console.log("onpulling", e);
			},
			//  下来刷新
			onRefresh(id) {
				
				
			
			},
			//  滚动复位
			onRestore(id) {
				
			},
			onAbort() {
				console.log("onAbort");
			},
			
			// 滚动到底部
			scrolltolowerBottom(index) {
				
			},
				
			//  获取tabIndex
			getTabIndex(tabData){
		
				this.tabIndex = tabData.index
				
				
			},
			//  滑块切换
			swiperChange({detail}){
				console.log(detail)
				this.tabIndex = detail.current
			},
			
			// 上拉加载
			UpdateSeltSchoolData(type) {
				this.indexPageInfo.current++;

			},
			bindArticle(e){
				uni.navigateTo({
					url:`/pages/article-detail/article-detail?article=${JSON.stringify(e)}`
				})
			}
			
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
			.swiper{
				height: 100%;
				.send-swiper{
					width: 100%;
					height: 100%;
					// background: rgba($color: #b4c850, $alpha: 0.4);
				}
			}
		}
	}
	.scroll-Y{
		height: 100%;
	}
</style>
