<template>
	<view class="swrap">
		<nav-bg title="关于我们"></nav-bg>
		<view class="des-content">
			<wxparser :rich-text="content" />
			<white-space></white-space>
		</view>
	</view>
</template>

<script>
	import marked from 'marked'//转换Markdown格式富文本
	export default {
		data() {
			return {
				
				content:""
			};
		},
		onLoad(e) {
			
			this.content = marked(this.content)
			console.log(this.content)
			this.getAboutDetail()
		},
		methods:{
			async getAboutDetail(){
				const {data:res} = await this.$httpApi.getAboutDetail()
				this.content =marked(res[0]?.content)
			}
		}
	}
</script>

<style lang="scss">
.swrap{
	padding:0 30rpx;
	background: #FFFFFF;
}
.article-header{
	padding:50rpx 20rpx;
	.title{
		font-size: 42rpx;
		font-weight: bold;
	}
	.user-info{
		
		display: flex;
		flex-direction: row;
		.user{
			padding-left: 20rpx;
			display: flex;
			flex-direction: column;
			.name{
				font-weight: bold;
				font-size: 32rpx;
				
			}
			.artcile-info{
				display: flex;
				color: #C0C5CE;
				font-size: 24rpx;
				.iconfont{
					font-size: 24rpx;
					padding: 0 10rpx;
					padding-left: 0;
				}
			}
		}
		
	}
}

</style>
