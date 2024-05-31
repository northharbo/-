<template>
	<view class="content">
		<nav-bg title="题库"></nav-bg>
		<view class="main">
		<scroll-view scroll-y="true" class="scroll-Y">
			<view class="problem">
				<view class="problem-header">
					<view class="mentalTitle text-xl text-black text-bold">
						<text>{{ problemList[currentIndex].number || '' }}</text>
						<text>、</text>
						<text>{{ problemList[currentIndex].title || '' }}</text>
					</view>
				</view>
				
				<view class="problem-btm" v-if="isShowAnswer">
					<view class="answer-des">
						<view class="cu-bar justify-center bg-white">
							<view class="action sub-title">
								<text class="text-xl text-bold text-blue">参考解析</text>
								<text class="text-ABC text-blue">ReferenceAnswer</text>
								<!-- last-child选择器-->
							</view>
						</view>
						<view class="answer-text">
							<mp-html :content="$marked(problemList[currentIndex].answer)"></mp-html>
						</view>
					</view>
				</view>
				
			</view>
			</scroll-view>
		</view>
		<view class="next-previous" >
			<view class="previous btn" @click="previousQuestion">
				上一题
			</view>
			<view class="show-answer" @click="clickShowAnswerBtn">
				<text class="iconfont icon-icon-83"></text>
				<text v-show="!isShowAnswer">显示答案</text>
				<text v-show="isShowAnswer">关闭答案</text>
			</view>
			<view class="next btn" @click="nextQuestion">
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
	import marked from 'marked' //转换Markdown格式富文本
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
				problemList: [
					{
						id:1,
						number:1,
						title:"解释一下什么是BFC",
						answer:`BFC 即 Block Formatting Contexts (块级格式化上下文)，它属于上述定位方案的普通流。

具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

通俗一点来讲，可以把 BFC 理解为一个封闭的大箱子，箱子内部的元素无论如何翻江倒海，都不会影响到外部。`
					},
					{
						id:2,
						number:2,
						title:"如何开启BFC",
						answer:`
1. 根元素（\`<html>\`）
2. 浮动元素（元素的 float 不是 none）
3. 绝对定位元素（元素的 position 为 absolute 或 fixed）
4. 行内块元素（元素的 display 为 inline-block）
5. 表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值）
6. 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
7. 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
8. overflow 计算值(Computed)不为 visible 的块元素
9. display 值为 flow-root 的元素
10. contain 值为 layout、content 或 paint 的元素
11. 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
12. 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）
13. 多列容器（元素的 column-count 或 column-width (en-US) 不为 auto，包括 column-count 为 1）
14. column-span 为 all 的元素始终会创建一个新的BFC，即使该元素没有包裹在一个多列容器中（标准变更，Chrome bug）。

						
						`
					},
					{
						id:3,
						number:3,
						title:"js如何判断数据类型",
						answer:`

1. typeof
> typeof是一个操作符，其右侧跟一个一元表达式，并返回这个表达式的数据类型。返回的结果用该类型的字符串(全小写字母)形式表示，包括number,string,boolean,undefined,object,function,symbol等。

\`\`\`js
alert(typeof "helloworld")    ------------------>"string"     
alert(typeof 123)             ------------------>"number"
alert(typeof [1,2,3])         ------------------>"object"
alert(typeof new Function())  ------------------>"function"
alert(typeof new Date())      ------------------>"object"
alert(typeof new RegExp())    ------------------>"object"
alert(typeof Symbol())        ------------------>"symbol"
alert(typeof true)            ------------------>"true"
alert(typeof null)            ------------------>"object"
alert(typeof undefined)       ------------------>"undefined"
alert(typeof 'undefined')     ------------------>"string"
\`\`\`		
![](https://img-blog.csdnimg.cn/20200309170605388.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0NsYXJhX0c=,size_16,color_FFFFFF,t_70)

2. instanceof
  instanceof用来判断A是否为B的实例，表达式为：A instanceof B，如果A是B的实例，则返回true，否则返回false。instanceof检测的是原型，内部机制是通过判断对象的原型链中是否有类型的原型。
3. constructor
  当一个函数F被定义时，JS引擎会为F添加prototype原型，然后在prototype上添加一个constructor属性，并让其指向F的引用，F利用原型对象的constructor属性引用了自身，当F作为构造函数创建对象时，原型上的constructor属性被遗传到了新创建的对象上，从原型链角度讲，构造函数F就是新对象的类型。这样做的意义是，让对象诞生以后，就具有可追溯的数据类型。
4. Object.prototype.toString()
  toString()是Object的原型方法，调用该方法，默认返回当前对象的[[Class]]。这是一个内部属性，其格式为[object Xxx],其中Xxx就是对象的类型。
  对于Object对象，直接调用toString()就能返回[object Object],而对于其他对象，则需要通过call、apply来调用才能返回正确的类型信息。

							`
					}
				],
				isShowAnswer:false, // 是否显示答案
				currentIndex:0,

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
			},
			//  显示答案
			clickShowAnswerBtn(){
				this.isShowAnswer = !this.isShowAnswer
			},
			//  上一题
			previousQuestion(){
				this.currentIndex--;
				if(this.currentIndex < 0){
					this.currentIndex = 0
				}
			},
			//  下一题
			nextQuestion(){
				this.currentIndex++;
				this.isShowAnswer = false
				if(this.currentIndex == this.problemList.length){
					this.currentIndex = this.problemList.length -1
				}
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
			
		}

	}
	.problem{
		padding: 10rpx 20rpx; 
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}

	.problem-btm{
		padding-top: 40rpx;
		padding: 40rpx 20rpx;
	}


	//  上一题下一题
	.next-previous {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		// margin: ;
		padding: 20rpx;
		box-sizing: border-box;
		.show-answer{
			margin:  0 auto;
			// margin-top: 40rpx;
			padding: 10rpx 20rpx;
			border-radius: 20rpx;
			color: #FFFFFF;
			background: rgba($color: #34a7ff, $alpha: 1.0);
			.iconfont{
				// color: #007AFF;
				padding-right: 30rpx;
			}
		}
		.btn {
			// width: 100rpx;
			padding: 10rpx 40rpx;
			background: rgba($color: #60a8ff, $alpha: 1.0);
			color: #fff;
			border-radius: 20rpx;

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
