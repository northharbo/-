<template>
	<view class="content">
		<navigation-share :title="detail.title"></navigation-share>

		<view class="main">
			<scroll-view scroll-y="true" class="scroll-Y">
				<view class="scroll-main">
					<mp-html :content="$marked(content)" />
				</view>
				<white-space></white-space>
				
			</scroll-view>
			
		</view>
		<view class="btm-btn">
			<view class="btn-content">
				<view class="btm-left">
					<download-file :download-url="urlList"></download-file>
				</view>
				<view class="btm-right" >
					<button class='share ' open-type="share">
						<text class="icon-tijiao iconfont share-icon "></text>
					</button>
				</view>
			</view>
			<safe-footer></safe-footer>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				urlList: ["https://qingzhi-sunset.oss-cn-beijing.aliyuncs.com/APP/task/user/162467139439550-$file$-JAVA2020级暑假任务.docx"],
				content:`
# 2021青藤工作室暑假考核任务
## 基本任务： 
1. LeetCode 是一个国内较好的 OJ 评测网站，然后它现在的算法库 题目量大约是 1700 题。你们要注册一个 LeetCode 账号，并且在接下 来的暑假时间里面刷leetcode；
- 前端方向的同学至少完成 >= 35题
- 后端方向 和 游戏 方向的同学至少完成 >= 55题
- 根据自己的能力自主选择难度）。 
2. CSDN 是一个著名的博客网站，所以，你们要注册一个 CSDN 账 
号，并且在接下来的暑假时间里面，写至少 6 篇博客，字数不限。
3. 可以学习算法（不做强制要求）

>-  动态规划
>- 分治
>- 贪心算法
>- 回溯
## 前端
- 1、学习vue 、element（View-ui）
使用element先使用的是element 2.0版本 element-plus 是vue3使用的
使用一个UI库即可，不要混用
- 2、学习node 基本操作
先了解请求吧，先不需要使用node写项目，写项目的话到时候用express	框架或者koa或者egg
- 3、MySQL、MongoDB
- 4、相关链接
-【2019年coderwhy vue-vuejs从入门到精通教程-哔哩哔哩】https://b23.tv/qiB6gZ
-【叩丁狼教育】Node.js零基础入门到高级进阶-20天-哔哩哔哩	 			https://b23.tv/R68Nhh
-【MySQL基础教程丨mysql数据库实战（sql数据库优化）-哔哩哔哩】			https://b23.tv/2ke5we
-【尚硅谷MongoDB基础教程(数据库精讲)-哔哩哔哩】
https://b23.tv/cWTMdU
-【Element2.0 地址】
https://element.eleme.cn/#/zh-CN
- 5、和后端方向的任意一个同学合作完成一个完整的项目，项目不做 主题要求，由你们自己决定，项目结构要清晰，主要是封装思想，组件拆分，组件化，函数封装。
Vue是首要任务，后面的因时间而定，但是还是希望你们多学点
前后端合作项目，主题自定义前端开始可以使用框架，UI组件库，自己随便用

## Java Web
- Javaweb学习视频推荐：
https://www.bilibili.com/video/BV1Y7411K7zz
https://www.bilibili.com/video/BV18s411u7EH
- MySQL视频推荐（先学基础部分到178）
https://www.bilibili.com/video/BV12b411K7Zu
- 学习任务：
1. 了解html、css、js、JSP
2. 学习Servlet（基础、重点）、MVC 框架、JSON
3. 学习 MySql 基础、JDBC
4. 学习设计模式（23种任选）
5. 和前端方向的任意一个同学合作完成一个完整的项目，项目不做 主题要求，由你们自己决定，项目结构要清晰，要求使用到session、cookie、Filter、Listener，第一次做项目不要用框架，做到熟悉使用JDBC操作数据库，熟悉Servlet、Filter、Listener。
提示：学习进度慢的一定要把servlet、listener、filter、mvc、json、jdbc、mysql先学好，不然很难完成项目

## 游戏开发
- 复习:
1. 唐老师C#四部曲
2. Unity入门: https://www.bilibili.com/video/BV1HX4y1V71E
- 学习:
1. UGUI: https://www.bilibili.com/video/BV1pE411C7gQ
2. NGUI:https://www.taikr.com/my/course/44
- 选做:
1. 找一个UI框架学习
2. 学习MVC 观看PureMVC源码
3. MySQL：https://b23.tv/2ke5we
- 实践项目: 
1. 写两份 跟着课程用NGUI写一份
2. 再自己用 UGUI写一份
https://www.taikr.com/my/course/91
### 写在最后： 
> 请大家把基础任务优先完成，然后进阶任务的内容是比较多的， 并不要求你们在暑假就全部学完，下次开学时，看大家的进度如何， 然后再做考虑。 
> 暑假快乐，小伙伴们！

				`
			};
		},
		onShareAppMessage() {
		  return {
		    title: this.articleInfo.title,
		    imageUrl: this.articleInfo.url[0] || "",
		    path: '/pagesShare/article-share/article-share',
		  };
		},
		onLoad(e) {
			console.log( )
			this.detail = JSON.parse(e.detail)
			wx.setNavigationBarTitle({
			  title: this.detail.title
			})
		},
		methods:{
			clickLikeBtn() {
				this.isLike = !this.isLike
			},
			clickCollectBtn(){
				this.isCollect = !this.isCollect
			},
					
			navToArticleDetail(e){
				uni.navigateTo({
					url:`/pages/article-detail/article-detail?article=${JSON.stringify(e)}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.content{
		height: 100%;
		display: flex;
		flex-direction: column;
		.main{
			flex: 1;
			overflow: hidden;
			.scroll-Y{
				height: 100%;
				.scroll-main{
					padding: 10rpx 20rpx;
				}
			}
			
		}
	}
	.bottom-download{
		
		.title{
			color: #0048AB;
			padding-left: 40rpx;
		}
	}
	
	
	
	//  底部点赞
		.btm-btn {
			position: relative;
			z-index: 1;
			width: 100%;
			background: #FFFFFF;
			
			box-shadow:  0px -2rpx 2px  rgba(229, 229, 229, 0.9);
			
			.btn-content {
				display: flex;
				flex-direction: row;
				padding: 10rpx;
	
				.btm-left {
					flex: 1;
					.like-count {
						color: #adadad;
					}
				}
	
				.btm-right {
					margin-left: auto;
					flex-shrink: 0;
					padding:0 40rpx;
					display: flex;
					.share{
						border: none;
						// background: red;
						width: 64rpx;
						height: 64rpx;
						background: #FFFFFF;
						padding: 0;
						display: flex;
						justify-content: center;
						align-items: center;
						border-radius: 50%;
						box-shadow: 0rpx 0rpx 5rpx 5rpx #f8f8f8;
						// overflow: hidden;
						font-size: 0;
						// margin-right: 40rpx;
						
						.share-icon{
							padding: 0;
							margin: 0;
							color: #4f87ff;
							font-size: 40rpx;
							// border: 1rpx solid red;
						}
						
					}			
				}
			}
		}
</style>
