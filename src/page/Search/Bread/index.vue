<template>
  <!--bread-->
  <div class="bread">
    <ul class="fl sui-breadcrumb">
      <li>
        <a href="#">全部结果</a>
      </li>
    </ul>
    <ul class="fl sui-tag">
      <li class="with-x" v-if="this.$route.query.categoryName">{{ this.$route.query.categoryName }}<i @click="removeCategoryName">×</i></li>
      <li class="with-x" v-if="this.$route.query.trademark">{{ this.$route.query.trademark }}<i @click="removeTrademark">×</i></li>
      <li class="with-x" v-if="this.$route.params.keyword">{{ this.$route.params.keyword }}<i @click="removeKeyword">×</i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bread',
  data(){
    return{
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
  mounted () {
    this.$bus.$on("trademark", this.tradeMark)
  },
  methods: {
    getData(){
      this.$store.dispatch('search/getSearchList', this.searchParams)
      console.log(this.searchParams)
    },
    tradeMark(data){
      //小细节：路由不可以在跳转之前修改，因为修改之后，Vue会判断路由和当前路由是否相等，如果相等的话就不会跳转，不需要对路由进行修改，在跳转之后，自然会修改
      this.searchParams.trademark = `${data.tmId}:${data.tmName}`;
      this.getData()
    },
    removeCategoryName(){
      //修改路由信息
      this.$route.query.categoryName = undefined;
      this.$route.query.category1Id = undefined;
      this.$route.query.category2Id = undefined;
      this.$route.query.category3Id = undefined;
      //修改虚拟DOM
      this.$store.dispatch('search/getSearchList', this.$route.params)
      if(this.$route.params){
        //根据已经修改过的路由信息，获取数据
        this.$router.push({name:"search", params: this.$route.params });
      }
    },
    removeKeyword(){
      this.$route.params.keyword = undefined;
      this.$store.dispatch('search/getSearchList', this.$route.query)
      if(this.$route.query){
        //根据已经修改过的路由信息，获取数据
        this.$router.push({name:"search", query:this.$route.query });
      }
      //事件总线，因为是兄弟间传数据全局总线比较合适，这里是发出数据
      this.$bus.$emit("clearKeyword")
    },
    removeTrademark(){

    },
  }
}
</script>

<style scoped lang="less">
.bread {
  margin-bottom: 5px;
  overflow: hidden;
  .sui-breadcrumb {
    padding: 3px 15px;
    margin: 0;
    font-weight: 400;
    border-radius: 3px;
    float: left;

    li {
      display: inline-block;
      line-height: 18px;

      a {
        color: #666;
        text-decoration: none;

        &:hover {
          color: #4cb9fc;
        }
      }
    }
  }

  .sui-tag {
    margin-top: -5px;
    list-style: none;
    font-size: 0;
    line-height: 0;
    padding: 5px 0 0;
    margin-bottom: 18px;
    float: left;

    .with-x {
      font-size: 12px;
      margin: 0 5px 5px 0;
      display: inline-block;
      overflow: hidden;
      color: #000;
      background: #f7f7f7;
      padding: 0 7px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #dedede;
      white-space: nowrap;
      transition: color 400ms;
      cursor: pointer;

      i {
        margin-left: 10px;
        cursor: pointer;
        font: 400 14px tahoma;
        display: inline-block;
        height: 100%;
        vertical-align: middle;
      }

      &:hover {
        color: #28a3ef;
      }
    }
  }
}
</style>
