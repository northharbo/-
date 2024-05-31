<template>
	<view class="swrap">
		<custom-back></custom-back>
		<!-- <nav-bg title=""></nav-bg> -->
		<view class="hedaer-bg">
			<view class="progress">
				<progressBar :progress="90"></progressBar>
				<view class="info-card">
					<view class="count card-item">
						<text>
							24 次
						</text>
						<text>累计答题</text>
					</view>
					<view class="count card-item">
						<text>
							24 次
						</text>
						<text>及格次数</text>
					</view>
					<view class="count card-item">
						<text>
							128 题
						</text>
						<text>累计答题</text>
					</view>
				</view>
			</view>

			<image class="bg-image"
				src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/d9061e3f-85bb-49b3-b86d-da41558f2845.jpeg">
			</image>
			<image class="gif-wave"
				src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/94f52838-8a5f-4116-93e7-ed8a9a0c1250.gif"
				mode="scaleToFill"></image>
		</view>
		<view class="titl-list">
			<view class="title-item grade">
				分数
			</view>
			<view class="title-item">
				对
			</view>
			<view class="title-item">
				错
			</view>
			<view class="title-item">
				总
			</view>
			<view class="time">
				答题时间
			</view>
		</view>	
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					
					<view class="grade-item" v-for="(item,index) in 100" :key="index">
						<view class="grade infon-item">
							{{index}} 分
						</view>
						<view class="infon-item">
							12
						</view>
						<view class="infon-item">
							13
						</view>
						<view class="infon-item">
							25
						</view>
						<view class="time">
							2021-01-12 23:23:23
						</view>
					</view>
					<white-space></white-space>
					<safe-footer></safe-footer>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import progressBar from '../components/chocolate-progress-bar/chocolate-progress-bar.vue'
	export default {
		components: {
			progressBar
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.swrap {
		background: #fff;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		.main{
			flex: 1;
			overflow: hidden;
			.scroll-Y{
				height: 100%;
			}
		}
	}

	.hedaer-bg {
		// margin-top: 100rpx;
		// padding-top: 80rpx;
		width: 100%;
		height: 346px;
		position: relative;
		padding: 0;
		border: none;

		.progress {
			position: relative;
			top: 70rpx;
			z-index: 1000;
		}

		.bg-image {
			width: 100%;
			height: 346px;
			position: absolute;
			top: 0;
			border: none;
			padding: 0;
			margin: 0;
		}

		.gif-wave {
			border: none;
			padding: 0;
			margin: 0;
			position: absolute;
			width: 100%;
			bottom: 0;
			left: 0;
			z-index: 99;
			mix-blend-mode: screen;
			height: 120rpx;
		}
	}

	.info-card {
		display: flex;
		flex-direction: row;
		margin: 0 40rpx;
		color: #FFFFFF;
		padding: 20rpx;
		box-sizing: border-box;
		// width: 100%;
		justify-content: space-evenly;
		// border: 1rpx solid red;
		.card-item{
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text{
				padding: 10rpx 0;
			}
		}
	}
	
	//  标题
	.titl-list{
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		height: 100rpx;
		color: #007AFF;
		font-size: 32rpx;
		font-weight: bold;
		padding: 0 10rpx;
		.title-item{
			width: 16%;
			text-align: center;
		}
		.time{
			width: 36%;
			text-align: center;
		}
	}
	.grade-item{
		display: flex;
		justify-content: space-evenly;
		padding: 20rpx 10rpx;
		align-items: center;
		color: #b0b0b0;
		.grade{
			font-size: 32rpx;
			color: #ff9d5c;
			font-weight: bold;
		}
		.infon-item{
			width: 16%;
			text-align: center;
		}
		.time{
			width: 36%;
			color: #CCCCCC;
			text-align: center;
		}
	}
</style>
