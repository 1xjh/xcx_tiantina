<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">会员政策</block>
		</cu-custom>
		<view class="policy_vip_box">
			<view class="policy_vip_title">
				<view class="title_top">天天惦记年卡会员共划分3个等级</view>
				<view class="plicy_top_content">VIP卡会员、金卡会员、钻石卡会员。等级越高， 对应可享受的福利也越多。天天惦记将持续丰富 会员的权益，回馈记友们的厚爱哈~</view>
			</view>
			<view class="policy_vip_grade">会员等级</view>
			<view class="flex policy_vip_grade_list">
				<view class="vip_name vip-sub">等级</view>
				<view class="vip_zhe vip-sub">折扣</view>
				<view class="vip_date vip-sub">有效期</view>
			</view>
			<view class="flex policy_vip_grade_list_content" v-for="item in 3" :key="item">
				<view class="vip_name vip-sub">等级</view>
				<view class="vip_zhe vip-sub">折扣</view>
				<view class="vip_date vip-sub">有效期</view>
			</view>
			<view class="policy_vip_grade">年卡专属特权</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page {
		background: #FFFFFF;
	}

	.policy_vip_box {
		width: 93%;
		font-family: Source Han Sans CN;
		margin: 0 auto;
	}

	.policy_vip_grade {
		margin: 68rpx 0rpx 36rpx 0rpx;
		font-size: 32rpx;
		font-weight: 500;
		color: rgba(85, 85, 85, 1);
	}

	.policy_vip_grade_list_content {
		font-size: 26rpx;

		.vip-sub {
			background: rgba(251, 250, 250, 1);
			text-align: center;
			height: 160rpx;
			line-height: 160rpx;
			margin-left: 5rpx;
			color: rgba(85, 85, 85, 1);
		}

		.vip_name {
			flex: 1;
			margin-left: 0;
			color: rgba(48, 146, 107, 1);
		}

		.vip_zhe {
			flex: 2;
		}

		.vip_date {
			flex: 2;
		}
	}

	.policy_vip_grade_list {
		font-size: 26rpx;

		.vip-sub {
			background: rgba(38, 118, 86, 1);
			text-align: center;
			height: 80rpx;
			line-height: 80rpx;
			color: #FFFFFF;
			margin-left: 5rpx;
		}

		.vip_name {
			flex: 1;
			margin-left: 0;
			color: #FFFFFF;
			border-radius: 10px 0px 0px 0px;
		}

		.vip_zhe {
			flex: 2;
		}

		.vip_date {
			border-radius: 0px 10px 0px 0px;
			flex: 2;
		}
	}

	.policy_vip_title {
		background: rgba(246, 245, 245, 1);
		border-radius: 20px;
		position: relative;
		margin-top: 70rpx;

		.plicy_top_content {
			padding: 70rpx 40rpx 22rpx 40rpx;
			font-size: 28rpx;
			font-family: Source Han Sans CN;
			font-weight: 500;
			color: rgba(85, 85, 85, 1);
		}

		.title_top {
			height: 68rpx;
			line-height: 68rpx;
			width: 80%;
			left: 0;
			right: 0;
			text-align: center;
			margin: 0 auto;
			top: -34rpx;
			background: rgba(38, 118, 86, 1);
			border-radius: 10rpx;
			position: absolute;
			background: #267656;
			font-size: 32rpx;
			font-family: Source Han Sans CN;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
</style>
