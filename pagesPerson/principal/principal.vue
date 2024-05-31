<template>
	<view class="content">
		<nav-bg title="工作室负责人"></nav-bg>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<stu-card :data="info" v-for="(info,index) in userInfo" :key="info.id" ></stu-card>
					<white-space></white-space>
					<safe-footer></safe-footer>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import stuCard from '../components/stu-card/stu-card'
	export default {
		components:{
			stuCard
		},
		data() {
			return {
				userInfo:[
					
				],
			};
		},
		onLoad() {
			this.getPrincipalStudent()
		},
		methods:{
			async getPrincipalStudent(){
				uni.showLoading()
				const {data:res} = await this.$httpApi.getPrincipalStudent()
				console.log(res)
				this.userInfo = res
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		overflow: hidden;
		height: 100%;
		flex-direction: column;
		.main{
			flex: 1;
			overflow: hidden;
			.scroll-Y{
				height: 100%;
			}
		}
	}
.user-info{
	margin: 20rpx 20rpx;
	background: rgba($color: #45fff0, $alpha: 0.2);
	padding: 40rpx 20rpx;
	
	border-radius: 20rpx;
	
	//  头部样式
	.info-card{
		display: flex;
		align-items: center;
		flex-direction: row;
		
		.info-list{
			padding-left: 30rpx;
			.info-item{
				padding: 10rpx 0 ;
			}
		}
	}
	// 介绍
	.des{
		margin-left:60px ;
		background: rgba($color: #cfcfcf, $alpha: 0.2);
		padding: 20rpx 10rpx;
		border-radius: 20rpx;
	}
}

</style>
