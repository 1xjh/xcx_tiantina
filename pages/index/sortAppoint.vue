<template>
	<view class="appoint">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">个性筛选</block>
		</cu-custom>
		<view class="appoint_main ">
			<view class="appoint_title">户型要求</view>
			<view class="appoint_content nav-content">
				<view>一居</view>
				<view>二居</view>
				<view>三居</view>
				<view>四居及以上</view>
			</view>
			<view class="appoint_title flex">
				<view class="t1">人数</view>
				<view class="t2">床铺数</view>
			</view>
			<view class="number_select nav-content">
				<view class="people_number flex">
					<view class="minus bottom">-</view>
					<text class="number">10</text>
					<view class="add bottom">+</view>
				</view>
				<view class="room_number flex">
					<view class="minus bottom">-</view>
					<text class="number">20</text>
					<view class="add bottom">+</view>
				</view>
			</view>
			<view class="appoint_title">民宿特色</view>
			<view class="appoint_content nav-content">
				<view>蜜月圣地</view>
				<view>独立小院</view>
				<view>交通便捷</view>
				<view>逛吃天堂</view>
				<view>做饭方便</view>
				<view>湖景房</view>
				<view>聚会轰趴</view>
				<view>全家出游</view>
			</view>
			<view class="appoint_title">房屋要求</view>
			<view class="room_type nav-content">
				<view class="left button">
					<view class="room_type_t1">
						<image src="../../static/img/sort_complete1.png" mode=""></image>整套出租
					</view>
					<view class="room_type_t2">独享整套房屋</view>
				</view>
				<view class="right button">
					<view class="room_type_t1">
						<image src="../../static/img/sort_independent1.png" mode=""></image>
						<text>独立单间</text>
					</view>
					<view class="room_type_t2">共享部分空间</view>
				</view>
			</view>
			<view class="appoint_title">优惠</view>
			<view class="appoint_content flex">
				<view class="lianz">特价房</view>
				<view class="lianz">连住优惠</view>
				<view class="lianz">今日优惠</view>
			</view>
		</view>
		<view class="sort_site_bottom">
			<view class="left">清空重置</view>
			<view class="right">
				<view class="sure_button">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}

	.appoint_main {
		width: 90%;
		margin: 0 auto;

		.appoint_title {
			margin: 40rpx 0rpx 20rpx 0rpx;
			font-size: 30rpx;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: rgba(85, 85, 85, 1);

			.t2 {
				margin-left: 46%;
			}
		}
	}

	.appoint_content {
		.lianz{
			margin-right: 10rpx;
		}
		width: 100%;
		view {
			width: 24%;
			height: 60rpx;
			border-radius: 30rpx;
			color: rgba(85, 85, 85, 1);
			text-align: center;
			margin-top: 20rpx;
			line-height: 60rpx;
			border: 1rpx solid 0, 0, 0, 0.2;
			box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
		}
	}

	.number_select {
		width: 100%;

		.bottom {
			height: 64rpx;
			width: 64rpx;
			border-radius: 30rpx;
			background: #fff;
			position: absolute;
			text-align: center;
			line-height: 64rpx;
			font-size: 50rpx;
			border: 1rpx solid 0, 0, 0, 0.2;
			box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
		}
	}

	.people_number {
		width: 47%;
		position: relative;
		height: 64rpx;
		background: #F0F3F5;
		border-radius: 40rpx;

		.minus {
			left: 0rpx;
		}

		.add {
			right: 0;
		}

		.number {
			text-align: center;
			font-size: 30rpx;
			width: 100%;
			height: 64rpx;
			line-height: 64rpx;

		}
	}

	.room_number {
		width: 47%;
		position: relative;
		height: 64rpx;
		background: #F0F3F5;
		border-radius: 40rpx;

		.minus {
			left: 0rpx;
		}

		.add {
			right: 0;
		}

		.number {
			text-align: center;
			font-size: 30rpx;
			width: 100%;
			height: 64rpx;
			line-height: 64rpx;
		}
	}

	.room_type {
		width: 100%;

		.button {
			width: 47%;
			height: 100rpx;
			border-radius: 50rpx;
			background: #fff;
			text-align: center;
			border: 1rpx solid 0, 0, 0, 0.2;
			box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
			margin-top: 20rpx;

			.room_type_t1 {
				font-size: 30rpx;
				margin-top: 15rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: rgba(85, 85, 85, 1);
			}

			.room_type_t2 {
				font-size: 25rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: rgba(85, 85, 85, 1);
			}
		}

		image {
			width: 22rpx;
			height: 28rpx;
		}

		.left {}
	}
	.sort_site_bottom {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 110rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
		line-height: 110rpx;
		.left {
			width: 40%;
			text-align: center;
		}
	
		.right {
			width: 60%;
			.sure_button {
				display: inline-block;
				width: 90%;
				margin-top: 14rpx;
				height: 82rpx;
				line-height: 82rpx;
				font-size: 36rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				background: rgba(38, 118, 86, 1);
				border-radius: 41rpx;
				text-align: center;
			}
		}
	}
</style>
