<template>
	<view class="my_index">
		<cu-custom bgColor="bg-gradual-blue">
			<view slot="content">订单列表</view>
		</cu-custom>
		<!-- 登录 -->
		<view class="my_user_info_cart" style="" v-if="isLogin">
			<view class="my_user_info flex">
				<view class="user_img"></view>
				<view class="user_name_box flex">
					<view class="user_name flex">邹大大 <view class="user_sex_img">
							<image src="" mode=""></image>
						</view>
					</view>
					<view class="user_vip">钻石会员</view>
				</view>
			</view>
			<view class="my_user_title">天天惦记 - 终于盼来了您~</view>
		</view>
		<!-- 未登录 -->
		<view class="my_user_info_cart" style="" v-else>
			<view class="user_login_button" @click="Login">登录</view>
			<view class="user_login_title">Hi！欢迎您的到来~</view>
		</view>
		<view class="my_index_box">
			<view class="details_card details_serve">
				<view class="serve_list nav-around">
					<view class="item flex" @click="jumpWallet()">
						<view class="img"></view>
						<view class="text">我的钱包</view>
					</view>
					<view class="item flex" @click="jumpOrder()">
						<view class="img"></view>
						<view class="text">销售订单</view>
					</view>
					<view class="item flex" @click="jumpTeam()">
						<view class="img"></view>
						<view class="text">我的团队</view>
					</view>
				</view>
			</view>
			<view class="details_card list_entrance nav-between" @click="jumpDetail('yh')">
				<view class="list_button flex">
					<view class="icon_img"></view>
					<view class="icon_title">我的优惠券</view>
				</view>
				<view class="">＞</view>
			</view>
			<view class="details_card list_entrance nav-between" @click="closeServe()">
				<view class="list_button flex">
					<view class="icon_img"></view>
					<view class="icon_title">我的客服</view>
				</view>
				<view class="">＞</view>
			</view>

			<view class="details_card list_entrance nav-between" @click="jumpDetail('up')">
				<view class="list_button flex">
					<view class="icon_img"></view>
					<view class="icon_title">升级会员</view>
				</view>
				<view class="">＞</view>
			</view>
			<view class="details_card list_entrance nav-between" @click="closeMain()">
				<view class="list_button flex">
					<view class="icon_img"></view>
					<view class="icon_title">成为分销商</view>
				</view>
				<view class="">＞</view>
			</view>
			<view class="details_card list_entrance nav-between" @click="jumpDetail('zc')">
				<view class="list_button flex">
					<view class="icon_img"></view>
					<view class="icon_title">会员政策</view>
				</view>
				<view class="">＞</view>
			</view>
		</view>
		<!-- 分销商模块 -->
		<uni-popup :show="minute_show" type="middle" :wrong="true" :title="'成为分销商'" @closeMain="closeMain">
			<form>
				<view class="cu-form-group margin-top">
					<view class="title">姓名</view>
					<input placeholder="请输入姓名" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">电话</view>
					<input placeholder="请输入电话号码" name="input"></input>
				</view>
				<view class="cu-form-group">
					<view class="title">验证码</view>
					<input placeholder="请输入验证码" name="input"></input>
					<button class='cu-btn bg-green shadow'>验证码</button>
				</view>
				<view class="cu-form-group border_bottom">
					<view class="title">支付金额</view>
					<input placeholder="请输入金额" name="input"></input>
				</view>
				<view class="distributor_xieyi_box flex">
					<text class="text-gray select_icon cuIcon-roundcheckfill"></text>
					<view class="distributor_xieyi" @click="jumpAgreement()">※勾选则默认同意《天天惦记会员购买协议》</view>
				</view>
				<view class="suer_distributor">确定</view>
			</form>
		</uni-popup>
		<!-- 客服模块 -->
		<uni-popup :show="serve_show" type="middle" :wrong="true" :title="'联系客服'" @closeMain="closeServe">
			<view class="serve_box">

				<view class="serve_list nav-between">
					<view class="serve_size flex">
						<view class="">1.电话联系</view>
						<view class="">工作时间：8:00-18:00</view>
					</view>
					<view class="icon_img">
						<image src="../../static/img/call.png" mode=""></image>
					</view>
				</view>
				<view class="serve_list nav-between">
					<view class="serve_size flex">
						<view class="">2.微信联系</view>
						<view class="">工作时间：8:00-18:00</view>
					</view>
					<view class="icon_img">
						<image src="../../static/img/weixin.png" mode=""></image>
					</view>
				</view>
				<view class="tiantian_font">
					<image src="../../static/img/tiantian_font.png" mode=""></image>
				</view>
			</view>
		</uni-popup>
		<view class="index_bottom">
			<view class="index_bottom_name">
				<image src="../../static/img/tiantian_name.png" mode=""></image>
			</view>
		</view>
		<view class="index_bottom">
			<view class="index_bottom_phone">
				<image src="../../static/img/inex_phone.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import uniPopup from "../popup.vue"
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				isLogin: false,
				minute_show: false,
				serve_show: false
			}
		},
		methods: {
			jumpAgreement() {
				uni.navigateTo({
					url: '../agreement/agreement',
				});
			},
			Login() {
				this.isLogin = !this.isLogin
			},
			closeServe(val) {
				this.serve_show = !this.serve_show
			},
			closeMain(val) {
				this.minute_show = !this.minute_show
			},
			jumpWallet(val) {
				uni.navigateTo({
					url: 'wallet',
				});
			},
			jumpOrder(val) {
				uni.navigateTo({
					url: '../sell_order/sell_order',
				});
			},
			jumpDetail(val) {
				if (val == "yh") {
					uni.navigateTo({
						url: 'coupon'
					})
				} else if (val == 'up') {
					uni.navigateTo({
						url: '../vip/up_vip'
					})
				}else if(val=='zc'){
					uni.navigateTo({
						url: '../vip/policy_vip'
					})
				}
			},
			jumpTeam(val) {
				uni.navigateTo({
					url: 'my_team',
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	.serve_box {
		.serve_list {
			margin-top: 50rpx;
			padding-bottom: 20rpx;
			border-bottom: 1px solid rgba(204, 204, 204, 1);
			font-family: Source Han Sans CN;
			font-weight: 400;
			align-items: center;

			&:nth-child(2) {
				border: 0;
				margin-top: 20rpx;
			}

			.serve_size {
				flex-direction: column;
				font-size: 30rpx;
				color: rgba(85, 85, 85, 1);
				line-height: 45rpx;
			}

			.icon_img {
				width: 44rpx;
				height: 44rpx;
			}
		}

		.tiantian_font {
			width: 225rpx;
			height: 93rpx;
			margin: 88rpx auto 0rpx auto;
		}
	}



	.border_bottom {
		border-bottom: 1px solid #eee;
	}

	.cu-form-group .title {
		padding: 0;
		width: 180rpx;
	}

	.suer_distributor {
		width: 90%;
		height: 76rpx;
		line-height: 76rpx;
		background: #5CBB94;
		font-size: 36rpx;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		text-align: center;
		border-radius: 40rpx;
		margin: 59rpx auto 0rpx auto;
	}

	.distributor_xieyi_box {
		margin-top: 32rpx;
		align-items: center;

		.select_icon {
			margin-left: 20rpx;
		}

		.distributor_xieyi {
			margin-left: 10rpx;
			white-space: nowrap;
			font-size: 24rpx;
			font-weight: 400;
			color: rgba(85, 85, 85, 1);
		}
	}



	image {
		width: 100%;
		height: 100%;
		display: block;
	}

	.index_bottom {
		margin: 21rpx auto;
		width: 90%;
		z-index: 100;
	}

	.index_bottom .index_bottom_name {
		width: 23%;
		margin: 60rpx auto 20rpx auto;
		height: 62rpx;
	}

	.index_bottom .index_bottom_phone {
		width: 31.7%;
		margin: 0 auto;
		height: 16rpx;
	}


	.list_entrance {
		padding: 37rpx 31rpx;
		align-items: center;
		margin-top: 30rpx;

		.icon_img {
			width: 43rpx;
			height: 35rpx;
			background: #007AFF;
		}

		.icon_title {
			font-size: 28rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: rgba(85, 85, 85, 1);
			margin-left: 26rpx;
		}

	}

	.my_user_info_cart {
		font-family: Source Han Sans CN;
		height: 400rpx;
		background-image: url('https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3041326072,1554514476&fm=26&gp=0.jpg');
		border-radius: 0rpx 0rpx 240rpx 50%/20rpx;
		overflow: hidden;

		.user_login_button {
			width: 260rpx;
			height: 80rpx;
			text-align: center;
			background: rgba(255, 255, 255, 1);
			border-radius: 40px;
			line-height: 80rpx;
			margin: 0 auto;
			font-size: 36rpx;
			font-family: Source Han Sans CN;
			font-weight: bold;
			color: rgba(38, 118, 86, 1);
			margin-top: 56rpx;
		}

		.user_login_title {
			font-size: 36rpx;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
			line-height: 49px;
			text-align: center;
		}

		.my_user_info {
			padding-top: 72rpx;
			width: 90%;
			margin: 0 auto;
			color: #fff;

			.user_img {
				width: 120rpx;
				height: 120rpx;
				border-radius: 50%;
				background: #007AFF;
			}

			.user_name_box {
				margin-left: 48rpx;
				flex-direction: column;
				justify-content: space-between;

				.user_name {
					font-size: 36rpx;
					font-weight: bold;
					color: rgba(255, 254, 254, 1);
					align-items: center;

					.user_sex_img {
						width: 26rpx;
						height: 26rpx;
						background: #007AFF;
						margin-left: 26rpx;
					}
				}

				.user_vip {
					font-size: 26rpx;
					font-weight: bold;
				}
			}
		}

		.my_user_title {
			width: 90%;
			margin: 0 auto;
			text-align: center;
			font-size: 26rpx;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
			margin-top: 48rpx;
		}


	}

	.my_index_box {
		width: 90%;
		margin: 0 auto;

		.details_card {
			background: #fff;
			border-radius: 20rpx;

		}

		.details_serve {
			padding: 30rpx 0rpx;
			z-index: 100;
			margin-top: -100rpx;

			.serve_list {
				font-family: Source Han Sans CN;

				.item {
					flex-direction: column;
					align-items: center;

					.img {
						width: 86rpx;
						height: 86rpx;
						background: #007AFF;
						opacity: 0.9;
						border-radius: 50%;
					}

					.text {
						margin-top: 24rpx;
						text-align: center;
						font-size: 24rpx;
						font-weight: 400;
						color: rgba(85, 85, 85, 1);
						line-height: 40rpx;
					}
				}
			}
		}
	}
</style>
