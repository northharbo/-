<template>
	<view class="study-item" @click="click">
			<view class="card-left">
				<image :src="data.url[0]" mode="aspectFill"></image>
			</view>
			<view class="card-right">
				<view class="rg-hd">
					<view class="hd-title">
					
						{{data.title}}
					</view>
					<view class="hd-des">
						{{data.content}}
					</view>
				</view>	
				<view class="rg-btm">
					<view class="btm-lf">
						<text :style='{color:tagItemColor[data.tag].color,background:tagItemColor[data.tag].bgColor}'>{{"# " +data.tag}}	</text>
					</view>
					<view class="btm-rg">
						<text class="like">
								<text class="iconfont icon-zuji1"></text>
								<text>12</text>
						</text>
						<text class="view">
							<text class="iconfont icon-xihuan3"></text>
							<text>34</text>
						</text>
					</view>
				</view>
			</view>
		</view>
	
</template>

<script>
	export default {
		name:"news-card",
		props:{
			data:{
				type:Object,
				default(){
					return{
						
					}
				}
			}
		},
		data() {
			return {
				tagItemColor:{
					"前端":{
						color:"#ab39ab",
						bgColor:"#ffcef5"
					},
					"后端":{
						color:"#00bd00",
						bgColor:"#d3ffce"
					},
					"游戏":{
						color:"#004ce6",
						bgColor:"#c0daff"
					},
					"考研":{
						color:"#e30000",
						bgColor:"#ffc0c0"
					}
				},
			};
		},
		methods:{
			click(){
				this.$emit("click")
			}
		}
	}
</script>

<style lang="scss">
//  资源卡片
	.study-item{
		margin: 40rpx  20rpx;
		background: #fff;
		padding: 20rpx; 
		border-radius: 20rpx;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		// height: 280rpx;
		.card-left{
			image{
				height: 200rpx;
				width: 200rpx;
			}
		}
		.card-right{
			display: flex;
			flex-direction: column;
			padding-left: 20rpx;
			align-content: space-between;
			.rg-hd{
				.hd-title{
					font-size: 34rpx;
					// font-weight: bold;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp:1;
					
				}
				.hd-des{
					margin: 20rpx 0;
					// margin-top: 10rpx;
					color: #999;
					// max-height: 130rpx;
					// padding: 10rpx 0;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp:2;
					-webkit-box-orient:vertical;
				}
			}
			.rg-btm{
				margin-top: auto;
				display: flex;
				flex-direction: row;
				align-items: center;
				.btm-lf{
					text{
						border-radius: 30rpx;
						display: inline-block;
						padding: 10rpx 30rpx;
						color: #007AFF;
						// background: rgba($color: #58b7ff, $alpha: 0.5);
					}
				}
				.btm-rg{
					color: #CCCCCC;
					margin-left: auto;
					.iconfont{
						font-size: 38rpx;
						padding: 0 5rpx;
					}
					.view{
						padding:0 20rpx;
					}
					text{
						vertical-align: middle;
					}
				}
			}
		}
	}
</style>
