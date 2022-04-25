<template>
  <div>
    <div class="swiper-container" ref="Swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(carouse,index) in list" :key="carouse.id">
          <img :src="carouse.imgUrl" >
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from '_swiper@5.4.5@swiper'

export default {
  name: 'Carousel',
  props:['list'],
  watch:{
    list:{
      //立即触发一次
      immediate:true,
      handler(){
        this.$nextTick(()=>{
          const mySwiper = new Swiper (this.$refs.Swiper, {
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable:  'true',
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
