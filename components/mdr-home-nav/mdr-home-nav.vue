<template>
	<view class="mdr">
		<view class="mdr-home-nav u-flex u-row-between">
			<view class="bg-r" />
			<view class="nav-box " v-for="v,i in menuList" @click="selectTab(i)">
				<view class="nav-item" :class="{ 'nav-active': activeTab === i }">
					<view class="item-content">
						<u-image width="40rpx" height="40rpx" :src="src"></u-image>
						<view class="content-text u-font-xs">
							{{v}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="mdr-form">
			<u-form :model="form" label-width="120">
				<u-form-item label="日期">
					<view class="u-flex u-row-right" style="width: 100%;">
						<view class="time" @click="openDatetimePicker">
							{{birthday}}
							<u-icon name="arrow-right" class="u-m-l-20"></u-icon>
						</view>
					</view>
				</u-form-item>
				<u-form-item label="原属局">
					<view class="u-flex u-row-right" style="width: 100%;">
						中国
					</view>
				</u-form-item>
				<u-form-item label="商标覆盖类别数" label-width="200">
					<view class="u-flex u-row-right" style="width: 100%;">
						<u-number-box v-model="form.tccnum" @change="valChange"></u-number-box>
					</view>
				</u-form-item>
				<u-form-item label="请指定缔约方" label-width="200">
					<view class="u-flex u-row-right" style="width: 100%;">
						<view class="time" @click="getCountry">
							<u-icon name="arrow-right" class="u-m-l-20"></u-icon>
						</view>
					</view>
				</u-form-item>
				<u-form-item>
					<CountryList ref="countrylist"/>
				</u-form-item>
			</u-form>
			<buuug7-simple-datetime-picker ref="myPicker" @submit="handleSubmit" :start-year="2000" :end-year="2099"
				:time-init="1688860800000" :time-hide="[true, true, true]" :time-label="['年', '月', '日']" />
		</view>
	</view>

</template>
<script>
	import CountryList from './country-list.vue';
	export default {
		name: "mdr-home-nav",
		components:{
			CountryList
		},
		data() {
			return {
				src: "/static/icons/my.png",
				menuList: [
					"新申请",
					"续展",
					"后期指定",
					"变更",
					"其他"
				],
				activeTab: 0, // 默认选中第一个选项卡,
				form: {
					name: "",
					tccnum: 0
				},
				birthday: ""
			};
		},
		methods: {
			selectTab(i) {
				this.activeTab = i; // 更新选中的选项卡索引
			},
			// 打开picker
			openDatetimePicker() {
				this.$refs.myPicker.show();
			},
			// 关闭picker
			closeDatetimePicker() {
				this.$refs.myPicker.hide();
			},
			handleSubmit(e) {
				console.log(e);
				this.birthday = `${e.year}-${e.month}-${e.day} ${e.hour}:${e.minute}`;
			},
			getCountry(){
				this.$refs.countrylist.show()
			}
		}
	}
</script>
<style lang="scss">
	.mdr {
		margin-top: 20rpx;
	}

	.mdr-home-nav {
		// height: 400rpx;
		width: 100%;
		position: relative;
	}

	.bg-r {
		top: 10rpx;
		left: 0;
		z-index: 0;
		border-radius: 10rpx 10rpx 0 0;
		position: absolute;
		height: 120rpx;
		width: 100%;
		background-color: #f4f5f7;
	}

	.nav-box {
		z-index: 99;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 120rpx;
		width: 120rpx;
	}

	.nav-item {

		// height: 80rpx;
		.item-content {
			display: grid;
			place-items: center;
		}
	}

	.nav-active {
		width: 100%;
		border-radius: 10rpx 10rpx 0 0;
		transition: 0.3s ease;
		height: 100%;
		display: grid;
		place-items: center;
		background-color: #ffffff;
	}

	.mdr-form {
		padding: 0 30rpx;
		position: relative;
		z-index: 99;
		background-color: #ffffff;
	}
</style>