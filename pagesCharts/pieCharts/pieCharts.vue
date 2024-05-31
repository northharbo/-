<template>
	<view class="swrap">
		<!-- <nav-bg title="饼状图数据对比"></nav-bg> -->
		
			<view class="cu-bar bg-white margin-top-xs">
				<view class="action sub-title">
					<text class="text-xl text-bold text-blue text-shadow">文章分类总数占比</text>
					<text class="text-ABC text-blue">PieCharts</text>
				</view>
			</view>
			<view class="chartsMain">
				<canvas canvas-id="canvasPie" id="canvasPie" class="charts" @touchstart="touchPie"></canvas>
			</view>
		
	</view>
</template>

<script>
	// 图表
	import uCharts from "../components/u-charts/u-charts.js";
	var _self;
	var canvaArea = null;
	var canvaPie = null;
	export default {
		data() {
			return {
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				// 饼状图
				"Pie": {
					"series": [{
						"name": "前端",
						"data": 50
					}, {
						"name": "后端",
						"data": 30
					}, {
						"name": "游戏",
						"data": 20
					}, {
						"name": "考研",
						"data": 18
					}]
				},
			}
		},
		onLoad() {
			
			 _self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(420);
			this.getServerData();
		
		},
		methods: {
			getServerData() {
				
				_self.showPie("canvasPie", this.Pie);
				
			},
			
			// 饼状图
			showPie(canvasId, chartData) {
				 
				canvaPie = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'pie',
					fontSize: 11,
					legend: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					series: _self.Pie.series,
					animation: true,
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					dataLabel: true,
					extra: {
						pie: {
							lableWidth: 15
						}
					},
				});
			},
			touchPie(e) {
				canvaPie.showToolTip(e, {
					format: function(item) {
						return item.name + ':' + item.data
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
.chartsMain {
		width: 750rpx;
		height: 450rpx;
		padding-top: 15rpx;
		background: #fff;
		margin-bottom: 24rpx;
		border-top: 2rpx solid #f2f2f2;
		.charts {
			width: 750rpx;
			height: 450rpx;
			box-sizing: border-box;
		}
	}
</style>
