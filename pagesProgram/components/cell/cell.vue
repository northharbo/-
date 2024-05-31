<template>
	<view class="cell" @click="clickEvent">
		<view class="left">
			{{name}}
		</view>
		<view class="right">
			<text class="iconfont icon-arrow-right1"></text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"cell",
		props:{
			name:{
				type:String,
				default(){
					return ""
				}
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
			clickEvent(){
				this.$emit("click")
			}
		}
	}
</script>

<style lang="scss">
.cell{

	border-bottom: 1px solid #f4f4f4;
	padding: 10px;
	display: flex;
	.right{
		margin-left: auto;
		color: #CCCCCC;
	}
}
</style>
