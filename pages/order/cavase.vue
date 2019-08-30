<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">canvas</block>
		</cu-custom>
		<scroll-view class="you-scroll-inner" ref="youScrollInner" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend"
		 @touchcancel="endFn">
			<view class="you-scroll-content">
				<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
				 :autoplay="true" interval="5000" duration="500" :style="{height: isDown ? ''+translateY+'px':'' }">
					<swiper-item v-for="(item,index) in swiperList" :key="index">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
					</swiper-item>
				</swiper>
				<view class="content">
					<view class="">
						内容
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cardCur: 0,
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],
				dotStyle: false,
				towerStart: 0,
				direction: '',
				scrollTop: 0,
				sPageY: 0,
				mPageY: 0,
				ePageY: 0,
				translateY: 0,
				pullDownStatus: 1, // 1：下拉刷新 2：松开刷新 3：刷新中
				isDown: false
			};
		},
		onLoad: function(options) {
			setTimeout(function() {
				console.log('start pulldown');
			}, 1000);
			// uni.startPullDownRefresh();
		},
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		},
		methods: {
			touchstart(e) { //开始
				// this.isDown = true;
				this.sPageY = e.changedTouches[0].pageY;
				console.log("开始")
			},
			touchmove(e) { //移动
				this.mPageY = e.changedTouches[0].pageY;
				if (this.scrollTop <= 0) {
					let translateY = ((this.mPageY - this.sPageY) / 5) + 170;
					if (translateY < 250) {
						this.translateY = translateY;
						// console.log(translateY)
					}

					if (translateY > 10) {
						this.isDown = true;
					} else {
						this.isDown = false;
					}

					if (this.pullDownStatus != 3) {
						if (this.translateY < 220) {
							this.pullDownStatus = 1;
							console.log("进入下拉刷新")
						} else if (this.translateY > 220) {
							this.pullDownStatus = 2;
							console.log("松手就刷新")
						}
					}
				}
			},
			touchend(e) { //放手
				console.log("放手")
				this.ePageY = e.changedTouches[0].pageY;
				var times = this.translateY
				var time = setInterval(() => {
					this.translateY--
					console.log(this.translateY)
					if (this.translateY < 130) {
						this.isDown = false;
						clearInterval(time)
					}
				}, 5)
				setTimeout(() => {
					// this.translateY = this.translateY >= this.pullDownDistance ? this.pullDownDistance : 0;
					if (this.pullDownStatus == 2) { // 开始刷新
						console.log("开始刷新")
						this.pullDownStatus = 3;
						console.log("刷新中")
						this.endPullDown(3000)
					}
				}, 5)
			},
			endPullDown(mm) { //停止刷新

				setTimeout(() => {
					console.log("刷新结束")
					this.pullDownStatus = 1;
				}, mm || 0);
			},
		},
	}
</script>

<style>
	.screen-swiper {
		box-sizing: border-box;
	}

	* {
		touch-action: pan-y;
	}

	.content {
		height: 600px;
	}
</style>
