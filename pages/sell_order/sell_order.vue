<template>
	<view class="sell_order">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">销售订单</block>
		</cu-custom>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @input="onKeyInput" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
		</view>
		<view class="sell_order_box">
			<view class="sell_order_list flex" v-for="item in 3" :key="item">
				<view class="icon_img"><image src="https://pic.tujia.com/upload/qualifiedpics/day_170806/thumb/201708061248483983_700_467.jpg" mode=""></image></view>
				<view class="order_list_right flex">
					<view class="room_name">天天惦记肇庆湖景双床房</view>
					<view class="line nav-between">
						<view>住客人</view>
						<view class="user_name">邹志雄</view>
					</view>
					<view class="line nav-between">
						<view>入住日期</view>
						<view>2019.08.26 - 2019.08.27</view>
					</view>
					<view class="line nav-between">
						<view>住客人</view>
						<view class="order_price">邹志雄</view>
					</view>
				</view>
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
			onKeyInput() {
				console.log(1111)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}
	image{
		width: 100%;
		height: 100%;
	}

	.sell_order_box {
		font-family: Source Han Sans CN;
		width: 90%;
		margin: 0 auto;

		.sell_order_list {
			margin: 40rpx 0rpx;

			.icon_img {
				width: 180rpx;
				height: 220rpx;
				border-radius: 10rpx;
				flex-direction: column;
				overflow:hidden;
			}

			.order_list_right {
				flex: 1;
				padding: 5rpx 0rpx;
				margin-left: 26rpx;
				flex-direction: column;
				justify-content: space-between;
				.room_name{
					font-size:32rpx;
					font-weight:bold;
					color:rgba(85,85,85,1);
				}
				.line {
					font-size: 24rpx;
					font-weight: 400;
					color: rgba(128, 128, 128, 1);
					align-items: center;
				}

				.user_name {
					font-size: 32rpx;
					font-weight: 500;
					color: rgba(255, 55, 55, 1);
				}

				.order_price {
					background: rgba(255, 55, 55, 1);
					border-radius: 28rpx;
					font-size: 30rpx;
					height: 56rpx;
					font-weight: 500;
					padding: 0 10rpx;
					color: rgba(254, 255, 255, 1);
					line-height: 56rpx;
				}
			}
		}
	}
</style>
