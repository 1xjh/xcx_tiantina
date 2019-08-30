<template>
	<view class="">
		<cu-custom bgColor="bg-gradual-blue" :isBack="true">
			<block slot="backText">返回</block>
			<block slot="content">城市</block>
		</cu-custom>
		<view class="cu-bar search bg-white" @click="jumpSearch" >
			<view class="search-form round" >
				<text class="cuIcon-search"></text>
				<input @input="searchList" type="text" placeholder="搜索城市" disabled="true" confirm-type="search"></input>
			</view>
		</view>
		<view class="searchLetter touchClass">
			<view class="thishotText" @click="scrollTo('热门')">
				<view style="margin-top:0;">当前</view>
				<view style="margin-top:0;">热门</view>
			</view>
			<view v-for="letter in allArr" style="color:#2ab4ff;font-size:26rpx;" :key="letter" @click="scrollTo(letter.letter)">{{letter.letter}}</view>
		</view>
		<scroll-view :scroll-into-view="scrollIntoId" :scroll-y="true" :scroll-with-animation="true" :style="{height:windowHeight}">
			<view class="selection">
				<view v-if="arr.length">
					<text id="current" class="hotcity hotcity-common">历史记录</text>
					<view>
						<block v-for="item in arr" :key="item">
							<view class="weui-grid" @click="bindCity(item)">
								<view class="weui-grid__label">{{item}}</view>
							</view>
						</block>
					</view>
				</view>
			</view>
			<view class="selection">
				<view v-if="hotcityList.length">
					<text id="current" class="hotcity hotcity-common">热门城市</text>
					<view>
						<block v-for="city in hotcityList" :key="city">
							<view class="weui-grid" @click="bindCity(city)">
								<view class="weui-grid__label">{{city}}</view>
							</view>
						</block>
					</view>
				</view>
			</view>
			<view class="selection" :id="cityList.letter" v-for="cityList in allArr" :key="cityList">
				<view class="item_letter">{{cityList.letter}}</view>
				<view>
					<block v-for="city in cityList.lists" :key="city">
						<view class="weui-grid" @click="bindCity(city)">
							<view class="weui-grid__label"> {{city}}</view>
						</view>
					</block>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import city from "../../util/city.js"
	export default {
		data() {
			return {
				searchLetter: [],
				showLetter: "",
				windowHeight: 0,
				arr: [],
				cityList: [],
				isShowLetter: false,
				scrollIntoId: '', //跳转id
				city: "",
				allArr: [],
				hotcityList: [],
				current: this.value

			}
		},
		onLoad: function(e) {
			var that = this
			var hotcityList = ["广州", "珠海", "北京", "上海"]
			var searchLetter = city.searchLetter;
			var cityList = city.cityList();
			var cityA = []
			var cityB = []
			var cityName = []
			for (var item of cityList) {
				cityA.push(item)
			}
			for (var i = 0; i < cityA.length; i++) {
				cityB.push(cityA[i].cityInfo)
			}

			var allArr = []
			for (var i = 0; i < cityB.length; i++) {
				var citys = {}
				var arr = [];
				for (var a = 0; a < cityB[i].length; a++) {
					cityName.push(cityB[i][a].city)
					arr.push(cityB[i][a].city)
				}
				citys.lists = arr
				citys.letter = searchLetter[i]
				allArr.push(citys)
			}
			this.cityName = cityName;
			this.allArr = allArr;
			this.hotcityList = hotcityList
		},

		mounted() {
			this.getSystemInfo()
		},
		// 搜索
		methods: {
			// 计算高
			getSystemInfo() {
				uni.getSystemInfo().then(res => {
					let [error, data] = res
					this.windowHeight = `${data.windowHeight}px`
				})
			},
			// 跳转搜索
			jumpSearch(e){
				uni.navigateTo({
					url: '../search/search'
				});
			},
			// 搜索城市
			searchList(e) {
				console.log(111)
				var cityName = this.cityName
				var value = e.target.value
				if (value.length != 0) {
					var arr = [];
					for (var i in cityName) {
						if (cityName[i].match(value) != null) {
							arr.push(cityName[i]);
						}
					}
					this.arr = arr
					if (arr.length != 0) {
						this.input = true
					}
				} else {
					this.arr = []
					this.input = false
				}
			},
			// 移动
			scrollTo(letter) {
				this.scrollIntoId = letter === '热门' ? 'current' : letter
				uni.showToast({
					icon: "none",
					title: letter,
					duration: 2000
				});
			},
			//选择城市
			bindCity(e) {
				this.city = e
				console.log("选择的城市是:" + e)
				getApp().globalData.city = e
				uni.navigateBack({
					delta: 1,
					animationType: 'pop-out',
					animationDuration: 200
				})
			},
		}
	}
</script>

<style>
	.searchLetter {
		position: fixed;
		right: 0;
		width: 50rpx;
		text-align: center;
		justify-content: center;
		display: flex;
		flex-direction: column;
		color: #666;
		z-index: 1;
	}

	.searchLetter view {
		margin-top: 10rpx;
	}

	.touchClass {
		background: #f6f5f5;
		color: #fff;
		padding-top: 5rpx;
	}

	.selection {
		display: flex;
		width: 100%;
		flex-direction: column;
		margin-top: 10rpx;
	}

	scroll-view {
		background: #f6f5f5;
	}

	.item_letter {
		display: flex;
		background-color: #f5f5f5;
		height: 40rpx;
		padding-left: 34rpx;
		align-items: center;
		font-size: 24rpx;
		color: #666;
	}

	.item_city {
		/* display: flex; */
		background-color: #fff;
		height: 100rpx;
		padding-left: 34rpx;
		align-items: center;
		border-bottom: 1rpx solid #ededed;
		font-size: 24rpx;
		color: #666;
		display: block;
	}

	.hotcity-common {
		font-size: 24rpx;
		color: #666;
		padding: 0 0 0 30rpx;
	}

	.thisCity {
		padding-top: 30rpx;
	}

	.thisCityName {
		display: inline-block;
		border: 1rpx solid #2ab4ff;
		border-radius: 8rpx;
		padding: 10rpx 0;
		font-size: 24rpx;
		color: #2ab4ff;
		text-align: center;
		min-width: 149.5rpx;
		margin: 20rpx 0 20rpx 30rpx;
	}

	.thishotText {
		color: #2ab4ff;
		font-size: 20rpx;
		margin: 0 !important;
	}

	.slectCity {
		border-color: #2ab4ff !important;
	}

	.slectCity view {
		color: #2ab4ff !important;
	}

	.weui-grid {
		position: relative;
		float: left;
		padding: 10rpx 0;
		background: #fff;
		width: 200rpx;
		box-sizing: border-box;
		border: 1rpx solid #ececec;
		border-radius: 35rpx;
		margin: 10rpx 12rpx;

	}

	.weui-grid__label {
		display: block;
		text-align: center;
		color: #333;
		font-size: 24rpx;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		margin-bottom: 2px;
	}

	.details_head {
		height: 60rpx;
		width: 90%;
		margin: 0 auto;
	}

	.details_head>view {
		margin-top: 10rpx;
		display: flex;
		background: #eee;
		border-radius: 50rpx;
		width: 100%;
		height: 66rpx;
	}

	.details_icon {
		width: 55rpx;
		margin-left: 23rpx;
		margin-top: 3rpx;
	}

	.details_icon icon {
		margin-top: -10rpx;
	}

	.details_search {
		width: 85%;
		font-size: 24rpx;
	}

	.thisCityA {
		height: 100rpx;
		background: #f6f5f5;
	}

	.thisCityB {
		height: 0rpx;
	}

	.screening_box {
		margin-top: 20rpx;
		background: #f7f6f6;
		height: 100%;
	}

	.city_box_content {
		display: flex;
		flex-direction: column;
	}
</style>
