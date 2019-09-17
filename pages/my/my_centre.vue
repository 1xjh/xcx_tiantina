<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">编辑个人资料</block>
		</cu-custom>
		<view class="centre_head flex">
			<view class="info_img cu-avatar round margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);">
				<view class="info_img_min cuIcon-camera text-white"></view>
			</view>
		</view>
		<view class="centre_main">
			<view class="centre_list nav-between" @click="modal()">
				<view class="centre_left flex">
					<view class="centre_main_title">昵称</view>
					<view class="centre_main_centent">天天惦记</view>
				</view>
				<text class="centre_right_icon cuIcon-right text-gray"></text>
			</view>
			<view class="centre_list nav-between">
				<view class="centre_left flex">
					<view class="centre_main_title">姓名</view>
					<view class="centre_main_centent">暂无</view>
				</view>
				<text class="centre_right_icon cuIcon-right text-gray"></text>
			</view>
			<view class="centre_list nav-between">
				<view class="centre_left flex">
					<view class="centre_main_title">性别</view>
					<view class="centre_main_centent">保密</view>
				</view>
				<text class="centre_right_icon cuIcon-right text-gray"></text>
			</view>
			<view class="centre_list nav-between">
				<view class="centre_left flex">
					<view class="centre_main_title">身份证</view>
					<view class="centre_main_centent">暂无</view>
				</view>
				<text class="centre_right_icon cuIcon-right text-gray"></text>
			</view>
			<view class="centre_list nav-between">
				<view class="centre_left flex">
					<view class="centre_main_title">生日</view>
					<view class="centre_main_centent">暂无</view>
				</view>
				<text class="centre_right_icon cuIcon-right text-gray"></text>
			</view>
			<view class="centre_list nav-between">
				<view class="centre_left flex">
					<view class="centre_main_title">手机</view>
					<view class="centre_main_centent">86 - 157****3833</view>
				</view>
				<text class="centre_right_icon cuIcon-right text-gray"></text>
			</view>
		</view>

		<view class="cu-modal" :class="modalName?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">Modal标题</view>
					<view class="action" @tap="modal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					Modal 内容。
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-green text-green" @tap="modal">取消</button>
						<button class="cu-btn bg-green margin-left" @tap="modal">确定</button>
					</view>
				</view>
			</view>
		</view>

		<view class="cnetre_footer">退出登录</view>

	</view>
</template>

<script>
	export default {
		data() {

			return {
				modalName: false
			}
		},
		methods: {
			modal() {
				this.modalName = !this.modalName
			}
		}
	}
</script>

<style lang="scss">
	image {
		width: 100%;
		height: 100%;
	}

	.centre_head {
		width: 100%;
		margin: 60rpx 0rpx 15rpx 0rpx;
		justify-content: center;

		.info_img {
			position: relative;
			width: 160rpx;
			height: 160rpx;

			.info_img_min {
				width: 48rpx;
				height: 48rpx;
				background: #267656;
				position: absolute;
				font-size: 26rpx;
				bottom: 0rpx;
				border-radius: 30rpx;
				padding: 10rpx;
				right: 0rpx;
			}
		}
	}

	.centre_main {
		width: 90%;
		margin: 0 auto;

		.centre_list {
			font-family: Source Han Sans CN;
			font-weight: 400;
			align-items: center;
			margin-top: 67rpx;

			.centre_left {
				flex-direction: column;

				.centre_main_title {
					font-size: 26rpx;
					color: rgba(170, 170, 170, 1);
				}

				.centre_main_centent {
					font-size: 28rpx;
					color: rgba(85, 85, 85, 1);
					margin-top: 32rpx;
				}
			}

			.centre_right_icon {
				transform: scale(1.5);
			}

		}
	}

	.cnetre_footer {
		font-size: 28rpx;
		font-family: Source Han Sans CN;
		font-weight: 400;
		text-align: center;
		color: rgba(38, 118, 86, 1);
		line-height: 55px;
	}
</style>
