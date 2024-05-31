<template>
	<view class="swrap">
		<!-- <nav-bg title="折线数据报表"></nav-bg> -->
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">文章发布数</text>
				<text class="text-ABC text-blue">ArticleCount</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasAreaPublishArticle" id="canvasAreaPublishArticle" class="charts" @touchstart="touchArea($event,'canvasAreaPublishArticle')"></canvas>
		</view>
		
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">文章总数</text>
				<text class="text-ABC text-blue">ArticleTotalCount</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasAreaPublishArticleTotal" id="canvasAreaPublishArticleTotal" class="charts" @touchstart="touchArea($event,'canvasAreaPublishArticleTotal')"></canvas>
		</view>
		
		
		<view class="cu-bar bg-white margin-top-xs">
			<view class="action sub-title">
				<text class="text-xl text-bold text-blue text-shadow">前端分类</text>
				<text class="text-ABC text-blue">WebFont</text>
			</view>
		</view>
		<view class="chartsMain">
			<canvas canvas-id="canvasAreaPublishArticleFonWeb" id="canvasAreaPublishArticleFonWeb" class="charts" @touchstart="touchArea($event,'canvasAreaPublishArticleFonWeb')"></canvas>
		</view>
		<white-space></white-space>
		<safe-footer></safe-footer>
	</view>
</template>

<script>
	// 图表
	import uCharts from "../components/u-charts/u-charts.js";
	var _self;
	var canvasArea = {};
	
	export default {
		data() {
			return {
				
				cWidth: '',
				cHeight: '',
				pixelRatio: 1,
				chartData: {
					categories: [{
						value: 0.2,
						color: '#2fc25b'
					}, {
						value: 0.8,
						color: '#f04864'
					}, {
						value: 1,
						color: '#1890ff'
					}],
					series: [{
						name: '完成率',
						data: 0.85
					}]
				},
				canvasArea:{
					
				},
				// 折线图
				canvasAreaPublishArticle: {
					categories: ['6月', '7月', '8月', '9月', '10月', '11月', '12月'],
					series: [{
						name: '前端',
						data: [100, 80, 95, 150, 112, 132, 151],
						color: '#facc14'
					}, {
						name: '后台',
						data: [70, 40, 65, 100, 44, 68, 78],
						color: '#2fc25b'
					}, {
						name: '游戏',
						data: [35, 20, 25, 37, 4, 20, 39],
						color: '#1890ff'
					}]
				},
				// 折线图
				canvasAreaPublishArticleTotal: {
					categories: ['8.1', '8.8', '8.15', '8.23', '8.30', '9.6', '9.13'],
					series: [{
						name: '前端',
						data: [10, 20, 25, 40, 45, 60, 151],
						color: '#facc14'
					}, {
						name: '后台',
						data: [70, 90, 100, 102, 110, 130, 140],
						color: '#ff5500'
					}, {
						name: '游戏',
						data: [15, 40, 50, 66,70, 80, 90],
						color: '#7cffb1'
					}]
				},
				canvasAreaPublishWebFont: {
					categories: ['8.1', '8.8', '8.15', '8.23', '8.30', '9.6', '9.13'],
					series: [{
						name: '面积',
						data: [10, 1, 4, 34,7, 3, 11],
						color: '#facc14'
					}, {
						name: '学习路线',
						data: [70, 90, 100, 10, 10, 14, 30],
						color: '#ffaa7f'
					}, {
						name: '文章',
						data: [15, 40, 50, 66,70, 80, 90],
						color: '#e51aff'
					}]
				}

			};
		},
		onLoad() {
			_self = this;
			this.cWidth = uni.upx2px(750);
			this.cHeight = uni.upx2px(420);
			this.getServerData();
		},
		computed: {

		},
		mounted() {

		},
		methods: {
			getServerData() {
				_self.showAreaPublishArticle("canvasAreaPublishArticle", this.canvasAreaPublishArticle);
				_self.showAreaPublishArticle("canvasAreaPublishArticleTotal", this.canvasAreaPublishArticleTotal);
				_self.showAreaPublishArticle("canvasAreaPublishArticleFonWeb", this.canvasAreaPublishWebFont);
				// _self
			},

			
			touchColumn(e) {
				canvaColumn.showToolTip(e, {
					format: function(item, category) {
						if (typeof item.data === 'object') {
							return category + ' ' + item.name + ':' + item.data.value
						} else {
							return category + ' ' + item.name + ':' + item.data
						}
					}
				});
			},

			// 折线图
			showAreaPublishArticle(canvasId, chartData) {
				canvasArea[canvasId] = new uCharts({
					$this: _self,
					canvasId: canvasId,
					type: 'area',
					fontSize: 11,
					legend: true,
					dataLabel: false,
					dataPointShape: true,
					background: '#FFFFFF',
					pixelRatio: _self.pixelRatio,
					categories: chartData.categories,
					series:chartData.series,
					animation: true,
					xAxis: {
						type: 'grid',
						gridColor: '#CCCCCC',
						gridType: 'dash',
						dashLength: 8
					},
					yAxis: {
						gridType: 'dash',
						gridColor: '#CCCCCC',
						dashLength: 8,
						splitNumber: 5,
						min: 10,
						max: 180,
					},
					width: _self.cWidth * _self.pixelRatio,
					height: _self.cHeight * _self.pixelRatio,
					extra: {
						area: {
							type: 'straight',
							opacity: 0.2,
							addLine: true,
							width: 2
						}
					}
				});
			},
			
			touchArea(e,canvasId) {
				console.log(e)
				canvasArea[canvasId].showToolTip(e, {
					format: function(item, category) {
						return item.name + ' ' + category + ' ' + ':' + item.data
					}
				});
			},

			

		}
	};
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
