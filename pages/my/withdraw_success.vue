<template>
	<view class="widthdraw_box">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">提现成功</block>
		</cu-custom>
		<view class="withdraw_main">
			<view class="widthdraw_card">
				<view class="success_img"></view>
				<view class="submit_scuccess_title">提交成功</view>
				<view class="widthdraw_list nav-between">
					<view class="">交易日期</view>
					<view class="">2019-08-15 12:00</view>
				</view>
				<view class="widthdraw_list nav-between">
					<view class="">交易日期</view>
					<view class="">2019-08-15 12:00</view>
				</view>
				<view class="widthdraw_list nav-between">
					<view class="">交易日期</view>
					<view class="">2019-08-15 12:00</view>
				</view>
				<view class="widthdraw_list nav-between">
					<view class="">交易日期</view>
					<view class="">2019-08-15 12:00</view>
				</view>
			</view>
			<view class="widthdraw_button">完成</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.withdraw_main {
		width: 90%;
		margin: 40rpx auto;
		font-family: Source Han Sans CN;
		.widthdraw_button{
			width: 90%;
			height: 80rpx;
			background: #267656;
			text-align: center;
			line-height: 80rpx;
			margin: 0 auto;
			font-size:42rpx;
			border-radius: 50rpx;
			color:#FFFFFF;
			margin-top: 70rpx;
		}
		
		.widthdraw_card {
			background: #FFFFFF;
			border-radius: 20rpx;
			padding: 44rpx 50rpx 40rpx 50rpx;
			font-weight: 400;
			color: rgba(1, 1, 1, 1);
			.success_img{
				width: 100rpx;
				height: 100rpx;
				background: #007AFF;
				margin: 0 auto;
				border-radius: 50rpx;
			}
			.submit_scuccess_title{
				text-align: center;
				font-size:36rpx;
				font-weight:bold;
				color:rgba(1,1,1,1);
				line-height:81px;
			}
			.widthdraw_list {
				font-size: 32rpx;
				line-height: 81rpx;
				border-bottom: 1px solid #eee;
				&:last-child{
					border: 0;
				}
			}

		}
	}
</style>
