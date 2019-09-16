<template>
	<view>
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">{{city}}</block>
		</cu-custom>
		<view class="cu-bar search bg-white" @click="jumpSearch">
			<view class="search-form round">
				<text class="cuIcon-search"></text>
				<input @input="onKeyInput" type="text" placeholder="搜索图片、文章、视频" confirm-type="search"></input>
			</view>
		</view>
		<view class="condition_list flex">
			<view class="item" @click="jumpCondition(1)">
				<text>智能排序</text>
				<view class="triangle"></view>
			</view>
			<view class="item" @click="jumpCondition(2)">
				<text>品牌价格</text>
				<view class="triangle"></view>
			</view>
			<view class="item" @click="jumpCondition(3)">
				<text>位置区域</text>
				<view class="triangle"></view>
			</view>
			<view class="item" @click="jumpCondition(4)">
				<text>位置区域</text>
				<view class="triangle"></view>
			</view>
		</view>
		<!-- 院子列表 -->
		<view class="list_box">
			<view class="list" @click="jumpDetalis">
				<view class="list_img">
					<image src="../../static/img/img3.jpg" mode=""></image>
				</view>
				<view class="list_bottom_box flex">
					<view class="list_bottom_left">
						<view class="courtyard_discounts_list flex">
							<view>
								暑假大促
							</view>
							<view>
								暑假大促
							</view>
							<view>
								暑假大促
							</view>
							<view>
								暑假大促
							</view>
							<view>
								暑假大促
							</view>
						</view>
						<view class="courtyard_name">
							天天惦记·肇庆超级民宿
						</view>
						<view class="courtyard_site">
							肇庆端州岩前宝环大道89号
						</view>
						<view class="courtyard_price tian-tian-color">
							300元
						</view>
					</view>
				</view>
			</view>
			<view class="list">
				<view class="list_img">
					<image src="../../static/img/img3.jpg" mode=""></image>
				</view>
				<view class="list_bottom_box flex">
					<view class="list_bottom_left">
						<view class="courtyard_discounts_list flex">
							<view>
								暑假大促
							</view>
							<view>
								暑假大促
							</view>
							<view>
								暑假大促
							</view>
							<view>
								暑假大促
							</view>
							<view>
								暑假大促
							</view>
						</view>
						<view class="courtyard_name">
							天天惦记·肇庆超级民宿
						</view>
						<view class="courtyard_site">
							肇庆端州岩前宝环大道89号
						</view>
						<view class="courtyard_price tian-tian-color">
							300元
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 没有院子 -->
		<view class="none_list">
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
				city: "广州",
				inputValue: 0
			}
		},
		onLoad() {

		},
		methods: {
			onKeyInput(e) {
				this.inputValue = e.target.value
			},
			jumpSearch(e) {
				uni.navigateTo({
					url: '../city/city'
				});
			},
			jumpCondition(value) {
				if (value == 1) {
					uni.navigateTo({
						url: '../index/sortAi'
					});
				} else if (value == 2) {
					uni.navigateTo({
						url: '../index/sortPrice'
					});
				}else if(value ==3){
					uni.navigateTo({
						url: '../index/sortSite'
					});
				}else if(value==4){
					uni.navigateTo({
						url: '../index/sortAppoint'
					});
				}
			},
			jumpDetalis(){
				uni.navigateTo({
					url: '../detalis/details'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.condition_list {
		justify-content: space-around;
		background: #fff;
		// padding-bottom: 25rpx;
		margin-bottom: 30rpx;
		box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.05);

		.item {
			padding-right: 25rpx;
			text-align: center;
			position: relative;
			font-size: 20rpx;
			padding-bottom: 25rpx;

			.triangle {
				position: absolute;
				right: 0;
				bottom: 30rpx;
				width: 0;
				height: 0;
				border-bottom: 6px solid #267656;
				border-left: 6px solid transparent;
			}
		}
	}

	.none_list {
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

	@import url("courtyard_list");
</style>
