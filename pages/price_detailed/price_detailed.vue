<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">提现明细</block>
		</cu-custom>
		<view class="price_detailed_list">
			<view class="price_detailed_list_title">本月</view>
			<view class="cu-list menu-avatar">

				<view class="cu-item" v-for="(item,index) in 4" :key="index">
					<view class="cu-avatar round lg"></view>
					<view class="content">
						<view class="text-grey room_name">肇庆天天惦记超级民宿</view>
						<view class="text-gray text-sm">湖景双床房（推荐ID125566566）</view>
					</view>
					<view class="">
						<view class="text-grey text-xs price_font">￥-52.55</view>
						<view class="cu-tag round list_date sm">2019.05.20</view>
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
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.price_detailed_list {
		width: 95%;
		margin: 0 auto;
		font-family: Source Han Sans CN;
		font-weight: 400;

		.price_detailed_list_title {
			margin:72rpx 0rpx 28rpx 0rpx;
			font-size:30rpx;
			margin-left: 32rpx;
			font-weight:bold;
			color:rgba(38,118,86,1);
		}
		.room_name {
			font-size: 30rpx;
			color: rgba(0, 0, 0, 1);
		}

		.cu-list {
			border-radius: 20rpx;
		}

		.text-sm {
			font-size: 24rpx;
			color: rgba(85, 85, 85, 1);
		}

		.price_font {
			font-size: 32rpx;
			font-weight: bold;
			color: rgba(255, 55, 55, 1);
		}

		.list_date {
			font-size: 24rpx;
			color: rgba(85, 85, 85, 1);
			background: #FFFFFF !important;
		}
	}
</style>
