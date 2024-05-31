<template>
	<view class="user-info">
		<view class="card-tag">
			<view class="tag" :style='{background:data.status == true ? "#30de9b":"  #de5656" }'>
				{{data.status == true ?"现":"前" }}
			</view>
		</view>
		<view class="card-hd">
			<view class="card-lf">
				<view class="name card-tag">
					{{data.name}}
				</view>
				<view class="class card-tag">
					{{data.postgraduate}}
				</view>
				<view class="name major">
					{{data.job}}
				</view>
			</view>
			<view class="hd-rg">
				<avater image-size="128"></avater>
			</view>
		</view>
		<view class="card-bottom">
			<view class="tch-des">
				{{data.introduce || ""}}
			</view>
		</view>		
	</view>
	
</template>

<script>
	export default {
		name:"teacher-card",
		props:{
			data:{
				type:Object,
				default(){
					return{
						name:"",
						major:"",
						job:"",
						introduce:""
					}
				}
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.user-info{
	margin: 20rpx 20rpx;
	background: rgba($color: #45fff0, $alpha: 0.2);
	padding: 15rpx 0rpx;
	
	border-radius: 20rpx;
	background: url(https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/c1482601-69f3-4af5-91f7-b855031236c5.jpeg);
	background-size: 100% 100%;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	min-height: 200px;
	.card-tag{
		display: flex;
		// padding-right: 20rpx;
		.tag{
			margin-left: auto;
			padding: 5rpx 30rpx;
			// background: rgba($color: #30de9b, $alpha: 1.0);
			border-radius: 20rpx 0 0 20rpx;
			color: #FFFFFF;
			font-weight: bold;
		}
	}
	.card-hd{
		display: flex;
		flex-direction: row;
		padding: 20rpx ;
		.card-lf{
			padding-left: 20rpx;
			.card-tag{
				padding: 10rpx 0;
				color: #FFFFFF;
			}
			.name{
				font-size: 42rpx;
				color: #FFFFFF;
				font-weight: bold;
			}
			.major{
				font-size: 24rpx;
				color: #e8e8e8;
				// font-weight: bold;
			}
		}
		.hd-rg{
			margin-left: auto;
			width: 200rpx;
		}
	}
	.card-bottom{
		padding: 20rpx;
		display: flex;
		width: 100%;
		// border: 1rpx solid red;
		.tch-des{
			padding: 0 20rpx;
			text-indent: 2rem;
			color: #919191;
		}
	}
	
}
</style>
