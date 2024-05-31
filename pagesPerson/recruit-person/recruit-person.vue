<template>
	<view class="content">
		<nav-bg title="招新负责人" ></nav-bg>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<stu-card :data="info" v-for="(info ) in userInfo" :key="info.id"></stu-card>
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
			this.getRecruitPerson()
		},
		methods:{
			async getRecruitPerson(){
				uni.showLoading()
				const {data:res} = await this.$httpApi.getRecruitPerson()
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
	flex-direction: column;
	.main{
		flex: 1;
		// height: 100%;
		overflow: hidden;
		.scroll-Y{
			height: 100%;
			// border: 1rpx solid red;
			
		}
	}
}

</style>

