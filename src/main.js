import Vue from 'vue';
import App from './App.vue';
// 引入路由
import router from '@/router'
// 引入全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import '@/mock/serve';
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carousel.name,Carousel);
Vue.config.productionTip = false;

//Vuex使用
import store from '@/store'
//引入轮播图样式
import "swiper/css/swiper.css"
new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate () {
    Vue.prototype.$bus = this
  }
}).$mount('#app');

// vm.prototype.$bus = this
// vm.$beforeCreate(){
//   Vue.prototype.$bus = this
// }
