<template>

	<view class="user-info">
		<view class="card-tag">
			<view class="tag" :class="{'old':!data.status}">
				{{data.status ? "现" : "前"}}
			</view>
		</view>
		<view class="card-hd">
			<view class="card-lf">
				<view class="name card-tag">
					{{data.name}}
				</view>
				<view class="name major">
					{{data.major}}
				</view>
				<view class="class card-tag">
					{{data.grade}}
				</view>
			</view>
			<view class="hd-rg">
				<avater image-size="128"></avater>
			</view>
		</view>
		<view class="card-bottom">
			<view class="btm-item" @longtap="copyInfo(data.clazz)">
				<view class="item-info">
					<text class="iconfont icon-banji3" style="color: #1CBBB4;"></text>
				</view>
				<view class="detail">
					{{data.clazz|| "无"}}
				</view>

			</view>

			<view class="btm-item" @longtap="copyInfo(data.weixin)">
				<view class="item-info">
					<text class="iconfont icon-weixin1" style="color: #008000;"></text>
				</view>
				<view class="detail">
					{{data.weixin || "无"}}
				</view>
			</view>
			<view class="btm-item" @longtap="copyInfo(data.qq)">
				<view class="item-info">
					<text class="iconfont icon-iconfonticon6" style="color: #5555ff;"></text>
				</view>
				<view class="detail">
					{{data.qq || "无"}}
				</view>

			</view>
		</view>

	</view>

</template>

<script>
	export default {
		name: "stu-card",
		props: {
			data: {
				type: Object,
				default () {
					return {
						name: "",
						major: "",
						clazz: "",
						wx: "",
						qq: "",
						grade: ""
					}
				}
			}
		},
		data() {
			return {

			};
		},
		methods: {
			copyInfo(info) {
				if (!info) {
					return uni.showToast({
						title: "内容为空"
					})
				}
				uni.setClipboardData({
					data: info || "", //要被复制的内容
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: '复制成功' + (info || ""),
							icon: "none"
						})
					},
					fail(err) {

						console.log(err)
						uni.showToast({ //提示
							title: '失败',
							icon: "none"
						})
					}
				});

			},
		}
	}
</script>

<style lang="scss">
	.user-info {
		margin: 40rpx 20rpx;
		background: rgba($color: #45fff0, $alpha: 0.2);
		padding: 15rpx 0rpx;

		border-radius: 20rpx;
		background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/c1482601-69f3-4af5-91f7-b855031236c5.jpeg);
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;

		.card-tag {
			display: flex;

			// padding-right: 20rpx;
			.tag {
				margin-left: auto;
				padding: 5rpx 30rpx;
				background: rgba($color: #30de9b, $alpha: 1.0);
				border-radius: 20rpx 0 0 20rpx;
				color: #FFFFFF;
				font-weight: bold;
			}

			.old {
				background: rgba($color: #de2d30, $alpha: 1.0);

			}
		}

		.card-hd {
			display: flex;
			flex-direction: row;
			padding: 20rpx;

			.card-lf {
				padding-left: 20rpx;

				.card-tag {
					padding: 10rpx 0;
					color: #FFFFFF;
				}

				.name {
					font-size: 42rpx;
					color: #FFFFFF;
					font-weight: bold;
				}

				.major {
					font-size: 36rpx;
					color: #e8e8e8;
					// font-weight: bold;
				}
			}

			.hd-rg {
				margin-left: auto;
				width: 200rpx;
			}
		}

		.card-bottom {
			padding: 20rpx;
			display: flex;
			width: 100%;

			.btm-item {
				width: 33.3%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;

				.iconfont {
					font-size: 52rpx;

				}

				.detail {
					padding: 20rpx 0;
					color: #939393;
					font-size: 30rpx;
				}
			}
		}

	}
</style>
