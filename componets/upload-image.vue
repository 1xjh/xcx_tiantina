<template>
	<view class="uplode_img flex">
		<block v-for="(image,index) in imageList" :key="index">
			<view class="list_uplode_img">
				<view class="img">
					<image :src="image" :data-src="image" @tap="previewImage"></image>
				</view>
				<view class="quit_uplode" @tap="imgDetele(index)">x</view>
			</view>
		</block>
		<view class="list_uplode_img on_uplode" @tap="chooseImage">
			<view class="img_camera"></view>
			<view class="uplode_title">上传照片</view>
		</view>
	</view>
</template>

<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	export default {
		data() {
			return {
				text: '',
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
			}
		},
		methods: {
			imgDetele(index) {
				uni.showModal({
					title: '提示',
					content: '是否删除该图片',
					success: (res) => {
						if (res.confirm) {
							this.imageList.splice(index, 1)
							this.$emit("upload",this.imageList)
						}
					}
				})
			},
			chooseImage: async function() {
				// #ifdef APP-PLUS
				// TODO 选择相机或相册时 需要弹出actionsheet，目前无法获得是相机还是相册，在失败回调中处理
				if (this.sourceTypeIndex !== 2) {
					let status = await this.checkPermission();
					if (status !== 1) {
						return;
					}
				}
				// #endif

				if (this.imageList.length === 9) {
					return;
				}
				uni.chooseImage({
					sourceType: sourceType[this.sourceTypeIndex],
					sizeType: sizeType[this.sizeTypeIndex],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						this.imageList = this.imageList.concat(res.tempFilePaths);
						this.$emit("upload",this.imageList)
					},
					fail: (err) => {
						// #ifdef APP-PLUS
						if (err['code'] && err.code !== 0 && this.sourceTypeIndex === 2) {
							this.checkPermission(err.code);
						}
						// #endif
					}
				})
			},

			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},

		}
	}
</script>

<style lang="scss">
	.uplode_img {
		margin-top: 30rpx;
		font-family: Source Han Sans CN;

		.list_uplode_img {
			position: relative;
			margin-right: 14rpx;
			width: 120rpx;
			height: 120rpx;

			.img {
				width: 100%;
				height: 100%;
				background: #007AFF;
			}

			.quit_uplode {
				width: 30rpx;
				height: 30rpx;
				position: absolute;
				right: 10rpx;
				top: 10rpx;
				background: #F43F3B;
				color: #FFFFFF;
				text-align: center;
				line-height: 25rpx;
				border-radius: 20rpx;
			}

			.img_camera {
				width: 48rpx;
				height: 41rpx;
				margin: 15rpx auto;
				background: #007AFF;
			}

			.uplode_title {
				text-align: center;
				font-size: 24rpx;
				font-weight: 400;
				color: rgba(85, 85, 85, 1);
			}
		}

		.on_uplode {
			border: 1px dashed #007AFF;
		}

	}
</style>
