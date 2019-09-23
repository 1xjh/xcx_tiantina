<template>
	<view class="">
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-green cur':''" v-for="(item,index) in tabList" :key="index" @tap="tabSelect(index)">
				{{item.name}}
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: {
			tabList: Array,
			TabCur: Number,
			scrollLeft: Number
		},
		data() {
			return {
				index: 0
			}
		},
		methods: {
			tabSelect(val) {

				this.$emit("tabtap", val)

			},
		}
	}
</script>

<style>
</style>
