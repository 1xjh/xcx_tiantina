<template>
	<view class="sort_price">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{city}}</block>
		</cu-custom>
		<view class="slider">
			<view class="title">价格区间</view>
			<view class="title">不限</view>
			<!-- 区间调整 -->
			<slider-range :value="rangeValue" :min="rangeMin" :max="rangMax" :step="5" :bar-height="3" :block-size="26"
			 background-color="#999999" active-color="#267656" :format="format" :decorationVisible="true" @change="handleRangeChange"></slider-range>
			<view class="nav-list">
				<view>￥{{rangeValue[0]}}</view>
				<view>￥{{rangeValue[1]==rangMax?rangeValue[1]+'以上':rangeValue[1]}}</view>
			</view>
			<view class="select_price">
				<view class="price" @click="select_price(0,400)">￥0-400</view>
				<view class="price" @click="select_price(400,800)">￥400~800</view>
				<view class="price" @click="select_price(800,1200)">￥800~1200</view>
				<view class="price" @click="select_price(1200,1600)">￥1200~1600</view>
				<view class="price" @click="select_price(1600,2000)">￥1600~2000</view>
				<view class="price" @click="select_price(0,2000)">2000以上</view>
			</view>
		</view>
	</view>
</template>
<script>
	import SliderRange from '../../colorui/components/slider.vue'
	export default {
		components: {
			SliderRange
		},
		data() {
			return {
				rangeMin: 0,
				rangMax: 2000,
				rangeValue: [0, 2000],
			}
		},
		methods: {
			select_price(ival, xval) {
				var value = [ival, xval]
				this.rangeValue = value;
			},
			format(val) {
				return
			},
			handleRangeChange(e) {
				this.rangeValue = e
			}
		},
	}
</script>

<style lang="scss">
	page {
		background: #fff;
	}
	.slider {
		width: 90%;
		margin: 0rpx auto;

		.title {
			margin: 30rpx 0;
		}
	}

	.select_price {
		display: flex;
		flex-wrap: wrap;
		margin-top:30rpx;
		// justify-content: space-between;
		.price {
			margin-top: 4%;
			width: 22%;
			height: 80rpx;
			margin-right: 4%;
			text-align: center;
			line-height: 80rpx;
			font-size: 20rpx;
			border-radius: 10rpx;
			background: #F6F5F9;
			&:nth-child(4n+0){
				margin-right: 0;
			}
		}
	}
</style>
