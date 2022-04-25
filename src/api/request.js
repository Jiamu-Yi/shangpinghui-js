import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const requests = axios.create({
  //基础路径
  baseURL:'/api',
//  超时时间
  timeout:5000,
});
// 请求拦截器
requests.interceptors.request.use((config)=>{
  // config 配置对象，对象里面有一个属性很重要，header请求头
  nprogress.start();
  return config;
})

//响应拦截器
requests.interceptors.response.use((res)=>{
  // 成功的回调函数，当服务器响应数据回来之后，响应拦截器可以监测到，可以做一些事
  nprogress.done();
  return res.data;
},() => {
  return Promise.reject(new Error('fail'));
})

export default requests;
