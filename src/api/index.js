//当前这个模块，API统一管理
import requests from '@/api/request'
import mockAjax from '@/api/mockAjax'
//三级联动接口
//  /api/product/getBaseCategoryList
//  GET
//  无参
export const reqCategoryList =()=> requests({url:'/product/getBaseCategoryList','method':'get'});
//轮播图
export const reqGetBannerList =()=> mockAjax({url:'/banner','method':'get'});
// Floor
export const reqGetFloor =()=> mockAjax({url:'/floor','method':'get'});
//Search
export const reqGetSearchInfo =(params)=> requests({url:'/list','method':'post',data:params});

//{
//   "category3Id": "61",
//   "categoryName": "手机",
//   "keyword": "小米",
//   "order": "1:desc",
//   "pageNo": 1,
//   "pageSize": 10,
//   "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//   "trademark": "4:小米"
// }
