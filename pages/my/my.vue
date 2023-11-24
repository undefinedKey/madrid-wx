<template>
	<view>
		{{getUserinfo.nickname}}

		<button @click="login">你好</button>
		<button open-type="getPhoneNumber" @getphonenumber="getPhone">222222</button>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {

			};
		},
		methods: {
			getPhone(e){
				let detail = e.detail
				if (detail.errMsg == "getPhoneNumber:ok") {
					console.log(detail);
					let code = detail.code
					this.$u.api.login({
						appid: this.appid,
						code: detail.code
					}).then(res => {
						console.log(res);
					})
					
					
					// uni.request({
					// 	data: {
					// 		code: code, //请求体中封装code
					// 	},
					// 	success(e) {
					// 		console.log(e)
					// 		var userId = e.data.phone_info.purePhoneNumber;
					// 		uni.setStorage({
					// 			key: "userId",
					// 			data: userId,
					// 			success() {
					// 				uni.switchTab({
					// 					url: "../../pages/homePage/homepage"
					// 				})
					// 			}
					// 		})
					// 	},
					// 	fail(e) {
					// 		uni.showModal({
					// 			title: "错误!",
					// 			content: "网络错误!",
					// 			complete() {}
					// 		})
					// 	}
					// })
				}
			},
			//登录按钮
			login() {
				console.log('调用了 你好');
				uni.login({
					provider: 'weixin',
					success: res => {
						this.$u.api.login({
							appid: this.appid,
							code: res.code
						}).then(res => {
							console.log(res);
						})
					}
				})
				// var detail = e.detail
				// if (detail.errMsg == "getPhoneNumber:ok") {
				// 	console.log("用户同意授权")
				// 	var code = detail.code
				// 	uni.request({
				// 		url: "http://localhost:8081/getPhoneNumber", //调用接口
				// 		method: 'POST',
				// 		header: {
				// 			'content-type': 'application/json'
				// 		},
				// 		data: {
				// 			code: code, //请求体中封装code
				// 		},
				// 		success(e) {
				// 			console.log(e)
				// 			var userId = e.data.phone_info.purePhoneNumber;
				// 			uni.setStorage({
				// 				key: "userId",
				// 				data: userId,
				// 				success() {
				// 					uni.switchTab({
				// 						url: "../../pages/homePage/homepage"
				// 					})
				// 				}
				// 			})
				// 		},
				// 		fail(e) {
				// 			uni.showModal({
				// 				title: "错误!",
				// 				content: "网络错误!",
				// 				complete() {}
				// 			})
				// 		}
				// 	})
				// }
			}
		},
		computed: {
			...mapGetters(['getUserinfo'])
		}
	}
</script>

<style lang="scss">

</style>