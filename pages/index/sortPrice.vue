<template>
	<view class="sort_price">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{city}}</block>
		</cu-custom>
		<view>价格区间</view>
		<view>不限</view>
		<!-- 区间调整 -->

		<view class="slider">
			<view class="slider_liner total_width" :style="{backgroundColor: '#f00'}"></view>
			<view class="slider_liner slider_liner_left  active" :style="{backgroundColor: '#000', width:sliderLeftPosition + '%'}"></view>
			<view class="slider_liner slider_liner_right  active" :style="{backgroundColor: '#000' ,width:right + '%'}"></view>
			<view class="slider_chunk_left slider_chunk" :style="{left: sliderLeftPosition + '%'}" @touchstart=" _start($event,1)"
			 @touchmove="_move($event)" @touchend="_end"></view>
			<view class="slider_chunk_right slider_chunk" :style="{right: right + '%'}" @touchstart=" _start($event,2)"
			 @touchmove="_move" @touchend="_end"></view>
		</view>
		<view class="">
			左边的值:{{sliderLeftPosition}}
		</view>
		<view class="">
			右边的值:{{sliderRightPosition}}
		</view>
	</view>
</template> 

<script>
	export default {
		data() {
			return {
				sliderX: 0,
				left: 0,
				right: 0,
				min: 0,
				max: 100,
				isRight: true,
				chunkWidth: "", //按钮的宽
				totalWith: 0, //线的总宽
				value1: 0,
				value2: 100,
			}
		},
		onLoad: function(options) {
			var _this = this 
			uni.getSystemInfo({
				success: function(res) { // res - 各种参数
					let chunkWidth = uni.createSelectorQuery().select(".slider_chunk");
					let totalWith = uni.createSelectorQuery().select(".total_width");
					chunkWidth.boundingClientRect(function(data) { //data - 各种参数
						_this.chunkWidth = data.width
					}).exec()
					totalWith.boundingClientRect(function(data) { //data - 各种参数
						_this.totalWith = data.width
					}).exec()
				}
			});
		},

		computed: {
			// 左边滑块的坐标
			sliderLeftPosition() {
				return ((this.value1 - this.min) / (this.max - this.min)) * 100;
			},
			// 右边滑块的坐标
			sliderRightPosition() {
				return ((this.value2 - this.min) / (this.max - this.min)) * 100
			},
		},
		methods: {
			_start: function(e, val) {
				console.log(1111)
				this.sliderX = (e.changedTouches[0].clientX) + this.chunkWidth;
				this.isRight = val == 1 ? false : true

				// console.log(length, left, right)
				// console.log(this.getPercent(20, 100))
			},
			_move: function(e) {
				console.log(1111)
				if (this.isRight) {
					this.right = ~(e.changedTouches[0].pageX - this.sliderX)
					var totalWith = this.totalWith + (this.chunkWidth * 2)
					this.value2 = this.getPercent(num, totalWith)
				} else {
					var num = e.changedTouches[0].pageX - this.sliderX // 当前移动的值
					var totalWith = this.totalWith + (this.chunkWidth * 2)
					this.value1 = this.getPercent(num, totalWith)
				}
			},
			_end: function(e) {
				this.sliderX = 0
			},
			getPercent: function(num, total) {
				num = parseFloat(num);
				total = parseFloat(total);
				return total <= 0 ? "0%" : (Math.round(num / total * 10000) / 100.00);
			}
		},
	}
</script>

<style lang="scss">
	.slider {
		position: relative;
		width: 90%;
		height: 30rpx;
		margin: 30rpx auto;

		.slider_chunk {
			position: absolute;
			top: -12rpx;
			width: 30rpx;
			height: 30rpx;
			border-radius: 40rpx;
			background: #fff;
			z-index: 15;
		}

		.slider_liner {
			position: absolute;
			height: 4rpx;
			width: 100%;
		}

		,

		.slider_liner_right {
			right: 0
		}

		.slider_liner_left {
			left: 0;
		}

		.active {
			z-index: 10;
			// text-align: center;
		}

		.slider_chunk_right {
			right: 0;
		}

		.slider_chunk_left {
			left: 0;
		}
	}
</style>
