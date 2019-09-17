<template>
	<view class="uni_calendar">
		<cu-custom bgColor="bg-gradual-blue">
			<view slot="content">日历</view>
		</cu-custom>
		<view  class="calendar"></view>
		<Calendar :startDate="start" :themeColor="'#267656'" :priceList="priceList" :endDate="end" @callback="getDate" :mode="1">
			<view>
				<view class="residence_box">
					<view class="residence_start">
						<text>入住时间</text>
						<view class="calendar_date">{{ DateObject.startDateMonth }}</view>
						<view class="week_number">{{ DateObject.startWeek }}</view>
					</view>
					<view class="residence_day">共{{ DateObject.time }}晚</view>
					<view class="residence_end">
						<text>离店时间</text>
						<view class="calendar_date">{{ DateObject.endDateMonth }}</view>
						<view class="week_number">{{ DateObject.endWeek }}</view>
					</view>
				</view>
				<view class="sure" @click="sure">确定</view>
			</view>
		</Calendar>
		<view class="calendar_height"></view>
	</view>
</template>

<script>
	import Calendar from '../../colorui/components/Calendar.vue';
	import Data from '../../util/data.js';
	export default {
		data() {
			return {
				DateObject: {},
				start: '',
				end: '',
				disabledList: ['2019-6-25', '2019-6-26'], //不可操作的日期
				priceList: [
					//价格日历列表
					{
						date: '2019-8-24',
						price: '¥199'
					},
					{
						date: '2019-8-25',
						price: '¥500'
					},
					{
						date: '2019-8-26',
						price: '¥199'
					},
					{
						date: '2019-8-27',
						price: '¥500'
					},
					{
						date: '2019-8-28',
						price: '¥500'
					}
				]
			};
		},
		onLoad(option) {
			var DateObject = getApp().globalData.DateObject;
			this.start = DateObject.startDate;
			this.end = DateObject.endDate;
			this.DateObject = DateObject;
		},
		methods: {
			//获取回调的日期数据
			getDate(date) {
				var endDateMonth = Data.month(date.endDateStr);
				var startDateMonth = Data.month(date.startDateStr);
				this.DateObject = {
					startDateMonth: startDateMonth,
					endDateMonth: endDateMonth,
					startDate: date.startDateStr,
					endDate: date.endDateStr,
					time: date.countDays,
					startWeek: '星期' + date.startDate.week,
					endWeek: '星期' + date.endDate.week
				};
			},
			sure() {
				getApp().globalData.DateObject = this.DateObject;
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				});
			}
		},
		components: {
			Calendar
		}
	};
</script>

<style lang="scss" scoped>
	.calendar {
		margin-top: 165rpx;
	}

	.content {
		justify-content: center;
		flex-direction: column;
	}

	.sliderBox {
		justify-content: center;
		margin-right: 50rpx;
	}

	.text-center {
		justify-content: center;
	}

	.rowBox {
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}

	.mrg50T {
		margin-top: 50upx;
	}

	.tips {
		color: #999;
		font-size: 24upx;
		text-align: center;
		margin-top: 100upx;
	}

	.residence_box {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20rpx 0rpx 10rpx 0;
		font-size: 30rpx;
		position: fixed;
		z-index: 999;
		top: 100rpx;
		left: 0;
		background: #fff;
		width: 100%;
		height: 210rpx;
		box-sizing: content-box;
	}

	.residence_box text {
		font-size: 24rpx;
		color: rgba(95, 95, 95, 1);
		margin: 25rpx 0rpx 25rpx 0rpx;
	}

	.residence_end,
	.residence_start {
		display: flex;
		flex-direction: column;
	}

	.residence_end text {
		text-align: right;
	}

	.residence_end .week_number {
		text-align: right;
	}

	.calendar_date {
		color: #267656;
		font-size: 38rpx;
		font-family: SourceHanSansCN-Medium;
		font-weight: bold;
	}

	.week_number {
		padding: 10rpx 0rpx;
	}

	.sure {
		width: 100%;
		height: 90rpx;
		position: fixed;
		bottom: 0;
		left: 0;
		color: #fff;
		background: #267656;
		text-align: center;
		font-size: 35rpx;
		line-height: 90rpx;
	}

	.calendar_height {
		height: 90rpx;
		width: 100%;
	}
</style>
