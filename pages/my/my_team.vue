<template>
	<view class="my_team">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">我的团队</block>
		</cu-custom>
		<view class="my_team_box">
			<view class="my_team_sum nav-around">
				<view class="sum_list left_bg flex">
					<view class="title">团队人数</view>
					<view class="number">9</view>
				</view>
				<view class="sum_list middle_bg flex">
					<view class="title">团队人数</view>
					<view class="number">9</view>
				</view>
				<view class="sum_list right_bg flex">
					<view class="title">团队人数</view>
					<view class="number">9</view>
				</view>
			</view>
			<view class="my_team_main">
				<view class="my_team_main_title flex">
					<view class="my_team_main_account">会员账号</view>
					<view class="my_team_t1">姓名</view>
					<view class="my_team_t1">消费</view>
					<view class="my_team_t1">一级会员</view>
					<view class="my_team_t1">二级会员</view>
				</view>
				<view class="my_team_main_title flex" v-for="item in 10" :key="item">
					<view class="my_team_t1 my_team_main_account flex"><view >15802966541</view><view class="vip_grade">Lv1</view></view>
					<view class="my_team_t1">王*涛</view>
					<view class="my_team_t1">有</view>
					<view class="my_team_t1">是</view>
					<view class="my_team_t1">否</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.my_team_box {
		padding: 40rpx;

		.my_team_main {
			margin-top: 30rpx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.05);
			font-family: Source Han Sans CN;
			border-radius: 15px;

			.my_team_main_title {
				width: 95%;
				margin: 0 auto;
				height: 80rpx;
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
				font-size: 24rpx;
				font-weight: 500;
				color: rgba(85, 85, 85, 1);
				.my_team_t1{
					width: 110rpx;
					text-align: center;
				}
				.my_team_main_account {
					width: 230rpx;
					align-items:center;

					.vip_grade{
						padding: 0rpx 5rpx;
						height:18rpx;
						line-height: 18rpx;
						background:rgba(38,118,86,1);
						border-radius:9rpx;
						font-size:14rpx;
						color:#FFFFFF;
						margin:-10rpx 0rpx 0rpx 10rpx;
					}
				}
			}
		}

		.my_team_sum {
			font-family: Source Han Sans CN;

			.left_bg {
				background: linear-gradient(-45deg, rgba(254, 126, 2, 1), rgba(255, 144, 29, 1));
				box-shadow: 0px 3px 5px 0px rgba(255, 131, 10, 0.45);
			}

			.middle_bg {
				background: linear-gradient(-45deg, rgba(251, 60, 21, 1), rgba(255, 80, 25, 1));
				box-shadow: 0px 3px 5px 0px rgba(255, 47, 0, 0.45);
			}

			.right_bg {
				background: linear-gradient(-45deg, rgba(22, 186, 148, 1), rgba(36, 199, 164, 1));
				box-shadow: 0px 3px 5px 0px rgba(33, 236, 192, 0.45);
			}

			.sum_list {
				width: 30%;
				height: 100rpx;

				opacity: 0.9;
				border-radius: 10px;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			.title {
				font-size: 28rpx;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}

			.number {
				font-size: 32rpx;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
</style>
