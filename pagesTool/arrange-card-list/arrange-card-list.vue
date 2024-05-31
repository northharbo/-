<template>
	<view class="content">
		<nav-bg title="面试"></nav-bg>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<view class="interView-card" v-for="(interView,index) in interViewList"  :key="index">
						<view class="title">
							<view class="cu-bar bg-white">
								<view class="action">
									<text class="cuIcon-titles text-blue"></text>
									<text class="text-xl  text-blue">{{interView.title}}</text>
								</view>
							</view>
							
						</view>
						<view class="des">
							<view class="address des-item">
								<text class="iconfont icon-didian2"></text>
								<text>地点：{{interView.interviewLocation || "暂定"}}</text>
							</view>
							
						</view>
						<view class="card-btm" @click="navToInterView(interView)">
							<view class="interView-btn" >
								<text class="iconfont icon-icon-83"></text>
								查看
							</view>
						</view>
						<view class="create-time">
							<text>创建时间: </text>
							<text>{{interView.createTime}}</text>
						</view>
					</view>
					<view style="display: flex; justify-content: center; align-items: center; height: 100%; width: 100%;"  v-if="!interViewList.length">
						<u-empty text="当前未安排面试" mode="list"></u-empty>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				interViewList:[
				]
			};
		},
		onLoad() {
			this.getApplyList()
		},
		methods:{
			
			async getApplyList(){
				const {data:res} = await this.$httpApi.getApplySignList({
					type:2
				});
				this.interViewList = res
			},
			navToInterView(data){
				uni.navigateTo({
					url:`../arrange-list/arrange-list?data=${JSON.stringify(data)}`
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.content{
	// background: #FFFFFF;
	height: 100%;
	display: flex;
	flex-direction: column;
	.main{
		flex: 1;
		overflow: hidden;
		.scroll-Y{
			height: 100%;
			.scroll-main{
				height: 100%;
			}
		}
	}
}


.interView-card{
		display: flex;
		flex-direction: column;
		padding: 20rpx 5rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin: 20rpx ;
		.title{
			display: flex;
			margin: 0 20rpx;
			justify-content: space-between;
			border-bottom: 1rpx solid #e2e2e2;
			align-items: center;
			
		}
		.des{
			padding: 40rpx;
			.address{
				padding: 10rpx 0;
				display: flex;
				align-items: center;
				.iconfont{
					font-size: 32rpx;
					color: #d14500;
					font-size: 28rpx;
					margin-right: 10rpx;
				}
			}
			
		}
		.card-btm{
			display: flex;
			justify-content: center;
			align-items: center;
			.interView-btn{
				background: rgba($color: #3cbbff, $alpha: 1.0);
				color: #FFFFFF;
				padding: 10rpx 60rpx;
				border-radius: 10rpx;
				letter-spacing: .3rem;
			}
			.interView-btn-disabled{
				background: rgba($color: #b7e3ff, $alpha: 1.0);
			}
		}
		.create-time{
			border-top: 1rpx solid #eee;
			margin:  20rpx;
			padding: 20rpx 0;
			color: #ccc;
			font-size: 24rpx;
		}
	}
</style>
