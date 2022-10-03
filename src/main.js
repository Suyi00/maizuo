import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// // axios 体验
// import axios from 'axios'
// // 配置公共域名
// axios.defaults.baseURL = "https://m.maizuo.com/"
// axios.interceptors.request.use(function(config){
//   config.headers={
//     "X-Client-Info":
//      '{"a":"3000","ch":"1002","v":"5.2.1","e":"16635554292331591716110337","bc":"310100"}',
//      "X-Host": "mall.film-ticket.film.list",
//   }
//   //返回配置
//   return config
// },function(err){
//   //错误处理
// })
// axios.get(
//   'gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9978671');

// 懒加载 使用
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
   loading:"https://pic.maizuo.com/usr/movie/658feb900d73e61779b796b5cf3a9738.png"
  
})

// 定义 事件总线   Vue.prototype.eventBus 是在 Vue 的原型上定义的 eventBus
Vue.prototype.eventBus = new Vue()


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
