<template>
	<view class="details_index">
		<view class="details_title_name">天天惦记·肇庆超级民宿</view>
		<view class="details_environment flex">
			<view>湖景</view>
			<view>停车场</view>
			<view>独立院子</view>
		</view>
		<view class="details_site nav-around">
			<view class="site_title">中国/广东/肇庆市/端州区宝环大道岩前路181号</view>
			<view class="img">
				<image src="../../static/img/icon_site.png" mode=""></image>
			</view>
		</view>
		<view class="details_vip flex">
			<view class="img">
				<image src="../../static/img/lv_vip.png" mode=""></image>
			</view>
			<view class="vip_content">
				<view class="vip_t1">您是金卡会员/本人预订本人入住即可享受福利</view>
				<view class="vip_t2">预订7折 入住果盘 欢迎卡片 生日礼物</view>
			</view>
		</view>
		<view class="details_date nav-around tian-tian-bg" @click="jump_date">
			<view class="date_content">
				<view class="date_title">入住日期</view>
				<view class="date">07月31日 <text class="today">今天</text></view>
			</view>
			<view class="date_content">
				<view class="date_title">入住日期</view>
				<view class="date">07月31日 <text class="today">今天</text></view>
			</view>
			<view class="day_number">共<text>1</text>晚 ></view>
		</view>
		<view class="details_room">
			<view class="details_room_list nav-content" v-for="item in 3" :key="item">
				<view class="left flex">
					<view class="img">
						<image src="../../static/img/room_img.png" mode=""></image>
					</view>
					<view class="room_details">
						<view class="room_name">湖景双床房</view>
						<view class="room_bed">单床×2张 25m² 可住2人</view>
						<view class="room_quit">限时取消</view>
						<view class="room_environment flex">
							<view>湖景</view>
							<view>阳台</view>
							<view>会员首单免</view>
						</view>
					</view>
				</view>
				<view class="room_price">
					<view class="price_new">￥560 <text>起</text></view>
					<view class="price_old">原价￥999</view>
					<view class="room_status tian-tian-bg"  @click="jumpResservation()">
						预定
					</view>
				</view>
			</view>
		</view>
				
	</view>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			jump_date(){
				
			},
			jumpResservation(){
				uni.navigateTo({
					url: '../reservation/reservation_index',
				});
			}
		}
	}
</script>

<style lang="scss">
	image{
		width: 100%;
		height: 100%;
	}
	.details_title_name {
		margin: 30rpx 0;
		font-size: 36rpx;
		font-family: Source Han Sans CN;
		font-weight: bold;
		color: rgba(86, 86, 86, 1);
	}
	
	.details_environment {
		margin: 10rpx 0;
	
		view {
			margin-right: 42rpx;
			padding: 0rpx 6rpx;
			box-sizing: border-box;
			height: 30rpx;
			background: rgba(245, 245, 244, 1);
			border-radius: 10rpx;
			font-size: 19rpx;
			font-family: Source Han Sans CN;
			font-weight: 500;
			color: rgba(170, 170, 170, 1);
			line-height: 30rpx;
		}
	}
	
	.details_site {
		height: 72rpx;
	
		.site_title {
			line-height: 72rpx;
			font-size: 24rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: rgba(132, 132, 132, 1);
		}
	
		.img {
			width: 108rpx;
			height: 72rpx;
		}
	}
	
	.details_vip {
		margin-top: 23rpx;
		width: 100%;
		height: 124rpx;
		background: rgba(245, 245, 245, 1);
		border-radius: 16rpx;
	
		.img {
			margin: 34rpx 24rpx 25rpx 24rpx;
			width: 79rpx;
			height: 65rpx;
		}
	
		.vip_content {
			display: flex;
			flex-direction: column;
	
			.vip_t1 {
				height: 60rpx;
				font-size: 24rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: rgba(115, 114, 115, 1);
				line-height: 90rpx;
			}
	
			.vip_t2 {
				height: 60rpx;
				font-size: 24rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: rgba(187, 187, 187, 1);
				line-height: 50rpx;
			}
		}
	}
	
	.details_date {
		height: 126rpx;
		width: 100%;
		color: #fff;
		border-radius: 20rpx;
		font-family: Source Han Sans CN;
		align-items: center;
		border-radius: 20rpx;
		margin-top: 23rpx;
	
		.date_content {
			font-weight: 400;
	
			.date_title {
				font-size: 24rpx;
			}
	
			.date {
				font-size: 32rpx;
				font-weight: bold;
			}
	
			.today {
				font-size: 24rpx;
				margin-left: 18rpx;
			}
		}
	}
	.details_room_list {
		margin: 60rpx 0;
		height: 220rpx;
	
		.img {
			width: 180rpx;
			height: 100%;
			border-radius: 15rpx;
		}
	
		.room_details {
			margin-left: 27rpx;
			font-family: Source Han Sans CN;
	
			.room_name {
				margin: 9rpx 0rpx 33rpx 0rpx;
				font-size: 32rpx;
				font-weight: bold;
				color: rgba(85, 85, 85, 1);
			}
	
			.room_bed {
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(128, 128, 128, 1);
				margin-bottom: 24rpx;
			}
	
			.room_quit {
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(128, 128, 128, 1);
				margin-bottom: 46rpx;
			}
	
			.room_environment {
				view {
					margin-right: 16rpx;
					padding: 0rpx 6rpx;
					box-sizing: border-box;
					height: 30rpx;
					background: rgba(245, 245, 244, 1);
					border-radius: 10rpx;
					font-size: 19rpx;
					font-weight: 500;
					color: rgba(170, 170, 170, 1);
					line-height: 30rpx;
				}
			}
		}
	
		.price_new {
			margin-top: 72rpx;
			font-size: 40rpx;
			font-weight: bold;
			color: rgba(255, 55, 55, 1);
	
			text {
				font-weight: 400;
				color: #333333;
				font-size: 20rpx;
				margin: 0rpx;
	
			}
		}
	
		.price_old {
			font-size: 20rpx;
			color: rgba(187, 187, 187, 1);
			text-align: center;
			text-decoration: line-through;
		}
	
		.room_status {
			margin-top: 27rpx;
			height: 66rpx;
			width: 140rpx;
			border-radius: 40rpx;
			color: #fff;
			line-height: 66rpx;
			text-align: center;
		}
	}
	
</style>
