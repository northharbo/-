<template>
	<view class="components-star">
		<canvas canvas-id="star_canvas" class="mycanvas"
			:style="'width:' + screenWidth + 'px;height:' + screenHeight + 'px;background-image:url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/02e602bf-dc91-4d6e-87b9-fe458f995078.png)'"></canvas>
		<custom-back></custom-back>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<div class="logo">
						<image
							src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/fff8189d-4202-4331-9c72-8168a3cb7dc4.png"
							mode="aspectFill"></image>
					</div>
					<view class="des-item" v-for="(inter,index) in interList" :key="inter.id">
						<icon-title :title="inter.tag" :iconColor="colorList[index]" icon="icon-xuexi2" borderBottom
							:isRight="false"></icon-title>
						<view class="des">
							<view class="des-section">
								<u-parse :html="inter.content"></u-parse>
							</view>
						</view>
					</view>
					<white-space></white-space>
					<safe-footer></safe-footer>
				</view>
			</scroll-view>
			<!---->
		</view>

	</view>
</template>

<script>
	import lineTitle from '@/components/line-title/line-title.vue'
	import iconTitle from '@/components/icon-title/icon-title.vue'
	import {
		mapState,
		mapActions
	} from 'vuex'
	import Point from '@/common/js/Point'

	const sysinfo = uni.getSystemInfoSync()
	const w = 400
	const h = 1000

	export default {
		components: {
			lineTitle,
			iconTitle
		},
		computed: {
			...mapState('globalVar', {
				tipShow: state => state.tipShow
			})
		},
		data() {
			return {
				Custom: this.Custom,
				CustomBar: this.CustomBar,
				ctx: null,
				screenWidth: sysinfo.screenWidth,
				screenHeight: sysinfo.screenHeight,
				timer: null,
				points: [],
				interList: [],
				colorList: [
					"#00d300",
					"#00aaff",
					"#ff5500",
					"#ff007f",
					"#00d300",
					"#5555ff",

				]


			}
		},
		onLoad() {
			this.getStudioInfo()
			for (let i = 0; i < 80; i++) {
				this.points.push(new Point(Math.random() * w, Math.random() * h))
			}
			this.ctx = uni.createCanvasContext('star_canvas')
			// console.log(points)

			this.gameloop() //进行
			// this.ctx.setFillStyle('red')
			// this.ctx.fillRect(200, 300, 50, 50)
			// this.ctx.draw()
		},
		onUnload() {
			clearTimeout(this.timer)
		},
		methods: {

			//  获取工作室介绍信息
			async getStudioInfo() {
				uni.showLoading({
					icon:"none"
				})
				const {
					data: res
				} = await this.$httpApi.getStudioInfo()
				// console.log(res)
				this.interList = res
				uni.hideLoading()
			},
			navHome() {
				uni.navigateBack({
					delta: 1
				})
			},
			/**粒子进行*/
			gameloop() {
				this.timer = setTimeout(this.gameloop, 100);
				// console.log('gameloop')
				this.paint();
			},
			/**清空画布*/
			paint() {
				this.ctx.clearRect(0, 0, w, h)
				for (var i = 0; i < this.points.length; i++) {
					this.points[i].move(w, h)
					this.points[i].draw(this.ctx)
					for (var j = i + 1; j < this.points.length; j++) {
						this.points[i].drawLine(this.ctx, this.points[j])
					}
				}
				this.ctx.draw();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.components-star {
		// background-image: linear-gradient(45deg, #ff7612, #ff571c);
		height: 100vh;
	}

	.mycanvas {
		position: absolute;
		top: 0;
		left: 0;
		background-size: cover;
		width: 100vw;
		height: 100vh;
		justify-content: center;
		flex-direction: column;
		color: #fff;
		z-index: 1;
	}


	.main {
		position: relative;

		z-index: 2;
		height: 100%;

		.scroll-Y {
			height: 100%;
			overflow: hidden;

		}

		.scroll-main {
			margin-top: 100px;
			// border: 1px solid red;
		}
	}

	.logo {
		width: 100%;
		display: flex;
		justify-content: center;

		image {
			width: 250rpx;
			height: 250rpx;
			border-radius: 50%;
		}
	}

	.des-item {
		padding: 10px;
		background: rgba($color: #ffffff, $alpha: 0.5);
		border-radius: 10px;
		margin: 20rpx 10rpx;

		.des {
			// text-indent:2em;
			padding: 10px;
		}
	}
</style>
