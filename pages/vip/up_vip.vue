<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">会员升级</block>
		</cu-custom>
		<view class="up_vip_main">
			<view class="vip_img"></view>
			<view class="vip_three">
				<view class="vip_three_title">三大会员卡</view>
				<view class="vip_three_flex nav-between">
					<view class="up_item">
						<view class="vip_three_icon"></view>
						<view class="vip_three_text">VIP卡会员</view>
					</view>
					<view class="up_item">
						<view class="vip_three_icon"></view>
						<view class="vip_three_text">VIP卡会员</view>
					</view>
					<view class="up_item">
						<view class="vip_three_icon"></view>
						<view class="vip_three_text">VIP卡会员</view>
					</view>
				</view>
			</view>
			<view class="up_vip_card">
				<view class="up-card_title flex">
					<view class="diu_icon"></view>
					<view>选择开通会员卡类型</view>
				</view>
				<view class="up_card_list" v-for="item in 3" :key="item">
					<view class="content_my">7折</view>
					<view class="up_font">VIP卡特惠价￥299（适用所有房型）</view>
				</view>
			</view>
			<view class="up_vip_card">
				<view class="up-card_title flex">
					<view class="diu_icon"></view> 
					<view>选择开通会员卡类型</view>
				</view>
				<view class="up_code_box flex">
					<view class="up_code_title">兑换码</view>
					<input type="text" value="" placeholder="请输入您的兑换码/区分字母大小写" class="up_code_input" />
				</view>
			</view>
		</view>
		<view class="bg_bottom"></view>
		<view class="up_button">立即开通</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.up_vip_main {
		width: 90%;
		margin: 0 auto;

		.up_vip_card {
			padding: 36rpx 20rpx;
			font-family: Source Han Sans CN;
			background: #FFFFFF;
			border-radius: 20rpx;
			margin-top: 68rpx;

			.up_code_box {
				align-items: center;
				margin-top: 30rpx;

				.up_code_input {
					margin-left: 20rpx;
					flex: 1;
				}

				.up_code_title {
					font-size: 32rpx;
					font-weight: 400;
					color: rgba(85, 85, 85, 1);
				}
			}

			.up_card_list {
				margin-top: 16rpx;
				background: rgba(240, 240, 240, 1);
				border-radius: 15rpx;
				height: 110rpx;
				overflow: hidden;
				line-height: 110rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: rgba(85, 85, 85, 1);
				text-align: center;
				position: relative;

				.content_my {
					position: absolute;
					background: #976F4D;
					text-align: center;
					width: 92px;
					height: 25px;
					line-height: 41rpx;
					font-size: 24rpx;
					font-weight: bold;
					color: #fff;
					right: -53rpx;
					top: 8rpx;
					font-size: 24rpx;
					font-weight: bold;
					transform: rotate(45deg);
				}
			}

			.up-card_title {
				align-items: center;
				font-size: 32rpx;
				font-weight: bold;
				color: rgba(85, 85, 85, 1);

				.diu_icon {
					width: 28rpx;
					height: 28rpx;
					background: #007AFF;
					border-radius: 28rpx;
					margin-right: 10rpx;
				}
			}
		}

		.vip_three {
			font-size: 32rpx;
			text-align: center;
			font-family: Source Han Sans CN;
			font-weight: 500;
			color: rgba(85, 85, 85, 1);
			background: rgba(255, 255, 255, 1);
			border-radius: 15rpx;
			margin-top: 68rpx;

			.vip_three_flex {

				padding: 0rpx 45rpx;

				.up_item {
					flex-direction: column;
					justify-content: center;

					.vip_three_icon {
						width: 120rpx;
						height: 138rpx;
						background: #007AFF;
					}

					.vip_three_text {
						margin-top: 31rpx;
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: rgba(85, 85, 85, 1);
						line-height: 90rpx;
					}
				}
			}

			.vip_three_title {
				font-size: 32rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: rgba(85, 85, 85, 1);
				text-align: center;
				padding: 36rpx 0rpx 45rpx 0rpx;
			}
		}

		.vip_img {
			width: 100%;
			height: 369rpx;
			background: #007AFF;
			margin-top: 36rpx;
			border-radius: 50rpx;
		}

	}

	.bg_bottom {
		width: 100%;
		height: 160rpx;
	}

	.up_button {
		width: 100%;
		height: 110rpx;
		line-height: 110rpx;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		text-align: center;
		position:fixed;
		bottom: 0;
		left: 0;
		background: rgba(38, 118, 86, 1);
		color: rgba(255, 255, 255, 1);
	}
</style>
