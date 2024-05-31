<template>
	<view class="content">
		<nav-bg title="题库"></nav-bg>
		<view class="main">
			<swiper class="swiper" :interval="interval" :duration="duration">
				<swiper-item v-for="(problem,index) in problemList" class="swiper-item" :key="index">
					<scroll-view scroll-y="true" class="scroll-Y">
						<view class="problem">
							<view class="problem-header">
								<view class="mentalTitle text-xl text-black text-bold">
									<text>{{ problem.serialNumber || '' }}</text>
									<text>、</text>
									<text>{{ problem.title || '' }}</text>
								</view>
							</view>
							<view class="mental-item" v-for="(item, index) in problem.itemList" :key="index">
								<view class="indexBox">
									{{item.number}}
								</view>
								<view class="answer-text">
									{{item.answer}}
								</view>
							</view>
						</view>
					</scroll-view>
				</swiper-item>

			</swiper>
		</view>
		<view class="next-previous">
			<view class="previous btn">
				上一题
			</view>
			<view class="next btn">
				下一题
			</view>
		</view>
		<bottom-card>
			<view class="btm-content">
				<view class="btm-left">
					<view class="ok">
						<text class="iconfont icon-zhengque icon"></text>
						<text>23</text>
					</view>
					<view class="error">
						<text class="iconfont icon-msnui-error icon"></text>
						<text>23</text>
					</view>
				</view>
				<view class="btm-rg">
					<view class="collect" @click="changeCollectStatus" :class="{'active-collect':isCollect}">
						<text class="iconfont icon-fenshu_liang collect-icon"></text>
						<!-- <text class="col-text">{{isCollect?'已收藏':'收藏'}}</text> -->
					</view>
					<view class="more" @click="morePopupShow = !morePopupShow">
						<text class="iconfont icon-caidan3 more-icon"></text>
						<text>1/123</text>
					</view>
				</view>
			</view>
		</bottom-card>
		<u-popup v-model="morePopupShow" height ="700rpx" safe-area-inset-bottom mode="bottom" class>
			<view class="popup-main">
				<bottom-card>
					<view class="btm-content">
						<view class="btm-left">
							<view class="ok">
								<text class="iconfont icon-zhengque icon"></text>
								<text>23</text>
							</view>
							<view class="error">
								<text class="iconfont icon-msnui-error icon"></text>
								<text>23</text>
							</view>
						</view>
						<view class="btm-rg">
							<view class="collect" @click="changeCollectStatus" :class="{'active-collect':isCollect}">
								<text class="iconfont icon-fenshu_liang collect-icon"></text>
								<!-- <text class="col-text">{{isCollect?'已收藏':'收藏'}}</text> -->
							</view>
							<view class="more" @click="morePopupShow = !morePopupShow">
								<text class="iconfont icon-caidan3 more-icon"></text>
								<text>1/123</text>
							</view>
						</view>
					</view>
				</bottom-card>
				<scroll-view scroll-y="true" class="problem-scroll" show-scrollbar>
					<view class="problem-list">
						
						<view class="problem-item" v-for="(problem, index) in 2000" :key="index">
							<view class="number">
								{{index}}
							</view>
						</view>
				
					</view>
				</scroll-view>
			</view>
		</u-popup>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				isCollect: false,
				morePopupShow:false,
				problemList: [{
						serialNumber: '1',
						name: '',
						title: '下列元素中，为行内元素的是为行内元素的是为行内元素的是为行内元素的是为行内元素的是为行内元素的是（ ）',
						result:"B",
						itemList: [{
								number: 'A',
								answer: 'div'
							},
							{
								number: 'B',
								answer: 'span'
							},
							{
								number: 'C',
								answer: 'p'
							},
							{
								number: 'D',
								answer: 'h3'
							}
						]
					},
					{
						serialNumber: '2',
						name: '',
						title: '下列是设置边框的属性（）',
						result:"A",
						
						itemList: [{
								number: 'A',
								answer: 'border-color'
							},
							{
								number: 'B',
								answer: 'box-sizing'
							},
							{
								number: 'C',
								answer: 'background'
							},
							{
								number: 'D',
								answer: 'visibility'
							}
						]
					},
					{
						serialNumber: '3',
						name: '',
						title: '在javascript里，下列选项中不属于数组方法的是（ ）',
						result:"B",
						itemList: [{
								number: 'A',
								answer: 'sort()'
							},
							{
								number: 'B',
								answer: 'length()'
							},
							{
								number: 'C',
								answer: 'concat()'
							},
							{
								number: 'D',
								answer: 'reverse()'
							}
						]
					},
					{
						serialNumber: '4',
						name: '',
						title: '下列属性哪一个能够实现层的隐藏？',
						result:"B",
						itemList: [{
								number: 'A',
								answer: 'display:false'
							},
							{
								number: 'B',
								answer: 'display:hidden'
							},
							{
								number: 'C',
								answer: 'display:none'
							},
							{
								number: 'D',
								answer: 'display:“”'
							}
						]
					},
					{
						serialNumber: '5',
						name: '',
						title: '以下哪个单词不属于javascript关键字',
						result:"B",
						itemList: [{
								number: 'A',
								answer: 'with'
							},
							{
								number: 'B',
								answer: 'parent'
							},
							{
								number: 'C',
								answer: 'class'
							},
							{
								number: 'D',
								answer: 'void'
							}
						]
					}
				],

			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			//  点击收藏按钮
			changeCollectStatus() {
				this.isCollect = !this.isCollect
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		display: flex;
		background: #FFFFFF;
		flex-direction: column;

		.main {
			flex: 1;
			overflow: hidden;
			.swiper{
				height: 100%;
			}
		}

	}

	.swiper-item {
		height: 100%;
		overflow: hidden;
		.scroll-Y{
			height: 100%;
		}
	}

	// .problem{
	// 	height: 800rpx;
	// }
	//  选项
	.mentalTitle {
		margin: 20rpx 30rpx;
	}


	.mental-item {
		border-radius: 10rpx;
		margin: 30rpx 20rpx;
		display: flex;
		min-height: 80rpx;
		.indexBox{
			width: 80rpx;
			flex-shrink: 0;
			background: #dadada;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 20rpx 0 0 20rpx;
			color: #FFFFFF;
		}
		.answer-text{
			flex: 1;
			min-height: 80rpx;
			
			padding:10rpx 20rpx;
			display: flex;
			align-items: center;
			background: rgba($color: #f8f8f8, $alpha: 1.0);
			border-radius:0 20rpx 20rpx 0;
		}
	}

	.mentalListActive {
		width: 100%;
		height: 78rpx;
		line-height: 78rpx;
		padding-right: 20rpx;
		border: 1px solid #0081ff;
		border-radius: 12rpx;
		color: #0081ff;
		margin: 30rpx 0;
		font-weight: 600;
		background-image: url(http://cdn.zhoukaiwen.com/answerYes.png);
		background-repeat: no-repeat;
		background-size: 38rpx;
		background-position: right 30rpx center;

		.indexBox {
			background-color: #0081ff;
			color: #ffffff;
		}
	}











	//  上一题下一题
	.next-previous {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		padding-bottom: 50rpx;
		.btn {
			// width: 100rpx;
			padding: 15rpx 60rpx;
			background: rgba($color: #60a8ff, $alpha: 1.0);
			color: #fff;
			border-radius: 40rpx;

		}

		.previous {
			background: rgba($color: #ff8c65, $alpha: 1.0);
		}
	}


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
	
	
	//  弹出层
	.popup-main{
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		.problem-scroll{
			flex: 1;
			overflow: hidden;
			
			.problem-list{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;
				.problem-item{
					flex-shrink: 0;
					margin: 10rpx ;
					width: 100rpx;
					height: 100rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border: 1rpx solid #CCCCCC;
					border-radius: 50%;
				}
			}
			
		}
	}
</style>
