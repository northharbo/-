<template>
	<view class="content">
		<nav-bg title="指导老师"></nav-bg>
		<view class="main">
			<teacher-card v-for="info in infoList" :data="info" :key="info.id"></teacher-card>
		</view>
	</view>
</template>

<script>
	import teacherCard from '../components/teacher-card/teacher-card'
	export default {
		components:{
			teacherCard
		},
		data() {
			return {
				infoList:[]
			}
		},
		onLoad() {
			this.getTeacher()
		},
		methods: {
			async getTeacher(){
				uni.showLoading()
				const {data:res} = await this.$httpApi.getMemberTeacher()
				this.infoList = res
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss">
	.content{
		background: rgba($color: #f3f3f3, $alpha: 1.0);
	}
.user-info{
	margin: 20rpx 20rpx;
	background: rgba($color: #cdfbff, $alpha: 0.2);
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
