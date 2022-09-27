import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入路由模块化的文件
import centerRouter from './routes/center'
import cinemarRouter from './routes/cinema'
import filmRouter from './routes/film'
import detailRouter from './routes/detail'

const routes = [
  {
    path: '/',
    redirect:'/film',
  },
  centerRouter,
  cinemarRouter,
  filmRouter,
  detailRouter,
]

const router = new VueRouter({
  mode: 'history',
  // 加的前缀
  // base: process.env.BASE_URL,
  routes
})

export default router
