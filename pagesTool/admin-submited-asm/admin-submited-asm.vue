<template>
	<view class="content">
		<nav-bg :title="assessmentInfo.title +'提交详情'"></nav-bg>
		<!-- <download-file :download-url="urlList"></download-file> -->
		<view class="header">
			<view class="submit-count">
				<text>提交人数：</text>
				<text>{{assessmentInfo.postNum}}</text>
			</view>
			<view class="">
				<text>已批阅：</text>
				<text>{{assessmentInfo.markNum}}</text>
			</view>
		</view>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y" @scrolltolower="scrollBottom">
				<view class="scroll-main">
					
					<view class="card-item" v-for="asmWork in asmWorkList" :key="asmWork.id" @click="navComment(asmWork)">
						<view class="card-lf">
							<view class="info-item">
								<text class="label">
									姓名：
								</text>
								<text class="name">
									{{asmWork.name}}
								</text>
							</view>
							<view class="info-item">
								<text class="label">
									班级：
								</text>
								<text class="name">
									{{asmWork.clazz}}
								</text>
							</view>
							<view class="info-item">
								<text class="label">
									方向：
								</text>
								<text class="name">
									{{asmWork.major || "无"}}
								</text>
							</view>
							<view class="info-item">
								<text class="label">
									提交时间：
								</text>
								<text class="name">
									{{asmWork.createTime}}
								</text>
							</view>
							<view class="info-item" v-if="asmWork.markTime">
								<text class="label">
									批阅时间：
								</text>
								<text class="name">
									{{asmWork.markTime || ""}}
								</text>
							</view>
						</view>
						<view class="card-rg" >
							<view class="score" v-if="asmWork.status">
								<text class="des-count">{{asmWork.score}} <text>分</text></text>
								
							</view>
							<view class="status" v-else>
								未批阅
							</view>
							
						</view>
					</view>
					<u-loadmore :status="status" icon-type="flower" />
					<safe-footer></safe-footer>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		computed:{
		...mapState(['admin'])	
		},
		data() {
			return {
				asmWorkList:[
				],
				assessmentInfo:{
					id:null
				},
				pageInfo:{
					curPage:1,
					pageSize:10,
				},
				status:"loading",
				//  后端返回分页信息
				resPage:{
					curPage:0,
					pageSize:0,
					totalNum:0,
					totalPage:0,
				},
				
			};
		},
		onLoad(e) {
			console.log(e)
			this.assessmentInfo = e;
			this.getSubmitedTaskList()
		},
		methods:{
			async getSubmitedTaskList(){
				this.loadingStatus = "loading"
				const {data:res,page:resPage} = await this.$httpApi.getAdminAsmWrokStuList({
					page:{
						...this.pageInfo
					},
					body:{
						assessmentId:this.assessmentInfo.id
					}
				})
				
				this.asmWorkList.push(...res);
				this.resPage = resPage
				// 当总条数小于3是修改加载动画为，没有更多
				if(resPage.totalNum <= 5 ){
					this.status = "nomore"
				}

			},
			navComment(tasked){
				console.log(tasked)
				if(!tasked.status){
					return uni.showToast({
						title:"当前考核未批阅，请稍等哦！",
						icon:"none"
					})
				}
				this.$u.route({
					url: '/pagesTool/tasked-detail/tasked-detail',
					params: tasked
				})
			},
			//  滚动到底部
			scrollBottom(){
				if(this.resPage.curPage <=this.resPage.totalPage ){
					this.pageInfo.curPage ++;
					this.getSubmitedTaskList()
				}else{
					this.status = "nomore"
			}
		}
		}
	}
</script>
 
<style lang="scss" scoped>
	.content{
		// padding:0 20rpx;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		.main{
			flex:1;
			overflow: hidden;
			padding: 0;
		}
	}
	.header{
		display: flex;
		padding: 10rpx 10rpx;
		flex-direction: row;
		justify-content: space-around;
		background: #fff;
	}
	//  考核任务卡
	.card-item{
		display: flex;
		flex-direction: row;
		background: #fff;
		margin: 10rpx 10rpx;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
		padding: 20rpx;
		.card-lf{
			.info-item{
				padding: 10rpx 0;
				.label{
					margin-right: 10rpx;
				}
			}
		}
		.card-rg{
			display: flex;
			flex: 1;
			justify-content: flex-end;
			align-items: center;
			.score{
				color: #2dd010;
				line-height: 1.5;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
					.des-count{
						display: inline-block;
						margin-right: 10rpx;
						font-size: 42rpx;
					}
			}
			.status{
				padding: 10rpx 20rpx;
				background: #c35559;
				color: #FFFFFF;
				font-size:24rpx ;
			}
		}
	}
</style>
