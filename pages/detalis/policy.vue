<template>
	<view class="policy">
		<view class="policy_title">预定须知</view>
		<view class="reserve_content">
			<view class="">·付款后需要等待房东确认是否有房，建议提前联系房东确认</view>
			<view class="">·入住需要押金，退房后退押金</view>
			<view class="">·提供发票(具体联系客服）</view>
			<view class="">·入住前的12点后，不允许退房</view>
		</view>
		<view class="policy_title">入住须知</view>
		<view class="ruzhu_contnet">
			<view class="nav-content list">
				<view>入住 - 退房</view>
				<view>14:00后 - 12:00前</view>
			</view>
		</view>
		<view class="policy_title">入住须知</view>
		<view class="reception_contnet flex">
			<view class="reception_list show"></view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
			<view class="reception_list flex">
				<view class="img"></view>
				<view class="text">接待儿童</view>
			</view>
		</view>
		<view class="policy_title">额为费用</view>
		<view class="reserve_content">
			<view class="">·付款后需要等待房东确认是否有房，建议提前联系房东确认</view>
			<view class="">·入住需要押金，退房后退押金</view>
			<view class="">·提供发票(具体联系客服）</view>
			<view class="">·入住前的12点后，不允许退房</view>
		</view>
		<view class="policy_title">其他</view>
		<view class="reserve_content">
			<view class="">·路边停车场</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.policy {
		font-family: Source Han Sans CN;
		padding-bottom:110rpx;
		.policy_title {
			margin: 67rpx 0rpx 36rpx 0rpx;
			font-size: 28rpx;
			font-weight: bold;
			color: rgba(86, 86, 86, 1);
		}

		.reserve_content {
			view {
				margin-bottom: 25rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(85, 85, 85, 1);
			}
		}

		.ruzhu_contnet {
			padding-left: 12rpx;

			.list {
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(85, 85, 85, 1);
				margin-bottom: 26rpx;
			}
		}

		.reception_contnet {
			flex-wrap: wrap;
			width: 95%;
			margin: 0 auto;

			.show {
				display: none;
			}

			.reception_list {
				width: 33.3%;
				align-items: center;
				margin-bottom: 25rpx;

				&:nth-child(3n+1) {
					justify-content: flex-end;
				}

				&:nth-child(3n+0) {
					justify-content: center;
				}

				.img {
					width: 22rpx;
					height: 22rpx;
					background: #007AFF;
				}

				.text {
					font-size: 24rpx;
					margin-left: 9rpx;
					font-weight: 400;
					color: rgba(85, 85, 85, 1);
				}
			}
		}
	}
</style>
