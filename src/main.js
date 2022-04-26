import Vue from 'vue';
import App from './App.vue';
// 引入路由
import router from '@/router'
// 引入全局组件
import TypeNavCom from '@/components/TypeNav';
import CarouselCom from '@/components/Carousel';
import PaginationCom from '@/components/Pagination';
import '@/mock/serve';
Vue.component(TypeNavCom.name,TypeNavCom);
Vue.component(CarouselCom.name,CarouselCom);
Vue.component(PaginationCom.name,PaginationCom);
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
