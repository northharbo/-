import Vue from 'vue'
import Vuex from 'vuex'
import types  from './status/types' // 按需引入常量
import storage from './status/storage.js'
Vue.use(Vuex)

// 三个参数 ， 1: 识别文件路径  2. 是否深层搜索  3. 文件后缀
const modulesFiles = require.context('./modules', true, /\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default   // 将文件名作为键值对
  return modules
}, {})


// 导出所有状态
export default new Vuex.Store({
	state:{
		userInfo: uni.getStorageSync(storage.USER_INFO) || {},  // 用户信息
		token:uni.getStorageSync(storage.TOKEN) || ""  ,// token
		admin:uni.getStorageSync(storage.ACCOUNT_ADMIN) || false,
		loginStatus:uni.getStorageSync(storage.LOGIN_STATUS) || false,
		loginTimestamp:uni.getStorageSync(storage.LOGIN_TIMESTAMP),
		loginTime:uni.getStorageSync(storage.LOGIN_TIME),
	},
	mutations:{
		[types.SET_USER_INFO](state, userInfo){
			state.userInfo = userInfo
			uni.setStorageSync(storage.USER_INFO,userInfo)
		},
		 [types.SET_TOKEN](state, token){
			state.token = token
			uni.setStorageSync(storage.TOKEN,token)
		},
		[types.SET_ACCOUNT_ADMIN](state,admin){
			state.admin = admin
			uni.setStorageSync(storage.ACCOUNT_ADMIN,admin)
		},
		[types.SET_LOGIN_STATUS](state,status){
			state.loginStatus = status
			uni.setStorageSync(storage.LOGIN_STATUS,status)
		},
		[types.SET_LOGIN_TIMESTAMP](state){
			state.loginTimestamp = new Date().getTime();
			uni.setStorageSync(storage.LOGIN_TIMESTAMP,state.loginTimestamp)
		},
		[types.SET_LOGIN_TIME](state){
			state.loginTime = new Date()
			uni.setStorageSync(storage.LOGIN_TIME,timeConvert(state.loginTime))
		}
	},
	actions:{
		//  设置用户信息
		setUserInfo({commit},userInfo){
			commit(types.SET_USER_INFO,userInfo);
		},
		
		// 设置token
		setToken({commit},token){
			commit(types.SET_TOKEN,token);
		},
		setAccountAdmim({commit},payload){
			commit(types.SET_ACCOUNT_ADMIN,payload);	
		},
		login({commit},payload){
			// 设置token
			commit(types.SET_TOKEN,payload.token);
			
			// 设置是否为管理员
			const admin = payload.userInfo.type == 1? true : false ;//  是否是管理员
			
			commit(types.SET_ACCOUNT_ADMIN,admin);	
			
			// 设置登录状态
			
			commit(types.SET_LOGIN_STATUS,true);	
			
			// 设置用户信息
		
			commit(types.SET_USER_INFO,payload.userInfo);
			
			// 设置最新登录时间
			commit(types.SET_LOGIN_TIMESTAMP);
			
			commit(types.SET_LOGIN_TIME);
		},
		logout({commit,state}){
			//将登录状态设置为 false
			if(!state.loginStatus){
				return uni.showToast({
					title:"当前未登录",
					icon:"none"
				})
			}
			uni.showModal({
				title:"退出登录",
				success(res){
					if(res.confirm){
						uni.showLoading({
							title:"退出中"
						})
						setTimeout(()=>{
							uni.setStorageSync(storage.LOGIN_STATUS,false)
							commit(types.SET_LOGIN_STATUS,false);
							uni.hideLoading()
							uni.showToast({
								title:"退出成功",
								icon:"none"
							})
						},500)
					}
					
				}
			})
		}
	},
    modules:{
		...modules
	}
})




function timeConvert(timestamp) {
  //num:0 YYYY-MM-DD  num:1  YYYY-MM-DD hh:mm:ss // timestamp:时间戳
  //将时间戳转换成正常时间格式
  var date = new Date(timestamp); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "-";
  var M =
	(date.getMonth() + 1 < 10
	  ? "0" + (date.getMonth() + 1)
	  : date.getMonth() + 1) + "-";
  var D = date.getDate() + " ";
  var h = date.getHours() + ":";
  var m =
	(date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
	":";
  var s = date.getSeconds();
  return Y + M + D + h + m + s;
}