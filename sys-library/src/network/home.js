import {request} from "./index";

export function getHomeMultidata() {
  return request({
    url: '/api/profiles/test'
  })
}

//函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
//函数调用结束 -> 弹出函数栈(释放函数所有的变量)

// export function getHomeGoods(type, page) {
//   return request({
//     url: '/home/data',
//     params: {
//       type,
//       page
//     }
//   })
// }