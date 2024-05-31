<template>
	<view class="content">
		<nav-bg title="所有成员"></nav-bg>
		
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<icon-title title="工作室所有成员"  iconColor="#ff557f" icon="icon-laoshi2" @click="clickPersonMore"></icon-title>
					<view class="person-card">
						<view class="tabel">
							<view class="tabel-h">
								<view class="tabel-h-item">
									<text>年级</text>
								</view>
								<view class="tabel-h-item">
									<text>姓名</text>
								</view>
								<view class="tabel-h-item">
									<text>方向</text>
								</view>
								<view class="tabel-h-item">
									<text>展开</text>
								</view>
							</view>
							<view class="ps-item"  v-for="(person,index) in personInfoList" :key="index"  @click="openMore(index)">
								<view class="show-info tabel-d">
									<view class="tabel-d-item">
										<text>{{person.grade || ""}}</text>
									</view>
									<view class="tabel-d-item">
										<text>{{person.name|| ""}}</text>
									</view>
									<view class="tabel-d-item" >
										<view class="font-web dir" :class="person.colorClass" v-if="person.major">
											{{person.major  || ""}}
										</view>
									</view>
									<view class="tabel-d-item">
										<view class="ps-td-item more">
											<text class="iconfont icon-arrow " v-if="showIndex == index"></text>
											<text class="iconfont icon-arrowdown" v-else></text>
										</view>
									</view>
								</view>
								<view class="ps-by" v-if="showIndex == index">
									<view class="by-phone by-item" v-if="person.job">
										<text>就业：</text>
										<text>{{person.postgraduate}}</text>
									</view>
									<view class="by-phone by-item" v-if="person.job">
										<text>就业：</text>
										<text>{{person.job}}</text>
									</view>
									<view class="by-phone by-item" v-if="person.wxNum">
										<text>微信：</text>
										<text>{{person.wxNum}}</text>
									</view>
									<view class="by-phone by-item" v-if="person.qq">
										<text>QQ：</text>
										<text>{{person.qq}}</text>
									</view>
									<view class="by-phone by-item" v-if=" !person.postgraduate && !person.job && !person.qq && !person.wxNum">
										<text>无</text>
										
									</view>
								</view>
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
				showIndex: 0,
				tabelColortype:{
					'前端':'font-web',
					'后端':'end-web',
					'游戏':'game',
					'other':'other',
				},
				personInfoList:[]		
			};
		},
		onLoad() {
			this.getTotalPerson()
		},
		methods: {
			
			//  获取成员信息
			async getTotalPerson(){
				const _this = this;
				uni.showLoading()
				const {data:res} = await this.$httpApi.getTotalPerson()
			
			    //
				this.personInfoList = res.map((item)=>{
					let colorClass = ""
					if(_this.tabelColortype[item.major]){
						colorClass = _this.tabelColortype[item.major]
					}else{
						colorClass = _this.tabelColortype["other"]
					}
					return {
						...item,
						name:item.name.trim(),
						colorClass
					}
				})
				uni.hideLoading()
			},
			openMore(activeIndex) {
				
				if (activeIndex == this.showIndex) {
					this.showIndex = -1;
				} else {
			
					this.showIndex = activeIndex;
				}
			}
		}
	}
</script>

<style lang="scss">
	@import  '../common/tabel.scss';
	.content{
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #FFFFFF;
		.main{
			flex: 1;
			overflow: hidden;
			.scroll-Y{
				height: 100%;
			}
		}
	}
	.ps-item{
		// border: 1rpx solid #eeeeee;
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
</style>
