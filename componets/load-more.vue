<template>
	<view class="load_more">{{loadtext}}</view>
</template>

<script>
	export default{
		props:{
			loadtext:String
		}
	}
</script>

<style>
	.load_more {
		width: 100%;
		text-align: center;
		height: 80rpx;
		line-height: 80rpx;
		font-size: 25rpx;
		color: #999999;
	}
</style>
