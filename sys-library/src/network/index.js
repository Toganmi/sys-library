import axios from 'axios'

export function request(config) {  //外面传函数
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3002',

    timeout: 5000
  })
  // 2.axios的拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    // console.log(err);
  })
  //响应拦截
  instance.interceptors.response.use(res => {
    // console.log(res);
    return res.data  //记得返回
  }, err => {
<<<<<<< HEAD
    // console.log(err);
    return err
=======
    console.log(err);
>>>>>>> 2e5245f64712e129abcf89b268d3cd1a00d1b32f
  })

  // 3.发送真正的网络请求
  return instance(config)  //返回Promise
}