import md5_arr from './md5.js';
import underscore from './underscore.js';
/**
	构造微擎地址, 
	@params action tp系统中的,model, contrlloer, action，格式为 'index/Info/getTourist'
	@params querystring 格式为 {参数名1 : 值1, 参数名2 : 值2}
*/
var siteInfo = {
	'title': '',
	'uniacid': '110',
	'acid': '110',
	'multiid': '0',
	'version': 'v1.02',
	'siteroot': 'https://fw.tiantiandj.com/index.php/',
	'design_method': '3',
	'redirect_module': '',
	'template': '',
	"yan": "tian",
	"token": "3333"
}

var util = {}
var storage = uni.setStorage
util.url = function(action, querystring) {
	var url = siteInfo.siteroot + action + '?i=' + siteInfo.uniacid + '&v=' + siteInfo.version;
	return url;
}

function getQuery(url) {
	var theRequest = [];
	if (url.indexOf("?") != -1) {
		var str = url.split('?')[1];
		var strs = str.split("&");
		for (var i = 0; i < strs.length; i++) {
			if (strs[i].split("=")[0] && unescape(strs[i].split("=")[1])) {
				theRequest[i] = {
					'name': strs[i].split("=")[0],
					'value': unescape(strs[i].split("=")[1])
				}
			}
		}
	}
	return theRequest;
}
/*
 * 获取链接某个参数
 * url 链接地址
 * name 参数名称
 */
function getUrlParam(url, name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
	var r = url.split('?')[1].match(reg); //匹配目标参数  
	if (r != null) return unescape(r[2]);
	return null; //返回参数值  
}
/**
 * 获取签名 将链接地址的所有参数按字母排序后拼接加上token进行md5
 * url 链接地址 https://www.tiantiandj.com/xcx/index.php/index/Info/getTourist
 * date 参数{参数名1 : 值1, 参数名2 : 值2} *
 * token 签名token 非必须 在userinfo
 * 
 */
//
function getSign(url, data, token) {
	var _ = underscore._;
	var md5 = md5_arr.md5;
	var querystring = '';
	var urlData = '';
	var sign = getUrlParam(url, 'sign');
	if (sign || (data && data.sign)) {
		return false;
	} else {
		if (JSON.stringify(data) != "{}") { //post
			var theRequest = [];
			for (let param in data) {
				if (param && data[param]) {
					if (param != 'page') {
						theRequest = theRequest.concat({
							'name': param,
							'value': data[param]
						})
					}
				}
			}
			//排序
			querystring = _.sortBy(theRequest, 'name'); //用key排序
			//去重
			querystring = _.uniq(querystring, true, 'name');
			for (let i = 0; i < querystring.length; i++) {
				if (querystring[i] && querystring[i].name && querystring[i].value != "") {
					urlData += querystring[i].name + '=' + querystring[i].value;
					if (i < (querystring.length - 1)) {
						urlData += '&';
					}
				}
			}
			if (data) {
				urlData += "&";
			}
		}
		console.log(urlData, "Zs we 111")

		siteInfo.token = JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")).partner_token :
			siteInfo.token;
		console.log(siteInfo.token);
		var yan = JSON.parse(sessionStorage.getItem("user")) ? JSON.parse(sessionStorage.getItem("user")).partner_yan :
			siteInfo.yan;
		console.log(urlData + "token=" + siteInfo.token + "&yan=" + yan, "dfdfdfdf")
		sign = md5(urlData + "token=" + siteInfo.token + "&yan=" + yan);
		return sign;
	}
}


util.ajax = function(option) {
	var _ = underscore._;
	var md5 = md5_arr.md5();
	var option = option ? option : {};
	option.cachetime = option.cachetime ? option.cachetime : 0;
	option.showLoading = typeof option.showLoading != 'undefined' ? option.showLoading : true;
	var url = option.url; //entry/wxapp/checkinfo
	if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
		url = util.url(url); //url ="https://www.tiantiandj.com/xcx/index.php";
	}
	var state = getUrlParam(url, 'state');

	if (!state && !(option.data && option.data.state)) {
		url = url + '&state=we7sid-'
	}
	// if (!option.data || !option.data.m) {
	// 	var nowPage = getCurrentPages();
	// 	if (nowPage) {
	// 		nowPage = nowPage[getCurrentPages().length - 1];
	// 		if (nowPage.__route__) {
	// 			url = url + '&m=' + nowPage.__route__.split('/')[0];
	// 		}
	// 	}
	// }
	//https://www.tiantiandj.com/xcx/index.php/index/Info/getTourist?....
	var sign = getSign(url, option.data);

	console.log(siteInfo.token);
	if (sign) {
		url = url + "&sign=" + sign + "&token=" + siteInfo.token;
	}
	if (!url) {
		return false;
	}

	//显示状态图	
	// wx.showNavigationBarLoading();
	if (option.showLoading) {
		$.showLoading();
	}
	if (option.cachetime) {
		var cachekey = md5_arr.md5(url);
		var cachedata = storage.getItem(cachekey);
		var timestamp = Date.parse(new Date());

		if (cachedata && cachedata.data) {
			if (cachedata.expire > timestamp) {
				if (option.complete && typeof option.complete == 'function') {
					option.complete(cachedata);
				}
				if (option.success && typeof option.success == 'function') {
					option.success(cachedata);
				}
				$.hideLoading();
				return true;
			} else {
				storage.removeItem(cachekey)
			}
		}
	}
	$.ajax({
		"url": url, // url---->地址
		"type": option.method ? option.method : 'GET', // type ---> 请求方式
		"async": option.async, // async----> 同步：false，异步：true 
		"data": option.data ? option.data : {},
		'success': function(response) {
			//隐藏状态图
			$.hideLoading();

			if (response.data.errno) {
				if (response.data.errno == '41009') {
					wx.setStorageSync('userInfo', '');
					util.getUserInfo(function() {
						util.request(option)
					});
					return;
				} else {
					if (option.fail && typeof option.fail == 'function') {
						option.fail(response);
					} else {
						if (response.data.message) {
							if (response.data.data != null && response.data.data.redirect) {
								var redirect = response.data.data.redirect;
							} else {
								var redirect = '';
							}
							app.util.message(response.data.message, redirect, 'error');
						}
					}
					return;
				}
			} else {
				if (option.success && typeof option.success == 'function') {
					option.success(response);
				}
				//写入缓存，减少HTTP请求，并且如果网络异常可以读取缓存数据
				if (option.cachetime) {
					var cachedata = {
						'data': response.data,
						'expire': timestamp + option.cachetime * 1000
					};
					storage.setItem(cachekey, cachedata);
				}
			}
		},
		'fail': function(response) {
			$.hideLoading();
			//如果请求失败，尝试从缓存中读取数据
			var md5 = require('md5.js');
			var cachekey = md5(url);
			var cachedata = storage.getItem(cachekey);
			if (cachedata && cachedata.data) {
				if (option.success && typeof option.success == 'function') {
					option.success(cachedata);
				}
				return true;
			} else {
				if (option.fail && typeof option.fail == 'function') {
					option.fail(response);
				}
			}
		},
		'complete': function(response) {
			$.hideLoading();
			if (option.complete && typeof option.complete == 'function') {
				option.complete(response);
			}
		}
	})
}

export default util
