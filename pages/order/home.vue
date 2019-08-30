<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">搜索关键字</block>
		</cu-custom>
		<view class="room_list_box">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: "1",
			}
		},
		onReady: function(e) {},
		methods: {

		}
	}
</script>

<style>
</style>
