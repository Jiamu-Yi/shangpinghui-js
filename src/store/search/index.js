import { reqGetSearchInfo } from '@/api'
export default {
  namespaced:true,
  state:{
    searchList:{},
  },
  actions:{
    async getSearchList( state ,params = {}){
      let result = await reqGetSearchInfo(params);
      if (result.code === 200){
        state.commit("GETSEARCHLIST",result)
      }
    },
  },
  // 为了简化数据而生
  getters:{
    goodsList(state){
      return state.searchList.goodsList || [];
    },
    attrsList(state){
      return state.searchList.attrsList || [];
    },
    trademarkList(state){
      return state.searchList.trademarkList || [];
    }
  },
  mutations:{
    GETSEARCHLIST(state,result){
      state.searchList = result.data
    }
  },
}
