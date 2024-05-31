<template>
	<view class="content">
		<nav-bg :title="title"></nav-bg>
		<top-nav :showIcon="true" :list="tabList" :tabIndex="tabIndex" @click="getTabIndex"></top-nav>
		<view class="main">
			<swiper class="swiper" @change="swiperChange" :current="tabIndex" :duration="500">
				<swiper-item class="send-swiper" v-for="(tab) in tabList" :key="tab.id">
					<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="scrolltoBottomEvent(tab.id)" >
						<news-card class="study-item" :data="article" v-for="(article,index) in articleList[tab.id]" :key='article.id' @click="navToArticleDetail(article)"> </news-card>
						<u-loadmore :status="loaingStaus[tab.id]" icon-type="flower" />
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
		components: {
			// sendCard
		},
		computed: {
			// ...mapState(['loginStatus'])
		},
		data() {

			return {
				tabIndex: 0,  // 当前tab 的index
				currentTabId:0,  // 当前tab ID
				classPid: 0,  // 该分类父id
				loaingStaus:{
				
				},  // 上拉记载状态
				
				articleList: {},   // 文章列表信息
				title:"", // 文章标题
				// tablist 数据
				tabList: [
					// {
					// 	id: '0',
					// 	name: '学习路线',
					// 	count: 20,
					// 	icon: "icon-icon_xianlu",
					// 	color: "#f55dff"
					// }, {
					// 	id: '1',
					// 	name: '文章',
					// 	count: 20,
					// 	icon: "icon-qianduankaifa",
					// 	color: "#55a7ff"
					// }, {
					// 	id: '2',
					// 	name: '面经',
					// 	count: 20,
					// 	icon: "icon-jingyan",
					// 	color: "#ff628c"
					// },

				],
				//  页面分页信息
				pageInfo:{
					// curPage:1,
					// pageSize:10,
				},
				//  后端返回分页信息
				resPage:{
					// curPage:0,
					// pageSize:0,
					// totalNum:0,
					// totalPage:0,
				},

			};
		},
		async onLoad(e) {
			
			const params = JSON.parse(e.params || "{}")
			console.log(params)
			this.classPid = params.id;
			this.title = params.className
			uni.showLoading()
			await this.getClassList() // 获取文章分类
			this.initStatus()   // 初始化状态信息
 			uni.hideLoading()
			
		},
		watch: {
			tabIndex(newValue) {}
		},
		methods: {
			
			//  初始化
			initStatus() {
				this.initPageInfo()
				console.log(this.tabList[0]?.id)
				const initId = this.tabList[0].id
				this.currentTabId = initId
				this.getClassifyArticle(initId)
			},
			//  初始化分页信息
			initPageInfo(){
				for(let i =0; i < this.tabList.length ; i++){
					this.pageInfo[this.tabList[i].id] = {
						curPage:1,
						pageSize:5,
					}
					this.loaingStaus[this.tabList[i].id] = "loading"
					
				}
			},
			//  获取头部分类数据
			 getClassList() {
				return new Promise(async (resolve)=>{
					
					const {
						data: res
					} = await this.$httpApi.getStudyClassifyList({
						pid: this.classPid
					})
					
					this.tabList = res.map(classify =>{
						return {
							...classify,
							name:classify.className
						}
					});
					resolve()
					
				})
			},
			
			//  获取分类文章数据
			async getClassifyArticle(classId){
				const {data:res,page:resPage} = await this.$httpApi.getClassifyArticleList({
					...this.pageInfo[classId],
					classId,
				})
				//  是否初次数据
				if(!this.articleList[classId]){
					this.articleList[classId] = res;
					
				}else{
					this.articleList[classId].push(...res)
				}
				this.$forceUpdate()  //强制更新视图
				if(resPage.curPage >= resPage.totalPage ){
					this.loaingStaus[classId] = "nomore"
				}
				// console.log(this.articleList)
				this.pageInfo[classId] = resPage;
				this.resPage[classId] = resPage;
				
			},
			//  滚动到底部
			scrolltoBottomEvent(classId){
				//  
				console.log(classId)
				this.pageInfo[classId].curPage++;
				if(this.pageInfo[classId].curPage > this.resPage[classId].totalPage){
					return this.loaingStaus[classId] = "nomore"
				}
				return this.getClassifyArticle(classId)
				
				
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
			getTabIndex(tabData) {

				this.tabIndex = tabData.index


			},
			//  滑块切换
			swiperChange({
				detail
			}) {
				console.log(detail)
				this.tabIndex = detail.current
				this.currentTabId = this.tabList[this.tabIndex].id
				console.log(this.tabList[this.tabIndex])
				if(!this.articleList[this.currentTabId]){
					this.getClassifyArticle(this.currentTabId)
				}
			
			},

			// 上拉加载
			UpdateSeltSchoolData(type) {
				this.indexPageInfo.current++;

			},
			bindArticle(e) {
				uni.navigateTo({
					url: `/pages/article-detail/article-detail?article=${JSON.stringify(e)}`
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
			.swiper {
				height: 100%;

				.send-swiper {
					width: 100%;
					height: 100%;
					// background: rgba($color: #b4c850, $alpha: 0.4);
				}
			}
		}
	}

	.scroll-Y {
		height: 100%;
	}
</style>
