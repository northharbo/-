<template>
	<bottom-card>
		<view class="btm-content">
			<view class="btm-left">
				<view class="ok">
					<text class="iconfont icon-zhengque icon"></text>
					<text>{{okCount}}</text>
				</view>
				<view class="error">
					<text class="iconfont icon-msnui-error icon"></text>
					<text>{{errorCount}}</text>
				</view>
			</view>
			<view class="btm-rg">
				<view class="collect" @click="changeCollectStatus" :class="{'active-collect':isCollect}">
					<text class="iconfont icon-fenshu_liang collect-icon"></text>
					<!-- <text class="col-text">{{isCollect?'已收藏':'收藏'}}</text> -->
				</view>
				<view class="more" @click="clickMore">
					<text class="iconfont icon-caidan3 more-icon"></text>
					<text>{{currentIndex }} / {{totalCount}}</text>
				</view>
			</view>
		</view>
	</bottom-card>
</template>

<script>
	import bottomCard from '../bottom-card/bottom-card.vue'
	export default {
		name:"bottom-options",
		components:{
			bottomCard
		},
		props:{
			collect:{
				type:Boolean,
				default(){
					return false
				}
			},
			okCount:{
				type:Number,
				default(){
					return 0
				}
			},
			errorCount:{
				type:Number,
				default(){
					return 0
				}
			},
			currentIndex:{
				type:Number,
				default(){
					return 0
				}
			},
			totalCount:{
				type:Number,
				default(){
					return 0
				}
			}
		},
		created() {
			this.isCollect = this.collect
		},
		data() {
			return {
				isCollect:false,
			};
		},
		methods:{
			changeCollectStatus(){
				
			},
			clickMore(){
				this.$emit("clickMore")
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	//  底部按钮
	.btm-content {
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		height: 100rpx;
		align-items: center;

		.btm-left {
			display: flex;

			.icon {
				padding: 0 10rpx;
			}

			.ok {
				padding: 0 20rpx;
				color: #00cc00;
			}

			.error {
				color: #ED1C24;
			}
		}

		.btm-rg {
			display: flex;
			align-items: center;
			.collect {
				display: flex;
				align-items: center;
				color: #ccc;
				margin: 0 40rpx;
				.collect-icon {
					font-size: 46rpx;

				}

				.col-text {
					width: 120rpx;
				}
			}

			.active-collect {
				color: #ffa91d;
			}
			
			.more{
				display: flex;
				align-items: center;
				color: #b4b4b4;
				.more-icon{
					color: #007AFF;
					font-size: 46rpx;
					margin-right: 10rpx;
				}
			}
		}
	}
	
</style>
