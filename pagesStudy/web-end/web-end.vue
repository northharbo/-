<template>
	<view class="content">
		<nav-bg title="后端"></nav-bg>
		<top-nav :showIcon="true" :list="tabList" :tabIndex="tabIndex" @click="getTabIndex"></top-nav>
		<view class="main">
			<swiper class="swiper"  @change="swiperChange" :current="tabIndex" :duration="500">
				<swiper-item class="send-swiper" >
					<scroll-view scroll-y="true" class="scroll-Y">
						<news-card class="study-item" :data="item" v-for="(item,index) in articleList" :key='index' @click="navToArticleDetail(item)"> </news-card>
					</scroll-view>
				</swiper-item>
			<swiper-item class="send-swiper" >
				<scroll-view scroll-y="true" class="scroll-Y">
					<news-card class="study-item" :data="item" v-for="(item,index) in articleList" :key='index' @click="navToArticleDetail(item)"> </news-card>
					</scroll-view>
			</swiper-item>
			<swiper-item class="send-swiper" >
				<scroll-view scroll-y="true" class="scroll-Y">
					<news-card class="study-item" :data="item" v-for="(item,index) in articleList" :key='index' @click="navToArticleDetail(item)"> </news-card>
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
				curierlist:[],
				learnList:[
					{
						id:2,
						title:"后端学习路线",
						url:['https://mdabrowski.net/wp-content/uploads/2018/09/java11.png'],
						content:"有不少初学者问到，我想学习后端，但是又不知道该怎么学，所以我决定把这几年的经验和经历整理成一篇文章，分析后端的路该怎么走，先说明下面仅仅是个人心得，也许与外面的理论有所不同。（文章最后面会附上学习路线地图和一些自己看过的书籍）",
						count:23,
						time:"2019-3-15",
						author:"晴栀Sunset",
						article:"",
					}
				],
				articleList:[
					{
						id:2,
						title:"后端学习路线",
						url:['https://mdabrowski.net/wp-content/uploads/2018/09/java11.png'],
						content:"有不少初学者问到，我想学习后端，但是又不知道该怎么学，所以我决定把这几年的经验和经历整理成一篇文章，分析后端的路该怎么走，先说明下面仅仅是个人心得，也许与外面的理论有所不同。（文章最后面会附上学习路线地图和一些自己看过的书籍）",
						count:23,
						time:"2019-3-15",
						author:"晴栀Sunset",
						article:"",
					},
					{
						id:0,
						title:"2021腾讯CSIG第一次面试",
						url:['https://tech.sina.com.cn//n.sinaimg.cn/spider2020910/110/w580h330/20200910/06c6-iyywcsz1886050.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-16",
						author:"晴栀Sunset",
						article:""
					}
				],
				interviewList:[
					{
						id:0,
						title:"2021腾讯CSIG第一次面试",
						url:['https://tech.sina.com.cn//n.sinaimg.cn/spider2020910/110/w580h330/20200910/06c6-iyywcsz1886050.jpg'],
						content:" 1、首先就是自我介绍 2、 校园经历 3、假如我是一个新生，我该这么学习",
						count:23,
						time:"2019-3-15",
						author:"杨金福"
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
						icon:"icon-xuexi5",
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
			

		},
		watch:{
			tabIndex(newValue){
			}
		},
		methods: {
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
					url:`/page/article-detail/article-detail?article=${JSON.stringify(e)}`
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
