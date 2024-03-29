<template>
	<div class="calendar-tz" id="calendarTz">
		<div class="calendar-header" id="calendarHeader">
			<slot name="top"></slot>
			<div class="week-number">
				<span v-for="(item,index) in language=='cn' ? weekList : weekListEn" :key="item">
					<p :style="{color:(index==0||index==weekList.length-1)?getThemeColor:''}">{{item}}</p>
				</span>
			</div>
		</div>

		<div class="ti" id="ti" :style="{paddingTop:paddindTop+'px',height:height}">
			<div class="calendar-wrapper" v-for="(item,index) in calendar" :key="index" v-scrolltop="{item:item,date:date||startDate}">
				<div class="calendar-title flex" v-if="language=='cn'" :style="{color:getThemeColor}">
					<span v-show="switchMonth" @click="createClendar('pre')">上一月</span>
					<div class="flex-1">{{item.year}} 年 {{item.month}} 月 </div><span v-show="switchMonth" @click="createClendar('next')">下一月</span>
				</div>
				<div class="calendar-title flex" :style="{color:getThemeColor}" v-else>
					<span v-show="switchMonth" @click="createClendar('pre')">Prev month</span>
					<div class="flex-1">{{monthEn[item.month-1]}} {{item.year}} </div><span v-show="switchMonth" @click="createClendar('next')">Next
						month</span>
				</div>
				<!--如果普通日期选择-->
				<ul class="each-month" v-if="date||(!date&&!startDate&&!endDate)">
					<li class="each-day" v-for="(day,idx) in item.dayList" :key="idx" @click="chooseDate($event,day, item.month, item.year)"
					 :class="[addClassName(day, item.month, item.year)]">
						<p class="recent" v-text="setTip(day, item.month, item.year)" :style="{color:getThemeColor}"></p>
						<div :style="{background:getBackground(day, item.month, item.year),height:28}">
							{{!!day?day:''}}
						</div>
						<p class="price" v-if="priceList.length>0" :style="{color:themeColor}">
							<template v-if="setPrice(day, item.month, item.year)>=0">{{priceList[setPrice(day, item.month, item.year)].price}}</template>
						</p>
					</li>
				</ul>
				<!--如果酒店/往返模式-->
				<ul class="each-month" v-else>
					<li class="each-day" v-for="(day,idx) in item.dayList" :key="idx" :style="{background:addClassName2(day, item.month, item.year)}"
					 :class="[addClassName(day, item.month, item.year),{'clicktime': isCurrent(day, item.month, item.year)}]" @click="chooseDate($event,day, item.month, item.year)">
						<p class="recent" v-text="setTip(day, item.month, item.year)" :style="{color:getThemeColor}"></p>
						<div :style="{background:isCurrent(day, item.month, item.year)?getThemeColor:''}">
							{{!!day?day:''}}
						</div>
						<p class="price" v-if="priceList.length>0" :style="{color:themeColor}">
							<template v-if="setPrice(day, item.month, item.year)>=0">{{priceList[setPrice(day, item.month, item.year)].price}}</template>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<slot></slot>
	</div>

</template>

<script>
	let {
		keys,
		values,
		entries
	} = Object
	export default {
		props: {
			date: { //选择的日期（此属性和startDate,endDate互斥）
				type: [String, Object],
				default: ''
			},
			startDate: { //开始日期
				type: [String, Object],
				default: ''
			},
			endDate: { //结束日期
				type: [String, Object, Date],
				default: ''
			},
			priceList: { //价格日历数组
				type: [Array, Object],
				default: function() {
					return []
				}
			},
			disabledList: { //设定不允许点击的日期
				type: [Array, Object],
				default: function() {
					return []
				}
			},
			initMonthCount: { //初始化月的个数
				type: [String, Number],
				default: 6
			},
			initPreMonthCount: { //初始化date或者startDate之前几个月的日历数据
				type: [String, Number],
				default: 0
			},
			mode: { //模式（默认1），1酒店，2飞机往返 
				type: [String, Number],
				default: 1
			},
			switchMonth: { //是否开始切换月份模式
				type: [String, Boolean],
				default: false
			},
			preDisabled: { //小于初始的日期的全部disabled置灰
				type: [String, Boolean],
				default: false
			},
			allAbled: { //全部日期都可选
				type: [String, Boolean],
				default: false
			},
			lang: {
				type: [String],
				default: 'cn'
			},
			themeColor: {
				type: [String, Object, Date],
				default: '#415FFB'
			}
		},
		data() {
			return {
				paddindTop: '40',
				height: '100vh',
				endDates: '',
				startDates: '',
				monthCount: '',
				dates: '',
				currentMonthNum: 0, //当前月的索引，switchMonth=true时使用
				isDate: false,
				selectPrice: [], //保存选择的日期所在的价格
				language: this.lang.toLocaleLowerCase(),
				weekList: ['日', '一', '二', '三', '四', '五', '六'],
				weekListEn: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				monthEn: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
					'November'
				],
				calendar: [],
				festival: {
					'2019': {
						"2019/6/1": "儿童节",
						"2019/6/7": "端午",
						"2019/7/1": "建党节",
						"2019/8/1": "建军节",
						"2019/8/7": "七夕",
						"2019/9/10": "教师节",
						"2019/9/13": "中秋",
						"2019/10/1": "国庆",
						"2019/10/28": "重阳",
						"2019/10/22": "感恩节",
						"2019/12/24": "平安夜",
						"2019/12/25": "圣诞",
						"2020/1/1": "元旦"
					},
					'2020': {
						"2020/1/1": "元旦",
						"2020/1/17": "小年",
						"2020/1/24": "除夕",
						"2020/1/25": "春节",
						"2020/2/8": "元宵",
						"2020/2/14": "情人节",
						"2020/3/8": "妇女节",
						"2020/3/12": "植树节",
						"2020/4/1": "愚人节",
						"2020/4/4": "清明节",
						"2020/5/1": "劳动节",
						"2020/5/10": "母亲节",
						"2020/6/1": "儿童节",
						"2020/6/21": "父亲节",
						"2020/6/25": "端午节",
						"2020/7/1": "建党节",
						"2020/8/1": "建军节",
						"2020/8/25": "七夕",
						"2020/9/10": "教师节",
						"2020/10/1": "国庆中秋",
						"2020/10/25": "重阳节",
						"2020/11/26": "感恩节",
						"2020/12/24": "平安夜",
						"2020/12/25": "圣诞节",
						"2021/1/1": "元旦"
					}
				}
			}
		},
		computed: {
			getThemeColor() {
				var hex = this.themeColor
				if (hex.length == 4) {
					hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
				}
				var str = "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" +
					hex.slice(5, 7)) + ",1)";
				return str
			},
			getBetweenColor() {
				var hex = this.themeColor
				if (hex.length == 4) {
					hex = `#${hex[1]}${hex[1]}${hex[2]}${hex[2]}${hex[3]}${hex[3]}`
				}
				var str = "rgba(" + parseInt("0x" + hex.slice(1, 3)) + "," + parseInt("0x" + hex.slice(3, 5)) + "," + parseInt("0x" +
					hex.slice(5, 7)) + ",0.1)";
				return str
			},
		},
		mounted() {
			this.init()
			// #ifdef H5
			this.height = "calc(100vh - 44px)"
			// #endif
			this.paddindTop = document && document.getElementById("calendarHeader").offsetHeight
		},
		directives: {
			scrolltop: {
				// 指令的定义
				inserted: (el, binding, vnode) => {
					var bindingVal = binding.value
					if (!document) return
					//if(bindingVal.isPreMonth<=0) return
					var st = el.getBoundingClientRect().top | 0
					var t = document.getElementById("calendarHeader").getBoundingClientRect().bottom
					var date = bindingVal.date.replace(/-/g, '/').split('/')
					if (!bindingVal.date) {
						date[0] = new Date(new Date().toLocaleDateString()).getFullYear()
						date[1] = new Date(new Date().toLocaleDateString()).getMonth() + 1
					}
					var ymTemp = bindingVal.item.year + '' + bindingVal.item.month
					var ym = date[0] + '' + parseInt(date[1])
					if (ym == ymTemp) {
						document.getElementById("ti").scrollTop = st - t
					}
				}
			}
		},
		methods: {
			init() {
				//初始化月的个数
				if (this.initMonthCount < 1) {
					this.monthCount = 1
					console.warn("initMonthCount属性设置不能小于1")
				} else {
					this.monthCount = this.initMonthCount
				}
				if (this.date) {
					
					this.dates = this.disableDate = new Date(this.date.replace(/-/g, '/'))
					this.isDate = true
				}
				if (this.startDate) {
					this.startDates = this.disableStartDate = new Date(this.startDate.replace(/-/g, '/'))
				}
				if (this.endDate) {
					this.endDates = new Date(this.endDate.replace(/-/g, '/'))
				}

				this.today = new Date(new Date().toLocaleDateString()).getTime()
				if (this.date && (this.startDate || this.endDate)) {
					console.warn(':date属性和 (:startDate,:endDate) 不能同时设置')
					this.isDate = true
				}
				if (!this.date && !this.startDate && this.endDate) {
					//disableStartDate用于addClassName方法preDisabled==true的时候使用
					this.startDates = this.disableStartDate = new Date(this.today * 1)
				}
				if (!this.date && !this.startDate && !this.endDate) {
					this.dates = new Date(this.today * 1)
					this.isDate = true
				}
				//最后可以选择的日期范围
				this.lastDate = this.today + this.monthCount * 30 * 24 * 3600 * 1000

				if (this.date || this.startDate) {
					this.year = new Date(this.dates * 1 || this.startDates * 1).getFullYear();
					this.month = new Date(this.dates * 1 || this.startDates * 1).getMonth() + 1;
				} else if (this.endDate) {
					console.warn("请设置先startDate")
					this.endDates = this.today * 1
					this.year = new Date().getFullYear();
					this.month = new Date().getMonth() + 1;
				} else {
					this.year = new Date().getFullYear();
					this.month = new Date().getMonth() + 1;
				}

				//查看今年是否设置节假日
				if (this.language == "cn") {
					this.festivalNew = entries(this.festival).find((item, index) => {
						return item[index] == this.year
					})
				}

				//如果初始化date或者startDate之前月份数据
				if (parseInt(this.initPreMonthCount) > 0) {
					this.initPreMonth()
				}

				this.createClendar(); //创建日历数据
			},
			//初始化date或者startDate之前几个月的日历数据
			initPreMonth() {
				let year = this.year;
				let month = this.month - this.initPreMonthCount
				var m = Math.ceil(month / 12)
				this.monthCount = parseInt(this.monthCount) + parseInt(this.initPreMonthCount)
				if (m > 0) {
					year += m - 1
				} else {
					year += m - 1
				}
				if (month > 12) {
					month = month % 12 == 0 ? 12 : month % 12;
				}
				if (month <= 0) {
					month = 12 + month % 12
				}
				this.year = year
				this.month = month
			},
			//创建每个月日历数据，传入月份1号前面用null填充
			createDayList(month, year) {
				const count = this.getDayNum(month, year),
					_week = new Date(year + '/' + month + '/1').getDay();
				let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]

				for (let i = 29; i <= count; i++) {
					list.push(i)
				}
				for (let i = 0; i < _week; i++) {
					list.unshift(null)
				}
				return list;
			},
			//计算传入月份有多少天
			getDayNum(month, year) {
				let dayNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

				if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
					dayNum[1] = 29;
				}
				return dayNum[month - 1]
			},
			//根据当天和结束日期创建日历数据
			createClendar(flag = null) {
				if (this.switchMonth) {
					this.monthCount = 1
					if (flag == 'next') {
						this.currentMonthNum += 1
					} else if (flag == 'pre') {
						this.currentMonthNum -= 1
					}
				}

				for (let i = 0; i < this.monthCount; i++) {
					let month = this.month + i + this.currentMonthNum,
						year = this.year,
						_monthData = {
							dayList: [],
							month: '',
							year: ''
						};

					var m = Math.ceil(month / 12)
					if (m > 0) {
						year += m - 1
					} else {
						year += m - 1
					}
					if (month > 12) {
						month = month % 12 == 0 ? 12 : month % 12;
					}

					if (month <= 0) {
						month = 12 + month % 12
					}

					_monthData.year = year;
					_monthData.month = month;
					_monthData.dayList = this.createDayList(month, year);
					if (this.switchMonth) {
						this.calendar = []
					}
					this.calendar.push(_monthData)
				}
			},
			//获取周末的样式
			getWeekColor(day, month, year) {
				const _date = new Date(year + '/' + month + '/' + day)
				//设置周末的字体样式
				if (_date.getDay() === 0 || _date.getDay() === 6) {
					return this.getThemeColor
				}
			},
			//获取普通日期选中样式背景
			getBackground(day, month, year) {
				const _date = new Date(year + '/' + month + '/' + day)
				if (_date * 1 === this.dates * 1) {
					return this.getThemeColor
				}
			},
			//添加日历样式
			addClassName(day, month, year) {
				if (!day) {
					return;
				}
				const _date = new Date(year + '/' + month + '/' + day)
				let className = []
				if (_date * 1 === this.today) {
					className.push('today');
				}
				if (!this.allAbled || this.allAbled == 'false') {
					if (this.initPreMonthCount > 0) {
						var tempDate = new Date(this.year + '/' + this.month + '/01') * 1
						if (_date * 1 < tempDate || _date * 1 > this.lastDate) { //当天之前和180天之后不可选
							className.push('disabled')
						}
					} else {
						if (_date * 1 < this.today || _date * 1 > this.lastDate) { //当天之前和180天之后不可选
							className.push('disabled')
						}
					}
				}
				//设置不允许操作的日期
				if (this.disabledList.length > 0) {
					var notTemp = this.disabledList.map(item => {
						return new Date(item) * 1
					})
					if ((notTemp).includes(new Date(_date) * 1)) {
						className.push(' disabled')
					}
				}

				if (_date * 1 === this.dates * 1) {
					className.push(' clicktime');
				}
				//preDisabled==true时设置小于disableDate的都disable
				if ((this.preDisabled || this.preDisabled == 'true') && this.isDate && _date * 1 < this.disableDate * 1) {
					className.push('disabled')
				}
				if ((this.preDisabled || this.preDisabled == 'true') && !this.isDate && _date * 1 < this.disableStartDate * 1) {
					className.push('disabled')
				}

				return className.join(' ');
			},
			addClassName2(day, month, year) {
				if (!day || this.date) {
					return;
				}
				const _date = new Date(year + '/' + month + '/' + day) * 1
				if (_date >= this.startDates * 1 && _date <= this.endDates * 1) {
					return this.getBetweenColor
				}
			},
			//清除时间 时 分 秒 毫秒
			resetTime(date) {
				date.setHours(0);
				date.setMinutes(0);
				date.setSeconds(0);
				date.setMilliseconds(0);
				return date;
			},
			//设置今天，明天，后天
			setTip(day, month, year) {
				if (!day) {
					return;
				}
				const td = year + '/' + month + '/' + day
				const _date = new Date(td) * 1
				const language = this.language.toLocaleLowerCase()

				let tip;

				//设置节假日
				if (!!this.festivalNew && language == "cn") { // && (_date >= this.today && _date <= this.lastDate) 180范围外是否显示节假日
					tip = this.festivalNew[1][year + "/" + month + "/" + day]
				}

				if (_date == this.today) {
					tip = language == 'cn' ? '今天' : 'Today'
				} else if (_date - this.today === 24 * 3600 * 1000) {
					tip = language == 'cn' ? '明天' : 'Tmr'
				} else if (_date - this.today === 2 * 24 * 3600 * 1000) {
					tip = language == 'cn' ? '后天' : ''
				}

				if (!this.date && (this.startDate || this.endDate)) {
					if (_date === this.startDates * 1) {
						if (this.mode == 2) {
							if (this.endDates * 1 == 0) {
								tip = language == 'cn' ? '去/返' : 'Go/Back'
							} else {
								tip = language == 'cn' ? '去程' : 'Go'
							}
						} else {
							tip = language == 'cn' ? '入住' : 'Into'
						}

					} else if (_date === this.endDates * 1) {
						if (this.mode == 2) {
							tip = language == 'cn' ? '返程' : 'Back'
						} else {
							tip = language == 'cn' ? '离开' : 'Leave'
						}
					}
				}

				return tip;
			},
			setPrice(day, month, year) {
				if (!day) {
					return;
				}
				const td = year + '/' + month + '/' + day
				const _date = new Date(td) * 1
				var tip = 0
				if (this.priceList.length > 0) {
					tip = this.priceList.findIndex((item, index) => {
						const priceDate = new Date(item.date) * 1
						return priceDate == _date
					})
				}
				if (tip >= 0) {
					return tip
				}
			},
			isCurrent(day, month, year) {
				if (!day) {
					return false;
				}

				const _date = new Date(year + '/' + month + '/' + day) * 1
				//设置开始和结束
				if (_date === this.startDates * 1 || (_date === this.endDates * 1)) {
					return true
				}
			},
			dateFormat(times) {
				let date = new Date(times);
				return {
					year: date.getFullYear(),
					month: parseInt(date.getMonth() + 1) > 9 ? parseInt(date.getMonth() + 1) : '0' + parseInt(date.getMonth() + 1),
					day: date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
					week: this.weekList[date.getDay()]
				}
			},
			chooseDate(e, day, month, year) {
				if (!day) {
					return;
				}

				const _date = new Date(year + '/' + month + '/' + day) * 1
				if (!this.allAbled || this.allAbled == 'false') {
					if (this.initPreMonthCount > 0) {
						var tempDate = new Date(this.year + '/' + this.month + '/01') * 1
						if (_date * 1 < tempDate || _date * 1 > this.lastDate) { //当天之前和180天之后不可选
							return
						}
					} else {
						//超出180天范围之前和之后disable灰色的区域不可点击
						if (_date < this.today || _date > this.lastDate) {
							return;
						}
					}
				}
				//如果设置preDisabled==true，小于disableDate的日期都不能点击
				if ((this.preDisabled || this.preDisabled == 'true') && this.isDate && _date * 1 < this.disableDate * 1) {
					return;
				}
				if ((this.preDisabled || this.preDisabled == 'true') && !this.isDate && _date * 1 < this.disableStartDate * 1) {
					return;
				}

				//设置不允许操作的日期
				if (this.disabledList.length > 0) {
					var notTemp = this.disabledList.map(item => {
						return new Date(item) * 1
					})
					if (notTemp.includes(_date)) {
						return;
					}
				}

				if (_date == this.today || this.dates * 1) {
					this.dates = _date
				}

				if (this.startDates * 1 && this.endDates * 1 && _date > this.endDates * 1) {
					this.startDates = _date;
					this.endDates = "";
				} else if (this.endDates * 1 && _date > this.endDates) {
					this.endDates = _date;
				} else if (_date >= this.startDates * 1 && _date <= this.endDates * 1) {
					this.startDates = _date;
					this.endDates = '';
				} else if (_date < this.startDates * 1) {
					this.startDates = _date;
					this.endDates = '';
				} else if (_date > this.startDates * 1) {
					this.endDates = _date;
				}

				const dateChoose = this.dateFormat(this.dates)
				const choose = {
					dateTime: this.dates * 1,
					date: dateChoose,
					dateStr: dateChoose.year + "-" + dateChoose.month + "-" + dateChoose.day,
					recent: ''
				}

				const startDateChoose = this.dateFormat(this.startDates)
				const endDateChoose = this.dateFormat(this.endDates)
				const startDateStr = startDateChoose.year + "-" + startDateChoose.month + "-" + startDateChoose.day
				const endDateStr = endDateChoose.year + "-" + endDateChoose.month + "-" + endDateChoose.day
				const choose2 = {
					startDateTime: this.startDates,
					endDateTime: this.endDates,
					startDate: startDateChoose,
					endDate: endDateChoose,
					startDateStr: startDateStr,
					endDateStr: endDateStr,
					startRecent: '',
					endRecent: ''
				}

				//返回选择的价格
				if (this.priceList.length > 0) {
					this.clickPrice = this.priceList[this.setPrice(day, month, year)] || ''
				}

				if (this.isDate) { //普通日期选择模式
					if (this.clickPrice) {
						choose.price = this.clickPrice.price
					}
					this.setRecent(_date, choose, 'recent')
					this.$emit("callback", choose)
				} else {
					choose2.countDays = (this.endDates * 1 - this.startDates * 1) / 86400 / 1000;
					if (this.priceList.length > 0) {
						this.selectPrice.push(this.clickPrice)
						if (this.selectPrice.length > 2) {
							this.selectPrice.shift()
						}
					}
					if (this.mode == 2) { //往返模式
						if (this.startDates && !this.endDates) { //单日往返
							choose2.endDate = choose2.startDate
							choose2.endDateStr = choose2.startDateStr
							choose2.endDateTime = choose2.startDateTime
							choose2.endRecent = choose2.startRecent

							this.emitFuc(choose2, true)
						} else if (this.startDates) { //去程-返程
							this.emitFuc(choose2)
						}
					} else { //酒店模式
						if (this.startDates && this.endDates) {
							this.emitFuc(choose2)
						}
					}

				}
			},
			//返回recent
			setRecent(_date, choose, recent) {
				if (_date == this.today) {
					choose[recent] = '今天'
				} else if (_date - this.today == 24 * 3600 * 1000) {
					choose[recent] = '明天'
				} else if (_date - this.today == 2 * 24 * 3600 * 1000) {
					choose[recent] = '后天'
				}
			},
			//
			emitFuc(choose2, isWf = false) {
				if (this.priceList.length > 0) {
					if (isWf) {
						choose2.startPrice = choose2.endPrice = this.clickPrice && this.clickPrice.price
					} else {
						choose2.startPrice = this.selectPrice[0].price || ''
						choose2.endPrice = this.selectPrice[1].price || ''
					}
				}
				if (isWf) {
					this.setRecent(this.startDates, choose2, 'startRecent')
					this.setRecent(this.startDates, choose2, 'endRecent')
				} else {
					this.setRecent(this.startDates, choose2, 'startRecent')
					this.setRecent(this.endDates, choose2, 'endRecent')
				}

				this.$emit("callback", choose2)
			}
		}
	}
</script>

<style scoped>
	div,
	ul,
	li,
	p,
	span,
	i,
	b,
	a {
		margin: 0;
		padding: 0;
		font-size: 14px;
	}
	.flex {
		justify-content: space-between;
		display: -webkit-box;
		display: flex;
		box-sizing: border-box;
	}

	.flex-1 {
		width: 100%;
		-webkit-box-flex: 1;
		flex: 1;
	}

	.calendar-tz {
		width: 100%;
		height: 100%;
		background: #fff;
		position: relative;
		overflow-y: scroll;
		z-index: 9;
	}

	.calendar-tz:-webkit-scrollbar {
		display: none
	}

	.calendar-tz .ti {
		font-size: 16px;
		padding-top: 44px;
		overflow-y: auto;
	}

	.calendar-tz .ti:-webkit-scrollbar {
		display: none
	}

	.calendar-header {
		position: fixed;
		width: 100%;
		left: 0;
		z-index: 9;
		top:320rpx;
		box-shadow: 0 2px 15px rgba(100, 100, 100, 0.1);
	}

	.calendar-header .week-number {
		background: #fff;
		width: 100%;
	}

	.calendar-header .week-number span {
		display: inline-block;
		text-align: center;
		height: 40px;
		line-height: 40px;
		width: 14.28%;
		font-size: 16px;
		color: #333;
	}

	.calendar-wrapper .calendar-title {
		text-align: center;
		line-height: 50px;
		height: 50px;
		margin: 10px 0;
	}

	.calendar-wrapper .calendar-title span {
		font-size: 12px;
		padding: 0 20px;
	}

	.calendar-wrapper .calendar-title div {
		color: #333;
		font-size: 16px;
		font-weight: 400;
	}

	.calendar-wrapper .each-month {
		display: inline-block;
		width: 98%;
		margin-left: 1%;
		padding-bottom: 10px;
		font-size: 0;
		border-bottom: 1px solid #F4F4F4;
	}

	.calendar-wrapper .each-month .each-day {
		position: relative;
		display: inline-block;
		text-align: center;
		vertical-align: bottom;
		padding: 2px 0;
		width: 14.28%;
		font-size: 16px;
		height: 72px;
		margin-bottom: 10rpx;
		color: #333;
	}

	.calendar-wrapper .each-month .each-day div {
		border-radius: 4px;
		vertical-align: 8px;
		display: inline-block;
		height: 32px;
		width: 32px;
		line-height: 32px;
	}

	.calendar-wrapper .each-month .each-day .recent {
		font-size: 12px;
		color: #415FFB;
		height: 18px;
		line-height: 18px;
		text-align: center;
		width: 100%;
	}

	.calendar-wrapper .each-month .each-day .price {
		margin-top: -2px;
		height: 18px;
		line-height: 18px;
		display: block;
		color: #666;
		font-size: 12px;
		text-align: center;
	}

	.calendar-wrapper .each-month .each-day.today div {
		background: #E7E7E7;
		border-radius: 4px;
	}

	.calendar-wrapper .each-month .each-day.disabled .recent,
	.calendar-wrapper .each-month .each-day.disabled .price,
	.calendar-wrapper .each-month .each-day.disabled div {
		color: #ccc !important;
	}

	.calendar-wrapper .each-month .each-day.clicktime div {
		color: #fff;
		border-radius: 4px;
	}
</style>
