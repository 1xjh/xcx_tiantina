<template>
	<view class="you-scroll" ref="youScroll">
		<view class="pullDown" :style="{ top: translateY+'px', transition: isDown ? '0s' : 'top 0.3s' }">
			<slot name="pullDown">
				<img src="../static/pullDown.jpg" :class="{'down-icon': true,'animate': pullDownStatus == 3}" :style="{left: ((translateY > 50 ? 50 : translateY) * (50/50))+'%'}"></img>
				<span :style="{right: ((translateY > 50 ? 50 : translateY) * (50/50))+'%'}">
					<block v-if="pullDownStatus == 1">{{downPullToRefresh}}</block>
					<block v-if="pullDownStatus == 2">{{downReleaseToRefresh}}</block>
					<block v-if="pullDownStatus == 3">{{downRefreshing}}</block>
				</span>
			</slot>
		</view>
		<scroll-view class="you-scroll-inner" ref="youScrollInner" scroll-y :style="{ transform: 'translateY('+translateY+'px)', transition: isDown ? '0s' : 'transform 0.3s' }"
		 @touchstart="startFn" @touchmove="moveFn" @touchend="endFn" @touchcancel="endFn" @scroll="scroll">
			<view class="you-scroll-content">
				<slot></slot>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				sPageY: 0,
				mPageY: 0,
				ePageY: 0,
				translateY: 0,
				pullDownStatus: 1, // 1：下拉刷新 2：松开刷新 3：刷新中
				isDown: false
			};
		},
		props: {
			pullDownDistance: {
				type: Number,
				default: 50 // 下拉刷新距离
			},
			reachBottomDistance: {
				type: Number,
				default: 30 // 上拉加载距离
			},
			downPullToRefresh: {
				type: String,
				default: '下拉刷新'
			},
			downReleaseToRefresh: {
				type: String,
				default: '松开刷新'
			},
			downRefreshing: {
				type: String,
				default: '刷新中…'
			},
		},
		methods: {
			startFn(e) {
				this.isDown = true;
				this.sPageY = e.changedTouches[0].pageY;
				this.pointY = this.translateY;
			},
			moveFn(e) {
				let view = uni.createSelectorQuery().in(this).select(".you-scroll-inner");
				view.fields({
					size: true,
					scrollOffset: true
				}, data => {
					this.scrollTop = data.scrollTop;
					this.mPageY = e.changedTouches[0].pageY;
					if (this.scrollTop <= 0) {
						let translateY = ((this.mPageY - this.sPageY) / 2) + this.pointY;
						this.translateY = (translateY < 0 ? 0 : translateY);
						console.log(this.translateY)
						if (this.pullDownStatus != 3) {
							if (this.translateY < this.pullDownDistance) {
								this.pullDownStatus = 1;
							} else if (this.translateY >= this.pullDownDistance) {
								this.pullDownStatus = 2;
							}
							console.log(this.translateY)
						}
					}
				}).exec();
				
			},
			endFn(e) {
				this.isDown = false;
				this.ePageY = e.changedTouches[0].pageY;
				setTimeout(() => {
					this.translateY = this.translateY >= this.pullDownDistance ? this.pullDownDistance : 0;
					if (this.pullDownStatus == 2) { // 开始刷新
						this.pullDownStatus = 3;
						this.$emit('onPullDown', this.endPullDown);
					}

				}, 100)
			},
			endPullDown(mm) {
				if (this.timeout) clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					this.translateY = 0;
					this.pullDownStatus = 1;
				}, mm || 0);
			},
			prevent(e) {
				if (this.translateY > 0) {
					e.preventDefault();
				}
			},
			scroll(e) {
				this.$emit('onScroll', e);

				if (this.timeout) clearTimeout(this.timeout);
				this.timeout = setTimeout(() => {
					this.scrolltolower(e);
				
				}, 20);
			},
			scrolltolower(e) {
				let view = uni.createSelectorQuery().in(this).select(".you-scroll-inner");
				view.fields({
					size: true,
					scrollOffset: true
				}, data => {
					if (data.scrollTop >= (e.detail.scrollHeight - data.height - this.reachBottomDistance)) {
						this.$emit('onLoadMore', e);
					}
				}).exec();

			}
		},
		
		mounted() {
			// #ifdef H5
			document.body.addEventListener('touchmove', this.prevent);
			// #endif
		},
		destroyed() {
			// #ifdef H5
			document.body.removeEventListener('touchmove', this.prevent);
			// #endif
		}
	}
</script>

<style lang="less" scoped>
	* {
		touch-action: pan-y;
	}

	.you-scroll {
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		// background-color: #eee;

		.pullDown {
			width: 100%;
			height: 40px;
			line-height: 50px;
			text-align: center;
			font-size: 14px;
			overflow: hidden;
			transform: translateY(-100%);
			position: absolute;
			top: 0;
			left: 0;

			.down-icon {
				width: 40px;
				height: 32px;
				margin-top: 7px;
				display: inline-block;
				vertical-align: middle;
				transform: translateX(-100%);
				position: absolute;
				left: 0;

				&.animate {
					animation: scaleIcon 1s infinite linear;
				}
			}

			span {
				white-space: nowrap;
				overflow: hidden;
				display: inline-block;
				vertical-align: sub;
				transform: translateX(100%);
				position: absolute;
				right: 0;
			}
		}

		.you-scroll-inner {
			width: 100%;
			height: 100%;
			overflow: hidden;
			position: relative;

			.you-scroll-content {
				overflow: hidden;
			}
		}
	}

	@keyframes scaleIcon {
		0% {
			transform: translateX(-100%) scaleY(1);
		}

		40% {
			transform: translateX(-100%) scaleY(0.8);
		}

		80% {
			transform: translateX(-100%) scaleY(0.9);
		}

		100% {
			transform: translateX(-100%) scaleY(1);
		}
	}
</style>
