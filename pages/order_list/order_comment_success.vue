<template>
	<view class="comment_success">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">评价</block>
		</cu-custom>
		<view class="comment_hint">
			<view class="hint_title1 flex">
				<view class="success_img"></view>
				<view>感谢您的点评!</view>
			</view>
			<view class="hint_title2">春风十里不如您的一句满意~</view>
			<view class="hint_title3 flex">
				<view class="vx_img"></view>
				<view>分享我的点评</view>
			</view>
		</view>
		<view class="comment_possible">您可能还想点评</view>
		<view class="comment_bottom_list">
			<view class="list_item nav-between">
				<view class="list_left"></view>
				<view class="list_middle flex">
					<view class="comment_list_middle_t1">天天惦记珠海石龙村</view>
					<view class="comment_list_middle_t2">2019-08-23 预定过</view>
					<view class="comment_list_middle_t3">双床房</view>
				</view>
				<view class="list_right">去评价</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}

	.comment_bottom_list {
		width: 90%;
		margin: 0 auto;
		font-family: Source Han Sans CN;

		.list_item {
			margin: 40rpx 0rpx;
			align-items: center;
			
			.list_left {
				width: 146rpx;
				height: 146rpx;
				background: #007AFF;
				border-radius: 15rpx;
			}

			.list_middle {
				flex-direction: column;
				justify-content: space-between;
				flex:1;
				margin-left: 30rpx;
				height:140rpx;
				.comment_list_middle_t1 {
					font-size: 32rpx;
					font-weight: 500;
					color: rgba(85, 85, 85, 1);
				}

				.comment_list_middle_t2 {
					font-size: 26rpx;
					font-weight: 400;
					color: rgba(85, 85, 85, 1);
				}

				.comment_list_middle_t3 {
					align-self: flex-start;
					height: 30rpx;
					padding: 0 20rpx;
					box-sizing: content-box;
					line-height: 30rpx;
					border: 1rpx solid rgba(84, 85, 85, 1);
					border-radius: 15rpx;
					font-size: 22rpx;
					text-align: center;
					font-weight: 400;
					color: rgba(85, 85, 85, 1);
				}
			}

			.list_right {
				padding: 0 30rpx;
				height: 60rpx;
				line-height: 64rpx;
				background: rgba(255, 55, 55, 1);
				border-radius: 30px;
				font-size: 28rpx;
				text-align: center;

				font-weight: 500;
				color: rgba(254, 254, 254, 1);
			}
		}
	}

	.comment_possible {
		height: 80rpx;
		font-size: 26rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: rgba(85, 85, 85, 1);
		line-height: 80rpx;
		background: #F6F5F5;
		padding-left: 40rpx;
	}

	.comment_hint {
		width: 100%;
		font-family: Source Han Sans CN;

		overflow: hidden;

		.hint_title1 {
			font-size: 40rpx;
			font-weight: 500;
			color: rgba(0, 0, 0, 1);
			line-height: 90rpx;
			height: 90rpx;
			justify-content: center;
			align-items: center;
			margin-top: 70rpx;

			.success_img {
				width: 60rpx;
				height: 60rpx;
				background: #007AFF;
				margin-right: 20rpx;
			}
		}

		.hint_title2 {
			font-size: 26rpx;
			text-align: center;

			font-weight: 400;
			color: rgba(85, 85, 85, 1);
			line-height: 56rpx;
			height: 56rpx;
		}

		.hint_title3 {
			width: 70%;
			font-size: 40rpx;
			font-weight: 500;
			color: rgba(0, 0, 0, 1);
			line-height: 90rpx;
			margin: 40rpx auto;
			height: 90rpx;
			justify-content: center;
			align-items: center;
			text-align: center;
			background: #267656;
			color: #fff;
			border-radius: 40rpx;

			.vx_img {
				margin-right: 20rpx;
				width: 50rpx;
				height: 50rpx;
				background: #007AFF;
			}
		}
	}
</style>
