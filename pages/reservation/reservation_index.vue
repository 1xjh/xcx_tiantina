<template>
	<view class="reservation">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">肇庆双床房</block>
		</cu-custom>
		<view class="reservation_center">
			<view class="reservation_card room_info">
				<view class="flex title"><text>预订房型</text>
					<view class="right">湖景双床房 （双早）</view>
				</view>
				<view class="flex title"><text>入离日期</text>
					<view class="right">08月17日—08月18日<text>共1晚</text></view>
				</view>
			</view>
			<view class="reservation_card user_info">
				<view class="title_residue flex">
					<view class="yuan"></view>
					<view class="">仅剩1间，请尽快预订哦~</view>
				</view>
				<view class="room_unmber flex">
					<view class="title">房间数</view>
					<view class="right flex">
						<view class="button">-</view>
						<view class="unmber">1</view>
						<view class="button">+</view>
					</view>
				</view>
				<view class="user_name flex">
					<view class="title">入住人</view>

					<view class="add_user_box nav-between">
						<view class="add_user flex">
							<view>姓名（须填一个入住人）</view>
							<view class="name">陈先</view>
						</view>
						<view class="icon"></view>
					</view>
				</view>
				<view class="user_name flex">
					<view class="title">联系电话</view>
					<view class="user_phone">+86 15767148332</view>
				</view>
			</view>
			<view class="reservation_card user_vip">
				<view class="vip_title">
					<view class="icon"></view>
					<view>快速升级</view>
				</view>
				<view class="vip_main">
					<view class="vip_list nav-between">
						<view class="title">升级钻石会员 折扣<text>5.5</text>折 首单免4房</view>
						<view class="flex">
							<text class="price">￥999</text>
							<view class="select"></view>
						</view>
					</view>
					<view class="vip_list nav-between">
						<view class="title">升级钻石会员 折扣<text>5.5</text>折 首单免4房</view>
						<view class="flex">
							<text class="price">￥999</text>
							<view class="select"></view>
						</view>
					</view>
					<view class="vip_list nav-between">
						<view class="title">升级钻石会员 折扣<text>5.5</text>折 首单免4房</view>
						<view class="flex">
							<text class="price">￥999</text>
							<view class="select"></view>
						</view>
					</view>
					<view class="vip_list nav-between">
						<view class="title">升级钻石会员 折扣<text>5.5</text>折 首单免4房</view>
						<view class="flex">
							<text class="price">￥999</text>
							<view class="select"></view>
						</view>
					</view>
				</view>
				<view class="hint" @click="jump_specification()">※勾选则默认同意《天天惦记会员购买协议》</view>
			</view>
			<view class="reservation_card user_price">
				<view class="price_list nav-between">
					<view class="left">原价</view>
					<view class="right">1晚1间共￥252</view>
				</view>
				<view class="price_list nav-between">
					<view class="left">金卡会员6折</view>
					<view class="right">-￥13</view>
				</view>
				<view class="price_list nav-between">
					<view class="left">优惠券</view>
					<view class="right red">-￥30</view>
				</view>
				<view class="price_list nav-between">
					<view class="left">房费</view>
					<view class="right">￥440</view>
				</view>
				<view class="price_list nav-between">
					<view class="left">押金</view>
					<view class="right">￥500</view>
				</view>
				<view class="price_list nav-between">
					<view class="left">实际付款</view>
					<view class="right red">￥940</view>
				</view>
				<view class="hint" @click="jump_specification()">※勾选则默认同意《天天惦记会员购买协议》</view>

			</view>
			<view class="reservation_bottom">
				<view class="title">入住政策</view>
				<view class="content flex">
					<view class="left">●</view>
					<view class="right">酒店于入住当天14:00办理入住，如提前到达酒店，视酒店客房情况决定是否给予提前入住</view>
				</view>
				<view class="title">入住政策</view>
				<view class="content flex">
					<view class="left">●</view>
					<view class="right">酒店于入住当天14:00办理入住，如提前到达酒店，视酒店客房情况决定是否给予提前入住</view>
				</view>
				<view class="title">入住政策</view>
				<view class="content flex">
					<view class="left">●</view>
					<view class="right">酒店于入住当天14:00办理入住，如提前到达酒店，视酒店客房情况决定是否给予提前入住</view>
				</view>
			</view>
		</view>
		<view class="reservation_sumbit nav-between">
			<view class="left flex">
				<view class="price">￥209.00</view>
				<view class="details_prcie flex">
					<view class="">已优惠 ￥43</view>
					<view class="detail">明细^</view>
				</view>
			</view>
			<view class="button" @click="jump_play()">去支付</view>
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
			jump_specification() {
				uni.navigateTo({
					url: "../agreement/agreement"
				})
			},
			jump_play(){
				uni.navigateTo({
					url: "../order_details/details",
				});
			}
		}
	}
</script>

<style lang="scss">
	.reservation_sumbit {
		width: 100%;
		height: 110rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		background: rgba(255, 255, 255, 1);
		padding: 0rpx 40rpx;
		align-items: center;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);
		font-family: Source Han Sans CN;

		.left {
			flex-direction: column;

			.price {
				font-size: 40rpx;
				font-weight: bold;
				color: rgba(38, 118, 86, 1);
			}

			.details_prcie {
				font-size: 20rpx;

				.detail {
					margin-left: 19rpx;
					font-size: 20rpx;
					font-weight: 500;
					color: rgba(38, 118, 86, 1);
				}
			}
		}

		.button {
			width: 330rpx;
			height: 80rpx;
			background: rgba(38, 118, 86, 1);
			border-radius: 40rpx;
			font-size: 36rpx;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
			text-align: center;
			line-height: 80rpx;
		}
	}

	.reservation_center {
		font-family: Source Han Sans CN;
		width: 95%;
		margin: 0 auto;

		.reservation_card {
			background: #fff;
			margin: 30rpx 0rpx;
			width: 100%;
			overflow: hidden;
			border-radius: 20px;
			position: relative;
		}

		.reservation_bottom {
			padding: 20rpx;
			font-family: Source Han Sans CN;
			color: rgba(85, 85, 85, 1);
			margin-bottom: 110rpx;

			.title {
				margin: 40rpx 0rpx 10rpx 0rpx;
				font-size: 24rpx;
				font-weight: 500;
			}

			.content {
				font-size: 24rpx;
				font-weight: 400;
				line-height: 45rpx;

				.left {
					width: 30rpx;
				}
			}
		}

		.user_price {
			padding: 20rpx;
			font-family: Source Han Sans CN;

			.price_list {
				font-size: 26rpx;
				font-weight: 500;
				color: rgba(85, 85, 85, 1);
				height: 50rpx;
				line-height: 50rpx;

				.red {
					color: #FF3737;
				}
			}

			.hint {
				margin: 20rpx 0;
				font-size: 22rpx;
			}
		}

		.user_vip {
			padding: 20rpx;
			font-family: Source Han Sans CN;

			.vip_title {
				position: absolute;
				left: 0;
				top: 0;
				font-size: 22rpx;
				text-align: center;
				width: 146rpx;
				height: 36rpx;
				background: rgba(38, 118, 86, 1);
				border-radius: 20px 0px 20px 0px;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
			}

			.hint {
				margin: 20rpx 0rpx;
				font-size: 22rpx;
			}

			.vip_main {
				margin-top: 67rpx;
				border-bottom: 1rpx solid #eee;

				.vip_list {
					padding-bottom: 39rpx;

					.price {
						font-size: 24rpx;
						font-weight: 500;
						color: rgba(38, 118, 86, 1);
						margin-right: 10rpx;
					}

					.select {
						width: 38rpx;
						height: 38rpx;
						background: rgba(245, 245, 244, 1);
						border-radius: 50%;
					}

					.title {
						font-size: 28rpx;
						font-weight: 500;
						color: rgba(85, 85, 85, 1);

						text {
							color: #FF3737;
						}
					}
				}
			}
		}

		.room_info {
			font-size: 28rpx;
			font-weight: 500;
			color: rgba(85, 85, 85, 1);

			.title {
				margin: 30rpx;
			}

			.right {
				margin-left: 33rpx;
			}
		}

		.user_info {
			font-family: Source Han Sans CN;
			padding: 22rpx;

			.user_name {
				margin: 34rpx 0rpx;
				align-items: center;

				.title {
					width: 140rpx;
				}

				.add_user_box {
					flex: 1;
					border-bottom: 1rpx solid #eee;
					align-items: center;
					padding-bottom: 20rpx;
				}

				.add_user {
					flex-direction: column;
					flex: 1;

					.name {
						margin-top: 40rpx;
					}
				}

				.icon {
					width: 34px;
					height: 36px;
					background: #007AFF;
				}
			}

			.room_unmber {
				justify-content: space-between;
				margin-top: 33rpx;
				padding-bottom: 23rpx;
				border-bottom: 1rpx solid #eee;

				.title {
					font-size: 28rpx;
					font-weight: 500;
					color: rgba(85, 85, 85, 1);
				}

				.right {
					justify-content: space-between;
					align-items: center;

					.button {
						font-size: 42rpx;
						font-weight: 500;
						color: rgba(85, 85, 85, 1);
					}

					.unmber {
						font-size: 36rpx;
						font-weight: 500;
						padding: 0rpx 46rpx;
						color: rgba(38, 118, 86, 1);
					}
				}
			}

			.title_residue {
				align-items: center;
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(255, 55, 55, 1);

				.yuan {
					width: 24rpx;
					height: 24rpx;
					border-radius: 24rpx;
					background: rgba(255, 55, 55, 1);
				}
			}
		}
	}
</style>
