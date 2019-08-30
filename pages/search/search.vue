<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">搜索关键字</block>
		</cu-custom>
		<view class="cu-bar search bg-white">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input type="text" placeholder="搜索城市"></input>
			</view>
		</view>
		<!-- 搜索模块 -->
		<view class="search_content_box">
			<view class="search_content">
				<view class="left flex">
					<text class="lg text-gray cuIcon-phone"></text>
					<view class="content_name">广州</view>
				</view>
				<view class="right">广东</view>
			</view>
			<view class="search_content">
				<view class="left flex">
					<text class="lg text-gray cuIcon-phone"></text>
					<view class="content_name">广州dsfdsf电饭锅水电费水电费水围氛围氛围感和人物</view>
				</view>
				<view class="right">广东</view>
			</view>
		</view>
		<!-- 未搜索到商品 -->
		<view class="no_commodity">
			<view class="none_img">
				<image src="../../static/img/none_list.png" mode=""></image>
			</view>
			<view class="none_text">没有搜到匹配结果,换个词试试哦</view>
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
		onReady: function(e) {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.search_content_box {
		width: 90%;
		margin: 0rpx auto;
		padding-top: 10rpx;

		.search_content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			margin: 15rpx 0rpx;

			.left {
				align-items: center;

				.content_name {
					margin-left: 20rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
					width: 550rpx;
				}
			}
		}
	}

	.no_commodity {
		display: none;
		width: 80%;
		margin: 100rpx auto;

		.none_text {
			margin: 20rpx 0;
			text-align: center;
		}

		.none_img {
			width: 100%;
			margin: 0 auto;
			text-align: center;
		}
	}
</style>
