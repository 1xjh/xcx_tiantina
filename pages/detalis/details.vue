<template>
	<view class="details_index">
		<view class="swiper">
			<swiper :indicator-dots="false" indicator-active-color="#fb5100" autoplay="auto" interval="3000" duration="1200"
			 circular="true">
				<swiper-item v-for="(item, index) in banner" :key="index">
					<image class="nav-icon" mode="aspectFill" lazy-load="true" :src="item"></image>
				</swiper-item>
			</swiper>
			<view class="swiper_bg"></view>
			<view class="swiper_number">
				<view class="img">
					<image src="../../static/img/banner_icon.png" mode=""></image>
				</view>
				<text>{{banner.length}}</text>
			</view>
		</view>
		<view class="details_index_main">
			<view class="details_nav nav-content">
				<view class="details_nav_list" @click="select(1)">
					<view class="img">
						<image src="../../static/img/details_icon1.png" mode=""></image>
					</view>
					<view class="title">详情</view>
				</view>
				<view class="details_nav_list" @click="select(2)">
					<view class="img">
						<image src="../../static/img/details_icon2.png" mode=""></image>
					</view>
					<view class="title">房间设施</view>
				</view>
				<view class="details_nav_list" @click="select(3)">
					<view class="img">
						<image src="../../static/img/details_icon3.png" mode=""></image>
					</view>
					<view class="title">入住政策</view>
				</view>
				<view class="details_nav_list" @click="select(4)">
					<view class="img">
						<image src="../../static/img/details_icon4.png" mode=""></image>
					</view>
					<view class="title">评价</view>
				</view>
			</view>
			<index-page v-if="selectid==1"></index-page>
			<facility-page v-if="selectid==2"></facility-page>
			<policy-page v-if="selectid==3"></policy-page>
			<view class="bottom_height"></view>
		</view>
		<view class="footer">
			<view class="icon_list" @click="jumpIndex">
				<view class="icon_img"><image src="../../static/img/icon_index.png" mode=""></image></view>
				<view class="icon_title">回到首页</view>
			</view>
			<view class="icon_list">
				<view class="icon_img"><image src="../../static/img/haibao.png" mode=""></image></view>
				<view class="icon_title">生成海报</view>
			</view>
			<view class="icon_list">
				<view class="icon_img"><image src="../../static/img/icon_share.png" mode=""></image></view>
				<view class="icon_title">分享</view>
			</view>
		</view>
	</view>
</template>

<script>
	import facility from './facility_list.vue'
	import index from './index.vue'
	import policy from './policy.vue'
	export default {
		components: {
			"facility-page": facility,
			"index-page": index,
			"policy-page": policy
		},
		data() {
			return {
				banner: ['../../static/img/img1.jpg', '../../static/img/img2.jpg', '../../static/img/img3.jpg',
					'../../static/img/img4.jpg'
				],
				selectid: 1
			}
		},
		methods: {
			select(val) {
				if (val != 4) {
					this.selectid = val
				} else {
					uni.navigateTo({
						url: "./evaluate"
					})
				}
			},
			jumpIndex(){
				console.log(1111111)
				uni.reLaunch({
					url: "../index/index"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}

	image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.bottom_height {
		height: 110rpx;
		width: 100rpx;
	}

	.swiper {
		width: 100%;
		height: 500rpx;
		overflow: hidden;
		position: relative;

		.itemSwiper {
			margin-bottom: 10rpx;
			border-bottom: 1px solid #efeff7;
			margin-top: 15px;
		}

		.swiper_bg {
			position: absolute;
			height: 30rpx;
			width: 100%;
			// background: #999;
			margin-top: -28rpx;
			border-radius: 20rpx 20rpx 0rpx 0rpx;
			z-index: 1000;
			background: rgba(246, 245, 245, 1);
		}

		.swiper_number {
			display: flex;
			justify-content: space-around;
			position: absolute;
			left: 41rpx;
			bottom: 49rpx;
			width: 90rpx;
			line-height: 40rpx;
			height: 40rpx;
			background: rgba(0, 0, 0, 1);
			opacity: 0.5;
			border-radius: 10rpx;
			font-size: 20rpx;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);

			.img {
				margin-top: 10rpx;
				width: 22rpx;
				height: 20rpx;
			}
		}
	}

	.swiper swiper,
	.itemSwiper swiper {
		width: 100%;
		height: 100%;
	}

	.details_index_main {
		width: 88%;
		margin: 0 auto;
	}

	.details_nav {
		margin: 6rpx 0;

		.details_nav_list {
			display: flex;
			flex-direction: column;
			width: 102rpx;

			.img {
				width: 102rpx;
				height: 102rpx;
			}

			.title {
				font-size: 20rpx;
				text-align: center;
			}
		}
	}

	.footer {
		width: 100%;
		height: 110rpx;
		position: fixed;
		display: flex;
		justify-content: space-around;
		bottom: 0rpx;
		background: #FFFFFF;
		left: 0rpx;
		align-items: center;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);

		.icon_list {
			flex-direction: column;

			.icon_img {
				width: 40rpx;
				height: 40rpx;
				margin: 0 auto;
			}

			.icon_title {
				margin-top: 10rpx;
				text-align: center;
				font-size: 22rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: rgba(76, 76, 76, 1);
			}
		}
	}
</style>
