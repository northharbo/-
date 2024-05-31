<template>
	<view class="labelRight">
		<view class="labelRight">
			<view class="text">{{name}}</view>
			<text class="iconfont icon-arr-right-black"></text>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			default() {
				return ''
			}
		}
	}
}
</script>

<style lang="scss" scoped>
	.labelRight {
		display: flex;
		color: #2699fb;
		
		.custom-icon {
			margin-left: 20rpx;
		}
	}
</style>
