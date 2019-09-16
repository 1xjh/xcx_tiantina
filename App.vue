<script>
	import Vue from 'vue'
	export default {
		globalData: {
			DateObject: {},
			city: "广州",
		},
		onLaunch: function() {
			uni.getSystemInfo({
				success: function(e) {
					// #ifndef MP
					Vue.prototype.StatusBar = e.statusBarHeight;
					if (e.platform == 'android') {
						Vue.prototype.CustomBar = e.statusBarHeight + 50;
					} else {
						Vue.prototype.CustomBar = e.statusBarHeight + 45;
					};
					// #endif
					// #ifdef MP-WEIXIN
					Vue.prototype.StatusBar = e.statusBarHeight;
					let custom = wx.getMenuButtonBoundingClientRect();
					Vue.prototype.Custom = custom;
					Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
					// #endif       
					// #ifdef MP-ALIPAY
					Vue.prototype.StatusBar = e.statusBarHeight;
					Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
					// #endif
				}
			})
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import "colorui/main.css";
	@import "colorui/icon.css";

	.flex {
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
	}

	.nav-between {
		display: flex;
		justify-content: space-between;
	}

	.nav-content {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.nav-around {
		display: flex;
		justify-content: space-around;
	}

	.nav-list {
		display: flex;
		flex-wrap: wrap;
		padding: 0px 40upx 0px;
		justify-content: space-between;
	}

	.tian-tian-bg {
		background: #267656;
	}

	.tian-tian-color {
		color: #267656;
	}

	.show {}

	/*每个页面公共css */
</style>
