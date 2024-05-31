<template>
	<view class="content">
		<web-view :src="content"></web-view>
	</view>
</template>

<script>
	export default {
		
		data() {
			return {
				type:0,
				content:``, 
				title:""
			};
		},
		onLoad(e) {
			const type = e.type
			this.type = type
			this.getAboutDetail()
		},
		methods:{
			
			//  获取详情数据
			async getAboutDetail(){
				try{
					const {data:res} = await this.$httpApi.getAboutDetail()
					
					this.content = res[0].content
					wx.setNavigationBarTitle({
					  title: res[0].tag
					})
				}catch(e){
					//TODO handle the exception
				}
			}
					
					
			}
	}
</script>

<style lang="scss">
	.ccontent{
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		background: #FFFFFF;
		.main{
			flex: 1;
			overflow: hidden;
			// padding: 0 40rpx;
			.scroll-Y{
				height: 100%;
				.scroll-main{
				background: #FFFFFF;	
				}
			}
		}
	}

</style>
