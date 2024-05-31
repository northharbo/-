<template>
	<view class="content">
		<custom-back></custom-back>
		<image class="bg-img" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/b3c755c2-2a67-42ee-8528-312763e907ed.jpeg" mode="aspectFill"></image>
		<view class="main">
			<view class="info-card">
				<view class="avater">
					<image src="http://img2.woyaogexing.com/2017/07/04/f9b43b2c25f31a56!400x400_big.jpg" mode="widthFix"></image>
				</view>
				<view class="info-list">
					<view class="name">
						晴栀sunset
					</view>
					<view class="score icon-text">
						<view class="icon-img">
							<image class="icon" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/36f7c8d9-883e-43bd-bbc1-497898d26bc7.png" mode=""></image>
							
						</view>
						<text>能力值：23</text>
					</view>
					<view class="pk">
						<view class="pk-count icon-text">
							<view class="icon-img">
								<image class="icon" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/d7c5f8d4-a950-449a-b399-a76c204b936a.png" mode=""></image>
							</view>
							<text>对战：10 局</text>
						</view>
						<view class="pk-ok icon-text">
							<view class="icon-img">
								<image  class="icon" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/bf91032d-ab61-42bf-80e1-f4554a201a56.png" mode="widthFix"></image>
							</view>
							<text>胜利：5 局</text>
						</view>
					</view>
					
				</view>
			</view>
			<view class="collect-error">
				<view class="collect opt">
					<view class="icon">
						<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/43670f13-8eef-47e3-b98a-98ec82d181ba.png" mode="widthFix"></image>
					</view>
					<view class="name">
						<view>收藏</view>
						<view>34</view>
					</view>
				</view>
				<view class="line">
					
				</view>
				<view class="error opt">
					<view class="icon">
						<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/acd43ede-8983-4190-9758-053c8b3cc100.png" mode="widthFix"></image>
					</view>
					<view class="name">
						<view>错题</view>
						<view>34</view>
					</view>
				</view>
			</view>
			<view class="options">
				<view class="ops1 ops-more">
					<view class="op1-ch ops-more-ch">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/d7883f35-4ff2-4543-9d52-81259600136e.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							前端
						</view>
					
					</view>
					<view class="op1-ch ops-more-ch" @click="navToProblemTotal">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/e0bec9f8-c06e-4b19-a620-ac74020f0451.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							题库
						</view>
					</view>
					<view class="op1-ch ops-more-ch" @click="navToClassify">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/648453b1-1275-4efb-8123-e0b674987d95.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							专项训练
						</view>
					</view>
					<view class="op1-ch ops-more-ch" @click="navToEssayQuestion">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/f1bf710b-ad0c-468e-b50d-c67b143ac0d3.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							问答题
						</view>
					</view>
					
				</view>
				<view class="ops2">
					<view class="op2-ch random" @click="doProblem">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/b40c8953-ae3d-4b46-a324-f55221e7667f.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							随机答题
						</view>
					</view>
					<view class="op2-ch pk">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/1f5a77c9-d030-4032-b0ce-71b31d92f777.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							好友对战
						</view>
					</view>
				</view>
				<view class="ops3 ops-more">
					
					<view class="op3-ch ops-more-ch" @click="navToGradeTabel()">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/c9393300-8e1d-44d3-9fda-55a66055669d.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							成绩单
						</view>
					</view>
					<view class="op3-ch ops-more-ch" @click="navToRank">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/dc9b0654-5610-4cd8-81b8-031017da5721.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							排行榜
						</view>
					</view>
					<view class="op3-ch ops-more-ch">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/c54f499e-37fb-4f1d-a791-995d4219353c.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							数据报表
						</view>
					</view>
					<view class="op3-ch ops-more-ch">
						<view class="icon">
							<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/9a158a85-5cf3-4e76-85fd-7dad5cda8b5f.png" mode="widthFix"></image>
						</view>
						<view class="op-name">
							设置
						</view>
					</view>
				</view>
			</view>
			
		</view>
		
		<view class="tabbar">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			doProblem(){
				uni.navigateTo({
					url:"/pagesPk/do-problem/do-problem"
				})
			},
			navToRank(){
				uni.navigateTo({
					url:'/pagesPk/rank/rank'
				})
			},
			// 题库
			navToProblemTotal(){
				uni.navigateTo({
					url:'/pagesPk/total-problem/total-problem'
				})
			},
			// 问答题
			navToEssayQuestion(){
				uni.navigateTo({
					url:"/pagesPk/essay-question/essay-question"
				})
			},
			navToGradeTabel(){
				uni.navigateTo({
					url:'../grade-tabel/grade-tabel'
				})
			},
			//专项训练
			navToClassify(){
				uni.navigateTo({
					url:"../classify-question/classify-question"
				})
			}
		}
	}
</script>

<style lang="scss">
.content{
	height: 100%;
	width: 100%;
	position: relative;
	
	.bg-img{
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
	}
}
.main{
	padding-top: 150rpx;
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	// border: 10rpx solid red;
	.info-card{
		width: 100%;
		padding: 40rpx 5%;
		// height: 300rpx;
		background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/3ba7e74b-de1a-46a5-b5d0-88578598c5ec.png);
		background-size: 100% 100%;
		display: flex;
		flex-direction: row;
		.avater{
			width: 168rpx;
			height: 168rpx;
			image{
				width: 168rpx;
				height: 168rpx;
				border-radius: 50%;
			}
		}
		.info-list{
			padding-left: 40rpx;
			flex: 1;
			display: flex;
			flex-direction: column;
			.name{
				font-size: 42rpx;
				padding-bottom: 10rpx;
			}
			.icon{
				width: 38rpx;
				height: 38rpx;
				margin-right: 10rpx;
			}
			.icon-text{
				display: flex;
				padding-right: 20rpx;
				align-items: center;
			}
			.pk{
				display: flex;
			}
		}
		
	}
	
	// 收藏+错题
	.collect-error{
		display: flex;
		height: 100rpx;
		padding:80rpx 20rpx;
		// background: ;
		// background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/94f52838-8a5f-4116-93e7-ed8a9a0c1250.gif),linear-gradient(top,rgba(255, 255, 255, 1),rgba($color: #54aeea, $alpha: 1));
		background-size: 100% 100%,100% 100%;
		background-position:0 0, cover;
		background-blend-mode: screen;
		
		.line{
			// height: 100%;
			width: 4rpx;
			background: rgba($color: #5af7ff, $alpha: 0.5);
		}
		.opt{
			flex: 1;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			.icon{
				margin-right: 20rpx;
				image{
					width: 86rpx;
					height: 86rpx;
					
				}
			}
			.name{
				text-align: center;
				line-height: 1.4rem;
				color: #ffffff;
				
			}
		}
	}
	//  操作按钮
	.options{
		margin: 0 40rpx;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		height: 900rpx;
		.ops-more{
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			justify-content: space-around;
			.ops-more-ch{
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				image{
					width: 64rpx;
					height: 64rpx;
				}
				// width: 100rpx;
				// height: 100rpx;
				// // background: blue;
				// border-radius: 50%;
			}
		}
		.op-name{
			color: #FFFFFF;
			padding-top: 5rpx;
		}
		.ops2{
			flex: 1;
			display: flex;
			justify-content: space-evenly;
			flex-direction: column;
			align-items: center;
			.op2-ch{
				width: 200rpx;
				height: 200rpx;
				border-radius: 50%;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				image{
					width: 64rpx;
					height: 64rpx;
				}
			}
			.random{
				background: rgba($color: #2aa3ff, $alpha: 1);
				box-shadow: 0 0 0rpx 20rpx rgba($color:  #53afff, $alpha: 0.8), 0 0 0 40rpx rgba($color:  #53c3ff, $alpha: 0.6);
				animation: PK 4s ease infinite;
				
				
			}
			.pk{
				background: rgba($color: #e5d51f, $alpha: 0.9);
				box-shadow: 0 0 0rpx 20rpx rgba($color: #fce145, $alpha: 0.8), 0 0 0 40rpx rgba($color: #f9ff82, $alpha: 0.6);
				animation: PK  2s 1s ease infinite;
				
			}
		}
	}
}

 @keyframes PK {
 	0% {
 		transform: scale(1);
 	}
 
 	50% {
 		transform: scale(1.1);
 	}
 
 	100% {
 		transform: scale(1);
 	}
 }
</style>
