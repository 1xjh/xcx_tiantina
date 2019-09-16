<template>
	<view class="widthdraw_box">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">佣金提现</block>
		</cu-custom>
		<view class="withdraw_main">
			<view class="widthdraw_card">
				<view class="flex">
					<view class="card_account">到账微信</view>
					<view class="account_right flex">
						<view class="widthdraw_icon">
							<image src="" mode=""></image>
						</view>
						<view class="card_account_info">
							<view class="account_number">微信号(1078）</view>
							<view class="account_day">预计2-3天时间到账</view>
						</view>
					</view>
				</view>
				<view class="submit_price">提现金额</view>
				<input type="text" value="请输入多少钱" class="import_price"  />
				<view class="bottom_sumbit tian-tian-bg" @click="submit">提现</view>
			</view>
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
			submit(){
				uni.navigateTo({
					url: 'withdraw_success',
				});
			}
		}
	}
</script>

<style lang="scss">
	.withdraw_main {
		width: 90%;
		margin: 40rpx auto;
		font-family: Source Han Sans CN;

		.widthdraw_icon {
			width: 36rpx;
			height: 30rpx;
			background: #007AFF;
		}

		.submit_price {
			font-size: 28rpx;
			margin: 88rpx 0rpx 60rpx 0rpx;
			font-weight: 400;
			color: rgba(0, 0, 0, 1);
		}

		.import_price {
			font-size: 52rpx;
			font-weight: bold;
			color: rgba(0, 0, 0, 1);
			padding: 20rpx 0rpx 80rpx 0rpx;
			border-bottom: 1px solid #eee;
		}

		.account_right {
			margin-left: 67rpx;
		}
		.bottom_sumbit{
			width: 100%;
			height: 96rpx;
			text-align: center;
			font-size:36rpx;
			font-weight:bold;
			color:rgba(255,255,255,1);
			border-radius:10rpx;
			line-height: 96rpx;
			margin-top: 111rpx;
		}
		.widthdraw_card {
			background: #FFFFFF;
			border-radius: 20rpx;
			padding: 44rpx 50rpx 70rpx 50rpx;

			.card_account {
				font-size: 28rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 1);
			}

			.account_day {
				font-size: 28rpx;
				font-weight: 400;
				color: rgba(85, 85, 85, 1);
				margin-top: 22rpx;
			}
			.card_account_info{
				margin-left: 8rpx;
			}

			.account_number {
				font-size: 28rpx;
				font-weight: 400;
				color: rgba(0, 0, 0, 1);
			}
		}
	}
</style>
