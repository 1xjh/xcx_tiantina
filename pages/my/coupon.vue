<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的优惠卷</block>
		</cu-custom>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="请输入优惠券码" confirm-type="search"></input>
			</view>
			<view class="action">
				<button class="tian-tian-color bg-white cu-btn round">总换</button>
			</view>
		</view>
		<view class="coupon_list_box">
			<view class="coupon_list nav-between" v-for="item in 4" :key="item">
				<view class="coupon_left">
					<view class="flex">
						<view class="icon_coupon">
							<image src="" mode=""></image>
						</view>
						<view class="coupon_room_type">酒店满减券</view>
					</view>
					<view class="coupon_status">该优惠券适用于小程序预定</view>
					<view class="coupon_date nav-between">
						<view class="">来自官网</view>
						<view class="">有效期至：2019.10.12</view>
					</view>
				</view>
				<view class="coupon_right">
					<view class="coupon_price"><text>￥</text>50</view>
					<view class="coupon_condition">满1000元使用</view>
					<view class="coupon_use">使用</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.coupon_list_box {
		width: 93%;
		margin: 0rpx auto;
		font-family: Source Han Sans CN;

		.coupon_list {
			background: rgba(255, 255, 255, 1);
			border-radius: 20px;
			padding: 20rpx;
			font-size: 20rpx;
			font-weight: 400;
			color: rgba(85, 85, 85, 1);
			margin-top:30rpx;
			.coupon_left{
				flex:1;
			}
			.coupon_room_type {
				font-size: 30rpx;
				font-weight: 400;
				margin-left: 6rpx;
			}

			.coupon_status {
				margin-top: 29rpx;
			}

			.coupon_date {
				padding-right: 20rpx;
				margin-top: 85rpx;
				width: 100%;
			}

			.coupon_right {
				width: 193rpx;
				height: 223rpx;
				background: linear-gradient(-40deg, rgba(38, 118, 86, 1), rgba(92, 187, 148, 1));
				box-shadow: 0px 6px 12px 0px rgba(12, 77, 51, 0.3);
				border-radius: 20px;
				overflow:hidden;
				.coupon_price{
					font-size:62rpx;
					font-weight:bold;
					text-align: center;
					color:rgba(255,255,255,1);
					margin-top:19rpx;
					text{
						font-size:24rpx;
						font-weight: 400;
					}
				}
				.coupon_condition{
					font-size:24rpx;
					color:rgba(255,255,255,1);
					text-align: center;
					margin-top: 17rpx;
				}
				.coupon_use{
					width: 110rpx;
					height: 38rpx;
					background: #FFFFFF;
					border-radius: 20rpx;
					font-size:24rpx;
					font-weight:500;
					color:rgba(38,118,86,1);
					text-align: center;
					margin: 20rpx auto;
				}
			}
		}

		.icon_coupon {
			width: 34rpx;
			height: 34rpx;
			background: #007AFF;
			border-radius:30rpx;
		}
	}
</style>
