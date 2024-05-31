<template>
	<view class="swrap">
		<nav-bg :title="title"></nav-bg>
		<bg-title :title="title"></bg-title>
		<view class="main">
				
		<mp-html :content="content"></mp-html>
		
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params:{},
				content:"", 
				title:""
			};
		},
		onLoad(e) {
			
			this.params = JSON.parse(e.params)
			this.title =  this.params.title
			this.content = this.params.content
			this.content = this.$marked(this.content)
		}
	}
</script>

<style lang="scss">
.main{
	padding: 0 40rpx;
}
</style>
