<template>
	<view class="details_facility">
		<view class="facility_box">
			<view class="facility_list">
				<view class="facility_title">基础设施</view>
				<view class="facility_content flex">
					<view class="icon_list">
						<view class="icon_img"></view>
						<view class="icon_title">无线WI-FI</view>
					</view>
					<view class="icon_list">
						<view class="icon_img">
							<!-- <image src="" mode=""></image> -->
						</view>
						<view class="icon_title">无线WI-FI</view>
					</view>
					<view class="icon_list">
						<view class="icon_img">
							<!-- <image src="" mode=""></image> -->
						</view>
						<view class="icon_title">无线WI-FI</view>
					</view>
					<view class="icon_list">
						<view class="icon_img">
							<!-- <image src="" mode=""></image> -->
						</view>
						<view class="icon_title">无线WI-FI</view>
					</view>
					<view class="icon_list">
						<view class="icon_img">
							<!-- <image src="" mode=""></image> -->
						</view>
						<view class="icon_title">无线WI-FI</view>
					</view>
					<view class="icon_list">
						<view class="icon_img">
							<!-- <image src="" mode=""></image> -->
						</view>
						<view class="icon_title">无线WI-FI</view>
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
				icon_list:[{title:'基础设施'}]
			};
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.facility_box {
		width: 100%;
	}

	.facility_list {
		margin-top: 68rpx;

		.facility_title {
			margin-bottom: 38rpx;

		}
		.facility_content {
			padding: 0rpx 17rpx;
			flex-wrap: wrap;
			.icon_list {
				width: 20%;
				flex-direction: column;
				height: 100rpx;
				.icon_img {
					width: 40rpx;
					height: 40rpx;
					background: #007AFF;
					margin: 0 auto;
				}
				.icon_title {
					margin: 24rpx 0rpx 28rpx 0rpx;
					text-align: center;
					font-size: 22rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: rgba(76, 76, 76, 1);
				}
			}
		}
	}
</style>
