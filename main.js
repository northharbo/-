import Vue from 'vue'
import App from './App'
import uView from "uview-ui";

import marked from 'marked'//转换Markdown格式富文本
import store from './store/index.js'

import './config/config'
import toolsApi from './utils/tools/index.js'
import http from  './HttpApi'

// 引入uView对小程序分享的mixin封装
let mpShare = require('uview-ui/libs/mixin/mpShare.js');


Vue.mixin(mpShare)



Vue.config.productionTip = false
Vue.prototype.$marked = marked;
Vue.prototype.$store = store;
Vue.prototype.$httpApi = http
Vue.prototype.$toolsApi = toolsApi

Vue.use(uView);
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount() 

// wx956ee9d1d351dc87
//  秘钥： 4e6121dec9b40a02c4f50412226b8d15
// wx025aed7c48edf0bd  妙趣前端
