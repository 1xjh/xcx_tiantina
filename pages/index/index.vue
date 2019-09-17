<template>
	<view class="index">
		<cu-custom bgColor="bg-gradual-blue">
			<view slot="content">天天惦记</view>
		</cu-custom>
		<view class="swiper">
			<swiper indicator-dots="true" indicator-active-color="#fb5100" autoplay="true" interval="3000" duration="1200"
			 circular="true">
				<swiper-item v-for="(item, index) in banner" :key="index">
					<image class="nav-icon" mode="aspectFill" lazy-load="true" :src="item"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 入住搜索 -->
		<view class="residence">
			<view class="residence_title">
				<view class="jumpcity" @click="jumpCity">
					{{ city }}
					<text>[点击切换地方]</text>
				</view>
				<view>
					<image src="../../static/img/dingwei.png"></image>
					<text>搜附近</text>
				</view>
			</view>
			<view class="line"></view>
			<!-- 选择时间 -->
			<view class="residence_box" @click="jumpCalender">
				<view class="residence_start">
					<text>入住时间</text>
					<view role="" aria-label="">{{ DateObject.startDateMonth }}</view>
				</view>
				<view class="residence_day">
					共
					<text>{{ DateObject.time }}</text>
					晚
				</view>
				<view class="residence_end">
					<text>离店时间</text>
					<view role="" aria-label="">{{ DateObject.endDateMonth }}</view>
				</view>
			</view>
			<view class="search_text tian-tian-bg" @click="jumpCourtyardList"><text>查找院子</text></view>
			<view class="search_statement flex">
				<image class="image" src="../../static/img/dingwei.png" mode=""></image>
				官方渠道预定享保障低价
			</view>
		</view>
		<!-- 地方 -->
		<view class="hot_site_list">
			<view class="hot_site cu-avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);">
				<view class="hot_name">
					<view>肇庆</view>
					<view>ZhaoQing</view>
				</view>
			</view>
			<view class="hot_site cu-avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);">
				<view class="hot_name">
					<view>肇庆</view>
					<view>ZhaoQing</view>
				</view>
			</view>
			<view class="hot_site cu-avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);">
				<view class="hot_name">
					<view>肇庆</view>
					<view>ZhaoQing</view>
				</view>
			</view>
			<view class="hot_site cu-avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);">
				<view class="hot_name">
					<view>肇庆</view>
					<view>ZhaoQing</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="index_bottom">
			<view class="index_bottom_name">
				<image src="../../static/img/tiantian_name.png" mode=""></image>
			</view>
		</view>
		<view class="index_bottom">
			<view class="index_bottom_phone">
				<image src="../../static/img/inex_phone.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import util from '../../util/util.js';
	import Data from '../../util/data.js';
	export default {
		data() {
			return {
				DateObject: {},
				title: 'Hello',
				city: '',
				banner: ['../../static/img/img1.jpg', '../../static/img/img2.jpg', '../../static/img/img3.jpg',
					'../../static/img/img4.jpg'
				]
			};
		},
		onLoad() {

		},

		methods: {
			jumpCourtyardList: function() {
				uni.navigateTo({
					url: 'courtyard_list'
				});
			},
			jumpCalender: function() {
				var DateObject = JSON.stringify(this.DateObject);
				uni.navigateTo({
					url: '../calendar/calendar?DateObject=' + DateObject
				});
			},
			jumpCity: function() {
				uni.navigateTo({
					url: '../city/city?=' + this.city
				});
			},
		},
		onShow() {
			this.city = getApp().globalData.city;
			var DateObject = getApp().globalData.DateObject;
			if (JSON.stringify(DateObject) == '{}') {
				var startDate = Data.formatDate(new Date(), 'yyyy-MM-dd');
				var startWeek = Data.formatDate(new Date(), 'E');
				var endDate = new Date().setDate(new Date().getDate() + 1);
				endDate = Data.formatDate(new Date(endDate), 'yyyy-MM-dd');
				var endWeek = Data.formatDate(new Date(endDate), 'E');
				var time = Data.dateTime(startDate, endDate);
				var endDateMonth = Data.month(endDate);
				var startDateMonth = Data.month(startDate);
				DateObject = {
					startDateMonth: startDateMonth,
					endDateMonth: endDateMonth,
					startDate: startDate,
					endDate: endDate,
					time: time,
					startWeek: startWeek,
					endWeek: endWeek
				};
				this.DateObject = DateObject;
				getApp().globalData.DateObject = this.DateObject;
			} else {
				this.DateObject = getApp().globalData.DateObject;
			}
		}
	};
</script>

<style lang="scss">
	.hot_site_list {
		display: flex;
		flex-wrap: wrap;

		.hot_site {
			margin-left: 2.4%;
			margin-top: 2.4%;
			width: 30%;
			padding-bottom: 35%;
			border-radius: 30rpx;
			position: relative;

			.hot_name {
				color: #fff;
				font-size: 34rpx;
				position: absolute;
				bottom: 40rpx;
				left: 20rpx;
			}
		}
	}

	.search_statement {
		width: 100%;
		justify-content: center;
		align-items: center;

		.image {
			width: 30rpx;
			height: 30rpx;
		}
	}

	.residence_day text {
		color: #267656;
		padding: 0 2rpx;
	}

	@import url('index.css');
</style>
