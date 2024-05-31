<template>
	<view class="personalInfoHeader">
		<view class="headerTop">
			<avater :avaterUrl="userInfo.avatarUrl" @cilckAvater="cilckAvater" imageSize="120" :iconType="iconType" IconColor="#6ca7ff" IconBgColor="#fff" isShowIcon iconSize="26rpx"></avater>
			<view class="headerTopcenter">
				<view class="nickName">{{userInfo.nickName}}</view>
				<view class="universityInfo">
					<view class="universityName">
						<text class="custom-icon custom-icon-xuexiao1"></text>
						{{userInfo.universityName}}
					</view>
					<view class="collegeName">{{userInfo.academy}}</view>
					<view class="entryGrade">{{userInfo.grade}}</view>
				</view>
			</view>
			<view class="headerTopRight" v-if="rightIconShow">
				<u-icon name="edit-pen-fill"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			userInfo: {
				type: Object,
				default() {
					return {}
				}
			},
			rightIconShow: {
				type: Boolean,
				default() {
					return true
				}
			},
			iconType: {
				type: String,
				default() {
					return 'edit-pen-fill'
				}
			}
		},
		created() {
		},
		methods: {
			cilckAvater() {
				this.$emit('cilckHeaderAvater');
			}
		}
	}
</script>

<style lang="scss" scoped>
.personalInfoHeader {
	.headerTop {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 20rpx 30rpx;
		.headerTopcenter {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: 0 20rpx;
			
			.nickName {
				font-size: 32rpx;
				font-weight: 800;
				margin-bottom: 16rpx;
			}
			
			.universityInfo {
				display: flex;
				color: #FFFFFF;
				font-size: 24rpx;
				
				.custom-icon {
					margin-right: 6rpx;
					color: #be30fb;
				}
				
				view {
					margin-right: 6rpx;
				}
			}
		}
		
		.headerTopRight {
			color: #2699fb;
			font-size: 34rpx;
			padding: 28rpx;
		}
	}
}
</style>
