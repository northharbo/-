<template>
	<view class="swrap">
		<nav-bg title="游戏开发"></nav-bg>
		
		<view class="program-list">
			<program-card :index="index" :data="item" v-for="(item,index) in programlist" :key="index" @click="cilckProgram"></program-card>
			
		</view>
		
		<white-space></white-space>
	</view>
</template>

<script>
	export default {
		components:{
			
		},
		data() {
			return {
				programlist: [
					{

						title: "来打我啊(Unity3D小游戏)",
						name: "艾星宇",
						time: "2017年",
						des:"主要使用技术unity3D",
						image: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/58d22609-5680-48c6-a8ac-c6e1c13341e4.jpg",
					},
					
				]
			};
		},
		methods:{
			//  点击瀑布流
			cilckProgram(item) {
				console.log(item)
				uni.navigateTo({
					url: `/program/video-detail/video-detail?params=${JSON.stringify(item)}`
				})
			},
		}
	}
</script>

<style lang="scss">
	.program-list {
		padding: 10px 10rpx;
	}

	.cell {
		border-bottom: 1px solid #f4f4f4;
		padding: 10px;
	}
</style>



















