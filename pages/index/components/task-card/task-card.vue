<template>
	<view class="listcard "  @tap="open">
		<view class="listcard-image">
			<view class="listcard-image_box">
				<image :src="listItem.imageUrl" mode="aspectFill"></image>
			</view>
		</view>
		<view class="listcard-content" >
			<view class="listcard-content_title" >
				<text>{{listItem.title}}</text>
			</view>
			<view class="listcard-content_main">
				<view class="finsh-time">
					<text class="iconfont icon-shijian3"></text>
					<text>结束：</text>
					{{listItem.endTime}}
				</view>
				<!--  tag === false 结束 -->
				<view class="status" :class='{finsh:listItem.tag  == false }'>
					{{listItem.tag == false ? "已结束" :"进行中"}}
				</view>
			</view>
			<view class="listcard-content_des">
				<view class="listcard-content_des-label">
					<view class="listcard-content_des-label-item">
						<text class="iconfont icon-shijian2"></text>
						开始：{{listItem.startTime}}
					</view>
				</view>
				<!-- <view class="listcard-content_des-browse">
					<text class="iconfont icon-liulan"></text>
					<text class="des-count">{{listItem.count}}</text>
					<text>浏览</text>
				</view> -->
			</view>
		</view>
	</view>
	 
	
</template>

<script>
	export default {
		name:"task-card",
		props:{
			listItem: {
				type: Object,
				default () {
					return {};
				}
			},
		},
		data() {
			return {
				
			};
		},
		methods:{
			open(){
				
				this.$emit("click")
				
			}
		}
	}
</script>


<style lang="scss" scoped>
	
	// 卡片盒子
	.listcard{
		display: flex;
		padding: 10rpx;
		margin: 10px;
		border-radius:5px;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		box-sizing: border-box;
		background: #FFFFFF;
		.iconfont{
			display: inline-block;
			font-size: 26rpx;
			padding-right:10rpx;
		}
		.listcard-image{
			display: flex;
			margin: auto 0;
			flex-shrink: 0;
			width: 80px;
			height: 80px;
			border-radius: 5px;
			overflow: hidden;
			.listcard-image_box{
				height: 100%;
				width: 100%;
				image{
					height: 100%;
					width: 100%;
				}
			}
			
			
		}
		
		// 卡片内容区
		.listcard-content{
			display: flex;
			flex-direction: column;
			padding-left: 20rpx;
			width: 100%;
			justify-content: space-between;
			// 标题
			.listcard-content_title{
				width:100% ;
				position: relative;
				// padding-right: 30px;
				
				font-size: 14px;
				color: #333333;
				font-weight: 700;
				line-height: 1.2;
			
				
			}
			.listcard-content_main{
				display: flex;
				justify-content: space-between;
				.finsh-time{
					font-size: 24rpx;
					color: rgba($color: #f15558, $alpha: 1.0);
				}
				.status{
					background: rgba($color: #2fc77b, $alpha: 0.7);
					
					padding:5rpx 10rpx;
					border-radius: 10rpx;
					color: #FFF;
					font-size: 24rpx;
				}
				.finsh{
					background: rgba($color: #c74c59, $alpha: 0.7);
				}
			}
			.listcard-content_des{
				margin: 10rpx 0;
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.listcard-content_des-label{
					display: flex;
					.listcard-content_des-label-item{
						padding: 0;
						margin-right: 5px;
						border-radius: 15px;
						color: #a5a5a5;
						// border: 1px $uni-color-primary solid;
					}
				}
				.listcard-content_des-browse{
					color: #999999;
					line-height: 1.5;
					.des-count{
						display: inline-block;
						margin-right: 10rpx;
						// background: red;
					}
				}
			}
		}
	}
</style>
