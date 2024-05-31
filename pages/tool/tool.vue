<template>
	<view class="swrap">
		<view class="hedaer-bg">
			<view class="title">
				青藤工作室
			</view>
			<image class="bg-image" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/2aedb3a0-2736-43f7-a602-bd652506cf65.png" ></image>
			<image class="gif-wave" src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/94f52838-8a5f-4116-93e7-ed8a9a0c1250.gif" mode="scaleToFill"></image>
		</view>
		<view class="main">
			<view class="tool-card">
				<bg-title title="工作室考核"></bg-title>
				<grid-right-icon :grid-list="assessList" gridItemBg="#e7f5f8"   @clickGridItem="clickTooNav" />
				<!-- <view></view> -->
			</view>
			<view class="tool-card">
				<bg-title title="工具" type="pink"></bg-title>
				<grid-layout :grid-list="toolList"   @clickGridItem="clickTooNav"></grid-layout>
				
			</view>
			<view class="tool-card">
				<bg-title title="成员"></bg-title>
				<grid-layout :rowCount="4" :gridList="personOptions" @clickGridItem="clickTooNav"> </grid-layout>
				
			</view>
			<view class="tool-card">
				<bg-title title="数据图表" type="pink" ></bg-title>
				<grid-layout :grid-list="dataCharts"   @clickGridItem="clickTooNav"></grid-layout>
				
			</view>
			<view class="tool-card" v-if="userInfo.type===1">
			
				<bg-title title="管理员" type="blue" ></bg-title>
				<grid-layout :grid-list="adminList"   @clickGridItem="clickTooNav"></grid-layout>
				
			</view>
			<technical-services></technical-services>
			
		</view>
	</view>
</template>
<script>
	import {
		mapState,
		mapActions
	} from 'vuex'
	export default{
		data(){
			return {
				
				toolList:[
					{
						id:0,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/c62c2d9b-9402-4aff-b135-65e872a4953c.png",
						name:"个人信息",
						color:"#15d5ea",
						isIconImg:true,
						url:"/pagesTool/edit-userinfo/edit-userinfo",
						
					},
					{
						id:1,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/4ecba7e4-cdb5-4e1d-9eca-427fda85fb1b.png",
						name:"报名",
						color:"#15d5ea",
						isIconImg:true,
						url:"/pagesTool/sign-up-list/sign-up-list",
						
					},
					{
						id:2,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/7463d938-5133-4417-9206-c6cefb43f479.png",
						name:"面试安排",
						color:"#15d5ea",
						url:"/pagesTool/arrange-card-list/arrange-card-list",
						isIconImg:true
					},
					{
						id:3,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/5e04912a-4126-4ebd-a95e-de09615e8fb1.png",
						name:"学习资源",
						color:"#15d5ea",
						isIconImg:true,
						url:"/pagesTool/study-resource/study-resource",
						
					},
					
				],
				assessList:[
					{
						id:4,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/b5606fd1-fbbe-4b3a-b589-d441ac7ee863.png",
						name:"考核任务",
						color:"#d06e18",
						url:"/pagesTool/assessment-task/assessment-task",
						isIconImg:true
					},{
					id:5,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/21547941-f8f8-4399-8343-4e7b159d65d4.png",
						name:"提交考核",
						color:"#0055ff",
						url:"/pagesTool/submit-task-list/submit-task-list",
						isIconImg:true
					},{
						id:6,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/13f770df-52e3-47a4-9061-182e3145193d.png",
						name:"已提交",
						color:"#0db036",
						url:"/pagesTool/submited-task/submited-task",
						
						isIconImg:true
					}
				],
				personOptions:[
					{
						id:1,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/d91aea94-3f37-4fe5-90f9-22cd95196201.png",
						name:"指导老师",
						color:"#6f6fe3",
						url:"/pagesPerson/teacher-des/teacher-des",
						isIconImg:true
					},
					{
						id:2,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/dbbab67c-898e-4e68-aaac-4c384e49a30d.png",
						name:"负责人",
						color:"#00d6d6",
						url:"/pagesPerson/principal/principal",
						isIconImg:true
						
					},
					{
						id:3,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/7823b7bb-6c55-477e-a89f-dffd12d31e88.png",
						name:"招新负责人",
						color:"#ff007f",
						url:"/pagesPerson/recruit-person/recruit-person",
						isIconImg:true
					},{
						id:4,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/d95204f0-78ba-497f-95d0-2a981317a4b2.png",
						name:"所有成员",
						color:"#d453ff",
						url:"/pagesPerson/total-person/total-person",
						isIconImg:true
					},
					{
						id:5,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/b1a295cd-6bef-40c7-b4b4-f339c5dc8ff5.png",
						name:"考研",
						color:"#ff0000",
						url:"/pagesPerson/graduate-student/graduate-student",
						isIconImg:true
					},
					{
						id:6,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/d7cf40a6-6bd4-41c2-917c-bd37cdae6b52.png",
						name:"就业",
						color:"#42cbb0",
						url:"/pagesPerson/get-job/get-job",
						isIconImg:true
					},
				],
				adminList:[
				
					{
						id:1,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/616714eb-5f24-46ab-9e5c-b9045be03808.png",
						name:"报名管理",
						color:"#00b400",
						url:"/pagesTool/sign/sign",
						isIconImg:true
					},
					{
						id:2,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/7463d938-5133-4417-9206-c6cefb43f479.png",
						name:"面试安排",
						color:"#15d5ea",
						url:"/pagesTool/arrange-card-list/arrange-card-list",
						isIconImg:true
					},
					{
						id:3,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/4dee5008-450b-4b6b-ab40-39d07c83df93.png",
						name:"内部信息",
						color:"#ff0000",
						url:"/pagesTool/internal-information/internal-information",
						isIconImg:true,
					}
					,
					{
						id:4,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/9f29fb61-7616-4daf-8cef-f3f72c5aee46.png",
						name:"上传资源",
						color:"#4b34ff",
						url:"/pagesTool/upload-file/upload-file",
						isIconImg:true
					},
				{
					id:5,
					icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-4cc2f5ff-48d7-408e-a02e-49df1211e511/b5606fd1-fbbe-4b3a-b589-d441ac7ee863.png",
					name:"提交列表",
					color:"#4b34ff",
					url:"/pagesTool/admin-submited-list/admin-submited-list",
					isIconImg:true
				},
				],
				dataCharts:[
					{
						id:1,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/4e3059bc-ca79-4975-80a7-bc212c3e1505.png",
						name:"折线图",
						isIconImg:true,
						url:"/pagesCharts/lineCharts/lineCharts",
					},{
							id:2,
						icon:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-8e3965bf-39a4-4da3-a35d-44a53b59e82e/fe311159-8ab3-4004-bbf1-6a6a3964bd81.png",
						name:"饼状图",
						isIconImg:true,
						url:"/pagesCharts/pieCharts/pieCharts",
					}
				]
			}
		},
		computed: {
			...mapState(['userInfo','admin'])
		},
		methods:{
			clickTooNav(toolItem){
				console.log(toolItem)
				uni.navigateTo({
					url:toolItem.url
				})
			},
			clickInfo(){
				uni.navigateTo({
					url:"/pagesTool/edit-userinfo/edit-userinfo"
				})
			},
			test(){
				uni.navigateTo({
					url:"/pages/cat/cat"
					// url:"/pagesShare/article-share/article-share"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.hedaer-bg{
		width: 100%;
		height: 186px;
		position: relative;
		padding: 0;
		border: none;
		.title{
			position: relative;
			width: 100%;
			padding: 100rpx;
			text-align: center;
			font-size: 36rpx;
			color: #FFFFFF;
			z-index: 100000;
			
		}
		.bg-image{
			width: 100%;
			height: 186px;
			position: absolute;
			top: 0;
			border: none;
			padding: 0;
			margin: 0;
		}
		.gif-wave {
			border: none;
			padding: 0;
			margin: 0;
			position: absolute;
			width: 100%;
			bottom: 0;
			left: 0;
			z-index: 99;
			mix-blend-mode: screen;
			height: 120rpx;
		}
	}
	
	//  学习工具卡
	.tool-card{
		background: #FFFFFF;
		border-radius: 10rpx;
		padding: 20rpx;
		margin-bottom: 40rpx;
	}
</style>