<template>
	<view class="content"> 
		<nav-bg :title="title"></nav-bg>
		<!-- <playback-video :videoInfo="videoInfo"></playback-video> -->
		<bg-title :title="title" :isBottomBorder="true"></bg-title>
		
		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<view class="des">
					<view class="des-content">
							<!-- <mp-html :content="videoDetail"></mp-html> -->
							<u-parse :html="videoDetail"></u-parse>
							<white-space></white-space>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	
import marked from 'marked'//转换Markdown格式富文本
	export default {
		data() {
			return {
				title:"",
				videoInfo:{},
				 // currentId:0,
				 videoDetail:""
			}
		},
		onReady: function (res) {
			  
		},
		methods: {
			
		},
		
		onLoad(e) {
			this.videoInfo = JSON.parse(e.params)
			this.title = this.videoInfo.name
			this.getVideoDetail(this.videoInfo.id  || 0)
			// this.videoInfo.introduce = marked(this.videoInfo.introduce)
		},
		methods:{
			async getVideoDetail(id){
				const { data:res} = await this.$httpApi.getWorksDetail({
					id
				})
				this.videoInfo = res;
				this.videoDetail = marked(res.introduce)		
			}
		}
	}
</script>

<style lang="scss">
	.content{
		display: flex;
		height: 100%;
		flex-direction: column;
		background: #fff;
		.main{
			flex: 1;
			overflow: hidden;
			.scroll-Y{
				height: 100%;
			}
		}
	}
	.des-content{
		text-indent:2em;
		padding: 10rpx;
	}
</style>

 
<!-- <u-parse :html="videoDetail"></u-parse> -->