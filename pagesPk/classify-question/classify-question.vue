<template>
	<view class="content">
		<nav-bg title="专项训练"></nav-bg>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<view class="classify" >
						<view class="classify-item" v-for="(classify,index) in classifyList" :key="index" @click="navToClassifyQuestion(classify)">
							<view class="left" :style="{background:colorList[index % (colorList.length -1) ].background}">
							<!-- <view class="left" :style="{background:'rgba('+((index * 40 +128) % 255)+','+((index*30 +200 ) % 255)+','+((index *30 + 50) % 128)+',0.5)'}"> -->
							<!-- <view class="left" :style="{background:'rgba(89,147,255,'+((classifyList.length - index -1)% classifyList.length / 10 + 0.3)+')'}"> -->
								{{classify.tag.substr(0,2)}}
								<!-- {{index+1}} -->
							</view>
							<view class="title">
								{{classify.tag}}
							</view>
							<view class="count">
								{{classify.count}}
							</view>
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
	export default {
		data() {
			return {
				colorList:[
					{
						"background": "linear-gradient(45deg, #fad0c4 0%, #ffd1ff 100%)"
					},
					{
						"background": " linear-gradient(45deg, #fbc2eb 0%, #a6c1ee 100%);"
					},
					{
						"background": " linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);"
					},
					{
						"background": " linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);)"
					},
					{
						"background": "linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);"
					},
					{
						"background": "linear-gradient(to right, #4facfe 0%, #00f2fe 100%);"
					},
					{
						"background": "linear-gradient(45deg, #5ee7df 0%, #b490ca 100%);"
					},
					{
						"background": "linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);)"
					},
					{
						"background": " linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);"
					},
					{
						"background": "linear-gradient(to right, #74ebd5 0%, #9face6 100%);"
					},
					
				],
				
				classifyList:[
					{
						id:1,
						tag:"HTML",
						count:23,
					},
					{
						id:2,
						tag:"javascript",
						count:23,
					},
					{
						id:3,
						tag:"CSS",
						count:23,
					},
					{
						id:4,
						tag:"HTTP",
						count:23,
					},
					{
						id:5,
						tag:"Node.js",
						count:23,
					},
					{
						id:6,
						tag:"Vue",
						count:23,
					},
					{
						id:6,
						tag:"数据类型",
						count:23,
					},
					{
						id:1,
						tag:"HTML",
						count:23,
					},
					{
						id:2,
						tag:"javascript",
						count:23,
					},
					{
						id:3,
						tag:"CSS",
						count:23,
					},
					{
						id:4,
						tag:"HTTP",
						count:23,
					},
					{
						id:5,
						tag:"Node.js",
						count:23,
					},
					{
						id:6,
						tag:"Vue",
						count:23,
					},
					{
						id:6,
						tag:"数据类型",
						count:23,
					},
					
					{
						id:2,
						tag:"javascript",
						count:23,
					},
					{
						id:3,
						tag:"CSS",
						count:23,
					},
					{
						id:4,
						tag:"HTTP",
						count:23,
					},
					{
						id:5,
						tag:"Node.js",
						count:23,
					},
					{
						id:6,
						tag:"Vue",
						count:23,
					},
					{
						id:6,
						tag:"数据类型",
						count:23,
					},
					{
						id:1,
						tag:"HTML",
						count:23,
					},
					{
						id:2,
						tag:"javascript",
						count:23,
					},
					{
						id:3,
						tag:"CSS",
						count:23,
					},
					{
						id:4,
						tag:"HTTP",
						count:23,
					},
					{
						id:5,
						tag:"Node.js",
						count:23,
					},
					{
						id:6,
						tag:"Vue",
						count:23,
					},
					{
						id:6,
						tag:"数据类型",
						count:23,
					},
					
				]
				
			
			};
		},
		methods:{
			navToClassifyQuestion(data){
				uni.navigateTo({
					url:"../classify-question-answer/classify-question-answer?data="+JSON.stringify(data)
				})
			}
		}
	}
</script>

<style lang="scss" scoped >
.content{
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	
	.main{
		flex: 1;
		overflow: hidden;
		.scroll-Y{
			height: 100%;
		}
	}
}
.classify{
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
	.classify-item{
		width: 48%;
		padding: 10rpx 20rpx ;
		margin:10rpx 1%;
		display: flex;
		align-items: center;
		background: #FFFFFF;
		border-radius: 10rpx;
		.left{
			border-radius: 50%;
			width: 86rpx;
			height: 86rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32rpx;
			background: #6cc0ff;
			color: #FFFFFF;
			margin-right: 10rpx;
		}
		.count{
			color: #CCCCCC;
			margin-left: auto;
		}
	}
	
}
</style>
