<template>
	<view class="order_comment">
		<!-- 		<uni-nav-bar :statusBar="true" style="padding-top: 20rpx;" left-icon="arrowleft" left-text="返回" title="标题"
		 @click-left="back"></uni-nav-bar> -->
		<cu-custom bgColor="bg-gradual-blue" :isBack="true" :backPress="true" @back-press="back">
			<block slot="backText">返回</block>
			<block slot="content">评论</block>
		</cu-custom>
		<view class="select_comment nav-around">
			<view class="select_item flex">
				<view class="img">
					<image src="../../static/img/hao_comment.png" mode=""></image>
				</view>
				<view class="text">好评</view>
			</view>
			<view class="select_item flex">
				<view class="img">
					<image src="../../static/img/zhong_comment.png" mode=""></image>
				</view>
				<view class="text">中评</view>
			</view>
			<view class="select_item flex">
				<view class="img">
					<image src="../../static/img/cha_comment.png" mode=""></image>
				</view>
				<view class="text">差评</view>
			</view>
		</view>
		<view class="comment_main">
			<view class="comment_textarea margin-top">
				<textarea maxlength="-1" :disabled="modalName!=null" @input="textareaAInput" placeholder="文本输入框"></textarea>
			</view>
			<upload-image @upload="upload"></upload-image>
			<view class="anonymity_box flex">
				<view class="anaonymity_img">
					<image src="../../static/img/anaonymity_active.png" mode=""></image>
				</view>
				<view class="anaonymity_name">匿名评价</view>
			</view>
			<view class="comment_que">民宿评分</view>
			<view class="cooment_star_box">
				<view class="star_line flex" v-for="item in 4" :key="item">
					<view class="star_title">室内装修</view>
					<image class="start_image" src="../../static/img/star_active.png" mode=""></image>
					<image class="start_image" src="../../static/img/star_active.png" mode=""></image>
					<image class="start_image" src="../../static/img/star_active.png" mode=""></image>
					<image class="start_image" src="../../static/img/star_active.png" mode=""></image>
					<image class="start_image" src="../../static/img/star_active.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="bottom_sumbit">
			<view class="button_sub tian-tian-bg" @click="jumpSuccess">提交评价</view>
		</view>
	</view>
</template>

<script>
	import uploadImage from '../../componets/upload-image.vue';
	import uniNavBar from '../../componets/uni-nav-bar/uni-nav-bar.vue';
	export default {
		components: {
			uploadImage,
			uniNavBar
		},
		data() {
			return {
				textareaAInput: '',
				imageList: [],	
			}
		},
		methods: {
			back() {
				if (!this.textareaAInput	 && this.imageList.length < 1) {
					return;
				}
				uni.showModal({
					content: "是否保存为草稿",
					cancelText: "不保存",
					confirmText: "保存",
					success: res => {
						if (res.confirm) {
							console.log('保存')
						} else {
							console.log("不保存")
						}
						uni.navigateBack({
							delta: 1
						})
					}
				})
			},
			textareaAInput(e) {
				this.textareaAValue = e.detail.value
			},
			jumpSuccess() {
				uni.navigateTo({
					url: 'order_comment_success',
				});
			},
			upload(e) {
				this.imageList = e;
			}
		}
	}
</script>

<style lang="scss">
	image {
		width: 100%;
		height: 100%;
		display: block;
	}

	page {
		background: #FFFFFF;
	}

	.bottom_sumbit {
		width: 100%;
		height: 175rpx;
		background: #F6F5F5;
		font-family: Source Han Sans CN;
		overflow: hidden;
		margin-top: 36rpx;

		.button_sub {

			width: 420rpx;
			height: 88rpx;
			font-size: 36rpx;
			font-weight: 500;
			color: #FFFFFF;
			text-align: center;
			margin: 44rpx auto;
			line-height: 77rpx;
			height: 77rpx;
			border-radius: 50rpx;

		}

	}

	.comment_main {
		width: 90%;
		margin: 0 auto;
		font-family: Source Han Sans CN;

		.cooment_star_box {
			font-family: Source Han Sans CN;

			.star_line {
				margin-top: 40rpx;
				align-items: center;

				.start_image {
					width: 40rpx;
					height: 40rpx;
					margin-left: 40rpx;
				}

				.star_title {
					font-size: 28rpx;
					font-weight: 400;
					color: rgba(85, 85, 85, 1);
				}
			}
		}

		.comment_que {
			font-size: 32rpx;
			font-weight: 500;
			height: 77rpx;
			color: rgba(38, 118, 86, 1);
			line-height: 77rpx;
		}

		.anonymity_box {
			height: 77rpx;
			font-size: 28rpx;
			font-weight: 400;
			color: rgba(85, 85, 85, 1);
			line-height: 77rpx;
			margin-top: 32rpx;
			align-items: center;
			padding-bottom: 40rpx;
			border-bottom: 1px solid #eee;

			.anaonymity_img {
				width: 32rpx;
				height: 32rpx;
			}

			.anaonymity_name {
				margin-left: 22rpx;
			}
		}

		.comment_textarea {
			background: rgba(246, 245, 245, 1);
			padding: 20rpx 30rpx;
			display: flex;
			align-items: center;
			min-height: 100rpx;
			justify-content: space-between;
			border-radius: 20px;

			textarea {
				width: 100%;
			}
		}

		// 		.uplode_img {
		// 			margin-top: 30rpx;
		// 			font-family: Source Han Sans CN;
		// 
		// 			.list_uplode_img {
		// 				position: relative;
		// 				margin-right: 14rpx;
		// 				width: 120rpx;
		// 				height: 120rpx;
		// 
		// 				.img {
		// 					width: 100%;
		// 					height: 100%;
		// 					background: #007AFF;
		// 				}
		// 
		// 				.quit_uplode {
		// 					width: 30rpx;
		// 					height: 30rpx;
		// 					position: absolute;
		// 					right: 10rpx;
		// 					top: 10rpx;
		// 					background: #F43F3B;
		// 					color: #FFFFFF;
		// 					text-align: center;
		// 					line-height: 25rpx;
		// 					border-radius: 20rpx;
		// 				}
		// 
		// 				.img_camera {
		// 					width: 48rpx;
		// 					height: 41rpx;
		// 					margin: 15rpx auto;
		// 					background: #007AFF;
		// 				}
		// 
		// 				.uplode_title {
		// 					text-align: center;
		// 					font-size: 24rpx;
		// 					font-weight: 400;
		// 					color: rgba(85, 85, 85, 1);
		// 				}
		// 			}
		// 
		// 			.on_uplode {
		// 				border: 1px dashed #007AFF;
		// 			}
		// 
		// 		}

	}

	.select_comment {
		margin: 30rpx 0rpx;
		width: 100%;

		.select_item {
			align-items: center;

			.img {
				width: 42rpx;
				height: 42rpx;
				margin-right: 15rpx;
			}
		}
	}
</style>
