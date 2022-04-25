<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
<!--        这里传入的参数应该是总路由，而不是searchParams，因为searchParams只负责拼接参数，发送参数，发送完参数之后就会初始化，所以不可以那他用作其他组件传入的参数-->
<!--        而应该是全局的$route，这里面存放着完整的路由和参数,但是既然是全局的，所以根本不需要传参数，可以直接从全局拿数据-->
        <Bread/>
        <SearchSelector />
        <Details/>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchSelector from './SearchSelector/SearchSelector'
  import Details from '@/page/Search/Details'
  import Bread from '@/page/Search/Bread'
  export default {
    name: 'Search',
    methods:{
      getData(){
        this.$store.dispatch('search/getSearchList', this.searchParams)
      }
    },
    data(){
      return {
        searchParams:{
          //分类ID
          "category1Id": "",
          "category2Id": "",
          "category3Id": "",
          "categoryName": "",
          "keyword": "",
          "order": "",
          "pageNo": 1,
          "pageSize": 3,
          "props": [],
          "trademark": ""
        }
      }
    },
    beforeMount () {
      //挂载之前把数据合并，存到this.searchParams中，
      Object.assign(this.searchParams,this.$route.params,this.$route.query)
    },
    mounted () {
      // 参数合成之后，也就是挂载完毕之后，载入数据
      //修改仓库的数据，仓库的数据会直接渲染到每个展品
      this.getData()
    },
    components: {
      Details,
      SearchSelector,
      Bread,
    },
    watch:{
      $route(){
        //当路由发生改变时，重新合并路由
        Object.assign(this.searchParams,this.$route.params,this.$route.query)
        //根据这个
        this.getData()
        //发完请求之后，searchParams并没有发送改变
        //每次请求结束，应该将三级ID清空，以免出现多次点击，多级ID都存在的问题
        this.searchParams.category1Id = undefined;
        this.searchParams.category2Id = undefined;
        this.searchParams.category3Id = undefined;
      }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    margin: 10px 0;
    .py-container {
      width: 1200px;
      margin: 0 auto;
    }
  }
</style>
