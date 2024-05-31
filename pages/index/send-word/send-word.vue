<template>
	<view class="swrap">
		<custom-back></custom-back>
		<view class="main">
			<view class="title">
				<!-- ❤️ -->
				<text class="iconfont icon-youjiyu icon"></text>
				<text class="title-text"> 💌工作室寄语 </text>
				<text class="iconfont icon-zuojiyu icon"></text>
			</view>
			<view class="message-list">
				<swiper class="image-container" :previous-margin="margin" :next-margin="margin" circular autoplay
					@change="swiperChange">
					<swiper-item :class="currentIndex == index ? 'swiper-item' : 'swiper-item-side'"
						v-for="(item, index) in messageList" :key="item.id">
						<view class="imag-box" @click="clickImg(item)"
							:class="currentIndex == index ? 'item-img' : 'item-img-side'" lazy-load
							:style="{ animation: dontFirstAnimation ? 'none':'',backgroundImage:'url('+bgList[(index%4)]+')'}">
							<view class="msg-header">
								<view class="left-name">
									<avater imageSize="126" :avaterUrl="item.avatarUrl"></avater>
									<view class="name">
										{{item.authorName}}
									</view>
								</view>
								<view class="text-count">
									字：{{item.motto.length}}
								</view>
							</view>
							<view class="msg-des">
								{{item.motto}}
							</view>
							<view class="msg-des">
								<view class="name ">
									- {{item.authorName}}
								</view>
								<view class="time">
									{{item.createTime}}
								</view>
							</view>
							<!-- <view class="msg-like">
								<view class="like-btn" @click="clickLike">
									<text class="iconfont icon-xihuan1 like-icon" :style="{color: like ?'#cc2020':''}"></text>
								</view>
							</view> -->
						</view>
					</swiper-item>
				</swiper>

			</view>
			<white-space></white-space>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				currentIndex: 0,
				dontFirstAnimation: true,
				margin: "120rpx",
				urlKey: "url",
				like: false,
				bgList: [
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/857f7e55-6d4e-4dfe-9a0c-f41ae23bdc5f.jpeg",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/16b125f7-02a3-4c6a-9d32-5a4ebf95aa34.jpeg",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/b3c755c2-2a67-42ee-8528-312763e907ed.jpeg",
					"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/6035f74f-bd12-44e6-9148-c0bd849f66bd.jpeg"
				],

				messageList: [],
				//  请求分页信息
				pageInfo: {
					curPage: 1,
					pageSize: 20,
				},
				//  后端返回分页信息
				resPage: {
					curPage: 0,
					pageSize: 0,
					totalNum: 0,
					totalPage: 0,
				},
			};
		},
		onLoad() {
			this.getMottoList()
		},
		methods: {
			async getMottoList() {
				const {
					data: res = []
				} = await this.$httpApi.getMottoList({
					...this.pageInfo
				})
				this.messageList = res

			},
			swiperChange(e) {
				this.dontFirstAnimation = false
				this.currentIndex = e.detail.current
			},
			clickImg(item) {
				this.$emit('selected', item, this.currentIndex)
			},
			clickLike() {
				this.like = !this.like
			}
		}
	}
</script>

<style lang="scss">
	.swrap {
		// padding-top: 150rpx;
		box-sizing: border-box;
		background: rgba($color: #ffffff, $alpha: .8);
		position: relative;
		// background: linear-gradient(45deg,rgba(255, 255, 127, 0.5),rgba(0, 213, 255, 0.5), rgba(144, 8, 255, 0.5),rgba(255, 0, 255, 0.5));
		// animation: gradientBG 10s ease infinite;
		background-size: 500% 500%;
		// background: rgba($color: #000000, $alpha: 1.0);
		height: 100%;

		&::after {
			position: fixed;
			top: 0;
			width: 100%;
			height: 100%;
			content: "";
			z-index: -1;
			background-image: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/ab2d96e9-097e-4c57-a749-ca605f282e41.jpg);
			background-repeat: no-repeat;
			background-size: 100% 100%;
		}
	}
	.main{
		padding-top: 120rpx;
	}
	@keyframes gradientBG {
		0% {
			background-position: 0% 50%;
		}

		50% {
			background-position: 100% 50%;
		}

		100% {
			background-position: 0% 50%;
		}
	}

	.title {
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
		text-align: center;
		font-size: 42rpx;
		font-weight: bold;

		.title-text {
			display: inline-block;
			padding: 0 20rpx;
		}

		.icon {
			color: #ff426e;
			font-size: 46rpx;
		}
	}

	.message-list {
		padding-top: 50rpx;
		width: 100%;
		height: 1200rpx;
		margin: 10rpx 0;
		position: relative;
		z-index: 1;
	}







	//  卡片


	$maxHeight:1100rpx;
	$minHeight:1000rpx;
	$maxWidth:660rpx;
	$minWidth:460rpx;

	.image-container {
		width: 100%;
		height: $maxHeight;
	}

	.imag-box {

		padding: 10rpx;
		border-radius: 10rpx;
		overflow: hidden;
		background-size: auto 100%;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		position: relative;

		.msg-header {
			padding: 20rpx 0;
			margin: 0 40rpx;
			border-bottom: 4rpx solid #FFFFFF;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			.left-name{
				display: flex;
				align-items: center;
				.name{
					padding-left: 20rpx;
					font-size: 32rpx;
					color: #FFFFFF;
					
				}
			}
			.text-count {
				font-size: 40rpx;
				color: #fff;
			}
		}

		.msg-des {
			padding: 40rpx 20rpx;
			font-size: 14px;
			color: #ffffff;
			text-indent: 2rem;
		}

		.msg-des {
			display: flex;
			flex-direction: column;
			align-items: flex-end;
		}

		.msg-like {
			position: absolute;

			bottom: 20rpx;
			right: 10rpx;
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			.like-btn {
				width: 74rpx;
				height: 74rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background: rgba($color: #d0d0d0, $alpha: 0.8);
				border-radius: 50%;

				.like-icon {
					color: #FFFFFF;
					font-size: 40rpx;
				}
			}
		}
	}

	.item-img {
		// height: 100%;
		// width: 100%;
		width: $maxWidth;
		height: $maxHeight;
		// border-radius: 10rpx;

		animation: to-big .3s;
	}

	.bg-img {
		width: 100%;
		height: 100%;
		border-radius: 6rpx;
		// position: absolute;
		// top: 0;
	}

	.swiper-item {
		width: $maxWidth;
		height: $maxHeight;
		display: flex;
		justify-content: center;
		align-items: center;

	}

	.item-img-side {
		width: $minWidth;
		height: $minHeight;
		border-radius: 14rpx;
		animation: to-mini .3s;
	}

	.swiper-item-side {
		width: $minWidth;
		height: $minHeight;
		// border: 1rpx solid red;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	@keyframes to-mini {
		from {
			height: $maxHeight;
			width: $maxWidth;
		}

		to {
			height: $minHeight;
			width: $minWidth;

		}
	}

	@keyframes to-big {
		from {
			height: $minHeight;
			width: $minWidth;
		}

		to {
			height: $maxHeight;
			width: $maxWidth;
		}
	}
</style>
