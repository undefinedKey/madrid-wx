<template>
	<view>
		<u-popup v-model="popup" :mode="popupmode" border-radius="14" height="90%">
			<view class="popup-box u-p-30">
				<!-- title -->
				<view class="box-title u-flex u-row-between">
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
				<view class="box-listview u-p-30 u-flex">
					<view class="listview-left">
						<view class="left-item" v-for="i in countList">
							{{i.type}}
						</view>
					</view>
					<view class="">
						<u-index-list :scrollTop="scrollTop">
							<view v-for="(item, index) in indexList" :key="index">
								<u-index-anchor :index="item" />
								<view class="list-cell">
									列表1
								</view>
								<view class="list-cell">
									列表2
								</view>
								<view class="list-cell">
									列表3
								</view>
							</view>
						</u-index-list>
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
				scrollTop: 0,
				rightlist: 0,
				popupmode: 'bottom',
				list: "这是自组件",
				popup: false,
				search: "",
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
					"T", "U",
					"V", "W", "X", "Y", "Z"
				],
				countList: [{
						name: '阿拉伯联合酋长国',
						type: '欧洲'
					},
					{
						name: '阿拉伯联合酋长国2',
						type: '欧洲'
					},
					{
						name: '阿拉伯联合酋长国3',
						type: '欧洲'
					},
					{
						name: '阿拉伯联合酋长国4',
						type: '欧洲'
					},
					{
						name: '阿拉伯联合酋长国6',
						type: '欧洲'
					},
					{
						name: '阿拉伯联合酋长国',
						type: '非洲'
					},
					{
						name: '奥萨来得及',
						type: '非洲'
					},
					{
						name: '波兰3',
						type: '非洲'
					},
					{
						name: '累死啊阶段4',
						type: '非洲'
					},
					{
						name: '阿塞拜疆6',
						type: '非洲'
					}
				]
			};
		},
		methods: {
			show() {
				this.popup = true
			},
			hide() {
				this.popup = false
			}
		}
	}
</script>

<style lang="scss">
	.popup {
		width: 100%;
		height: 400rpx;
	}

	.title-content {
		font-weight: bold;
	}

	.box-listview {
		.listview-left {
			width: 180rpx;

			.left-item {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100rpx;
				background-color: #f6f8fa;
			}
		}
	}
</style>