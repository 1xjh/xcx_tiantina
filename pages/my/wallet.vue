<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">钱包</block>
		</cu-custom>
		<view class="wallet_bg">
			<view class="wallet_bg_card">
				<view class="wallet_box_bg">
					<view class="price_title flex">
						<view class="">总金额(元)</view>
						<view class="eye_img"></view>
					</view>
					<view class="price_none"> * * * * *</view>
					<view class="yesterday_none flex">昨日收益<text>* * *</text>元</view>
					<view class="share_title">把好东西分享给好朋友，收入更高哦~</view>
				</view>
			</view>
		</view>
		<view class="my_index_box">
			<view class="details_card list_entrance nav-between" @click="detiled(1)">
				<view class="list_button flex">
					<view class="icon_img"></view>
					<view class="icon_title">累计总收益</view>
				</view>
				<view class="right_price flex">
					<text class="price">￥100.00</text>
					<view class="">＞</view>
				</view>
			</view>
			<view class="details_card list_entrance nav-between" @click="detiled(2)">
				<view class="list_button flex">
					<view class="icon_img"></view>
					<view class="icon_title">累计提现</view>
				</view>
				<view class="right_price flex">
					<text class="price">￥100.00</text>
					<view class="">＞</view>
				</view>
			</view>
			<view class="details_card list_entrance nav-between" @click="submit">
				<view class="list_button flex">
					<view class="icon_img"></view>
					<view class="icon_title">可提现金额</view>
				</view>
				<view class="right_price flex">
					<text class="price">￥100.00</text>
					<view class="">＞</view>
				</view>
			</view>
		</view>
		<view class="bottom_tiantian">本服务由天天惦记提供</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			detiled(val){
				console.log(val)
				uni.navigateTo({
					url: '../price_detailed/price_detailed',
				});
			},
			submit(){
				uni.navigateTo({
					url: 'withdraw',
				});
			}
		}
	}
</script>

<style lang="scss">
	.wallet_bg {
		width: 100%;
		height: 382rpx;
		position: relative;
		background: linear-gradient(0deg, rgba(38, 118, 86, 1), rgba(92, 187, 148, 0.05));
		font-family: Source Han Sans CN;
		.wallet_bg_card {
			position: absolute;
			top: 22rpx;
			width: 100%;
			.wallet_box_bg {
				width: 90%;
				margin: 0rpx auto;
				border-radius: 10px;
				height: 400rpx;
				background: #FFFFFF;
				overflow: hidden;

				.price_title {
					font-size: 28rpx;
					font-weight: 500;
					color: rgba(85, 85, 85, 1);
					margin-top: 104rpx;
					justify-content: center;
				}

				.price_none {
					text-align: center;
					font-size: 64rpx;
					color: #267656;
					margin-top: 20rpx;
				}

				.yesterday_none {
					width: 260rpx;
					height: 46rpx;
					line-height: 46rpx;
					margin: 0 auto;
					background: rgba(246, 245, 245, 1);
					font-size: 26rpx;
					color: rgba(85, 85, 85, 1);
					border-radius: 22px;
					justify-content: center;

					text {
						font-size: 44rpx;
						margin-top: 10rpx;
						color: #267656;
					}
				}

				.share_title {
					text-align: center;
					font-size: 24rpx;
					color: rgba(85, 85, 85, 1);
					margin-top: 23rpx;
				}
			}
		}
	}
	.my_index_box {
		width: 90%;
		margin: 60rpx auto;
			font-family: Source Han Sans CN;
				color: rgba(85, 85, 85, 1);
		.list_entrance {
			padding: 37rpx 31rpx;
			align-items: center;
			margin-top: 30rpx;

			.icon_img {
				width: 43rpx;
				height: 35rpx;
				background: #007AFF;
			}

			.icon_title {
				font-size: 28rpx;
				font-weight: 400;
				margin-left: 26rpx;
			}
			.right_price{
				align-items:center;
				.price{
					margin-right: 10rpx;
					font-size:32rpx;
					font-weight:500;
				}
			}


		}

		.details_card {
			background: #fff;
			border-radius: 20rpx;

		}
	}
	.bottom_tiantian{
		position:absolute;
		bottom: 30rpx;
		text-align: center;
		width: 100%;
	}
</style>
