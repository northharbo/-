<template>
	<view class="content">
		<nav-bg :title="title"></nav-bg>
		<bg-title :title="title" :isLine="false"></bg-title>
		<view class="person-h tb">
			<view class="ps-h-item ps-td-item name">
				姓名
			</view>
			<view class="ps-h-item ps-td-item dir">
				方向
			</view>
			<view class="ps-h-item ps-td-item time">
				面试时间
			</view>
		</view>
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<view class="ps-item tb" v-for="(ps,i) in personInfoList" :key="i">
						<view class="ps-td">

							<view class="ps-td-item name">
								{{ps.name}}
							</view>
							<view class="ps-td-item dir">
								{{ps.major}}
							</view>
							<view class="ps-td-item time">
								{{ps.createTime}}
							</view>
						</view>
						
					</view>
					<technical-services></technical-services>
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
				showIndex: 0,
				title:"",
				personInfoList: [
				]


			};
		},
		onLoad(e) {
			
			const interViewIn = JSON.parse(e.data || "{}")
			this.title = interViewIn.title
			this.getInterviewList(interViewIn.id)
		},
		methods: {
			async getInterviewList(id){
				uni.showLoading({
					icon:"none"
				})
				const {data:res} =await this.$httpApi.getInterviewList({
					applyId:id
				})
				this.personInfoList = res
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		height: 100%;
		background: #FFFFFF;
		display: flex;
		flex-direction: column;
		.main{
			flex: 1;
			overflow: hidden;
		}
	}

	.scroll-Y {
		height: 100%;
	}

	//  表格

		// border: 1rpx solid red;
		.tb {
			display: flex;

			.ps-td-item {
				width: 25%;
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 20rpx 0;
				border-bottom: 1rpx solid #ebebeb;
			}

			.time {
				width: 50%;
			}
		}

		//  头部区域
		.person-h {
			background: rgba($color: #e4f7ff, $alpha: 1.0);
			font-weight: bold;
		}

		//  表格内容
		.ps-item {
			display: flex;
			flex-direction: column;

			.ps-td {
				display: flex;
			}

			// 隐藏内容区域
			.ps-by {
				background: rgba($color: #f4f4f4, $alpha: 1.0);
				padding: 20rpx 40rpx;

				// border-radius: 20rpx;
				.by-item {
					padding: 20rpx 0;
				}
			}
		}
	
</style>
