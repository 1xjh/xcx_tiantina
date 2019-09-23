<template>
	<view class="order_no_login">
		<view class="img">
			<image src="../static/img/OrderNoLogin.png" mode="aspectFill" lazy-load=""></image>
		</view>
		<view class="title">{{notitle}}</view>
		<view class="button" v-show="show">登录</view>
	</view>
</template>

<script>
	export default{
	props: {
			show: {
				type: Boolean,
				default: false,
			},
			notitle: {
				type: String,
				default: '默认标题',
			}
		},
		data() {
			return {
		
			}
		},
	}
</script>

<style lang="scss">
	image {
		width: 100%;
		height: 100%;
		display: block;
	}
	.order_no_login {
		width: 100%;
	
		.img {
			width: 445rpx;
			height: 316rpx;
			margin: 0 auto;
			margin-top: 100rpx;
		}
	
		.title {
			margin: 0 auto;
			width: 445rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: 400;
			height: 120rpx;
			line-height: 120rpx;
			color: rgba(153, 153, 153, 1);
		}
	
		.button {
			width: 330rpx;
			height: 80rpx;
			line-height: 80rpx;
			margin: 0 auto;
			color: #FFFFFF;
			background: #267656;
			border-radius: 50rpx;
			text-align: center;
		}
	}
</style>
