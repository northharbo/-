<template>
	<view class="content">
		<nav-bg title="考研"></nav-bg>
		
		<scroll-view scroll-y="true" class="scroll-Y">
			<view class="scroll-main">
				<icon-title title="考研"  iconColor="#ff557f" icon="icon-yanjiusheng" @click="clickPersonMore"></icon-title>
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
								<text>研究生</text>
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
								<text>{{person.postgraduate || ""}}</text>
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
				personInfoList:[]
							
			};
		},
		onLoad() {
			this.getGraduteStudent()
		},
		methods: {
			
			//  获取考研学生
			
			async getGraduteStudent(){
				uni.showLoading()
				try{
					const {data:res = []} = await this.$httpApi.getGraduteStudent()
					this.personInfoList = res.map((item)=>{
						return {
							...item,
							name:item.name.trim()
						}
					})
					uni.hideLoading()
				}catch(e){
					uni.hideLoading()
				}
				
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
