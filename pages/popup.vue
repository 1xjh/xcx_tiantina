<template>
	<view class="distributor_box_shadow" v-show="show">
		<view class="distributor_box_card">
			<view class="flex distributor_top" v-if="wrong">
				<view class="distributor_name">{{title}}</view>
				<text class="text-gray fork_img cuIcon-roundclose" @click="quitCard"></text>
			</view>
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			wrong: {
				type: Boolean,
				default: false,
			},
			show: {
				type: Boolean,
				default: false,
			},
			title: {
				type: String,
				default: '默认标题',
			}
		},
		data() {
			return {

			}
		},
		methods: {
			quitCard() {
				this.$emit('closeMain', false)
			}
		}
	}
</script>

<style lang="scss">
	.distributor_box_shadow {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 900;
		background: rgba(127, 127, 127, 0.5);
		font-family: Source Han Sans CN;

		.distributor_box_card {
			z-index: 991;
			width: 90%;
			border-radius: 20rpx;
			margin: 40% auto;
			background: #FFFFFF;
			padding: 36rpx 45rpx;

			.distributor_top {
				align-items: center;
				width: 100%;
				justify-content: flex-end;

				.distributor_name {
					flex: 1;
					font-size: 36rpx;
					font-weight: bold;
					text-align: center;
					margin-right: -46rpx;
					color: rgba(85, 85, 85, 1);
					line-height: 45rpx;
				}

				.fork_img {
					transform: scale(1.5);
				}
			}

		}
	}
</style>
