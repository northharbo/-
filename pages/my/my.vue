<!-- 个人中心 -->
<template>
	<view class="content">

		<cat @click.native="clickCat"></cat>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<!-- 顶部背景 -->
					<view class='UCenter-bg'
						:style="'background-image: url(' + pic[topBackGroupImageIndex].link + ');margin-top:-' + CustomBar + 'px;'">
						<view class='space' v-show="spaceShow">
							<view class="stars ">
								<view class="star "></view>
								<view class="star pink "></view>
								<view class="star blue "></view>
								<view class="star yellow "></view>
							</view>
						</view>
						<block>
							<view class='text-center' v-if="loginStatus">
								<!-- <view class="cu-avatar2 round margin-right-sm shadow-blur bg-img" style="background-image:url(http://cdn.zhoukaiwen.com/head1.jpg);">
								</view> -->

								<view class="cu-avatar2 round xl margin-right-sm shadow-blur-lg bg-img open-data"
									style="overflow: hidden;"
									
									>
									<view class="" >
										<image :src="userInfo.avatarUrl" mode=""></image>
									</view>
								</view>
								<view class="padding text-blue text-xl text-bold" >
									<text>你好，{{userInfo.nickname}}</text>
								</view>

							</view>
							<view class='text-center' v-else>
		
								<view class="cu-avatar2 round xl margin-right-sm shadow-blur-lg bg-img open-data"
									style="overflow: hidden;" @click="userLogin">	
									<view class="avater">
										点击登录
									</view>	
								</view>
							
							</view>
						</block>

						<image
							src='https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/94f52838-8a5f-4116-93e7-ed8a9a0c1250.gif'
							mode='scaleToFill' class='gif-wave'></image>
					</view>

					<block>
						<!-- <button type="default" @click="userLogin"> 登录</button> -->
						<view class='padding flex text-center text-grey bg-white shadow-warp-my'>
							<!-- <view class='flex flex-sub flex-direction'>
								<view class="text-xxl text-red">665</view>
								<view class="margin-top-sm">
									<text class='cuIcon-like'></text> 点赞</view>
							</view> -->
							<view class='flex flex-sub flex-direction solid-right' @click="navToCollect">
								<view class="text-xxl text-orange">
									<!-- {{collectionCount}} -->
									<u-count-to color="#ffaa00" class="text-xxl text-blue" :start-val="0"
										:end-val="collectionCount"></u-count-to>
								</view>
								<view class="margin-top-sm">
									<text class='cuIcon-favor'></text>收藏
								</view>
							</view>
							<view class='flex flex-sub flex-direction solid-right' @click="navToViewHistory">
								<view class="text-xxl text-blue">
									<u-count-to color="#ff007f" class="text-xxl text-blue" :start-val="0"
										:end-val="historyCount"></u-count-to>

									<!-- {{historyCount}} -->

								</view>
								<view class="margin-top-sm">
									<text class='cuIcon-attention'></text>浏览
								</view>
							</view>
						</view>
						<view
							class="cu-list menu card-menu margin-top-lg margin-bottom-sm shadow-shop bg-white text-black my-radius sm-border">
							<view class="cu-item" @tap="showModal" data-target="Modal">
								<view class='my-btn-item'>
									<image src='../../static/me/icon/zhuti.png' class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>主题切换</text>
								</view>
								<view class='action'>
									<view class="cu-capsule radius">
										<view class='cu-tag bg-gradual-blue'>
											<view style="clear: both;"></view>
										</view>
										<view class="cu-tag line-blue">
											{{picName}}
										</view>
									</view>
								</view>
							</view>


							<view class="cu-item">
								<button class='my-btn-item cu-btn' @click="navToMyInfo">
									<image src='../../static/me/icon/bianqian.png' class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>修改个人信息</text>
								</button>
							</view>
							<view class="cu-item">
								<button class='my-btn-item cu-btn' @click="openTaskNotie">
									<image
										src='https://vkceyugu.cdn.bspapp.com/VKCEYUGU-87d8bdc7-ca98-47a8-86ca-374392c30b11/8531bc69-3b12-4a91-933c-025e47cd72e6.png'
										class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>开启考核通知</text>
								</button>
							    <view class="sub-status" >
							    	{{subStatus.taskStatus}}
							    </view>
							</view>
							<view class="cu-item">
								<button class='my-btn-item cu-btn' @click="openMarkedNotie">
									<image
										src='https://vkceyugu.cdn.bspapp.com/VKCEYUGU-87d8bdc7-ca98-47a8-86ca-374392c30b11/b23b18d7-d45d-4966-9231-3f7c1cd41e4b.png'
										class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>开启批阅通知</text>
								</button>
								<view class="sub-status">
									{{subStatus.markStatus}}
								</view>
							</view>
							<view class="cu-item">
								<button class='my-btn-item cu-btn' @click="openSubscriptions">
									<image
										src='https://vkceyugu.cdn.bspapp.com/VKCEYUGU-87d8bdc7-ca98-47a8-86ca-374392c30b11/383d7c38-080f-4fa3-a0a8-c961905949b6.png'
										class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>订阅设置</text>
								</button>
							</view>
							<view class="cu-item">
								<button class='my-btn-item cu-btn' open-type="share">
									<image src='../../static/me/icon/lvhang.png' class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>分享小程序</text>
								</button>
							</view>
						</view>

						<view
							class="cu-list menu card-menu margin-top-lg margin-bottom-lg shadow-shop bg-white text-black my-radius sm-border">

							<view class="cu-item">
								<button class='my-btn-item cu-btn' hover-class='none' open-type="contact">
									<image src='../../static/me/icon/xiaoxi.png' class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>联系我们</text>
								</button>
							</view>
							<view class="cu-item" @click="callPhoneNumber" data-number="18629591093">
								<view class='my-btn-item'>
									<image src='../../static/me/icon/dengta.png' class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>技术支持</text>
								</view>
								<view class="action">
									<view class="cu-tag round bg-blue light">188 7097 9231</view>
								</view>
							</view>

							<view class="cu-item">
								<button class='my-btn-item cu-btn' open-type="feedback">
									<image src='../../static/me/icon/chucuo.png' class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>问题反馈</text>
								</button>
							</view>
							<view class="cu-item">
								<button class='my-btn-item cu-btn' @click="goAboutMe">
									<image src='../../static/me/icon/xiaoxi.png' class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>关于我们</text>
								</button>
							</view>
							<view class="cu-item">
								<button class='my-btn-item cu-btn' @click="logout">
									<image src='../../static/logout.png' class='png' mode='aspectFit'></image>
									<text class='text-lg margin-sm'>退出登录</text>
								</button>
							</view>
						</view>

					</block>

					<white-space></white-space>
					<safe-footer></safe-footer>
				</view>
			</scroll-view>
		</view>
		<dong-mouse top="-300px" :animationBG="false"></dong-mouse>


		<!-- 弹窗确认 -->
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog" style="padding: 300rpx 0 70rpx;">
				<view class="modal_bg"></view>
				<view class="modal_main">
					<view class='nav-list margin-top'>
						<view :class="'nav-li bg-zt' + (index+1)" v-for="(item, index) in inter" :key="index"
							@click="switchImage(index,item.name)">
							<view class="nav-name">{{item.name}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<u-toast ref="uToast" />
		<u-modal v-model="showCatModel" :show-title="false" :show-cancel-button="false"
			:content="showModelList[currentCat]">
		</u-modal>
	</view>
</template>

<script>
	import subConfig from './subConfig.js'
	import {
		requestSubscribe
	} from '../../utils/tools/weixin_api.js'
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default {

		data() {
			return {
				// Custom: this.Custom,
				// CustomBar: this.CustomBar,
				spaceShow: true,
				modalName: null,
				showCatModel: false,
				currentCat: 0,
				subStatus:{
					taskStatus:"未订阅",
					markStatus:"未订阅",
				},
				collectionCount: 0, // 收藏数量
				historyCount: 0, // 浏览文章
				showModelList: [
					"🙈 讨厌啦~ 别戳我呀~~",
					"😺 开开心心哦 ！",
					"💖 感谢你的喜欢",
					"🤩 欢迎大佬啦  ",
					"🌹 你好坏哦 ，别点啦 ",
				],
				picName: '流星之夜',
				pic: [{
					link: 'https://cdn.zhoukaiwen.com/zjx_me_bg1.jpeg',
					name: '春天'
				}, {
					link: 'https://cdn.zhoukaiwen.com/zjx_me_bg2.jpeg',
					name: '夏天'
				}, {
					link: 'https://cdn.zhoukaiwen.com/zjx_me_bg3.jpeg',
					name: '秋天'
				}, {
					link: 'https://cdn.zhoukaiwen.com/zjx_me_bg4.jpeg',
					name: '冬天'
				}, {
					link: 'https://cdn.zhoukaiwen.com/zjx_me_bg5.jpeg',
					name: '幽静'
				}, {
					link: 'https://cdn.zhoukaiwen.com/zjx_me_bg6.jpg',
					name: '天空'
				}],
				topBackGroupImageIndex: 5,
				inter: [{
					title: 'mimicry',
					name: '活力春天',
					color: ''
				}, {
					title: 'theme',
					name: '清爽夏日',
					color: ''
				}, {
					title: 'theme',
					name: '金秋之韵',
					color: ''
				}, {
					title: 'theme',
					name: '冬日之阳',
					color: ''
				}, {
					title: 'theme',
					name: '幽兰星空',
					color: ''
				}, {
					title: 'theme',
					name: '流星之夜',
					color: ''
				}]
			}
		},
		computed: {
			...mapState(['userInfo','loginStatus'])
		},
		// 分享小程序
		onShareAppMessage() {
			return {
				title: "JXAU 青藤工作室",
				imageUrl: "https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/fff8189d-4202-4331-9c72-8168a3cb7dc4.png",
				path: '/pages/index/index',
			};
		},
		watch: {
			topBackGroupImageIndex(val) {
				console.log(val)
				if (val == 4 || val == 5) {
					this.spaceShow = true;
				} else {
					this.spaceShow = false;
				}
			}
		},
		mounted() {
			// uni.showToast({
			//     title: '暂未开放,敬请期待',
			// 	icon: 'none',
			//     duration: 2000
			// });
		},
		onLoad() {
			// this.initData()
			this.getSubStaus()
		},
		onShow() {
			this.initData()
			this.getSubStaus()
		},
		methods: {
			...mapActions(['setUserInfo', 'setToken', 'setAccountAdmim',"login","logout"]),
			initData() {
				this.getArtCollectionCount();
				this.getViewHistoryCount()
			},
			//  获取订阅状态
			getSubStaus() {
				const _this = this;
				wx.getSetting({
					withSubscriptions: true,
					success(res) {
						console.log(res)
						_this.subStatus.taskStatus = res.subscriptionsSetting[subConfig.taskSub] ==  "accept" ? "已订阅" : "未订阅";
						_this.subStatus.markStatus = res.subscriptionsSetting[subConfig.markedSub] ==  "accept" ? "已订阅" : "未订阅";
						
					}
				})
			},

			//  获取收藏数量
			async getArtCollectionCount() {
				const {
					data: res
				} = await this.$httpApi.getCollectionCount()
				this.collectionCount = res

			},
			// 获取浏览记录量
			async getViewHistoryCount() {
				const {
					data: res
				} = await this.$httpApi.getViewHistoryCount();
				this.historyCount = res
			},

			getGitee() {
				uni.setClipboardData({
					data: 'https://gitee.com/kevin_chou',
					success: function() {
						console.log('success');
					}
				});
			},
			switchImage(index, name) {
				this.topBackGroupImageIndex = index;
				this.modalName = null;
				this.picName = name;
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			showGitee(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},


			//拨打固定电话
			callPhoneNumber() {
				uni.makePhoneCall({
					phoneNumber: "18870979231",
				});
			},
			//  跳转编辑信息
			navToMyInfo() {
				uni.navigateTo({
					url: "/pagesTool/edit-userinfo/edit-userinfo"
				})
			},
			//  关于我们
			goAboutMe() {
				uni.navigateTo({
					url: '/pages/about-us/about-us'
				})
			},
			//  点击cat
			clickCat() {
				this.currentCat++
				this.showCatModel = true
				if (this.currentCat > 3) {
					this.currentCat = 0
				}
			},
			//  跳转至我的收藏
			navToCollect() {
				uni.navigateTo({
					url: "/pagesMy/collect-article/collect-article"
				})
			},
			//  跳转至我的收藏
			navToViewHistory() {
				uni.navigateTo({
					url: "/pagesMy/view-history/view-history"
				})
			},
			// 微信登录
			weChatLogin(user) {
				const _this = this
				uni.showLoading({
					title: "登录中"
				})
				wx.login({
					success: async ({
						code
					}) => {

						let formData = {
							code,
						}
						if (user) {
							formData.user = user
						}

						const {
							data: res,
							token
						} = await _this.$httpApi.userLogin({
							code,
							user
						})
						_this.login({
							userInfo:res,
							token:token
						})
						_this.$forceUpdate()
						_this.initData()
						uni.hideLoading()
						_this.$refs.uToast.show({
							title: '登录成功',
							type: 'success',
						})

					},
					fail(err) {
						console.log('code获取失败', err)
						_this.$refs.uToast.show({
							title: err,
							type: 'errot',
						})
					}
				})
			},
			//  开启考核发布通知
			openTaskNotie() {
				const _this = this;
				
				if (!this.userInfo.grade || this.userInfo.grade == "") {
					return uni.showModal({
						title: "提醒",
						content: "您未填写年级，请完善信息！",
						confirmText: "完善",
						cancelText: "取消订阅",
						success: () => {
							_this.navToMyInfo()
						}
					})
				}
				wx.requestSubscribeMessage({
					tmplIds: [subConfig.taskSub],
					success(res) {
						console.log(res)
						_this.$refs.uToast.show({
							title: '开启成功,考核发布将通知您',
							type: 'success',
						})
					}
				})
				// requestSubscribe(subConfig.taskSub)
				// console.log(requestSubscribe)
				// wx.getSetting({
				//   withSubscriptions: true,
				//   success (res) {
				//       if(res.subscriptionsSetting[subConfig.taskSub] === "reject"){
				// 		uni.showModal({
				// 			title:"提示",
				// 			content:"你已经拒绝订阅消息",
				// 			confirmText:"开启",
				// 			cancelText:"取消",
				// 			success() {
				// 				uni.openSetting({
				// 					success() {
				// 						wx.requestSubscribeMessage({
				// 						  tmplIds: [subConfig.taskSub],
				// 						  success (res) {
				// 							  _this.$refs.uToast.show({
				// 							  	title: '开启成功，考核发布将通知您',
				// 							  	type: 'success',
				// 							  })
				// 						  }
				// 						})
				// 					}
				// 				})
				// 			}
				// 		})

				// 	}else{
				// 		_this.$refs.uToast.show({
				// 			title: '您已开启',
				// 			type: 'success',
				// 		})
				// 	}
				//   }
				// })

			},
			// 开启考核批阅通知
			openMarkedNotie() {
				// H9tgrxuTyQTvD89pk7yLlNOZBZRsVwXwzgkOJOpBork
				const _this = this
				if (!this.userInfo.grade|| this.userInfo.grade == "") {
					return uni.showModal({
						title: "提醒",
						content: "您未填写年级，请完善信息！",
						confirmText: "完善",
						cancelText: "取消订阅",
						success: () => {
							_this.navToMyInfo()
						}
					})
				}
				wx.requestSubscribeMessage({
					tmplIds: [subConfig.markedSub],
					success(res) {
						_this.$refs.uToast.show({
							title: '开启成功,考核批阅将通知您',
							type: 'success',
						})
					}
				})
			},

			openSubscriptions() {
				wx.openSetting({
					success(res) {
						console.log(res.authSetting)
						// res.authSetting = {
						//   "scope.userInfo": true,
						//   "scope.userLocation": true
						// }
					}
				})
			},

			//  userLogin 用户登录
			async userLogin() {
				const _this = this
				// console.log(1,this.userInfo)
				if (this.userInfo.id) {
					this.weChatLogin()
				} else {
					wx.getUserProfile({
						desc: '授权登录',
						success(val) {
							console.log(val)
							const {
								userInfo
							} = val
							_this.weChatLogin(userInfo)
						},
						fail(err) {
							console.log('用户信息获取失败', err);
							_this.$refs.uToast.show({
								title: '用户信息获取失败' + err,
								type: 'errot',
							})
						}
					})
				}


			}
		}
	}
</script>

<style lang="scss" scoped>
	
	//  订阅状态
	.sub-status{
		flex-shrink: 0;
		color: #999999;
	}
	.avater {
		width: 100%;
		height: 100%;
		font-size: 24rpx;
		color: #007AFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.swrap {
		overflow: hidden;
		height: 100%;
	}

	.UCenter-bg {
		background: #fff;
		background-size: 100% 100%;
		/* background-size: cover; */
		height: 550rpx;
		display: flex;
		justify-my-btn-item: center;
		padding-top: 40rpx;
		overflow: hidden;
		position: relative;
		flex-direction: column;
		align-items: center;
		color: #fff;
		font-weight: 300;
		text-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
	}

	.UCenter-bg text {
		opacity: 0.8;
	}

	.UCenter-bg image {
		width: 200rpx;
		height: 200rpx;
	}

	.UCenter-bg .gif-wave {
		position: absolute;
		width: 100%;
		bottom: 0;
		left: 0;
		z-index: 99;
		mix-blend-mode: screen;
		height: 100rpx;
	}


	// 头像
	.cu-avatar2 {

		font-variant: small-caps;
		margin: 40px;
		padding: 0;
		display: inline-flex;
		text-align: center;
		justify-my-btn-item: center;
		align-items: center;
		background: #ffffff;
		color: #fff;
		white-space: nowrap;
		position: relative;
		width: 150rpx;
		height: 150rpx;
		background-size: cover;
		background-position: center;
		vertical-align: middle;
		font-size: 1.5em;
		z-index: 99;
	}

	.name {
		text-shadow: 2px 2px 1px #2f9bfe;
	}

	.dialog2 {
		background: none;
	}

	.saicode {
		background-size: 100% 100%;
		-moz-background-size: 100% 100%;
	}

	.img-big image {
		top: -40px;
		width: 280rpx;
		height: 280rpx;
	}


	.shadow-me {
		box-shadow: 0rpx 0rpx 100rpx 0rpx rgba(0, 0, 0, 0.1);
	}

	.tn-footerfixed {
		position: fixed;
		width: 100%;
		bottom: 0;
		z-index: 1024;
		box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.35);
	}




	.shadow-shop {
		box-shadow: 0rpx 0rpx 90rpx 0rpx rgba(0, 0, 0, 0.1);
	}

	.cu-item {
		background: #FFFFFF;

		.cu-btn {
			display: flex;
			margin: 0;
			padding: 0;
			width: 100%;
			align-items: flex-start;
			justify-content: flex-start;
		}

		.my-btn-item {
			width: 100%;
			display: flex;
			background: #FFFFFF;
			align-items: center;

			image {
				width: 40rpx;
				height: 40rpx;
			}
		}
	}


	/* 数字背景 */
	.shadow-warp-my {
		position: relative;
		box-shadow: 0 10rpx 10rpx rgba(0, 0, 0, 0.1);
	}

	.shadow-warp-my:before,
	.shadow-warp-my:after {
		position: absolute;
		my-btn-item: "";
		top: 20rpx;
		bottom: 30rpx;
		left: 20rpx;
		width: 50%;
		box-shadow: 0 30rpx 20rpx rgba(0, 0, 0, 0.16);
		transform: rotate(-6deg);
		z-index: -1;
	}

	.shadow-warp-my:after {
		right: 20rpx;
		left: auto;
		transform: rotate(6deg);
	}


	.bg-product {
		background-image: linear-gradient(rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0));
		color: #fff;
	}



	.cu-dialog {
		background: #FFFFFF;
		overflow: visible;
	}

	.modal_bg {
		width: 100%;
		height: 400rpx;
		position: absolute;
		top: -100rpx;
		background-image: url(http://cdn.zhoukaiwen.com/modal_bg.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}

	.modal_main {
		background-color: #FFFFFF;
	}

	/* 主题色 */
	.bg-zt1 {
		color: #fff;
		background: #81d949;
	}

	.bg-zt2 {
		color: #fff;
		background: #b2e6ff;
	}

	.bg-zt3 {
		color: #fff;
		background: #f3cd41;
	}

	.bg-zt4 {
		color: #fff;
		background: #ddecf7;
	}

	.bg-zt5 {
		color: #fff;
		background: #152e9d;
	}

	.bg-zt6 {
		color: #fff;
		background: #0f1358;
	}

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-my-btn-item: space-between;
	}

	.nav-li {
		padding: 22upx;
		border-radius: 12upx;
		width: 45%;
		margin: 0 2.5% 40upx;
		// background-image: url(../../static/me/NyU04x.png);
		background-size: cover;
		background-position: center;
		position: relative;
		z-index: 1;
	}

	.nav-li::after {
		my-btn-item: "";
		position: absolute;
		z-index: -1;
		background-color: inherit;
		width: 100%;
		height: 100%;
		left: 0;
		bottom: -10%;
		border-radius: 10upx;
		opacity: 0.2;
		transform: scale(0.9, 0.9);
	}

	.nav-li.cur {
		color: #fff;
		background: rgb(94, 185, 94);
		box-shadow: 4upx 4upx 6upx rgba(94, 185, 94, 0.4);
	}

	.nav-name {
		font-size: 28upx;
		text-transform: Capitalize;
		position: relative;
	}

	.nav-name::before {
		my-btn-item: "";
		position: absolute;
		display: block;
		width: 40upx;
		height: 6upx;
		background: #fff;
		bottom: 0;
		right: 0;
		opacity: 0.5;
	}

	.nav-name::after {
		my-btn-item: "";
		position: absolute;
		display: block;
		width: 100upx;
		height: 1px;
		background: #fff;
		bottom: 0;
		right: 40upx;
		opacity: 0.3;
	}

	.nav-name::first-letter {
		font-weight: bold;
		font-size: 36upx;
		margin-right: 1px;
	}

	.nav-li text {
		position: absolute;
		right: 30upx;
		top: 30upx;
		font-size: 52upx;
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
	}


	// 顶部流星
	.space {
		position: absolute;
		top: 0;
		left: 0;
	}

	.planet {
		width: 150rpx;
		height: 150rpx;
		border-radius: 50%;
		background: #333;
		position: absolute;
		left: 50%;
		top: 50%;
		margin: -75rpx 0 0 -75rpx;
		overflow: hidden;
		z-index: 2;
	}

	.planet_shadow {
		position: absolute;
		border-radius: 50%;
		height: 100%;
		width: 100%;
		top: -40%;
		right: -10%;
		border: 35rpx solid rgba(0, 0, 0, .15);
	}

	.star {
		display: block;
		width: 5rpx;
		height: 5rpx;
		border-radius: 50%;
		background: #FFF;
		top: 100rpx;
		left: 400rpx;
		position: relative;
		transform-origin: 100% 0;
		animation: star-ani 6s infinite ease-out;
		box-shadow: 0 0 5rpx 5rpx rgba(255, 255, 255, .3);
		opacity: 0;
		z-index: 2;
	}

	.star:after {
		my-btn-item: '';
		display: block;
		top: 0rpx;
		left: 4rpx;
		border: 0rpx solid #fff;
		border-width: 0rpx 90rpx 2rpx 90rpx;
		border-color: transparent transparent transparent rgba(255, 255, 255, .3);
		transform: rotate(-45deg) translate3d(1rpx, 3rpx, 0);
		box-shadow: 0 0 1rpx 0 rgba(255, 255, 255, .1);
		transform-origin: 0% 100%;
		animation: shooting-ani 3s infinite ease-out;
	}

	.pink {
		top: 30rpx;
		left: 395rpx;
		background: #ff5a99;
		animation-delay: 5s;
		-webkit-animation-delay: 5s;
		-moz-animation-delay: 5s;
	}

	.pink:after {
		border-color: transparent transparent transparent #ff5a99;
		animation-delay: 5s;
		-webkit-animation-delay: 5s;
		-moz-animation-delay: 5s;
	}

	.blue {
		top: 35rpx;
		left: 432rpx;
		background: cyan;
		animation-delay: 7s;
		-webkit-animation-delay: 7s;
		-moz-animation-delay: 7s;
	}

	.blue:after {
		/* border-color: transpareanimation-delay: 12s; */
		-webkit-animation-delay: 7s;
		-moz-animation-delay: 7s;
		animation-delay: 7s;
	}

	.yellow {
		top: 50rpx;
		left: 600rpx;
		background: #ffcd5c;
		animation-delay: 5.8s;
	}

	.yellow:after {
		border-color: transparent transparent transparent #ffcd5c;
		animation-delay: 5.8s;
	}

	@keyframes star-ani {
		0% {
			opacity: 0;
			transform: scale(0) rotate(0) translate3d(0, 0, 0);
			-webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
			-moz-transform: scale(0) rotate(0) translate3d(0, 0, 0);
		}

		50% {
			opacity: 1;
			transform: scale(1) rotate(0) translate3d(-200rpx, 200rpx, 0);
			-webkit-transform: scale(1) rotate(0) translate3d(-200rpx, 200rpx, 0);
			-moz-transform: scale(1) rotate(0) translate3d(-200rpx, 200rpx, 0);
		}

		100% {
			opacity: 0;
			transform: scale(1) rotate(0) translate3d(-300rpx, 300rpx, 0);
			-webkit-transform: scale(1) rotate(0) translate3d(-300rpx, 300rpx, 0);
			-moz-transform: scale(1) rotate(0) translate3d(-300rpx, 300rpx, 0);
		}
	}
</style>
