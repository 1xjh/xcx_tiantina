<template>
	<view class="order_quit">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">取消订单</block>
		</cu-custom>
		<view class="order_quit_main">
			<view class="quit_cause">取消须知(个人原因）</view>
			<view class="reservation_bottom">
				<view class="content flex">
					<view class="left">●</view>
					<view class="right">订单成功取消后无法恢复</view>
				</view>
				<view class="content flex">
					<view class="left">●</view>
					<view class="right">若已支付，取消成功后已使用的优惠券将全部返还（首单减免优惠除外</view>
				</view>
				<view class="content flex">
					<view class="left">●</view>
					<view class="right">若已支付，已支付金额将返还原支付渠道，最迟将在7个工作日内退款）</view>
				</view>
			</view>
			<view class="quit_cause">取消原因</view>
			<view class="slect_list_box nav-content">
				<view class="list_item active">行程有变</view>
				<view class="list_item">行程有变</view>
				<view class="list_item">行程有变</view>
				<view class="list_item">行程有变</view>
				<view class="list_item">行程有变</view>
			</view>
			<view class="order_quit_text cu-form-group margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="多行文本输入框"></textarea>
				<view class="number_font">{{textareaAValueLength}}/100</view>
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
				textareaAValueLength: 0,
				textareaAValue: ""
			}
		},
		methods: {
			textareaAInput(e) {
				this.textareaAValueLength = e.detail.value.length
				this.textareaAValue = e.detail.value
			},
		}
	}
</script>

<style lang="scss">
	page {
		background: #fff;
	}

	.order_quit_main {
		width: 90%;
		margin: 0 auto;

		.quit_cause {
			margin-top: 36rpx;
			font-size: 28rpx;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: rgba(85, 85, 85, 1);
		}

		.order_quit_text {
			position: relative;
			border: 1rpx solid #eee;
			border-radius: 30rpx;
			font-size: 28rpx;
			.number_font {
				position: absolute;
				right: 10rpx;
				bottom: 10rpx;
			}
		}

		.slect_list_box {
			margin-top: 57rpx;

			.list_item {
				height: 64rpx;
				width: 48%;
				text-align: center;
				font-size: 24rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				border-radius: 32rpx;
				line-height: 60rpx;
				border: 1px solid rgba(204, 204, 204, 1);
				margin-top: 22rpx;

				&.active {
					background: rgba(38, 118, 86, 1);
					color: rgba(255, 255, 255, 1);
				}
			}
		}
	}

	.reservation_bottom {
		margin-top: 44rpx;
		font-family: Source Han Sans CN;
		color: rgba(85, 85, 85, 1);
		margin-bottom: 110rpx;

		.content {
			font-size: 24rpx;
			font-weight: 400;
			line-height: 45rpx;
			margin-top: 10rpx;

			.left {
				width: 30rpx;
			}
		}
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
