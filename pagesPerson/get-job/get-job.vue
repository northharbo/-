<template>
	<view class="content">
		<nav-bg title="就业"></nav-bg>
		
		<scroll-view scroll-y="true" class="scroll-Y">
			<view class="scroll-main">
				<icon-title title="就业"  iconColor="#ff557f" icon="icon-34" @click="clickPersonMore"></icon-title>
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
								<text>就业</text>
							</view>
						</view>
						<view class="tabel-d"  v-for="(person,index) in personInfoList" :key="index">
							<view class="tabel-d-item">
								<text>{{person.grade || ""}}</text>
							</view>
							<view class="tabel-d-item">
								<text>{{person.name || ""}}</text>
							</view>
							<view class="tabel-d-item">
								<view class="font-web dir" :class="person.colorClass">
									{{person.major || ""}}
								</view>
							</view>
							<view class="tabel-d-item">
								<text>{{person.job || ""}}</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
			this.getGetJobStudent()
		},
		methods: {
			async getGetJobStudent(){
				const _this = this;
				uni.showLoading()
				const {data:res} = await this.$httpApi.getGetJobStudent()
			
				this.personInfoList = res.map((item)=>{
					let colorClass = ""
					if(_this.tabelColortype[item.major]){
						colorClass = _this.tabelColortype[item.major]
					}else{
						colorClass = _this.tabelColortype["other"]
					}
					return {
						...item,
						colorClass
					}
				})
				uni.hideLoading()
			}
		}
	}
</script>

<style lang="scss">
	@import  '../common/tabel.scss';
	.person-card{
		padding: 20rpx;
	}
</style>
