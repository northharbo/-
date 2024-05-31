<template>
<view class="content">
		<!-- <index-top-nav-bar></index-top-nav-bar> -->
		<nav-bg title="微信授权登录" :is-back="false"></nav-bg>
		<view class="main">
			<view class="head">
				<view class="logo">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/8266fcc8-7332-43e1-9108-edd7b7f585ae.jpg" mode=""></image>
				</view>
				<view class="title">
					JXAU青藤工作室
				</view>
			</view>
			<view class="wechat-login"  @tap="weixinUserLogin">
				<u-icon name="weixin-fill"></u-icon>
				<view class="submit-btn"  size="mini">微信授权登录</view>
			</view>
			</view>
		<u-toast ref="loginToast"  />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scene:""
			};
		},
		onLoad(query) {
			//  获取scene 
			 this.scene = decodeURIComponent(query.scene)
			 // this.weixinUserLogin(scene)
		},
		methods:{
			 weixinUserLogin(){
				 const _this =this;
				 uni.showLoading({
					title:"登录中"
				 })
				wx.login({
					success:async ({code})=> {
						console.log(code)
						try{
							await _this.$httpApi.loginPc({
								code,
								scene:_this.scene
							})
							
						}catch(e){
							
							return
						}
						uni.hideLoading()
						_this.$refs.loginToast.show({
							title: "登录成功",
							type: 'success',
						});
						setTimeout(()=>{
							uni.reLaunch({
								 url: '../index/index'
							});
						},500)
					},
					fail(error){
						uni.hideLoading()
						_this.$refs.loginToast.show({
							title: "登录失败！",
							type: 'error',
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		background: #FFFFFF;
	}
.main{
	display: flex;
	flex-direction: column;
	// justify-content: center;
	align-items: center;
	margin-top: 20%;
	// 头部logo区域
	.head{
		display: flex;
		align-items: center;
		margin-bottom: 100rpx;
		.logo{
			image{
				width: 128rpx;
				height: 128rpx;
				overflow: hidden;
				border-radius: 50%;
			}
		}
		.title{
			font-size: 52rpx;
			font-weight: bold;
			color: #67a9ff;
			padding-left: 20rpx;
		}
	}
	
	.wechat-login{
		display: flex;
		align-items: center;
		padding: 20rpx 160rpx;
		border-radius: 20rpx;
		color: #FFFFFF;
		background: #86bdff;
		
		.u-icon{
			font-size: 48rpx;
			color: #06da62;
		}
		.submit-btn{
			padding-left: 20rpx;
			font-size: 28rpx;
			font-weight: bold;
		}
		
	}
	
}

</style>
