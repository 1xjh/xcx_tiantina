<template>

	<view class="sort">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{city}}</block>
		</cu-custom>
		<view class="sort_content">
			<view class="sort_title" :class="active==index?'tian-tian-color':''" v-for="(item,index) in arr" :key="index" @click="select(index)">{{item}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr: ["智能排序", "距离优先", "低价优先", "高价优先", "好评优先"],
				active: 0
			}
		},
		methods: {
			select(val) {
				this.active = val
			}
		}
	}
</script>

<style lang="scss">
	.sort_content {
		width: 90%;
		margin: 30rpx auto;

		.sort_title {
			height: 90rpx;
			font-size: 30rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			line-height: 90rpx;
		}
	}
</style>
