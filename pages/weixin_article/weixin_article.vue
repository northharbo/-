<template>

<web-view :src="url"></web-view>

</template>ew

<script>
	export default {
		data() {
			return {
				url: '',
				articleId:0,
			};
		},
		onLoad(e) {
			console.log(e)
			console.log(e)
			// this.url = e.url
			this.articleId = e.id
			// console.log(this.url)
			
			wx.setNavigationBarTitle({
			  title: e.title
			})
			this.getArticleDetail()
		},
		methods:{
			//  获取文章详情
			async getArticleDetail() {
				
				const {
					data: res
				} = await this.$httpApi.getArticleDetail({
					id: this.articleId
				})
				this.url = res.url;
				wx.setNavigationBarTitle({
				  title: res.title
				})
			
			},
		}
	}
</script>

<style lang="scss">

</style>
