<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
  },
  mounted () {
    //这里是提前把要用的数据，把数据缓存到了内存里
    this.$store.dispatch('home/categoryList');
  },

}
</script>

<style>

</style>
