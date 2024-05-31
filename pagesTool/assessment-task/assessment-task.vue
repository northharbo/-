<template>
	<view class="content">
		<nav-bg title="考核任务"></nav-bg>
		<top-nav :showIcon="true" :list="tabList" :tabIndex="tabIndex" @click="getTabIndex"></top-nav>
		<view class="main">
			<swiper class="swiper" @change="swiperChange" :current="tabIndex" :duration="500">
				<swiper-item class="send-swiper">
					<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="taskScrolltolowerBottom">
						<task-card :list-item="task" v-for="(task ,i ) in taskList " :key="task.id"
							@click="navToTaskDetail(task)"></task-card>
						<u-loadmore :status="taskLoaingStaus" icon-type="flower" />

					</scroll-view>
				</swiper-item>
				<swiper-item class="send-swiper">
					<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="taskAnswerScrolltolowerBottom">

						<taskedCard :data="tasked" v-for="(tasked ,i ) in taskAnswerList " :key="tasked.id"
							@tap="navToTaskDetail(tasked)"></taskedCard>
						<u-loadmore :status="taskeAnswerloaingStaus" icon-type="flower" />

					</scroll-view>
				</swiper-item>

			</swiper>
		</view>
		<safe-footer></safe-footer>
	</view>
</template>

<script>
	// import {mapState} from 'vuex'
	import taskCard from '../components/task-card/task-card.vue'
	import taskedCard from '../components/tasked-card/tasked-card.vue'
	export default {
		components: {
			taskCard,
			taskedCard
		},
		computed: {
			// ...mapState(['loginStatus'])
		},
		data() {

			return {
				tabIndex: 0,
				sendList: {

				},
				curierlist: [],
				taskList: [],
				articleList: [],
				taskLoaingStaus: "loading", 
				taskAnswerLoaingStaus: "loading", 
				// 上拉记载状态
				// tablist 数据
				tabList: [{
						id: '0',
						name: '考核任务',
						count: 20,
						icon: "icon-renwu2",
						color: "#f55dff"
					}, {
						id: '1',
						name: '考核答案',
						count: 20,
						icon: "icon-tijiaowancheng",
						color: "#55a7ff"
					}

				],
				//  请求分页信息
				taskPageInfo:{
					curPage:1,
					pageSize:7,
				},
				//  后端返回分页信息
				taskResPage:{	},
				//  请求分页信息
				taskAnswerPageInfo:{
					curPage:1,
					pageSize:10,
				},
				//  后端返回分页信息
				taskAnswerResPage:{},
				taskAnswerList: []

			};
		},
		onLoad(e) {
			console.log(11)
			this.getTaskList()
			this.getAssessmentAnswer()
		},
		watch: {
			tabIndex(newValue) {

			}
		},
		methods: {
			//  初始化
			initStatus() {

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

			// 考核任务滚动到底部
			taskScrolltolowerBottom() {
				if(this.taskPageInfo.curPage <this.taskResPage.totalPage ){
					this.taskPageInfo.curPage ++;
					this.getTaskList()
				}else{
					this.taskLoaingStaus = "nomore"
				}
			},
			taskAnswerScrolltolowerBottom() {
				if(this.taskAnswerPageInfo.curPage <this.taskAnswerResPage.totalPage ){
					this.taskAnswerPageInfo.curPage ++;
					this.getTaskList()
				}else{
					this.taskAnswerLoaingStaus = "nomore"
				}
			},

			//  获取tabIndex
			getTabIndex(tabData) {

				this.tabIndex = tabData.index


			},
			//  滑块切换
			swiperChange({
				detail
			}) {

				this.tabIndex = detail.current
			},

			// 上拉加载
			UpdateSeltSchoolData(type) {
				this.indexPageInfo.current++;

			},

			// 点击进入考核任务详情
			navToTaskDetail(e) {
				// ?detail=${JSON.stringify(e)}
				this.$u.route({
					url: 'pages/task-detail/task-detail',
					params: {
						...e,
						content:""
					}
				})
			},
			//  获取考核任务列表
			async getTaskList() {

				try{
					const {
						data: res = [],
						page:resPage
					} = await this.$httpApi.getTaskList({
						...this.taskPageInfo
					})
					this.taskList.push(... res);
			
					if (resPage.curPage == resPage.totalPage) {
						this.taskLoaingStaus= "nomore"
					}
					this.taskResPage = resPage;
				}catch(e){
					
				}
			},
			// 获取考核答案
			async getAssessmentAnswer() {
				try{
					const {
						data: res = [],
						page:resPage
					} = await this.$httpApi.getAssessmentAnswer({
						...this.taskAnswerPageInfo
					})
					this.taskAnswerList.push(...res)
					if (resPage.curPage == resPage.totalPage) {
						this.taskAnswerLoaingStaus= "nomore"
					}
				}catch(e){
					
				}
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
