<template>
	<view class="content">
		<nav-bg title="答题"></nav-bg>
		<view class="progress">
			<u-line-progress :striped="true" class="progress" :percent="progress" :striped-active="true"></u-line-progress>
			
		</view>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<view class="problem">
						<view class="problem-header">
							<view class="mentalTitle text-xl text-black text-bold">
								<text>{{ currentProblem.serialNumber || '' }}</text>
								<text>、</text>
								<text>{{ currentProblem.title || '' }}</text>
							</view>
						</view>
						<view class="mental-item" v-for="(item, index) in currentProblem.itemList" :key="index"
							@click="clickOptions(item,currentProblem.result)"
							:class="{'mental-item-active-error':(isChoose[currentIndex] && optionResult==item.number) || (currentProblem.optionResult && currentProblem.optionResult == item.number),'mental-item-active-ok':(!currentProblem.optionResult && isChoose[currentIndex] && currentProblem.result == item.number) || ( currentProblem.optionResult && item.number == currentProblem.result)}">
							<view class="indexBox">
								{{item.number}}
							</view>
							<view class="answer-text">
								{{item.answer}}
							</view>
						</view>
						
						<view class="problem-btm" v-show="localProblem[currentIndex]">
							<view class="answer">
								<text>答案：</text>{{currentProblem.result}}
							</view>
							<view class="answer-des">
								<view class="cu-bar justify-center bg-white">
									<view class="action sub-title">
										<text class="text-xl text-bold text-blue">参考解析</text>
										<text class="text-ABC text-blue">ReferenceAnswer</text>
										<!-- last-child选择器-->
									</view>
								</view>
								<view class="answer-text">
									{{currentProblem.answerDes}}
								</view>
							</view>
						</view>

					</view>

				</view>
			</scroll-view>
		</view>
		<view class="next-previous">
			<view class="previous btn" @click="previousEvent">
				上一题
			</view>
			<view class="next btn" @click="nextEvent">
				下一题
			</view>
		</view>
		<bottom-options :ok-count="okCount" :error-count="errorCount" :total-count="maxProblemCount"
			:currentIndex="currentIndex" @clickMore="clickMoreBtn"></bottom-options>

		<u-popup v-model="morePopupShow" height="700rpx" safe-area-inset-bottom mode="bottom" class>
			<view class="popup-main">
				<bottom-options :ok-count="okCount" :error-count="errorCount" :total-count="maxProblemCount"
					:currentIndex="currentIndex" @clickMore="clickMoreBtn"></bottom-options>
				<scroll-view scroll-y="true" class="problem-scroll" show-scrollbar>
					<view class="problem-list">

						<view class="problem-item" v-for="(problem, index) in 5" :key="index"
							:class="{'no-problem':count <= index,'error-number':localProblem[index+1] && !localProblem[index+1].isOk,'ok-number':localProblem[index+1].isOk }"
							@click="clickMoreItem(index+1)">
							<view class="number">
								{{index+1}}
							</view>
						</view>

					</view>
				</scroll-view>
			</view>
		</u-popup>
		<u-mask :show="show">
			<view class="warp">
				<view class="rect" @tap.stop>
					<view class="closeBtn">
						<u-icon @click="closeMask" name="close-circle-fill" color="#ccc" size="58"></u-icon>
					</view>

					<view class="closeImg">
						<image mode="aspectFit" src="http://cdn.zhoukaiwen.com/answerTrophy.png"></image>
					</view>
					<view class="text-black text-bold text-center">恭喜您！完成答题！</view>
					<view class="text-center margin-tb-lg text-gray">{{showMessage}}</view>

					<view style="width: 350rpx; margin: 50rpx auto 0;">
						<button open-type="share" class="cu-btn round bg-blue shadow"
							style="width: 100%;">分享给好友，一起学习</button>
					</view>
				</view>
			</view>
		</u-mask>
		<u-toast ref="uToast" />
	</view>
</template>
<script>
	import {
		problem
	} from '../data.js'
	import bottomOptions from '../components/bottom-options/bottom-options.vue'
	let progressFlag = false;
	export default {
		components: {
			bottomOptions
		},
		data() {
			return {
				maxProblemCount: 5,
				isCollect: false,
				morePopupShow: false,
				currentIndex: 0,
				endIndex: 0, // 当前已做最后题数
				optionResult: "",
				isChoose: [], //是否作答
				show: false,
				okCount: 0,
				errorCount: 0,
				//进度条
				progress: 0,
				count: 0,
				localProblem: [], // 已经作答
				totalCount: 0,
				currentProblem: {},
				problemList: []

			}
		},
		watch: {
			progress(val) {
				console.log(this.progress + '% - 进度');

				if (this.progress == 100 && !progressFlag) {
					progressFlag = true
					// setTimeout(() => {
					this.show = true;
					// }, 1300);
				}
			},


		},
		onLoad() {
			this.problemList = problem
			this.currentProblem = this.problemList[1];

			this.count++;
			this.currentIndex++;
			this.isChoose.push(null)
			// this.totalCount = this.problemList.lenght
		},
		onShareAppMessage(res) {
			return {
				title: '我已完成答题，快来参与吧'
			};
		},
		methods: {
			clickMoreBtn() {
				this.morePopupShow = !this.morePopupShow
			},
			//  点击收藏按钮
			changeCollectStatus() {
				this.isCollect = !this.isCollect
			},
			//  上一题
			previousEvent() {
				this.currentIndex--;
				if (this.currentIndex < 1) this.currentIndex = 1;
				this.currentProblem = this.localProblem[this.currentIndex]
			},


			nextEvent() {


				if (this.count == this.problemList.length && this.currentIndex == this.count) {
					return this.show = true
				}

				if (!this.isChoose[this.currentIndex] && !this.currentProblem.optionResult) {
					return this.$refs.uToast.show({
						title: '该题未作答',
						type: 'warning ',

					})
				}
				this.count++;
				if (this.count > this.maxProblemCount) {
					this.count = this.maxProblemCount
				}
				this.isChoose[this.currentIndex] = false;
				this.currentIndex++;
				this.currentProblem = this.localProblem[this.currentIndex] ? this.localProblem[this.currentIndex] : this
					.currentProblem = this.problemList[this.currentIndex]
				if (this.currentIndex >= this.problemList.length) this.currentIndex = this.problemList.length - 1;

			},

			//  点击选项
			clickOptions(item, result) {
				if (this.isChoose[this.currentIndex] || this.currentProblem.optionResult) {
					return this.$refs.uToast.show({
						title: '该题已作答',
						type: 'warning ',
					})
				}
				this.isChoose.push(true);
				this.optionResult = item.number;

				this.progress = (this.count / (this.problemList.length - 1)) * 100;
				const isOk = item.number === result
				if (isOk) {
					this.okCount++;
					if (this.count < this.maxProblemCount) {
						setTimeout(() => {
							this.nextEvent()
						}, 500)
					}
				} else {
					this.errorCount++;
				}
				this.localProblem[this.currentIndex] = {
					...this.$u.deepClone(this.problemList[this.currentIndex]),
					optionResult: item.number,
					isOk,
				}
				if (this.count === this.maxProblemCount) {
					this.show = true;
				}
			},
			//  点击更多列表
			clickMoreItem(index) {
				console.log(this.count, index)
				if (index < this.count) {
					this.currentIndex = index;
					this.currentProblem = this.localProblem[index]
				}
				if (index == this.count) {
					this.currentIndex = index;
					console.log(this.count, index, this.problemList[this.currentIndex])
					this.currentProblem = this.problemList[index]
				}
				this.morePopupShow = false;
			},
			// 弹窗消失
			closeMask() {
				this.show = false;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		display: flex;
		background: #FFFFFF;
		flex-direction: column;
		position: relative;
		border-radius: 10rp;

		.main {
			flex: 1;
			overflow: hidden;

			.scroll-Y {
				height: 100%;
			}
		}

	}

	.progress{
		padding-top: 30rpx 0;
		// padding: 20rpx;
		box-sizing: border-box;
	}
	.mentalTitle {
		padding: 20rpx 30rpx;
	}


	.mental-item {
		border-radius: 10rpx;
		margin: 30rpx 20rpx;
		display: flex;
		min-height: 80rpx;

		.indexBox {
			width: 80rpx;
			flex-shrink: 0;
			background: #dadada;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 20rpx 0 0 20rpx;
			color: #FFFFFF;
		}

		.answer-text {
			flex: 1;
			min-height: 80rpx;

			padding: 10rpx 20rpx;
			display: flex;
			align-items: center;
			background: rgba($color: #f8f8f8, $alpha: 1.0);
			border-radius: 0 20rpx 20rpx 0;
		}
	}


	.mental-item-active-error {
		.indexBox {
			background: #da1212;
		}

		.answer-text {
			color: #FFFFFF;
			background: rgba($color: #f88282, $alpha: 1.0);

		}
	}

	.mental-item-active-ok {
		.indexBox {
			background: #1876da !important;
		}

		.answer-text {
			color: #FFFFFF;
			background: rgba($color: #79d6f8, $alpha: 1.0) !important;

		}
	}
	
	.problem-btm{
		padding: 40rpx 20rpx;
		.answer{
			background: rgba($color: #f0f0f0, $alpha: 1.0);
			padding: 20rpx;
			border-radius: 5rpx;
			color: #008000;
			font-size: 32rpx;
		}
		.answer-des{
			padding-top: 40rpx;
		}
		//  答案解析
		.answer-text{
			padding-top: 30rpx;
			text-indent:2em;
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




	//  弹出层
	.popup-main {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;

		.problem-scroll {
			flex: 1;
			overflow: hidden;

			.problem-list {
				display: flex;
				flex-wrap: wrap;
				justify-content: space-evenly;

				.problem-item {
					flex-shrink: 0;
					margin: 10rpx;
					width: 100rpx;
					height: 100rpx;
					display: flex;
					justify-content: center;
					align-items: center;
					border: 1rpx solid #CCCCCC;
					border-radius: 50%;
				}

				.no-problem {
					background: rgba($color: #ececec, $alpha: 1.0);
				}

				.ok-number {
					background: rgba($color: #25b642, $alpha: 0.2);
				}

				.error-number {
					background: rgba($color: #f04b4b, $alpha: 0.2);
				}
			}

		}
	}




	.warp {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 480rpx;
		// height: 520rpx;
		border-radius: 20rpx;
		padding: 25rpx 25rpx 80rpx 25rpx;
		box-sizing: border-box;
		background-color: #fff;
	}

	.closeImg {
		width: 100%;
		height: 200rpx;
		margin: 10rpx auto 30rpx;

		image {
			height: 200rpx;
		}
	}

	.cu-bar .cu-avatar:first-child {
		margin-left: -11px;
	}

	.cu-bar {
		height: 90rpx !important;
	}

	.mainBox {
		padding: 60rpx 40rpx 20rpx 40rpx;
	}

	.explainMain {
		width: 100%;
		text-align: center;
		font-size: 24rpx;
		text-align: center;
		color: #999999;
		margin-top: 30rpx;
	}
</style>
