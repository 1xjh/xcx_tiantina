<template>
	<view class="order_details">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">搜索关键字</block>
		</cu-custom>
		<view class="order_details_main">
			<view class="details_card details_status">
				<view class="status_date">待支付 （剩余时间30 : 00）</view>
				<view class="status_text">超时未付款订单将自动取消</view>
				<view class="order_number nav-between">
					<view class="">订单号 2201908160062412102557806 </view> <text @click="jump_quit()">取消订单</text>
				</view>
			</view>
			<view class="details_card details_room_box nav-between">
				<view class="details_room flex">
					<view class="room_name">天天惦记湖景双床房(肇庆市端州区岩前宝环大道店）</view>
					<view class="room_site">广东省肇庆市端州区岩前宝环大道19号</view>
				</view>
				<text class="text-gray cuIcon-right"></text>
			</view>
			<view class="details_card details_serve">
				<view class="serve_list nav-around">
					<view class="item flex">
						<view class="img"></view>
						<view class="text">联系民宿</view>
					</view>
					<view class="item flex">
						<view class="img"></view>
						<view class="text">联系民宿</view>
					</view>
					<view class="item flex">
						<view class="img"></view>
						<view class="text">联系民宿</view>
					</view>
				</view>
			</view>
			<view class="details_card details_user">
				<view class="user_details_list flex">
					<view class="title">入住人</view>
					<view class="content">陈先生</view>
				</view>
				<view class="user_details_list flex">
					<view class="title">联系电话</view>
					<view class="content">+86 15757143833</view>
				</view>
				<view class="user_details_list flex">
					<view class="title">入离日期</view>
					<view class="content">2019.08.17~2019.08.18 共1晚</view>
				</view>
				<view class="user_details_list flex">
					<view class="title">预订房型</view>
					<view class="content">湖景双床房 （双早）</view>
				</view>
				<view class="user_details_list flex">
					<view class="title">预订间数</view>
					<view class="content">共1间</view>
				</view>
				<view class="user_details_list flex">
					<view class="title">发票</view>
					<view class="content">共此次住宿发票请在离店时向民宿管家 索取间</view>
				</view>
				<view class="user_details_list flex">
					<view class="title">备注</view>
					<view class="content">无</view>
				</view>
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
			<view class="button">去支付</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			jump_quit(){
				uni.navigateTo({
					url: 'order_quit',
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

	.order_details_main {
		width: 90%;
		margin: 0 auto;
		font-family: Source Han Sans CN;

		.details_card {
			border-radius: 20px;
			background: #FFFFFF;
			margin-top: 30rpx;
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

		.details_user {
			padding: 20rpx;
			font-family: Source Han Sans CN;

			.user_details_list {
				margin: 37rpx 0rpx;

				.title {
					width: 150rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: rgba(170, 170, 170, 1);
				}

				.content {
					flex: 1;
					font-size: 28rpx;
					font-weight: 400;
					color: rgba(85, 85, 85, 1);
				}
			}
		}















		.details_serve {
			padding: 30rpx 0rpx;

			.serve_list {
				font-family: Source Han Sans CN;

				.item {
					flex-direction: column;
					align-items: center;

					.img {
						width: 86rpx;
						height: 86rpx;
						background: #007AFF;
						opacity: 0.9;
						border-radius: 50%;
					}

					.text {
						margin-top: 24rpx;
						text-align: center;
						font-size: 24rpx;
						font-weight: 400;
						color: rgba(85, 85, 85, 1);
						line-height: 40rpx;
					}
				}
			}
		}

		.details_room_box {
			font-family: Source Han Sans CN;
			color: rgba(85, 85, 85, 1);
			padding: 20rpx;
			align-items: center;

			.details_room {
				flex-direction: column;
				padding-right: 20rpx;

				.room_name {
					font-size: 32rpx;
					font-weight: 500;
					line-height: 46rpx;
				}

				.room_site {
					font-size: 24rpx;
					font-weight: 400;
					margin: 24rpx 0rpx 36rpx 0rpx;
				}
			}
		}

		.details_status {
			box-shadow: 0px 4px 6px 0px rgba(12, 77, 51, 0.4);
			color: rgba(255, 255, 255, 1);
			background: rgba(38, 118, 86, 1);
			padding: 25rpx;

			.status_date {
				font-size: 40rpx;
				font-weight: bold;
				margin-top: 39rpx;
			}

			.status_text {
				font-size: 24rpx;
				font-weight: 400;
				margin-top: 32rpx;
			}

			.order_number {
				font-size: 24rpx;
				font-weight: 400;
				margin: 84rpx 0rpx 46rpx 0rpx;

			}
		}

	}
</style>
