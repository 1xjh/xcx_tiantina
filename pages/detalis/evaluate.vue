<template>
	<view class="evaluate">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">评价</block>
		</cu-custom>
		<view class="evaluate_main">
			<view class="evaluate_sum flex">
				<view class="left flex">
					<view class="sum_number">5.0 <text>超棒</text></view>
					<view class="remark">共29条点评 </view>
				</view>
				<view class="right">
					<view class="point_name_box flex">
						<view class="point_name">房间卫生</view>
						<view class="line-bg"></view>
						<view class="point">5.0</view>
					</view>
					<view class="point_name_box flex">
						<view class="point_name">房间卫生</view>
						<view class="line-bg"></view>
						<view class="point">5.0</view>
					</view>
					<view class="point_name_box flex">
						<view class="point_name">房间卫生</view>
						<view class="line-bg"></view>
						<view class="point">5.0</view>
					</view>
					<view class="point_name_box flex">
						<view class="point_name">房间卫生</view>
						<view class="line-bg"></view>
						<view class="point">5.0</view>
					</view>
				</view>
			</view>
			<view class="evaluate_select flex">
				<view class="title">全部29</view>
				<view class="title">全部29</view>
				<view class="title">全部29</view>
				<view class="title">管家不错5</view>
			</view>
			<view class="arrows">∨</view>
			<view class="evaluate_card">
				<view class="evaluate_list flex">
					<view class="evaluate_minute">5.0</view>
					<view class="right">
						<view class="user_info flex">
							<view class="user_img">
								<!-- <image src="" mode=""></image> -->
							</view>
							<view class="colum flex">
								<view class="user_name">不吃香菜的小姐</view>
								<view class="user_vip">普通会员</view>
							</view>
						</view>
						<view class="user_title flex">
							<view class="room_date">2019-08-20 入住</view>
							<view class="room_type">闺蜜之旅</view>
							<view class="evaluate_room">湖景双床房＞</view>
						</view>
						<view class="user_content">
							民宿内部配置比较高档。能提现很好的品质，
							房间面积也挺大的。最有特点的是大院子，下
							次会再关顾。还有独立的衣柜。...<text class="gengduo">点击更多</text>
							。</view>
						<view class="evaluate_img_list flex">
							<view class="img">
								<image src="" mode=""></image>
							</view>
							<view class="img">
								<image src="" mode=""></image>
							</view>
							<view class="img">
								<image src="" mode=""></image>
							</view>
							<view class="img">
								<image src="" mode=""></image>
							</view>
							<view class="img">
								<image src="" mode=""></image>
							</view>
							<view class="img">
								<image src="" mode=""></image>
							</view>
						</view>
						<view class="evaluate_back">
							<view class="content">管家回复：春天的花，夏天的树，秋天的
								黄花，冬天的雪，都不如您的赞美，期待
								与您再次邂逅！</view>
						</view>
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

			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #fff;
	}

	.evaluate_main {
		width: 90%;
		margin: 35rpx auto;
	}

	.evaluate_sum {
		font-family: Source Han Sans CN;

		.left {
			align-content: center;
			flex-direction: column;

			.remark {
				font-size: 20rpx;
				font-weight: 400;
				color: rgba(85, 85, 85, 1);
			}

			.sum_number {

				font-size: 100rpx;
				font-weight: bold;
				color: rgba(60, 61, 60, 1);

				text {
					font-size: 32rpx;
					font-weight: 500;
					color: rgba(38, 118, 86, 1);
				}
			}
		}

		.right {
			margin-left: 40rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: rgba(85, 85, 85, 1);

			.line-bg {
				width: 230rpx;
				height: 8rpx;
				background: rgba(92, 187, 148, 1);
				border-radius: 4rpx;
			}

			.point_name_box {
				margin-top: 20rpx;
				align-items: center;

				.point_name {
					margin-right: 18rpx;
				}

				.point {
					margin-left: 18rpx;
				}
			}
		}
	}

	.evaluate_select {
		flex-wrap: wrap;
		margin-top: 68rpx;

		.title {
			margin-left: 23rpx;
			height: 52rpx;
			line-height: 52rpx;
			padding: 0 25rpx;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(188, 188, 188, 1);
			opacity: 0.5;
			border-radius: 26px;
			font-size: 24rpx;
			font-weight: 500;
			color: #000;
			margin-bottom: 26rpx;
		}
	}

	.arrows {
		width: 100%;
		text-align: center;
	}

	.evaluate_list {
		margin-top: 41rpx;
		font-family: Source Han Sans CN;

		.evaluate_minute {
			width: 86rpx;
			height: 46rpx;
			background: rgba(38, 118, 86, 1);
			border-radius: 23rpx;
			font-size: 32rpx;
			font-weight: 500;
			color: rgba(254, 254, 254, 1);
			line-height: 46rpx;
			text-align: center;
		}

		.right {
			margin-left: 30rpx;
			font-family: Source Han Sans CN;
			width: 100%;

			.user_info {
				.user_img {
					width: 80rpx;
					height: 80rpx;
					border-radius: 50%;
					background: #007AFF;
				}

				.colum {
					flex-direction: column;
					margin-left: 20rpx;

					.user_name {
						font-size: 30rpx;
						font-weight: 500;
						color: rgba(59, 59, 59, 1);
					}

					.user_vip {
						background: rgba(38, 118, 86, 1);
						border-radius: 16px 0px 16px 0px;
						font-size: 22rpx;
						font-weight: 400;
						margin-top: 12rpx;
						height: 45rpx;
						text-align: center;
						color: rgba(255, 255, 255, 1);
						line-height: 45rpx;
					}
				}

			}

			.user_title {
				width: 100%;
				margin: 30rpx 0rpx;
				justify-content: space-between;
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(170, 170, 170, 1);
			}

			.user_content {
				font-size: 28rpx;
				font-weight: 400;
				color: rgba(85, 85, 85, 1);

				.gengduo {
					color: #267656;
				}
			}

			.evaluate_img_list {
				margin: 36rpx 0rpx 30rpx 0rpx;
				flex-wrap: wrap;

				.img {
					background-color: #4d839c;
					width: 32%;
					height: 0;
					padding-bottom: 32%;
					margin-right: 2%;
					margin-bottom: 2%;

					&:nth-of-type(3n) {
						/* 选择个数是3的倍数的元素 */
						margin-right: 0;
					}
				}
			}

			.evaluate_room {
				font-size: 24rpx;
				font-weight: bold;
				color: rgba(38, 118, 86, 1);
			}

			.evaluate_back {
				padding: 30rpx 40rpx;
				background: rgba(245, 245, 244, 1);
				border-radius: 20px;

				.content {
					font-size: 26rpx;
					font-weight: 400;
					color: rgba(170, 170, 170, 1);
					line-height: 44rpx;
				}
			}
		}
	}
</style>
