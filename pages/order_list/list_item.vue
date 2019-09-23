<template>
	<view class="list_item animated rotateIn">
		<view class="list_item_box">
			<view class="room_order_number flex">
				<view class="left_title">订单号</view>
				<view class="order_number">{{list.order}}</view>
				<view class="order_status">已取消</view>
			</view>
			<view class="room_order_title">{{list.roomName}}</view>
			<view class="room_order_number flex">
				<view class="left_title">预订房型</view>
				<view class="order_number">{{list.roomType}}</view>
			</view>
			<view class="room_order_number flex">
				<view class="left_title">入离日期</view>
				<view class="order_number">{{list.startDate}} ~ {{list.endDate}}</view>
				<view class="order_today">共<text>{{list.day}}</text>晚</view>
			</view>
			<view class="room_order_number flex">
				<view class="left_title">入住姓名</view>
				<view class="order_number">{{list.userName}}</view>
			</view>
			<view class="room_order_number flex">
				<view class="left_title">金额</view>
				<view class="order_status">￥{{list.price}}</view>
			</view>
			<view class="room_order_bottom flex">
				<view class="button" @click="jumpOrderDetails()">订单详情</view>
				<view class="button" @click="jumpCommnet()">去评价</view>
				<view class="button action">再次预定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:Object
		},
		data() {
			return {

			};
		},
		methods: {
			jumpOrderDetails() {
				uni.navigateTo({
					url: '../order_details/details',
				});
			},
			jumpCommnet() {
				uni.navigateTo({
					url: 'order_comment',
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list_item_box {
		background: rgba(255, 255, 255, 1);
		border-radius: 20rpx;
		padding: 37rpx 24rpx 32rpx 32rpx;
		font-family: Source Han Sans CN;
		margin-top: 30rpx;
		.left_title {
			width: 150rpx;
		}
	}

	.room_order_number {
		font-size: 28rpx;
		font-weight: 400;
		color: rgba(85, 85, 85, 1);
		line-height: 56rpx;
		align-items: center;

		.order_status {
			flex: 1;
			font-weight: bold;
			text-align: right;
		}

		.order_number {
			white-space: nowrap;
		}

		.order_today {
			height: 40rpx;
			line-height: 40rpx;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(85, 85, 85, 1);
			border-radius: 17px;
			font-size: 24rpx;
			font-weight: 400;
			color: rgba(85, 85, 85, 1);
			text-align: center;
			padding: 0rpx 16rpx;
			margin-left: 45rpx;

			text {
				color: #267656;
			}
		}
	}

	.room_order_bottom {
		justify-content: flex-end;
		margin-top: 50rpx;

		.button {
			height: 54rpx;
			line-height: 54rpx;
			border: 1px solid rgba(85, 85, 85, 1);
			border-radius: 27px;
			margin-left: 30rpx;
			padding: 0rpx 20rpx;
		}

		.action {
			color: #267656;
			border: 2rpx solid rgba(38, 118, 86, 1);
		}
	}

	.room_order_title {
		font-size: 28rpx;
		font-weight: bold;
		color: rgba(85, 85, 85, 1);
		line-height: 56rpx;

	}
</style>
