import { reqCategoryList, reqGetBannerList, reqGetFloor } from '@/api'

export default {
  namespaced:true,
  state:{
    //state中的数据要注意，要和服务器返回的数据对应
    categoryList:[],
    bannerList:[],
    floorList:[],
  },
  actions:{
    //通过API里的接口函数调用，向服务器发送请求
    async categoryList(state){
      let result = await reqCategoryList();
      if (result.code === 200){
        state.commit("CATEGORYLIST",result)
      }
    },
    async bannerList(state){
      let result = await reqGetBannerList();
      if (result.code === 200){
        state.commit("BANNERLIST",result)
      }
    },
    async floorList(state){
      let result = await reqGetFloor();
      if (result.code === 200){
        state.commit("FLOORLIST",result)
      }
    },
  },
  mutations:{
    CATEGORYLIST(state,result){
      state.categoryList = result.data;
    },
    BANNERLIST(state,result){
      state.bannerList = result.data;
    },
    FLOORLIST(state,result){
      state.floorList = result.data;
    },
  },
  getters:{

  },
}
