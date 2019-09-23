<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue">
			<view slot="content">订单列表</view>
		</cu-custom>
		<swiper-tab-head :tabList="tabList" :scrollLeft="scrollLeft" :TabCur="TabCur" @tabtap="tabtap"> </swiper-tab-head>
		<view class="uni-tab-bar">
			<swiper class="swiper-box" :style="'height:'+swiper+'px'" :current="TabCur" @change="tabChang">
				<swiper-item v-for="(items,id) in newList" :key="id">
					<scroll-view scroll-y class="list" @scrolltolower="loadmore(id)">
						<template v-if="!login">
							<no-thing :show="true" :notitle="'您还没有登录'"></no-thing>
						</template>
						<template v-else-if="items.listOrder.length>0">
							<view class="list_order">
								<block v-for="(item,index) in items.listOrder" :key="index">
									<list-item :list="item" :index="index"></list-item>
								</block>
								<load-more :loadtext="items.loadtext"></load-more>
							</view>
						</template>
						<template v-else>
							<no-thing :show="false" :notitle="'什么都还没有'"></no-thing>
						</template>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import listItem from "./list_item";
	import swiperTabHead from '../../componets/swiper-tab-head.vue'
	import loadMore from '../../componets/load-more.vue'
	import noThing from '../../componets/no-thing.vue'
	export default {
		components: {
			noThing,
			listItem,
			swiperTabHead,
			loadMore
		},
		data() {
			return {
				login: true,
				swiper: 0,
				newList: [{
						loadtext: '上拉加载更多',
						listOrder: [{
							order: 201907191234,
							roomName: '肇庆天天惦记超级民宿',
							roomType: '湖景阳光大床房',
							startDate: '2019-08-03',
							endDate: '2019-08-05',
							day: 3,
							userName: '秦天柱',
							price: 899.00
						}, {
							order: 201907191234,
							roomName: '肇庆天天惦记超级民宿',
							roomType: '湖景阳光大床房',
							startDate: '2019-08-03',
							endDate: '2019-08-05',
							day: 3,
							userName: '秦天柱',
							price: 899.00
						}, {
							order: 201907191234,
							roomName: '肇庆天天惦记超级民宿',
							roomType: '湖景阳光大床房',
							startDate: '2019-08-03',
							endDate: '2019-08-05',
							day: 3,
							userName: '秦天柱',
							price: 899.00
						}]
					},
					{
						listOrder: []
					},
					{
						listOrder: [{
							order: 201907191234,
							roomName: '肇庆天天惦记超级民宿',
							roomType: '湖景阳光大床房',
							startDate: '2019-08-03',
							endDate: '2019-08-05',
							day: 3,
							userName: '秦天柱',
							price: 899.00
						}]
					},
					{
						listOrder: []
					},
					{
						listOrder: []
					},
					{
						listOrder: []
					},
					{
						listOrder: []
					},
				],
				tabList: [{
						name: '天天',
						id: 'tian'
					},
					{
						name: '天天',
						id: 'tian'
					},
					{
						name: '天天',
						id: 'tian'
					},
					{
						name: '天天',
						id: 'tian'
					},
					{
						name: '我的',
						id: 'tian'
					},
					{
						name: '我的',
						id: 'tian'
					},
					{
						name: '我的',
						id: 'tian'
					},
				],
				TabCur: 0,
				scrollLeft: 0
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: (res) => {
					let height = res.windowHeight - uni.upx2px(90) - 64
					this.swiper = height
				}
			})
		},
		methods: {
			loadmore(index) {
				if (this.newList[index].loadtext != '上拉加载更多') {
					return;
				}
				this.newList[index].loadtext = "加载中";
				setTimeout(() => {
					let obj = {
						order: 201907191234,
						roomName: '肇庆天天惦记超级民宿',
						roomType: '湖景阳光大床房',
						startDate: '2019-08-03',
						endDate: '2019-08-05',
						day: 3,
						userName: '秦天柱',
						price: 899.00

					}
					this.newList[index].listOrder.push(obj);
					this.newList[index].loadtext = "上拉加载更多";
				}, 1000);
				// this.newList[index].loadtext = "没有更多数据"
			},
			tabtap(index) {
				this.scrollLeft = (index - 1) * 60
				this.TabCur = index
			},
			tabChang(e) {
				this.scrollLeft = (e.detail.current - 1) * 60
				this.TabCur = e.detail.current
			}
		}
	}
</script>

<style lang="scss" scoped>
	/* tab bar */
	.uni-tab-bar {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
	}

	.uni-tab-bar .list {
		height: 100%;
	}


	.uni-tab-bar .swiper-box {
		flex: 1;
		width: 100%;
		height: calc(100% - 100upx);
	}


	image {
		width: 100%;
		height: 100%;
		display: block;
	}


	.list_order {
		width: 93%;
		margin: 0 auto;
	}

	.search_content_box {
		width: 90%;
		margin: 0rpx auto;
		padding-top: 10rpx;

		.search_content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin: 15rpx 0rpx;

			.left {
				align-items: center;

				.content_name {
					margin-left: 20rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 550rpx;
				}
			}
		}
	}

	.no_commodity {
		display: none;
		width: 80%;
		margin: 100rpx auto;

		.none_text {
			margin: 20rpx 0;
			text-align: center;
		}

		.none_img {
			width: 100%;
			margin: 0 auto;
			text-align: center;
		}
	}
</style>
