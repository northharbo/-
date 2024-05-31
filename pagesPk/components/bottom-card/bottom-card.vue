<template>
	<view class="btm-btn">
		<slot></slot>
		<safe-footer></safe-footer>
	</view>
	
</template>

<script>
	export default {
		name:"bottom-card",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

//  底部点赞
	.btm-btn {
		// position: relative;
		// z-index: 1;
		width: 100%;
		background: #FFFFFF;
		box-shadow:  0px -2rpx 2px  rgba(229, 229, 229, 0.9);
	}

</style>
