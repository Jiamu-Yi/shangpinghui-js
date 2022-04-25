import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Home from '@/page/Home'
import Login from '@/page/Login'
import Search from '@/page/Search'
import Register from '@/page/Register'
//下面是解决路由重复的问题
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  routes:[
    {
      name:'home',
      path:'/home',
      component:Home,
      meta:{
        showFooter:true,
      }
    },
    {
      name:'login',
      path:'/login',
      component:Login,
      meta:{
        showFooter:false,
      }
    },
    {
      name:'search',
      path:'/search/:keyword?',
      component:Search,
      meta:{
        showFooter:true,
      }
    },
    {
      name:'register',
      path:'/register',
      component:Register,
      meta:{
        showFooter:false,
      }
    },
   // 重定向项目访问/时定向到主页
    {
      path:'/*',
      redirect:'/home',
    },
    {
      path:'',
      redirect:'/home',
    }
  ]
})
