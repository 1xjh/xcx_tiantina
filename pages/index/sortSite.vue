<template>
	<view class="sortSite">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">位置筛选</block>
		</cu-custom>
		<view class="sort_site_box">
			<view class="sort_title">
				<view class="left" @click="switchover(index)" :class="index==active?'active':''" v-for="(item,index) in title" :key="index">
					<view class="left_title">
						{{item}}
					</view>
				</view>
			</view>
			<view class="sort_content">
				<view class="right" @click="select(index,active)" v-for="(item,index) in content[active].arr" :key="index">
					<view class="right_content">
						{{item}}
					</view>
					<view class="right_sure_select" v-for="(t,i) in selectArr[active].select_index" v-if="(t===index)" :key="i">
						<image src="../../static/img/select1.png" mode=""></image>
					</view>
					<view class="right_sure">
						<image src="../../static/img/select2.png" mode=""></image>
					</view>
				</view>
			</view>
		</view>
		<view class="sort_site_bottom">
			<view class="left">清空重置</view>
			<view class="right">
				<view class="sure_button">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				selectArr: [{
						select_index: [0, 3, 2]
					},
					{
						select_index: []
					},
				],
				title: ["景区", "行政区"],
				content: [{
						arr: ["商圈", "1KM", "3km", "5km", "10km"]
					},
					{
						arr: ["行政区", "1KM", "3km", "5km", "10km"]
					}
				]
			}
		},
		methods: {
			switchover(val) {
				this.active = val
			},
			select(val, active) {
				var _this = this
				var selectArr = _this.selectArr[active].select_index
				let i = selectArr.indexOf(val);
				if (i < 0) {
					selectArr.push(val)
				} else {
					selectArr.splice(i, 1)
				}
				_this.selectArr[active].select_index = selectArr
			},
		}
	}
</script>

<style lang="scss">
	.sort_site_box {
		display: flex;

		.sort_title {
			background: #F6F5F9;
			width: 200rpx;
			height: 90vh;
			overflow: auto;
			.left {
				height: 100rpx;
				padding-left: 40rpx;
				line-height: 100rpx;
			}
			.left.active {
				background: #fff;
				color: #267656;
			}
		}
		.sort_content {
			flex: 1;
			background: #fff;

			.right {
				display: flex;
				justify-content: space-between;
				height: 100rpx;
				line-height: 100rpx;
				padding: 0 40rpx;
				position: relative;
				image {
					width: 100%;
					height: 100%;
				}
				.right_sure {
					width: 50rpx;
					height: 50rpx;
					margin-top: 25rpx;
					position: absolute;
					right: 40rpx;
				}

				.right_sure_select {
					width: 50rpx;
					height: 50rpx;
					margin-top: 25rpx;
					position: absolute;
					right: 40rpx;
					z-index: 50;
				}
			}
		}
	}

	.sort_site_bottom {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 110rpx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.5);
		line-height: 110rpx;
		.left {
			width: 40%;
			text-align: center;
		}

		.right {
			width: 60%;
			.sure_button {
				display: inline-block;
				width: 90%;
				margin-top: 14rpx;
				height: 82rpx;
				line-height: 82rpx;
				font-size: 36rpx;
				font-family: Source Han Sans CN;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				background: rgba(38, 118, 86, 1);
				border-radius: 41rpx;
				text-align: center;
			}
		}
	}
</style>
