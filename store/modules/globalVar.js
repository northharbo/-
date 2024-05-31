import types  from '../status/types' // 按需引入常量
import storage from '../status/storage.js'
const state = {
    tipShow :  uni.getStorageSync(storage.TIP_SHOW) || false,  
    // tipShow : false,  
   
}
const getters = {
	tipShow : state => state.showTip
}
//  同步操作
const mutations = {
    [types.UP_TIP_SHOW](state, STATUS) {           
        state.tipShow = STATUS;            
    },
    [types.DEL_TIP_SHOW](state) {           
        state.tip = false;            
    }
}
const actions = {
	//  更新全局的提示显示
	up_tip_show({commit,state},status){
		commit(types.UP_TIP_SHOW,status);
		uni.setStorageSync(storage.TIP_SHOW,status)
	},
	//  删除提示变量、与缓存
	del_tip_show({commit,state}){
		commit(types.DEL_TIP_SHOW);
		uni.removeStorage(storage.TIP_SHOW)
	}
}
export default{
    namespaced: true,
    state,
    getters,
    mutations,
	actions
}