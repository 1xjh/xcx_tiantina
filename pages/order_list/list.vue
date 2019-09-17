<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue">
			<view slot="content">订单列表</view>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav">
			<view class="flex text-center">
				<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in 4" :key="index"
				 @tap="tabSelect" :data-id="index">
					Tab{{index}}
				</view>
			</view>
		</scroll-view>

		<view class="list_order" v-if="TabCur==1">
			<list-item></list-item>
		</view>
		<view class="order_no_login" v-else>
			<view class="img">
				<image src="../../static/img/OrderNoLogin.png" mode=""></image>
			</view>
			<view class="title">请先登录后查看订单</view>
			<view class="button">登录</view>
			<!-- 图片窗口 -->
			<!-- 		<view class="cu-modal">
				<view class="cu-dialog">
					<view class="bg-img" style="background-image: url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg');height:200px;">
						<view class="cu-bar justify-end text-white">
							<view class="action" @tap="hideModal">
								<text class="cuIcon-close "></text>
							</view>
						</view>
					</view>
					<view class="cu-bar bg-white">
						<view class="action margin-0 flex-sub  solid-left" @tap="hideModal">我知道了</view>
					</view>
				</view>
			</view>
 -->
		</view>
	</view>
</template>

<script>
	import listItem from "./list_item"
	export default {
		components: {
			"list-item": listItem
		},
		data() {
			return {
				TabCur: 0,
				scrollLeft: 0
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="scss" scoped>
	image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.order_no_login {
		width: 100%;

		.img {
			width: 445rpx;
			height: 316rpx;
			margin: 0 auto;
			margin-top: 100rpx;
		}

		.title {
			margin: 0 auto;
			width: 445rpx;
			text-align: center;
			font-size: 30rpx;
			font-weight: 400;
			height: 120rpx;
			line-height: 120rpx;
			color: rgba(153, 153, 153, 1);
		}

		.button {
			width: 330rpx;
			height: 80rpx;
			line-height: 80rpx;
			margin: 0 auto;
			color: #FFFFFF;
			background: #267656;
			border-radius: 50rpx;
			text-align: center;
		}
	}

	.list_order {
		width: 93%;
		margin: 0 auto;
	}

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
