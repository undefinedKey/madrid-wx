<template>
	<view>
		<u-popup v-model="popup" :mode="popupmode" border-radius="14">
			<view class="popup-box">
				<!-- title -->
				<view class="box-title u-flex u-row-between u-p-30">
					<view class="back">
						取消
					</view>
					<view class="title-content u-font-lg">
						缔约方
					</view>
					<view class="ok">
						确定
					</view>
				</view>
				<!-- search -->
				<view class="box-search u-m-30">
					<u-search placeholder="维多利亚阿水阿水的阿水阿水" shape="square" input-align="center" v-model="search"
						:show-action="false"></u-search>
				</view>
				<!-- 列表分类选项 -->
				<view class="box-listview">
					<view class="listview-left u-m-r-20">
						<view class="left-item" v-for="(value,key,index) in countList"
							:class="{'active':currentCountry === key}" @click="selectTab(key)">
							{{key}}
						</view>
					</view>
					<!-- 此处应该有个固定盒子 -->
					<view class="listview-right">
						<scroll-view scroll-y="true">
							<view class="">
								<u-index-list>
									<view>
										全部222
									</view>
									<view v-for="(item, index) in indexList" :key="index">
										<!-- 顶部条 -->
										<!-- <u-index-anchor :index="item" /> -->

										<!-- 重点，能点击选中的 -->
										<view class="list-cell" v-for="(v,i) in countList[currentCountry]"
											@click="setItems(i)">
											<view class="cell-name" :class="{
												'active':v.is
											}">
												{{v.name}}
											</view>
										</view>
									</view>
								</u-index-list>
							</view>
						</scroll-view>
					</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		name: "country-list",
		data() {
			return {
				currentIndex: 0,
				currentCountry: "欧洲",
				scrollTop: 0,
				rightlist: 0,
				popupmode: 'bottom',
				popup: false,
				search: "",
				countList: [],
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
					"T", "U",
					"V", "W", "X", "Y", "Z"
				]

			};
		},
		methods: {
			show() {
				this.popup = true
			},
			hide() {
				this.popup = false
			},
			selectTab(key) {
				this.currentCountry = key
			},
			setItems(index) {
				this.countList[this.currentCountry][index].is = !this.countList[this.currentCountry][index].is
			}
		},
		mounted() {
			let data = [{
					name: '阿拉伯联合酋长国',
					type: '欧洲',
					is: false
				},
				{
					name: '阿拉伯联合酋长国2',
					type: '欧洲',
					is: false
				},
				{
					name: '阿拉伯联合酋长国3',
					type: '欧洲',
					is: false
				},
				{
					name: '阿拉伯联合酋长国4',
					type: '欧洲',
					is: false
				},
				{
					name: '阿拉伯联合酋长国6',
					type: '欧洲',
					is: false
				},
				{
					name: '阿拉伯联合酋长国',
					type: '非洲',
					is: false
				},
				{
					name: '奥萨来得及',
					type: '非洲',
					is: false
				},
				{
					name: '波兰3',
					type: '非洲',
					is: false
				},
				{
					name: '累死啊阶段4',
					type: '非洲',
					is: false
				},
				{
					name: '阿塞拜疆6',
					type: '非洲',
					is: false
				}
			]
			this.countList = data.reduce((acc, item) => {
				const {
					type
				} = item;
				if (acc[type]) {
					acc[type].push(item)
				} else {
					acc[type] = [item]
				}
				return acc
			}, {})
		}
	}
</script>

<style lang="scss">
	.title-content {
		font-weight: bold;
	}

	.box-listview {
		display: flex;
		height: 70vh;
		position: relative;

		.listview-left {
			width: 220rpx;
			z-index: 99;

			.left-item {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100rpx;
				background-color: #f6f8fa;
			}

			.active {
				transition: 0.3s;
				background-color: #ffffff;
			}
		}

		.listview-right {
			flex: 1;
			display: flex;

			// position: relative;
			// height: 900rpx;
			// width: 100%;
			.active {
				color: #7e9bd5;
			}

		}
	}
</style>